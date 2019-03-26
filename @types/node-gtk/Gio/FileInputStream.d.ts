import * as Gio from '../Gio';
export declare interface FileInputStream extends Gio.InputStream, Gio.Seekable { }

/**
  * Gio.FileInputStream provides input streams that take their
content from a file. 
  */
export declare class FileInputStream {
  /**
    * Queries a file input stream the given attributes. This function blocks while querying the stream. For the asynchronous (non-blocking) version of this function, see Gio.FileInputStream.query_info_async(). While the stream is blocked, the stream will set the pending flag internally, and any other operations on the stream will fail with Gio.IOErrorEnum.PENDING.
    * @param attributes a file attribute query string.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a Gio.FileInfo, or None on error. 
    */
  queryInfo(attributes: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileInfo;
  /**
    * Queries the stream information asynchronously. When the operation is finished callback will be called. You can then call Gio.FileInputStream.query_info_finish() to get the result of the operation.
    * @param attributes a file attribute query string.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback callback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  queryInfoAsync(attributes: string, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous info query operation.
    * @param result a Gio.AsyncResult.
    * @returns Gio.FileInfo. 
    */
  queryInfoFinish(result: import('../Gio').AsyncResult): import('../Gio').FileInfo;
}

