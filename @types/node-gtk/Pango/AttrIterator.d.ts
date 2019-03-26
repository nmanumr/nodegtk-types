/**
  * The Pango.AttrIterator structure is used to represent an
iterator through a Pango.AttrList. A new iterator is created
with pango_attr_list_get_iterator(). Once the iterator
is created, it can be advanced through the style changes
in the text using Pango.AttrIterator.next(). At each
style change, the range of the current style segment and the
attributes currently in effect can be queried. 
  */
export declare class AttrIterator {
  /**
    * Destroy a Pango.AttrIterator and free all associated memory. 
    */
  destroy(): void;
  /**
    * Gets a list of all attributes at the current position of the iterator.
    * @returns a list of all attributes for the current range. To free this value, call Pango.Attribute.destroy() on each value and g_slist_free() on the list. 
    */
  getAttrs(): import('../Pango').Attribute[];
  /**
    * Get the font and other attributes at the current iterator position.
    * @param desc a Pango.FontDescription to fill in with the current values. The family name in this structure will be set using Pango.FontDescription.set_family_static() using values from an attribute in the Pango.AttrList associated with the iterator, so if you plan to keep it around, you must call: pango_font_description_set_family (desc, pango_font_description_get_family (desc)).
    * @param language if non-None, location to store language tag for item, or None if none is found.
    * @param extraAttrs if non-None, location in which to store a list of non-font attributes at the the current position; only the highest priority value of each attribute will be added to this list. In order to free this value, you must call Pango.Attribute.destroy() on each member. 
    */
  getFont(desc: import('../Pango').FontDescription, language: import('../Pango').Language | null, extraAttrs: import('../Pango').Attribute | null): void;
  /**
    * Advance the iterator until the next change of style.
    * @returns False if the iterator is at the end of the list, otherwise True 
    */
  next(): boolean;
  /**
    * Get the range of the current segment. Note that the stored return values are signed, not unsigned like the values in Pango.Attribute. To deal with this API oversight, stored return values that wouldn’t fit into a signed integer are clamped to GObject.G_MAXINT.
    * @returns start:location to store the start of the range end:location to store the end of the range 
    */
  range(): [number, number];
}

