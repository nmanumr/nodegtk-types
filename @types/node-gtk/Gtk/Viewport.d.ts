import * as Gtk from '../Gtk';
export declare interface Viewport extends Gtk.Bin, Gtk.Scrollable { }

/**
  * The Gtk.Viewport widget acts as an adaptor class, implementing
scrollability for child widgets that lack their own scrolling
capabilities. Use Gtk.Viewport to scroll child widgets such as
Gtk.Grid, Gtk.Box, and so on. 
  */
export declare class Viewport {
  /**
    * Creates a new Gtk.Viewport with the given adjustments, or with default adjustments if none are given.
    * @param hadjustment horizontal adjustment
    * @param vadjustment vertical adjustment
    * @returns a new Gtk.Viewport 
    */
  static new(hadjustment: import('../Gtk').Adjustment | null, vadjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
  /**
    * Gets the bin window of the Gtk.Viewport.
    * @returns a Gdk.Window 
    */
  getBinWindow(): import('../Gdk').Window;
  /**
    * Returns the horizontal adjustment of the viewport.
    * @returns the horizontal adjustment of self. 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the shadow type of the Gtk.Viewport. See Gtk.Viewport.set_shadow_type().
    * @returns the shadow type 
    */
  getShadowType(): import('../Gtk').ShadowType;
  /**
    * Returns the vertical adjustment of the viewport.
    * @returns the vertical adjustment of self. 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the view window of the Gtk.Viewport.
    * @returns a Gdk.Window 
    */
  getViewWindow(): import('../Gdk').Window;
  /**
    * Sets the horizontal adjustment of the viewport.
    * @param adjustment a Gtk.Adjustment. 
    */
  setHadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Sets the shadow type of the viewport.
    * @param type the new shadow type. 
    */
  setShadowType(type: import('../Gtk').ShadowType): void;
  /**
    * Sets the vertical adjustment of the viewport.
    * @param adjustment a Gtk.Adjustment. 
    */
  setVadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Determines how the shadowed box around the viewport is drawn 
    */
  shadowType: import('../Gtk').ShadowType;
}

