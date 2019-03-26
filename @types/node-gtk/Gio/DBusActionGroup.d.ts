import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusActionGroup extends GObject.Object, Gio.ActionGroup, Gio.RemoteActionGroup { }

/**
  * Gio.DBusActionGroup is an implementation of the Gio.ActionGroup
interface that can be used as a proxy for an action group
that is exported over D-Bus with Gio.DBusConnection.export_action_group(). 
  */
export declare class DBusActionGroup {
  /**
    * Obtains a Gio.DBusActionGroup for the action group which is exported at the given bus_name and object_path.
    * @param connection A Gio.DBusConnection
    * @param busName the bus name which exports the action group or None if connection is not a message bus connection
    * @param objectPath the object path at which the action group is exported
    * @returns a Gio.DBusActionGroup 
    */
  static get(connection: import('../Gio').DBusConnection, busName: string | null, objectPath: string): import('../Gio').DBusActionGroup;
}

