/**
  * A Pango.GlyphItemIter is an iterator over the clusters in a
Pango.GlyphItem.  The forward direction of the
iterator is the logical direction of text.  That is, with increasing
start_index and start_char values.  If glyph_item is right-to-left
(that is, if @glyph_item->item->analysis.level is odd),
then start_glyph decreases as the iterator moves forward.  Moreover,
in right-to-left cases, start_glyph is greater than end_glyph. 
  */
export declare class GlyphItemIter {
  /**
    * Make a shallow copy of an existing Pango.GlyphItemIter structure.
    * @returns the newly allocated Pango.GlyphItemIter, which should be freed with Pango.GlyphItemIter.free(), or None if self was None. 
    */
  copy(): import('../Pango').GlyphItemIter | null;
  /**
    * Frees a Pango.GlyphItemIter created by Pango.GlyphItemIter.copy(). 
    */
  free(): void;
  /**
    * Initializes a Pango.GlyphItemIter structure to point to the last cluster in a glyph item. See Pango.GlyphItemIter for details of cluster orders.
    * @param glyphItem the glyph item to iterate over
    * @param text text corresponding to the glyph item
    * @returns False if there are no clusters in the glyph item 
    */
  initEnd(glyphItem: import('../Pango').GlyphItem, text: string): boolean;
  /**
    * Initializes a Pango.GlyphItemIter structure to point to the first cluster in a glyph item. See Pango.GlyphItemIter for details of cluster orders.
    * @param glyphItem the glyph item to iterate over
    * @param text text corresponding to the glyph item
    * @returns False if there are no clusters in the glyph item 
    */
  initStart(glyphItem: import('../Pango').GlyphItem, text: string): boolean;
  /**
    * Advances the iterator to the next cluster in the glyph item. See Pango.GlyphItemIter for details of cluster orders.
    * @returns True if the iterator was advanced, False if we were already on the last cluster. 
    */
  nextCluster(): boolean;
  /**
    * Moves the iterator to the preceding cluster in the glyph item. See Pango.GlyphItemIter for details of cluster orders.
    * @returns True if the iterator was moved, False if we were already on the first cluster. 
    */
  prevCluster(): boolean;
}

