import * as GObject from '../GObject';
export declare interface FileEnumerator extends GObject.Object { }

/**
  * Gio.FileEnumerator allows you to operate on a set of Gio.Files,
returning a Gio.FileInfo structure for each file enumerated (e.g.
Gio.File.enumerate_children() will return a Gio.FileEnumerator for each
of the children within a directory). 
  */
export declare class FileEnumerator {
  /**
    * Releases all resources used by this enumerator, making the enumerator return Gio.IOErrorEnum.CLOSED on all calls.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True on success or False on error. 
    */
  close(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously closes the file enumerator.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  closeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes closing a file enumerator, started from Gio.FileEnumerator.close_async().
    * @param result a Gio.AsyncResult.
    * @returns True if the close operation has finished successfully. 
    */
  closeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Return a new Gio.File which refers to the file named by info in the source directory of self.  This function is primarily intended to be used inside loops with Gio.FileEnumerator.next_file().
    * @param info a Gio.FileInfo gotten from Gio.FileEnumerator.next_file() or the async equivalents.
    * @returns a Gio.File for the Gio.FileInfo passed it. 
    */
  getChild(info: import('../Gio').FileInfo): import('../Gio').File;
  /**
    * Get the Gio.File container which is being enumerated.
    * @returns the Gio.File which is being enumerated. 
    */
  getContainer(): import('../Gio').File;
  /**
    * Checks if the file enumerator has pending operations.
    * @returns True if the self has pending operations. 
    */
  hasPending(): boolean;
  /**
    * Checks if the file enumerator has been closed.
    * @returns True if the self is closed. 
    */
  isClosed(): boolean;
  /**
    * This is a version of Gio.FileEnumerator.next_file() that’s easier to use correctly from C programs.  With Gio.FileEnumerator.next_file(), the bool return value signifies “end of iteration or error”, which requires allocation of a temporary GLib.Error.
    * @param cancellable a Gio.Cancellable
    * @returns out_info:Output location for the next Gio.FileInfo, or None out_child:Output location for the next Gio.File, or None 
    */
  iterate(cancellable: import('../Gio').Cancellable | null): [boolean, import('../Gio').FileInfo, import('../Gio').File];
  next(): void;
  /**
    * Returns information for the next file in the enumerated object. Will block until the information is available. The Gio.FileInfo returned from this function will contain attributes that match the attribute string that was passed when the Gio.FileEnumerator was created.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns A Gio.FileInfo or None on error or end of enumerator.  Free the returned object with GObject.Object.unref() when no longer needed. 
    */
  nextFile(cancellable: import('../Gio').Cancellable | null): import('../Gio').FileInfo | null;
  /**
    * Request information for a number of files from the enumerator asynchronously. When all i/o for the operation is finished the callback will be called with the requested information.
    * @param numFiles the number of file info objects to request
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  nextFilesAsync(numFiles: number, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes the asynchronous operation started with Gio.FileEnumerator.next_files_async().
    * @param result a Gio.AsyncResult.
    * @returns a GLib.List of Gio.FileInfos. You must free the list with g_list_free() and unref the infos with GObject.Object.unref() when you’re done with them. 
    */
  nextFilesFinish(result: import('../Gio').AsyncResult): import('../Gio').FileInfo[];
  /**
    * Sets the file enumerator as having pending operations.
    * @param pending a boolean value. 
    */
  setPending(pending: boolean): void;
  /**
    * The container that is being enumerated 
    */
  container: import('../Gio').File;
}

