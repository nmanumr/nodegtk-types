/**
  * Flags for a #GIFieldInfo. 
  */
export declare enum FieldInfoFlags {
  /** field is readable. */
  READABLE = 1,
  /** field is writable. */
  WRITABLE = 2,
}
/**
  * Flags for a #GIFunctionInfo struct. 
  */
export declare enum FunctionInfoFlags {
  /** is a method. */
  IS_METHOD = 1,
  /** represents a virtual function. */
  WRAPS_VFUNC = 16,
  /** is a constructor. */
  IS_CONSTRUCTOR = 2,
  /** the function may throw an error. */
  THROWS = 32,
  /** is a getter of a #GIPropertyInfo. */
  IS_GETTER = 4,
  /** is a setter of a #GIPropertyInfo. */
  IS_SETTER = 8,
}
/**
  * Flags that control how a typelib is loaded. 
  */
export declare enum RepositoryLoadFlags {
  /** Lazily load the typelib. */
  IREPOSITORY_LOAD_FLAG_LAZY = 1,
}
/**
  * Flags of a #GIVFuncInfo struct. 
  */
export declare enum VFuncInfoFlags {
  /** chains up to the parent type */
  MUST_CHAIN_UP = 1,
  /** overrides */
  MUST_OVERRIDE = 2,
  /** does not override */
  MUST_NOT_OVERRIDE = 4,
  /** Includes a GLib.Error */
  THROWS = 8,
}
/**
  * The type of array in a #GITypeInfo. 
  */
export declare enum ArrayType {
  /** a C array, str[] for instance */
  C = 0,
  /** a GArray array */
  ARRAY = 1,
  /** a GLib.PtrArray array */
  PTR_ARRAY = 2,
  /** a GLib.ByteArray array */
  BYTE_ARRAY = 3,
}
/**
  * The direction of a #GIArgInfo. 
  */
export declare enum Direction {
  /** in argument. */
  IN = 0,
  /** out argument. */
  OUT = 1,
  /** in and out argument. */
  INOUT = 2,
}
/**
  * The type of a GIRepository.BaseInfo struct. 
  */
export declare enum InfoType {
  /** invalid type */
  INVALID = 0,
  /** function, see #GIFunctionInfo */
  FUNCTION = 1,
  /** deleted, used to be GI_INFO_TYPE_ERROR_DOMAIN. */
  INVALID_0 = 10,
  /** union, see #GIUnionInfo */
  UNION = 11,
  /** enum value, see #GIValueInfo */
  VALUE = 12,
  /** signal, see #GISignalInfo */
  SIGNAL = 13,
  /** virtual function, see #GIVFuncInfo */
  VFUNC = 14,
  /** GObject.Object property, see #GIPropertyInfo */
  PROPERTY = 15,
  /** struct or union field, see #GIFieldInfo */
  FIELD = 16,
  /** argument of a function or callback, see #GIArgInfo */
  ARG = 17,
  /** type information, see #GITypeInfo */
  TYPE = 18,
  /** unresolved type, a type which is not present in the typelib, or any of its dependencies. */
  UNRESOLVED = 19,
  /** callback, see #GIFunctionInfo */
  CALLBACK = 2,
  /** struct, see #GIStructInfo */
  STRUCT = 3,
  /** boxed, see #GIStructInfo or #GIUnionInfo */
  BOXED = 4,
  /** enum, see #GIEnumInfo */
  ENUM = 5,
  /** flags, see #GIEnumInfo */
  FLAGS = 6,
  /** object, see #GIObjectInfo */
  OBJECT = 7,
  /** interface, see #GIInterfaceInfo */
  INTERFACE = 8,
  /** contant, see #GIConstantInfo */
  CONSTANT = 9,
}
/**
  * An error code used with #G_IREPOSITORY_ERROR in a GLib.Error returned from a GIRepository.Repository routine. 
  */
