import * as Atk from './Atk';
import * as Gtk from './Gtk';
import * as Gdk from './Atk';
import * as Gio from './Atk';
import * as GLib from './GLib';
import * as xlib from './xlib';
import * as Pango from './Pango';
import * as GModule from './GModule';
import * as GObject from './GObject';
import * as GdkPixbuf from './GdkPixbuf';

export import Atk = Atk;
export import Gtk = Gtk;
export import Gdk = Gdk;
export import Gio = Gio;
export import GLib = GLib;
export import xlib = xlib;
export import Pango = Pango;
export import GModule = GModule;
export import GObject = GObject;
export import GdkPixbuf = GdkPixbuf;

interface GiRepositoryMap {
    'Gtk': typeof Gtk;
    'Atk': typeof Atk;
    'Gdk': typeof Gdk;
    'Gio': typeof Gio;
    'GLib': typeof GLib;
    'xlib': typeof xlib;
    'Pango': typeof Pango;
    'GModule': typeof GModule;
    'GObject': typeof GObject;
    'GdkPixbuf': typeof GdkPixbuf;
}

/**
 * Requires a module. Automatically loads dependencies.
 * @param namespace namespace to load
 * @param version version to load (null for latest)
 */
export declare function require<K extends keyof GiRepositoryMap>(namespace: K, version?: string): GiRepositoryMap[K];

/** Prepends a path to GObject-Introspection search path (for typelibs) */
export declare function prependLibraryPath(path: string): void;

/** Prepends a path to GObject-Introspection library path (for shared libraries) */
export declare function prependSearchPath(path: string): void;
