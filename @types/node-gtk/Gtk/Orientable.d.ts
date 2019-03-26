import * as GObject from '../GObject';
export declare interface Orientable extends GObject.GInterface { }

/**
  * The Gtk.Orientable interface is implemented by all widgets that can be
oriented horizontally or vertically. Historically, such widgets have been
realized as subclasses of a common base class (e.g Gtk.Box/Gtk.HBox/Gtk.VBox
or Gtk.Scale/Gtk.HScale/Gtk.VScale). Gtk.Orientable is more flexible in that
it allows the orientation to be changed at runtime, allowing the widgets
to “flip”. 
  */
export declare interface Orientable {
  /**
    * Retrieves the orientation of the self.
    * @returns the orientation of the self. 
    */
  getOrientation(): import('../Gtk').Orientation;
  /**
    * Sets the orientation of the self.
    * @param orientation the orientable’s new orientation. 
    */
  setOrientation(orientation: import('../Gtk').Orientation): void;
  /**
    * The orientation of the orientable 
    */
  orientation: import('../Gtk').Orientation;
}

