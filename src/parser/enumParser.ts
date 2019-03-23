import * as cheerio from 'cheerio';
import { Enum, Value } from '../objects/enum';

export class EnumParser {
    $: CheerioStatic;

    private getValue(valueEl){
        return new Value({
            name: this.$(valueEl).children('dt').children('.descname').text(),
            value: this.$(valueEl).children('dt').find('em.property').text().replace('=', '').trim(),
            docStr: this.$(valueEl).children('dd').children('p').text().replace(/\n/gm, ' '),
            versionNote: this.$(valueEl).children('dd').children('.versionadded').text().replace(/\n/gm, ' '),
            deprecationNote: this.$(valueEl).children('dd').children('.deprecated').text().replace(/\n/gm, ' ')
        })
    }

    private paseEnum(enumEl) {
        var docStr, values = [];
        var enumBody = this.$(enumEl).children('dd');

        this.$(enumBody).children('p').each((i, el) => {
            var isBasesP = !!this.$(el).text().match(/Bases:/i);
            if (!isBasesP && i == 0) 
                docStr = this.$(el).text().replace(/\n/gm, ' ')
            else if (i == 1) 
                docStr = this.$(el).text().replace(/\n/gm, ' ')
        })

        this.$(enumBody).find('dl.attribute').each((_, el)=>{
            values.push(this.getValue(el));
        });

        return new Enum({
            name: this.$(enumEl).children('dt').children('.descname').text(),
            docStr: docStr,
            versionNote: this.$(enumBody).children('.versionadded').text().replace(/\n/gm, ' '),
            deprecationNote: this.$(enumBody).children('.deprecated').text().replace(/\n/gm, ' '),
            values: values
        })
    }

    parse(text): Enum[] {
        var enums = [];
        this.$ = cheerio.load(text);

        this.$('#details>dl').each((_, el) => {
            enums.push(this.paseEnum(el));
        });

        return enums;
    }
}