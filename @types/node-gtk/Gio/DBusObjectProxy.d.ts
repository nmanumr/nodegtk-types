import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusObjectProxy extends GObject.Object, Gio.DBusObject { }

/**
  * A Gio.DBusObjectProxy is an object used to represent a remote object
with one or more D-Bus interfaces. Normally, you don’t instantiate
a Gio.DBusObjectProxy yourself - typically Gio.DBusObjectManagerClient
is used to obtain it. 
  */
export declare class DBusObjectProxy {
  /**
    * Creates a new Gio.DBusObjectProxy for the given connection and object path.
    * @param connection a Gio.DBusConnection
    * @param objectPath the object path
    * @returns a new Gio.DBusObjectProxy 
    */
  static new(connection: import('../Gio').DBusConnection, objectPath: string): import('../Gio').DBusObjectProxy;
  /**
    * Gets the connection that self is for.
    * @returns A Gio.DBusConnection. Do not free, the object is owned by self. 
    */
  getConnection(): import('../Gio').DBusConnection;
  /**
    * The connection of the proxy 
    */
  gConnection: import('../Gio').DBusConnection;
  /**
    * The object path of the proxy 
    */
  gObjectPath: string;
}

