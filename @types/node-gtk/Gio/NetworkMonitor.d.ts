import * as GObject from '../GObject';
export declare interface NetworkMonitor extends GObject.GInterface { }

/**
  * Gio.NetworkMonitor provides an easy-to-use cross-platform API
for monitoring network connectivity. On Linux, the available
implementations are based on the kernel’s netlink interface and
on NetworkManager. 
  */
export declare class NetworkMonitor {
  /**
    * Gets the default Gio.NetworkMonitor for the system.
    * @returns a Gio.NetworkMonitor 
    */
  static getDefault(): import('../Gio').NetworkMonitor;
  /**
    * Attempts to determine whether or not the host pointed to by connectable can be reached, without actually trying to connect to it.
    * @param connectable a Gio.SocketConnectable
    * @param cancellable a Gio.Cancellable, or None
    * @returns True if connectable is reachable, False if not. 
    */
  canReach(connectable: import('../Gio').SocketConnectable, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously attempts to determine whether or not the host pointed to by connectable can be reached, without actually trying to connect to it.
    * @param connectable a Gio.SocketConnectable
    * @param cancellable a Gio.Cancellable, or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  canReachAsync(connectable: import('../Gio').SocketConnectable, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async network connectivity test. See Gio.NetworkMonitor.can_reach_async().
    * @param result a Gio.AsyncResult
    * @returns True if network is reachable, False if not. 
    */
  canReachFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets a more detailed networking state than Gio.NetworkMonitor.get_network_available().
    * @returns the network connectivity state 
    */
  getConnectivity(): import('../Gio').NetworkConnectivity;
  /**
    * Checks if the network is available. “Available” here means that the system has a default route available for at least one of IPv4 or IPv6. It does not necessarily imply that the public Internet is reachable. See Gio.NetworkMonitor :network-available for more details.
    * @returns whether the network is available 
    */
  getNetworkAvailable(): boolean;
  /**
    * Checks if the network is metered. See Gio.NetworkMonitor :network-metered for more details.
    * @returns whether the connection is metered 
    */
  getNetworkMetered(): boolean;
  /**
    * Level of network connectivity 
    */
  readonly connectivity: import('../Gio').NetworkConnectivity;
  /**
    * Whether the network is available 
    */
  readonly networkAvailable: boolean;
  /**
    * Whether the network is metered 
    */
  readonly networkMetered: boolean;
}

