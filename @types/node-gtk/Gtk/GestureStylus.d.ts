import * as Gtk from '../Gtk';
export declare interface GestureStylus extends Gtk.GestureSingle { }

/**
  * Gtk.GestureStylus is a Gtk.Gesture implementation specific to stylus
input. The provided signals just provide the basic information 
  */
export declare class GestureStylus {
  /**
    * Creates a new Gtk.GestureStylus.
    * @param widget a Gtk.Widget
    * @returns a newly created stylus gesture 
    */
  static new(widget: import('../Gtk').Widget): import('../Gtk').Gesture;
  /**
    * Returns the current values for the requested axes. This function must be called from either the Gtk.GestureStylus :down, Gtk.GestureStylus :motion, Gtk.GestureStylus :up or Gtk.GestureStylus :proximity signals.
    * @param axes array of requested axes, terminated with Gdk.AxisUse.IGNORE
    * @returns True if there is a current value for the axes  values:return location for the axis values 
    */
  getAxes(axes: import('../Gdk').AxisUse): [boolean, number[]];
  /**
    * Returns the current value for the requested axis. This function must be called from either the Gtk.GestureStylus :down, Gtk.GestureStylus :motion, Gtk.GestureStylus :up or Gtk.GestureStylus :proximity signals.
    * @param axis requested device axis
    * @returns True if there is a current value for the axis  value:return location for the axis value 
    */
  getAxis(axis: import('../Gdk').AxisUse): [boolean, number];
  /**
    * Returns the Gdk.DeviceTool currently driving input through this gesture. This function must be called from either the Gtk.GestureStylus ::down, Gtk.GestureStylus ::motion, Gtk.GestureStylus ::up or Gtk.GestureStylus ::proximity signal handlers.
    * @returns The current stylus tool 
    */
  getDeviceTool(): import('../Gdk').DeviceTool | null;
  ;
}

