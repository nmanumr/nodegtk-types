/**
  * Information about an argument for a method or a signal. 
  */
export declare class DBusArgInfo {
  /**
    * If self is statically allocated does nothing. Otherwise increases the reference count.
    * @returns The same self. 
    */
  ref(): import('../Gio').DBusArgInfo;
  /**
    * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
    */
  unref(): void;
}

