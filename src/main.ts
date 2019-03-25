import { Parser } from "./parser";
import { performance } from 'perf_hooks';
import * as prettyMs from 'pretty-ms';

var t1 = performance.now();

var parser = new Parser();
var libs = [
    'GLib-2.0',
    'GObject-2.0',
    "Pango-1.0",
    "xlib-2.0",
    "Gio-2.0",
    "GModule-2.0",
    "GdkPixbuf-2.0",
    "Atk-1.0",
    "Gdk-3.0",
    'GIRepository-2.0',
    'Gtk-3.0'
]

for (var lib of libs) {
    parser.parseLib(lib, './@types/node-gtk/');
}

var t2 = performance.now();

console.log(`Generated declarations in ${prettyMs(t2 - t1)}`);