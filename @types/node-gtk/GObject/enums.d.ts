/**
  * Flags to be passed to GObject.Object.bind_property() or GObject.Object.bind_property_full().
  *  New in version 2.26.  
  */
export declare enum BindingFlags {
  /** The default binding; if the source property changes, the target property is updated with its value. */
  DEFAULT = 0,
  /** Bidirectional binding; if either the property of the source or the property of the target changes, the other is updated. */
  BIDIRECTIONAL = 1,
  /** Synchronize the values of the source and target properties when creating the binding; the direction of the synchronization is always from the source to the target. */
  SYNC_CREATE = 2,
  /** If the two properties being bound are booleans, setting one to True will result in the other being set to False and vice versa. This flag will only work for boolean properties, and cannot be used when passing custom transformation functions to GObject.Object.bind_property_full(). */
  INVERT_BOOLEAN = 4,
}
/**
  * The connection flags are used to specify the behaviour of a signal’s connection. 
  */
export declare enum ConnectFlags {
  /** whether the handler should be called before or after the default handler of the signal. */
  AFTER = 1,
  /** whether the instance and data should be swapped when calling the handler; see g_signal_connect_swapped() for an example. */
  SWAPPED = 2,
}
/**
  * Base type for all flags types with a GType 
  */
export declare enum GFlags {
}
/**
  * Through the GObject.ParamFlags flag values, certain aspects of parameters can be configured. See also GObject.PARAM_STATIC_STRINGS. 
  */
export declare enum ParamFlags {
  /** the parameter is deprecated and will be removed in a future version. A warning will be generated if it is used while running with G_ENABLE_DIAGNOSTIC=1.
    *  New in version 2.26.  */
  DEPRECATED = -2147483648,
  /** the parameter is readable */
  READABLE = 1,
  /** calls to GObject.Object.set_property() for this property will not automatically result in a “notify” signal being emitted: the implementation must call GObject.Object.notify() themselves in case the property actually changes.
    *  New in version 2.42.  */
  EXPLICIT_NOTIFY = 1073741824,
  /** the string used as blurb when constructing the parameter is guaranteed to remain valid and unmodified for the lifetime of the parameter.
    *  New in version 2.8.  */
  STATIC_BLURB = 128,
  /** upon parameter conversion (see GObject.param_value_convert()) strict validation is not required */
  LAX_VALIDATION = 16,
  /** the parameter is writable */
  WRITABLE = 2,
  /** alias for GObject.ParamFlags.READABLE | GObject.ParamFlags.WRITABLE */
  READWRITE = 3,
  /** internal */
  PRIVATE = 32,
  /** the string used as name when constructing the parameter is guaranteed to remain valid and unmodified for the lifetime of the parameter.
    *  New in version 2.8.  */
  STATIC_NAME = 32,
  /** the parameter will be set upon object construction */
  CONSTRUCT = 4,
  /** the string used as nick when constructing the parameter is guaranteed to remain valid and unmmodified for the lifetime of the parameter.
    *  New in version 2.8.  */
  STATIC_NICK = 64,
  /** the parameter can only be set upon object construction */
  CONSTRUCT_ONLY = 8,
}
/**
  * The signal flags are used to specify a signal’s behaviour, the overall signal description outlines how especially the RUN flags control the stages of a signal emission. 
  */
export declare enum SignalFlags {
  /** Invoke the object method handler in the first emission stage. */
  RUN_FIRST = 1,
  /** Varargs signal emission will always collect the arguments, even if there are no signal handlers connected.
    *  New in version 2.30.  */
  MUST_COLLECT = 128,
  /** This signal supports “::detail” appendices to the signal name upon handler connections and emissions. */
  DETAILED = 16,
  /** Invoke the object method handler in the third emission stage. */
  RUN_LAST = 2,
  /** The signal is deprecated and will be removed in a future version. A warning will be generated if it is connected while running with G_ENABLE_DIAGNOSTIC=1.
    *  New in version 2.32.  */
  DEPRECATED = 256,
  /** Action signals are signals that may freely be emitted on alive objects from user code via g_signal_emit() and friends, without the need of being embedded into extra code that performs pre or post emission adjustments on the object. They can also be thought of as object methods which can be called generically by third-party code. */
  ACTION = 32,
  /** Invoke the object method handler in the last emission stage. */
  RUN_CLEANUP = 4,
  /** No emissions hooks are supported for this signal. */
  NO_HOOKS = 64,
  /** Signals being emitted for an object while currently being in emission for this very object will not be emitted recursively, but instead cause the first emission to be restarted. */
  NO_RECURSE = 8,
}
/**
  * The match types specify what GObject.signal_handlers_block_matched(), GObject.signal_handlers_unblock_matched() and GObject.signal_handlers_disconnect_matched() match signals by. 
  */
export declare enum SignalMatchType {
  /** The signal id must be equal. */
  ID = 1,
  /** The closure data must be the same. */
  DATA = 16,
  /** The signal detail be equal. */
  DETAIL = 2,
  /** Only unblocked signals may matched. */
  UNBLOCKED = 32,
  /** The closure must be the same. */
  CLOSURE = 4,
  /** The C closure callback must be the same. */
  FUNC = 8,
}
/**
  * These flags used to be passed to GObject.type_init_with_debug_flags() which is now deprecated.
  *  Deprecated since version 2.36: GObject.type_init() is now done automatically  
  */
export declare enum TypeDebugFlags {
  /** Print no messages */
  NONE = 0,
  /** Print messages about object bookkeeping */
  OBJECTS = 1,
  /** Print messages about signal emissions */
  SIGNALS = 2,
  /** Keep a count of instances of each type */
  INSTANCE_COUNT = 4,
  /** Mask covering all debug flags */
  MASK = 7,
}
/**
  * Bit masks used to check or determine characteristics of a type. 
  */
export declare enum TypeFlags {
  /** Indicates an abstract type. No instances can be created for an abstract type */
  ABSTRACT = 16,
  /** Indicates an abstract value type, i.e. a type that introduces a value table, but can’t be used for GObject.Value.init() */
  VALUE_ABSTRACT = 32,
}
/**
  * Bit masks used to check or determine specific characteristics of a fundamental type. 
  */
export declare enum TypeFundamentalFlags {
  /** Indicates a classed type */
  CLASSED = 1,
  /** Indicates an instantiable type (implies classed) */
  INSTANTIATABLE = 2,
  /** Indicates a flat derivable type */
  DERIVABLE = 4,
  /** Indicates a deep derivable type (implies derivable) */
  DEEP_DERIVABLE = 8,
}
/**
  * Base type for all enum types with a GType 
  */
export declare enum GEnum {
}
