import * as GObject from '../GObject';
export declare interface SocketListener extends GObject.Object { }

/**
  * A Gio.SocketListener is an object that keeps track of a set
of server sockets and helps you accept sockets from any of the
socket, either sync or async. 
  */
export declare class SocketListener {
  /**
    * Creates a new Gio.SocketListener with no sockets to listen for. New listeners can be added with e.g. Gio.SocketListener.add_address() or Gio.SocketListener.add_inet_port().
    * @returns a new Gio.SocketListener. 
    */
  static new(): import('../Gio').SocketListener;
  /**
    * Blocks waiting for a client to connect to any of the sockets added to the listener. Returns a Gio.SocketConnection for the socket that was accepted.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a Gio.SocketConnection on success, None on error.  source_object:location where GObject.Object pointer will be stored, or None 
    */
  accept(cancellable: import('../Gio').Cancellable | null): [import('../Gio').SocketConnection, import('../GObject').Object | null];
  /**
    * This is the asynchronous version of Gio.SocketListener.accept().
    * @param cancellable a Gio.Cancellable, or None
    * @param callback a Gio.asyncReadyCallback
    * @param userData user data for the callback 
    */
  acceptAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async accept operation. See Gio.SocketListener.accept_async()
    * @param result a Gio.AsyncResult.
    * @returns a Gio.SocketConnection on success, None on error.  source_object:Optional GObject.Object identifying this source 
    */
  acceptFinish(result: import('../Gio').AsyncResult): [import('../Gio').SocketConnection, import('../GObject').Object | null];
  /**
    * Blocks waiting for a client to connect to any of the sockets added to the listener. Returns the Gio.Socket that was accepted.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a Gio.Socket on success, None on error.  source_object:location where GObject.Object pointer will be stored, or None. 
    */
  acceptSocket(cancellable: import('../Gio').Cancellable | null): [import('../Gio').Socket, import('../GObject').Object | null];
  /**
    * This is the asynchronous version of Gio.SocketListener.accept_socket().
    * @param cancellable a Gio.Cancellable, or None
    * @param callback a Gio.asyncReadyCallback
    * @param userData user data for the callback 
    */
  acceptSocketAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async accept operation. See Gio.SocketListener.accept_socket_async()
    * @param result a Gio.AsyncResult.
    * @returns a Gio.Socket on success, None on error.  source_object:Optional GObject.Object identifying this source 
    */
  acceptSocketFinish(result: import('../Gio').AsyncResult): [import('../Gio').Socket, import('../GObject').Object | null];
  /**
    * Creates a socket of type type and protocol protocol, binds it to address and adds it to the set of sockets we’re accepting sockets from.
    * @param address a Gio.SocketAddress
    * @param type a Gio.SocketType
    * @param protocol a Gio.SocketProtocol
    * @param sourceObject Optional GObject.Object identifying this source
    * @returns True on success, False on error.   effective_address:  location to store the address that was bound to, or None. 
    */
  addAddress(address: import('../Gio').SocketAddress, type: import('../Gio').SocketType, protocol: import('../Gio').SocketProtocol, sourceObject: import('../GObject').Object | null): [boolean, import('../Gio').SocketAddress];
  /**
    * Listens for TCP connections on any available port number for both IPv6 and IPv4 (if each is available).
    * @param sourceObject Optional GObject.Object identifying this source
    * @returns the port number, or 0 in case of failure. 
    */
  addAnyInetPort(sourceObject: import('../GObject').Object | null): number;
  /**
    * Helper function for Gio.SocketListener.add_address() that creates a TCP/IP socket listening on IPv4 and IPv6 (if supported) on the specified port on all interfaces.
    * @param port an IP port number (non-zero)
    * @param sourceObject Optional GObject.Object identifying this source
    * @returns True on success, False on error. 
    */
  addInetPort(port: number, sourceObject: import('../GObject').Object | null): boolean;
  /**
    * Adds socket to the set of sockets that we try to accept new clients from. The socket must be bound to a local address and listened to.
    * @param socket a listening Gio.Socket
    * @param sourceObject Optional GObject.Object identifying this source
    * @returns True on success, False on error. 
    */
  addSocket(socket: import('../Gio').Socket, sourceObject: import('../GObject').Object | null): boolean;
  /**
    * Closes all the sockets in the listener. 
    */
  close(): void;
  /**
    * Sets the listen backlog on the sockets in the listener.
    * @param listenBacklog an integer 
    */
  setBacklog(listenBacklog: number): void;
  /**
    * outstanding connections in the listen queue 
    */
  listenBacklog: number;
}

