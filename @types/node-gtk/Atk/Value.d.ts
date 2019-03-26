import * as GObject from '../GObject';

/**
  * Atk.Value should be implemented for components which either display
a value from a bounded range, or which allow the user to specify a
value from a bounded range, or both. For instance, most sliders and
range controls, as well as dials, should have Atk.Object
representations which implement Atk.Value on the component’s
behalf. #AtKValues may be read-only, in which case attempts to
alter the value return would fail. 
  */
export declare interface Value extends GObject.GInterface {
  /**
    * Gets the value of this object.
    * @returns a GObject.Value representing the current accessible value 
    */
  getCurrentValue(): import('../GObject').Value;
  /**
    * Gets the minimum increment by which the value of this object may be changed.  If zero, the minimum increment is undefined, which may mean that it is limited only by the floating point precision of the platform.
    * @returns the minimum increment by which the value of this object may be changed. zero if undefined. 
    */
  getIncrement(): number;
  /**
    * Gets the maximum value of this object.
    * @returns a GObject.Value representing the maximum accessible value 
    */
  getMaximumValue(): import('../GObject').Value;
  /**
    * Gets the minimum increment by which the value of this object may be changed.  If zero, the minimum increment is undefined, which may mean that it is limited only by the floating point precision of the platform.
    * @returns a GObject.Value representing the minimum increment by which the accessible value may be changed 
    */
  getMinimumIncrement(): import('../GObject').Value;
  /**
    * Gets the minimum value of this object.
    * @returns a GObject.Value representing the minimum accessible value 
    */
  getMinimumValue(): import('../GObject').Value;
  /**
    * Gets the range of this object.
    * @returns a newly allocated Atk.Range that represents the minimum, maximum and descriptor (if available) of self. None if that range is not defined. 
    */
  getRange(): import('../Atk').Range | null;
  /**
    * Gets the list of subranges defined for this object. See Atk.Value introduction for examples of subranges and when to expose them.
    * @returns an GLib.SList of Atk.Range which each of the subranges defined for this object. Free the returns list with g_slist_free(). 
    */
  getSubRanges(): import('../Atk').Range[];
  /**
    * Gets the current value and the human readable text alternative of self. text is a newly created string, that must be freed by the caller. Can be None if no descriptor is available.
    * @returns value:address of float to put the current value of self text:address of str to put the human readable text alternative for value 
    */
  getValueAndText(): [number, string];
  /**
    * Sets the value of this object.
    * @param value a GObject.Value which is the desired new accessible value.
    * @returns True if new value is successfully set, False otherwise. 
    */
  setCurrentValue(value: import('../GObject').Value): boolean;
  /**
    * Sets the value of this object.
    * @param newValue a double which is the desired new accessible value. 
    */
  setValue(newValue: number): void;
}

