import { BaseObject } from "./shared";
import { Writer } from "../writer";

export class Constant extends BaseObject {
    value: any;

    constructor(props) {
        props.name = props.name;

        super(props);
        this.value = props.value;
    }

    write(writer?: Writer) {
        var x = `${this.writeDocLn()}export declare const ${this.name} = ${this.value};`

        if (writer) writer.appendText(x);
        return x;
    }
}