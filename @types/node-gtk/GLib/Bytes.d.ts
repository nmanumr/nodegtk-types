/**
  * A simple refcounted data type representing an immutable sequence of zero or
more bytes from an unspecified origin. 
  */
export declare class Bytes {
  /**
    * Creates a new GLib.Bytes from data.
    * @param data the data to be used for the bytes
    * @returns a new GLib.Bytes 
    */
  static new(data: Int8Array | null): import('../GLib').Bytes;
  /**
    * Creates a new GLib.Bytes from data.
    * @param data the data to be used for the bytes
    * @returns a new GLib.Bytes 
    */
  static newTake(data: Int8Array | null): import('../GLib').Bytes;
  /**
    * Compares the two GLib.Bytes values.
    * @param bytes2 a pointer to a GLib.Bytes to compare with self
    * @returns a negative value if self is less than bytes2, a positive value if self is greater than bytes2, and zero if self is equal to bytes2 
    */
  compare(bytes2: import('../GLib').Bytes): number;
  /**
    * Compares the two GLib.Bytes values being pointed to and returns True if they are equal.
    * @param bytes2 a pointer to a GLib.Bytes to compare with self
    * @returns True if the two keys match. 
    */
  equal(bytes2: import('../GLib').Bytes): boolean;
  /**
    * Get the byte data in the GLib.Bytes. This data should not be modified.
    * @returns a pointer to the byte data, or None 
    */
  getData(): Int8Array | null;
  /**
    * Get the size of the byte data in the GLib.Bytes.
    * @returns the size 
    */
  getSize(): number;
  /**
    * Creates an integer hash code for the byte data in the GLib.Bytes.
    * @returns a hash value corresponding to the key. 
    */
  hash(): number;
  /**
    * Creates a GLib.Bytes which is a subsection of another GLib.Bytes. The offset + length may not be longer than the size of self.
    * @param offset offset which subsection starts at
    * @param length length of subsection
    * @returns a new GLib.Bytes 
    */
  newFromBytes(offset: number, length: number): import('../GLib').Bytes;
  /**
    * Increase the reference count on self.
    * @returns the GLib.Bytes 
    */
  ref(): import('../GLib').Bytes;
  /**
    * Releases a reference on self.  This may result in the bytes being freed. If self is None, it will return immediately. 
    */
  unref(): void;
  /**
    * Unreferences the bytes, and returns a new mutable GLib.ByteArray containing the same byte data.
    * @returns a new mutable GLib.ByteArray containing the same byte data 
    */
  unrefToArray(): Int8Array;
  /**
    * Unreferences the bytes, and returns a pointer the same byte data contents.
    * @returns a pointer to the same byte data, which should be freed with GLib.free() 
    */
  unrefToData(): Int8Array;
}

