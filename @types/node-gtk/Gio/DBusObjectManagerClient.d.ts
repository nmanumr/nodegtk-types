import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusObjectManagerClient extends GObject.Object, Gio.AsyncInitable, Gio.DBusObjectManager, Gio.Initable { }

/**
  * Gio.DBusObjectManagerClient is used to create, monitor and delete object
proxies for remote objects exported by a Gio.DBusObjectManagerServer (or any
code implementing the
org.freedesktop.DBus.ObjectManager
interface). 
  */
export declare class DBusObjectManagerClient {
  /**
    * Asynchronously creates a new Gio.DBusObjectManagerClient object.
    * @param connection A Gio.DBusConnection.
    * @param flags Zero or more flags from the Gio.DBusObjectManagerClientFlags enumeration.
    * @param name The owner of the control object (unique or well-known name).
    * @param objectPath The object path of the control object.
    * @param getProxyTypeFunc A Gio.DBusProxyTypeFunc function or None to always construct Gio.DBusProxy proxies.
    * @param getProxyTypeUserData User data to pass to get_proxy_type_func.
    * @param cancellable A Gio.Cancellable or None
    * @param callback A Gio.asyncReadyCallback to call when the request is satisfied.
    * @param userData The data to pass to callback. 
    */
  static new(connection: import('../Gio').DBusConnection, flags: import('../Gio').DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: import('../Gio').dBusProxyTypeFunc | null, getProxyTypeUserData: Object | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusObjectManagerClient.new().
    * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusObjectManagerClient.new().
    * @returns A Gio.DBusObjectManagerClient object or None if error is set. Free with GObject.Object.unref(). 
    */
  static newFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusObjectManagerClient;
  /**
    * Like Gio.DBusObjectManagerClient.new() but takes a Gio.BusType instead of a Gio.DBusConnection.
    * @param busType A Gio.BusType.
    * @param flags Zero or more flags from the Gio.DBusObjectManagerClientFlags enumeration.
    * @param name The owner of the control object (unique or well-known name).
    * @param objectPath The object path of the control object.
    * @param getProxyTypeFunc A Gio.DBusProxyTypeFunc function or None to always construct Gio.DBusProxy proxies.
    * @param getProxyTypeUserData User data to pass to get_proxy_type_func.
    * @param cancellable A Gio.Cancellable or None
    * @param callback A Gio.asyncReadyCallback to call when the request is satisfied.
    * @param userData The data to pass to callback. 
    */
  static newForBus(busType: import('../Gio').BusType, flags: import('../Gio').DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: import('../Gio').dBusProxyTypeFunc | null, getProxyTypeUserData: Object | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.DBusObjectManagerClient.new_for_bus().
    * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.DBusObjectManagerClient.new_for_bus().
    * @returns A Gio.DBusObjectManagerClient object or None if error is set. Free with GObject.Object.unref(). 
    */
  static newForBusFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusObjectManagerClient;
  /**
    * Like Gio.DBusObjectManagerClient.new_sync() but takes a Gio.BusType instead of a Gio.DBusConnection.
    * @param busType A Gio.BusType.
    * @param flags Zero or more flags from the Gio.DBusObjectManagerClientFlags enumeration.
    * @param name The owner of the control object (unique or well-known name).
    * @param objectPath The object path of the control object.
    * @param getProxyTypeFunc A Gio.DBusProxyTypeFunc function or None to always construct Gio.DBusProxy proxies.
    * @param getProxyTypeUserData User data to pass to get_proxy_type_func.
    * @param cancellable A Gio.Cancellable or None
    * @returns A Gio.DBusObjectManagerClient object or None if error is set. Free with GObject.Object.unref(). 
    */
  static newForBusSync(busType: import('../Gio').BusType, flags: import('../Gio').DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: import('../Gio').dBusProxyTypeFunc | null, getProxyTypeUserData: Object | null, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusObjectManagerClient;
  /**
    * Creates a new Gio.DBusObjectManagerClient object.
    * @param connection A Gio.DBusConnection.
    * @param flags Zero or more flags from the Gio.DBusObjectManagerClientFlags enumeration.
    * @param name The owner of the control object (unique or well-known name), or None when not using a message bus connection.
    * @param objectPath The object path of the control object.
    * @param getProxyTypeFunc A Gio.DBusProxyTypeFunc function or None to always construct Gio.DBusProxy proxies.
    * @param getProxyTypeUserData User data to pass to get_proxy_type_func.
    * @param cancellable A Gio.Cancellable or None
    * @returns A Gio.DBusObjectManagerClient object or None if error is set. Free with GObject.Object.unref(). 
    */
  static newSync(connection: import('../Gio').DBusConnection, flags: import('../Gio').DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc: import('../Gio').dBusProxyTypeFunc | null, getProxyTypeUserData: Object | null, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusObjectManagerClient;
  /**
    * Gets the Gio.DBusConnection used by self.
    * @returns A Gio.DBusConnection object. Do not free, the object belongs to self. 
    */
  getConnection(): import('../Gio').DBusConnection;
  /**
    * Gets the flags that self was constructed with.
    * @returns Zero of more flags from the Gio.DBusObjectManagerClientFlags enumeration. 
    */
  getFlags(): import('../Gio').DBusObjectManagerClientFlags;
  /**
    * Gets the name that self is for, or None if not a message bus connection.
    * @returns A unique or well-known name. Do not free, the string belongs to self. 
    */
  getName(): string;
  /**
    * The unique name that owns the name that self is for or None if no-one currently owns that name. You can connect to the GObject.Object ::notify signal to track changes to the Gio.DBusObjectManagerClient :name-owner property.
    * @returns The name owner or None if no name owner exists. Free with GLib.free(). 
    */
  getNameOwner(): string | null;
  /**
    * The bus to connect to, if any 
    */
  busType: import('../Gio').BusType;
  /**
    * The connection to use 
    */
  connection: import('../Gio').DBusConnection;
  /**
    * Flags for the proxy manager 
    */
  flags: import('../Gio').DBusObjectManagerClientFlags;
  /**
    * The Gio.DBusProxyTypeFunc user data free function 
    */
  getProxyTypeDestroyNotify: number;
  /**
    * The Gio.DBusProxyTypeFunc pointer to use 
    */
  getProxyTypeFunc: number;
  /**
    * The Gio.DBusProxyTypeFunc user_data 
    */
  getProxyTypeUserData: number;
  /**
    * Name that the manager is for 
    */
  name: string;
  /**
    * The owner of the name we are watching 
    */
  readonly nameOwner: string;
  /**
    * The object path of the control object 
    */
  objectPath: string;
}

