import { Parser } from "./parser";
// import { ClassParser } from "./parser/classParser";
// import * as fs from 'fs';

var parser = new Parser();
parser.parseLib('GLib-2.0', '../typings');
// var text = fs.readFileSync('./pgi-docs/GLib-2.0/classes/IOChannel.html').toString();
// var x = new ClassParser();
// x.parse(text);
