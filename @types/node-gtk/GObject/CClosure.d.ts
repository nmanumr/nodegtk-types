/**
  * A GObject.CClosure is a specialization of GObject.Closure for C function callbacks. 
  */
export declare class CClosure {
  /**
    * A GObject.ClosureMarshal function for use with signals with handlers that take two boxed pointers as arguments and return a boolean.  If you have such a signal, you will probably also need to use an accumulator, such as GObject.signal_accumulator_true_handled().
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalBooleanBoxedBoxed(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with handlers that take a flags type as an argument and return a boolean.  If you have such a signal, you will probably also need to use an accumulator, such as GObject.signal_accumulator_true_handled().
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalBooleanFlags(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with handlers that take a GObject.Object and a pointer and produce a string.  It is highly unlikely that your signal handler fits this description.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalStringObjectPointer(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single boolean argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidBoolean(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single argument which is any boxed pointer type.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidBoxed(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single character argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidChar(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with one double-precision floating point argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidDouble(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single argument with an enumerated type.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidEnum(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single argument with a flags types.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidFlags(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with one single-precision floating point argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidFloat(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single integer argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidInt(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with with a single long integer argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidLong(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single GObject.Object argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidObject(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single argument of type GObject.ParamSpec.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidParam(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single raw pointer argument type.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidPointer(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single string argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidString(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single unsigned character argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidUchar(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with with a single unsigned integer argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidUint(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a unsigned int and a pointer as arguments.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidUintPointer(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single unsigned long integer argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidUlong(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with a single GLib.Variant argument.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidVariant(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A GObject.ClosureMarshal function for use with signals with no arguments.
    * @param closure A GObject.Closure.
    * @param returnValue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalVoidVoid(closure: import('../GObject').Closure, returnValue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
  /**
    * A generic marshaller function implemented via libffi.
    * @param closure A GObject.Closure.
    * @param returnGvalue A GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
    * @param nParamValues The length of the param_values array.
    * @param paramValues An array of GObject.Values holding the arguments on which to invoke the callback of closure.
    * @param invocationHint The invocation hint given as the last argument to GObject.Closure.invoke().
    * @param marshalData Additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
    */
  static marshalGeneric(closure: import('../GObject').Closure, returnGvalue: import('../GObject').Value, nParamValues: number, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null): void;
}

