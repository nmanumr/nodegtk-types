import * as Gio from '../Gio';
export declare interface NumerableIcon extends Gio.EmblemedIcon { }

/**
  * Gtk.NumerableIcon is a subclass of Gio.EmblemedIcon that can
show a number or short string as an emblem. The number can
be overlayed on top of another emblem, if desired. 
  */
export declare class NumerableIcon {
  /**
    * Creates a new unthemed Gtk.NumerableIcon.
    * @param baseIcon a Gio.Icon to overlay on
    * @returns a new Gio.Icon 
    */
  static new(baseIcon: import('../Gio').Icon): import('../Gio').Icon;
  /**
    * Creates a new Gtk.NumerableIcon which will themed according to the passed Gtk.StyleContext. This is a convenience constructor that calls Gtk.NumerableIcon.set_style_context() internally.
    * @param baseIcon a Gio.Icon to overlay on
    * @param context a Gtk.StyleContext
    * @returns a new Gio.Icon 
    */
  static newWithStyleContext(baseIcon: import('../Gio').Icon, context: import('../Gtk').StyleContext): import('../Gio').Icon;
  /**
    * Returns the Gio.Icon that was set as the base background image, or None if there’s none. The caller of this function does not own a reference to the returned Gio.Icon.
    * @returns a Gio.Icon, or None 
    */
  getBackgroundGicon(): import('../Gio').Icon | null;
  /**
    * Returns the icon name used as the base background image, or None if there’s none.
    * @returns an icon name, or None 
    */
  getBackgroundIconName(): string | null;
  /**
    * Returns the value currently displayed by self.
    * @returns the currently displayed value 
    */
  getCount(): number;
  /**
    * Returns the currently displayed label of the icon, or None.
    * @returns the currently displayed label 
    */
  getLabel(): string | null;
  /**
    * Returns the Gtk.StyleContext used by the icon for theming, or None if there’s none.
    * @returns a Gtk.StyleContext, or None. This object is internal to GTK+ and should not be unreffed. Use GObject.Object.ref() if you want to keep it around 
    */
  getStyleContext(): import('../Gtk').StyleContext | null;
  /**
    * Updates the icon to use icon as the base background image. If icon is None, self will go back using style information or default theming for its background image.
    * @param icon a Gio.Icon, or None 
    */
  setBackgroundGicon(icon: import('../Gio').Icon | null): void;
  /**
    * Updates the icon to use the icon named icon_name from the current icon theme as the base background image. If icon_name is None, self will go back using style information or default theming for its background image.
    * @param iconName an icon name, or None 
    */
  setBackgroundIconName(iconName: string | null): void;
  /**
    * Sets the currently displayed value of self to count.
    * @param count a number between -99 and 99 
    */
  setCount(count: number): void;
  /**
    * Sets the currently displayed value of self to the string in label. Setting an empty label removes the emblem.
    * @param label a short label, or None 
    */
  setLabel(label: string | null): void;
  /**
    * Updates the icon to fetch theme information from the given Gtk.StyleContext.
    * @param style a Gtk.StyleContext 
    */
  setStyleContext(style: import('../Gtk').StyleContext): void;
  /**
    * The icon for the number emblem background 
    */
  backgroundIcon: import('../Gio').Icon;
  /**
    * The icon name for the number emblem background 
    */
  backgroundIconName: string;
  /**
    * The count of the emblem currently displayed 
    */
  count: number;
  /**
    * The label to be displayed over the icon 
    */
  label: string;
  /**
    * The style context to theme the icon appearance 
    */
  styleContext: import('../Gtk').StyleContext;
}

