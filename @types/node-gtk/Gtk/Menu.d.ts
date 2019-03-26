import * as Gtk from '../Gtk';
export declare interface Menu extends Gtk.MenuShell { }

/**
  * A Gtk.Menu is a Gtk.MenuShell that implements a drop down menu
consisting of a list of Gtk.MenuItem objects which can be navigated
and activated by the user to perform application functions. 
  */
export declare class Menu {
  /**
    * Returns a list of the menus which are attached to this widget. This list is owned by GTK+ and must not be modified.
    * @param widget a Gtk.Widget
    * @returns the list of menus attached to his widget. 
    */
  static getForAttachWidget(widget: import('../Gtk').Widget): import('../Gtk').Widget[];
  /**
    * Creates a new Gtk.Menu
    * @returns a new Gtk.Menu 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Menu and populates it with menu items and submenus according to model.
    * @param model a Gio.MenuModel
    * @returns a new Gtk.Menu 
    */
  static newFromModel(model: import('../Gio').MenuModel): import('../Gtk').Widget;
  /**
    * Adds a new Gtk.MenuItem to a (table) menu. The number of “cells” that an item will occupy is specified by left_attach, right_attach, top_attach and bottom_attach. These each represent the leftmost, rightmost, uppermost and lower column and row numbers of the table. (Columns and rows are indexed from zero).
    * @param child a Gtk.MenuItem
    * @param leftAttach The column number to attach the left side of the item to
    * @param rightAttach The column number to attach the right side of the item to
    * @param topAttach The row number to attach the top of the item to
    * @param bottomAttach The row number to attach the bottom of the item to 
    */
  attach(child: import('../Gtk').Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number): void;
  /**
    * Attaches the menu to the widget and provides a callback function that will be invoked when the menu calls Gtk.Menu.detach() during its destruction.
    * @param attachWidget the Gtk.Widget that the menu will be attached to
    * @param detacher the user supplied callback function that will be called when the menu calls Gtk.Menu.detach() 
    */
  attachToWidget(attachWidget: import('../Gtk').Widget, detacher: import('../Gtk').menuDetachFunc | null): void;
  /**
    * Detaches the menu from the widget to which it had been attached. This function will call the callback function, detacher, provided when the Gtk.Menu.attach_to_widget() function was called. 
    */
  detach(): void;
  /**
    * Gets the Gtk.AccelGroup which holds global accelerators for the menu. See Gtk.Menu.set_accel_group().
    * @returns the Gtk.AccelGroup associated with the menu 
    */
  getAccelGroup(): import('../Gtk').AccelGroup;
  /**
    * Retrieves the accelerator path set on the menu.
    * @returns the accelerator path set on the menu. 
    */
  getAccelPath(): string;
  /**
    * Returns the selected menu item from the menu.  This is used by the Gtk.ComboBox.
    * @returns the Gtk.MenuItem that was last selected in the menu.  If a selection has not yet been made, the first menu item is selected. 
    */
  getActive(): import('../Gtk').Widget;
  /**
    * Returns the Gtk.Widget that the menu is attached to.
    * @returns the Gtk.Widget that the menu is attached to 
    */
  getAttachWidget(): import('../Gtk').Widget;
  /**
    * Retrieves the number of the monitor on which to show the menu.
    * @returns the number of the monitor on which the menu should be popped up or -1, if no monitor has been set 
    */
  getMonitor(): number;
  /**
    * Returns whether the menu reserves space for toggles and icons, regardless of their actual presence.
    * @returns Whether the menu reserves toggle space 
    */
  getReserveToggleSize(): boolean;
  /**
    * Returns whether the menu is torn off. See Gtk.Menu.set_tearoff_state().
    * @returns True if the menu is currently torn off. 
    */
  getTearoffState(): boolean;
  /**
    * Returns the title of the menu. See Gtk.Menu.set_title().
    * @returns the title of the menu, or None if the menu has no title set on it. This string is owned by GTK+ and should not be modified or freed. 
    */
  getTitle(): string;
  /**
    * Places self on the given monitor.
    * @param monitor the monitor to place the menu on 
    */
  placeOnMonitor(monitor: import('../Gdk').Monitor): void;
  /**
    * Removes the menu from the screen. 
    */
  popdown(): void;
  /**
    * Displays a menu and makes it available for selection.
    * @param parentMenuShell the menu shell containing the triggering menu item, or None
    * @param parentMenuItem the menu item whose activation triggered the popup, or None
    * @param func a user supplied function used to position the menu, or None
    * @param data user supplied data to be passed to func.
    * @param button the mouse button which was pressed to initiate the event.
    * @param activateTime the time at which the activation event occurred. 
    */
  popup(parentMenuShell: import('../Gtk').Widget | null, parentMenuItem: import('../Gtk').Widget | null, func: import('../Gtk').menuPositionFunc | null, data: Object | null, button: number, activateTime: number): void;
  /**
    * Displays self and makes it available for selection.
    * @param triggerEvent the Gdk.Event that initiated this request or None if it’s the current event 
    */
  popupAtPointer(triggerEvent: import('../Gdk').Event | null): void;
  /**
    * Displays self and makes it available for selection.
    * @param rectWindow the Gdk.Window rect is relative to
    * @param rect the Gdk.Rectangle to align self with
    * @param rectAnchor the point on rect to align with self’s anchor point
    * @param menuAnchor the point on self to align with rect’s anchor point
    * @param triggerEvent the Gdk.Event that initiated this request or None if it’s the current event 
    */
  popupAtRect(rectWindow: import('../Gdk').Window, rect: import('../Gdk').Rectangle, rectAnchor: import('../Gdk').Gravity, menuAnchor: import('../Gdk').Gravity, triggerEvent: import('../Gdk').Event | null): void;
  /**
    * Displays self and makes it available for selection.
    * @param widget the Gtk.Widget to align self with
    * @param widgetAnchor the point on widget to align with self’s anchor point
    * @param menuAnchor the point on self to align with widget’s anchor point
    * @param triggerEvent the Gdk.Event that initiated this request or None if it’s the current event 
    */
  popupAtWidget(widget: import('../Gtk').Widget, widgetAnchor: import('../Gdk').Gravity, menuAnchor: import('../Gdk').Gravity, triggerEvent: import('../Gdk').Event | null): void;
  /**
    * Displays a menu and makes it available for selection.
    * @param device a Gdk.Device
    * @param parentMenuShell the menu shell containing the triggering menu item, or None
    * @param parentMenuItem the menu item whose activation triggered the popup, or None
    * @param func a user supplied function used to position the menu, or None
    * @param data user supplied data to be passed to func
    * @param button the mouse button which was pressed to initiate the event
    * @param activateTime the time at which the activation event occurred 
    */
  popupForDevice(device: import('../Gdk').Device | null, parentMenuShell: import('../Gtk').Widget | null, parentMenuItem: import('../Gtk').Widget | null, func: import('../Gtk').menuPositionFunc | null, data: Object | null, button: number, activateTime: number): void;
  /**
    * Moves child to a new position in the list of self children.
    * @param child the Gtk.MenuItem to move
    * @param position the new position to place child. Positions are numbered from 0 to n - 1 
    */
  reorderChild(child: import('../Gtk').Widget, position: number): void;
  /**
    * Repositions the menu according to its position function. 
    */
  reposition(): void;
  /**
    * Set the Gtk.AccelGroup which holds global accelerators for the menu.  This accelerator group needs to also be added to all windows that this menu is being used in with Gtk.Window.add_accel_group(), in order for those windows to support all the accelerators contained in this group.
    * @param accelGroup the Gtk.AccelGroup to be associated with the menu. 
    */
  setAccelGroup(accelGroup: import('../Gtk').AccelGroup | null): void;
  /**
    * Sets an accelerator path for this menu from which accelerator paths for its immediate children, its menu items, can be constructed. The main purpose of this function is to spare the programmer the inconvenience of having to call Gtk.MenuItem.set_accel_path() on each menu item that should support runtime user changable accelerators. Instead, by just calling Gtk.Menu.set_accel_path() on their parent, each menu item of this menu, that contains a label describing its purpose, automatically gets an accel path assigned.
    * @param accelPath a valid accelerator path, or None to unset the path 
    */
  setAccelPath(accelPath: string | null): void;
  /**
    * Selects the specified menu item within the menu.  This is used by the Gtk.ComboBox and should not be used by anyone else.
    * @param index the index of the menu item to select.  Index values are from 0 to n-1 
    */
  setActive(index: number): void;
  /**
    * Informs GTK+ on which monitor a menu should be popped up. See Gdk.Monitor.get_geometry().
    * @param monitorNum the number of the monitor on which the menu should be popped up 
    */
  setMonitor(monitorNum: number): void;
  /**
    * Sets whether the menu should reserve space for drawing toggles or icons, regardless of their actual presence.
    * @param reserveToggleSize whether to reserve size for toggles 
    */
  setReserveToggleSize(reserveToggleSize: boolean): void;
  /**
    * Sets the Gdk.Screen on which the menu will be displayed.
    * @param screen a Gdk.Screen, or None if the screen should be determined by the widget the menu is attached to 
    */
  setScreen(screen: import('../Gdk').Screen | null): void;
  /**
    * Changes the tearoff state of the menu.  A menu is normally displayed as drop down menu which persists as long as the menu is active.  It can also be displayed as a tearoff menu which persists until it is closed or reattached.
    * @param tornOff If True, menu is displayed as a tearoff menu. 
    */
  setTearoffState(tornOff: boolean): void;
  /**
    * Sets the title string for the menu.
    * @param title a string containing the title for the menu, or None to inherit the title of the parent menu item, if any 
    */
  setTitle(title: string | null): void;
  /**
    * The accel group holding accelerators for the menu 
    */
  accelGroup: import('../Gtk').AccelGroup;
  /**
    * An accel path used to conveniently construct accel paths of child items 
    */
  accelPath: string;
  /**
    * The currently selected menu item 
    */
  active: number;
  /**
    * Positioning hints for when the menu might fall off-screen 
    */
  anchorHints: import('../Gdk').AnchorHints;
  /**
    * The widget the menu is attached to 
    */
  attachWidget: import('../Gtk').Widget;
  /**
    * Menu window type hint 
    */
  menuTypeHint: import('../Gdk').WindowTypeHint;
  /**
    * The monitor the menu will be popped up on 
    */
  monitor: number;
  /**
    * Rect anchor horizontal offset 
    */
  rectAnchorDx: number;
  /**
    * Rect anchor vertical offset 
    */
  rectAnchorDy: number;
  /**
    * A boolean that indicates whether the menu reserves space for toggles and icons 
    */
  reserveToggleSize: boolean;
  /**
    * A boolean that indicates whether the menu is torn-off deprecated 
    */
  tearoffState: boolean;
  /**
    * A title that may be displayed by the window manager when this menu is torn-off deprecated 
    */
  tearoffTitle: string;
}

