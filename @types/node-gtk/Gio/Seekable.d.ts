import * as GObject from '../GObject';
export declare interface Seekable extends GObject.GInterface { }

/**
  * Gio.Seekable is implemented by streams (implementations of
Gio.InputStream or Gio.OutputStream) that support seeking. 
  */
export declare interface Seekable {
  /**
    * Tests if the stream supports the Gio.SeekableIface.
    * @returns True if self can be seeked. False otherwise. 
    */
  canSeek(): boolean;
  /**
    * Tests if the length of the stream can be adjusted with Gio.Seekable.truncate().
    * @returns True if the stream can be truncated, False otherwise. 
    */
  canTruncate(): boolean;
  /**
    * Seeks in the stream by the given offset, modified by type.
    * @param offset a #goffset.
    * @param type a GLib.SeekType.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if successful. If an error has occurred, this function will return False and set error appropriately if present. 
    */
  seek(offset: number, type: import('../GLib').SeekType, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Tells the current position within the stream.
    * @returns the offset from the beginning of the buffer. 
    */
  tell(): number;
  /**
    * Sets the length of the stream to offset. If the stream was previously larger than offset, the extra data is discarded. If the stream was previouly shorter than offset, it is extended with NUL (‘\0’) bytes.
    * @param offset new length for self, in bytes.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if successful. If an error has occurred, this function will return False and set error appropriately if present. 
    */
  truncate(offset: number, cancellable: import('../Gio').Cancellable | null): boolean;
}

