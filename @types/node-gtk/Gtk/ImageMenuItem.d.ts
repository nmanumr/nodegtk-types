import * as Gtk from '../Gtk';
export declare interface ImageMenuItem extends Gtk.MenuItem { }

/**
  * A Gtk.ImageMenuItem is a menu item which has an icon next to the text label. 
  */
export declare class ImageMenuItem {
  /**
    * Creates a new Gtk.ImageMenuItem with an empty label.
    * @returns a new Gtk.ImageMenuItem 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.ImageMenuItem containing the image and text from a stock item. Some stock ids have preprocessor macros like Gtk.STOCK_OK and Gtk.STOCK_APPLY.
    * @param stockId the name of the stock item.
    * @param accelGroup the Gtk.AccelGroup to add the menu items accelerator to, or None.
    * @returns a new Gtk.ImageMenuItem. 
    */
  static newFromStock(stockId: string, accelGroup: import('../Gtk').AccelGroup | null): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.ImageMenuItem containing a label.
    * @param label the text of the menu item.
    * @returns a new Gtk.ImageMenuItem. 
    */
  static newWithLabel(label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.ImageMenuItem containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the menu item.
    * @param label the text of the menu item, with an underscore in front of the mnemonic character
    * @returns a new Gtk.ImageMenuItem 
    */
  static newWithMnemonic(label: string): import('../Gtk').Widget;
  /**
    * Returns whether the menu item will ignore the Gtk.Settings :gtk-menu-images setting and always show the image, if available.
    * @returns True if the menu item will always show the image 
    */
  getAlwaysShowImage(): boolean;
  /**
    * Gets the widget that is currently set as the image of self. See Gtk.ImageMenuItem.set_image().
    * @returns the widget set as image of self 
    */
  getImage(): import('../Gtk').Widget;
  /**
    * Checks whether the label set in the menuitem is used as a stock id to select the stock item for the item.
    * @returns True if the label set in the menuitem is used as a stock id to select the stock item for the item 
    */
  getUseStock(): boolean;
  /**
    * Specifies an accel_group to add the menu items accelerator to (this only applies to stock items so a stock item must already be set, make sure to call Gtk.ImageMenuItem.set_use_stock() and Gtk.MenuItem.set_label() with a valid stock item first).
    * @param accelGroup the Gtk.AccelGroup 
    */
  setAccelGroup(accelGroup: import('../Gtk').AccelGroup): void;
  /**
    * If True, the menu item will ignore the Gtk.Settings :gtk-menu-images setting and always show the image, if available.
    * @param alwaysShow True if the menuitem should always show the image 
    */
  setAlwaysShowImage(alwaysShow: boolean): void;
  /**
    * Sets the image of self to the given widget. Note that it depends on the show-menu-images setting whether the image will be displayed or not.
    * @param image a widget to set as the image for the menu item. 
    */
  setImage(image: import('../Gtk').Widget | null): void;
  /**
    * If True, the label set in the menuitem is used as a stock id to select the stock item for the item.
    * @param useStock True if the menuitem should use a stock item 
    */
  setUseStock(useStock: boolean): void;
  /**
    * The Accel Group to use for stock accelerator keys deprecated 
    */
  accelGroup: import('../Gtk').AccelGroup;
  /**
    * Whether the image will always be shown deprecated 
    */
  alwaysShowImage: boolean;
  /**
    * Child widget to appear next to the menu text deprecated 
    */
  image: import('../Gtk').Widget;
  /**
    * Whether to use the label text to create a stock menu item deprecated 
    */
  useStock: boolean;
}

