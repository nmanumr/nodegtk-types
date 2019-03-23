import { BaseObject } from "./shared";

export class Constant extends BaseObject{
    value: any;

    constructor(props){
        props.name = props.name.toUpperCase();

        super(props);
        this.value = props.value;
    }
}