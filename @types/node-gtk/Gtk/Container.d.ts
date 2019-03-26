import * as Gtk from '../Gtk';

// tslint:disable-next-line
export declare interface Container extends Gtk.Widget {
  childNotify(child: import('../Gtk').Widget, childProperty: string): void;
  childNotify(childProperty: string): void;
}

/**
  * A GTK+ user interface is constructed by nesting widgets inside widgets.
Container widgets are the inner nodes in the resulting tree of widgets:
they contain other widgets. So, for example, you might have a Gtk.Window
containing a Gtk.Frame containing a Gtk.Label. If you wanted an image instead
of a textual label inside the frame, you might replace the Gtk.Label widget
with a Gtk.Image widget. 
  */
export declare abstract class Container {
  /**
    * Finds a child property of a container class by name.
    * @param propertyName the name of the child property to find
    * @returns the GObject.ParamSpec of the child property or None if class has no child property with that name. 
    */
  static findChildProperty(propertyName: string): import('../GObject').ParamSpec | null;
  /**
    * Modifies a subclass of Gtk.ContainerClass to automatically add and remove the border-width setting on Gtk.Container.  This allows the subclass to ignore the border width in its size request and allocate methods. The intent is for a subclass to invoke this in its class_init function. 
    */
  static handleBorderWidth(): void;
  /**
    * Installs child properties on a container class.
    * @param pspecs the GObject.ParamSpec array defining the new child properties 
    */
  static installChildProperties(pspecs: import('../GObject').ParamSpec): void;
  /**
    * Installs a child property on a container class.
    * @param propertyId the id for the property
    * @param pspec the GObject.ParamSpec for the property 
    */
  static installChildProperty(propertyId: number, pspec: import('../GObject').ParamSpec): void;
  /**
    * Returns all child properties of a container class.
    * @returns a newly allocated None-terminated array of GObject.ParamSpec. The array must be freed with GLib.free(). 
    */
  static listChildProperties(): import('../GObject').ParamSpec[];
  /**
    * Adds widget to self. Typically used for simple containers such as Gtk.Window, Gtk.Frame, or Gtk.Button; for more complicated layout containers such as Gtk.Box or Gtk.Grid, this function will pick default packing parameters that may not be correct.  So consider functions such as Gtk.Box.pack_start() and Gtk.Grid.attach() as an alternative to Gtk.Container.add() in those cases. A widget may be added to only one container at a time; you can’t place the same widget inside two different containers.
    * @param widget a widget to be placed inside self 
    */
  add(widget: import('../Gtk').Widget): void;
  checkResize(): void;
  /**
    * Returns a list of child property values for the given names. 
    */
  childGet(): void;
  /**
    * Gets the value of a child property for child and self.
    * @param child a widget which is a child of self
    * @param propertyName the name of the property to get
    * @param value Either None or a correctly initialized GObject.Value
    * @returns The Python value of the child property 
    */
  childGetProperty(child: import('../Gtk').Widget, propertyName: string, value: import('../GObject').Value | null): void;
  /**
    * Emits a Gtk.Widget ::child-notify signal for the ‘child property [child-properties]’ child_property on the child.
    * @param child the child widget
    * @param childProperty the name of a child property installed on the class of self 
    */

