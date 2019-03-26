import * as Gtk from '../Gtk';
export declare interface HScrollbar extends Gtk.Scrollbar { }

/**
  * The Gtk.HScrollbar widget is a widget arranged horizontally creating a
scrollbar. See Gtk.Scrollbar for details on
scrollbars. Gtk.Adjustment pointers may be added to handle the
adjustment of the scrollbar or it may be left None in which case one
will be created for you. See Gtk.Scrollbar for a description of what the
fields in an adjustment represent for a scrollbar. 
  */
export declare class HScrollbar {
  /**
    * Creates a new horizontal scrollbar.
    * @param adjustment the Gtk.Adjustment to use, or None to create a new adjustment
    * @returns the new Gtk.HScrollbar 
    */
  static new(adjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
  
}

