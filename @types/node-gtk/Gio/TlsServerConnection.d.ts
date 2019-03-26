import * as GObject from '../GObject';
export declare interface TlsServerConnection extends GObject.GInterface { }

/**
  * Gio.TlsServerConnection is the server-side subclass of Gio.TlsConnection,
representing a server-side TLS connection. 
  */
export declare class TlsServerConnection {
  /**
    * Creates a new Gio.TlsServerConnection wrapping base_io_stream (which must have pollable input and output streams).
    * @param baseIoStream the Gio.IOStream to wrap
    * @param certificate the default server certificate, or None
    * @returns the new Gio.TlsServerConnection, or None on error 
    */
  static new(baseIoStream: import('../Gio').IOStream, certificate: import('../Gio').TlsCertificate | null): import('../Gio').TlsServerConnection;
  /**
    * The client authentication mode 
    */
  authenticationMode: import('../Gio').TlsAuthenticationMode;
}

