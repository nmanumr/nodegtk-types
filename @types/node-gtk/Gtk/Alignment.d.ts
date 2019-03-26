import * as Gtk from '../Gtk';
export declare interface Alignment extends Gtk.Bin { }

/**
  * The Gtk.Alignment widget controls the alignment and size of its child widget.
It has four settings: xscale, yscale, xalign, and yalign. 
  */
export declare class Alignment {
  /**
    * Creates a new Gtk.Alignment.
    * @param xalign the horizontal alignment of the child widget, from 0 (left) to 1 (right).
    * @param yalign the vertical alignment of the child widget, from 0 (top) to 1 (bottom).
    * @param xscale the amount that the child widget expands horizontally to fill up unused space, from 0 to 1. A value of 0 indicates that the child widget should never expand. A value of 1 indicates that the child widget will expand to fill all of the space allocated for the Gtk.Alignment.
    * @param yscale the amount that the child widget expands vertically to fill up unused space, from 0 to 1. The values are similar to xscale.
    * @returns the new Gtk.Alignment 
    */
  static new(xalign: number, yalign: number, xscale: number, yscale: number): import('../Gtk').Widget;
  /**
    * Gets the padding on the different sides of the widget. See Gtk.Alignment.set_padding ().
    * @returns padding_top:location to store the padding for the top of the widget, or None padding_bottom:location to store the padding for the bottom of the widget, or None padding_left:location to store the padding for the left of the widget, or None padding_right:location to store the padding for the right of the widget, or None 
    */
  getPadding(): [number, number, number, number];
  /**
    * Sets the Gtk.Alignment values.
    * @param xalign the horizontal alignment of the child widget, from 0 (left) to 1 (right).
    * @param yalign the vertical alignment of the child widget, from 0 (top) to 1 (bottom).
    * @param xscale the amount that the child widget expands horizontally to fill up unused space, from 0 to 1. A value of 0 indicates that the child widget should never expand. A value of 1 indicates that the child widget will expand to fill all of the space allocated for the Gtk.Alignment.
    * @param yscale the amount that the child widget expands vertically to fill up unused space, from 0 to 1. The values are similar to xscale. 
    */
  set(xalign: number, yalign: number, xscale: number, yscale: number): void;
  /**
    * Sets the padding on the different sides of the widget. The padding adds blank space to the sides of the widget. For instance, this can be used to indent the child widget towards the right by adding padding on the left.
    * @param paddingTop the padding at the top of the widget
    * @param paddingBottom the padding at the bottom of the widget
    * @param paddingLeft the padding at the left of the widget
    * @param paddingRight the padding at the right of the widget. 
    */
  setPadding(paddingTop: number, paddingBottom: number, paddingLeft: number, paddingRight: number): void;
  /**
    * The padding to insert at the bottom of the widget. deprecated 
    */
  bottomPadding: number;
  /**
    * The padding to insert at the left of the widget. deprecated 
    */
  leftPadding: number;
  /**
    * The padding to insert at the right of the widget. deprecated 
    */
  rightPadding: number;
  /**
    * The padding to insert at the top of the widget. deprecated 
    */
  topPadding: number;
  /**
    * Horizontal position of child in available space. 0.0 is left aligned, 1.0 is right aligned deprecated 
    */
  xalign: number;
  /**
    * If available horizontal space is bigger than needed for the child, how much of it to use for the child. 0.0 means none, 1.0 means all deprecated 
    */
  xscale: number;
  /**
    * Vertical position of child in available space. 0.0 is top aligned, 1.0 is bottom aligned deprecated 
    */
  yalign: number;
  /**
    * If available vertical space is bigger than needed for the child, how much of it to use for the child. 0.0 means none, 1.0 means all deprecated 
    */
  yscale: number;
}

