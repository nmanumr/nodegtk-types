/**
  * The GLib.Thread struct represents a running thread. This struct
is returned by g_thread_new() or g_thread_try_new(). You can
obtain the GLib.Thread struct representing the current thread by
calling GLib.Thread.self(). 
  */
export declare class Thread {
  static errorQuark(): number;
  /**
    * Terminates the current thread.
    * @param retval the return value of this thread 
    */
  static exit(retval: Object | null): void;
  /**
    * This function returns the GLib.Thread corresponding to the current thread. Note that this function does not increase the reference count of the returned struct.
    * @returns the GLib.Thread representing the current thread 
    */
  static self(): import('../GLib').Thread;
  /**
    * Causes the calling thread to voluntarily relinquish the CPU, so that other threads can run. 
    */
  static yield(): void;
  /**
    * Waits until self finishes, i.e. the function func, as given to g_thread_new(), returns or GLib.Thread.exit() is called. If self has already terminated, then GLib.Thread.join() returns immediately.
    * @returns the return value of the thread 
    */
  join(): Object | null;
  /**
    * Increase the reference count on self.
    * @returns a new reference to self 
    */
  ref(): import('../GLib').Thread;
  /**
    * Decrease the reference count on self, possibly freeing all resources associated with it. 
    */
  unref(): void;
}

