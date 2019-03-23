import * as fs from 'fs';
import * as cheerio from 'cheerio';
import { Lib } from '../objects/lib';
import { FunctionParser } from './functionParser';
import { EnumParser } from './enumParser';
import { ConstParser } from './constParser';

export class Parser {
    basePath: string;
    $: CheerioStatic;

    readFile(path): string {
        return fs.readFileSync(path).toString();
    }

    parseLib(name): Lib {
        this.basePath = `./pgi-docs/${name}`;
        var indexText = this.readFile(this.basePath + '/index.html');
        this.$ = cheerio.load(indexText);

        var lib = new Lib(name);

        this.$('#api a').each((_, el) => {
            var text = this.$(el).text();
            var filePath = `${this.basePath}/${this.$(el).attr('href')}`;

            var fnParser = new FunctionParser();
            var enumParser = new EnumParser();
            var constsParser = new ConstParser();

            switch (text) {
                case 'Functions':
                    var fnText = this.readFile(filePath);
                    lib.addFunctions(fnParser.parse(fnText));
                    break;

                case 'Classes':
                case 'Structures':
                case 'Unions':
                    console.log(filePath);
                    break;

                case 'Flags':
                case 'Enums':
                    var fnText = this.readFile(filePath);
                    lib.addEnums(enumParser.parse(fnText));
                    break;

                case 'Constants':
                    var fnText = this.readFile(filePath);
                    lib.addConsts(constsParser.parse(fnText));
                    break;
            }
        })

        return lib;
    }
}