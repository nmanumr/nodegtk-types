import * as GObject from '../GObject';
export declare interface Vfs extends GObject.Object { }

/**
  * Entry point for using GIO functionality. 
  */
export declare class Vfs {
  /**
    * Gets the default Gio.Vfs for the system.
    * @returns a Gio.Vfs. 
    */
  static getDefault(): import('../Gio').Vfs;
  /**
    * Gets the local Gio.Vfs for the system.
    * @returns a Gio.Vfs. 
    */
  static getLocal(): import('../Gio').Vfs;
  /**
    * Gets a Gio.File for path.
    * @param path a string containing a VFS path.
    * @returns a Gio.File. Free the returned object with GObject.Object.unref(). 
    */
  getFileForPath(path: string): import('../Gio').File;
  /**
    * Gets a Gio.File for uri.
    * @param uri a string containing a URI
    * @returns a Gio.File. Free the returned object with GObject.Object.unref(). 
    */
  getFileForUri(uri: string): import('../Gio').File;
  /**
    * Gets a list of URI schemes supported by self.
    * @returns a None-terminated array of strings. The returned array belongs to GIO and must not be freed or modified. 
    */
  getSupportedUriSchemes(): string[];
  /**
    * Checks if the VFS is active.
    * @returns True if construction of the self was successful and it is now active. 
    */
  isActive(): boolean;
  /**
    * This operation never fails, but the returned object might not support any I/O operations if the parse_name cannot be parsed by the Gio.Vfs module.
    * @param parseName a string to be parsed by the VFS module.
    * @returns a Gio.File for the given parse_name. Free the returned object with GObject.Object.unref(). 
    */
  parseName(parseName: string): import('../Gio').File;
  /**
    * Registers uri_func and parse_name_func as the Gio.File URI and parse name lookup functions for URIs with a scheme matching scheme. Note that scheme is registered only within the running application, as opposed to desktop-wide as it happens with Gio.Vfs backends.
    * @param scheme an URI scheme, e.g. “http”
    * @param uriFunc a Gio.VfsFileLookupFunc
    * @param uriData custom data passed to be passed to uri_func, or None
    * @param parseNameFunc a Gio.VfsFileLookupFunc
    * @param parseNameData custom data passed to be passed to parse_name_func, or None
    * @returns True if scheme was successfully registered, or False if a handler for scheme already exists. 
    */
  registerUriScheme(scheme: string, uriFunc: import('../Gio').vfsFileLookupFunc | null, uriData: Object | null, parseNameFunc: import('../Gio').vfsFileLookupFunc | null, parseNameData: Object | null): boolean;
  /**
    * Unregisters the URI handler for scheme previously registered with Gio.Vfs.register_uri_scheme().
    * @param scheme an URI scheme, e.g. “http”
    * @returns True if scheme was successfully unregistered, or False if a handler for scheme does not exist. 
    */
  unregisterUriScheme(scheme: string): boolean;
}

