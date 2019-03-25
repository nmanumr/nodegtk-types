/**
  * Using Gtk.TextAttributes directly should rarely be necessary.
It’s primarily useful with Gtk.TextIter.get_attributes().
As with most GTK+ structs, the fields in this struct should only
be read, never modified directly. 
  */
export declare class TextAttributes {
/**
  * Creates a Gtk.TextAttributes, which describes a set of properties on some text.
  * @returns a new Gtk.TextAttributes, free with Gtk.TextAttributes.unref(). 
  */
static new(): import('../Gtk').TextAttributes;
/**
  * Copies self and returns a new Gtk.TextAttributes.
  * @returns a copy of self, free with Gtk.TextAttributes.unref() 
  */
copy(): import('../Gtk').TextAttributes;
/**
  * Copies the values from self to dest so that dest has the same values as self. Frees existing values in dest.
  * @param dest another Gtk.TextAttributes 
  */
copyValues(dest: import('../Gtk').TextAttributes): void;
/**
  * Increments the reference count on self.
  * @returns the Gtk.TextAttributes that were passed in 
  */
ref(): import('../Gtk').TextAttributes;
/**
  * Decrements the reference count on self, freeing the structure if the reference count reaches 0. 
  */
unref(): void;
/**
  * Gtk.TextAppearance for text. 
  */
appearance: import('../Gtk').TextAppearance;
/**
  * Background is fit to full line height rather than baseline +/- ascent/descent (font height). 
  */
bgFullHeight: number;
/**
  * Gtk.TextDirection for text. 
  */
direction: import('../Gtk').TextDirection;
/**
  * Can edit this text. 
  */
editable: number;
/**
  * Pango.FontDescription for text. 
  */
font: import('../Pango').FontDescription;
/**
  * Font scale factor. 
  */
fontScale: number;
/**
  * Amount to indent the paragraph, in pixels. 
  */
indent: number;
/**
  * Hide the text. 
  */
invisible: number;
/**
  * Gtk.Justification for text. 
  */
justification: import('../Gtk').Justification;
/**
  * Pango.Language for text. 
  */
language: import('../Pango').Language;
/**
  * Width of the left margin in pixels. 
  */
leftMargin: number;
/**
  * Extra space to insert between graphemes, in Pango units 
  */
letterSpacing: number;
/**
  * Whether to disable font fallback. 
  */
noFallback: number;
/**
  *   
  */
pgBgColor: import('../Gdk').Color;
/**
  *   
  */
pgBgRgba: import('../Gdk').RGBA;
/**
  * Pixels of blank space above paragraphs. 
  */
pixelsAboveLines: number;
/**
  * Pixels of blank space below paragraphs. 
  */
pixelsBelowLines: number;
/**
  * Pixels of blank space between wrapped lines in a paragraph. 
  */
pixelsInsideWrap: number;
/**
  *   
  */
refcount: number;
/**
  * Width of the right margin in pixels. 
  */
rightMargin: number;
/**
  * Custom Pango.TabArray for this text. 
  */
tabs: import('../Pango').TabArray;
/**
  * Gtk.WrapMode for text. 
  */
wrapMode: import('../Gtk').WrapMode;
}

