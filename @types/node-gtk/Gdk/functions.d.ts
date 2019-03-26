/**
  * Appends gdk option entries to the passed in option group. This is not public API and must not be used by applications.
  * @param group An option group. 
  */
export declare function addOptionEntriesLibgtkOnly(group: import('../GLib').OptionGroup): void;
/**
  * Finds or creates an atom corresponding to a given string.
  * @param atomName a string.
  * @param onlyIfExists if True, GDK is allowed to not create a new atom, but just return %GDK_NONE if the requested atom doesn’t already exists. Currently, the flag is ignored, since checking the existance of an atom is as expensive as creating it.
  * @returns the atom corresponding to atom_name. 
  */
export declare function atomIntern(atomName: string, onlyIfExists: boolean): import('../Gdk').Atom;
/**
  * Finds or creates an atom corresponding to a given string.
  * @param atomName a static string
  * @returns the atom corresponding to atom_name 
  */
export declare function atomInternStaticString(atomName: string): import('../Gdk').Atom;
/**
  * Emits a short beep on the default display. 
  */
export declare function beep(): void;
/**
  * Creates a Cairo context for drawing to window.
  * @param window a Gdk.Window
  * @returns A newly created Cairo context. Free with cairo_destroy() when you are done drawing. 
  */
export declare function cairoCreate(window: import('../Gdk').Window): import('../cairo').Context;
/**
  * This is the main way to draw GL content in GTK+. It takes a render buffer ID (source_type == #GL_RENDERBUFFER) or a texture id (source_type == #GL_TEXTURE) and draws it onto cr with an OVER operation, respecting the current clip. The top left corner of the rectangle specified by x, y, width and height will be drawn at the current (0,0) position of the cairo.Context.
  * @param cr a cairo context
  * @param window The window we’re rendering for (not necessarily into)
  * @param source The GL ID of the source buffer
  * @param sourceType The type of the source
  * @param bufferScale The scale-factor that the source buffer is allocated for
  * @param x The source x position in source to start copying from in GL coordinates
  * @param y The source y position in source to start copying from in GL coordinates
  * @param width The width of the region to draw
  * @param height The height of the region to draw 
  */
export declare function cairoDrawFromGl(cr: import('../cairo').Context, window: import('../Gdk').Window, source: number, sourceType: number, bufferScale: number, x: number, y: number, width: number, height: number): void;
/**
  * This is a convenience function around cairo.Context.clip_extents(). It rounds the clip extents to integer coordinates and returns a boolean indicating if a clip area exists.
  * @param cr a cairo context
  * @returns True if a clip rectangle exists, False if all of cr is clipped and all drawing can be skipped  rect:return location for the clip, or None 
  */
export declare function cairoGetClipRectangle(cr: import('../cairo').Context): [boolean, import('../Gdk').Rectangle];
/**
  * Retrieves the Gdk.DrawingContext that created the Cairo context cr.
  * @param cr a Cairo context
  * @returns a Gdk.DrawingContext, if any is set 
  */
export declare function cairoGetDrawingContext(cr: import('../cairo').Context): import('../Gdk').DrawingContext | null;
/**
  * Adds the given rectangle to the current path of cr.
  * @param cr a cairo context
  * @param rectangle a Gdk.Rectangle 
  */
export declare function cairoRectangle(cr: import('../cairo').Context, rectangle: import('../Gdk').Rectangle): void;
/**
  * Adds the given region to the current path of cr.
  * @param cr a cairo context
  * @param region a cairo.Region 
  */
export declare function cairoRegion(cr: import('../cairo').Context, region: import('../cairo').Region): void;
/**
  * Creates region that describes covers the area where the given surface is more than 50% opaque.
  * @param surface a cairo surface
  * @returns A cairo.Region; must be freed with cairo_region_destroy() 
  */
export declare function cairoRegionCreateFromSurface(surface: import('../cairo').Surface): import('../cairo').Region;
/**
  * Sets the specified Gdk.Color as the source color of cr.
  * @param cr a cairo context
  * @param color a Gdk.Color 
  */
export declare function cairoSetSourceColor(cr: import('../cairo').Context, color: import('../Gdk').Color): void;
/**
  * Sets the given pixbuf as the source pattern for cr.
  * @param cr a cairo context
  * @param pixbuf a GdkPixbuf.Pixbuf
  * @param pixbufX X coordinate of location to place upper left corner of pixbuf
  * @param pixbufY Y coordinate of location to place upper left corner of pixbuf 
  */
export declare function cairoSetSourcePixbuf(cr: import('../cairo').Context, pixbuf: import('../GdkPixbuf').Pixbuf, pixbufX: number, pixbufY: number): void;
/**
  * Sets the specified Gdk.RGBA as the source color of cr.
  * @param cr a cairo context
  * @param rgba a Gdk.RGBA 
  */
