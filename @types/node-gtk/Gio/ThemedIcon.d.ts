import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface ThemedIcon extends GObject.Object, Gio.Icon { }

/**
  * Gio.ThemedIcon is an implementation of Gio.Icon that supports icon themes.
Gio.ThemedIcon contains a list of all of the icons present in an icon
theme, so that icons can be looked up quickly. Gio.ThemedIcon does
not provide actual pixmaps for icons, just the icon names.
Ideally something like gtk_icon_theme_choose_icon() should be used to
resolve the list of names so that fallback icons work nicely with
themes that inherit other themes. 
  */
export declare class ThemedIcon {
  /**
    * Creates a new themed icon for iconname.
    * @param iconname a string containing an icon name.
    * @returns a new Gio.ThemedIcon. 
    */
  static new(iconname: string): import('../Gio').ThemedIcon;
  /**
    * Creates a new themed icon for iconnames.
    * @param iconnames an array of strings containing icon names.
    * @returns a new Gio.ThemedIcon 
    */
  static newFromNames(iconnames: string): import('../Gio').ThemedIcon;
  /**
    * Creates a new themed icon for iconname, and all the names that can be created by shortening iconname at ‘-‘ characters.
    * @param iconname a string containing an icon name
    * @returns a new Gio.ThemedIcon. 
    */
  static newWithDefaultFallbacks(iconname: string): import('../Gio').ThemedIcon;
  /**
    * Append a name to the list of icons from within self.
    * @param iconname name of icon to append to list of icons from within self. 
    */
  appendName(iconname: string): void;
  /**
    * Gets the names of icons from within self.
    * @returns a list of icon names. 
    */
  getNames(): string[];
  /**
    * Prepend a name to the list of icons from within self.
    * @param iconname name of icon to prepend to list of icons from within self. 
    */
  prependName(iconname: string): void;
  /**
    * The name of the icon 
    */
  name: string;
  /**
    * An array containing the icon names 
    */
  names: string;
  /**
    * Whether to use default fallbacks found by shortening the name at “-” characters. Ignores names after the first if multiple names are given. 
    */
  useDefaultFallbacks: boolean;
}

