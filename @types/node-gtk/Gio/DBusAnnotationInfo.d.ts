/**
  * Information about an annotation. 
  */
export declare class DBusAnnotationInfo {
  /**
    * Looks up the value of an annotation.
    * @param annotations A None-terminated array of annotations or None.
    * @param name The name of the annotation to look up.
    * @returns The value or None if not found. Do not free, it is owned by annotations. 
    */
  static lookup(annotations: import('../Gio').DBusAnnotationInfo | null, name: string): string;
  /**
    * If self is statically allocated does nothing. Otherwise increases the reference count.
    * @returns The same self. 
    */
  ref(): import('../Gio').DBusAnnotationInfo;
  /**
    * If self is statically allocated, does nothing. Otherwise decreases the reference count of self. When its reference count drops to 0, the memory used is freed. 
    */
  unref(): void;
}

