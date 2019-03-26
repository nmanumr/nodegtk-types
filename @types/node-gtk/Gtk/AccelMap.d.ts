import * as GObject from '../GObject';
export declare interface AccelMap extends GObject.Object { }

/**
  * Accelerator maps are used to define runtime configurable accelerators.
Functions for manipulating them are are usually used by higher level
convenience mechanisms like Gtk.UIManager and are thus considered
“low-level”. You’ll want to use them if you’re manually creating menus that
should have user-configurable accelerators. 
  */
export declare class AccelMap {
  /**
    * Registers a new accelerator with the global accelerator map. This function should only be called once per accel_path with the canonical accel_key and accel_mods for this path. To change the accelerator during runtime programatically, use Gtk.AccelMap.change_entry().
    * @param accelPath valid accelerator path
    * @param accelKey the accelerator key
    * @param accelMods the accelerator modifiers 
    */
  static addEntry(accelPath: string, accelKey: number, accelMods: import('../Gdk').ModifierType): void;
  /**
    * Adds a filter to the global list of accel path filters.
    * @param filterPattern a pattern (see GLib.PatternSpec) 
    */
  static addFilter(filterPattern: string): void;
  /**
    * Changes the accel_key and accel_mods currently associated with accel_path. Due to conflicts with other accelerators, a change may not always be possible, replace indicates whether other accelerators may be deleted to resolve such conflicts. A change will only occur if all conflicts could be resolved (which might not be the case if conflicting accelerators are locked). Successful changes are indicated by a True return value.
    * @param accelPath a valid accelerator path
    * @param accelKey the new accelerator key
    * @param accelMods the new accelerator modifiers
    * @param replace True if other accelerators may be deleted upon conflicts
    * @returns True if the accelerator could be changed, False otherwise 
    */
  static changeEntry(accelPath: string, accelKey: number, accelMods: import('../Gdk').ModifierType, replace: boolean): boolean;
  /**
    * Loops over the entries in the accelerator map whose accel path doesn’t match any of the filters added with Gtk.AccelMap.add_filter(), and execute foreach_func on each. The signature of foreach_func is that of Gtk.AccelMapForeach, the changed parameter indicates whether this accelerator was changed during runtime (thus, would need saving during an accelerator map dump).
    * @param data data to be passed into foreach_func
    * @param foreachFunc function to be executed for each accel map entry which is not filtered out 
    */
  static foreach(data: Object | null, foreachFunc: import('../Gtk').accelMapForeach): void;
  /**
    * Loops over all entries in the accelerator map, and execute foreach_func on each. The signature of foreach_func is that of Gtk.AccelMapForeach, the changed parameter indicates whether this accelerator was changed during runtime (thus, would need saving during an accelerator map dump).
    * @param data data to be passed into foreach_func
    * @param foreachFunc function to be executed for each accel map entry 
    */
  static foreachUnfiltered(data: Object | null, foreachFunc: import('../Gtk').accelMapForeach): void;
  /**
    * Gets the singleton global Gtk.AccelMap object. This object is useful only for notification of changes to the accelerator map via the ::changed signal; it isn’t a parameter to the other accelerator map functions.
    * @returns the global Gtk.AccelMap object 
    */
  static get(): import('../Gtk').AccelMap;
  /**
    * Parses a file previously saved with Gtk.AccelMap.save() for accelerator specifications, and propagates them accordingly.
    * @param fileName a file containing accelerator specifications, in the GLib file name encoding 
    */
  static load(fileName: string): void;
  /**
    * Filedescriptor variant of Gtk.AccelMap.load().
    * @param fd a valid readable file descriptor 
    */
  static loadFd(fd: number): void;
  /**
    * GLib.Scanner variant of Gtk.AccelMap.load().
    * @param scanner a GLib.Scanner which has already been provided with an input file 
    */
  static loadScanner(scanner: import('../GLib').Scanner): void;
  /**
    * Locks the given accelerator path. If the accelerator map doesn’t yet contain an entry for accel_path, a new one is created.
    * @param accelPath a valid accelerator path 
    */
  static lockPath(accelPath: string): void;
  /**
    * Looks up the accelerator entry for accel_path and fills in key.
    * @param accelPath a valid accelerator path
    * @returns True if accel_path is known, False otherwise  key:the accelerator key to be filled in (optional) 
    */
  static lookupEntry(accelPath: string): [boolean, import('../Gtk').AccelKey];
  /**
    * Saves current accelerator specifications (accelerator path, key and modifiers) to file_name. The file is written in a format suitable to be read back in by Gtk.AccelMap.load().
    * @param fileName the name of the file to contain accelerator specifications, in the GLib file name encoding 
    */
  static save(fileName: string): void;
  /**
    * Filedescriptor variant of Gtk.AccelMap.save().
    * @param fd a valid writable file descriptor 
    */
  static saveFd(fd: number): void;
  /**
    * Undoes the last call to Gtk.AccelMap.lock_path() on this accel_path. Refer to Gtk.AccelMap.lock_path() for information about accelerator path locking.
    * @param accelPath a valid accelerator path 
    */
  static unlockPath(accelPath: string): void;
}