export declare enum RepositoryError {
  /** the typelib could not be found. */
  TYPELIB_NOT_FOUND = 0,
  /** the namespace does not match the requested namespace. */
  NAMESPACE_MISMATCH = 1,
  /** the version of the typelib does not match the requested version. */
  NAMESPACE_VERSION_CONFLICT = 2,
  /** the library used by the typelib could not be found. */
  LIBRARY_NOT_FOUND = 3,
}
/**
  * Scope type of a #GIArgInfo representing callback, determines how the callback is invoked and is used to decided when the invoke structs can be freed. 
  */
export declare enum ScopeType {
  /** The argument is not of callback type. */
  INVALID = 0,
  /** The callback and associated user_data is only used during the call to this function. */
  CALL = 1,
  /** The callback and associated user_data is only used until the callback is invoked, and the callback. is invoked always exactly once. */
  ASYNC = 2,
  /** The callback and and associated user_data is used until the caller is notfied via the destroy_notify. */
  NOTIFIED = 3,
}
/**
  * The transfer is the exchange of data between two parts, from the callee to the caller. The callee is either a function/method/signal or an object/interface where a property is defined. The caller is the side accessing a property or calling a function. GIRepository.Transfer specifies who’s responsible for freeing the resources after the ownership transfer is complete. In case of a containing type such as a list, an array or a hash table the container itself is specified differently from the items within the container itself. Each container is freed differently, check the documentation for the types themselves for information on how to free them. 
  */
export declare enum Transfer {
  /** transfer nothing from the callee (function or the type instance the property belongs to) to the caller. The callee retains the ownership of the transfer and the caller doesn’t need to do anything to free up the resources of this transfer. */
  NOTHING = 0,
  /** transfer the container (list, array, hash table) from the callee to the caller. The callee retains the ownership of the individual items in the container and the caller has to free up the container resources (g_list_free()/GLib.HashTable.destroy() etc) of this transfer. */
  CONTAINER = 1,
  /** transfer everything, eg the container and its contents from the callee to the caller. This is the case when the callee creates a copy of all the data it returns. The caller is responsible for cleaning up the container and item resources of this transfer. */
  EVERYTHING = 2,
}
/**
  * The type tag of a #GITypeInfo. 
  */
export declare enum TypeTag {
  /** void */
  VOID = 0,
  /** boolean */
  BOOLEAN = 1,
  /** float */
  FLOAT = 10,
  /** double floating point */
  DOUBLE = 11,
  /** a GObject.GType */
  GTYPE = 12,
  /** a UTF-8 encoded string */
  UTF8 = 13,
  /** a filename, encoded in the same encoding as the native filesystem is using. */
  FILENAME = 14,
  /** an array */
  ARRAY = 15,
  /** an extended interface object */
  INTERFACE = 16,
  /** a GLib.List */
  GLIST = 17,
  /** a GLib.SList */
  GSLIST = 18,
  /** a GLib.HashTable */
  GHASH = 19,
  /** 8-bit signed integer */
  INT8 = 2,
  /** a GLib.Error */
  ERROR = 20,
  /** Unicode character */
  UNICHAR = 21,
  /** 8-bit unsigned integer */
  UINT8 = 3,
  /** 16-bit signed integer */
  INT16 = 4,
  /** 16-bit unsigned integer */
  UINT16 = 5,
  /** 32-bit signed integer */
  INT32 = 6,
  /** 32-bit unsigned integer */
  UINT32 = 7,
  /** 64-bit signed integer */
  INT64 = 8,
  /** 64-bit unsigned integer */
  UINT64 = 9,
}
/**
  * An error occuring while invoking a function via g_function_info_invoke(). 
  */
export declare enum nvokeError {
  /** invokation failed, unknown error. */
  FAILED = 0,
  /** symbol couldn’t be found in any of the libraries associated with the typelib of the function. */
  SYMBOL_NOT_FOUND = 1,
  /** the arguments provided didn’t match the expected arguments for the functions type signature. */
  ARGUMENT_MISMATCH = 2,
}
