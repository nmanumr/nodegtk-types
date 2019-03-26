import * as GObject from '../GObject';
export declare interface InetAddress extends GObject.Object { }

/**
  * Gio.InetAddress represents an IPv4 or IPv6 internet address. Use
Gio.Resolver.lookup_by_name() or Gio.Resolver.lookup_by_name_async() to
look up the Gio.InetAddress for a hostname. Use
Gio.Resolver.lookup_by_address() or
Gio.Resolver.lookup_by_address_async() to look up the hostname for a
Gio.InetAddress. 
  */
export declare class InetAddress {
  /**
    * Creates a Gio.InetAddress for the “any” address (unassigned/”don’t care”) for family.
    * @param family the address family
    * @returns a new Gio.InetAddress corresponding to the “any” address for family. Free the returned object with GObject.Object.unref(). 
    */
  static newAny(family: import('../Gio').SocketFamily): import('../Gio').InetAddress;
  /**
    * Creates a new Gio.InetAddress from the given family and bytes. bytes should be 4 bytes for Gio.SocketFamily.IPV4 and 16 bytes for Gio.SocketFamily.IPV6.
    * @param bytes raw address data
    * @param family the address family of bytes
    * @returns a new Gio.InetAddress corresponding to family and bytes. Free the returned object with GObject.Object.unref(). 
    */
  static newFromBytes(bytes: Int8Array, family: import('../Gio').SocketFamily): import('../Gio').InetAddress;
  /**
    * Parses string as an IP address and creates a new Gio.InetAddress.
    * @param string a string representation of an IP address
    * @returns a new Gio.InetAddress corresponding to string, or None if string could not be parsed. Free the returned object with GObject.Object.unref(). 
    */
  static newFromString(string: string): import('../Gio').InetAddress;
  /**
    * Creates a Gio.InetAddress for the loopback address for family.
    * @param family the address family
    * @returns a new Gio.InetAddress corresponding to the loopback address for family. Free the returned object with GObject.Object.unref(). 
    */
  static newLoopback(family: import('../Gio').SocketFamily): import('../Gio').InetAddress;
  /**
    * Checks if two Gio.InetAddress instances are equal, e.g. the same address.
    * @param otherAddress Another Gio.InetAddress.
    * @returns True if self and other_address are equal, False otherwise. 
    */
  equal(otherAddress: import('../Gio').InetAddress): boolean;
  /**
    * Gets self’s family
    * @returns self’s family 
    */
  getFamily(): import('../Gio').SocketFamily;
  /**
    * Tests whether self is the “any” address for its family.
    * @returns True if self is the “any” address for its family. 
    */
  getIsAny(): boolean;
  /**
    * Tests whether self is a link-local address (that is, if it identifies a host on a local network that is not connected to the Internet).
    * @returns True if self is a link-local address. 
    */
  getIsLinkLocal(): boolean;
  /**
    * Tests whether self is the loopback address for its family.
    * @returns True if self is the loopback address for its family. 
    */
  getIsLoopback(): boolean;
  /**
    * Tests whether self is a global multicast address.
    * @returns True if self is a global multicast address. 
    */
  getIsMcGlobal(): boolean;
  /**
    * Tests whether self is a link-local multicast address.
    * @returns True if self is a link-local multicast address. 
    */
  getIsMcLinkLocal(): boolean;
  /**
    * Tests whether self is a node-local multicast address.
    * @returns True if self is a node-local multicast address. 
    */
  getIsMcNodeLocal(): boolean;
  /**
    * Tests whether self is an organization-local multicast address.
    * @returns True if self is an organization-local multicast address. 
    */
  getIsMcOrgLocal(): boolean;
  /**
    * Tests whether self is a site-local multicast address.
    * @returns True if self is a site-local multicast address. 
    */
  getIsMcSiteLocal(): boolean;
  /**
    * Tests whether self is a multicast address.
    * @returns True if self is a multicast address. 
    */
  getIsMulticast(): boolean;
  /**
    * Tests whether self is a site-local address such as 10.0.0.1 (that is, the address identifies a host on a local network that can not be reached directly from the Internet, but which may have outgoing Internet connectivity via a NAT or firewall).
    * @returns True if self is a site-local address. 
    */
  getIsSiteLocal(): boolean;
  /**
    * Gets the size of the native raw binary address for self. This is the size of the data that you get from g_inet_address_to_bytes().
    * @returns the number of bytes used for the native version of self. 
    */
  getNativeSize(): number;
  /**
    * Converts self to string form.
    * @returns a representation of self as a string, which should be freed after use. 
    */
  toString(): string;
  /**
    * The raw address data 
    */
  bytes: number;
  /**
    * The address family (IPv4 or IPv6) 
    */
  family: import('../Gio').SocketFamily;
  /**
    * Whether this is the “any” address for its family 
    */
  readonly isAny: boolean;
  /**
    * Whether this is a link-local address 
    */
  readonly isLinkLocal: boolean;
  /**
    * Whether this is the loopback address for its family 
    */
  readonly isLoopback: boolean;
  /**
    * Whether this is a global multicast address 
    */
  readonly isMcGlobal: boolean;
  /**
    * Whether this is a link-local multicast address 
    */
  readonly isMcLinkLocal: boolean;
  /**
    * Whether this is a node-local multicast address 
    */
  readonly isMcNodeLocal: boolean;
  /**
    * Whether this is an organization-local multicast address 
    */
  readonly isMcOrgLocal: boolean;
  /**
    * Whether this is a site-local multicast address 
    */
  readonly isMcSiteLocal: boolean;
  /**
    * Whether this is a multicast address 
    */
  readonly isMulticast: boolean;
  /**
    * Whether this is a site-local address 
    */
  readonly isSiteLocal: boolean;
}

