/**
  * A callback function used by the type system to finalize those portions of a derived types class structure that were setup from the corresponding GObject.BaseInitFunc() function. Class finalization basically works the inverse way in which class initialization is performed. See GObject.ClassInitFunc() for a discussion of the class initialization process.
  * @param gClass The GObject.TypeClass structure to finalize 
  */
export declare type baseFinalizeFunc = (gClass: import('../GObject').TypeClass) => void;
/**
  * A callback function used by the type system to do base initialization of the class structures of derived types. It is called as part of the initialization process of all derived classes and should reallocate or reset all dynamic class members copied over from the parent class. For example, class members (such as strings) that are not sufficiently handled by a plain memory copy of the parent class into the derived class have to be altered. See GObject.ClassInitFunc() for a discussion of the class initialization process.
  * @param gClass The GObject.TypeClass structure to initialize 
  */
export declare type baseInitFunc = (gClass: import('../GObject').TypeClass) => void;
/**
  * A function to be called to transform from_value to to_value. If this is the transform_to function of a binding, then from_value is the source_property on the source object, and to_value is the target_property on the target object. If this is the transform_from function of a GObject.BindingFlags.BIDIRECTIONAL binding, then those roles are reversed.
  * @param binding a GObject.Binding
  * @param fromValue the GObject.Value containing the value to transform
  * @param toValue the GObject.Value in which to store the transformed value
  * @param userData data passed to the transform function
  * @returns True if the transformation was successful, and False otherwise 
  */
export declare type bindingTransformFunc = (binding: import('../GObject').Binding, fromValue: import('../GObject').Value, toValue: import('../GObject').Value, userData: Object | null) => boolean;
/**
  * This function is provided by the user and should produce a copy of the passed in boxed structure.
  * @param boxed The boxed structure to be copied.
  * @returns The newly created copy of the boxed structure. 
  */
export declare type boxedCopyFunc = (boxed: Object) => Object;
/**
  * This function is provided by the user and should free the boxed structure passed.
  * @param boxed The boxed structure to be freed. 
  */
export declare type boxedFreeFunc = (boxed: Object) => void;
/**
  * The type used for callback functions in structure definitions and function signatures. This doesn’t mean that all callback functions must take no parameters and return void. The required signature of a callback function is determined by the context in which is used (e.g. the signal to which it is connected). Use G_CALLBACK() to cast the callback function to a GObject.Callback. 
  */
export declare type callback = () => void;
/**
  * A callback function used by the type system to finalize a class. This function is rarely needed, as dynamically allocated class resources should be handled by GObject.BaseInitFunc() and GObject.BaseFinalizeFunc(). Also, specification of a GObject.ClassFinalizeFunc() in the GObject.TypeInfo structure of a static type is invalid, because classes of static types will never be finalized (they are artificially kept alive when their reference count drops to zero).
  * @param gClass The GObject.TypeClass structure to finalize
  * @param classData The class_data member supplied via the GObject.TypeInfo structure 
  */
export declare type classFinalizeFunc = (gClass: import('../GObject').TypeClass, classData: Object | null) => void;
/**
  * A callback function used by the type system to initialize the class of a specific type. This function should initialize all static class members.
  * @param gClass The GObject.TypeClass structure to initialize.
  * @param classData The class_data member supplied via the GObject.TypeInfo structure. 
  */
export declare type classInitFunc = (gClass: import('../GObject').TypeClass, classData: Object | null) => void;
/**
  * The type used for marshaller functions.
  * @param closure the GObject.Closure to which the marshaller belongs
  * @param returnValue a GObject.Value to store the return value. May be None if the callback of closure doesn’t return a value.
  * @param paramValues an array of GObject.Values holding the arguments on which to invoke the callback of closure
  * @param invocationHint the invocation hint given as the last argument to GObject.Closure.invoke()
  * @param marshalData additional data specified when registering the marshaller, see g_closure_set_marshal() and g_closure_set_meta_marshal() 
  */
