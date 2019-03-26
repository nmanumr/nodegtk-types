import * as GObject from '../GObject';
export declare interface TlsInteraction extends GObject.Object { }

/**
  * Gio.TlsInteraction provides a mechanism for the TLS connection and database
code to interact with the user. It can be used to ask the user for passwords. 
  */
export declare class TlsInteraction {
  /**
    * Run synchronous interaction to ask the user for a password. In general, Gio.TlsInteraction.invoke_ask_password() should be used instead of this function.
    * @param password a Gio.TlsPassword object
    * @param cancellable an optional Gio.Cancellable cancellation object
    * @returns The status of the ask password interaction. 
    */
  askPassword(password: import('../Gio').TlsPassword, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsInteractionResult;
  /**
    * Run asynchronous interaction to ask the user for a password. In general, Gio.TlsInteraction.invoke_ask_password() should be used instead of this function.
    * @param password a Gio.TlsPassword object
    * @param cancellable an optional Gio.Cancellable cancellation object
    * @param callback will be called when the interaction completes
    * @param userData data to pass to the callback 
    */
  askPasswordAsync(password: import('../Gio').TlsPassword, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Complete an ask password user interaction request. This should be once the Gio.TlsInteraction.ask_password_async() completion callback is called.
    * @param result the result passed to the callback
    * @returns The status of the ask password interaction. 
    */
  askPasswordFinish(result: import('../Gio').AsyncResult): import('../Gio').TlsInteractionResult;
  /**
    * Invoke the interaction to ask the user for a password. It invokes this interaction in the main loop, specifically the GLib.MainContext returned by GLib.MainContext.get_thread_default() when the interaction is created. This is called by called by Gio.TlsConnection or Gio.TlsDatabase to ask the user for a password.
    * @param password a Gio.TlsPassword object
    * @param cancellable an optional Gio.Cancellable cancellation object
    * @returns The status of the ask password interaction. 
    */
  invokeAskPassword(password: import('../Gio').TlsPassword, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsInteractionResult;
  /**
    * Invoke the interaction to ask the user to choose a certificate to use with the connection. It invokes this interaction in the main loop, specifically the GLib.MainContext returned by GLib.MainContext.get_thread_default() when the interaction is created. This is called by called by Gio.TlsConnection when the peer requests a certificate during the handshake.
    * @param connection a Gio.TlsConnection object
    * @param flags flags providing more information about the request
    * @param cancellable an optional Gio.Cancellable cancellation object
    * @returns The status of the certificate request interaction. 
    */
  invokeRequestCertificate(connection: import('../Gio').TlsConnection, flags: import('../Gio').TlsCertificateRequestFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsInteractionResult;
  /**
    * Run synchronous interaction to ask the user to choose a certificate to use with the connection. In general, Gio.TlsInteraction.invoke_request_certificate() should be used instead of this function.
    * @param connection a Gio.TlsConnection object
    * @param flags flags providing more information about the request
    * @param cancellable an optional Gio.Cancellable cancellation object
    * @returns The status of the request certificate interaction. 
    */
  requestCertificate(connection: import('../Gio').TlsConnection, flags: import('../Gio').TlsCertificateRequestFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').TlsInteractionResult;
  /**
    * Run asynchronous interaction to ask the user for a certificate to use with the connection. In general, Gio.TlsInteraction.invoke_request_certificate() should be used instead of this function.
    * @param connection a Gio.TlsConnection object
    * @param flags flags providing more information about the request
    * @param cancellable an optional Gio.Cancellable cancellation object
    * @param callback will be called when the interaction completes
    * @param userData data to pass to the callback 
    */
  requestCertificateAsync(connection: import('../Gio').TlsConnection, flags: import('../Gio').TlsCertificateRequestFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Complete an request certificate user interaction request. This should be once the Gio.TlsInteraction.request_certificate_async() completion callback is called.
    * @param result the result passed to the callback
    * @returns The status of the request certificate interaction. 
    */
  requestCertificateFinish(result: import('../Gio').AsyncResult): import('../Gio').TlsInteractionResult;
}

