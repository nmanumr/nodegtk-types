import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DBusServer extends GObject.Object, Gio.Initable { }

/**
  * Gio.DBusServer is a helper for listening to and accepting D-Bus
connections. This can be used to create a new D-Bus server, allowing two
peers to use the D-Bus protocol for their own specialized communication.
A server instance provided in this way will not perform message routing or
implement the org.freedesktop.DBus interface. 
  */
export declare class DBusServer {
  /**
    * Creates a new D-Bus server that listens on the first address in address that works.
    * @param address A D-Bus address.
    * @param flags Flags from the Gio.DBusServerFlags enumeration.
    * @param guid A D-Bus GUID.
    * @param observer A Gio.DBusAuthObserver or None.
    * @param cancellable A Gio.Cancellable or None.
    * @returns A Gio.DBusServer or None if error is set. Free with GObject.Object.unref(). 
    */
  static newSync(address: string, flags: import('../Gio').DBusServerFlags, guid: string, observer: import('../Gio').DBusAuthObserver | null, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusServer;
  /**
    * Gets a D-Bus address string that can be used by clients to connect to self.
    * @returns A D-Bus address string. Do not free, the string is owned by self. 
    */
  getClientAddress(): string;
  /**
    * Gets the flags for self.
    * @returns A set of flags from the Gio.DBusServerFlags enumeration. 
    */
  getFlags(): import('../Gio').DBusServerFlags;
  /**
    * Gets the GUID for self.
    * @returns A D-Bus GUID. Do not free this string, it is owned by self. 
    */
  getGuid(): string;
  /**
    * Gets whether self is active.
    * @returns True if server is active, False otherwise. 
    */
  isActive(): boolean;
  /**
    * Starts self. 
    */
  start(): void;
  /**
    * Stops self. 
    */
  stop(): void;
  /**
    * Whether the server is currently active 
    */
  readonly active: boolean;
  /**
    * The address to listen on 
    */
  address: string;
  /**
    * Object used to assist in the authentication process 
    */
  authenticationObserver: import('../Gio').DBusAuthObserver;
  /**
    * The address clients can use 
    */
  readonly clientAddress: string;
  /**
    * Flags for the server 
    */
  flags: import('../Gio').DBusServerFlags;
  /**
    * The guid of the server 
    */
  guid: string;
}

