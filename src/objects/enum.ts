import { BaseObject } from "./shared";
import { Writer } from "../writer";

export class Enum extends BaseObject {
    values: Value[];

    constructor(props) {
        super(props);
        this.values = props.values;
    }

    write(writer?: Writer) {
        var str = `${this.writeDocLn()}export declare enum ${this.name} {\n`
        for (var val of this.values) {
            str += val.write();
        }

        str += '}';

        if(writer) writer.appendText(str);
        return str;
    }
}

export class Value extends BaseObject {
    value: string;

    constructor(props) {
        super(props);

        this.value = props.value;
    }

    writeDocLn() {
        if (this.docStr)
            return `/** ${this.docStr} */\n`;
        return '';
    }

    write() {
        if (this.name.match(/^\d/))
            return `${this.writeDocLn()}'${this.name}' = ${this.value},\n`
        else
            return `${this.writeDocLn()}${this.name} = ${this.value},\n`
    }
}