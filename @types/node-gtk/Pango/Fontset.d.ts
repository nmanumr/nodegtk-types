import * as GObject from '../GObject';
export declare interface Fontset extends GObject.Object { }

/**
  * A Pango.Fontset represents a set of Pango.Font to use
when rendering text. It is the result of resolving a
Pango.FontDescription against a particular Pango.Context.
It has operations for finding the component font for
a particular Unicode character, and for finding a composite
set of metrics for the entire fontset. 
  */
export declare abstract class Fontset {
  /**
    * Iterates through all the fonts in a fontset, calling func for each one. If func returns True, that stops the iteration.
    * @param func Callback function
    * @param data data to pass to the callback function 
    */
  foreach(func: import('../Pango').fontsetForeachFunc, data: Object | null): void;
  /**
    * Returns the font in the fontset that contains the best glyph for the Unicode character wc.
    * @param wc a Unicode character
    * @returns a Pango.Font. The caller must call GObject.Object.unref when finished with the font. 
    */
  getFont(wc: number): import('../Pango').Font;
  /**
    * Get overall metric information for the fonts in the fontset.
    * @returns a Pango.FontMetrics object. The caller must call Pango.FontMetrics.unref() when finished using the object. 
    */
  getMetrics(): import('../Pango').FontMetrics;
}

