import * as Gtk from '../Gtk';
export declare interface GestureZoom extends Gtk.Gesture { }

/**
  * Gtk.GestureZoom is a Gtk.Gesture implementation able to recognize
pinch/zoom gestures, whenever the distance between both tracked
sequences changes, the Gtk.GestureZoom ::scale-changed signal is
emitted to report the scale factor. 
  */
export declare class GestureZoom {
  /**
    * Returns a newly created Gtk.Gesture that recognizes zoom in/out gestures (usually known as pinch/zoom).
    * @param widget a Gtk.Widget
    * @returns a newly created Gtk.GestureZoom 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * If self is active, this function returns the zooming difference since the gesture was recognized (hence the starting point is considered 1:1). If self is not active, 1 is returned.
    * @returns the scale delta 
    */
  getScaleDelta(): number;
  
}