export declare type closureMarshal = (closure: import('../GObject').Closure, returnValue: import('../GObject').Value | null, paramValues: import('../GObject').Value, invocationHint: Object | null, marshalData: Object | null) => void;
/**
  * The type used for the various notification callbacks which can be registered on closures.
  * @param data data specified when registering the notification callback
  * @param closure the GObject.Closure on which the notification is emitted 
  */
export declare type closureNotify = (data: Object | null, closure: import('../GObject').Closure) => void;
/**
  * A callback function used by the type system to initialize a new instance of a type. This function initializes all instance members and allocates any resources required by it.
  * @param instance The instance to initialize
  * @param gClass The class of the type the instance is created for 
  */
export declare type instanceInitFunc = (instance: import('../GObject').TypeInstance, gClass: import('../GObject').TypeClass) => void;
/**
  * A callback function used by the type system to finalize an interface. This function should destroy any internal data and release any resources allocated by the corresponding GObject.InterfaceInitFunc() function.
  * @param gIface The interface structure to finalize
  * @param ifaceData The interface_data supplied via the GObject.InterfaceInfo structure 
  */
export declare type interfaceFinalizeFunc = (gIface: import('../GObject').TypeInterface, ifaceData: Object | null) => void;
/**
  * A callback function used by the type system to initialize a new interface.  This function should initialize all internal data and allocate any resources required by the interface.
  * @param gIface The interface structure to initialize
  * @param ifaceData The interface_data supplied via the GObject.InterfaceInfo structure 
  */
export declare type interfaceInitFunc = (gIface: import('../GObject').TypeInterface, ifaceData: Object | null) => void;
/**
  * The type of the finalize function of GObject.ObjectClass.
  * @param object the GObject.Object being finalized 
  */
export declare type objectFinalizeFunc = (object: import('../GObject').Object) => void;
/**
  * The type of the get_property function of GObject.ObjectClass.
  * @param object a GObject.Object
  * @param propertyId the numeric id under which the property was registered with GObject.ObjectClass.install_property().
  * @param value a GObject.Value to return the property value in
  * @param pspec the GObject.ParamSpec describing the property 
  */
export declare type objectGetPropertyFunc = (object: import('../GObject').Object, propertyId: number, value: import('../GObject').Value, pspec: import('../GObject').ParamSpec) => void;
/**
  * The type of the set_property function of GObject.ObjectClass.
  * @param object a GObject.Object
  * @param propertyId the numeric id under which the property was registered with GObject.ObjectClass.install_property().
  * @param value the new value for the property
  * @param pspec the GObject.ParamSpec describing the property 
  */
export declare type objectSetPropertyFunc = (object: import('../GObject').Object, propertyId: number, value: import('../GObject').Value, pspec: import('../GObject').ParamSpec) => void;
/**
  * The signal accumulator is a special callback function that can be used to collect return values of the various callbacks that are called during a signal emission. The signal accumulator is specified at signal creation time, if it is left None, no accumulation of callback return values is performed. The return value of signal emissions is then the value returned by the last callback.
  * @param ihint Signal invocation hint, see GObject.SignalInvocationHint.
  * @param returnAccu Accumulator to collect callback return values in, this is the return value of the current signal emission.
  * @param handlerReturn A GObject.Value holding the return value of the signal handler.
  * @param data Callback data that was specified when creating the signal.
  * @returns The accumulator function returns whether the signal emission should be aborted. Returning False means to abort the current emission and True is returned for continuation. 
  */
export declare type signalAccumulator = (ihint: import('../GObject').SignalInvocationHint, returnAccu: import('../GObject').Value, handlerReturn: import('../GObject').Value, data: Object | null) => boolean;
/**
  * A simple function pointer to get invoked when the signal is emitted. This allows you to tie a hook to the signal type, so that it will trap all emissions of that signal, from any object.
  * @param ihint Signal invocation hint, see GObject.SignalInvocationHint.
  * @param paramValues the instance on which the signal was emitted, followed by the parameters of the emission.
  * @param data user data associated with the hook.
  * @returns whether it wants to stay connected. If it returns False, the signal hook is disconnected (and destroyed). 
  */
