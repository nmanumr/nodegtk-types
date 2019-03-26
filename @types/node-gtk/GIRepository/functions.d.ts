/**
  * Obtain the index of the user data argument. This is only valid for arguments which are callbacks.
  * @param info a #GIArgInfo
  * @returns index of the user data argument or -1 if there is none 
  */
export declare function argInfoGetClosure(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtains the index of the GLib.DestroyNotify argument. This is only valid for arguments which are callbacks.
  * @param info a #GIArgInfo
  * @returns index of the GLib.DestroyNotify argument or -1 if there is none 
  */
export declare function argInfoGetDestroy(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the direction of the argument. Check GIRepository.Direction for possible direction values.
  * @param info a #GIArgInfo
  * @returns the direction 
  */
export declare function argInfoGetDirection(info: import('../GIRepository').BaseInfo): import('../GIRepository').Direction;
/**
  * Obtain the ownership transfer for this argument. GIRepository.Transfer contains a list of possible values.
  * @param info a #GIArgInfo
  * @returns the transfer 
  */
export declare function argInfoGetOwnershipTransfer(info: import('../GIRepository').BaseInfo): import('../GIRepository').Transfer;
/**
  * Obtain the scope type for this argument. The scope type explains how a callback is going to be invoked, most importantly when the resources required to invoke it can be freed. GIRepository.ScopeType contains a list of possible values.
  * @param info a #GIArgInfo
  * @returns the scope type 
  */
export declare function argInfoGetScope(info: import('../GIRepository').BaseInfo): import('../GIRepository').ScopeType;
/**
  * Obtain the type information for info.
  * @param info a #GIArgInfo
  * @returns the #GITypeInfo holding the type information for info, free it with g_base_info_unref() when done. 
  */
export declare function argInfoGetType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain if the argument is a pointer to a struct or object that will receive an output of a function.  The default assumption for GIRepository.Direction.OUT arguments which have allocation is that the callee allocates; if this is True, then the caller must allocate.
  * @param info a #GIArgInfo
  * @returns True if caller is required to have allocated the argument 
  */
export declare function argInfoIsCallerAllocates(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain if the argument is optional.  For ‘out’ arguments this means that you can pass None in order to ignore the result.
  * @param info a #GIArgInfo
  * @returns True if it is an optional argument 
  */
export declare function argInfoIsOptional(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain if the argument is a return value. It can either be a parameter or a return value.
  * @param info a #GIArgInfo
  * @returns True if it is a return value 
  */
export declare function argInfoIsReturnValue(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain if an argument is only useful in C.
  * @param info a #GIArgInfo
  * @returns True if argument is only useful in C. 
  */
export declare function argInfoIsSkip(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain information about a the type of given argument info; this function is a variant of GIRepository.arg_info_get_type() designed for stack allocation.
  * @param info a #GIArgInfo
  * @returns Initialized with information about type of info 
  */
export declare function argInfoLoadType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain if the type of the argument includes the possibility of None. For ‘in’ values this means that None is a valid value.  For ‘out’ values, this means that None may be returned.
  * @param info a #GIArgInfo
  * @returns True if the value may be None 
  */
export declare function argInfoMayBeNull(info: import('../GIRepository').BaseInfo): boolean;
/**
  * TODO
  * @param info a #GICallableInfo
  * @returns True if this #GICallableInfo can throw a GLib.Error 
  */
export declare function callableInfoCanThrowGerror(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain information about a particular argument of this callable.
  * @param info a #GICallableInfo
  * @param n the argument index to fetch
  * @returns the #GIArgInfo. Free it with g_base_info_unref() when done. 
  */
export declare function callableInfoGetArg(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * See whether the caller owns the return value of this callable. GIRepository.Transfer contains a list of possible transfer values.
  * @param info a #GICallableInfo
  * @returns the transfer mode for the return value of the callable 
  */
export declare function callableInfoGetCallerOwns(info: import('../GIRepository').BaseInfo): import('../GIRepository').Transfer;
/**
  * Obtains the ownership transfer for the instance argument. GIRepository.Transfer contains a list of possible transfer values.
  * @param info a #GICallableInfo
  * @returns the transfer mode of the instance argument 
  */
export declare function callableInfoGetInstanceOwnershipTransfer(info: import('../GIRepository').BaseInfo): import('../GIRepository').Transfer;
/**
  * Obtain the number of arguments (both IN and OUT) for this callable.
  * @param info a #GICallableInfo
  * @returns The number of arguments this callable expects. 
  */
export declare function callableInfoGetNArgs(info: import('../GIRepository').BaseInfo): number;
/**
  * Retrieve an arbitrary attribute associated with the return value.
  * @param info a #GICallableInfo
  * @param name a freeform string naming an attribute
  * @returns The value of the attribute, or None if no such attribute exists 
  */
export declare function callableInfoGetReturnAttribute(info: import('../GIRepository').BaseInfo, name: string): string;
/**
  * Obtain the return type of a callable item as a #GITypeInfo.
  * @param info a #GICallableInfo
  * @returns the #GITypeInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function callableInfoGetReturnType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * TODO
  * @param info TODO
  * @param function TODO
  * @param inArgs TODO
  * @param outArgs TODO
  * @param returnValue TODO
  * @param isMethod TODO
  * @param throws TODO 
  */
export declare function callableInfoInvoke(info: import('../GIRepository').BaseInfo, fn: Object | null, inArgs: import('../GIRepository').Argument, outArgs: import('../GIRepository').Argument, returnValue: import('../GIRepository').Argument, isMethod: boolean, throws: boolean): boolean;
/**
  * Determines if the callable info is a method. For #GIVFuncInfo s, #GICallbackInfo s, and #GISignalInfo s, this is always true. Otherwise, this looks at the GIRepository.FunctionInfoFlags.IS_METHOD flag on the #GIFunctionInfo.
  * @param info a #GICallableInfo
  * @returns True if info is a method, False otherwise 
  */
export declare function callableInfoIsMethod(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Iterate over all attributes associated with the return value.  The iterator structure is typically stack allocated, and must have its first member initialized to None.
  * @param info a #GICallableInfo
  * @param iterator a GIRepository.AttributeIter structure, must be initialized; see below
  * @returns True if there are more attributes   iterator:a GIRepository.AttributeIter structure, must be initialized; see below name:Returned name, must not be freed value:Returned name, must not be freed 
  */
export declare function callableInfoIterateReturnAttributes(info: import('../GIRepository').BaseInfo, iterator: import('../GIRepository').AttributeIter): [boolean, import('../GIRepository').AttributeIter, string, string];
/**
  * Obtain information about a particular argument of this callable; this function is a variant of GIRepository.callable_info_get_arg() designed for stack allocation.
  * @param info a #GICallableInfo
  * @param n the argument index to fetch
  * @returns Initialize with argument number n 
  */
export declare function callableInfoLoadArg(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain information about a return value of callable; this function is a variant of GIRepository.callable_info_get_return_type() designed for stack allocation.
  * @param info a #GICallableInfo
  * @returns Initialized with return type of info 
  */
export declare function callableInfoLoadReturnType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * See if a callable could return None.
  * @param info a #GICallableInfo
  * @returns True if callable could return None 
  */
export declare function callableInfoMayReturnNull(info: import('../GIRepository').BaseInfo): boolean;
/**
  * See if a callable’s return value is only useful in C.
  * @param info a #GICallableInfo
  * @returns True if return value is only useful in C. 
  */
export declare function callableInfoSkipReturn(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain the type of the constant as a #GITypeInfo.
  * @param info a #GIConstantInfo
  * @returns the #GITypeInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function constantInfoGetType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the string form of the quark for the error domain associated with this enum, if any.
  * @param info a #GIEnumInfo
  * @returns the string form of the error domain associated with this enum, or None. 
  */
export declare function enumInfoGetErrorDomain(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain an enum type method at index n.
  * @param info a #GIEnumInfo
  * @param n index of method to get
  * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function enumInfoGetMethod(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the number of methods that this enum type has.
  * @param info a #GIEnumInfo
  * @returns number of methods 
  */
export declare function enumInfoGetNMethods(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of values this enumeration contains.
  * @param info a #GIEnumInfo
  * @returns the number of enumeration values 
  */
export declare function enumInfoGetNValues(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the tag of the type used for the enum in the C ABI. This will will be a signed or unsigned integral type.
  * @param info a #GIEnumInfo
  * @returns the storage type for the enumeration 
  */
export declare function enumInfoGetStorageType(info: import('../GIRepository').BaseInfo): import('../GIRepository').TypeTag;
/**
  * Obtain a value for this enumeration.
  * @param info a #GIEnumInfo
  * @param n index of value to fetch
  * @returns the enumeration value or None if type tag is wrong, free the struct with g_base_info_unref() when done. 
  */
export declare function enumInfoGetValue(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the flags for this #GIFieldInfo. See GIRepository.FieldInfoFlags for possible flag values.
  * @param info a #GIFieldInfo
  * @returns the flags 
  */
export declare function fieldInfoGetFlags(info: import('../GIRepository').BaseInfo): import('../GIRepository').FieldInfoFlags;
/**
  * Obtain the offset in bits of the field member, this is relative to the beginning of the struct or union.
  * @param info a #GIFieldInfo
  * @returns the field offset 
  */
export declare function fieldInfoGetOffset(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the size in bits of the field member, this is how much space you need to allocate to store the field.
  * @param info a #GIFieldInfo
  * @returns the field size 
  */
export declare function fieldInfoGetSize(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the type of a field as a #GITypeInfo.
  * @param info a #GIFieldInfo
  * @returns the #GITypeInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function fieldInfoGetType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the GIRepository.FunctionInfoFlags for the info.
  * @param info a #GIFunctionInfo
  * @returns the flags 
  */
export declare function functionInfoGetFlags(info: import('../GIRepository').BaseInfo): import('../GIRepository').FunctionInfoFlags;
/**
  * Obtain the property associated with this #GIFunctionInfo. Only #GIFunctionInfo with the flag GIRepository.FunctionInfoFlags.IS_GETTER or GIRepository.FunctionInfoFlags.IS_SETTER have a property set. For other cases, None will be returned.
  * @param info a #GIFunctionInfo
  * @returns the property or None if not set. Free it with g_base_info_unref() when done. 
  */
export declare function functionInfoGetProperty(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the symbol of the function. The symbol is the name of the exported function, suitable to be used as an argument to g_module_symbol().
  * @param info a #GIFunctionInfo
  * @returns the symbol 
  */
export declare function functionInfoGetSymbol(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain the virtual function associated with this #GIFunctionInfo. Only #GIFunctionInfo with the flag GIRepository.FunctionInfoFlags.WRAPS_VFUNC has a virtual function set. For other cases, None will be returned.
  * @param info a #GIFunctionInfo
  * @returns the virtual function or None if not set. Free it by calling g_base_info_unref() when done. 
  */
export declare function functionInfoGetVfunc(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * TODO
  * @param type TODO
  * @param container TODO
  * @param typelib TODO
  * @param offset TODO
  * @returns TODO 
  */
export declare function infoNew(type: import('../GIRepository').InfoType, container: import('../GIRepository').BaseInfo, typelib: import('../GIRepository').Typelib, offset: number): import('../GIRepository').BaseInfo;
/**
  * Obtain a string representation of type
  * @param type the info type
  * @returns the string 
  */
export declare function infoTypeToString(type: import('../GIRepository').InfoType): string;
/**
  * Obtain a method of the interface type given a name. None will be returned if there’s no method available with that name.
  * @param info a #GIInterfaceInfo
  * @param name name of method to obtain
  * @returns the #GIFunctionInfo or None if none found. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoFindMethod(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * TODO
  * @param info a #GIInterfaceInfo
  * @param name Name of signal
  * @returns Info for the signal with name name in info, or None on failure. 
  */
export declare function interfaceInfoFindSignal(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Locate a virtual function slot with name name. See the documentation for GIRepository.object_info_find_vfunc() for more information on virtuals.
  * @param info a #GIInterfaceInfo
  * @param name The name of a virtual function to find.
  * @returns the #GIVFuncInfo, or None. Free it with g_base_info_unref() when done. 
  */
export declare function interfaceInfoFindVfunc(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Obtain an interface type constant at index n.
  * @param info a #GIInterfaceInfo
  * @param n index of constant to get
  * @returns the #GIConstantInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetConstant(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Returns the layout C structure associated with this #GInterface.
  * @param info a #GIInterfaceInfo
  * @returns the #GIStructInfo or None. Free it with g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetIfaceStruct(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain an interface type method at index n.
  * @param info a #GIInterfaceInfo
  * @param n index of method to get
  * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetMethod(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the number of constants that this interface type has.
  * @param info a #GIInterfaceInfo
  * @returns number of constants 
  */
export declare function interfaceInfoGetNConstants(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of methods that this interface type has.
  * @param info a #GIInterfaceInfo
  * @returns number of methods 
  */
export declare function interfaceInfoGetNMethods(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of prerequisites for this interface type. A prerequisites is another interface that needs to be implemented for interface, similar to an base class for GObjects.
  * @param info a #GIInterfaceInfo
  * @returns number of prerequisites 
  */
export declare function interfaceInfoGetNPrerequisites(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of properties that this interface type has.
  * @param info a #GIInterfaceInfo
  * @returns number of properties 
  */
export declare function interfaceInfoGetNProperties(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of signals that this interface type has.
  * @param info a #GIInterfaceInfo
  * @returns number of signals 
  */
export declare function interfaceInfoGetNSignals(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of virtual functions that this interface type has.
  * @param info a #GIInterfaceInfo
  * @returns number of virtual functions 
  */
export declare function interfaceInfoGetNVfuncs(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain an interface type prerequisites index n.
  * @param info a #GIInterfaceInfo
  * @param n index of prerequisites to get
  * @returns the prerequisites as a GIRepository.BaseInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetPrerequisite(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain an interface type property at index n.
  * @param info a #GIInterfaceInfo
  * @param n index of property to get
  * @returns the #GIPropertyInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetProperty(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain an interface type signal at index n.
  * @param info a #GIInterfaceInfo
  * @param n index of signal to get
  * @returns the #GISignalInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetSignal(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain an interface type virtual function at index n.
  * @param info a #GIInterfaceInfo
  * @param n index of virtual function to get
  * @returns the #GIVFuncInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function interfaceInfoGetVfunc(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * TODO
  * @returns TODO 
  */
export declare function invokeErrorQuark(): number;
/**
  * Obtain a method of the object type given a name. None will be returned if there’s no method available with that name.
  * @param info a #GIObjectInfo
  * @param name name of method to obtain
  * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoFindMethod(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Obtain a method of the object given a name, searching both the object info and any interfaces it implements.  None will be returned if there’s no method available with that name.
  * @param info a #GIObjectInfo
  * @param name name of method to obtain
  * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.   implementor:The implementor of the interface 
  */
export declare function objectInfoFindMethodUsingInterfaces(info: import('../GIRepository').BaseInfo, name: string): [import('../GIRepository').BaseInfo, import('../GIRepository').BaseInfo];
/**
  * TODO
  * @param info a #GIObjectInfo
  * @param name Name of signal
  * @returns Info for the signal with name name in info, or None on failure. 
  */
export declare function objectInfoFindSignal(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Locate a virtual function slot with name name. Note that the namespace for virtuals is distinct from that of methods; there may or may not be a concrete method associated for a virtual. If there is one, it may be retrieved using GIRepository.vfunc_info_get_invoker(), otherwise None will be returned. See the documentation for GIRepository.vfunc_info_get_invoker() for more information on invoking virtuals.
  * @param info a #GIObjectInfo
  * @param name The name of a virtual function to find.
  * @returns the #GIVFuncInfo, or None. Free it with g_base_info_unref() when done. 
  */
export declare function objectInfoFindVfunc(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Locate a virtual function slot with name name, searching both the object info and any interfaces it implements.  Note that the namespace for virtuals is distinct from that of methods; there may or may not be a concrete method associated for a virtual. If there is one, it may be retrieved using GIRepository.vfunc_info_get_invoker(), otherwise None will be returned.
  * @param info a #GIObjectInfo
  * @param name name of method to obtain
  * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.   implementor:The implementor of the interface 
  */
export declare function objectInfoFindVfuncUsingInterfaces(info: import('../GIRepository').BaseInfo, name: string): [import('../GIRepository').BaseInfo, import('../GIRepository').BaseInfo];
/**
  * Obtain if the object type is an abstract type, eg if it cannot be instantiated
  * @param info a #GIObjectInfo
  * @returns True if the object type is abstract 
  */
export declare function objectInfoGetAbstract(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Every GObject.Object has two structures; an instance structure and a class structure.  This function returns the metadata for the class structure.
  * @param info a #GIObjectInfo
  * @returns the #GIStructInfo or None. Free with g_base_info_unref() when done. 
  */
export declare function objectInfoGetClassStruct(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain an object type constant at index n.
  * @param info a #GIObjectInfo
  * @param n index of constant to get
  * @returns the #GIConstantInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetConstant(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain an object type field at index n.
  * @param info a #GIObjectInfo
  * @param n index of field to get
  * @returns the #GIFieldInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetField(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain if the object type is of a fundamental type which is not GObject.TYPE_OBJECT. This is mostly for supporting GstMiniObject.
  * @param info a #GIObjectInfo
  * @returns True if the object type is a fundamental type 
  */
export declare function objectInfoGetFundamental(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain the symbol name of the function that should be called to convert an object instance pointer of this object type to a GObject.Value. I’s mainly used fundamental types. The type signature for the symbol is %GIObjectInfoGetValueFunction, to fetch the function pointer see GIRepository.object_info_get_get_value_function().
  * @param info a #GIObjectInfo
  * @returns the symbol or None 
  */
export declare function objectInfoGetGetValueFunction(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain an object type interface at index n.
  * @param info a #GIObjectInfo
  * @param n index of interface to get
  * @returns the #GIInterfaceInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetInterface(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain an object type method at index n.
  * @param info a #GIObjectInfo
  * @param n index of method to get
  * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetMethod(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the number of constants that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of constants 
  */
export declare function objectInfoGetNConstants(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of fields that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of fields 
  */
export declare function objectInfoGetNFields(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of interfaces that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of interfaces 
  */
export declare function objectInfoGetNInterfaces(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of methods that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of methods 
  */
export declare function objectInfoGetNMethods(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of properties that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of properties 
  */
export declare function objectInfoGetNProperties(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of signals that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of signals 
  */
export declare function objectInfoGetNSignals(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of virtual functions that this object type has.
  * @param info a #GIObjectInfo
  * @returns number of virtual functions 
  */
export declare function objectInfoGetNVfuncs(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the parent of the object type.
  * @param info a #GIObjectInfo
  * @returns the #GIObjectInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetParent(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain an object type property at index n.
  * @param info a #GIObjectInfo
  * @param n index of property to get
  * @returns the #GIPropertyInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetProperty(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the symbol name of the function that should be called to ref this object type. It’s mainly used fundamental types. The type signature for the symbol is %GIObjectInfoRefFunction, to fetch the function pointer see GIRepository.object_info_get_ref_function().
  * @param info a #GIObjectInfo
  * @returns the symbol or None 
  */
export declare function objectInfoGetRefFunction(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain the symbol name of the function that should be called to convert set a GObject.Value giving an object instance pointer of this object type. I’s mainly used fundamental types. The type signature for the symbol is %GIObjectInfoSetValueFunction, to fetch the function pointer see GIRepository.object_info_get_set_value_function().
  * @param info a #GIObjectInfo
  * @returns the symbol or None 
  */
export declare function objectInfoGetSetValueFunction(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain an object type signal at index n.
  * @param info a #GIObjectInfo
  * @param n index of signal to get
  * @returns the #GISignalInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetSignal(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the function which when called will return the GObject.GType function for which this object type is registered.
  * @param info a #GIObjectInfo
  * @returns the type init function 
  */
export declare function objectInfoGetTypeInit(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain the name of the objects class/type.
  * @param info a #GIObjectInfo
  * @returns name of the objects type 
  */
export declare function objectInfoGetTypeName(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain the symbol name of the function that should be called to unref this object type. It’s mainly used fundamental types. The type signature for the symbol is %GIObjectInfoUnrefFunction, to fetch the function pointer see GIRepository.object_info_get_unref_function().
  * @param info a #GIObjectInfo
  * @returns the symbol or None 
  */
export declare function objectInfoGetUnrefFunction(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain an object type virtual function at index n.
  * @param info a #GIObjectInfo
  * @param n index of virtual function to get
  * @returns the #GIVFuncInfo. Free the struct by calling g_base_info_unref() when done. 
  */
export declare function objectInfoGetVfunc(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the flags for this property info. See GObject.ParamFlags for more information about possible flag values.
  * @param info a #GIPropertyInfo
  * @returns the flags 
  */
export declare function propertyInfoGetFlags(info: import('../GIRepository').BaseInfo): import('../GObject').ParamFlags;
/**
  * Obtain the ownership transfer for this property. See GIRepository.Transfer for more information about transfer values.
  * @param info a #GIPropertyInfo
  * @returns the transfer 
  */
export declare function propertyInfoGetOwnershipTransfer(info: import('../GIRepository').BaseInfo): import('../GIRepository').Transfer;
/**
  * Obtain the type information for the property info.
  * @param info a #GIPropertyInfo
  * @returns the #GITypeInfo, free it with g_base_info_unref() when done. 
  */
export declare function propertyInfoGetType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the GObject.GType for this registered type or GObject.TYPE_NONE which a special meaning. It means that either there is no type information associated with this info or that the shared library which provides the type_init function for this info cannot be called.
  * @param info a #GIRegisteredTypeInfo
  * @returns the GObject.GType. 
  */
export declare function registeredTypeInfoGetGType(info: import('../GIRepository').BaseInfo): import('../GObject').GType;
/**
  * Obtain the type init function for info. The type init function is the function which will register the GObject.GType within the GObject.Object type system. Usually this is not called by langauge bindings or applications, use GIRepository.registered_type_info_get_g_type() directly instead.
  * @param info a #GIRegisteredTypeInfo
  * @returns the symbol name of the type init function, suitable for passing into g_module_symbol(). 
  */
export declare function registeredTypeInfoGetTypeInit(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain the type name of the struct within the GObject.Object type system. This type can be passed to GObject.type_name() to get a GObject.GType.
  * @param info a #GIRegisteredTypeInfo
  * @returns the type name 
  */
export declare function registeredTypeInfoGetTypeName(info: import('../GIRepository').BaseInfo): string;
/**
  * Obtain the class closure for this signal if one is set. The class closure is a virtual function on the type that the signal belongs to. If the signal lacks a closure None will be returned.
  * @param info a #GISignalInfo
  * @returns the class closure or None 
  */
export declare function signalInfoGetClassClosure(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the flags for this signal info. See GObject.SignalFlags for more information about possible flag values.
  * @param info a #GISignalInfo
  * @returns the flags 
  */
export declare function signalInfoGetFlags(info: import('../GIRepository').BaseInfo): import('../GObject').SignalFlags;
/**
  * Obtain if the returning true in the signal handler will stop the emission of the signal.
  * @param info a #GISignalInfo
  * @returns True if returning true stops the signal emission 
  */
export declare function signalInfoTrueStopsEmit(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain the type information for field named name.
  * @param info a #GIStructInfo
  * @param name a field name
  * @returns the #GIFieldInfo or None if not found, free it with g_base_info_unref() when done. 
  */
export declare function structInfoFindField(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Obtain the type information for method named name.
  * @param info a #GIStructInfo
  * @param name a method name
  * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done. 
  */
export declare function structInfoFindMethod(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Obtain the required alignment of the structure.
  * @param info a #GIStructInfo
  * @returns required alignment in bytes 
  */
export declare function structInfoGetAlignment(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the type information for field with specified index.
  * @param info a #GIStructInfo
  * @param n a field index
  * @returns the #GIFieldInfo, free it with g_base_info_unref() when done. 
  */
export declare function structInfoGetField(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the type information for method with specified index.
  * @param info a #GIStructInfo
  * @param n a method index
  * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done. 
  */
export declare function structInfoGetMethod(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the number of fields this structure has.
  * @param info a #GIStructInfo
  * @returns number of fields 
  */
export declare function structInfoGetNFields(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of methods this structure has.
  * @param info a #GIStructInfo
  * @returns number of methods 
  */
export declare function structInfoGetNMethods(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the total size of the structure.
  * @param info a #GIStructInfo
  * @returns size of the structure in bytes 
  */
export declare function structInfoGetSize(info: import('../GIRepository').BaseInfo): number;
/**
  * TODO
  * @param info TODO
  * @returns TODO 
  */
export declare function structInfoIsForeign(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Return true if this structure represents the “class structure” for some GObject.Object or #GInterface.  This function is mainly useful to hide this kind of structure from generated public APIs.
  * @param info a #GIStructInfo
  * @returns True if this is a class struct, False otherwise 
  */
export declare function structInfoIsGtypeStruct(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain the fixed array size of the type. The type tag must be a GIRepository.TypeTag.ARRAY or -1 will returned.
  * @param info a #GITypeInfo
  * @returns the size or -1 if it’s not an array 
  */
export declare function typeInfoGetArrayFixedSize(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the array length of the type. The type tag must be a GIRepository.TypeTag.ARRAY or -1 will returned.
  * @param info a #GITypeInfo
  * @returns the array length, or -1 if the type is not an array 
  */
export declare function typeInfoGetArrayLength(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the array type for this type. See GIRepository.ArrayType for a list of possible values. If the type tag of this type is not array, -1 will be returned.
  * @param info a #GITypeInfo
  * @returns the array type or -1 
  */
export declare function typeInfoGetArrayType(info: import('../GIRepository').BaseInfo): import('../GIRepository').ArrayType;
/**
  * For types which have GIRepository.TypeTag.INTERFACE such as GObjects and boxed values, this function returns full information about the referenced type.  You can then inspect the type of the returned GIRepository.BaseInfo to further query whether it is a concrete GObject.Object, a GInterface, a structure, etc. using GIRepository.BaseInfo.get_type().
  * @param info a #GITypeInfo
  * @returns the GIRepository.BaseInfo, or None. Free it with g_base_info_unref() when done. 
  */
export declare function typeInfoGetInterface(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the parameter type n.
  * @param info a #GITypeInfo
  * @param n index of the parameter
  * @returns the param type info 
  */
export declare function typeInfoGetParamType(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the type tag for the type. See GIRepository.TypeTag for a list of type tags.
  * @param info a #GITypeInfo
  * @returns the type tag 
  */
export declare function typeInfoGetTag(info: import('../GIRepository').BaseInfo): import('../GIRepository').TypeTag;
/**
  * Obtain if the type is passed as a reference.
  * @param info a #GITypeInfo
  * @returns True if it is a pointer 
  */
export declare function typeInfoIsPointer(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain if the last element of the array is None. The type tag must be a GIRepository.TypeTag.ARRAY or False will returned.
  * @param info a #GITypeInfo
  * @returns True if zero terminated 
  */
export declare function typeInfoIsZeroTerminated(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain a string representation of type
  * @param type the type_tag
  * @returns the string 
  */
export declare function typeTagToString(type: import('../GIRepository').TypeTag): string;
/**
  * Obtain the type information for method named name.
  * @param info a #GIUnionInfo
  * @param name a method name
  * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done. 
  */
export declare function unionInfoFindMethod(info: import('../GIRepository').BaseInfo, name: string): import('../GIRepository').BaseInfo;
/**
  * Obtain the required alignment of the union.
  * @param info a #GIUnionInfo
  * @returns required alignment in bytes 
  */
export declare function unionInfoGetAlignment(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain discriminator value assigned for n-th union field, i.e. n-th union field is the active one if discriminator contains this constant.
  * @param info a #GIUnionInfo
  * @param n a union field index
  * @returns the #GIConstantInfo, free it with g_base_info_unref() when done. 
  */
export declare function unionInfoGetDiscriminator(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Returns offset of the discriminator field in the structure.
  * @param info a #GIUnionInfo
  * @returns offset in bytes of the discriminator 
  */
export declare function unionInfoGetDiscriminatorOffset(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the type information of the union discriminator.
  * @param info a #GIUnionInfo
  * @returns the #GITypeInfo, free it with g_base_info_unref() when done. 
  */
export declare function unionInfoGetDiscriminatorType(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the type information for field with specified index.
  * @param info a #GIUnionInfo
  * @param n a field index
  * @returns the #GIFieldInfo, free it with g_base_info_unref() when done. 
  */
export declare function unionInfoGetField(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the type information for method with specified index.
  * @param info a #GIUnionInfo
  * @param n a method index
  * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done. 
  */
export declare function unionInfoGetMethod(info: import('../GIRepository').BaseInfo, n: number): import('../GIRepository').BaseInfo;
/**
  * Obtain the number of fields this union has.
  * @param info a #GIUnionInfo
  * @returns number of fields 
  */
export declare function unionInfoGetNFields(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the number of methods this union has.
  * @param info a #GIUnionInfo
  * @returns number of methods 
  */
export declare function unionInfoGetNMethods(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the total size of the union.
  * @param info a #GIUnionInfo
  * @returns size of the union in bytes 
  */
export declare function unionInfoGetSize(info: import('../GIRepository').BaseInfo): number;
/**
  * Return true if this union contains discriminator field.
  * @param info a #GIUnionInfo
  * @returns True if this is a discriminated union, False otherwise 
  */
export declare function unionInfoIsDiscriminated(info: import('../GIRepository').BaseInfo): boolean;
/**
  * Obtain the enumeration value of the #GIValueInfo.
  * @param info a #GIValueInfo
  * @returns the enumeration value. This will always be representable as a 32-bit signed or unsigned value. The use of gint64 as the return type is to allow both. 
  */
export declare function valueInfoGetValue(info: import('../GIRepository').BaseInfo): number;
/**
  * This method will look up where inside the type struct of implementor_gtype is the implementation for info.
  * @param info a #GIVFuncInfo
  * @param implementorGtype GObject.GType implementing this virtual function
  * @returns address to a function or None if an error happened 
  */
export declare function vfuncInfoGetAddress(info: import('../GIRepository').BaseInfo, implementorGtype: import('../GObject').GType): Object | null;
/**
  * Obtain the flags for this virtual function info. See GIRepository.VFuncInfoFlags for more information about possible flag values.
  * @param info a #GIVFuncInfo
  * @returns the flags 
  */
export declare function vfuncInfoGetFlags(info: import('../GIRepository').BaseInfo): import('../GIRepository').VFuncInfoFlags;
/**
  * If this virtual function has an associated invoker method, this method will return it.  An invoker method is a C entry point.
  * @param info a #GIVFuncInfo
  * @returns the #GIVFuncInfo or None. Free it with g_base_info_unref() when done. 
  */
export declare function vfuncInfoGetInvoker(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
/**
  * Obtain the offset of the function pointer in the class struct. The value 0xFFFF indicates that the struct offset is unknown.
  * @param info a #GIVFuncInfo
  * @returns the struct offset or 0xFFFF if it’s unknown 
  */
export declare function vfuncInfoGetOffset(info: import('../GIRepository').BaseInfo): number;
/**
  * Obtain the signal for the virtual function if one is set. The signal comes from the object or interface to which this virtual function belongs.
  * @param info a #GIVFuncInfo
  * @returns the signal or None if none set 
  */
export declare function vfuncInfoGetSignal(info: import('../GIRepository').BaseInfo): import('../GIRepository').BaseInfo;
