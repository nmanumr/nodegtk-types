import * as Gtk from '../Gtk';
export declare interface ColorButton extends Gtk.Button, Gtk.ColorChooser { }

/**
  * The Gtk.ColorButton is a button which displays the currently selected
color and allows to open a color selection dialog to change the color.
It is suitable widget for selecting a color in a preference dialog. 
  */
export declare class ColorButton {
  /**
    * Creates a new color button.
    * @returns a new color button 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new color button.
    * @param color A Gdk.Color to set the current color with
    * @returns a new color button 
    */
  static newWithColor(color: import('../Gdk').Color): import('../Gtk').Widget;
  /**
    * Creates a new color button.
    * @param rgba A Gdk.RGBA to set the current color with
    * @returns a new color button 
    */
  static newWithRgba(rgba: import('../Gdk').RGBA): import('../Gtk').Widget;
  /**
    * Returns the current alpha value.
    * @returns an integer between 0 and 65535 
    */
  getAlpha(): number;
  /**
    * Sets color to be the current color in the Gtk.ColorButton widget.
    * @returns a Gdk.Color to fill in with the current color 
    */
  getColor(): import('../Gdk').Color;
  /**
    * Gets the title of the color selection dialog.
    * @returns An internal string, do not free the return value 
    */
  getTitle(): string;
  /**
    * Does the color selection dialog use the alpha channel ?
    * @returns True if the color sample uses alpha channel, False if not 
    */
  getUseAlpha(): boolean;
  /**
    * Sets the current opacity to be alpha.
    * @param alpha an integer between 0 and 65535 
    */
  setAlpha(alpha: number): void;
  /**
    * Sets the current color to be color.
    * @param color A Gdk.Color to set the current color with 
    */
  setColor(color: import('../Gdk').Color): void;
  /**
    * Sets the title for the color selection dialog.
    * @param title String containing new window title 
    */
  setTitle(title: string): void;
  /**
    * Sets whether or not the color button should use the alpha channel.
    * @param useAlpha True if color button should use alpha channel, False if not 
    */
  setUseAlpha(useAlpha: boolean): void;
  /**
    * The selected opacity value (0 fully transparent, 65535 fully opaque) 
    */
  alpha: number;
  /**
    * The selected color deprecated 
    */
  color: import('../Gdk').Color;
  /**
    * Whether to show the color editor right away 
    */
  showEditor: boolean;
  /**
    * The title of the color selection dialog 
    */
  title: string;
}

