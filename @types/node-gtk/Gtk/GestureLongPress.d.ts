import * as Gtk from '../Gtk';
export declare interface GestureLongPress extends Gtk.GestureSingle { }

/**
  * Gtk.GestureLongPress is a Gtk.Gesture implementation able to recognize
long presses, triggering the Gtk.GestureLongPress ::pressed after the
timeout is exceeded. 
  */
export declare class GestureLongPress {
  /**
    * Returns a newly created Gtk.Gesture that recognizes long presses.
    * @param widget a Gtk.Widget
    * @returns a newly created Gtk.GestureLongPress 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * Factor by which to modify the default timeout 
    */
  delayFactor: number;
}

