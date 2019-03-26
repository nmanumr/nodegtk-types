import * as Gtk from '../Gtk';
export declare interface CellRendererSpinner extends Gtk.CellRenderer { }

/**
  * Gtk.CellRendererSpinner renders a spinning animation in a cell, very
similar to Gtk.Spinner. It can often be used as an alternative
to a Gtk.CellRendererProgress for displaying indefinite activity,
instead of actual progress. 
  */
export declare class CellRendererSpinner {
  /**
    * Returns a new cell renderer which will show a spinner to indicate activity.
    * @returns a new Gtk.CellRenderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * Whether the spinner is active (ie. shown) in the cell 
    */
  active: boolean;
  /**
    * Pulse of the spinner 
    */
  pulse: number;
  /**
    * The Gtk.IconSize value that specifies the size of the rendered spinner 
    */
  size: import('../Gtk').IconSize;
}

