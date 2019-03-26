import * as Gio from '../Gio';
export declare interface InetSocketAddress extends Gio.SocketAddress { }

/**
  * An IPv4 or IPv6 socket address; that is, the combination of a
Gio.InetAddress and a port number. 
  */
export declare class InetSocketAddress {
  /**
    * Creates a new Gio.InetSocketAddress for address and port.
    * @param address a Gio.InetAddress
    * @param port a port number
    * @returns a new Gio.InetSocketAddress 
    */
  static new(address: import('../Gio').InetAddress, port: number): import('../Gio').SocketAddress;
  /**
    * Creates a new Gio.InetSocketAddress for address and port.
    * @param address the string form of an IP address
    * @param port a port number
    * @returns a new Gio.InetSocketAddress, or None if address cannot be parsed. 
    */
  static newFromString(address: string, port: number): import('../Gio').SocketAddress;
  /**
    * Gets self’s Gio.InetAddress.
    * @returns the Gio.InetAddress for self, which must be GObject.Object.ref()’d if it will be stored 
    */
  getAddress(): import('../Gio').InetAddress;
  /**
    * Gets the sin6_flowinfo field from self, which must be an IPv6 address.
    * @returns the flowinfo field 
    */
  getFlowinfo(): number;
  /**
    * Gets self’s port.
    * @returns the port for self 
    */
  getPort(): number;
  /**
    * Gets the sin6_scope_id field from self, which must be an IPv6 address.
    * @returns the scope id field 
    */
  getScopeId(): number;
  /**
    * The address 
    */
  address: import('../Gio').InetAddress;
  /**
    * IPv6 flow info 
    */
  flowinfo: number;
  /**
    * The port 
    */
  port: number;
  /**
    * IPv6 scope ID 
    */
  scopeId: number;
}

