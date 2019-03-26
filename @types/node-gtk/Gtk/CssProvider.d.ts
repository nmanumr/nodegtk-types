import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface CssProvider extends GObject.Object, Gtk.StyleProvider { }

/**
  * Gtk.CssProvider is an object implementing the Gtk.StyleProvider interface.
It is able to parse CSS-like input in order to style widgets. 
  */
export declare class CssProvider {
  /**
    * Returns the provider containing the style settings used as a fallback for all widgets.
    * @returns The provider used for fallback styling. This memory is owned by GTK+, and you must not free it. 
    */
  static getDefault(): import('../Gtk').CssProvider;
  /**
    * Loads a theme from the usual theme paths
    * @param name A theme name
    * @param variant variant to load, for example, “dark”, or None for the default
    * @returns a Gtk.CssProvider with the theme loaded. This memory is owned by GTK+, and you must not free it. 
    */
  static getNamed(name: string, variant: string | null): import('../Gtk').CssProvider;
  /**
    * Returns a newly created Gtk.CssProvider.
    * @returns A new Gtk.CssProvider 
    */
  static new(): import('../Gtk').CssProvider;
  /**
    * Loads data into self, and by doing so clears any previously loaded information.
    * @param data CSS data loaded in memory
    * @returns True. The return value is deprecated and False will only be returned for backwards compatibility reasons if an error is not None and a loading error occurred. To track errors while loading CSS, connect to the Gtk.CssProvider ::parsing-error signal. 
    */
  loadFromData(data: Int8Array): boolean;
  /**
    * Loads the data contained in file into self, making it clear any previously loaded information.
    * @param file Gio.File pointing to a file to load
    * @returns True. The return value is deprecated and False will only be returned for backwards compatibility reasons if an error is not None and a loading error occurred. To track errors while loading CSS, connect to the Gtk.CssProvider ::parsing-error signal. 
    */
  loadFromFile(file: import('../Gio').File): boolean;
  /**
    * Loads the data contained in path into self, making it clear any previously loaded information.
    * @param path the path of a filename to load, in the GLib filename encoding
    * @returns True. The return value is deprecated and False will only be returned for backwards compatibility reasons if an error is not None and a loading error occurred. To track errors while loading CSS, connect to the Gtk.CssProvider ::parsing-error signal. 
    */
  loadFromPath(path: string): boolean;
  /**
    * Loads the data contained in the resource at resource_path into the Gtk.CssProvider, clearing any previously loaded information.
    * @param resourcePath a Gio.Resource resource path 
    */
  loadFromResource(resourcePath: string): void;
  /**
    * Converts the self into a string representation in CSS format.
    * @returns a new string representing the self. 
    */
  toString(): string;
}

