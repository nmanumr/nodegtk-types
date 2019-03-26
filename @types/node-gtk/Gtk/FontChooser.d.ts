import * as GObject from '../GObject';
export declare interface FontChooser extends GObject.GInterface { }

/**
  * Gtk.FontChooser is an interface that can be implemented by widgets
displaying the list of fonts. In GTK+, the main objects
that implement this interface are Gtk.FontChooserWidget,
Gtk.FontChooserDialog and Gtk.FontButton. The Gtk.FontChooser interface
has been introducted in GTK+ 3.2. 
  */
export declare interface FontChooser {
  /**
    * Gets the currently-selected font name.
    * @returns A string with the name of the current font, or None if  no font is selected. You must free this string with GLib.free(). 
    */
  getFont(): string | null;
  /**
    * Gets the currently-selected font.
    * @returns A Pango.FontDescription for the current font, or None if  no font is selected. 
    */
  getFontDesc(): import('../Pango').FontDescription | null;
  /**
    * Gets the Pango.FontFace representing the selected font group details (i.e. family, slant, weight, width, etc).
    * @returns A Pango.FontFace representing the selected font group details, or None. The returned object is owned by self and must not be modified or freed. 
    */
  getFontFace(): import('../Pango').FontFace | null;
  /**
    * Gets the Pango.FontFamily representing the selected font family. Font families are a collection of font faces.
    * @returns A Pango.FontFamily representing the selected font family, or None. The returned object is owned by self and must not be modified or freed. 
    */
  getFontFamily(): import('../Pango').FontFamily | null;
  /**
    * Gets the currently-selected font features.
    * @returns the currently selected font features 
    */
  getFontFeatures(): string;
  /**
    * Gets the custom font map of this font chooser widget, or None if it does not have one.
    * @returns a Pango.FontMap, or None 
    */
  getFontMap(): import('../Pango').FontMap | null;
  /**
    * The selected font size.
    * @returns A n integer representing the selected font size, or -1 if no font size is selected. 
    */
  getFontSize(): number;
  /**
    * Gets the language that is used for font features.
    * @returns the currently selected language 
    */
  getLanguage(): string;
  /**
    * Returns the current level of granularity for selecting fonts.
    * @returns the current granularity level 
    */
  getLevel(): import('../Gtk').FontChooserLevel;
  /**
    * Gets the text displayed in the preview area.
    * @returns the text displayed in the preview area 
    */
  getPreviewText(): string;
  /**
    * Returns whether the preview entry is shown or not.
    * @returns True if the preview entry is shown or False if it is hidden. 
    */
  getShowPreviewEntry(): boolean;
  /**
    * Adds a filter function that decides which fonts to display in the font chooser.
    * @param filter a Gtk.FontFilterFunc, or None
    * @param userData data to pass to filter 
    */
  setFilterFunc(filter: import('../Gtk').fontFilterFunc | null, userData: Object | null): void;
  /**
    * Sets the currently-selected font.
    * @param fontname a font name like “Helvetica 12” or “Times Bold 18” 
    */
  setFont(fontname: string): void;
  /**
    * Sets the currently-selected font from font_desc.
    * @param fontDesc a Pango.FontDescription 
    */
  setFontDesc(fontDesc: import('../Pango').FontDescription): void;
  /**
    * Sets a custom font map to use for this font chooser widget. A custom font map can be used to present application-specific fonts instead of or in addition to the normal system fonts.
    * @param fontmap a Pango.FontMap 
    */
  setFontMap(fontmap: import('../Pango').FontMap | null): void;
  /**
    * Sets the language to use for font features.
    * @param language a language 
    */
  setLanguage(language: string): void;
  /**
    * Sets the desired level of granularity for selecting fonts.
    * @param level the desired level of granularity 
    */
  setLevel(level: import('../Gtk').FontChooserLevel): void;
  /**
    * Sets the text displayed in the preview area. The text is used to show how the selected font looks.
    * @param text the text to display in the preview area 
    */
  setPreviewText(text: string): void;
  /**
    * Shows or hides the editable preview entry.
    * @param showPreviewEntry whether to show the editable preview entry or not 
    */
  setShowPreviewEntry(showPreviewEntry: boolean): void;
  /**
    * Font description as a string, e.g. “Sans Italic 12” 
    */
  font: string;
  /**
    * Font description as a Pango.FontDescription struct 
    */
  fontDesc: import('../Pango').FontDescription;
  /**
    * Font features as a string 
    */
  readonly fontFeatures: string;
  /**
    * Language for which features have been selected 
    */
  language: string;
  /**
    * Whether to select family, face or font 
    */
  level: import('../Gtk').FontChooserLevel;
  /**
    * The text to display in order to demonstrate the selected font 
    */
  previewText: string;
  /**
    * Whether the preview text entry is shown or not 
    */
  showPreviewEntry: boolean;
}

