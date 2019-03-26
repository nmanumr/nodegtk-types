/**
  * A Pango.LayoutIter structure can be used to
iterate over the visual extents of a Pango.Layout. 
  */
export declare class LayoutIter {
  /**
    * Determines whether self is on the last line of the layout.
    * @returns True if self is on the last line. 
    */
  atLastLine(): boolean;
  /**
    * Copies a Pango.LayoutIter.
    * @returns the newly allocated Pango.LayoutIter, which should be freed with Pango.LayoutIter.free(), or None if self was None. 
    */
  copy(): import('../Pango').LayoutIter | null;
  /**
    * Frees an iterator that’s no longer in use. 
    */
  free(): void;
  /**
    * Gets the Y position of the current line’s baseline, in layout coordinates (origin at top left of the entire layout).
    * @returns baseline of current line. 
    */
  getBaseline(): number;
  /**
    * Gets the extents of the current character, in layout coordinates (origin is the top left of the entire layout). Only logical extents can sensibly be obtained for characters; ink extents make sense only down to the level of clusters.
    * @returns rectangle to fill with logical extents 
    */
  getCharExtents(): import('../Pango').Rectangle;
  /**
    * Gets the extents of the current cluster, in layout coordinates (origin is the top left of the entire layout).
    * @returns ink_rect:rectangle to fill with ink extents, or None logical_rect:rectangle to fill with logical extents, or None 
    */
  getClusterExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets the current byte index. Note that iterating forward by str moves in visual order, not logical order, so indexes may not be sequential. Also, the index may be equal to the length of the text in the layout, if on the None run (see Pango.LayoutIter.get_run()).
    * @returns current byte index. 
    */
  getIndex(): number;
  /**
    * Gets the layout associated with a Pango.LayoutIter.
    * @returns the layout associated with self. 
    */
  getLayout(): import('../Pango').Layout;
  /**
    * Obtains the extents of the Pango.Layout being iterated over. ink_rect or logical_rect can be None if you aren’t interested in them.
    * @returns ink_rect:rectangle to fill with ink extents, or None logical_rect:rectangle to fill with logical extents, or None 
    */
  getLayoutExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets the current line.
    * @returns the current line. 
    */
  getLine(): import('../Pango').LayoutLine;
  /**
    * Obtains the extents of the current line. ink_rect or logical_rect can be None if you aren’t interested in them. Extents are in layout coordinates (origin is the top-left corner of the entire Pango.Layout).  Thus the extents returned by this function will be the same width/height but not at the same x/y as the extents returned from Pango.LayoutLine.get_extents().
    * @returns ink_rect:rectangle to fill with ink extents, or None logical_rect:rectangle to fill with logical extents, or None 
    */
  getLineExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets the current line for read-only access.
    * @returns the current line, that should not be modified. 
    */
  getLineReadonly(): import('../Pango').LayoutLine;
  /**
    * Divides the vertical space in the Pango.Layout being iterated over between the lines in the layout, and returns the space belonging to the current line.  A line’s range includes the line’s logical extents, plus half of the spacing above and below the line, if Pango.Layout.set_spacing() has been called to set layout spacing. The Y positions are in layout coordinates (origin at top left of the entire layout).
    * @returns y0_:start of line, or None y1_:end of line, or None 
    */
  getLineYrange(): [number, number];
  /**
    * Gets the current run. When iterating by run, at the end of each line, there’s a position with a None run, so this function can return None. The None run at the end of each line ensures that all lines have at least one run, even lines consisting of only a newline.
    * @returns the current run. 
    */
  getRun(): import('../Pango').GlyphItem | null;
  /**
    * Gets the extents of the current run in layout coordinates (origin is the top left of the entire layout).
    * @returns ink_rect:rectangle to fill with ink extents, or None logical_rect:rectangle to fill with logical extents, or None 
    */
  getRunExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets the current run. When iterating by run, at the end of each line, there’s a position with a None run, so this function can return None. The None run at the end of each line ensures that all lines have at least one run, even lines consisting of only a newline.
    * @returns the current run, that should not be modified. 
    */
  getRunReadonly(): import('../Pango').GlyphItem | null;
  /**
    * Moves self forward to the next character in visual order. If self was already at the end of the layout, returns False.
    * @returns whether motion was possible. 
    */
  nextChar(): boolean;
  /**
    * Moves self forward to the next cluster in visual order. If self was already at the end of the layout, returns False.
    * @returns whether motion was possible. 
    */
  nextCluster(): boolean;
  /**
    * Moves self forward to the start of the next line. If self is already on the last line, returns False.
    * @returns whether motion was possible. 
    */
  nextLine(): boolean;
  /**
    * Moves self forward to the next run in visual order. If self was already at the end of the layout, returns False.
    * @returns whether motion was possible. 
    */
  nextRun(): boolean;
}

