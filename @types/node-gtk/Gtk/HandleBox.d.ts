import * as Gtk from '../Gtk';
export declare interface HandleBox extends Gtk.Bin { }

/**
  * The Gtk.HandleBox widget allows a portion of a window to be “torn
off”. It is a bin widget which displays its child and a handle that
the user can drag to tear off a separate window (the “float
window”) containing the child widget. A thin
“ghost” is drawn in the original location of the
handlebox. By dragging the separate window back to its original
location, it can be reattached. 
  */
export declare class HandleBox {
  /**
    * Create a new handle box.
    * @returns a new Gtk.HandleBox. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Whether the handlebox’s child is currently detached.
    * @returns True if the child is currently detached, otherwise False 
    */
  getChildDetached(): boolean;
  /**
    * Gets the handle position of the handle box. See Gtk.HandleBox.set_handle_position().
    * @returns the current handle position. 
    */
  getHandlePosition(): import('../Gtk').PositionType;
  /**
    * Gets the type of shadow drawn around the handle box. See Gtk.HandleBox.set_shadow_type().
    * @returns the type of shadow currently drawn around the handle box. 
    */
  getShadowType(): import('../Gtk').ShadowType;
  /**
    * Gets the edge used for determining reattachment of the handle box. See Gtk.HandleBox.set_snap_edge().
    * @returns the edge used for determining reattachment, or (Gtk.PositionType)-1 if this is determined (as per default) from the handle position. 
    */
  getSnapEdge(): import('../Gtk').PositionType;
  /**
    * Sets the side of the handlebox where the handle is drawn.
    * @param position the side of the handlebox where the handle should be drawn. 
    */
  setHandlePosition(position: import('../Gtk').PositionType): void;
  /**
    * Sets the type of shadow to be drawn around the border of the handle box.
    * @param type the shadow type. 
    */
  setShadowType(type: import('../Gtk').ShadowType): void;
  /**
    * Sets the snap edge of a handlebox. The snap edge is the edge of the detached child that must be aligned with the corresponding edge of the “ghost” left behind when the child was detached to reattach the torn-off window. Usually, the snap edge should be chosen so that it stays in the same place on the screen when the handlebox is torn off.
    * @param edge the snap edge, or -1 to unset the value; in which case GTK+ will try to guess an appropriate value in the future. 
    */
  setSnapEdge(edge: import('../Gtk').PositionType): void;
  /**
    * A boolean value indicating whether the handlebox’s child is attached or detached. 
    */
  readonly childDetached: boolean;
  /**
    * Position of the handle relative to the child widget 
    */
  handlePosition: import('../Gtk').PositionType;
  /**
    * Appearance of the shadow that surrounds the container 
    */
  shadowType: import('../Gtk').ShadowType;
  /**
    * Side of the handlebox that’s lined up with the docking point to dock the handlebox 
    */
  snapEdge: import('../Gtk').PositionType;
  /**
    * Whether to use the value from the snap_edge property or a value derived from handle_position 
    */
  snapEdgeSet: boolean;
}

