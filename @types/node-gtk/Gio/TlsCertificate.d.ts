import * as GObject from '../GObject';
export declare interface TlsCertificate extends GObject.Object { }

/**
  * A certificate used for TLS authentication and encryption.
This can represent either a certificate only (eg, the certificate
received by a client from a server), or the combination of
a certificate and a private key (which is needed when acting as a
Gio.TlsServerConnection). 
  */
export declare abstract class TlsCertificate {
  /**
    * Creates one or more Gio.TlsCertificates from the PEM-encoded data in file. If file cannot be read or parsed, the function will return None and set error. If file does not contain any PEM-encoded certificates, this will return an empty list and not set error.
    * @param file file containing PEM-encoded certificates to import
    * @returns a GLib.List containing Gio.TlsCertificate objects. You must free the list and its contents when you are done with it. 
    */
  static listNewFromFile(file: string): import('../Gio').TlsCertificate[];
  /**
    * Creates a Gio.TlsCertificate from the PEM-encoded data in file. The returned certificate will be the first certificate found in file. As of GLib 2.44, if file contains more certificates it will try to load a certificate chain. All certificates will be verified in the order found (top-level certificate should be the last one in the file) and the Gio.TlsCertificate :issuer property of each certificate will be set accordingly if the verification succeeds. If any certificate in the chain cannot be verified, the first certificate in the file will still be returned.
    * @param file file containing a PEM-encoded certificate to import
    * @returns the new certificate, or None on error 
    */
  static newFromFile(file: string): import('../Gio').TlsCertificate;
  /**
    * Creates a Gio.TlsCertificate from the PEM-encoded data in cert_file and key_file. The returned certificate will be the first certificate found in cert_file. As of GLib 2.44, if cert_file contains more certificates it will try to load a certificate chain. All certificates will be verified in the order found (top-level certificate should be the last one in the file) and the Gio.TlsCertificate :issuer property of each certificate will be set accordingly if the verification succeeds. If any certificate in the chain cannot be verified, the first certificate in the file will still be returned.
    * @param certFile file containing one or more PEM-encoded certificates to import
    * @param keyFile file containing a PEM-encoded private key to import
    * @returns the new certificate, or None on error 
    */
  static newFromFiles(certFile: string, keyFile: string): import('../Gio').TlsCertificate;
  /**
    * Creates a Gio.TlsCertificate from the PEM-encoded data in data. If data includes both a certificate and a private key, then the returned certificate will include the private key data as well. (See the Gio.TlsCertificate :private-key-pem property for information about supported formats.)
    * @param data PEM-encoded certificate data
    * @param length the length of data, or -1 if it’s 0-terminated.
    * @returns the new certificate, or None if data is invalid 
    */
  static newFromPem(data: string, length: number): import('../Gio').TlsCertificate;
  /**
    * Gets the Gio.TlsCertificate representing self’s issuer, if known
    * @returns The certificate of self’s issuer, or None if self is self-signed or signed with an unknown certificate. 
    */
  getIssuer(): import('../Gio').TlsCertificate;
  /**
    * Check if two Gio.TlsCertificate objects represent the same certificate. The raw DER byte data of the two certificates are checked for equality. This has the effect that two certificates may compare equal even if their Gio.TlsCertificate :issuer, Gio.TlsCertificate :private-key, or Gio.TlsCertificate :private-key-pem properties differ.
    * @param certTwo second certificate to compare
    * @returns whether the same or not 
    */
  isSame(certTwo: import('../Gio').TlsCertificate): boolean;
  /**
    * This verifies self and returns a set of Gio.TlsCertificateFlags indicating any problems found with it. This can be used to verify a certificate outside the context of making a connection, or to check a certificate against a CA that is not part of the system CA database.
    * @param identity the expected peer identity
    * @param trustedCa the certificate of a trusted authority
    * @returns the appropriate Gio.TlsCertificateFlags 
    */
  verify(identity: import('../Gio').SocketConnectable | null, trustedCa: import('../Gio').TlsCertificate | null): import('../Gio').TlsCertificateFlags;
  /**
    * The DER representation of the certificate 
    */
  certificate: import('../GLib').ByteArray;
  /**
    * The PEM representation of the certificate 
    */
  certificatePem: string;
  /**
    * The certificate for the issuing entity 
    */
  issuer: import('../Gio').TlsCertificate;
  /**
    * The DER representation of the certificate’s private key 
    */
  privateKey: import('../GLib').ByteArray;
  /**
    * The PEM representation of the certificate’s private key 
    */
  privateKeyPem: string;
}

