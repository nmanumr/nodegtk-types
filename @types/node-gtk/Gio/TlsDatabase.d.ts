import * as GObject from '../GObject';
export declare interface TlsDatabase extends GObject.Object { }

/**
  * Gio.TlsDatabase is used to lookup certificates and other information
from a certificate or key store. It is an abstract base class which
TLS library specific subtypes override. 
  */
export declare abstract class TlsDatabase {
  /**
    * Create a handle string for the certificate. The database will only be able to create a handle for certificates that originate from the database. In cases where the database cannot create a handle for a certificate, None will be returned.
    * @param certificate certificate for which to create a handle.
    * @returns a newly allocated string containing the handle. 
    */
  createCertificateHandle(certificate: import('../Gio').TlsCertificate): string | null;
  /**
    * Lookup a certificate by its handle.
    * @param handle a certificate handle
    * @param interaction used to interact with the user if necessary
    * @param flags Flags which affect the lookup.
    * @param cancellable a Gio.Cancellable, or None
    * @returns a newly allocated Gio.TlsCertificate, or None. Use GObject.Object.unref() to release the certificate. 
    */
  lookupCertificateForHandle(handle: string, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseLookupFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsCertificate | null;
  /**
    * Asynchronously lookup a certificate by its handle in the database. See Gio.TlsDatabase.lookup_certificate_for_handle() for more information.
    * @param handle a certificate handle
    * @param interaction used to interact with the user if necessary
    * @param flags Flags which affect the lookup.
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the operation completes
    * @param userData the data to pass to the callback function 
    */
  lookupCertificateForHandleAsync(handle: string, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseLookupFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous lookup of a certificate by its handle. See g_tls_database_lookup_certificate_by_handle() for more information.
    * @param result a Gio.AsyncResult.
    * @returns a newly allocated Gio.TlsCertificate object. Use GObject.Object.unref() to release the certificate. 
    */
  lookupCertificateForHandleFinish(result: import('../Gio').AsyncResult): import('../Gio').TlsCertificate;
  /**
    * Lookup the issuer of certificate in the database.
    * @param certificate a Gio.TlsCertificate
    * @param interaction used to interact with the user if necessary
    * @param flags flags which affect the lookup operation
    * @param cancellable a Gio.Cancellable, or None
    * @returns a newly allocated issuer Gio.TlsCertificate, or None. Use GObject.Object.unref() to release the certificate. 
    */
  lookupCertificateIssuer(certificate: import('../Gio').TlsCertificate, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseLookupFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsCertificate;
  /**
    * Asynchronously lookup the issuer of certificate in the database. See Gio.TlsDatabase.lookup_certificate_issuer() for more information.
    * @param certificate a Gio.TlsCertificate
    * @param interaction used to interact with the user if necessary
    * @param flags flags which affect the lookup operation
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the operation completes
    * @param userData the data to pass to the callback function 
    */
  lookupCertificateIssuerAsync(certificate: import('../Gio').TlsCertificate, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseLookupFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous lookup issuer operation. See Gio.TlsDatabase.lookup_certificate_issuer() for more information.
    * @param result a Gio.AsyncResult.
    * @returns a newly allocated issuer Gio.TlsCertificate, or None. Use GObject.Object.unref() to release the certificate. 
    */
  lookupCertificateIssuerFinish(result: import('../Gio').AsyncResult): import('../Gio').TlsCertificate;
  /**
    * Lookup certificates issued by this issuer in the database.
    * @param issuerRawDn a GLib.ByteArray which holds the DER encoded issuer DN.
    * @param interaction used to interact with the user if necessary
    * @param flags Flags which affect the lookup operation.
    * @param cancellable a Gio.Cancellable, or None
    * @returns a newly allocated list of Gio.TlsCertificate objects. Use GObject.Object.unref() on each certificate, and g_list_free() on the release the list. 
    */
  lookupCertificatesIssuedBy(issuerRawDn: Int8Array, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseLookupFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsCertificate[];
  /**
    * Asynchronously lookup certificates issued by this issuer in the database. See Gio.TlsDatabase.lookup_certificates_issued_by() for more information.
    * @param issuerRawDn a GLib.ByteArray which holds the DER encoded issuer DN.
    * @param interaction used to interact with the user if necessary
    * @param flags Flags which affect the lookup operation.
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the operation completes
    * @param userData the data to pass to the callback function 
    */
  lookupCertificatesIssuedByAsync(issuerRawDn: Int8Array, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseLookupFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous lookup of certificates. See Gio.TlsDatabase.lookup_certificates_issued_by() for more information.
    * @param result a Gio.AsyncResult.
    * @returns a newly allocated list of Gio.TlsCertificate objects. Use GObject.Object.unref() on each certificate, and g_list_free() on the release the list. 
    */
  lookupCertificatesIssuedByFinish(result: import('../Gio').AsyncResult): import('../Gio').TlsCertificate[];
  /**
    * Determines the validity of a certificate chain after looking up and adding any missing certificates to the chain.
    * @param chain a Gio.TlsCertificate chain
    * @param purpose the purpose that this certificate chain will be used for.
    * @param identity the expected peer identity
    * @param interaction used to interact with the user if necessary
    * @param flags additional verify flags
    * @param cancellable a Gio.Cancellable, or None
    * @returns the appropriate Gio.TlsCertificateFlags which represents the result of verification. 
    */
  verifyChain(chain: import('../Gio').TlsCertificate, purpose: string, identity: import('../Gio').SocketConnectable | null, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseVerifyFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsCertificateFlags;
  /**
    * Asynchronously determines the validity of a certificate chain after looking up and adding any missing certificates to the chain. See Gio.TlsDatabase.verify_chain() for more information.
    * @param chain a Gio.TlsCertificate chain
    * @param purpose the purpose that this certificate chain will be used for.
    * @param identity the expected peer identity
    * @param interaction used to interact with the user if necessary
    * @param flags additional verify flags
    * @param cancellable a Gio.Cancellable, or None
    * @param callback callback to call when the operation completes
    * @param userData the data to pass to the callback function 
    */
  verifyChainAsync(chain: import('../Gio').TlsCertificate, purpose: string, identity: import('../Gio').SocketConnectable | null, interaction: import('../Gio').TlsInteraction | null, flags: import('../Gio').TlsDatabaseVerifyFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finish an asynchronous verify chain operation. See Gio.TlsDatabase.verify_chain() for more information.
    * @param result a Gio.AsyncResult.
    * @returns the appropriate Gio.TlsCertificateFlags which represents the result of verification. 
    */
  verifyChainFinish(result: import('../Gio').AsyncResult): import('../Gio').TlsCertificateFlags;
}

