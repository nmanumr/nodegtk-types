import * as GObject from '../GObject';

/**
  * Gio.IOStream represents an object that has both read and write streams.
Generally the two streams act as separate input and output streams,
but they share some common resources and state. For instance, for
seekable streams, both streams may use the same position. 
  */
export declare abstract class IOStream extends GObject.Object {
  /**
    * Finishes an asynchronous io stream splice operation.
    * @param result a Gio.AsyncResult.
    * @returns True on success, False otherwise. 
    */
  static spliceFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Clears the pending flag on self. 
    */
  clearPending(): void;
  /**
    * Closes the stream, releasing resources related to it. This will also close the individual input and output streams, if they are not already closed.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True on success, False on failure 
    */
  close(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Requests an asynchronous close of the stream, releasing resources related to it. When the operation is finished callback will be called. You can then call Gio.IOStream.close_finish() to get the result of the operation.
    * @param ioPriority the io priority of the request
    * @param cancellable optional cancellable object
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  closeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Closes a stream.
    * @param result a Gio.AsyncResult
    * @returns True if stream was successfully closed, False otherwise. 
    */
  closeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets the input stream for this object. This is used for reading.
    * @returns a Gio.InputStream, owned by the Gio.IOStream. Do not free. 
    */
  getInputStream(): import('../Gio').InputStream;
  /**
    * Gets the output stream for this object. This is used for writing.
    * @returns a Gio.OutputStream, owned by the Gio.IOStream. Do not free. 
    */
  getOutputStream(): import('../Gio').OutputStream;
  /**
    * Checks if a stream has pending actions.
    * @returns True if self has pending actions. 
    */
  hasPending(): boolean;
  /**
    * Checks if a stream is closed.
    * @returns True if the stream is closed. 
    */
  isClosed(): boolean;
  /**
    * Sets self to have actions pending. If the pending flag is already set or self is closed, it will return False and set error.
    * @returns True if pending was previously unset and is now set. 
    */
  setPending(): boolean;
  /**
    * Asyncronously splice the output stream of self to the input stream of stream2, and splice the output stream of stream2 to the input stream of self.
    * @param stream2 a Gio.IOStream.
    * @param flags a set of Gio.IOStreamSpliceFlags.
    * @param ioPriority the io priority of the request.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback.
    * @param userData user data passed to callback. 
    */
  spliceAsync(stream2: import('../Gio').IOStream, flags: import('../Gio').IOStreamSpliceFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Is the stream closed 
    */
  readonly closed: boolean;
  /**
    * The Gio.InputStream to read from 
    */
  readonly inputStream: import('../Gio').InputStream;
  /**
    * The Gio.OutputStream to write to 
    */
  readonly outputStream: import('../Gio').OutputStream;
}

