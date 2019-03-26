/**
  * Contains the public fields of a
Queue. 
  */
export declare class Queue {
  /**
    * Removes all the elements in self. If queue elements contain dynamically-allocated memory, they should be freed first. 
    */
  clear(): void;
  /**
    * Frees the memory allocated for the GLib.Queue. Only call this function if self was created with g_queue_new(). If queue elements contain dynamically-allocated memory, they should be freed first. 
    */
  free(): void;
  /**
    * Convenience method, which frees all the memory used by a GLib.Queue, and calls the specified destroy function on every element’s data.
    * @param freeFunc the function to be called to free each element’s data 
    */
  freeFull(freeFunc: import('../GLib').destroyNotify): void;
  /**
    * Returns the number of items in self.
    * @returns the number of items in self 
    */
  getLength(): number;
  /**
    * Returns the position of the first element in self which contains data.
    * @param data the data to find
    * @returns the position of the first element in self which contains data, or -1 if no element in self contains data 
    */
  index(data: Object | null): number;
  /**
    * A statically-allocated GLib.Queue must be initialized with this function before it can be used. Alternatively you can initialize it with #G_QUEUE_INIT. It is not necessary to initialize queues created with g_queue_new(). 
    */
  init(): void;
  /**
    * Returns True if the queue is empty.
    * @returns True if the queue is empty 
    */
  isEmpty(): boolean;
  /**
    * Returns the first element of the queue.
    * @returns the data of the first element in the queue, or None if the queue is empty 
    */
  peekHead(): Object | null;
  /**
    * Returns the n’th element of self.
    * @param n the position of the element
    * @returns the data for the n’th element of self, or None if n is off the end of self 
    */
  peekNth(n: number): Object | null;
  /**
    * Returns the last element of the queue.
    * @returns the data of the last element in the queue, or None if the queue is empty 
    */
  peekTail(): Object | null;
  /**
    * Removes the first element of the queue and returns its data.
    * @returns the data of the first element in the queue, or None if the queue is empty 
    */
  popHead(): Object | null;
  /**
    * Removes the n’th element of self and returns its data.
    * @param n the position of the element
    * @returns the element’s data, or None if n is off the end of self 
    */
  popNth(n: number): Object | null;
  /**
    * Removes the last element of the queue and returns its data.
    * @returns the data of the last element in the queue, or None if the queue is empty 
    */
  popTail(): Object | null;
  /**
    * Adds a new element at the head of the queue.
    * @param data the data for the new element. 
    */
  pushHead(data: Object | null): void;
  /**
    * Inserts a new element into self at the given position.
    * @param data the data for the new element
    * @param n the position to insert the new element. If n is negative or larger than the number of elements in the self, the element is added to the end of the queue. 
    */
  pushNth(data: Object | null, n: number): void;
  /**
    * Adds a new element at the tail of the queue.
    * @param data the data for the new element 
    */
  pushTail(data: Object | null): void;
  /**
    * Removes the first element in self that contains data.
    * @param data the data to remove
    * @returns True if data was found and removed from self 
    */
  remove(data: Object | null): boolean;
  /**
    * Remove all elements whose data equals data from self.
    * @param data the data to remove
    * @returns the number of elements removed from self 
    */
  removeAll(data: Object | null): number;
  /**
    * Reverses the order of the items in self. 
    */
  reverse(): void;
}

