import * as Gtk from '../Gtk';
export declare interface Misc extends Gtk.Widget { }

/**
  * The Gtk.Misc widget is an abstract widget which is not useful itself, but
is used to derive subclasses which have alignment and padding attributes. 
  */
export declare abstract class Misc {
  /**
    * Gets the X and Y alignment of the widget within its allocation. See Gtk.Misc.set_alignment().
    * @returns xalign:location to store X alignment of self, or None yalign:location to store Y alignment of self, or None 
    */
  getAlignment(): [number, number];
  /**
    * Gets the padding in the X and Y directions of the widget. See Gtk.Misc.set_padding().
    * @returns xpad:location to store padding in the X direction, or None ypad:location to store padding in the Y direction, or None 
    */
  getPadding(): [number, number];
  /**
    * Sets the alignment of the widget.
    * @param xalign the horizontal alignment, from 0 (left) to 1 (right).
    * @param yalign the vertical alignment, from 0 (top) to 1 (bottom). 
    */
  setAlignment(xalign: number, yalign: number): void;
  /**
    * Sets the amount of space to add around the widget.
    * @param xpad the amount of space to add on the left and right of the widget, in pixels.
    * @param ypad the amount of space to add on the top and bottom of the widget, in pixels. 
    */
  setPadding(xpad: number, ypad: number): void;
  /**
    * The horizontal alignment, from 0 (left) to 1 (right). Reversed for RTL layouts. deprecated 
    */
  xalign: number;
  /**
    * The amount of space to add on the left and right of the widget, in pixels deprecated 
    */
  xpad: number;
  /**
    * The vertical alignment, from 0 (top) to 1 (bottom) deprecated 
    */
  yalign: number;
  /**
    * The amount of space to add on the top and bottom of the widget, in pixels deprecated 
    */
  ypad: number;
}

