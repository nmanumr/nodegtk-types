import * as Gtk from '../Gtk';
export declare interface Window extends Gtk.Bin { }

/**
  * A Gtk.Window is a toplevel window which can contain other widgets.
Windows normally have decorations that are under the control
of the windowing system and allow the user to manipulate the window
(resize it, move it, close it,…). 
  */
export declare class Window {
  /**
    * Gets the value set by Gtk.Window.set_default_icon_list(). The list is a copy and should be freed with g_list_free(), but the pixbufs in the list have not had their reference count incremented.
    * @returns copy of default icon list 
    */
  static getDefaultIconList(): import('../GdkPixbuf').Pixbuf[];
  /**
    * Returns the fallback icon name for windows that has been set with Gtk.Window.set_default_icon_name(). The returned string is owned by GTK+ and should not be modified. It is only valid until the next call to Gtk.Window.set_default_icon_name().
    * @returns the fallback icon name for windows 
    */
  static getDefaultIconName(): string;
  /**
    * Returns a list of all existing toplevel windows. The widgets in the list are not individually referenced. If you want to iterate through the list and perform actions involving callbacks that might destroy the widgets, you must call g_list_foreach (result, (GFunc)g_object_ref, NULL) first, and then unref all the widgets afterwards.
    * @returns list of toplevel widgets 
    */
  static listToplevels(): import('../Gtk').Widget[];
  /**
    * Creates a new Gtk.Window, which is a toplevel window that can contain other widgets. Nearly always, the type of the window should be Gtk.WindowType.TOPLEVEL. If you’re implementing something like a popup menu from scratch (which is a bad idea, just use Gtk.Menu), you might use Gtk.WindowType.POPUP. Gtk.WindowType.POPUP is not for dialogs, though in some other toolkits dialogs are called “popups”. In GTK+, Gtk.WindowType.POPUP means a pop-up menu or pop-up tooltip. On X11, popup windows are not controlled by the window manager.
    * @param type type of window
    * @returns a new Gtk.Window. 
    */
  static new(type: import('../Gtk').WindowType): import('../Gtk').Widget;
  /**
    * By default, after showing the first Gtk.Window, GTK+ calls Gdk.notify_startup_complete().  Call this function to disable the automatic startup notification. You might do this if your first window is a splash screen, and you want to delay notification until after your real main window has been shown, for example.
    * @param setting True to automatically do startup notification 
    */
  static setAutoStartupNotification(setting: boolean): void;
  /**
    * Sets an icon to be used as fallback for windows that haven’t had Gtk.Window.set_icon() called on them from a pixbuf.
    * @param icon the icon 
    */
  static setDefaultIcon(icon: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Sets an icon to be used as fallback for windows that haven’t had Gtk.Window.set_icon_list() called on them from a file on disk. Warns on failure if err is None.
    * @param filename location of icon file
    * @returns True if setting the icon succeeded. 
    */
  static setDefaultIconFromFile(filename: string): boolean;
  /**
    * Sets an icon list to be used as fallback for windows that haven’t had Gtk.Window.set_icon_list() called on them to set up a window-specific icon list. This function allows you to set up the icon for all windows in your app at once.
    * @param list a list of GdkPixbuf.Pixbuf 
    */
  static setDefaultIconList(list: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Sets an icon to be used as fallback for windows that haven’t had Gtk.Window.set_icon_list() called on them from a named themed icon, see Gtk.Window.set_icon_name().
    * @param name the name of the themed icon 
    */
  static setDefaultIconName(name: string): void;
  /**
    * Opens or closes the interactive debugger, which offers access to the widget hierarchy of the application and to useful debugging tools.
    * @param enable True to enable interactive debugging 
    */
  static setInteractiveDebugging(enable: boolean): void;
  /**
    * Activates the default widget for the window, unless the current focused widget has been configured to receive the default action (see Gtk.Widget.set_receives_default()), in which case the focused widget is activated.
    * @returns True if a widget got activated. 
    */
  activateDefault(): boolean;
  /**
    * Activates the current focused widget within the window.
    * @returns True if a widget got activated. 
    */
  activateFocus(): boolean;
  /**
    * Activates mnemonics and accelerators for this Gtk.Window. This is normally called by the default ::key_press_event handler for toplevel windows, however in some cases it may be useful to call this directly when overriding the standard key handling for a toplevel window.
    * @param event a Gdk.EventKey
    * @returns True if a mnemonic or accelerator was found and activated. 
    */
  activateKey(event: import('../Gdk').EventKey): boolean;
  /**
    * Associate accel_group with self, such that calling Gtk.accel_groups_activate() on self will activate accelerators in accel_group.
    * @param accelGroup a Gtk.AccelGroup 
    */
  addAccelGroup(accelGroup: import('../Gtk').AccelGroup): void;
  /**
    * Adds a mnemonic to this window.
    * @param keyval the mnemonic
    * @param target the widget that gets activated by the mnemonic 
    */
  addMnemonic(keyval: number, target: import('../Gtk').Widget): void;
  /**
    * Starts moving a window. This function is used if an application has window movement grips. When GDK can support it, the window movement will be done using the standard mechanism for the window manager or windowing system. Otherwise, GDK will try to emulate window movement, potentially not all that well, depending on the windowing system.
    * @param button mouse button that initiated the drag
    * @param rootX X position where the user clicked to initiate the drag, in root window coordinates
    * @param rootY Y position where the user clicked to initiate the drag
    * @param timestamp timestamp from the click event that initiated the drag 
    */
  beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void;
  /**
    * Starts resizing a window. This function is used if an application has window resizing controls. When GDK can support it, the resize will be done using the standard mechanism for the window manager or windowing system. Otherwise, GDK will try to emulate window resizing, potentially not all that well, depending on the windowing system.
    * @param edge position of the resize control
    * @param button mouse button that initiated the drag
    * @param rootX X position where the user clicked to initiate the drag, in root window coordinates
    * @param rootY Y position where the user clicked to initiate the drag
    * @param timestamp timestamp from the click event that initiated the drag 
    */
  beginResizeDrag(edge: import('../Gdk').WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void;
  /**
    * Requests that the window is closed, similar to what happens when a window manager close button is clicked. 
    */
  close(): void;
  /**
    * Asks to deiconify (i.e. unminimize) the specified self. Note that you shouldn’t assume the window is definitely deiconified afterward, because other entities (e.g. the user or window manager)) could iconify it again before your code which assumes deiconification gets to run. 
    */
  deiconify(): void;
  /**
    * Asks to place self in the fullscreen state. Note that you shouldn’t assume the window is definitely full screen afterward, because other entities (e.g. the user or window manager) could unfullscreen it again, and not all window managers honor requests to fullscreen windows. But normally the window will end up fullscreen. Just don’t write code that crashes if not. 
    */
  fullscreen(): void;
  /**
    * Asks to place self in the fullscreen state. Note that you shouldn’t assume the window is definitely full screen afterward.
    * @param screen a Gdk.Screen to draw to
    * @param monitor which monitor to go fullscreen on 
    */
  fullscreenOnMonitor(screen: import('../Gdk').Screen, monitor: number): void;
  /**
    * Gets the value set by Gtk.Window.set_accept_focus().
    * @returns True if window should receive the input focus 
    */
  getAcceptFocus(): boolean;
  /**
    * Gets the Gtk.Application associated with the window (if any).
    * @returns a Gtk.Application, or None 
    */
  getApplication(): import('../Gtk').Application | null;
  /**
    * Fetches the attach widget for this window. See Gtk.Window.set_attached_to().
    * @returns the widget where the window is attached, or None if the window is not attached to any widget. 
    */
  getAttachedTo(): import('../Gtk').Widget | null;
  /**
    * Returns whether the window has been set to have decorations such as a title bar via Gtk.Window.set_decorated().
    * @returns True if the window has been set to have decorations 
    */
  getDecorated(): boolean;
  /**
    * Gets the default size of the window. A value of -1 for the width or height indicates that a default size has not been explicitly set for that dimension, so the “natural” size of the window will be used.
    * @returns width:location to store the default width, or None height:location to store the default height, or None 
    */
  getDefaultSize(): [number, number];
  /**
    * Returns the default widget for self. See Gtk.Window.set_default() for more details.
    * @returns the default widget, or None if there is none. 
    */
  getDefaultWidget(): import('../Gtk').Widget | null;
  /**
    * Returns whether the window has been set to have a close button via Gtk.Window.set_deletable().
    * @returns True if the window has been set to have a close button 
    */
  getDeletable(): boolean;
  /**
    * Returns whether the window will be destroyed with its transient parent. See Gtk.Window.set_destroy_with_parent ().
    * @returns True if the window will be destroyed with its transient parent. 
    */
  getDestroyWithParent(): boolean;
  /**
    * Retrieves the current focused widget within the window. Note that this is the widget that would have the focus if the toplevel window focused; if the toplevel window is not focused then  gtk_widget_has_focus (widget) will not be True for the widget.
    * @returns the currently focused widget, or None if there is none. 
    */
  getFocus(): import('../Gtk').Widget | null;
  /**
    * Gets the value set by Gtk.Window.set_focus_on_map().
    * @returns True if window should receive the input focus when mapped. 
    */
  getFocusOnMap(): boolean;
  /**
    * Gets the value of the Gtk.Window :focus-visible property.
    * @returns True if “focus rectangles” are supposed to be visible in this window. 
    */
  getFocusVisible(): boolean;
  /**
    * Gets the value set by Gtk.Window.set_gravity().
    * @returns window gravity 
    */
  getGravity(): import('../Gdk').Gravity;
  /**
    * Returns the group for self or the default group, if self is None or if self does not have an explicit window group.
    * @returns the Gtk.WindowGroup for a window or the default group 
    */
  getGroup(): import('../Gtk').WindowGroup;
  /**
    * Determines whether the window may have a resize grip.
    * @returns True if the window has a resize grip 
    */
  getHasResizeGrip(): boolean;
  /**
    * Returns whether the window has requested to have its titlebar hidden when maximized. See Gtk.Window.set_hide_titlebar_when_maximized ().
    * @returns True if the window has requested to have its titlebar hidden when maximized 
    */
  getHideTitlebarWhenMaximized(): boolean;
  /**
    * Gets the value set by Gtk.Window.set_icon() (or if you’ve called Gtk.Window.set_icon_list(), gets the first icon in the icon list).
    * @returns icon for window or None if none 
    */
  getIcon(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Retrieves the list of icons set by Gtk.Window.set_icon_list(). The list is copied, but the reference count on each member won’t be incremented.
    * @returns copy of window’s icon list 
    */
  getIconList(): import('../GdkPixbuf').Pixbuf[];
  /**
    * Returns the name of the themed icon for the window, see Gtk.Window.set_icon_name().
    * @returns the icon name or None if the window has no themed icon 
    */
  getIconName(): string | null;
  /**
    * Returns the mnemonic modifier for this window. See Gtk.Window.set_mnemonic_modifier().
    * @returns the modifier mask used to activate mnemonics on this window. 
    */
  getMnemonicModifier(): import('../Gdk').ModifierType;
  /**
    * Gets the value of the Gtk.Window :mnemonics-visible property.
    * @returns True if mnemonics are supposed to be visible in this window. 
    */
  getMnemonicsVisible(): boolean;
  /**
    * Returns whether the window is modal. See Gtk.Window.set_modal().
    * @returns True if the window is set to be modal and establishes a grab when shown 
    */
  getModal(): boolean;
  /**
    * Fetches the requested opacity for this window. See Gtk.Window.set_opacity().
    * @returns the requested opacity for this window. 
    */
  getOpacity(): number;
  /**
    * This function returns the position you need to pass to Gtk.Window.move() to keep self in its current position. This means that the meaning of the returned value varies with window gravity. See Gtk.Window.move() for more details.
    * @returns root_x:return location for X coordinate of gravity-determined reference point, or None root_y:return location for Y coordinate of gravity-determined reference point, or None 
    */
  getPosition(): [number, number];
  /**
    * Gets the value set by Gtk.Window.set_resizable().
    * @returns True if the user can resize the window 
    */
  getResizable(): boolean;
  /**
    * If a window has a resize grip, this will retrieve the grip position, width and height into the specified Gdk.Rectangle.
    * @returns True if the resize grip’s area was retrieved  rect:a pointer to a Gdk.Rectangle which we should store the resize grip area 
    */
  getResizeGripArea(): [boolean, import('../Gdk').Rectangle];
  /**
    * Returns the role of the window. See Gtk.Window.set_role() for further explanation.
    * @returns the role of the window if set, or None. The returned is owned by the widget and must not be modified or freed. 
    */
  getRole(): string | null;
  /**
    * Returns the Gdk.Screen associated with self.
    * @returns a Gdk.Screen. 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Obtains the current size of self.
    * @returns width:return location for width, or None height:return location for height, or None 
    */
  getSize(): [number, number];
  /**
    * Gets the value set by Gtk.Window.set_skip_pager_hint().
    * @returns True if window shouldn’t be in pager 
    */
  getSkipPagerHint(): boolean;
  /**
    * Gets the value set by Gtk.Window.set_skip_taskbar_hint()
    * @returns True if window shouldn’t be in taskbar 
    */
  getSkipTaskbarHint(): boolean;
  /**
    * Retrieves the title of the window. See Gtk.Window.set_title().
    * @returns the title of the window, or None if none has been set explicitly. The returned string is owned by the widget and must not be modified or freed. 
    */
  getTitle(): string | null;
  /**
    * Returns the custom titlebar that has been set with Gtk.Window.set_titlebar().
    * @returns the custom titlebar, or None 
    */
  getTitlebar(): import('../Gtk').Widget | null;
  /**
    * Fetches the transient parent for this window. See Gtk.Window.set_transient_for().
    * @returns the transient parent for this window, or None if no transient parent has been set. 
    */
  getTransientFor(): import('../Gtk').Window | null;
  /**
    * Gets the type hint for this window. See Gtk.Window.set_type_hint().
    * @returns the type hint for self. 
    */
  getTypeHint(): import('../Gdk').WindowTypeHint;
  /**
    * Gets the value set by Gtk.Window.set_urgency_hint()
    * @returns True if window is urgent 
    */
  getUrgencyHint(): boolean;
  /**
    * Gets the type of the window. See Gtk.WindowType.
    * @returns the type of the window 
    */
  getWindowType(): import('../Gtk').WindowType;
  /**
    * Returns whether self has an explicit window group.
    * @returns True if self has an explicit window group. 
    */
  hasGroup(): boolean;
  /**
    * Returns whether the input focus is within this Gtk.Window. For real toplevel windows, this is identical to Gtk.Window.is_active(), but for embedded windows, like Gtk.Plug, the results will differ.
    * @returns True if the input focus is within this Gtk.Window 
    */
  hasToplevelFocus(): boolean;
  /**
    * Asks to iconify (i.e. minimize) the specified self. Note that you shouldn’t assume the window is definitely iconified afterward, because other entities (e.g. the user or window manager) could deiconify it again, or there may not be a window manager in which case iconification isn’t possible, etc. But normally the window will end up iconified. Just don’t write code that crashes if not. 
    */
  iconify(): void;
  /**
    * Returns whether the window is part of the current active toplevel. (That is, the toplevel window receiving keystrokes.) The return value is True if the window is active toplevel itself, but also if it is, say, a Gtk.Plug embedded in the active toplevel. You might use this function if you wanted to draw a widget differently in an active window from a widget in an inactive window. See Gtk.Window.has_toplevel_focus()
    * @returns True if the window part of the current active window. 
    */
  isActive(): boolean;
  /**
    * Retrieves the current maximized state of self.
    * @returns whether the window has a maximized state. 
    */
  isMaximized(): boolean;
  /**
    * Asks to maximize self, so that it becomes full-screen. Note that you shouldn’t assume the window is definitely maximized afterward, because other entities (e.g. the user or window manager) could unmaximize it again, and not all window managers support maximization. But normally the window will end up maximized. Just don’t write code that crashes if not. 
    */
  maximize(): void;
  /**
    * Activates the targets associated with the mnemonic.
    * @param keyval the mnemonic
    * @param modifier the modifiers
    * @returns True if the activation is done. 
    */
  mnemonicActivate(keyval: number, modifier: import('../Gdk').ModifierType): boolean;
  /**
    * Asks the window manager to move self to the given position.  Window managers are free to ignore this; most window managers ignore requests for initial window positions (instead using a user-defined placement algorithm) and honor requests after the window has already been shown.
    * @param x X coordinate to move window to
    * @param y Y coordinate to move window to 
    */
  move(x: number, y: number): void;
  /**
    * Parses a standard X Window System geometry string - see the manual page for X (type “man X”) for details on this. Gtk.Window.parse_geometry() does work on all GTK+ ports including Win32 but is primarily intended for an X environment.
    * @param geometry geometry string
    * @returns True if string was parsed successfully 
    */
  parseGeometry(geometry: string): boolean;
  /**
    * Presents a window to the user. This may mean raising the window in the stacking order, deiconifying it, moving it to the current desktop, and/or giving it the keyboard focus, possibly dependent on the user’s platform, window manager, and preferences. 
    */
  present(): void;
  /**
    * Presents a window to the user in response to a user interaction. If you need to present a window without a timestamp, use Gtk.Window.present(). See Gtk.Window.present() for details.
    * @param timestamp the timestamp of the user interaction (typically a button or key press event) which triggered this call 
    */
  presentWithTime(timestamp: number): void;
  /**
    * Propagate a key press or release event to the focus widget and up the focus container chain until a widget handles event. This is normally called by the default ::key_press_event and ::key_release_event handlers for toplevel windows, however in some cases it may be useful to call this directly when overriding the standard key handling for a toplevel window.
    * @param event a Gdk.EventKey
    * @returns True if a widget in the focus chain handled the event. 
    */
  propagateKeyEvent(event: import('../Gdk').EventKey): boolean;
  /**
    * Reverses the effects of Gtk.Window.add_accel_group().
    * @param accelGroup a Gtk.AccelGroup 
    */
  removeAccelGroup(accelGroup: import('../Gtk').AccelGroup): void;
  /**
    * Removes a mnemonic from this window.
    * @param keyval the mnemonic
    * @param target the widget that gets activated by the mnemonic 
    */
  removeMnemonic(keyval: number, target: import('../Gtk').Widget): void;
  /**
    * Hides self, then reshows it, resetting the default size and position of the window. Used by GUI builders only. 
    */
  reshowWithInitialSize(): void;
  /**
    * Resizes the window as if the user had done so, obeying geometry constraints. The default geometry constraint is that windows may not be smaller than their size request; to override this constraint, call Gtk.Widget.set_size_request() to set the window’s request to a smaller value.
    * @param width width in pixels to resize the window to
    * @param height height in pixels to resize the window to 
    */
  resize(width: number, height: number): void;
  /**
    * Determines whether a resize grip is visible for the specified window.
    * @returns True if a resize grip exists and is visible 
    */
  resizeGripIsVisible(): boolean;
  /**
    * Like Gtk.Window.resize(), but width and height are interpreted in terms of the base size and increment set with Gtk.Window.set_geometry_hints.
    * @param width width in resize increments to resize the window to
    * @param height height in resize increments to resize the window to 
    */
  resizeToGeometry(width: number, height: number): void;
  /**
    * Windows may set a hint asking the desktop environment not to receive the input focus. This function sets this hint.
    * @param setting True to let this window receive input focus 
    */
  setAcceptFocus(setting: boolean): void;
  /**
    * Sets or unsets the Gtk.Application associated with the window.
    * @param application a Gtk.Application, or None to unset 
    */
  setApplication(application: import('../Gtk').Application | null): void;
  /**
    * Marks self as attached to attach_widget. This creates a logical binding between the window and the widget it belongs to, which is used by GTK+ to propagate information such as styling or accessibility to self as if it was a children of attach_widget.
    * @param attachWidget a Gtk.Widget, or None 
    */
  setAttachedTo(attachWidget: import('../Gtk').Widget | null): void;
  /**
    * By default, windows are decorated with a title bar, resize controls, etc.  Some window managers allow GTK+ to disable these decorations, creating a borderless window. If you set the decorated property to False using this function, GTK+ will do its best to convince the window manager not to decorate the window. Depending on the system, this function may not have any effect when called on a window that is already visible, so you should call it before calling Gtk.Widget.show().
    * @param setting True to decorate the window 
    */
  setDecorated(setting: boolean): void;
  /**
    * The default widget is the widget that’s activated when the user presses Enter in a dialog (for example). This function sets or unsets the default widget for a Gtk.Window. When setting (rather than unsetting) the default widget it’s generally easier to call Gtk.Widget.grab_default() on the widget. Before making a widget the default widget, you must call Gtk.Widget.set_can_default() on the widget you’d like to make the default.
    * @param defaultWidget widget to be the default, or None to unset the default widget for the toplevel 
    */
  setDefault(defaultWidget: import('../Gtk').Widget | null): void;
  /**
    * Like Gtk.Window.set_default_size(), but width and height are interpreted in terms of the base size and increment set with Gtk.Window.set_geometry_hints.
    * @param width width in resize increments, or -1 to unset the default width
    * @param height height in resize increments, or -1 to unset the default height 
    */
  setDefaultGeometry(width: number, height: number): void;
  /**
    * Sets the default size of a window. If the window’s “natural” size (its size request) is larger than the default, the default will be ignored. More generally, if the default size does not obey the geometry hints for the window (Gtk.Window.set_geometry_hints() can be used to set these explicitly), the default size will be clamped to the nearest permitted size.
    * @param width width in pixels, or -1 to unset the default width
    * @param height height in pixels, or -1 to unset the default height 
    */
  setDefaultSize(width: number, height: number): void;
  /**
    * By default, windows have a close button in the window frame. Some window managers allow GTK+ to disable this button. If you set the deletable property to False using this function, GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible, so you should call it before calling Gtk.Widget.show().
    * @param setting True to decorate the window as deletable 
    */
  setDeletable(setting: boolean): void;
  /**
    * If setting is True, then destroying the transient parent of self will also destroy self itself. This is useful for dialogs that shouldn’t persist beyond the lifetime of the main window they’re associated with, for example.
    * @param setting whether to destroy self with its transient parent 
    */
  setDestroyWithParent(setting: boolean): void;
  /**
    * If focus is not the current focus widget, and is focusable, sets it as the focus widget for the window. If focus is None, unsets the focus widget for this window. To set the focus to a particular widget in the toplevel, it is usually more convenient to use Gtk.Widget.grab_focus() instead of this function.
    * @param focus widget to be the new focus widget, or None to unset any focus widget for the toplevel window. 
    */
  setFocus(focus: import('../Gtk').Widget | null): void;
  /**
    * Windows may set a hint asking the desktop environment not to receive the input focus when the window is mapped.  This function sets this hint.
    * @param setting True to let this window receive input focus on map 
    */
  setFocusOnMap(setting: boolean): void;
  /**
    * Sets the Gtk.Window :focus-visible property.
    * @param setting the new value 
    */
  setFocusVisible(setting: boolean): void;
  /**
    * This function sets up hints about how a window can be resized by the user.  You can set a minimum and maximum size; allowed resize increments (e.g. for xterm, you can only resize by the size of a character); aspect ratios; and more. See the Gdk.Geometry struct.
    * @param geometryWidget widget the geometry hints used to be applied to or None. Since 3.20 this argument is ignored and GTK behaves as if None was set.
    * @param geometry struct containing geometry information or None
    * @param geomMask mask indicating which struct fields should be paid attention to 
    */
  setGeometryHints(geometryWidget: import('../Gtk').Widget | null, geometry: import('../Gdk').Geometry | null, geomMask: import('../Gdk').WindowHints): void;
  /**
    * Window gravity defines the meaning of coordinates passed to Gtk.Window.move(). See Gtk.Window.move() and Gdk.Gravity for more details.
    * @param gravity window gravity 
    */
  setGravity(gravity: import('../Gdk').Gravity): void;
  /**
    * Sets whether self has a corner resize grip.
    * @param value True to allow a resize grip 
    */
  setHasResizeGrip(value: boolean): void;
  /**
    * Tells GTK+ whether to drop its extra reference to the window when Gtk.Widget.destroy() is called.
    * @param setting the new value 
    */
  setHasUserRefCount(setting: boolean): void;
  /**
    * If setting is True, then self will request that it’s titlebar should be hidden when maximized. This is useful for windows that don’t convey any information other than the application name in the titlebar, to put the available screen space to better use. If the underlying window system does not support the request, the setting will not have any effect.
    * @param setting whether to hide the titlebar when self is maximized 
    */
  setHideTitlebarWhenMaximized(setting: boolean): void;
  /**
    * Sets up the icon representing a Gtk.Window. This icon is used when the window is minimized (also known as iconified).  Some window managers or desktop environments may also place it in the window frame, or display it in other contexts. On others, the icon is not used at all, so your mileage may vary.
    * @param icon icon image, or None 
    */
  setIcon(icon: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Sets the icon for self. Warns on failure if err is None.
    * @param filename location of icon file
    * @returns True if setting the icon succeeded. 
    */
  setIconFromFile(filename: string): boolean;
  /**
    * Sets up the icon representing a Gtk.Window. The icon is used when the window is minimized (also known as iconified).  Some window managers or desktop environments may also place it in the window frame, or display it in other contexts. On others, the icon is not used at all, so your mileage may vary.
    * @param list list of GdkPixbuf.Pixbuf 
    */
  setIconList(list: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Sets the icon for the window from a named themed icon. See the docs for Gtk.IconTheme for more details. On some platforms, the window icon is not used at all.
    * @param name the name of the themed icon 
    */
  setIconName(name: string | null): void;
  /**
    * Asks to keep self above, so that it stays on top. Note that you shouldn’t assume the window is definitely above afterward, because other entities (e.g. the user or window manager) could not keep it above, and not all window managers support keeping windows above. But normally the window will end kept above. Just don’t write code that crashes if not.
    * @param setting whether to keep self above other windows 
    */
  setKeepAbove(setting: boolean): void;
  /**
    * Asks to keep self below, so that it stays in bottom. Note that you shouldn’t assume the window is definitely below afterward, because other entities (e.g. the user or window manager) could not keep it below, and not all window managers support putting windows below. But normally the window will be kept below. Just don’t write code that crashes if not.
    * @param setting whether to keep self below other windows 
    */
  setKeepBelow(setting: boolean): void;
  /**
    * Sets the mnemonic modifier for this window.
    * @param modifier the modifier mask used to activate mnemonics on this window. 
    */
  setMnemonicModifier(modifier: import('../Gdk').ModifierType): void;
  /**
    * Sets the Gtk.Window :mnemonics-visible property.
    * @param setting the new value 
    */
  setMnemonicsVisible(setting: boolean): void;
  /**
    * Sets a window modal or non-modal. Modal windows prevent interaction with other windows in the same application. To keep modal dialogs on top of main application windows, use Gtk.Window.set_transient_for() to make the dialog transient for the parent; most window managers will then disallow lowering the dialog below the parent.
    * @param modal whether the window is modal 
    */
  setModal(modal: boolean): void;
  /**
    * Request the windowing system to make self partially transparent, with opacity 0 being fully transparent and 1 fully opaque. (Values of the opacity parameter are clamped to the [0,1] range.) On X11 this has any effect only on X screens with a compositing manager running. See Gtk.Widget.is_composited(). On Windows it should work always.
    * @param opacity desired opacity, between 0 and 1 
    */
  setOpacity(opacity: number): void;
  /**
    * Sets a position constraint for this window. If the old or new constraint is Gtk.WindowPosition.CENTER_ALWAYS, this will also cause the window to be repositioned to satisfy the new constraint.
    * @param position a position constraint. 
    */
  setPosition(position: import('../Gtk').WindowPosition): void;
  /**
    * Sets whether the user can resize a window. Windows are user resizable by default.
    * @param resizable True if the user can resize this window 
    */
  setResizable(resizable: boolean): void;
  /**
    * This function is only useful on X11, not with other GTK+ targets.
    * @param role unique identifier for the window to be used when restoring a session 
    */
  setRole(role: string): void;
  /**
    * Sets the Gdk.Screen where the self is displayed; if the window is already mapped, it will be unmapped, and then remapped on the new screen.
    * @param screen a Gdk.Screen. 
    */
  setScreen(screen: import('../Gdk').Screen): void;
  /**
    * Windows may set a hint asking the desktop environment not to display the window in the pager. This function sets this hint. (A “pager” is any desktop navigation tool such as a workspace switcher that displays a thumbnail representation of the windows on the screen.)
    * @param setting True to keep this window from appearing in the pager 
    */
  setSkipPagerHint(setting: boolean): void;
  /**
    * Windows may set a hint asking the desktop environment not to display the window in the task bar. This function sets this hint.
    * @param setting True to keep this window from appearing in the task bar 
    */
  setSkipTaskbarHint(setting: boolean): void;
  /**
    * Startup notification identifiers are used by desktop environment to track application startup, to provide user feedback and other features. This function changes the corresponding property on the underlying Gdk.Window. Normally, startup identifier is managed automatically and you should only use this function in special cases like transferring focus from other processes. You should use this function before calling Gtk.Window.present() or any equivalent function generating a window map event.
    * @param startupId a string with startup-notification identifier 
    */
  setStartupId(startupId: string): void;
  /**
    * Sets the title of the Gtk.Window. The title of a window will be displayed in its title bar; on the X Window System, the title bar is rendered by the window manager, so exactly how the title appears to users may vary according to a user’s exact configuration. The title should help a user distinguish this window from other windows they may have open. A good title might include the application name and current document filename, for example.
    * @param title title of the window 
    */
  setTitle(title: string): void;
  /**
    * Sets a custom titlebar for self.
    * @param titlebar the widget to use as titlebar 
    */
  setTitlebar(titlebar: import('../Gtk').Widget | null): void;
  /**
    * Dialog windows should be set transient for the main application window they were spawned from. This allows window managers to e.g. keep the dialog on top of the main window, or center the dialog over the main window. gtk_dialog_new_with_buttons() and other convenience functions in GTK+ will sometimes call Gtk.Window.set_transient_for() on your behalf.
    * @param parent parent window, or None 
    */
  setTransientFor(parent: import('../Gtk').Window | null): void;
  /**
    * By setting the type hint for the window, you allow the window manager to decorate and handle the window in a way which is suitable to the function of the window in your application.
    * @param hint the window type 
    */
  setTypeHint(hint: import('../Gdk').WindowTypeHint): void;
  /**
    * Windows may set a hint asking the desktop environment to draw the users attention to the window. This function sets this hint.
    * @param setting True to mark this window as urgent 
    */
  setUrgencyHint(setting: boolean): void;
  /**
    * Don’t use this function. It sets the X Window System “class” and “name” hints for a window.  According to the ICCCM, you should always set these to the same value for all windows in an application, and GTK+ sets them to that value by default, so calling this function is sort of pointless. However, you may want to call Gtk.Window.set_role() on each window in your application, for the benefit of the session manager. Setting the role allows the window manager to restore window positions when loading a saved session.
    * @param wmclassName window name hint
    * @param wmclassClass window class hint 
    */
  setWmclass(wmclassName: string, wmclassClass: string): void;
  /**
    * Asks to stick self, which means that it will appear on all user desktops. Note that you shouldn’t assume the window is definitely stuck afterward, because other entities (e.g. the user or window manager could unstick it again, and some window managers do not support sticking windows. But normally the window will end up stuck. Just don’t write code that crashes if not. 
    */
  stick(): void;
  /**
    * Asks to toggle off the fullscreen state for self. Note that you shouldn’t assume the window is definitely not full screen afterward, because other entities (e.g. the user or window manager) could fullscreen it again, and not all window managers honor requests to unfullscreen windows. But normally the window will end up restored to its normal state. Just don’t write code that crashes if not. 
    */
  unfullscreen(): void;
  /**
    * Asks to unmaximize self. Note that you shouldn’t assume the window is definitely unmaximized afterward, because other entities (e.g. the user or window manager) could maximize it again, and not all window managers honor requests to unmaximize. But normally the window will end up unmaximized. Just don’t write code that crashes if not. 
    */
  unmaximize(): void;
  /**
    * Asks to unstick self, which means that it will appear on only one of the user’s desktops. Note that you shouldn’t assume the window is definitely unstuck afterward, because other entities (e.g. the user or window manager) could stick it again. But normally the window will end up stuck. Just don’t write code that crashes if not. 
    */
  unstick(): void;
  /**
    * True if the window should receive the input focus. 
    */
  acceptFocus: boolean;
  /**
    * The Gtk.Application for the window 
    */
  application: import('../Gtk').Application;
  /**
    * The widget where the window is attached 
    */
  attachedTo: import('../Gtk').Widget;
  /**
    * Whether the window should be decorated by the window manager 
    */
  decorated: boolean;
  /**
    * The default height of the window, used when initially showing the window 
    */
  defaultHeight: number;
  /**
    * The default width of the window, used when initially showing the window 
    */
  defaultWidth: number;
  /**
    * Whether the window frame should have a close button 
    */
  deletable: boolean;
  /**
    * If this window should be destroyed when the parent is destroyed 
    */
  destroyWithParent: boolean;
  /**
    * True if the window should receive the input focus when mapped. 
    */
  focusOnMap: boolean;
  /**
    * Whether focus rectangles are currently visible in this window 
    */
  focusVisible: boolean;
  /**
    * The window gravity of the window 
    */
  gravity: import('../Gdk').Gravity;
  /**
    * Specifies whether the window should have a resize grip deprecated 
    */
  hasResizeGrip: boolean;
  /**
    * Whether the input focus is within this Gtk.Window 
    */
  readonly hasToplevelFocus: boolean;
  /**
    * If this window’s titlebar should be hidden when the window is maximized 
    */
  hideTitlebarWhenMaximized: boolean;
  /**
    * Icon for this window 
    */
  icon: import('../GdkPixbuf').Pixbuf;
  /**
    * Name of the themed icon for this window 
    */
  iconName: string;
  /**
    * Whether the toplevel is the current active window 
    */
  readonly isActive: boolean;
  /**
    * Whether the window is maximized 
    */
  readonly isMaximized: boolean;
  /**
    * Whether mnemonics are currently visible in this window 
    */
  mnemonicsVisible: boolean;
  /**
    * If True, the window is modal (other windows are not usable while this one is up) 
    */
  modal: boolean;
  /**
    * If True, users can resize the window 
    */
  resizable: boolean;
  /**
    * Specifies whether the window’s resize grip is visible. deprecated 
    */
  readonly resizeGripVisible: boolean;
  /**
    * Unique identifier for the window to be used when restoring a session 
    */
  role: string;
  /**
    * The screen where this window will be displayed 
    */
  screen: import('../Gdk').Screen;
  /**
    * True if the window should not be in the pager. 
    */
  skipPagerHint: boolean;
  /**
    * True if the window should not be in the task bar. 
    */
  skipTaskbarHint: boolean;
  /**
    * Unique startup identifier for the window used by startup-notification 
    */
  startupId: string;
  /**
    * The title of the window 
    */
  title: string;
  /**
    * The transient parent of the dialog 
    */
  transientFor: import('../Gtk').Window;
  /**
    * The type of the window 
    */
  type: import('../Gtk').WindowType;
  /**
    * Hint to help the desktop environment understand what kind of window this is and how to treat it. 
    */
  typeHint: import('../Gdk').WindowTypeHint;
  /**
    * True if the window should be brought to the user’s attention. 
    */
  urgencyHint: boolean;
  /**
    * The initial position of the window 
    */
  windowPosition: import('../Gtk').WindowPosition;
}

