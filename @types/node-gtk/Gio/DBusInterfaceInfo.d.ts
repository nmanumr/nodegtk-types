/**
  * Information about a D-Bus interface. 
  */
export declare class DBusInterfaceInfo {
  /**
    * Builds a lookup-cache to speed up Gio.DBusInterfaceInfo.lookup_method(), Gio.DBusInterfaceInfo.lookup_signal() and Gio.DBusInterfaceInfo.lookup_property(). 
    */
  cacheBuild(): void;
  /**
    * Decrements the usage count for the cache for self built by Gio.DBusInterfaceInfo.cache_build() (if any) and frees the resources used by the cache if the usage count drops to zero. 
    */
  cacheRelease(): void;
  /**
    * Appends an XML representation of self (and its children) to string_builder.
    * @param indent Indentation level.
    * @param stringBuilder A GLib.String to to append XML data to. 
    */
  generateXml(indent: number, stringBuilder: import('../GLib').String): void;
  /**
    * Looks up information about a method.
    * @param name A D-Bus method name (typically in CamelCase)
    * @returns A Gio.DBusMethodInfo or None if not found. Do not free, it is owned by self. 
    */
  lookupMethod(name: string): import('../Gio').DBusMethodInfo;
  /**
    * Looks up information about a property.
    * @param name A D-Bus property name (typically in CamelCase).
    * @returns A Gio.DBusPropertyInfo or None if not found. Do not free, it is owned by self. 
    */
  lookupProperty(name: string): import('../Gio').DBusPropertyInfo;
  /**
    * Looks up information about a signal.
    * @param name A D-Bus signal name (typically in CamelCase)
    * @returns A Gio.DBusSignalInfo or None if not found. Do not free, it is owned by self. 
    */
  lookupSignal(name: string): import('../Gio').DBusSignalInfo;
  /**
    * If self is statically allocated does nothing. Otherwise increases the reference count.
    * @returns The same self. 
    */
  ref(): import('../Gio').DBusInterfaceInfo;
  /**
    * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
    */
  unref(): void;
}

