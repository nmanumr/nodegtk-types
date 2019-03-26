import * as GObject from '../GObject';

export declare interface ThemingEngine extends GObject.Object {
  getProperty(property: string, state: import('../Gtk').StateFlags): import('../GObject').Value;
  getProperty(): void
}

/**
  * Gtk.ThemingEngine was the object used for rendering themed content
in GTK+ widgets. It used to allow overriding GTK+’s default
implementation of rendering functions by allowing engines to be
loaded as modules. 
  */
export declare class ThemingEngine {
  /**
    * Loads and initializes a theming engine module from the standard directories.
    * @param name Theme engine name to load
    * @returns A theming engine, or None if the engine name doesn’t exist. 
    */
  static load(name: string): import('../Gtk').ThemingEngine | null;
  /**
    * Gets the background color for a given state.
    * @param state state to retrieve the color for
    * @returns return value for the background color 
    */
  getBackgroundColor(state: import('../Gtk').StateFlags): import('../Gdk').RGBA;
  /**
    * Gets the border for a given state as a Gtk.Border.
    * @param state state to retrieve the border for
    * @returns return value for the border settings 
    */
  getBorder(state: import('../Gtk').StateFlags): import('../Gtk').Border;
  /**
    * Gets the border color for a given state.
    * @param state state to retrieve the color for
    * @returns return value for the border color 
    */
  getBorderColor(state: import('../Gtk').StateFlags): import('../Gdk').RGBA;
  /**
    * Gets the foreground color for a given state.
    * @param state state to retrieve the color for
    * @returns return value for the foreground color 
    */
  getColor(state: import('../Gtk').StateFlags): import('../Gdk').RGBA;
  /**
    * Returns the widget direction used for rendering.
    * @returns the widget direction 
    */
  getDirection(): import('../Gtk').TextDirection;
  /**
    * Returns the font description for a given state.
    * @param state state to retrieve the font for
    * @returns the Pango.FontDescription for the given state. This object is owned by GTK+ and should not be freed. 
    */
  getFont(state: import('../Gtk').StateFlags): import('../Pango').FontDescription;
  /**
    * Returns the widget direction used for rendering.
    * @returns the widget direction 
    */
  getJunctionSides(): import('../Gtk').JunctionSides;
  /**
    * Gets the margin for a given state as a Gtk.Border.
    * @param state state to retrieve the border for
    * @returns return value for the margin settings 
    */
  getMargin(state: import('../Gtk').StateFlags): import('../Gtk').Border;
  /**
    * Gets the padding for a given state as a Gtk.Border.
    * @param state state to retrieve the padding for
    * @returns return value for the padding settings 
    */
  getPadding(state: import('../Gtk').StateFlags): import('../Gtk').Border;
  /**
    * Returns the widget path used for style matching.
    * @returns A Gtk.WidgetPath 
    */
  getPath(): import('../Gtk').WidgetPath;
  /**
    * Gets a property value as retrieved from the style settings that apply to the currently rendered element.
    * @param property the property name
    * @param state state to retrieve the value for
    * @returns return location for the property value, you must free this memory using GObject.Value.unset() once you are done with it. 
    */
  getProperty(property: string, state: import('../Gtk').StateFlags): import('../GObject').Value;
  /**
    * Returns the Gdk.Screen to which self currently rendering to.
    * @returns a Gdk.Screen, or None. 
    */
  getScreen(): import('../Gdk').Screen | null;
  /**
    * returns the state used when rendering.
    * @returns the state flags 
    */
  getState(): import('../Gtk').StateFlags;
  /**
    * Gets the value for a widget style property.
    * @param propertyName the name of the widget style property
    * @returns Return location for the property value, free with GObject.Value.unset() after use. 
    */
  getStyleProperty(propertyName: string): import('../GObject').Value;
  /**
    * Returns True if the currently rendered contents have defined the given class name.
    * @param styleClass class name to look up
    * @returns True if self has class_name defined 
    */
  hasClass(styleClass: string): boolean;
  /**
    * Returns True if the currently rendered contents have the region defined. If flags_return is not None, it is set to the flags affecting the region.
    * @param styleRegion a region name
    * @returns True if region is defined  flags:return location for region flags 
    */
  hasRegion(styleRegion: string): [boolean, import('../Gtk').RegionFlags];
  /**
    * Looks up and resolves a color name in the current style’s color map.
    * @param colorName color name to lookup
    * @returns True if color_name was found and resolved, False otherwise  color:Return location for the looked up color 
    */
  lookupColor(colorName: string): [boolean, import('../Gdk').RGBA];
  /**
    * Returns True if there is a transition animation running for the current region (see Gtk.StyleContext.push_animatable_region()).
    * @param state a widget state
    * @returns True if there is a running transition animation for state.  progress:return location for the transition progress 
    */
  stateIsRunning(state: import('../Gtk').StateType): [boolean, number];
  /**
    * Theming engine name 
    */
  name: string;
}

