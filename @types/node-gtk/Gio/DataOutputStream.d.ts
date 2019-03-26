import * as Gio from '../Gio';
export declare interface DataOutputStream extends Gio.FilterOutputStream, Gio.Seekable { }

/**
  * Data output stream implements Gio.OutputStream and includes functions for
writing data directly to an output stream. 
  */
export declare class DataOutputStream {
  /**
    * Creates a new data output stream for base_stream.
    * @param baseStream a Gio.OutputStream.
    * @returns Gio.DataOutputStream. 
    */
  static new(baseStream: import('../Gio').OutputStream): import('../Gio').DataOutputStream;
  /**
    * Gets the byte order for the stream.
    * @returns the Gio.DataStreamByteOrder for the self. 
    */
  getByteOrder(): import('../Gio').DataStreamByteOrder;
  /**
    * Puts a byte into the output stream.
    * @param data a #guchar.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putByte(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts a signed 16-bit integer into the output stream.
    * @param data a #gint16.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putInt16(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts a signed 32-bit integer into the output stream.
    * @param data a #gint32.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putInt32(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts a signed 64-bit integer into the stream.
    * @param data a #gint64.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putInt64(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts a string into the output stream.
    * @param str a string.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if string was successfully added to the self. 
    */
  putString(str: string, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts an unsigned 16-bit integer into the output stream.
    * @param data a #guint16.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putUint16(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts an unsigned 32-bit integer into the stream.
    * @param data a #guint32.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putUint32(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Puts an unsigned 64-bit integer into the stream.
    * @param data a #guint64.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if data was successfully added to the self. 
    */
  putUint64(data: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets the byte order of the data output stream to order.
    * @param order a Gio.DataStreamByteOrder. 
    */
  setByteOrder(order: import('../Gio').DataStreamByteOrder): void;
  /**
    * The byte order 
    */
  byteOrder: import('../Gio').DataStreamByteOrder;
}

