import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface IconFactory extends GObject.Object, Gtk.Buildable { }

/**
  * An icon factory manages a collection of Gtk.IconSet; a Gtk.IconSet manages a
set of variants of a particular icon (i.e. a Gtk.IconSet contains variants for
different sizes and widget states). Icons in an icon factory are named by a
stock ID, which is a simple string identifying the icon. Each Gtk.Style has a
list of Gtk.IconFactory derived from the current theme; those icon factories
are consulted first when searching for an icon. If the theme doesn’t set a
particular icon, GTK+ looks for the icon in a list of default icon factories,
maintained by Gtk.IconFactory.add_default() and
Gtk.IconFactory.remove_default(). Applications with icons should add a default
icon factory with their icons, which will allow themes to override the icons
for the application. 
  */
export declare class IconFactory {
  /**
    * Looks for an icon in the list of default icon factories.  For display to the user, you should use Gtk.Style.lookup_icon_set() on the Gtk.Style for the widget that will display the icon, instead of using this function directly, so that themes are taken into account.
    * @param stockId an icon name
    * @returns a Gtk.IconSet, or None 
    */
  static lookupDefault(stockId: string): import('../Gtk').IconSet;
  /**
    * Creates a new Gtk.IconFactory. An icon factory manages a collection of Gtk.IconSets; a Gtk.IconSet manages a set of variants of a particular icon (i.e. a Gtk.IconSet contains variants for different sizes and widget states). Icons in an icon factory are named by a stock ID, which is a simple string identifying the icon. Each Gtk.Style has a list of Gtk.IconFactorys derived from the current theme; those icon factories are consulted first when searching for an icon. If the theme doesn’t set a particular icon, GTK+ looks for the icon in a list of default icon factories, maintained by Gtk.IconFactory.add_default() and Gtk.IconFactory.remove_default(). Applications with icons should add a default icon factory with their icons, which will allow themes to override the icons for the application.
    * @returns a new Gtk.IconFactory 
    */
  static new(): import('../Gtk').IconFactory;
  /**
    * Adds the given icon_set to the icon factory, under the name stock_id.  stock_id should be namespaced for your application, e.g. “myapp-whatever-icon”.  Normally applications create a Gtk.IconFactory, then add it to the list of default factories with Gtk.IconFactory.add_default(). Then they pass the stock_id to widgets such as Gtk.Image to display the icon. Themes can provide an icon with the same name (such as “myapp-whatever-icon”) to override your application’s default icons. If an icon already existed in self for stock_id, it is unreferenced and replaced with the new icon_set.
    * @param stockId icon name
    * @param iconSet icon set 
    */
  add(stockId: string, iconSet: import('../Gtk').IconSet): void;
  /**
    * Adds an icon factory to the list of icon factories searched by Gtk.Style.lookup_icon_set(). This means that, for example, Gtk.Image.new_from_stock() will be able to find icons in self. There will normally be an icon factory added for each library or application that comes with icons. The default icon factories can be overridden by themes. 
    */
  addDefault(): void;
  /**
    * Looks up stock_id in the icon factory, returning an icon set if found, otherwise None. For display to the user, you should use Gtk.Style.lookup_icon_set() on the Gtk.Style for the widget that will display the icon, instead of using this function directly, so that themes are taken into account.
    * @param stockId an icon name
    * @returns icon set of stock_id. 
    */
  lookup(stockId: string): import('../Gtk').IconSet;
  /**
    * Removes an icon factory from the list of default icon factories. Not normally used; you might use it for a library that can be unloaded or shut down. 
    */
  removeDefault(): void;
}