export declare function cairoSetSourceRgba(cr: import('../cairo').Context, rgba: import('../Gdk').RGBA): void;
/**
  * Sets the given window as the source pattern for cr.
  * @param cr a cairo context
  * @param window a Gdk.Window
  * @param x X coordinate of location to place upper left corner of window
  * @param y Y coordinate of location to place upper left corner of window 
  */
export declare function cairoSetSourceWindow(cr: import('../cairo').Context, window: import('../Gdk').Window, x: number, y: number): void;
/**
  * Creates an image surface with the same contents as the pixbuf.
  * @param pixbuf a GdkPixbuf.Pixbuf
  * @param scale the scale of the new surface, or 0 to use same as window
  * @param forWindow The window this will be drawn to, or None
  * @returns a new cairo surface, must be freed with cairo_surface_destroy() 
  */
export declare function cairoSurfaceCreateFromPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf, scale: number, forWindow: import('../Gdk').Window | null): import('../cairo').Surface;
/**
  * 
  * @param spec the string specifying the color
  * @returns Gdk.Color or None if the parsing didn’t succeed 
  */
export declare function colorParse(spec: string): import('../Gdk').Color | null;
/**
  * Disables multidevice support in GDK. This call must happen prior to Gdk.Display.open(), gtk_init(), gtk_init_with_args() or gtk_init_check() in order to take effect. 
  */
export declare function disableMultidevice(): void;
/**
  * Aborts a drag without dropping.
  * @param context a Gdk.DragContext
  * @param time the timestamp for this operation 
  */
export declare function dragAbort(context: import('../Gdk').DragContext, time: number): void;
/**
  * Starts a drag and creates a new drag context for it. This function assumes that the drag is controlled by the client pointer device, use Gdk.drag_begin_for_device() to begin a drag with a different device.
  * @param window the source window for this drag.
  * @param targets the offered targets, as list of Gdk.Atoms
  * @returns a newly created Gdk.DragContext 
  */
export declare function dragBegin(window: import('../Gdk').Window, targets: import('../Gdk').Atom): import('../Gdk').DragContext;
/**
  * Starts a drag and creates a new drag context for it.
  * @param window the source window for this drag
  * @param device the device that controls this drag
  * @param targets the offered targets, as list of Gdk.Atoms
  * @returns a newly created Gdk.DragContext 
  */
export declare function dragBeginForDevice(window: import('../Gdk').Window, device: import('../Gdk').Device, targets: import('../Gdk').Atom): import('../Gdk').DragContext;
/**
  * Starts a drag and creates a new drag context for it.
  * @param window the source window for this drag
  * @param device the device that controls this drag
  * @param targets the offered targets, as list of Gdk.Atoms
  * @param xRoot the x coordinate where the drag nominally started
  * @param yRoot the y coordinate where the drag nominally started
  * @returns a newly created Gdk.DragContext 
  */
export declare function dragBeginFromPoint(window: import('../Gdk').Window, device: import('../Gdk').Device, targets: import('../Gdk').Atom, xRoot: number, yRoot: number): import('../Gdk').DragContext;
/**
  * Drops on the current destination.
  * @param context a Gdk.DragContext
  * @param time the timestamp for this operation 
  */
export declare function dragDrop(context: import('../Gdk').DragContext, time: number): void;
/**
  * Inform GDK if the drop ended successfully. Passing False for success may trigger a drag cancellation animation.
  * @param context a Gdk.DragContext
  * @param success whether the drag was ultimatively successful 
  */
export declare function dragDropDone(context: import('../Gdk').DragContext, success: boolean): void;
/**
  * Returns whether the dropped data has been successfully transferred. This function is intended to be used while handling a Gdk.EventType.DROP_FINISHED event, its return value is meaningless at other times.
  * @param context a Gdk.DragContext
  * @returns True if the drop was successful. 
  */
export declare function dragDropSucceeded(context: import('../Gdk').DragContext): boolean;
/**
  * Finds the destination window and DND protocol to use at the given pointer position.
  * @param context a Gdk.DragContext
  * @param dragWindow a window which may be at the pointer position, but should be ignored, since it is put up by the drag source as an icon
  * @param screen the screen where the destination window is sought
  * @param xRoot the x position of the pointer in root coordinates
  * @param yRoot the y position of the pointer in root coordinates
  * @returns dest_window:location to store the destination window in protocol:location to store the DND protocol in 
  */
export declare function dragFindWindowForScreen(context: import('../Gdk').DragContext, dragWindow: import('../Gdk').Window, screen: import('../Gdk').Screen, xRoot: number, yRoot: number): [import('../Gdk').Window, import('../Gdk').DragProtocol];
/**
  * Returns the selection atom for the current source window.
  * @param context a Gdk.DragContext.
  * @returns the selection atom, or %GDK_NONE 
  */
export declare function dragGetSelection(context: import('../Gdk').DragContext): import('../Gdk').Atom;
/**
  * Updates the drag context when the pointer moves or the set of actions changes.
  * @param context a Gdk.DragContext
  * @param destWindow the new destination window, obtained by gdk_drag_find_window()
  * @param protocol the DND protocol in use, obtained by gdk_drag_find_window()
  * @param xRoot the x position of the pointer in root coordinates
  * @param yRoot the y position of the pointer in root coordinates
  * @param suggestedAction the suggested action
  * @param possibleActions the possible actions
  * @param time the timestamp for this operation 
  */
