import * as Gio from '../Gio';
export declare interface UnixSocketAddress extends Gio.SocketAddress { }

/**
  * Support for UNIX-domain (also known as local) sockets. 
  */
export declare class UnixSocketAddress {
  /**
    * Checks if abstract UNIX domain socket names are supported.
    * @returns True if supported, False otherwise 
    */
  static abstractNamesSupported(): boolean;
  /**
    * Creates a new Gio.UnixSocketAddress for path.
    * @param path the socket path
    * @returns a new Gio.UnixSocketAddress 
    */
  static new(path: string): import('../Gio').SocketAddress;
  /**
    * Creates a new Gio.UnixSocketAddressType.ABSTRACT_PADDED Gio.UnixSocketAddress for path.
    * @param path the abstract name
    * @returns a new Gio.UnixSocketAddress 
    */
  static newAbstract(path: number): import('../Gio').SocketAddress;
  /**
    * Creates a new Gio.UnixSocketAddress of type type with name path.
    * @param path the name
    * @param type a Gio.UnixSocketAddressType
    * @returns a new Gio.UnixSocketAddress 
    */
  static newWithType(path: number, type: import('../Gio').UnixSocketAddressType): import('../Gio').SocketAddress;
  /**
    * Gets self’s type.
    * @returns a Gio.UnixSocketAddressType 
    */
  getAddressType(): import('../Gio').UnixSocketAddressType;
  /**
    * Tests if self is abstract.
    * @returns True if the address is abstract, False otherwise 
    */
  getIsAbstract(): boolean;
  /**
    * Gets self’s path, or for abstract sockets the “name”.
    * @returns the path for self 
    */
  getPath(): string;
  /**
    * Gets the length of self’s path.
    * @returns the length of the path 
    */
  getPathLen(): number;
  /**
    * Whether or not this is an abstract address deprecated 
    */
  abstract: boolean;
  /**
    * The type of UNIX socket address 
    */
  addressType: import('../Gio').UnixSocketAddressType;
  /**
    * UNIX socket path 
    */
  path: string;
  /**
    * UNIX socket path, as byte array 
    */
  pathAsArray: import('../GLib').ByteArray;
}

