import * as Gio from '../Gio';
export declare interface MemoryInputStream extends Gio.InputStream, Gio.PollableInputStream, Gio.Seekable { }

/**
  * Gio.MemoryInputStream is a class for using arbitrary
memory chunks as input for GIO streaming input operations. 
  */
export declare class MemoryInputStream {
  /**
    * Creates a new empty Gio.MemoryInputStream.
    * @returns a new Gio.InputStream 
    */
  static new(): import('../Gio').InputStream;
  /**
    * Creates a new Gio.MemoryInputStream with data from the given bytes.
    * @param bytes a GLib.Bytes
    * @returns new Gio.InputStream read from bytes 
    */
  static newFromBytes(bytes: import('../GLib').Bytes): import('../Gio').InputStream;
  /**
    * Creates a new Gio.MemoryInputStream with data in memory of a given size.
    * @param data input data
    * @param destroy function that is called to free data, or None
    * @returns new Gio.InputStream read from data of len bytes. 
    */
  static newFromData(data: Int8Array, destroy: import('../GLib').destroyNotify | null): import('../Gio').InputStream;
  /**
    * Appends bytes to data that can be read from the input stream.
    * @param bytes input data 
    */
  addBytes(bytes: import('../GLib').Bytes): void;
  /**
    * Appends data to data that can be read from the input stream
    * @param data input data
    * @param destroy function that is called to free data, or None 
    */
  addData(data: Int8Array, destroy: import('../GLib').destroyNotify | null): void;
}

