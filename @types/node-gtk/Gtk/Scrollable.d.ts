import * as GObject from '../GObject';
export declare interface Scrollable extends GObject.GInterface { }

/**
  * Gtk.Scrollable is an interface that is implemented by widgets with native
scrolling ability. 
  */
export declare interface Scrollable {
  /**
    * Returns the size of a non-scrolling border around the outside of the scrollable. An example for this would be treeview headers. GTK+ can use this information to display overlayed graphics, like the overshoot indication, at the right position.
    * @returns True if border has been set  border:return location for the results 
    */
  getBorder(): [boolean, import('../Gtk').Border];
  /**
    * Retrieves the Gtk.Adjustment used for horizontal scrolling.
    * @returns horizontal Gtk.Adjustment. 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the horizontal Gtk.ScrollablePolicy.
    * @returns The horizontal Gtk.ScrollablePolicy. 
    */
  getHscrollPolicy(): import('../Gtk').ScrollablePolicy;
  /**
    * Retrieves the Gtk.Adjustment used for vertical scrolling.
    * @returns vertical Gtk.Adjustment. 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the vertical Gtk.ScrollablePolicy.
    * @returns The vertical Gtk.ScrollablePolicy. 
    */
  getVscrollPolicy(): import('../Gtk').ScrollablePolicy;
  /**
    * Sets the horizontal adjustment of the Gtk.Scrollable.
    * @param hadjustment a Gtk.Adjustment 
    */
  setHadjustment(hadjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Sets the Gtk.ScrollablePolicy to determine whether horizontal scrolling should start below the minimum width or below the natural width.
    * @param policy the horizontal Gtk.ScrollablePolicy 
    */
  setHscrollPolicy(policy: import('../Gtk').ScrollablePolicy): void;
  /**
    * Sets the vertical adjustment of the Gtk.Scrollable.
    * @param vadjustment a Gtk.Adjustment 
    */
  setVadjustment(vadjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Sets the Gtk.ScrollablePolicy to determine whether vertical scrolling should start below the minimum height or below the natural height.
    * @param policy the vertical Gtk.ScrollablePolicy 
    */
  setVscrollPolicy(policy: import('../Gtk').ScrollablePolicy): void;
  /**
    * Horizontal adjustment that is shared between the scrollable widget and its controller 
    */
  hadjustment: import('../Gtk').Adjustment;
  /**
    * How the size of the content should be determined 
    */
  hscrollPolicy: import('../Gtk').ScrollablePolicy;
  /**
    * Vertical adjustment that is shared between the scrollable widget and its controller 
    */
  vadjustment: import('../Gtk').Adjustment;
  /**
    * How the size of the content should be determined 
    */
  vscrollPolicy: import('../Gtk').ScrollablePolicy;
}

