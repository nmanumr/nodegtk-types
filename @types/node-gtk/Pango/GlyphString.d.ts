/**
  * The Pango.GlyphString structure is used to store strings
of glyphs with geometry and visual attribute information.
The storage for the glyph information is owned
by the structure which simplifies memory management. 
  */
export declare class GlyphString {
  /**
    * Create a new Pango.GlyphString.
    * @returns the newly allocated Pango.GlyphString, which should be freed with Pango.GlyphString.free(). 
    */
  static new(): import('../Pango').GlyphString;
  /**
    * Copy a glyph string and associated storage.
    * @returns the newly allocated Pango.GlyphString, which should be freed with Pango.GlyphString.free(), or None if self was None. 
    */
  copy(): import('../Pango').GlyphString | null;
  /**
    * Compute the logical and ink extents of a glyph string. See the documentation for Pango.Font.get_glyph_extents() for details about the interpretation of the rectangles.
    * @param font a Pango.Font
    * @returns ink_rect:rectangle used to store the extents of the glyph string as drawn or None to indicate that the result is not needed. logical_rect:rectangle used to store the logical extents of the glyph string or None to indicate that the result is not needed. 
    */
  extents(font: import('../Pango').Font): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Computes the extents of a sub-portion of a glyph string. The extents are relative to the start of the glyph string range (the origin of their coordinate system is at the start of the range, not at the start of the entire glyph string).
    * @param start start index
    * @param end end index (the range is the set of bytes with indices such that start <= index < end)
    * @param font a Pango.Font
    * @returns ink_rect:rectangle used to store the extents of the glyph string range as drawn or None to indicate that the result is not needed. logical_rect:rectangle used to store the logical extents of the glyph string range or None to indicate that the result is not needed. 
    */
  extentsRange(start: number, end: number, font: import('../Pango').Font): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Free a glyph string and associated storage. 
    */
  free(): void;
  /**
    * Given a Pango.GlyphString resulting from Pango.shape() and the corresponding text, determine the screen width corresponding to each character. When multiple characters compose a single cluster, the width of the entire cluster is divided equally among the characters.
    * @param text the text corresponding to the glyphs
    * @param length the length of text, in bytes
    * @param embeddingLevel the embedding level of the string
    * @param logicalWidths an array whose length is the number of characters in text (equal to GLib.utf8_strlen (text, length) unless text has NUL bytes) to be filled in with the resulting character widths. 
    */
  getLogicalWidths(text: string, length: number, embeddingLevel: number, logicalWidths: number): void;
  /**
    * Computes the logical width of the glyph string as can also be computed using Pango.GlyphString.extents().  However, since this only computes the width, it’s much faster.  This is in fact only a convenience function that computes the sum of geometry.width for each glyph in the self.
    * @returns the logical width of the glyph string. 
    */
  getWidth(): number;
  /**
    * Converts from character position to x position. (X position is measured from the left edge of the run). Character positions are computed by dividing up each cluster into equal portions.
    * @param text the text for the run
    * @param length the number of bytes (not characters) in text.
    * @param analysis the analysis information return from Pango.itemize()
    * @param index the byte index within text
    * @param trailing whether we should compute the result for the beginning (False) or end (True) of the character.
    * @returns location to store result 
    */
  indexToX(text: string, length: number, analysis: import('../Pango').Analysis, index: number, trailing: boolean): number;
  /**
    * Resize a glyph string to the given length.
    * @param newLen the new length of the string. 
    */
  setSize(newLen: number): void;
  /**
    * Convert from x offset to character position. Character positions are computed by dividing up each cluster into equal portions. In scripts where positioning within a cluster is not allowed (such as Thai), the returned value may not be a valid cursor position; the caller must combine the result with the logical attributes for the text to compute the valid cursor position.
    * @param text the text for the run
    * @param length the number of bytes (not characters) in text.
    * @param analysis the analysis information return from Pango.itemize()
    * @param xPos the x offset (in Pango units)
    * @returns index_:location to store calculated byte index within text trailing:location to store a boolean indicating whether the user clicked on the leading or trailing edge of the character. 
    */
  xToIndex(text: string, length: number, analysis: import('../Pango').Analysis, xPos: number): [number, number];
}

