import * as Gio from '../Gio';

/**
  * Data input stream implements Gio.InputStream and includes functions for
reading structured data directly from a binary input stream. 
  */
export declare class DataInputStream extends Gio.BufferedInputStream {
  /**
    * Creates a new data input stream for the base_stream.
    * @param baseStream a Gio.InputStream.
    * @returns a new Gio.DataInputStream. 
    */
  static new(baseStream: import('../Gio').InputStream): import('../Gio').DataInputStream;
  /**
    * Gets the byte order for the data input stream.
    * @returns the self’s current Gio.DataStreamByteOrder. 
    */
  getByteOrder(): import('../Gio').DataStreamByteOrder;
  /**
    * Gets the current newline type for the self.
    * @returns Gio.DataStreamNewlineType for the given self. 
    */
  getNewlineType(): import('../Gio').DataStreamNewlineType;
  /**
    * Reads an unsigned 8-bit/1-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns an unsigned 8-bit/1-byte value read from the self or %0 if an error occurred. 
    */
  readByte(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads a 16-bit/2-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a signed 16-bit/2-byte value read from self or %0 if an error occurred. 
    */
  readInt16(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads a signed 32-bit/4-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a signed 32-bit/4-byte value read from the self or %0 if an error occurred. 
    */
  readInt32(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads a 64-bit/8-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a signed 64-bit/8-byte value read from self or %0 if an error occurred. 
    */
  readInt64(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads a line from the data input stream.  Note that no encoding checks or conversion is performed; the input is not guaranteed to be UTF-8, and may in fact have embedded NUL characters.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a NUL terminated byte array with the line that was read in (without the newlines).  Set length to a #gsize to get the length of the read line.  On an error, it will return None and error will be set. If there’s no content to read, it will still return None, but error won’t be set.  length:a #gsize to get the length of the data read in. 
    */
  readLine(cancellable: import('../Gio').Cancellable | null): [Int8Array | null, number];
  /**
    * The asynchronous version of Gio.DataInputStream.read_line().  It is an error to have two outstanding calls to this function.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied.
    * @param userData the data to pass to callback function. 
    */
  readLineAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous call started by Gio.DataInputStream.read_line_async().  Note the warning about string encoding in Gio.DataInputStream.read_line() applies here as well.
    * @param result the Gio.AsyncResult that was provided to the callback.
    * @returns a NUL-terminated byte array with the line that was read in (without the newlines).  Set length to a #gsize to get the length of the read line.  On an error, it will return None and error will be set. If there’s no content to read, it will still return None, but error won’t be set.  length:a #gsize to get the length of the data read in. 
    */
  readLineFinish(result: import('../Gio').AsyncResult): [Int8Array | null, number];
  /**
    * Finish an asynchronous call started by Gio.DataInputStream.read_line_async().
    * @param result the Gio.AsyncResult that was provided to the callback.
    * @returns a string with the line that was read in (without the newlines).  Set length to a #gsize to get the length of the read line.  On an error, it will return None and error will be set. For UTF-8 conversion errors, the set error domain is %G_CONVERT_ERROR.  If there’s no content to read, it will still return None, but error won’t be set.  length:a #gsize to get the length of the data read in. 
    */
  readLineFinishUtf8(result: import('../Gio').AsyncResult): [string | null, number];
  /**
    * Reads a UTF-8 encoded line from the data input stream.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a NUL terminated UTF-8 string with the line that was read in (without the newlines).  Set length to a #gsize to get the length of the read line.  On an error, it will return None and error will be set.  For UTF-8 conversion errors, the set error domain is %G_CONVERT_ERROR.  If there’s no content to read, it will still return None, but error won’t be set.  length:a #gsize to get the length of the data read in. 
    */
  readLineUtf8(cancellable: import('../Gio').Cancellable | null): [string | null, number];
  /**
    * Reads an unsigned 16-bit/2-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns an unsigned 16-bit/2-byte value read from the self or %0 if an error occurred. 
    */
  readUint16(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads an unsigned 32-bit/4-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns an unsigned 32-bit/4-byte value read from the self or %0 if an error occurred. 
    */
  readUint32(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads an unsigned 64-bit/8-byte value from self.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns an unsigned 64-bit/8-byte read from self or %0 if an error occurred. 
    */
  readUint64(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Reads a string from the data input stream, up to the first occurrence of any of the stop characters.
    * @param stopChars characters to terminate the read.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a string with the data that was read before encountering any of the stop characters. Set length to a #gsize to get the length of the string. This function will return None on an error.   length:a #gsize to get the length of the data read in. 
    */
  readUntil(stopChars: string, cancellable: import('../Gio').Cancellable | null): [string, number];
  /**
    * The asynchronous version of Gio.DataInputStream.read_until(). It is an error to have two outstanding calls to this function.
    * @param stopChars characters to terminate the read.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied.
    * @param userData the data to pass to callback function. 
    */
  readUntilAsync(stopChars: string, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous call started by Gio.DataInputStream.read_until_async().
    * @param result the Gio.AsyncResult that was provided to the callback.
    * @returns a string with the data that was read before encountering any of the stop characters. Set length to a #gsize to get the length of the string. This function will return None on an error.  length:a #gsize to get the length of the data read in. 
    */
  readUntilFinish(result: import('../Gio').AsyncResult): [string, number];
  /**
    * Reads a string from the data input stream, up to the first occurrence of any of the stop characters.
    * @param stopChars characters to terminate the read
    * @param stopCharsLen length of stop_chars. May be -1 if stop_chars is nul-terminated
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a string with the data that was read before encountering any of the stop characters. Set length to a #gsize to get the length of the string. This function will return None on an error   length:a #gsize to get the length of the data read in 
    */
  readUpto(stopChars: string, stopCharsLen: number, cancellable: import('../Gio').Cancellable | null): [string, number];
  /**
    * The asynchronous version of Gio.DataInputStream.read_upto(). It is an error to have two outstanding calls to this function.
    * @param stopChars characters to terminate the read
    * @param stopCharsLen length of stop_chars. May be -1 if stop_chars is nul-terminated
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous call started by Gio.DataInputStream.read_upto_async().
    * @param result the Gio.AsyncResult that was provided to the callback
    * @returns a string with the data that was read before encountering any of the stop characters. Set length to a #gsize to get the length of the string. This function will return None on an error.  length:a #gsize to get the length of the data read in 
    */
  readUptoFinish(result: import('../Gio').AsyncResult): [string, number];
  /**
    * This function sets the byte order for the given self. All subsequent reads from the self will be read in the given order.
    * @param order a Gio.DataStreamByteOrder to set. 
    */
  setByteOrder(order: import('../Gio').DataStreamByteOrder): void;
  /**
    * Sets the newline type for the self.
    * @param type the type of new line return as Gio.DataStreamNewlineType. 
    */
  setNewlineType(type: import('../Gio').DataStreamNewlineType): void;
  /**
    * The byte order 
    */
  byteOrder: import('../Gio').DataStreamByteOrder;
  /**
    * The accepted types of line ending 
    */
  newlineType: import('../Gio').DataStreamNewlineType;
}

