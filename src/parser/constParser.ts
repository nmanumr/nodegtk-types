import * as cheerio from 'cheerio';
import { Constant } from '../objects/const';

export class ConstParser {
    $: CheerioStatic;

    parse(text): Constant[] {
        var consts = [];
        this.$ = cheerio.load(text);

        this.$('#details>dl').each((_, valueEL) => {
            var val = this.$(valueEL).find('dt>.property').text().replace('=', '').trim()

            if(!val.match(/<\w+ .*>/) && !val.match(/\(|\)/)){
                consts.push(new Constant({
                    value: val,
                    name: this.$(valueEL).find('dt>.descname').text(),
                    docStr: this.$(valueEL).find('dd').text().replace(/\n/g, ' ')
                }));
            }
        });

        return consts;
    }
}