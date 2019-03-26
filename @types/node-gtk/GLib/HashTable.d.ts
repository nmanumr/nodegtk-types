/**
  * The GLib.HashTable struct is an opaque data structure to represent a
Hash Table. It should only be accessed via the
following functions. 
  */
export declare class HashTable {
  /**
    * This is a convenience function for using a GLib.HashTable as a set.  It is equivalent to calling GLib.HashTable.replace() with key as both the key and the value.
    * @param hashTable a GLib.HashTable
    * @param key a key to insert
    * @returns True if the key did not exist yet 
    */
  static add(hashTable: { object: object }, key: Object | null): boolean;
  /**
    * Checks if key is in hash_table.
    * @param hashTable a GLib.HashTable
    * @param key a key to check
    * @returns True if key is in hash_table, False otherwise. 
    */
  static contains(hashTable: { object: object }, key: Object | null): boolean;
  /**
    * Destroys all keys and values in the GLib.HashTable and decrements its reference count by 1. If keys and/or values are dynamically allocated, you should either free them first or create the GLib.HashTable with destroy notifiers using g_hash_table_new_full(). In the latter case the destroy functions you supplied will be called on all keys and values during the destruction phase.
    * @param hashTable a GLib.HashTable 
    */
  static destroy(hashTable: { object: object }): void;
  /**
    * Inserts a new key and value into a GLib.HashTable.
    * @param hashTable a GLib.HashTable
    * @param key a key to insert
    * @param value the value to associate with the key
    * @returns True if the key did not exist yet 
    */
  static insert(hashTable: { object: object }, key: Object | null, value: Object | null): boolean;
  /**
    * Looks up a key in a GLib.HashTable. Note that this function cannot distinguish between a key that is not present and one which is present and has the value None. If you need this distinction, use GLib.HashTable.lookup_extended().
    * @param hashTable a GLib.HashTable
    * @param key the key to look up
    * @returns the associated value, or None if the key is not found 
    */
  static lookup(hashTable: { object: object }, key: Object | null): Object | null;
  /**
    * Looks up a key in the GLib.HashTable, returning the original key and the associated value and a bool which is True if the key was found. This is useful if you need to free the memory allocated for the original key, for example before calling GLib.HashTable.remove().
    * @param hashTable a GLib.HashTable
    * @param lookupKey the key to look up
    * @returns True if the key was found in the GLib.HashTable   orig_key:return location for the original key value:return location for the value associated with the key 
    */
  static lookupExtended(hashTable: { object: object }, lookupKey: Object | null): [boolean, Object, Object];
  /**
    * Removes a key and its associated value from a GLib.HashTable.
    * @param hashTable a GLib.HashTable
    * @param key the key to remove
    * @returns True if the key was found and removed from the GLib.HashTable 
    */
  static remove(hashTable: { object: object }, key: Object | null): boolean;
  /**
    * Removes all keys and their associated values from a GLib.HashTable.
    * @param hashTable a GLib.HashTable 
    */
  static removeAll(hashTable: { object: object }): void;
  /**
    * Inserts a new key and value into a GLib.HashTable similar to GLib.HashTable.insert(). The difference is that if the key already exists in the GLib.HashTable, it gets replaced by the new key. If you supplied a value_destroy_func when creating the GLib.HashTable, the old value is freed using that function. If you supplied a key_destroy_func when creating the GLib.HashTable, the old key is freed using that function.
    * @param hashTable a GLib.HashTable
    * @param key a key to insert
    * @param value the value to associate with the key
    * @returns True if the key did not exist yet 
    */
  static replace(hashTable: { object: object }, key: Object | null, value: Object | null): boolean;
  /**
    * Returns the number of elements contained in the GLib.HashTable.
    * @param hashTable a GLib.HashTable
    * @returns the number of key/value pairs in the GLib.HashTable. 
    */
  static size(hashTable: { object: object }): number;
  /**
    * Removes a key and its associated value from a GLib.HashTable without calling the key and value destroy functions.
    * @param hashTable a GLib.HashTable
    * @param key the key to remove
    * @returns True if the key was found and removed from the GLib.HashTable 
    */
  static steal(hashTable: { object: object }, key: Object | null): boolean;
  /**
    * Removes all keys and their associated values from a GLib.HashTable without calling the key and value destroy functions.
    * @param hashTable a GLib.HashTable 
    */
  static stealAll(hashTable: { object: object }): void;
  /**
    * Looks up a key in the GLib.HashTable, stealing the original key and the associated value and returning True if the key was found. If the key was not found, False is returned.
    * @param hashTable a GLib.HashTable
    * @param lookupKey the key to look up
    * @returns True if the key was found in the GLib.HashTable   stolen_key:return location for the original key stolen_value:return location for the value associated with the key 
    */
  static stealExtended(hashTable: { object: object }, lookupKey: Object | null): [boolean, Object, Object];
  /**
    * Atomically decrements the reference count of hash_table by one. If the reference count drops to 0, all keys and values will be destroyed, and all memory allocated by the hash table is released. This function is MT-safe and may be called from any thread.
    * @param hashTable a valid GLib.HashTable 
    */
  static unref(hashTable: { object: object }): void;
}

