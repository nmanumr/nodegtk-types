import * as GObject from '../GObject';
export declare interface OutputStream extends GObject.Object { }

/**
  * Gio.OutputStream has functions to write to a stream (Gio.OutputStream.write()),
to close a stream (Gio.OutputStream.close()) and to flush pending writes
(Gio.OutputStream.flush()). 
  */
export declare abstract class OutputStream {
  /**
    * Clears the pending flag on self. 
    */
  clearPending(): void;
  /**
    * Closes the stream, releasing resources related to it.
    * @param cancellable optional cancellable object
    * @returns True on success, False on failure 
    */
  close(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Requests an asynchronous close of the stream, releasing resources related to it. When the operation is finished callback will be called. You can then call Gio.OutputStream.close_finish() to get the result of the operation.
    * @param ioPriority the io priority of the request.
    * @param cancellable optional cancellable object
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  closeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Closes an output stream.
    * @param result a Gio.AsyncResult.
    * @returns True if stream was successfully closed, False otherwise. 
    */
  closeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Forces a write of all user-space buffered data for the given self. Will block during the operation. Closing the stream will implicitly cause a flush.
    * @param cancellable optional cancellable object
    * @returns True on success, False on error 
    */
  flush(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Forces an asynchronous write of all user-space buffered data for the given self. For behaviour details see Gio.OutputStream.flush().
    * @param ioPriority the io priority of the request.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  flushAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes flushing an output stream.
    * @param result a Gio.AsyncResult.
    * @returns True if flush operation succeeded, False otherwise. 
    */
  flushFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Checks if an output stream has pending actions.
    * @returns True if self has pending actions. 
    */
  hasPending(): boolean;
  /**
    * Checks if an output stream has already been closed.
    * @returns True if self is closed. False otherwise. 
    */
  isClosed(): boolean;
  /**
    * Checks if an output stream is being closed. This can be used inside e.g. a flush implementation to see if the flush (or other i/o operation) is called from within the closing operation.
    * @returns True if self is being closed. False otherwise. 
    */
  isClosing(): boolean;
  /**
    * Sets self to have actions pending. If the pending flag is already set or self is closed, it will return False and set error.
    * @returns True if pending was previously unset and is now set. 
    */
  setPending(): boolean;
  /**
    * Splices an input stream into an output stream.
    * @param source a Gio.InputStream.
    * @param flags a set of Gio.OutputStreamSpliceFlags.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a #gssize containing the size of the data spliced, or -1 if an error occurred. Note that if the number of bytes spliced is greater than GObject.G_MAXSSIZE, then that will be returned, and there is no way to determine the actual number of bytes spliced. 
    */
  splice(source: import('../Gio').InputStream, flags: import('../Gio').OutputStreamSpliceFlags, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Splices a stream asynchronously. When the operation is finished callback will be called. You can then call Gio.OutputStream.splice_finish() to get the result of the operation.
    * @param source a Gio.InputStream.
    * @param flags a set of Gio.OutputStreamSpliceFlags.
    * @param ioPriority the io priority of the request.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback.
    * @param userData user data passed to callback. 
    */
  spliceAsync(source: import('../Gio').InputStream, flags: import('../Gio').OutputStreamSpliceFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous stream splice operation.
    * @param result a Gio.AsyncResult.
    * @returns a #gssize of the number of bytes spliced. Note that if the number of bytes spliced is greater than GObject.G_MAXSSIZE, then that will be returned, and there is no way to determine the actual number of bytes spliced. 
    */
  spliceFinish(result: import('../Gio').AsyncResult): number;
  /**
    * Tries to write count bytes from buffer into the stream. Will block during the operation.
    * @param buffer the buffer containing the data to write.
    * @param cancellable optional cancellable object
    * @returns Number of bytes written, or -1 on error 
    */
  write(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Tries to write count bytes from buffer into the stream. Will block during the operation.
    * @param buffer the buffer containing the data to write.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True on success, False if there was an error   bytes_written:location to store the number of bytes that was written to the stream 
    */
  writeAll(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): [boolean, number];
  /**
    * Request an asynchronous write of count bytes from buffer into the stream. When the operation is finished callback will be called. You can then call Gio.OutputStream.write_all_finish() to get the result of the operation.
    * @param buffer the buffer containing the data to write
    * @param ioPriority the io priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  writeAllAsync(buffer: Int8Array, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous stream write operation started with Gio.OutputStream.write_all_async().
    * @param result a Gio.AsyncResult
    * @returns True on success, False if there was an error  bytes_written:location to store the number of bytes that was written to the stream 
    */
  writeAllFinish(result: import('../Gio').AsyncResult): [boolean, number];
  /**
    * Request an asynchronous write of count bytes from buffer into the stream. When the operation is finished callback will be called. You can then call Gio.OutputStream.write_finish() to get the result of the operation.
    * @param buffer the buffer containing the data to write.
    * @param ioPriority the io priority of the request.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  writeAsync(buffer: Int8Array, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * A wrapper function for Gio.OutputStream.write() which takes a GLib.Bytes as input.  This can be more convenient for use by language bindings or in other cases where the refcounted nature of GLib.Bytes is helpful over a bare pointer interface.
    * @param bytes the GLib.Bytes to write
    * @param cancellable optional cancellable object
    * @returns Number of bytes written, or -1 on error 
    */
  writeBytes(bytes: import('../GLib').Bytes, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * This function is similar to Gio.OutputStream.write_async(), but takes a GLib.Bytes as input.  Due to the refcounted nature of GLib.Bytes, this allows the stream to avoid taking a copy of the data.
    * @param bytes The bytes to write
    * @param ioPriority the io priority of the request.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  writeBytesAsync(bytes: import('../GLib').Bytes, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes a stream write-from-GLib.Bytes operation.
    * @param result a Gio.AsyncResult.
    * @returns a #gssize containing the number of bytes written to the stream. 
    */
  writeBytesFinish(result: import('../Gio').AsyncResult): number;
  /**
    * Finishes a stream write operation.
    * @param result a Gio.AsyncResult.
    * @returns a #gssize containing the number of bytes written to the stream. 
    */
  writeFinish(result: import('../Gio').AsyncResult): number;
}

