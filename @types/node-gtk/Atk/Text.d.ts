import * as GObject from '../GObject';
export declare interface Text extends GObject.GInterface { }

/**
  * Atk.Text should be implemented by Atk.Objects on behalf of widgets
that have text content which is either attributed or otherwise
non-trivial.  Atk.Objects whose text content is simple,
unattributed, and very brief may expose that content via
Atk.Object.get_name instead; however if the text is editable,
multi-line, typically longer than three or four words, attributed,
selectable, or if the object already uses the ‘name’ ATK property
for other information, the Atk.Text interface should be used to
expose the text content.  In the case of editable text content,
Atk.EditableText (a subtype of the Atk.Text interface) should be
implemented instead. 
  */
export declare class Text {
  /**
    * Frees the memory associated with an array of Atk.TextRange. It is assumed that the array was returned by the function Atk.Text.get_bounded_ranges and is None terminated.
    * @param ranges A pointer to an array of Atk.TextRange which is to be freed. 
    */
  static freeRanges(ranges: import('../Atk').TextRange): void;
  /**
    * Adds a selection bounded by the specified offsets.
    * @param startOffset the starting character offset of the selected region
    * @param endOffset the offset of the first character after the selected region.
    * @returns True if success, False otherwise 
    */
  addSelection(startOffset: number, endOffset: number): boolean;
  /**
    * Get the ranges of text in the specified bounding box.
    * @param rect An Atk.TextRectangle giving the dimensions of the bounding box.
    * @param coordType Specify whether coordinates are relative to the screen or widget window.
    * @param xClipType Specify the horizontal clip type.
    * @param yClipType Specify the vertical clip type.
    * @returns Array of Atk.TextRange. The last element of the array returned by this function will be None. 
    */
  getBoundedRanges(rect: import('../Atk').TextRectangle, coordType: import('../Atk').CoordType, xClipType: import('../Atk').TextClipType, yClipType: import('../Atk').TextClipType): import('../Atk').TextRange[];
  /**
    * Gets the offset of the position of the caret (cursor).
    * @returns the character offset of position of the caret (cursor). 
    */
  getCaretOffset(): number;
  /**
    * Gets the specified text.
    * @param offset a character offset within self
    * @returns the character at offset. 
    */
  getCharacterAtOffset(offset: number): string;
  /**
    * Gets the character count.
    * @returns the number of characters. 
    */
  getCharacterCount(): number;
  /**
    * Get the bounding box containing the glyph representing the character at a particular text offset.
    * @param offset The offset of the text character for which bounding information is required.
    * @param coords specify whether coordinates are relative to the screen or widget window
    * @returns x:Pointer for the x coordinate of the bounding box y:Pointer for the y coordinate of the bounding box width:Pointer for the width of the bounding box height:Pointer for the height of the bounding box 
    */
  getCharacterExtents(offset: number, coords: import('../Atk').CoordType): [number, number, number, number];
  /**
    * Creates an #AtkAttributeSet which consists of the default values of attributes for the text. See the enum Atk.TextAttribute for types of text attributes that can be returned. Note that other attributes may also be returned.
    * @returns an #AtkAttributeSet which contains the default values of attributes.  at offset. this #atkattributeset should be freed by a call to Atk.Attribute.set_free(). 
    */
  getDefaultAttributes(): Object[];
  /**
    * Gets the number of selected regions.
    * @returns The number of selected regions, or -1 if a failure occurred. 
    */
  getNSelections(): number;
  /**
    * Gets the offset of the character located at coordinates x and y. x and y are interpreted as being relative to the screen or this widget’s window depending on coords.
    * @param x screen x-position of character
    * @param y screen y-position of character
    * @param coords specify whether coordinates are relative to the screen or widget window
    * @returns the offset to the character which is located at the specified x and y coordinates. 
    */
  getOffsetAtPoint(x: number, y: number, coords: import('../Atk').CoordType): number;
  /**
    * Get the bounding box for text within the specified range.
    * @param startOffset The offset of the first text character for which boundary information is required.
    * @param endOffset The offset of the text character after the last character for which boundary information is required.
    * @param coordType Specify whether coordinates are relative to the screen or widget window.
    * @returns A pointer to a Atk.TextRectangle which is filled in by this function. 
    */
  getRangeExtents(startOffset: number, endOffset: number, coordType: import('../Atk').CoordType): import('../Atk').TextRectangle;
  /**
    * Creates an #AtkAttributeSet which consists of the attributes explicitly set at the position offset in the text. start_offset and end_offset are set to the start and end of the range around offset where the attributes are invariant. Note that end_offset is the offset of the first character after the range.  See the enum Atk.TextAttribute for types of text attributes that can be returned. Note that other attributes may also be returned.
    * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
    * @returns an #AtkAttributeSet which contains the attributes explicitly set at offset. This #AtkAttributeSet should be freed by a call to Atk.Attribute.set_free().  start_offset:the address to put the start offset of the range end_offset:the address to put the end offset of the range 
    */
  getRunAttributes(offset: number): [Object[], number, number];
  /**
    * Gets the text from the specified selection.
    * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
    * @returns a newly allocated string containing the selected text. Use GLib.free() to free the returned string.  start_offset:passes back the starting character offset of the selected region end_offset:passes back the ending character offset (offset immediately past) of the selected region 
    */
  getSelection(selectionNum: number): [string, number, number];
  /**
    * Gets a portion of the text exposed through an Atk.Text according to a given offset and a specific granularity, along with the start and end offsets defining the boundaries of such a portion of text.
    * @param offset position
    * @param granularity An Atk.TextGranularity
    * @returns a newly allocated string containing the text at the offset bounded by the specified granularity. Use GLib.free() to free the returned string.  Returns None if the offset is invalid or no implementation is available.   start_offset:the starting character offset of the returned string, or -1 if an error has occurred (e.g. invalid offset, not implemented) end_offset:the offset of the first character after the returned string, or -1 if an error has occurred (e.g. invalid offset, not implemented) 
    */
  getStringAtOffset(offset: number, granularity: import('../Atk').TextGranularity): [string | null, number, number];
  /**
    * Gets the specified text.
    * @param startOffset a starting character offset within self
    * @param endOffset an ending character offset within self, or -1 for the end of the string.
    * @returns a newly allocated string containing the text from start_offset up to, but not including end_offset. Use GLib.free() to free the returned string. 
    */
  getText(startOffset: number, endOffset: number): string;
  /**
    * Gets the specified text.
    * @param offset position
    * @param boundaryType An Atk.TextBoundary
    * @returns a newly allocated string containing the text after offset bounded by the specified boundary_type. Use GLib.free() to free the returned string.   start_offset:the starting character offset of the returned string end_offset:the offset of the first character after the returned substring 
    */
  getTextAfterOffset(offset: number, boundaryType: import('../Atk').TextBoundary): [string, number, number];
  /**
    * Gets the specified text.
    * @param offset position
    * @param boundaryType An Atk.TextBoundary
    * @returns a newly allocated string containing the text at offset bounded by the specified boundary_type. Use GLib.free() to free the returned string.   start_offset:the starting character offset of the returned string end_offset:the offset of the first character after the returned substring 
    */
  getTextAtOffset(offset: number, boundaryType: import('../Atk').TextBoundary): [string, number, number];
  /**
    * Gets the specified text.
    * @param offset position
    * @param boundaryType An Atk.TextBoundary
    * @returns a newly allocated string containing the text before offset bounded by the specified boundary_type. Use GLib.free() to free the returned string.   start_offset:the starting character offset of the returned string end_offset:the offset of the first character after the returned substring 
    */
  getTextBeforeOffset(offset: number, boundaryType: import('../Atk').TextBoundary): [string, number, number];
  /**
    * Removes the specified selection.
    * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
    * @returns True if success, False otherwise 
    */
  removeSelection(selectionNum: number): boolean;
  /**
    * Sets the caret (cursor) position to the specified offset.
    * @param offset the character offset of the new caret position
    * @returns True if success, False otherwise. 
    */
  setCaretOffset(offset: number): boolean;
  /**
    * Changes the start and end offset of the specified selection.
    * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
    * @param startOffset the new starting character offset of the selection
    * @param endOffset the new end position of (e.g. offset immediately past) the selection
    * @returns True if success, False otherwise 
    */
  setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean;
}