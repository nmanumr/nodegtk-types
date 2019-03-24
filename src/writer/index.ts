import * as fs from 'fs';

export class Writer{
    file: number;

    constructor(path){
        console.log(`Writing: ${path}`);
        this.file = fs.openSync(path, 'w');
    }

    appendText(text){
        fs.appendFileSync(this.file, text+'\n', 'utf8');
    }
}