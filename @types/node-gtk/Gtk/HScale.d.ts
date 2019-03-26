import * as Gtk from '../Gtk';
export declare interface HScale extends Gtk.Scale { }

/**
  * The Gtk.HScale widget is used to allow the user to select a value using
a horizontal slider. To create one, use Gtk.HScale.new_with_range(). 
  */
export declare class HScale {
  /**
    * Creates a new Gtk.HScale.
    * @param adjustment the Gtk.Adjustment which sets the range of the scale.
    * @returns a new Gtk.HScale. 
    */
  static new(adjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
  /**
    * Creates a new horizontal scale widget that lets the user input a number between min and max (including min and max) with the increment step.  step must be nonzero; it’s the distance the slider moves when using the arrow keys to adjust the scale value.
    * @param min minimum value
    * @param max maximum value
    * @param step step increment (tick size) used with keyboard shortcuts
    * @returns a new Gtk.HScale 
    */
  static newWithRange(min: number, max: number, step: number): import('../Gtk').Widget;

}

