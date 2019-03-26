import * as Gtk from '../Gtk';
export declare interface ScaleButton extends Gtk.Button, Gtk.Orientable { }

/**
  * Gtk.ScaleButton provides a button which pops up a scale widget.
This kind of widget is commonly used for volume controls in multimedia
applications, and GTK+ provides a Gtk.VolumeButton subclass that
is tailored for this use case. 
  */
export declare class ScaleButton {
  /**
    * Creates a Gtk.ScaleButton, with a range between min and max, with a stepping of step.
    * @param size a stock icon size (Gtk.IconSize)
    * @param min the minimum value of the scale (usually 0)
    * @param max the maximum value of the scale (usually 100)
    * @param step the stepping of value when a scroll-wheel event, or up/down arrow event occurs (usually 2)
    * @param icons a None-terminated array of icon names, or None if you want to set the list later with Gtk.ScaleButton.set_icons()
    * @returns a new Gtk.ScaleButton 
    */
  static new(size: number, min: number, max: number, step: number, icons: string | null): import('../Gtk').Widget;
  /**
    * Gets the Gtk.Adjustment associated with the Gtk.ScaleButton’s scale. See Gtk.Range.get_adjustment() for details.
    * @returns the adjustment associated with the scale 
    */
  getAdjustment(): import('../Gtk').Adjustment;
  /**
    * Retrieves the minus button of the Gtk.ScaleButton.
    * @returns the minus button of the Gtk.ScaleButton as a Gtk.Button 
    */
  getMinusButton(): import('../Gtk').Button;
  /**
    * Retrieves the plus button of the Gtk.ScaleButton.
    * @returns the plus button of the Gtk.ScaleButton as a Gtk.Button 
    */
  getPlusButton(): import('../Gtk').Button;
  /**
    * Retrieves the popup of the Gtk.ScaleButton.
    * @returns the popup of the Gtk.ScaleButton 
    */
  getPopup(): import('../Gtk').Widget;
  /**
    * Gets the current value of the scale button.
    * @returns current value of the scale button 
    */
  getValue(): number;
  /**
    * Sets the Gtk.Adjustment to be used as a model for the Gtk.ScaleButton’s scale. See Gtk.Range.set_adjustment() for details.
    * @param adjustment a Gtk.Adjustment 
    */
  setAdjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Sets the icons to be used by the scale button. For details, see the Gtk.ScaleButton :icons property.
    * @param icons a None-terminated array of icon names 
    */
  setIcons(icons: string): void;
  /**
    * Sets the current value of the scale; if the value is outside the minimum or maximum range values, it will be clamped to fit inside them. The scale button emits the Gtk.ScaleButton ::value-changed signal if the value changes.
    * @param value new value of the scale button 
    */
  setValue(value: number): void;
  /**
    * The Gtk.Adjustment that contains the current value of this scale button object 
    */
  adjustment: import('../Gtk').Adjustment;
  /**
    * List of icon names 
    */
  icons: string;
  /**
    * The icon size 
    */
  size: import('../Gtk').IconSize;
  /**
    * The value of the scale 
    */
  value: number;
}

