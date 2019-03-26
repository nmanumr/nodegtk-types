import * as Gtk from '../Gtk';
export declare interface FontButton extends Gtk.Button, Gtk.FontChooser { }

/**
  * The Gtk.FontButton is a button which displays the currently selected
font an allows to open a font chooser dialog to change the font.
It is suitable widget for selecting a font in a preference dialog. 
  */
export declare class FontButton {
  /**
    * Creates a new font picker widget.
    * @returns a new font picker widget. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new font picker widget.
    * @param fontname Name of font to display in font chooser dialog
    * @returns a new font picker widget. 
    */
  static newWithFont(fontname: string): import('../Gtk').Widget;
  /**
    * Retrieves the name of the currently selected font. This name includes style and size information as well. If you want to render something with the font, use this string with Pango.FontDescription.from_string() . If you’re interested in peeking certain values (family name, style, size, weight) just query these properties from the Pango.FontDescription object.
    * @returns an internal copy of the font name which must not be freed. 
    */
  getFontName(): string;
  /**
    * Returns whether the font size will be shown in the label.
    * @returns whether the font size will be shown in the label. 
    */
  getShowSize(): boolean;
  /**
    * Returns whether the name of the font style will be shown in the label.
    * @returns whether the font style will be shown in the label. 
    */
  getShowStyle(): boolean;
  /**
    * Retrieves the title of the font chooser dialog.
    * @returns an internal copy of the title string which must not be freed. 
    */
  getTitle(): string;
  /**
    * Returns whether the selected font is used in the label.
    * @returns whether the selected font is used in the label. 
    */
  getUseFont(): boolean;
  /**
    * Returns whether the selected size is used in the label.
    * @returns whether the selected size is used in the label. 
    */
  getUseSize(): boolean;
  /**
    * Sets or updates the currently-displayed font in font picker dialog.
    * @param fontname Name of font to display in font chooser dialog
    * @returns True 
    */
  setFontName(fontname: string): boolean;
  /**
    * If show_size is True, the font size will be displayed along with the name of the selected font.
    * @param showSize True if font size should be displayed in dialog. 
    */
  setShowSize(showSize: boolean): void;
  /**
    * If show_style is True, the font style will be displayed along with name of the selected font.
    * @param showStyle True if font style should be displayed in label. 
    */
  setShowStyle(showStyle: boolean): void;
  /**
    * Sets the title for the font chooser dialog.
    * @param title a string containing the font chooser dialog title 
    */
  setTitle(title: string): void;
  /**
    * If use_font is True, the font name will be written using the selected font.
    * @param useFont If True, font name will be written using font chosen. 
    */
  setUseFont(useFont: boolean): void;
  /**
    * If use_size is True, the font name will be written using the selected size.
    * @param useSize If True, font name will be written using the selected size. 
    */
  setUseSize(useSize: boolean): void;
  /**
    * The name of the selected font deprecated 
    */
  fontName: string;
  /**
    * Whether selected font size is shown in the label 
    */
  showSize: boolean;
  /**
    * Whether the selected font style is shown in the label 
    */
  showStyle: boolean;
  /**
    * The title of the font chooser dialog 
    */
  title: string;
  /**
    * Whether the label is drawn in the selected font 
    */
  useFont: boolean;
  /**
    * Whether the label is drawn with the selected font size 
    */
  useSize: boolean;
}

