import * as Gtk from '../Gtk';
export declare interface Scrollbar extends Gtk.Range { }

/**
  * The Gtk.Scrollbar widget is a horizontal or vertical scrollbar,
depending on the value of the Gtk.Orientable :orientation property. 
  */
export declare class Scrollbar {
  /**
    * Creates a new scrollbar with the given orientation.
    * @param orientation the scrollbar’s orientation.
    * @param adjustment the Gtk.Adjustment to use, or None to create a new adjustment.
    * @returns the new Gtk.Scrollbar. 
    */
  static new(orientation: import('../Gtk').Orientation, adjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
}

