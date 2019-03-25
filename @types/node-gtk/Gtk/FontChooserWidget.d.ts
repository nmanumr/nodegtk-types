/**
  * The Gtk.FontChooserWidget widget lists the available fonts,
styles and sizes, allowing the user to select a font. It is
used in the Gtk.FontChooserDialog widget to provide a
dialog box for selecting fonts. 
  */
export declare class FontChooserWidget extends import('../Gtk').Box, import('../Gtk').FontChooser{
/**
  * Creates a new Gtk.FontChooserWidget.
  * @returns a new Gtk.FontChooserWidget 
  */
static new(): import('../Gtk').Widget;
/**
  * The toggle action to switch to the tweak page 
  */
tweakAction: import('../Gio').Action;
/**
  *   
  */
parentInstance: import('../Gtk').Box;
}

