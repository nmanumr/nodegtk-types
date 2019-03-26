import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusConnection extends GObject.Object, Gio.AsyncInitable, Gio.Initable { }

/**
  * The Gio.DBusConnection type is used for D-Bus connections to remote
peers such as a message buses. It is a low-level API that offers a
lot of flexibility. For instance, it lets you establish a connection
over any transport that can by represented as an Gio.IOStream. 
  */
export declare class DBusConnection {
  /**
    * Asynchronously sets up a D-Bus connection for exchanging D-Bus messages with the end represented by stream.
    * @param stream a Gio.IOStream
    * @param guid the GUID to use if a authenticating as a server or None
    * @param flags flags describing how to make the connection
    * @param observer a Gio.DBusAuthObserver or None
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback 
    */
  static new(stream: import('../Gio').IOStream, guid: string | null, flags: import('../Gio').DBusConnectionFlags, observer: import('../Gio').DBusAuthObserver | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusConnection.new().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.new().
    * @returns a Gio.DBusConnection or None if error is set. Free with GObject.Object.unref(). 
    */
  static newFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusConnection;
  /**
    * Asynchronously connects and sets up a D-Bus client connection for exchanging D-Bus messages with an endpoint specified by address which must be in the D-Bus address format.
    * @param address a D-Bus address
    * @param flags flags describing how to make the connection
    * @param observer a Gio.DBusAuthObserver or None
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback 
    */
  static newForAddress(address: string, flags: import('../Gio').DBusConnectionFlags, observer: import('../Gio').DBusAuthObserver | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusConnection.new_for_address().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.new()
    * @returns a Gio.DBusConnection or None if error is set. Free with GObject.Object.unref(). 
    */
  static newForAddressFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusConnection;
  /**
    * Synchronously connects and sets up a D-Bus client connection for exchanging D-Bus messages with an endpoint specified by address which must be in the D-Bus address format.
    * @param address a D-Bus address
    * @param flags flags describing how to make the connection
    * @param observer a Gio.DBusAuthObserver or None
    * @param cancellable a Gio.Cancellable or None
    * @returns a Gio.DBusConnection or None if error is set. Free with GObject.Object.unref(). 
    */
  static newForAddressSync(address: string, flags: import('../Gio').DBusConnectionFlags, observer: import('../Gio').DBusAuthObserver | null, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusConnection;
  /**
    * Synchronously sets up a D-Bus connection for exchanging D-Bus messages with the end represented by stream.
    * @param stream a Gio.IOStream
    * @param guid the GUID to use if a authenticating as a server or None
    * @param flags flags describing how to make the connection
    * @param observer a Gio.DBusAuthObserver or None
    * @param cancellable a Gio.Cancellable or None
    * @returns a Gio.DBusConnection or None if error is set. Free with GObject.Object.unref(). 
    */
  static newSync(stream: import('../Gio').IOStream, guid: string | null, flags: import('../Gio').DBusConnectionFlags, observer: import('../Gio').DBusAuthObserver | null, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusConnection;
  /**
    * Adds a message filter. Filters are handlers that are run on all incoming and outgoing messages, prior to standard dispatch. Filters are run in the order that they were added.  The same handler can be added as a filter more than once, in which case it will be run more than once.  Filters added during a filter callback won’t be run on the message being processed. Filter functions are allowed to modify and even drop messages.
    * @param filterFunction a filter function
    * @param userData user data to pass to filter_function
    * @returns a filter identifier that can be used with Gio.DBusConnection.remove_filter() 
    */
  addFilter(filterFunction: import('../Gio').dBusMessageFilterFunction, userData: Object | null): number;
  /**
    * Asynchronously invokes the method_name method on the interface_name D-Bus interface on the remote object at object_path owned by bus_name.
    * @param busName a unique or well-known bus name or None if self is not a message bus connection
    * @param objectPath path of remote object
    * @param interfaceName D-Bus interface to invoke method on
    * @param methodName the name of the method to invoke
    * @param parameters a GLib.Variant tuple with parameters for the method or None if not passing parameters
    * @param replyType the expected type of the reply (which will be a tuple), or None
    * @param flags flags from the Gio.DBusCallFlags enumeration
    * @param timeoutMsec the timeout in milliseconds, -1 to use the default timeout or GObject.G_MAXINT for no timeout
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t care about the result of the method invocation
    * @param userData the data to pass to callback 
    */
  call(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: import('../GLib').Variant | null, replyType: import('../GLib').VariantType | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusConnection.call().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.call()
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref(). 
    */
  callFinish(res: import('../Gio').AsyncResult): import('../GLib').Variant;
  /**
    * Synchronously invokes the method_name method on the interface_name D-Bus interface on the remote object at object_path owned by bus_name.
    * @param busName a unique or well-known bus name or None if self is not a message bus connection
    * @param objectPath path of remote object
    * @param interfaceName D-Bus interface to invoke method on
    * @param methodName the name of the method to invoke
    * @param parameters a GLib.Variant tuple with parameters for the method or None if not passing parameters
    * @param replyType the expected type of the reply, or None
    * @param flags flags from the Gio.DBusCallFlags enumeration
    * @param timeoutMsec the timeout in milliseconds, -1 to use the default timeout or GObject.G_MAXINT for no timeout
    * @param cancellable a Gio.Cancellable or None
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref(). 
    */
  callSync(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: import('../GLib').Variant | null, replyType: import('../GLib').VariantType | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, cancellable: import('../Gio').Cancellable | null): import('../GLib').Variant;
  /**
    * Like Gio.DBusConnection.call() but also takes a Gio.UnixFDList object.
    * @param busName a unique or well-known bus name or None if self is not a message bus connection
    * @param objectPath path of remote object
    * @param interfaceName D-Bus interface to invoke method on
    * @param methodName the name of the method to invoke
    * @param parameters a GLib.Variant tuple with parameters for the method or None if not passing parameters
    * @param replyType the expected type of the reply, or None
    * @param flags flags from the Gio.DBusCallFlags enumeration
    * @param timeoutMsec the timeout in milliseconds, -1 to use the default timeout or GObject.G_MAXINT for no timeout
    * @param fdList a Gio.UnixFDList or None
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t * care about the result of the method invocation
    * @param userData The data to pass to callback. 
    */
  callWithUnixFdList(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: import('../GLib').Variant | null, replyType: import('../GLib').VariantType | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, fdList: import('../Gio').UnixFDList | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusConnection.call_with_unix_fd_list().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.call_with_unix_fd_list()
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref().  out_fd_list:return location for a Gio.UnixFDList or None 
    */
  callWithUnixFdListFinish(res: import('../Gio').AsyncResult): [import('../GLib').Variant, import('../Gio').UnixFDList];
  /**
    * Like Gio.DBusConnection.call_sync() but also takes and returns Gio.UnixFDList objects.
    * @param busName a unique or well-known bus name or None if self is not a message bus connection
    * @param objectPath path of remote object
    * @param interfaceName D-Bus interface to invoke method on
    * @param methodName the name of the method to invoke
    * @param parameters a GLib.Variant tuple with parameters for the method or None if not passing parameters
    * @param replyType the expected type of the reply, or None
    * @param flags flags from the Gio.DBusCallFlags enumeration
    * @param timeoutMsec the timeout in milliseconds, -1 to use the default timeout or GObject.G_MAXINT for no timeout
    * @param fdList a Gio.UnixFDList or None
    * @param cancellable a Gio.Cancellable or None
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref().   out_fd_list:return location for a Gio.UnixFDList or None 
    */
  callWithUnixFdListSync(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: import('../GLib').Variant | null, replyType: import('../GLib').VariantType | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, fdList: import('../Gio').UnixFDList | null, cancellable: import('../Gio').Cancellable | null): [import('../GLib').Variant, import('../Gio').UnixFDList];
  /**
    * Closes self. Note that this never causes the process to exit (this might only happen if the other end of a shared message bus connection disconnects, see Gio.DBusConnection :exit-on-close).
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t care about the result
    * @param userData The data to pass to callback 
    */
  close(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusConnection.close().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.close()
    * @returns True if the operation succeeded, False if error is set 
    */
  closeFinish(res: import('../Gio').AsyncResult): boolean;
  /**
    * Synchronously closes self. The calling thread is blocked until this is done. See Gio.DBusConnection.close() for the asynchronous version of this method and more details about what it does.
    * @param cancellable a Gio.Cancellable or None
    * @returns True if the operation succeeded, False if error is set 
    */
  closeSync(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Emits a signal.
    * @param destinationBusName the unique bus name for the destination for the signal or None to emit to all listeners
    * @param objectPath path of remote object
    * @param interfaceName D-Bus interface to emit a signal on
    * @param signalName the name of the signal to emit
    * @param parameters a GLib.Variant tuple with parameters for the signal or None if not passing parameters
    * @returns True unless error is set 
    */
  emitSignal(destinationBusName: string | null, objectPath: string, interfaceName: string, signalName: string, parameters: import('../GLib').Variant | null): boolean;
  /**
    * Exports action_group on self at object_path.
    * @param objectPath a D-Bus object path
    * @param actionGroup a Gio.ActionGroup
    * @returns the ID of the export (never zero), or 0 in case of failure 
    */
  exportActionGroup(objectPath: string, actionGroup: import('../Gio').ActionGroup): number;
  /**
    * Exports menu on self at object_path.
    * @param objectPath a D-Bus object path
    * @param menu a Gio.MenuModel
    * @returns the ID of the export (never zero), or 0 in case of failure 
    */
  exportMenuModel(objectPath: string, menu: import('../Gio').MenuModel): number;
  /**
    * Asynchronously flushes self, that is, writes all queued outgoing message to the transport and then flushes the transport (using Gio.OutputStream.flush_async()). This is useful in programs that wants to emit a D-Bus signal and then exit immediately. Without flushing the connection, there is no guaranteed that the message has been sent to the networking buffers in the OS kernel.
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t care about the result
    * @param userData The data to pass to callback 
    */
  flush(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusConnection.flush().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.flush()
    * @returns True if the operation succeeded, False if error is set 
    */
  flushFinish(res: import('../Gio').AsyncResult): boolean;
  /**
    * Synchronously flushes self. The calling thread is blocked until this is done. See Gio.DBusConnection.flush() for the asynchronous version of this method and more details about what it does.
    * @param cancellable a Gio.Cancellable or None
    * @returns True if the operation succeeded, False if error is set 
    */
  flushSync(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Gets the capabilities negotiated with the remote peer
    * @returns zero or more flags from the Gio.DBusCapabilityFlags enumeration 
    */
  getCapabilities(): import('../Gio').DBusCapabilityFlags;
  /**
    * Gets whether the process is terminated when self is closed by the remote peer. See Gio.DBusConnection :exit-on-close for more details.
    * @returns whether the process is terminated when self is closed by the remote peer 
    */
  getExitOnClose(): boolean;
  /**
    * The GUID of the peer performing the role of server when authenticating. See Gio.DBusConnection :guid for more details.
    * @returns The GUID. Do not free this string, it is owned by self. 
    */
  getGuid(): string;
  /**
    * Retrieves the last serial number assigned to a Gio.DBusMessage on the current thread. This includes messages sent via both low-level API such as Gio.DBusConnection.send_message() as well as high-level API such as Gio.DBusConnection.emit_signal(), Gio.DBusConnection.call() or Gio.DBusProxy.call().
    * @returns the last used serial or zero when no message has been sent within the current thread 
    */
  getLastSerial(): number;
  /**
    * Gets the credentials of the authenticated peer. This will always return None unless self acted as a server (e.g. Gio.DBusConnectionFlags.AUTHENTICATION_SERVER was passed) when set up and the client passed credentials as part of the authentication process.
    * @returns a Gio.Credentials or None if not available. Do not free this object, it is owned by self. 
    */
  getPeerCredentials(): import('../Gio').Credentials | null;
  /**
    * Gets the underlying stream used for IO.
    * @returns the stream used for IO 
    */
  getStream(): import('../Gio').IOStream;
  /**
    * Gets the unique name of self as assigned by the message bus. This can also be used to figure out if self is a message bus connection.
    * @returns the unique name or None if self is not a message bus connection. Do not free this string, it is owned by self. 
    */
  getUniqueName(): string;
  /**
    * Gets whether self is closed.
    * @returns True if the connection is closed, False otherwise 
    */
  isClosed(): boolean;
  /**
    * Version of Gio.DBusConnection.register_object() using closures instead of a Gio.DBusInterfaceVTable for easier binding in other languages.
    * @param objectPath The object path to register at.
    * @param interfaceInfo Introspection data for the interface.
    * @param methodCallClosure GObject.Closure for handling incoming method calls.
    * @param getPropertyClosure GObject.Closure for getting a property.
    * @param setPropertyClosure GObject.Closure for setting a property.
    * @returns 0 if error is set, otherwise a registration id (never 0) that can be used with Gio.DBusConnection.unregister_object() . 
    */
  registerObject(objectPath: string, interfaceInfo: import('../Gio').DBusInterfaceInfo, methodCallClosure: import('../GObject').Closure | null, getPropertyClosure: import('../GObject').Closure | null, setPropertyClosure: import('../GObject').Closure | null): number;
  /**
    * Registers a whole subtree of dynamic objects.
    * @param objectPath the object path to register the subtree at
    * @param vtable a Gio.DBusSubtreeVTable to enumerate, introspect and dispatch nodes in the subtree
    * @param flags flags used to fine tune the behavior of the subtree
    * @param userData data to pass to functions in vtable
    * @param userDataFreeFunc function to call when the subtree is unregistered
    * @returns 0 if error is set, otherwise a subtree registration id (never 0) that can be used with Gio.DBusConnection.unregister_subtree() . 
    */
  registerSubtree(objectPath: string, vtable: import('../Gio').DBusSubtreeVTable, flags: import('../Gio').DBusSubtreeFlags, userData: Object | null, userDataFreeFunc: import('../GLib').destroyNotify): number;
  /**
    * Removes a filter.
    * @param filterId an identifier obtained from Gio.DBusConnection.add_filter() 
    */
  removeFilter(filterId: number): void;
  /**
    * Asynchronously sends message to the peer represented by self.
    * @param message a Gio.DBusMessage
    * @param flags flags affecting how the message is sent
    * @returns True if the message was well-formed and queued for transmission, False if error is set   out_serial:return location for serial number assigned to message when sending it or None 
    */
  sendMessage(message: import('../Gio').DBusMessage, flags: import('../Gio').DBusSendMessageFlags): [boolean, number];
  /**
    * Asynchronously sends message to the peer represented by self.
    * @param message a Gio.DBusMessage
    * @param flags flags affecting how the message is sent
    * @param timeoutMsec the timeout in milliseconds, -1 to use the default timeout or GObject.G_MAXINT for no timeout
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t care about the result
    * @param userData The data to pass to callback
    * @returns return location for serial number assigned to message when sending it or None 
    */
  sendMessageWithReply(message: import('../Gio').DBusMessage, flags: import('../Gio').DBusSendMessageFlags, timeoutMsec: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): number;
  /**
    * Finishes an operation started with Gio.DBusConnection.send_message_with_reply().
    * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusConnection.send_message_with_reply()
    * @returns a locked Gio.DBusMessage or None if error is set 
    */
  sendMessageWithReplyFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusMessage;
  /**
    * Synchronously sends message to the peer represented by self and blocks the calling thread until a reply is received or the timeout is reached. See Gio.DBusConnection.send_message_with_reply() for the asynchronous version of this method.
    * @param message a Gio.DBusMessage
    * @param flags flags affecting how the message is sent.
    * @param timeoutMsec the timeout in milliseconds, -1 to use the default timeout or GObject.G_MAXINT for no timeout
    * @param cancellable a Gio.Cancellable or None
    * @returns a locked Gio.DBusMessage that is the reply to message or None if error is set   out_serial:return location for serial number assigned to message when sending it or None 
    */
  sendMessageWithReplySync(message: import('../Gio').DBusMessage, flags: import('../Gio').DBusSendMessageFlags, timeoutMsec: number, cancellable: import('../Gio').Cancellable | null): [import('../Gio').DBusMessage, number];
  /**
    * Sets whether the process should be terminated when self is closed by the remote peer. See Gio.DBusConnection :exit-on-close for more details.
    * @param exitOnClose whether the process should be terminated when self is closed by the remote peer 
    */
  setExitOnClose(exitOnClose: boolean): void;
  /**
    * Subscribes to signals on self and invokes callback with a whenever the signal is received. Note that callback will be invoked in the thread-default main context of the thread you are calling this method from.
    * @param sender sender name to match on (unique or well-known name) or None to listen from all senders
    * @param interfaceName D-Bus interface name to match on or None to match on all interfaces
    * @param member D-Bus signal name to match on or None to match on all signals
    * @param objectPath object path to match on or None to match on all object paths
    * @param arg0 contents of first string argument to match on or None to match on all kinds of arguments
    * @param flags Gio.DBusSignalFlags describing how arg0 is used in subscribing to the signal
    * @param callback callback to invoke when there is a signal matching the requested data
    * @param userData user data to pass to callback
    * @returns a subscription identifier that can be used with Gio.DBusConnection.signal_unsubscribe() 
    */
  signalSubscribe(sender: string | null, interfaceName: string | null, member: string | null, objectPath: string | null, arg0: string | null, flags: import('../Gio').DBusSignalFlags, callback: import('../Gio').dBusSignalCallback, userData: Object | null): number;
  /**
    * Unsubscribes from signals.
    * @param subscriptionId a subscription id obtained from Gio.DBusConnection.signal_subscribe() 
    */
  signalUnsubscribe(subscriptionId: number): void;
  /**
    * If self was created with Gio.DBusConnectionFlags.DELAY_MESSAGE_PROCESSING, this method starts processing messages. Does nothing on if self wasn’t created with this flag or if the method has already been called. 
    */
  startMessageProcessing(): void;
  /**
    * Reverses the effect of a previous call to Gio.DBusConnection.export_action_group().
    * @param exportId the ID from Gio.DBusConnection.export_action_group() 
    */
  unexportActionGroup(exportId: number): void;
  /**
    * Reverses the effect of a previous call to Gio.DBusConnection.export_menu_model().
    * @param exportId the ID from Gio.DBusConnection.export_menu_model() 
    */
  unexportMenuModel(exportId: number): void;
  /**
    * Unregisters an object.
    * @param registrationId a registration id obtained from Gio.DBusConnection.register_object()
    * @returns True if the object was unregistered, False otherwise 
    */
  unregisterObject(registrationId: number): boolean;
  /**
    * Unregisters a subtree.
    * @param registrationId a subtree registration id obtained from Gio.DBusConnection.register_subtree()
    * @returns True if the subtree was unregistered, False otherwise 
    */
  unregisterSubtree(registrationId: number): boolean;
  /**
    * D-Bus address specifying potential socket endpoints 
    */
  address: string;
  /**
    * Object used to assist in the authentication process 
    */
  authenticationObserver: import('../Gio').DBusAuthObserver;
  /**
    * Capabilities 
    */
  readonly capabilities: import('../Gio').DBusCapabilityFlags;
  /**
    * Whether the connection is closed 
    */
  readonly closed: boolean;
  /**
    * Whether the process is terminated when the connection is closed 
    */
  exitOnClose: boolean;
  /**
    * Flags 
    */
  flags: import('../Gio').DBusConnectionFlags;
  /**
    * GUID of the server peer 
    */
  guid: string;
  /**
    * The underlying streams used for I/O 
    */
  stream: import('../Gio').IOStream;
  /**
    * Unique name of bus connection 
    */
  readonly uniqueName: string;
}

