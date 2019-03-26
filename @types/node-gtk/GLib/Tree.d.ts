/**
  * The GLib.Tree struct is an opaque data structure representing a
balanced binary tree. It should be
accessed only by using the following functions. 
  */
export declare class Tree {
  /**
    * Removes all keys and values from the GLib.Tree and decreases its reference count by one. If keys and/or values are dynamically allocated, you should either free them first or create the GLib.Tree using g_tree_new_full(). In the latter case the destroy functions you supplied will be called on all keys and values before destroying the GLib.Tree. 
    */
  destroy(): void;
  /**
    * Gets the height of a GLib.Tree.
    * @returns the height of self 
    */
  height(): number;
  /**
    * Inserts a key/value pair into a GLib.Tree.
    * @param key the key to insert
    * @param value the value corresponding to the key 
    */
  insert(key: Object | null, value: Object | null): void;
  /**
    * Gets the value corresponding to the given key. Since a GLib.Tree is automatically balanced as key/value pairs are added, key lookup is O(log n) (where n is the number of key/value pairs in the tree).
    * @param key the key to look up
    * @returns the value corresponding to the key, or None if the key was not found 
    */
  lookup(key: Object | null): Object | null;
  /**
    * Looks up a key in the GLib.Tree, returning the original key and the associated value. This is useful if you need to free the memory allocated for the original key, for example before calling GLib.Tree.remove().
    * @param lookupKey the key to look up
    * @param origKey returns the original key
    * @param value returns the value associated with the key
    * @returns True if the key was found in the GLib.Tree 
    */
  lookupExtended(lookupKey: Object | null, origKey: Object | null, value: Object | null): boolean;
  /**
    * Gets the number of nodes in a GLib.Tree.
    * @returns the number of nodes in self 
    */
  nnodes(): number;
  /**
    * Removes a key/value pair from a GLib.Tree.
    * @param key the key to remove
    * @returns True if the key was found (prior to 2.8, this function returned nothing) 
    */
  remove(key: Object | null): boolean;
  /**
    * Inserts a new key and value into a GLib.Tree similar to GLib.Tree.insert(). The difference is that if the key already exists in the GLib.Tree, it gets replaced by the new key. If you supplied a value_destroy_func when creating the GLib.Tree, the old value is freed using that function. If you supplied a key_destroy_func when creating the GLib.Tree, the old key is freed using that function.
    * @param key the key to insert
    * @param value the value corresponding to the key 
    */
  replace(key: Object | null, value: Object | null): void;
  /**
    * Removes a key and its associated value from a GLib.Tree without calling the key and value destroy functions.
    * @param key the key to remove
    * @returns True if the key was found (prior to 2.8, this function returned nothing) 
    */
  steal(key: Object | null): boolean;
  /**
    * Decrements the reference count of self by one. If the reference count drops to 0, all keys and values will be destroyed (if destroy functions were specified) and all memory allocated by self will be released. 
    */
  unref(): void;
}

