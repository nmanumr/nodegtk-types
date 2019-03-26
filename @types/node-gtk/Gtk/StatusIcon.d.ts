import * as GObject from '../GObject';
export declare interface StatusIcon extends GObject.Object { }

/**
  * The “system tray” or notification area is normally used for transient icons
that indicate some special state. For example, a system tray icon might
appear to tell the user that they have new mail, or have an incoming instant
message, or something along those lines. The basic idea is that creating an
icon in the notification area is less annoying than popping up a dialog. 
  */
export declare class StatusIcon {
  /**
    * Creates an empty status icon object.
    * @returns a new Gtk.StatusIcon 
    */
  static new(): import('../Gtk').StatusIcon;
  /**
    * Creates a status icon displaying the file filename.
    * @param filename a filename
    * @returns a new Gtk.StatusIcon 
    */
  static newFromFile(filename: string): import('../Gtk').StatusIcon;
  /**
    * Creates a status icon displaying a Gio.Icon. If the icon is a themed icon, it will be updated when the theme changes.
    * @param icon a Gio.Icon
    * @returns a new Gtk.StatusIcon 
    */
  static newFromGicon(icon: import('../Gio').Icon): import('../Gtk').StatusIcon;
  /**
    * Creates a status icon displaying an icon from the current icon theme. If the current icon theme is changed, the icon will be updated appropriately.
    * @param iconName an icon name
    * @returns a new Gtk.StatusIcon 
    */
  static newFromIconName(iconName: string): import('../Gtk').StatusIcon;
  /**
    * Creates a status icon displaying pixbuf.
    * @param pixbuf a GdkPixbuf.Pixbuf
    * @returns a new Gtk.StatusIcon 
    */
  static newFromPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf): import('../Gtk').StatusIcon;
  /**
    * Creates a status icon displaying a stock icon. Sample stock icon names are Gtk.STOCK_OPEN, Gtk.STOCK_QUIT. You can register your own stock icon names, see Gtk.IconFactory.add_default() and Gtk.IconFactory.add().
    * @param stockId a stock icon id
    * @returns a new Gtk.StatusIcon 
    */
  static newFromStock(stockId: string): import('../Gtk').StatusIcon;
  /**
    * Menu positioning function to use with Gtk.Menu.popup() to position menu aligned to the status icon user_data.
    * @param menu the Gtk.Menu
    * @param x return location for the x position
    * @param y return location for the y position
    * @param userData the status icon to position the menu on
    * @returns x:return location for the x position y:return location for the y position push_in:whether the first menu item should be offset (pushed in) to be aligned with the menu popup position (only useful for GtkOptionMenu). 
    */
  static positionMenu(menu: import('../Gtk').Menu, x: number, y: number, userData: import('../Gtk').StatusIcon): [number, number, boolean];
  /**
    * Obtains information about the location of the status icon on screen. This information can be used to e.g. position popups like notification bubbles.
    * @returns True if the location information has been filled in  screen:return location for the screen, or None if the information is not needed area:return location for the area occupied by the status icon, or None orientation:return location for the orientation of the panel in which the status icon is embedded, or None. A panel at the top or bottom of the screen is horizontal, a panel at the left or right is vertical. 
    */
  getGeometry(): [boolean, import('../Gdk').Screen, import('../Gdk').Rectangle, import('../Gtk').Orientation];
  /**
    * Retrieves the Gio.Icon being displayed by the Gtk.StatusIcon. The storage type of the status icon must be Gtk.ImageType.EMPTY or Gtk.ImageType.GICON (see Gtk.StatusIcon.get_storage_type()). The caller of this function does not own a reference to the returned Gio.Icon.
    * @returns the displayed icon, or None if the image is empty 
    */
  getGicon(): import('../Gio').Icon | null;
  /**
    * Returns the current value of the has-tooltip property. See Gtk.StatusIcon :has-tooltip for more information.
    * @returns current value of has-tooltip on self. 
    */
  getHasTooltip(): boolean;
  /**
    * Gets the name of the icon being displayed by the Gtk.StatusIcon. The storage type of the status icon must be Gtk.ImageType.EMPTY or Gtk.ImageType.ICON_NAME (see Gtk.StatusIcon.get_storage_type()). The returned string is owned by the Gtk.StatusIcon and should not be freed or modified.
    * @returns name of the displayed icon, or None if the image is empty. 
    */
  getIconName(): string | null;
  /**
    * Gets the GdkPixbuf.Pixbuf being displayed by the Gtk.StatusIcon. The storage type of the status icon must be Gtk.ImageType.EMPTY or Gtk.ImageType.PIXBUF (see Gtk.StatusIcon.get_storage_type()). The caller of this function does not own a reference to the returned pixbuf.
    * @returns the displayed pixbuf, or None if the image is empty. 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Returns the Gdk.Screen associated with self.
    * @returns a Gdk.Screen. 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Gets the size in pixels that is available for the image. Stock icons and named icons adapt their size automatically if the size of the notification area changes. For other storage types, the size-changed signal can be used to react to size changes.
    * @returns the size that is available for the image 
    */
  getSize(): number;
  /**
    * Gets the id of the stock icon being displayed by the Gtk.StatusIcon. The storage type of the status icon must be Gtk.ImageType.EMPTY or Gtk.ImageType.STOCK (see Gtk.StatusIcon.get_storage_type()). The returned string is owned by the Gtk.StatusIcon and should not be freed or modified.
    * @returns stock id of the displayed stock icon, or None if the image is empty. 
    */
  getStock(): string | null;
  /**
    * Gets the type of representation being used by the Gtk.StatusIcon to store image data. If the Gtk.StatusIcon has no image data, the return value will be Gtk.ImageType.EMPTY.
    * @returns the image representation being used 
    */
  getStorageType(): import('../Gtk').ImageType;
  /**
    * Gets the title of this tray icon. See Gtk.StatusIcon.set_title().
    * @returns the title of the status icon 
    */
  getTitle(): string;
  /**
    * Gets the contents of the tooltip for self.
    * @returns the tooltip text, or None. You should free the returned string with GLib.free() when done. 
    */
  getTooltipMarkup(): string | null;
  /**
    * Gets the contents of the tooltip for self.
    * @returns the tooltip text, or None. You should free the returned string with GLib.free() when done. 
    */
  getTooltipText(): string | null;
  /**
    * Returns whether the status icon is visible or not. Note that being visible does not guarantee that the user can actually see the icon, see also Gtk.StatusIcon.is_embedded().
    * @returns True if the status icon is visible 
    */
  getVisible(): boolean;
  /**
    * This function is only useful on the X11/freedesktop.org platform.
    * @returns An 32 bit unsigned integer identifier for the underlying X11 Window 
    */
  getX11WindowId(): number;
  /**
    * Returns whether the status icon is embedded in a notification area.
    * @returns True if the status icon is embedded in a notification area. 
    */
  isEmbedded(): boolean;
  /**
    * Makes self display the file filename. See Gtk.StatusIcon.new_from_file() for details.
    * @param filename a filename 
    */
  setFromFile(filename: string): void;
  /**
    * Makes self display the Gio.Icon. See Gtk.StatusIcon.new_from_gicon() for details.
    * @param icon a Gio.Icon 
    */
  setFromGicon(icon: import('../Gio').Icon): void;
  /**
    * Makes self display the icon named icon_name from the current icon theme. See Gtk.StatusIcon.new_from_icon_name() for details.
    * @param iconName an icon name 
    */
  setFromIconName(iconName: string): void;
  /**
    * Makes self display pixbuf. See Gtk.StatusIcon.new_from_pixbuf() for details.
    * @param pixbuf a GdkPixbuf.Pixbuf or None 
    */
  setFromPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Makes self display the stock icon with the id stock_id. See Gtk.StatusIcon.new_from_stock() for details.
    * @param stockId a stock icon id 
    */
  setFromStock(stockId: string): void;
  /**
    * Sets the has-tooltip property on self to has_tooltip. See Gtk.StatusIcon :has-tooltip for more information.
    * @param hasTooltip whether or not self has a tooltip 
    */
  setHasTooltip(hasTooltip: boolean): void;
  /**
    * Sets the name of this tray icon. This should be a string identifying this icon. It is may be used for sorting the icons in the tray and will not be shown to the user.
    * @param name the name 
    */
  setName(name: string): void;
  /**
    * Sets the Gdk.Screen where self is displayed; if the icon is already mapped, it will be unmapped, and then remapped on the new screen.
    * @param screen a Gdk.Screen 
    */
  setScreen(screen: import('../Gdk').Screen): void;
  /**
    * Sets the title of this tray icon. This should be a short, human-readable, localized string describing the tray icon. It may be used by tools like screen readers to render the tray icon.
    * @param title the title 
    */
  setTitle(title: string): void;
  /**
    * Sets markup as the contents of the tooltip, which is marked up with the Pango text markup language.
    * @param markup the contents of the tooltip for self, or None 
    */
  setTooltipMarkup(markup: string | null): void;
  /**
    * Sets text as the contents of the tooltip.
    * @param text the contents of the tooltip for self 
    */
  setTooltipText(text: string): void;
  /**
    * Shows or hides a status icon.
    * @param visible True to show the status icon, False to hide it 
    */
  setVisible(visible: boolean): void;
  /**
    * Whether the status icon is embedded 
    */
  readonly embedded: boolean;
  /**
    * Filename to load and display 
    */
  file: string;
  /**
    * The Gio.Icon being displayed 
    */
  gicon: import('../Gio').Icon;
  /**
    * Whether this tray icon has a tooltip 
    */
  hasTooltip: boolean;
  /**
    * The name of the icon from the icon theme 
    */
  iconName: string;
  /**
    * The orientation of the tray 
    */
  readonly orientation: import('../Gtk').Orientation;
  /**
    * A GdkPixbuf.Pixbuf to display 
    */
  pixbuf: import('../GdkPixbuf').Pixbuf;
  /**
    * The screen where this status icon will be displayed 
    */
  screen: import('../Gdk').Screen;
  /**
    * The size of the icon 
    */
  readonly size: number;
  /**
    * Stock ID for a stock image to display deprecated 
    */
  stock: string;
  /**
    * The representation being used for image data 
    */
  readonly storageType: import('../Gtk').ImageType;
  /**
    * The title of this tray icon 
    */
  title: string;
  /**
    * The contents of the tooltip for this tray icon 
    */
  tooltipMarkup: string;
  /**
    * The contents of the tooltip for this widget 
    */
  tooltipText: string;
  /**
    * Whether the status icon is visible 
    */
  visible: boolean;
}

