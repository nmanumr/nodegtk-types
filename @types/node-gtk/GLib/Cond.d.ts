/**
  * The GLib.Cond struct is an opaque data structure that represents a
condition. Threads can block on a GLib.Cond if they find a certain
condition to be false. If other threads change the state of this
condition they signal the GLib.Cond, and that causes the waiting
threads to be woken up. 
  */
export declare class Cond {
  /**
    * If threads are waiting for self, all of them are unblocked. If no threads are waiting for self, this function has no effect. It is good practice to lock the same mutex as the waiting threads while calling this function, though not required. 
    */
  broadcast(): void;
  /**
    * Frees the resources allocated to a GLib.Cond with GLib.Cond.init(). 
    */
  clear(): void;
  /**
    * Initialises a GLib.Cond so that it can be used. 
    */
  init(): void;
  /**
    * If threads are waiting for self, at least one of them is unblocked. If no threads are waiting for self, this function has no effect. It is good practice to hold the same lock as the waiting thread while calling this function, though not required. 
    */
  signal(): void;
  /**
    * Atomically releases mutex and waits until self is signalled. When this function returns, mutex is locked again and owned by the calling thread.
    * @param mutex a GLib.Mutex that is currently locked 
    */
  wait(mutex: import('../GLib').Mutex): void;
  /**
    * Waits until either self is signalled or end_time has passed.
    * @param mutex a GLib.Mutex that is currently locked
    * @param endTime the monotonic time to wait until
    * @returns True on a signal, False on a timeout 
    */
  waitUntil(mutex: import('../GLib').Mutex, endTime: number): boolean;
}

