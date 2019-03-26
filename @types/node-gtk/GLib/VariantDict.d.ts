/**
  * GLib.VariantDict is a mutable interface to GLib.Variant dictionaries. 
  */
export declare class VariantDict {
  /**
    * Allocates and initialises a new GLib.VariantDict.
    * @param fromAsv the GLib.Variant with which to initialise the dictionary
    * @returns a GLib.VariantDict 
    */
  static new(fromAsv: import('../GLib').Variant | null): import('../GLib').VariantDict;
  /**
    * Releases all memory associated with a GLib.VariantDict without freeing the GLib.VariantDict structure itself. 
    */
  clear(): void;
  /**
    * Checks if key exists in self.
    * @param key the key to lookup in the dictionary
    * @returns True if key is in self 
    */
  contains(key: string): boolean;
  /**
    * Returns the current value of self as a GLib.Variant of type %G_VARIANT_TYPE_VARDICT, clearing it in the process.
    * @returns a new, floating, GLib.Variant 
    */
  end(): import('../GLib').Variant;
  /**
    * Inserts (or replaces) a key in a GLib.VariantDict.
    * @param key the key to insert a value for
    * @param value the value to insert 
    */
  insertValue(key: string, value: import('../GLib').Variant): void;
  /**
    * Looks up a value in a GLib.VariantDict.
    * @param key the key to lookup in the dictionary
    * @param expectedType a GLib.VariantType, or None
    * @returns the value of the dictionary key, or None 
    */
  lookupValue(key: string, expectedType: import('../GLib').VariantType | null): import('../GLib').Variant;
  /**
    * Increases the reference count on self.
    * @returns a new reference to self 
    */
  ref(): import('../GLib').VariantDict;
  /**
    * Removes a key and its associated value from a GLib.VariantDict.
    * @param key the key to remove
    * @returns True if the key was found and removed 
    */
  remove(key: string): boolean;
  /**
    * Decreases the reference count on self. 
    */
  unref(): void;
}

