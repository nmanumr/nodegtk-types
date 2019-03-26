import * as Gtk from '../Gtk';
export declare interface Entry extends Gtk.Widget, Gtk.CellEditable, Gtk.Editable { }

/**
  * The Gtk.Entry widget is a single line text entry
widget. A fairly large set of key bindings are supported
by default. If the entered text is longer than the allocation
of the widget, the widget will scroll so that the cursor
position is visible. 
  */
export declare class Entry {
  /**
    * Creates a new entry.
    * @returns a new Gtk.Entry. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new entry with the specified text buffer.
    * @param buffer The buffer to use for the new Gtk.Entry.
    * @returns a new Gtk.Entry 
    */
  static newWithBuffer(buffer: import('../Gtk').EntryBuffer): import('../Gtk').Widget;
  /**
    * Retrieves the value set by Gtk.Entry.set_activates_default().
    * @returns True if the entry will activate the default widget 
    */
  getActivatesDefault(): boolean;
  /**
    * Gets the value set by Gtk.Entry.set_alignment().
    * @returns the alignment 
    */
  getAlignment(): number;
  /**
    * Gets the attribute list that was set on the entry using Gtk.Entry.set_attributes(), if any.
    * @returns the attribute list, or None if none was set. 
    */
  getAttributes(): import('../Pango').AttrList | null;
  /**
    * Get the Gtk.EntryBuffer object which holds the text for this widget.
    * @returns A Gtk.EntryBuffer object. 
    */
  getBuffer(): import('../Gtk').EntryBuffer;
  /**
    * Returns the auxiliary completion object currently in use by self.
    * @returns The auxiliary completion object currently in use by self. 
    */
  getCompletion(): import('../Gtk').EntryCompletion;
  /**
    * Returns the index of the icon which is the source of the current DND operation, or -1.
    * @returns index of the icon which is the source of the current DND operation, or -1. 
    */
  getCurrentIconDragSource(): number;
  /**
    * Retrieves the horizontal cursor adjustment for the entry. See Gtk.Entry.set_cursor_hadjustment().
    * @returns the horizontal cursor adjustment, or None if none has been set. 
    */
  getCursorHadjustment(): import('../Gtk').Adjustment | null;
  /**
    * Gets the value set by Gtk.Entry.set_has_frame().
    * @returns whether the entry has a beveled frame 
    */
  getHasFrame(): boolean;
  /**
    * Returns whether the icon is activatable.
    * @param iconPos Icon position
    * @returns True if the icon is activatable. 
    */
  getIconActivatable(iconPos: import('../Gtk').EntryIconPosition): boolean;
  /**
    * Gets the area where entry’s icon at icon_pos is drawn. This function is useful when drawing something to the entry in a draw callback.
    * @param iconPos Icon position
    * @returns Return location for the icon’s area 
    */
  getIconArea(iconPos: import('../Gtk').EntryIconPosition): import('../Gdk').Rectangle;
  /**
    * Finds the icon at the given position and return its index. The position’s coordinates are relative to the self’s top left corner. If x, y doesn’t lie inside an icon, -1 is returned. This function is intended for use in a Gtk.Widget ::query-tooltip signal handler.
    * @param x the x coordinate of the position to find
    * @param y the y coordinate of the position to find
    * @returns the index of the icon at the given position, or -1 
    */
  getIconAtPos(x: number, y: number): number;
  /**
    * Retrieves the Gio.Icon used for the icon, or None if there is no icon or if the icon was set by some other method (e.g., by stock, pixbuf, or icon name).
    * @param iconPos Icon position
    * @returns A Gio.Icon, or None if no icon is set or if the icon is not a Gio.Icon 
    */
  getIconGicon(iconPos: import('../Gtk').EntryIconPosition): import('../Gio').Icon | null;
  /**
    * Retrieves the icon name used for the icon, or None if there is no icon or if the icon was set by some other method (e.g., by pixbuf, stock or gicon).
    * @param iconPos Icon position
    * @returns An icon name, or None if no icon is set or if the icon wasn’t set from an icon name 
    */
  getIconName(iconPos: import('../Gtk').EntryIconPosition): string | null;
  /**
    * Retrieves the image used for the icon.
    * @param iconPos Icon position
    * @returns A GdkPixbuf.Pixbuf, or None if no icon is set for this position. 
    */
  getIconPixbuf(iconPos: import('../Gtk').EntryIconPosition): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Returns whether the icon appears sensitive or insensitive.
    * @param iconPos Icon position
    * @returns True if the icon is sensitive. 
    */
  getIconSensitive(iconPos: import('../Gtk').EntryIconPosition): boolean;
  /**
    * Retrieves the stock id used for the icon, or None if there is no icon or if the icon was set by some other method (e.g., by pixbuf, icon name or gicon).
    * @param iconPos Icon position
    * @returns A stock id, or None if no icon is set or if the icon wasn’t set from a stock id 
    */
  getIconStock(iconPos: import('../Gtk').EntryIconPosition): string;
  /**
    * Gets the type of representation being used by the icon to store image data. If the icon has no image data, the return value will be Gtk.ImageType.EMPTY.
    * @param iconPos Icon position
    * @returns image representation being used 
    */
  getIconStorageType(iconPos: import('../Gtk').EntryIconPosition): import('../Gtk').ImageType;
  /**
    * Gets the contents of the tooltip on the icon at the specified position in self.
    * @param iconPos the icon position
    * @returns the tooltip text, or None. Free the returned string with GLib.free() when done. 
    */
  getIconTooltipMarkup(iconPos: import('../Gtk').EntryIconPosition): string | null;
  /**
    * Gets the contents of the tooltip on the icon at the specified position in self.
    * @param iconPos the icon position
    * @returns the tooltip text, or None. Free the returned string with GLib.free() when done. 
    */
  getIconTooltipText(iconPos: import('../Gtk').EntryIconPosition): string | null;
  /**
    * This function returns the entry’s Gtk.Entry :inner-border property. See Gtk.Entry.set_inner_border() for more information.
    * @returns the entry’s Gtk.Border, or None if none was set. 
    */
  getInnerBorder(): import('../Gtk').Border | null;
  /**
    * Gets the value of the Gtk.Entry :input-hints property. 
    */
  getInputHints(): import('../Gtk').InputHints;
  /**
    * Gets the value of the Gtk.Entry :input-purpose property. 
    */
  getInputPurpose(): import('../Gtk').InputPurpose;
  /**
    * Retrieves the character displayed in place of the real characters for entries with visibility set to false. See Gtk.Entry.set_invisible_char().
    * @returns the current invisible str, or 0, if the entry does not show invisible text at all. 
    */
  getInvisibleChar(): string;
  /**
    * Gets the Pango.Layout used to display the entry. The layout is useful to e.g. convert text positions to pixel positions, in combination with Gtk.Entry.get_layout_offsets(). The returned layout is owned by the entry and must not be modified or freed by the caller.
    * @returns the Pango.Layout for this entry 
    */
  getLayout(): import('../Pango').Layout;
  /**
    * Obtains the position of the Pango.Layout used to render text in the entry, in widget coordinates. Useful if you want to line up the text in an entry with some other text, e.g. when using the entry to implement editable cells in a sheet widget.
    * @returns x:location to store X offset of layout, or None y:location to store Y offset of layout, or None 
    */
  getLayoutOffsets(): [number, number];
  /**
    * Retrieves the maximum allowed length of the text in self. See Gtk.Entry.set_max_length().
    * @returns the maximum allowed number of characters in Gtk.Entry, or 0 if there is no maximum. 
    */
  getMaxLength(): number;
  /**
    * Retrieves the desired maximum width of self, in characters. See Gtk.Entry.set_max_width_chars().
    * @returns the maximum width of the entry, in characters 
    */
  getMaxWidthChars(): number;
  /**
    * Gets the value set by Gtk.Entry.set_overwrite_mode().
    * @returns whether the text is overwritten when typing. 
    */
  getOverwriteMode(): boolean;
  /**
    * Retrieves the text that will be displayed when self is empty and unfocused
    * @returns a pointer to the placeholder text as a string. This string points to internally allocated storage in the widget and must not be freed, modified or stored. 
    */
  getPlaceholderText(): string;
  /**
    * Returns the current fraction of the task that’s been completed. See Gtk.Entry.set_progress_fraction().
    * @returns a fraction from 0.0 to 1.0 
    */
  getProgressFraction(): number;
  /**
    * Retrieves the pulse step set with Gtk.Entry.set_progress_pulse_step().
    * @returns a fraction from 0.0 to 1.0 
    */
  getProgressPulseStep(): number;
  /**
    * Gets the tabstops that were set on the entry using Gtk.Entry.set_tabs(), if any.
    * @returns the tabstops, or None if none was set. 
    */
  getTabs(): import('../Pango').TabArray | null;
  /**
    * Retrieves the contents of the entry widget. See also Gtk.Editable.get_chars().
    * @returns a pointer to the contents of the widget as a string. This string points to internally allocated storage in the widget and must not be freed, modified or stored. 
    */
  getText(): string;
  /**
    * Gets the area where the entry’s text is drawn. This function is useful when drawing something to the entry in a draw callback.
    * @returns Return location for the text area. 
    */
  getTextArea(): import('../Gdk').Rectangle;
  /**
    * Retrieves the current length of the text in self.
    * @returns the current number of characters in Gtk.Entry, or 0 if there are none. 
    */
  getTextLength(): number;
  /**
    * Retrieves whether the text in self is visible. See Gtk.Entry.set_visibility().
    * @returns True if the text is currently visible 
    */
  getVisibility(): boolean;
  /**
    * Gets the value set by Gtk.Entry.set_width_chars().
    * @returns number of chars to request space for, or negative if unset 
    */
  getWidthChars(): number;
  /**
    * Causes self to have keyboard focus. 
    */
  grabFocusWithoutSelecting(): void;
  /**
    * Allow the Gtk.Entry input method to internally handle key press and release events. If this function returns True, then no further processing should be done for this key event. See Gtk.IMContext.filter_keypress().
    * @param event the key event
    * @returns True if the input method handled the key event. 
    */
  imContextFilterKeypress(event: import('../Gdk').EventKey): boolean;
  /**
    * Converts from a position in the entry’s Pango.Layout (returned by Gtk.Entry.get_layout()) to a position in the entry contents (returned by Gtk.Entry.get_text()).
    * @param layoutIndex byte index into the entry layout text
    * @returns byte index into the entry contents 
    */
  layoutIndexToTextIndex(layoutIndex: number): number;
  /**
    * Indicates that some progress is made, but you don’t know how much. Causes the entry’s progress indicator to enter “activity mode,” where a block bounces back and forth. Each call to Gtk.Entry.progress_pulse() causes the block to move by a little bit (the amount of movement per pulse is determined by Gtk.Entry.set_progress_pulse_step()). 
    */
  progressPulse(): void;
  /**
    * Reset the input method context of the entry if needed. 
    */
  resetImContext(): void;
  /**
    * If setting is True, pressing Enter in the self will activate the default widget for the window containing the entry. This usually means that the dialog box containing the entry will be closed, since the default widget is usually one of the dialog buttons.
    * @param setting True to activate window’s default widget on Enter keypress 
    */
  setActivatesDefault(setting: boolean): void;
  /**
    * Sets the alignment for the contents of the entry. This controls the horizontal positioning of the contents when the displayed text is shorter than the width of the entry.
    * @param xalign The horizontal alignment, from 0 (left) to 1 (right). Reversed for RTL layouts 
    */
  setAlignment(xalign: number): void;
  /**
    * Sets a Pango.AttrList; the attributes in the list are applied to the entry text.
    * @param attrs a Pango.AttrList 
    */
  setAttributes(attrs: import('../Pango').AttrList): void;
  /**
    * Set the Gtk.EntryBuffer object which holds the text for this widget.
    * @param buffer a Gtk.EntryBuffer 
    */
  setBuffer(buffer: import('../Gtk').EntryBuffer): void;
  /**
    * Sets completion to be the auxiliary completion object to use with self. All further configuration of the completion mechanism is done on completion using the Gtk.EntryCompletion API. Completion is disabled if completion is set to None.
    * @param completion The Gtk.EntryCompletion or None 
    */
  setCompletion(completion: import('../Gtk').EntryCompletion | null): void;
  /**
    * Hooks up an adjustment to the cursor position in an entry, so that when the cursor is moved, the adjustment is scrolled to show that position. See Gtk.ScrolledWindow.get_hadjustment() for a typical way of obtaining the adjustment.
    * @param adjustment an adjustment which should be adjusted when the cursor is moved, or None 
    */
  setCursorHadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Sets whether the entry has a beveled frame around it.
    * @param setting new value 
    */
  setHasFrame(setting: boolean): void;
  /**
    * Sets whether the icon is activatable.
    * @param iconPos Icon position
    * @param activatable True if the icon should be activatable 
    */
  setIconActivatable(iconPos: import('../Gtk').EntryIconPosition, activatable: boolean): void;
  /**
    * Sets up the icon at the given position so that GTK+ will start a drag operation when the user clicks and drags the icon.
    * @param iconPos icon position
    * @param targetList the targets (data formats) in which the data can be provided
    * @param actions a bitmask of the allowed drag actions 
    */
  setIconDragSource(iconPos: import('../Gtk').EntryIconPosition, targetList: import('../Gtk').TargetList, actions: import('../Gdk').DragAction): void;
  /**
    * Sets the icon shown in the entry at the specified position from the current icon theme. If the icon isn’t known, a “broken image” icon will be displayed instead.
    * @param iconPos The position at which to set the icon
    * @param icon The icon to set, or None 
    */
  setIconFromGicon(iconPos: import('../Gtk').EntryIconPosition, icon: import('../Gio').Icon | null): void;
  /**
    * Sets the icon shown in the entry at the specified position from the current icon theme.
    * @param iconPos The position at which to set the icon
    * @param iconName An icon name, or None 
    */
  setIconFromIconName(iconPos: import('../Gtk').EntryIconPosition, iconName: string | null): void;
  /**
    * Sets the icon shown in the specified position using a pixbuf.
    * @param iconPos Icon position
    * @param pixbuf A GdkPixbuf.Pixbuf, or None 
    */
  setIconFromPixbuf(iconPos: import('../Gtk').EntryIconPosition, pixbuf: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Sets the icon shown in the entry at the specified position from a stock image.
    * @param iconPos Icon position
    * @param stockId The name of the stock item, or None 
    */
  setIconFromStock(iconPos: import('../Gtk').EntryIconPosition, stockId: string | null): void;
  /**
    * Sets the sensitivity for the specified icon.
    * @param iconPos Icon position
    * @param sensitive Specifies whether the icon should appear sensitive or insensitive 
    */
  setIconSensitive(iconPos: import('../Gtk').EntryIconPosition, sensitive: boolean): void;
  /**
    * Sets tooltip as the contents of the tooltip for the icon at the specified position. tooltip is assumed to be marked up with the Pango text markup language.
    * @param iconPos the icon position
    * @param tooltip the contents of the tooltip for the icon, or None 
    */
  setIconTooltipMarkup(iconPos: import('../Gtk').EntryIconPosition, tooltip: string | null): void;
  /**
    * Sets tooltip as the contents of the tooltip for the icon at the specified position.
    * @param iconPos the icon position
    * @param tooltip the contents of the tooltip for the icon, or None 
    */
  setIconTooltipText(iconPos: import('../Gtk').EntryIconPosition, tooltip: string | null): void;
  /**
    * Sets %entry’s inner-border property to border, or clears it if None is passed. The inner-border is the area around the entry’s text, but inside its frame.
    * @param border a Gtk.Border, or None 
    */
  setInnerBorder(border: import('../Gtk').Border | null): void;
  /**
    * Sets the Gtk.Entry :input-hints property, which allows input methods to fine-tune their behaviour.
    * @param hints the hints 
    */
  setInputHints(hints: import('../Gtk').InputHints): void;
  /**
    * Sets the Gtk.Entry :input-purpose property which can be used by on-screen keyboards and other input methods to adjust their behaviour.
    * @param purpose the purpose 
    */
  setInputPurpose(purpose: import('../Gtk').InputPurpose): void;
  /**
    * Sets the character to use in place of the actual text when Gtk.Entry.set_visibility() has been called to set text visibility to False. i.e. this is the character used in “password mode” to show the user how many characters have been typed. By default, GTK+ picks the best invisible str available in the current font. If you set the invisible str to 0, then the user will get no feedback at all; there will be no text on the screen as they type.
    * @param ch a Unicode character 
    */
  setInvisibleChar(ch: string): void;
  /**
    * Sets the maximum allowed length of the contents of the widget. If the current contents are longer than the given length, then they will be truncated to fit.
    * @param max the maximum length of the entry, or 0 for no maximum. (other than the maximum length of entries.) The value passed in will be clamped to the range 0-65536. 
    */
  setMaxLength(max: number): void;
  /**
    * Sets the desired maximum width in characters of self.
    * @param nChars the new desired maximum width, in characters 
    */
  setMaxWidthChars(nChars: number): void;
  /**
    * Sets whether the text is overwritten when typing in the Gtk.Entry.
    * @param overwrite new value 
    */
  setOverwriteMode(overwrite: boolean): void;
  /**
    * Sets text to be displayed in self when it is empty and unfocused. This can be used to give a visual hint of the expected contents of the Gtk.Entry.
    * @param text a string to be displayed when self is empty and unfocused, or None 
    */
  setPlaceholderText(text: string | null): void;
  /**
    * Causes the entry’s progress indicator to “fill in” the given fraction of the bar. The fraction should be between 0.0 and 1.0, inclusive.
    * @param fraction fraction of the task that’s been completed 
    */
  setProgressFraction(fraction: number): void;
  /**
    * Sets the fraction of total entry width to move the progress bouncing block for each call to Gtk.Entry.progress_pulse().
    * @param fraction fraction between 0.0 and 1.0 
    */
  setProgressPulseStep(fraction: number): void;
  /**
    * Sets a Pango.TabArray; the tabstops in the array are applied to the entry text.
    * @param tabs a Pango.TabArray 
    */
  setTabs(tabs: import('../Pango').TabArray): void;
  /**
    * Sets the text in the widget to the given value, replacing the current contents.
    * @param text the new text 
    */
  setText(text: string): void;
  /**
    * Sets whether the contents of the entry are visible or not. When visibility is set to False, characters are displayed as the invisible str, and will also appear that way when the text in the entry widget is copied elsewhere.
    * @param visible True if the contents of the entry are displayed as plaintext 
    */
  setVisibility(visible: boolean): void;
  /**
    * Changes the size request of the entry to be about the right size for n_chars characters. Note that it changes the size request, the size can still be affected by how you pack the widget into containers. If n_chars is -1, the size reverts to the default entry size.
    * @param nChars width in chars 
    */
  setWidthChars(nChars: number): void;
  /**
    * Converts from a position in the entry contents (returned by Gtk.Entry.get_text()) to a position in the entry’s Pango.Layout (returned by Gtk.Entry.get_layout(), with text retrieved via Pango.Layout.get_text()).
    * @param textIndex byte index into the entry contents
    * @returns byte index into the entry layout text 
    */
  textIndexToLayoutIndex(textIndex: number): number;
  /**
    * Unsets the invisible str previously set with Gtk.Entry.set_invisible_char(). So that the default invisible str is used again. 
    */
  unsetInvisibleChar(): void;
  /**
    * Whether to activate the default widget (such as the default button in a dialog) when Enter is pressed 
    */
  activatesDefault: boolean;
  /**
    * A list of style attributes to apply to the text of the label 
    */
  attributes: import('../Pango').AttrList;
  /**
    * Text buffer object which actually stores entry text 
    */
  buffer: import('../Gtk').EntryBuffer;
  /**
    * Whether password entries will show a warning when Caps Lock is on 
    */
  capsLockWarning: boolean;
  /**
    * The auxiliary completion object 
    */
  completion: import('../Gtk').EntryCompletion;
  /**
    * The current position of the insertion cursor in chars 
    */
  readonly cursorPosition: number;
  /**
    * Whether the entry contents can be edited 
    */
  editable: boolean;
  /**
    * Whether to suggest Emoji replacements 
    */
  enableEmojiCompletion: boolean;
  /**
    * False removes outside bevel from entry 
    */
  hasFrame: boolean;
  /**
    * Which IM module should be used 
    */
  imModule: string;
  /**
    * Border between text and frame. Overrides the inner-border style property deprecated 
    */
  innerBorder: import('../Gtk').Border;
  /**
    * Hints for the text field behaviour 
    */
  inputHints: import('../Gtk').InputHints;
  /**
    * Purpose of the text field 
    */
  inputPurpose: import('../Gtk').InputPurpose;
  /**
    * The character to use when masking entry contents (in “password mode”) 
    */
  invisibleChar: number;
  /**
    * Whether the invisible character has been set 
    */
  invisibleCharSet: boolean;
  /**
    * Maximum number of characters for this entry. Zero if no maximum 
    */
  maxLength: number;
  /**
    * The desired maximum width of the entry, in characters 
    */
  maxWidthChars: number;
  /**
    * Whether new text overwrites existing text 
    */
  overwriteMode: boolean;
  /**
    * Show text in the entry when it’s empty and unfocused 
    */
  placeholderText: string;
  /**
    * Whether to emit ::populate-popup for touch popups 
    */
  populateAll: boolean;
  /**
    * Whether the primary icon is activatable 
    */
  primaryIconActivatable: boolean;
  /**
    * Gio.Icon for primary icon 
    */
  primaryIconGicon: import('../Gio').Icon;
  /**
    * Icon name for primary icon 
    */
  primaryIconName: string;
  /**
    * Primary pixbuf for the entry 
    */
  primaryIconPixbuf: import('../GdkPixbuf').Pixbuf;
  /**
    * Whether the primary icon is sensitive 
    */
  primaryIconSensitive: boolean;
  /**
    * Stock ID for primary icon deprecated 
    */
  primaryIconStock: string;
  /**
    * The representation being used for primary icon 
    */
  readonly primaryIconStorageType: import('../Gtk').ImageType;
  /**
    * The contents of the tooltip on the primary icon 
    */
  primaryIconTooltipMarkup: string;
  /**
    * The contents of the tooltip on the primary icon 
    */
  primaryIconTooltipText: string;
  /**
    * The current fraction of the task that’s been completed 
    */
  progressFraction: number;
  /**
    * The fraction of total entry width to move the progress bouncing block for each call to Gtk.Entry.progress_pulse() 
    */
  progressPulseStep: number;
  /**
    * Number of pixels of the entry scrolled off the screen to the left 
    */
  readonly scrollOffset: number;
  /**
    * Whether the secondary icon is activatable 
    */
  secondaryIconActivatable: boolean;
  /**
    * Gio.Icon for secondary icon 
    */
  secondaryIconGicon: import('../Gio').Icon;
  /**
    * Icon name for secondary icon 
    */
  secondaryIconName: string;
  /**
    * Secondary pixbuf for the entry 
    */
  secondaryIconPixbuf: import('../GdkPixbuf').Pixbuf;
  /**
    * Whether the secondary icon is sensitive 
    */
  secondaryIconSensitive: boolean;
  /**
    * Stock ID for secondary icon deprecated 
    */
  secondaryIconStock: string;
  /**
    * The representation being used for secondary icon 
    */
  readonly secondaryIconStorageType: import('../Gtk').ImageType;
  /**
    * The contents of the tooltip on the secondary icon 
    */
  secondaryIconTooltipMarkup: string;
  /**
    * The contents of the tooltip on the secondary icon 
    */
  secondaryIconTooltipText: string;
  /**
    * The position of the opposite end of the selection from the cursor in chars 
    */
  readonly selectionBound: number;
  /**
    * Which kind of shadow to draw around the entry when has-frame is set deprecated 
    */
  shadowType: import('../Gtk').ShadowType;
  /**
    * Whether to show an icon for Emoji 
    */
  showEmojiIcon: boolean;
  /**
    * A list of tabstop locations to apply to the text of the entry 
    */
  tabs: import('../Pango').TabArray;
  /**
    * The contents of the entry 
    */
  text: string;
  /**
    * Length of the text currently in the entry 
    */
  readonly textLength: number;
  /**
    * Whether to truncate multiline pastes to one line. 
    */
  truncateMultiline: boolean;
  /**
    * False displays the “invisible str” instead of the actual text (password mode) 
    */
  visibility: boolean;
  /**
    * Number of characters to leave space for in the entry 
    */
  widthChars: number;
  /**
    * The horizontal alignment, from 0 (left) to 1 (right). Reversed for RTL layouts. 
    */
  xalign: number;
}

