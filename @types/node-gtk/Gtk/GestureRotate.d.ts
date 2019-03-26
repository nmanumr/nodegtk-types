import * as Gtk from '../Gtk';
export declare interface GestureRotate extends Gtk.Gesture { }

/**
  * Gtk.GestureRotate is a Gtk.Gesture implementation able to recognize
2-finger rotations, whenever the angle between both handled sequences
changes, the Gtk.GestureRotate ::angle-changed signal is emitted. 
  */
export declare class GestureRotate {
  /**
    * Returns a newly created Gtk.Gesture that recognizes 2-touch rotation gestures.
    * @param widget a Gtk.Widget
    * @returns a newly created Gtk.GestureRotate 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * If self is active, this function returns the angle difference in radians since the gesture was first recognized. If self is not active, 0 is returned.
    * @returns the angle delta in radians 
    */
  getAngleDelta(): number;
  
}

