import * as GObject from '../GObject';

/**
  * The Gio.DBusObjectManager type is the base type for service- and
client-side implementations of the standardized
org.freedesktop.DBus.ObjectManager
interface. 
  */
export declare interface DBusObjectManager extends GObject.GInterface {
/**
  * Gets the interface proxy for interface_name at object_path, if any.
  * @param objectPath Object path to lookup.
  * @param interfaceName D-Bus interface name to lookup.
  * @returns A Gio.DBusInterface instance or None. Free with GObject.Object.unref(). 
  */
getInterface(objectPath: string, interfaceName: string): import('../Gio').DBusInterface;
/**
  * Gets the Gio.DBusObjectProxy at object_path, if any.
  * @param objectPath Object path to lookup.
  * @returns A Gio.DBusObject or None. Free with GObject.Object.unref(). 
  */
getObject(objectPath: string): import('../Gio').DBusObject;
/**
  * Gets the object path that self is for.
  * @returns A string owned by self. Do not free. 
  */
getObjectPath(): string;
/**
  * Gets all Gio.DBusObject objects known to self.
  * @returns A list of Gio.DBusObject objects. The returned list should be freed with g_list_free() after each element has been freed with GObject.Object.unref(). 
  */
getObjects(): import('../Gio').DBusObject[];
}

