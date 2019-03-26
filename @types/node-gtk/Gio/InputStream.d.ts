import * as GObject from '../GObject';

/**
  * Gio.InputStream has functions to read from a stream (Gio.InputStream.read()),
to close a stream (Gio.InputStream.close()) and to skip some content
(Gio.InputStream.skip()). 
  */
export declare abstract class InputStream extends GObject.Object {
  /**
    * Clears the pending flag on self. 
    */
  clearPending(): void;
  /**
    * Closes the stream, releasing resources related to it.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True on success, False on failure 
    */
  close(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Requests an asynchronous closes of the stream, releasing resources related to it. When the operation is finished callback will be called. You can then call Gio.InputStream.close_finish() to get the result of the operation.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional cancellable object
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  closeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes closing a stream asynchronously, started from Gio.InputStream.close_async().
    * @param result a Gio.AsyncResult.
    * @returns True if the stream was closed successfully. 
    */
  closeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Checks if an input stream has pending actions.
    * @returns True if self has pending actions. 
    */
  hasPending(): boolean;
  /**
    * Checks if an input stream is closed.
    * @returns True if the stream is closed. 
    */
  isClosed(): boolean;
  /**
    * Tries to read count bytes from the stream into the buffer starting at buffer. Will block during this read.
    * @param buffer a buffer to read data into (which should be at least count bytes long).
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns Number of bytes read, or -1 on error, or 0 on end of file. 
    */
  read(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Tries to read count bytes from the stream into the buffer starting at buffer. Will block during this read.
    * @param buffer a buffer to read data into (which should be at least count bytes long).
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True on success, False if there was an error   bytes_read:location to store the number of bytes that was read from the stream 
    */
  readAll(buffer: Int8Array, cancellable: import('../Gio').Cancellable | null): [boolean, number];
  /**
    * Request an asynchronous read of count bytes from the stream into the buffer starting at buffer.
    * @param buffer a buffer to read data into (which should be at least count bytes long)
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  readAllAsync(buffer: Int8Array, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous stream read operation started with Gio.InputStream.read_all_async().
    * @param result a Gio.AsyncResult
    * @returns True on success, False if there was an error  bytes_read:location to store the number of bytes that was read from the stream 
    */
  readAllFinish(result: import('../Gio').AsyncResult): [boolean, number];
  /**
    * Request an asynchronous read of count bytes from the stream into the buffer starting at buffer. When the operation is finished callback will be called. You can then call Gio.InputStream.read_finish() to get the result of the operation.
    * @param buffer a buffer to read data into (which should be at least count bytes long).
    * @param ioPriority the I/O priority of the request.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  readAsync(buffer: Int8Array, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Like Gio.InputStream.read(), this tries to read count bytes from the stream in a blocking fashion. However, rather than reading into a user-supplied buffer, this will create a new GLib.Bytes containing the data that was read. This may be easier to use from language bindings.
    * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a new GLib.Bytes, or None on error 
    */
  readBytes(count: number, cancellable: import('../Gio').Cancellable | null): import('../GLib').Bytes;
  /**
    * Request an asynchronous read of count bytes from the stream into a new GLib.Bytes. When the operation is finished callback will be called. You can then call Gio.InputStream.read_bytes_finish() to get the result of the operation.
    * @param count the number of bytes that will be read from the stream
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  readBytesAsync(count: number, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous stream read-into-GLib.Bytes operation.
    * @param result a Gio.AsyncResult.
    * @returns the newly-allocated GLib.Bytes, or None on error 
    */
  readBytesFinish(result: import('../Gio').AsyncResult): import('../GLib').Bytes;
  /**
    * Finishes an asynchronous stream read operation.
    * @param result a Gio.AsyncResult.
    * @returns number of bytes read in, or -1 on error, or 0 on end of file. 
    */
  readFinish(result: import('../Gio').AsyncResult): number;
  /**
    * Sets self to have actions pending. If the pending flag is already set or self is closed, it will return False and set error.
    * @returns True if pending was previously unset and is now set. 
    */
  setPending(): boolean;
  /**
    * Tries to skip count bytes from the stream. Will block during the operation.
    * @param count the number of bytes that will be skipped from the stream
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns Number of bytes skipped, or -1 on error 
    */
  skip(count: number, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Request an asynchronous skip of count bytes from the stream. When the operation is finished callback will be called. You can then call Gio.InputStream.skip_finish() to get the result of the operation.
    * @param count the number of bytes that will be skipped from the stream
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  skipAsync(count: number, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes a stream skip operation.
    * @param result a Gio.AsyncResult.
    * @returns the size of the bytes skipped, or %-1 on error. 
    */
  skipFinish(result: import('../Gio').AsyncResult): number;
}

