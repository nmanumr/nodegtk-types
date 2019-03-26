import * as Gtk from '../Gtk';
export declare interface Layout extends Gtk.Container, Gtk.Scrollable { }

/**
  * Gtk.Layout is similar to Gtk.DrawingArea in that it’s a “blank slate” and
doesn’t do anything except paint a blank background by default. It’s
different in that it supports scrolling natively due to implementing
Gtk.Scrollable, and can contain child widgets since it’s a Gtk.Container. 
  */
export declare class Layout {
  /**
    * Creates a new Gtk.Layout. Unless you have a specific adjustment you’d like the layout to use for scrolling, pass None for hadjustment and vadjustment.
    * @param hadjustment horizontal scroll adjustment, or None
    * @param vadjustment vertical scroll adjustment, or None
    * @returns a new Gtk.Layout 
    */
  static new(hadjustment: import('../Gtk').Adjustment | null, vadjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
  /**
    * Retrieve the bin window of the layout used for drawing operations.
    * @returns a Gdk.Window 
    */
  getBinWindow(): import('../Gdk').Window;
  /**
    * This function should only be called after the layout has been placed in a Gtk.ScrolledWindow or otherwise configured for scrolling. It returns the Gtk.Adjustment used for communication between the horizontal scrollbar and self.
    * @returns horizontal scroll adjustment 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the size that has been set on the layout, and that determines the total extents of the layout’s scrollbar area. See Gtk.Layout.set_size ().
    * @returns width:location to store the width set on self, or None height:location to store the height set on self, or None 
    */
  getSize(): [number, number];
  /**
    * This function should only be called after the layout has been placed in a Gtk.ScrolledWindow or otherwise configured for scrolling. It returns the Gtk.Adjustment used for communication between the vertical scrollbar and self.
    * @returns vertical scroll adjustment 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Moves a current child of self to a new position.
    * @param childWidget a current child of self
    * @param x X position to move to
    * @param y Y position to move to 
    */
  move(childWidget: import('../Gtk').Widget, x: number, y: number): void;
  /**
    * Adds child_widget to self, at position (x,`y`). self becomes the new parent container of child_widget.
    * @param childWidget child widget
    * @param x X position of child widget
    * @param y Y position of child widget 
    */
  put(childWidget: import('../Gtk').Widget, x: number, y: number): void;
  /**
    * Sets the horizontal scroll adjustment for the layout.
    * @param adjustment new scroll adjustment 
    */
  setHadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Sets the size of the scrollable area of the layout.
    * @param width width of entire scrollable area
    * @param height height of entire scrollable area 
    */
  setSize(width: number, height: number): void;
  /**
    * Sets the vertical scroll adjustment for the layout.
    * @param adjustment new scroll adjustment 
    */
  setVadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * The height of the layout 
    */
  height: number;
  /**
    * The width of the layout 
    */
  width: number;
}

