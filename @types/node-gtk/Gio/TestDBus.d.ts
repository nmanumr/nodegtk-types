import * as GObject from '../GObject';
export declare interface TestDBus extends GObject.Object { }

/**
  * A helper class for testing code which uses D-Bus without touching the user’s
session bus. 
  */
export declare class TestDBus {
  /**
    * Create a new Gio.TestDBus object.
    * @param flags a Gio.TestDBusFlags
    * @returns a new Gio.TestDBus. 
    */
  static new(flags: import('../Gio').TestDBusFlags): import('../Gio').TestDBus;
  /**
    * Unset DISPLAY and DBUS_SESSION_BUS_ADDRESS env variables to ensure the test won’t use user’s session bus. 
    */
  static unset(): void;
  /**
    * Add a path where dbus-daemon will look up .service files. This can’t be called after Gio.TestDBus.up().
    * @param path path to a directory containing .service files 
    */
  addServiceDir(path: string): void;
  /**
    * Stop the session bus started by Gio.TestDBus.up(). 
    */
  down(): void;
  /**
    * Get the address on which dbus-daemon is running. If Gio.TestDBus.up() has not been called yet, None is returned. This can be used with Gio.DBusConnection.new_for_address().
    * @returns the address of the bus, or None. 
    */
  getBusAddress(): string | null;
  /**
    * Get the flags of the Gio.TestDBus object.
    * @returns the value of Gio.TestDBus :flags property 
    */
  getFlags(): import('../Gio').TestDBusFlags;
  /**
    * Stop the session bus started by Gio.TestDBus.up(). 
    */
  stop(): void;
  /**
    * Start a dbus-daemon instance and set DBUS_SESSION_BUS_ADDRESS. After this call, it is safe for unit tests to start sending messages on the session bus. 
    */
  up(): void;
  /**
    * Flags specifying the behaviour of the D-Bus session 
    */
  flags: import('../Gio').TestDBusFlags;
}

