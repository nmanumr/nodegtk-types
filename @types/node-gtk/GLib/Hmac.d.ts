/**
  * An opaque structure representing a HMAC operation.
To create a new GLib.Hmac, use g_hmac_new(). To free
a GLib.Hmac, use GLib.Hmac.unref(). 
  */
export declare class Hmac {
  /**
    * Gets the digest from checksum as a raw binary array and places it into buffer. The size of the digest depends on the type of checksum.
    * @param buffer output buffer 
    */
  getDigest(buffer: Int8Array): void;
  /**
    * Gets the HMAC as an hexadecimal string.
    * @returns the hexadecimal representation of the HMAC. The returned string is owned by the HMAC and should not be modified or freed. 
    */
  getString(): string;
  /**
    * Atomically decrements the reference count of self by one. 
    */
  unref(): void;
  /**
    * Feeds data into an existing GLib.Hmac.
    * @param data buffer used to compute the checksum 
    */
  update(data: Int8Array): void;
}

