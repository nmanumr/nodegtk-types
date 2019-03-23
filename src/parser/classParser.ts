import * as cheerio from 'cheerio';
import { MethodArg, Method, Property, Klass, Function } from '../objects/class';


export class ClassParser {
    $: CheerioStatic;
    methodIdBase: string;

    constructor(text=''){
        this.$ = cheerio.load(text);
    }

    private getMethodArgs(argsEl) {
        var args = []
        if (this.$(argsEl).find('li').length) {
            this.$(argsEl).find('li').each((i, el) => {

                args.push(new MethodArg({
                    name: this.$(el).find('strong').text(),
                    type: this.$(el).find('a:first-of-type code').text(),
                    docStr: this.$(el).text().replace(/.* \(.*\) – /, '').replace(/\n/gm, ' ')
                }))
            })
        }
        else if (this.$(argsEl).children('strong').length) {
            var isList = !!this.$(argsEl).text().match(/^.* \(\[.*\]\) – /i);
            args.push(new MethodArg({
                name: this.$(argsEl).find('strong').text(),
                type: this.$(argsEl).find('a:first-of-type code').text() + (isList ? '[]' : ''),
                docStr: this.$(argsEl).text().replace(/.* \(.*\) – /, '').replace(/\n/gm, ' ')
            }))
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
                var listTypes = this.$(el).text().match(/\[.*\]/g) || [];
                var isList = !!this.$(el).text().match(/\(.*: .*,.*\)/g);

                this.$(el).find('.field-body a').each((i, _el) => {
                    var type = this.$(_el).text();

                    if (!isList) {
                        if (listTypes.indexOf(`[${type}]`) > -1)
                            returns.type.push(`${type}[]`);
                        else
                            returns.type.push(type);
                    }
                    else {
                        returns.type.push([type]);
                    }
                });
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

    public parseMethods(methodEls) {
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
                        methods.push({ name: name, isAttr: true });
                    }
                    else if (isFunction) {
                        var id = this.$(el).children('dt').attr('id');
                        methods.push(new Function({
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

        this.$('#fields table:last-of-type tbody tr').each((i, el) => {
            attrs.push(new Property({
                deprecated: !!this.$(el).find('td:nth-child(4)').text().match('deprecated'),
                name: this.$(el).find('td:nth-child(1)').text(),
                type: this.$(el).find('td:nth-child(2) a code').text(),
                flags: this.parseFlags(this.$(el).find('td:nth-child(3)').text()),
                docStr: this.$(el).find('td:nth-child(4)').text()
            }))
        })

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

        return new Klass({
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