export declare function dragMotion(context: import('../Gdk').DragContext, destWindow: import('../Gdk').Window, protocol: import('../Gdk').DragProtocol, xRoot: number, yRoot: number, suggestedAction: import('../Gdk').DragAction, possibleActions: import('../Gdk').DragAction, time: number): boolean;
/**
  * Selects one of the actions offered by the drag source.
  * @param context a Gdk.DragContext
  * @param action the selected action which will be taken when a drop happens, or 0 to indicate that a drop will not be accepted
  * @param time the timestamp for this operation 
  */
export declare function dragStatus(context: import('../Gdk').DragContext, action: import('../Gdk').DragAction, time: number): void;
/**
  * Ends the drag operation after a drop.
  * @param context a Gdk.DragContext
  * @param success True if the data was successfully received
  * @param time the timestamp for this operation 
  */
export declare function dropFinish(context: import('../Gdk').DragContext, success: boolean, time: number): void;
/**
  * Accepts or rejects a drop.
  * @param context a Gdk.DragContext
  * @param accepted True if the drop is accepted
  * @param time the timestamp for this operation 
  */
export declare function dropReply(context: import('../Gdk').DragContext, accepted: boolean, time: number): void;
/**
  * Removes an error trap pushed with Gdk.error_trap_push(). May block until an error has been definitively received or not received from the X server. Gdk.error_trap_pop_ignored() is preferred if you don’t need to know whether an error occurred, because it never has to block. If you don’t need the return value of Gdk.error_trap_pop(), use Gdk.error_trap_pop_ignored().
  * @returns X error code or 0 on success 
  */
export declare function errorTrapPop(): number;
/**
  * Removes an error trap pushed with Gdk.error_trap_push(), but without bothering to wait and see whether an error occurred.  If an error arrives later asynchronously that was triggered while the trap was pushed, that error will be ignored. 
  */
export declare function errorTrapPopIgnored(): void;
/**
  * This function allows X errors to be trapped instead of the normal behavior of exiting the application. It should only be used if it is not possible to avoid the X error in any other way. Errors are ignored on all Gdk.Display currently known to the Gdk.DisplayManager. If you don’t care which error happens and just want to ignore everything, pop with Gdk.error_trap_pop_ignored(). If you need the error code, use Gdk.error_trap_pop() which may have to block and wait for the error to arrive from the X server. 
  */
export declare function errorTrapPush(): void;
/**
  * Checks all open displays for a Gdk.Event to process,to be processed on, fetching events from the windowing system if necessary. See Gdk.Display.get_event().
  * @returns the next Gdk.Event to be processed, or None if no events are pending. The returned Gdk.Event should be freed with Gdk.Event.free(). 
  */
export declare function eventGet(): import('../Gdk').Event | null;
/**
  * Sets the function to call to handle all events from GDK.
  * @param func the function to call to handle events from GDK.
  * @param data user data to pass to the function. 
  */
export declare function eventHandlerSet(func: import('../Gdk').eventFunc, data: Object | null): void;
/**
  * If there is an event waiting in the event queue of some open display, returns a copy of it. See Gdk.Display.peek_event().
  * @returns a copy of the first Gdk.Event on some event queue, or None if no events are in any queues. The returned Gdk.Event should be freed with Gdk.Event.free(). 
  */
export declare function eventPeek(): import('../Gdk').Event | null;
/**
  * Request more motion notifies if event is a motion notify hint event.
  * @param event a valid Gdk.Event 
  */
export declare function eventRequestMotions(event: import('../Gdk').EventMotion): void;
/**
  * If both events contain X/Y information, this function will return True and return in angle the relative angle from event1 to event2. The rotation direction for positive angles is from the positive X axis towards the positive Y axis.
  * @param event1 first Gdk.Event
  * @param event2 second Gdk.Event
  * @returns True if the angle could be calculated.   angle:return location for the relative angle between both events 
  */
export declare function eventsGetAngle(event1: import('../Gdk').Event, event2: import('../Gdk').Event): [boolean, number];
/**
  * If both events contain X/Y information, the center of both coordinates will be returned in x and y.
  * @param event1 first Gdk.Event
  * @param event2 second Gdk.Event
  * @returns True if the center could be calculated.   x:return location for the X coordinate of the center y:return location for the Y coordinate of the center 
  */
export declare function eventsGetCenter(event1: import('../Gdk').Event, event2: import('../Gdk').Event): [boolean, number, number];
/**
  * If both events have X/Y information, the distance between both coordinates (as in a straight line going from event1 to event2) will be returned.
  * @param event1 first Gdk.Event
  * @param event2 second Gdk.Event
  * @returns True if the distance could be calculated.   distance:return location for the distance 
  */
