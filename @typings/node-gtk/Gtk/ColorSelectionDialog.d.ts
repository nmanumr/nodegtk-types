export declare class ColorSelectionDialog extends import('../Gtk').Dialog{
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
cancelButton: import('../Gtk').Widget;
/**
  * The color selection embedded in the dialog. 
  */
colorSelection: import('../Gtk').Widget;
/**
  * The help button of the dialog. 
  */
helpButton: import('../Gtk').Widget;
/**
  * The OK button of the dialog. 
  */
okButton: import('../Gtk').Widget;
/**
  *   
  */
parentInstance: import('../Gtk').Dialog;
}

