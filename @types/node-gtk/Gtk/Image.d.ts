import * as Gtk from '../Gtk';
export declare interface Image extends Gtk.Misc { }

/**
  * The Gtk.Image widget displays an image. Various kinds of object
can be displayed as an image; most typically, you would load a
GdkPixbuf.Pixbuf (“pixel buffer”) from a file, and then display that.
There’s a convenience function to do this, Gtk.Image.new_from_file(),
used as follows: 
  */
export declare class Image {
  /**
    * Creates a new empty Gtk.Image widget.
    * @returns a newly created Gtk.Image widget. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Image displaying the given animation. The Gtk.Image does not assume a reference to the animation; you still need to unref it if you own references. Gtk.Image will add its own reference rather than adopting yours.
    * @param animation an animation
    * @returns a new Gtk.Image widget 
    */
  static newFromAnimation(animation: import('../GdkPixbuf').PixbufAnimation): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Image displaying the file filename. If the file isn’t found or can’t be loaded, the resulting Gtk.Image will display a “broken image” icon. This function never returns None, it always returns a valid Gtk.Image widget.
    * @param filename a filename
    * @returns a new Gtk.Image 
    */
  static newFromFile(filename: string): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Image displaying an icon from the current icon theme. If the icon name isn’t known, a “broken image” icon will be displayed instead.  If the current icon theme is changed, the icon will be updated appropriately.
    * @param icon an icon
    * @param size a stock icon size (Gtk.IconSize)
    * @returns a new Gtk.Image displaying the themed icon 
    */
  static newFromGicon(icon: import('../Gio').Icon, size: number): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Image displaying an icon from the current icon theme. If the icon name isn’t known, a “broken image” icon will be displayed instead.  If the current icon theme is changed, the icon will be updated appropriately.
    * @param iconName an icon name or None
    * @param size a stock icon size (Gtk.IconSize)
    * @returns a new Gtk.Image displaying the themed icon 
    */
  static newFromIconName(iconName: string | null, size: number): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Image displaying an icon set. Sample stock sizes are Gtk.IconSize.MENU, Gtk.IconSize.SMALL_TOOLBAR. Instead of using this function, usually it’s better to create a Gtk.IconFactory, put your icon sets in the icon factory, add the icon factory to the list of default factories with Gtk.IconFactory.add_default(), and then use Gtk.Image.new_from_stock(). This will allow themes to override the icon you ship with your application.
    * @param iconSet a Gtk.IconSet
    * @param size a stock icon size (Gtk.IconSize)
    * @returns a new Gtk.Image 
    */
  static newFromIconSet(iconSet: import('../Gtk').IconSet, size: number): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Image displaying pixbuf. The Gtk.Image does not assume a reference to the pixbuf; you still need to unref it if you own references. Gtk.Image will add its own reference rather than adopting yours.
    * @param pixbuf a GdkPixbuf.Pixbuf, or None
    * @returns a new Gtk.Image 
    */
  static newFromPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf | null): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Image displaying the resource file resource_path. If the file isn’t found or can’t be loaded, the resulting Gtk.Image will display a “broken image” icon. This function never returns None, it always returns a valid Gtk.Image widget.
    * @param resourcePath a resource path
    * @returns a new Gtk.Image 
    */
  static newFromResource(resourcePath: string): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Image displaying a stock icon. Sample stock icon names are Gtk.STOCK_OPEN, Gtk.STOCK_QUIT. Sample stock sizes are Gtk.IconSize.MENU, Gtk.IconSize.SMALL_TOOLBAR. If the stock icon name isn’t known, the image will be empty. You can register your own stock icon names, see Gtk.IconFactory.add_default() and Gtk.IconFactory.add().
    * @param stockId a stock icon name
    * @param size a stock icon size (Gtk.IconSize)
    * @returns a new Gtk.Image displaying the stock icon 
    */
  static newFromStock(stockId: string, size: number): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Image displaying surface. The Gtk.Image does not assume a reference to the surface; you still need to unref it if you own references. Gtk.Image will add its own reference rather than adopting yours.
    * @param surface a cairo.Surface, or None
    * @returns a new Gtk.Image 
    */
  static newFromSurface(surface: import('../cairo').Surface | null): import('../Gtk').Widget;
  /**
    * Resets the image to be empty. 
    */
  clear(): void;
  /**
    * Gets the GdkPixbuf.PixbufAnimation being displayed by the Gtk.Image. The storage type of the image must be Gtk.ImageType.EMPTY or Gtk.ImageType.ANIMATION (see Gtk.Image.get_storage_type()). The caller of this function does not own a reference to the returned animation.
    * @returns the displayed animation, or None if the image is empty 
    */
  getAnimation(): import('../GdkPixbuf').PixbufAnimation | null;
  /**
    * Gets the Gio.Icon and size being displayed by the Gtk.Image. The storage type of the image must be Gtk.ImageType.EMPTY or Gtk.ImageType.GICON (see Gtk.Image.get_storage_type()). The caller of this function does not own a reference to the returned Gio.Icon.
    * @returns gicon:place to store a Gio.Icon, or None size:place to store an icon size (Gtk.IconSize), or None 
    */
  getGicon(): [import('../Gio').Icon, number];
  /**
    * Gets the icon name and size being displayed by the Gtk.Image. The storage type of the image must be Gtk.ImageType.EMPTY or Gtk.ImageType.ICON_NAME (see Gtk.Image.get_storage_type()). The returned string is owned by the Gtk.Image and should not be freed.
    * @returns icon_name:place to store an icon name, or None size:place to store an icon size (Gtk.IconSize), or None 
    */
  getIconName(): [string, number];
  /**
    * Gets the icon set and size being displayed by the Gtk.Image. The storage type of the image must be Gtk.ImageType.EMPTY or Gtk.ImageType.ICON_SET (see Gtk.Image.get_storage_type()).
    * @returns icon_set:location to store a Gtk.IconSet, or None size:location to store a stock icon size (Gtk.IconSize), or None 
    */
  getIconSet(): [import('../Gtk').IconSet, number];
  /**
    * Gets the GdkPixbuf.Pixbuf being displayed by the Gtk.Image. The storage type of the image must be Gtk.ImageType.EMPTY or Gtk.ImageType.PIXBUF (see Gtk.Image.get_storage_type()). The caller of this function does not own a reference to the returned pixbuf.
    * @returns the displayed pixbuf, or None if the image is empty 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Gets the pixel size used for named icons.
    * @returns the pixel size used for named icons. 
    */
  getPixelSize(): number;
  /**
    * Gets the stock icon name and size being displayed by the Gtk.Image. The storage type of the image must be Gtk.ImageType.EMPTY or Gtk.ImageType.STOCK (see Gtk.Image.get_storage_type()). The returned string is owned by the Gtk.Image and should not be freed.
    * @returns stock_id:place to store a stock icon name, or None size:place to store a stock icon size (Gtk.IconSize), or None 
    */
  getStock(): [string, number];
  /**
    * Gets the type of representation being used by the Gtk.Image to store image data. If the Gtk.Image has no image data, the return value will be Gtk.ImageType.EMPTY.
    * @returns image representation being used 
    */
  getStorageType(): import('../Gtk').ImageType;
  /**
    * Causes the Gtk.Image to display the given animation (or display nothing, if you set the animation to None).
    * @param animation the GdkPixbuf.PixbufAnimation 
    */
  setFromAnimation(animation: import('../GdkPixbuf').PixbufAnimation): void;
  /**
    * See Gtk.Image.new_from_file() for details.
    * @param filename a filename or None 
    */
  setFromFile(filename: string | null): void;
  /**
    * See Gtk.Image.new_from_gicon() for details.
    * @param icon an icon
    * @param size an icon size (Gtk.IconSize) 
    */
  setFromGicon(icon: import('../Gio').Icon, size: number): void;
  /**
    * See Gtk.Image.new_from_icon_name() for details.
    * @param iconName an icon name or None
    * @param size an icon size (Gtk.IconSize) 
    */
  setFromIconName(iconName: string | null, size: number): void;
  /**
    * See Gtk.Image.new_from_icon_set() for details.
    * @param iconSet a Gtk.IconSet
    * @param size a stock icon size (Gtk.IconSize) 
    */
  setFromIconSet(iconSet: import('../Gtk').IconSet, size: number): void;
  /**
    * See Gtk.Image.new_from_pixbuf() for details.
    * @param pixbuf a GdkPixbuf.Pixbuf or None 
    */
  setFromPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * See Gtk.Image.new_from_resource() for details.
    * @param resourcePath a resource path or None 
    */
  setFromResource(resourcePath: string | null): void;
  /**
    * See Gtk.Image.new_from_stock() for details.
    * @param stockId a stock icon name
    * @param size a stock icon size (Gtk.IconSize) 
    */
  setFromStock(stockId: string, size: number): void;
  /**
    * See Gtk.Image.new_from_surface() for details.
    * @param surface a cairo.Surface or None 
    */
  setFromSurface(surface: import('../cairo').Surface | null): void;
  /**
    * Sets the pixel size to use for named icons. If the pixel size is set to a value != -1, it is used instead of the icon size set by Gtk.Image.set_from_icon_name().
    * @param pixelSize the new pixel size 
    */
  setPixelSize(pixelSize: number): void;
  /**
    * Filename to load and display 
    */
  file: string;
  /**
    * The Gio.Icon being displayed 
    */
  gicon: import('../Gio').Icon;
  /**
    * The name of the icon from the icon theme 
    */
  iconName: string;
  /**
    * Icon set to display deprecated 
    */
  iconSet: import('../Gtk').IconSet;
  /**
    * Symbolic size to use for stock icon, icon set or named icon 
    */
  iconSize: number;
  /**
    * A GdkPixbuf.Pixbuf to display 
    */
  pixbuf: import('../GdkPixbuf').Pixbuf;
  /**
    * GdkPixbuf.PixbufAnimation to display 
    */
  pixbufAnimation: import('../GdkPixbuf').PixbufAnimation;
  /**
    * Pixel size to use for named icon 
    */
  pixelSize: number;
  /**
    * The resource path being displayed 
    */
  resource: string;
  /**
    * Stock ID for a stock image to display deprecated 
    */
  stock: string;
  /**
    * The representation being used for image data 
    */
  readonly storageType: import('../Gtk').ImageType;
  /**
    * A cairo.Surface to display 
    */
  surface: import('../cairo').Surface;
  /**
    * Whether to use icon names fallback 
    */
  useFallback: boolean;
}

