import * as GObject from '../GObject';
export declare interface SettingsBackend extends GObject.Object { }

/**
  * The Gio.SettingsBackend interface defines a generic interface for
non-strictly-typed data that is stored in a hierarchy. To implement
an alternative storage backend for Gio.Settings, you need to implement
the Gio.SettingsBackend interface and then make it implement the
extension point Gio.SETTINGS_BACKEND_EXTENSION_POINT_NAME. 
  */
export declare abstract class SettingsBackend {
  /**
    * Calculate the longest common prefix of all keys in a tree and write out an array of the key names relative to that prefix and, optionally, the value to store at each of those keys.
    * @param tree a GLib.Tree containing the changes
    * @returns path:the location to save the path keys:the location to save the relative keys values:the location to save the values, or None 
    */
  static flattenTree(tree: import('../GLib').Tree): [string, string[], import('../GLib').Variant[]];
  /**
    * Returns the default Gio.SettingsBackend. It is possible to override the default by setting the GSETTINGS_BACKEND environment variable to the name of a settings backend.
    * @returns the default Gio.SettingsBackend 
    */
  static getDefault(): import('../Gio').SettingsBackend;
  /**
    * Signals that a single key has possibly changed.  Backend implementations should call this if a key has possibly changed its value.
    * @param key the name of the key
    * @param originTag the origin tag 
    */
  changed(key: string, originTag: Object | null): void;
  /**
    * This call is a convenience wrapper.  It gets the list of changes from tree, computes the longest common prefix and calls Gio.SettingsBackend.changed().
    * @param tree a GLib.Tree containing the changes
    * @param originTag the origin tag 
    */
  changedTree(tree: import('../GLib').Tree, originTag: Object | null): void;
  /**
    * Signals that a list of keys have possibly changed.  Backend implementations should call this if keys have possibly changed their values.
    * @param path the path containing the changes
    * @param items the None-terminated list of changed keys
    * @param originTag the origin tag 
    */
  keysChanged(path: string, items: string, originTag: Object | null): void;
  /**
    * Signals that all keys below a given path may have possibly changed. Backend implementations should call this if an entire path of keys have possibly changed their values.
    * @param path the path containing the changes
    * @param originTag the origin tag 
    */
  pathChanged(path: string, originTag: Object | null): void;
  /**
    * Signals that the writability of all keys below a given path may have changed.
    * @param path the name of the path 
    */
  pathWritableChanged(path: string): void;
  /**
    * Signals that the writability of a single key has possibly changed.
    * @param key the name of the key 
    */
  writableChanged(key: string): void;
}

