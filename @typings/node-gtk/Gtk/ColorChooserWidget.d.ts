/**
  * The Gtk.ColorChooserWidget widget lets the user select a
color. By default, the chooser presents a predefined palette
of colors, plus a small number of settable custom colors.
It is also possible to select a different color with the
single-color editor. To enter the single-color editing mode,
use the context menu of any color of the palette, or use the
‘+’ button to add a new custom color. 
  */
export declare class ColorChooserWidget extends import('../Gtk').Box, import('../Gtk').ColorChooser{
/**
  * Creates a new Gtk.ColorChooserWidget.
  * @returns a new Gtk.ColorChooserWidget 
  */
static new(): import('../Gtk').Widget;
/**
  * Show editor 
  */
showEditor: boolean;
/**
  *   
  */
parentInstance: import('../Gtk').Box;
}

