import * as cheerio from 'cheerio';
import { ClassParser } from './classParser';

export class FunctionParser {

    classParser: ClassParser;
    $: CheerioStatic;
    
    parse(text) {
        this.classParser = new ClassParser(text);
        this.$ = cheerio.load(text);
        return this.classParser.parseMethods(this.$('#details>dl'));
    }
}