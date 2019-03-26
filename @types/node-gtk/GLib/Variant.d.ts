/**
  * GLib.Variant is a variant datatype; it can contain one or more values
along with information about the type of the values. 
  */
export declare class Variant {
  /**
    * Determines if a given string is a valid D-Bus object path.  You should ensure that a string is a valid D-Bus object path before passing it to GLib.Variant.new_object_path().
    * @param string a normal C nul-terminated string
    * @returns True if string is a D-Bus object path 
    */
  static isObjectPath(string: string): boolean;
  /**
    * Determines if a given string is a valid D-Bus type signature.  You should ensure that a string is a valid D-Bus type signature before passing it to GLib.Variant.new_signature().
    * @param string a normal C nul-terminated string
    * @returns True if string is a D-Bus type signature 
    */
  static isSignature(string: string): boolean;
  /**
    * Creates a new GLib.Variant array from children.
    * @param childType the element type of the new array
    * @param children an array of GLib.Variant pointers, the children
    * @returns a floating reference to a new GLib.Variant array 
    */
  static newArray(childType: import('../GLib').VariantType | null, children: import('../GLib').Variant | null): import('../GLib').Variant;
  /**
    * Creates a new boolean GLib.Variant instance – either True or False.
    * @param value a bool value
    * @returns a floating reference to a new boolean GLib.Variant instance 
    */
  static newBoolean(value: boolean): import('../GLib').Variant;
  /**
    * Creates a new byte GLib.Variant instance.
    * @param value a #guint8 value
    * @returns a floating reference to a new byte GLib.Variant instance 
    */
  static newByte(value: number): import('../GLib').Variant;
  /**
    * Creates an array-of-bytes GLib.Variant with the contents of string. This function is just like GLib.Variant.new_string() except that the string need not be valid UTF-8.
    * @param string a normal nul-terminated string in no particular encoding
    * @returns a floating reference to a new bytestring GLib.Variant instance 
    */
  static newBytestring(string: Int8Array): import('../GLib').Variant;
  /**
    * Constructs an array of bytestring GLib.Variant from the given array of strings.
    * @param strv an array of strings
    * @returns a new floating GLib.Variant instance 
    */
  static newBytestringArray(strv: string): import('../GLib').Variant;
  /**
    * Creates a new dictionary entry GLib.Variant. key and value must be non-None. key must be a value of a basic type (ie: not a container).
    * @param key a basic GLib.Variant, the key
    * @param value a GLib.Variant, the value
    * @returns a floating reference to a new dictionary entry GLib.Variant 
    */
  static newDictEntry(key: import('../GLib').Variant, value: import('../GLib').Variant): import('../GLib').Variant;
  /**
    * Creates a new double GLib.Variant instance.
    * @param value a float floating point value
    * @returns a floating reference to a new double GLib.Variant instance 
    */
  static newDouble(value: number): import('../GLib').Variant;
  /**
    * Constructs a new array GLib.Variant instance, where the elements are of element_type type.
    * @param elementType the GLib.VariantType of each element
    * @param elements a pointer to the fixed array of contiguous elements
    * @param nElements the number of elements
    * @param elementSize the size of each element
    * @returns a floating reference to a new array GLib.Variant instance 
    */
  static newFixedArray(elementType: import('../GLib').VariantType, elements: Object | null, nElements: number, elementSize: number): import('../GLib').Variant;
  /**
    * Constructs a new serialised-mode GLib.Variant instance.  This is the inner interface for creation of new serialised values that gets called from various functions in gvariant.c.
    * @param type a GLib.VariantType
    * @param bytes a GLib.Bytes
    * @param trusted if the contents of bytes are trusted
    * @returns a new GLib.Variant with a floating reference 
    */
  static newFromBytes(type: import('../GLib').VariantType, bytes: import('../GLib').Bytes, trusted: boolean): import('../GLib').Variant;
  /**
    * Creates a new GLib.Variant instance from serialised data.
    * @param type a definite GLib.VariantType
    * @param data the serialised data
    * @param trusted True if data is definitely in normal form
    * @param notify function to call when data is no longer needed
    * @param userData data for notify
    * @returns a new floating GLib.Variant of type type 
    */
  static newFromData(type: import('../GLib').VariantType, data: Int8Array, trusted: boolean, notify: import('../GLib').destroyNotify, userData: Object | null): import('../GLib').Variant;
  /**
    * Creates a new handle GLib.Variant instance.
    * @param value a #gint32 value
    * @returns a floating reference to a new handle GLib.Variant instance 
    */
  static newHandle(value: number): import('../GLib').Variant;
  /**
    * Creates a new int16 GLib.Variant instance.
    * @param value a #gint16 value
    * @returns a floating reference to a new int16 GLib.Variant instance 
    */
  static newInt16(value: number): import('../GLib').Variant;
  /**
    * Creates a new int32 GLib.Variant instance.
    * @param value a #gint32 value
    * @returns a floating reference to a new int32 GLib.Variant instance 
    */
  static newInt32(value: number): import('../GLib').Variant;
  /**
    * Creates a new int64 GLib.Variant instance.
    * @param value a #gint64 value
    * @returns a floating reference to a new int64 GLib.Variant instance 
    */
  static newInt64(value: number): import('../GLib').Variant;
  /**
    * Depending on if child is None, either wraps child inside of a maybe container or creates a Nothing instance for the given type.
    * @param childType the GLib.VariantType of the child, or None
    * @param child the child value, or None
    * @returns a floating reference to a new GLib.Variant maybe instance 
    */
  static newMaybe(childType: import('../GLib').VariantType | null, child: import('../GLib').Variant | null): import('../GLib').Variant;
  /**
    * Creates a D-Bus object path GLib.Variant with the contents of string. string must be a valid D-Bus object path.  Use GLib.Variant.is_object_path() if you’re not sure.
    * @param objectPath a normal C nul-terminated string
    * @returns a floating reference to a new object path GLib.Variant instance 
    */
  static newObjectPath(objectPath: string): import('../GLib').Variant;
  /**
    * Constructs an array of object paths GLib.Variant from the given array of strings.
    * @param strv an array of strings
    * @returns a new floating GLib.Variant instance 
    */
  static newObjv(strv: string): import('../GLib').Variant;
  /**
    * Creates a D-Bus type signature GLib.Variant with the contents of string.  string must be a valid D-Bus type signature.  Use GLib.Variant.is_signature() if you’re not sure.
    * @param signature a normal C nul-terminated string
    * @returns a floating reference to a new signature GLib.Variant instance 
    */
  static newSignature(signature: string): import('../GLib').Variant;
  /**
    * Creates a string GLib.Variant with the contents of string.
    * @param string a normal UTF-8 nul-terminated string
    * @returns a floating reference to a new string GLib.Variant instance 
    */
  static newString(string: string): import('../GLib').Variant;
  /**
    * Constructs an array of strings GLib.Variant from the given array of strings.
    * @param strv an array of strings
    * @returns a new floating GLib.Variant instance 
    */
  static newStrv(strv: string): import('../GLib').Variant;
  /**
    * Creates a new tuple GLib.Variant out of the items in children.  The type is determined from the types of children.  No entry in the children array may be None.
    * @param children the items to make the tuple out of
    * @returns a floating reference to a new GLib.Variant tuple 
    */
  static newTuple(children: import('../GLib').Variant): import('../GLib').Variant;
  /**
    * Creates a new uint16 GLib.Variant instance.
    * @param value a #guint16 value
    * @returns a floating reference to a new uint16 GLib.Variant instance 
    */
  static newUint16(value: number): import('../GLib').Variant;
  /**
    * Creates a new uint32 GLib.Variant instance.
    * @param value a #guint32 value
    * @returns a floating reference to a new uint32 GLib.Variant instance 
    */
  static newUint32(value: number): import('../GLib').Variant;
  /**
    * Creates a new uint64 GLib.Variant instance.
    * @param value a #guint64 value
    * @returns a floating reference to a new uint64 GLib.Variant instance 
    */
  static newUint64(value: number): import('../GLib').Variant;
  /**
    * Boxes value.  The result is a GLib.Variant instance representing a variant containing the original value.
    * @param value a GLib.Variant instance
    * @returns a floating reference to a new variant GLib.Variant instance 
    */
  static newVariant(value: import('../GLib').Variant): import('../GLib').Variant;
  /**
    * Parses a GLib.Variant from a text representation.
    * @param type a GLib.VariantType, or None
    * @param text a string containing a GLib.Variant in text form
    * @param limit a pointer to the end of text, or None
    * @param endptr a location to store the end pointer, or None
    * @returns a non-floating reference to a GLib.Variant, or None 
    */
  static parse(type: import('../GLib').VariantType | null, text: string, limit: string | null, endptr: string | null): import('../GLib').Variant;
  /**
    * Pretty-prints a message showing the context of a GLib.Variant parse error within the string for which parsing was attempted.
    * @param error a GLib.Error from the GLib.VariantParseError domain
    * @param sourceStr the string that was given to the parser
    * @returns the printed message 
    */
  static parseErrorPrintContext(error: import('../GLib').Error, sourceStr: string): string;
  static parseErrorQuark(): number;
  /**
    * Same as g_variant_error_quark(). 
    */
  static parserGetErrorQuark(): number;
  /**
    * Return a list of the element signatures of the topmost signature tuple. 
    */
  static splitSignature(): void;
  /**
    * Performs a byteswapping operation on the contents of self.  The result is that all multi-byte numeric data contained in self is byteswapped.  That includes 16, 32, and 64bit signed and unsigned integers as well as file handles and double precision floating point values.
    * @returns the byteswapped form of self 
    */
  byteswap(): import('../GLib').Variant;
  /**
    * Checks if calling g_variant_get() with format_string on self would be valid from a type-compatibility standpoint.  format_string is assumed to be a valid format string (from a syntactic standpoint).
    * @param formatString a valid GLib.Variant format string
    * @param copyOnly True to ensure the format string makes deep copies
    * @returns True if format_string is safe to use 
    */
  checkFormatString(formatString: string, copyOnly: boolean): boolean;
  /**
    * Classifies self according to its top-level type.
    * @returns the GLib.VariantClass of self 
    */
  classify(): import('../GLib').VariantClass;
  /**
    * Compares self and two.
    * @param two a GLib.Variant instance of the same type
    * @returns negative value if a < b; zero if a = b; positive value if a > b. 
    */
  compare(two: import('../GLib').Variant): number;
  /**
    * Similar to GLib.Variant.get_bytestring() except that instead of returning a constant string, the string is duplicated.
    * @returns a newly allocated string 
    */
  dupBytestring(): Int8Array;
  /**
    * Gets the contents of an array of array of bytes GLib.Variant.  This call makes a deep copy; the return result should be released with GLib.strfreev().
    * @returns an array of strings 
    */
  dupBytestringArray(): string[];
  /**
    * Gets the contents of an array of object paths GLib.Variant.  This call makes a deep copy; the return result should be released with GLib.strfreev().
    * @returns an array of strings 
    */
  dupObjv(): string[];
  /**
    * Similar to GLib.Variant.get_string() except that instead of returning a constant string, the string is duplicated.
    * @returns a newly allocated string, UTF-8 encoded  length:a pointer to a #gsize, to store the length 
    */
  dupString(): [string, number];
  /**
    * Gets the contents of an array of strings GLib.Variant.  This call makes a deep copy; the return result should be released with GLib.strfreev().
    * @returns an array of strings 
    */
  dupStrv(): string[];
  /**
    * Checks if self and two have the same type and value.
    * @param two a GLib.Variant instance
    * @returns True if self and two are equal 
    */
  equal(two: import('../GLib').Variant): boolean;
  /**
    * Returns the boolean value of self.
    * @returns True or False 
    */
  getBoolean(): boolean;
  /**
    * Returns the byte value of self.
    * @returns a #guint8 
    */
  getByte(): number;
  /**
    * Returns the string value of a GLib.Variant instance with an array-of-bytes type.  The string has no particular encoding.
    * @returns the constant string 
    */
  getBytestring(): Int8Array;
  /**
    * Gets the contents of an array of array of bytes GLib.Variant.  This call makes a shallow copy; the return result should be released with GLib.free(), but the individual strings must not be modified.
    * @returns an array of constant strings 
    */
  getBytestringArray(): string[];
  /**
    * Reads a child item out of a container GLib.Variant instance.  This includes variants, maybes, arrays, tuples and dictionary entries.  It is an error to call this function on any other type of GLib.Variant.
    * @param index the index of the child to fetch
    * @returns the child at the specified index 
    */
  getChildValue(index: number): import('../GLib').Variant;
  /**
    * Returns a pointer to the serialised form of a GLib.Variant instance. The returned data may not be in fully-normalised form if read from an untrusted source.  The returned data must not be freed; it remains valid for as long as self exists.
    * @returns the serialised form of self, or None 
    */
  getData(): Object | null;
  /**
    * Returns a pointer to the serialised form of a GLib.Variant instance. The semantics of this function are exactly the same as GLib.Variant.get_data(), except that the returned GLib.Bytes holds a reference to the variant data.
    * @returns A new GLib.Bytes representing the variant data 
    */
  getDataAsBytes(): import('../GLib').Bytes;
  /**
    * Returns the double precision floating point value of self.
    * @returns a float 
    */
  getDouble(): number;
  /**
    * Returns the 32-bit signed integer value of self.
    * @returns a #gint32 
    */
  getHandle(): number;
  /**
    * Returns the 16-bit signed integer value of self.
    * @returns a #gint16 
    */
  getInt16(): number;
  /**
    * Returns the 32-bit signed integer value of self.
    * @returns a #gint32 
    */
  getInt32(): number;
  /**
    * Returns the 64-bit signed integer value of self.
    * @returns a #gint64 
    */
  getInt64(): number;
  /**
    * Given a maybe-typed GLib.Variant instance, extract its value.  If the value is Nothing, then this function returns None.
    * @returns the contents of self, or None 
    */
  getMaybe(): import('../GLib').Variant | null;
  /**
    * Gets a GLib.Variant instance that has the same value as self and is trusted to be in normal form.
    * @returns a trusted GLib.Variant 
    */
  getNormalForm(): import('../GLib').Variant;
  /**
    * Gets the contents of an array of object paths GLib.Variant.  This call makes a shallow copy; the return result should be released with GLib.free(), but the individual strings must not be modified.
    * @returns an array of constant strings 
    */
  getObjv(): string[];
  /**
    * Determines the number of bytes that would be required to store self with GLib.Variant.store().
    * @returns the serialised size of self 
    */
  getSize(): number;
  /**
    * Returns the string value of a GLib.Variant instance with a string type.  This includes the types %G_VARIANT_TYPE_STRING, %G_VARIANT_TYPE_OBJECT_PATH and %G_VARIANT_TYPE_SIGNATURE.
    * @returns the constant string, UTF-8 encoded  length:a pointer to a #gsize, to store the length 
    */
  getString(): [string, number];
  /**
    * Gets the contents of an array of strings GLib.Variant.  This call makes a shallow copy; the return result should be released with GLib.free(), but the individual strings must not be modified.
    * @returns an array of constant strings 
    */
  getStrv(): string[];
  /**
    * Determines the type of self.
    * @returns a GLib.VariantType 
    */
  getType(): import('../GLib').VariantType;
  /**
    * Returns the type string of self.  Unlike the result of calling g_variant_type_peek_string(), this string is nul-terminated.  This string belongs to GLib.Variant and must not be freed.
    * @returns the type string for the type of self 
    */
  getTypeString(): string;
  /**
    * Returns the 16-bit unsigned integer value of self.
    * @returns a #guint16 
    */
  getUint16(): number;
  /**
    * Returns the 32-bit unsigned integer value of self.
    * @returns a #guint32 
    */
  getUint32(): number;
  /**
    * Returns the 64-bit unsigned integer value of self.
    * @returns a #guint64 
    */
  getUint64(): number;
  /**
    * Unboxes self.  The result is the GLib.Variant instance that was contained in self.
    * @returns the item contained in the variant 
    */
  getVariant(): import('../GLib').Variant;
  /**
    * Generates a hash value for a GLib.Variant instance.
    * @returns a hash value corresponding to self 
    */
  hash(): number;
  /**
    * Checks if self is a container.
    * @returns True if self is a container 
    */
  isContainer(): boolean;
  /**
    * Checks whether self has a floating reference count.
    * @returns whether self is floating 
    */
  isFloating(): boolean;
  /**
    * Checks if self is in normal form.
    * @returns True if self is in normal form 
    */
  isNormalForm(): boolean;
  /**
    * Checks if a value has a type matching the provided type.
    * @param type a GLib.VariantType
    * @returns True if the type of self matches type 
    */
  isOfType(type: import('../GLib').VariantType): boolean;
  keys(): void;
  /**
    * Looks up a value in a dictionary GLib.Variant.
    * @param key the key to lookup in the dictionary
    * @param expectedType a GLib.VariantType, or None
    * @returns the value of the dictionary key, or None 
    */
  lookupValue(key: string, expectedType: import('../GLib').VariantType | null): import('../GLib').Variant;
  /**
    * Determines the number of children in a container GLib.Variant instance. This includes variants, maybes, arrays, tuples and dictionary entries.  It is an error to call this function on any other type of GLib.Variant.
    * @returns the number of children in the container 
    */
  nChildren(): number;
  /**
    * Pretty-prints self in the format understood by GLib.Variant.parse().
    * @param typeAnnotate True if type information should be included in the output
    * @returns a newly-allocated string holding the result. 
    */
  print(typeAnnotate: boolean): string;
  /**
    * Increases the reference count of self.
    * @returns the same self 
    */
  ref(): import('../GLib').Variant;
  /**
    * GLib.Variant uses a floating reference count system.  All functions with names starting with g_variant_new_ return floating references.
    * @returns the same self 
    */
  refSink(): import('../GLib').Variant;
  /**
    * Stores the serialised form of self at data.  data should be large enough.  See GLib.Variant.get_size().
    * @param data the location to store the serialised data at 
    */
  store(data: Object): void;
  /**
    * If self is floating, sink it.  Otherwise, do nothing.
    * @returns the same self 
    */
  takeRef(): import('../GLib').Variant;
  /**
    * Decompose a GVariant into a native Python object. 
    */
  unpack(): void;
  /**
    * Decreases the reference count of self.  When its reference count drops to 0, the memory used by the variant is freed. 
    */
  unref(): void;
}

