import * as GObject from '../GObject';
export declare interface TextMark extends GObject.Object { }

/**
  * You may wish to begin by reading the
text widget conceptual overview
which gives an overview of all the objects and data
types related to the text widget and how they work together. 
  */
export declare class TextMark {
  /**
    * Creates a text mark. Add it to a buffer using Gtk.TextBuffer.add_mark(). If name is None, the mark is anonymous; otherwise, the mark can be retrieved by name using Gtk.TextBuffer.get_mark(). If a mark has left gravity, and text is inserted at the mark’s current location, the mark will be moved to the left of the newly-inserted text. If the mark has right gravity (left_gravity = False), the mark will end up on the right of newly-inserted text. The standard left-to-right cursor is a mark with right gravity (when you type, the cursor stays on the right side of the text you’re typing).
    * @param name mark name or None
    * @param leftGravity whether the mark should have left gravity
    * @returns new Gtk.TextMark 
    */
  static new(name: string | null, leftGravity: boolean): import('../Gtk').TextMark;
  /**
    * Gets the buffer this mark is located inside, or None if the mark is deleted.
    * @returns the mark’s Gtk.TextBuffer 
    */
  getBuffer(): import('../Gtk').TextBuffer;
  /**
    * Returns True if the mark has been removed from its buffer with Gtk.TextBuffer.delete_mark(). See Gtk.TextBuffer.add_mark() for a way to add it to a buffer again.
    * @returns whether the mark is deleted 
    */
  getDeleted(): boolean;
  /**
    * Determines whether the mark has left gravity.
    * @returns True if the mark has left gravity, False otherwise 
    */
  getLeftGravity(): boolean;
  /**
    * Returns the mark name; returns None for anonymous marks.
    * @returns mark name 
    */
  getName(): string | null;
  /**
    * Returns True if the mark is visible (i.e. a cursor is displayed for it).
    * @returns True if visible 
    */
  getVisible(): boolean;
  /**
    * Sets the visibility of self; the insertion point is normally visible, i.e. you can see it as a vertical bar. Also, the text widget uses a visible mark to indicate where a drop will occur when dragging-and-dropping text. Most other marks are not visible. Marks are not visible by default.
    * @param setting visibility of mark 
    */
  setVisible(setting: boolean): void;
  /**
    * Whether the mark has left gravity 
    */
  leftGravity: boolean;
  /**
    * Mark name 
    */
  name: string;
}

