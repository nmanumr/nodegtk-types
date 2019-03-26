import * as Gtk from '../Gtk';
export declare interface SpinButton extends Gtk.Entry, Gtk.Orientable { }

/**
  * A Gtk.SpinButton is an ideal way to allow the user to set the value of
some attribute. Rather than having to directly type a number into a
Gtk.Entry, Gtk.SpinButton allows the user to click on one of two arrows
to increment or decrement the displayed value. A value can still be
typed in, with the bonus that it can be checked to ensure it is in a
given range. 
  */
export declare class SpinButton {
  /**
    * Creates a new Gtk.SpinButton.
    * @param adjustment the Gtk.Adjustment object that this spin button should use, or None
    * @param climbRate specifies by how much the rate of change in the value will accelerate if you continue to hold down an up/down button or arrow key
    * @param digits the number of decimal places to display
    * @returns The new spin button as a Gtk.Widget 
    */
  static new(adjustment: import('../Gtk').Adjustment | null, climbRate: number, digits: number): import('../Gtk').Widget;
  /**
    * This is a convenience constructor that allows creation of a numeric Gtk.SpinButton without manually creating an adjustment. The value is initially set to the minimum value and a page increment of 10 * step is the default. The precision of the spin button is equivalent to the precision of step.
    * @param min Minimum allowable value
    * @param max Maximum allowable value
    * @param step Increment added or subtracted by spinning the widget
    * @returns The new spin button as a Gtk.Widget 
    */
  static newWithRange(min: number, max: number, step: number): import('../Gtk').Widget;
  /**
    * Changes the properties of an existing spin button. The adjustment, climb rate, and number of decimal places are updated accordingly.
    * @param adjustment a Gtk.Adjustment to replace the spin button’s existing adjustment, or None to leave its current adjustment unchanged
    * @param climbRate the new climb rate
    * @param digits the number of decimal places to display in the spin button 
    */
  configure(adjustment: import('../Gtk').Adjustment | null, climbRate: number, digits: number): void;
  /**
    * Get the adjustment associated with a Gtk.SpinButton
    * @returns the Gtk.Adjustment of self 
    */
  getAdjustment(): import('../Gtk').Adjustment;
  /**
    * Fetches the precision of self. See Gtk.SpinButton.set_digits().
    * @returns the current precision 
    */
  getDigits(): number;
  /**
    * Gets the current step and page the increments used by self. See Gtk.SpinButton.set_increments().
    * @returns step:location to store step increment, or None page:location to store page increment, or None 
    */
  getIncrements(): [number, number];
  /**
    * Returns whether non-numeric text can be typed into the spin button. See Gtk.SpinButton.set_numeric().
    * @returns True if only numeric text can be entered 
    */
  getNumeric(): boolean;
  /**
    * Gets the range allowed for self. See Gtk.SpinButton.set_range().
    * @returns min:location to store minimum allowed value, or None max:location to store maximum allowed value, or None 
    */
  getRange(): [number, number];
  /**
    * Returns whether the values are corrected to the nearest step. See Gtk.SpinButton.set_snap_to_ticks().
    * @returns True if values are snapped to the nearest step 
    */
  getSnapToTicks(): boolean;
  /**
    * Gets the update behavior of a spin button. See Gtk.SpinButton.set_update_policy().
    * @returns the current update policy 
    */
  getUpdatePolicy(): import('../Gtk').SpinButtonUpdatePolicy;
  /**
    * Get the value in the self.
    * @returns the value of self 
    */
  getValue(): number;
  /**
    * Get the value self represented as an integer.
    * @returns the value of self 
    */
  getValueAsInt(): number;
  /**
    * Returns whether the spin button’s value wraps around to the opposite limit when the upper or lower limit of the range is exceeded. See Gtk.SpinButton.set_wrap().
    * @returns True if the spin button wraps around 
    */
  getWrap(): boolean;
  /**
    * Replaces the Gtk.Adjustment associated with self.
    * @param adjustment a Gtk.Adjustment to replace the existing adjustment 
    */
  setAdjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Set the precision to be displayed by self. Up to 20 digit precision is allowed.
    * @param digits the number of digits after the decimal point to be displayed for the spin button’s value 
    */
  setDigits(digits: number): void;
  /**
    * Sets the step and page increments for spin_button.  This affects how quickly the value changes when the spin button’s arrows are activated.
    * @param step increment applied for a button 1 press.
    * @param page increment applied for a button 2 press. 
    */
  setIncrements(step: number, page: number): void;
  /**
    * Sets the flag that determines if non-numeric text can be typed into the spin button.
    * @param numeric flag indicating if only numeric entry is allowed 
    */
  setNumeric(numeric: boolean): void;
  /**
    * Sets the minimum and maximum allowable values for self.
    * @param min minimum allowable value
    * @param max maximum allowable value 
    */
  setRange(min: number, max: number): void;
  /**
    * Sets the policy as to whether values are corrected to the nearest step increment when a spin button is activated after providing an invalid value.
    * @param snapToTicks a flag indicating if invalid values should be corrected 
    */
  setSnapToTicks(snapToTicks: boolean): void;
  /**
    * Sets the update behavior of a spin button. This determines whether the spin button is always updated or only when a valid value is set.
    * @param policy a Gtk.SpinButtonUpdatePolicy value 
    */
  setUpdatePolicy(policy: import('../Gtk').SpinButtonUpdatePolicy): void;
  /**
    * Sets the value of self.
    * @param value the new value 
    */
  setValue(value: number): void;
  /**
    * Sets the flag that determines if a spin button value wraps around to the opposite limit when the upper or lower limit of the range is exceeded.
    * @param wrap a flag indicating if wrapping behavior is performed 
    */
  setWrap(wrap: boolean): void;
  /**
    * Increment or decrement a spin button’s value in a specified direction by a specified amount.
    * @param direction a Gtk.SpinType indicating the direction to spin
    * @param increment step increment to apply in the specified direction 
    */
  spin(direction: import('../Gtk').SpinType, increment: number): void;
  /**
    * Manually force an update of the spin button. 
    */
  update(): void;
  /**
    * The adjustment that holds the value of the spin button 
    */
  adjustment: import('../Gtk').Adjustment;
  /**
    * The acceleration rate when you hold down a button or key 
    */
  climbRate: number;
  /**
    * The number of decimal places to display 
    */
  digits: number;
  /**
    * Whether non-numeric characters should be ignored 
    */
  numeric: boolean;
  /**
    * Whether erroneous values are automatically changed to a spin button’s nearest step increment 
    */
  snapToTicks: boolean;
  /**
    * Whether the spin button should update always, or only when the value is legal 
    */
  updatePolicy: import('../Gtk').SpinButtonUpdatePolicy;
  /**
    * Reads the current value, or sets a new value 
    */
  value: number;
  /**
    * Whether a spin button should wrap upon reaching its limits 
    */
  wrap: boolean;
}

