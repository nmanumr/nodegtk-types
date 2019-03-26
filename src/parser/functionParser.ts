import * as cheerio from 'cheerio';
import { Function, Callback } from '../objects/class'
import { ClassParser } from './classParser';

export class FunctionParser {

    classParser: ClassParser;
    $: CheerioStatic;
    type = Function;

    parse(text): Function[] {
        this.classParser = new ClassParser(text);
        this.$ = cheerio.load(text);
        return this.classParser.parseMethods(this.$('#details>dl'), this.type);
    }
}

export class CallbackParser extends FunctionParser {
    type = Callback;
}