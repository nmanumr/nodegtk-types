import * as GObject from '../GObject';
export declare interface Cursor extends GObject.Object { }

/**
  * A Gdk.Cursor represents a cursor. Its contents are private. 
  */
export declare abstract class Cursor {
  /**
    * Creates a new cursor from the set of builtin cursors for the default display. See Gdk.Cursor.new_for_display().
    * @param cursorType cursor to create
    * @returns a new Gdk.Cursor 
    */
  static new(cursorType: import('../Gdk').CursorType): import('../Gdk').Cursor;
  /**
    * Creates a new cursor from the set of builtin cursors.
    * @param display the Gdk.Display for which the cursor will be created
    * @param cursorType cursor to create
    * @returns a new Gdk.Cursor 
    */
  static newForDisplay(display: import('../Gdk').Display, cursorType: import('../Gdk').CursorType): import('../Gdk').Cursor;
  /**
    * Creates a new cursor by looking up name in the current cursor theme.
    * @param display the Gdk.Display for which the cursor will be created
    * @param name the name of the cursor
    * @returns a new Gdk.Cursor, or None if there is no cursor with the given name 
    */
  static newFromName(display: import('../Gdk').Display, name: string): import('../Gdk').Cursor | null;
  /**
    * Creates a new cursor from a pixbuf.
    * @param display the Gdk.Display for which the cursor will be created
    * @param pixbuf the GdkPixbuf.Pixbuf containing the cursor image
    * @param x the horizontal offset of the “hotspot” of the cursor.
    * @param y the vertical offset of the “hotspot” of the cursor.
    * @returns a new Gdk.Cursor. 
    */
  static newFromPixbuf(display: import('../Gdk').Display, pixbuf: import('../GdkPixbuf').Pixbuf, x: number, y: number): import('../Gdk').Cursor;
  /**
    * Creates a new cursor from a cairo image surface.
    * @param display the Gdk.Display for which the cursor will be created
    * @param surface the cairo image surface containing the cursor pixel data
    * @param x the horizontal offset of the “hotspot” of the cursor
    * @param y the vertical offset of the “hotspot” of the cursor
    * @returns a new Gdk.Cursor. 
    */
  static newFromSurface(display: import('../Gdk').Display, surface: import('../cairo').Surface, x: number, y: number): import('../Gdk').Cursor;
  /**
    * Returns the cursor type for this cursor.
    * @returns a Gdk.CursorType 
    */
  getCursorType(): import('../Gdk').CursorType;
  /**
    * Returns the display on which the Gdk.Cursor is defined.
    * @returns the Gdk.Display associated to self 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Returns a GdkPixbuf.Pixbuf with the image used to display the cursor.
    * @returns a GdkPixbuf.Pixbuf representing self, or None 
    */
  getImage(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Returns a cairo image surface with the image used to display the cursor.
    * @returns a cairo.Surface representing self, or None  x_hot:Location to store the hotspot x position, or None y_hot:Location to store the hotspot y position, or None 
    */
  getSurface(): [import('../cairo').Surface | null, number, number];
  /**
    * Adds a reference to self.
    * @returns Same self that was passed in 
    */
  ref(): import('../Gdk').Cursor;
  /**
    * Removes a reference from self, deallocating the cursor if no references remain. 
    */
  unref(): void;
  /**
    * Standard cursor type 
    */
  cursorType: import('../Gdk').CursorType;
  /**
    * Display of this cursor 
    */
  display: import('../Gdk').Display;
}

