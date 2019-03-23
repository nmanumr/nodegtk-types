const cheerio = require('cheerio');
const klass = require('./class');

module.exports = class ClassParser {
    constructor(text) {
        this.$ = cheerio.load(text);
        this.methodIdBase = this.$('.class>dt').attr('id');
    }

    _getName(methodNode) {
        var text = this.$(methodNode).children('td:last-child').text();
        return text.split(' (')[0];
    }

    _isClassMethod(methodNode) {
        var text = this.$(methodNode).children('td:first-child').text();
        return text.trim() == 'class';
    }

    _getMethodArgs(argsEl) {
        var args = []
        if (this.$(argsEl).find('li').length) {
            this.$(argsEl).find('li').each((i, el) => {

                args.push(new klass.MethodArg({
                    name: this.$(el).find('strong').text(),
                    type: this.$(el).find('a:first-of-type code').text(),
                    docStr: this.$(el).text().replace(/.* \(.*\) – /, '').replace(/\n/gm, ' ')
                }))
            })
        }
        else if (this.$(argsEl).children('strong').length) {
            var isList = !!this.$(argsEl).text().match(/^.* \(\[.*\]\) – /i);
            args.push(new klass.MethodArg({
                name: this.$(argsEl).find('strong').text(),
                type: this.$(argsEl).find('a:first-of-type code').text() + (isList ? '[]' : ''),
                docStr: this.$(argsEl).text().replace(/.* \(.*\) – /, '').replace(/\n/gm, ' ')
            }))
        }

        return args;
    }

    _getMethodDocStr(methodId) {
        return this.$(`[id="${methodId}"]+dd>p:first-of-type`).text().replace(/\n/gm, ' ');
    }

    _getVersionInfo(methodId) {
        return {
            added: this.$(`[id="${methodId}"]+dd>.versionadded`).text().replace(/\n/gm, ' '),
            deprecated: this.$(`[id="${methodId}"]+dd>.deprecated`).text().replace(/\n/gm, ' '),
        };

    }

    _getMethodReturn(els) {
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

    _getMethodDetails(methodName) {
        var methodId = this.methodIdBase + '.' + methodName;
        var detailsEl = this.$(`[id="${methodId}"]+dd table:first-of-type tbody tr`);

        return {
            args: this._getMethodArgs(this.$(detailsEl[0]).children('.field-body')),
            returns: this._getMethodReturn(detailsEl),
            docStr: this._getMethodDocStr(methodId),
            ...this._getVersionInfo(methodId)
        }

    }

    _parseFlags(flagStr) {
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

    _parseAttr() {
        var attrs = [];
        this.$('.class>dd>dl').each((i, el) => {
            var isVirtual = this.$(el).find('.property').text().trim() == 'virtual';

            if (!isVirtual) {

                var name = this.$(el).find('.descname').text();

                var isAttr = this.$(el).hasClass('attribute');
                if (isAttr) {
                    attrs.push({ name: name, isAttr: true });
                }
                else {
                    var isClassMethod = this.$(el).hasClass('classmethod');

                    if (name) {
                        attrs.push(new klass.Method({
                            name: name,
                            isClassMethod: isClassMethod,
                            ...this._getMethodDetails(name)
                        }))
                    }
                }
            }
        });

        this.$('#properties table:last-of-type tbody tr').each((i, el) => {
            attrs.push(new klass.Property({
                deprecated: !!this.$(el).find('td:nth-child(4)').text().match('deprecated'),
                name: this.$(el).find('td:nth-child(1)').text(),
                type: this.$(el).find('td:nth-child(2) a code').text(),
                flags: this._parseFlags(this.$(el).find('td:nth-child(3)').text()),
                docStr: this.$(el).find('td:nth-child(4)').text()
            }))
        })

        return attrs;
    }

    _parseClass(){
        var attrs = this._parseAttr();
        var bases = [], isAbstract;
        var name = this.$('#class-details>dl>dt').attr('id');
        this.$('#class-details>dl>dd>table:first-child>tbody>tr').each((i, el) => {
            var type = this.$(el).find('th').text();
            if(type == 'Bases:'){
                this.$(el).find('td>a>code').each((i, base)=>{
                    bases.push(this.$(base).text());
                });
            }
            else if(type == 'Abstract:'){
                var isAbstract = this.$(el).find('td').text() != 'No';
            }
        });
        var docStr = this.$('#class-details>dl>dd>p:first-of-type').text();

        return new klass.Klass({
            name: name,
            bases: bases,
            isAbstract: isAbstract,
            docStr: docStr,
            attrs: attrs
        })
    }

    parse(){
        return this._parseClass();
    }
}