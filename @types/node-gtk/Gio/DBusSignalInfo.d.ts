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
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusAnnotationInfo structures or None if there are no annotations. 
  */
annotations: import('../Gio').DBusAnnotationInfo;
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusArgInfo structures or None if there are no arguments. 
  */
args: import('../Gio').DBusArgInfo;
/**
  * The name of the D-Bus signal, e.g. “NameOwnerChanged”. 
  */
name: string;
/**
  * The reference count or -1 if statically allocated. 
  */
refCount: number;
}

