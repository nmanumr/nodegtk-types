/**
  * Gio.FileOutputStream provides output streams that write their
content to a file. 
  */
export declare class FileOutputStream extends import('../Gio').OutputStream, import('../Gio').Seekable{
/**
  * Gets the entity tag for the file when it has been written. This must be called after the stream has been written and closed, as the etag can change while writing.
  * @returns the entity tag for the stream. 
  */
getEtag(): string;
/**
  * Queries a file output stream for the given attributes. This function blocks while querying the stream. For the asynchronous version of this function, see Gio.FileOutputStream.query_info_async(). While the stream is blocked, the stream will set the pending flag internally, and any other operations on the stream will fail with Gio.IOErrorEnum.PENDING.
  * @param attributes a file attribute query string.
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @returns a Gio.FileInfo for the self, or None on error. 
  */
queryInfo(attributes: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileInfo;
/**
  * Asynchronously queries the self for a Gio.FileInfo. When completed, callback will be called with a Gio.AsyncResult which can be used to finish the operation with Gio.FileOutputStream.query_info_finish().
  * @param attributes a file attribute query string.
  * @param ioPriority the I/O priority of the request
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @param callback callback to call when the request is satisfied
  * @param userData the data to pass to callback function 
  */
queryInfoAsync(attributes: string, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').AsyncReadyCallback | null, userData: Object | null): void;
/**
  * Finalizes the asynchronous query started by Gio.FileOutputStream.query_info_async().
  * @param result a Gio.AsyncResult.
  * @returns A Gio.FileInfo for the finished query. 
  */
queryInfoFinish(result: import('../Gio').AsyncResult): import('../Gio').FileInfo;
/**
  *   
  */
parentInstance: import('../Gio').OutputStream;
}

