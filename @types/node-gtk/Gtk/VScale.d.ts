import * as Gtk from '../Gtk';
export declare interface VScale extends Gtk.Scale { }

/**
  * The Gtk.VScale widget is used to allow the user to select a value using
a vertical slider. To create one, use Gtk.HScale.new_with_range(). 
  */
export declare class VScale {
  /**
    * Creates a new Gtk.VScale.
    * @param adjustment the Gtk.Adjustment which sets the range of the scale.
    * @returns a new Gtk.VScale. 
    */
  static new(adjustment: import('../Gtk').Adjustment): import('../Gtk').Widget;
  /**
    * Creates a new vertical scale widget that lets the user input a number between min and max (including min and max) with the increment step.  step must be nonzero; it’s the distance the slider moves when using the arrow keys to adjust the scale value.
    * @param min minimum value
    * @param max maximum value
    * @param step step increment (tick size) used with keyboard shortcuts
    * @returns a new Gtk.VScale 
    */
  static newWithRange(min: number, max: number, step: number): import('../Gtk').Widget;
}

