import * as Gtk from '../Gtk';
export declare interface ColorChooserWidget extends Gtk.Box, Gtk.ColorChooser { }

/**
  * The Gtk.ColorChooserWidget widget lets the user select a
color. By default, the chooser presents a predefined palette
of colors, plus a small number of settable custom colors.
It is also possible to select a different color with the
single-color editor. To enter the single-color editing mode,
use the context menu of any color of the palette, or use the
‘+’ button to add a new custom color. 
  */
export declare class ColorChooserWidget {
  /**
    * Creates a new Gtk.ColorChooserWidget.
    * @returns a new Gtk.ColorChooserWidget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Show editor 
    */
  showEditor: boolean;
}

