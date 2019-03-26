import * as Gtk from '../Gtk';
export declare interface ScrolledWindow extends Gtk.Bin { }

/**
  * Gtk.ScrolledWindow is a container that accepts a single child widget, makes
that child scrollable using either internally added scrollbars or externally
associated adjustments, and optionally draws a frame around the child. 
  */
export declare class ScrolledWindow {
  /**
    * Creates a new scrolled window.
    * @param hadjustment horizontal adjustment
    * @param vadjustment vertical adjustment
    * @returns a new scrolled window 
    */
  static new(hadjustment: import('../Gtk').Adjustment | null, vadjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
  /**
    * Used to add children without native scrolling capabilities. This is simply a convenience function; it is equivalent to adding the unscrollable child to a viewport, then adding the viewport to the scrolled window. If a child has native scrolling, use Gtk.Container.add() instead of this function.
    * @param child the widget you want to scroll 
    */
  addWithViewport(child: import('../Gtk').Widget): void;
  /**
    * Return whether button presses are captured during kinetic scrolling. See Gtk.ScrolledWindow.set_capture_button_press().
    * @returns True if button presses are captured during kinetic scrolling 
    */
  getCaptureButtonPress(): boolean;
  /**
    * Returns the horizontal scrollbar’s adjustment, used to connect the horizontal scrollbar to the child widget’s horizontal scroll functionality.
    * @returns the horizontal Gtk.Adjustment 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Returns the horizontal scrollbar of self.
    * @returns the horizontal scrollbar of the scrolled window. 
    */
  getHscrollbar(): import('../Gtk').Widget;
  /**
    * Returns the specified kinetic scrolling behavior.
    * @returns the scrolling behavior flags. 
    */
  getKineticScrolling(): boolean;
  /**
    * Returns the maximum content height set.
    * @returns the maximum content height, or -1 
    */
  getMaxContentHeight(): number;
  /**
    * Returns the maximum content width set.
    * @returns the maximum content width, or -1 
    */
  getMaxContentWidth(): number;
  /**
    * Gets the minimal content height of self, or -1 if not set.
    * @returns the minimal content height 
    */
  getMinContentHeight(): number;
  /**
    * Gets the minimum content width of self, or -1 if not set.
    * @returns the minimum content width 
    */
  getMinContentWidth(): number;
  /**
    * Returns whether overlay scrolling is enabled for this scrolled window.
    * @returns True if overlay scrolling is enabled 
    */
  getOverlayScrolling(): boolean;
  /**
    * Gets the placement of the contents with respect to the scrollbars for the scrolled window. See Gtk.ScrolledWindow.set_placement().
    * @returns the current placement value.See also Gtk.ScrolledWindow.set_placement() and Gtk.ScrolledWindow.unset_placement(). 
    */
  getPlacement(): import('../Gtk').CornerType;
  /**
    * Retrieves the current policy values for the horizontal and vertical scrollbars. See Gtk.ScrolledWindow.set_policy().
    * @returns hscrollbar_policy:  location to store the policy for the horizontal scrollbar, or None vscrollbar_policy:  location to store the policy for the vertical scrollbar, or None 
    */
  getPolicy(): [import('../Gtk').PolicyType, import('../Gtk').PolicyType];
  /**
    * Reports whether the natural height of the child will be calculated and propagated through the scrolled window’s requested natural height.
    * @returns whether natural height propagation is enabled. 
    */
  getPropagateNaturalHeight(): boolean;
  /**
    * Reports whether the natural width of the child will be calculated and propagated through the scrolled window’s requested natural width.
    * @returns whether natural width propagation is enabled. 
    */
  getPropagateNaturalWidth(): boolean;
  /**
    * Gets the shadow type of the scrolled window. See Gtk.ScrolledWindow.set_shadow_type().
    * @returns the current shadow type 
    */
  getShadowType(): import('../Gtk').ShadowType;
  /**
    * Returns the vertical scrollbar’s adjustment, used to connect the vertical scrollbar to the child widget’s vertical scroll functionality.
    * @returns the vertical Gtk.Adjustment 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Returns the vertical scrollbar of self.
    * @returns the vertical scrollbar of the scrolled window. 
    */
  getVscrollbar(): import('../Gtk').Widget;
  /**
    * Changes the behaviour of self with regard to the initial event that possibly starts kinetic scrolling. When capture_button_press is set to True, the event is captured by the scrolled window, and then later replayed if it is meant to go to the child widget.
    * @param captureButtonPress True to capture button presses 
    */
  setCaptureButtonPress(captureButtonPress: boolean): void;
  /**
    * Sets the Gtk.Adjustment for the horizontal scrollbar.
    * @param hadjustment horizontal scroll adjustment 
    */
  setHadjustment(hadjustment: import('../Gtk').Adjustment): void;
  /**
    * Turns kinetic scrolling on or off. Kinetic scrolling only applies to devices with source Gdk.InputSource.TOUCHSCREEN.
    * @param kineticScrolling True to enable kinetic scrolling 
    */
  setKineticScrolling(kineticScrolling: boolean): void;
  /**
    * Sets the maximum height that self should keep visible. The self will grow up to this height before it starts scrolling the content.
    * @param height the maximum content height 
    */
  setMaxContentHeight(height: number): void;
  /**
    * Sets the maximum width that self should keep visible. The self will grow up to this width before it starts scrolling the content.
    * @param width the maximum content width 
    */
  setMaxContentWidth(width: number): void;
  /**
    * Sets the minimum height that self should keep visible. Note that this can and (usually will) be smaller than the minimum size of the content.
    * @param height the minimal content height 
    */
  setMinContentHeight(height: number): void;
  /**
    * Sets the minimum width that self should keep visible. Note that this can and (usually will) be smaller than the minimum size of the content.
    * @param width the minimal content width 
    */
  setMinContentWidth(width: number): void;
  /**
    * Enables or disables overlay scrolling for this scrolled window.
    * @param overlayScrolling whether to enable overlay scrolling 
    */
  setOverlayScrolling(overlayScrolling: boolean): void;
  /**
    * Sets the placement of the contents with respect to the scrollbars for the scrolled window.
    * @param windowPlacement position of the child window 
    */
  setPlacement(windowPlacement: import('../Gtk').CornerType): void;
  /**
    * Sets the scrollbar policy for the horizontal and vertical scrollbars.
    * @param hscrollbarPolicy policy for horizontal bar
    * @param vscrollbarPolicy policy for vertical bar 
    */
  setPolicy(hscrollbarPolicy: import('../Gtk').PolicyType, vscrollbarPolicy: import('../Gtk').PolicyType): void;
  /**
    * Sets whether the natural height of the child should be calculated and propagated through the scrolled window’s requested natural height.
    * @param propagate whether to propagate natural height 
    */
  setPropagateNaturalHeight(propagate: boolean): void;
  /**
    * Sets whether the natural width of the child should be calculated and propagated through the scrolled window’s requested natural width.
    * @param propagate whether to propagate natural width 
    */
  setPropagateNaturalWidth(propagate: boolean): void;
  /**
    * Changes the type of shadow drawn around the contents of self.
    * @param type kind of shadow to draw around scrolled window contents 
    */
  setShadowType(type: import('../Gtk').ShadowType): void;
  /**
    * Sets the Gtk.Adjustment for the vertical scrollbar.
    * @param vadjustment vertical scroll adjustment 
    */
  setVadjustment(vadjustment: import('../Gtk').Adjustment): void;
  /**
    * Unsets the placement of the contents with respect to the scrollbars for the scrolled window. If no window placement is set for a scrolled window, it defaults to Gtk.CornerType.TOP_LEFT. 
    */
  unsetPlacement(): void;
  /**
    * The Gtk.Adjustment for the horizontal position 
    */
  hadjustment: import('../Gtk').Adjustment;
  /**
    * When the horizontal scrollbar is displayed 
    */
  hscrollbarPolicy: import('../Gtk').PolicyType;
  /**
    * Kinetic scrolling mode. 
    */
  kineticScrolling: boolean;
  /**
    * The maximum height that the scrolled window will allocate to its content 
    */
  maxContentHeight: number;
  /**
    * The maximum width that the scrolled window will allocate to its content 
    */
  maxContentWidth: number;
  /**
    * The minimum height that the scrolled window will allocate to its content 
    */
  minContentHeight: number;
  /**
    * The minimum width that the scrolled window will allocate to its content 
    */
  minContentWidth: number;
  /**
    * Overlay scrolling mode 
    */
  overlayScrolling: boolean;
  /**
    * Propagate Natural Height 
    */
  propagateNaturalHeight: boolean;
  /**
    * Propagate Natural Width 
    */
  propagateNaturalWidth: boolean;
  /**
    * Style of bevel around the contents 
    */
  shadowType: import('../Gtk').ShadowType;
  /**
    * The Gtk.Adjustment for the vertical position 
    */
  vadjustment: import('../Gtk').Adjustment;
  /**
    * When the vertical scrollbar is displayed 
    */
  vscrollbarPolicy: import('../Gtk').PolicyType;
  /**
    * Where the contents are located with respect to the scrollbars. 
    */
  windowPlacement: import('../Gtk').CornerType;
  /**
    * Whether “window-placement” should be used to determine the location of the contents with respect to the scrollbars. deprecated 
    */
  windowPlacementSet: boolean;
}

