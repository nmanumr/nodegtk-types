/**
  * Gio.SocketClient is a lightweight high-level utility class for connecting to
a network host using a connection oriented socket type. 
  */
export declare class SocketClient extends import('../GObject').Object{
/**
  * Creates a new Gio.SocketClient with the default options.
  * @returns a Gio.SocketClient. Free the returned object with GObject.Object.unref(). 
  */
static new(): import('../Gio').SocketClient;
/**
  * Enable proxy protocols to be handled by the application. When the indicated proxy protocol is returned by the Gio.ProxyResolver, Gio.SocketClient will consider this protocol as supported but will not try to find a Gio.Proxy instance to handle handshaking. The application must check for this case by calling Gio.SocketConnection.get_remote_address() on the returned Gio.SocketConnection, and seeing if it’s a Gio.ProxyAddress of the appropriate type, to determine whether or not it needs to handle the proxy handshaking itself.
  * @param protocol The proxy protocol 
  */
addApplicationProxy(protocol: string): void;
/**
  * Tries to resolve the connectable and make a network connection to it.
  * @param connectable a Gio.SocketConnectable specifying the remote address.
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connect(connectable: import('../Gio').SocketConnectable, cancellable: import('../Gio').Cancellable | null): import('../Gio').SocketConnection;
/**
  * This is the asynchronous version of Gio.SocketClient.connect().
  * @param connectable a Gio.SocketConnectable specifying the remote address.
  * @param cancellable a Gio.Cancellable, or None
  * @param callback a Gio.AsyncReadyCallback
  * @param userData user data for the callback 
  */
connectAsync(connectable: import('../Gio').SocketConnectable, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').AsyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an async connect operation. See Gio.SocketClient.connect_async()
  * @param result a Gio.AsyncResult.
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connectFinish(result: import('../Gio').AsyncResult): import('../Gio').SocketConnection;
/**
  * This is a helper function for Gio.SocketClient.connect().
  * @param hostAndPort the name and optionally port of the host to connect to
  * @param defaultPort the default port to connect to
  * @param cancellable a Gio.Cancellable, or None
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connectToHost(hostAndPort: string, defaultPort: number, cancellable: import('../Gio').Cancellable | null): import('../Gio').SocketConnection;
/**
  * This is the asynchronous version of Gio.SocketClient.connect_to_host().
  * @param hostAndPort the name and optionally the port of the host to connect to
  * @param defaultPort the default port to connect to
  * @param cancellable a Gio.Cancellable, or None
  * @param callback a Gio.AsyncReadyCallback
  * @param userData user data for the callback 
  */
connectToHostAsync(hostAndPort: string, defaultPort: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').AsyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an async connect operation. See Gio.SocketClient.connect_to_host_async()
  * @param result a Gio.AsyncResult.
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connectToHostFinish(result: import('../Gio').AsyncResult): import('../Gio').SocketConnection;
/**
  * Attempts to create a TCP connection to a service.
  * @param domain a domain name
  * @param service the name of the service to connect to
  * @param cancellable a Gio.Cancellable, or None
  * @returns a Gio.SocketConnection if successful, or None on error 
  */
connectToService(domain: string, service: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').SocketConnection;
/**
  * This is the asynchronous version of Gio.SocketClient.connect_to_service().
  * @param domain a domain name
  * @param service the name of the service to connect to
  * @param cancellable a Gio.Cancellable, or None
  * @param callback a Gio.AsyncReadyCallback
  * @param userData user data for the callback 
  */
connectToServiceAsync(domain: string, service: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').AsyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an async connect operation. See Gio.SocketClient.connect_to_service_async()
  * @param result a Gio.AsyncResult.
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connectToServiceFinish(result: import('../Gio').AsyncResult): import('../Gio').SocketConnection;
/**
  * This is a helper function for Gio.SocketClient.connect().
  * @param uri A network URI
  * @param defaultPort the default port to connect to
  * @param cancellable a Gio.Cancellable, or None
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connectToUri(uri: string, defaultPort: number, cancellable: import('../Gio').Cancellable | null): import('../Gio').SocketConnection;
/**
  * This is the asynchronous version of Gio.SocketClient.connect_to_uri().
  * @param uri a network uri
  * @param defaultPort the default port to connect to
  * @param cancellable a Gio.Cancellable, or None
  * @param callback a Gio.AsyncReadyCallback
  * @param userData user data for the callback 
  */
connectToUriAsync(uri: string, defaultPort: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').AsyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an async connect operation. See Gio.SocketClient.connect_to_uri_async()
  * @param result a Gio.AsyncResult.
  * @returns a Gio.SocketConnection on success, None on error. 
  */
connectToUriFinish(result: import('../Gio').AsyncResult): import('../Gio').SocketConnection;
/**
  * Gets the proxy enable state; see Gio.SocketClient.set_enable_proxy()
  * @returns whether proxying is enabled 
  */
getEnableProxy(): boolean;
/**
  * Gets the socket family of the socket client.
  * @returns a Gio.SocketFamily 
  */
getFamily(): import('../Gio').SocketFamily;
/**
  * Gets the local address of the socket client.
  * @returns a Gio.SocketAddress or None. Do not free. 
  */
getLocalAddress(): import('../Gio').SocketAddress;
/**
  * Gets the protocol name type of the socket client.
  * @returns a Gio.SocketProtocol 
  */
getProtocol(): import('../Gio').SocketProtocol;
/**
  * Gets the Gio.ProxyResolver being used by self. Normally, this will be the resolver returned by Gio.ProxyResolver.get_default(), but you can override it with Gio.SocketClient.set_proxy_resolver().
  * @returns The Gio.ProxyResolver being used by self. 
  */
getProxyResolver(): import('../Gio').ProxyResolver;
/**
  * Gets the socket type of the socket client.
  * @returns a Gio.SocketFamily 
  */
getSocketType(): import('../Gio').SocketType;
/**
  * Gets the I/O timeout time for sockets created by self.
  * @returns the timeout in seconds 
  */
getTimeout(): number;
/**
  * Gets whether self creates TLS connections. See Gio.SocketClient.set_tls() for details.
  * @returns whether self uses TLS 
  */
getTls(): boolean;
/**
  * Gets the TLS validation flags used creating TLS connections via self.
  * @returns the TLS validation flags 
  */
getTlsValidationFlags(): import('../Gio').TlsCertificateFlags;
/**
  * Sets whether or not self attempts to make connections via a proxy server. When enabled (the default), Gio.SocketClient will use a Gio.ProxyResolver to determine if a proxy protocol such as SOCKS is needed, and automatically do the necessary proxy negotiation.
  * @param enable whether to enable proxies 
  */
setEnableProxy(enable: boolean): void;
/**
  * Sets the socket family of the socket client. If this is set to something other than Gio.SocketFamily.INVALID then the sockets created by this object will be of the specified family.
  * @param family a Gio.SocketFamily 
  */
setFamily(family: import('../Gio').SocketFamily): void;
/**
  * Sets the local address of the socket client. The sockets created by this object will bound to the specified address (if not None) before connecting.
  * @param address a Gio.SocketAddress, or None 
  */
setLocalAddress(address: import('../Gio').SocketAddress | null): void;
/**
  * Sets the protocol of the socket client. The sockets created by this object will use of the specified protocol.
  * @param protocol a Gio.SocketProtocol 
  */
setProtocol(protocol: import('../Gio').SocketProtocol): void;
/**
  * Overrides the Gio.ProxyResolver used by self. You can call this if you want to use specific proxies, rather than using the system default proxy settings.
  * @param proxyResolver a Gio.ProxyResolver, or None for the default. 
  */
setProxyResolver(proxyResolver: import('../Gio').ProxyResolver | null): void;
/**
  * Sets the socket type of the socket client. The sockets created by this object will be of the specified type.
  * @param type a Gio.SocketType 
  */
setSocketType(type: import('../Gio').SocketType): void;
/**
  * Sets the I/O timeout for sockets created by self. timeout is a time in seconds, or 0 for no timeout (the default).
  * @param timeout the timeout 
  */
setTimeout(timeout: number): void;
/**
  * Sets whether self creates TLS (aka SSL) connections. If tls is True, self will wrap its connections in a Gio.TlsClientConnection and perform a TLS handshake when connecting.
  * @param tls whether to use TLS 
  */
setTls(tls: boolean): void;
/**
  * Sets the TLS validation flags used when creating TLS connections via self. The default value is Gio.TlsCertificateFlags.VALIDATE_ALL.
  * @param flags the validation flags 
  */
setTlsValidationFlags(flags: import('../Gio').TlsCertificateFlags): void;
/**
  * Enable proxy support 
  */
enableProxy: boolean;
/**
  * The sockets address family to use for socket construction 
  */
family: import('../Gio').SocketFamily;
/**
  * The local address constructed sockets will be bound to 
  */
localAddress: import('../Gio').SocketAddress;
/**
  * The protocol to use for socket construction, or 0 for default 
  */
protocol: import('../Gio').SocketProtocol;
/**
  * The proxy resolver to use 
  */
proxyResolver: import('../Gio').ProxyResolver;
/**
  * The I/O timeout for sockets, or 0 for none 
  */
timeout: number;
/**
  * Whether to create TLS connections 
  */
tls: boolean;
/**
  * TLS validation flags to use 
  */
tlsValidationFlags: import('../Gio').TlsCertificateFlags;
/**
  * The sockets type to use for socket construction 
  */
type: import('../Gio').SocketType;
/**
  *   
  */
parentInstance: import('../GObject').Object;
}

