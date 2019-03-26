import * as GObject from '../GObject';

/**
  * The Gio.DBusInterface type is the base type for D-Bus interfaces both
on the service side (see Gio.DBusInterfaceSkeleton) and client side
(see Gio.DBusProxy). 
  */
export declare interface DBusInterface extends GObject.GInterface {
  /**
    * Gets D-Bus introspection information for the D-Bus interface implemented by self.
    * @returns A Gio.DBusInterfaceInfo. Do not free. 
    */
  getInfo(): import('../Gio').DBusInterfaceInfo;
  /**
    * Gets the Gio.DBusObject that self belongs to, if any.
    * @returns A Gio.DBusObject or None. The returned reference should be freed with GObject.Object.unref(). 
    */
  getObject(): import('../Gio').DBusObject;
  /**
    * Sets the Gio.DBusObject for self to object.
    * @param object A Gio.DBusObject or None. 
    */
  setObject(object: import('../Gio').DBusObject | null): void;
}

