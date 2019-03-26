import * as Gtk from '../Gtk';
export declare interface Fixed extends Gtk.Container { }

/**
  * The Gtk.Fixed widget is a container which can place child widgets
at fixed positions and with fixed sizes, given in pixels. Gtk.Fixed
performs no automatic layout management. 
  */
export declare class Fixed {
  /**
    * Creates a new Gtk.Fixed.
    * @returns a new Gtk.Fixed. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Moves a child of a Gtk.Fixed container to the given position.
    * @param widget the child widget.
    * @param x the horizontal position to move the widget to.
    * @param y the vertical position to move the widget to. 
    */
  move(widget: import('../Gtk').Widget, x: number, y: number): void;
  /**
    * Adds a widget to a Gtk.Fixed container at the given position.
    * @param widget the widget to add.
    * @param x the horizontal position to place the widget at.
    * @param y the vertical position to place the widget at. 
    */
  put(widget: import('../Gtk').Widget, x: number, y: number): void;
  ;
}

