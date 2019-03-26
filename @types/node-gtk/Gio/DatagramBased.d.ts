import * as GObject from '../GObject';

/**
  * A Gio.DatagramBased is a networking interface for representing datagram-based
communications. It is a more or less direct mapping of the core parts of the
BSD socket API in a portable GObject.Object interface. It is implemented by
Gio.Socket, which wraps the UNIX socket API on UNIX and winsock2 on Windows. 
  */
export declare interface DatagramBased extends GObject.GInterface {
  /**
    * Checks on the readiness of self to perform operations. The operations specified in condition are checked for and masked against the currently-satisfied conditions on self. The result is returned.
    * @param condition a GLib.IOCondition mask to check
    * @returns the GLib.IOCondition mask of the current state 
    */
  conditionCheck(condition: import('../GLib').IOCondition): import('../GLib').IOCondition;
  /**
    * Waits for up to timeout microseconds for condition to become true on self. If the condition is met, True is returned.
    * @param condition a GLib.IOCondition mask to wait for
    * @param timeout the maximum time (in microseconds) to wait, 0 to not block, or -1 to block indefinitely
    * @param cancellable a Gio.Cancellable
    * @returns True if the condition was met, False otherwise 
    */
  conditionWait(condition: import('../GLib').IOCondition, timeout: number, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Creates a GLib.Source that can be attached to a GLib.MainContext to monitor for the availability of the specified condition on the Gio.DatagramBased. The GLib.Source keeps a reference to the self.
    * @param condition a GLib.IOCondition mask to monitor
    * @param cancellable a Gio.Cancellable
    * @returns a newly allocated GLib.Source 
    */
  createSource(condition: import('../GLib').IOCondition, cancellable: import('../Gio').Cancellable | null): import('../GLib').Source;
  /**
    * Receive one or more data messages from self in one go.
    * @param messages an array of Gio.InputMessage structs
    * @param flags an int containing Gio.SocketMsgFlags flags for the overall operation
    * @param timeout the maximum time (in microseconds) to wait, 0 to not block, or -1 to block indefinitely
    * @param cancellable a Gio.Cancellable
    * @returns number of messages received, or -1 on error. Note that the number of messages received may be smaller than num_messages if timeout is zero or positive, if the peer closed the connection, or if num_messages was larger than UIO_MAXIOV (1024), in which case the caller may re-try to receive the remaining messages. 
    */
  receiveMessages(messages: import('../Gio').InputMessage, flags: number, timeout: number, cancellable: import('../Gio').Cancellable | null): number;
  /**
    * Send one or more data messages from self in one go.
    * @param messages an array of Gio.OutputMessage structs
    * @param flags an int containing Gio.SocketMsgFlags flags
    * @param timeout the maximum time (in microseconds) to wait, 0 to not block, or -1 to block indefinitely
    * @param cancellable a Gio.Cancellable
    * @returns number of messages sent, or -1 on error. Note that the number of messages sent may be smaller than num_messages if timeout is zero or positive, or if num_messages was larger than UIO_MAXIOV (1024), in which case the caller may re-try to send the remaining messages. 
    */
  sendMessages(messages: import('../Gio').OutputMessage, flags: number, timeout: number, cancellable: import('../Gio').Cancellable | null): number;
}

