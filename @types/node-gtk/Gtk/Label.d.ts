import * as Gtk from '../Gtk';
export declare interface Label extends Gtk.Misc { }

/**
  * The Gtk.Label widget displays a small amount of text. As the name
implies, most labels are used to label another widget such as a
Gtk.Button, a Gtk.MenuItem, or a Gtk.ComboBox. 
  */
export declare class Label {
  /**
    * Creates a new label with the given text inside it. You can pass None to get an empty label widget.
    * @param str The text of the label
    * @returns the new Gtk.Label 
    */
  static new(str: string | null): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Label, containing the text in str.
    * @param str The text of the label, with an underscore in front of the mnemonic character
    * @returns the new Gtk.Label 
    */
  static newWithMnemonic(str: string | null): import('../Gtk').Widget;
  /**
    * Gets the angle of rotation for the label. See Gtk.Label.set_angle().
    * @returns the angle of rotation for the label 
    */
  getAngle(): number;
  /**
    * Gets the attribute list that was set on the label using Gtk.Label.set_attributes(), if any. This function does not reflect attributes that come from the labels markup (see Gtk.Label.set_markup()). If you want to get the effective attributes for the label, use pango_layout_get_attribute (Gtk.Label.get_layout (label)).
    * @returns the attribute list, or None if none was set. 
    */
  getAttributes(): import('../Pango').AttrList | null;
  /**
    * Returns the URI for the currently active link in the label. The active link is the one under the mouse pointer or, in a selectable label, the link in which the text cursor is currently positioned.
    * @returns the currently active URI. The string is owned by GTK+ and must not be freed or modified. 
    */
  getCurrentUri(): string;
  /**
    * Returns the ellipsizing position of the label. See Gtk.Label.set_ellipsize().
    * @returns Pango.EllipsizeMode 
    */
  getEllipsize(): import('../Pango').EllipsizeMode;
  /**
    * Returns the justification of the label. See Gtk.Label.set_justify().
    * @returns Gtk.Justification 
    */
  getJustify(): import('../Gtk').Justification;
  /**
    * Fetches the text from a label widget including any embedded underlines indicating mnemonics and Pango markup. (See Gtk.Label.get_text()).
    * @returns the text of the label widget. This string is owned by the widget and must not be modified or freed. 
    */
  getLabel(): string;
  /**
    * Gets the Pango.Layout used to display the label. The layout is useful to e.g. convert text positions to pixel positions, in combination with Gtk.Label.get_layout_offsets(). The returned layout is owned by the self so need not be freed by the caller. The self is free to recreate its layout at any time, so it should be considered read-only.
    * @returns the Pango.Layout for this label 
    */
  getLayout(): import('../Pango').Layout;
  /**
    * Obtains the coordinates where the label will draw the Pango.Layout representing the text in the label; useful to convert mouse events into coordinates inside the Pango.Layout, e.g. to take some action if some part of the label is clicked. Of course you will need to create a Gtk.EventBox to receive the events, and pack the label inside it, since labels are windowless (they return False from Gtk.Widget.get_has_window()). Remember when using the Pango.Layout functions you need to convert to and from pixels using PANGO_PIXELS() or Pango.SCALE.
    * @returns x:location to store X offset of layout, or None y:location to store Y offset of layout, or None 
    */
  getLayoutOffsets(): [number, number];
  /**
    * Returns whether lines in the label are automatically wrapped. See Gtk.Label.set_line_wrap().
    * @returns True if the lines of the label are automatically wrapped. 
    */
  getLineWrap(): boolean;
  /**
    * Returns line wrap mode used by the label. See Gtk.Label.set_line_wrap_mode().
    * @returns True if the lines of the label are automatically wrapped. 
    */
  getLineWrapMode(): import('../Pango').WrapMode;
  /**
    * Gets the number of lines to which an ellipsized, wrapping label should be limited. See Gtk.Label.set_lines().
    * @returns The number of lines 
    */
  getLines(): number;
  /**
    * Retrieves the desired maximum width of self, in characters. See Gtk.Label.set_width_chars().
    * @returns the maximum width of the label in characters. 
    */
  getMaxWidthChars(): number;
  /**
    * If the label has been set so that it has an mnemonic key this function returns the keyval used for the mnemonic accelerator. If there is no mnemonic set up it returns Gdk.KEY_VoidSymbol.
    * @returns GDK keyval usable for accelerators, or Gdk.KEY_VoidSymbol 
    */
  getMnemonicKeyval(): number;
  /**
    * Retrieves the target of the mnemonic (keyboard shortcut) of this label. See Gtk.Label.set_mnemonic_widget().
    * @returns the target of the label’s mnemonic, or None if none has been set and the default algorithm will be used. 
    */
  getMnemonicWidget(): import('../Gtk').Widget | null;
  /**
    * Gets the value set by Gtk.Label.set_selectable().
    * @returns True if the user can copy text from the label 
    */
  getSelectable(): boolean;
  /**
    * Gets the selected range of characters in the label, returning True if there’s a selection.
    * @returns True if selection is non-empty  start:return location for start of selection, as a character offset end:return location for end of selection, as a character offset 
    */
  getSelectionBounds(): [boolean, number, number];
  /**
    * Returns whether the label is in single line mode.
    * @returns True when the label is in single line mode. 
    */
  getSingleLineMode(): boolean;
  /**
    * Fetches the text from a label widget, as displayed on the screen. This does not include any embedded underlines indicating mnemonics or Pango markup. (See Gtk.Label.get_label())
    * @returns the text in the label widget. This is the internal string used by the label, and must not be modified. 
    */
  getText(): string;
  /**
    * Returns whether the label is currently keeping track of clicked links.
    * @returns True if clicked links are remembered 
    */
  getTrackVisitedLinks(): boolean;
  /**
    * Returns whether the label’s text is interpreted as marked up with the Pango text markup language. See Gtk.Label.set_use_markup ().
    * @returns True if the label’s text will be parsed for markup. 
    */
  getUseMarkup(): boolean;
  /**
    * Returns whether an embedded underline in the label indicates a mnemonic. See Gtk.Label.set_use_underline().
    * @returns True whether an embedded underline in the label indicates the mnemonic accelerator keys. 
    */
  getUseUnderline(): boolean;
  /**
    * Retrieves the desired width of self, in characters. See Gtk.Label.set_width_chars().
    * @returns the width of the label in characters. 
    */
  getWidthChars(): number;
  /**
    * Gets the Gtk.Label :xalign property for self.
    * @returns the xalign property 
    */
  getXalign(): number;
  /**
    * Gets the Gtk.Label :yalign property for self.
    * @returns the yalign property 
    */
  getYalign(): number;
  /**
    * Selects a range of characters in the label, if the label is selectable. See Gtk.Label.set_selectable(). If the label is not selectable, this function has no effect. If start_offset or end_offset are -1, then the end of the label will be substituted.
    * @param startOffset start offset (in characters not bytes)
    * @param endOffset end offset (in characters not bytes) 
    */
  selectRegion(startOffset: number, endOffset: number): void;
  /**
    * Sets the angle of rotation for the label. An angle of 90 reads from from bottom to top, an angle of 270, from top to bottom. The angle setting for the label is ignored if the label is selectable, wrapped, or ellipsized.
    * @param angle the angle that the baseline of the label makes with the horizontal, in degrees, measured counterclockwise 
    */
  setAngle(angle: number): void;
  /**
    * Sets a Pango.AttrList; the attributes in the list are applied to the label text.
    * @param attrs a Pango.AttrList, or None 
    */
  setAttributes(attrs: import('../Pango').AttrList | null): void;
  /**
    * Sets the mode used to ellipsize (add an ellipsis: “…”) to the text if there is not enough space to render the entire string.
    * @param mode a Pango.EllipsizeMode 
    */
  setEllipsize(mode: import('../Pango').EllipsizeMode): void;
  /**
    * Sets the alignment of the lines in the text of the label relative to each other. Gtk.Justification.LEFT is the default value when the widget is first created with Gtk.Label.new(). If you instead want to set the alignment of the label as a whole, use Gtk.Widget.set_halign() instead. Gtk.Label.set_justify() has no effect on labels containing only a single line.
    * @param jtype a Gtk.Justification 
    */
  setJustify(jtype: import('../Gtk').Justification): void;
  /**
    * Sets the text of the label. The label is interpreted as including embedded underlines and/or Pango markup depending on the values of the Gtk.Label :use-underline and Gtk.Label :use-markup properties.
    * @param str the new text to set for the label 
    */
  setLabel(str: string): void;
  /**
    * Toggles line wrapping within the Gtk.Label widget. True makes it break lines if text exceeds the widget’s size. False lets the text get cut off by the edge of the widget if it exceeds the widget size.
    * @param wrap the setting 
    */
  setLineWrap(wrap: boolean): void;
  /**
    * If line wrapping is on (see Gtk.Label.set_line_wrap()) this controls how the line wrapping is done. The default is Pango.WrapMode.WORD which means wrap on word boundaries.
    * @param wrapMode the line wrapping mode 
    */
  setLineWrapMode(wrapMode: import('../Pango').WrapMode): void;
  /**
    * Sets the number of lines to which an ellipsized, wrapping label should be limited. This has no effect if the label is not wrapping or ellipsized. Set this to -1 if you don’t want to limit the number of lines.
    * @param lines the desired number of lines, or -1 
    */
  setLines(lines: number): void;
  /**
    * Parses str which is marked up with the Pango text markup language, setting the label’s text and attribute list based on the parse results.
    * @param str a markup string (see Pango markup format) 
    */
  setMarkup(str: string): void;
  /**
    * Parses str which is marked up with the Pango text markup language, setting the label’s text and attribute list based on the parse results. If characters in str are preceded by an underscore, they are underlined indicating that they represent a keyboard accelerator called a mnemonic.
    * @param str a markup string (see Pango markup format) 
    */
  setMarkupWithMnemonic(str: string): void;
  /**
    * Sets the desired maximum width in characters of self to n_chars.
    * @param nChars the new desired maximum width, in characters. 
    */
  setMaxWidthChars(nChars: number): void;
  /**
    * If the label has been set so that it has an mnemonic key (using i.e. Gtk.Label.set_markup_with_mnemonic(), Gtk.Label.set_text_with_mnemonic(), Gtk.Label.new_with_mnemonic() or the “use_underline” property) the label can be associated with a widget that is the target of the mnemonic. When the label is inside a widget (like a Gtk.Button or a Gtk.Notebook tab) it is automatically associated with the correct widget, but sometimes (i.e. when the target is a Gtk.Entry next to the label) you need to set it explicitly using this function.
    * @param widget the target Gtk.Widget, or None to unset 
    */
  setMnemonicWidget(widget: import('../Gtk').Widget | null): void;
  /**
    * The pattern of underlines you want under the existing text within the Gtk.Label widget.  For example if the current text of the label says “FooBarBaz” passing a pattern of “___   ___” will underline “Foo” and “Baz” but not “Bar”.
    * @param pattern The pattern as described above. 
    */
  setPattern(pattern: string): void;
  /**
    * Selectable labels allow the user to select text from the label, for copy-and-paste.
    * @param setting True to allow selecting text in the label 
    */
  setSelectable(setting: boolean): void;
  /**
    * Sets whether the label is in single line mode.
    * @param singleLineMode True if the label should be in single line mode 
    */
  setSingleLineMode(singleLineMode: boolean): void;
  /**
    * Sets the text within the Gtk.Label widget. It overwrites any text that was there before.
    * @param str The text you want to set 
    */
  setText(str: string): void;
  /**
    * Sets the label’s text from the string str. If characters in str are preceded by an underscore, they are underlined indicating that they represent a keyboard accelerator called a mnemonic. The mnemonic key can be used to activate another widget, chosen automatically, or explicitly using Gtk.Label.set_mnemonic_widget().
    * @param str a string 
    */
  setTextWithMnemonic(str: string): void;
  /**
    * Sets whether the label should keep track of clicked links (and use a different color for them).
    * @param trackLinks True to track visited links 
    */
  setTrackVisitedLinks(trackLinks: boolean): void;
  /**
    * Sets whether the text of the label contains markup in Pango’s text markup language. See Gtk.Label.set_markup().
    * @param setting True if the label’s text should be parsed for markup. 
    */
  setUseMarkup(setting: boolean): void;
  /**
    * If true, an underline in the text indicates the next character should be used for the mnemonic accelerator key.
    * @param setting True if underlines in the text indicate mnemonics 
    */
  setUseUnderline(setting: boolean): void;
  /**
    * Sets the desired width in characters of self to n_chars.
    * @param nChars the new desired width, in characters. 
    */
  setWidthChars(nChars: number): void;
  /**
    * Sets the Gtk.Label :xalign property for self.
    * @param xalign the new xalign value, between 0 and 1 
    */
  setXalign(xalign: number): void;
  /**
    * Sets the Gtk.Label :yalign property for self.
    * @param yalign the new yalign value, between 0 and 1 
    */
  setYalign(yalign: number): void;
  /**
    * Angle at which the label is rotated 
    */
  angle: number;
  /**
    * A list of style attributes to apply to the text of the label 
    */
  attributes: import('../Pango').AttrList;
  /**
    * The current position of the insertion cursor in chars 
    */
  readonly cursorPosition: number;
  /**
    * The preferred place to ellipsize the string, if the label does not have enough room to display the entire string 
    */
  ellipsize: import('../Pango').EllipsizeMode;
  /**
    * The alignment of the lines in the text of the label relative to each other. This does NOT affect the alignment of the label within its allocation. See Gtk.Label :xalign for that 
    */
  justify: import('../Gtk').Justification;
  /**
    * The text of the label 
    */
  label: string;
  /**
    * The desired number of lines, when ellipsizing a wrapping label 
    */
  lines: number;
  /**
    * The desired maximum width of the label, in characters 
    */
  maxWidthChars: number;
  /**
    * The mnemonic accelerator key for this label 
    */
  readonly mnemonicKeyval: number;
  /**
    * The widget to be activated when the label’s mnemonic key is pressed 
    */
  mnemonicWidget: import('../Gtk').Widget;
  /**
    * A string with _ characters in positions correspond to characters in the text to underline 
    */
  pattern: string;
  /**
    * Whether the label text can be selected with the mouse 
    */
  selectable: boolean;
  /**
    * The position of the opposite end of the selection from the cursor in chars 
    */
  readonly selectionBound: number;
  /**
    * Whether the label is in single line mode 
    */
  singleLineMode: boolean;
  /**
    * Whether visited links should be tracked 
    */
  trackVisitedLinks: boolean;
  /**
    * The text of the label includes XML markup. See Pango.parse_markup() 
    */
  useMarkup: boolean;
  /**
    * If set, an underline in the text indicates the next character should be used for the mnemonic accelerator key 
    */
  useUnderline: boolean;
  /**
    * The desired width of the label, in characters 
    */
  widthChars: number;
  /**
    * If set, wrap lines if the text becomes too wide 
    */
  wrap: boolean;
  /**
    * If wrap is set, controls how linewrapping is done 
    */
  wrapMode: import('../Pango').WrapMode;
}

