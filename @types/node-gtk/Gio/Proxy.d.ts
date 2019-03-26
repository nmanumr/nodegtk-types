import * as GObject from '../GObject';
export declare interface Proxy extends GObject.GInterface { }

/**
  * A Gio.Proxy handles connecting to a remote host via a given type of
proxy server. It is implemented by the ‘gio-proxy’ extension point.
The extensions are named after their proxy protocol name. As an
example, a SOCKS5 proxy implementation can be retrieved with the
name ‘socks5’ using the function
Gio.IOExtensionPoint.get_extension_by_name(). 
  */
export declare class Proxy {
  /**
    * Lookup “gio-proxy” extension point for a proxy implementation that supports specified protocol.
    * @param protocol the proxy protocol name (e.g. http, socks, etc)
    * @returns return a Gio.Proxy or None if protocol is not supported. 
    */
  static getDefaultForProtocol(protocol: string): import('../Gio').Proxy;
  /**
    * Given connection to communicate with a proxy (eg, a Gio.SocketConnection that is connected to the proxy server), this does the necessary handshake to connect to proxy_address, and if required, wraps the Gio.IOStream to handle proxy payload.
    * @param connection a Gio.IOStream
    * @param proxyAddress a Gio.ProxyAddress
    * @param cancellable a Gio.Cancellable
    * @returns a Gio.IOStream that will replace connection. This might be the same as connection, in which case a reference will be added. 
    */
  connect(connection: import('../Gio').IOStream, proxyAddress: import('../Gio').ProxyAddress, cancellable: import('../Gio').Cancellable | null): import('../Gio').IOStream;
  /**
    * Asynchronous version of Gio.Proxy.connect().
    * @param connection a Gio.IOStream
    * @param proxyAddress a Gio.ProxyAddress
    * @param cancellable a Gio.Cancellable
    * @param callback a Gio.asyncReadyCallback
    * @param userData callback data 
    */
  connectAsync(connection: import('../Gio').IOStream, proxyAddress: import('../Gio').ProxyAddress, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * See Gio.Proxy.connect().
    * @param result a Gio.AsyncResult
    * @returns a Gio.IOStream. 
    */
  connectFinish(result: import('../Gio').AsyncResult): import('../Gio').IOStream;
  /**
    * Some proxy protocols expect to be passed a hostname, which they will resolve to an IP address themselves. Others, like SOCKS4, do not allow this. This function will return False if self is implementing such a protocol. When False is returned, the caller should resolve the destination hostname first, and then pass a Gio.ProxyAddress containing the stringified IP address to Gio.Proxy.connect() or Gio.Proxy.connect_async().
    * @returns True if hostname resolution is supported. 
    */
  supportsHostname(): boolean;
}

