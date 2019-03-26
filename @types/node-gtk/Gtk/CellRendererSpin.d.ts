import * as Gtk from '../Gtk';
export declare interface CellRendererSpin extends Gtk.CellRendererText { }

/**
  * Gtk.CellRendererSpin renders text in a cell like Gtk.CellRendererText from
which it is derived. But while Gtk.CellRendererText offers a simple entry to
edit the text, Gtk.CellRendererSpin offers a Gtk.SpinButton widget. Of course,
that means that the text has to be parseable as a floating point number. 
  */
export declare class CellRendererSpin {
  /**
    * Creates a new Gtk.CellRendererSpin.
    * @returns a new Gtk.CellRendererSpin 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * The adjustment that holds the value of the spin button 
    */
  adjustment: import('../Gtk').Adjustment;
  /**
    * The acceleration rate when you hold down a button 
    */
  climbRate: number;
  /**
    * The number of decimal places to display 
    */
  digits: number;
}

