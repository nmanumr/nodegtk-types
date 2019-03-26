/**
  * A Pango.GlyphItem is a pair of a Pango.Item and the glyphs
resulting from shaping the text corresponding to an item.
As an example of the usage of Pango.GlyphItem, the results
of shaping text with Pango.Layout is a list of Pango.LayoutLine,
each of which contains a list of Pango.GlyphItem. 
  */
export declare class GlyphItem {
  /**
    * Splits a shaped item (Pango.GlyphItem) into multiple items based on an attribute list. The idea is that if you have attributes that don’t affect shaping, such as color or underline, to avoid affecting shaping, you filter them out (Pango.AttrList.filter()), apply the shaping process and then reapply them to the result using this function.
    * @param text text that list applies to
    * @param list a Pango.AttrList
    * @returns a list of glyph items resulting from splitting self. Free the elements using Pango.GlyphItem.free(), the list using g_slist_free(). 
    */
  applyAttrs(text: string, list: import('../Pango').AttrList): import('../Pango').GlyphItem[];
  /**
    * Make a deep copy of an existing Pango.GlyphItem structure.
    * @returns the newly allocated Pango.GlyphItem, which should be freed with Pango.GlyphItem.free(), or None if self was None. 
    */
  copy(): import('../Pango').GlyphItem | null;
  /**
    * Frees a Pango.GlyphItem and resources to which it points. 
    */
  free(): void;
  /**
    * Given a Pango.GlyphItem and the corresponding text, determine the screen width corresponding to each character. When multiple characters compose a single cluster, the width of the entire cluster is divided equally among the characters.
    * @param text text that self corresponds to (glyph_item->item->offset is an offset from the start of text)
    * @param logicalWidths an array whose length is the number of characters in glyph_item (equal to glyph_item->item->num_chars) to be filled in with the resulting character widths. 
    */
  getLogicalWidths(text: string, logicalWidths: number): void;
  /**
    * Adds spacing between the graphemes of self to give the effect of typographic letter spacing.
    * @param text text that self corresponds to (glyph_item->item->offset is an offset from the start of text)
    * @param logAttrs logical attributes for the item (the first logical attribute refers to the position before the first character in the item)
    * @param letterSpacing amount of letter spacing to add in Pango units. May be negative, though too large negative values will give ugly results. 
    */
  letterSpace(text: string, logAttrs: import('../Pango').LogAttr, letterSpacing: number): void;
  /**
    * Modifies self to cover only the text after split_index, and returns a new item that covers the text before split_index that used to be in self. You can think of split_index as the length of the returned item. split_index may not be 0, and it may not be greater than or equal to the length of self (that is, there must be at least one byte assigned to each item, you can’t create a zero-length item).
    * @param text text to which positions in self apply
    * @param splitIndex byte index of position to split item, relative to the start of the item
    * @returns the newly allocated item representing text before split_index, which should be freed with Pango.GlyphItem.free(). 
    */
  split(text: string, splitIndex: number): import('../Pango').GlyphItem;
}

