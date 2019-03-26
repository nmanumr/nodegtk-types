import * as GObject from '../GObject';
export declare interface Seat extends GObject.Object { }

/**
  * The Gdk.Seat object represents a collection of input devices
that belong to a user. 
  */
export declare abstract class Seat {
  /**
    * Returns the capabilities this Gdk.Seat currently has.
    * @returns the seat capabilities 
    */
  getCapabilities(): import('../Gdk').SeatCapabilities;
  /**
    * Returns the Gdk.Display this seat belongs to.
    * @returns a Gdk.Display. This object is owned by GTK+ and must not be freed. 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Returns the master device that routes keyboard events.
    * @returns a master Gdk.Device with keyboard capabilities. This object is owned by GTK+ and must not be freed. 
    */
  getKeyboard(): import('../Gdk').Device | null;
  /**
    * Returns the master device that routes pointer events.
    * @returns a master Gdk.Device with pointer capabilities. This object is owned by GTK+ and must not be freed. 
    */
  getPointer(): import('../Gdk').Device | null;
  /**
    * Returns the slave devices that match the given capabilities.
    * @param capabilities capabilities to get devices for
    * @returns A list of Gdk.Devices. The list must be freed with g_list_free(), the elements are owned by GDK and must not be freed. 
    */
  getSlaves(capabilities: import('../Gdk').SeatCapabilities): import('../Gdk').Device[];
  /**
    * Grabs the seat so that all events corresponding to the given capabilities are passed to this application until the seat is ungrabbed with Gdk.Seat.ungrab(), or the window becomes hidden. This overrides any previous grab on the seat by this client.
    * @param window the Gdk.Window which will own the grab
    * @param capabilities capabilities that will be grabbed
    * @param ownerEvents if False then all device events are reported with respect to window and are only reported if selected by event_mask. If True then pointer events for this application are reported as normal, but pointer events outside this application are reported with respect to window and only if selected by event_mask. In either mode, unreported events are discarded.
    * @param cursor the cursor to display while the grab is active. If this is None then the normal cursors are used for window and its descendants, and the cursor for window is used elsewhere.
    * @param event the event that is triggering the grab, or None if none is available.
    * @param prepareFunc function to prepare the window to be grabbed, it can be None if window is visible before this call.
    * @param prepareFuncData user data to pass to prepare_func
    * @returns Gdk.GrabStatus.SUCCESS if the grab was successful. 
    */
  grab(window: import('../Gdk').Window, capabilities: import('../Gdk').SeatCapabilities, ownerEvents: boolean, cursor: import('../Gdk').Cursor | null, event: import('../Gdk').Event | null, prepareFunc: import('../Gdk').seatGrabPrepareFunc | null, prepareFuncData: Object | null): import('../Gdk').GrabStatus;
  /**
    * Releases a grab added through Gdk.Seat.grab(). 
    */
  ungrab(): void;
  /**
    * Display 
    */
  display: import('../Gdk').Display;
}

