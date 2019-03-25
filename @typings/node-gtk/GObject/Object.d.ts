/**
  * All the fields in the GObject.Object structure are private
to the GObject.Object implementation and should never be accessed directly. 
  */
export declare class Object {
static compatControl(what: number, data: Object | null): number;
/**
  * Looks up the GObject.ParamSpec for a property of a class.
  * @param propertyName the name of the property to look up
  * @returns the GObject.ParamSpec for the property, or None if the class doesn’t have a property of that name 
  */
static findProperty(propertyName: string): import('../GObject').ParamSpec;
/**
  * Installs new properties from an array of GObject.ParamSpecs.
  * @param pspecs the GObject.ParamSpecs array defining the new properties 
  */
static installProperties(pspecs: import('../GObject').ParamSpec): void;
/**
  * Installs a new property.
  * @param propertyId the id for the new property
  * @param pspec the GObject.ParamSpec for the new property 
  */
static installProperty(propertyId: number, pspec: import('../GObject').ParamSpec): void;
/**
  * Find the GObject.ParamSpec with the given name for an interface. Generally, the interface vtable passed in as g_iface will be the default vtable from GObject.type_default_interface_ref(), or, if you know the interface has already been loaded, GObject.type_default_interface_peek().
  * @param gIface any interface vtable for the interface, or the default vtable for the interface
  * @param propertyName name of a property to lookup.
  * @returns the GObject.ParamSpec for the property of the interface with the name property_name, or None if no such property exists. 
  */
static interfaceFindProperty(gIface: import('../GObject').TypeInterface, propertyName: string): import('../GObject').ParamSpec;
/**
  * Add a property to an interface; this is only useful for interfaces that are added to GObject.Object-derived types. Adding a property to an interface forces all objects classes with that interface to have a compatible property. The compatible property could be a newly created GObject.ParamSpec, but normally GObject.ObjectClass.override_property() will be used so that the object class only needs to provide an implementation and inherits the property description, default value, bounds, and so forth from the interface property.
  * @param gIface any interface vtable for the interface, or the default vtable for the interface.
  * @param pspec the GObject.ParamSpec for the new property 
  */
static interfaceInstallProperty(gIface: import('../GObject').TypeInterface, pspec: import('../GObject').ParamSpec): void;
/**
  * Lists the properties of an interface.Generally, the interface vtable passed in as g_iface will be the default vtable from GObject.type_default_interface_ref(), or, if you know the interface has already been loaded, GObject.type_default_interface_peek().
  * @param gIface any interface vtable for the interface, or the default vtable for the interface
  * @returns a pointer to an array of pointers to GObject.ParamSpec structures. The paramspecs are owned by GLib, but the array should be freed with GLib.free() when you are done with it. 
  */
static interfaceListProperties(gIface: import('../GObject').TypeInterface): import('../[GObject').ParamSpec];
/**
  * Get an array of GObject.ParamSpec for all properties of a class.
  * @returns an array of GObject.ParamSpec which should be freed after use 
  */
static listProperties(): import('../[GObject').ParamSpec];
/**
  * Creates a new instance of a GObject.Object subtype and sets its properties.
  * @param objectType the type id of the GObject.Object subtype to instantiate
  * @param parameters an array of GObject.Parameter
  * @returns a new instance of object_type 
  */
static newv(objectType: import('../GObject').GType, parameters: import('../GObject').Parameter): import('../GObject').Object;
/**
  * Registers property_id as referring to a property with the name name in a parent class or in an interface implemented by self. This allows this class to “override” a property implementation in a parent class or to provide the implementation of a property from an interface.
  * @param propertyId the new property ID
  * @param name the name of a property registered in a parent class or in an interface of this class. 
  */
static overrideProperty(propertyId: number, name: string): void;
/**
  * Creates a binding between source_property on self and target_property on target. Whenever the source_property is changed the target_property is updated using the same value. For instance:
  * @param sourceProperty the property on self to bind
  * @param target the target GObject.Object
  * @param targetProperty the property on target to bind
  * @param flags flags to pass to GObject.Binding
  * @returns the GObject.Binding instance representing the binding between the two GObject.Object instances. The binding is released whenever the GObject.Binding reference count reaches zero. 
  */
bindProperty(sourceProperty: string, target: import('../GObject').Object, targetProperty: string, flags: import('../GObject').BindingFlags): import('../GObject').Binding;
/**
  * Creates a binding between source_property on self and target_property on target, allowing you to set the transformation functions to be used by the binding.
  * @param sourceProperty the property on self to bind
  * @param target the target GObject.Object
  * @param targetProperty the property on target to bind
  * @param flags flags to pass to GObject.Binding
  * @param transformTo a GObject.Closure wrapping the transformation function from the self to the target, or None to use the default
  * @param transformFrom a GObject.Closure wrapping the transformation function from the target to the self, or None to use the default
  * @returns the GObject.Binding instance representing the binding between the two GObject.Object instances. The binding is released whenever the GObject.Binding reference count reaches zero. 
  */
