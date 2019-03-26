import * as GObject from '../GObject';
export declare interface RecentManager extends GObject.Object { }

/**
  * Gtk.RecentManager provides a facility for adding, removing and
looking up recently used files. Each recently used file is
identified by its URI, and has meta-data associated to it, like
the names and command lines of the applications that have
registered it, the number of time each application has registered
the same file, the mime type of the file and whether the file
should be displayed only by the applications that have
registered it. 
  */
export declare class RecentManager {
  /**
    * Gets a unique instance of Gtk.RecentManager, that you can share in your application without caring about memory management.
    * @returns A unique Gtk.RecentManager. Do not ref or unref it. 
    */
  static getDefault(): import('../Gtk').RecentManager;
  /**
    * Creates a new recent manager object. Recent manager objects are used to handle the list of recently used resources. A Gtk.RecentManager object monitors the recently used resources list, and emits the “changed” signal each time something inside the list changes.
    * @returns A newly created Gtk.RecentManager object 
    */
  static new(): import('../Gtk').RecentManager;
  /**
    * Adds a new resource, pointed by uri, into the recently used resources list, using the metadata specified inside the Gtk.RecentData-struct passed in recent_data.
    * @param uri a valid URI
    * @param recentData metadata of the resource
    * @returns True if the new item was successfully added to the recently used resources list, False otherwise 
    */
  addFull(uri: string, recentData: import('../Gtk').RecentData): boolean;
  /**
    * Adds a new resource, pointed by uri, into the recently used resources list.
    * @param uri a valid URI
    * @returns True if the new item was successfully added to the recently used resources list 
    */
  addItem(uri: string): boolean;
  /**
    * Gets the list of recently used resources.
    * @returns a list of newly allocated Gtk.RecentInfo objects. Use Gtk.RecentInfo.unref() on each item inside the list, and then free the list itself using g_list_free(). 
    */
  getItems(): import('../Gtk').RecentInfo[];
  /**
    * Checks whether there is a recently used resource registered with uri inside the recent manager.
    * @param uri a URI
    * @returns True if the resource was found, False otherwise 
    */
  hasItem(uri: string): boolean;
  /**
    * Searches for a URI inside the recently used resources list, and returns a Gtk.RecentInfo-struct containing informations about the resource like its MIME type, or its display name.
    * @param uri a URI
    * @returns a Gtk.RecentInfo-struct containing information about the resource pointed by uri, or None if the URI was not registered in the recently used resources list. Free with Gtk.RecentInfo.unref(). 
    */
  lookupItem(uri: string): import('../Gtk').RecentInfo | null;
  /**
    * Changes the location of a recently used resource from uri to new_uri.
    * @param uri the URI of a recently used resource
    * @param newUri the new URI of the recently used resource, or None to remove the item pointed by uri in the list
    * @returns True on success 
    */
  moveItem(uri: string, newUri: string | null): boolean;
  /**
    * Purges every item from the recently used resources list.
    * @returns the number of items that have been removed from the recently used resources list 
    */
  purgeItems(): number;
  /**
    * Removes a resource pointed by uri from the recently used resources list handled by a recent manager.
    * @param uri the URI of the item you wish to remove
    * @returns True if the item pointed by uri has been successfully removed by the recently used resources list, and False otherwise 
    */
  removeItem(uri: string): boolean;
  /**
    * The full path to the file to be used to store and read the list 
    */
  filename: string;
  /**
    * The size of the recently used resources list 
    */
  readonly size: number;
}

