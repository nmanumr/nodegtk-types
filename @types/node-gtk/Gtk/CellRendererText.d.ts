import * as Gtk from '../Gtk';
export declare interface CellRendererText extends Gtk.CellRenderer { }

/**
  * A Gtk.CellRendererText renders a given text in its cell, using the font, color and
style information provided by its properties. The text will be ellipsized if it is
too long and the Gtk.CellRendererText :ellipsize property allows it. 
  */
export declare class CellRendererText {
  /**
    * Creates a new Gtk.CellRendererText. Adjust how text is drawn using object properties. Object properties can be set globally (with g_object_set()). Also, with Gtk.TreeViewColumn, you can bind a property to a value in a Gtk.TreeModel. For example, you can bind the “text” property on the cell renderer to a string value in the model, thus rendering a different string in each row of the Gtk.TreeView
    * @returns the new cell renderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * Sets the height of a renderer to explicitly be determined by the “font” and “y_pad” property set on it.  Further changes in these properties do not affect the height, so they must be accompanied by a subsequent call to this function.  Using this function is unflexible, and should really only be used if calculating the size of a cell is too slow (ie, a massive number of cells displayed).  If number_of_rows is -1, then the fixed height is unset, and the height is determined by the properties again.
    * @param numberOfRows Number of rows of text each cell renderer is allocated, or -1 
    */
  setFixedHeightFromFont(numberOfRows: number): void;
  /**
    * Whether this tag affects the alignment mode 
    */
  alignSet: boolean;
  /**
    * How to align the lines 
    */
  alignment: import('../Pango').Alignment;
  /**
    * A list of style attributes to apply to the text of the renderer 
    */
  attributes: import('../Pango').AttrList;
  /**
    * Background color as a string 
    */
  background: string;
  /**
    * Background color as a Gdk.Color deprecated 
    */
  backgroundGdk: import('../Gdk').Color;
  /**
    * Background color as a Gdk.RGBA 
    */
  backgroundRgba: import('../Gdk').RGBA;
  /**
    * Whether this tag affects the background color 
    */
  backgroundSet: boolean;
  /**
    * Whether the text can be modified by the user 
    */
  editable: boolean;
  /**
    * Whether this tag affects text editability 
    */
  editableSet: boolean;
  /**
    * The preferred place to ellipsize the string, if the cell renderer does not have enough room to display the entire string 
    */
  ellipsize: import('../Pango').EllipsizeMode;
  /**
    * Whether this tag affects the ellipsize mode 
    */
  ellipsizeSet: boolean;
  /**
    * Name of the font family, e.g. Sans, Helvetica, Times, Monospace 
    */
  family: string;
  /**
    * Whether this tag affects the font family 
    */
  familySet: boolean;
  /**
    * Font description as a string, e.g. “Sans Italic 12” 
    */
  font: string;
  /**
    * Font description as a Pango.FontDescription struct 
    */
  fontDesc: import('../Pango').FontDescription;
  /**
    * Foreground color as a string 
    */
  foreground: string;
  /**
    * Foreground color as a Gdk.Color deprecated 
    */
  foregroundGdk: import('../Gdk').Color;
  /**
    * Foreground color as a Gdk.RGBA 
    */
  foregroundRgba: import('../Gdk').RGBA;
  /**
    * Whether this tag affects the foreground color 
    */
  foregroundSet: boolean;
  /**
    * The language this text is in, as an ISO code. Pango can use this as a hint when rendering the text. If you don’t understand this parameter, you probably don’t need it 
    */
  language: string;
  /**
    * Whether this tag affects the language the text is rendered as 
    */
  languageSet: boolean;
  /**
    * Marked up text to render 
    */
  markup: string;
  /**
    * The maximum width of the cell, in characters 
    */
  maxWidthChars: number;
  /**
    * Text rendered when an editable cell is empty 
    */
  placeholderText: string;
  /**
    * Offset of text above the baseline (below the baseline if rise is negative) 
    */
  rise: number;
  /**
    * Whether this tag affects the rise 
    */
  riseSet: boolean;
  /**
    * Font scaling factor 
    */
  scale: number;
  /**
    * Whether this tag scales the font size by a factor 
    */
  scaleSet: boolean;
  /**
    * Whether to keep all text in a single paragraph 
    */
  singleParagraphMode: boolean;
  /**
    * Font size 
    */
  size: number;
  /**
    * Font size in points 
    */
  sizePoints: number;
  /**
    * Whether this tag affects the font size 
    */
  sizeSet: boolean;
  /**
    * Font stretch 
    */
  stretch: import('../Pango').Stretch;
  /**
    * Whether this tag affects the font stretch 
    */
  stretchSet: boolean;
  /**
    * Whether to strike through the text 
    */
  strikethrough: boolean;
  /**
    * Whether this tag affects strikethrough 
    */
  strikethroughSet: boolean;
  /**
    * Font style 
    */
  style: import('../Pango').Style;
  /**
    * Whether this tag affects the font style 
    */
  styleSet: boolean;
  /**
    * Text to render 
    */
  text: string;
  /**
    * Style of underline for this text 
    */
  underline: import('../Pango').Underline;
  /**
    * Whether this tag affects underlining 
    */
  underlineSet: boolean;
  /**
    * Font variant 
    */
  variant: import('../Pango').Variant;
  /**
    * Whether this tag affects the font variant 
    */
  variantSet: boolean;
  /**
    * Font weight 
    */
  weight: number;
  /**
    * Whether this tag affects the font weight 
    */
  weightSet: boolean;
  /**
    * The desired width of the label, in characters 
    */
  widthChars: number;
  /**
    * How to break the string into multiple lines, if the cell renderer does not have enough room to display the entire string 
    */
  wrapMode: import('../Pango').WrapMode;
  /**
    * The width at which the text is wrapped 
    */
  wrapWidth: number;
}

