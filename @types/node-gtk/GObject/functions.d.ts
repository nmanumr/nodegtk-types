/**
  * The add_emission_hook() function adds an emission hook for the signal specified by name, which will get called for any emission of that signal, independent of the instance. This is possible only for signals which don’t have the GObject.SignalFlags.NO_HOOKS flag set.
  * @param type a Python GObject instance or type
  * @param name a signal name
  * @param callback callback – a function
  * @param userData user_data – zero or more extra arguments that will be passed to callback 
  */
export declare function addEmissionHook(type: import('../GObject').Object, name: string, callback, userData): void;
/**
  * Provide a copy of a boxed structure src_boxed which is of type boxed_type.
  * @param boxedType The type of src_boxed.
  * @param srcBoxed The boxed structure to be copied.
  * @returns The newly created copy of the boxed structure. 
  */
export declare function boxedCopy(boxedType: import('../GObject').GType, srcBoxed: Object): Object;
/**
  * Free the boxed structure boxed which is of type boxed_type.
  * @param boxedType The type of boxed.
  * @param boxed The boxed structure to be freed. 
  */
export declare function boxedFree(boxedType: import('../GObject').GType, boxed: Object): void;
/**
  * A GObject.ClosureMarshal function for use with signals with handlers that take two boxed pointers as arguments and return a boolean.  If you have such a signal, you will probably also need to use an accumulator, such as GObject.signal_accumulator_true_handled().
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalBooleanBoxedBoxed(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with handlers that take a flags type as an argument and return a boolean.  If you have such a signal, you will probably also need to use an accumulator, such as GObject.signal_accumulator_true_handled().
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalBooleanFlags(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with handlers that take a GObject.Object and a pointer and produce a string.  It is highly unlikely that your signal handler fits this description.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalStringObjectPointer(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single boolean argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidBoolean(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single argument which is any boxed pointer type.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidBoxed(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single character argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidChar(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with one double-precision floating point argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidDouble(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single argument with an enumerated type.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidEnum(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single argument with a flags types.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidFlags(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with one single-precision floating point argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidFloat(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single integer argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidInt(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with with a single long integer argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidLong(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single GObject.Object argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidObject(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single argument of type GObject.ParamSpec.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidParam(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single raw pointer argument type.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidPointer(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single string argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidString(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single unsigned character argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidUchar(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with with a single unsigned integer argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidUint(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a unsigned int and a pointer as arguments.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidUintPointer(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single unsigned long integer argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidUlong(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with a single GLib.Variant argument.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidVariant(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A GObject.ClosureMarshal function for use with signals with no arguments.
  * @param closure A GObject.Closure.
  * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalVoidVoid(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * A generic marshaller function implemented via libffi.
  * @param closure A GObject.Closure.
  * @param returnGvalue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param nParamValues The length of the param_values array.
  * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
  * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
  * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare function cclosureMarshalGeneric(closure: import('../GObject').Closure, returnGvalue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
/**
  * This function is meant to be called from the complete_type_info function of a GObject.TypePlugin implementation, as in the following example:
  * @param gEnumType the type identifier of the type being completed
  * @param constValues An array of GObject.EnumValue structs for the possible enumeration values. The array is terminated by a struct with all members being 0.
  * @returns the GObject.TypeInfo struct to be filled in 
  */
export declare function enumCompleteTypeInfo(gEnumType: import('../GObject').GType, constValues: import('../GObject').EnumValue): import('../GObject').TypeInfo;
/**
  * Returns the GObject.EnumValue for a value.
  * @param enumClass a GObject.EnumClass
  * @param value the value to look up
  * @returns the GObject.EnumValue for value, or None if value is not a member of the enumeration 
  */
export declare function enumGetValue(enumClass: import('../GObject').EnumClass, value: number): import('../GObject').EnumValue;
/**
  * Looks up a GObject.EnumValue by name.
  * @param enumClass a GObject.EnumClass
  * @param name the name to look up
  * @returns the GObject.EnumValue with name name, or None if the enumeration doesn’t have a member with that name 
  */
export declare function enumGetValueByName(enumClass: import('../GObject').EnumClass, name: string): import('../GObject').EnumValue;
/**
  * Looks up a GObject.EnumValue by nickname.
  * @param enumClass a GObject.EnumClass
  * @param nick the nickname to look up
  * @returns the GObject.EnumValue with nickname nick, or None if the enumeration doesn’t have a member with that nickname 
  */
export declare function enumGetValueByNick(enumClass: import('../GObject').EnumClass, nick: string): import('../GObject').EnumValue;
/**
  * Registers a new static enumeration type with the name name.
  * @param name A nul-terminated string used as the name of the new type.
  * @param constStaticValues An array of GObject.EnumValue structs for the possible enumeration values. The array is terminated by a struct with all members being 0. GObject.Object keeps a reference to the data, so it cannot be stack-allocated.
  * @returns The new type identifier. 
  */
export declare function enumRegisterStatic(name: string, constStaticValues: import('../GObject').EnumValue): import('../GObject').GType;
/**
  * Pretty-prints value in the form of the enum’s name.
  * @param gEnumType the type identifier of a GObject.EnumClass type
  * @param value the value
  * @returns a newly-allocated text string 
  */
export declare function enumToString(gEnumType: import('../GObject').GType, value: number): string;
/**
  * This function is meant to be called from the complete_type_info() function of a GObject.TypePlugin implementation, see the example for GObject.enum_complete_type_info() above.
  * @param gFlagsType the type identifier of the type being completed
  * @param constValues An array of GObject.FlagsValue structs for the possible enumeration values. The array is terminated by a struct with all members being 0.
  * @returns the GObject.TypeInfo struct to be filled in 
  */
export declare function flagsCompleteTypeInfo(gFlagsType: import('../GObject').GType, constValues: import('../GObject').FlagsValue): import('../GObject').TypeInfo;
/**
  * Returns the first GObject.FlagsValue which is set in value.
  * @param flagsClass a GObject.FlagsClass
  * @param value the value
  * @returns the first GObject.FlagsValue which is set in value, or None if none is set 
  */
