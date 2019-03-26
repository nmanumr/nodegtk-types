/**
  * The Pango.AttrList structure represents a list of attributes
that apply to a section of text. The attributes are, in general,
allowed to overlap in an arbitrary fashion, however, if the
attributes are manipulated only through Pango.AttrList.change(),
the overlap between properties will meet stricter criteria. 
  */
export declare class AttrList {
  /**
    * Create a new empty attribute list with a reference count of one.
    * @returns the newly allocated Pango.AttrList, which should be freed with Pango.AttrList.unref(). 
    */
  static new(): import('../Pango').AttrList;
  /**
    * Insert the given attribute into the Pango.AttrList. It will replace any attributes of the same type on that segment and be merged with any adjoining attributes that are identical.
    * @param attr the attribute to insert. Ownership of this value is assumed by the list. 
    */
  change(attr: import('../Pango').Attribute): void;
  /**
    * Copy self and return an identical new list.
    * @returns the newly allocated Pango.AttrList, with a reference count of one, which should be freed with Pango.AttrList.unref(). Returns None if self was None. 
    */
  copy(): import('../Pango').AttrList | null;
  /**
    * Given a Pango.AttrList and callback function, removes any elements of self for which func returns True and inserts them into a new list.
    * @param func callback function; returns True if an attribute should be filtered out.
    * @param data Data to be passed to func
    * @returns the new Pango.AttrList or None if no attributes of the given types were found. 
    */
  filter(func: import('../Pango').attrFilterFunc, data: Object | null): import('../Pango').AttrList | null;
  /**
    * Insert the given attribute into the Pango.AttrList. It will be inserted after all other attributes with a matching start_index.
    * @param attr the attribute to insert. Ownership of this value is assumed by the list. 
    */
  insert(attr: import('../Pango').Attribute): void;
  /**
    * Insert the given attribute into the Pango.AttrList. It will be inserted before all other attributes with a matching start_index.
    * @param attr the attribute to insert. Ownership of this value is assumed by the list. 
    */
  insertBefore(attr: import('../Pango').Attribute): void;
  /**
    * Increase the reference count of the given attribute list by one.
    * @returns The attribute list passed in 
    */
  ref(): import('../Pango').AttrList;
  /**
    * This function opens up a hole in self, fills it in with attributes from the left, and then merges other on top of the hole.
    * @param other another Pango.AttrList
    * @param pos the position in self at which to insert other
    * @param len the length of the spliced segment. (Note that this must be specified since the attributes in other may only be present at some subsection of this range) 
    */
  splice(other: import('../Pango').AttrList, pos: number, len: number): void;
  /**
    * Decrease the reference count of the given attribute list by one. If the result is zero, free the attribute list and the attributes it contains. 
    */
  unref(): void;
}

