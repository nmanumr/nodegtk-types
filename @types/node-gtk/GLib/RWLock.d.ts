/**
  * The GLib.RWLock struct is an opaque data structure to represent a
reader-writer lock. It is similar to a GLib.Mutex in that it allows
multiple threads to coordinate access to a shared resource. 
  */
export declare class RWLock {
  /**
    * Frees the resources allocated to a lock with GLib.RWLock.init(). 
    */
  clear(): void;
  /**
    * Initializes a GLib.RWLock so that it can be used. 
    */
  init(): void;
  /**
    * Obtain a read lock on self. If another thread currently holds the write lock on self or blocks waiting for it, the current thread will block. Read locks can be taken recursively. 
    */
  readerLock(): void;
  /**
    * Tries to obtain a read lock on self and returns True if the read lock was successfully obtained. Otherwise it returns False.
    * @returns True if self could be locked 
    */
  readerTrylock(): boolean;
  /**
    * Release a read lock on self. 
    */
  readerUnlock(): void;
  /**
    * Obtain a write lock on self. If any thread already holds a read or write lock on self, the current thread will block until all other threads have dropped their locks on self. 
    */
  writerLock(): void;
  /**
    * Tries to obtain a write lock on self. If any other thread holds a read or write lock on self, it immediately returns False. Otherwise it locks self and returns True.
    * @returns True if self could be locked 
    */
  writerTrylock(): boolean;
  /**
    * Release a write lock on self. 
    */
  writerUnlock(): void;
}

