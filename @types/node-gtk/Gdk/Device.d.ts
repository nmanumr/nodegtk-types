import * as GObject from '../GObject';
export declare interface Device extends GObject.Object { }

/**
  * The Gdk.Device object represents a single input device, such
as a keyboard, a mouse, a touchpad, etc. 
  */
export declare abstract class Device {
  /**
    * Determines information about the current keyboard grab. This is not public API and must not be used by applications.
    * @param display the display for which to get the grab information
    * @param device device to get the grab information from
    * @returns True if this application currently has the keyboard grabbed.   grab_window:location to store current grab window owner_events:location to store boolean indicating whether the owner_events flag to Gdk.keyboard_grab() or Gdk.pointer_grab() was True. 
    */
  static grabInfoLibgtkOnly(display: import('../Gdk').Display, device: import('../Gdk').Device): [boolean, import('../Gdk').Window, boolean];
  /**
    * Returns the associated device to self, if self is of type Gdk.DeviceType.MASTER, it will return the paired pointer or keyboard.
    * @returns The associated device, or None 
    */
  getAssociatedDevice(): import('../Gdk').Device | null;
  /**
    * Returns the axes currently available on the device. 
    */
  getAxes(): import('../Gdk').AxisFlags;
  /**
    * Returns the axis use for index_.
    * @param index the index of the axis.
    * @returns a Gdk.AxisUse specifying how the axis is used. 
    */
  getAxisUse(index: number): import('../Gdk').AxisUse;
  /**
    * Returns the device type for self.
    * @returns the Gdk.DeviceType for self. 
    */
  getDeviceType(): import('../Gdk').DeviceType;
  /**
    * Returns the Gdk.Display to which self pertains.
    * @returns a Gdk.Display. This memory is owned by GTK+, and must not be freed or unreffed. 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Determines whether the pointer follows device motion. This is not meaningful for keyboard devices, which don’t have a pointer.
    * @returns True if the pointer follows device motion 
    */
  getHasCursor(): boolean;
  /**
    * If index_ has a valid keyval, this function will return True and fill in keyval and modifiers with the keyval settings.
    * @param index the index of the macro button to get.
    * @returns True if keyval is set for index.  keyval:return value for the keyval. modifiers:return value for modifiers. 
    */
  getKey(index: number): [boolean, number, import('../Gdk').ModifierType];
  /**
    * Gets information about which window the given pointer device is in, based on events that have been received so far from the display server. If another application has a pointer grab, or this application has a grab with owner_events = False, None may be returned even if the pointer is physically over one of this application’s windows.
    * @returns the last window the device 
    */
  getLastEventWindow(): import('../Gdk').Window | null;
  /**
    * Determines the mode of the device.
    * @returns a Gdk.InputSource 
    */
  getMode(): import('../Gdk').InputMode;
  /**
    * Returns the number of axes the device currently has.
    * @returns the number of axes. 
    */
  getNAxes(): number;
  /**
    * Returns the number of keys the device currently has.
    * @returns the number of keys. 
    */
  getNKeys(): number;
  /**
    * Determines the name of the device.
    * @returns a name 
    */
  getName(): string;
  /**
    * Gets the current location of self. As a slave device coordinates are those of its master pointer, This function may not be called on devices of type Gdk.DeviceType.SLAVE, unless there is an ongoing grab on them, see Gdk.Device.grab().
    * @returns screen:location to store the Gdk.Screen the self is on, or None. x:location to store root window X coordinate of self, or None. y:location to store root window Y coordinate of self, or None. 
    */
  getPosition(): [import('../Gdk').Screen, number, number];
  /**
    * Gets the current location of self in double precision. As a slave device’s coordinates are those of its master pointer, this function may not be called on devices of type Gdk.DeviceType.SLAVE, unless there is an ongoing grab on them. See Gdk.Device.grab().
    * @returns screen:location to store the Gdk.Screen the self is on, or None. x:location to store root window X coordinate of self, or None. y:location to store root window Y coordinate of self, or None. 
    */
  getPositionDouble(): [import('../Gdk').Screen, number, number];
  /**
    * Returns the product ID of this device, or None if this information couldn’t be obtained. This ID is retrieved from the device, and is thus constant for it. See Gdk.Device.get_vendor_id() for more information.
    * @returns the product ID, or None 
    */
  getProductId(): string | null;
  /**
    * Returns the Gdk.Seat the device belongs to.
    * @returns A Gdk.Seat. This memory is owned by GTK+ and must not be freed. 
    */
  getSeat(): import('../Gdk').Seat;
  /**
    * Determines the type of the device.
    * @returns a Gdk.InputSource 
    */
  getSource(): import('../Gdk').InputSource;
  /**
    * Returns the vendor ID of this device, or None if this information couldn’t be obtained. This ID is retrieved from the device, and is thus constant for it.
    * @returns the vendor ID, or None 
    */
  getVendorId(): string | null;
  /**
    * Obtains the window underneath self, returning the location of the device in win_x and win_y. Returns None if the window tree under self is not known to GDK (for example, belongs to another application).
    * @returns the Gdk.Window under the device position, or None.  win_x:return location for the X coordinate of the device location, relative to the window origin, or None. win_y:return location for the Y coordinate of the device location, relative to the window origin, or None. 
    */
  getWindowAtPosition(): [import('../Gdk').Window | null, number, number];
  /**
    * Obtains the window underneath self, returning the location of the device in win_x and win_y in double precision. Returns None if the window tree under self is not known to GDK (for example, belongs to another application).
    * @returns the Gdk.Window under the device position, or None.  win_x:return location for the X coordinate of the device location, relative to the window origin, or None. win_y:return location for the Y coordinate of the device location, relative to the window origin, or None. 
    */
  getWindowAtPositionDouble(): [import('../Gdk').Window | null, number, number];
  /**
    * Grabs the device so that all events coming from this device are passed to this application until the device is ungrabbed with Gdk.Device.ungrab(), or the window becomes unviewable. This overrides any previous grab on the device by this client.
    * @param window the Gdk.Window which will own the grab (the grab window)
    * @param grabOwnership specifies the grab ownership.
    * @param ownerEvents if False then all device events are reported with respect to window and are only reported if selected by event_mask. If True then pointer events for this application are reported as normal, but pointer events outside this application are reported with respect to window and only if selected by event_mask. In either mode, unreported events are discarded.
    * @param eventMask specifies the event mask, which is used in accordance with owner_events.
    * @param cursor the cursor to display while the grab is active if the device is a pointer. If this is None then the normal cursors are used for window and its descendants, and the cursor for window is used elsewhere.
    * @param time the timestamp of the event which led to this pointer grab. This usually comes from the Gdk.Event struct, though Gdk.CURRENT_TIME can be used if the time isn’t known.
    * @returns Gdk.GrabStatus.SUCCESS if the grab was successful. 
    */
  grab(window: import('../Gdk').Window, grabOwnership: import('../Gdk').GrabOwnership, ownerEvents: boolean, eventMask: import('../Gdk').EventMask, cursor: import('../Gdk').Cursor | null, time: number): import('../Gdk').GrabStatus;
  /**
    * Returns a GLib.List of Gdk.Atoms, containing the labels for the axes that self currently has.
    * @returns A GLib.List of Gdk.Atoms, free with g_list_free(). 
    */
  listAxes(): import('../Gdk').Atom[];
  /**
    * If the device if of type Gdk.DeviceType.MASTER, it will return the list of slave devices attached to it, otherwise it will return None
    * @returns the list of slave devices, or None. The list must be freed with g_list_free(), the contents of the list are owned by GTK+ and should not be freed. 
    */
  listSlaveDevices(): import('../Gdk').Device[] | null;
  /**
    * Specifies how an axis of a device is used.
    * @param index the index of the axis
    * @param use specifies how the axis is used 
    */
  setAxisUse(index: number, use: import('../Gdk').AxisUse): void;
  /**
    * Specifies the X key event to generate when a macro button of a device is pressed.
    * @param index the index of the macro button to set
    * @param keyval the keyval to generate
    * @param modifiers the modifiers to set 
    */
  setKey(index: number, keyval: number, modifiers: import('../Gdk').ModifierType): void;
  /**
    * Sets a the mode of an input device. The mode controls if the device is active and whether the device’s range is mapped to the entire screen or to a single window.
    * @param mode the input mode.
    * @returns True if the mode was successfully changed. 
    */
  setMode(mode: import('../Gdk').InputMode): boolean;
  /**
    * Release any grab on self.
    * @param time a timestap (e.g. Gdk.CURRENT_TIME). 
    */
  ungrab(time: number): void;
  /**
    * Warps self in display to the point x,`y` on the screen screen, unless the device is confined to a window by a grab, in which case it will be moved as far as allowed by the grab. Warping the pointer creates events as if the user had moved the mouse instantaneously to the destination.
    * @param screen the screen to warp self to.
    * @param x the X coordinate of the destination.
    * @param y the Y coordinate of the destination. 
    */
  warp(screen: import('../Gdk').Screen, x: number, y: number): void;
  /**
    * Associated pointer or keyboard with this device 
    */
  readonly associatedDevice: import('../Gdk').Device;
  /**
    * Axes 
    */
  readonly axes: import('../Gdk').AxisFlags;
  /**
    * Device manager which the device belongs to 
    */
  deviceManager: import('../Gdk').DeviceManager;
  /**
    * Display which the device belongs to 
    */
  display: import('../Gdk').Display;
  /**
    * Whether there is a visible cursor following device motion 
    */
  hasCursor: boolean;
  /**
    * Input mode for the device 
    */
  inputMode: import('../Gdk').InputMode;
  /**
    * Source type for the device 
    */
  inputSource: import('../Gdk').InputSource;
  /**
    * Number of axes in the device 
    */
  readonly nAxes: number;
  /**
    * Device name 
    */
  name: string;
  /**
    * Number of concurrent touches 
    */
  numTouches: number;
  /**
    * Product ID 
    */
  productId: string;
  /**
    * Seat 
    */
  seat: import('../Gdk').Seat;
  /**
    * The tool that is currently used with this device 
    */
  readonly tool: import('../Gdk').DeviceTool;
  /**
    * Device role in the device manager 
    */
  type: import('../Gdk').DeviceType;
  /**
    * Vendor ID 
    */
  vendorId: string;
}

