import * as GObject from '../GObject';
export declare interface Screen extends GObject.Object { }

/**
  * Gdk.Screen objects are the GDK representation of the screen on
which windows can be displayed and on which the pointer moves.
X originally identified screens with physical screens, but
nowadays it is more common to have a single Gdk.Screen which
combines several physical monitors (see Gdk.Screen.get_n_monitors()). 
  */
export declare class Screen {
  /**
    * Gets the default screen for the default display. (See Gdk.Display.get_default ()).
    * @returns a Gdk.Screen, or None if there is no default display. 
    */
  static getDefault(): import('../Gdk').Screen | null;
  /**
    * Gets the height of the default screen in pixels. The returned size is in ”application pixels”, not in ”device pixels” (see Gdk.Screen.get_monitor_scale_factor()).
    * @returns the height of the default screen in pixels. 
    */
  static height(): number;
  /**
    * Returns the height of the default screen in millimeters. Note that on many X servers this value will not be correct.
    * @returns the height of the default screen in millimeters, though it is not always correct. 
    */
  static heightMm(): number;
  /**
    * Gets the width of the default screen in pixels. The returned size is in ”application pixels”, not in ”device pixels” (see Gdk.Screen.get_monitor_scale_factor()).
    * @returns the width of the default screen in pixels. 
    */
  static width(): number;
  /**
    * Returns the width of the default screen in millimeters. Note that on many X servers this value will not be correct.
    * @returns the width of the default screen in millimeters, though it is not always correct. 
    */
  static widthMm(): number;
  /**
    * Returns the screen’s currently active window.
    * @returns the currently active window, or None. 
    */
  getActiveWindow(): import('../Gdk').Window | null;
  /**
    * Gets the display to which the self belongs.
    * @returns the display to which self belongs 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Gets any options previously set with Gdk.Screen.set_font_options().
    * @returns the current font options, or None if no default font options have been set. 
    */
  getFontOptions(): import('../cairo').FontOptions | null;
  /**
    * Gets the height of self in pixels. The returned size is in ”application pixels”, not in ”device pixels” (see Gdk.Screen.get_monitor_scale_factor()).
    * @returns the height of self in pixels. 
    */
  getHeight(): number;
  /**
    * Returns the height of self in millimeters.
    * @returns the heigth of self in millimeters. 
    */
  getHeightMm(): number;
  /**
    * Returns the monitor number in which the point (x,`y`) is located.
    * @param x the x coordinate in the virtual screen.
    * @param y the y coordinate in the virtual screen.
    * @returns the monitor number in which the point (x,`y`) lies, or a monitor close to (x,`y`) if the point is not in any monitor. 
    */
  getMonitorAtPoint(x: number, y: number): number;
  /**
    * Returns the number of the monitor in which the largest area of the bounding rectangle of window resides.
    * @param window a Gdk.Window
    * @returns the monitor number in which most of window is located, or if window does not intersect any monitors, a monitor, close to window. 
    */
  getMonitorAtWindow(window: import('../Gdk').Window): number;
  /**
    * Retrieves the Gdk.Rectangle representing the size and position of the individual monitor within the entire screen area. The returned geometry is in ”application pixels”, not in ”device pixels” (see Gdk.Screen.get_monitor_scale_factor()).
    * @param monitorNum the monitor number
    * @returns a Gdk.Rectangle to be filled with the monitor geometry 
    */
  getMonitorGeometry(monitorNum: number): import('../Gdk').Rectangle;
  /**
    * Gets the height in millimeters of the specified monitor.
    * @param monitorNum number of the monitor, between 0 and Gdk.Screen.get_n_monitors (screen)
    * @returns the height of the monitor, or -1 if not available 
    */
  getMonitorHeightMm(monitorNum: number): number;
  /**
    * Returns the output name of the specified monitor. Usually something like VGA, DVI, or TV, not the actual product name of the display device.
    * @param monitorNum number of the monitor, between 0 and Gdk.Screen.get_n_monitors (screen)
    * @returns a newly-allocated string containing the name of the monitor, or None if the name cannot be determined 
    */
  getMonitorPlugName(monitorNum: number): string | null;
  /**
    * Returns the internal scale factor that maps from monitor coordinates to the actual device pixels. On traditional systems this is 1, but on very high density outputs this can be a higher value (often 2).
    * @param monitorNum number of the monitor, between 0 and Gdk.Screen.get_n_monitors (screen)
    * @returns the scale factor 
    */
  getMonitorScaleFactor(monitorNum: number): number;
  /**
    * Gets the width in millimeters of the specified monitor, if available.
    * @param monitorNum number of the monitor, between 0 and Gdk.Screen.get_n_monitors (screen)
    * @returns the width of the monitor, or -1 if not available 
    */
  getMonitorWidthMm(monitorNum: number): number;
  /**
    * Retrieves the Gdk.Rectangle representing the size and position of the “work area” on a monitor within the entire screen area. The returned geometry is in ”application pixels”, not in ”device pixels” (see Gdk.Screen.get_monitor_scale_factor()).
    * @param monitorNum the monitor number
    * @returns a Gdk.Rectangle to be filled with the monitor workarea 
    */
  getMonitorWorkarea(monitorNum: number): import('../Gdk').Rectangle;
  /**
    * Returns the number of monitors which self consists of.
    * @returns number of monitors which self consists of 
    */
  getNMonitors(): number;
  /**
    * Gets the index of self among the screens in the display to which it belongs. (See Gdk.Screen.get_display())
    * @returns the index 
    */
  getNumber(): number;
  /**
    * Gets the primary monitor for self.  The primary monitor is considered the monitor where the “main desktop” lives. While normal application windows typically allow the window manager to place the windows, specialized desktop applications such as panels should place themselves on the primary monitor.
    * @returns An integer index for the primary monitor, or 0 if none is configured. 
    */
  getPrimaryMonitor(): number;
  /**
    * Gets the resolution for font handling on the screen; see Gdk.Screen.set_resolution() for full details.
    * @returns the current resolution, or -1 if no resolution has been set. 
    */
  getResolution(): number;
  /**
    * Gets a visual to use for creating windows with an alpha channel. The windowing system on which GTK+ is running may not support this capability, in which case None will be returned. Even if a non-None value is returned, its possible that the window’s alpha channel won’t be honored when displaying the window on the screen: in particular, for X an appropriate windowing manager and compositing manager must be running to provide appropriate display.
    * @returns a visual to use for windows with an alpha channel or None if the capability is not available. 
    */
  getRgbaVisual(): import('../Gdk').Visual | null;
  /**
    * Gets the root window of self.
    * @returns the root window 
    */
  getRootWindow(): import('../Gdk').Window;
  /**
    * Retrieves a desktop-wide setting such as double-click time for the Gdk.Screen self.
    * @param name the name of the setting
    * @param value location to store the value of the setting
    * @returns True if the setting existed and a value was stored in value, False otherwise. 
    */
  getSetting(name: string, value: import('../GObject').Value): boolean;
  /**
    * Get the system’s default visual for self. This is the visual for the root window of the display. The return value should not be freed.
    * @returns the system visual 
    */
  getSystemVisual(): import('../Gdk').Visual;
  /**
    * Obtains a list of all toplevel windows known to GDK on the screen self. A toplevel window is a child of the root window (see Gdk.get_default_root_window()).
    * @returns list of toplevel windows, free with g_list_free() 
    */
  getToplevelWindows(): import('../Gdk').Window[];
  /**
    * Gets the width of self in pixels. The returned size is in ”application pixels”, not in ”device pixels” (see Gdk.Screen.get_monitor_scale_factor()).
    * @returns the width of self in pixels. 
    */
  getWidth(): number;
  /**
    * Gets the width of self in millimeters.
    * @returns the width of self in millimeters. 
    */
  getWidthMm(): number;
  /**
    * Returns a GLib.List of Gdk.Windows representing the current window stack.
    * @returns a list of Gdk.Windows for the current window stack, or None. 
    */
  getWindowStack(): import('../Gdk').Window[] | null;
  /**
    * Returns whether windows with an RGBA visual can reasonably be expected to have their alpha channel drawn correctly on the screen.
    * @returns Whether windows with RGBA visuals can reasonably be expected to have their alpha channels drawn correctly on the screen. 
    */
  isComposited(): boolean;
  /**
    * Lists the available visuals for the specified self. A visual describes a hardware image data format. For example, a visual might support 24-bit color, or 8-bit color, and might expect pixels to be in a certain format.
    * @returns a list of visuals; the list must be freed, but not its contents 
    */
  listVisuals(): import('../Gdk').Visual[];
  /**
    * Determines the name to pass to Gdk.Display.open() to get a Gdk.Display with this screen as the default screen.
    * @returns a newly allocated string, free with GLib.free() 
    */
  makeDisplayName(): string;
  /**
    * Sets the default font options for the screen. These options will be set on any Pango.Context’s newly created with Gdk.pango_context_get_for_screen(). Changing the default set of font options does not affect contexts that have already been created.
    * @param options a cairo.FontOptions, or None to unset any previously set default font options. 
    */
  setFontOptions(options: import('../cairo').FontOptions | null): void;
  /**
    * Sets the resolution for font handling on the screen. This is a scale factor between points specified in a Pango.FontDescription and cairo units. The default value is 96, meaning that a 10 point font will be 13 units high. (10 * 96. / 72. = 13.3).
    * @param dpi the resolution in “dots per inch”. (Physical inches aren’t actually involved; the terminology is conventional.) 
    */
  setResolution(dpi: number): void;
  /**
    * The default font options for the screen 
    */
  fontOptions: number;
  /**
    * The resolution for fonts on the screen 
    */
  resolution: number;
}

