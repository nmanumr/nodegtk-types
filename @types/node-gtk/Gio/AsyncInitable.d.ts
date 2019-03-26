import * as GObject from '../GObject';
export declare interface AsyncInitable extends GObject.GInterface { }

/**
  * This is the asynchronous version of Gio.Initable; it behaves the same
in all ways except that initialization is asynchronous. For more details
see the descriptions on Gio.Initable. 
  */
export declare class AsyncInitable {
  /**
    * Helper function for constructing Gio.AsyncInitable object. This is similar to GObject.Object.newv() but also initializes the object asynchronously.
    * @param objectType a GObject.GType supporting Gio.AsyncInitable.
    * @param nParameters the number of parameters in parameters
    * @param parameters the parameters to use to construct the object
    * @param ioPriority the I/O priority of the operation
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the initialization is finished
    * @param userData the data to pass to callback function 
    */
  static newvAsync(objectType: import('../GObject').GType, nParameters: number, parameters: import('../GObject').Parameter, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Starts asynchronous initialization of the object implementing the interface. This must be done before any real use of the object after initial construction. If the object also implements Gio.Initable you can optionally call Gio.Initable.init() instead.
    * @param ioPriority the I/O priority of the operation
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  initAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes asynchronous initialization and returns the result. See Gio.AsyncInitable.init_async().
    * @param res a Gio.AsyncResult.
    * @returns True if successful. If an error has occurred, this function will return False and set error appropriately if present. 
    */
  initFinish(res: import('../Gio').AsyncResult): boolean;
  /**
    * Finishes the async construction for the various g_async_initable_new calls, returning the created object or None on error.
    * @param res the Gio.AsyncResult from the callback
    * @returns a newly created GObject.Object, or None on error. Free with GObject.Object.unref(). 
    */
  newFinish(res: import('../Gio').AsyncResult): import('../GObject').Object;
}

