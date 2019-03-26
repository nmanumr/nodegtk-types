import * as GObject from '../GObject';
export declare interface Window extends GObject.Object { }

export declare abstract class Window {
  /**
    * Obtains the window underneath the mouse pointer, returning the location of that window in win_x, win_y. Returns None if the window under the mouse pointer is not known to GDK (if the window belongs to another application and a Gdk.Window hasn’t been created for it with gdk_window_foreign_new())
    * @returns window under the mouse pointer  win_x:return location for origin of the window under the pointer win_y:return location for origin of the window under the pointer 
    */
  static atPointer(): [import('../Gdk').Window, number, number];
  /**
    * Constrains a desired width and height according to a set of geometry hints (such as minimum and maximum size).
    * @param geometry a Gdk.Geometry structure
    * @param flags a mask indicating what portions of geometry are set
    * @param width desired width of window
    * @param height desired height of the window
    * @returns new_width:location to store resulting width new_height:location to store resulting height 
    */
  static constrainSize(geometry: import('../Gdk').Geometry, flags: import('../Gdk').WindowHints, width: number, height: number): [number, number];
  /**
    * Creates a new Gdk.Window using the attributes from attributes. See Gdk.WindowAttr and Gdk.WindowAttributesType for more details.  Note: to use this on displays other than the default display, parent must be specified.
    * @param parent a Gdk.Window, or None to create the window as a child of the default root window for the default display.
    * @param attributes attributes of the new window
    * @param attributesMask mask indicating which fields in attributes are valid
    * @returns the new Gdk.Window 
    */
  static new(parent: import('../Gdk').Window | null, attributes: import('../Gdk').WindowAttr, attributesMask: import('../Gdk').WindowAttributesType): import('../Gdk').Window;
  /**
    * Calls Gdk.Window.process_updates() for all windows (see Gdk.Window) in the application. 
    */
  static processAllUpdates(): void;
  /**
    * With update debugging enabled, calls to Gdk.Window.invalidate_region() clear the invalidated region of the screen to a noticeable color, and GDK pauses for a short time before sending exposes to windows during Gdk.Window.process_updates().  The net effect is that you can see the invalid region for each window and watch redraws as they occur. This allows you to diagnose inefficiencies in your application.
    * @param setting True to turn on update debugging 
    */
  static setDebugUpdates(setting: boolean): void;
  /**
    * Emits a short beep associated to self in the appropriate display, if supported. Otherwise, emits a short beep on the display just as Gdk.Display.beep(). 
    */
  beep(): void;
  /**
    * Indicates that you are beginning the process of redrawing region on self, and provides you with a Gdk.DrawingContext.
    * @param region a Cairo region
    * @returns a Gdk.DrawingContext context that should be used to draw the contents of the window; the returned context is owned by GDK. 
    */
  beginDrawFrame(region: import('../cairo').Region): import('../Gdk').DrawingContext;
  /**
    * Begins a window move operation (for a toplevel window).
    * @param button the button being used to drag, or 0 for a keyboard-initiated drag
    * @param rootX root window X coordinate of mouse click that began the drag
    * @param rootY root window Y coordinate of mouse click that began the drag
    * @param timestamp timestamp of mouse click that began the drag 
    */
  beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void;
  /**
    * Begins a window move operation (for a toplevel window). You might use this function to implement a “window move grip,” for example. The function works best with window managers that support the Extended Window Manager Hints but has a fallback implementation for other window managers.
    * @param device the device used for the operation
    * @param button the button being used to drag, or 0 for a keyboard-initiated drag
    * @param rootX root window X coordinate of mouse click that began the drag
    * @param rootY root window Y coordinate of mouse click that began the drag
    * @param timestamp timestamp of mouse click that began the drag 
    */
  beginMoveDragForDevice(device: import('../Gdk').Device, button: number, rootX: number, rootY: number, timestamp: number): void;
  /**
    * A convenience wrapper around Gdk.Window.begin_paint_region() which creates a rectangular region for you. See Gdk.Window.begin_paint_region() for details.
    * @param rectangle rectangle you intend to draw to 
    */
  beginPaintRect(rectangle: import('../Gdk').Rectangle): void;
  /**
    * Indicates that you are beginning the process of redrawing region. A backing store (offscreen buffer) large enough to contain region will be created. The backing store will be initialized with the background color or background surface for self. Then, all drawing operations performed on self will be diverted to the backing store.  When you call Gdk.Window.end_paint(), the backing store will be copied to self, making it visible onscreen. Only the part of self contained in region will be modified; that is, drawing operations are clipped to region.
    * @param region region you intend to draw to 
    */
  beginPaintRegion(region: import('../cairo').Region): void;
  /**
    * Begins a window resize operation (for a toplevel window).
    * @param edge the edge or corner from which the drag is started
    * @param button the button being used to drag, or 0 for a keyboard-initiated drag
    * @param rootX root window X coordinate of mouse click that began the drag
    * @param rootY root window Y coordinate of mouse click that began the drag
    * @param timestamp timestamp of mouse click that began the drag (use Gdk.Event.get_time()) 
    */
  beginResizeDrag(edge: import('../Gdk').WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void;
  /**
    * Begins a window resize operation (for a toplevel window). You might use this function to implement a “window resize grip,” for example; in fact #GtkStatusbar uses it. The function works best with window managers that support the Extended Window Manager Hints but has a fallback implementation for other window managers.
    * @param edge the edge or corner from which the drag is started
    * @param device the device used for the operation
    * @param button the button being used to drag, or 0 for a keyboard-initiated drag
    * @param rootX root window X coordinate of mouse click that began the drag
    * @param rootY root window Y coordinate of mouse click that began the drag
    * @param timestamp timestamp of mouse click that began the drag (use Gdk.Event.get_time()) 
    */
  beginResizeDragForDevice(edge: import('../Gdk').WindowEdge, device: import('../Gdk').Device, button: number, rootX: number, rootY: number, timestamp: number): void;
  cairoCreate(): void;
  /**
    * Does nothing, present only for compatiblity. 
    */
  configureFinished(): void;
  /**
    * Transforms window coordinates from a parent window to a child window, where the parent window is the normal parent as returned by Gdk.Window.get_parent() for normal windows, and the window’s embedder as returned by Gdk.offscreen_window_get_embedder() for offscreen windows.
    * @param parentX X coordinate in parent’s coordinate system
    * @param parentY Y coordinate in parent’s coordinate system
    * @returns x:return location for X coordinate in child’s coordinate system y:return location for Y coordinate in child’s coordinate system 
    */
  coordsFromParent(parentX: number, parentY: number): [number, number];
  /**
    * Transforms window coordinates from a child window to its parent window, where the parent window is the normal parent as returned by Gdk.Window.get_parent() for normal windows, and the window’s embedder as returned by Gdk.offscreen_window_get_embedder() for offscreen windows.
    * @param x X coordinate in child’s coordinate system
    * @param y Y coordinate in child’s coordinate system
    * @returns parent_x:return location for X coordinate in parent’s coordinate system, or None parent_y:return location for Y coordinate in parent’s coordinate system, or None 
    */
  coordsToParent(x: number, y: number): [number, number];
  /**
    * Creates a new Gdk.GLContext matching the framebuffer format to the visual of the Gdk.Window. The context is disconnected from any particular window or surface.
    * @returns the newly created Gdk.GLContext, or None on error 
    */
  createGlContext(): import('../Gdk').GLContext;
  /**
    * Create a new image surface that is efficient to draw on the given self.
    * @param format the format for the new surface
    * @param width width of the new surface
    * @param height height of the new surface
    * @param scale the scale of the new surface, or 0 to use same as self
    * @returns a pointer to the newly allocated surface. The caller owns the surface and should call cairo_surface_destroy() when done with it. This function always returns a valid pointer, but it will return a pointer to a “nil” surface if other is already in an error state or any other error occurs. 
    */
  createSimilarImageSurface(format: number, width: number, height: number, scale: number): import('../cairo').Surface;
  /**
    * Create a new surface that is as compatible as possible with the given self. For example the new surface will have the same fallback resolution and font options as self. Generally, the new surface will also use the same backend as self, unless that is not possible for some reason. The type of the returned surface may be examined with cairo_surface_get_type().
    * @param content the content for the new surface
    * @param width width of the new surface
    * @param height height of the new surface
    * @returns a pointer to the newly allocated surface. The caller owns the surface and should call cairo_surface_destroy() when done with it. This function always returns a valid pointer, but it will return a pointer to a “nil” surface if other is already in an error state or any other error occurs. 
    */
  createSimilarSurface(content: import('../cairo').Content, width: number, height: number): import('../cairo').Surface;
  /**
    * Attempt to deiconify (unminimize) self. On X11 the window manager may choose to ignore the request to deiconify. When using GTK+, use gtk_window_deiconify() instead of the Gdk.Window variant. Or better yet, you probably want to use gtk_window_present(), which raises the window, focuses it, unminimizes it, and puts it on the current desktop. 
    */
  deiconify(): void;
  /**
    * Destroys the window system resources associated with self and decrements self’s reference count. The window system resources for all children of self are also destroyed, but the children’s reference counts are not decremented. 
    */
  destroy(): void;
  destroyNotify(): void;
  /**
    * Does nothing, present only for compatiblity. 
    */
  enableSynchronizedConfigure(): void;
  /**
    * Indicates that the drawing of the contents of self started with gdk_window_begin_frame() has been completed.
    * @param context the Gdk.DrawingContext created by Gdk.Window.begin_draw_frame() 
    */
  endDrawFrame(context: import('../Gdk').DrawingContext): void;
  /**
    * Indicates that the backing store created by the most recent call to Gdk.Window.begin_paint_region() should be copied onscreen and deleted, leaving the next-most-recent backing store or no backing store at all as the active paint region. See Gdk.Window.begin_paint_region() for full details. 
    */
  endPaint(): void;
  /**
    * Tries to ensure that there is a window-system native window for this Gdk.Window. This may fail in some situations, returning False.
    * @returns True if the window has a native window, False otherwise 
    */
  ensureNative(): boolean;
  /**
    * This function does nothing. 
    */
  flush(): void;
  /**
    * Sets keyboard focus to self. In most cases, gtk_window_present() should be used on a #GtkWindow, rather than calling this function.
    * @param timestamp timestamp of the event triggering the window focus 
    */
  focus(timestamp: number): void;
  /**
    * Temporarily freezes a window and all its descendants such that it won’t receive expose events.  The window will begin receiving expose events again when Gdk.Window.thaw_toplevel_updates_libgtk_only() is called. If Gdk.Window.freeze_toplevel_updates_libgtk_only() has been called more than once, Gdk.Window.thaw_toplevel_updates_libgtk_only() must be called an equal number of times to begin processing exposes. 
    */
  freezeToplevelUpdatesLibgtkOnly(): void;
  /**
    * Temporarily freezes a window such that it won’t receive expose events.  The window will begin receiving expose events again when Gdk.Window.thaw_updates() is called. If Gdk.Window.freeze_updates() has been called more than once, Gdk.Window.thaw_updates() must be called an equal number of times to begin processing exposes. 
    */
  freezeUpdates(): void;
  /**
    * Moves the window into fullscreen mode. This means the window covers the entire screen and is above any panels or task bars. 
    */
  fullscreen(): void;
  /**
    * Moves the window into fullscreen mode on the given monitor. This means the window covers the entire screen and is above any panels or task bars.
    * @param monitor Which monitor to display fullscreen on. 
    */
  fullscreenOnMonitor(monitor: number): void;
  /**
    * This function informs GDK that the geometry of an embedded offscreen window has changed. This is necessary for GDK to keep track of which offscreen window the pointer is in. 
    */
  geometryChanged(): void;
  /**
    * Determines whether or not the desktop environment shuld be hinted that the window does not want to receive input focus.
    * @returns whether or not the window should receive input focus. 
    */
  getAcceptFocus(): boolean;
  /**
    * Gets the pattern used to clear the background on self.
    * @returns The pattern to use for the background or None if there is no background. 
    */
  getBackgroundPattern(): import('../cairo').Pattern | null;
  /**
    * Gets the list of children of self known to GDK. This function only returns children created via GDK, so for example it’s useless when used with the root window; it only returns windows an application created itself.
    * @returns list of child windows inside self 
    */
  getChildren(): import('../Gdk').Window[];
  /**
    * Gets the list of children of self known to GDK with a particular user_data set on it.
    * @param userData user data to look for
    * @returns list of child windows inside self 
    */
  getChildrenWithUserData(userData: Object | null): import('../Gdk').Window[];
  /**
    * Computes the region of a window that potentially can be written to by drawing primitives. This region may not take into account other factors such as if the window is obscured by other windows, but no area outside of this region will be affected by drawing primitives.
    * @returns a cairo.Region. This must be freed with cairo_region_destroy() when you are done. 
    */
  getClipRegion(): import('../cairo').Region;
  /**
    * Determines whether self is composited.
    * @returns True if the window is composited. 
    */
  getComposited(): boolean;
  /**
    * Retrieves a Gdk.Cursor pointer for the cursor currently set on the specified Gdk.Window, or None.  If the return value is None then there is no custom cursor set on the specified window, and it is using the cursor for its parent window.
    * @returns a Gdk.Cursor, or None. The returned object is owned by the Gdk.Window and should not be unreferenced directly. Use Gdk.Window.set_cursor() to unset the cursor of the window 
    */
  getCursor(): import('../Gdk').Cursor | null;
  /**
    * Returns the decorations set on the Gdk.Window with Gdk.Window.set_decorations().
    * @returns True if the window has decorations set, False otherwise.  decorations:The window decorations will be written here 
    */
  getDecorations(): [boolean, import('../Gdk').WMDecoration];
  /**
    * Retrieves a Gdk.Cursor pointer for the device currently set on the specified Gdk.Window, or None.  If the return value is None then there is no custom cursor set on the specified window, and it is using the cursor for its parent window.
    * @param device a master, pointer Gdk.Device.
    * @returns a Gdk.Cursor, or None. The returned object is owned by the Gdk.Window and should not be unreferenced directly. Use Gdk.Window.set_cursor() to unset the cursor of the window 
    */
  getDeviceCursor(device: import('../Gdk').Device): import('../Gdk').Cursor | null;
  /**
    * Returns the event mask for self corresponding to an specific device.
    * @param device a Gdk.Device.
    * @returns device event mask for self 
    */
  getDeviceEvents(device: import('../Gdk').Device): import('../Gdk').EventMask;
  /**
    * Obtains the current device position and modifier state. The position is given in coordinates relative to the upper left corner of self.
    * @param device pointer Gdk.Device to query to.
    * @returns The window underneath device (as with Gdk.Device.get_window_at_position()), or None if the window is not known to GDK.  x:return location for the X coordinate of device, or None. y:return location for the Y coordinate of device, or None. mask:return location for the modifier mask, or None. 
    */
  getDevicePosition(device: import('../Gdk').Device): [import('../Gdk').Window | null, number, number, import('../Gdk').ModifierType];
  /**
    * Obtains the current device position in doubles and modifier state. The position is given in coordinates relative to the upper left corner of self.
    * @param device pointer Gdk.Device to query to.
    * @returns The window underneath device (as with Gdk.Device.get_window_at_position()), or None if the window is not known to GDK.  x:return location for the X coordinate of device, or None. y:return location for the Y coordinate of device, or None. mask:return location for the modifier mask, or None. 
    */
  getDevicePositionDouble(device: import('../Gdk').Device): [import('../Gdk').Window | null, number, number, import('../Gdk').ModifierType];
  /**
    * Gets the Gdk.Display associated with a Gdk.Window.
    * @returns the Gdk.Display associated with self 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Finds out the DND protocol supported by a window.
    * @returns the supported DND protocol.  target:location of the window where the drop should happen. This may be self or a proxy window, or None if self does not support Drag and Drop. 
    */
  getDragProtocol(): [import('../Gdk').DragProtocol, import('../Gdk').Window];
  /**
    * Obtains the parent of self, as known to GDK. Works like Gdk.Window.get_parent() for normal windows, but returns the window’s embedder for offscreen windows.
    * @returns effective parent of self 
    */
  getEffectiveParent(): import('../Gdk').Window;
  /**
    * Gets the toplevel window that’s an ancestor of self.
    * @returns the effective toplevel window containing self 
    */
  getEffectiveToplevel(): import('../Gdk').Window;
  /**
    * Get the current event compression setting for this window.
    * @returns True if motion events will be compressed 
    */
  getEventCompression(): boolean;
  /**
    * Gets the event mask for self for all master input devices. See Gdk.Window.set_events().
    * @returns event mask for self 
    */
  getEvents(): import('../Gdk').EventMask;
  /**
    * Determines whether or not the desktop environment should be hinted that the window does not want to receive input focus when it is mapped.
    * @returns whether or not the window wants to receive input focus when it is mapped. 
    */
  getFocusOnMap(): boolean;
  /**
    * Gets the frame clock for the window. The frame clock for a window never changes unless the window is reparented to a new toplevel window.
    * @returns the frame clock 
    */
  getFrameClock(): import('../Gdk').FrameClock;
  /**
    * Obtains the bounding box of the window, including window manager titlebar/borders if any. The frame position is given in root window coordinates. To get the position of the window itself (rather than the frame) in root window coordinates, use Gdk.Window.get_origin().
    * @returns rectangle to fill with bounding box of the window frame 
    */
  getFrameExtents(): import('../Gdk').Rectangle;
  /**
    * Obtains the Gdk.FullscreenMode of the self.
    * @returns The Gdk.FullscreenMode applied to the window when fullscreen. 
    */
  getFullscreenMode(): import('../Gdk').FullscreenMode;
  /**
    * Any of the return location arguments to this function may be None, if you aren’t interested in getting the value of that field.
    * @returns x:return location for X coordinate of window (relative to its parent) y:return location for Y coordinate of window (relative to its parent) width:return location for width of window height:return location for height of window 
    */
  getGeometry(): [number, number, number, number];
  /**
    * Returns the group leader window for self. See Gdk.Window.set_group().
    * @returns the group leader window for self 
    */
  getGroup(): import('../Gdk').Window;
  /**
    * Returns the height of the given self.
    * @returns The height of self 
    */
  getHeight(): number;
  /**
    * Determines whether or not the window manager is hinted that self has modal behaviour.
    * @returns whether or not the window has the modal hint set. 
    */
  getModalHint(): boolean;
  /**
    * Obtains the position of a window in root window coordinates. (Compare with Gdk.Window.get_position() and Gdk.Window.get_geometry() which return the position of a window relative to its parent window.)
    * @returns not meaningful, ignore  x:return location for X coordinate y:return location for Y coordinate 
    */
  getOrigin(): [number, number, number];
  /**
    * Obtains the parent of self, as known to GDK. Does not query the X server; thus this returns the parent as passed to Gdk.Window.new(), not the actual parent. This should never matter unless you’re using Xlib calls mixed with GDK calls on the X11 platform. It may also matter for toplevel windows, because the window manager may choose to reparent them.
    * @returns parent of self 
    */
  getParent(): import('../Gdk').Window;
  /**
    * Returns whether input to the window is passed through to the window below. 
    */
  getPassThrough(): boolean;
  /**
    * Obtains the current pointer position and modifier state. The position is given in coordinates relative to the upper left corner of self.
    * @returns the window containing the pointer (as with Gdk.Window.at_pointer()), or None if the window containing the pointer isn’t known to GDK  x:return location for X coordinate of pointer or None to not return the X coordinate y:return location for Y coordinate of pointer or None to not return the Y coordinate mask:return location for modifier mask or None to not return the modifier mask 
    */
  getPointer(): [import('../Gdk').Window | null, number, number, import('../Gdk').ModifierType];
  /**
    * Obtains the position of the window as reported in the most-recently-processed Gdk.EventConfigure. Contrast with Gdk.Window.get_geometry() which queries the X server for the current window position, regardless of which events have been received or processed.
    * @returns x:X coordinate of window y:Y coordinate of window 
    */
  getPosition(): [number, number];
  /**
    * Obtains the position of a window position in root window coordinates. This is similar to Gdk.Window.get_origin() but allows you to pass in any position in the window, not just the origin.
    * @param x X coordinate in window
    * @param y Y coordinate in window
    * @returns root_x:return location for X coordinate root_y:return location for Y coordinate 
    */
  getRootCoords(x: number, y: number): [number, number];
  /**
    * Obtains the top-left corner of the window manager frame in root window coordinates.
    * @returns x:return location for X position of window frame y:return location for Y position of window frame 
    */
  getRootOrigin(): [number, number];
  /**
    * Returns the internal scale factor that maps from window coordiantes to the actual device pixels. On traditional systems this is 1, but on very high density outputs this can be a higher value (often 2).
    * @returns the scale factor 
    */
  getScaleFactor(): number;
  /**
    * Gets the Gdk.Screen associated with a Gdk.Window.
    * @returns the Gdk.Screen associated with self 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Returns the event mask for self corresponding to the device class specified by source.
    * @param source a Gdk.InputSource to define the source class.
    * @returns source event mask for self 
    */
  getSourceEvents(source: import('../Gdk').InputSource): import('../Gdk').EventMask;
  /**
    * Gets the bitwise OR of the currently active window state flags, from the Gdk.WindowState enumeration.
    * @returns window state bitfield 
    */
  getState(): import('../Gdk').WindowState;
  /**
    * Returns True if the window is aware of the existence of multiple devices.
    * @returns True if the window handles multidevice features. 
    */
  getSupportMultidevice(): boolean;
  /**
    * Gets the toplevel window that’s an ancestor of self.
    * @returns the toplevel window containing self 
    */
  getToplevel(): import('../Gdk').Window;
  /**
    * This function returns the type hint set for a window.
    * @returns The type hint set for self 
    */
  getTypeHint(): import('../Gdk').WindowTypeHint;
  /**
    * Transfers ownership of the update area from self to the caller of the function. That is, after calling this function, self will no longer have an invalid/dirty region; the update area is removed from self and handed to you. If a window has no update area, Gdk.Window.get_update_area() returns None. You are responsible for calling cairo_region_destroy() on the returned region if it’s non-None.
    * @returns the update area for self 
    */
  getUpdateArea(): import('../cairo').Region;
  /**
    * Retrieves the user data for self, which is normally the widget that self belongs to. See Gdk.Window.set_user_data().
    * @returns return location for user data 
    */
  getUserData(): Object;
  /**
    * Computes the region of the self that is potentially visible. This does not necessarily take into account if the window is obscured by other windows, but no area outside of this region is visible.
    * @returns a cairo.Region. This must be freed with cairo_region_destroy() when you are done. 
    */
  getVisibleRegion(): import('../cairo').Region;
  /**
    * Gets the Gdk.Visual describing the pixel format of self.
    * @returns a Gdk.Visual 
    */
  getVisual(): import('../Gdk').Visual;
  /**
    * Returns the width of the given self.
    * @returns The width of self 
    */
  getWidth(): number;
  /**
    * Gets the type of the window. See Gdk.WindowType.
    * @returns type of window 
    */
  getWindowType(): import('../Gdk').WindowType;
  /**
    * Checks whether the window has a native window or not. Note that you can use Gdk.Window.ensure_native() if a native window is needed.
    * @returns True if the self has a native window, False otherwise. 
    */
  hasNative(): boolean;
  /**
    * For toplevel windows, withdraws them, so they will no longer be known to the window manager; for all windows, unmaps them, so they won’t be displayed. Normally done automatically as part of gtk_widget_hide(). 
    */
  hide(): void;
  /**
    * Asks to iconify (minimize) self. The window manager may choose to ignore the request, but normally will honor it. Using gtk_window_iconify() is preferred, if you have a #GtkWindow widget. 
    */
  iconify(): void;
  /**
    * Like Gdk.Window.shape_combine_region(), but the shape applies only to event handling. Mouse events which happen while the pointer position corresponds to an unset bit in the mask will be passed on the window below self.
    * @param shapeRegion region of window to be non-transparent
    * @param offsetX X position of shape_region in self coordinates
    * @param offsetY Y position of shape_region in self coordinates 
    */
  inputShapeCombineRegion(shapeRegion: import('../cairo').Region, offsetX: number, offsetY: number): void;
  /**
    * Adds region to the update area for self. The update area is the region that needs to be redrawn, or “dirty region.” The call Gdk.Window.process_updates() sends one or more expose events to the window, which together cover the entire update area. An application would normally redraw the contents of self in response to those expose events.
    * @param region a cairo.Region
    * @param childFunc function to use to decide if to recurse to a child, None means never recurse.
    * @param userData data passed to child_func 
    */
  invalidateMaybeRecurse(region: import('../cairo').Region, childFunc: import('../Gdk').windowChildFunc | null, userData: Object | null): void;
  /**
    * A convenience wrapper around Gdk.Window.invalidate_region() which invalidates a rectangular region. See Gdk.Window.invalidate_region() for details.
    * @param rect rectangle to invalidate or None to invalidate the whole window
    * @param invalidateChildren whether to also invalidate child windows 
    */
  invalidateRect(rect: import('../Gdk').Rectangle | null, invalidateChildren: boolean): void;
  /**
    * Adds region to the update area for self. The update area is the region that needs to be redrawn, or “dirty region.” The call Gdk.Window.process_updates() sends one or more expose events to the window, which together cover the entire update area. An application would normally redraw the contents of self in response to those expose events.
    * @param region a cairo.Region
    * @param invalidateChildren True to also invalidate child windows 
    */
  invalidateRegion(region: import('../cairo').Region, invalidateChildren: boolean): void;
  /**
    * Check to see if a window is destroyed..
    * @returns True if the window is destroyed 
    */
  isDestroyed(): boolean;
  /**
    * Determines whether or not the window is an input only window.
    * @returns True if self is input only 
    */
  isInputOnly(): boolean;
  /**
    * Determines whether or not the window is shaped.
    * @returns True if self is shaped 
    */
  isShaped(): boolean;
  /**
    * Check if the window and all ancestors of the window are mapped. (This is not necessarily “viewable” in the X sense, since we only check as far as we have GDK window parents, not to the root window.)
    * @returns True if the window is viewable 
    */
  isViewable(): boolean;
  /**
    * Checks whether the window has been mapped (with Gdk.Window.show() or Gdk.Window.show_unraised()).
    * @returns True if the window is mapped 
    */
  isVisible(): boolean;
  /**
    * Lowers self to the bottom of the Z-order (stacking order), so that other windows with the same parent window appear above self. This is true whether or not the other windows are visible. 
    */
  lower(): void;
  /**
    * If you call this during a paint (e.g. between Gdk.Window.begin_paint_region() and Gdk.Window.end_paint() then GDK will mark the current clip region of the window as being drawn. This is required when mixing GL rendering via Gdk.cairo_draw_from_gl() and cairo rendering, as otherwise GDK has no way of knowing when something paints over the GL-drawn regions.
    * @param cr a cairo.Context 
    */
  markPaintFromClip(cr: import('../cairo').Context): void;
  /**
    * Maximizes the window. If the window was already maximized, then this function does nothing. 
    */
  maximize(): void;
  /**
    * Merges the input shape masks for any child windows into the input shape mask for self. i.e. the union of all input masks for self and its children will become the new input mask for self. See Gdk.Window.input_shape_combine_region(). 
    */
  mergeChildInputShapes(): void;
  /**
    * Merges the shape masks for any child windows into the shape mask for self. i.e. the union of all masks for self and its children will become the new mask for self. See Gdk.Window.shape_combine_region(). 
    */
  mergeChildShapes(): void;
  /**
    * Repositions a window relative to its parent window. For toplevel windows, window managers may ignore or modify the move; you should probably use gtk_window_move() on a #GtkWindow widget anyway, instead of using GDK functions. For child windows, the move will reliably succeed.
    * @param x X coordinate relative to window’s parent
    * @param y Y coordinate relative to window’s parent 
    */
  move(x: number, y: number): void;
  /**
    * Move the part of self indicated by region by dy pixels in the Y direction and dx pixels in the X direction. The portions of region that not covered by the new position of region are invalidated.
    * @param region The cairo.Region to move
    * @param dx Amount to move in the X direction
    * @param dy Amount to move in the Y direction 
    */
  moveRegion(region: import('../cairo').Region, dx: number, dy: number): void;
  /**
    * Equivalent to calling Gdk.Window.move() and Gdk.Window.resize(), except that both operations are performed at once, avoiding strange visual effects. (i.e. the user may be able to see the window first move, then resize, if you don’t use Gdk.Window.move_resize().)
    * @param x new X position relative to window’s parent
    * @param y new Y position relative to window’s parent
    * @param width new width
    * @param height new height 
    */
  moveResize(x: number, y: number, width: number, height: number): void;
  /**
    * Moves self to rect, aligning their anchor points.
    * @param rect the destination Gdk.Rectangle to align self with
    * @param rectAnchor the point on rect to align with self’s anchor point
    * @param windowAnchor the point on self to align with rect’s anchor point
    * @param anchorHints positioning hints to use when limited on space
    * @param rectAnchorDx horizontal offset to shift self, i.e. rect’s anchor point
    * @param rectAnchorDy vertical offset to shift self, i.e. rect’s anchor point 
    */
  moveToRect(rect: import('../Gdk').Rectangle, rectAnchor: import('../Gdk').Gravity, windowAnchor: import('../Gdk').Gravity, anchorHints: import('../Gdk').AnchorHints, rectAnchorDx: number, rectAnchorDy: number): void;
  /**
    * Like Gdk.Window.get_children(), but does not copy the list of children, so the list does not need to be freed.
    * @returns a reference to the list of child windows in self 
    */
  peekChildren(): import('../Gdk').Window[];
  /**
    * Sends one or more expose events to self. The areas in each expose event will cover the entire update area for the window (see Gdk.Window.invalidate_region() for details). Normally GDK calls Gdk.Window.process_all_updates() on your behalf, so there’s no need to call this function unless you want to force expose events to be delivered immediately and synchronously (vs. the usual case, where GDK delivers them in an idle handler). Occasionally this is useful to produce nicer scrolling behavior, for example.
    * @param updateChildren whether to also process updates for child windows 
    */
  processUpdates(updateChildren: boolean): void;
  /**
    * Raises self to the top of the Z-order (stacking order), so that other windows with the same parent window appear below self. This is true whether or not the windows are visible. 
    */
  raise(): void;
  /**
    * Registers a window as a potential drop destination. 
    */
  registerDnd(): void;
  /**
    * Reparents self into the given new_parent. The window being reparented will be unmapped as a side effect.
    * @param newParent new parent to move self into
    * @param x X location inside the new parent
    * @param y Y location inside the new parent 
    */
  reparent(newParent: import('../Gdk').Window, x: number, y: number): void;
  /**
    * Resizes self; for toplevel windows, asks the window manager to resize the window. The window manager may not allow the resize. When using GTK+, use gtk_window_resize() instead of this low-level GDK function.
    * @param width new width of the window
    * @param height new height of the window 
    */
  resize(width: number, height: number): void;
  /**
    * Changes the position of  self in the Z-order (stacking order), so that it is above sibling (if above is True) or below sibling (if above is False).
    * @param sibling a Gdk.Window that is a sibling of self, or None
    * @param above a boolean 
    */
  restack(sibling: import('../Gdk').Window | null, above: boolean): void;
  /**
    * Scroll the contents of self, both pixels and children, by the given amount. self itself does not move. Portions of the window that the scroll operation brings in from offscreen areas are invalidated. The invalidated region may be bigger than what would strictly be necessary.
    * @param dx Amount to scroll in the X direction
    * @param dy Amount to scroll in the Y direction 
    */
  scroll(dx: number, dy: number): void;
  /**
    * Setting accept_focus to False hints the desktop environment that the window doesn’t want to receive input focus.
    * @param acceptFocus True if the window should receive input focus 
    */
  setAcceptFocus(acceptFocus: boolean): void;
  /**
    * Sets the background color of self.
    * @param color a Gdk.Color 
    */
  setBackground(color: import('../Gdk').Color): void;
  /**
    * Sets the background of self.
    * @param pattern a pattern to use, or None 
    */
  setBackgroundPattern(pattern: import('../cairo').Pattern | null): void;
  /**
    * Sets the background color of self.
    * @param rgba a Gdk.RGBA color 
    */
  setBackgroundRgba(rgba: import('../Gdk').RGBA): void;
  /**
    * Sets the input shape mask of self to the union of input shape masks for all children of self, ignoring the input shape mask of self itself. Contrast with Gdk.Window.merge_child_input_shapes() which includes the input shape mask of self in the masks to be merged. 
    */
  setChildInputShapes(): void;
  /**
    * Sets the shape mask of self to the union of shape masks for all children of self, ignoring the shape mask of self itself. Contrast with Gdk.Window.merge_child_shapes() which includes the shape mask of self in the masks to be merged. 
    */
  setChildShapes(): void;
  /**
    * Sets a Gdk.Window as composited, or unsets it. Composited windows do not automatically have their contents drawn to the screen. Drawing is redirected to an offscreen buffer and an expose event is emitted on the parent of the composited window. It is the responsibility of the parent’s expose handler to manually merge the off-screen content onto the screen in whatever way it sees fit.
    * @param composited True to set the window as composited 
    */
  setComposited(composited: boolean): void;
  /**
    * Sets the default mouse pointer for a Gdk.Window.
    * @param cursor a cursor 
    */
  setCursor(cursor: import('../Gdk').Cursor | null): void;
  /**
    * “Decorations” are the features the window manager adds to a toplevel Gdk.Window. This function sets the traditional Motif window manager hints that tell the window manager which decorations you would like your window to have. Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of using the GDK function directly.
    * @param decorations decoration hint mask 
    */
  setDecorations(decorations: import('../Gdk').WMDecoration): void;
  /**
    * Sets a specific Gdk.Cursor for a given device when it gets inside self. Use Gdk.Cursor.new_for_display() or Gdk.Cursor.new_from_pixbuf() to create the cursor. To make the cursor invisible, use Gdk.CursorType.BLANK_CURSOR. Passing None for the cursor argument to Gdk.Window.set_cursor() means that self will use the cursor of its parent window. Most windows should use this default.
    * @param device a master, pointer Gdk.Device
    * @param cursor a Gdk.Cursor 
    */
  setDeviceCursor(device: import('../Gdk').Device, cursor: import('../Gdk').Cursor): void;
  /**
    * Sets the event mask for a given device (Normally a floating device, not attached to any visible pointer) to self. For example, an event mask including Gdk.EventMask.BUTTON_PRESS_MASK means the window should report button press events. The event mask is the bitwise OR of values from the Gdk.EventMask enumeration.
    * @param device Gdk.Device to enable events for.
    * @param eventMask event mask for self 
    */
  setDeviceEvents(device: import('../Gdk').Device, eventMask: import('../Gdk').EventMask): void;
  /**
    * Determines whether or not extra unprocessed motion events in the event queue can be discarded. If True only the most recent event will be delivered.
    * @param eventCompression True if motion events should be compressed 
    */
  setEventCompression(eventCompression: boolean): void;
  /**
    * The event mask for a window determines which events will be reported for that window from all master input devices. For example, an event mask including Gdk.EventMask.BUTTON_PRESS_MASK means the window should report button press events. The event mask is the bitwise OR of values from the Gdk.EventMask enumeration.
    * @param eventMask event mask for self 
    */
  setEvents(eventMask: import('../Gdk').EventMask): void;
  /**
    * Setting focus_on_map to False hints the desktop environment that the window doesn’t want to receive input focus when it is mapped. focus_on_map should be turned off for windows that aren’t triggered interactively (such as popups from network activity).
    * @param focusOnMap True if the window should receive input focus when mapped 
    */
  setFocusOnMap(focusOnMap: boolean): void;
  /**
    * Specifies whether the self should span over all monitors (in a multi-head setup) or only the current monitor when in fullscreen mode.
    * @param mode fullscreen mode 
    */
  setFullscreenMode(mode: import('../Gdk').FullscreenMode): void;
  /**
    * Sets hints about the window management functions to make available via buttons on the window frame.
    * @param functions bitmask of operations to allow on self 
    */
  setFunctions(functions: import('../Gdk').WMFunction): void;
  /**
    * Sets the geometry hints for self. Hints flagged in geom_mask are set, hints not flagged in geom_mask are unset. To unset all hints, use a geom_mask of 0 and a geometry of None.
    * @param geometry geometry hints
    * @param geomMask bitmask indicating fields of geometry to pay attention to 
    */
  setGeometryHints(geometry: import('../Gdk').Geometry, geomMask: import('../Gdk').WindowHints): void;
  /**
    * Sets the group leader window for self. By default, GDK sets the group leader for all toplevel windows to a global window implicitly created by GDK. With this function you can override this default.
    * @param leader group leader window, or None to restore the default group leader window 
    */
  setGroup(leader: import('../Gdk').Window | null): void;
  /**
    * Sets a list of icons for the window. One of these will be used to represent the window when it has been iconified. The icon is usually shown in an icon box or some sort of task bar. Which icon size is shown depends on the window manager. The window manager can scale the icon  but setting several size icons can give better image quality since the window manager may only need to scale the icon by a small amount or not at all.
    * @param pixbufs A list of pixbufs, of different sizes. 
    */
  setIconList(pixbufs: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Windows may have a name used while minimized, distinct from the name they display in their titlebar. Most of the time this is a bad idea from a user interface standpoint. But you can set such a name with this function, if you like.
    * @param name name of window while iconified (minimized) 
    */
  setIconName(name: string | null): void;
  /**
    * Set if self must be kept above other windows. If the window was already above, then this function does nothing.
    * @param setting whether to keep self above other windows 
    */
  setKeepAbove(setting: boolean): void;
  /**
    * Set if self must be kept below other windows. If the window was already below, then this function does nothing.
    * @param setting whether to keep self below other windows 
    */
  setKeepBelow(setting: boolean): void;
  /**
    * The application can use this hint to tell the window manager that a certain window has modal behaviour. The window manager can use this information to handle modal windows in a special way.
    * @param modal True if the window is modal, False otherwise. 
    */
  setModalHint(modal: boolean): void;
  /**
    * Set self to render as partially transparent, with opacity 0 being fully transparent and 1 fully opaque. (Values of the opacity parameter are clamped to the [0,1] range.)
    * @param opacity opacity 
    */
  setOpacity(opacity: number): void;
  /**
    * For optimisation purposes, compositing window managers may like to not draw obscured regions of windows, or turn off blending during for these regions. With RGB windows with no transparency, this is just the shape of the window, but with ARGB32 windows, the compositor does not know what regions of the window are transparent or not.
    * @param region a region, or None 
    */
  setOpaqueRegion(region: import('../cairo').Region | null): void;
  /**
    * An override redirect window is not under the control of the window manager. This means it won’t have a titlebar, won’t be minimizable, etc. - it will be entirely under the control of the application. The window manager can’t see the override redirect window at all.
    * @param overrideRedirect True if window should be override redirect 
    */
  setOverrideRedirect(overrideRedirect: boolean): void;
  /**
    * Sets whether input to the window is passed through to the window below.
    * @param passThrough a boolean 
    */
  setPassThrough(passThrough: boolean): void;
  /**
    * When using GTK+, typically you should use gtk_window_set_role() instead of this low-level function.
    * @param role a string indicating its role 
    */
  setRole(role: string): void;
  /**
    * Newer GTK+ windows using client-side decorations use extra geometry around their frames for effects like shadows and invisible borders. Window managers that want to maximize windows or snap to edges need to know where the extents of the actual frame lie, so that users don’t feel like windows are snapping against random invisible edges.
    * @param left The left extent
    * @param right The right extent
    * @param top The top extent
    * @param bottom The bottom extent 
    */
  setShadowWidth(left: number, right: number, top: number, bottom: number): void;
  /**
    * Toggles whether a window should appear in a pager (workspace switcher, or other desktop utility program that displays a small thumbnail representation of the windows on the desktop). If a window’s semantic type as specified with Gdk.Window.set_type_hint() already fully describes the window, this function should not be called in addition, instead you should allow the window to be treated according to standard policy for its semantic type.
    * @param skipsPager True to skip the pager 
    */
  setSkipPagerHint(skipsPager: boolean): void;
  /**
    * Toggles whether a window should appear in a task list or window list. If a window’s semantic type as specified with Gdk.Window.set_type_hint() already fully describes the window, this function should not be called in addition, instead you should allow the window to be treated according to standard policy for its semantic type.
    * @param skipsTaskbar True to skip the taskbar 
    */
  setSkipTaskbarHint(skipsTaskbar: boolean): void;
  /**
    * Sets the event mask for any floating device (i.e. not attached to any visible pointer) that has the source defined as source. This event mask will be applied both to currently existing, newly added devices after this call, and devices being attached/detached.
    * @param source a Gdk.InputSource to define the source class.
    * @param eventMask event mask for self 
    */
  setSourceEvents(source: import('../Gdk').InputSource, eventMask: import('../Gdk').EventMask): void;
  /**
    * When using GTK+, typically you should use gtk_window_set_startup_id() instead of this low-level function.
    * @param startupId a string with startup-notification identifier 
    */
  setStartupId(startupId: string): void;
  /**
    * Used to set the bit gravity of the given window to static, and flag it so all children get static subwindow gravity. This is used if you are implementing scary features that involve deep knowledge of the windowing system. Don’t worry about it.
    * @param useStatic True to turn on static gravity
    * @returns False 
    */
  setStaticGravities(useStatic: boolean): boolean;
  /**
    * This function will enable multidevice features in self.
    * @param supportMultidevice True to enable multidevice support in self. 
    */
  setSupportMultidevice(supportMultidevice: boolean): void;
  /**
    * Sets the title of a toplevel window, to be displayed in the titlebar. If you haven’t explicitly set the icon name for the window (using Gdk.Window.set_icon_name()), the icon name will be set to title as well. title must be in UTF-8 encoding (as with all user-readable strings in GDK/GTK+). title may not be None.
    * @param title title of self 
    */
  setTitle(title: string): void;
  /**
    * Indicates to the window manager that self is a transient dialog associated with the application window parent. This allows the window manager to do things like center self on parent and keep self above parent.
    * @param parent another toplevel Gdk.Window 
    */
  setTransientFor(parent: import('../Gdk').Window): void;
  /**
    * The application can use this call to provide a hint to the window manager about the functionality of a window. The window manager can use this information when determining the decoration and behaviour of the window.
    * @param hint A hint of the function this window will have 
    */
  setTypeHint(hint: import('../Gdk').WindowTypeHint): void;
  /**
    * Toggles whether a window needs the user’s urgent attention.
    * @param urgent True if the window is urgent 
    */
  setUrgencyHint(urgent: boolean): void;
  /**
    * For most purposes this function is deprecated in favor of GObject.Object.set_data(). However, for historical reasons GTK+ stores the #GtkWidget that owns a Gdk.Window as user data on the Gdk.Window. So, custom widget implementations should use this function for that. If GTK+ receives an event for a Gdk.Window, and the user data for the window is non-None, GTK+ will assume the user data is a #GtkWidget, and forward the event to that widget.
    * @param userData user data 
    */
  setUserData(userData: import('../GObject').Object | null): void;
  /**
    * Makes pixels in self outside shape_region be transparent, so that the window may be nonrectangular.
    * @param shapeRegion region of window to be non-transparent
    * @param offsetX X position of shape_region in self coordinates
    * @param offsetY Y position of shape_region in self coordinates 
    */
  shapeCombineRegion(shapeRegion: import('../cairo').Region | null, offsetX: number, offsetY: number): void;
  /**
    * Like Gdk.Window.show_unraised(), but also raises the window to the top of the window stack (moves the window to the front of the Z-order). 
    */
  show(): void;
  /**
    * Shows a Gdk.Window onscreen, but does not modify its stacking order. In contrast, Gdk.Window.show() will raise the window to the top of the window stack. 
    */
  showUnraised(): void;
  /**
    * Asks the windowing system to show the window menu. The window menu is the menu shown when right-clicking the titlebar on traditional windows managed by the window manager. This is useful for windows using client-side decorations, activating it with a right-click on the window decorations.
    * @param event a Gdk.Event to show the menu for
    * @returns True if the window menu was shown and False otherwise. 
    */
  showWindowMenu(event: import('../Gdk').Event): boolean;
  /**
    * “Pins” a window such that it’s on all workspaces and does not scroll with viewports, for window managers that have scrollable viewports. (When using #GtkWindow, gtk_window_stick() may be more useful.) 
    */
  stick(): void;
  /**
    * Thaws a window frozen with Gdk.Window.freeze_toplevel_updates_libgtk_only(). 
    */
  thawToplevelUpdatesLibgtkOnly(): void;
  /**
    * Thaws a window frozen with Gdk.Window.freeze_updates(). 
    */
  thawUpdates(): void;
  /**
    * Moves the window out of fullscreen mode. If the window was not fullscreen, does nothing. 
    */
  unfullscreen(): void;
  /**
    * Unmaximizes the window. If the window wasn’t maximized, then this function does nothing. 
    */
  unmaximize(): void;
  /**
    * Reverse operation for Gdk.Window.stick(); see Gdk.Window.stick(), and gtk_window_unstick(). 
    */
  unstick(): void;
  /**
    * Withdraws a window (unmaps it and asks the window manager to forget about it). This function is not really useful as Gdk.Window.hide() automatically withdraws toplevel windows before hiding them. 
    */
  withdraw(): void;
  /**
    * Cursor 
    */
  cursor: import('../Gdk').Cursor;
}

