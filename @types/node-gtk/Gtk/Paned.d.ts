import * as Gtk from '../Gtk';
export declare interface Paned extends Gtk.Container, Gtk.Orientable { }

/**
  * Gtk.Paned has two panes, arranged either
horizontally or vertically. The division between
the two panes is adjustable by the user by dragging
a handle. 
  */
export declare class Paned {
  /**
    * Creates a new Gtk.Paned widget.
    * @param orientation the paned’s orientation.
    * @returns a new Gtk.Paned. 
    */
  static new(orientation: import('../Gtk').Orientation): import('../Gtk').Widget;
  /**
    * Adds a child to the top or left pane with default parameters. This is equivalent to gtk_paned_pack1 (paned, child, FALSE, TRUE).
    * @param child the child to add 
    */
  add1(child: import('../Gtk').Widget): void;
  /**
    * Adds a child to the bottom or right pane with default parameters. This is equivalent to gtk_paned_pack2 (paned, child, TRUE, TRUE).
    * @param child the child to add 
    */
  add2(child: import('../Gtk').Widget): void;
  /**
    * Obtains the first child of the paned widget.
    * @returns first child, or None if it is not set. 
    */
  getChild1(): import('../Gtk').Widget | null;
  /**
    * Obtains the second child of the paned widget.
    * @returns second child, or None if it is not set. 
    */
  getChild2(): import('../Gtk').Widget | null;
  /**
    * Returns the Gdk.Window of the handle. This function is useful when handling button or motion events because it enables the callback to distinguish between the window of the paned, a child and the handle.
    * @returns the paned’s handle window. 
    */
  getHandleWindow(): import('../Gdk').Window;
  /**
    * Obtains the position of the divider between the two panes.
    * @returns position of the divider 
    */
  getPosition(): number;
  /**
    * Gets the Gtk.Paned :wide-handle property.
    * @returns True if the paned should have a wide handle 
    */
  getWideHandle(): boolean;
  /**
    * Adds a child to the top or left pane.
    * @param child the child to add
    * @param resize should this child expand when the paned widget is resized.
    * @param shrink can this child be made smaller than its requisition. 
    */
  pack1(child: import('../Gtk').Widget, resize: boolean, shrink: boolean): void;
  /**
    * Adds a child to the bottom or right pane.
    * @param child the child to add
    * @param resize should this child expand when the paned widget is resized.
    * @param shrink can this child be made smaller than its requisition. 
    */
  pack2(child: import('../Gtk').Widget, resize: boolean, shrink: boolean): void;
  /**
    * Sets the position of the divider between the two panes.
    * @param position pixel position of divider, a negative value means that the position is unset. 
    */
  setPosition(position: number): void;
  /**
    * Sets the Gtk.Paned :wide-handle property.
    * @param wide the new value for the Gtk.Paned :wide-handle property 
    */
  setWideHandle(wide: boolean): void;
  /**
    * Largest possible value for the “position” property 
    */
  readonly maxPosition: number;
  /**
    * Smallest possible value for the “position” property 
    */
  readonly minPosition: number;
  /**
    * Position of paned separator in pixels (0 means all the way to the left/top) 
    */
  position: number;
  /**
    * True if the Position property should be used 
    */
  positionSet: boolean;
  /**
    * Whether the paned should have a prominent handle 
    */
  wideHandle: boolean;
}

