import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface InetAddressMask extends GObject.Object, Gio.Initable { }

/**
  * Gio.InetAddressMask represents a range of IPv4 or IPv6 addresses
described by a base address and a length indicating how many bits
of the base address are relevant for matching purposes. These are
often given in string form. Eg, “10.0.0.0/8”, or “fe80::/10”. 
  */
export declare class InetAddressMask {
  /**
    * Creates a new Gio.InetAddressMask representing all addresses whose first length bits match addr.
    * @param addr a Gio.InetAddress
    * @param length number of bits of addr to use
    * @returns a new Gio.InetAddressMask, or None on error 
    */
  static new(addr: import('../Gio').InetAddress, length: number): import('../Gio').InetAddressMask;
  /**
    * Parses mask_string as an IP address and (optional) length, and creates a new Gio.InetAddressMask. The length, if present, is delimited by a “/”. If it is not present, then the length is assumed to be the full length of the address.
    * @param maskString an IP address or address/length string
    * @returns a new Gio.InetAddressMask corresponding to string, or None on error. 
    */
  static newFromString(maskString: string): import('../Gio').InetAddressMask;
  /**
    * Tests if self and mask2 are the same mask.
    * @param mask2 another Gio.InetAddressMask
    * @returns whether self and mask2 are the same mask 
    */
  equal(mask2: import('../Gio').InetAddressMask): boolean;
  /**
    * Gets self’s base address
    * @returns self’s base address 
    */
  getAddress(): import('../Gio').InetAddress;
  /**
    * Gets the Gio.SocketFamily of self’s address
    * @returns the Gio.SocketFamily of self’s address 
    */
  getFamily(): import('../Gio').SocketFamily;
  /**
    * Gets self’s length
    * @returns self’s length 
    */
  getLength(): number;
  /**
    * Tests if address falls within the range described by self.
    * @param address a Gio.InetAddress
    * @returns whether address falls within the range described by self. 
    */
  matches(address: import('../Gio').InetAddress): boolean;
  /**
    * Converts self back to its corresponding string form.
    * @returns a string corresponding to self. 
    */
  toString(): string;
  /**
    * The base address 
    */
  address: import('../Gio').InetAddress;
  /**
    * The address family (IPv4 or IPv6) 
    */
  readonly family: import('../Gio').SocketFamily;
  /**
    * The prefix length 
    */
  length: number;
}

