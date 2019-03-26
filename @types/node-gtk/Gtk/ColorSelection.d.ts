import * as Gtk from '../Gtk';
export declare interface ColorSelection extends Gtk.Box { }

export declare class ColorSelection {
  /**
    * Creates a new Gtk.ColorSelection.
    * @returns a new Gtk.ColorSelection 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Parses a color palette string; the string is a colon-separated list of color names readable by Gdk.Color.parse().
    * @param str a string encoding a color palette
    * @returns True if a palette was successfully parsed  colors:return location for allocated array of Gdk.Color 
    */
  static paletteFromString(str: string): [boolean, import('../Gdk').Color[]];
  /**
    * Encodes a palette as a string, useful for persistent storage.
    * @param colors an array of colors
    * @returns allocated string encoding the palette 
    */
  static paletteToString(colors: import('../Gdk').Color): string;
  /**
    * Returns the current alpha value.
    * @returns an integer between 0 and 65535 
    */
  getCurrentAlpha(): number;
  /**
    * Sets color to be the current color in the Gtk.ColorSelection widget.
    * @returns a Gdk.Color to fill in with the current color 
    */
  getCurrentColor(): import('../Gdk').Color;
  /**
    * Sets rgba to be the current color in the Gtk.ColorSelection widget.
    * @returns a Gdk.RGBA to fill in with the current color 
    */
  getCurrentRgba(): import('../Gdk').RGBA;
  /**
    * Determines whether the colorsel has an opacity control.
    * @returns True if the self has an opacity control, False if it does’t 
    */
  getHasOpacityControl(): boolean;
  /**
    * Determines whether the color selector has a color palette.
    * @returns True if the selector has a palette, False if it hasn’t 
    */
  getHasPalette(): boolean;
  /**
    * Returns the previous alpha value.
    * @returns an integer between 0 and 65535 
    */
  getPreviousAlpha(): number;
  /**
    * Fills color in with the original color value.
    * @returns a Gdk.Color to fill in with the original color value 
    */
  getPreviousColor(): import('../Gdk').Color;
  /**
    * Fills rgba in with the original color value.
    * @returns a Gdk.RGBA to fill in with the original color value 
    */
  getPreviousRgba(): import('../Gdk').RGBA;
  /**
    * Gets the current state of the self.
    * @returns True if the user is currently dragging a color around, and False if the selection has stopped 
    */
  isAdjusting(): boolean;
  /**
    * Sets the current opacity to be alpha.
    * @param alpha an integer between 0 and 65535 
    */
  setCurrentAlpha(alpha: number): void;
  /**
    * Sets the current color to be color.
    * @param color a Gdk.Color to set the current color with 
    */
  setCurrentColor(color: import('../Gdk').Color): void;
  /**
    * Sets the current color to be rgba.
    * @param rgba A Gdk.RGBA to set the current color with 
    */
  setCurrentRgba(rgba: import('../Gdk').RGBA): void;
  /**
    * Sets the self to use or not use opacity.
    * @param hasOpacity True if self can set the opacity, False otherwise 
    */
  setHasOpacityControl(hasOpacity: boolean): void;
  /**
    * Shows and hides the palette based upon the value of has_palette.
    * @param hasPalette True if palette is to be visible, False otherwise 
    */
  setHasPalette(hasPalette: boolean): void;
  /**
    * Sets the “previous” alpha to be alpha.
    * @param alpha an integer between 0 and 65535 
    */
  setPreviousAlpha(alpha: number): void;
  /**
    * Sets the “previous” color to be color.
    * @param color a Gdk.Color to set the previous color with 
    */
  setPreviousColor(color: import('../Gdk').Color): void;
  /**
    * Sets the “previous” color to be rgba.
    * @param rgba a Gdk.RGBA to set the previous color with 
    */
  setPreviousRgba(rgba: import('../Gdk').RGBA): void;
  /**
    * The current opacity value (0 fully transparent, 65535 fully opaque) 
    */
  currentAlpha: number;
  /**
    * The current color deprecated 
    */
  currentColor: import('../Gdk').Color;
  /**
    * The current RGBA color 
    */
  currentRgba: import('../Gdk').RGBA;
  /**
    * Whether the color selector should allow setting opacity 
    */
  hasOpacityControl: boolean;
  /**
    * Whether a palette should be used 
    */
  hasPalette: boolean;
}

