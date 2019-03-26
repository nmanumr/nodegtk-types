/**
  * Information about a D-Bus property on a D-Bus interface. 
  */
export declare class DBusPropertyInfo {
  /**
    * If self is statically allocated does nothing. Otherwise increases the reference count.
    * @returns The same self. 
    */
  ref(): import('../Gio').DBusPropertyInfo;
  /**
    * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
    */
  unref(): void;
}

