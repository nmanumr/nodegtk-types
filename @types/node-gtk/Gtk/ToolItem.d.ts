import * as Gtk from '../Gtk';
export declare interface ToolItem extends Gtk.Bin, Gtk.Activatable { }

/**
  * Gtk.ToolItems are widgets that can appear on a toolbar. To
create a toolbar item that contain something else than a button, use
Gtk.ToolItem.new(). Use Gtk.Container.add() to add a child
widget to the tool item. 
  */
export declare class ToolItem {
  /**
    * Creates a new Gtk.ToolItem
    * @returns the new Gtk.ToolItem 
    */
  static new(): import('../Gtk').ToolItem;
  /**
    * Returns the ellipsize mode used for self. Custom subclasses of Gtk.ToolItem should call this function to find out how text should be ellipsized.
    * @returns a Pango.EllipsizeMode indicating how text in self should be ellipsized. 
    */
  getEllipsizeMode(): import('../Pango').EllipsizeMode;
  /**
    * Returns whether self is allocated extra space. See Gtk.ToolItem.set_expand().
    * @returns True if self is allocated extra space. 
    */
  getExpand(): boolean;
  /**
    * Returns whether self is the same size as other homogeneous items. See Gtk.ToolItem.set_homogeneous().
    * @returns True if the item is the same size as other homogeneous items. 
    */
  getHomogeneous(): boolean;
  /**
    * Returns the icon size used for self. Custom subclasses of Gtk.ToolItem should call this function to find out what size icons they should use.
    * @returns a Gtk.IconSize indicating the icon size used for self 
    */
  getIconSize(): number;
  /**
    * Returns whether self is considered important. See Gtk.ToolItem.set_is_important()
    * @returns True if self is considered important. 
    */
  getIsImportant(): boolean;
  /**
    * Returns the orientation used for self. Custom subclasses of Gtk.ToolItem should call this function to find out what size icons they should use.
    * @returns a Gtk.Orientation indicating the orientation used for self 
    */
  getOrientation(): import('../Gtk').Orientation;
  /**
    * If menu_item_id matches the string passed to Gtk.ToolItem.set_proxy_menu_item() return the corresponding Gtk.MenuItem.
    * @param menuItemId a string used to identify the menu item
    * @returns The Gtk.MenuItem passed to Gtk.ToolItem.set_proxy_menu_item(), if the menu_item_ids match. 
    */
  getProxyMenuItem(menuItemId: string): import('../Gtk').Widget | null;
  /**
    * Returns the relief style of self. See Gtk.Button.set_relief(). Custom subclasses of Gtk.ToolItem should call this function in the handler of the #GtkToolItem::toolbar_reconfigured signal to find out the relief style of buttons.
    * @returns a Gtk.ReliefStyle indicating the relief style used for self. 
    */
  getReliefStyle(): import('../Gtk').ReliefStyle;
  /**
    * Returns the text alignment used for self. Custom subclasses of Gtk.ToolItem should call this function to find out how text should be aligned.
    * @returns a float indicating the horizontal text alignment used for self 
    */
  getTextAlignment(): number;
  /**
    * Returns the text orientation used for self. Custom subclasses of Gtk.ToolItem should call this function to find out how text should be orientated.
    * @returns a Gtk.Orientation indicating the text orientation used for self 
    */
  getTextOrientation(): import('../Gtk').Orientation;
  /**
    * Returns the size group used for labels in self. Custom subclasses of Gtk.ToolItem should call this function and use the size group for labels.
    * @returns a Gtk.SizeGroup 
    */
  getTextSizeGroup(): import('../Gtk').SizeGroup;
  /**
    * Returns the toolbar style used for self. Custom subclasses of Gtk.ToolItem should call this function in the handler of the GtkToolItem::toolbar_reconfigured signal to find out in what style the toolbar is displayed and change themselves accordingly
    * @returns A Gtk.ToolbarStyle indicating the toolbar style used for self. 
    */
  getToolbarStyle(): import('../Gtk').ToolbarStyle;
  /**
    * Returns whether self has a drag window. See Gtk.ToolItem.set_use_drag_window().
    * @returns True if self uses a drag window. 
    */
  getUseDragWindow(): boolean;
  /**
    * Returns whether the self is visible on toolbars that are docked horizontally.
    * @returns True if self is visible on toolbars that are docked horizontally. 
    */
  getVisibleHorizontal(): boolean;
  /**
    * Returns whether self is visible when the toolbar is docked vertically. See Gtk.ToolItem.set_visible_vertical().
    * @returns Whether self is visible when the toolbar is docked vertically 
    */
  getVisibleVertical(): boolean;
  /**
    * Calling this function signals to the toolbar that the overflow menu item for self has changed. If the overflow menu is visible when this function it called, the menu will be rebuilt. 
    */
  rebuildMenu(): void;
  /**
    * Returns the Gtk.MenuItem that was last set by Gtk.ToolItem.set_proxy_menu_item(), ie. the Gtk.MenuItem that is going to appear in the overflow menu.
    * @returns The Gtk.MenuItem that is going to appear in the overflow menu for self. 
    */
  retrieveProxyMenuItem(): import('../Gtk').Widget;
  /**
    * Sets whether self is allocated extra space when there is more room on the toolbar then needed for the items. The effect is that the item gets bigger when the toolbar gets bigger and smaller when the toolbar gets smaller.
    * @param expand Whether self is allocated extra space 
    */
  setExpand(expand: boolean): void;
  /**
    * Sets whether self is to be allocated the same size as other homogeneous items. The effect is that all homogeneous items will have the same width as the widest of the items.
    * @param homogeneous whether self is the same size as other homogeneous items 
    */
  setHomogeneous(homogeneous: boolean): void;
  /**
    * Sets whether self should be considered important. The Gtk.ToolButton class uses this property to determine whether to show or hide its label when the toolbar style is Gtk.ToolbarStyle.BOTH_HORIZ. The result is that only tool buttons with the “is_important” property set have labels, an effect known as “priority text”
    * @param isImportant whether the tool item should be considered important 
    */
  setIsImportant(isImportant: boolean): void;
  /**
    * Sets the Gtk.MenuItem used in the toolbar overflow menu. The menu_item_id is used to identify the caller of this function and should also be used with Gtk.ToolItem.get_proxy_menu_item().
    * @param menuItemId a string used to identify menu_item
    * @param menuItem a Gtk.MenuItem to use in the overflow menu, or None 
    */
  setProxyMenuItem(menuItemId: string, menuItem: import('../Gtk').Widget | null): void;
  /**
    * Sets the markup text to be displayed as tooltip on the item. See Gtk.Widget.set_tooltip_markup().
    * @param markup markup text to be used as tooltip for self 
    */
  setTooltipMarkup(markup: string): void;
  /**
    * Sets the text to be displayed as tooltip on the item. See Gtk.Widget.set_tooltip_text().
    * @param text text to be used as tooltip for self 
    */
  setTooltipText(text: string): void;
  /**
    * Sets whether self has a drag window. When True the toolitem can be used as a drag source through Gtk.Widget.drag_source_set(). When self has a drag window it will intercept all events, even those that would otherwise be sent to a child of self.
    * @param useDragWindow Whether self has a drag window. 
    */
  setUseDragWindow(useDragWindow: boolean): void;
  /**
    * Sets whether self is visible when the toolbar is docked horizontally.
    * @param visibleHorizontal Whether self is visible when in horizontal mode 
    */
  setVisibleHorizontal(visibleHorizontal: boolean): void;
  /**
    * Sets whether self is visible when the toolbar is docked vertically. Some tool items, such as text entries, are too wide to be useful on a vertically docked toolbar. If visible_vertical is False self will not appear on toolbars that are docked vertically.
    * @param visibleVertical whether self is visible when the toolbar is in vertical mode 
    */
  setVisibleVertical(visibleVertical: boolean): void;
  /**
    * Emits the signal #GtkToolItem::toolbar_reconfigured on self. Gtk.Toolbar and other Gtk.ToolShell implementations use this function to notify children, when some aspect of their configuration changes. 
    */
  toolbarReconfigured(): void;
  /**
    * Whether the toolbar item is considered important. When True, toolbar buttons show text in Gtk.ToolbarStyle.BOTH_HORIZ mode 
    */
  isImportant: boolean;
  /**
    * Whether the toolbar item is visible when the toolbar is in a horizontal orientation. 
    */
  visibleHorizontal: boolean;
  /**
    * Whether the toolbar item is visible when the toolbar is in a vertical orientation. 
    */
  visibleVertical: boolean;
}

