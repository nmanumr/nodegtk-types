import * as Gtk from '../Gtk';
export declare interface Spinner extends Gtk.Widget { }

/**
  * A Gtk.Spinner widget displays an icon-size spinning animation.
It is often used as an alternative to a Gtk.ProgressBar for
displaying indefinite activity, instead of actual progress. 
  */
export declare class Spinner {
  /**
    * Returns a new spinner widget. Not yet started.
    * @returns a new Gtk.Spinner 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Starts the animation of the spinner. 
    */
  start(): void;
  /**
    * Stops the animation of the spinner. 
    */
  stop(): void;
  /**
    * Whether the spinner is active 
    */
  active: boolean;
}

