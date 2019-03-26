export declare class Mutex {
  /**
    * Frees the resources allocated to a mutex with GLib.Mutex.init(). 
    */
  clear(): void;
  /**
    * Initializes a GLib.Mutex so that it can be used. 
    */
  init(): void;
  /**
    * Locks self. If self is already locked by another thread, the current thread will block until self is unlocked by the other thread. 
    */
  lock(): void;
  /**
    * Tries to lock self. If self is already locked by another thread, it immediately returns False. Otherwise it locks self and returns True.
    * @returns True if self could be locked 
    */
  trylock(): boolean;
  /**
    * Unlocks self. If another thread is blocked in a GLib.Mutex.lock() call for self, it will become unblocked and can lock self itself. 
    */
  unlock(): void;
}

