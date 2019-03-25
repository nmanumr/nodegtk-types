export declare class TextAppearance {
/**
  * Background Gdk.Color. 
  */
bgColor: import('../Gdk').Color;
/**
  * Whether to use background-related values; this is irrelevant for the values struct when in a tag, but is used for the composite values struct; it’s true if any of the tags being composited had background stuff set. 
  */
drawBg: number;
/**
  * Foreground Gdk.Color. 
  */
fgColor: import('../Gdk').Color;
/**
  * This are only used when we are actually laying out and rendering a paragraph; not when a Gtk.TextAppearance is part of a Gtk.TextAttributes. 
  */
insideSelection: number;
/**
  * This are only used when we are actually laying out and rendering a paragraph; not when a Gtk.TextAppearance is part of a Gtk.TextAttributes. 
  */
isText: number;
/**
  * Super/subscript rise, can be negative. 
  */
rise: number;
/**
  * Strikethrough style 
  */
strikethrough: number;
/**
  * Pango.Underline 
  */
underline: number;
}

