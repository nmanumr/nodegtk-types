/**
  * The GLib.Private struct is an opaque data structure to represent a
thread-local data key. It is approximately equivalent to the
pthread_setspecific()/pthread_getspecific() APIs on POSIX and to
TlsSetValue()/TlsGetValue() on Windows. 
  */
export declare class Private {
  /**
    * Returns the current value of the thread local variable self.
    * @returns the thread-local value 
    */
  get(): Object | null;
  /**
    * Sets the thread local variable self to have the value value in the current thread.
    * @param value the new value 
    */
  replace(value: Object | null): void;
  /**
    * Sets the thread local variable self to have the value value in the current thread.
    * @param value the new value 
    */
  set(value: Object | null): void;
}

