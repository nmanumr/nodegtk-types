import * as GObject from '../GObject';

/**
  * The Gio.DBusObject type is the base type for D-Bus objects on both
the service side (see Gio.DBusObjectSkeleton) and the client side
(see Gio.DBusObjectProxy). It is essentially just a container of
interfaces. 
  */
export declare interface DBusObject extends GObject.GInterface {
  /**
    * Gets the D-Bus interface with name interface_name associated with self, if any.
    * @param interfaceName A D-Bus interface name.
    * @returns None if not found, otherwise a Gio.DBusInterface that must be freed with GObject.Object.unref(). 
    */
  getInterface(interfaceName: string): import('../Gio').DBusInterface;
  /**
    * Gets the D-Bus interfaces associated with self.
    * @returns A list of Gio.DBusInterface instances. The returned list must be freed by g_list_free() after each element has been freed with GObject.Object.unref(). 
    */
  getInterfaces(): import('../Gio').DBusInterface[];
  /**
    * Gets the object path for self.
    * @returns A string owned by self. Do not free. 
    */
  getObjectPath(): string;
}

