import * as GObject from '../GObject';
export declare interface TextTag extends GObject.Object { }

/**
  * You may wish to begin by reading the
text widget conceptual overview
which gives an overview of all the objects and
data types related to the text widget and how they work together. 
  */
export declare class TextTag {
  /**
    * Creates a Gtk.TextTag. Configure the tag using object arguments, i.e. using g_object_set().
    * @param name tag name, or None
    * @returns a new Gtk.TextTag 
    */
  static new(name: string | null): import('../Gtk').TextTag;
  /**
    * Emits the Gtk.TextTagTable ::tag-changed signal on the Gtk.TextTagTable where the tag is included.
    * @param sizeChanged whether the change affects the Gtk.TextView layout. 
    */
  changed(sizeChanged: boolean): void;
  /**
    * Emits the “event” signal on the Gtk.TextTag.
    * @param eventObject object that received the event, such as a widget
    * @param event the event
    * @param iter location where the event was received
    * @returns result of signal emission (whether the event was handled) 
    */
  event(eventObject: import('../GObject').Object, event: import('../Gdk').Event, iter: import('../Gtk').TextIter): boolean;
  /**
    * Get the tag priority.
    * @returns The tag’s priority. 
    */
  getPriority(): number;
  /**
    * Sets the priority of a Gtk.TextTag. Valid priorities start at 0 and go to one less than Gtk.TextTagTable.get_size(). Each tag in a table has a unique priority; setting the priority of one tag shifts the priorities of all the other tags in the table to maintain a unique priority for each tag. Higher priority tags “win” if two tags both set the same text attribute. When adding a tag to a tag table, it will be assigned the highest priority in the table by default; so normally the precedence of a set of tags is the order in which they were added to the table, or created with Gtk.TextBuffer.create_tag(), which adds the tag to the buffer’s table automatically.
    * @param priority the new priority 
    */
  setPriority(priority: number): void;
  /**
    * Whether left and right margins accumulate. 
    */
  accumulativeMargin: boolean;
  /**
    * Background color as a string 
    */
  background: string;
  /**
    * Whether the background color fills the entire line height or only the height of the tagged characters 
    */
  backgroundFullHeight: boolean;
  /**
    * Whether this tag affects background height 
    */
  backgroundFullHeightSet: boolean;
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
    * Text direction, e.g. right-to-left or left-to-right 
    */
  direction: import('../Gtk').TextDirection;
  /**
    * Whether the text can be modified by the user 
    */
  editable: boolean;
  /**
    * Whether this tag affects text editability 
    */
  editableSet: boolean;
  /**
    * Whether font fallback is enabled. 
    */
  fallback: boolean;
  /**
    * Whether this tag affects font fallback 
    */
  fallbackSet: boolean;
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
    * OpenType Font Features to use 
    */
  fontFeatures: string;
  /**
    * Whether this tag affects font features 
    */
  fontFeaturesSet: boolean;
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
    * Amount to indent the paragraph, in pixels 
    */
  indent: number;
  /**
    * Whether this tag affects indentation 
    */
  indentSet: boolean;
  /**
    * Whether this text is hidden. 
    */
  invisible: boolean;
  /**
    * Whether this tag affects text visibility 
    */
  invisibleSet: boolean;
  /**
    * Left, right, or center justification 
    */
  justification: import('../Gtk').Justification;
  /**
    * Whether this tag affects paragraph justification 
    */
  justificationSet: boolean;
  /**
    * The language this text is in, as an ISO code. Pango can use this as a hint when rendering the text. If not set, an appropriate default will be used. 
    */
  language: string;
  /**
    * Whether this tag affects the language the text is rendered as 
    */
  languageSet: boolean;
  /**
    * Width of the left margin in pixels 
    */
  leftMargin: number;
  /**
    * Whether this tag affects the left margin 
    */
  leftMarginSet: boolean;
  /**
    * Extra spacing between graphemes 
    */
  letterSpacing: number;
  /**
    * Whether this tag affects letter spacing 
    */
  letterSpacingSet: boolean;
  /**
    * Name used to refer to the text tag. None for anonymous tags 
    */
  name: string;
  /**
    * Paragraph background color as a string 
    */
  paragraphBackground: string;
  /**
    * Paragraph background color as a Gdk.Color deprecated 
    */
  paragraphBackgroundGdk: import('../Gdk').Color;
  /**
    * Paragraph background RGBA as a Gdk.RGBA 
    */
  paragraphBackgroundRgba: import('../Gdk').RGBA;
  /**
    * Whether this tag affects the paragraph background color 
    */
  paragraphBackgroundSet: boolean;
  /**
    * Pixels of blank space above paragraphs 
    */
  pixelsAboveLines: number;
  /**
    * Whether this tag affects the number of pixels above lines 
    */
  pixelsAboveLinesSet: boolean;
  /**
    * Pixels of blank space below paragraphs 
    */
  pixelsBelowLines: number;
  /**
    * Whether this tag affects the number of pixels above lines 
    */
  pixelsBelowLinesSet: boolean;
  /**
    * Pixels of blank space between wrapped lines in a paragraph 
    */
  pixelsInsideWrap: number;
  /**
    * Whether this tag affects the number of pixels between wrapped lines 
    */
  pixelsInsideWrapSet: boolean;
  /**
    * Width of the right margin in pixels 
    */
  rightMargin: number;
  /**
    * Whether this tag affects the right margin 
    */
  rightMarginSet: boolean;
  /**
    * Offset of text above the baseline (below the baseline if rise is negative) in Pango units 
    */
  rise: number;
  /**
    * Whether this tag affects the rise 
    */
  riseSet: boolean;
  /**
    * Font size as a scale factor relative to the default font size. This properly adapts to theme changes etc. so is recommended. Pango predefines some scales such as PANGO_SCALE_X_LARGE 
    */
  scale: number;
  /**
    * Whether this tag scales the font size by a factor 
    */
  scaleSet: boolean;
  /**
    * Font size in Pango units 
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
    * Font stretch as a Pango.Stretch, e.g. Pango.Stretch.CONDENSED 
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
    * Color of strikethrough for this text 
    */
  strikethroughRgba: import('../Gdk').RGBA;
  /**
    * Whether this tag affects strikethrough color 
    */
  strikethroughRgbaSet: boolean;
  /**
    * Whether this tag affects strikethrough 
    */
  strikethroughSet: boolean;
  /**
    * Font style as a Pango.Style, e.g. Pango.Style.ITALIC 
    */
  style: import('../Pango').Style;
  /**
    * Whether this tag affects the font style 
    */
  styleSet: boolean;
  /**
    * Custom tabs for this text 
    */
  tabs: import('../Pango').TabArray;
  /**
    * Whether this tag affects tabs 
    */
  tabsSet: boolean;
  /**
    * Style of underline for this text 
    */
  underline: import('../Pango').Underline;
  /**
    * Color of underline for this text 
    */
  underlineRgba: import('../Gdk').RGBA;
  /**
    * Whether this tag affects underlining color 
    */
  underlineRgbaSet: boolean;
  /**
    * Whether this tag affects underlining 
    */
  underlineSet: boolean;
  /**
    * Font variant as a Pango.Variant, e.g. Pango.Variant.SMALL_CAPS 
    */
  variant: import('../Pango').Variant;
  /**
    * Whether this tag affects the font variant 
    */
  variantSet: boolean;
  /**
    * Font weight as an integer, see predefined values in Pango.Weight; for example, Pango.Weight.BOLD 
    */
  weight: number;
  /**
    * Whether this tag affects the font weight 
    */
  weightSet: boolean;
  /**
    * Whether to wrap lines never, at word boundaries, or at character boundaries 
    */
  wrapMode: import('../Gtk').WrapMode;
  /**
    * Whether this tag affects line wrap mode 
    */
  wrapModeSet: boolean;
}

