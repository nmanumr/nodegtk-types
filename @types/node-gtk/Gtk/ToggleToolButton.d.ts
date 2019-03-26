import * as Gtk from '../Gtk';
export declare interface ToggleToolButton extends Gtk.ToolButton { }

/**
  * A Gtk.ToggleToolButton is a Gtk.ToolItem that contains a toggle
button. 
  */
export declare class ToggleToolButton {
  /**
    * Returns a new Gtk.ToggleToolButton
    * @returns a newly created Gtk.ToggleToolButton 
    */
  static new(): import('../Gtk').ToolItem;
  /**
    * Creates a new Gtk.ToggleToolButton containing the image and text from a stock item. Some stock ids have preprocessor macros like Gtk.STOCK_OK and Gtk.STOCK_APPLY.
    * @param stockId the name of the stock item
    * @returns A new Gtk.ToggleToolButton 
    */
  static newFromStock(stockId: string): import('../Gtk').ToolItem;
  /**
    * Queries a Gtk.ToggleToolButton and returns its current state. Returns True if the toggle button is pressed in and False if it is raised.
    * @returns True if the toggle tool button is pressed in, False if not 
    */
  getActive(): boolean;
  /**
    * Sets the status of the toggle tool button. Set to True if you want the Gtk.ToggleButton to be “pressed in”, and False to raise it. This action causes the toggled signal to be emitted.
    * @param isActive whether self should be active 
    */
  setActive(isActive: boolean): void;
  /**
    * If the toggle button should be pressed in 
    */
  active: boolean;
}

