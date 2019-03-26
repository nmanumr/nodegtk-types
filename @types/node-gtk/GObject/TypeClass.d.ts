/**
  * An opaque structure used as the base of all classes. 
  */
export declare class TypeClass {
  static adjustPrivateOffset(gClass: Object | null, privateSizeOrOffset: number): void;
  /**
    * This function is essentially the same as GObject.TypeClass.ref(), except that the classes reference count isn’t incremented. As a consequence, this function may return None if the class of the type passed in does not currently exist (hasn’t been referenced before).
    * @param type type ID of a classed type
    * @returns the GObject.TypeClass structure for the given type ID or None if the class does not currently exist 
    */
  static peek(type: import('../GObject').GType): import('../GObject').TypeClass;
  /**
    * A more efficient version of GObject.TypeClass.peek() which works only for static types.
    * @param type type ID of a classed type
    * @returns the GObject.TypeClass structure for the given type ID or None if the class does not currently exist or is dynamically loaded 
    */
  static peekStatic(type: import('../GObject').GType): import('../GObject').TypeClass;
  /**
    * Increments the reference count of the class structure belonging to type. This function will demand-create the class if it doesn’t exist already.
    * @param type type ID of a classed type
    * @returns the GObject.TypeClass structure for the given type ID 
    */
  static ref(type: import('../GObject').GType): import('../GObject').TypeClass;
  /**
    * Registers a private structure for an instantiatable type.
    * @param privateSize size of private structure 
    */
  addPrivate(privateSize: number): void;
  getPrivate(privateType: import('../GObject').GType): Object | null;
  /**
    * This is a convenience function often needed in class initializers. It returns the class structure of the immediate parent type of the class passed in.  Since derived classes hold a reference count on their parent classes as long as they are instantiated, the returned class will always exist.
    * @returns the parent class of self 
    */
  peekParent(): import('../GObject').TypeClass;
  /**
    * Decrements the reference count of the class structure being passed in. Once the last reference count of a class has been released, classes may be finalized by the type system, so further dereferencing of a class pointer after GObject.TypeClass.unref() are invalid. 
    */
  unref(): void;
}

