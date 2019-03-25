/**
  * The Gtk.FontChooserDialog widget is a dialog for selecting a font.
It implements the Gtk.FontChooser interface. 
  */
export declare class FontChooserDialog extends import('../Gtk').Dialog, import('../Gtk').FontChooser{
/**
  * Creates a new Gtk.FontChooserDialog.
  * @param title Title of the dialog, or None
  * @param parent Transient parent of the dialog, or None
  * @returns a new Gtk.FontChooserDialog 
  */
static new(title: string | null, parent: import('../Gtk').Window | null): import('../Gtk').Widget;
;
/**
  *   
  */
parentInstance: import('../Gtk').Dialog;
}

