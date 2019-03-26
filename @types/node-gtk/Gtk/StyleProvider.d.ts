import * as GObject from '../GObject';
export declare interface StyleProvider extends GObject.GInterface { }

/**
  * Gtk.StyleProvider is an interface used to provide style information to a Gtk.StyleContext.
See Gtk.StyleContext.add_provider() and Gtk.StyleContext.add_provider_for_screen(). 
  */
export declare interface StyleProvider {
  /**
    * Returns the Gtk.IconFactory defined to be in use for path, or None if none is defined.
    * @param path Gtk.WidgetPath to query
    * @returns The icon factory to use for path, or None 
    */
  getIconFactory(path: import('../Gtk').WidgetPath): import('../Gtk').IconFactory | null;
  /**
    * Returns the style settings affecting a widget defined by path, or None if self doesn’t contemplate styling path.
    * @param path Gtk.WidgetPath to query
    * @returns a Gtk.StyleProperties containing the style settings affecting path 
    */
  getStyle(path: import('../Gtk').WidgetPath): import('../Gtk').StyleProperties | null;
  /**
    * Looks up a widget style property as defined by self for the widget represented by path.
    * @param path Gtk.WidgetPath to query
    * @param state state to query the style property for
    * @param pspec The GObject.ParamSpec to query
    * @returns True if the property was found and has a value, False otherwise   value:return location for the property value 
    */
  getStyleProperty(path: import('../Gtk').WidgetPath, state: import('../Gtk').StateFlags, pspec: import('../GObject').ParamSpec): [boolean, import('../GObject').Value];
}

