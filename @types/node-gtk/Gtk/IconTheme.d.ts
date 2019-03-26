import * as GObject from '../GObject';
export declare interface IconTheme extends GObject.Object { }

/**
  * Gtk.IconTheme provides a facility for looking up icons by name
and size. The main reason for using a name rather than simply
providing a filename is to allow different icons to be used
depending on what “icon theme” is selected
by the user. The operation of icon themes on Linux and Unix
follows the Icon Theme Specification
There is a fallback icon theme, named hicolor, where applications
should install their icons, but additional icon themes can be installed
as operating system vendors and users choose. 
  */
export declare class IconTheme {
  /**
    * Registers a built-in icon for icon theme lookups. The idea of built-in icons is to allow an application or library that uses themed icons to function requiring files to be present in the file system. For instance, the default images for all of GTK+’s stock icons are registered as built-icons.
    * @param iconName the name of the icon to register
    * @param size the size in pixels at which to register the icon (different images can be registered for the same icon name at different sizes.)
    * @param pixbuf GdkPixbuf.Pixbuf that contains the image to use for icon_name 
    */
  static addBuiltinIcon(iconName: string, size: number, pixbuf: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Gets the icon theme for the default screen. See Gtk.IconTheme.get_for_screen().
    * @returns A unique Gtk.IconTheme associated with the default screen. This icon theme is associated with the screen and can be used as long as the screen is open. Do not ref or unref it. 
    */
  static getDefault(): import('../Gtk').IconTheme;
  /**
    * Gets the icon theme object associated with screen; if this function has not previously been called for the given screen, a new icon theme object will be created and associated with the screen. Icon theme objects are fairly expensive to create, so using this function is usually a better choice than calling than Gtk.IconTheme.new() and setting the screen yourself; by using this function a single icon theme object will be shared between users.
    * @param screen a Gdk.Screen
    * @returns A unique Gtk.IconTheme associated with the given screen. This icon theme is associated with the screen and can be used as long as the screen is open. Do not ref or unref it. 
    */
  static getForScreen(screen: import('../Gdk').Screen): import('../Gtk').IconTheme;
  /**
    * Creates a new icon theme object. Icon theme objects are used to lookup up an icon by name in a particular icon theme. Usually, you’ll want to use Gtk.IconTheme.get_default() or Gtk.IconTheme.get_for_screen() rather than creating a new icon theme object for scratch.
    * @returns the newly created Gtk.IconTheme object. 
    */
  static new(): import('../Gtk').IconTheme;
  /**
    * Adds a resource path that will be looked at when looking for icons, similar to search paths.
    * @param path a resource path 
    */
  addResourcePath(path: string): void;
  /**
    * Appends a directory to the search path. See Gtk.IconTheme.set_search_path().
    * @param path directory name to append to the icon path 
    */
  appendSearchPath(path: string): void;
  /**
    * Looks up a named icon and returns a Gtk.IconInfo containing information such as the filename of the icon. The icon can then be rendered into a pixbuf using Gtk.IconInfo.load_icon(). (Gtk.IconTheme.load_icon() combines these two steps if all you need is the pixbuf.)
    * @param iconNames None-terminated array of icon names to lookup
    * @param size desired icon size
    * @param flags flags modifying the behavior of the icon lookup
    * @returns a Gtk.IconInfo object containing information about the icon, or None if the icon wasn’t found. 
    */
  chooseIcon(iconNames: string, size: number, flags: import('../Gtk').IconLookupFlags): import('../Gtk').IconInfo | null;
  /**
    * Looks up a named icon for a particular window scale and returns a Gtk.IconInfo containing information such as the filename of the icon. The icon can then be rendered into a pixbuf using Gtk.IconInfo.load_icon(). (Gtk.IconTheme.load_icon() combines these two steps if all you need is the pixbuf.)
    * @param iconNames None-terminated array of icon names to lookup
    * @param size desired icon size
    * @param scale desired scale
    * @param flags flags modifying the behavior of the icon lookup
    * @returns a Gtk.IconInfo object containing information about the icon, or None if the icon wasn’t found. 
    */
  chooseIconForScale(iconNames: string, size: number, scale: number, flags: import('../Gtk').IconLookupFlags): import('../Gtk').IconInfo | null;
  /**
    * Gets the name of an icon that is representative of the current theme (for instance, to use when presenting a list of themes to the user.)
    * @returns the name of an example icon or None. Free with GLib.free(). 
    */
  getExampleIconName(): string | null;
  /**
    * Returns an array of integers describing the sizes at which the icon is available without scaling. A size of -1 means that the icon is available in a scalable format. The array is zero-terminated.
    * @param iconName the name of an icon
    * @returns An newly allocated array describing the sizes at which the icon is available. The array should be freed with GLib.free() when it is no longer needed. 
    */
  getIconSizes(iconName: string): number[];
  /**
    * Gets the current search path. See Gtk.IconTheme.set_search_path().
    * @returns location to store a list of icon theme path directories or None. The stored value should be freed with GLib.strfreev(). 
    */
  getSearchPath(): string[];
  /**
    * Checks whether an icon theme includes an icon for a particular name.
    * @param iconName the name of an icon
    * @returns True if self includes an icon for icon_name. 
    */
  hasIcon(iconName: string): boolean;
  /**
    * Gets the list of contexts available within the current hierarchy of icon themes. See Gtk.IconTheme.list_icons() for details about contexts.
    * @returns a GLib.List list holding the names of all the contexts in the theme. You must first free each element in the list with GLib.free(), then free the list itself with g_list_free(). 
    */
  listContexts(): string[];
  /**
    * Lists the icons in the current icon theme. Only a subset of the icons can be listed by providing a context string. The set of values for the context string is system dependent, but will typically include such values as “Applications” and “MimeTypes”. Contexts are explained in the Icon Theme Specification. The standard contexts are listed in the Icon Naming Specification. Also see Gtk.IconTheme.list_contexts().
    * @param context a string identifying a particular type of icon, or None to list all icons.
    * @returns a GLib.List list holding the names of all the icons in the theme. You must first free each element in the list with GLib.free(), then free the list itself with g_list_free(). 
    */
  listIcons(context: string | null): string[];
  /**
    * Looks up an icon in an icon theme, scales it to the given size and renders it into a pixbuf. This is a convenience function; if more details about the icon are needed, use Gtk.IconTheme.lookup_icon() followed by Gtk.IconInfo.load_icon().
    * @param iconName the name of the icon to lookup
    * @param size the desired icon size. The resulting icon may not be exactly this size; see Gtk.IconInfo.load_icon().
    * @param flags flags modifying the behavior of the icon lookup
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use GObject.Object.unref() to release your reference to the icon. None if the icon isn’t found. 
    */
  loadIcon(iconName: string, size: number, flags: import('../Gtk').IconLookupFlags): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Looks up an icon in an icon theme for a particular window scale, scales it to the given size and renders it into a pixbuf. This is a convenience function; if more details about the icon are needed, use Gtk.IconTheme.lookup_icon() followed by Gtk.IconInfo.load_icon().
    * @param iconName the name of the icon to lookup
    * @param size the desired icon size. The resulting icon may not be exactly this size; see Gtk.IconInfo.load_icon().
    * @param scale desired scale
    * @param flags flags modifying the behavior of the icon lookup
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use GObject.Object.unref() to release your reference to the icon. None if the icon isn’t found. 
    */
  loadIconForScale(iconName: string, size: number, scale: number, flags: import('../Gtk').IconLookupFlags): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Looks up an icon in an icon theme for a particular window scale, scales it to the given size and renders it into a cairo surface. This is a convenience function; if more details about the icon are needed, use Gtk.IconTheme.lookup_icon() followed by Gtk.IconInfo.load_surface().
    * @param iconName the name of the icon to lookup
    * @param size the desired icon size. The resulting icon may not be exactly this size; see Gtk.IconInfo.load_icon().
    * @param scale desired scale
    * @param forWindow Gdk.Window to optimize drawing for, or None
    * @param flags flags modifying the behavior of the icon lookup
    * @returns the rendered icon; this may be a newly created icon or a new reference to an internal icon, so you must not modify the icon. Use cairo_surface_destroy() to release your reference to the icon. None if the icon isn’t found. 
    */
  loadSurface(iconName: string, size: number, scale: number, forWindow: import('../Gdk').Window | null, flags: import('../Gtk').IconLookupFlags): import('../cairo').Surface | null;
  /**
    * Looks up an icon and returns a Gtk.IconInfo containing information such as the filename of the icon. The icon can then be rendered into a pixbuf using Gtk.IconInfo.load_icon().
    * @param icon the Gio.Icon to look up
    * @param size desired icon size
    * @param flags flags modifying the behavior of the icon lookup
    * @returns a Gtk.IconInfo containing information about the icon, or None if the icon wasn’t found. Unref with GObject.Object.unref() 
    */
  lookupByGicon(icon: import('../Gio').Icon, size: number, flags: import('../Gtk').IconLookupFlags): import('../Gtk').IconInfo | null;
  /**
    * Looks up an icon and returns a Gtk.IconInfo containing information such as the filename of the icon. The icon can then be rendered into a pixbuf using Gtk.IconInfo.load_icon().
    * @param icon the Gio.Icon to look up
    * @param size desired icon size
    * @param scale the desired scale
    * @param flags flags modifying the behavior of the icon lookup
    * @returns a Gtk.IconInfo containing information about the icon, or None if the icon wasn’t found. Unref with GObject.Object.unref() 
    */
  lookupByGiconForScale(icon: import('../Gio').Icon, size: number, scale: number, flags: import('../Gtk').IconLookupFlags): import('../Gtk').IconInfo | null;
  /**
    * Looks up a named icon and returns a Gtk.IconInfo containing information such as the filename of the icon. The icon can then be rendered into a pixbuf using Gtk.IconInfo.load_icon(). (Gtk.IconTheme.load_icon() combines these two steps if all you need is the pixbuf.)
    * @param iconName the name of the icon to lookup
    * @param size desired icon size
    * @param flags flags modifying the behavior of the icon lookup
    * @returns a Gtk.IconInfo object containing information about the icon, or None if the icon wasn’t found. 
    */
  lookupIcon(iconName: string, size: number, flags: import('../Gtk').IconLookupFlags): import('../Gtk').IconInfo | null;
  /**
    * Looks up a named icon for a particular window scale and returns a Gtk.IconInfo containing information such as the filename of the icon. The icon can then be rendered into a pixbuf using Gtk.IconInfo.load_icon(). (Gtk.IconTheme.load_icon() combines these two steps if all you need is the pixbuf.)
    * @param iconName the name of the icon to lookup
    * @param size desired icon size
    * @param scale the desired scale
    * @param flags flags modifying the behavior of the icon lookup
    * @returns a Gtk.IconInfo object containing information about the icon, or None if the icon wasn’t found. 
    */
  lookupIconForScale(iconName: string, size: number, scale: number, flags: import('../Gtk').IconLookupFlags): import('../Gtk').IconInfo | null;
  /**
    * Prepends a directory to the search path. See Gtk.IconTheme.set_search_path().
    * @param path directory name to prepend to the icon path 
    */
  prependSearchPath(path: string): void;
  /**
    * Checks to see if the icon theme has changed; if it has, any currently cached information is discarded and will be reloaded next time self is accessed.
    * @returns True if the icon theme has changed and needed to be reloaded. 
    */
  rescanIfNeeded(): boolean;
  /**
    * Sets the name of the icon theme that the Gtk.IconTheme object uses overriding system configuration. This function cannot be called on the icon theme objects returned from Gtk.IconTheme.get_default() and Gtk.IconTheme.get_for_screen().
    * @param themeName name of icon theme to use instead of configured theme, or None to unset a previously set custom theme 
    */
  setCustomTheme(themeName: string | null): void;
  /**
    * Sets the screen for an icon theme; the screen is used to track the user’s currently configured icon theme, which might be different for different screens.
    * @param screen a Gdk.Screen 
    */
  setScreen(screen: import('../Gdk').Screen): void;
  /**
    * Sets the search path for the icon theme object. When looking for an icon theme, GTK+ will search for a subdirectory of one or more of the directories in path with the same name as the icon theme containing an index.theme file. (Themes from multiple of the path elements are combined to allow themes to be extended by adding icons in the user’s home directory.)
    * @param path array of directories that are searched for icon themes 
    */
  setSearchPath(path: string): void;
}

