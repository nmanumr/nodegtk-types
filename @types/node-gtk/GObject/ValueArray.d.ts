/**
  * A GObject.ValueArray contains an array of GObject.Value elements. 
  */
export declare class ValueArray {
  /**
    * Allocate and initialize a new GObject.ValueArray, optionally preserve space for n_prealloced elements. New arrays always contain 0 elements, regardless of the value of n_prealloced.
    * @param nPrealloced number of values to preallocate space for
    * @returns a newly allocated GObject.ValueArray with 0 values 
    */
  static new(nPrealloced: number): import('../GObject').ValueArray;
  /**
    * Insert a copy of value as last element of self. If value is None, an uninitialized value is appended.
    * @param value GObject.Value to copy into GObject.ValueArray, or None
    * @returns the GObject.ValueArray passed in as self 
    */
  append(value: import('../GObject').Value | null): import('../GObject').ValueArray;
  /**
    * Construct an exact copy of a GObject.ValueArray by duplicating all its contents.
    * @returns Newly allocated copy of GObject.ValueArray 
    */
  copy(): import('../GObject').ValueArray;
  /**
    * Return a pointer to the value at index_ containd in self.
    * @param index index of the value of interest
    * @returns pointer to a value at index_ in self 
    */
  getNth(index: number): import('../GObject').Value;
  /**
    * Insert a copy of value at specified position into self. If value is None, an uninitialized value is inserted.
    * @param index insertion position, must be <= value_array->;n_values
    * @param value GObject.Value to copy into GObject.ValueArray, or None
    * @returns the GObject.ValueArray passed in as self 
    */
  insert(index: number, value: import('../GObject').Value | null): import('../GObject').ValueArray;
  /**
    * Insert a copy of value as first element of self. If value is None, an uninitialized value is prepended.
    * @param value GObject.Value to copy into GObject.ValueArray, or None
    * @returns the GObject.ValueArray passed in as self 
    */
  prepend(value: import('../GObject').Value | null): import('../GObject').ValueArray;
  /**
    * Remove the value at position index_ from self.
    * @param index position of value to remove, which must be less than self->n_values
    * @returns the GObject.ValueArray passed in as self 
    */
  remove(index: number): import('../GObject').ValueArray;
  /**
    * Sort self using compare_func to compare the elements according to the semantics of GLib.CompareDataFunc.
    * @param compareFunc function to compare elements
    * @param userData extra data argument provided for compare_func
    * @returns the GObject.ValueArray passed in as self 
    */
  sort(compareFunc: import('../GLib').compareDataFunc, userData: Object | null): import('../GObject').ValueArray;
}

