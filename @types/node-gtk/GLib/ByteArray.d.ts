/**
  * Contains the public fields of a GLib.ByteArray. 
  */
export declare class ByteArray {
  /**
    * Frees the memory allocated by the GLib.ByteArray. If free_segment is True it frees the actual byte data. If the reference count of array is greater than one, the GLib.ByteArray wrapper is preserved but the size of array will be set to zero.
    * @param array a GLib.ByteArray
    * @param freeSegment if True the actual byte data is freed as well
    * @returns the element data if free_segment is False, otherwise None.  The element data should be freed using GLib.free(). 
    */
  static free(array: Int8Array, freeSegment: boolean): number;
  /**
    * Transfers the data from the GLib.ByteArray into a new immutable GLib.Bytes.
    * @param array a GLib.ByteArray
    * @returns a new immutable GLib.Bytes representing same byte data that was in the array 
    */
  static freeToBytes(array: Int8Array): import('../GLib').Bytes;
  /**
    * Creates a new GLib.ByteArray with a reference count of 1.
    * @returns the new GLib.ByteArray 
    */
  static new(): Int8Array;
  /**
    * Create byte array containing the data. The data will be owned by the array and will be freed with GLib.free(), i.e. it could be allocated using GLib.strdup().
    * @param data byte data for the array
    * @returns a new GLib.ByteArray 
    */
  static newTake(data: Int8Array): Int8Array;
  /**
    * Atomically decrements the reference count of array by one. If the reference count drops to 0, all memory allocated by the array is released. This function is thread-safe and may be called from any thread.
    * @param array A GLib.ByteArray 
    */
  static unref(array: Int8Array): void;
}

