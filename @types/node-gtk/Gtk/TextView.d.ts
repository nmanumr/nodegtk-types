import * as Gtk from '../Gtk';

export declare interface TextView extends Gtk.Container, Gtk.Scrollable {
  getWindow(win: Gtk.TextWindowType): import('../Gdk').Window;
  getWindow(): import('../Gdk').Window;
}

/**
  * You may wish to begin by reading the
text widget conceptual overview
which gives an overview of all the objects and data
types related to the text widget and how they work together. 
  */
export declare class TextView {
  /**
    * Creates a new Gtk.TextView. If you don’t call Gtk.TextView.set_buffer() before using the text view, an empty default buffer will be created for you. Get the buffer with Gtk.TextView.get_buffer(). If you want to specify your own buffer, consider Gtk.TextView.new_with_buffer().
    * @returns a new Gtk.TextView 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.TextView widget displaying the buffer buffer. One buffer can be shared among many widgets. buffer may be None to create a default buffer, in which case this function is equivalent to Gtk.TextView.new(). The text view adds its own reference count to the buffer; it does not take over an existing reference.
    * @param buffer a Gtk.TextBuffer
    * @returns a new Gtk.TextView. 
    */
  static newWithBuffer(buffer: import('../Gtk').TextBuffer): import('../Gtk').Widget;
  /**
    * Adds a child widget in the text buffer, at the given anchor.
    * @param child a Gtk.Widget
    * @param anchor a Gtk.TextChildAnchor in the Gtk.TextBuffer for self 
    */
  addChildAtAnchor(child: import('../Gtk').Widget, anchor: import('../Gtk').TextChildAnchor): void;
  /**
    * Adds a child at fixed coordinates in one of the text widget’s windows.
    * @param child a Gtk.Widget
    * @param whichWindow which window the child should appear in
    * @param xpos X position of child in window coordinates
    * @param ypos Y position of child in window coordinates 
    */
  addChildInWindow(child: import('../Gtk').Widget, whichWindow: import('../Gtk').TextWindowType, xpos: number, ypos: number): void;
  /**
    * Moves the given iter backward by one display (wrapped) line. A display line is different from a paragraph. Paragraphs are separated by newlines or other paragraph separator characters. xlib.Display lines are created by line-wrapping a paragraph. If wrapping is turned off, display lines and paragraphs will be the same. xlib.Display lines are divided differently for each view, since they depend on the view’s width; paragraphs are the same in all views, since they depend on the contents of the Gtk.TextBuffer.
    * @param iter a Gtk.TextIter
    * @returns True if iter was moved and is not on the end iterator 
    */
  backwardDisplayLine(iter: import('../Gtk').TextIter): boolean;
  /**
    * Moves the given iter backward to the next display line start. A display line is different from a paragraph. Paragraphs are separated by newlines or other paragraph separator characters. xlib.Display lines are created by line-wrapping a paragraph. If wrapping is turned off, display lines and paragraphs will be the same. xlib.Display lines are divided differently for each view, since they depend on the view’s width; paragraphs are the same in all views, since they depend on the contents of the Gtk.TextBuffer.
    * @param iter a Gtk.TextIter
    * @returns True if iter was moved and is not on the end iterator 
    */
  backwardDisplayLineStart(iter: import('../Gtk').TextIter): boolean;
  /**
    * Converts coordinate (buffer_x, buffer_y) to coordinates for the window win, and stores the result in (window_x, window_y).
    * @param win a Gtk.TextWindowType, except Gtk.TextWindowType.PRIVATE
    * @param bufferX buffer x coordinate
    * @param bufferY buffer y coordinate
    * @returns window_x:window x coordinate return location or None window_y:window y coordinate return location or None 
    */
  bufferToWindowCoords(win: import('../Gtk').TextWindowType, bufferX: number, bufferY: number): [number, number];
  /**
    * Moves the given iter forward by one display (wrapped) line. A display line is different from a paragraph. Paragraphs are separated by newlines or other paragraph separator characters. xlib.Display lines are created by line-wrapping a paragraph. If wrapping is turned off, display lines and paragraphs will be the same. xlib.Display lines are divided differently for each view, since they depend on the view’s width; paragraphs are the same in all views, since they depend on the contents of the Gtk.TextBuffer.
    * @param iter a Gtk.TextIter
    * @returns True if iter was moved and is not on the end iterator 
    */
  forwardDisplayLine(iter: import('../Gtk').TextIter): boolean;
  /**
    * Moves the given iter forward to the next display line end. A display line is different from a paragraph. Paragraphs are separated by newlines or other paragraph separator characters. xlib.Display lines are created by line-wrapping a paragraph. If wrapping is turned off, display lines and paragraphs will be the same. xlib.Display lines are divided differently for each view, since they depend on the view’s width; paragraphs are the same in all views, since they depend on the contents of the Gtk.TextBuffer.
    * @param iter a Gtk.TextIter
    * @returns True if iter was moved and is not on the end iterator 
    */
  forwardDisplayLineEnd(iter: import('../Gtk').TextIter): boolean;
  /**
    * Returns whether pressing the Tab key inserts a tab characters. Gtk.TextView.set_accepts_tab().
    * @returns True if pressing the Tab key inserts a tab character, False if pressing the Tab key moves the keyboard focus. 
    */
  getAcceptsTab(): boolean;
  /**
    * Gets the width of the specified border window. See Gtk.TextView.set_border_window_size().
    * @param type window to return size from
    * @returns width of window 
    */
  getBorderWindowSize(type: import('../Gtk').TextWindowType): number;
  /**
    * Gets the bottom margin for text in the self.
    * @returns bottom margin in pixels 
    */
  getBottomMargin(): number;
  /**
    * Returns the Gtk.TextBuffer being displayed by this text view. The reference count on the buffer is not incremented; the caller of this function won’t own a new reference.
    * @returns a Gtk.TextBuffer 
    */
  getBuffer(): import('../Gtk').TextBuffer;
  /**
    * Given an iter within a text layout, determine the positions of the strong and weak cursors if the insertion point is at that iterator. The position of each cursor is stored as a zero-width rectangle. The strong cursor location is the location where characters of the directionality equal to the base direction of the paragraph are inserted.  The weak cursor location is the location where characters of the directionality opposite to the base direction of the paragraph are inserted.
    * @param iter a Gtk.TextIter
    * @returns strong:location to store the strong cursor position (may be None) weak:location to store the weak cursor position (may be None) 
    */
  getCursorLocations(iter: import('../Gtk').TextIter | null): [import('../Gdk').Rectangle, import('../Gdk').Rectangle];
  /**
    * Find out whether the cursor should be displayed.
    * @returns whether the insertion mark is visible 
    */
  getCursorVisible(): boolean;
  /**
    * Obtains a copy of the default text attributes. These are the attributes used for text unless a tag overrides them. You’d typically pass the default attributes in to Gtk.TextIter.get_attributes() in order to get the attributes in effect at a given text position.
    * @returns a new Gtk.TextAttributes 
    */
  getDefaultAttributes(): import('../Gtk').TextAttributes;
  /**
    * Returns the default editability of the Gtk.TextView. Tags in the buffer may override this setting for some ranges of text.
    * @returns whether text is editable by default 
    */
  getEditable(): boolean;
  /**
    * Gets the horizontal-scrolling Gtk.Adjustment.
    * @returns pointer to the horizontal Gtk.Adjustment 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the default indentation of paragraphs in self. Tags in the view’s buffer may override the default. The indentation may be negative.
    * @returns number of pixels of indentation 
    */
  getIndent(): number;
  /**
    * Gets the value of the Gtk.TextView :input-hints property. 
    */
  getInputHints(): import('../Gtk').InputHints;
  /**
    * Gets the value of the Gtk.TextView :input-purpose property. 
    */
  getInputPurpose(): import('../Gtk').InputPurpose;
  /**
    * Retrieves the iterator at buffer coordinates x and y. Buffer coordinates are coordinates for the entire buffer, not just the currently-displayed portion.  If you have coordinates from an event, you have to convert those to buffer coordinates with Gtk.TextView.window_to_buffer_coords().
    * @param x x position, in buffer coordinates
    * @param y y position, in buffer coordinates
    * @returns True if the position is over text   iter:a Gtk.TextIter 
    */
  getIterAtLocation(x: number, y: number): [boolean, import('../Gtk').TextIter];
  /**
    * Retrieves the iterator pointing to the character at buffer coordinates x and y. Buffer coordinates are coordinates for the entire buffer, not just the currently-displayed portion. If you have coordinates from an event, you have to convert those to buffer coordinates with Gtk.TextView.window_to_buffer_coords().
    * @param x x position, in buffer coordinates
    * @param y y position, in buffer coordinates
    * @returns True if the position is over text   iter:a Gtk.TextIter trailing:if non-None, location to store an integer indicating where in the grapheme the user clicked. It will either be zero, or the number of characters in the grapheme. 0 represents the trailing edge of the grapheme. 
    */
  getIterAtPosition(x: number, y: number): [boolean, import('../Gtk').TextIter, number];
  /**
    * Gets a rectangle which roughly contains the character at iter. The rectangle position is in buffer coordinates; use Gtk.TextView.buffer_to_window_coords() to convert these coordinates to coordinates for one of the windows in the text view.
    * @param iter a Gtk.TextIter
    * @returns bounds of the character at iter 
    */
  getIterLocation(iter: import('../Gtk').TextIter): import('../Gdk').Rectangle;
  /**
    * Gets the default justification of paragraphs in self. Tags in the buffer may override the default.
    * @returns default justification 
    */
  getJustification(): import('../Gtk').Justification;
  /**
    * Gets the default left margin size of paragraphs in the self. Tags in the buffer may override the default.
    * @returns left margin in pixels 
    */
  getLeftMargin(): number;
  /**
    * Gets the Gtk.TextIter at the start of the line containing the coordinate y. y is in buffer coordinates, convert from window coordinates with Gtk.TextView.window_to_buffer_coords(). If non-None, line_top will be filled with the coordinate of the top edge of the line.
    * @param y a y coordinate
    * @returns target_iter:a Gtk.TextIter line_top:return location for top coordinate of the line 
    */
  getLineAtY(y: number): [import('../Gtk').TextIter, number];
  /**
    * Gets the y coordinate of the top of the line containing iter, and the height of the line. The coordinate is a buffer coordinate; convert to window coordinates with Gtk.TextView.buffer_to_window_coords().
    * @param iter a Gtk.TextIter
    * @returns y:return location for a y coordinate height:return location for a height 
    */
  getLineYrange(iter: import('../Gtk').TextIter): [number, number];
  /**
    * Gets the value of the Gtk.TextView :monospace property.
    * @returns True if monospace fonts are desired 
    */
  getMonospace(): boolean;
  /**
    * Returns whether the Gtk.TextView is in overwrite mode or not.
    * @returns whether self is in overwrite mode or not. 
    */
  getOverwrite(): boolean;
  /**
    * Gets the default number of pixels to put above paragraphs. Adding this function with Gtk.TextView.get_pixels_below_lines() is equal to the line space between each paragraph.
    * @returns default number of pixels above paragraphs 
    */
  getPixelsAboveLines(): number;
  /**
    * Gets the value set by Gtk.TextView.set_pixels_below_lines().
    * @returns default number of blank pixels below paragraphs 
    */
  getPixelsBelowLines(): number;
  /**
    * Gets the value set by Gtk.TextView.set_pixels_inside_wrap().
    * @returns default number of pixels of blank space between wrapped lines 
    */
  getPixelsInsideWrap(): number;
  /**
    * Gets the default right margin for text in self. Tags in the buffer may override the default.
    * @returns right margin in pixels 
    */
  getRightMargin(): number;
  /**
    * Gets the default tabs for self. Tags in the buffer may override the defaults. The returned array will be None if “standard” (8-space) tabs are used. Free the return value with Pango.TabArray.free().
    * @returns copy of default tab array, or None if “standard” tabs are used; must be freed with Pango.TabArray.free(). 
    */
  getTabs(): import('../Pango').TabArray | null;
  /**
    * Gets the top margin for text in the self.
    * @returns top margin in pixels 
    */
  getTopMargin(): number;
  /**
    * Gets the vertical-scrolling Gtk.Adjustment.
    * @returns pointer to the vertical Gtk.Adjustment 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Fills visible_rect with the currently-visible region of the buffer, in buffer coordinates. Convert to window coordinates with Gtk.TextView.buffer_to_window_coords().
    * @returns rectangle to fill 
    */
  getVisibleRect(): import('../Gdk').Rectangle;
  /**
    * Retrieves the Gdk.Window corresponding to an area of the text view; possible windows include the overall widget window, child windows on the left, right, top, bottom, and the window that displays the text buffer. Windows are None and nonexistent if their width or height is 0, and are nonexistent before the widget has been realized.
    * @param win window to get
    * @returns a Gdk.Window, or None 
    */
  getWindow(win: import('../Gtk').TextWindowType): import('../Gdk').Window | null;
  /**
    * Usually used to find out which window an event corresponds to.
    * @param window a window type
    * @returns the window type. 
    */
  getWindowType(window: import('../Gdk').Window): import('../Gtk').TextWindowType;
  /**
    * Gets the line wrapping for the view.
    * @returns the line wrap setting 
    */
  getWrapMode(): import('../Gtk').WrapMode;
  /**
    * Allow the Gtk.TextView input method to internally handle key press and release events. If this function returns True, then no further processing should be done for this key event. See Gtk.IMContext.filter_keypress().
    * @param event the key event
    * @returns True if the input method handled the key event. 
    */
  imContextFilterKeypress(event: import('../Gdk').EventKey): boolean;
  /**
    * Updates the position of a child, as for Gtk.TextView.add_child_in_window().
    * @param child child widget already added to the text view
    * @param xpos new X position in window coordinates
    * @param ypos new Y position in window coordinates 
    */
  moveChild(child: import('../Gtk').Widget, xpos: number, ypos: number): void;
  /**
    * Moves a mark within the buffer so that it’s located within the currently-visible text area.
    * @param mark a Gtk.TextMark
    * @returns True if the mark moved (wasn’t already onscreen) 
    */
  moveMarkOnscreen(mark: import('../Gtk').TextMark): boolean;
  /**
    * Move the iterator a given number of characters visually, treating it as the strong cursor position. If count is positive, then the new strong cursor position will be count positions to the right of the old cursor position. If count is negative then the new strong cursor position will be count positions to the left of the old cursor position.
    * @param iter a Gtk.TextIter
    * @param count number of characters to move (negative moves left, positive moves right)
    * @returns True if iter moved and is not on the end iterator 
    */
  moveVisually(iter: import('../Gtk').TextIter, count: number): boolean;
  /**
    * Moves the cursor to the currently visible region of the buffer, it it isn’t there already.
    * @returns True if the cursor had to be moved. 
    */
  placeCursorOnscreen(): boolean;
  /**
    * Ensures that the cursor is shown (i.e. not in an ‘off’ blink interval) and resets the time that it will stay blinking (or visible, in case blinking is disabled). 
    */
  resetCursorBlink(): void;
  /**
    * Reset the input method context of the text view if needed. 
    */
  resetImContext(): void;
  /**
    * Scrolls self the minimum distance such that mark is contained within the visible area of the widget.
    * @param mark a mark in the buffer for self 
    */
  scrollMarkOnscreen(mark: import('../Gtk').TextMark): void;
  /**
    * Scrolls self so that iter is on the screen in the position indicated by xalign and yalign. An alignment of 0.0 indicates left or top, 1.0 indicates right or bottom, 0.5 means center. If use_align is False, the text scrolls the minimal distance to get the mark onscreen, possibly not scrolling at all. The effective screen for purposes of this function is reduced by a margin of size within_margin.
    * @param iter a Gtk.TextIter
    * @param withinMargin margin as a [0.0,0.5) fraction of screen size
    * @param useAlign whether to use alignment arguments (if False, just get the mark onscreen)
    * @param xalign horizontal alignment of mark within visible area
    * @param yalign vertical alignment of mark within visible area
    * @returns True if scrolling occurred 
    */
  scrollToIter(iter: import('../Gtk').TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean;
  /**
    * Scrolls self so that mark is on the screen in the position indicated by xalign and yalign. An alignment of 0.0 indicates left or top, 1.0 indicates right or bottom, 0.5 means center. If use_align is False, the text scrolls the minimal distance to get the mark onscreen, possibly not scrolling at all. The effective screen for purposes of this function is reduced by a margin of size within_margin.
    * @param mark a Gtk.TextMark
    * @param withinMargin margin as a [0.0,0.5) fraction of screen size
    * @param useAlign whether to use alignment arguments (if False, just get the mark onscreen)
    * @param xalign horizontal alignment of mark within visible area
    * @param yalign vertical alignment of mark within visible area 
    */
  scrollToMark(mark: import('../Gtk').TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void;
  /**
    * Sets the behavior of the text widget when the Tab key is pressed. If accepts_tab is True, a tab character is inserted. If accepts_tab is False the keyboard focus is moved to the next widget in the focus chain.
    * @param acceptsTab True if pressing the Tab key should insert a tab character, False, if pressing the Tab key should move the keyboard focus. 
    */
  setAcceptsTab(acceptsTab: boolean): void;
  /**
    * Sets the width of Gtk.TextWindowType.LEFT or Gtk.TextWindowType.RIGHT, or the height of Gtk.TextWindowType.TOP or Gtk.TextWindowType.BOTTOM. Automatically destroys the corresponding window if the size is set to 0, and creates the window if the size is set to non-zero.  This function can only be used for the “border windows”, and it won’t work with Gtk.TextWindowType.WIDGET, Gtk.TextWindowType.TEXT, or Gtk.TextWindowType.PRIVATE.
    * @param type window to affect
    * @param size width or height of the window 
    */
  setBorderWindowSize(type: import('../Gtk').TextWindowType, size: number): void;
  /**
    * Sets the bottom margin for text in self.
    * @param bottomMargin bottom margin in pixels 
    */
  setBottomMargin(bottomMargin: number): void;
  /**
    * Sets buffer as the buffer being displayed by self. The previous buffer displayed by the text view is unreferenced, and a reference is added to buffer. If you owned a reference to buffer before passing it to this function, you must remove that reference yourself; Gtk.TextView will not “adopt” it.
    * @param buffer a Gtk.TextBuffer 
    */
  setBuffer(buffer: import('../Gtk').TextBuffer | null): void;
  /**
    * Toggles whether the insertion point should be displayed. A buffer with no editable text probably shouldn’t have a visible cursor, so you may want to turn the cursor off.
    * @param setting whether to show the insertion cursor 
    */
  setCursorVisible(setting: boolean): void;
  /**
    * Sets the default editability of the Gtk.TextView. You can override this default setting with tags in the buffer, using the “editable” attribute of tags.
    * @param setting whether it’s editable 
    */
  setEditable(setting: boolean): void;
  /**
    * Sets the default indentation for paragraphs in self. Tags in the buffer may override the default.
    * @param indent indentation in pixels 
    */
  setIndent(indent: number): void;
  /**
    * Sets the Gtk.TextView :input-hints property, which allows input methods to fine-tune their behaviour.
    * @param hints the hints 
    */
  setInputHints(hints: import('../Gtk').InputHints): void;
  /**
    * Sets the Gtk.TextView :input-purpose property which can be used by on-screen keyboards and other input methods to adjust their behaviour.
    * @param purpose the purpose 
    */
  setInputPurpose(purpose: import('../Gtk').InputPurpose): void;
  /**
    * Sets the default justification of text in self. Tags in the view’s buffer may override the default.
    * @param justification justification 
    */
  setJustification(justification: import('../Gtk').Justification): void;
  /**
    * Sets the default left margin for text in self. Tags in the buffer may override the default.
    * @param leftMargin left margin in pixels 
    */
  setLeftMargin(leftMargin: number): void;
  /**
    * Sets the Gtk.TextView :monospace property, which indicates that the text view should use monospace fonts.
    * @param monospace True to request monospace styling 
    */
  setMonospace(monospace: boolean): void;
  /**
    * Changes the Gtk.TextView overwrite mode.
    * @param overwrite True to turn on overwrite mode, False to turn it off 
    */
  setOverwrite(overwrite: boolean): void;
  /**
    * Sets the default number of blank pixels above paragraphs in self. Tags in the buffer for self may override the defaults.
    * @param pixelsAboveLines pixels above paragraphs 
    */
  setPixelsAboveLines(pixelsAboveLines: number): void;
  /**
    * Sets the default number of pixels of blank space to put below paragraphs in self. May be overridden by tags applied to self’s buffer.
    * @param pixelsBelowLines pixels below paragraphs 
    */
  setPixelsBelowLines(pixelsBelowLines: number): void;
  /**
    * Sets the default number of pixels of blank space to leave between display/wrapped lines within a paragraph. May be overridden by tags in self’s buffer.
    * @param pixelsInsideWrap default number of pixels between wrapped lines 
    */
  setPixelsInsideWrap(pixelsInsideWrap: number): void;
  /**
    * Sets the default right margin for text in the text view. Tags in the buffer may override the default.
    * @param rightMargin right margin in pixels 
    */
  setRightMargin(rightMargin: number): void;
  /**
    * Sets the default tab stops for paragraphs in self. Tags in the buffer may override the default.
    * @param tabs tabs as a Pango.TabArray 
    */
  setTabs(tabs: import('../Pango').TabArray): void;
  /**
    * Sets the top margin for text in self.
    * @param topMargin top margin in pixels 
    */
  setTopMargin(topMargin: number): void;
  /**
    * Sets the line wrapping for the view.
    * @param wrapMode a Gtk.WrapMode 
    */
  setWrapMode(wrapMode: import('../Gtk').WrapMode): void;
  /**
    * Determines whether iter is at the start of a display line. See Gtk.TextView.forward_display_line() for an explanation of display lines vs. paragraphs.
    * @param iter a Gtk.TextIter
    * @returns True if iter begins a wrapped line 
    */
  startsDisplayLine(iter: import('../Gtk').TextIter): boolean;
  /**
    * Converts coordinates on the window identified by win to buffer coordinates, storing the result in (buffer_x,`buffer_y`).
    * @param win a Gtk.TextWindowType except Gtk.TextWindowType.PRIVATE
    * @param windowX window x coordinate
    * @param windowY window y coordinate
    * @returns buffer_x:buffer x coordinate return location or None buffer_y:buffer y coordinate return location or None 
    */
  windowToBufferCoords(win: import('../Gtk').TextWindowType, windowX: number, windowY: number): [number, number];
  /**
    * Whether Tab will result in a tab character being entered 
    */
  acceptsTab: boolean;
  /**
    * Height of the bottom margin in pixels 
    */
  bottomMargin: number;
  /**
    * The buffer which is displayed 
    */
  buffer: import('../Gtk').TextBuffer;
  /**
    * If the insertion cursor is shown 
    */
  cursorVisible: boolean;
  /**
    * Whether the text can be modified by the user 
    */
  editable: boolean;
  /**
    * Which IM module should be used 
    */
  imModule: string;
  /**
    * Amount to indent the paragraph, in pixels 
    */
  indent: number;
  /**
    * Hints for the text field behaviour 
    */
  inputHints: import('../Gtk').InputHints;
  /**
    * Purpose of the text field 
    */
  inputPurpose: import('../Gtk').InputPurpose;
  /**
    * Left, right, or center justification 
    */
  justification: import('../Gtk').Justification;
  /**
    * Width of the left margin in pixels 
    */
  leftMargin: number;
  /**
    * Whether to use a monospace font 
    */
  monospace: boolean;
  /**
    * Whether entered text overwrites existing contents 
    */
  overwrite: boolean;
  /**
    * Pixels of blank space above paragraphs 
    */
  pixelsAboveLines: number;
  /**
    * Pixels of blank space below paragraphs 
    */
  pixelsBelowLines: number;
  /**
    * Pixels of blank space between wrapped lines in a paragraph 
    */
  pixelsInsideWrap: number;
  /**
    * Whether to emit ::populate-popup for touch popups 
    */
  populateAll: boolean;
  /**
    * Width of the right margin in pixels 
    */
  rightMargin: number;
  /**
    * Custom tabs for this text 
    */
  tabs: import('../Pango').TabArray;
  /**
    * Height of the top margin in pixels 
    */
  topMargin: number;
  /**
    * Whether to wrap lines never, at word boundaries, or at character boundaries 
    */
  wrapMode: import('../Gtk').WrapMode;
}

