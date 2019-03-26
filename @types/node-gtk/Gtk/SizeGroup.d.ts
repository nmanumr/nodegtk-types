import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface SizeGroup extends GObject.Object, Gtk.Buildable { }

/**
  * Gtk.SizeGroup provides a mechanism for grouping a number of widgets
together so they all request the same amount of space.  This is
typically useful when you want a column of widgets to have the same
size, but you can’t use a Gtk.Grid widget. 
  */
export declare class SizeGroup {
  /**
    * Create a new Gtk.SizeGroup.
    * @param mode the mode for the new size group.
    * @returns a newly created Gtk.SizeGroup 
    */
  static new(mode: import('../Gtk').SizeGroupMode): import('../Gtk').SizeGroup;
  /**
    * Adds a widget to a Gtk.SizeGroup. In the future, the requisition of the widget will be determined as the maximum of its requisition and the requisition of the other widgets in the size group. Whether this applies horizontally, vertically, or in both directions depends on the mode of the size group. See Gtk.SizeGroup.set_mode().
    * @param widget the Gtk.Widget to add 
    */
  addWidget(widget: import('../Gtk').Widget): void;
  /**
    * Returns if invisible widgets are ignored when calculating the size.
    * @returns True if invisible widgets are ignored. 
    */
  getIgnoreHidden(): boolean;
  /**
    * Gets the current mode of the size group. See Gtk.SizeGroup.set_mode().
    * @returns the current mode of the size group. 
    */
  getMode(): import('../Gtk').SizeGroupMode;
  /**
    * Returns the list of widgets associated with self.
    * @returns a GLib.SList of widgets. The list is owned by GTK+ and should not be modified. 
    */
  getWidgets(): import('../Gtk').Widget[];
  /**
    * Removes a widget from a Gtk.SizeGroup.
    * @param widget the Gtk.Widget to remove 
    */
  removeWidget(widget: import('../Gtk').Widget): void;
  /**
    * Sets whether unmapped widgets should be ignored when calculating the size.
    * @param ignoreHidden whether unmapped widgets should be ignored when calculating the size 
    */
  setIgnoreHidden(ignoreHidden: boolean): void;
  /**
    * Sets the Gtk.SizeGroupMode of the size group. The mode of the size group determines whether the widgets in the size group should all have the same horizontal requisition (Gtk.SizeGroupMode.HORIZONTAL) all have the same vertical requisition (Gtk.SizeGroupMode.VERTICAL), or should all have the same requisition in both directions (Gtk.SizeGroupMode.BOTH).
    * @param mode the mode to set for the size group. 
    */
  setMode(mode: import('../Gtk').SizeGroupMode): void;
  /**
    * If True, unmapped widgets are ignored when determining the size of the group deprecated 
    */
  ignoreHidden: boolean;
  /**
    * The directions in which the size group affects the requested sizes of its component widgets 
    */
  mode: import('../Gtk').SizeGroupMode;
}

