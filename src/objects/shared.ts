export class BaseObject{
    name: string;
    docStr: string
    deprecationNote: string;
    versionNote: string;

    constructor(props) {
        this.docStr = props.docStr;
        this.deprecationNote = props.deprecationNote;
        this.versionNote = props.versionNote;
        this.name = props.name;
    }
}