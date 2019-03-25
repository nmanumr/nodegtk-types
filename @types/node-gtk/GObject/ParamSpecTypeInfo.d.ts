/**
  * This structure is used to provide the type system with the information
required to initialize and destruct (finalize) a parameter’s class and
instances thereof.
The initialized structure is passed to the GObject.param_type_register_static()
The type system will perform a deep copy of this structure, so its memory
does not need to be persistent across invocation of
GObject.param_type_register_static(). 
  */
export declare class ParamSpecTypeInfo {
/**
  *   
  */
finalize: Object;
/**
  *   
  */
instanceInit: Object;
/**
  * Size of the instance (object) structure. 
  */
instanceSize: number;
/**
  * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the slice allocator now. 
  */
nPreallocs: number;
/**
  *   
  */
valueSetDefault: Object;
/**
  * The GObject.GType of values conforming to this GObject.ParamSpec 
  */
valueType: import('../GObject').GType;
/**
  *   
  */
valueValidate: Object;
/**
  *   
  */
valuesCmp: Object;
}

