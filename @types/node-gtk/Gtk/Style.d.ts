import * as GObject from '../GObject';
export declare interface Style extends GObject.Object { }

/**
  * A Gtk.Style object encapsulates the information that provides the look and
feel for a widget. 
  */
export declare class Style {
  /**
    * Creates a new Gtk.Style.
    * @returns a new Gtk.Style. 
    */
  static new(): import('../Gtk').Style;
  applyDefaultBackground(cr: import('../cairo').Context, window: import('../Gdk').Window, stateType: import('../Gtk').StateType, x: number, y: number, width: number, height: number): void;
  /**
    * Creates a copy of the passed in Gtk.Style object.
    * @returns a copy of self 
    */
  copy(): import('../Gtk').Style;
  /**
    * Detaches a style from a window. If the style is not attached to any windows anymore, it is unrealized. See gtk_style_attach(). 
    */
  detach(): void;
  /**
    * Queries the value of a style property corresponding to a widget class is in the given style.
    * @param widgetType the GObject.GType of a descendant of Gtk.Widget
    * @param propertyName the name of the style property to get
    * @returns a GObject.Value where the value of the property being queried will be stored 
    */
  getStyleProperty(widgetType: import('../GObject').GType, propertyName: string): import('../GObject').Value;
  /**
    * Returns whether self has an associated Gtk.StyleContext.
    * @returns True if self has a Gtk.StyleContext 
    */
  hasContext(): boolean;
  /**
    * Looks up color_name in the style’s logical color mappings, filling in color and returning True if found, otherwise returning False. Do not cache the found mapping, because it depends on the Gtk.Style and might change when a theme switch occurs.
    * @param colorName the name of the logical color to look up
    * @returns True if the mapping was found.  color:the Gdk.Color to fill in 
    */
  lookupColor(colorName: string): [boolean, import('../Gdk').Color];
  /**
    * Looks up stock_id in the icon factories associated with self and the default icon factory, returning an icon set if found, otherwise None.
    * @param stockId an icon name
    * @returns icon set of stock_id 
    */
  lookupIconSet(stockId: string): import('../Gtk').IconSet;
  /**
    * Renders the icon specified by source at the given size according to the given parameters and returns the result in a pixbuf.
    * @param source the Gtk.IconSource specifying the icon to render
    * @param direction a text direction
    * @param state a state
    * @param size the size to render the icon at (Gtk.IconSize). A size of (GtkIconSize)-1 means render at the size of the source and don’t scale.
    * @param widget the widget
    * @param detail a style detail
    * @returns a newly-created GdkPixbuf.Pixbuf containing the rendered icon 
    */
  renderIcon(source: import('../Gtk').IconSource, direction: import('../Gtk').TextDirection, state: import('../Gtk').StateType, size: number, widget: import('../Gtk').Widget | null, detail: string | null): import('../GdkPixbuf').Pixbuf;
  /**
    * Sets the background of window to the background color or pixmap specified by self for the given state.
    * @param window a Gdk.Window
    * @param stateType a state 
    */
  setBackground(window: import('../Gdk').Window, stateType: import('../Gtk').StateType): void;
  /**
    * Gtk.StyleContext to get style from 
    */
  context: import('../Gtk').StyleContext;
}

