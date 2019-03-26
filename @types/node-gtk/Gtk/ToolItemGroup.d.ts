import * as Gtk from '../Gtk';

export declare interface ToolItemGroup extends Gtk.Container, Gtk.ToolShell {
  getStyle(): import('../Gtk').Style;
  getStyle(): import('../Gtk').ToolbarStyle;
}

/**
  * A Gtk.ToolItemGroup is used together with Gtk.ToolPalette to add
Gtk.ToolItems to a palette like container with different
categories and drag and drop support. 
  */
export declare class ToolItemGroup {
  /**
    * Creates a new tool item group with label label.
    * @param label the label of the new group
    * @returns a new Gtk.ToolItemGroup. 
    */
  static new(label: string): import('../Gtk').Widget;
  /**
    * Gets whether self is collapsed or expanded.
    * @returns True if self is collapsed, False if it is expanded 
    */
  getCollapsed(): boolean;
  /**
    * Gets the tool item at position (x, y).
    * @param x the x position
    * @param y the y position
    * @returns the Gtk.ToolItem at position (x, y) 
    */
  getDropItem(x: number, y: number): import('../Gtk').ToolItem;
  /**
    * Gets the ellipsization mode of self.
    * @returns the Pango.EllipsizeMode of self 
    */
  getEllipsize(): import('../Pango').EllipsizeMode;
  /**
    * Gets the relief mode of the header button of self.
    * @returns the Gtk.ReliefStyle 
    */
  getHeaderRelief(): import('../Gtk').ReliefStyle;
  /**
    * Gets the position of item in self as index.
    * @param item a Gtk.ToolItem
    * @returns the index of item in self or -1 if item is no child of self 
    */
  getItemPosition(item: import('../Gtk').ToolItem): number;
  /**
    * Gets the label of self.
    * @returns the label of self. The label is an internal string of self and must not be modified. Note that None is returned if a custom label has been set with Gtk.ToolItemGroup.set_label_widget() 
    */
  getLabel(): string;
  /**
    * Gets the label widget of self. See Gtk.ToolItemGroup.set_label_widget().
    * @returns the label widget of self 
    */
  getLabelWidget(): import('../Gtk').Widget;
  /**
    * Gets the number of tool items in self.
    * @returns the number of tool items in self 
    */
  getNItems(): number;
  /**
    * Gets the tool item at index in group.
    * @param index the index
    * @returns the Gtk.ToolItem at index 
    */
  getNthItem(index: number): import('../Gtk').ToolItem;
  /**
    * Inserts item at position in the list of children of self.
    * @param item the Gtk.ToolItem to insert into self
    * @param position the position of item in self, starting with 0. The position -1 means end of list. 
    */
  insert(item: import('../Gtk').ToolItem, position: number): void;
  /**
    * Sets whether the self should be collapsed or expanded.
    * @param collapsed whether the self should be collapsed or expanded 
    */
  setCollapsed(collapsed: boolean): void;
  /**
    * Sets the ellipsization mode which should be used by labels in self.
    * @param ellipsize the Pango.EllipsizeMode labels in self should use 
    */
  setEllipsize(ellipsize: import('../Pango').EllipsizeMode): void;
  /**
    * Set the button relief of the group header. See Gtk.Button.set_relief() for details.
    * @param style the Gtk.ReliefStyle 
    */
  setHeaderRelief(style: import('../Gtk').ReliefStyle): void;
  /**
    * Sets the position of item in the list of children of self.
    * @param item the Gtk.ToolItem to move to a new position, should be a child of self.
    * @param position the new position of item in self, starting with 0. The position -1 means end of list. 
    */
  setItemPosition(item: import('../Gtk').ToolItem, position: number): void;
  /**
    * Sets the label of the tool item group. The label is displayed in the header of the group.
    * @param label the new human-readable label of of the group 
    */
  setLabel(label: string): void;
  /**
    * Sets the label of the tool item group. The label widget is displayed in the header of the group, in place of the usual label.
    * @param labelWidget the widget to be displayed in place of the usual label 
    */
  setLabelWidget(labelWidget: import('../Gtk').Widget): void;
  /**
    * Whether the group has been collapsed and items are hidden 
    */
  collapsed: boolean;
  /**
    * Ellipsize for item group headers 
    */
  ellipsize: import('../Pango').EllipsizeMode;
  /**
    * Relief of the group header button 
    */
  headerRelief: import('../Gtk').ReliefStyle;
  /**
    * The human-readable title of this item group 
    */
  label: string;
  /**
    * A widget to display in place of the usual label 
    */
  labelWidget: import('../Gtk').Widget;
}

