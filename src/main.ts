import { ClassParser } from './parser/classParser';
import { FunctionParser } from './parser/functionParser';

import * as fs from 'fs';

var classText = fs.readFileSync('./pgi-docs/Gtk-3.0/classes/AppChooserDialog.html');
var fnText = fs.readFileSync('./pgi-docs/GLib-2.0/functions.html');

var classparser = new ClassParser();
var fnparser = new FunctionParser();

// console.log(JSON.stringify(classparser.parse(classText.toString())));
console.log(JSON.stringify(fnparser.parse(fnText.toString())));