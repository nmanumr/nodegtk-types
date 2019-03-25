import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { Lib } from '../objects/lib';
import { FunctionParser } from './functionParser';
import { EnumParser } from './enumParser';
import { ConstParser } from './constParser';
import { ClassParser, InterfaceParser } from './classParser';
import { Writer } from '../writer';
import { Klass } from '../objects/class';

export class Parser {
    private basePath: string;
    private $: CheerioStatic;

    private parsersDict = {
        'functions': FunctionParser,
        'constants': ConstParser,
        'enums': EnumParser,
        'classes': ClassParser,
        'structures': ClassParser,
        'unions': ClassParser,
        'interfaces': InterfaceParser,
        'class structures': ClassParser,
        'interface structures': ClassParser,
    }

    private readFile(path): string {
        console.log(`Parsing: ${path}`);
        return fs.readFileSync(path).toString();
    }

    private parseFile(filepath, type) {
        var text = this.readFile(filepath);
        var parser = new this.parsersDict[type]();
        return parser.parse(text);
    }

    private write(outPath, lib, filePath, type) {
        var parsed: any = this.parseFile(filePath, type);
        var writer = new Writer(path.join(outPath, lib, type + '.d.ts'));
        for (var el of parsed) {
            el.write(writer);
        }
    }

    private parseClasses(outPath, lib, filePath, type) {
        var text = this.readFile(filePath);
        var $ = cheerio.load(text);

        $('.toctree-wrapper li a').each((_, el) => {
            var clsPath = path.join(this.basePath, $(el).attr('href'));
            var parsed: Klass = this.parseFile(clsPath, type);
            var name = parsed.name;
            name = name.split('.')[name.split('.').length - 1]

            var writer = new Writer(path.join(outPath, lib, `${name}.d.ts`));
            parsed.write(writer);
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
                    this.write(outPath, name, filePath, 'functions');
                    break;

                case 'Classes':
                case 'Structures':
                case 'Unions':
                case 'Interfaces':
                    this.parseClasses(outPath, name, filePath, text.toLowerCase());
                    break;

                case 'Flags':
                case 'Enums':
                    this.write(outPath, name, filePath, 'enums');
                    break;

                case 'Constants':
                    this.write(outPath, name, filePath, 'constants');
                    break;
            }
        })

        return lib;
    }
}