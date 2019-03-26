import * as Gio from '../Gio';
export declare interface TcpConnection extends Gio.SocketConnection { }

/**
  * This is the subclass of Gio.SocketConnection that is created
for TCP/IP sockets. 
  */
export declare class TcpConnection {
  /**
    * Checks if graceful disconnects are used. See Gio.TcpConnection.set_graceful_disconnect().
    * @returns True if graceful disconnect is used on close, False otherwise 
    */
  getGracefulDisconnect(): boolean;
  /**
    * This enables graceful disconnects on close. A graceful disconnect means that we signal the receiving end that the connection is terminated and wait for it to close the connection before closing the connection.
    * @param gracefulDisconnect Whether to do graceful disconnects or not 
    */
  setGracefulDisconnect(gracefulDisconnect: boolean): void;
  /**
    * Whether or not close does a graceful disconnect 
    */
  gracefulDisconnect: boolean;
}

