import * as GObject from '../GObject';
export declare interface UnixMountMonitor extends GObject.Object { }

/**
  * Watches #GUnixMounts for changes. 
  */
export declare class UnixMountMonitor {
  /**
    * Gets the Gio.UnixMountMonitor for the current thread-default main context.
    * @returns the Gio.UnixMountMonitor. 
    */
  static get(): import('../Gio').UnixMountMonitor;
  /**
    * Deprecated alias for Gio.UnixMountMonitor.get().
    * @returns a Gio.UnixMountMonitor. 
    */
  static new(): import('../Gio').UnixMountMonitor;
  /**
    * This function does nothing.
    * @param limitMsec a integer with the limit in milliseconds to poll for changes. 
    */
  setRateLimit(limitMsec: number): void;
}

