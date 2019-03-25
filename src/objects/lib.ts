import { Writer } from "../writer";

export class Lib {
    name: string;
    exportables: Exportable[] = [];

    constructor(name) {
        this.name = name;
    }

    addExportable(exportable: Exportable) {
        this.exportables.push(exportable);
    }

    addClass(klass: Exportable) {
        this.exportables.push(klass);
    }

    writeIndex(writer: Writer){
        for(var fn of this.exportables){
            writer.appendText(`export { ${fn.name} } from './${fn.fileName.split('.')[0]}';`);
        }
    }
}

export class Exportable {
    name: string;
    fileName: string;
}