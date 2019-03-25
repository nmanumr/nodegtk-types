/**
  * This structure is used to provide the type system with the information
required to initialize and destruct (finalize) a type’s class and
its instances. 
  */
export declare class TypeInfo {
/**
  * Location of the base finalization function (optional) 
  */
baseFinalize: import('../GObject').BaseFinalizeFunc;
/**
  * Location of the base initialization function (optional) 
  */
baseInit: import('../GObject').BaseInitFunc;
/**
  * User-supplied data passed to the class init/finalize functions 
  */
classData: Object;
/**
  * Location of the class finalization function for classed and instantiatable types. Location of the default vtable finalization function for interface types. (optional) 
  */
classFinalize: import('../GObject').ClassFinalizeFunc;
/**
  * Location of the class initialization function for classed and instantiatable types. Location of the default vtable inititalization function for interface types. (optional) This function is used both to fill in virtual functions in the class or default vtable, and to do type-specific setup such as registering signals and object properties. 
  */
classInit: import('../GObject').ClassInitFunc;
/**
  * Size of the class structure (required for interface, classed and instantiatable types) 
  */
classSize: number;
/**
  * Location of the instance initialization function (optional, for instantiatable types only) 
  */
instanceInit: import('../GObject').InstanceInitFunc;
/**
  * Size of the instance (object) structure (required for instantiatable types only) 
  */
instanceSize: number;
/**
  * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the slice allocator now. 
  */
nPreallocs: number;
/**
  * A GObject.TypeValueTable function table for generic handling of GValues of this type (usually only useful for fundamental types) 
  */
valueTable: import('../GObject').TypeValueTable;
}

