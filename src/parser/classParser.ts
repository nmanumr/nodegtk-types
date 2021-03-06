import * as cheerio from 'cheerio';
import { MethodArg, Method, Property, Klass, Function, ClassAttr, Interface } from '../objects/class';


export class ClassParser {
    $: CheerioStatic;
    methodIdBase: string;
    type = Klass;

    constructor(text = '') {
        this.$ = cheerio.load(text);
    }

    private getMethodArg(el) {
        var type: any = this.$(el).text().match(/(?<=.* \().*(?=\) – )/);
        type = type ? type[0] : '';
        var isList = type.match(/^.* \(\[.*\]\) – /i);

        return new MethodArg({
            name: this.$(el).find('strong').text(),
            type: type.replace('[', '').replace(']', '').replace(' or ', ' | ') + (isList ? '[]' : ''),
            docStr: this.$(el).text().replace(/.* \(.*\) – /, '').replace(/\n/gm, ' ')
        })
    }

    private getMethodArgs(argsEl) {
        var args = []
        if (this.$(argsEl).find('li').length) {
            this.$(argsEl).find('li').each((i, el) => {
                args.push(this.getMethodArg(el))
            })
        }
        else if (this.$(argsEl).children('strong').length) {
            args.push(this.getMethodArg(argsEl));
        }

        return args;
    }

    private getMethodDocStr(methodId) {
        return this.$(`[id="${methodId}"]+dd>p:first-of-type`).text().replace(/\n/gm, ' ');
    }

    private getVersionInfo(methodId) {
        return {
            added: this.$(`[id="${methodId}"]+dd>.versionadded`).text().replace(/\n/gm, ' ').trim(),
            deprecated: this.$(`[id="${methodId}"]+dd>.deprecated`).text().replace(/\n/gm, ' ').trim(),
        };

    }

    private getMethodReturn(els) {
        var returns = {
            docStr: null,
            type: []
        }

        this.$(els).each((i, el) => {
            var text = this.$(el).children('.field-name').text().trim();

            if (text == 'Returns:') {
                returns.docStr = this.$(el).children('.field-body').text().trim().replace(/\n\n/g, '\n');
            }
            else if (text == 'Return type:') {
                var text  = this.$(el).find('.field-body').text();
                text = text.replace(/\s*\w+:\s*/g, '').replace(/\(|\)/g, '');
                var types = text.split(',').map((val)=>val.split(' or '));

                returns.type = types;
            }
        })

        return returns;
    }

    private getMethodDetails(methodId) {
        var detailsEl = this.$(`[id="${methodId}"]+dd table:first-of-type tbody tr`);

        return {
            args: this.getMethodArgs(this.$(detailsEl[0]).children('.field-body')),
            returns: this.getMethodReturn(detailsEl),
            docStr: this.getMethodDocStr(methodId),
            ...this.getVersionInfo(methodId)
        }

    }

    private parseFlags(flagStr) {
        var readable = !!flagStr.match('r');
        var writeable = !!flagStr.match('w');
        var constructable = !!flagStr.match('c');
        var en = !!flagStr.match('en');
        return {
            readable: readable,
            writeable: writeable,
            constructable: constructable,
            en: en,
            readonly: readable && !writeable && !constructable
        }
    }

    public parseMethods(methodEls, type = Function) {
        var methods = []
        this.$(methodEls).each((i, el) => {
            var isVirtual = this.$(el).find('.property').text().trim() == 'virtual';

            if (!isVirtual) {

                var name = this.$(el).find('.descname').text();

                var isAttr = this.$(el).hasClass('attribute');
                var isFunction = this.$(el).hasClass('function');
                var isClassMethod = this.$(el).hasClass('classmethod');

                if (name) {
                    if (isAttr) {
                        methods.push(new Property({
                            name: name,
                            flags: {}
                        }));
                    }
                    else if (isFunction) {
                        var id = this.$(el).children('dt').attr('id');
                        methods.push(new type({
                            name: name,
                            ...this.getMethodDetails(id)
                        }))
                    }
                    else {
                        var id = this.methodIdBase + '.' + name;
                        methods.push(new Method({
                            name: name,
                            isClassMethod: isClassMethod,
                            ...this.getMethodDetails(id)
                        }))
                    }
                }
            }
        })

        return methods;
    }

    private parseAttr() {
        var attrs = this.parseMethods(this.$('.class>dd>dl'));

        this.$('#properties table:last-of-type tbody tr').each((i, el) => {
            attrs.push(new Property({
                deprecated: !!this.$(el).find('td:nth-child(4)').text().match('deprecated'),
                name: this.$(el).find('td:nth-child(1)').text(),
                type: this.$(el).find('td:nth-child(2) a code').text(),
                flags: this.parseFlags(this.$(el).find('td:nth-child(3)').text()),
                docStr: this.$(el).find('td:nth-child(4)').text()
            }))
        })

        // this.$('#fields table:last-of-type tbody tr').each((i, el) => {
        //     attrs.push(new Property({
        //         deprecated: !!this.$(el).find('td:nth-child(4)').text().match('deprecated'),
        //         name: this.$(el).find('td:nth-child(1)').text(),
        //         type: this.$(el).find('td:nth-child(2) a code').text(),
        //         flags: this.parseFlags(this.$(el).find('td:nth-child(3)').text()),
        //         docStr: this.$(el).find('td:nth-child(4)').text()
        //     }))
        // })

        return attrs;
    }

    private parseClass() {
        var attrs = this.parseAttr();
        var bases = [], isAbstract;
        var detailId = this.$('#class-details').length ? '#class-details' : '#details';
        var name = this.$(`${detailId}>dl>dt`).attr('id');

        this.$(`${detailId}>dl>dd>table:first-child>tbody>tr`).each((i, el) => {
            var type = this.$(el).find('th').text();
            if (type == 'Bases:') {
                this.$(el).find('td>a>code').each((i, base) => {
                    bases.push(this.$(base).text());
                });
            }
            else if (type == 'Abstract:') {
                isAbstract = this.$(el).find('td').text() != 'No';
            }
        });

        var docStr = this.$(`${detailId}>dl>dd>p:first-of-type`).text();

        return new this.type({
            name: name,
            bases: bases,
            isAbstract: isAbstract,
            docStr: docStr,
            attrs: attrs
        })
    }

    parse(text: string) {
        this.$ = cheerio.load(text);
        this.methodIdBase = this.$('.class>dt').attr('id');
        return this.parseClass();
    }
}

export class InterfaceParser extends ClassParser{
    type = Interface;
}