import * as GObject from '../GObject';
export declare interface Monitor extends GObject.Object { }

/**
  * Gdk.Monitor objects represent the individual outputs that are
associated with a Gdk.Display. Gdk.Display has APIs to enumerate
monitors with Gdk.Display.get_n_monitors() and Gdk.Display.get_monitor(), and
to find particular monitors with Gdk.Display.get_primary_monitor() or
Gdk.Display.get_monitor_at_window(). 
  */
export declare class Monitor {
  /**
    * Gets the display that this monitor belongs to.
    * @returns the display 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Retrieves the size and position of an individual monitor within the display coordinate space. The returned geometry is in  ”application pixels”, not in ”device pixels” (see Gdk.Monitor.get_scale_factor()).
    * @returns a Gdk.Rectangle to be filled with the monitor geometry 
    */
  getGeometry(): import('../Gdk').Rectangle;
  /**
    * Gets the height in millimeters of the monitor.
    * @returns the physical height of the monitor 
    */
  getHeightMm(): number;
  /**
    * Gets the name of the monitor’s manufacturer, if available.
    * @returns the name of the manufacturer, or None 
    */
  getManufacturer(): string | null;
  /**
    * Gets the a string identifying the monitor model, if available.
    * @returns the monitor model, or None 
    */
  getModel(): string | null;
  /**
    * Gets the refresh rate of the monitor, if available.
    * @returns the refresh rate in milli-Hertz, or 0 
    */
  getRefreshRate(): number;
  /**
    * Gets the internal scale factor that maps from monitor coordinates to the actual device pixels. On traditional systems this is 1, but on very high density outputs this can be a higher value (often 2).
    * @returns the scale factor 
    */
  getScaleFactor(): number;
  /**
    * Gets information about the layout of red, green and blue primaries for each pixel in this monitor, if available.
    * @returns the subpixel layout 
    */
  getSubpixelLayout(): import('../Gdk').SubpixelLayout;
  /**
    * Gets the width in millimeters of the monitor.
    * @returns the physical width of the monitor 
    */
  getWidthMm(): number;
  /**
    * Retrieves the size and position of the “work area” on a monitor within the display coordinate space. The returned geometry is in ”application pixels”, not in ”device pixels” (see Gdk.Monitor.get_scale_factor()).
    * @returns a Gdk.Rectangle to be filled with the monitor workarea 
    */
  getWorkarea(): import('../Gdk').Rectangle;
  /**
    * Gets whether this monitor should be considered primary (see Gdk.Display.get_primary_monitor()).
    * @returns True if self is primary 
    */
  isPrimary(): boolean;
  /**
    * The display of the monitor 
    */
  display: import('../Gdk').Display;
  /**
    * The geometry of the monitor 
    */
  readonly geometry: import('../Gdk').Rectangle;
  /**
    * The height of the monitor, in millimeters 
    */
  readonly heightMm: number;
  /**
    * The manufacturer name 
    */
  readonly manufacturer: string;
  /**
    * The model name 
    */
  readonly model: string;
  /**
    * The refresh rate, in millihertz 
    */
  readonly refreshRate: number;
  /**
    * The scale factor 
    */
  readonly scaleFactor: number;
  /**
    * The subpixel layout 
    */
  readonly subpixelLayout: import('../Gdk').SubpixelLayout;
  /**
    * The width of the monitor, in millimeters 
    */
  readonly widthMm: number;
  /**
    * The workarea of the monitor 
    */
  readonly workarea: import('../Gdk').Rectangle;
}

