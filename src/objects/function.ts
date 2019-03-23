import * as str from 'lodash/string';

export class FunctionArg {
    name: string;
    type: string;
    docStr: string;

    constructor(prop) {
        this.name = str.camelCase(prop.name);
        this.type = prop.type;
        this.docStr = prop.docStr;
    }
}