export declare type signalEmissionHook = (ihint: import('../GObject').SignalInvocationHint, paramValues: import('../GObject').Value, data: Object | null) => boolean;
/**
  * A callback function used for notification when the state of a toggle reference changes. See g_object_add_toggle_ref().
  * @param data Callback data passed to g_object_add_toggle_ref()
  * @param object The object on which g_object_add_toggle_ref() was called.
  * @param isLastRef True if the toggle reference is now the last reference to the object. False if the toggle reference was the last reference and there are now other references. 
  */
export declare type toggleNotify = (data: Object | null, object: import('../GObject').Object, isLastRef: boolean) => void;
/**
  * A callback function which is called when the reference count of a class drops to zero. It may use GObject.TypeClass.ref() to prevent the class from being freed. You should not call GObject.TypeClass.unref() from a GObject.TypeClassCacheFunc function to prevent infinite recursion, use g_type_class_unref_uncached() instead.
  * @param cacheData data that was given to the g_type_add_class_cache_func() call
  * @param gClass The GObject.TypeClass structure which is unreferenced
  * @returns True to stop further GObject.TypeClassCacheFuncs from being called, False to continue 
  */
export declare type typeClassCacheFunc = (cacheData: Object | null, gClass: import('../GObject').TypeClass) => boolean;
/**
  * A callback called after an interface vtable is initialized. See g_type_add_interface_check().
  * @param checkData data passed to g_type_add_interface_check()
  * @param gIface the interface that has been initialized 
  */
export declare type typeInterfaceCheckFunc = (checkData: Object | null, gIface: import('../GObject').TypeInterface) => void;
/**
  * The type of the complete_interface_info function of GObject.TypePluginClass.
  * @param plugin the GObject.TypePlugin
  * @param instanceType the GObject.GType of an instantiable type to which the interface is added
  * @param interfaceType the GObject.GType of the interface whose info is completed
  * @param info the GObject.InterfaceInfo to fill in 
  */
export declare type typePluginCompleteInterfaceInfo = (plugin: import('../GObject').TypePlugin, instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType, info: import('../GObject').InterfaceInfo) => void;
/**
  * The type of the complete_type_info function of GObject.TypePluginClass.
  * @param plugin the GObject.TypePlugin
  * @param gType the GObject.GType whose info is completed
  * @param info the GObject.TypeInfo struct to fill in
  * @param valueTable the GObject.TypeValueTable to fill in 
  */
export declare type typePluginCompleteTypeInfo = (plugin: import('../GObject').TypePlugin, gType: import('../GObject').GType, info: import('../GObject').TypeInfo, valueTable: import('../GObject').TypeValueTable) => void;
/**
  * The type of the unuse_plugin function of GObject.TypePluginClass.
  * @param plugin the GObject.TypePlugin whose use count should be decreased 
  */
export declare type typePluginUnuse = (plugin: import('../GObject').TypePlugin) => void;
/**
  * The type of the use_plugin function of GObject.TypePluginClass, which gets called to increase the use count of plugin.
  * @param plugin the GObject.TypePlugin whose use count should be increased 
  */
export declare type typePluginUse = (plugin: import('../GObject').TypePlugin) => void;
/**
  * The type of value transformation functions which can be registered with g_value_register_transform_func().
  * @param srcValue Source value.
  * @param destValue Target value. 
  */
export declare type valueTransform = (srcValue: import('../GObject').Value, destValue: import('../GObject').Value) => void;
/**
  * A GObject.WeakNotify function can be added to an object as a callback that gets triggered when the object is finalized. Since the object is already being finalized when the GObject.WeakNotify is called, there’s not much you could do with the object, apart from e.g. using its address as hash-index or the like.
  * @param data data that was provided when the weak reference was established
  * @param whereTheObjectWas the object being finalized 
  */
export declare type weakNotify = (data: Object | null, whereTheObjectWas: import('../GObject').Object) => void;
