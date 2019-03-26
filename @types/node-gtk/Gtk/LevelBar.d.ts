import * as Gtk from '../Gtk';
export declare interface LevelBar extends Gtk.Widget, Gtk.Orientable { }

/**
  * The Gtk.LevelBar is a bar widget that can be used
as a level indicator. Typical use cases are displaying the strength
of a password, or showing the charge level of a battery. 
  */
export declare class LevelBar {
  /**
    * Creates a new Gtk.LevelBar.
    * @returns a Gtk.LevelBar. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Utility constructor that creates a new Gtk.LevelBar for the specified interval.
    * @param minValue a positive value
    * @param maxValue a positive value
    * @returns a Gtk.LevelBar 
    */
  static newForInterval(minValue: number, maxValue: number): import('../Gtk').Widget;
  /**
    * Adds a new offset marker on self at the position specified by value. When the bar value is in the interval topped by value (or between value and Gtk.LevelBar :max-value in case the offset is the last one on the bar) a style class named level- name will be applied when rendering the level bar fill. If another offset marker named name exists, its value will be replaced by value.
    * @param name the name of the new offset
    * @param value the value for the new offset 
    */
  addOffsetValue(name: string, value: number): void;
  /**
    * Return the value of the Gtk.LevelBar :inverted property.
    * @returns True if the level bar is inverted 
    */
  getInverted(): boolean;
  /**
    * Returns the value of the Gtk.LevelBar :max-value property.
    * @returns a positive value 
    */
  getMaxValue(): number;
  /**
    * Returns the value of the Gtk.LevelBar :min-value property.
    * @returns a positive value 
    */
  getMinValue(): number;
  /**
    * Returns the value of the Gtk.LevelBar :mode property.
    * @returns a Gtk.LevelBarMode 
    */
  getMode(): import('../Gtk').LevelBarMode;
  /**
    * Fetches the value specified for the offset marker name in self, returning True in case an offset named name was found.
    * @param name the name of an offset in the bar
    * @returns True if the specified offset is found  value:location where to store the value 
    */
  getOffsetValue(name: string | null): [boolean, number];
  /**
    * Returns the value of the Gtk.LevelBar :value property.
    * @returns a value in the interval between Gtk.LevelBar :min-value and Gtk.LevelBar :max-value 
    */
  getValue(): number;
  /**
    * Removes an offset marker previously added with Gtk.LevelBar.add_offset_value().
    * @param name the name of an offset in the bar 
    */
  removeOffsetValue(name: string | null): void;
  /**
    * Sets the value of the Gtk.LevelBar :inverted property.
    * @param inverted True to invert the level bar 
    */
  setInverted(inverted: boolean): void;
  /**
    * Sets the value of the Gtk.LevelBar :max-value property.
    * @param value a positive value 
    */
  setMaxValue(value: number): void;
  /**
    * Sets the value of the Gtk.LevelBar :min-value property.
    * @param value a positive value 
    */
  setMinValue(value: number): void;
  /**
    * Sets the value of the Gtk.LevelBar :mode property.
    * @param mode a Gtk.LevelBarMode 
    */
  setMode(mode: import('../Gtk').LevelBarMode): void;
  /**
    * Sets the value of the Gtk.LevelBar :value property.
    * @param value a value in the interval between Gtk.LevelBar :min-value and Gtk.LevelBar :max-value 
    */
  setValue(value: number): void;
  /**
    * Invert the direction in which the level bar grows 
    */
  inverted: boolean;
  /**
    * Maximum value level that can be displayed by the bar 
    */
  maxValue: number;
  /**
    * Minimum value level that can be displayed by the bar 
    */
  minValue: number;
  /**
    * The mode of the value indicator displayed by the bar 
    */
  mode: import('../Gtk').LevelBarMode;
  /**
    * Currently filled value level of the level bar 
    */
  value: number;
}

