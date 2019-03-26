import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface Action extends GObject.Object, Gtk.Buildable { }

/**
  * In GTK+ 3.10, Gtk.Action has been deprecated. Use Gio.Action
instead, and associate actions with Gtk.Actionable widgets. Use
Gio.MenuModel for creating menus with Gtk.Menu.new_from_model(). 
  */
export declare class Action {
  /**
    * Creates a new Gtk.Action object. To add the action to a Gtk.ActionGroup and set the accelerator for the action, call Gtk.ActionGroup.add_action_with_accel(). See the UI Definition section for information on allowed action names.
    * @param name A unique name for the action
    * @param label the label displayed in menu items and on buttons, or None
    * @param tooltip a tooltip for the action, or None
    * @param stockId the stock icon to display in widgets representing the action, or None
    * @returns a new Gtk.Action 
    */
  static new(name: string, label: string | null, tooltip: string | null, stockId: string | null): import('../Gtk').Action;
  /**
    * Emits the “activate” signal on the specified action, if it isn’t insensitive. This gets called by the proxy widgets when they get activated. 
    */
  activate(): void;
  /**
    * Disable activation signals from the action 
    */
  blockActivate(): void;
  /**
    * Installs the accelerator for self if self has an accel path and group. See Gtk.Action.set_accel_path() and Gtk.Action.set_accel_group() 
    */
  connectAccelerator(): void;
  /**
    * This function is intended for use by action implementations to create icons displayed in the proxy widgets.
    * @param iconSize the size of the icon (Gtk.IconSize) that should be created.
    * @returns a widget that displays the icon for this action. 
    */
  createIcon(iconSize: number): import('../Gtk').Widget;
  /**
    * If self provides a Gtk.Menu widget as a submenu for the menu item or the toolbar item it creates, this function returns an instance of that menu.
    * @returns the menu item provided by the action, or None. 
    */
  createMenu(): import('../Gtk').Widget;
  /**
    * Creates a menu item widget that proxies for the given action.
    * @returns a menu item connected to the action. 
    */
  createMenuItem(): import('../Gtk').Widget;
  /**
    * Creates a toolbar item widget that proxies for the given action.
    * @returns a toolbar item connected to the action. 
    */
  createToolItem(): import('../Gtk').Widget;
  /**
    * Undoes the effect of one call to Gtk.Action.connect_accelerator(). 
    */
  disconnectAccelerator(): void;
  /**
    * Returns the accel closure for this action.
    * @returns the accel closure for this action. The returned closure is owned by GTK+ and must not be unreffed or modified. 
    */
  getAccelClosure(): import('../GObject').Closure;
  /**
    * Returns the accel path for this action.
    * @returns the accel path for this action, or None if none is set. The returned string is owned by GTK+ and must not be freed or modified. 
    */
  getAccelPath(): string;
  /**
    * Returns whether self’s menu item proxies will always show their image, if available.
    * @returns True if the menu item proxies will always show their image 
    */
  getAlwaysShowImage(): boolean;
  /**
    * Gets the gicon of self.
    * @returns The action’s Gio.Icon if one is set. 
    */
  getGicon(): import('../Gio').Icon;
  /**
    * Gets the icon name of self.
    * @returns the icon name 
    */
  getIconName(): string;
  /**
    * Checks whether self is important or not
    * @returns whether self is important 
    */
  getIsImportant(): boolean;
  /**
    * Gets the label text of self.
    * @returns the label text 
    */
  getLabel(): string;
  /**
    * Returns the name of the action.
    * @returns the name of the action. The string belongs to GTK+ and should not be freed. 
    */
  getName(): string;
  /**
    * Returns the proxy widgets for an action. See also Gtk.Activatable.get_related_action().
    * @returns a GLib.SList of proxy widgets. The list is owned by GTK+ and must not be modified. 
    */
  getProxies(): import('../Gtk').Widget[];
  /**
    * Returns whether the action itself is sensitive. Note that this doesn’t necessarily mean effective sensitivity. See Gtk.Action.is_sensitive() for that.
    * @returns True if the action itself is sensitive. 
    */
  getSensitive(): boolean;
  /**
    * Gets the short label text of self.
    * @returns the short label text. 
    */
  getShortLabel(): string;
  /**
    * Gets the stock id of self.
    * @returns the stock id 
    */
  getStockId(): string;
  /**
    * Gets the tooltip text of self.
    * @returns the tooltip text 
    */
  getTooltip(): string;
  /**
    * Returns whether the action itself is visible. Note that this doesn’t necessarily mean effective visibility. See Gtk.Action.is_sensitive() for that.
    * @returns True if the action itself is visible. 
    */
  getVisible(): boolean;
  /**
    * Checks whether self is visible when horizontal
    * @returns whether self is visible when horizontal 
    */
  getVisibleHorizontal(): boolean;
  /**
    * Checks whether self is visible when horizontal
    * @returns whether self is visible when horizontal 
    */
  getVisibleVertical(): boolean;
  /**
    * Returns whether the action is effectively sensitive.
    * @returns True if the action and its associated action group are both sensitive. 
    */
  isSensitive(): boolean;
  /**
    * Returns whether the action is effectively visible.
    * @returns True if the action and its associated action group are both visible. 
    */
  isVisible(): boolean;
  /**
    * Sets the Gtk.AccelGroup in which the accelerator for this action will be installed.
    * @param accelGroup a Gtk.AccelGroup or None 
    */
  setAccelGroup(accelGroup: import('../Gtk').AccelGroup | null): void;
  /**
    * Sets the accel path for this action.  All proxy widgets associated with the action will have this accel path, so that their accelerators are consistent.
    * @param accelPath the accelerator path 
    */
  setAccelPath(accelPath: string): void;
  /**
    * Sets whether self’s menu item proxies will ignore the Gtk.Settings :gtk-menu-images setting and always show their image, if available.
    * @param alwaysShow True if menuitem proxies should always show their image 
    */
  setAlwaysShowImage(alwaysShow: boolean): void;
  /**
    * Sets the icon of self.
    * @param icon the Gio.Icon to set 
    */
  setGicon(icon: import('../Gio').Icon): void;
  /**
    * Sets the icon name on self
    * @param iconName the icon name to set 
    */
  setIconName(iconName: string): void;
  /**
    * Sets whether the action is important, this attribute is used primarily by toolbar items to decide whether to show a label or not.
    * @param isImportant True to make the action important 
    */
  setIsImportant(isImportant: boolean): void;
  /**
    * Sets the label of self.
    * @param label the label text to set 
    */
  setLabel(label: string): void;
  /**
    * Sets the :sensitive property of the action to sensitive. Note that this doesn’t necessarily mean effective sensitivity. See Gtk.Action.is_sensitive() for that.
    * @param sensitive True to make the action sensitive 
    */
  setSensitive(sensitive: boolean): void;
  /**
    * Sets a shorter label text on self.
    * @param shortLabel the label text to set 
    */
  setShortLabel(shortLabel: string): void;
  /**
    * Sets the stock id on self
    * @param stockId the stock id 
    */
  setStockId(stockId: string): void;
  /**
    * Sets the tooltip text on self
    * @param tooltip the tooltip text 
    */
  setTooltip(tooltip: string): void;
  /**
    * Sets the :visible property of the action to visible. Note that this doesn’t necessarily mean effective visibility. See Gtk.Action.is_visible() for that.
    * @param visible True to make the action visible 
    */
  setVisible(visible: boolean): void;
  /**
    * Sets whether self is visible when horizontal
    * @param visibleHorizontal whether the action is visible horizontally 
    */
  setVisibleHorizontal(visibleHorizontal: boolean): void;
  /**
    * Sets whether self is visible when vertical
    * @param visibleVertical whether the action is visible vertically 
    */
  setVisibleVertical(visibleVertical: boolean): void;
  /**
    * Reenable activation signals from the action 
    */
  unblockActivate(): void;
  /**
    * The Gtk.ActionGroup this Gtk.Action is associated with, or None (for internal use). deprecated 
    */
  actionGroup: import('../Gtk').ActionGroup;
  /**
    * Whether the image will always be shown deprecated 
    */
  alwaysShowImage: boolean;
  /**
    * The Gio.Icon being displayed deprecated 
    */
  gicon: import('../Gio').Icon;
  /**
    * When True, empty menu proxies for this action are hidden. deprecated 
    */
  hideIfEmpty: boolean;
  /**
    * The name of the icon from the icon theme deprecated 
    */
  iconName: string;
  /**
    * Whether the action is considered important. When True, toolitem proxies for this action show text in Gtk.ToolbarStyle.BOTH_HORIZ mode. deprecated 
    */
  isImportant: boolean;
  /**
    * The label used for menu items and buttons that activate this action. deprecated 
    */
  label: string;
  /**
    * A unique name for the action. deprecated 
    */
  name: string;
  /**
    * Whether the action is enabled. deprecated 
    */
  sensitive: boolean;
  /**
    * A shorter label that may be used on toolbar buttons. deprecated 
    */
  shortLabel: string;
  /**
    * The stock icon displayed in widgets representing this action. deprecated 
    */
  stockId: string;
  /**
    * A tooltip for this action. deprecated 
    */
  tooltip: string;
  /**
    * Whether the action is visible. deprecated 
    */
  visible: boolean;
  /**
    * Whether the toolbar item is visible when the toolbar is in a horizontal orientation. deprecated 
    */
  visibleHorizontal: boolean;
  /**
    * When True, toolitem proxies for this action are represented in the toolbar overflow menu. deprecated 
    */
  visibleOverflown: boolean;
  /**
    * Whether the toolbar item is visible when the toolbar is in a vertical orientation. deprecated 
    */
  visibleVertical: boolean;
}

