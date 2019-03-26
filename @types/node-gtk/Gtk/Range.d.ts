import * as Gtk from '../Gtk';
export declare interface Range extends Gtk.Widget, Gtk.Orientable { }

/**
  * Gtk.Range is the common base class for widgets which visualize an
adjustment, e.g Gtk.Scale or Gtk.Scrollbar. 
  */
export declare abstract class Range {
  /**
    * Get the Gtk.Adjustment which is the “model” object for Gtk.Range. See Gtk.Range.set_adjustment() for details. The return value does not have a reference added, so should not be unreferenced.
    * @returns a Gtk.Adjustment 
    */
  getAdjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the current position of the fill level indicator.
    * @returns The current fill level 
    */
  getFillLevel(): number;
  /**
    * Gets the value set by Gtk.Range.set_flippable().
    * @returns True if the range is flippable 
    */
  getFlippable(): boolean;
  /**
    * Gets the value set by Gtk.Range.set_inverted().
    * @returns True if the range is inverted 
    */
  getInverted(): boolean;
  /**
    * Gets the sensitivity policy for the stepper that points to the ‘lower’ end of the Gtk.Range’s adjustment.
    * @returns The lower stepper’s sensitivity policy. 
    */
  getLowerStepperSensitivity(): import('../Gtk').SensitivityType;
  /**
    * This function is useful mainly for Gtk.Range subclasses.
    * @returns The minimum size of the range’s slider. 
    */
  getMinSliderSize(): number;
  /**
    * This function returns the area that contains the range’s trough and its steppers, in widget->window coordinates.
    * @returns return location for the range rectangle 
    */
  getRangeRect(): import('../Gdk').Rectangle;
  /**
    * Gets whether the range is restricted to the fill level.
    * @returns True if self is restricted to the fill level. 
    */
  getRestrictToFillLevel(): boolean;
  /**
    * Gets the number of digits to round the value to when it changes. See Gtk.Range ::change-value.
    * @returns the number of digits to round to 
    */
  getRoundDigits(): number;
  /**
    * Gets whether the range displays the fill level graphically.
    * @returns True if self shows the fill level. 
    */
  getShowFillLevel(): boolean;
  /**
    * This function returns sliders range along the long dimension, in widget->window coordinates.
    * @returns slider_start:return location for the slider’s start, or None slider_end:return location for the slider’s end, or None 
    */
  getSliderRange(): [number, number];
  /**
    * This function is useful mainly for Gtk.Range subclasses.
    * @returns whether the range’s slider has a fixed size. 
    */
  getSliderSizeFixed(): boolean;
  /**
    * Gets the sensitivity policy for the stepper that points to the ‘upper’ end of the Gtk.Range’s adjustment.
    * @returns The upper stepper’s sensitivity policy. 
    */
  getUpperStepperSensitivity(): import('../Gtk').SensitivityType;
  /**
    * Gets the current value of the range.
    * @returns current value of the range. 
    */
  getValue(): number;
  /**
    * Sets the adjustment to be used as the “model” object for this range widget. The adjustment indicates the current range value, the minimum and maximum range values, the step/page increments used for keybindings and scrolling, and the page size. The page size is normally 0 for Gtk.Scale and nonzero for Gtk.Scrollbar, and indicates the size of the visible area of the widget being scrolled. The page size affects the size of the scrollbar slider.
    * @param adjustment a Gtk.Adjustment 
    */
  setAdjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Set the new position of the fill level indicator.
    * @param fillLevel the new position of the fill level indicator 
    */
  setFillLevel(fillLevel: number): void;
  /**
    * If a range is flippable, it will switch its direction if it is horizontal and its direction is Gtk.TextDirection.RTL.
    * @param flippable True to make the range flippable 
    */
  setFlippable(flippable: boolean): void;
  /**
    * Sets the step and page sizes for the range. The step size is used when the user clicks the Gtk.Scrollbar arrows or moves Gtk.Scale via arrow keys. The page size is used for example when moving via Page Up or Page Down keys.
    * @param step step size
    * @param page page size 
    */
  setIncrements(step: number, page: number): void;
  /**
    * Ranges normally move from lower to higher values as the slider moves from top to bottom or left to right. Inverted ranges have higher values at the top or on the right rather than on the bottom or left.
    * @param setting True to invert the range 
    */
  setInverted(setting: boolean): void;
  /**
    * Sets the sensitivity policy for the stepper that points to the ‘lower’ end of the Gtk.Range’s adjustment.
    * @param sensitivity the lower stepper’s sensitivity policy. 
    */
  setLowerStepperSensitivity(sensitivity: import('../Gtk').SensitivityType): void;
  /**
    * Sets the minimum size of the range’s slider.
    * @param minSize The slider’s minimum size 
    */
  setMinSliderSize(minSize: number): void;
  /**
    * Sets the allowable values in the Gtk.Range, and clamps the range value to be between min and max. (If the range has a non-zero page size, it is clamped between min and max - page-size.)
    * @param min minimum range value
    * @param max maximum range value 
    */
  setRange(min: number, max: number): void;
  /**
    * Sets whether the slider is restricted to the fill level. See Gtk.Range.set_fill_level() for a general description of the fill level concept.
    * @param restrictToFillLevel Whether the fill level restricts slider movement. 
    */
  setRestrictToFillLevel(restrictToFillLevel: boolean): void;
  /**
    * Sets the number of digits to round the value to when it changes. See Gtk.Range ::change-value.
    * @param roundDigits the precision in digits, or -1 
    */
  setRoundDigits(roundDigits: number): void;
  /**
    * Sets whether a graphical fill level is show on the trough. See Gtk.Range.set_fill_level() for a general description of the fill level concept.
    * @param showFillLevel Whether a fill level indicator graphics is shown. 
    */
  setShowFillLevel(showFillLevel: boolean): void;
  /**
    * Sets whether the range’s slider has a fixed size, or a size that depends on its adjustment’s page size.
    * @param sizeFixed True to make the slider size constant 
    */
  setSliderSizeFixed(sizeFixed: boolean): void;
  /**
    * Sets the sensitivity policy for the stepper that points to the ‘upper’ end of the Gtk.Range’s adjustment.
    * @param sensitivity the upper stepper’s sensitivity policy. 
    */
  setUpperStepperSensitivity(sensitivity: import('../Gtk').SensitivityType): void;
  /**
    * Sets the current value of the range; if the value is outside the minimum or maximum range values, it will be clamped to fit inside them. The range emits the Gtk.Range ::value-changed signal if the value changes.
    * @param value new value of the range 
    */
  setValue(value: number): void;
  /**
    * The Gtk.Adjustment that contains the current value of this range object 
    */
  adjustment: import('../Gtk').Adjustment;
  /**
    * The fill level. 
    */
  fillLevel: number;
  /**
    * Invert direction slider moves to increase range value 
    */
  inverted: boolean;
  /**
    * The sensitivity policy for the stepper that points to the adjustment’s lower side deprecated 
    */
  lowerStepperSensitivity: import('../Gtk').SensitivityType;
  /**
    * Whether to restrict the upper boundary to the fill level. 
    */
  restrictToFillLevel: boolean;
  /**
    * The number of digits to round the value to. 
    */
  roundDigits: number;
  /**
    * Whether to display a fill level indicator graphics on trough. 
    */
  showFillLevel: boolean;
  /**
    * The sensitivity policy for the stepper that points to the adjustment’s upper side deprecated 
    */
  upperStepperSensitivity: import('../Gtk').SensitivityType;
}

