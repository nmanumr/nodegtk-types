import * as Gtk from '../Gtk';
export declare interface HSV extends Gtk.Widget { }

/**
  * Gtk.HSV is the “color wheel” part of a complete color selector widget.
It allows to select a color by determining its HSV components in an
intuitive way. Moving the selection around the outer ring changes the hue,
and moving the selection point inside the inner triangle changes value and
saturation. 
  */
export declare class HSV {
  /**
    * Creates a new HSV color selector.
    * @returns A newly-created HSV color selector. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Converts a color from HSV space to RGB.
    * @param h Hue
    * @param s Saturation
    * @param v Value
    * @returns r:Return value for the red component g:Return value for the green component b:Return value for the blue component 
    */
  static toRgb(h: number, s: number, v: number): [number, number, number];
  /**
    * Queries the current color in an HSV color selector. Returned values will be in the [0.0, 1.0] range.
    * @returns h:Return value for the hue s:Return value for the saturation v:Return value for the value 
    */
  getColor(): [number, number, number];
  /**
    * Queries the size and ring width of an HSV color selector.
    * @returns size:Return value for the diameter of the hue ring ring_width:Return value for the width of the hue ring 
    */
  getMetrics(): [number, number];
  /**
    * An HSV color selector can be said to be adjusting if multiple rapid changes are being made to its value, for example, when the user is adjusting the value with the mouse. This function queries whether the HSV color selector is being adjusted or not.
    * @returns True if clients can ignore changes to the color value, since they may be transitory, or False if they should consider the color value status to be final. 
    */
  isAdjusting(): boolean;
  /**
    * Sets the current color in an HSV color selector. Color component values must be in the [0.0, 1.0] range.
    * @param h Hue
    * @param s Saturation
    * @param v Value 
    */
  setColor(h: number, s: number, v: number): void;
  /**
    * Sets the size and ring width of an HSV color selector.
    * @param size Diameter for the hue ring
    * @param ringWidth Width of the hue ring 
    */
  setMetrics(size: number, ringWidth: number): void;
  ;
}

