/**
  * Applications and libraries often contain binary or textual data that is
really part of the application, rather than user data. For instance
#GtkBuilder .ui files, splashscreen images, Gio.Menu markup XML, CSS files,
icons, etc. These are often shipped as files in $datadir/appname, or
manually included as literal strings in the code. 
  */
export declare class Resource {
  /**
    * Loads a binary resource bundle and creates a Gio.Resource representation of it, allowing you to query it for data.
    * @param filename the path of a filename to load, in the GLib filename encoding
    * @returns a new Gio.Resource, or None on error 
    */
  static load(filename: string): import('../Gio').Resource;
  /**
    * Creates a Gio.Resource from a reference to the binary resource bundle. This will keep a reference to data while the resource lives, so the data should not be modified or freed.
    * @param data A GLib.Bytes
    * @returns a new Gio.Resource, or None on error 
    */
  static newFromData(data: import('../GLib').Bytes): import('../Gio').Resource;
  /**
    * Returns all the names of children at the specified path in the resource. The return result is a None terminated list of strings which should be released with GLib.strfreev().
    * @param path A pathname inside the resource
    * @param lookupFlags A Gio.ResourceLookupFlags
    * @returns an array of constant strings 
    */
  enumerateChildren(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): string[];
  /**
    * Looks for a file at the specified path in the resource and if found returns information about it.
    * @param path A pathname inside the resource
    * @param lookupFlags A Gio.ResourceLookupFlags
    * @returns True if the file was found. False if there were errors   size:a location to place the length of the contents of the file, or None if the length is not needed flags:a location to place the flags about the file, or None if the length is not needed 
    */
  getInfo(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): [boolean, number, number];
  /**
    * Looks for a file at the specified path in the resource and returns a GLib.Bytes that lets you directly access the data in memory.
    * @param path A pathname inside the resource
    * @param lookupFlags A Gio.ResourceLookupFlags
    * @returns GLib.Bytes or None on error. Free the returned object with GLib.Bytes.unref() 
    */
  lookupData(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): import('../GLib').Bytes;
  /**
    * Looks for a file at the specified path in the resource and returns a Gio.InputStream that lets you read the data.
    * @param path A pathname inside the resource
    * @param lookupFlags A Gio.ResourceLookupFlags
    * @returns Gio.InputStream or None on error. Free the returned object with GObject.Object.unref() 
    */
  openStream(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): import('../Gio').InputStream;
  /**
    * Atomically increments the reference count of self by one. This function is MT-safe and may be called from any thread.
    * @returns The passed in Gio.Resource 
    */
  ref(): import('../Gio').Resource;
  /**
    * Atomically decrements the reference count of self by one. If the reference count drops to 0, all memory allocated by the resource is released. This function is MT-safe and may be called from any thread. 
    */
  unref(): void;
}