export declare function eventsGetDistance(event1: import('../Gdk').Event, event2: import('../Gdk').Event): [boolean, number];
/**
  * Checks if any events are ready to be processed for any display.
  * @returns True if any events are pending. 
  */
export declare function eventsPending(): boolean;
/**
  * Flushes the output buffers of all display connections and waits until all requests have been processed. This is rarely needed by applications. 
  */
export declare function flush(): void;
/**
  * Obtains the root window (parent all other windows are inside) for the default display and screen.
  * @returns the default root window 
  */
export declare function getDefaultRootWindow(): import('../Gdk').Window;
/**
  * Gets the name of the display, which usually comes from the DISPLAY environment variable or the --display command line option.
  * @returns the name of the display. 
  */
export declare function getDisplay(): string;
/**
  * Gets the display name specified in the command line arguments passed to Gdk.init() or Gdk.parse_args(), if any.
  * @returns the display name, if specified explicitly, otherwise None this string is owned by GTK+ and must not be modified or freed. 
  */
export declare function getDisplayArgName(): string | null;
/**
  * Gets the program class. Unless the program class has explicitly been set with Gdk.set_program_class() or with the --class commandline option, the default value is the program name (determined with GLib.get_prgname()) with the first character converted to uppercase.
  * @returns the program class. 
  */
export declare function getProgramClass(): string;
/**
  * Gets whether event debugging output is enabled.
  * @returns True if event debugging output is enabled. 
  */
export declare function getShowEvents(): boolean;
export declare function glErrorQuark(): number;
/**
  * Initializes the GDK library and connects to the windowing system. If initialization fails, a warning message is output and the application terminates with a call to exit(1).
  * @param argv the array of command line arguments.
  * @returns the array of command line arguments. 
  */
export declare function init(argv: string): string[];
/**
  * Initializes the GDK library and connects to the windowing system, returning True on success.
  * @param argv the array of command line arguments.
  * @returns True if initialization succeeded.  argv:the array of command line arguments. 
  */
export declare function initCheck(argv: string): [boolean, string[]];
/**
  * Grabs the keyboard so that all events are passed to this application until the keyboard is ungrabbed with Gdk.keyboard_ungrab(). This overrides any previous keyboard grab by this client.
  * @param window the Gdk.Window which will own the grab (the grab window).
  * @param ownerEvents if False then all keyboard events are reported with respect to window. If True then keyboard events for this application are reported as normal, but keyboard events outside this application are reported with respect to window. Both key press and key release events are always reported, independant of the event mask set by the application.
  * @param time a timestamp from a Gdk.Event, or Gdk.CURRENT_TIME if no timestamp is available.
  * @returns Gdk.GrabStatus.SUCCESS if the grab was successful. 
  */
export declare function keyboardGrab(window: import('../Gdk').Window, ownerEvents: boolean, time: number): import('../Gdk').GrabStatus;
/**
  * Ungrabs the keyboard on the default display, if it is grabbed by this application.
  * @param time a timestamp from a Gdk.Event, or Gdk.CURRENT_TIME if no timestamp is available. 
  */
export declare function keyboardUngrab(time: number): void;
/**
  * Obtains the upper- and lower-case versions of the keyval symbol. Examples of keyvals are Gdk.KEY_a, #GDK_KEY_Enter, Gdk.KEY_F1, etc.
  * @param symbol a keyval
  * @returns lower:return location for lowercase version of symbol upper:return location for uppercase version of symbol 
  */
export declare function keyvalConvertCase(symbol: number): [number, number];
/**
  * Converts a key name to a key value.
  * @param keyvalName a key name
  * @returns the corresponding key value, or Gdk.KEY_VoidSymbol if the key name is not a valid key 
  */
export declare function keyvalFromName(keyvalName: string): number;
/**
  * Returns True if the given key value is in lower case.
  * @param keyval a key value.
  * @returns True if keyval is in lower case, or if keyval is not subject to case conversion. 
  */
export declare function keyvalIsLower(keyval: number): boolean;
/**
  * Returns True if the given key value is in upper case.
  * @param keyval a key value.
  * @returns True if keyval is in upper case, or if keyval is not subject to case conversion. 
  */
export declare function keyvalIsUpper(keyval: number): boolean;
/**
  * Converts a key value into a symbolic name.
  * @param keyval a key value
  * @returns a string containing the name of the key, or None if keyval is not a valid key. The string should not be modified. 
  */
export declare function keyvalName(keyval: number): string | null;
/**
  * Converts a key value to lower case, if applicable.
  * @param keyval a key value.
  * @returns the lower case form of keyval, or keyval itself if it is already in lower case or it is not subject to case conversion. 
  */
export declare function keyvalToLower(keyval: number): number;
/**
  * Convert from a GDK key symbol to the corresponding ISO10646 (Unicode) character.
  * @param keyval a GDK key symbol
  * @returns the corresponding unicode character, or 0 if there is no corresponding character. 
  */
