import * as Gtk from '../Gtk';
export declare interface MenuBar extends Gtk.MenuShell { }

/**
  * The Gtk.MenuBar is a subclass of Gtk.MenuShell which contains one or
more Gtk.MenuItems. The result is a standard menu bar which can hold
many menu items. 
  */
export declare class MenuBar {
  /**
    * Creates a new Gtk.MenuBar
    * @returns the new menu bar, as a Gtk.Widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.MenuBar and populates it with menu items and submenus according to model.
    * @param model a Gio.MenuModel
    * @returns a new Gtk.MenuBar 
    */
  static newFromModel(model: import('../Gio').MenuModel): import('../Gtk').Widget;
  /**
    * Retrieves the current child pack direction of the menubar. See Gtk.MenuBar.set_child_pack_direction().
    * @returns the child pack direction 
    */
  getChildPackDirection(): import('../Gtk').PackDirection;
  /**
    * Retrieves the current pack direction of the menubar. See Gtk.MenuBar.set_pack_direction().
    * @returns the pack direction 
    */
  getPackDirection(): import('../Gtk').PackDirection;
  /**
    * Sets how widgets should be packed inside the children of a menubar.
    * @param childPackDir a new Gtk.PackDirection 
    */
  setChildPackDirection(childPackDir: import('../Gtk').PackDirection): void;
  /**
    * Sets how items should be packed inside a menubar.
    * @param packDir a new Gtk.PackDirection 
    */
  setPackDirection(packDir: import('../Gtk').PackDirection): void;
  /**
    * The child pack direction of the menubar 
    */
  childPackDirection: import('../Gtk').PackDirection;
  /**
    * The pack direction of the menubar 
    */
  packDirection: import('../Gtk').PackDirection;
}

