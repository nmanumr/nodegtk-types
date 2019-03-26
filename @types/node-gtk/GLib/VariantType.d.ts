/**
  * This section introduces the GLib.Variant type system. It is based, in
large part, on the D-Bus type system, with two major changes and
some minor lifting of restrictions. The
D-Bus specification,
therefore, provides a significant amount of
information that is useful when working with GLib.Variant. 
  */
export declare class VariantType {
  static checked(arg0: string): import('../GLib').VariantType;
  /**
    * Creates a new GLib.VariantType corresponding to the type string given by type_string.  It is appropriate to call GLib.VariantType.free() on the return value.
    * @param typeString a valid GLib.Variant type string
    * @returns a new GLib.VariantType 
    */
  static new(typeString: string): import('../GLib').VariantType;
  /**
    * Constructs the type corresponding to an array of elements of the type type.
    * @param element a GLib.VariantType
    * @returns a new array GLib.VariantType 
    */
  static newArray(element: import('../GLib').VariantType): import('../GLib').VariantType;
  /**
    * Constructs the type corresponding to a dictionary entry with a key of type key and a value of type value.
    * @param key a basic GLib.VariantType
    * @param value a GLib.VariantType
    * @returns a new dictionary entry GLib.VariantType 
    */
  static newDictEntry(key: import('../GLib').VariantType, value: import('../GLib').VariantType): import('../GLib').VariantType;
  /**
    * Constructs the type corresponding to a maybe instance containing type type or Nothing.
    * @param element a GLib.VariantType
    * @returns a new maybe GLib.VariantType 
    */
  static newMaybe(element: import('../GLib').VariantType): import('../GLib').VariantType;
  /**
    * Constructs a new tuple type, from items.
    * @param items an array of GLib.VariantTypes, one for each item
    * @returns a new tuple GLib.VariantType 
    */
  static newTuple(items: import('../GLib').VariantType): import('../GLib').VariantType;
  static stringGetDepth(typeString: string): number;
  /**
    * Checks if type_string is a valid GLib.Variant type string.  This call is equivalent to calling GLib.VariantType.string_scan() and confirming that the following character is a nul terminator.
    * @param typeString a pointer to any string
    * @returns True if type_string is exactly one valid type string 
    */
  static stringIsValid(typeString: string): boolean;
  /**
    * Scan for a single complete and valid GLib.Variant type string in string. The memory pointed to by limit (or bytes beyond it) is never accessed.
    * @param string a pointer to any string
    * @param limit the end of string, or None
    * @returns True if a valid type string was found   endptr:location to store the end pointer, or None 
    */
  static stringScan(string: string, limit: string | null): [boolean, string];
  /**
    * Makes a copy of a GLib.VariantType.  It is appropriate to call GLib.VariantType.free() on the return value.  self may not be None.
    * @returns a new GLib.VariantType 
    */
  copy(): import('../GLib').VariantType;
  /**
    * Returns a newly-allocated copy of the type string corresponding to self.  The returned string is nul-terminated.  It is appropriate to call GLib.free() on the return value.
    * @returns the corresponding type string 
    */
  dupString(): string;
  /**
    * Determines the element type of an array or maybe type.
    * @returns the element type of self 
    */
  element(): import('../GLib').VariantType;
  /**
    * Compares self and type2 for equality.
    * @param type2 a GLib.VariantType
    * @returns True if self and type2 are exactly equal 
    */
  equal(type2: import('../GLib').VariantType): boolean;
  /**
    * Determines the first item type of a tuple or dictionary entry type.
    * @returns the first item type of self, or None 
    */
  first(): import('../GLib').VariantType;
  /**
    * Frees a GLib.VariantType that was allocated with GLib.VariantType.copy(), GLib.VariantType.new() or one of the container type constructor functions. 
    */
  free(): void;
  /**
    * Returns the length of the type string corresponding to the given self.  This function must be used to determine the valid extent of the memory region returned by g_variant_type_peek_string().
    * @returns the length of the corresponding type string 
    */
  getStringLength(): number;
  /**
    * Hashes self.
    * @returns the hash value 
    */
  hash(): number;
  /**
    * Determines if the given self is an array type.  This is true if the type string for self starts with an ‘a’.
    * @returns True if self is an array type 
    */
  isArray(): boolean;
  /**
    * Determines if the given self is a basic type.
    * @returns True if self is a basic type 
    */
  isBasic(): boolean;
  /**
    * Determines if the given self is a container type.
    * @returns True if self is a container type 
    */
  isContainer(): boolean;
  /**
    * Determines if the given self is definite (ie: not indefinite).
    * @returns True if self is definite 
    */
  isDefinite(): boolean;
  /**
    * Determines if the given self is a dictionary entry type.  This is true if the type string for self starts with a ‘{‘.
    * @returns True if self is a dictionary entry type 
    */
  isDictEntry(): boolean;
  /**
    * Determines if the given self is a maybe type.  This is true if the type string for self starts with an ‘m’.
    * @returns True if self is a maybe type 
    */
  isMaybe(): boolean;
  /**
    * Checks if self is a subtype of supertype.
    * @param supertype a GLib.VariantType
    * @returns True if self is a subtype of supertype 
    */
  isSubtypeOf(supertype: import('../GLib').VariantType): boolean;
  /**
    * Determines if the given self is a tuple type.  This is true if the type string for self starts with a ‘(‘ or if self is %G_VARIANT_TYPE_TUPLE.
    * @returns True if self is a tuple type 
    */
  isTuple(): boolean;
  /**
    * Determines if the given self is the variant type.
    * @returns True if self is the variant type 
    */
  isVariant(): boolean;
  /**
    * Determines the key type of a dictionary entry type.
    * @returns the key type of the dictionary entry 
    */
  key(): import('../GLib').VariantType;
  /**
    * Determines the number of items contained in a tuple or dictionary entry type.
    * @returns the number of items in self 
    */
  nItems(): number;
  /**
    * Determines the next item type of a tuple or dictionary entry type.
    * @returns the next GLib.VariantType after self, or None 
    */
  next(): import('../GLib').VariantType;
  /**
    * Determines the value type of a dictionary entry type.
    * @returns the value type of the dictionary entry 
    */
  value(): import('../GLib').VariantType;
}

