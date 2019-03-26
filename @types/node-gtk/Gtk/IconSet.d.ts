export declare class IconSet {
  /**
    * Creates a new Gtk.IconSet. A Gtk.IconSet represents a single icon in various sizes and widget states. It can provide a GdkPixbuf.Pixbuf for a given size and state on request, and automatically caches some of the rendered GdkPixbuf.Pixbuf objects.
    * @returns a new Gtk.IconSet 
    */
  static new(): import('../Gtk').IconSet;
  /**
    * Creates a new Gtk.IconSet with pixbuf as the default/fallback source image. If you don’t add any additional Gtk.IconSource to the icon set, all variants of the icon will be created from pixbuf, using scaling, pixelation, etc. as required to adjust the icon size or make the icon look insensitive/prelighted.
    * @param pixbuf a GdkPixbuf.Pixbuf
    * @returns a new Gtk.IconSet 
    */
  static newFromPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf): import('../Gtk').IconSet;
  /**
    * Icon sets have a list of Gtk.IconSource, which they use as base icons for rendering icons in different states and sizes. Icons are scaled, made to look insensitive, etc. in Gtk.IconSet.render_icon(), but Gtk.IconSet needs base images to work with. The base images and when to use them are described by a Gtk.IconSource.
    * @param source a Gtk.IconSource 
    */
  addSource(source: import('../Gtk').IconSource): void;
  /**
    * Copies self by value.
    * @returns a new Gtk.IconSet identical to the first. 
    */
  copy(): import('../Gtk').IconSet;
  /**
    * Obtains a list of icon sizes this icon set can render. The returned array must be freed with GLib.free().
    * @returns return location for array of sizes (Gtk.IconSize) 
    */
  getSizes(): number[];
  /**
    * Increments the reference count on self.
    * @returns self. 
    */
  ref(): import('../Gtk').IconSet;
  /**
    * Renders an icon using Gtk.Style.render_icon(). In most cases, Gtk.Widget.render_icon() is better, since it automatically provides most of the arguments from the current widget settings.  This function never returns None; if the icon can’t be rendered (perhaps because an image file fails to load), a default “missing image” icon will be returned instead.
    * @param style a Gtk.Style associated with widget, or None
    * @param direction text direction
    * @param state widget state
    * @param size icon size (Gtk.IconSize). A size of (GtkIconSize)-1 means render at the size of the source and don’t scale.
    * @param widget widget that will display the icon, or None. The only use that is typically made of this is to determine the appropriate Gdk.Screen.
    * @param detail detail to pass to the theme engine, or None. Note that passing a detail of anything but None will disable caching.
    * @returns a GdkPixbuf.Pixbuf to be displayed 
    */
  renderIcon(style: import('../Gtk').Style | null, direction: import('../Gtk').TextDirection, state: import('../Gtk').StateType, size: number, widget: import('../Gtk').Widget | null, detail: string | null): import('../GdkPixbuf').Pixbuf;
  /**
    * Renders an icon using Gtk.render_icon_pixbuf(). In most cases, Gtk.Widget.render_icon_pixbuf() is better, since it automatically provides most of the arguments from the current widget settings.  This function never returns None; if the icon can’t be rendered (perhaps because an image file fails to load), a default “missing image” icon will be returned instead.
    * @param context a Gtk.StyleContext
    * @param size icon size (Gtk.IconSize). A size of (GtkIconSize)-1 means render at the size of the source and don’t scale.
    * @returns a GdkPixbuf.Pixbuf to be displayed 
    */
  renderIconPixbuf(context: import('../Gtk').StyleContext, size: number): import('../GdkPixbuf').Pixbuf;
  /**
    * Renders an icon using Gtk.render_icon_pixbuf() and converts it to a cairo surface.
    * @param context a Gtk.StyleContext
    * @param size icon size (Gtk.IconSize). A size of (GtkIconSize)-1 means render at the size of the source and don’t scale.
    * @param scale the window scale to render for
    * @param forWindow Gdk.Window to optimize drawing for, or None
    * @returns a cairo.Surface to be displayed 
    */
  renderIconSurface(context: import('../Gtk').StyleContext, size: number, scale: number, forWindow: import('../Gdk').Window | null): import('../cairo').Surface;
  /**
    * Decrements the reference count on self, and frees memory if the reference count reaches 0. 
    */
  unref(): void;
}

