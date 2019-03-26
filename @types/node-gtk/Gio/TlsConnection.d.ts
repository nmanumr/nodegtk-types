import * as Gio from '../Gio';
export declare interface TlsConnection extends Gio.IOStream { }

/**
  * Gio.TlsConnection is the base TLS connection class type, which wraps
a Gio.IOStream and provides TLS encryption on top of it. Its
subclasses, Gio.TlsClientConnection and Gio.TlsServerConnection,
implement client-side and server-side TLS, respectively. 
  */
export declare abstract class TlsConnection {
  /**
    * Used by Gio.TlsConnection implementations to emit the Gio.TlsConnection ::accept-certificate signal.
    * @param peerCert the peer’s Gio.TlsCertificate
    * @param errors the problems with peer_cert
    * @returns True if one of the signal handlers has returned True to accept peer_cert 
    */
  emitAcceptCertificate(peerCert: import('../Gio').TlsCertificate, errors: import('../Gio').TlsCertificateFlags): boolean;
  /**
    * Gets self’s certificate, as set by Gio.TlsConnection.set_certificate().
    * @returns self’s certificate, or None 
    */
  getCertificate(): import('../Gio').TlsCertificate;
  /**
    * Gets the certificate database that self uses to verify peer certificates. See Gio.TlsConnection.set_database().
    * @returns the certificate database that self uses or None 
    */
  getDatabase(): import('../Gio').TlsDatabase;
  /**
    * Get the object that will be used to interact with the user. It will be used for things like prompting the user for passwords. If None is returned, then no user interaction will occur for this connection.
    * @returns The interaction object. 
    */
  getInteraction(): import('../Gio').TlsInteraction;
  /**
    * Gets self’s peer’s certificate after the handshake has completed. (It is not set during the emission of Gio.TlsConnection ::accept-certificate.)
    * @returns self’s peer’s certificate, or None 
    */
  getPeerCertificate(): import('../Gio').TlsCertificate;
  /**
    * Gets the errors associated with validating self’s peer’s certificate, after the handshake has completed. (It is not set during the emission of Gio.TlsConnection ::accept-certificate.)
    * @returns self’s peer’s certificate errors 
    */
  getPeerCertificateErrors(): import('../Gio').TlsCertificateFlags;
  /**
    * Gets self rehandshaking mode. See Gio.TlsConnection.set_rehandshake_mode() for details.
    * @returns self’s rehandshaking mode 
    */
  getRehandshakeMode(): import('../Gio').TlsRehandshakeMode;
  /**
    * Tests whether or not self expects a proper TLS close notification when the connection is closed. See Gio.TlsConnection.set_require_close_notify() for details.
    * @returns True if self requires a proper TLS close notification. 
    */
  getRequireCloseNotify(): boolean;
  /**
    * Gets whether self uses the system certificate database to verify peer certificates. See Gio.TlsConnection.set_use_system_certdb().
    * @returns whether self uses the system certificate database 
    */
  getUseSystemCertdb(): boolean;
  /**
    * Attempts a TLS handshake on self.
    * @param cancellable a Gio.Cancellable, or None
    * @returns success or failure 
    */
  handshake(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously performs a TLS handshake on self. See Gio.TlsConnection.handshake() for more information.
    * @param ioPriority the I/O priority of the request
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the handshake is complete
    * @param userData the data to pass to the callback function 
    */
  handshakeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous TLS handshake operation. See Gio.TlsConnection.handshake() for more information.
    * @param result a Gio.AsyncResult.
    * @returns True on success, False on failure, in which case error will be set. 
    */
  handshakeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * This sets the certificate that self will present to its peer during the TLS handshake. For a Gio.TlsServerConnection, it is mandatory to set this, and that will normally be done at construct time.
    * @param certificate the certificate to use for self 
    */
  setCertificate(certificate: import('../Gio').TlsCertificate): void;
  /**
    * Sets the certificate database that is used to verify peer certificates. This is set to the default database by default. See Gio.TlsBackend.get_default_database(). If set to None, then peer certificate validation will always set the Gio.TlsCertificateFlags.UNKNOWN_CA error (meaning Gio.TlsConnection ::accept-certificate will always be emitted on client-side connections, unless that bit is not set in Gio.TlsClientConnection :validation-flags).
    * @param database a Gio.TlsDatabase 
    */
  setDatabase(database: import('../Gio').TlsDatabase): void;
  /**
    * Set the object that will be used to interact with the user. It will be used for things like prompting the user for passwords.
    * @param interaction an interaction object, or None 
    */
  setInteraction(interaction: import('../Gio').TlsInteraction | null): void;
  /**
    * Sets how self behaves with respect to rehandshaking requests, when TLS 1.2 or older is in use.
    * @param mode the rehandshaking mode 
    */
  setRehandshakeMode(mode: import('../Gio').TlsRehandshakeMode): void;
  /**
    * Sets whether or not self expects a proper TLS close notification before the connection is closed. If this is True (the default), then self will expect to receive a TLS close notification from its peer before the connection is closed, and will return a Gio.TlsError.EOF error if the connection is closed without proper notification (since this may indicate a network error, or man-in-the-middle attack).
    * @param requireCloseNotify whether or not to require close notification 
    */
  setRequireCloseNotify(requireCloseNotify: boolean): void;
  /**
    * Sets whether self uses the system certificate database to verify peer certificates. This is True by default. If set to False, then peer certificate validation will always set the Gio.TlsCertificateFlags.UNKNOWN_CA error (meaning Gio.TlsConnection ::accept-certificate will always be emitted on client-side connections, unless that bit is not set in Gio.TlsClientConnection :validation-flags).
    * @param useSystemCertdb whether to use the system certificate database 
    */
  setUseSystemCertdb(useSystemCertdb: boolean): void;
  /**
    * The Gio.IOStream that the connection wraps 
    */
  baseIoStream: import('../Gio').IOStream;
  /**
    * The connection’s certificate 
    */
  certificate: import('../Gio').TlsCertificate;
  /**
    * Certificate database to use for looking up or verifying certificates 
    */
  database: import('../Gio').TlsDatabase;
  /**
    * Optional object for user interaction 
    */
  interaction: import('../Gio').TlsInteraction;
  /**
    * The connection’s peer’s certificate 
    */
  readonly peerCertificate: import('../Gio').TlsCertificate;
  /**
    * Errors found with the peer’s certificate 
    */
  readonly peerCertificateErrors: import('../Gio').TlsCertificateFlags;
  /**
    * When to allow rehandshaking 
    */
  rehandshakeMode: import('../Gio').TlsRehandshakeMode;
  /**
    * Whether to require proper TLS close notification 
    */
  requireCloseNotify: boolean;
  /**
    * Whether to verify peer certificates against the system certificate database deprecated 
    */
  useSystemCertdb: boolean;
}

