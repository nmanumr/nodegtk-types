import * as GObject from '../GObject';
export declare interface PrintContext extends GObject.Object { }

/**
  * A Gtk.PrintContext encapsulates context information that is required when
drawing pages for printing, such as the cairo context and important
parameters like page size and resolution. It also lets you easily
create Pango.Layout and Pango.Context objects that match the font metrics
of the cairo surface. 
  */
export declare class PrintContext {
  /**
    * Creates a new Pango.Context that can be used with the Gtk.PrintContext.
    * @returns a new Pango context for self 
    */
  createPangoContext(): import('../Pango').Context;
  /**
    * Creates a new Pango.Layout that is suitable for use with the Gtk.PrintContext.
    * @returns a new Pango layout for self 
    */
  createPangoLayout(): import('../Pango').Layout;
  /**
    * Obtains the cairo context that is associated with the Gtk.PrintContext.
    * @returns the cairo context of self 
    */
  getCairoContext(): import('../cairo').Context;
  /**
    * Obtains the horizontal resolution of the Gtk.PrintContext, in dots per inch.
    * @returns the horizontal resolution of self 
    */
  getDpiX(): number;
  /**
    * Obtains the vertical resolution of the Gtk.PrintContext, in dots per inch.
    * @returns the vertical resolution of self 
    */
  getDpiY(): number;
  /**
    * Obtains the hardware printer margins of the Gtk.PrintContext, in units.
    * @returns True if the hard margins were retrieved  top:top hardware printer margin bottom:bottom hardware printer margin left:left hardware printer margin right:right hardware printer margin 
    */
  getHardMargins(): [boolean, number, number, number, number];
  /**
    * Obtains the height of the Gtk.PrintContext, in pixels.
    * @returns the height of self 
    */
  getHeight(): number;
  /**
    * Obtains the Gtk.PageSetup that determines the page dimensions of the Gtk.PrintContext.
    * @returns the page setup of self 
    */
  getPageSetup(): import('../Gtk').PageSetup;
  /**
    * Returns a Pango.FontMap that is suitable for use with the Gtk.PrintContext.
    * @returns the font map of self 
    */
  getPangoFontmap(): import('../Pango').FontMap;
  /**
    * Obtains the width of the Gtk.PrintContext, in pixels.
    * @returns the width of self 
    */
  getWidth(): number;
  /**
    * Sets a new cairo context on a print context.
    * @param cr the cairo context
    * @param dpiX the horizontal resolution to use with cr
    * @param dpiY the vertical resolution to use with cr 
    */
  setCairoContext(cr: import('../cairo').Context, dpiX: number, dpiY: number): void;
}