export declare function keyvalToUnicode(keyval: number): number;
/**
  * Converts a key value to upper case, if applicable.
  * @param keyval a key value.
  * @returns the upper case form of keyval, or keyval itself if it is already in upper case or it is not subject to case conversion. 
  */
export declare function keyvalToUpper(keyval: number): number;
/**
  * Lists the available visuals for the default screen. (See Gdk.Screen.list_visuals()) A visual describes a hardware image data format. For example, a visual might support 24-bit color, or 8-bit color, and might expect pixels to be in a certain format.
  * @returns a list of visuals; the list must be freed, but not its contents 
  */
export declare function listVisuals(): import('../Gdk').Visual[];
/**
  * Indicates to the GUI environment that the application has finished loading. If the applications opens windows, this function is normally called after opening the application’s initial set of windows. 
  */
export declare function notifyStartupComplete(): void;
/**
  * Indicates to the GUI environment that the application has finished loading, using a given identifier.
  * @param startupId a startup-notification identifier, for which notification process should be completed 
  */
export declare function notifyStartupCompleteWithId(startupId: string): void;
/**
  * Gets the window that window is embedded in.
  * @param window a Gdk.Window
  * @returns the embedding Gdk.Window, or None if window is not an mbedded offscreen window 
  */
export declare function offscreenWindowGetEmbedder(window: import('../Gdk').Window): import('../Gdk').Window | null;
/**
  * Gets the offscreen surface that an offscreen window renders into. If you need to keep this around over window resizes, you need to add a reference to it.
  * @param window a Gdk.Window
  * @returns The offscreen surface, or None if not offscreen 
  */
export declare function offscreenWindowGetSurface(window: import('../Gdk').Window): import('../cairo').Surface | null;
/**
  * Sets window to be embedded in embedder.
  * @param window a Gdk.Window
  * @param embedder the Gdk.Window that window gets embedded in 
  */
export declare function offscreenWindowSetEmbedder(window: import('../Gdk').Window, embedder: import('../Gdk').Window): void;
/**
  * Creates a Pango.Context for the default GDK screen.
  * @returns a new Pango.Context for the default display 
  */
export declare function pangoContextGet(): import('../Pango').Context;
/**
  * Creates a Pango.Context for display.
  * @param display the Gdk.Display for which the context is to be created
  * @returns a new Pango.Context for display 
  */
export declare function pangoContextGetForDisplay(display: import('../Gdk').Display): import('../Pango').Context;
/**
  * Creates a Pango.Context for screen.
  * @param screen the Gdk.Screen for which the context is to be created.
  * @returns a new Pango.Context for screen 
  */
export declare function pangoContextGetForScreen(screen: import('../Gdk').Screen): import('../Pango').Context;
/**
  * Parse command line arguments, and store for future use by calls to Gdk.Display.open().
  * @param argv the array of command line arguments.
  * @returns the array of command line arguments. 
  */
export declare function parseArgs(argv: string): string[];
/**
  * Transfers image data from a cairo.Surface and converts it to an RGB(A) representation inside a GdkPixbuf.Pixbuf. This allows you to efficiently read individual pixels from cairo surfaces. For Gdk.Windows, use Gdk.pixbuf_get_from_window() instead.
  * @param surface surface to copy from
  * @param srcX Source X coordinate within surface
  * @param srcY Source Y coordinate within surface
  * @param width Width in pixels of region to get
  * @param height Height in pixels of region to get
  * @returns A newly-created pixbuf with a reference count of 1, or None on error 
  */
export declare function pixbufGetFromSurface(surface: import('../cairo').Surface, srcX: number, srcY: number, width: number, height: number): import('../GdkPixbuf').Pixbuf | null;
/**
  * Transfers image data from a Gdk.Window and converts it to an RGB(A) representation inside a GdkPixbuf.Pixbuf. In other words, copies image data from a server-side drawable to a client-side RGB(A) buffer. This allows you to efficiently read individual pixels on the client side.
  * @param window Source window
  * @param srcX Source X coordinate within window
  * @param srcY Source Y coordinate within window
  * @param width Width in pixels of region to get
  * @param height Height in pixels of region to get
  * @returns A newly-created pixbuf with a reference count of 1, or None on error 
  */
export declare function pixbufGetFromWindow(window: import('../Gdk').Window, srcX: number, srcY: number, width: number, height: number): import('../GdkPixbuf').Pixbuf | null;
/**
  * Grabs the pointer (usually a mouse) so that all events are passed to this application until the pointer is ungrabbed with Gdk.pointer_ungrab(), or the grab window becomes unviewable. This overrides any previous pointer grab by this client.
  * @param window the Gdk.Window which will own the grab (the grab window).
  * @param ownerEvents if False then all pointer events are reported with respect to window and are only reported if selected by event_mask. If True then pointer events for this application are reported as normal, but pointer events outside this application are reported with respect to window and only if selected by event_mask. In either mode, unreported events are discarded.
  * @param eventMask specifies the event mask, which is used in accordance with owner_events. Note that only pointer events (i.e. button and motion events) may be selected.
  * @param confineTo If non-None, the pointer will be confined to this window during the grab. If the pointer is outside confine_to, it will automatically be moved to the closest edge of confine_to and enter and leave events will be generated as necessary.
  * @param cursor the cursor to display while the grab is active. If this is None then the normal cursors are used for window and its descendants, and the cursor for window is used for all other windows.
  * @param time the timestamp of the event which led to this pointer grab. This usually comes from a Gdk.EventButton struct, though Gdk.CURRENT_TIME can be used if the time isn’t known.
  * @returns Gdk.GrabStatus.SUCCESS if the grab was successful. 
  */
