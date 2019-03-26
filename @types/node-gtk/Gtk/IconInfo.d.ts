import * as GObject from '../GObject';
export declare interface IconInfo extends GObject.Object { }

/**
  * Contains information found when looking up an icon in
an icon theme. 
  */
export declare class IconInfo {
  /**
    * Creates a Gtk.IconInfo for a GdkPixbuf.Pixbuf.
    * @param iconTheme a Gtk.IconTheme
    * @param pixbuf the pixbuf to wrap in a Gtk.IconInfo
    * @returns a Gtk.IconInfo 
    */
  static newForPixbuf(iconTheme: import('../Gtk').IconTheme, pixbuf: import('../GdkPixbuf').Pixbuf): import('../Gtk').IconInfo;
  /**
    * This function is deprecated and always returns False.
    * @returns False  points:location to store pointer to an array of points, or None free the array of points with GLib.free(). 
    */
  getAttachPoints(): [boolean, import('../Gdk').Point[]];
  /**
    * Gets the base scale for the icon. The base scale is a scale for the icon that was specified by the icon theme creator. For instance an icon drawn for a high-dpi screen with window scale 2 for a base size of 32 will be 64 pixels tall and have a base scale of 2.
    * @returns the base scale 
    */
  getBaseScale(): number;
  /**
    * Gets the base size for the icon. The base size is a size for the icon that was specified by the icon theme creator. This may be different than the actual size of image; an example of this is small emblem icons that can be attached to a larger icon. These icons will be given the same base size as the larger icons to which they are attached.
    * @returns the base size, or 0, if no base size is known for the icon. 
    */
  getBaseSize(): number;
  /**
    * Gets the built-in image for this icon, if any. To allow GTK+ to use built in icon images, you must pass the Gtk.IconLookupFlags.USE_BUILTIN to Gtk.IconTheme.lookup_icon().
    * @returns the built-in image pixbuf, or None. No extra reference is added to the returned pixbuf, so if you want to keep it around, you must use GObject.Object.ref(). The returned image must not be modified. 
    */
  getBuiltinPixbuf(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * This function is deprecated and always returns None.
    * @returns None 
    */
  getDisplayName(): string;
  /**
    * This function is deprecated and always returns False.
    * @returns False  rectangle:Gdk.Rectangle in which to store embedded rectangle coordinates; coordinates are only stored when this function returns True. 
    */
  getEmbeddedRect(): [boolean, import('../Gdk').Rectangle];
  /**
    * Gets the filename for the icon. If the Gtk.IconLookupFlags.USE_BUILTIN flag was passed to Gtk.IconTheme.lookup_icon(), there may be no filename if a builtin icon is returned; in this case, you should use Gtk.IconInfo.get_builtin_pixbuf().
    * @returns the filename for the icon, or None if Gtk.IconInfo.get_builtin_pixbuf() should be used instead. The return value is owned by GTK+ and should not be modified or freed. 
    */
  getFilename(): string | null;
  /**
    * Checks if the icon is symbolic or not. This currently uses only the file name and not the file contents for determining this. This behaviour may change in the future.
    * @returns True if the icon is symbolic, False otherwise 
    */
  isSymbolic(): boolean;
  /**
    * Renders an icon previously looked up in an icon theme using Gtk.IconTheme.lookup_icon(); the size will be based on the size passed to Gtk.IconTheme.lookup_icon(). Note that the resulting pixbuf may not be exactly this size; an icon theme may have icons that differ slightly from their nominal sizes, and in addition GTK+ will avoid scaling icons that it considers sufficiently close to the requested size or for which the source image would have to be scaled up too far. (This maintains sharpness.). This behaviour can be changed by passing the Gtk.IconLookupFlags.FORCE_SIZE flag when obtaining the Gtk.IconInfo. If this flag has been specified, the pixbuf returned by this function will be scaled to the exact size.
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use GObject.Object.unref() to release your reference to the icon. 
    */
  loadIcon(): import('../GdkPixbuf').Pixbuf;
  /**
    * Asynchronously load, render and scale an icon previously looked up from the icon theme using Gtk.IconTheme.lookup_icon().
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  loadIconAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async icon load, see Gtk.IconInfo.load_icon_async().
    * @param res a Gio.AsyncResult
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use GObject.Object.unref() to release your reference to the icon. 
    */
  loadIconFinish(res: import('../Gio').AsyncResult): import('../GdkPixbuf').Pixbuf;
  /**
    * Renders an icon previously looked up in an icon theme using Gtk.IconTheme.lookup_icon(); the size will be based on the size passed to Gtk.IconTheme.lookup_icon(). Note that the resulting surface may not be exactly this size; an icon theme may have icons that differ slightly from their nominal sizes, and in addition GTK+ will avoid scaling icons that it considers sufficiently close to the requested size or for which the source image would have to be scaled up too far. (This maintains sharpness.). This behaviour can be changed by passing the Gtk.IconLookupFlags.FORCE_SIZE flag when obtaining the Gtk.IconInfo. If this flag has been specified, the pixbuf returned by this function will be scaled to the exact size.
    * @param forWindow Gdk.Window to optimize drawing for, or None
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use cairo_surface_destroy() to release your reference to the icon. 
    */
  loadSurface(forWindow: import('../Gdk').Window | null): import('../cairo').Surface;
  /**
    * Loads an icon, modifying it to match the system colours for the foreground, success, warning and error colors provided. If the icon is not a symbolic one, the function will return the result from Gtk.IconInfo.load_icon().
    * @param fg a Gdk.RGBA representing the foreground color of the icon
    * @param successColor a Gdk.RGBA representing the warning color of the icon or None to use the default color
    * @param warningColor a Gdk.RGBA representing the warning color of the icon or None to use the default color
    * @param errorColor a Gdk.RGBA representing the error color of the icon or None to use the default color (allow-none)
    * @returns a GdkPixbuf.Pixbuf representing the loaded icon   was_symbolic:a bool, returns whether the loaded icon was a symbolic one and whether the fg color was applied to it. 
    */
  loadSymbolic(fg: import('../Gdk').RGBA, successColor: import('../Gdk').RGBA | null, warningColor: import('../Gdk').RGBA | null, errorColor: import('../Gdk').RGBA | null): [import('../GdkPixbuf').Pixbuf, boolean];
  /**
    * Asynchronously load, render and scale a symbolic icon previously looked up from the icon theme using Gtk.IconTheme.lookup_icon().
    * @param fg a Gdk.RGBA representing the foreground color of the icon
    * @param successColor a Gdk.RGBA representing the warning color of the icon or None to use the default color
    * @param warningColor a Gdk.RGBA representing the warning color of the icon or None to use the default color
    * @param errorColor a Gdk.RGBA representing the error color of the icon or None to use the default color (allow-none)
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  loadSymbolicAsync(fg: import('../Gdk').RGBA, successColor: import('../Gdk').RGBA | null, warningColor: import('../Gdk').RGBA | null, errorColor: import('../Gdk').RGBA | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async icon load, see Gtk.IconInfo.load_symbolic_async().
    * @param res a Gio.AsyncResult
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use GObject.Object.unref() to release your reference to the icon.  was_symbolic:a bool, returns whether the loaded icon was a symbolic one and whether the fg color was applied to it. 
    */
  loadSymbolicFinish(res: import('../Gio').AsyncResult): [import('../GdkPixbuf').Pixbuf, boolean];
  /**
    * Loads an icon, modifying it to match the system colors for the foreground, success, warning and error colors provided. If the icon is not a symbolic one, the function will return the result from Gtk.IconInfo.load_icon(). This function uses the regular foreground color and the symbolic colors with the names “success_color”, “warning_color” and “error_color” from the context.
    * @param context a Gtk.StyleContext
    * @returns a GdkPixbuf.Pixbuf representing the loaded icon  was_symbolic:a bool, returns whether the loaded icon was a symbolic one and whether the fg color was applied to it. 
    */
  loadSymbolicForContext(context: import('../Gtk').StyleContext): [import('../GdkPixbuf').Pixbuf, boolean];
  /**
    * Asynchronously load, render and scale a symbolic icon previously looked up from the icon theme using Gtk.IconTheme.lookup_icon().
    * @param context a Gtk.StyleContext
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  loadSymbolicForContextAsync(context: import('../Gtk').StyleContext, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async icon load, see Gtk.IconInfo.load_symbolic_for_context_async().
    * @param res a Gio.AsyncResult
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use GObject.Object.unref() to release your reference to the icon.  was_symbolic:a bool, returns whether the loaded icon was a symbolic one and whether the fg color was applied to it. 
    */
  loadSymbolicForContextFinish(res: import('../Gio').AsyncResult): [import('../GdkPixbuf').Pixbuf, boolean];
  /**
    * Loads an icon, modifying it to match the system colours for the foreground, success, warning and error colors provided. If the icon is not a symbolic one, the function will return the result from Gtk.IconInfo.load_icon().
    * @param style a Gtk.Style to take the colors from
    * @param state the widget state to use for colors
    * @returns a GdkPixbuf.Pixbuf representing the loaded icon   was_symbolic:a bool, returns whether the loaded icon was a symbolic one and whether the fg color was applied to it. 
    */
  loadSymbolicForStyle(style: import('../Gtk').Style, state: import('../Gtk').StateType): [import('../GdkPixbuf').Pixbuf, boolean];
  /**
    * Sets whether the coordinates returned by Gtk.IconInfo.get_embedded_rect() and Gtk.IconInfo.get_attach_points() should be returned in their original form as specified in the icon theme, instead of scaled appropriately for the pixbuf returned by Gtk.IconInfo.load_icon().
    * @param rawCoordinates whether the coordinates of embedded rectangles and attached points should be returned in their original (unscaled) form. 
    */
  setRawCoordinates(rawCoordinates: boolean): void;
}

