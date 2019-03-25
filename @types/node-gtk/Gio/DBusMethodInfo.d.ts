/**
  * Information about a method on an D-Bus interface. 
  */
export declare class DBusMethodInfo {
/**
  * If self is statically allocated does nothing. Otherwise increases the reference count.
  * @returns The same self. 
  */
ref(): import('../Gio').DBusMethodInfo;
/**
  * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
  */
unref(): void;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusAnnotationInfo structures or None if there are no annotations. 
  */
annotations: import('../Gio').DBusAnnotationInfo;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusArgInfo structures or None if there are no in arguments. 
  */
inArgs: import('../Gio').DBusArgInfo;
/**
  * The name of the D-Bus method, e.g. RequestName. 
  */
name: string;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusArgInfo structures or None if there are no out arguments. 
  */
outArgs: import('../Gio').DBusArgInfo;
/**
  * The reference count or -1 if statically allocated. 
  */
refCount: number;
}

