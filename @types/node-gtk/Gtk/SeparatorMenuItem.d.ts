import * as Gtk from '../Gtk';
export declare interface SeparatorMenuItem extends Gtk.MenuItem { }

/**
  * The Gtk.SeparatorMenuItem is a separator used to group
items within a menu. It displays a horizontal line with a shadow to
make it appear sunken into the interface. 
  */
export declare class SeparatorMenuItem {
  /**
    * Creates a new Gtk.SeparatorMenuItem.
    * @returns a new Gtk.SeparatorMenuItem. 
    */
  static new(): import('../Gtk').Widget;
}

