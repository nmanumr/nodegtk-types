import * as cheerio from 'cheerio';
import { Function } from '../objects/class'
import { ClassParser } from './classParser';

export class FunctionParser {

    classParser: ClassParser;
    $: CheerioStatic;
    
    parse(text): Function[] {
        this.classParser = new ClassParser(text);
        this.$ = cheerio.load(text);
        return this.classParser.parseMethods(this.$('#details>dl'));
    }
}