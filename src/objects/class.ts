import * as str from 'lodash/string'
import { FunctionArg } from './function';
import { BaseObject } from './shared';

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
    returnType: string;
    returnDoc: string;

    constructor(prop) {
        super(prop);

        this.args = prop.args;
        this.returnType = prop.returns.type;
        this.returnDoc = prop.returns.docStr;
    }
}

export class Method extends Function {
    isClassMethod: boolean;

    constructor(prop) {
        super(prop);
        this.isClassMethod = prop.isClassMethod;
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
