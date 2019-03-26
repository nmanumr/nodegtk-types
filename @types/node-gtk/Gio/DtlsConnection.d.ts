import * as GObject from '../GObject';

/**
  * Gio.DtlsConnection is the base DTLS connection class type, which wraps
a Gio.DatagramBased and provides DTLS encryption on top of it. Its
subclasses, Gio.DtlsClientConnection and Gio.DtlsServerConnection,
implement client-side and server-side DTLS, respectively. 
  */
export declare interface DtlsConnection extends GObject.GInterface {
  /**
    * Close the DTLS connection. This is equivalent to calling Gio.DtlsConnection.shutdown() to shut down both sides of the connection.
    * @param cancellable a Gio.Cancellable, or None
    * @returns True on success, False otherwise 
    */
  close(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously close the DTLS connection. See Gio.DtlsConnection.close() for more information.
    * @param ioPriority the I/O priority of the request
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the close operation is complete
    * @param userData the data to pass to the callback function 
    */
  closeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous TLS close operation. See Gio.DtlsConnection.close() for more information.
    * @param result a Gio.AsyncResult
    * @returns True on success, False on failure, in which case error will be set 
    */
  closeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Used by Gio.DtlsConnection implementations to emit the Gio.DtlsConnection ::accept-certificate signal.
    * @param peerCert the peer’s Gio.TlsCertificate
    * @param errors the problems with peer_cert
    * @returns True if one of the signal handlers has returned True to accept peer_cert 
    */
  emitAcceptCertificate(peerCert: import('../Gio').TlsCertificate, errors: import('../Gio').TlsCertificateFlags): boolean;
  /**
    * Gets self’s certificate, as set by Gio.DtlsConnection.set_certificate().
    * @returns self’s certificate, or None 
    */
  getCertificate(): import('../Gio').TlsCertificate;
  /**
    * Gets the certificate database that self uses to verify peer certificates. See Gio.DtlsConnection.set_database().
    * @returns the certificate database that self uses or None 
    */
  getDatabase(): import('../Gio').TlsDatabase;
  /**
    * Get the object that will be used to interact with the user. It will be used for things like prompting the user for passwords. If None is returned, then no user interaction will occur for this connection.
    * @returns The interaction object. 
    */
  getInteraction(): import('../Gio').TlsInteraction;
  /**
    * Gets self’s peer’s certificate after the handshake has completed. (It is not set during the emission of Gio.DtlsConnection ::accept-certificate.)
    * @returns self’s peer’s certificate, or None 
    */
  getPeerCertificate(): import('../Gio').TlsCertificate;
  /**
    * Gets the errors associated with validating self’s peer’s certificate, after the handshake has completed. (It is not set during the emission of Gio.DtlsConnection ::accept-certificate.)
    * @returns self’s peer’s certificate errors 
    */
  getPeerCertificateErrors(): import('../Gio').TlsCertificateFlags;
  /**
    * Gets self rehandshaking mode. See Gio.DtlsConnection.set_rehandshake_mode() for details.
    * @returns self’s rehandshaking mode 
    */
  getRehandshakeMode(): import('../Gio').TlsRehandshakeMode;
  /**
    * Tests whether or not self expects a proper TLS close notification when the connection is closed. See Gio.DtlsConnection.set_require_close_notify() for details.
    * @returns True if self requires a proper TLS close notification. 
    */
  getRequireCloseNotify(): boolean;
  /**
    * Attempts a TLS handshake on self.
    * @param cancellable a Gio.Cancellable, or None
    * @returns success or failure 
    */
  handshake(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously performs a TLS handshake on self. See Gio.DtlsConnection.handshake() for more information.
    * @param ioPriority the I/O priority of the request
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the handshake is complete
    * @param userData the data to pass to the callback function 
    */
  handshakeAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous TLS handshake operation. See Gio.DtlsConnection.handshake() for more information.
    * @param result a Gio.AsyncResult.
    * @returns True on success, False on failure, in which case error will be set. 
    */
  handshakeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * This sets the certificate that self will present to its peer during the TLS handshake. For a Gio.DtlsServerConnection, it is mandatory to set this, and that will normally be done at construct time.
    * @param certificate the certificate to use for self 
    */
  setCertificate(certificate: import('../Gio').TlsCertificate): void;
  /**
    * Sets the certificate database that is used to verify peer certificates. This is set to the default database by default. See Gio.TlsBackend.get_default_database(). If set to None, then peer certificate validation will always set the Gio.TlsCertificateFlags.UNKNOWN_CA error (meaning Gio.DtlsConnection ::accept-certificate will always be emitted on client-side connections, unless that bit is not set in Gio.DtlsClientConnection :validation-flags).
    * @param database a Gio.TlsDatabase 
    */
  setDatabase(database: import('../Gio').TlsDatabase): void;
  /**
    * Set the object that will be used to interact with the user. It will be used for things like prompting the user for passwords.
    * @param interaction an interaction object, or None 
    */
  setInteraction(interaction: import('../Gio').TlsInteraction | null): void;
  /**
    * Sets how self behaves with respect to rehandshaking requests.
    * @param mode the rehandshaking mode 
    */
  setRehandshakeMode(mode: import('../Gio').TlsRehandshakeMode): void;
  /**
    * Sets whether or not self expects a proper TLS close notification before the connection is closed. If this is True (the default), then self will expect to receive a TLS close notification from its peer before the connection is closed, and will return a Gio.TlsError.EOF error if the connection is closed without proper notification (since this may indicate a network error, or man-in-the-middle attack).
    * @param requireCloseNotify whether or not to require close notification 
    */
  setRequireCloseNotify(requireCloseNotify: boolean): void;
  /**
    * Shut down part or all of a DTLS connection.
    * @param shutdownRead True to stop reception of incoming datagrams
    * @param shutdownWrite True to stop sending outgoing datagrams
    * @param cancellable a Gio.Cancellable, or None
    * @returns True on success, False otherwise 
    */
  shutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously shut down part or all of the DTLS connection. See Gio.DtlsConnection.shutdown() for more information.
    * @param shutdownRead True to stop reception of incoming datagrams
    * @param shutdownWrite True to stop sending outgoing datagrams
    * @param ioPriority the I/O priority of the request
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the shutdown operation is complete
    * @param userData the data to pass to the callback function 
    */
  shutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous TLS shutdown operation. See Gio.DtlsConnection.shutdown() for more information.
    * @param result a Gio.AsyncResult
    * @returns True on success, False on failure, in which case error will be set 
    */
  shutdownFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * The Gio.DatagramBased that the connection wraps 
    */
  baseSocket: import('../Gio').DatagramBased;
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
}

