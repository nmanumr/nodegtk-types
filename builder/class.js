const str = require('lodash/string');

module.exports.Klass = class Klass {
    constructor(prop){
        this.name = prop.name;
        this.docStr = prop.docStr;
        this.bases = prop.bases;
        this.isAbstract = prop.isAbstract;
        this.attrs = prop.attrs;
    }
}

class ClassAttr {
    constructor(prop) {
        this.name = str.camelCase(prop.name);
        this.docStr = prop.docStr;
        this.docStr = prop.docStr;
        this.deprecationNote = prop.deprecated;
        this.versionNote = prop.added;
    }
}

module.exports.Method = class Method extends ClassAttr {
    constructor(prop) {
        super(prop);

        this.args = prop.args;
        this.returnType = prop.returns.type;
        this.returnDoc = prop.returns.docStr;
        this.isClassMethod = prop.isClassMethod;
    }
}

module.exports.Property = class Property extends ClassAttr {
    constructor(prop) {
        prop.deprecated = prop.deprecated ? 'deprecated' : null;
        super(prop);

        this.type = prop.type;
        this.flags = prop.flags;
        this.isReadonly = prop.flags.reandonly;
    }
}

module.exports.MethodArg = class MethodArg {
    constructor(prop) {
        this.name = str.camelCase(prop.name);
        this.type = prop.type;
        this.docStr = prop.docStr;
    }
}

