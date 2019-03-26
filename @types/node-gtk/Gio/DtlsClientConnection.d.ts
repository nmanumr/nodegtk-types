import * as GObject from '../GObject';
export declare interface DtlsClientConnection extends GObject.GInterface { }

/**
  * Gio.DtlsClientConnection is the client-side subclass of
Gio.DtlsConnection, representing a client-side DTLS connection. 
  */
export declare class DtlsClientConnection {
  /**
    * Creates a new Gio.DtlsClientConnection wrapping base_socket which is assumed to communicate with the server identified by server_identity.
    * @param baseSocket the Gio.DatagramBased to wrap
    * @param serverIdentity the expected identity of the server
    * @returns the new Gio.DtlsClientConnection, or None on error 
    */
  static new(baseSocket: import('../Gio').DatagramBased, serverIdentity: import('../Gio').SocketConnectable | null): import('../Gio').DtlsClientConnection;
  /**
    * Gets the list of distinguished names of the Certificate Authorities that the server will accept certificates from. This will be set during the TLS handshake if the server requests a certificate. Otherwise, it will be None.
    * @returns the list of CA DNs. You should unref each element with GLib.ByteArray.unref() and then the free the list with g_list_free(). 
    */
  getAcceptedCas(): Int8Array[];
  /**
    * Gets self’s expected server identity
    * @returns a Gio.SocketConnectable describing the expected server identity, or None if the expected identity is not known. 
    */
  getServerIdentity(): import('../Gio').SocketConnectable;
  /**
    * Gets self’s validation flags
    * @returns the validation flags 
    */
  getValidationFlags(): import('../Gio').TlsCertificateFlags;
  /**
    * Sets self’s expected server identity, which is used both to tell servers on virtual hosts which certificate to present, and also to let self know what name to look for in the certificate when performing Gio.TlsCertificateFlags.BAD_IDENTITY validation, if enabled.
    * @param identity a Gio.SocketConnectable describing the expected server identity 
    */
  setServerIdentity(identity: import('../Gio').SocketConnectable): void;
  /**
    * Sets self’s validation flags, to override the default set of checks performed when validating a server certificate. By default, Gio.TlsCertificateFlags.VALIDATE_ALL is used.
    * @param flags the Gio.TlsCertificateFlags to use 
    */
  setValidationFlags(flags: import('../Gio').TlsCertificateFlags): void;
  /**
    * Distinguished names of the CAs the server accepts certificates from 
    */
  readonly acceptedCas: number;
  /**
    * Gio.SocketConnectable identifying the server 
    */
  serverIdentity: import('../Gio').SocketConnectable;
  /**
    * What certificate validation to perform 
    */
  validationFlags: import('../Gio').TlsCertificateFlags;
}

