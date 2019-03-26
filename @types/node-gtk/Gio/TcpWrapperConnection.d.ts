import * as Gio from '../Gio';
export declare interface TcpWrapperConnection extends Gio.TcpConnection { }

/**
  * A Gio.TcpWrapperConnection can be used to wrap a Gio.IOStream that is
based on a Gio.Socket, but which is not actually a
Gio.SocketConnection. This is used by Gio.SocketClient so that it can
always return a Gio.SocketConnection, even when the connection it has
actually created is not directly a Gio.SocketConnection. 
  */
export declare class TcpWrapperConnection {
  /**
    * Wraps base_io_stream and socket together as a Gio.SocketConnection.
    * @param baseIoStream the Gio.IOStream to wrap
    * @param socket the Gio.Socket associated with base_io_stream
    * @returns the new Gio.SocketConnection. 
    */
  static new(baseIoStream: import('../Gio').IOStream, socket: import('../Gio').Socket): import('../Gio').SocketConnection;
  /**
    * Get’s self’s base Gio.IOStream
    * @returns self’s base Gio.IOStream 
    */
  getBaseIoStream(): import('../Gio').IOStream;
  /**
    * The wrapped Gio.IOStream 
    */
  baseIoStream: import('../Gio').IOStream;
}

