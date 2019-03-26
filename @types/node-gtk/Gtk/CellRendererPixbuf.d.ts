import * as Gtk from '../Gtk';
export declare interface CellRendererPixbuf extends Gtk.CellRenderer { }

/**
  * A Gtk.CellRendererPixbuf can be used to render an image in a cell. It allows
to render either a given GdkPixbuf.Pixbuf (set via the
Gtk.CellRendererPixbuf :pixbuf property) or a named icon (set via the
Gtk.CellRendererPixbuf :icon-name property). 
  */
export declare class CellRendererPixbuf {
  /**
    * Creates a new Gtk.CellRendererPixbuf. Adjust rendering parameters using object properties. Object properties can be set globally (with g_object_set()). Also, with Gtk.TreeViewColumn, you can bind a property to a value in a Gtk.TreeModel. For example, you can bind the “pixbuf” property on the cell renderer to a pixbuf value in the model, thus rendering a different image in each row of the Gtk.TreeView.
    * @returns the new cell renderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * Whether the rendered pixbuf should be colorized according to the state deprecated 
    */
  followState: boolean;
  /**
    * The Gio.Icon being displayed 
    */
  gicon: import('../Gio').Icon;
  /**
    * The name of the icon from the icon theme 
    */
  iconName: string;
  /**
    * The pixbuf to render 
    */
  pixbuf: import('../GdkPixbuf').Pixbuf;
  /**
    * Pixbuf for closed expander 
    */
  pixbufExpanderClosed: import('../GdkPixbuf').Pixbuf;
  /**
    * Pixbuf for open expander 
    */
  pixbufExpanderOpen: import('../GdkPixbuf').Pixbuf;
  /**
    * Render detail to pass to the theme engine 
    */
  stockDetail: string;
  /**
    * The stock ID of the stock icon to render deprecated 
    */
  stockId: string;
  /**
    * The Gtk.IconSize value that specifies the size of the rendered icon 
    */
  stockSize: number;
  /**
    * The surface to render 
    */
  surface: import('../cairo').Surface;
}

