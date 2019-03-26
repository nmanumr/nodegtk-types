import * as Gtk from '../Gtk';
export declare interface ColorSelectionDialog extends Gtk.Dialog { }

export declare class ColorSelectionDialog {
  /**
    * Creates a new Gtk.ColorSelectionDialog.
    * @param title a string containing the title text for the dialog.
    * @returns a Gtk.ColorSelectionDialog. 
    */
  static new(title: string): import('../Gtk').Widget;
  /**
    * Retrieves the Gtk.ColorSelection widget embedded in the dialog.
    * @returns the embedded Gtk.ColorSelection 
    */
  getColorSelection(): import('../Gtk').Widget;
  /**
    * The cancel button of the dialog. 
    */
  readonly cancelButton: import('../Gtk').Widget;
  /**
    * The color selection embedded in the dialog. 
    */
  readonly colorSelection: import('../Gtk').Widget;
  /**
    * The help button of the dialog. 
    */
  readonly helpButton: import('../Gtk').Widget;
  /**
    * The OK button of the dialog. 
    */
  readonly okButton: import('../Gtk').Widget;
}

