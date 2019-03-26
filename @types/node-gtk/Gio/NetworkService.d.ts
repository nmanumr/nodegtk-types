import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface NetworkService extends GObject.Object, Gio.SocketConnectable { }

/**
  * Like Gio.NetworkAddress does with hostnames, Gio.NetworkService
provides an easy way to resolve a SRV record, and then attempt to
connect to one of the hosts that implements that service, handling
service priority/weighting, multiple IP addresses, and multiple
address families. 
  */
export declare class NetworkService {
  /**
    * Creates a new Gio.NetworkService representing the given service, protocol, and domain. This will initially be unresolved; use the Gio.SocketConnectable interface to resolve it.
    * @param service the service type to look up (eg, “ldap”)
    * @param protocol the networking protocol to use for service (eg, “tcp”)
    * @param domain the DNS domain to look up the service in
    * @returns a new Gio.NetworkService 
    */
  static new(service: string, protocol: string, domain: string): import('../Gio').NetworkService;
  /**
    * Gets the domain that self serves. This might be either UTF-8 or ASCII-encoded, depending on what self was created with.
    * @returns self’s domain name 
    */
  getDomain(): string;
  /**
    * Gets self’s protocol name (eg, “tcp”).
    * @returns self’s protocol name 
    */
  getProtocol(): string;
  /**
    * Get’s the URI scheme used to resolve proxies. By default, the service name is used as scheme.
    * @returns self’s scheme name 
    */
  getScheme(): string;
  /**
    * Gets self’s service name (eg, “ldap”).
    * @returns self’s service name 
    */
  getService(): string;
  /**
    * Set’s the URI scheme used to resolve proxies. By default, the service name is used as scheme.
    * @param scheme a URI scheme 
    */
  setScheme(scheme: string): void;
  /**
    * Network domain, eg, “example.com” 
    */
  domain: string;
  /**
    * Network protocol, eg “tcp” 
    */
  protocol: string;
  /**
    * Network scheme (default is to use service) 
    */
  scheme: string;
  /**
    * Service name, eg “ldap” 
    */
  service: string;
}

