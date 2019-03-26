import * as Atk from '../Atk';
export declare interface Accessible extends Atk.Object { }

/**
  * The Gtk.Accessible class is the base class for accessible
implementations for Gtk.Widget subclasses. It is a thin
wrapper around Atk.Object, which adds facilities for associating
a widget with its accessible object. 
  */
export declare class Accessible {
  /**
    * This function specifies the callback function to be called when the widget corresponding to a Gtk.Accessible is destroyed. 
    */
  connectWidgetDestroyed(): void;
  /**
    * Gets the Gtk.Widget corresponding to the Gtk.Accessible. The returned widget does not have a reference added, so you do not need to unref it.
    * @returns pointer to the Gtk.Widget corresponding to the Gtk.Accessible, or None. 
    */
  getWidget(): import('../Gtk').Widget | null;
  /**
    * Sets the Gtk.Widget corresponding to the Gtk.Accessible.
    * @param widget a Gtk.Widget or None to unset 
    */
  setWidget(widget: import('../Gtk').Widget | null): void;
  /**
    * The widget referenced by this accessible. 
    */
  widget: import('../Gtk').Widget;
}

