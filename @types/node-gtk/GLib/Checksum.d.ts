/**
  * An opaque structure representing a checksumming operation.
To create a new GLib.Checksum, use GLib.Checksum.new(). To free
a GLib.Checksum, use GLib.Checksum.free(). 
  */
export declare class Checksum {
  /**
    * Creates a new GLib.Checksum, using the checksum algorithm checksum_type. If the checksum_type is not known, None is returned. A GLib.Checksum can be used to compute the checksum, or digest, of an arbitrary binary blob, using different hashing algorithms.
    * @param checksumType the desired type of checksum
    * @returns the newly created GLib.Checksum, or None. Use GLib.Checksum.free() to free the memory allocated by it. 
    */
  static new(checksumType: import('../GLib').ChecksumType): import('../GLib').Checksum;
  /**
    * Gets the length in bytes of digests of type checksum_type
    * @param checksumType a GLib.ChecksumType
    * @returns the checksum length, or -1 if checksum_type is not supported. 
    */
  static typeGetLength(checksumType: import('../GLib').ChecksumType): number;
  /**
    * Copies a GLib.Checksum. If self has been closed, by calling GLib.Checksum.get_string() or g_checksum_get_digest(), the copied checksum will be closed as well.
    * @returns the copy of the passed GLib.Checksum. Use GLib.Checksum.free() when finished using it. 
    */
  copy(): import('../GLib').Checksum;
  /**
    * Frees the memory allocated for self. 
    */
  free(): void;
  /**
    * Gets the digest as an hexadecimal string.
    * @returns the hexadecimal representation of the checksum. The returned string is owned by the checksum and should not be modified or freed. 
    */
  getString(): string;
  /**
    * Resets the state of the self back to its initial state. 
    */
  reset(): void;
  /**
    * Feeds data into an existing GLib.Checksum. The checksum must still be open, that is GLib.Checksum.get_string() or g_checksum_get_digest() must not have been called on self.
    * @param data buffer used to compute the checksum 
    */
  update(data: Int8Array): void;
}

