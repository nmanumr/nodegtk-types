import * as GObject from '../GObject';
export declare interface DtlsServerConnection extends GObject.GInterface { }

/**
  * Gio.DtlsServerConnection is the server-side subclass of Gio.DtlsConnection,
representing a server-side DTLS connection. 
  */
export declare class DtlsServerConnection {
  /**
    * Creates a new Gio.DtlsServerConnection wrapping base_socket.
    * @param baseSocket the Gio.DatagramBased to wrap
    * @param certificate the default server certificate, or None
    * @returns the new Gio.DtlsServerConnection, or None on error 
    */
  static new(baseSocket: import('../Gio').DatagramBased, certificate: import('../Gio').TlsCertificate | null): import('../Gio').DtlsServerConnection;
  /**
    * The client authentication mode 
    */
  authenticationMode: import('../Gio').TlsAuthenticationMode;
}

