import * as Gtk from '../Gtk';
export declare interface GestureSwipe extends Gtk.GestureSingle { }

/**
  * Gtk.GestureSwipe is a Gtk.Gesture implementation able to recognize
swipes, after a press/move/…/move/release sequence happens, the
Gtk.GestureSwipe ::swipe signal will be emitted, providing the velocity
and directionality of the sequence at the time it was lifted. 
  */
export declare class GestureSwipe {
  /**
    * Returns a newly created Gtk.Gesture that recognizes swipes.
    * @param widget a Gtk.Widget
    * @returns a newly created Gtk.GestureSwipe 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * If the gesture is recognized, this function returns True and fill in velocity_x and velocity_y with the recorded velocity, as per the last event(s) processed.
    * @returns whether velocity could be calculated  velocity_x:return value for the velocity in the X axis, in pixels/sec velocity_y:return value for the velocity in the Y axis, in pixels/sec 
    */
  getVelocity(): [boolean, number, number];
  
}