bindPropertyFull(sourceProperty: string, target: import('../GObject').Object, targetProperty: string, flags: import('../GObject').BindingFlags, transformTo: import('../GObject').Closure, transformFrom: import('../GObject').Closure): import('../GObject').Binding;
/**
  * The connect() method adds a function or method (handler) to the end of the list of signal handlers for the named detailed_signal but before the default class signal handler. An optional set of parameters may be specified after the handler parameter. These will all be passed to the signal handler when invoked. 
  */
connect(): void;
/**
  * The connect_after() method is similar to the connect() method except that the handler is added to the signal handler list after the default class signal handler. Otherwise the details of handler definition and invocation are the same. 
  */
connectAfter(): void;
/**
  * A convenience function to disconnect multiple signals at once. 
  */
disconnect(): void;
/**
  * Emit signal signal_name. Signal arguments must follow, e.g. if your signal is of type (int,), it must be emitted with: 
  */
emit(): void;
/**
  * This function is intended for GObject.Object implementations to re-enforce a floating object reference. Doing this is seldom required: all GObject.InitiallyUnowneds are created with a floating reference which usually just needs to be sunken by calling GObject.Object.ref_sink(). 
  */
forceFloating(): void;
/**
  * This method freezes all the “notify::” signals (which are emitted when any property is changed) until the thaw_notify() method is called. 
  */
freezeNotify(): void;
/**
  * Gets a named field from the objects table of associations (see GObject.Object.set_data()).
  * @param key name of the key for that association
  * @returns the data if found, or None if no such data exists. 
  */
getData(key: string): Object | null;
/**
  * Retrieves a property value. 
  */
getProperty(): void;
/**
  * This function gets back user data pointers stored via g_object_set_qdata().
  * @param quark A #GQuark, naming the user data pointer
  * @returns The user data pointer set, or None 
  */
getQdata(quark: number): Object | null;
/**
  * Gets n_properties properties for an self. Obtained properties will be set to values. All properties must be valid. Warnings will be emitted and undefined behaviour may result if invalid properties are passed in.
  * @param names the names of each property to get
  * @param values the values of each property to get 
  */
getv(names: string, values: import('../GObject').Value): void;
/**
  * Blocks a handler of an instance so it will not be called during any signal emissions unless handler_unblock() is called for that handler_id. Thus “blocking” a signal handler means to temporarily deactivate it, a signal handler has to be unblocked exactly the same amount of times it has been blocked before to become active again. 
  */
handlerBlock(): void;
handlerUnblock(handlerId: number): void;
/**
  * Checks whether self has a floating reference.
  * @returns True if self has a floating reference 
  */
isFloating(): boolean;
/**
  * Emits a “notify” signal for the property property_name on self.
  * @param propertyName the name of a property installed on the class of self. 
  */
notify(propertyName: string): void;
/**
  * Emits a “notify” signal for the property specified by pspec on self.
  * @param pspec the GObject.ParamSpec of a property installed on the class of self. 
  */
notifyByPspec(pspec: import('../GObject').ParamSpec): void;
/**
  * Increases the reference count of self.
  * @returns the same self 
  */
ref(): import('../GObject').Object;
/**
  * Increase the reference count of self, and possibly remove the floating reference, if self has a floating reference.
  * @returns self 
  */
refSink(): import('../GObject').Object;
/**
  * Releases all references to other objects. This can be used to break reference cycles. 
  */
runDispose(): void;
/**
  * Each object carries around a table of associations from strings to pointers.  This function lets you set an association.
  * @param key name of the key
  * @param data data to associate with that key 
  */
setData(key: string, data: Object | null): void;
/**
  * Set property property_name to value. 
  */
setProperty(): void;
/**
  * Remove a specified datum from the object’s data associations, without invoking the association’s destroy handler.
  * @param key name of the key
  * @returns the data if found, or None if no such data exists. 
  */
stealData(key: string): Object | null;
/**
  * This function gets back user data pointers stored via g_object_set_qdata() and removes the data from object without invoking its destroy() function (if any was set). Usually, calling this function is only required to update user data pointers with a destroy notifier, for example:
  * @param quark A #GQuark, naming the user data pointer
  * @returns The user data pointer set, or None 
  */
stealQdata(quark: number): Object | null;
/**
  * Thaw all the “notify::” signals which were thawed by freeze_notify(). 
  */
thawNotify(): void;
/**
  * Decreases the reference count of self. When its reference count drops to 0, the object is finalized (i.e. its memory is freed). 
  */
unref(): void;
/**
  * This function essentially limits the life time of the closure to the life time of the object. That is, when the object is finalized, the closure is invalidated by calling GObject.Closure.invalidate() on it, in order to prevent invocations of the closure with a finalized (nonexisting) object. Also, GObject.Object.ref() and GObject.Object.unref() are added as marshal guards to the closure, to ensure that an extra reference count is held on self during invocation of the closure.  Usually, this function will be called on closures that use this self as closure data.
  * @param closure GObject.Closure to watch 
  */
watchClosure(closure: import('../GObject').Closure): void;
/**
  *   
  */
gTypeInstance: import('../GObject').TypeInstance;
/**
  *   
  */
qdata: import('../GLib').Data;
/**
  *   
  */
refCount: number;
}

