/**
  * Gio.SocketConnection is a Gio.IOStream for a connected socket. They
can be created either by Gio.SocketClient when connecting to a host,
or by Gio.SocketListener when accepting a new client. 
  */
export declare class SocketConnection extends import('../Gio').IOStream{
/**
  * Looks up the GObject.GType to be used when creating socket connections on sockets with the specified family, type and protocol_id.
  * @param family a Gio.SocketFamily
  * @param type a Gio.SocketType
  * @param protocolId a protocol id
  * @returns a GObject.GType 
  */
static factoryLookupType(family: import('../Gio').SocketFamily, type: import('../Gio').SocketType, protocolId: number): import('../GObject').GType;
/**
  * Looks up the GObject.GType to be used when creating socket connections on sockets with the specified family, type and protocol.
  * @param gType a GObject.GType, inheriting from %G_TYPE_SOCKET_CONNECTION
  * @param family a Gio.SocketFamily
  * @param type a Gio.SocketType
  * @param protocol a protocol id 
  */
static factoryRegisterType(gType: import('../GObject').GType, family: import('../Gio').SocketFamily, type: import('../Gio').SocketType, protocol: number): void;
/**
  * Connect self to the specified remote address.
  * @param address a Gio.SocketAddress specifying the remote address.
  * @param cancellable a Gio.Cancellable or None
  * @returns True if the connection succeeded, False on error 
  */
connect(address: import('../Gio').SocketAddress, cancellable: import('../Gio').Cancellable | null): boolean;
/**
  * Asynchronously connect self to the specified remote address.
  * @param address a Gio.SocketAddress specifying the remote address.
  * @param cancellable a Gio.Cancellable or None
  * @param callback a Gio.AsyncReadyCallback
  * @param userData user data for the callback 
  */
connectAsync(address: import('../Gio').SocketAddress, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').AsyncReadyCallback | null, userData: Object | null): void;
/**
  * Gets the result of a Gio.SocketConnection.connect_async() call.
  * @param result the Gio.AsyncResult
  * @returns True if the connection succeeded, False on error 
  */
connectFinish(result: import('../Gio').AsyncResult): boolean;
/**
  * Try to get the local address of a socket connection.
  * @returns a Gio.SocketAddress or None on error. Free the returned object with GObject.Object.unref(). 
  */
getLocalAddress(): import('../Gio').SocketAddress;
/**
  * Try to get the remote address of a socket connection.
  * @returns a Gio.SocketAddress or None on error. Free the returned object with GObject.Object.unref(). 
  */
getRemoteAddress(): import('../Gio').SocketAddress;
/**
  * Gets the underlying Gio.Socket object of the connection. This can be useful if you want to do something unusual on it not supported by the Gio.SocketConnection APIs.
  * @returns a Gio.Socket or None on error. 
  */
getSocket(): import('../Gio').Socket;
/**
  * Checks if self is connected. This is equivalent to calling Gio.Socket.is_connected() on self’s underlying Gio.Socket.
  * @returns whether self is connected 
  */
isConnected(): boolean;
/**
  * The underlying Gio.Socket 
  */
socket: import('../Gio').Socket;
/**
  *   
  */
parentInstance: import('../Gio').IOStream;
}

