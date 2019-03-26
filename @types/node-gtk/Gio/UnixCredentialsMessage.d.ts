import * as Gio from '../Gio';
export declare interface UnixCredentialsMessage extends Gio.SocketControlMessage { }

/**
  * This Gio.SocketControlMessage contains a Gio.Credentials instance.  It
may be sent using Gio.Socket.send_message() and received using
Gio.Socket.receive_message() over UNIX sockets (ie: sockets in the
Gio.SocketFamily.UNIX family). 
  */
export declare class UnixCredentialsMessage {
  /**
    * Checks if passing Gio.Credentials on a Gio.Socket is supported on this platform.
    * @returns True if supported, False otherwise 
    */
  static isSupported(): boolean;
  /**
    * Creates a new Gio.UnixCredentialsMessage with credentials matching the current processes.
    * @returns a new Gio.UnixCredentialsMessage 
    */
  static new(): import('../Gio').SocketControlMessage;
  /**
    * Creates a new Gio.UnixCredentialsMessage holding credentials.
    * @param credentials A Gio.Credentials object.
    * @returns a new Gio.UnixCredentialsMessage 
    */
  static newWithCredentials(credentials: import('../Gio').Credentials): import('../Gio').SocketControlMessage;
  /**
    * Gets the credentials stored in self.
    * @returns A Gio.Credentials instance. Do not free, it is owned by self. 
    */
  getCredentials(): import('../Gio').Credentials;
  /**
    * The credentials stored in the message 
    */
  credentials: import('../Gio').Credentials;
}

