/**
  * A Gtk.TearoffMenuItem is a special Gtk.MenuItem which is used to
tear off and reattach its menu. 
  */
export declare class TearoffMenuItem extends import('../Gtk').MenuItem{
/**
  * Creates a new Gtk.TearoffMenuItem.
  * @returns a new Gtk.TearoffMenuItem. 
  */
static new(): import('../Gtk').Widget;
;
/**
  *   
  */
menuItem: import('../Gtk').MenuItem;
}

