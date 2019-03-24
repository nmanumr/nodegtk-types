import { Function, Klass } from './class'
import { Enum } from './enum';
import { Constant } from './const';

export class Lib {
    name: string;
    fns: Function[] = [];
    klasses: Klass[] = [];
    enums: Enum[] = [];
    consts: Constant[] = [];

    constructor(name) {
        this.name = name;
    }

    addFunctions(fns: Function[]) {
        this.fns = this.fns.concat(fns);
    }

    addClass(klass: Klass) {
        this.klasses.push(klass);
    }

    addEnums(enums: Enum[]) {
        this.enums = this.enums.concat(enums);
    }

    addConsts(consts: Constant[]) {
        this.consts = this.consts.concat(consts);
    }
}