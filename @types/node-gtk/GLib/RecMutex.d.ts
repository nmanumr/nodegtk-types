/**
  * The GLib.RecMutex struct is an opaque data structure to represent a
recursive mutex. It is similar to a GLib.Mutex with the difference
that it is possible to lock a GLib.RecMutex multiple times in the same
thread without deadlock. When doing so, care has to be taken to
unlock the recursive mutex as often as it has been locked. 
  */
export declare class RecMutex {
  /**
    * Frees the resources allocated to a recursive mutex with GLib.RecMutex.init(). 
    */
  clear(): void;
  /**
    * Initializes a GLib.RecMutex so that it can be used. 
    */
  init(): void;
  /**
    * Locks self. If self is already locked by another thread, the current thread will block until self is unlocked by the other thread. If self is already locked by the current thread, the ‘lock count’ of self is increased. The mutex will only become available again when it is unlocked as many times as it has been locked. 
    */
  lock(): void;
  /**
    * Tries to lock self. If self is already locked by another thread, it immediately returns False. Otherwise it locks self and returns True.
    * @returns True if self could be locked 
    */
  trylock(): boolean;
  /**
    * Unlocks self. If another thread is blocked in a GLib.RecMutex.lock() call for self, it will become unblocked and can lock self itself. 
    */
  unlock(): void;
}

