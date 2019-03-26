import * as GObject from '../GObject';
export declare interface ColorChooser extends GObject.GInterface { }

/**
  * Gtk.ColorChooser is an interface that is implemented by widgets
for choosing colors. Depending on the situation, colors may be
allowed to have alpha (translucency). 
  */
export declare interface ColorChooser {
  /**
    * Adds a palette to the color chooser. If orientation is horizontal, the colors are grouped in rows, with colors_per_line colors in each row. If horizontal is False, the colors are grouped in columns instead.
    * @param orientation Gtk.Orientation.HORIZONTAL if the palette should be displayed in rows, Gtk.Orientation.VERTICAL for columns
    * @param colorsPerLine the number of colors to show in each row/column
    * @param colors the colors of the palette, or None 
    */
  addPalette(orientation: import('../Gtk').Orientation, colorsPerLine: number, colors: import('../Gdk').RGBA | null): void;
  /**
    * Gets the currently-selected color.
    * @returns a Gdk.RGBA to fill in with the current color 
    */
  getRgba(): import('../Gdk').RGBA;
  /**
    * Returns whether the color chooser shows the alpha channel.
    * @returns True if the color chooser uses the alpha channel, False if not 
    */
  getUseAlpha(): boolean;
  /**
    * Sets the color.
    * @param color the new color 
    */
  setRgba(color: import('../Gdk').RGBA): void;
  /**
    * Sets whether or not the color chooser should use the alpha channel.
    * @param useAlpha True if color chooser should use alpha channel, False if not 
    */
  setUseAlpha(useAlpha: boolean): void;
  /**
    * Current color, as a Gdk.RGBA 
    */
  rgba: import('../Gdk').RGBA;
  /**
    * Whether alpha should be shown 
    */
  useAlpha: boolean;
}

