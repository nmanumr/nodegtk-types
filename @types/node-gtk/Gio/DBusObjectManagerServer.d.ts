import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusObjectManagerServer extends GObject.Object, Gio.DBusObjectManager { }

/**
  * Gio.DBusObjectManagerServer is used to export Gio.DBusObject instances using
the standardized
org.freedesktop.DBus.ObjectManager
interface. For example, remote D-Bus clients can get all objects
and properties in a single call. Additionally, any change in the
object hierarchy is broadcast using signals. This means that D-Bus
clients can keep caches up to date by only listening to D-Bus
signals. 
  */
export declare class DBusObjectManagerServer {
  /**
    * Creates a new Gio.DBusObjectManagerServer object.
    * @param objectPath The object path to export the manager object at.
    * @returns A Gio.DBusObjectManagerServer object. Free with GObject.Object.unref(). 
    */
  static new(objectPath: string): import('../Gio').DBusObjectManagerServer;
  /**
    * Exports object on self.
    * @param object A Gio.DBusObjectSkeleton. 
    */
  export(object: import('../Gio').DBusObjectSkeleton): void;
  /**
    * Like Gio.DBusObjectManagerServer.export() but appends a string of the form _N (with N being a natural number) to object’s object path if an object with the given path already exists. As such, the Gio.DBusObjectProxy :g-object-path property of object may be modified.
    * @param object An object. 
    */
  exportUniquely(object: import('../Gio').DBusObjectSkeleton): void;
  /**
    * Gets the Gio.DBusConnection used by self.
    * @returns A Gio.DBusConnection object or None if self isn’t exported on a connection. The returned object should be freed with GObject.Object.unref(). 
    */
  getConnection(): import('../Gio').DBusConnection;
  /**
    * Returns whether object is currently exported on self.
    * @param object An object.
    * @returns True if object is exported 
    */
  isExported(object: import('../Gio').DBusObjectSkeleton): boolean;
  /**
    * Exports all objects managed by self on connection. If connection is None, stops exporting objects.
    * @param connection A Gio.DBusConnection or None. 
    */
  setConnection(connection: import('../Gio').DBusConnection | null): void;
  /**
    * If self has an object at path, removes the object. Otherwise does nothing.
    * @param objectPath An object path.
    * @returns True if object at object_path was removed, False otherwise. 
    */
  unexport(objectPath: string): boolean;
  /**
    * The connection to export objects on 
    */
  connection: import('../Gio').DBusConnection;
  /**
    * The object path to register the manager object at 
    */
  objectPath: string;
}