export declare function flagsGetFirstValue(flagsClass: import('../GObject').FlagsClass, value: number): import('../GObject').FlagsValue;
/**
  * Looks up a GObject.FlagsValue by name.
  * @param flagsClass a GObject.FlagsClass
  * @param name the name to look up
  * @returns the GObject.FlagsValue with name name, or None if there is no flag with that name 
  */
export declare function flagsGetValueByName(flagsClass: import('../GObject').FlagsClass, name: string): import('../GObject').FlagsValue;
/**
  * Looks up a GObject.FlagsValue by nickname.
  * @param flagsClass a GObject.FlagsClass
  * @param nick the nickname to look up
  * @returns the GObject.FlagsValue with nickname nick, or None if there is no flag with that nickname 
  */
export declare function flagsGetValueByNick(flagsClass: import('../GObject').FlagsClass, nick: string): import('../GObject').FlagsValue;
/**
  * Registers a new static flags type with the name name.
  * @param name A nul-terminated string used as the name of the new type.
  * @param constStaticValues An array of GObject.FlagsValue structs for the possible flags values. The array is terminated by a struct with all members being 0. GObject.Object keeps a reference to the data, so it cannot be stack-allocated.
  * @returns The new type identifier. 
  */
export declare function flagsRegisterStatic(name: string, constStaticValues: import('../GObject').FlagsValue): import('../GObject').GType;
/**
  * Pretty-prints value in the form of the flag names separated by `` | `` and sorted. Any extra bits will be shown at the end as a hexadecimal number.
  * @param flagsType the type identifier of a GObject.FlagsClass type
  * @param value the value
  * @returns a newly-allocated text string 
  */
export declare function flagsToString(flagsType: import('../GObject').GType, value: number): string;
export declare function gtypeGetType(): import('../GObject').GType;
/**
  * Takes a GObject/GInterface subclass or a GType and returns a list of GParamSpecs for all properties of type.
  * @param type a Python GObject instance or type that the signal is associated with
  * @returns a list of GObject.ParamSpec 
  */
export declare function listProperties(type: import('../GObject').Object): import('../GObject').ParamSpec[];
/**
  * The Gobject.new() function returns a new object of the specified type. type must specify a type that is a descendant of gobject.GObject. GObject properties can set via keyword arguments.
  * @param type a Python GObject type
  * @param kwargs kwargs – set of property-value pairs
  * @returns a new object of the specified type 
  */
// export declare function new(type: import('../GObject').Object, kwargs: ): void;
/**
  * Creates a new GObject.ParamSpecBoolean instance specifying a GObject.TYPE_BOOLEAN property. In many cases, it may be more appropriate to use an enum with GObject.param_spec_enum(), both to improve code clarity by using explicitly named values, and to allow for more values to be added in future without breaking API.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecBoolean(name: string, nick: string, blurb: string, defaultValue: boolean, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecBoxed instance specifying a GObject.TYPE_BOXED derived property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param boxedType GObject.TYPE_BOXED derived type of this property
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecBoxed(name: string, nick: string, blurb: string, boxedType: import('../GObject').GType, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecChar instance specifying a GObject.TYPE_CHAR property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecChar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecDouble instance specifying a GObject.TYPE_DOUBLE property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecEnum instance specifying a GObject.TYPE_ENUM property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param enumType a GObject.GType derived from GObject.TYPE_ENUM
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecEnum(name: string, nick: string, blurb: string, enumType: import('../GObject').GType, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecFlags instance specifying a GObject.TYPE_FLAGS property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param flagsType a GObject.GType derived from GObject.TYPE_FLAGS
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecFlags(name: string, nick: string, blurb: string, flagsType: import('../GObject').GType, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecFloat instance specifying a GObject.TYPE_FLOAT property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecFloat(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecGType instance specifying a GObject.TYPE_GTYPE property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param isAType a GObject.GType whose subtypes are allowed as values of the property (use GObject.TYPE_NONE for any type)
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecGtype(name: string, nick: string, blurb: string, isAType: import('../GObject').GType, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecInt instance specifying a GObject.TYPE_INT property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecInt64 instance specifying a GObject.TYPE_INT64 property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecInt64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecLong instance specifying a GObject.TYPE_LONG property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecLong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecBoxed instance specifying a GObject.TYPE_OBJECT derived property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param objectType GObject.TYPE_OBJECT derived type of this property
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecObject(name: string, nick: string, blurb: string, objectType: import('../GObject').GType, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecParam instance specifying a GObject.TYPE_PARAM property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param paramType a GObject.GType derived from GObject.TYPE_PARAM
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecParam(name: string, nick: string, blurb: string, paramType: import('../GObject').GType, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecPointer instance specifying a pointer property. Where possible, it is better to use GObject.param_spec_object() or GObject.param_spec_boxed() to expose memory management information.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecPointer(name: string, nick: string, blurb: string, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecPool.
  * @param typePrefixing Whether the pool will support type-prefixed property names.
  * @returns a newly allocated GObject.ParamSpecPool. 
  */
export declare function paramSpecPoolNew(typePrefixing: boolean): import('../GObject').ParamSpecPool;
/**
  * Creates a new GObject.ParamSpecString instance.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecString(name: string, nick: string, blurb: string, defaultValue: string | null, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecUChar instance specifying a GObject.TYPE_UCHAR property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecUchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecUInt instance specifying a GObject.TYPE_UINT property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecUint(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecUInt64 instance specifying a GObject.TYPE_UINT64 property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecUint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecULong instance specifying a GObject.TYPE_ULONG property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param minimum minimum value for the property specified
  * @param maximum maximum value for the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecUlong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecUnichar instance specifying a GObject.TYPE_UINT property. GObject.Value structures for this property can be accessed with GObject.Value.set_uint() and GObject.Value.get_uint().
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param defaultValue default value for the property specified
  * @param flags flags for the property specified
  * @returns a newly created parameter specification 
  */
