import { BaseObject } from "./shared";

export class Enum extends BaseObject {
    values: Value[];

    constructor(props) {
        super(props);
        this.values = props.values;
    }
}

export class Flug extends Enum { }

export class Value extends BaseObject {
    value: string;

    constructor(props) {
        super(props);

        this.value = props.value;
    }
}