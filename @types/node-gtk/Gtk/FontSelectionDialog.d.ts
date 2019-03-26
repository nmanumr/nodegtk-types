import * as Gtk from '../Gtk';
export declare interface FontSelectionDialog extends Gtk.Dialog { }

export declare class FontSelectionDialog {
  /**
    * Creates a new Gtk.FontSelectionDialog.
    * @param title the title of the dialog window
    * @returns a new Gtk.FontSelectionDialog 
    */
  static new(title: string): import('../Gtk').Widget;
  /**
    * Gets the “Cancel” button.
    * @returns the Gtk.Widget used in the dialog for the “Cancel” button. 
    */
  getCancelButton(): import('../Gtk').Widget;
  /**
    * Gets the currently-selected font name.
    * @returns A string with the name of the current font, or None if no font is selected. You must free this string with GLib.free(). 
    */
  getFontName(): string;
  /**
    * Retrieves the Gtk.FontSelection widget embedded in the dialog.
    * @returns the embedded Gtk.FontSelection 
    */
  getFontSelection(): import('../Gtk').Widget;
  /**
    * Gets the “OK” button.
    * @returns the Gtk.Widget used in the dialog for the “OK” button. 
    */
  getOkButton(): import('../Gtk').Widget;
  /**
    * Gets the text displayed in the preview area.
    * @returns the text displayed in the preview area. This string is owned by the widget and should not be modified or freed 
    */
  getPreviewText(): string;
  /**
    * Sets the currently selected font.
    * @param fontname a font name like “Helvetica 12” or “Times Bold 18”
    * @returns True if the font selected in self is now the fontname specified, False otherwise. 
    */
  setFontName(fontname: string): boolean;
  /**
    * Sets the text displayed in the preview area.
    * @param text the text to display in the preview area 
    */
  setPreviewText(text: string): void;
  ;
}

