import * as GObject from '../GObject';
export declare interface ProxyResolver extends GObject.GInterface { }

/**
  * Gio.ProxyResolver provides synchronous and asynchronous network proxy
resolution. Gio.ProxyResolver is used within Gio.SocketClient through
the method Gio.SocketConnectable.proxy_enumerate(). 
  */
export declare class ProxyResolver {
  /**
    * Gets the default Gio.ProxyResolver for the system.
    * @returns the default Gio.ProxyResolver. 
    */
  static getDefault(): import('../Gio').ProxyResolver;
  /**
    * Checks if self can be used on this system. (This is used internally; Gio.ProxyResolver.get_default() will only return a proxy resolver that returns True for this method.)
    * @returns True if self is supported. 
    */
  isSupported(): boolean;
  /**
    * Looks into the system proxy configuration to determine what proxy, if any, to use to connect to uri. The returned proxy URIs are of the form <protocol>://[user[:password]@]host:port or direct://, where <protocol> could be http, rtsp, socks or other proxying protocol.
    * @param uri a URI representing the destination to connect to
    * @param cancellable a Gio.Cancellable, or None
    * @returns A None-terminated array of proxy URIs. Must be freed with GLib.strfreev(). 
    */
  lookup(uri: string, cancellable: import('../Gio').Cancellable | null): string[];
  /**
    * Asynchronous lookup of proxy. See Gio.ProxyResolver.lookup() for more details.
    * @param uri a URI representing the destination to connect to
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call after resolution completes
    * @param userData data for callback 
    */
  lookupAsync(uri: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Call this function to obtain the array of proxy URIs when Gio.ProxyResolver.lookup_async() is complete. See Gio.ProxyResolver.lookup() for more details.
    * @param result the result passed to your Gio.asyncReadyCallback
    * @returns A None-terminated array of proxy URIs. Must be freed with GLib.strfreev(). 
    */
  lookupFinish(result: import('../Gio').AsyncResult): string[];
}

