import * as Gtk from '../Gtk';
export declare interface VScrollbar extends Gtk.Scrollbar { }

/**
  * The Gtk.VScrollbar widget is a widget arranged vertically creating a
scrollbar. See Gtk.Scrollbar for details on
scrollbars. Gtk.Adjustment pointers may be added to handle the
adjustment of the scrollbar or it may be left None in which case one
will be created for you. See Gtk.Scrollbar for a description of what the
fields in an adjustment represent for a scrollbar. 
  */
export declare class VScrollbar {
  /**
    * Creates a new vertical scrollbar.
    * @param adjustment the Gtk.Adjustment to use, or None to create a new adjustment
    * @returns the new Gtk.VScrollbar 
    */
  static new(adjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
}

