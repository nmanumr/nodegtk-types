import * as Gtk from '../Gtk';

export declare interface ToolPalette extends Gtk.Container, Gtk.Orientable, Gtk.Scrollable {
  getStyle(): import('../Gtk').Style;
  getStyle(): import('../Gtk').ToolbarStyle;

  setStyle(style: import('../Gtk').Style): void;
  setStyle(style: import('../Gtk').ToolbarStyle): void;
}

/**
  * A Gtk.ToolPalette allows you to add Gtk.ToolItems to a palette-like
container with different categories and drag and drop support. 
  */
export declare class ToolPalette {
  /**
    * Get the target entry for a dragged Gtk.ToolItemGroup.
    * @returns the Gtk.TargetEntry for a dragged group 
    */
  static getDragTargetGroup(): import('../Gtk').TargetEntry;
  /**
    * Gets the target entry for a dragged Gtk.ToolItem.
    * @returns the Gtk.TargetEntry for a dragged item. 
    */
  static getDragTargetItem(): import('../Gtk').TargetEntry;
  /**
    * Creates a new tool palette.
    * @returns a new Gtk.ToolPalette 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Sets self as drag source (see Gtk.ToolPalette.set_drag_source()) and sets widget as a drag destination for drags from self. See Gtk.Widget.drag_dest_set().
    * @param widget a Gtk.Widget which should be a drag destination for self
    * @param flags the flags that specify what actions GTK+ should take for drops on that widget
    * @param targets the Gtk.ToolPaletteDragTargets which the widget should support
    * @param actions the Gdk.DragActions which the widget should suppport 
    */
  addDragDest(widget: import('../Gtk').Widget, flags: import('../Gtk').DestDefaults, targets: import('../Gtk').ToolPaletteDragTargets, actions: import('../Gdk').DragAction): void;
  /**
    * Get the dragged item from the selection. This could be a Gtk.ToolItem or a Gtk.ToolItemGroup.
    * @param selection a Gtk.SelectionData
    * @returns the dragged item in selection 
    */
  getDragItem(selection: import('../Gtk').SelectionData): import('../Gtk').Widget;
  /**
    * Gets the group at position (x, y).
    * @param x the x position
    * @param y the y position
    * @returns the Gtk.ToolItemGroup at position or None if there is no such group 
    */
  getDropGroup(x: number, y: number): import('../Gtk').ToolItemGroup | null;
  /**
    * Gets the item at position (x, y). See Gtk.ToolPalette.get_drop_group().
    * @param x the x position
    * @param y the y position
    * @returns the Gtk.ToolItem at position or None if there is no such item 
    */
  getDropItem(x: number, y: number): import('../Gtk').ToolItem | null;
  /**
    * Gets whether group is exclusive or not. See Gtk.ToolPalette.set_exclusive().
    * @param group a Gtk.ToolItemGroup which is a child of palette
    * @returns True if group is exclusive 
    */
  getExclusive(group: import('../Gtk').ToolItemGroup): boolean;
  /**
    * Gets whether group should be given extra space. See Gtk.ToolPalette.set_expand().
    * @param group a Gtk.ToolItemGroup which is a child of palette
    * @returns True if group should be given extra space, False otherwise 
    */
  getExpand(group: import('../Gtk').ToolItemGroup): boolean;
  /**
    * Gets the position of group in self as index. See Gtk.ToolPalette.set_group_position().
    * @param group a Gtk.ToolItemGroup
    * @returns the index of group or -1 if group is not a child of self 
    */
  getGroupPosition(group: import('../Gtk').ToolItemGroup): number;
  /**
    * Gets the horizontal adjustment of the tool palette.
    * @returns the horizontal adjustment of self 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the size of icons in the tool palette. See Gtk.ToolPalette.set_icon_size().
    * @returns the Gtk.IconSize of icons in the tool palette 
    */
  getIconSize(): number;
  /**
    * Gets the style (icons, text or both) of items in the tool palette.
    * @returns the Gtk.ToolbarStyle of items in the tool palette. 
    */
  getStyle(): import('../Gtk').ToolbarStyle;
  /**
    * Gets the vertical adjustment of the tool palette.
    * @returns the vertical adjustment of self 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Sets the tool palette as a drag source. Enables all groups and items in the tool palette as drag sources on button 1 and button 3 press with copy and move actions. See Gtk.Widget.drag_source_set().
    * @param targets the Gtk.ToolPaletteDragTargets which the widget should support 
    */
  setDragSource(targets: import('../Gtk').ToolPaletteDragTargets): void;
  /**
    * Sets whether the group should be exclusive or not. If an exclusive group is expanded all other groups are collapsed.
    * @param group a Gtk.ToolItemGroup which is a child of palette
    * @param exclusive whether the group should be exclusive or not 
    */
  setExclusive(group: import('../Gtk').ToolItemGroup, exclusive: boolean): void;
  /**
    * Sets whether the group should be given extra space.
    * @param group a Gtk.ToolItemGroup which is a child of palette
    * @param expand whether the group should be given extra space 
    */
  setExpand(group: import('../Gtk').ToolItemGroup, expand: boolean): void;
  /**
    * Sets the position of the group as an index of the tool palette. If position is 0 the group will become the first child, if position is -1 it will become the last child.
    * @param group a Gtk.ToolItemGroup which is a child of palette
    * @param position a new index for group 
    */
  setGroupPosition(group: import('../Gtk').ToolItemGroup, position: number): void;
  /**
    * Sets the size of icons in the tool palette.
    * @param iconSize the Gtk.IconSize that icons in the tool palette shall have 
    */
  setIconSize(iconSize: number): void;
  /**
    * Sets the style (text, icons or both) of items in the tool palette.
    * @param style the Gtk.ToolbarStyle that items in the tool palette shall have 
    */
  setStyle(style: import('../Gtk').ToolbarStyle): void;
  /**
    * Unsets the tool palette icon size set with Gtk.ToolPalette.set_icon_size(), so that user preferences will be used to determine the icon size. 
    */
  unsetIconSize(): void;
  /**
    * Unsets a toolbar style set with Gtk.ToolPalette.set_style(), so that user preferences will be used to determine the toolbar style. 
    */
  unsetStyle(): void;
  /**
    * Size of icons in this tool palette 
    */
  iconSize: import('../Gtk').IconSize;
  /**
    * Whether the icon-size property has been set 
    */
  iconSizeSet: boolean;
  /**
    * Style of items in the tool palette 
    */
  toolbarStyle: import('../Gtk').ToolbarStyle;
}

