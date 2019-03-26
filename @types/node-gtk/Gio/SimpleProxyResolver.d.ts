import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface SimpleProxyResolver extends GObject.Object, Gio.ProxyResolver { }

/**
  * Gio.SimpleProxyResolver is a simple Gio.ProxyResolver implementation
that handles a single default proxy, multiple URI-scheme-specific
proxies, and a list of hosts that proxies should not be used for. 
  */
export declare class SimpleProxyResolver {
  /**
    * Creates a new Gio.SimpleProxyResolver. See Gio.SimpleProxyResolver :default-proxy and Gio.SimpleProxyResolver :ignore-hosts for more details on how the arguments are interpreted.
    * @param defaultProxy the default proxy to use, eg “socks://192.168.1.1”
    * @param ignoreHosts an optional list of hosts/IP addresses to not use a proxy for.
    * @returns a new Gio.SimpleProxyResolver 
    */
  static new(defaultProxy: string | null, ignoreHosts: string | null): import('../Gio').ProxyResolver;
  /**
    * Sets the default proxy on self, to be used for any URIs that don’t match Gio.SimpleProxyResolver :ignore-hosts or a proxy set via Gio.SimpleProxyResolver.set_uri_proxy().
    * @param defaultProxy the default proxy to use 
    */
  setDefaultProxy(defaultProxy: string): void;
  /**
    * Sets the list of ignored hosts.
    * @param ignoreHosts None-terminated list of hosts/IP addresses to not use a proxy for 
    */
  setIgnoreHosts(ignoreHosts: string): void;
  /**
    * Adds a URI-scheme-specific proxy to self; URIs whose scheme matches uri_scheme (and which don’t match Gio.SimpleProxyResolver :ignore-hosts) will be proxied via proxy.
    * @param uriScheme the URI scheme to add a proxy for
    * @param proxy the proxy to use for uri_scheme 
    */
  setUriProxy(uriScheme: string, proxy: string): void;
  /**
    * The default proxy URI 
    */
  defaultProxy: string;
  /**
    * Hosts that will not use the proxy 
    */
  ignoreHosts: string;
}

