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
/**
  * A pointer to a None-terminated array of pointers to Gio.DBusAnnotationInfo structures or None if there are no annotations. 
  */
annotations: import('../Gio').DBusAnnotationInfo;
/**
  * Name of the argument, e.g. unix_user_id. 
  */
name: string;
/**
  * The reference count or -1 if statically allocated. 
  */
refCount: number;
/**
  * D-Bus signature of the argument (a single complete type). 
  */
signature: string;
}

