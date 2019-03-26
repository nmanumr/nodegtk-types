import * as GObject from '../GObject';
export declare interface SocketConnectable extends GObject.GInterface { }

/**
  * Objects that describe one or more potential socket endpoints
implement Gio.SocketConnectable. Callers can then use
Gio.SocketConnectable.enumerate() to get a Gio.SocketAddressEnumerator
to try out each socket address in turn until one succeeds, as shown
in the sample code below. 
  */
export declare interface SocketConnectable {
  /**
    * Creates a Gio.SocketAddressEnumerator for self.
    * @returns a new Gio.SocketAddressEnumerator. 
    */
  enumerate(): import('../Gio').SocketAddressEnumerator;
  /**
    * Creates a Gio.SocketAddressEnumerator for self that will return #GProxyAddresses for addresses that you must connect to via a proxy.
    * @returns a new Gio.SocketAddressEnumerator. 
    */
  proxyEnumerate(): import('../Gio').SocketAddressEnumerator;
  /**
    * Format a Gio.SocketConnectable as a string. This is a human-readable format for use in debugging output, and is not a stable serialization format. It is not suitable for use in user interfaces as it exposes too much information for a user.
    * @returns the formatted string 
    */
  toString(): string;
}

