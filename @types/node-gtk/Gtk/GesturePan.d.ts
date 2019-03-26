import * as Gtk from '../Gtk';
export declare interface GesturePan extends Gtk.GestureDrag { }

/**
  * Gtk.GesturePan is a Gtk.Gesture implementation able to recognize
pan gestures, those are drags that are locked to happen along one
axis. The axis that a Gtk.GesturePan handles is defined at
construct time, and can be changed through
Gtk.GesturePan.set_orientation(). 
  */
export declare class GesturePan {
  /**
    * Returns a newly created Gtk.Gesture that recognizes pan gestures.
    * @param widget a Gtk.Widget
    * @param orientation expected orientation
    * @returns a newly created Gtk.GesturePan 
    */
  static new(widget: import('../Gtk').Widget, orientation: import('../Gtk').Orientation): import('../Gtk').Gesture;
  /**
    * Returns the orientation of the pan gestures that this self expects.
    * @returns the expected orientation for pan gestures 
    */
  getOrientation(): import('../Gtk').Orientation;
  /**
    * Sets the orientation to be expected on pan gestures.
    * @param orientation expected orientation 
    */
  setOrientation(orientation: import('../Gtk').Orientation): void;
  /**
    * Allowed orientations 
    */
  orientation: import('../Gtk').Orientation;
}

