import * as fs from 'fs';

export class Writer{
    file: number;

    constructor(path){
        console.log(`Writing: ${path}`);
        this.file = fs.openSync(path, 'a');
    }

    appendText(text){
        fs.appendFileSync(this.file, text+'\n', 'utf8');
    }
}