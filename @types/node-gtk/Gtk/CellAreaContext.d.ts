import * as GObject from '../GObject';
export declare interface CellAreaContext extends GObject.Object { }

/**
  * The Gtk.CellAreaContext object is created by a given Gtk.CellArea
implementation via its Gtk.CellArea.do_create_context() virtual
method and is used to store cell sizes and alignments for a series of
Gtk.TreeModel rows that are requested and rendered in the same context. 
  */
export declare class CellAreaContext {
  /**
    * Allocates a width and/or a height for all rows which are to be rendered with self.
    * @param width the allocated width for all Gtk.TreeModel rows rendered with self, or -1.
    * @param height the allocated height for all Gtk.TreeModel rows rendered with self, or -1. 
    */
  allocate(width: number, height: number): void;
  /**
    * Fetches the current allocation size for self.
    * @returns width:location to store the allocated width, or None height:location to store the allocated height, or None 
    */
  getAllocation(): [number, number];
  /**
    * Fetches the Gtk.CellArea this self was created by.
    * @returns the Gtk.CellArea this context was created by. 
    */
  getArea(): import('../Gtk').CellArea;
  /**
    * Gets the accumulative preferred height for all rows which have been requested with this context.
    * @returns minimum_height:location to store the minimum height, or None natural_height:location to store the natural height, or None 
    */
  getPreferredHeight(): [number, number];
  /**
    * Gets the accumulative preferred height for width for all rows which have been requested for the same said width with this context.
    * @param width a proposed width for allocation
    * @returns minimum_height:location to store the minimum height, or None natural_height:location to store the natural height, or None 
    */
  getPreferredHeightForWidth(width: number): [number, number];
  /**
    * Gets the accumulative preferred width for all rows which have been requested with this context.
    * @returns minimum_width:location to store the minimum width, or None natural_width:location to store the natural width, or None 
    */
  getPreferredWidth(): [number, number];
  /**
    * Gets the accumulative preferred width for height for all rows which have been requested for the same said height with this context.
    * @param height a proposed height for allocation
    * @returns minimum_width:location to store the minimum width, or None natural_width:location to store the natural width, or None 
    */
  getPreferredWidthForHeight(height: number): [number, number];
  /**
    * Causes the minimum and/or natural height to grow if the new proposed sizes exceed the current minimum and natural height.
    * @param minimumHeight the proposed new minimum height for self
    * @param naturalHeight the proposed new natural height for self 
    */
  pushPreferredHeight(minimumHeight: number, naturalHeight: number): void;
  /**
    * Causes the minimum and/or natural width to grow if the new proposed sizes exceed the current minimum and natural width.
    * @param minimumWidth the proposed new minimum width for self
    * @param naturalWidth the proposed new natural width for self 
    */
  pushPreferredWidth(minimumWidth: number, naturalWidth: number): void;
  /**
    * Resets any previously cached request and allocation data. 
    */
  reset(): void;
  /**
    * The Cell Area this context was created for 
    */
  area: import('../Gtk').CellArea;
  /**
    * Minimum cached height 
    */
  readonly minimumHeight: number;
  /**
    * Minimum cached width 
    */
  readonly minimumWidth: number;
  /**
    * Minimum cached height 
    */
  readonly naturalHeight: number;
  /**
    * Minimum cached width 
    */
  readonly naturalWidth: number;
}