export declare function pointerGrab(window: import('../Gdk').Window, ownerEvents: boolean, eventMask: import('../Gdk').EventMask, confineTo: import('../Gdk').Window | null, cursor: import('../Gdk').Cursor | null, time: number): import('../Gdk').GrabStatus;
/**
  * Returns True if the pointer on the default display is currently grabbed by this application.
  * @returns True if the pointer is currently grabbed by this application. 
  */
export declare function pointerIsGrabbed(): boolean;
/**
  * Ungrabs the pointer on the default display, if it is grabbed by this application.
  * @param time a timestamp from a Gdk.Event, or Gdk.CURRENT_TIME if no timestamp is available. 
  */
export declare function pointerUngrab(time: number): void;
/**
  * Prepare for parsing command line arguments for GDK. This is not public API and should not be used in application code. 
  */
export declare function preParseLibgtkOnly(): void;
/**
  * Deletes a property from a window.
  * @param window a Gdk.Window
  * @param property the property to delete 
  */
export declare function propertyDelete(window: import('../Gdk').Window, property: import('../Gdk').Atom): void;
/**
  * Retrieves a portion of the contents of a property. If the property does not exist, then the function returns False, and %GDK_NONE will be stored in actual_property_type.
  * @param window a Gdk.Window
  * @param property the property to retrieve
  * @param type the desired property type, or %GDK_NONE, if any type of data is acceptable. If this does not match the actual type, then actual_format and actual_length will be filled in, a warning will be printed to stderr and no data will be returned.
  * @param offset the offset into the property at which to begin retrieving data, in 4 byte units.
  * @param length the length of the data to retrieve in bytes.  Data is considered to be retrieved in 4 byte chunks, so length will be rounded up to the next highest 4 byte boundary (so be careful not to pass a value that might overflow when rounded up).
  * @param pdelete if True, delete the property after retrieving the data.
  * @returns True if data was successfully received and stored in data, otherwise False.   actual_property_type:  location to store the actual type of the property. actual_format:location to store the actual return format of the data; either 8, 16 or 32 bits. data:location to store a pointer to the data. The retrieved data should be freed with GLib.free() when you are finished using it. 
  */
export declare function propertyGet(window: import('../Gdk').Window, property: import('../Gdk').Atom, type: import('../Gdk').Atom, offset: number, length: number, pdelete: number): [boolean, import('../Gdk').Atom, number, Int8Array];
/**
  * This function returns the available bit depths for the default screen. It’s equivalent to listing the visuals (Gdk.list_visuals()) and then looking at the depth field in each visual, removing duplicates.
  * @returns return location for available depths 
  */
export declare function queryDepths(): number[];
/**
  * This function returns the available visual types for the default screen. It’s equivalent to listing the visuals (Gdk.list_visuals()) and then looking at the type field in each visual, removing duplicates.
  * @returns return location for the available visual types 
  */
export declare function queryVisualTypes(): import('../Gdk').VisualType[];
/**
  * intersect(src2: Gdk.Rectangle) -> (bool, dest: Gdk.Rectangle) 
  */
export declare function rectangleIntersect(): void;
/**
  * union(src2: Gdk.Rectangle) -> dest: Gdk.Rectangle 
  */
export declare function rectangleUnion(): void;
/**
  * Retrieves the contents of a selection in a given form.
  * @param requestor a Gdk.Window.
  * @param selection an atom identifying the selection to get the contents of.
  * @param target the form in which to retrieve the selection.
  * @param time the timestamp to use when retrieving the selection. The selection owner may refuse the request if it did not own the selection at the time indicated by the timestamp. 
  */
export declare function selectionConvert(requestor: import('../Gdk').Window, selection: import('../Gdk').Atom, target: import('../Gdk').Atom, time: number): void;
/**
  * Determines the owner of the given selection.
  * @param selection an atom indentifying a selection.
  * @returns if there is a selection owner for this window, and it is a window known to the current process, the Gdk.Window that owns the selection, otherwise None. Note that the return value may be owned by a different process if a foreign window was previously created for that window, but a new foreign window will never be created by this call. 
  */
export declare function selectionOwnerGet(selection: import('../Gdk').Atom): import('../Gdk').Window | null;
/**
  * Determine the owner of the given selection.
  * @param display a Gdk.Display
  * @param selection an atom indentifying a selection
  * @returns if there is a selection owner for this window, and it is a window known to the current process, the Gdk.Window that owns the selection, otherwise None. 
  */
