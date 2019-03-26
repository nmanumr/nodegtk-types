import * as Gio from '../Gio';
export declare interface ProxyAddressEnumerator extends Gio.SocketAddressEnumerator { }

/**
  * A subclass of Gio.SocketAddressEnumerator that takes another address
enumerator and wraps its results in #GProxyAddresses as
directed by the default Gio.ProxyResolver. 
  */
export declare class ProxyAddressEnumerator {
  /**
    * The connectable being enumerated. 
    */
  connectable: import('../Gio').SocketConnectable;
  /**
    * The default port to use if uri does not specify one 
    */
  defaultPort: number;
  /**
    * The proxy resolver to use. 
    */
  proxyResolver: import('../Gio').ProxyResolver;
  /**
    * The destination URI, use none:// for generic socket 
    */
  uri: string;
}

