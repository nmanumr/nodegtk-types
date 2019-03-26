/**
  * An opaque structure used to hold different types of values.
The data within the structure has protected scope: it is accessible only
to functions within a GObject.TypeValueTable structure, or implementations of
the g_value_*() API. That is, code portions which implement new fundamental
types.
GObject.Value users cannot make any assumptions about how data is stored
within the 2 element data union, and the g_type member should
only be accessed through the G_VALUE_TYPE() macro. 
  */
export declare class Value {
  /**
    * Returns whether a GObject.Value of type src_type can be copied into a GObject.Value of type dest_type.
    * @param srcType source type to be copied.
    * @param destType destination type for copying.
    * @returns True if GObject.Value.copy() is possible with src_type and dest_type. 
    */
  static typeCompatible(srcType: import('../GObject').GType, destType: import('../GObject').GType): boolean;
  /**
    * Check whether GObject.Value.transform() is able to transform values of type src_type into values of type dest_type. Note that for the types to be transformable, they must be compatible or a transformation function must be registered.
    * @param srcType Source type.
    * @param destType Target type.
    * @returns True if the transformation is possible, False otherwise. 
    */
  static typeTransformable(srcType: import('../GObject').GType, destType: import('../GObject').GType): boolean;
  /**
    * Copies the value of self into dest_value.
    * @param destValue An initialized GObject.Value structure of the same type as self. 
    */
  copy(destValue: import('../GObject').Value): void;
  /**
    * Get the contents of a GObject.TYPE_OBJECT derived GObject.Value, increasing its reference count. If the contents of the GObject.Value are None, then None will be returned.
    * @returns object content of self, should be unreferenced when no longer needed. 
    */
  dupObject(): import('../GObject').Object;
  /**
    * Get a copy the contents of a GObject.TYPE_STRING GObject.Value.
    * @returns a newly allocated copy of the string content of self 
    */
  dupString(): string;
  /**
    * Get the contents of a variant GObject.Value, increasing its refcount. The returned GLib.Variant is never floating.
    * @returns variant contents of self (may be None); should be unreffed using GLib.Variant.unref() when no longer needed 
    */
  dupVariant(): import('../GLib').Variant | null;
  /**
    * Determines if self will fit inside the size of a pointer value. This is an internal function introduced mainly for C marshallers.
    * @returns True if self will fit inside a pointer value. 
    */
  fitsPointer(): boolean;
  /**
    * Get the contents of a GObject.TYPE_BOOLEAN GObject.Value.
    * @returns boolean contents of self 
    */
  getBoolean(): boolean;
  /**
    * Get the contents of a GObject.TYPE_BOXED derived GObject.Value.
    * @returns boxed contents of self 
    */
  getBoxed(): Object | null;
  /**
    * Do not use this function; it is broken on platforms where the str type is unsigned, such as ARM and PowerPC.  See GObject.Value.get_schar().
    * @returns character contents of self 
    */
  getChar(): number;
  /**
    * Get the contents of a GObject.TYPE_DOUBLE GObject.Value.
    * @returns double contents of self 
    */
  getDouble(): number;
  /**
    * Get the contents of a GObject.TYPE_ENUM GObject.Value.
    * @returns enum contents of self 
    */
  getEnum(): number;
  /**
    * Get the contents of a GObject.TYPE_FLAGS GObject.Value.
    * @returns flags contents of self 
    */
  getFlags(): number;
  /**
    * Get the contents of a GObject.TYPE_FLOAT GObject.Value.
    * @returns float contents of self 
    */
  getFloat(): number;
  /**
    * Get the contents of a GObject.TYPE_GTYPE GObject.Value.
    * @returns the GObject.GType stored in self 
    */
  getGtype(): import('../GObject').GType;
  /**
    * Get the contents of a GObject.TYPE_INT GObject.Value.
    * @returns integer contents of self 
    */
  getInt(): number;
  /**
    * Get the contents of a GObject.TYPE_INT64 GObject.Value.
    * @returns 64bit integer contents of self 
    */
  getInt64(): number;
  /**
    * Get the contents of a GObject.TYPE_LONG GObject.Value.
    * @returns long integer contents of self 
    */
  getLong(): number;
  /**
    * Get the contents of a GObject.TYPE_OBJECT derived GObject.Value.
    * @returns object contents of self 
    */
  getObject(): import('../GObject').Object;
  /**
    * Get the contents of a GObject.TYPE_PARAM GObject.Value.
    * @returns GObject.ParamSpec content of self 
    */
  getParam(): import('../GObject').ParamSpec;
  /**
    * Get the contents of a pointer GObject.Value.
    * @returns pointer contents of self 
    */
  getPointer(): Object | null;
  /**
    * Get the contents of a GObject.TYPE_CHAR GObject.Value.
    * @returns signed 8 bit integer contents of self 
    */
  getSchar(): number;
  /**
    * Get the contents of a GObject.TYPE_STRING GObject.Value.
    * @returns string content of self 
    */
  getString(): string;
  /**
    * Get the contents of a GObject.TYPE_UCHAR GObject.Value.
    * @returns unsigned character contents of self 
    */
  getUchar(): number;
  /**
    * Get the contents of a GObject.TYPE_UINT GObject.Value.
    * @returns unsigned integer contents of self 
    */
  getUint(): number;
  /**
    * Get the contents of a GObject.TYPE_UINT64 GObject.Value.
    * @returns unsigned 64bit integer contents of self 
    */
  getUint64(): number;
  /**
    * Get the contents of a GObject.TYPE_ULONG GObject.Value.
    * @returns unsigned long integer contents of self 
    */
  getUlong(): number;
  getValue(): void;
  /**
    * Get the contents of a variant GObject.Value.
    * @returns variant contents of self (may be None) 
    */
  getVariant(): import('../GLib').Variant | null;
  /**
    * Initializes self with the default value of type.
    * @param gType Type the GObject.Value should hold values of.
    * @returns the GObject.Value structure that has been passed in 
    */
  init(gType: import('../GObject').GType): import('../GObject').Value;
  /**
    * Initializes and sets self from an instantiatable type via the value_table’s collect_value() function.
    * @param instance the instance 
    */
  initFromInstance(instance: import('../GObject').TypeInstance): void;
  /**
    * Returns the value contents as pointer. This function asserts that GObject.Value.fits_pointer() returned True for the passed in value. This is an internal function introduced mainly for C marshallers.
    * @returns the value contents as pointer 
    */
  peekPointer(): Object | null;
  /**
    * Clears the current value in self and resets it to the default value (as if the value had just been initialized).
    * @returns the GObject.Value structure that has been passed in 
    */
  reset(): import('../GObject').Value;
  /**
    * Set the contents of a GObject.TYPE_BOOLEAN GObject.Value to v_boolean.
    * @param vBoolean boolean value to be set 
    */
  setBoolean(vBoolean: boolean): void;
  /**
    * Set the contents of a GObject.TYPE_BOXED derived GObject.Value to v_boxed.
    * @param vBoxed boxed value to be set 
    */
  setBoxed(vBoxed: Object | null): void;
  /**
    * This is an internal function introduced mainly for C marshallers.
    * @param vBoxed duplicated unowned boxed value to be set 
    */
  setBoxedTakeOwnership(vBoxed: Object | null): void;
  /**
    * Set the contents of a GObject.TYPE_CHAR GObject.Value to v_char.
    * @param vChar character value to be set 
    */
  setChar(vChar: number): void;
  /**
    * Set the contents of a GObject.TYPE_DOUBLE GObject.Value to v_double.
    * @param vDouble double value to be set 
    */
  setDouble(vDouble: number): void;
  /**
    * Set the contents of a GObject.TYPE_ENUM GObject.Value to v_enum.
    * @param vEnum enum value to be set 
    */
  setEnum(vEnum: number): void;
  /**
    * Set the contents of a GObject.TYPE_FLAGS GObject.Value to v_flags.
    * @param vFlags flags value to be set 
    */
  setFlags(vFlags: number): void;
  /**
    * Set the contents of a GObject.TYPE_FLOAT GObject.Value to v_float.
    * @param vFloat float value to be set 
    */
  setFloat(vFloat: number): void;
  /**
    * Set the contents of a GObject.TYPE_GTYPE GObject.Value to v_gtype.
    * @param vGtype GObject.GType to be set 
    */
  setGtype(vGtype: import('../GObject').GType): void;
  /**
    * Sets self from an instantiatable type via the value_table’s collect_value() function.
    * @param instance the instance 
    */
  setInstance(instance: Object | null): void;
  /**
    * Set the contents of a GObject.TYPE_INT GObject.Value to v_int.
    * @param vInt integer value to be set 
    */
  setInt(vInt: number): void;
  /**
    * Set the contents of a GObject.TYPE_INT64 GObject.Value to v_int64.
    * @param vInt64 64bit integer value to be set 
    */
  setInt64(vInt64: number): void;
  /**
    * Set the contents of a GObject.TYPE_LONG GObject.Value to v_long.
    * @param vLong long integer value to be set 
    */
  setLong(vLong: number): void;
  /**
    * Set the contents of a GObject.TYPE_OBJECT derived GObject.Value to v_object.
    * @param vObject object value to be set 
    */
  setObject(vObject: import('../GObject').Object | null): void;
  /**
    * Set the contents of a GObject.TYPE_PARAM GObject.Value to param.
    * @param param the GObject.ParamSpec to be set 
    */
  setParam(param: import('../GObject').ParamSpec | null): void;
  /**
    * Set the contents of a pointer GObject.Value to v_pointer.
    * @param vPointer pointer value to be set 
    */
  setPointer(vPointer: Object | null): void;
  /**
    * Set the contents of a GObject.TYPE_CHAR GObject.Value to v_char.
    * @param vChar signed 8 bit integer to be set 
    */
  setSchar(vChar: number): void;
  /**
    * Set the contents of a GObject.TYPE_BOXED derived GObject.Value to v_boxed. The boxed value is assumed to be static, and is thus not duplicated when setting the GObject.Value.
    * @param vBoxed static boxed value to be set 
    */
  setStaticBoxed(vBoxed: Object | null): void;
  /**
    * Set the contents of a GObject.TYPE_STRING GObject.Value to v_string. The string is assumed to be static, and is thus not duplicated when setting the GObject.Value.
    * @param vString static string to be set 
    */
  setStaticString(vString: string | null): void;
  /**
    * Set the contents of a GObject.TYPE_STRING GObject.Value to v_string.
    * @param vString caller-owned string to be duplicated for the GObject.Value 
    */
  setString(vString: string | null): void;
  /**
    * This is an internal function introduced mainly for C marshallers.
    * @param vString duplicated unowned string to be set 
    */
  setStringTakeOwnership(vString: string | null): void;
  /**
    * Set the contents of a GObject.TYPE_UCHAR GObject.Value to v_uchar.
    * @param vUchar unsigned character value to be set 
    */
  setUchar(vUchar: number): void;
  /**
    * Set the contents of a GObject.TYPE_UINT GObject.Value to v_uint.
    * @param vUint unsigned integer value to be set 
    */
  setUint(vUint: number): void;
  /**
    * Set the contents of a GObject.TYPE_UINT64 GObject.Value to v_uint64.
    * @param vUint64 unsigned 64bit integer value to be set 
    */
  setUint64(vUint64: number): void;
  /**
    * Set the contents of a GObject.TYPE_ULONG GObject.Value to v_ulong.
    * @param vUlong unsigned long integer value to be set 
    */
  setUlong(vUlong: number): void;
  setValue(): void;
  /**
    * Set the contents of a variant GObject.Value to variant. If the variant is floating, it is consumed.
    * @param variant a GLib.Variant, or None 
    */
  setVariant(variant: import('../GLib').Variant | null): void;
  /**
    * Sets the contents of a GObject.TYPE_BOXED derived GObject.Value to v_boxed and takes over the ownership of the callers reference to v_boxed; the caller doesn’t have to unref it any more.
    * @param vBoxed duplicated unowned boxed value to be set 
    */
  takeBoxed(vBoxed: Object | null): void;
  /**
    * Sets the contents of a GObject.TYPE_STRING GObject.Value to v_string.
    * @param vString string to take ownership of 
    */
  takeString(vString: string | null): void;
  /**
    * Set the contents of a variant GObject.Value to variant, and takes over the ownership of the caller’s reference to variant; the caller doesn’t have to unref it any more (i.e. the reference count of the variant is not increased).
    * @param variant a GLib.Variant, or None 
    */
  takeVariant(variant: import('../GLib').Variant | null): void;
  /**
    * Tries to cast the contents of self into a type appropriate to store in dest_value, e.g. to transform a GObject.TYPE_INT value into a GObject.TYPE_FLOAT value. Performing transformations between value types might incur precision lossage. Especially transformations into strings might reveal seemingly arbitrary results and shouldn’t be relied upon for production code (such as rcfile value or object property serialization).
    * @param destValue Target value.
    * @returns Whether a transformation rule was found and could be applied. Upon failing transformations, dest_value is left untouched. 
    */
  transform(destValue: import('../GObject').Value): boolean;
  /**
    * Clears the current value in self (if any) and “unsets” the type, this releases all resources associated with this GObject.Value. An unset value is the same as an uninitialized (zero-filled) GObject.Value structure. 
    */
  unset(): void;
}

