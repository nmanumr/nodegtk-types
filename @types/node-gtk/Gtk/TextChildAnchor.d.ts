import * as GObject from '../GObject';
export declare interface TextChildAnchor extends GObject.Object { }

/**
  * A Gtk.TextChildAnchor is a spot in the buffer where child widgets can
be “anchored” (inserted inline, as if they were characters). The anchor
can have multiple widgets anchored, to allow for multiple views. 
  */
export declare class TextChildAnchor {
  /**
    * Creates a new Gtk.TextChildAnchor. Usually you would then insert it into a Gtk.TextBuffer with Gtk.TextBuffer.insert_child_anchor(). To perform the creation and insertion in one step, use the convenience function Gtk.TextBuffer.create_child_anchor().
    * @returns a new Gtk.TextChildAnchor 
    */
  static new(): import('../Gtk').TextChildAnchor;
  /**
    * Determines whether a child anchor has been deleted from the buffer. Keep in mind that the child anchor will be unreferenced when removed from the buffer, so you need to hold your own reference (with GObject.Object.ref()) if you plan to use this function — otherwise all deleted child anchors will also be finalized.
    * @returns True if the child anchor has been deleted from its buffer 
    */
  getDeleted(): boolean;
  /**
    * Gets a list of all widgets anchored at this child anchor. The returned list should be freed with g_list_free().
    * @returns list of widgets anchored at self 
    */
  getWidgets(): import('../Gtk').Widget[];
}

