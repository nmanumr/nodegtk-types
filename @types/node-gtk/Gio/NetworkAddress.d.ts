import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface NetworkAddress extends GObject.Object, Gio.SocketConnectable { }

/**
  * Gio.NetworkAddress provides an easy way to resolve a hostname and
then attempt to connect to that host, handling the possibility of
multiple IP addresses and multiple address families. 
  */
export declare class NetworkAddress {
  /**
    * Creates a new Gio.SocketConnectable for connecting to the given hostname and port.
    * @param hostname the hostname
    * @param port the port
    * @returns the new Gio.NetworkAddress 
    */
  static new(hostname: string, port: number): import('../Gio').NetworkAddress;
  /**
    * Creates a new Gio.SocketConnectable for connecting to the local host over a loopback connection to the given port. This is intended for use in connecting to local services which may be running on IPv4 or IPv6.
    * @param port the port
    * @returns the new Gio.NetworkAddress 
    */
  static newLoopback(port: number): import('../Gio').NetworkAddress;
  /**
    * Creates a new Gio.SocketConnectable for connecting to the given hostname and port. May fail and return None in case parsing host_and_port fails.
    * @param hostAndPort the hostname and optionally a port
    * @param defaultPort the default port if not in host_and_port
    * @returns the new Gio.NetworkAddress, or None on error 
    */
  static parse(hostAndPort: string, defaultPort: number): import('../Gio').NetworkAddress;
  /**
    * Creates a new Gio.SocketConnectable for connecting to the given uri. May fail and return None in case parsing uri fails.
    * @param uri the hostname and optionally a port
    * @param defaultPort The default port if none is found in the URI
    * @returns the new Gio.NetworkAddress, or None on error 
    */
  static parseUri(uri: string, defaultPort: number): import('../Gio').NetworkAddress;
  /**
    * Gets self’s hostname. This might be either UTF-8 or ASCII-encoded, depending on what self was created with.
    * @returns self’s hostname 
    */
  getHostname(): string;
  /**
    * Gets self’s port number
    * @returns self’s port (which may be 0) 
    */
  getPort(): number;
  /**
    * Gets self’s scheme
    * @returns self’s scheme (None if not built from URI) 
    */
  getScheme(): string;
  /**
    * Hostname to resolve 
    */
  hostname: string;
  /**
    * Network port 
    */
  port: number;
  /**
    * URI Scheme 
    */
  scheme: string;
}

