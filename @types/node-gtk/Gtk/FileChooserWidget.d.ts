/**
  * Gtk.FileChooserWidget is a widget for choosing files.
It exposes the Gtk.FileChooser interface, and you should
use the methods of this interface to interact with the
widget. 
  */
export declare class FileChooserWidget extends import('../Gtk').Box, import('../Gtk').FileChooser{
/**
  * Creates a new Gtk.FileChooserWidget. This is a file chooser widget that can be embedded in custom windows, and it is the same widget that is used by Gtk.FileChooserDialog.
  * @param action Open or save mode for the widget
  * @returns a new Gtk.FileChooserWidget 
  */
static new(action: import('../Gtk').FileChooserAction): import('../Gtk').Widget;
/**
  * Search mode 
  */
searchMode: boolean;
/**
  * Subtitle 
  */
subtitle: string;
/**
  *   
  */
parentInstance: import('../Gtk').Box;
}

