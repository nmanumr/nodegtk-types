import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface SocketAddress extends GObject.Object, Gio.SocketConnectable { }

/**
  * Gio.SocketAddress is the equivalent of struct sockaddr in the BSD
sockets API. This is an abstract class; use Gio.InetSocketAddress
for internet sockets, or Gio.UnixSocketAddress for UNIX domain sockets. 
  */
export declare abstract class SocketAddress {
  /**
    * Creates a Gio.SocketAddress subclass corresponding to the native struct sockaddr native.
    * @param native a pointer to a struct sockaddr
    * @param len the size of the memory location pointed to by native
    * @returns a new Gio.SocketAddress if native could successfully be converted, otherwise None 
    */
  static newFromNative(native: Object, len: number): import('../Gio').SocketAddress;
  /**
    * Gets the socket family type of self.
    * @returns the socket family type of self 
    */
  getFamily(): import('../Gio').SocketFamily;
  /**
    * Gets the size of self’s native struct sockaddr. You can use this to allocate memory to pass to Gio.SocketAddress.to_native().
    * @returns the size of the native struct sockaddr that self represents 
    */
  getNativeSize(): number;
  /**
    * Converts a Gio.SocketAddress to a native struct sockaddr, which can be passed to low-level functions like connect() or bind().
    * @param dest a pointer to a memory location that will contain the native struct sockaddr
    * @param destlen the size of dest. Must be at least as large as Gio.SocketAddress.get_native_size()
    * @returns True if dest was filled in, False on error 
    */
  toNative(dest: Object | null, destlen: number): boolean;
  /**
    * The family of the socket address 
    */
  readonly family: import('../Gio').SocketFamily;
}

