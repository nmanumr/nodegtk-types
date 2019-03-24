export class BaseObject {
    name: string;
    docStr: string
    deprecationNote: string;
    versionNote: string;

    constructor(props) {
        this.docStr = props.docStr;
        this.deprecationNote = props.deprecationNote;
        this.versionNote = props.versionNote;
        this.name = props.name;

        this.buildDocStr();
    }

    buildDocStr() {
        var docsStr = '';
        docsStr += (this.docStr ? this.docStr : '');
        docsStr += (this.deprecationNote ? `\n  * ${this.deprecationNote}` : '');
        docsStr += (this.versionNote ? `\n  * ${this.versionNote}` : '');
        this.docStr = docsStr;
    }

    writeDocLn() {
        if(this.docStr)
            return `/**\n  * ${this.docStr} \n  */\n`;
        return '';
    }
}