import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { Lib } from '../objects/lib';
import { FunctionParser } from './functionParser';
import { EnumParser } from './enumParser';
import { ConstParser } from './constParser';
import { ClassParser } from './classParser';
import { Writer } from '../writer';

export class Parser {
    private basePath: string;
    private $: CheerioStatic;

    private parsersDict = {
        'functions': FunctionParser,
        'constants': ConstParser,
        'enums': EnumParser,
        'class': ClassParser
    }

    private readFile(path): string {
        console.log(`Parsing: ${path}`);
        return fs.readFileSync(path).toString();
    }

    private parse(filepath, type) {
        var text = this.readFile(filepath);
        var parser = new this.parsersDict[type]();
        return parser.parse(text);
    }

    private write(outPath, lib, filePath, type) {
        var parsed = this.parse(filePath, type);
        var writer = new Writer(path.join(outPath, lib, type + '.d.ts'));
        for (var el of parsed) {
            el.write(writer);
        }
    }

    private parseClasses(outPath, lib, filePath){
        var text = this.readFile(filePath);
        var $ = cheerio.load(text);
        $('.toctree-wrapper li a').each((_, el)=>{
            var clsPath = path.join(this.basePath, $(el).attr('href'));
            var parsed = this.parse(clsPath, 'class');
        })
    }

    parseLib(name, outPath): Lib {
        var dir = path.join(outPath, name);
        !fs.existsSync(dir) && fs.mkdirSync(dir);

        this.basePath = `./pgi-docs/${name}`;
        var indexText = this.readFile(this.basePath + '/index.html');
        this.$ = cheerio.load(indexText);

        var lib = new Lib(name);

        this.$('#api a').each((_, el) => {
            var text = this.$(el).text();
            var filePath = `${this.basePath}/${this.$(el).attr('href')}`;

            switch (text) {
                case 'Functions':
                    // this.write(outPath, name, filePath, 'functions');
                    break;

                case 'Classes':
                case 'Structures':
                case 'Unions':
                    this.parseClasses(outPath, name, filePath);
                    break;

                case 'Flags':
                case 'Enums':
                    // this.write(outPath, name, filePath, 'enums');
                    break;

                case 'Constants':
                    // this.write(outPath, name, filePath, 'constants');
                    break;
            }
        })

        return lib;
    }
}