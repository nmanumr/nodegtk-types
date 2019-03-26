import * as GObject from '../GObject';
export declare interface Adjustment extends GObject.InitiallyUnowned { }

/**
  * The Gtk.Adjustment object represents a value which has an associated lower
and upper bound, together with step and page increments, and a page size.
It is used within several GTK+ widgets, including Gtk.SpinButton, Gtk.Viewport,
and Gtk.Range (which is a base class for Gtk.Scrollbar and Gtk.Scale). 
  */
export declare class Adjustment {
  /**
    * Creates a new Gtk.Adjustment.
    * @param value the initial value
    * @param lower the minimum value
    * @param upper the maximum value
    * @param stepIncrement the step increment
    * @param pageIncrement the page increment
    * @param pageSize the page size
    * @returns a new Gtk.Adjustment 
    */
  static new(value: number, lower: number, upper: number, stepIncrement: number, pageIncrement: number, pageSize: number): import('../Gtk').Adjustment;
  /**
    * Emits a Gtk.Adjustment ::changed signal from the Gtk.Adjustment. This is typically called by the owner of the Gtk.Adjustment after it has changed any of the Gtk.Adjustment properties other than the value. 
    */
  changed(): void;
  /**
    * Updates the Gtk.Adjustment :value property to ensure that the range between lower and upper is in the current page (i.e. between Gtk.Adjustment :value and Gtk.Adjustment :value + Gtk.Adjustment :page-size). If the range is larger than the page size, then only the start of it will be in the current page.
    * @param lower the lower value
    * @param upper the upper value 
    */
  clampPage(lower: number, upper: number): void;
  /**
    * Sets all properties of the adjustment at once.
    * @param value the new value
    * @param lower the new minimum value
    * @param upper the new maximum value
    * @param stepIncrement the new step increment
    * @param pageIncrement the new page increment
    * @param pageSize the new page size 
    */
  configure(value: number, lower: number, upper: number, stepIncrement: number, pageIncrement: number, pageSize: number): void;
  /**
    * Retrieves the minimum value of the adjustment.
    * @returns The current minimum value of the adjustment 
    */
  getLower(): number;
  /**
    * Gets the smaller of step increment and page increment.
    * @returns the minimum increment of self 
    */
  getMinimumIncrement(): number;
  /**
    * Retrieves the page increment of the adjustment.
    * @returns The current page increment of the adjustment 
    */
  getPageIncrement(): number;
  /**
    * Retrieves the page size of the adjustment.
    * @returns The current page size of the adjustment 
    */
  getPageSize(): number;
  /**
    * Retrieves the step increment of the adjustment.
    * @returns The current step increment of the adjustment. 
    */
  getStepIncrement(): number;
  /**
    * Retrieves the maximum value of the adjustment.
    * @returns The current maximum value of the adjustment 
    */
  getUpper(): number;
  /**
    * Gets the current value of the adjustment. See Gtk.Adjustment.set_value().
    * @returns The current value of the adjustment 
    */
  getValue(): number;
  /**
    * Sets the minimum value of the adjustment.
    * @param lower the new minimum value 
    */
  setLower(lower: number): void;
  /**
    * Sets the page increment of the adjustment.
    * @param pageIncrement the new page increment 
    */
  setPageIncrement(pageIncrement: number): void;
  /**
    * Sets the page size of the adjustment.
    * @param pageSize the new page size 
    */
  setPageSize(pageSize: number): void;
  /**
    * Sets the step increment of the adjustment.
    * @param stepIncrement the new step increment 
    */
  setStepIncrement(stepIncrement: number): void;
  /**
    * Sets the maximum value of the adjustment.
    * @param upper the new maximum value 
    */
  setUpper(upper: number): void;
  /**
    * Sets the Gtk.Adjustment value. The value is clamped to lie between Gtk.Adjustment :lower and Gtk.Adjustment :upper.
    * @param value the new value 
    */
  setValue(value: number): void;
  /**
    * Emits a Gtk.Adjustment ::value-changed signal from the Gtk.Adjustment. This is typically called by the owner of the Gtk.Adjustment after it has changed the Gtk.Adjustment :value property. 
    */
  valueChanged(): void;
  /**
    * The minimum value of the adjustment 
    */
  lower: number;
  /**
    * The page increment of the adjustment 
    */
  pageIncrement: number;
  /**
    * The page size of the adjustment 
    */
  pageSize: number;
  /**
    * The step increment of the adjustment 
    */
  stepIncrement: number;
  /**
    * The maximum value of the adjustment 
    */
  upper: number;
  /**
    * The value of the adjustment 
    */
  value: number;
}

