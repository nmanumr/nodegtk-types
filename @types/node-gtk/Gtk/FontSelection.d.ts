import * as Gtk from '../Gtk';
export declare interface FontSelection extends Gtk.Box { }

export declare class FontSelection {
  /**
    * Creates a new Gtk.FontSelection.
    * @returns a new Gtk.FontSelection 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Gets the Pango.FontFace representing the selected font group details (i.e. family, slant, weight, width, etc).
    * @returns A Pango.FontFace representing the selected font group details. The returned object is owned by self and must not be modified or freed. 
    */
  getFace(): import('../Pango').FontFace;
  /**
    * This returns the Gtk.TreeView which lists all styles available for the selected font. For example, “Regular”, “Bold”, etc.
    * @returns A Gtk.Widget that is part of self 
    */
  getFaceList(): import('../Gtk').Widget;
  /**
    * Gets the Pango.FontFamily representing the selected font family.
    * @returns A Pango.FontFamily representing the selected font family. Font families are a collection of font faces. The returned object is owned by self and must not be modified or freed. 
    */
  getFamily(): import('../Pango').FontFamily;
  /**
    * This returns the Gtk.TreeView that lists font families, for example, “Sans”, “Serif”, etc.
    * @returns A Gtk.Widget that is part of self 
    */
  getFamilyList(): import('../Gtk').Widget;
  /**
    * Gets the currently-selected font name.
    * @returns A string with the name of the current font, or None if no font is selected. You must free this string with GLib.free(). 
    */
  getFontName(): string;
  /**
    * This returns the Gtk.Entry used to display the font as a preview.
    * @returns A Gtk.Widget that is part of self 
    */
  getPreviewEntry(): import('../Gtk').Widget;
  /**
    * Gets the text displayed in the preview area.
    * @returns the text displayed in the preview area. This string is owned by the widget and should not be modified or freed 
    */
  getPreviewText(): string;
  /**
    * The selected font size.
    * @returns A n integer representing the selected font size, or -1 if no font size is selected. 
    */
  getSize(): number;
  /**
    * This returns the Gtk.Entry used to allow the user to edit the font number manually instead of selecting it from the list of font sizes.
    * @returns A Gtk.Widget that is part of self 
    */
  getSizeEntry(): import('../Gtk').Widget;
  /**
    * This returns the Gtk.TreeView used to list font sizes.
    * @returns A Gtk.Widget that is part of self 
    */
  getSizeList(): import('../Gtk').Widget;
  /**
    * Sets the currently-selected font.
    * @param fontname a font name like “Helvetica 12” or “Times Bold 18”
    * @returns True if the font could be set successfully; False if no such font exists or if the self doesn’t belong to a particular screen yet. 
    */
  setFontName(fontname: string): boolean;
  /**
    * Sets the text displayed in the preview area. The text is used to show how the selected font looks.
    * @param text the text to display in the preview area 
    */
  setPreviewText(text: string): void;
  /**
    * The string that represents this font 
    */
  fontName: string;
  /**
    * The text to display in order to demonstrate the selected font 
    */
  previewText: string;
}

