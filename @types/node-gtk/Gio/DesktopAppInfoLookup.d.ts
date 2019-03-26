import * as GObject from '../GObject';
export declare interface DesktopAppInfoLookup extends GObject.GInterface { }

/**
  * Gio.DesktopAppInfoLookup is an opaque data structure and can only be accessed
using the following functions. 
  */
export declare interface DesktopAppInfoLookup {
  /**
    * Gets the default application for launching applications using this URI scheme for a particular Gio.DesktopAppInfoLookup implementation.
    * @param uriScheme a string containing a URI scheme.
    * @returns Gio.AppInfo for given uri_scheme or None on error. 
    */
  getDefaultForUriScheme(uriScheme: string): import('../Gio').AppInfo;
}

