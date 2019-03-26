import * as Gtk from '../Gtk';
export declare interface RecentChooserMenu extends Gtk.Menu, Gtk.Activatable, Gtk.RecentChooser { }

/**
  * Gtk.RecentChooserMenu is a widget suitable for displaying recently used files
inside a menu.  It can be used to set a sub-menu of a Gtk.MenuItem using
Gtk.MenuItem.set_submenu(), or as the menu of a Gtk.MenuToolButton. 
  */
export declare class RecentChooserMenu {
  /**
    * Creates a new Gtk.RecentChooserMenu widget.
    * @returns a new Gtk.RecentChooserMenu 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RecentChooserMenu widget using manager as the underlying recently used resources manager.
    * @param manager a Gtk.RecentManager
    * @returns a new Gtk.RecentChooserMenu, bound to manager. 
    */
  static newForManager(manager: import('../Gtk').RecentManager): import('../Gtk').Widget;
  /**
    * Returns the value set by Gtk.RecentChooserMenu.set_show_numbers().
    * @returns True if numbers should be shown. 
    */
  getShowNumbers(): boolean;
  /**
    * Sets whether a number should be added to the items of self.  The numbers are shown to provide a unique character for a mnemonic to be used inside ten menu item’s label.  Only the first the items get a number to avoid clashes.
    * @param showNumbers whether to show numbers 
    */
  setShowNumbers(showNumbers: boolean): void;
  /**
    * Whether the items should be displayed with a number 
    */
  showNumbers: boolean;
}