export declare function paramSpecUnichar(name: string, nick: string, blurb: string, defaultValue: string, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Creates a new GObject.ParamSpecVariant instance specifying a GLib.Variant property.
  * @param name canonical name of the property specified
  * @param nick nick name for the property specified
  * @param blurb description of the property specified
  * @param type a GLib.VariantType
  * @param defaultValue a GLib.Variant of type type to use as the default value, or None
  * @param flags flags for the property specified
  * @returns the newly created GObject.ParamSpec 
  */
export declare function paramSpecVariant(name: string, nick: string, blurb: string, type: import('../GLib').VariantType, defaultValue: import('../GLib').Variant | null, flags: import('../GObject').ParamFlags): import('../GObject').ParamSpec;
/**
  * Registers name as the name of a new static type derived from GObject.TYPE_PARAM. The type system uses the information contained in the GObject.ParamSpecTypeInfo structure pointed to by info to manage the GObject.ParamSpec type and its instances.
  * @param name 0-terminated string used as the name of the new GObject.ParamSpec type.
  * @param pspecInfo The GObject.ParamSpecTypeInfo for this GObject.ParamSpec type.
  * @returns The new type identifier. 
  */
export declare function paramTypeRegisterStatic(name: string, pspecInfo: import('../GObject').ParamSpecTypeInfo): import('../GObject').GType;
/**
  * Transforms src_value into dest_value if possible, and then validates dest_value, in order for it to conform to pspec.  If strict_validation is True this function will only succeed if the transformed dest_value complied to pspec without modifications.
  * @param pspec a valid GObject.ParamSpec
  * @param srcValue souce GObject.Value
  * @param destValue destination GObject.Value of correct type for pspec
  * @param strictValidation True requires dest_value to conform to pspec without modifications
  * @returns True if transformation and validation were successful, False otherwise and dest_value is left untouched. 
  */
export declare function paramValueConvert(pspec: import('../GObject').ParamSpec, srcValue: import('../GObject').Value, destValue: import('../GObject').Value, strictValidation: boolean): boolean;
/**
  * Checks whether value contains the default value as specified in pspec.
  * @param pspec a valid GObject.ParamSpec
  * @param value a GObject.Value of correct type for pspec
  * @returns whether value contains the canonical default for this pspec 
  */
export declare function paramValueDefaults(pspec: import('../GObject').ParamSpec, value: import('../GObject').Value): boolean;
/**
  * Sets value to its default value as specified in pspec.
  * @param pspec a valid GObject.ParamSpec
  * @param value a GObject.Value of correct type for pspec 
  */
export declare function paramValueSetDefault(pspec: import('../GObject').ParamSpec, value: import('../GObject').Value): void;
/**
  * Ensures that the contents of value comply with the specifications set out by pspec. For example, a GObject.ParamSpecInt might require that integers stored in value may not be smaller than -42 and not be greater than +42. If value contains an integer outside of this range, it is modified accordingly, so the resulting value will fit into the range -42 .. +42.
  * @param pspec a valid GObject.ParamSpec
  * @param value a GObject.Value of correct type for pspec
  * @returns whether modifying value was necessary to ensure validity 
  */
export declare function paramValueValidate(pspec: import('../GObject').ParamSpec, value: import('../GObject').Value): boolean;
/**
  * Compares value1 with value2 according to pspec, and return -1, 0 or +1, if value1 is found to be less than, equal to or greater than value2, respectively.
  * @param pspec a valid GObject.ParamSpec
  * @param value1 a GObject.Value of correct type for pspec
  * @param value2 a GObject.Value of correct type for pspec
  * @returns -1, 0 or +1, for a less than, equal to or greater than result 
  */
export declare function paramValuesCmp(pspec: import('../GObject').ParamSpec, value1: import('../GObject').Value, value2: import('../GObject').Value): number;
/**
  * Creates a new GObject.TYPE_POINTER derived type id for a new pointer type with name name.
  * @param name the name of the new pointer type.
  * @returns a new GObject.TYPE_POINTER derived type id for name. 
  */
export declare function pointerTypeRegisterStatic(name: string): import('../GObject').GType;
export declare function removeEmissionHook(): void;
/**
  * A predefined GObject.SignalAccumulator for signals intended to be used as a hook for application code to provide a particular value.  Usually only one such value is desired and multiple handlers for the same signal don’t make much sense (except for the case of the default handler defined in the class structure, in which case you will usually want the signal connection to override the class handler).
  * @param ihint standard GObject.SignalAccumulator parameter
  * @param returnAccu standard GObject.SignalAccumulator parameter
  * @param handlerReturn standard GObject.SignalAccumulator parameter
  * @param dummy standard GObject.SignalAccumulator parameter
  * @returns standard GObject.SignalAccumulator result 
  */
export declare function signalAccumulatorFirstWins(ihint: import('../GObject').SignalInvocationHint, returnAccu: import('../GObject').Value, handlerReturn: import('../GObject').Value, dummy: Object | null): boolean;
/**
  * A predefined GObject.SignalAccumulator for signals that return a boolean values. The behavior that this accumulator gives is that a return of True stops the signal emission: no further callbacks will be invoked, while a return of False allows the emission to continue. The idea here is that a True return indicates that the callback handled the signal, and no further handling is needed.
  * @param ihint standard GObject.SignalAccumulator parameter
  * @param returnAccu standard GObject.SignalAccumulator parameter
  * @param handlerReturn standard GObject.SignalAccumulator parameter
  * @param dummy standard GObject.SignalAccumulator parameter
  * @returns standard GObject.SignalAccumulator result 
  */
export declare function signalAccumulatorTrueHandled(ihint: import('../GObject').SignalInvocationHint, returnAccu: import('../GObject').Value, handlerReturn: import('../GObject').Value, dummy: Object | null): boolean;
/**
  * Adds an emission hook for a signal, which will get called for any emission of that signal, independent of the instance. This is possible only for signals which don’t have GObject.SignalFlags.NO_HOOKS flag set.
  * @param signalId the signal identifier, as returned by GObject.signal_lookup().
  * @param detail the detail on which to call the hook.
  * @param hookFunc a GObject.SignalEmissionHook function.
  * @param hookData user data for hook_func.
  * @returns the hook id, for later use with GObject.signal_remove_emission_hook(). 
  */
export declare function signalAddEmissionHook(signalId: number, detail: number, hookFunc: import('../GObject').signalEmissionHook, hookData: Object | null): number;
/**
  * Calls the original class closure of a signal. This function should only be called from an overridden class closure; see GObject.signal_override_class_closure() and g_signal_override_class_handler().
  * @param instanceAndParams the argument list of the signal emission. The first element in the array is a GObject.Value for the instance the signal is being emitted on. The rest are any arguments to be passed to the signal.
  * @param returnValue Location for the return value. 
  */
export declare function signalChainFromOverridden(instanceAndParams: import('../GObject').Value, returnValue: import('../GObject').Value): void;
/**
  * Connects a closure to a signal for a particular object.
  * @param instance the instance to connect to.
  * @param detailedSignal a string of the form “signal-name::detail”.
  * @param closure the closure to connect.
  * @param after whether the handler should be called before or after the default handler of the signal.
  * @returns the handler ID (always greater than 0 for successful connections) 
  */
export declare function signalConnectClosure(instance: import('../GObject').Object, detailedSignal: string, closure: import('../GObject').Closure, after: boolean): number;
/**
  * Connects a closure to a signal for a particular object.
  * @param instance the instance to connect to.
  * @param signalId the id of the signal.
  * @param detail the detail.
  * @param closure the closure to connect.
  * @param after whether the handler should be called before or after the default handler of the signal.
  * @returns the handler ID (always greater than 0 for successful connections) 
  */
export declare function signalConnectClosureById(instance: import('../GObject').Object, signalId: number, detail: number, closure: import('../GObject').Closure, after: boolean): number;
/**
  * Emits a signal.
  * @param instanceAndParams argument list for the signal emission. The first element in the array is a GObject.Value for the instance the signal is being emitted on. The rest are any arguments to be passed to the signal.
  * @param signalId the signal id
  * @param detail the detail
  * @param returnValue Location to store the return value of the signal emission. This must be provided if the specified signal returns a value, but may be ignored otherwise.
  * @returns Location to store the return value of the signal emission. This must be provided if the specified signal returns a value, but may be ignored otherwise. 
  */
export declare function signalEmitv(instanceAndParams: import('../GObject').Value, signalId: number, detail: number, returnValue: import('../GObject').Value): import('../GObject').Value;
/**
  * Returns the invocation hint of the innermost signal emission of instance.
  * @param instance the instance to query
  * @returns the invocation hint of the innermost signal  emission. 
  */
export declare function signalGetInvocationHint(instance: import('../GObject').Object): import('../GObject').SignalInvocationHint;
/**
  * Blocks the signal handler from being invoked until handler_unblock() is called.
  * @param obj Object instance to block handlers for.
  * @param handlerId Id of signal to block.
  * @returns A context manager which optionally can be used to automatically unblock the handler: 
  */
export declare function signalHandlerBlock(obj: import('../GObject').Object, handlerId: number): void;
/**
  * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to. The handler_id becomes invalid and may be reused.
  * @param instance The instance to remove the signal handler from.
  * @param handlerId Handler id of the handler to be disconnected. 
  */
export declare function signalHandlerDisconnect(instance: import('../GObject').Object, handlerId: number): void;
/**
  * Finds the first signal handler that matches certain selection criteria. The criteria mask is passed as an OR-ed combination of GObject.SignalMatchType flags, and the criteria values are passed as arguments. The match mask has to be non-0 for successful matches. If no handler was found, 0 is returned.
  * @param instance The instance owning the signal handler to be found.
  * @param mask Mask indicating which of signal_id, detail, closure, func and/or data the handler has to match.
  * @param signalId Signal the handler has to be connected to.
  * @param detail Signal detail the handler has to be connected to.
  * @param closure The closure the handler will invoke.
  * @param func The C closure callback of the handler (useless for non-C closures).
  * @param data The closure data of the handler’s closure.
  * @returns A valid non-0 signal handler id for a successful match. 
  */
export declare function signalHandlerFind(instance: import('../GObject').Object, mask: import('../GObject').SignalMatchType, signalId: number, detail: number, closure: import('../GObject').Closure | null, func: Object | null, data: Object | null): number;
/**
  * Returns whether handler_id is the ID of a handler connected to instance.
  * @param instance The instance where a signal handler is sought.
  * @param handlerId the handler ID.
  * @returns whether handler_id identifies a handler connected to instance. 
  */
export declare function signalHandlerIsConnected(instance: import('../GObject').Object, handlerId: number): boolean;
/**
  * Undoes the effect of a previous GObject.signal_handler_block() call.  A blocked handler is skipped during signal emissions and will not be invoked, unblocking it (for exactly the amount of times it has been blocked before) reverts its “blocked” state, so the handler will be recognized by the signal system and is called upon future or currently ongoing signal emissions (since the order in which handlers are called during signal emissions is deterministic, whether the unblocked handler in question is called as part of a currently ongoing emission depends on how far that emission has proceeded yet).
  * @param instance The instance to unblock the signal handler of.
  * @param handlerId Handler id of the handler to be unblocked. 
  */
export declare function signalHandlerUnblock(instance: import('../GObject').Object, handlerId: number): void;
/**
  * Blocks all handlers on an instance that match a certain selection criteria. The criteria mask is passed as an OR-ed combination of GObject.SignalMatchType flags, and the criteria values are passed as arguments. Passing at least one of the GObject.SignalMatchType.CLOSURE, GObject.SignalMatchType.FUNC or GObject.SignalMatchType.DATA match flags is required for successful matches. If no handlers were found, 0 is returned, the number of blocked handlers otherwise.
  * @param instance The instance to block handlers from.
  * @param mask Mask indicating which of signal_id, detail, closure, func and/or data the handlers have to match.
  * @param signalId Signal the handlers have to be connected to.
  * @param detail Signal detail the handlers have to be connected to.
  * @param closure The closure the handlers will invoke.
  * @param func The C closure callback of the handlers (useless for non-C closures).
  * @param data The closure data of the handlers’ closures.
  * @returns The number of handlers that matched. 
  */
export declare function signalHandlersBlockMatched(instance: import('../GObject').Object, mask: import('../GObject').SignalMatchType, signalId: number, detail: number, closure: import('../GObject').Closure | null, func: Object | null, data: Object | null): number;
/**
  * Destroy all signal handlers of a type instance. This function is an implementation detail of the GObject.Object dispose implementation, and should not be used outside of the type system.
  * @param instance The instance whose signal handlers are destroyed 
  */
export declare function signalHandlersDestroy(instance: import('../GObject').Object): void;
/**
  * Disconnects all handlers on an instance that match a certain selection criteria. The criteria mask is passed as an OR-ed combination of GObject.SignalMatchType flags, and the criteria values are passed as arguments.  Passing at least one of the GObject.SignalMatchType.CLOSURE, GObject.SignalMatchType.FUNC or GObject.SignalMatchType.DATA match flags is required for successful matches.  If no handlers were found, 0 is returned, the number of disconnected handlers otherwise.
  * @param instance The instance to remove handlers from.
  * @param mask Mask indicating which of signal_id, detail, closure, func and/or data the handlers have to match.
  * @param signalId Signal the handlers have to be connected to.
  * @param detail Signal detail the handlers have to be connected to.
  * @param closure The closure the handlers will invoke.
  * @param func The C closure callback of the handlers (useless for non-C closures).
  * @param data The closure data of the handlers’ closures.
  * @returns The number of handlers that matched. 
  */
export declare function signalHandlersDisconnectMatched(instance: import('../GObject').Object, mask: import('../GObject').SignalMatchType, signalId: number, detail: number, closure: import('../GObject').Closure | null, func: Object | null, data: Object | null): number;
/**
  * Unblocks all handlers on an instance that match a certain selection criteria. The criteria mask is passed as an OR-ed combination of GObject.SignalMatchType flags, and the criteria values are passed as arguments. Passing at least one of the GObject.SignalMatchType.CLOSURE, GObject.SignalMatchType.FUNC or GObject.SignalMatchType.DATA match flags is required for successful matches. If no handlers were found, 0 is returned, the number of unblocked handlers otherwise. The match criteria should not apply to any handlers that are not currently blocked.
  * @param instance The instance to unblock handlers from.
  * @param mask Mask indicating which of signal_id, detail, closure, func and/or data the handlers have to match.
  * @param signalId Signal the handlers have to be connected to.
  * @param detail Signal detail the handlers have to be connected to.
  * @param closure The closure the handlers will invoke.
  * @param func The C closure callback of the handlers (useless for non-C closures).
  * @param data The closure data of the handlers’ closures.
  * @returns The number of handlers that matched. 
  */
export declare function signalHandlersUnblockMatched(instance: import('../GObject').Object, mask: import('../GObject').SignalMatchType, signalId: number, detail: number, closure: import('../GObject').Closure | null, func: Object | null, data: Object | null): number;
/**
  * Returns whether there are any handlers connected to instance for the given signal id and detail.
  * @param instance the object whose signal handlers are sought.
  * @param signalId the signal id.
  * @param detail the detail.
  * @param mayBeBlocked whether blocked handlers should count as match.
  * @returns True if a handler is connected to the signal, False otherwise. 
  */
export declare function signalHasHandlerPending(instance: import('../GObject').Object, signalId: number, detail: number, mayBeBlocked: boolean): boolean;
/**
  * Lists the signals by id that a certain instance or interface type created. Further information about the signals can be acquired through GObject.signal_query().
  * @param itype Instance or interface type.
  * @returns Newly allocated array of signal IDs. 
  */
export declare function signalListIds(itype: import('../GObject').GType): number[];
/**
  * Returns a list of signal names for the given type
  * @returns A list of signal names 
  */
export declare function signalListNames(type: import('../GObject').GType): any[];
/**
  * Given the name of the signal and the type of object it connects to, gets the signal’s identifying integer. Emitting the signal by number is somewhat faster than using the name each time.
  * @param name the signal’s name.
  * @param itype the type that the signal operates on.
  * @returns the signal’s identifying number, or 0 if no signal was found. 
  */
export declare function signalLookup(name: string, itype: import('../GObject').GType): number;
/**
  * Given the signal’s identifier, finds its name.
  * @param signalId the signal’s identifying number.
  * @returns the signal name, or None if the signal number was invalid. 
  */
export declare function signalName(signalId: number): string;
/**
  * The GObject.signal_new() function registers a signal with the specified signal_name for the specified object type.
  * @param signalName the name of the signal
  * @param type a Python GObject instance or type that the signal is associated with
  * @param flags the signal flags
  * @param returnType the return type of the signal handler
  * @param paramTypes the parameter types passed to the signal handler
  * @returns a unique integer signal ID 
  */
export declare function signalNew(signalName: string, type: import('../GObject').Object, flags: import('../GObject').SignalFlags, returnType, paramTypes): number;
/**
  * Overrides the class closure (i.e. the default handler) for the given signal for emissions on instances of instance_type. instance_type must be derived from the type to which the signal belongs.
  * @param signalId the signal id
  * @param instanceType the instance type on which to override the class closure for the signal.
  * @param classClosure the closure. 
  */
export declare function signalOverrideClassClosure(signalId: number, instanceType: import('../GObject').GType, classClosure: import('../GObject').Closure): void;
/**
  * Parse a detailed signal name into (signal_id, detail).
  * @param detailedSignal Signal name which can include detail. For example: “notify:prop_name”
  * @returns Tuple of (signal_id, detail) 
  */
export declare function signalParseName(detailedSignal: string): void;
/**
  * Queries the signal system for in-depth information about a specific signal. This function will fill in a user-provided structure to hold signal-specific information. If an invalid signal id is passed in, the signal_id member of the GObject.SignalQuery is 0. All members filled into the GObject.SignalQuery structure should be considered constant and have to be left untouched.
  * @param signalId The signal id of the signal to query information for.
  * @returns A user provided structure that is filled in with constant values upon success. 
  */
export declare function signalQuery(signalId: number): import('../GObject').SignalQuery;
/**
  * Deletes an emission hook.
  * @param signalId the id of the signal
  * @param hookId the id of the emission hook, as returned by GObject.signal_add_emission_hook() 
  */
export declare function signalRemoveEmissionHook(signalId: number, hookId: number): void;
/**
  * Stops a signal’s current emission.
  * @param instance the object whose signal handlers you wish to stop.
  * @param signalId the signal identifier, as returned by GObject.signal_lookup().
  * @param detail the detail which the signal was emitted with. 
  */
export declare function signalStopEmission(instance: import('../GObject').Object, signalId: number, detail: number): void;
/**
  * Stops a signal’s current emission.
  * @param instance the object whose signal handlers you wish to stop.
  * @param detailedSignal a string of the form “signal-name::detail”. 
  */
export declare function signalStopEmissionByName(instance: import('../GObject').Object, detailedSignal: string): void;
/**
  * Creates a new closure which invokes the function found at the offset struct_offset in the class structure of the interface or classed type identified by itype.
  * @param itype the GObject.GType identifier of an interface or classed type
  * @param structOffset the offset of the member function of itype’s class structure which is to be invoked by the new closure
  * @returns a floating reference to a new GObject.CClosure 
  */
export declare function signalTypeCclosureNew(itype: import('../GObject').GType, structOffset: number): import('../GObject').Closure;
/**
  * Set the callback for a source as a GObject.Closure.
  * @param source the source
  * @param closure a GObject.Closure 
  */
export declare function sourceSetClosure(source: import('../GLib').Source, closure: import('../GObject').Closure): void;
/**
  * Sets a dummy callback for source. The callback will do nothing, and if the source expects a bool return value, it will return True. (If the source expects any other type of return value, it will return a 0/None value; whatever GObject.Value.init() initializes a GObject.Value to for that type.)
  * @param source the source 
  */
export declare function sourceSetDummyCallback(source: import('../GLib').Source): void;
/**
  * Return a newly allocated string, which describes the contents of a GObject.Value.  The main purpose of this function is to describe GObject.Value contents for debugging output, the way in which the contents are described may change between different GLib versions.
  * @param value GObject.Value which contents are to be described.
  * @returns Newly allocated string. 
  */
export declare function strdupValueContents(value: import('../GObject').Value): string;
/**
  * Registers a private class structure for a classed type; when the class is allocated, the private structures for the class and all of its parent types are allocated sequentially in the same memory block as the public structures, and are zero-filled.
  * @param classType GObject.GType of an classed type
  * @param privateSize size of private structure 
  */
export declare function typeAddClassPrivate(classType: import('../GObject').GType, privateSize: number): void;
export declare function typeAddInstancePrivate(classType: import('../GObject').GType, privateSize: number): number;
/**
  * Adds the dynamic interface_type to instantiable_type. The information contained in the GObject.TypePlugin structure pointed to by plugin is used to manage the relationship.
  * @param instanceType GObject.GType value of an instantiable type
  * @param interfaceType GObject.GType value of an interface type
  * @param plugin GObject.TypePlugin structure to retrieve the GObject.InterfaceInfo from 
  */
export declare function typeAddInterfaceDynamic(instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType, plugin: import('../GObject').TypePlugin): void;
/**
  * Adds the static interface_type to instantiable_type. The information contained in the GObject.InterfaceInfo structure pointed to by info is used to manage the relationship.
  * @param instanceType GObject.GType value of an instantiable type
  * @param interfaceType GObject.GType value of an interface type
  * @param info GObject.InterfaceInfo structure for this (instance_type, interface_type) combination 
  */
export declare function typeAddInterfaceStatic(instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType, info: import('../GObject').InterfaceInfo): void;
export declare function typeCheckClassIsA(gClass: import('../GObject').TypeClass, isAType: import('../GObject').GType): boolean;
/**
  * Private helper function to aid implementation of the G_TYPE_CHECK_INSTANCE() macro.
  * @param instance a valid GObject.TypeInstance structure
  * @returns True if instance is valid, False otherwise 
  */
export declare function typeCheckInstance(instance: import('../GObject').TypeInstance): boolean;
export declare function typeCheckInstanceIsA(instance: import('../GObject').TypeInstance, ifaceType: import('../GObject').GType): boolean;
export declare function typeCheckInstanceIsFundamentallyA(instance: import('../GObject').TypeInstance, fundamentalType: import('../GObject').GType): boolean;
export declare function typeCheckIsValueType(type: import('../GObject').GType): boolean;
export declare function typeCheckValue(value: import('../GObject').Value): boolean;
export declare function typeCheckValueHolds(value: import('../GObject').Value, type: import('../GObject').GType): boolean;
/**
  * Return a newly allocated and 0-terminated array of type IDs, listing the child types of type.
  * @param type the parent type
  * @returns Newly allocated and 0-terminated array of child types, free with GLib.free() 
  */
export declare function typeChildren(type: import('../GObject').GType): import('../GObject').GType[];
export declare function typeClassAdjustPrivateOffset(gClass: Object | null, privateSizeOrOffset: number): void;
/**
  * This function is essentially the same as GObject.TypeClass.ref(), except that the classes reference count isn’t incremented. As a consequence, this function may return None if the class of the type passed in does not currently exist (hasn’t been referenced before).
  * @param type type ID of a classed type
  * @returns the GObject.TypeClass structure for the given type ID or None if the class does not currently exist 
  */
export declare function typeClassPeek(type: import('../GObject').GType): import('../GObject').TypeClass;
/**
  * A more efficient version of GObject.TypeClass.peek() which works only for static types.
  * @param type type ID of a classed type
  * @returns the GObject.TypeClass structure for the given type ID or None if the class does not currently exist or is dynamically loaded 
  */
export declare function typeClassPeekStatic(type: import('../GObject').GType): import('../GObject').TypeClass;
/**
  * Increments the reference count of the class structure belonging to type. This function will demand-create the class if it doesn’t exist already.
  * @param type type ID of a classed type
  * @returns the GObject.TypeClass structure for the given type ID 
  */
export declare function typeClassRef(type: import('../GObject').GType): import('../GObject').TypeClass;
/**
  * If the interface type g_type is currently in use, returns its default interface vtable.
  * @param gType an interface type
  * @returns the default vtable for the interface, or None if the type is not currently in use 
  */
export declare function typeDefaultInterfacePeek(gType: import('../GObject').GType): import('../GObject').TypeInterface;
/**
  * Increments the reference count for the interface type g_type, and returns the default interface vtable for the type.
  * @param gType an interface type
  * @returns the default vtable for the interface; call GObject.type_default_interface_unref() when you are done using the interface. 
  */
export declare function typeDefaultInterfaceRef(gType: import('../GObject').GType): import('../GObject').TypeInterface;
/**
  * Decrements the reference count for the type corresponding to the interface default vtable g_iface. If the type is dynamic, then when no one is using the interface and all references have been released, the finalize function for the interface’s default vtable (the class_finalize member of GObject.TypeInfo) will be called.
  * @param gIface the default vtable structure for a interface, as returned by GObject.type_default_interface_ref() 
  */
export declare function typeDefaultInterfaceUnref(gIface: import('../GObject').TypeInterface): void;
/**
  * Returns the length of the ancestry of the passed in type. This includes the type itself, so that e.g. a fundamental type has depth 1.
  * @param type a GObject.GType
  * @returns the depth of type 
  */
export declare function typeDepth(type: import('../GObject').GType): number;
/**
  * Ensures that the indicated type has been registered with the type system, and its _class_init() method has been run.
  * @param type a GObject.GType 
  */
export declare function typeEnsure(type: import('../GObject').GType): void;
/**
  * Frees an instance of a type, returning it to the instance pool for the type, if there is one.
  * @param instance an instance of a type 
  */
export declare function typeFreeInstance(instance: import('../GObject').TypeInstance): void;
/**
  * Lookup the type ID from a given type name, returning 0 if no type has been registered under this name (this is the preferred method to find out by name whether a specific type has been registered yet).
  * @param name type name to lookup
  * @returns corresponding type ID or 0 
  */
export declare function typeFromName(name: string): import('../GObject').GType;
/**
  * Internal function, used to extract the fundamental type ID portion. Use G_TYPE_FUNDAMENTAL() instead.
  * @param typeId valid type ID
  * @returns fundamental type ID 
  */
export declare function typeFundamental(typeId: import('../GObject').GType): import('../GObject').GType;
/**
  * Returns the next free fundamental type id which can be used to register a new fundamental type with GObject.type_register_fundamental(). The returned type ID represents the highest currently registered fundamental type identifier.
  * @returns the next available fundamental type ID to be registered, or 0 if the type system ran out of fundamental type IDs 
  */
export declare function typeFundamentalNext(): import('../GObject').GType;
/**
  * Returns the number of instances allocated of the particular type; this is only available if GLib is built with debugging support and the instance_count debug flag is set (by setting the GOBJECT_DEBUG variable to include instance-count).
  * @param type a GObject.GType
  * @returns the number of instances allocated of the given type; if instance counts are not available, returns 0. 
  */
export declare function typeGetInstanceCount(type: import('../GObject').GType): number;
/**
  * Returns the GObject.TypePlugin structure for type.
  * @param type GObject.GType to retrieve the plugin for
  * @returns the corresponding plugin if type is a dynamic type, None otherwise 
  */
export declare function typeGetPlugin(type: import('../GObject').GType): import('../GObject').TypePlugin;
/**
  * Obtains data which has previously been attached to type with GObject.type_set_qdata().
  * @param type a GObject.GType
  * @param quark a #GQuark id to identify the data
  * @returns the data, or None if no data was found 
  */
export declare function typeGetQdata(type: import('../GObject').GType, quark: number): Object | null;
/**
  * Returns an opaque serial number that represents the state of the set of registered types. Any time a type is registered this serial changes, which means you can cache information based on type lookups (such as GObject.type_from_name()) and know if the cache is still valid at a later time by comparing the current serial with the one at the type lookup.
  * @returns An unsigned int, representing the state of type registrations 
  */
export declare function typeGetTypeRegistrationSerial(): number;
/**
  * This function used to initialise the type system.  Since GLib 2.36, the type system is initialised automatically and this function does nothing. 
  */
export declare function typeInit(): void;
/**
  * This function used to initialise the type system with debugging flags.  Since GLib 2.36, the type system is initialised automatically and this function does nothing.
  * @param debugFlags bitwise combination of GObject.TypeDebugFlags values for debugging purposes 
  */
export declare function typeInitWithDebugFlags(debugFlags: import('../GObject').TypeDebugFlags): void;
/**
  * Adds prerequisite_type to the list of prerequisites of interface_type. This means that any type implementing interface_type must also implement prerequisite_type. Prerequisites can be thought of as an alternative to interface derivation (which GObject.GType doesn’t support). An interface can have at most one instantiatable prerequisite type.
  * @param interfaceType GObject.GType value of an interface type
  * @param prerequisiteType GObject.GType value of an interface or instantiatable type 
  */
export declare function typeInterfaceAddPrerequisite(interfaceType: import('../GObject').GType, prerequisiteType: import('../GObject').GType): void;
/**
  * Returns the GObject.TypePlugin structure for the dynamic interface interface_type which has been added to instance_type, or None if interface_type has not been added to instance_type or does not have a GObject.TypePlugin structure. See GObject.type_add_interface_dynamic().
  * @param instanceType GObject.GType of an instantiatable type
  * @param interfaceType GObject.GType of an interface type
  * @returns the GObject.TypePlugin for the dynamic interface interface_type of instance_type 
  */
export declare function typeInterfaceGetPlugin(instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType): import('../GObject').TypePlugin;
/**
  * Returns the GObject.TypeInterface structure of an interface to which the passed in class conforms.
  * @param instanceClass a GObject.TypeClass structure
  * @param ifaceType an interface ID which this class conforms to
  * @returns the GObject.TypeInterface structure of iface_type if implemented by instance_class, None otherwise 
  */
export declare function typeInterfacePeek(instanceClass: import('../GObject').TypeClass, ifaceType: import('../GObject').GType): import('../GObject').TypeInterface;
/**
  * Returns the prerequisites of an interfaces type.
  * @param interfaceType an interface type
  * @returns a newly-allocated zero-terminated array of GObject.GType containing the prerequisites of interface_type 
  */
export declare function typeInterfacePrerequisites(interfaceType: import('../GObject').GType): import('../GObject').GType[];
/**
  * Return a newly allocated and 0-terminated array of type IDs, listing the interface types that type conforms to.
  * @param type the type to list interface types for
  * @returns Newly allocated and 0-terminated array of interface types, free with GLib.free() 
  */
export declare function typeInterfaces(type: import('../GObject').GType): import('../GObject').GType[];
/**
  * If is_a_type is a derivable type, check whether type is a descendant of is_a_type. If is_a_type is an interface, check whether type conforms to it.
  * @param type type to check anchestry for
  * @param isAType possible anchestor of type or interface that type could conform to
  * @returns True if type is a is_a_type 
  */
export declare function typeIsA(type: import('../GObject').GType, isAType: import('../GObject').GType): boolean;
/**
  * Get the unique name that is assigned to a type ID.  Note that this function (like all other GObject.GType API) cannot cope with invalid type IDs. GObject.TYPE_INVALID may be passed to this function, as may be any other validly registered type ID, but randomized type IDs should not be passed in and will most likely lead to a crash.
  * @param type type to return name for
  * @returns static type name or None 
  */
export declare function typeName(type: import('../GObject').GType): string;
export declare function typeNameFromClass(gClass: import('../GObject').TypeClass): string;
export declare function typeNameFromInstance(instance: import('../GObject').TypeInstance): string;
/**
  * Given a leaf_type and a root_type which is contained in its anchestry, return the type that root_type is the immediate parent of. In other words, this function determines the type that is derived directly from root_type which is also a base class of leaf_type.  Given a root type and a leaf type, this function can be used to determine the types and order in which the leaf type is descended from the root type.
  * @param leafType descendant of root_type and the type to be returned
  * @param rootType immediate parent of the returned type
  * @returns immediate child of root_type and anchestor of leaf_type 
  */
export declare function typeNextBase(leafType: import('../GObject').GType, rootType: import('../GObject').GType): import('../GObject').GType;
/**
  * Return the direct parent type of the passed in type. If the passed in type has no parent, i.e. is a fundamental type, 0 is returned.
  * @param type the derived type
  * @returns the parent type 
  */
export declare function typeParent(type: import('../GObject').GType): import('../GObject').GType;
/**
  * Get the corresponding quark of the type IDs name.
  * @param type type to return quark of type name for
  * @returns the type names quark or 0 
  */
export declare function typeQname(type: import('../GObject').GType): number;
/**
  * Queries the type system for information about a specific type. This function will fill in a user-provided structure to hold type-specific information. If an invalid GObject.GType is passed in, the type member of the GObject.TypeQuery is 0. All members filled into the GObject.TypeQuery structure should be considered constant and have to be left untouched.
  * @param type GObject.GType of a static, classed type
  * @returns a user provided structure that is filled in with constant values upon success 
  */
export declare function typeQuery(type: import('../GObject').GType): import('../GObject').TypeQuery;
/**
  * The GObject.type_register() function registers the specified Python class as a GObject type. class_ must be a descendant of GObject.Object. The function generates a name for the new type.
  * @param class class – a Python class that is a descendant of GObject.Object 
  */
export declare function typeRegister(klass: any): void;
/**
  * Registers type_name as the name of a new dynamic type derived from parent_type.  The type system uses the information contained in the GObject.TypePlugin structure pointed to by plugin to manage the type and its instances (if not abstract).  The value of flags determines the nature (e.g. abstract or not) of the type.
  * @param parentType type from which this type will be derived
  * @param typeName 0-terminated string used as the name of the new type
  * @param plugin GObject.TypePlugin structure to retrieve the GObject.TypeInfo from
  * @param flags bitwise combination of GObject.TypeFlags values
  * @returns the new type identifier or GObject.TYPE_INVALID if registration failed 
  */
export declare function typeRegisterDynamic(parentType: import('../GObject').GType, typeName: string, plugin: import('../GObject').TypePlugin, flags: import('../GObject').TypeFlags): import('../GObject').GType;
/**
  * Registers type_id as the predefined identifier and type_name as the name of a fundamental type. If type_id is already registered, or a type named type_name is already registered, the behaviour is undefined. The type system uses the information contained in the GObject.TypeInfo structure pointed to by info and the GObject.TypeFundamentalInfo structure pointed to by finfo to manage the type and its instances. The value of flags determines additional characteristics of the fundamental type.
  * @param typeId a predefined type identifier
  * @param typeName 0-terminated string used as the name of the new type
  * @param info GObject.TypeInfo structure for this type
  * @param finfo GObject.TypeFundamentalInfo structure for this type
  * @param flags bitwise combination of GObject.TypeFlags values
  * @returns the predefined type identifier 
  */
export declare function typeRegisterFundamental(typeId: import('../GObject').GType, typeName: string, info: import('../GObject').TypeInfo, finfo: import('../GObject').TypeFundamentalInfo, flags: import('../GObject').TypeFlags): import('../GObject').GType;
/**
  * Registers type_name as the name of a new static type derived from parent_type. The type system uses the information contained in the GObject.TypeInfo structure pointed to by info to manage the type and its instances (if not abstract). The value of flags determines the nature (e.g. abstract or not) of the type.
  * @param parentType type from which this type will be derived
  * @param typeName 0-terminated string used as the name of the new type
  * @param info GObject.TypeInfo structure for this type
  * @param flags bitwise combination of GObject.TypeFlags values
  * @returns the new type identifier 
  */
export declare function typeRegisterStatic(parentType: import('../GObject').GType, typeName: string, info: import('../GObject').TypeInfo, flags: import('../GObject').TypeFlags): import('../GObject').GType;
/**
  * Attaches arbitrary data to a type.
  * @param type a GObject.GType
  * @param quark a #GQuark id to identify the data
  * @param data the data 
  */
export declare function typeSetQdata(type: import('../GObject').GType, quark: number, data: Object | null): void;
export declare function typeTestFlags(type: import('../GObject').GType, flags: number): boolean;
/**
  * Returns whether a GObject.Value of type src_type can be copied into a GObject.Value of type dest_type.
  * @param srcType source type to be copied.
  * @param destType destination type for copying.
  * @returns True if GObject.Value.copy() is possible with src_type and dest_type. 
  */
export declare function valueTypeCompatible(srcType: import('../GObject').GType, destType: import('../GObject').GType): boolean;
/**
  * Check whether GObject.Value.transform() is able to transform values of type src_type into values of type dest_type. Note that for the types to be transformable, they must be compatible or a transformation function must be registered.
  * @param srcType Source type.
  * @param destType Target type.
  * @returns True if the transformation is possible, False otherwise. 
  */
export declare function valueTypeTransformable(srcType: import('../GObject').GType, destType: import('../GObject').GType): boolean;
