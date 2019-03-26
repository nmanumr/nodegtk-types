import * as GObject from '../GObject';
export declare interface Tooltip extends GObject.Object { }

/**
  * Basic tooltips can be realized simply by using Gtk.Widget.set_tooltip_text()
or Gtk.Widget.set_tooltip_markup() without any explicit tooltip object. 
  */
export declare class Tooltip {
  /**
    * Triggers a new tooltip query on display, in order to update the current visible tooltip, or to show/hide the current tooltip.  This function is useful to call when, for example, the state of the widget changed by a key press.
    * @param display a Gdk.Display 
    */
  static triggerTooltipQuery(display: import('../Gdk').Display): void;
  /**
    * Replaces the widget packed into the tooltip with custom_widget. custom_widget does not get destroyed when the tooltip goes away. By default a box with a Gtk.Image and Gtk.Label is embedded in the tooltip, which can be configured using Gtk.Tooltip.set_markup() and Gtk.Tooltip.set_icon().
    * @param customWidget a Gtk.Widget, or None to unset the old custom widget. 
    */
  setCustom(customWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets the icon of the tooltip (which is in front of the text) to be pixbuf.  If pixbuf is None, the image will be hidden.
    * @param pixbuf a GdkPixbuf.Pixbuf, or None 
    */
  setIcon(pixbuf: import('../GdkPixbuf').Pixbuf | null): void;
  /**
    * Sets the icon of the tooltip (which is in front of the text) to be the icon indicated by gicon with the size indicated by size. If gicon is None, the image will be hidden.
    * @param gicon a Gio.Icon representing the icon, or None
    * @param size a stock icon size (Gtk.IconSize) 
    */
  setIconFromGicon(gicon: import('../Gio').Icon | null, size: number): void;
  /**
    * Sets the icon of the tooltip (which is in front of the text) to be the icon indicated by icon_name with the size indicated by size.  If icon_name is None, the image will be hidden.
    * @param iconName an icon name, or None
    * @param size a stock icon size (Gtk.IconSize) 
    */
  setIconFromIconName(iconName: string | null, size: number): void;
  /**
    * Sets the icon of the tooltip (which is in front of the text) to be the stock item indicated by stock_id with the size indicated by size.  If stock_id is None, the image will be hidden.
    * @param stockId a stock id, or None
    * @param size a stock icon size (Gtk.IconSize) 
    */
  setIconFromStock(stockId: string | null, size: number): void;
  /**
    * Sets the text of the tooltip to be markup, which is marked up with the Pango text markup language. If markup is None, the label will be hidden.
    * @param markup a markup string (see Pango markup format) or None 
    */
  setMarkup(markup: string | null): void;
  /**
    * Sets the text of the tooltip to be text. If text is None, the label will be hidden. See also Gtk.Tooltip.set_markup().
    * @param text a text string or None 
    */
  setText(text: string | null): void;
  /**
    * Sets the area of the widget, where the contents of this tooltip apply, to be rect (in widget coordinates).  This is especially useful for properly setting tooltips on Gtk.TreeView rows and cells, Gtk.IconViews, etc.
    * @param rect a Gdk.Rectangle 
    */
  setTipArea(rect: import('../Gdk').Rectangle): void;
}

