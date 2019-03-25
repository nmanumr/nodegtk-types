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
    type = type.replace(/\n/g, '');
    if (typeMap[type]) {
        return typeMap[type];
    }
    else if (type.match(/\[|\]/) && typeMap[type.replace(/\[|\]/g, '')]) {
        return typeMap[type.replace(/\[|\]/g, '')] + '[]'
    }
    else if (type.match(/ \| /)) {
        var types = type.split(' | ');
        types = types.map((val) => getTsType(val))
        return types.join(' | ');
    }
    else if(type.split('.').length > 1){
        var [lib, ...x] = type.split('.');
        return `import('../${lib}').${x.join('.')}`;
    }
    return type;
}

export const nameReplaces = {
    'in': 'In'
}