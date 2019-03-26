import * as GObject from '../GObject';
export declare interface DBusAuthObserver extends GObject.Object { }

/**
  * The Gio.DBusAuthObserver type provides a mechanism for participating
in how a Gio.DBusServer (or a Gio.DBusConnection) authenticates remote
peers. Simply instantiate a Gio.DBusAuthObserver and connect to the
signals you are interested in. Note that new signals may be added
in the future 
  */
export declare class DBusAuthObserver {
  /**
    * Creates a new Gio.DBusAuthObserver object.
    * @returns A Gio.DBusAuthObserver. Free with GObject.Object.unref(). 
    */
  static new(): import('../Gio').DBusAuthObserver;
  /**
    * Emits the Gio.DBusAuthObserver ::allow-mechanism signal on self.
    * @param mechanism The name of the mechanism, e.g. DBUS_COOKIE_SHA1.
    * @returns True if mechanism can be used to authenticate the other peer, False if not. 
    */
  allowMechanism(mechanism: string): boolean;
  /**
    * Emits the Gio.DBusAuthObserver ::authorize-authenticated-peer signal on self.
    * @param stream A Gio.IOStream for the Gio.DBusConnection.
    * @param credentials Credentials received from the peer or None.
    * @returns True if the peer is authorized, False if not. 
    */
  authorizeAuthenticatedPeer(stream: import('../Gio').IOStream, credentials: import('../Gio').Credentials | null): boolean;
}