  childNotify(child: import('../Gtk').Widget, childProperty: string): void;
  /**
    * Emits a Gtk.Widget ::child-notify signal for the ‘child property [child-properties]’ specified by pspec on the child.
    * @param child the child widget
    * @param pspec the GObject.ParamSpec of a child property instealled on the class of self 
    */
  childNotifyByPspec(child: import('../Gtk').Widget, pspec: import('../GObject').ParamSpec): void;
  /**
    * Set a child properties on the given child to key/value pairs. 
    */
  childSet(): void;
  /**
    * Sets a child property for child and self.
    * @param child a widget which is a child of self
    * @param propertyName the name of the property to set
    * @param value the value to set the property to 
    */
  childSetProperty(child: import('../Gtk').Widget, propertyName: string, value: import('../GObject').Value): void;
  /**
    * Returns the type of the children supported by the container.
    * @returns a GObject.GType. 
    */
  childType(): import('../GObject').GType;
  /**
    * Invokes callback on each direct child of self, including children that are considered “internal” (implementation details of the container). “Internal” children generally weren’t added by the user of the container, but were added by the container implementation itself.
    * @param callback a callback
    * @param callbackData callback user data 
    */
  forall(callback: import('../Gtk').Callback, callbackData: Object | null): void;
  /**
    * Invokes callback on each non-internal child of self. See Gtk.Container.forall() for details on what constitutes an “internal” child. For all practical purposes, this function should iterate over precisely those child widgets that were added to the container by the application with explicit add() calls.
    * @param callback a callback
    * @param callbackData callback user data 
    */
  foreach(callback: import('../Gtk').Callback, callbackData: Object | null): void;
  /**
    * Retrieves the border width of the container. See Gtk.Container.set_border_width().
    * @returns the current border width 
    */
  getBorderWidth(): number;
  /**
    * Returns the container’s non-internal children. See Gtk.Container.forall() for details on what constitutes an “internal” child.
    * @returns a newly-allocated list of the container’s non-internal children. 
    */
  getChildren(): import('../Gtk').Widget[];
  /**
    * Retrieves the focus chain of the container, if one has been set explicitly. If no focus chain has been explicitly set, GTK+ computes the focus chain based on the positions of the children. In that case returns None.
    * @returns A list of focusable widgets or None if no focus chain has been explicitly set. 
    */
  getFocusChain(): import('../Gtk').Widget[] | null;
  /**
    * Returns the current focus child widget inside self. This is not the currently focused widget. That can be obtained by calling Gtk.Window.get_focus().
    * @returns The child widget which will receive the focus inside self when the self is focused, or None if none is set. 
    */
  getFocusChild(): import('../Gtk').Widget | null;
  /**
    * Retrieves the horizontal focus adjustment for the container. See Gtk.Container.set_focus_hadjustment ().
    * @returns the horizontal focus adjustment, or None if none has been set. 
    */
  getFocusHadjustment(): import('../Gtk').Adjustment | null;
  /**
    * Retrieves the vertical focus adjustment for the container. See Gtk.Container.set_focus_vadjustment().
    * @returns the vertical focus adjustment, or None if none has been set. 
    */
  getFocusVadjustment(): import('../Gtk').Adjustment | null;
  /**
    * Returns a newly created widget path representing all the widget hierarchy from the toplevel down to and including child.
    * @param child a child of self
    * @returns A newly created Gtk.WidgetPath 
    */
  getPathForChild(child: import('../Gtk').Widget): import('../Gtk').WidgetPath;
  /**
    * Returns the resize mode for the container. See Gtk.Container.set_resize_mode ().
    * @returns the current resize mode 
    */
  getResizeMode(): import('../Gtk').ResizeMode;
  /**
    * When a container receives a call to the draw function, it must send synthetic Gtk.Widget ::draw calls to all children that don’t have their own Gdk.Windows. This function provides a convenient way of doing this. A container, when it receives a call to its Gtk.Widget ::draw function, calls Gtk.Container.propagate_draw() once for each child, passing in the cr the container received.
    * @param child a child of self
    * @param cr Cairo context as passed to the container. If you want to use cr in container’s draw function, consider using cairo.Context.save() and cairo.Context.restore() before calling this function. 
    */
  propagateDraw(child: import('../Gtk').Widget, cr: import('../cairo').Context): void;
  /**
    * Removes widget from self. widget must be inside self. Note that self will own a reference to widget, and that this may be the last reference held; so removing a widget from its container can destroy that widget. If you want to use widget again, you need to add a reference to it before removing it from a container, using GObject.Object.ref(). If you don’t want to use widget again it’s usually more efficient to simply destroy it directly using Gtk.Widget.destroy() since this will remove it from the container and help break any circular reference count cycles.
    * @param widget a current child of self 
    */
  remove(widget: import('../Gtk').Widget): void;
  resizeChildren(): void;
  /**
    * Sets the border width of the container.
    * @param borderWidth amount of blank space to leave outside the container. Valid values are in the range 0-65535 pixels. 
    */
  setBorderWidth(borderWidth: number): void;
  /**
    * Sets a focus chain, overriding the one computed automatically by GTK+.
    * @param focusableWidgets the new focus chain 
    */
  setFocusChain(focusableWidgets: import('../Gtk').Widget): void;
  /**
    * Sets, or unsets if child is None, the focused child of self.
    * @param child a Gtk.Widget, or None 
    */
  setFocusChild(child: import('../Gtk').Widget | null): void;
  /**
    * Hooks up an adjustment to focus handling in a container, so when a child of the container is focused, the adjustment is scrolled to show that widget. This function sets the horizontal alignment. See Gtk.ScrolledWindow.get_hadjustment() for a typical way of obtaining the adjustment and Gtk.Container.set_focus_vadjustment() for setting the vertical adjustment.
    * @param adjustment an adjustment which should be adjusted when the focus is moved among the descendents of self 
    */
  setFocusHadjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Hooks up an adjustment to focus handling in a container, so when a child of the container is focused, the adjustment is scrolled to show that widget. This function sets the vertical alignment. See Gtk.ScrolledWindow.get_vadjustment() for a typical way of obtaining the adjustment and Gtk.Container.set_focus_hadjustment() for setting the horizontal adjustment.
    * @param adjustment an adjustment which should be adjusted when the focus is moved among the descendents of self 
    */
  setFocusVadjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Sets the reallocate_redraws flag of the container to the given value.
    * @param needsRedraws the new value for the container’s reallocate_redraws flag 
    */
  setReallocateRedraws(needsRedraws: boolean): void;
  /**
    * Sets the resize mode for the container.
    * @param resizeMode the new resize mode 
    */
  setResizeMode(resizeMode: import('../Gtk').ResizeMode): void;
  /**
    * Removes a focus chain explicitly set with Gtk.Container.set_focus_chain(). 
    */
  unsetFocusChain(): void;
  /**
    * The width of the empty border outside the containers children 
    */
  borderWidth: number;
  /**
    * Can be used to add a new child to the container deprecated 
    */
  child: import('../Gtk').Widget;
  /**
    * Specify how resize events are handled deprecated 
    */
  resizeMode: import('../Gtk').ResizeMode;
}

