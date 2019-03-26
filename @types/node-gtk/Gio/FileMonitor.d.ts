import * as GObject from '../GObject';
export declare interface FileMonitor extends GObject.Object { }

/**
  * Monitors a file or directory for changes. 
  */
export declare abstract class FileMonitor {
  /**
    * Cancels a file monitor.
    * @returns always True 
    */
  cancel(): boolean;
  /**
    * Emits the Gio.FileMonitor ::changed signal if a change has taken place. Should be called from file monitor implementations only.
    * @param child a Gio.File.
    * @param otherFile a Gio.File.
    * @param eventType a set of Gio.FileMonitorEvent flags. 
    */
  emitEvent(child: import('../Gio').File, otherFile: import('../Gio').File, eventType: import('../Gio').FileMonitorEvent): void;
  /**
    * Returns whether the monitor is canceled.
    * @returns True if monitor is canceled. False otherwise. 
    */
  isCancelled(): boolean;
  /**
    * Sets the rate limit to which the self will report consecutive change events to the same file.
    * @param limitMsecs a non-negative integer with the limit in milliseconds to poll for changes 
    */
  setRateLimit(limitMsecs: number): void;
  /**
    * Whether the monitor has been cancelled 
    */
  readonly cancelled: boolean;
  /**
    * The limit of the monitor to watch for changes, in milliseconds 
    */
  rateLimit: number;
}

