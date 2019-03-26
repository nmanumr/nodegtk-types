import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusInterfaceSkeleton extends GObject.Object, Gio.DBusInterface { }

/**
  * Abstract base class for D-Bus interfaces on the service side. 
  */
export declare abstract class DBusInterfaceSkeleton {
  /**
    * Exports self at object_path on connection.
    * @param connection A Gio.DBusConnection to export self on.
    * @param objectPath The path to export the interface at.
    * @returns True if the interface was exported on connection, otherwise False with error set. 
    */
  export(connection: import('../Gio').DBusConnection, objectPath: string): boolean;
  /**
    * If self has outstanding changes, request for these changes to be emitted immediately. 
    */
  flush(): void;
  /**
    * Gets the first connection that self is exported on, if any.
    * @returns A Gio.DBusConnection or None if self is not exported anywhere. Do not free, the object belongs to self. 
    */
  getConnection(): import('../Gio').DBusConnection;
  /**
    * Gets a list of the connections that self is exported on.
    * @returns A list of all the connections that self is exported on. The returned list should be freed with g_list_free() after each element has been freed with GObject.Object.unref(). 
    */
  getConnections(): import('../Gio').DBusConnection[];
  /**
    * Gets the Gio.DBusInterfaceSkeletonFlags that describes what the behavior of self
    * @returns One or more flags from the Gio.DBusInterfaceSkeletonFlags enumeration. 
    */
  getFlags(): import('../Gio').DBusInterfaceSkeletonFlags;
  /**
    * Gets D-Bus introspection information for the D-Bus interface implemented by self.
    * @returns A Gio.DBusInterfaceInfo (never None). Do not free. 
    */
  getInfo(): import('../Gio').DBusInterfaceInfo;
  /**
    * Gets the object path that self is exported on, if any.
    * @returns A string owned by self or None if self is not exported anywhere. Do not free, the string belongs to self. 
    */
  getObjectPath(): string;
  /**
    * Gets all D-Bus properties for self.
    * @returns A GLib.Variant of type ‘’a{sv}’ [G-VARIANT-TYPE-VARDICT:CAPS]’. Free with GLib.Variant.unref(). 
    */
  getProperties(): import('../GLib').Variant;
  /**
    * Checks if self is exported on connection.
    * @param connection A Gio.DBusConnection.
    * @returns True if self is exported on connection, False otherwise. 
    */
  hasConnection(connection: import('../Gio').DBusConnection): boolean;
  /**
    * Sets flags describing what the behavior of skeleton should be.
    * @param flags Flags from the Gio.DBusInterfaceSkeletonFlags enumeration. 
    */
  setFlags(flags: import('../Gio').DBusInterfaceSkeletonFlags): void;
  /**
    * Stops exporting self on all connections it is exported on. 
    */
  unexport(): void;
  /**
    * Stops exporting self on connection.
    * @param connection A Gio.DBusConnection. 
    */
  unexportFromConnection(connection: import('../Gio').DBusConnection): void;
  /**
    * Flags for the interface skeleton 
    */
  gFlags: import('../Gio').DBusInterfaceSkeletonFlags;
}