export declare function selectionOwnerGetForDisplay(display: import('../Gdk').Display, selection: import('../Gdk').Atom): import('../Gdk').Window | null;
/**
  * Sets the owner of the given selection.
  * @param owner a Gdk.Window or None to indicate that the the owner for the given should be unset.
  * @param selection an atom identifying a selection.
  * @param time timestamp to use when setting the selection. If this is older than the timestamp given last time the owner was set for the given selection, the request will be ignored.
  * @param sendEvent if True, and the new owner is different from the current owner, the current owner will be sent a SelectionClear event.
  * @returns True if the selection owner was successfully changed to owner, otherwise False. 
  */
export declare function selectionOwnerSet(owner: import('../Gdk').Window | null, selection: import('../Gdk').Atom, time: number, sendEvent: boolean): boolean;
/**
  * Sets the Gdk.Window owner as the current owner of the selection selection.
  * @param display the Gdk.Display
  * @param owner a Gdk.Window or None to indicate that the owner for the given should be unset
  * @param selection an atom identifying a selection
  * @param time timestamp to use when setting the selection If this is older than the timestamp given last time the owner was set for the given selection, the request will be ignored
  * @param sendEvent if True, and the new owner is different from the current owner, the current owner will be sent a SelectionClear event
  * @returns True if the selection owner was successfully changed to owner, otherwise False. 
  */
export declare function selectionOwnerSetForDisplay(display: import('../Gdk').Display, owner: import('../Gdk').Window | null, selection: import('../Gdk').Atom, time: number, sendEvent: boolean): boolean;
/**
  * Sends a response to SelectionRequest event.
  * @param requestor window to which to deliver response.
  * @param selection selection that was requested.
  * @param target target that was selected.
  * @param property property in which the selection owner stored the data, or %GDK_NONE to indicate that the request was rejected.
  * @param time timestamp. 
  */
export declare function selectionSendNotify(requestor: import('../Gdk').Window, selection: import('../Gdk').Atom, target: import('../Gdk').Atom, property: import('../Gdk').Atom, time: number): void;
/**
  * Send a response to SelectionRequest event.
  * @param display the Gdk.Display where requestor is realized
  * @param requestor window to which to deliver response
  * @param selection selection that was requested
  * @param target target that was selected
  * @param property property in which the selection owner stored the data, or %GDK_NONE to indicate that the request was rejected
  * @param time timestamp 
  */
export declare function selectionSendNotifyForDisplay(display: import('../Gdk').Display, requestor: import('../Gdk').Window, selection: import('../Gdk').Atom, target: import('../Gdk').Atom, property: import('../Gdk').Atom, time: number): void;
/**
  * Sets a list of backends that GDK should try to use.
  * @param backends a comma-separated list of backends 
  */
export declare function setAllowedBackends(backends: string): void;
/**
  * Set the double click time for the default display. See Gdk.Display.set_double_click_time(). See also Gdk.Display.set_double_click_distance(). Applications should not set this, it is a global user-configured setting.
  * @param msec double click time in milliseconds (thousandths of a second) 
  */
export declare function setDoubleClickTime(msec: number): void;
/**
  * Sets the program class. The X11 backend uses the program class to set the class name part of the WM_CLASS property on toplevel windows; see the ICCCM.
  * @param programClass a string. 
  */
export declare function setProgramClass(programClass: string): void;
/**
  * Sets whether a trace of received events is output. Note that GTK+ must be compiled with debugging (that is, configured using the --enable-debug option) to use this option.
  * @param showEvents True to output event debugging information. 
  */
export declare function setShowEvents(showEvents: boolean): void;
/**
  * Obtains a desktop-wide setting, such as the double-click time, for the default screen. See Gdk.Screen.get_setting().
  * @param name the name of the setting.
  * @param value location to store the value of the setting.
  * @returns True if the setting existed and a value was stored in value, False otherwise. 
  */
export declare function settingGet(name: string, value: import('../GObject').Value): boolean;
export declare function synthesizeWindowState(window: import('../Gdk').Window, unsetFlags: import('../Gdk').WindowState, setFlags: import('../Gdk').WindowState): void;
/**
  * Retrieves a pixel from window to force the windowing system to carry out any pending rendering commands.
  * @param window a mapped Gdk.Window 
  */
export declare function testRenderSync(window: import('../Gdk').Window): void;
/**
  * This function is intended to be used in GTK+ test programs. It will warp the mouse pointer to the given (x,`y`) coordinates within window and simulate a button press or release event. Because the mouse pointer needs to be warped to the target location, use of this function outside of test programs that run in their own virtual windowing system (e.g. Xvfb) is not recommended.
  * @param window a Gdk.Window to simulate a button event for
  * @param x x coordinate within window for the button event
  * @param y y coordinate within window for the button event
  * @param button Number of the pointer button for the event, usually 1, 2 or 3
  * @param modifiers Keyboard modifiers the event is setup with
  * @param buttonPressrelease either Gdk.EventType.BUTTON_PRESS or Gdk.EventType.BUTTON_RELEASE
  * @returns whether all actions necessary for a button event simulation were carried out successfully 
  */
