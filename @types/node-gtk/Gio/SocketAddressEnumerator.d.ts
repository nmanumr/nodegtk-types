import * as GObject from '../GObject';
export declare interface SocketAddressEnumerator extends GObject.Object { }

/**
  * Enumerator type for objects that contain or generate
Gio.SocketAddress instances. 
  */
export declare abstract class SocketAddressEnumerator {
  /**
    * Retrieves the next Gio.SocketAddress from self. Note that this may block for some amount of time. (Eg, a Gio.NetworkAddress may need to do a DNS lookup before it can return an address.) Use Gio.SocketAddressEnumerator.next_async() if you need to avoid blocking.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a Gio.SocketAddress (owned by the caller), or None on error (in which case error will be set) or if there are no more addresses. 
    */
  next(cancellable: import('../Gio').Cancellable | null): import('../Gio').SocketAddress;
  /**
    * Asynchronously retrieves the next Gio.SocketAddress from self and then calls callback, which must call Gio.SocketAddressEnumerator.next_finish() to get the result.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  nextAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Retrieves the result of a completed call to Gio.SocketAddressEnumerator.next_async(). See Gio.SocketAddressEnumerator.next() for more information about error handling.
    * @param result a Gio.AsyncResult
    * @returns a Gio.SocketAddress (owned by the caller), or None on error (in which case error will be set) or if there are no more addresses. 
    */
  nextFinish(result: import('../Gio').AsyncResult): import('../Gio').SocketAddress;
}

