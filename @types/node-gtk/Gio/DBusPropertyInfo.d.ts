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
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusAnnotationInfo structures or None if there are no annotations. 
  */
annotations: import('../Gio').DBusAnnotationInfo;
/**
  * Access control flags for the property. 
  */
flags: import('../Gio').DBusPropertyInfoFlags;
/**
  * The name of the D-Bus property, e.g. “SupportedFilesystems”. 
  */
name: string;
/**
  * The reference count or -1 if statically allocated. 
  */
refCount: number;
/**
  * The D-Bus signature of the property (a single complete type). 
  */
signature: string;
}

