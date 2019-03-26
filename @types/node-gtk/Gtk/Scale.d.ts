import * as Gtk from '../Gtk';
export declare interface Scale extends Gtk.Range { }

/**
  * A Gtk.Scale is a slider control used to select a numeric value.
To use it, you’ll probably want to investigate the methods on
its base class, Gtk.Range, in addition to the methods for Gtk.Scale itself.
To set the value of a scale, you would normally use Gtk.Range.set_value().
To detect changes to the value, you would normally use the
Gtk.Range ::value-changed signal. 
  */
export declare class Scale {
  /**
    * Creates a new Gtk.Scale.
    * @param orientation the scale’s orientation.
    * @param adjustment the Gtk.Adjustment which sets the range of the scale, or None to create a new adjustment.
    * @returns a new Gtk.Scale 
    */
  static new(orientation: import('../Gtk').Orientation, adjustment: import('../Gtk').Adjustment | null): import('../Gtk').Widget;
  /**
    * Creates a new scale widget with the given orientation that lets the user input a number between min and max (including min and max) with the increment step.  step must be nonzero; it’s the distance the slider moves when using the arrow keys to adjust the scale value.
    * @param orientation the scale’s orientation.
    * @param min minimum value
    * @param max maximum value
    * @param step step increment (tick size) used with keyboard shortcuts
    * @returns a new Gtk.Scale 
    */
  static newWithRange(orientation: import('../Gtk').Orientation, min: number, max: number, step: number): import('../Gtk').Widget;
  /**
    * Adds a mark at value.
    * @param value the value at which the mark is placed, must be between the lower and upper limits of the scales’ adjustment
    * @param position where to draw the mark. For a horizontal scale, Gtk.PositionType.TOP and Gtk.PositionType.LEFT are drawn above the scale, anything else below. For a vertical scale, Gtk.PositionType.LEFT and Gtk.PositionType.TOP are drawn to the left of the scale, anything else to the right.
    * @param markup Text to be shown at the mark, using Pango markup, or None 
    */
  addMark(value: number, position: import('../Gtk').PositionType, markup: string | null): void;
  /**
    * Removes any marks that have been added with Gtk.Scale.add_mark(). 
    */
  clearMarks(): void;
  /**
    * Gets the number of decimal places that are displayed in the value.
    * @returns the number of decimal places that are displayed 
    */
  getDigits(): number;
  /**
    * Returns whether the current value is displayed as a string next to the slider.
    * @returns whether the current value is displayed as a string 
    */
  getDrawValue(): boolean;
  /**
    * Returns whether the scale has an origin.
    * @returns True if the scale has an origin. 
    */
  getHasOrigin(): boolean;
  /**
    * Gets the Pango.Layout used to display the scale. The returned object is owned by the scale so does not need to be freed by the caller.
    * @returns the Pango.Layout for this scale, or None if the Gtk.Scale :draw-value property is False. 
    */
  getLayout(): import('../Pango').Layout | null;
  /**
    * Obtains the coordinates where the scale will draw the Pango.Layout representing the text in the scale. Remember when using the Pango.Layout function you need to convert to and from pixels using PANGO_PIXELS() or Pango.SCALE.
    * @returns x:location to store X offset of layout, or None y:location to store Y offset of layout, or None 
    */
  getLayoutOffsets(): [number, number];
  /**
    * Gets the position in which the current value is displayed.
    * @returns the position in which the current value is displayed 
    */
  getValuePos(): import('../Gtk').PositionType;
  /**
    * Sets the number of decimal places that are displayed in the value. Also causes the value of the adjustment to be rounded to this number of digits, so the retrieved value matches the displayed one, if Gtk.Scale :draw-value is True when the value changes. If you want to enforce rounding the value when Gtk.Scale :draw-value is False, you can set Gtk.Range :round-digits instead.
    * @param digits the number of decimal places to display, e.g. use 1 to display 1.0, 2 to display 1.00, etc 
    */
  setDigits(digits: number): void;
  /**
    * Specifies whether the current value is displayed as a string next to the slider.
    * @param drawValue True to draw the value 
    */
  setDrawValue(drawValue: boolean): void;
  /**
    * If Gtk.Scale :has-origin is set to True (the default), the scale will highlight the part of the trough between the origin (bottom or left side) and the current value.
    * @param hasOrigin True if the scale has an origin 
    */
  setHasOrigin(hasOrigin: boolean): void;
  /**
    * Sets the position in which the current value is displayed.
    * @param pos the position in which the current value is displayed 
    */
  setValuePos(pos: import('../Gtk').PositionType): void;
  /**
    * The number of decimal places that are displayed in the value 
    */
  digits: number;
  /**
    * Whether the current value is displayed as a string next to the slider 
    */
  drawValue: boolean;
  /**
    * Whether the scale has an origin 
    */
  hasOrigin: boolean;
  /**
    * The position in which the current value is displayed 
    */
  valuePos: import('../Gtk').PositionType;
}

