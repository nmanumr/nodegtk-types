/**
  * Information about a signal on a D-Bus interface. 
  */
export declare class DBusSignalInfo {
  /**
    * If self is statically allocated does nothing. Otherwise increases the reference count.
    * @returns The same self. 
    */
  ref(): import('../Gio').DBusSignalInfo;
  /**
    * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
    */
  unref(): void;
}

