/**
  * Gtk.RecentChooserDialog is a dialog box suitable for displaying the recently
used documents.  This widgets works by putting a Gtk.RecentChooserWidget inside
a Gtk.Dialog.  It exposes the Gtk.RecentChooserIface interface, so you can use
all the Gtk.RecentChooser functions on the recent chooser dialog as well as
those for Gtk.Dialog. 
  */
export declare class RecentChooserDialog extends import('../Gtk').Dialog, import('../Gtk').RecentChooser{
;
/**
  *   
  */
parentInstance: import('../Gtk').Dialog;
}

