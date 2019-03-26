import * as Gio from '../Gio';
export declare interface DBusMenuModel extends Gio.MenuModel { }

/**
  * Gio.DBusMenuModel is an implementation of Gio.MenuModel that can be used
as a proxy for a menu model that is exported over D-Bus with
Gio.DBusConnection.export_menu_model(). 
  */
export declare class DBusMenuModel {
  /**
    * Obtains a Gio.DBusMenuModel for the menu model which is exported at the given bus_name and object_path.
    * @param connection a Gio.DBusConnection
    * @param busName the bus name which exports the menu model or None if connection is not a message bus connection
    * @param objectPath the object path at which the menu model is exported
    * @returns a Gio.DBusMenuModel object. Free with GObject.Object.unref(). 
    */
  static get(connection: import('../Gio').DBusConnection, busName: string | null, objectPath: string): import('../Gio').DBusMenuModel;
}

