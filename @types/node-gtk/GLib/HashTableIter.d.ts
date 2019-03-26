/**
  * A GLib.HashTableIter structure represents an iterator that can be used
to iterate over the elements of a GLib.HashTable. GLib.HashTableIter
structures are typically allocated on the stack and then initialized
with GLib.HashTableIter.init(). 
  */
export declare class HashTableIter {
  /**
    * Initializes a key/value pair iterator and associates it with hash_table. Modifying the hash table after calling this function invalidates the returned iterator.
    * @param hashTable a GLib.HashTable 
    */
  init(hashTable: { object: object }): void;
  /**
    * Advances self and retrieves the key and/or value that are now pointed to as a result of this advancement. If False is returned, key and value are not set, and the iterator becomes invalid.
    * @returns False if the end of the GLib.HashTable has been reached.  key:a location to store the key value:a location to store the value 
    */
  next(): [boolean, Object, Object];
  /**
    * Removes the key/value pair currently pointed to by the iterator from its associated GLib.HashTable. Can only be called after GLib.HashTableIter.next() returned True, and cannot be called more than once for the same key/value pair. 
    */
  remove(): void;
  /**
    * Replaces the value currently pointed to by the iterator from its associated GLib.HashTable. Can only be called after GLib.HashTableIter.next() returned True.
    * @param value the value to replace with 
    */
  replace(value: Object | null): void;
  /**
    * Removes the key/value pair currently pointed to by the iterator from its associated GLib.HashTable, without calling the key and value destroy functions. Can only be called after GLib.HashTableIter.next() returned True, and cannot be called more than once for the same key/value pair. 
    */
  steal(): void;
}

