import * as str from 'lodash/string'
import { FunctionArg, getTsType } from './function';
import { BaseObject } from './shared';
import { Writer } from '../writer';

export class Klass extends BaseObject {
    bases: string[];
    isAbstract: boolean;
    attrs: Method[] | Property[];

    constructor(prop) {
        super(prop);

        this.bases = prop.bases;
        this.isAbstract = prop.isAbstract;
        this.attrs = prop.attrs;
    }
}

export abstract class ClassAttr extends BaseObject {

    constructor(prop) {
        super(prop);
        this.name = str.camelCase(prop.name);
    }
}

export class Function extends ClassAttr {

    args: FunctionArg[];
    argsStr: string;
    returnType: string;
    returnDoc: string;
    prefixStr = 'export declare function ';

    constructor(prop) {
        super(prop);

        this.args = prop.args || [];
        this.returnType = prop.returns.type;
        this.returnDoc = prop.returns.docStr || '';
        this.returnDoc = this.returnDoc.replace(/\n/g, ' ');

        this.normalizeReturnType();
        this.appendDocStr();
    }

    write(writer?: Writer) {
        var fnStr = this.name + '(';

        if (this.args.length) {
            for (var param of this.args) {
                fnStr += `${param.name}: ${param.type}, `;
            }
            fnStr = fnStr.slice(0, -2);
        }

        if (this.returnType)
            fnStr += `): ${this.returnType};`
        else
            fnStr += `);`;
        var str = `${this.writeDocLn()}${this.prefixStr}${fnStr}`;

        if (writer) writer.appendText(str);
        return str;
    }

    normalizeReturnType() {
        if (this.returnType.length == 0) {
            this.returnType = 'void';
        }
        else if (this.returnType.length == 1) {
            this.returnType = getTsType(this.returnType[0])
        }
        else {
            var returnType = '[';
            for (var type of this.returnType) {
                returnType += getTsType(type) + ', ';
            }
            this.returnType = returnType.slice(0, -2) + ']'
        }
    }

    appendDocStr() {
        for (var param of this.args) {
            if (param.docStr)
                this.docStr += `\n  * @param ${param.name} ${param.docStr}`;
        }
        if (this.returnDoc)
            this.docStr += `\n  * @returns ${this.returnDoc}`;
    }
}

export class Method extends Function {
    isClassMethod: boolean;
    prefixStr = '';

    constructor(prop) {
        super(prop);
        this.isClassMethod = prop.isClassMethod;

        if (this.isClassMethod) {
            this.prefixStr = 'static ';
        }
    }
}

export class Property extends ClassAttr {
    type: string;
    flags: string[];
    isReadonly: boolean;

    constructor(prop) {
        prop.deprecated = prop.deprecated ? 'deprecated' : null;
        super(prop);

        this.type = prop.type;
        this.flags = prop.flags;
        this.isReadonly = prop.flags.reandonly;
    }
}

export class MethodArg extends FunctionArg { };
