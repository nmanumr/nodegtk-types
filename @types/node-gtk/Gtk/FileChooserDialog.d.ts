/**
  * Gtk.FileChooserDialog is a dialog box suitable for use with
“File/Open” or “File/Save as” commands.  This widget works by
putting a Gtk.FileChooserWidget inside a Gtk.Dialog.  It exposes
the Gtk.FileChooser interface, so you can use all of the
Gtk.FileChooser functions on the file chooser dialog as well as
those for Gtk.Dialog. 
  */
export declare class FileChooserDialog extends import('../Gtk').Dialog, import('../Gtk').FileChooser{
;
/**
  *   
  */
parentInstance: import('../Gtk').Dialog;
}

