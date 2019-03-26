import * as Gtk from '../Gtk';
export declare interface OffscreenWindow extends Gtk.Window { }

/**
  * Gtk.OffscreenWindow is strictly intended to be used for obtaining
snapshots of widgets that are not part of a normal widget hierarchy.
Since Gtk.OffscreenWindow is a toplevel widget you cannot obtain
snapshots of a full window with it since you cannot pack a toplevel
widget in another toplevel. 
  */
export declare class OffscreenWindow {
  /**
    * Creates a toplevel container widget that is used to retrieve snapshots of widgets without showing them on the screen.
    * @returns A pointer to a Gtk.Widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Retrieves a snapshot of the contained widget in the form of a GdkPixbuf.Pixbuf.  This is a new pixbuf with a reference count of 1, and the application should unreference it once it is no longer needed.
    * @returns A GdkPixbuf.Pixbuf pointer, or None. 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Retrieves a snapshot of the contained widget in the form of a cairo.Surface.  If you need to keep this around over window resizes then you should add a reference to it.
    * @returns A cairo.Surface pointer to the offscreen surface, or None. 
    */
  getSurface(): import('../cairo').Surface | null;
  ;
}

