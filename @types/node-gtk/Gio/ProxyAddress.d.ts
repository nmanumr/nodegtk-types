import * as Gio from '../Gio';
export declare interface ProxyAddress extends Gio.InetSocketAddress { }

/**
  * Support for proxied Gio.InetSocketAddress. 
  */
export declare class ProxyAddress {
  /**
    * Creates a new Gio.ProxyAddress for inetaddr with protocol that should tunnel through dest_hostname and dest_port.
    * @param inetaddr The proxy server Gio.InetAddress.
    * @param port The proxy server port.
    * @param protocol The proxy protocol to support, in lower case (e.g. socks, http).
    * @param destHostname The destination hostname the proxy should tunnel to.
    * @param destPort The destination port to tunnel to.
    * @param username The username to authenticate to the proxy server (or None).
    * @param password The password to authenticate to the proxy server (or None).
    * @returns a new Gio.ProxyAddress 
    */
  static new(inetaddr: import('../Gio').InetAddress, port: number, protocol: string, destHostname: string, destPort: number, username: string | null, password: string | null): import('../Gio').SocketAddress;
  /**
    * Gets self’s destination hostname; that is, the name of the host that will be connected to via the proxy, not the name of the proxy itself.
    * @returns the self’s destination hostname 
    */
  getDestinationHostname(): string;
  /**
    * Gets self’s destination port; that is, the port on the destination host that will be connected to via the proxy, not the port number of the proxy itself.
    * @returns the self’s destination port 
    */
  getDestinationPort(): number;
  /**
    * Gets the protocol that is being spoken to the destination server; eg, “http” or “ftp”.
    * @returns the self’s destination protocol 
    */
  getDestinationProtocol(): string;
  /**
    * Gets self’s password.
    * @returns the self’s password 
    */
  getPassword(): string;
  /**
    * Gets self’s protocol. eg, “socks” or “http”
    * @returns the self’s protocol 
    */
  getProtocol(): string;
  /**
    * Gets the proxy URI that self was constructed from.
    * @returns the self’s URI, or None if unknown 
    */
  getUri(): string;
  /**
    * Gets self’s username.
    * @returns the self’s username 
    */
  getUsername(): string;
  /**
    * The proxy destination hostname 
    */
  destinationHostname: string;
  /**
    * The proxy destination port 
    */
  destinationPort: number;
  /**
    * The proxy destination protocol 
    */
  destinationProtocol: string;
  /**
    * The proxy password 
    */
  password: string;
  /**
    * The proxy protocol 
    */
  protocol: string;
  /**
    * The proxy’s URI 
    */
  uri: string;
  /**
    * The proxy username 
    */
  username: string;
}

