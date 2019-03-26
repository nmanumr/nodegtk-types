import * as GObject from '../GObject';
export declare interface Display extends GObject.Object { }

/**
  * Gdk.Display objects purpose are two fold: 
  */
export declare class Display {
  /**
    * Gets the default Gdk.Display. This is a convenience function for: gdk_display_manager_get_default_display (gdk_display_manager_get ()).
    * @returns a Gdk.Display, or None if there is no default display. 
    */
  static getDefault(): import('../Gdk').Display | null;
  /**
    * Opens a display.
    * @param displayName the name of the display to open
    * @returns a Gdk.Display, or None if the display could not be opened 
    */
  static open(displayName: string): import('../Gdk').Display | null;
  /**
    * Opens the default display specified by command line arguments or environment variables, sets it as the default display, and returns it. Gdk.parse_args() must have been called first. If the default display has previously been set, simply returns that. An internal function that should not be used by applications.
    * @returns the default display, if it could be opened, otherwise None. 
    */
  static openDefaultLibgtkOnly(): import('../Gdk').Display | null;
  /**
    * Emits a short beep on self 
    */
  beep(): void;
  /**
    * Closes the connection to the windowing system for the given display, and cleans up associated resources. 
    */
  close(): void;
  /**
    * Returns True if there is an ongoing grab on device for self.
    * @param device a Gdk.Device
    * @returns True if there is a grab in effect for device. 
    */
  deviceIsGrabbed(device: import('../Gdk').Device): boolean;
  /**
    * Flushes any requests queued for the windowing system; this happens automatically when the main loop blocks waiting for new events, but if your application is drawing without returning control to the main loop, you may need to call this function explicitly. A common case where this function needs to be called is when an application is executing drawing commands from a thread other than the thread where the main loop is running. 
    */
  flush(): void;
  /**
    * Returns a Gdk.AppLaunchContext suitable for launching applications on the given display.
    * @returns a new Gdk.AppLaunchContext for self. Free with GObject.Object.unref() when done 
    */
  getAppLaunchContext(): import('../Gdk').AppLaunchContext;
  /**
    * Returns the default size to use for cursors on self.
    * @returns the default cursor size. 
    */
  getDefaultCursorSize(): number;
  /**
    * Returns the default group leader window for all toplevel windows on self. This window is implicitly created by GDK. See Gdk.Window.set_group().
    * @returns The default group leader window for self 
    */
  getDefaultGroup(): import('../Gdk').Window;
  /**
    * Get the default Gdk.Screen for self.
    * @returns the default Gdk.Screen object for self 
    */
  getDefaultScreen(): import('../Gdk').Screen;
  /**
    * Returns the default Gdk.Seat for this display.
    * @returns the default seat. 
    */
  getDefaultSeat(): import('../Gdk').Seat;
  /**
    * Returns the Gdk.DeviceManager associated to self.
    * @returns A Gdk.DeviceManager, or None. This memory is owned by GDK and must not be freed or unreferenced. 
    */
  getDeviceManager(): import('../Gdk').DeviceManager | null;
  /**
    * Gets the next Gdk.Event to be processed for self, fetching events from the windowing system if necessary.
    * @returns the next Gdk.Event to be processed, or None if no events are pending. The returned Gdk.Event should be freed with Gdk.Event.free(). 
    */
  getEvent(): import('../Gdk').Event | null;
  /**
    * Gets the maximal size to use for cursors on self.
    * @returns width:the return location for the maximal cursor width height:the return location for the maximal cursor height 
    */
  getMaximalCursorSize(): [number, number];
  /**
    * Gets a monitor associated with this display.
    * @param monitorNum number of the monitor
    * @returns the Gdk.Monitor, or None if monitor_num is not a valid monitor number 
    */
  getMonitor(monitorNum: number): import('../Gdk').Monitor | null;
  /**
    * Gets the monitor in which the point (x, y) is located, or a nearby monitor if the point is not in any monitor.
    * @param x the x coordinate of the point
    * @param y the y coordinate of the point
    * @returns the monitor containing the point 
    */
  getMonitorAtPoint(x: number, y: number): import('../Gdk').Monitor;
  /**
    * Gets the monitor in which the largest area of window resides, or a monitor close to window if it is outside of all monitors.
    * @param window a Gdk.Window
    * @returns the monitor with the largest overlap with window 
    */
  getMonitorAtWindow(window: import('../Gdk').Window): import('../Gdk').Monitor;
  /**
    * Gets the number of monitors that belong to self.
    * @returns the number of monitors 
    */
  getNMonitors(): number;
  /**
    * Gets the number of screen managed by the self.
    * @returns number of screens. 
    */
  getNScreens(): number;
  /**
    * Gets the name of the display.
    * @returns a string representing the display name. This string is owned by GDK and should not be modified or freed. 
    */
  getName(): string;
  /**
    * Gets the current location of the pointer and the current modifier mask for a given display.
    * @returns screen:location to store the screen that the cursor is on, or None. x:location to store root window X coordinate of pointer, or None. y:location to store root window Y coordinate of pointer, or None. mask:location to store current modifier mask, or None 
    */
  getPointer(): [import('../Gdk').Screen, number, number, import('../Gdk').ModifierType];
  /**
    * Gets the primary monitor for the display.
    * @returns the primary monitor, or None if no primary monitor is configured by the user 
    */
  getPrimaryMonitor(): import('../Gdk').Monitor | null;
  /**
    * Returns a screen object for one of the screens of the display.
    * @param screenNum the screen number
    * @returns the Gdk.Screen object 
    */
  getScreen(screenNum: number): import('../Gdk').Screen;
  /**
    * Obtains the window underneath the mouse pointer, returning the location of the pointer in that window in win_x, win_y for screen. Returns None if the window under the mouse pointer is not known to GDK (for example, belongs to another application).
    * @returns the window under the mouse pointer, or None  win_x:return location for x coordinate of the pointer location relative to the window origin, or None win_y:return location for y coordinate of the pointer location relative &    to the window origin, or None 
    */
  getWindowAtPointer(): [import('../Gdk').Window | null, number, number];
  /**
    * Returns whether the display has events that are waiting to be processed.
    * @returns True if there are events ready to be processed. 
    */
  hasPending(): boolean;
  /**
    * Finds out if the display has been closed.
    * @returns True if the display is closed. 
    */
  isClosed(): boolean;
  /**
    * Release any keyboard grab
    * @param time a timestap (e.g Gdk.CURRENT_TIME). 
    */
  keyboardUngrab(time: number): void;
  /**
    * Returns the list of available input devices attached to self. The list is statically allocated and should not be freed.
    * @returns a list of Gdk.Device 
    */
  listDevices(): import('../Gdk').Device[];
  /**
    * Returns the list of seats known to self.
    * @returns the list of seats known to the Gdk.Display 
    */
  listSeats(): import('../Gdk').Seat[];
  /**
    * Indicates to the GUI environment that the application has finished loading, using a given identifier.
    * @param startupId a startup-notification identifier, for which notification process should be completed 
    */
  notifyStartupComplete(startupId: string): void;
  /**
    * Gets a copy of the first Gdk.Event in the self’s event queue, without removing the event from the queue.  (Note that this function will not get more events from the windowing system.  It only checks the events that have already been moved to the GDK event queue.)
    * @returns a copy of the first Gdk.Event on the event queue, or None if no events are in the queue. The returned Gdk.Event should be freed with Gdk.Event.free(). 
    */
  peekEvent(): import('../Gdk').Event | null;
  /**
    * Test if the pointer is grabbed.
    * @returns True if an active X pointer grab is in effect 
    */
  pointerIsGrabbed(): boolean;
  /**
    * Release any pointer grab.
    * @param time a timestap (e.g. Gdk.CURRENT_TIME). 
    */
  pointerUngrab(time: number): void;
  /**
    * Appends a copy of the given event onto the front of the event queue for self.
    * @param event a Gdk.Event. 
    */
  putEvent(event: import('../Gdk').Event): void;
  /**
    * Request Gdk.EventOwnerChange events for ownership changes of the selection named by the given atom.
    * @param selection the Gdk.Atom naming the selection for which ownership change notification is requested
    * @returns whether Gdk.EventOwnerChange events will be sent. 
    */
  requestSelectionNotification(selection: import('../Gdk').Atom): boolean;
  /**
    * Sets the double click distance (two clicks within this distance count as a double click and result in a Gdk.EventType._2BUTTON_PRESS event). See also Gdk.Display.set_double_click_time(). Applications should not set this, it is a global user-configured setting.
    * @param distance distance in pixels 
    */
  setDoubleClickDistance(distance: number): void;
  /**
    * Sets the double click time (two clicks within this time interval count as a double click and result in a Gdk.EventType._2BUTTON_PRESS event). Applications should not set this, it is a global user-configured setting.
    * @param msec double click time in milliseconds (thousandths of a second) 
    */
  setDoubleClickTime(msec: number): void;
  /**
    * Issues a request to the clipboard manager to store the clipboard data. On X11, this is a special program that works according to the FreeDesktop Clipboard Specification.
    * @param clipboardWindow a Gdk.Window belonging to the clipboard owner
    * @param time a timestamp
    * @param targets an array of targets that should be saved, or None if all available targets should be saved. 
    */
  storeClipboard(clipboardWindow: import('../Gdk').Window, time: number, targets: import('../Gdk').Atom | null): void;
  /**
    * Returns whether the speicifed display supports clipboard persistance; i.e. if it’s possible to store the clipboard data after an application has quit. On X11 this checks if a clipboard daemon is running.
    * @returns True if the display supports clipboard persistance. 
    */
  supportsClipboardPersistence(): boolean;
  /**
    * Returns True if Gdk.Window.set_composited() can be used to redirect drawing on the window using compositing.
    * @returns True if windows may be composited. 
    */
  supportsComposite(): boolean;
  /**
    * Returns True if cursors can use an 8bit alpha channel on self. Otherwise, cursors are restricted to bilevel alpha (i.e. a mask).
    * @returns whether cursors can have alpha channels. 
    */
  supportsCursorAlpha(): boolean;
  /**
    * Returns True if multicolored cursors are supported on self. Otherwise, cursors have only a forground and a background color.
    * @returns whether cursors can have multiple colors. 
    */
  supportsCursorColor(): boolean;
  /**
    * Returns True if gdk_window_input_shape_combine_mask() can be used to modify the input shape of windows on self.
    * @returns True if windows with modified input shape are supported 
    */
  supportsInputShapes(): boolean;
  /**
    * Returns whether Gdk.EventOwnerChange events will be sent when the owner of a selection changes.
    * @returns whether Gdk.EventOwnerChange events will be sent. 
    */
  supportsSelectionNotification(): boolean;
  /**
    * Returns True if gdk_window_shape_combine_mask() can be used to create shaped windows on self.
    * @returns True if shaped windows are supported 
    */
  supportsShapes(): boolean;
  /**
    * Flushes any requests queued for the windowing system and waits until all requests have been handled. This is often used for making sure that the display is synchronized with the current state of the program. Calling Gdk.Display.sync() before Gdk.error_trap_pop() makes sure that any errors generated from earlier requests are handled before the error trap is removed. 
    */
  sync(): void;
  /**
    * Warps the pointer of self to the point x,`y` on the screen screen, unless the pointer is confined to a window by a grab, in which case it will be moved as far as allowed by the grab. Warping the pointer creates events as if the user had moved the mouse instantaneously to the destination.
    * @param screen the screen of self to warp the pointer to
    * @param x the x coordinate of the destination
    * @param y the y coordinate of the destination 
    */
  warpPointer(screen: import('../Gdk').Screen, x: number, y: number): void;
}

