import * as Gtk from '../Gtk';
export declare interface PopoverMenu extends Gtk.Popover { }

/**
  * Gtk.PopoverMenu is a subclass of Gtk.Popover that treats its
children like menus and allows switching between them. It is
meant to be used primarily together with Gtk.ModelButton, but
any widget can be used, such as Gtk.SpinButton or Gtk.Scale.
In this respect, Gtk.PopoverMenu is more flexible than popovers
that are created from a Gio.MenuModel with Gtk.Popover.new_from_model(). 
  */
export declare class PopoverMenu {
  /**
    * Creates a new popover menu.
    * @returns a new Gtk.PopoverMenu 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Opens a submenu of the self. The name must be one of the names given to the submenus of self with Gtk.PopoverMenu :submenu, or “main” to switch back to the main menu.
    * @param name the name of the menu to switch to 
    */
  openSubmenu(name: string): void;
  /**
    * The name of the visible submenu 
    */
  visibleSubmenu: string;
}

