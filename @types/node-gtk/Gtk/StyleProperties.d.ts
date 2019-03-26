import * as GObject from '../GObject';
import * as Gtk from '../Gtk';

export declare interface StyleProperties extends GObject.Object, Gtk.StyleProvider {
  getProperty(property: string, state: Gtk.StateFlags): GObject.Value
  getProperty(): void

  setProperty(property: string, state: Gtk.StateFlags, value: GObject.Value): void;
  setProperty(): void;
}

/**
  * Gtk.StyleProperties provides the storage for style information
that is used by Gtk.StyleContext and other Gtk.StyleProvider
implementations. 
  */
export declare class StyleProperties {
  /**
    * Returns a newly created Gtk.StyleProperties
    * @returns a new Gtk.StyleProperties 
    */
  static new(): import('../Gtk').StyleProperties;
  /**
    * Clears all style information from self. 
    */
  clear(): void;
  /**
    * Gets a style property from self for the given state. When done with value, GObject.Value.unset() needs to be called to free any allocated memory.
    * @param property style property name
    * @param state state to retrieve the property value for
    * @returns True if the property exists in self, False otherwise   value:return location for the style property value. 
    */
  getProperty(property: string, state: import('../Gtk').StateFlags): [boolean, import('../GObject').Value];
  /**
    * Returns the symbolic color that is mapped to name.
    * @param name color name to lookup
    * @returns The mapped color 
    */
  lookupColor(name: string): import('../Gtk').SymbolicColor;
  /**
    * Maps color so it can be referenced by name. See Gtk.StyleProperties.lookup_color()
    * @param name color name
    * @param color Gtk.SymbolicColor to map name to 
    */
  mapColor(name: string, color: import('../Gtk').SymbolicColor): void;
  /**
    * Merges into self all the style information contained in props_to_merge. If replace is True, the values will be overwritten, if it is False, the older values will prevail.
    * @param propsToMerge a second Gtk.StyleProperties
    * @param replace whether to replace values or not 
    */
  merge(propsToMerge: import('../Gtk').StyleProperties, replace: boolean): void;
  /**
    * Sets a styling property in self.
    * @param property styling property to set
    * @param state state to set the value for
    * @param value new value for the property 
    */
  setProperty(property: string, state: import('../Gtk').StateFlags, value: import('../GObject').Value): void;
  /**
    * Unsets a style property in self.
    * @param property property to unset
    * @param state state to unset 
    */
  unsetProperty(property: string, state: import('../Gtk').StateFlags): void;
}

