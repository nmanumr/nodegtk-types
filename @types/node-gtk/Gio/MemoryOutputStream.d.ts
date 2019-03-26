import * as Gio from '../Gio';

export declare interface MemoryOutputStream extends Gio.OutputStream, Gio.PollableOutputStream, Gio.Seekable {
  getData(): any | null;
  getData(key: string): any | null;

  stealData(): any | null;
  stealData(key: string): any | null;
}

/**
  * Gio.MemoryOutputStream is a class for using arbitrary
memory chunks as output for GIO streaming output operations. 
  */
export declare class MemoryOutputStream {
  /**
    * Creates a new Gio.MemoryOutputStream, using GLib.realloc() and GLib.free() for memory allocation. 
    */
  static newResizable(): import('../Gio').OutputStream;
  /**
    * Gets any loaded data from the self.
    * @returns pointer to the stream’s data, or None if the data has been stolen 
    */
  getData(): Object | null;
  /**
    * Returns the number of bytes from the start up to including the last byte written in the stream that has not been truncated away.
    * @returns the number of bytes written to the stream 
    */
  getDataSize(): number;
  /**
    * Gets the size of the currently allocated data area (available from Gio.MemoryOutputStream.get_data()).
    * @returns the number of bytes allocated for the data buffer 
    */
  getSize(): number;
  /**
    * Returns data from the self as a GLib.Bytes. self must be closed before calling this function.
    * @returns the stream’s data 
    */
  stealAsBytes(): import('../GLib').Bytes;
  /**
    * Gets any loaded data from the self. Ownership of the data is transferred to the caller; when no longer needed it must be freed using the free function set in self’s Gio.MemoryOutputStream :destroy-function property.
    * @returns the stream’s data, or None if it has previously been stolen 
    */
  stealData(): Object | null;
  /**
    * Pointer to buffer where data will be written. 
    */
  data: number;
  /**
    * Size of data written to the buffer. 
    */
  readonly dataSize: number;
  /**
    * Current size of the data buffer. 
    */
  size: number;
}

