import * as Gtk from '../Gtk';
export declare interface CellRendererProgress extends Gtk.CellRenderer, Gtk.Orientable { }

/**
  * Gtk.CellRendererProgress renders a numeric value as a progress par in a cell.
Additionally, it can display a text on top of the progress bar. 
  */
export declare class CellRendererProgress {
  /**
    * Creates a new Gtk.CellRendererProgress.
    * @returns the new cell renderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * Invert the direction in which the progress bar grows 
    */
  inverted: boolean;
  /**
    * Set this to positive values to indicate that some progress is made, but you don’t know how much. 
    */
  pulse: number;
  /**
    * Text on the progress bar 
    */
  text: string;
  /**
    * The horizontal text alignment, from 0 (left) to 1 (right). Reversed for RTL layouts. 
    */
  textXalign: number;
  /**
    * The vertical text alignment, from 0 (top) to 1 (bottom). 
    */
  textYalign: number;
  /**
    * Value of the progress bar 
    */
  value: number;
}

