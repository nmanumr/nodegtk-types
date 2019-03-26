/**
  * Opaque class for defining and scheduling IO jobs. 
  */
export declare class IOSchedulerJob {
  /**
    * Used from an I/O job to send a callback to be run in the thread that the job was started from, waiting for the result (and thus blocking the I/O job).
    * @param func a GLib.SourceFunc callback that will be called in the original thread
    * @param userData data to pass to func
    * @returns The return value of func 
    */
  sendToMainloop(func: import('../GLib').sourceFunc, userData: Object | null): boolean;
  /**
    * Used from an I/O job to send a callback to be run asynchronously in the thread that the job was started from. The callback will be run when the main loop is available, but at that time the I/O job might have finished. The return value from the callback is ignored.
    * @param func a GLib.SourceFunc callback that will be called in the original thread
    * @param userData data to pass to func 
    */
  sendToMainloopAsync(func: import('../GLib').sourceFunc, userData: Object | null): void;
}