export declare function testSimulateButton(window: import('../Gdk').Window, x: number, y: number, button: number, modifiers: import('../Gdk').ModifierType, buttonPressrelease: import('../Gdk').EventType): boolean;
/**
  * This function is intended to be used in GTK+ test programs. If (x,`y`) are > (-1,-1), it will warp the mouse pointer to the given (x,`y`) coordinates within window and simulate a key press or release event.
  * @param window a Gdk.Window to simulate a key event for
  * @param x x coordinate within window for the key event
  * @param y y coordinate within window for the key event
  * @param keyval A GDK keyboard value
  * @param modifiers Keyboard modifiers the event is setup with
  * @param keyPressrelease either Gdk.EventType.KEY_PRESS or Gdk.EventType.KEY_RELEASE
  * @returns whether all actions necessary for a key event simulation were carried out successfully 
  */
export declare function testSimulateKey(window: import('../Gdk').Window, x: number, y: number, keyval: number, modifiers: import('../Gdk').ModifierType, keyPressrelease: import('../Gdk').EventType): boolean;
/**
  * Converts a text property in the given encoding to a list of UTF-8 strings.
  * @param display a Gdk.Display
  * @param encoding an atom representing the encoding of the text
  * @param format the format of the property
  * @param text the text to convert
  * @returns the number of strings in the resulting list   list:location to store the list of strings or None. The list should be freed with GLib.strfreev(). 
  */
export declare function textPropertyToUtf8ListForDisplay(display: import('../Gdk').Display, encoding: import('../Gdk').Atom, format: number, text: Int8Array): [number, string[]];
/**
  * Adds a function to be called whenever there are no higher priority events pending.  If the function returns False it is automatically removed from the list of event sources and will not be called again.
  * @param priority the priority of the idle source. Typically this will be in the range between GLib.PRIORITY_DEFAULT_IDLE and GLib.PRIORITY_HIGH_IDLE
  * @param function function to call
  * @param data data to pass to function
  * @returns the ID (greater than 0) of the event source. 
  */
export declare function threadsAddIdle(priority: number, fn: import('../GLib').sourceFunc, data: Object | null): number;
/**
  * Sets a function to be called at regular intervals holding the GDK lock, with the given priority.  The function is called repeatedly until it returns False, at which point the timeout is automatically destroyed and the function will not be called again.  The notify function is called when the timeout is destroyed.  The first call to the function will be at the end of the first interval.
  * @param priority the priority of the timeout source. Typically this will be in the range between GLib.PRIORITY_DEFAULT_IDLE and GLib.PRIORITY_HIGH_IDLE.
  * @param interval the time between calls to the function, in milliseconds (1/1000ths of a second)
  * @param function function to call
  * @param data data to pass to function
  * @returns the ID (greater than 0) of the event source. 
  */
export declare function threadsAddTimeout(priority: number, interval: number, fn: import('../GLib').sourceFunc, data: Object | null): number;
/**
  * A variant of Gdk.threads_add_timeout() with second-granularity. See GLib.timeout_add_seconds() for a discussion of why it is a good idea to use this function if you don’t need finer granularity.
  * @param priority the priority of the timeout source. Typically this will be in the range between GLib.PRIORITY_DEFAULT_IDLE and GLib.PRIORITY_HIGH_IDLE.
  * @param interval the time between calls to the function, in seconds
  * @param function function to call
  * @param data data to pass to function
  * @returns the ID (greater than 0) of the event source. 
  */
export declare function threadsAddTimeoutSeconds(priority: number, interval: number, fn: import('../GLib').sourceFunc, data: Object | null): number;
/**
  * This function marks the beginning of a critical section in which GDK and GTK+ functions can be called safely and without causing race conditions. Only one thread at a time can be in such a critial section. 
  */
export declare function threadsEnter(): void;
/**
  * Initializes GDK so that it can be used from multiple threads in conjunction with Gdk.threads_enter() and Gdk.threads_leave(). 
  */
export declare function threadsInit(): void;
/**
  * Leaves a critical region begun with Gdk.threads_enter(). 
  */
export declare function threadsLeave(): void;
/**
  * Convert from a ISO10646 character to a key symbol.
  * @param wc a ISO10646 encoded character
  * @returns the corresponding GDK key symbol, if one exists. or, if there is no corresponding symbol, wc | 0x01000000 
  */
export declare function unicodeToKeyval(wc: number): number;
/**
  * Converts an UTF-8 string into the best possible representation as a STRING. The representation of characters not in STRING is not specified; it may be as pseudo-escape sequences \x{ABCD}, or it may be in some other form of approximation.
  * @param str a UTF-8 string
  * @returns the newly-allocated string, or None if the conversion failed. (It should not fail for any properly formed UTF-8 string unless system limits like memory or file descriptors are exceeded.) 
  */
export declare function utf8ToStringTarget(str: string): string | null;
