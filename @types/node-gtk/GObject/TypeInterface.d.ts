/**
  * An opaque structure used as the base of all interface types. 
  */
export declare class TypeInterface {
  /**
    * Adds prerequisite_type to the list of prerequisites of interface_type. This means that any type implementing interface_type must also implement prerequisite_type. Prerequisites can be thought of as an alternative to interface derivation (which GObject.GType doesn’t support). An interface can have at most one instantiatable prerequisite type.
    * @param interfaceType GObject.GType value of an interface type
    * @param prerequisiteType GObject.GType value of an interface or instantiatable type 
    */
  static addPrerequisite(interfaceType: import('../GObject').GType, prerequisiteType: import('../GObject').GType): void;
  /**
    * Returns the GObject.TypePlugin structure for the dynamic interface interface_type which has been added to instance_type, or None if interface_type has not been added to instance_type or does not have a GObject.TypePlugin structure. See GObject.type_add_interface_dynamic().
    * @param instanceType GObject.GType of an instantiatable type
    * @param interfaceType GObject.GType of an interface type
    * @returns the GObject.TypePlugin for the dynamic interface interface_type of instance_type 
    */
  static getPlugin(instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType): import('../GObject').TypePlugin;
  /**
    * Returns the GObject.TypeInterface structure of an interface to which the passed in class conforms.
    * @param instanceClass a GObject.TypeClass structure
    * @param ifaceType an interface ID which this class conforms to
    * @returns the GObject.TypeInterface structure of iface_type if implemented by instance_class, None otherwise 
    */
  static peek(instanceClass: import('../GObject').TypeClass, ifaceType: import('../GObject').GType): import('../GObject').TypeInterface;
  /**
    * Returns the prerequisites of an interfaces type.
    * @param interfaceType an interface type
    * @returns a newly-allocated zero-terminated array of GObject.GType containing the prerequisites of interface_type 
    */
  static prerequisites(interfaceType: import('../GObject').GType): import('../GObject').GType[];
  /**
    * Returns the corresponding GObject.TypeInterface structure of the parent type of the instance type to which self belongs. This is useful when deriving the implementation of an interface from the parent type and then possibly overriding some methods.
    * @returns the corresponding GObject.TypeInterface structure of the parent type of the instance type to which self belongs, or None if the parent type doesn’t conform to the interface 
    */
  peekParent(): import('../GObject').TypeInterface;
}

