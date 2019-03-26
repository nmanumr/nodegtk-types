/**
  * The Pango.LayoutLine structure represents one of the lines resulting
from laying out a paragraph via Pango.Layout. Pango.LayoutLine
structures are obtained by calling Pango.Layout.get_line() and
are only valid until the text, attributes, or settings of the
parent Pango.Layout are modified. 
  */
export declare class LayoutLine {
  /**
    * Computes the logical and ink extents of a layout line. See Pango.Font.get_glyph_extents() for details about the interpretation of the rectangles.
    * @returns ink_rect:rectangle used to store the extents of the glyph string as drawn, or None logical_rect:rectangle used to store the logical extents of the glyph string, or None 
    */
  getExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Computes the logical and ink extents of self in device units. This function just calls Pango.LayoutLine.get_extents() followed by two Pango.extents_to_pixels() calls, rounding ink_rect and logical_rect such that the rounded rectangles fully contain the unrounded one (that is, passes them as first argument to Pango.extents_to_pixels()).
    * @returns ink_rect:rectangle used to store the extents of the glyph string as drawn, or None logical_rect:rectangle used to store the logical extents of the glyph string, or None 
    */
  getPixelExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets a list of visual ranges corresponding to a given logical range. This list is not necessarily minimal - there may be consecutive ranges which are adjacent. The ranges will be sorted from left to right. The ranges are with respect to the left edge of the entire layout, not with respect to the line.
    * @param startIndex Start byte index of the logical range. If this value is less than the start index for the line, then the first range will extend all the way to the leading edge of the layout. Otherwise it will start at the leading edge of the first character.
    * @param endIndex Ending byte index of the logical range. If this value is greater than the end index for the line, then the last range will extend all the way to the trailing edge of the layout. Otherwise, it will end at the trailing edge of the last character.
    * @returns location to store a pointer to an array of ranges. The array will be of length 2*n_ranges, with each range starting at (*ranges)[2*n] and of width (*ranges)[2*n + 1] - (*ranges)[2*n]. This array must be freed with GLib.free(). The coordinates are relative to the layout and are in Pango units. 
    */
  getXRanges(startIndex: number, endIndex: number): number[];
  /**
    * Converts an index within a line to a X position.
    * @param index byte offset of a grapheme within the layout
    * @param trailing an integer indicating the edge of the grapheme to retrieve the position of. If > 0, the trailing edge of the grapheme, if 0, the leading of the grapheme.
    * @returns location to store the x_offset (in Pango unit) 
    */
  indexToX(index: number, trailing: boolean): number;
  /**
    * Increase the reference count of a Pango.LayoutLine by one.
    * @returns the line passed in. 
    */
  ref(): import('../Pango').LayoutLine;
  /**
    * Decrease the reference count of a Pango.LayoutLine by one. If the result is zero, the line and all associated memory will be freed. 
    */
  unref(): void;
  /**
    * Converts from x offset to the byte index of the corresponding character within the text of the layout. If x_pos is outside the line, index_ and trailing will point to the very first or very last position in the line. This determination is based on the resolved direction of the paragraph; for example, if the resolved direction is right-to-left, then an X position to the right of the line (after it) results in 0 being stored in index_ and trailing. An X position to the left of the line results in index_ pointing to the (logical) last grapheme in the line and trailing being set to the number of characters in that grapheme. The reverse is true for a left-to-right line.
    * @param xPos the X offset (in Pango units) from the left edge of the line.
    * @returns False if x_pos was outside the line, True if inside  index_:location to store calculated byte index for the grapheme in which the user clicked. trailing:location to store an integer indicating where in the grapheme the user clicked. It will either be zero, or the number of characters in the grapheme. 0 represents the leading edge of the grapheme. 
    */
  xToIndex(xPos: number): [boolean, number, number];
}

