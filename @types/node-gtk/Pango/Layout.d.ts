import * as GObject from '../GObject';
export declare interface Layout extends GObject.Object { }

/**
  * The Pango.Layout structure represents an entire paragraph
of text. It is initialized with a Pango.Context, UTF-8 string
and set of attributes for that string. Once that is done, the
set of formatted lines can be extracted from the object,
the layout can be rendered, and conversion between logical
character positions within the layout’s text, and the physical
position of the resulting glyphs can be made. 
  */
export declare class Layout {
  /**
    * Create a new Pango.Layout object with attributes initialized to default values for a particular Pango.Context.
    * @param context a Pango.Context
    * @returns the newly allocated Pango.Layout, with a reference count of one, which should be freed with GObject.Object.unref(). 
    */
  static new(context: import('../Pango').Context): import('../Pango').Layout;
  /**
    * Forces recomputation of any state in the Pango.Layout that might depend on the layout’s context. This function should be called if you make changes to the context subsequent to creating the layout. 
    */
  contextChanged(): void;
  /**
    * Does a deep copy-by-value of the self layout. The attribute list, tab array, and text from the original layout are all copied by value.
    * @returns the newly allocated Pango.Layout, with a reference count of one, which should be freed with GObject.Object.unref(). 
    */
  copy(): import('../Pango').Layout;
  /**
    * Gets the alignment for the layout: how partial lines are positioned within the horizontal space available.
    * @returns the alignment. 
    */
  getAlignment(): import('../Pango').Alignment;
  /**
    * Gets the attribute list for the layout, if any.
    * @returns a Pango.AttrList. 
    */
  getAttributes(): import('../Pango').AttrList;
  /**
    * Gets whether to calculate the bidirectional base direction for the layout according to the contents of the layout. See Pango.Layout.set_auto_dir().
    * @returns True if the bidirectional base direction is computed from the layout’s contents, False otherwise. 
    */
  getAutoDir(): boolean;
  /**
    * Gets the Y position of baseline of the first line in self.
    * @returns baseline of first line, from top of self. 
    */
  getBaseline(): number;
  /**
    * Returns the number of Unicode characters in the the text of self.
    * @returns the number of Unicode characters in the text of self 
    */
  getCharacterCount(): number;
  /**
    * Retrieves the Pango.Context used for this layout.
    * @returns the Pango.Context for the layout. This does not have an additional refcount added, so if you want to keep a copy of this around, you must reference it yourself. 
    */
  getContext(): import('../Pango').Context;
  /**
    * Given an index within a layout, determines the positions that of the strong and weak cursors if the insertion point is at that index. The position of each cursor is stored as a zero-width rectangle. The strong cursor location is the location where characters of the directionality equal to the base direction of the layout are inserted.  The weak cursor location is the location where characters of the directionality opposite to the base direction of the layout are inserted.
    * @param index the byte index of the cursor
    * @returns strong_pos:location to store the strong cursor position (may be None) weak_pos:location to store the weak cursor position (may be None) 
    */
  getCursorPos(index: number): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets the type of ellipsization being performed for self. See Pango.Layout.set_ellipsize()
    * @returns the current ellipsization mode for self.Use Pango.Layout.is_ellipsized() to query whether any paragraphs were actually ellipsized. 
    */
  getEllipsize(): import('../Pango').EllipsizeMode;
  /**
    * Computes the logical and ink extents of self. Logical extents are usually what you want for positioning things.  Note that both extents may have non-zero x and y.  You may want to use those to offset where you render the layout.  Not doing that is a very typical bug that shows up as right-to-left layouts not being correctly positioned in a layout with a set width.
    * @returns ink_rect:rectangle used to store the extents of the layout as drawn or None to indicate that the result is not needed. logical_rect:rectangle used to store the logical extents of the layout or None to indicate that the result is not needed. 
    */
  getExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets the font description for the layout, if any.
    * @returns a pointer to the layout’s font description, or None if the font description from the layout’s context is inherited. This value is owned by the layout and must not be modified or freed. 
    */
  getFontDescription(): import('../Pango').FontDescription | null;
  /**
    * Gets the height of layout used for ellipsization.  See Pango.Layout.set_height() for details.
    * @returns the height, in Pango units if positive, or number of lines if negative. 
    */
  getHeight(): number;
  /**
    * Gets the paragraph indent width in Pango units. A negative value indicates a hanging indentation.
    * @returns the indent in Pango units. 
    */
  getIndent(): number;
  /**
    * Returns an iterator to iterate over the visual extents of the layout.
    * @returns the new Pango.LayoutIter that should be freed using Pango.LayoutIter.free(). 
    */
  getIter(): import('../Pango').LayoutIter;
  /**
    * Gets whether each complete line should be stretched to fill the entire width of the layout.
    * @returns the justify. 
    */
  getJustify(): boolean;
  /**
    * Retrieves a particular line from a Pango.Layout.
    * @param line the index of a line, which must be between 0 and pango_layout_get_line_count(layout) - 1, inclusive.
    * @returns the requested Pango.LayoutLine, or None if the index is out of range. This layout line can be ref’ed and retained, but will become invalid if changes are made to the Pango.Layout. 
    */
  getLine(line: number): import('../Pango').LayoutLine | null;
  /**
    * Retrieves the count of lines for the self.
    * @returns the line count. 
    */
  getLineCount(): number;
  /**
    * Retrieves a particular line from a Pango.Layout.
    * @param line the index of a line, which must be between 0 and pango_layout_get_line_count(layout) - 1, inclusive.
    * @returns the requested Pango.LayoutLine, or None if the index is out of range. This layout line can be ref’ed and retained, but will become invalid if changes are made to the Pango.Layout.  No changes should be made to the line. 
    */
  getLineReadonly(line: number): import('../Pango').LayoutLine | null;
  /**
    * Returns the lines of the self as a list.
    * @returns a GLib.SList containing the lines in the layout. This points to internal data of the Pango.Layout and must be used with care. It will become invalid on any change to the layout’s text or properties. 
    */
  getLines(): import('../Pango').LayoutLine[];
  /**
    * Returns the lines of the self as a list.
    * @returns a GLib.SList containing the lines in the layout. This points to internal data of the Pango.Layout and must be used with care. It will become invalid on any change to the layout’s text or properties.  No changes should be made to the lines. 
    */
  getLinesReadonly(): import('../Pango').LayoutLine[];
  /**
    * Retrieves an array of logical attributes for each character in the self.
    * @returns location to store a pointer to an array of logical attributes This value must be freed with GLib.free(). 
    */
  getLogAttrs(): import('../Pango').LogAttr[];
  /**
    * Retrieves an array of logical attributes for each character in the self.
    * @returns an array of logical attributes 
    */
  getLogAttrsReadonly(): import('../Pango').LogAttr[];
  /**
    * Computes the logical and ink extents of self in device units. This function just calls Pango.Layout.get_extents() followed by two Pango.extents_to_pixels() calls, rounding ink_rect and logical_rect such that the rounded rectangles fully contain the unrounded one (that is, passes them as first argument to Pango.extents_to_pixels()).
    * @returns ink_rect:rectangle used to store the extents of the layout as drawn or None to indicate that the result is not needed. logical_rect:rectangle used to store the logical extents of the layout or None to indicate that the result is not needed. 
    */
  getPixelExtents(): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Determines the logical width and height of a Pango.Layout in device units. (Pango.Layout.get_size() returns the width and height scaled by Pango.SCALE.) This is simply a convenience function around Pango.Layout.get_pixel_extents().
    * @returns width:location to store the logical width, or None height:location to store the logical height, or None 
    */
  getPixelSize(): [number, number];
  /**
    * Returns the current serial number of self.  The serial number is initialized to an small number  larger than zero when a new layout is created and is increased whenever the layout is changed using any of the setter functions, or the Pango.Context it uses has changed. The serial may wrap, but will never have the value 0. Since it can wrap, never compare it with “less than”, always use “not equals”.
    * @returns The current serial number of self. 
    */
  getSerial(): number;
  /**
    * Obtains the value set by Pango.Layout.set_single_paragraph_mode().
    * @returns True if the layout does not break paragraphs at paragraph separator characters, False otherwise. 
    */
  getSingleParagraphMode(): boolean;
  /**
    * Determines the logical width and height of a Pango.Layout in Pango units (device units scaled by Pango.SCALE). This is simply a convenience function around Pango.Layout.get_extents().
    * @returns width:location to store the logical width, or None height:location to store the logical height, or None 
    */
  getSize(): [number, number];
  /**
    * Gets the amount of spacing between the lines of the layout.
    * @returns the spacing in Pango units. 
    */
  getSpacing(): number;
  /**
    * Gets the current Pango.TabArray used by this layout. If no Pango.TabArray has been set, then the default tabs are in use and None is returned. Default tabs are every 8 spaces. The return value should be freed with Pango.TabArray.free().
    * @returns a copy of the tabs for this layout, or None. 
    */
  getTabs(): import('../Pango').TabArray | null;
  /**
    * Gets the text in the layout. The returned text should not be freed or modified.
    * @returns the text in the self. 
    */
  getText(): string;
  /**
    * Counts the number unknown glyphs in self.  That is, zero if glyphs for all characters in the layout text were found, or more than zero otherwise.
    * @returns The number of unknown glyphs in self. 
    */
  getUnknownGlyphsCount(): number;
  /**
    * Gets the width to which the lines of the Pango.Layout should wrap.
    * @returns the width in Pango units, or -1 if no width set. 
    */
  getWidth(): number;
  /**
    * Gets the wrap mode for the layout.
    * @returns active wrap mode. 
    */
  getWrap(): import('../Pango').WrapMode;
  /**
    * Converts from byte index_ within the self to line and X position. (X position is measured from the left edge of the line)
    * @param index the byte index of a grapheme within the layout.
    * @param trailing an integer indicating the edge of the grapheme to retrieve the position of. If > 0, the trailing edge of the grapheme, if 0, the leading of the grapheme.
    * @returns line:location to store resulting line index. (which will between 0 and Pango.Layout.get_line_count(layout) - 1), or None x_pos:location to store resulting position within line (Pango.SCALE units per device unit), or None 
    */
  indexToLineX(index: number, trailing: boolean): [number, number];
  /**
    * Converts from an index within a Pango.Layout to the onscreen position corresponding to the grapheme at that index, which is represented as rectangle.  Note that pos->x is always the leading edge of the grapheme and pos->x + pos->width the trailing edge of the grapheme. If the directionality of the grapheme is right-to-left, then pos->width will be negative.
    * @param index byte index within self
    * @returns rectangle in which to store the position of the grapheme 
    */
  indexToPos(index: number): import('../Pango').Rectangle;
  /**
    * Queries whether the layout had to ellipsize any paragraphs.
    * @returns True if any paragraphs had to be ellipsized, False otherwise. 
    */
  isEllipsized(): boolean;
  /**
    * Queries whether the layout had to wrap any paragraphs.
    * @returns True if any paragraphs had to be wrapped, False otherwise. 
    */
  isWrapped(): boolean;
  /**
    * Computes a new cursor position from an old position and a count of positions to move visually. If direction is positive, then the new strong cursor position will be one position to the right of the old cursor position. If direction is negative, then the new strong cursor position will be one position to the left of the old cursor position.
    * @param strong whether the moving cursor is the strong cursor or the weak cursor. The strong cursor is the cursor corresponding to text insertion in the base direction for the layout.
    * @param oldIndex the byte index of the grapheme for the old index
    * @param oldTrailing if 0, the cursor was at the leading edge of the grapheme indicated by old_index, if > 0, the cursor was at the trailing edge.
    * @param direction direction to move cursor. A negative value indicates motion to the left.
    * @returns new_index:location to store the new cursor byte index. A value of -1 indicates that the cursor has been moved off the beginning of the layout. A value of GObject.G_MAXINT indicates that the cursor has been moved off the end of the layout. new_trailing:number of characters to move forward from the location returned for new_index to get the position where the cursor should be displayed. This allows distinguishing the position at the beginning of one line from the position at the end of the preceding line. new_index is always on the line where the cursor should be displayed. 
    */
  moveCursorVisually(strong: boolean, oldIndex: number, oldTrailing: number, direction: number): [number, number];
  /**
    * Sets the alignment for the layout: how partial lines are positioned within the horizontal space available.
    * @param alignment the alignment 
    */
  setAlignment(alignment: import('../Pango').Alignment): void;
  /**
    * Sets the text attributes for a layout object. References attrs, so the caller can unref its reference.
    * @param attrs a Pango.AttrList, can be None 
    */
  setAttributes(attrs: import('../Pango').AttrList | null): void;
  /**
    * Sets whether to calculate the bidirectional base direction for the layout according to the contents of the layout; when this flag is on (the default), then paragraphs in self that begin with strong right-to-left characters (Arabic and Hebrew principally), will have right-to-left layout, paragraphs with letters from other scripts will have left-to-right layout. Paragraphs with only neutral characters get their direction from the surrounding paragraphs.
    * @param autoDir if True, compute the bidirectional base direction from the layout’s contents. 
    */
  setAutoDir(autoDir: boolean): void;
  /**
    * Sets the type of ellipsization being performed for self. Depending on the ellipsization mode ellipsize text is removed from the start, middle, or end of text so they fit within the width and height of layout set with Pango.Layout.set_width() and Pango.Layout.set_height().
    * @param ellipsize the new ellipsization mode for self 
    */
  setEllipsize(ellipsize: import('../Pango').EllipsizeMode): void;
  /**
    * Sets the default font description for the layout. If no font description is set on the layout, the font description from the layout’s context is used.
    * @param desc the new Pango.FontDescription, or None to unset the current font description 
    */
  setFontDescription(desc: import('../Pango').FontDescription | null): void;
  /**
    * Sets the height to which the Pango.Layout should be ellipsized at.  There are two different behaviors, based on whether height is positive or negative.
    * @param height the desired height of the layout in Pango units if positive, or desired number of lines if negative. 
    */
  setHeight(height: number): void;
  /**
    * Sets the width in Pango units to indent each paragraph. A negative value of indent will produce a hanging indentation. That is, the first line will have the full width, and subsequent lines will be indented by the absolute value of indent.
    * @param indent the amount by which to indent. 
    */
  setIndent(indent: number): void;
  /**
    * Sets whether each complete line should be stretched to fill the entire width of the layout. This stretching is typically done by adding whitespace, but for some scripts (such as Arabic), the justification may be done in more complex ways, like extending the characters.
    * @param justify whether the lines in the layout should be justified. 
    */
  setJustify(justify: boolean): void;
  /**
    * Same as Pango.Layout.set_markup_with_accel(), but the markup text isn’t scanned for accelerators.
    * @param markup marked-up text
    * @param length length of marked-up text in bytes, or -1 if markup is null-terminated 
    */
  setMarkup(markup: string, length: number): void;
  /**
    * Sets the layout text and attribute list from marked-up text (see
    * @param markup marked-up text (see markup format)
    * @param length length of marked-up text in bytes, or -1 if markup is null-terminated
    * @param accelMarker marker for accelerators in the text
    * @returns return location for first located accelerator, or None 
    */
  setMarkupWithAccel(markup: string, length: number, accelMarker: string): string;
  /**
    * If setting is True, do not treat newlines and similar characters as paragraph separators; instead, keep all text in a single paragraph, and display a glyph for paragraph separator characters. Used when you want to allow editing of newlines on a single text line.
    * @param setting new setting 
    */
  setSingleParagraphMode(setting: boolean): void;
  /**
    * Sets the amount of spacing in Pango unit between the lines of the layout.
    * @param spacing the amount of spacing 
    */
  setSpacing(spacing: number): void;
  /**
    * Sets the tabs to use for self, overriding the default tabs (by default, tabs are every 8 spaces). If tabs is None, the default tabs are reinstated. tabs is copied into the layout; you must free your copy of tabs yourself.
    * @param tabs a Pango.TabArray, or None 
    */
  setTabs(tabs: import('../Pango').TabArray | null): void;
  /**
    * Sets the text of the layout.
    * @param text a valid UTF-8 string
    * @param length maximum length of text, in bytes. -1 indicates that the string is nul-terminated and the length should be calculated.  The text will also be truncated on encountering a nul-termination even when length is positive. 
    */
  setText(text: string, length: number): void;
  /**
    * Sets the width to which the lines of the Pango.Layout should wrap or ellipsized.  The default value is -1: no width set.
    * @param width the desired width in Pango units, or -1 to indicate that no wrapping or ellipsization should be performed. 
    */
  setWidth(width: number): void;
  /**
    * Sets the wrap mode; the wrap mode only has effect if a width is set on the layout with Pango.Layout.set_width(). To turn off wrapping, set the width to -1.
    * @param wrap the wrap mode 
    */
  setWrap(wrap: import('../Pango').WrapMode): void;
  /**
    * Converts from X and Y position within a layout to the byte index to the character at that logical position. If the Y position is not inside the layout, the closest position is chosen (the position will be clamped inside the layout). If the X position is not within the layout, then the start or the end of the line is chosen as described for Pango.LayoutLine.x_to_index(). If either the X or Y positions were not inside the layout, then the function returns False; on an exact hit, it returns True.
    * @param x the X offset (in Pango units) from the left edge of the layout.
    * @param y the Y offset (in Pango units) from the top edge of the layout
    * @returns True if the coordinates were inside text, False otherwise.   index_:location to store calculated byte index trailing:location to store a integer indicating where in the grapheme the user clicked. It will either be zero, or the number of characters in the grapheme. 0 represents the leading edge of the grapheme. 
    */
  xyToIndex(x: number, y: number): [boolean, number, number];
}

