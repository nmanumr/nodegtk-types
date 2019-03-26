import * as GObject from '../GObject';
export declare interface IOModule extends GObject.TypeModule { }

/**
  * Provides an interface and default functions for loading and unloading
modules. This is used internally to make GIO extensible, but can also
be used by others to implement module loading. 
  */
export declare class IOModule {
  /**
    * Creates a new Gio.IOModule that will load the specific shared library when in use.
    * @param filename filename of the shared library module.
    * @returns a Gio.IOModule from given filename, or None on error. 
    */
  static new(filename: string): import('../Gio').IOModule;
  /**
    * Optional API for GIO modules to implement.
    * @returns A None-terminated array of strings, listing the supported extension points of the module. The array must be suitable for freeing with GLib.strfreev(). 
    */
  static query(): string[];
  /**
    * Required API for GIO modules to implement. 
    */
  load(): void;
  /**
    * Required API for GIO modules to implement. 
    */
  unload(): void;
}

