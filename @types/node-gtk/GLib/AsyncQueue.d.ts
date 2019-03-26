/**
  * The GLib.AsyncQueue struct is an opaque data structure which represents
an asynchronous queue. It should only be accessed through the
g_async_queue_* functions. 
  */
export declare class AsyncQueue {
  /**
    * Returns the length of the queue.
    * @returns the length of the self 
    */
  length(): number;
  /**
    * Returns the length of the queue.
    * @returns the length of the self. 
    */
  lengthUnlocked(): number;
  /**
    * Acquires the self’s lock. If another thread is already holding the lock, this call will block until the lock becomes available. 
    */
  lock(): void;
  /**
    * Pops data from the self. If self is empty, this function blocks until data becomes available.
    * @returns data from the queue 
    */
  pop(): Object | null;
  /**
    * Pops data from the self. If self is empty, this function blocks until data becomes available.
    * @returns data from the queue. 
    */
  popUnlocked(): Object | null;
  /**
    * Pushes the data into the self. data must not be None.
    * @param data data to push into the self 
    */
  push(data: Object | null): void;
  /**
    * Pushes the item into the self. item must not be None. In contrast to GLib.AsyncQueue.push(), this function pushes the new item ahead of the items already in the queue, so that it will be the next one to be popped off the queue.
    * @param item data to push into the self 
    */
  pushFront(item: Object | null): void;
  /**
    * Pushes the item into the self. item must not be None. In contrast to GLib.AsyncQueue.push_unlocked(), this function pushes the new item ahead of the items already in the queue, so that it will be the next one to be popped off the queue.
    * @param item data to push into the self 
    */
  pushFrontUnlocked(item: Object | null): void;
  /**
    * Pushes the data into the self. data must not be None.
    * @param data data to push into the self 
    */
  pushUnlocked(data: Object | null): void;
  /**
    * Increases the reference count of the asynchronous self by 1. 
    */
  refUnlocked(): void;
  /**
    * Remove an item from the queue.
    * @param item the data to remove from the self
    * @returns True if the item was removed 
    */
  remove(item: Object | null): boolean;
  /**
    * Remove an item from the queue.
    * @param item the data to remove from the self
    * @returns True if the item was removed 
    */
  removeUnlocked(item: Object | null): boolean;
  /**
    * Pops data from the self. If the queue is empty, blocks until end_time or until data becomes available.
    * @param endTime a GLib.TimeVal, determining the final time
    * @returns data from the queue or None, when no data is received before end_time. 
    */
  timedPop(endTime: import('../GLib').TimeVal): Object | null;
  /**
    * Pops data from the self. If the queue is empty, blocks until end_time or until data becomes available.
    * @param endTime a GLib.TimeVal, determining the final time
    * @returns data from the queue or None, when no data is received before end_time. 
    */
  timedPopUnlocked(endTime: import('../GLib').TimeVal): Object | null;
  /**
    * Pops data from the self. If the queue is empty, blocks for timeout microseconds, or until data becomes available.
    * @param timeout the number of microseconds to wait
    * @returns data from the queue or None, when no data is received before the timeout. 
    */
  timeoutPop(timeout: number): Object | null;
  /**
    * Pops data from the self. If the queue is empty, blocks for timeout microseconds, or until data becomes available.
    * @param timeout the number of microseconds to wait
    * @returns data from the queue or None, when no data is received before the timeout. 
    */
  timeoutPopUnlocked(timeout: number): Object | null;
  /**
    * Tries to pop data from the self. If no data is available, None is returned.
    * @returns data from the queue or None, when no data is available immediately. 
    */
  tryPop(): Object | null;
  /**
    * Tries to pop data from the self. If no data is available, None is returned.
    * @returns data from the queue or None, when no data is available immediately. 
    */
  tryPopUnlocked(): Object | null;
  /**
    * Releases the queue’s lock. 
    */
  unlock(): void;
  /**
    * Decreases the reference count of the asynchronous self by 1. 
    */
  unref(): void;
  /**
    * Decreases the reference count of the asynchronous self by 1 and releases the lock. This function must be called while holding the self’s lock. If the reference count went to 0, the self will be destroyed and the memory allocated will be freed. 
    */
  unrefAndUnlock(): void;
}

