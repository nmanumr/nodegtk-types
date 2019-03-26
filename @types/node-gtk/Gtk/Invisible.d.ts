import * as Gtk from '../Gtk';
export declare interface Invisible extends Gtk.Widget { }

/**
  * The Gtk.Invisible widget is used internally in GTK+, and is probably not
very useful for application developers. 
  */
export declare class Invisible {
  /**
    * Creates a new Gtk.Invisible.
    * @returns a new Gtk.Invisible. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Invisible object for a specified screen
    * @param screen a Gdk.Screen which identifies on which the new Gtk.Invisible will be created.
    * @returns a newly created Gtk.Invisible object 
    */
  static newForScreen(screen: import('../Gdk').Screen): import('../Gtk').Widget;
  /**
    * Returns the Gdk.Screen object associated with self
    * @returns the associated Gdk.Screen. 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Sets the Gdk.Screen where the Gtk.Invisible object will be displayed.
    * @param screen a Gdk.Screen. 
    */
  setScreen(screen: import('../Gdk').Screen): void;
  /**
    * The screen where this window will be displayed 
    */
  screen: import('../Gdk').Screen;
}

