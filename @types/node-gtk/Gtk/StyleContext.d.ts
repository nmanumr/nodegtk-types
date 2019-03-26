import * as GObject from '../GObject';
import { StateFlags } from '.';

export declare interface StyleContext extends GObject.Object {
  getProperty(property: string, state: StateFlags): GObject.Value
  getProperty(): void
}

/**
  * Gtk.StyleContext is an object that stores styling information affecting
a widget defined by Gtk.WidgetPath. 
  */
export declare class StyleContext {
  /**
    * Adds a global style provider to screen, which will be used in style construction for all Gtk.StyleContexts under screen.
    * @param screen a Gdk.Screen
    * @param provider a Gtk.StyleProvider
    * @param priority the priority of the style provider. The lower it is, the earlier it will be used in the style construction. Typically this will be in the range between Gtk.STYLE_PROVIDER_PRIORITY_FALLBACK and Gtk.STYLE_PROVIDER_PRIORITY_USER 
    */
  static addProviderForScreen(screen: import('../Gdk').Screen, provider: import('../Gtk').StyleProvider, priority: number): void;
  /**
    * Creates a standalone Gtk.StyleContext, this style context won’t be attached to any widget, so you may want to call Gtk.StyleContext.set_path() yourself.
    * @returns A newly created Gtk.StyleContext. 
    */
  static new(): import('../Gtk').StyleContext;
  /**
    * Removes provider from the global style providers list in screen.
    * @param screen a Gdk.Screen
    * @param provider a Gtk.StyleProvider 
    */
  static removeProviderForScreen(screen: import('../Gdk').Screen, provider: import('../Gtk').StyleProvider): void;
  /**
    * This function recomputes the styles for all widgets under a particular Gdk.Screen. This is useful when some global parameter has changed that affects the appearance of all widgets, because when a widget gets a new style, it will both redraw and recompute any cached information about its appearance. As an example, it is used when the color scheme changes in the related Gtk.Settings object.
    * @param screen a Gdk.Screen 
    */
  static resetWidgets(screen: import('../Gdk').Screen): void;
  /**
    * Adds a style class to self, so posterior calls to gtk_style_context_get() or any of the gtk_render_*() functions will make use of this new class for styling.
    * @param className class name to use in styling 
    */
  addClass(className: string): void;
  /**
    * Adds a style provider to self, to be used in style construction. Note that a style provider added by this function only affects the style of the widget to which self belongs. If you want to affect the style of all widgets, use Gtk.StyleContext.add_provider_for_screen().
    * @param provider a Gtk.StyleProvider
    * @param priority the priority of the style provider. The lower it is, the earlier it will be used in the style construction. Typically this will be in the range between Gtk.STYLE_PROVIDER_PRIORITY_FALLBACK and Gtk.STYLE_PROVIDER_PRIORITY_USER 
    */
  addProvider(provider: import('../Gtk').StyleProvider, priority: number): void;
  /**
    * Adds a region to self, so posterior calls to gtk_style_context_get() or any of the gtk_render_*() functions will make use of this new region for styling.
    * @param regionName region name to use in styling
    * @param flags flags that apply to the region 
    */
  addRegion(regionName: string, flags: import('../Gtk').RegionFlags): void;
  /**
    * Stops all running animations for region_id and all animatable regions underneath.
    * @param regionId animatable region to stop, or None. See Gtk.StyleContext.push_animatable_region() 
    */
  cancelAnimations(regionId: Object | null): void;
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
    * Returns the font description for a given state. The returned object is const and will remain valid until the Gtk.StyleContext ::changed signal happens.
    * @param state state to retrieve the font for
    * @returns the Pango.FontDescription for the given state.  This object is owned by GTK+ and should not be freed. 
    */
  getFont(state: import('../Gtk').StateFlags): import('../Pango').FontDescription;
  /**
    * Returns the Gdk.FrameClock to which self is attached.
    * @returns a Gdk.FrameClock, or None if self does not have an attached frame clock. 
    */
  getFrameClock(): import('../Gdk').FrameClock | null;
  /**
    * Returns the sides where rendered elements connect visually with others.
    * @returns the junction sides 
    */
  getJunctionSides(): import('../Gtk').JunctionSides;
  /**
    * Gets the margin for a given state as a Gtk.Border. See gtk_style_property_get() and Gtk.STYLE_PROPERTY_MARGIN for details.
    * @param state state to retrieve the border for
    * @returns return value for the margin settings 
    */
  getMargin(state: import('../Gtk').StateFlags): import('../Gtk').Border;
  /**
    * Gets the padding for a given state as a Gtk.Border. See gtk_style_context_get() and Gtk.STYLE_PROPERTY_PADDING for details.
    * @param state state to retrieve the padding for
    * @returns return value for the padding settings 
    */
  getPadding(state: import('../Gtk').StateFlags): import('../Gtk').Border;
  /**
    * Gets the parent context set via Gtk.StyleContext.set_parent(). See that function for details.
    * @returns the parent context or None 
    */
  getParent(): import('../Gtk').StyleContext | null;
  /**
    * Returns the widget path used for style matching.
    * @returns A Gtk.WidgetPath 
    */
  getPath(): import('../Gtk').WidgetPath;
  /**
    * Gets a style property from self for the given state.
    * @param property style property name
    * @param state state to retrieve the property value for
    * @returns return location for the style property value 
    */
  getProperty(property: string, state: import('../Gtk').StateFlags): import('../GObject').Value;
  /**
    * Returns the scale used for assets.
    * @returns the scale 
    */
  getScale(): number;
  /**
    * Returns the Gdk.Screen to which self is attached.
    * @returns a Gdk.Screen. 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Queries the location in the CSS where property was defined for the current self. Note that the state to be queried is taken from Gtk.StyleContext.get_state().
    * @param property style property name
    * @returns None or the section where a value for property was defined 
    */
  getSection(property: string): import('../Gtk').CssSection | null;
  /**
    * Returns the state used for style matching.
    * @returns the state flags 
    */
  getState(): import('../Gtk').StateFlags;
  /**
    * Gets the value for a widget style property.
    * @param propertyName the name of the widget style property
    * @param value Return location for the property value 
    */
  getStyleProperty(propertyName: string, value: import('../GObject').Value): void;
  /**
    * Returns True if self currently has defined the given class name.
    * @param className a class name
    * @returns True if self has class_name defined 
    */
  hasClass(className: string): boolean;
  /**
    * Returns True if self has the region defined. If flags_return is not None, it is set to the flags affecting the region.
    * @param regionName a region name
    * @returns True if region is defined  flags_return:return location for region flags 
    */
  hasRegion(regionName: string): [boolean, import('../Gtk').RegionFlags];
  /**
    * Invalidates self style information, so it will be reconstructed again. It is useful if you modify the self and need the new information immediately. 
    */
  invalidate(): void;
  /**
    * Returns the list of classes currently defined in self.
    * @returns a GLib.List of strings with the currently defined classes. The contents of the list are owned by GTK+, but you must free the list itself with g_list_free() when you are done with it. 
    */
  listClasses(): string[];
  /**
    * Returns the list of regions currently defined in self.
    * @returns a GLib.List of strings with the currently defined regions. The contents of the list are owned by GTK+, but you must free the list itself with g_list_free() when you are done with it. 
    */
  listRegions(): string[];
  /**
    * Looks up and resolves a color name in the self color map.
    * @param colorName color name to lookup
    * @returns True if color_name was found and resolved, False otherwise  color:Return location for the looked up color 
    */
  lookupColor(colorName: string): [boolean, import('../Gdk').RGBA];
  /**
    * Looks up stock_id in the icon factories associated to self and the default icon factory, returning an icon set if found, otherwise None.
    * @param stockId an icon name
    * @returns The looked up Gtk.IconSet, or None 
    */
  lookupIconSet(stockId: string): import('../Gtk').IconSet | null;
  /**
    * Notifies a state change on self, so if the current style makes use of transition animations, one will be started so all rendered elements under region_id are animated for state state being set to value state_value.
    * @param window a Gdk.Window
    * @param regionId animatable region to notify on, or None. See Gtk.StyleContext.push_animatable_region()
    * @param state state to trigger transition for
    * @param stateValue True if state is the state we are changing to, False if we are changing away from it 
    */
  notifyStateChange(window: import('../Gdk').Window, regionId: Object | null, state: import('../Gtk').StateType, stateValue: boolean): void;
  /**
    * Pops an animatable region from self. See Gtk.StyleContext.push_animatable_region(). 
    */
  popAnimatableRegion(): void;
  /**
    * Pushes an animatable region, so all further gtk_render_*() calls between this call and the following Gtk.StyleContext.pop_animatable_region() will potentially show transition animations for this region if Gtk.StyleContext.notify_state_change() is called for a given state, and the current theme/style defines transition animations for state changes.
    * @param regionId unique identifier for the animatable region 
    */
  pushAnimatableRegion(regionId: Object | null): void;
  /**
    * Removes class_name from self.
    * @param className class name to remove 
    */
  removeClass(className: string): void;
  /**
    * Removes provider from the style providers list in self.
    * @param provider a Gtk.StyleProvider 
    */
  removeProvider(provider: import('../Gtk').StyleProvider): void;
  /**
    * Removes a region from self.
    * @param regionName region name to unset 
    */
  removeRegion(regionName: string): void;
  /**
    * Restores self state to a previous stage. See Gtk.StyleContext.save(). 
    */
  restore(): void;
  /**
    * Saves the self state, so temporary modifications done through Gtk.StyleContext.add_class(), Gtk.StyleContext.remove_class(), Gtk.StyleContext.set_state(), etc. can quickly be reverted in one go through Gtk.StyleContext.restore(). 
    */
  save(): void;
  /**
    * This function is analogous to Gdk.Window.scroll(), and should be called together with it so the invalidation areas for any ongoing animation are scrolled together with it.
    * @param window a Gdk.Window used previously in Gtk.StyleContext.notify_state_change()
    * @param dx Amount to scroll in the X axis
    * @param dy Amount to scroll in the Y axis 
    */
  scrollAnimations(window: import('../Gdk').Window, dx: number, dy: number): void;
  /**
    * Sets the background of window to the background pattern or color specified in self for its current state.
    * @param window a Gdk.Window 
    */
  setBackground(window: import('../Gdk').Window): void;
  /**
    * Sets the reading direction for rendering purposes.
    * @param direction the new direction. 
    */
  setDirection(direction: import('../Gtk').TextDirection): void;
  /**
    * Attaches self to the given frame clock.
    * @param frameClock a Gdk.FrameClock 
    */
  setFrameClock(frameClock: import('../Gdk').FrameClock): void;
  /**
    * Sets the sides where rendered elements (mostly through Gtk.render_frame()) will visually connect with other visual elements.
    * @param sides sides where rendered elements are visually connected to other elements 
    */
  setJunctionSides(sides: import('../Gtk').JunctionSides): void;
  /**
    * Sets the parent style context for self. The parent style context is used to implement inheritance of properties.
    * @param parent the new parent or None 
    */
  setParent(parent: import('../Gtk').StyleContext | null): void;
  /**
    * Sets the Gtk.WidgetPath used for style matching. As a consequence, the style will be regenerated to match the new given path.
    * @param path a Gtk.WidgetPath 
    */
  setPath(path: import('../Gtk').WidgetPath): void;
  /**
    * Sets the scale to use when getting image assets for the style.
    * @param scale scale 
    */
  setScale(scale: number): void;
  /**
    * Attaches self to the given screen.
    * @param screen a Gdk.Screen 
    */
  setScreen(screen: import('../Gdk').Screen): void;
  /**
    * Sets the state to be used for style matching.
    * @param flags state to represent 
    */
  setState(flags: import('../Gtk').StateFlags): void;
  /**
    * Returns True if there is a transition animation running for the current region (see Gtk.StyleContext.push_animatable_region()).
    * @param state a widget state
    * @returns True if there is a running transition animation for state.  progress:return location for the transition progress 
    */
  stateIsRunning(state: import('../Gtk').StateType): [boolean, number];
  /**
    * Converts the style context into a string representation.
    * @param flags Flags that determine what to print
    * @returns a newly allocated string representing self 
    */
  toString(flags: import('../Gtk').StyleContextPrintFlags): string;
  /**
    * Text direction deprecated 
    */
  direction: import('../Gtk').TextDirection;
  /**
    * The associated Gdk.FrameClock 
    */
  paintClock: import('../Gdk').FrameClock;
  /**
    * The parent style context 
    */
  parent: import('../Gtk').StyleContext;
  /**
    * The associated Gdk.Screen 
    */
  screen: import('../Gdk').Screen;
}

