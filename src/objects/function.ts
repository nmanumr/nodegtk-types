import * as str from 'lodash/string';

export class FunctionArg {
    name: string;
    type: string;
    docStr: string;

    constructor(prop) {
        this.name = str.camelCase(prop.name);
        this.type = prop.type;
        this.docStr = prop.docStr;

        this.normalizeName();
        this.normaizeType();

    }

    normaizeType() {
        this.type = getTsType(this.type);
    }

    normalizeName() {
        if (nameReplaces[this.name]) {
            this.name = nameReplaces[this.name]
        }
    }
}

export function getTsType(type: string) {
    var typeMap = {
        'int': 'number',
        'bool': 'boolean',
        'object': 'Object',
        'float': 'number',
        'str': 'string',
        'bytes': 'Int8Array',
        'None': 'null'
    }
    if (Array.isArray(type)){
        type =  type.join(' | ');
    }
    if (typeMap[type]) {
        return typeMap[type];
    }
    else if (type.match(/\[\]$/) && typeMap[type.slice(0, -2)]) {
        return typeMap[type.slice(0, -2)] + '[]'
    }
    else if (type.match(/ \| /)) {
        var types = type.split(' | ');
        types = types.map((val) => getTsType(val))
        return types.join(' | ');
    }
    return type;
}

export const nameReplaces = {
    'in': 'In'
}