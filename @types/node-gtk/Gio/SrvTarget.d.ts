/**
  * SRV (service) records are used by some network protocols to provide
service-specific aliasing and load-balancing. For example, XMPP
(Jabber) uses SRV records to locate the XMPP server for a domain;
rather than connecting directly to “example.com” or assuming a
specific server hostname like “xmpp.example.com”, an XMPP client
would look up the “xmpp-client” SRV record for “example.com”, and
then connect to whatever host was pointed to by that record. 
  */
export declare class SrvTarget {
  /**
    * Creates a new Gio.SrvTarget with the given parameters.
    * @param hostname the host that the service is running on
    * @param port the port that the service is running on
    * @param priority the target’s priority
    * @param weight the target’s weight
    * @returns a new Gio.SrvTarget. 
    */
  static new(hostname: string, port: number, priority: number, weight: number): import('../Gio').SrvTarget;
  /**
    * Copies self
    * @returns a copy of self 
    */
  copy(): import('../Gio').SrvTarget;
  /**
    * Frees self 
    */
  free(): void;
  /**
    * Gets self’s hostname (in ASCII form; if you are going to present this to the user, you should use GLib.hostname_is_ascii_encoded() to check if it contains encoded Unicode segments, and use GLib.hostname_to_unicode() to convert it if it does.)
    * @returns self’s hostname 
    */
  getHostname(): string;
  /**
    * Gets self’s port
    * @returns self’s port 
    */
  getPort(): number;
  /**
    * Gets self’s priority. You should not need to look at this; Gio.Resolver already sorts the targets according to the algorithm in RFC 2782.
    * @returns self’s priority 
    */
  getPriority(): number;
  /**
    * Gets self’s weight. You should not need to look at this; Gio.Resolver already sorts the targets according to the algorithm in RFC 2782.
    * @returns self’s weight 
    */
  getWeight(): number;
}

