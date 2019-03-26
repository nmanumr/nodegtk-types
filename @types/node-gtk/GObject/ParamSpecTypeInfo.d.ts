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
}

