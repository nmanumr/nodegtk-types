import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusProxy extends GObject.Object, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable { }

/**
  * Provide comfortable and pythonic method calls. 
  */
export declare class DBusProxy {
  /**
    * Creates a proxy for accessing interface_name on the remote object at object_path owned by name at connection and asynchronously loads D-Bus properties unless the Gio.DBusProxyFlags.DO_NOT_LOAD_PROPERTIES flag is used. Connect to the Gio.DBusProxy ::g-properties-changed signal to get notified about property changes.
    * @param connection A Gio.DBusConnection.
    * @param flags Flags used when constructing the proxy.
    * @param info A Gio.DBusInterfaceInfo specifying the minimal interface that proxy conforms to or None.
    * @param name A bus name (well-known or unique) or None if connection is not a message bus connection.
    * @param objectPath An object path.
    * @param interfaceName A D-Bus interface name.
    * @param cancellable A Gio.Cancellable or None.
    * @param callback Callback function to invoke when the proxy is ready.
    * @param userData User data to pass to callback. 
    */
  static new(connection: import('../Gio').DBusConnection, flags: import('../Gio').DBusProxyFlags, info: import('../Gio').DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes creating a Gio.DBusProxy.
    * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback function passed to Gio.DBusProxy.new().
    * @returns A Gio.DBusProxy or None if error is set. Free with GObject.Object.unref(). 
    */
  static newFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusProxy;
  /**
    * Like Gio.DBusProxy.new() but takes a Gio.BusType instead of a Gio.DBusConnection.
    * @param busType A Gio.BusType.
    * @param flags Flags used when constructing the proxy.
    * @param info A Gio.DBusInterfaceInfo specifying the minimal interface that proxy conforms to or None.
    * @param name A bus name (well-known or unique).
    * @param objectPath An object path.
    * @param interfaceName A D-Bus interface name.
    * @param cancellable A Gio.Cancellable or None.
    * @param callback Callback function to invoke when the proxy is ready.
    * @param userData User data to pass to callback. 
    */
  static newForBus(busType: import('../Gio').BusType, flags: import('../Gio').DBusProxyFlags, info: import('../Gio').DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes creating a Gio.DBusProxy.
    * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback function passed to Gio.DBusProxy.new_for_bus().
    * @returns A Gio.DBusProxy or None if error is set. Free with GObject.Object.unref(). 
    */
  static newForBusFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusProxy;
  /**
    * Like Gio.DBusProxy.new_sync() but takes a Gio.BusType instead of a Gio.DBusConnection.
    * @param busType A Gio.BusType.
    * @param flags Flags used when constructing the proxy.
    * @param info A Gio.DBusInterfaceInfo specifying the minimal interface that proxy conforms to or None.
    * @param name A bus name (well-known or unique).
    * @param objectPath An object path.
    * @param interfaceName A D-Bus interface name.
    * @param cancellable A Gio.Cancellable or None.
    * @returns A Gio.DBusProxy or None if error is set. Free with GObject.Object.unref(). 
    */
  static newForBusSync(busType: import('../Gio').BusType, flags: import('../Gio').DBusProxyFlags, info: import('../Gio').DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusProxy;
  /**
    * Creates a proxy for accessing interface_name on the remote object at object_path owned by name at connection and synchronously loads D-Bus properties unless the Gio.DBusProxyFlags.DO_NOT_LOAD_PROPERTIES flag is used.
    * @param connection A Gio.DBusConnection.
    * @param flags Flags used when constructing the proxy.
    * @param info A Gio.DBusInterfaceInfo specifying the minimal interface that proxy conforms to or None.
    * @param name A bus name (well-known or unique) or None if connection is not a message bus connection.
    * @param objectPath An object path.
    * @param interfaceName A D-Bus interface name.
    * @param cancellable A Gio.Cancellable or None.
    * @returns A Gio.DBusProxy or None if error is set. Free with GObject.Object.unref(). 
    */
  static newSync(connection: import('../Gio').DBusConnection, flags: import('../Gio').DBusProxyFlags, info: import('../Gio').DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusProxy;
  /**
    * Asynchronously invokes the method_name method on self.
    * @param methodName Name of method to invoke.
    * @param parameters A GLib.Variant tuple with parameters for the signal or None if not passing parameters.
    * @param flags Flags from the Gio.DBusCallFlags enumeration.
    * @param timeoutMsec The timeout in milliseconds (with GObject.G_MAXINT meaning “infinite”) or -1 to use the proxy default timeout.
    * @param cancellable A Gio.Cancellable or None.
    * @param callback A Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t care about the result of the method invocation.
    * @param userData The data to pass to callback. 
    */
  call(methodName: string, parameters: import('../GLib').Variant | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusProxy.call().
    * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusProxy.call().
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref(). 
    */
  callFinish(res: import('../Gio').AsyncResult): import('../GLib').Variant;
  /**
    * Synchronously invokes the method_name method on self.
    * @param methodName Name of method to invoke.
    * @param parameters A GLib.Variant tuple with parameters for the signal or None if not passing parameters.
    * @param flags Flags from the Gio.DBusCallFlags enumeration.
    * @param timeoutMsec The timeout in milliseconds (with GObject.G_MAXINT meaning “infinite”) or -1 to use the proxy default timeout.
    * @param cancellable A Gio.Cancellable or None.
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref(). 
    */
  callSync(methodName: string, parameters: import('../GLib').Variant | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, cancellable: import('../Gio').Cancellable | null): import('../GLib').Variant;
  /**
    * Like Gio.DBusProxy.call() but also takes a Gio.UnixFDList object.
    * @param methodName Name of method to invoke.
    * @param parameters A GLib.Variant tuple with parameters for the signal or None if not passing parameters.
    * @param flags Flags from the Gio.DBusCallFlags enumeration.
    * @param timeoutMsec The timeout in milliseconds (with GObject.G_MAXINT meaning “infinite”) or -1 to use the proxy default timeout.
    * @param fdList A Gio.UnixFDList or None.
    * @param cancellable A Gio.Cancellable or None.
    * @param callback A Gio.asyncReadyCallback to call when the request is satisfied or None if you don’t care about the result of the method invocation.
    * @param userData The data to pass to callback. 
    */
  callWithUnixFdList(methodName: string, parameters: import('../GLib').Variant | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, fdList: import('../Gio').UnixFDList | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusProxy.call_with_unix_fd_list().
    * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusProxy.call_with_unix_fd_list().
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref().  out_fd_list:Return location for a Gio.UnixFDList or None. 
    */
  callWithUnixFdListFinish(res: import('../Gio').AsyncResult): [import('../GLib').Variant, import('../Gio').UnixFDList];
  /**
    * Like Gio.DBusProxy.call_sync() but also takes and returns Gio.UnixFDList objects.
    * @param methodName Name of method to invoke.
    * @param parameters A GLib.Variant tuple with parameters for the signal or None if not passing parameters.
    * @param flags Flags from the Gio.DBusCallFlags enumeration.
    * @param timeoutMsec The timeout in milliseconds (with GObject.G_MAXINT meaning “infinite”) or -1 to use the proxy default timeout.
    * @param fdList A Gio.UnixFDList or None.
    * @param cancellable A Gio.Cancellable or None.
    * @returns None if error is set. Otherwise a GLib.Variant tuple with return values. Free with GLib.Variant.unref().   out_fd_list:Return location for a Gio.UnixFDList or None. 
    */
  callWithUnixFdListSync(methodName: string, parameters: import('../GLib').Variant | null, flags: import('../Gio').DBusCallFlags, timeoutMsec: number, fdList: import('../Gio').UnixFDList | null, cancellable: import('../Gio').Cancellable | null): [import('../GLib').Variant, import('../Gio').UnixFDList];
  /**
    * Looks up the value for a property from the cache. This call does no blocking IO.
    * @param propertyName Property name.
    * @returns A reference to the GLib.Variant instance that holds the value for property_name or None if the value is not in the cache. The returned reference must be freed with GLib.Variant.unref(). 
    */
  getCachedProperty(propertyName: string): import('../GLib').Variant | null;
  /**
    * Gets the names of all cached properties on self.
    * @returns A None-terminated array of strings or None if self has no cached properties. Free the returned array with GLib.strfreev(). 
    */
  getCachedPropertyNames(): string[] | null;
  /**
    * Gets the connection self is for.
    * @returns A Gio.DBusConnection owned by self. Do not free. 
    */
  getConnection(): import('../Gio').DBusConnection;
  /**
    * Gets the timeout to use if -1 (specifying default timeout) is passed as timeout_msec in the Gio.DBusProxy.call() and Gio.DBusProxy.call_sync() functions.
    * @returns Timeout to use for self. 
    */
  getDefaultTimeout(): number;
  /**
    * Gets the flags that self was constructed with.
    * @returns Flags from the Gio.DBusProxyFlags enumeration. 
    */
  getFlags(): import('../Gio').DBusProxyFlags;
  /**
    * Returns the Gio.DBusInterfaceInfo, if any, specifying the interface that self conforms to. See the Gio.DBusProxy :g-interface-info property for more details.
    * @returns A Gio.DBusInterfaceInfo or None. Do not unref the returned object, it is owned by self. 
    */
  getInterfaceInfo(): import('../Gio').DBusInterfaceInfo | null;
  /**
    * Gets the D-Bus interface name self is for.
    * @returns A string owned by self. Do not free. 
    */
  getInterfaceName(): string;
  /**
    * Gets the name that self was constructed for.
    * @returns A string owned by self. Do not free. 
    */
  getName(): string;
  /**
    * The unique name that owns the name that self is for or None if no-one currently owns that name. You may connect to the GObject.Object ::notify signal to track changes to the Gio.DBusProxy :g-name-owner property.
    * @returns The name owner or None if no name owner exists. Free with GLib.free(). 
    */
  getNameOwner(): string | null;
  /**
    * Gets the object path self is for.
    * @returns A string owned by self. Do not free. 
    */
  getObjectPath(): string;
  /**
    * If value is not None, sets the cached value for the property with name property_name to the value in value.
    * @param propertyName Property name.
    * @param value Value for the property or None to remove it from the cache. 
    */
  setCachedProperty(propertyName: string, value: import('../GLib').Variant | null): void;
  /**
    * Sets the timeout to use if -1 (specifying default timeout) is passed as timeout_msec in the Gio.DBusProxy.call() and Gio.DBusProxy.call_sync() functions.
    * @param timeoutMsec Timeout in milliseconds. 
    */
  setDefaultTimeout(timeoutMsec: number): void;
  /**
    * Ensure that interactions with self conform to the given interface. See the Gio.DBusProxy :g-interface-info property for more details.
    * @param info Minimum interface this proxy conforms to or None to unset. 
    */
  setInterfaceInfo(info: import('../Gio').DBusInterfaceInfo | null): void;
  /**
    * The bus to connect to, if any 
    */
  gBusType: import('../Gio').BusType;
  /**
    * The connection the proxy is for 
    */
  gConnection: import('../Gio').DBusConnection;
  /**
    * Timeout for remote method invocation 
    */
  gDefaultTimeout: number;
  /**
    * Flags for the proxy 
    */
  gFlags: import('../Gio').DBusProxyFlags;
  /**
    * Interface Information 
    */
  gInterfaceInfo: import('../Gio').DBusInterfaceInfo;
  /**
    * The D-Bus interface name the proxy is for 
    */
  gInterfaceName: string;
  /**
    * The well-known or unique name that the proxy is for 
    */
  gName: string;
  /**
    * The unique name for the owner 
    */
  readonly gNameOwner: string;
  /**
    * The object path the proxy is for 
    */
  gObjectPath: string;
}

