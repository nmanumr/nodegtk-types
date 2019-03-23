const MethodParser = require('./classParser.js');
const fs = require('fs');

var text = fs.readFileSync('./pgi-docs/Gtk-3.0/classes/AppChooserDialog.html');


var methodparser = new MethodParser(text);

console.log(JSON.stringify(methodparser.parse()));