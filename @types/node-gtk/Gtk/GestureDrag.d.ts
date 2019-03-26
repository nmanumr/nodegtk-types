import * as Gtk from '../Gtk';
export declare interface GestureDrag extends Gtk.GestureSingle { }

/**
  * Gtk.GestureDrag is a Gtk.Gesture implementation that recognizes drag
operations. The drag operation itself can be tracked throught the
Gtk.GestureDrag ::drag-begin, Gtk.GestureDrag ::drag-update and
Gtk.GestureDrag ::drag-end signals, or the relevant coordinates be
extracted through Gtk.GestureDrag.get_offset() and
Gtk.GestureDrag.get_start_point(). 
  */
export declare class GestureDrag {
  /**
    * Returns a newly created Gtk.Gesture that recognizes drags.
    * @param widget a Gtk.Widget
    * @returns a newly created Gtk.GestureDrag 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * If the self is active, this function returns True and fills in x and y with the coordinates of the current point, as an offset to the starting drag point.
    * @returns True if the gesture is active  x:X offset for the current point y:Y offset for the current point 
    */
  getOffset(): [boolean, number, number];
  /**
    * If the self is active, this function returns True and fills in x and y with the drag start coordinates, in window-relative coordinates.
    * @returns True if the gesture is active  x:X coordinate for the drag start point y:Y coordinate for the drag start point 
    */
  getStartPoint(): [boolean, number, number];
  ;
}

