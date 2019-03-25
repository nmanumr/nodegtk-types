/**
  * A toolbar is created with a call to Gtk.Toolbar.new(). 
  */
export declare class Toolbar extends import('../Gtk').Container, import('../Gtk').Orientable, import('../Gtk').ToolShell{
/**
  * Creates a new toolbar.
  * @returns the newly-created toolbar. 
  */
static new(): import('../Gtk').Widget;
/**
  * Returns the position corresponding to the indicated point on self. This is useful when dragging items to the toolbar: this function returns the position a new item should be inserted.
  * @param x x coordinate of a point on the toolbar
  * @param y y coordinate of a point on the toolbar
  * @returns The position corresponding to the point (x, y) on the toolbar. 
  */
getDropIndex(x: number, y: number): number;
/**
  * Retrieves the icon size for the toolbar. See Gtk.Toolbar.set_icon_size().
  * @returns the current icon size for the icons on the toolbar. 
  */
getIconSize(): import('../Gtk').IconSize;
/**
  * Returns the position of item on the toolbar, starting from 0. It is an error if item is not a child of the toolbar.
  * @param item a Gtk.ToolItem that is a child of self
  * @returns the position of item on the toolbar. 
  */
getItemIndex(item: import('../Gtk').ToolItem): number;
/**
  * Returns the number of items on the toolbar.
  * @returns the number of items on the toolbar 
  */
getNItems(): number;
/**
  * Returns the n’th item on self, or None if the toolbar does not contain an n’th item.
  * @param n A position on the toolbar
  * @returns The n’th Gtk.ToolItem on self, or None if there isn’t an n’th item. 
  */
getNthItem(n: number): import('../Gtk').ToolItem | null;
/**
  * Returns the relief style of buttons on self. See Gtk.Button.set_relief().
  * @returns The relief style of buttons on self. 
  */
getReliefStyle(): import('../Gtk').ReliefStyle;
/**
  * Returns whether the toolbar has an overflow menu. See Gtk.Toolbar.set_show_arrow().
  * @returns True if the toolbar has an overflow menu. 
  */
getShowArrow(): boolean;
/**
  * Retrieves whether the toolbar has text, icons, or both . See Gtk.Toolbar.set_style().
  * @returns the current style of self 
  */
getStyle(): import('../Gtk').ToolbarStyle;
/**
  * Insert a Gtk.ToolItem into the toolbar at position pos. If pos is 0 the item is prepended to the start of the toolbar. If pos is negative, the item is appended to the end of the toolbar.
  * @param item a Gtk.ToolItem
  * @param pos the position of the new item 
  */
insert(item: import('../Gtk').ToolItem, pos: number): void;
/**
  * Highlights self to give an idea of what it would look like if item was added to self at the position indicated by index_. If item is None, highlighting is turned off. In that case index_ is ignored.
  * @param toolItem a Gtk.ToolItem, or None to turn of highlighting
  * @param index a position on self 
  */
setDropHighlightItem(toolItem: import('../Gtk').ToolItem | null, index: number): void;
/**
  * This function sets the size of stock icons in the toolbar. You can call it both before you add the icons and after they’ve been added. The size you set will override user preferences for the default icon size.
  * @param iconSize The Gtk.IconSize that stock icons in the toolbar shall have. 
  */
setIconSize(iconSize: import('../Gtk').IconSize): void;
/**
  * Sets whether to show an overflow menu when self isn’t allocated enough size to show all of its items. If True, items which can’t fit in self, and which have a proxy menu item set by Gtk.ToolItem.set_proxy_menu_item() or Gtk.ToolItem ::create-menu-proxy, will be available in an overflow menu, which can be opened by an added arrow button. If False, self will request enough size to fit all of its child items without any overflow.
  * @param showArrow Whether to show an overflow menu 
  */
setShowArrow(showArrow: boolean): void;
/**
  * Alters the view of self to display either icons only, text only, or both.
  * @param style the new style for self. 
  */
setStyle(style: import('../Gtk').ToolbarStyle): void;
/**
  * Unsets toolbar icon size set with Gtk.Toolbar.set_icon_size(), so that user preferences will be used to determine the icon size. 
  */
unsetIconSize(): void;
/**
  * Unsets a toolbar style set with Gtk.Toolbar.set_style(), so that user preferences will be used to determine the toolbar style. 
  */
unsetStyle(): void;
/**
  * Size of icons in this toolbar 
  */
iconSize: import('../Gtk').IconSize;
/**
  * Whether the icon-size property has been set 
  */
iconSizeSet: boolean;
/**
  * If an arrow should be shown if the toolbar doesn’t fit 
  */
showArrow: boolean;
/**
  * How to draw the toolbar 
  */
toolbarStyle: import('../Gtk').ToolbarStyle;
/**
  *   
  */
container: import('../Gtk').Container;
}

