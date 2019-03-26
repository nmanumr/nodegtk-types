import * as Gio from '../Gio';
export declare interface SocketService extends Gio.SocketListener { }

/**
  * A Gio.SocketService is an object that represents a service that
is provided to the network or over local sockets.  When a new
connection is made to the service the Gio.SocketService ::incoming
signal is emitted. 
  */
export declare class SocketService {
  /**
    * Creates a new Gio.SocketService with no sockets to listen for. New listeners can be added with e.g. Gio.SocketListener.add_address() or Gio.SocketListener.add_inet_port().
    * @returns a new Gio.SocketService. 
    */
  static new(): import('../Gio').SocketService;
  /**
    * Check whether the service is active or not. An active service will accept new clients that connect, while a non-active service will let connecting clients queue up until the service is started.
    * @returns True if the service is active, False otherwise 
    */
  isActive(): boolean;
  /**
    * Restarts the service, i.e. start accepting connections from the added sockets when the mainloop runs. This only needs to be called after the service has been stopped from Gio.SocketService.stop(). 
    */
  start(): void;
  /**
    * Stops the service, i.e. stops accepting connections from the added sockets when the mainloop runs. 
    */
  stop(): void;
  /**
    * Whether the service is currently accepting connections 
    */
  active: boolean;
}

