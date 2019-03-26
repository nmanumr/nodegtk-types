/**
  * The GLib.ThreadPool struct represents a thread pool. It has three
public read-only members, but the underlying struct is bigger,
so you must not copy this struct. 
  */
export declare class ThreadPool {
  /**
    * This function will return the maximum interval that a thread will wait in the thread pool for new tasks before being stopped.
    * @returns the maximum interval (milliseconds) to wait for new tasks in the thread pool before stopping the thread 
    */
  static getMaxIdleTime(): number;
  /**
    * Returns the maximal allowed number of unused threads.
    * @returns the maximal number of unused threads 
    */
  static getMaxUnusedThreads(): number;
  /**
    * Returns the number of currently unused threads.
    * @returns the number of currently unused threads 
    */
  static getNumUnusedThreads(): number;
  /**
    * This function will set the maximum interval that a thread waiting in the pool for new tasks can be idle for before being stopped. This function is similar to calling GLib.ThreadPool.stop_unused_threads() on a regular timeout, except this is done on a per thread basis.
    * @param interval the maximum interval (in milliseconds) a thread can be idle 
    */
  static setMaxIdleTime(interval: number): void;
  /**
    * Sets the maximal number of unused threads to max_threads. If max_threads is -1, no limit is imposed on the number of unused threads.
    * @param maxThreads maximal number of unused threads 
    */
  static setMaxUnusedThreads(maxThreads: number): void;
  /**
    * Stops all currently unused threads. This does not change the maximal number of unused threads. This function can be used to regularly stop all unused threads e.g. from GLib.timeout_add(). 
    */
  static stopUnusedThreads(): void;
  /**
    * Frees all resources allocated for self.
    * @param immediate should self shut down immediately?
    * @param wait should the function wait for all tasks to be finished? 
    */
  free(immediate: boolean, wait: boolean): void;
  /**
    * Returns the maximal number of threads for self.
    * @returns the maximal number of threads 
    */
  getMaxThreads(): number;
  /**
    * Returns the number of threads currently running in self.
    * @returns the number of threads currently running 
    */
  getNumThreads(): number;
  /**
    * Moves the item to the front of the queue of unprocessed items, so that it will be processed next.
    * @param data an unprocessed item in the pool
    * @returns True if the item was found and moved 
    */
  moveToFront(data: Object | null): boolean;
  /**
    * Inserts data into the list of tasks to be executed by self.
    * @param data a new task for self
    * @returns True on success, False if an error occurred 
    */
  push(data: Object | null): boolean;
  /**
    * Sets the maximal allowed number of threads for self. A value of -1 means that the maximal number of threads is unlimited. If self is an exclusive thread pool, setting the maximal number of threads to -1 is not allowed.
    * @param maxThreads a new maximal number of threads for self, or -1 for unlimited
    * @returns True on success, False if an error occurred 
    */
  setMaxThreads(maxThreads: number): boolean;
  /**
    * Returns the number of tasks still unprocessed in self.
    * @returns the number of unprocessed tasks 
    */
  unprocessed(): number;
}

