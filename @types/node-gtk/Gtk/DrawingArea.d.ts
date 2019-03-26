import * as Gtk from '../Gtk';
export declare interface DrawingArea extends Gtk.Widget { }

/**
  * The Gtk.DrawingArea widget is used for creating custom user interface
elements. It’s essentially a blank widget; you can draw on it. After
creating a drawing area, the application may want to connect to: 
  */
export declare class DrawingArea {
  /**
    * Creates a new drawing area.
    * @returns a new Gtk.DrawingArea 
    */
  static new(): import('../Gtk').Widget;
  ;
}

