import * as GObject from '../GObject';
export declare interface TlsClientConnection extends GObject.GInterface { }

/**
  * Gio.TlsClientConnection is the client-side subclass of
Gio.TlsConnection, representing a client-side TLS connection. 
  */
export declare class TlsClientConnection {
  /**
    * Creates a new Gio.TlsClientConnection wrapping base_io_stream (which must have pollable input and output streams) which is assumed to communicate with the server identified by server_identity.
    * @param baseIoStream the Gio.IOStream to wrap
    * @param serverIdentity the expected identity of the server
    * @returns the new Gio.TlsClientConnection, or None on error 
    */
  static new(baseIoStream: import('../Gio').IOStream, serverIdentity: import('../Gio').SocketConnectable | null): import('../Gio').TlsClientConnection;
  /**
    * Copies session state from one connection to another. This is not normally needed, but may be used when the same session needs to be used between different endpoints as is required by some protocols such as FTP over TLS. source should have already completed a handshake, and self should not have completed a handshake.
    * @param source a Gio.TlsClientConnection 
    */
  copySessionState(source: import('../Gio').TlsClientConnection): void;
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
    * Gets whether self will force the lowest-supported TLS protocol version rather than attempt to negotiate the highest mutually- supported version of TLS; see Gio.TlsClientConnection.set_use_ssl3().
    * @returns whether self will use the lowest-supported TLS protocol version 
    */
  getUseSsl3(): boolean;
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
    * Since 2.42.1, if use_ssl3 is True, this forces self to use the lowest-supported TLS protocol version rather than trying to properly negotiate the highest mutually-supported protocol version with the peer. Be aware that SSL 3.0 is generally disabled by the Gio.TlsBackend, so the lowest-supported protocol version is probably not SSL 3.0.
    * @param useSsl3 whether to use the lowest-supported protocol version 
    */
  setUseSsl3(useSsl3: boolean): void;
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
    * Use fallback version of SSL/TLS rather than most recent version deprecated 
    */
  useSsl3: boolean;
  /**
    * What certificate validation to perform 
    */
  validationFlags: import('../Gio').TlsCertificateFlags;
}

