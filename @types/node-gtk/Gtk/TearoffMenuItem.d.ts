import * as Gtk from '../Gtk';
export declare interface TearoffMenuItem extends Gtk.MenuItem { }

/**
  * A Gtk.TearoffMenuItem is a special Gtk.MenuItem which is used to
tear off and reattach its menu. 
  */
export declare class TearoffMenuItem {
  /**
    * Creates a new Gtk.TearoffMenuItem.
    * @returns a new Gtk.TearoffMenuItem. 
    */
  static new(): import('../Gtk').Widget;
}

