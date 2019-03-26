import * as Gio from '../Gio';
export declare interface UnixConnection extends Gio.SocketConnection { }

/**
  * This is the subclass of Gio.SocketConnection that is created
for UNIX domain sockets. 
  */
export declare class UnixConnection {
  /**
    * Receives credentials from the sending end of the connection.  The sending end has to call Gio.UnixConnection.send_credentials() (or similar) for this to work.
    * @param cancellable A Gio.Cancellable or None.
    * @returns Received credentials on success (free with GObject.Object.unref()), None if error is set. 
    */
  receiveCredentials(cancellable: import('../Gio').Cancellable | null): import('../Gio').Credentials;
  /**
    * Asynchronously receive credentials.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  receiveCredentialsAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous receive credentials operation started with Gio.UnixConnection.receive_credentials_async().
    * @param result a Gio.AsyncResult.
    * @returns a Gio.Credentials, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  receiveCredentialsFinish(result: import('../Gio').AsyncResult): import('../Gio').Credentials;
  /**
    * Receives a file descriptor from the sending end of the connection. The sending end has to call Gio.UnixConnection.send_fd() for this to work.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a file descriptor on success, -1 on error. 
    */
  receiveFd(cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Passes the credentials of the current user the receiving side of the connection. The receiving end has to call Gio.UnixConnection.receive_credentials() (or similar) to accept the credentials.
    * @param cancellable A Gio.Cancellable or None.
    * @returns True on success, False if error is set. 
    */
  sendCredentials(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously send credentials.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  sendCredentialsAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous send credentials operation started with Gio.UnixConnection.send_credentials_async().
    * @param result a Gio.AsyncResult.
    * @returns True if the operation was successful, otherwise False. 
    */
  sendCredentialsFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Passes a file descriptor to the receiving side of the connection. The receiving end has to call Gio.UnixConnection.receive_fd() to accept the file descriptor.
    * @param fd a file descriptor
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a True on success, None on error. 
    */
  sendFd(fd: number, cancellable: import('../Gio').Cancellable | null): boolean;
  ;
}

