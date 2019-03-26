import * as GObject from '../GObject';
export declare interface DisplayManager extends GObject.Object { }

/**
  * The purpose of the Gdk.DisplayManager singleton object is to offer
notification when displays appear or disappear or the default display
changes. 
  */
export declare class DisplayManager {
  /**
    * Gets the singleton Gdk.DisplayManager object.
    * @returns The global Gdk.DisplayManager singleton; Gdk.parse_args(), Gdk.init(), or Gdk.init_check() must have been called first. 
    */
  static get(): import('../Gdk').DisplayManager;
  /**
    * Gets the default Gdk.Display.
    * @returns a Gdk.Display, or None if there is no default display. 
    */
  getDefaultDisplay(): import('../Gdk').Display | null;
  /**
    * List all currently open displays.
    * @returns a newly allocated GLib.SList of Gdk.Display objects. Free with g_slist_free() when you are done with it. 
    */
  listDisplays(): import('../Gdk').Display[];
  /**
    * Opens a display.
    * @param name the name of the display to open
    * @returns a Gdk.Display, or None if the display could not be opened 
    */
  openDisplay(name: string): import('../Gdk').Display | null;
  /**
    * Sets display as the default display.
    * @param display a Gdk.Display 
    */
  setDefaultDisplay(display: import('../Gdk').Display): void;
  /**
    * The default display for GDK 
    */
  defaultDisplay: import('../Gdk').Display;
}

