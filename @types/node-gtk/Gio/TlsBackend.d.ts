import * as GObject from '../GObject';
export declare interface TlsBackend extends GObject.GInterface { }

/**
  * TLS (Transport Layer Security, aka SSL) and DTLS backend. 
  */
export declare class TlsBackend {
  /**
    * Gets the default Gio.TlsBackend for the system.
    * @returns a Gio.TlsBackend 
    */
  static getDefault(): import('../Gio').TlsBackend;
  /**
    * Gets the GObject.GType of self’s Gio.TlsCertificate implementation.
    * @returns the GObject.GType of self’s Gio.TlsCertificate implementation. 
    */
  getCertificateType(): import('../GObject').GType;
  /**
    * Gets the GObject.GType of self’s Gio.TlsClientConnection implementation.
    * @returns the GObject.GType of self’s Gio.TlsClientConnection implementation. 
    */
  getClientConnectionType(): import('../GObject').GType;
  /**
    * Gets the default Gio.TlsDatabase used to verify TLS connections.
    * @returns the default database, which should be unreffed when done. 
    */
  getDefaultDatabase(): import('../Gio').TlsDatabase;
  /**
    * Gets the GObject.GType of self’s Gio.DtlsClientConnection implementation.
    * @returns the GObject.GType of self’s Gio.DtlsClientConnection implementation, or GObject.TYPE_INVALID if this backend doesn’t support DTLS. 
    */
  getDtlsClientConnectionType(): import('../GObject').GType;
  /**
    * Gets the GObject.GType of self’s Gio.DtlsServerConnection implementation.
    * @returns the GObject.GType of self’s Gio.DtlsServerConnection implementation, or GObject.TYPE_INVALID if this backend doesn’t support DTLS. 
    */
  getDtlsServerConnectionType(): import('../GObject').GType;
  /**
    * Gets the GObject.GType of self’s Gio.TlsFileDatabase implementation.
    * @returns the GObject.GType of backend’s Gio.TlsFileDatabase implementation. 
    */
  getFileDatabaseType(): import('../GObject').GType;
  /**
    * Gets the GObject.GType of self’s Gio.TlsServerConnection implementation.
    * @returns the GObject.GType of self’s Gio.TlsServerConnection implementation. 
    */
  getServerConnectionType(): import('../GObject').GType;
  /**
    * Checks if DTLS is supported. DTLS support may not be available even if TLS support is available, and vice-versa.
    * @returns whether DTLS is supported 
    */
  supportsDtls(): boolean;
  /**
    * Checks if TLS is supported; if this returns False for the default Gio.TlsBackend, it means no “real” TLS backend is available.
    * @returns whether or not TLS is supported 
    */
  supportsTls(): boolean;
}

