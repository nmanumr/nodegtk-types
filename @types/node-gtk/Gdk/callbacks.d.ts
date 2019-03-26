/**
  * Specifies the type of function passed to Gdk.Event.handler_set() to handle all GDK events.
  * @param event the Gdk.Event to process.
  * @param data user data set when the event handler was installed with Gdk.Event.handler_set(). 
  */
export declare type eventFunc= (event: import('../Gdk').Event, data: Object | null) => void;
/**
  * Specifies the type of function used to filter native events before they are converted to GDK events.
  * @param xevent the native event to filter.
  * @param event the GDK event to which the X event will be translated.
  * @param data user data set when the filter was installed.
  * @returns a Gdk.FilterReturn value. 
  */
export declare type filterFunc= (xevent: Object, event: import('../Gdk').Event, data: Object | null) => import('../Gdk').FilterReturn;
/**
  * Type of the callback used to set up window so it can be grabbed. A typical action would be ensuring the window is visible, although there’s room for other initialization actions.
  * @param seat the Gdk.Seat being grabbed
  * @param window the Gdk.Window being grabbed
  * @param userData user data passed in Gdk.Seat.grab() 
  */
export declare type seatGrabPrepareFunc= (seat: import('../Gdk').Seat, window: import('../Gdk').Window, userData: Object | null) => void;
/**
  * A function of this type is passed to Gdk.Window.invalidate_maybe_recurse(). It gets called for each child of the window to determine whether to recursively invalidate it or now.
  * @param window a Gdk.Window
  * @param userData user data
  * @returns True to invalidate window recursively 
  */
export declare type windowChildFunc= (window: import('../Gdk').Window, userData: Object | null) => boolean;
/**
  * Whenever some area of the window is invalidated (directly in the window or in a child window) this gets called with region in the coordinate space of window. You can use region to just keep track of the dirty region, or you can actually change region in case you are doing display tricks like showing a child in multiple places.
  * @param window a Gdk.Window
  * @param region a cairo.Region 
  */
export declare type windowInvalidateHandlerFunc= (window: import('../Gdk').Window, region: import('../cairo').Region) => void;
