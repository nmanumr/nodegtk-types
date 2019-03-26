import * as GObject from '../GObject';
import * as Atk from '../Atk';
import * as Gtk from '../Gtk';
export declare interface Widget extends GObject.InitiallyUnowned, Atk.ImplementorIface, Gtk.Buildable { }

/**
  * Gtk.Widget is the base class all widgets in GTK+ derive from. It manages the
widget lifecycle, states and style. 
  */
export declare abstract class Widget {
  /**
    * Declares a callback_symbol to handle callback_name from the template XML defined for widget_type. See Gtk.Builder.add_callback_symbol().
    * @param callbackName The name of the callback as expected in the template XML
    * @param callbackSymbol The callback symbol 
    */
  static bindTemplateCallbackFull(callbackName: string, callbackSymbol: import('../GObject').callback): void;
  /**
    * Automatically assign an object declared in the class template XML to be set to a location on a freshly built instance’s private data, or alternatively accessible via Gtk.Widget.get_template_child().
    * @param name The “id” of the child defined in the template XML
    * @param internalChild Whether the child should be accessible as an “internal-child” when this class is used in Gtk.Builder XML
    * @param structOffset The structure offset into the composite widget’s instance public or private structure where the automated child pointer should be set, or 0 to not assign the pointer. 
    */
  static bindTemplateChildFull(name: string, internalChild: boolean, structOffset: number): void;
  /**
    * Finds a style property of a widget class by name.
    * @param propertyName the name of the style property to find
    * @returns the GObject.ParamSpec of the style property or None if class has no style property with that name. 
    */
  static findStyleProperty(propertyName: string): import('../GObject').ParamSpec;
  /**
    * Gets the name used by this class for matching in CSS code. See Gtk.WidgetClass.set_css_name() for details.
    * @returns the CSS name of the given class 
    */
  static getCssName(): string;
  /**
    * Obtains the current default reading direction. See Gtk.Widget.set_default_direction().
    * @returns the current default direction. 
    */
  static getDefaultDirection(): import('../Gtk').TextDirection;
  /**
    * Returns the default style used by all widgets initially.
    * @returns the default style. This Gtk.Style object is owned by GTK+ and should not be modified or freed. 
    */
  static getDefaultStyle(): import('../Gtk').Style;
  /**
    * Installs a style property on a widget class. The parser for the style property is determined by the value type of pspec.
    * @param pspec the GObject.ParamSpec for the property 
    */
  static installStyleProperty(pspec: import('../GObject').ParamSpec): void;
  /**
    * Returns all style properties of a widget class.
    * @returns a newly allocated array of GObject.ParamSpec. The array must be freed with GLib.free(). 
    */
  static listStyleProperties(): import('../GObject').ParamSpec[];
  /**
    * Cancels the effect of a previous call to Gtk.Widget.push_composite_child(). 
    */
  static popCompositeChild(): void;
  /**
    * Makes all newly-created widgets as composite children until the corresponding Gtk.Widget.pop_composite_child() call. 
    */
  static pushCompositeChild(): void;
  /**
    * Sets the default Atk.Role to be set on accessibles created for widgets of self. Accessibles may decide to not honor this setting if their role reporting is more refined. Calls to Gtk.WidgetClass.set_accessible_type() will reset this value.
    * @param role The role to use for accessibles created for self 
    */
  static setAccessibleRole(role: import('../Atk').Role): void;
  /**
    * Sets the type to be used for creating accessibles for widgets of self. The given type must be a subtype of the type used for accessibles of the parent class.
    * @param type The object type that implements the accessible for self 
    */
  static setAccessibleType(type: import('../GObject').GType): void;
  /**
    * For use in language bindings, this will override the default Gtk.BuilderConnectFunc to be used when parsing Gtk.Builder XML from this class’s template data.
    * @param connectFunc The Gtk.BuilderConnectFunc to use when connecting signals in the class template
    * @param connectData The data to pass to connect_func 
    */
  static setConnectFunc(connectFunc: import('../Gtk').builderConnectFunc, connectData: Object | null): void;
  /**
    * Sets the name to be used for CSS matching of widgets.
    * @param name name to use 
    */
  static setCssName(name: string): void;
  /**
    * Sets the default reading direction for widgets where the direction has not been explicitly set by Gtk.Widget.set_direction().
    * @param dir the new default direction. This cannot be Gtk.TextDirection.NONE. 
    */
  static setDefaultDirection(dir: import('../Gtk').TextDirection): void;
  /**
    * This should be called at class initialization time to specify the Gtk.Builder XML to be used to extend a widget.
    * @param templateBytes A GLib.Bytes holding the Gtk.Builder XML 
    */
  static setTemplate(templateBytes: import('../GLib').Bytes): void;
  /**
    * A convenience function to call Gtk.WidgetClass.set_template().
    * @param resourceName The name of the resource to load the template from 
    */
  static setTemplateFromResource(resourceName: string): void;
  /**
    * For widgets that can be “activated” (buttons, menu items, etc.) this function activates them. Activation is what happens when you press Enter on a widget during key navigation. If self isn’t activatable, the function returns False.
    * @returns True if the widget was activatable 
    */
  activate(): boolean;
  /**
    * Installs an accelerator for this self in accel_group that causes accel_signal to be emitted if the accelerator is activated. The accel_group needs to be added to the widget’s toplevel via Gtk.Window.add_accel_group(), and the signal must be of type GObject.SignalFlags.ACTION. Accelerators added through this function are not user changeable during runtime. If you want to support accelerators that can be changed by the user, use Gtk.AccelMap.add_entry() and Gtk.Widget.set_accel_path() or Gtk.MenuItem.set_accel_path() instead.
    * @param accelSignal widget signal to emit on accelerator activation
    * @param accelGroup accel group for this widget, added to its toplevel
    * @param accelKey GDK keyval of the accelerator
    * @param accelMods modifier key combination of the accelerator
    * @param accelFlags flag accelerators, e.g. Gtk.AccelFlags.VISIBLE 
    */
  addAccelerator(accelSignal: string, accelGroup: import('../Gtk').AccelGroup, accelKey: number, accelMods: import('../Gdk').ModifierType, accelFlags: import('../Gtk').AccelFlags): void;
  /**
    * Adds the device events in the bitfield events to the event mask for self. See Gtk.Widget.set_device_events() for details.
    * @param device a Gdk.Device
    * @param events an event mask, see Gdk.EventMask 
    */
  addDeviceEvents(device: import('../Gdk').Device, events: import('../Gdk').EventMask): void;
  /**
    * Adds the events in the bitfield events to the event mask for self. See Gtk.Widget.set_events() and the input handling overview for details.
    * @param events an event mask, see Gdk.EventMask 
    */
  addEvents(events: number): void;
  /**
    * Adds a widget to the list of mnemonic labels for this widget. (See Gtk.Widget.list_mnemonic_labels()). Note the list of mnemonic labels for the widget is cleared when the widget is destroyed, so the caller must make sure to update its internal state at this point as well, by using a connection to the Gtk.Widget ::destroy signal or a weak notifier.
    * @param label a Gtk.Widget that acts as a mnemonic label for self 
    */
  addMnemonicLabel(label: import('../Gtk').Widget): void;
  /**
    * Queues an animation frame update and adds a callback to be called before each frame. Until the tick callback is removed, it will be called frequently (usually at the frame rate of the output device or as quickly as the application can be repainted, whichever is slower). For this reason, is most suitable for handling graphics that change every frame or every few frames. The tick callback does not automatically imply a relayout or repaint. If you want a repaint or relayout, and aren’t changing widget properties that would trigger that (for example, changing the text of a Gtk.Label), then you will have to call Gtk.Widget.queue_resize() or Gtk.Widget.queue_draw_area() yourself.
    * @param callback function to call for updating animations
    * @param userData data to pass to callback
    * @returns an id for the connection of this callback. Remove the callback by passing it to Gtk.Widget.remove_tick_callback() 
    */
  addTickCallback(callback: import('../Gtk').tickCallback, userData: Object | null): number;
  /**
    * Determines whether an accelerator that activates the signal identified by signal_id can currently be activated. This is done by emitting the Gtk.Widget ::can-activate-accel signal on self; if the signal isn’t overridden by a handler or in a derived widget, then the default check is that the widget must be sensitive, and the widget and all its ancestors mapped.
    * @param signalId the ID of a signal installed on self
    * @returns True if the accelerator can be activated. 
    */
  canActivateAccel(signalId: number): boolean;
  /**
    * This function is used by custom widget implementations; if you’re writing an app, you’d use Gtk.Widget.grab_focus() to move the focus to a particular widget, and Gtk.Container.set_focus_chain() to change the focus tab order. So you may want to investigate those functions instead.
    * @param direction direction of focus movement
    * @returns True if focus ended up inside self 
    */
  childFocus(direction: import('../Gtk').DirectionType): boolean;
  /**
    * Emits a Gtk.Widget ::child-notify signal for the ‘child property [child-properties]’ child_property on self.
    * @param childProperty the name of a child property installed on the class of self’s parent 
    */
  childNotify(childProperty: string): void;
  /**
    * Same as Gtk.Widget.path(), but always uses the name of a widget’s type, never uses a custom name set with Gtk.Widget.set_name().
    * @returns path_length:location to store the length of the class path, or None path:location to store the class path as an allocated string, or None path_reversed:location to store the reverse class path as an allocated string, or None 
    */
  classPath(): [number, string, string];
  /**
    * Computes whether a container should give this widget extra space when possible. Containers should check this, rather than looking at Gtk.Widget.get_hexpand() or Gtk.Widget.get_vexpand().
    * @param orientation expand direction
    * @returns whether widget tree rooted here should be expanded 
    */
  computeExpand(orientation: import('../Gtk').Orientation): boolean;
  /**
    * Creates a new Pango.Context with the appropriate font map, font options, font description, and base direction for drawing text for this widget. See also Gtk.Widget.get_pango_context().
    * @returns the new Pango.Context 
    */
  createPangoContext(): import('../Pango').Context;
  /**
    * Creates a new Pango.Layout with the appropriate font map, font description, and base direction for drawing text for this widget.
    * @param text text to set on the layout (can be None)
    * @returns the new Pango.Layout 
    */
  createPangoLayout(text: string | null): import('../Pango').Layout;
  /**
    * Destroys a widget. 
    */
  destroy(): void;
  /**
    * This function sets widget_pointer to None if widget_pointer != None.  It’s intended to be used as a callback connected to the “destroy” signal of a widget. You connect Gtk.Widget.destroyed() as a signal handler, and pass the address of your widget variable as user data. Then when the widget is destroyed, the variable will be set to None. Useful for example to avoid multiple copies of the same dialog.
    * @param widgetPointer address of a variable that contains self
    * @returns address of a variable that contains self 
    */
  destroyed(widgetPointer: import('../Gtk').Widget): import('../Gtk').Widget;
  /**
    * Returns True if device has been shadowed by a GTK+ device grab on another widget, so it would stop sending events to self. This may be used in the Gtk.Widget ::grab-notify signal to check for specific devices. See Gtk.device_grab_add().
    * @param device a Gdk.Device
    * @returns True if there is an ongoing grab on device by another Gtk.Widget than self. 
    */
  deviceIsShadowed(device: import('../Gdk').Device): boolean;
  /**
    * This function is equivalent to Gtk.Widget.drag_begin_with_coordinates(), passing -1, -1 as coordinates.
    * @param targets The targets (data formats) in which the source can provide the data
    * @param actions A bitmask of the allowed drag actions for this drag
    * @param button The button the user clicked to start the drag
    * @param event The event that triggered the start of the drag, or None if none can be obtained.
    * @returns the context for this drag 
    */
  dragBegin(targets: import('../Gtk').TargetList, actions: import('../Gdk').DragAction, button: number, event: import('../Gdk').Event | null): import('../Gdk').DragContext;
  /**
    * Initiates a drag on the source side. The function only needs to be used when the application is starting drags itself, and is not needed when Gtk.Widget.drag_source_set() is used.
    * @param targets The targets (data formats) in which the source can provide the data
    * @param actions A bitmask of the allowed drag actions for this drag
    * @param button The button the user clicked to start the drag
    * @param event The event that triggered the start of the drag, or None if none can be obtained.
    * @param x The initial x coordinate to start dragging from, in the coordinate space of self. If -1 is passed, the coordinates are retrieved from event or the current pointer position
    * @param y The initial y coordinate to start dragging from, in the coordinate space of self. If -1 is passed, the coordinates are retrieved from event or the current pointer position
    * @returns the context for this drag 
    */
  dragBeginWithCoordinates(targets: import('../Gtk').TargetList, actions: import('../Gdk').DragAction, button: number, event: import('../Gdk').Event | null, x: number, y: number): import('../Gdk').DragContext;
  /**
    * Checks to see if a mouse drag starting at (start_x, start_y) and ending at (current_x, current_y) has passed the GTK+ drag threshold, and thus should trigger the beginning of a drag-and-drop operation.
    * @param startX X coordinate of start of drag
    * @param startY Y coordinate of start of drag
    * @param currentX current X coordinate
    * @param currentY current Y coordinate
    * @returns True if the drag threshold has been passed. 
    */
  dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean;
  /**
    * Add the image targets supported by Gtk.SelectionData to the target list of the drag destination. The targets are added with info = 0. If you need another value, use Gtk.TargetList.add_image_targets() and Gtk.Widget.drag_dest_set_target_list(). 
    */
  dragDestAddImageTargets(): void;
  /**
    * Add the text targets supported by Gtk.SelectionData to the target list of the drag destination. The targets are added with info = 0. If you need another value, use Gtk.TargetList.add_text_targets() and Gtk.Widget.drag_dest_set_target_list(). 
    */
  dragDestAddTextTargets(): void;
  /**
    * Add the URI targets supported by Gtk.SelectionData to the target list of the drag destination. The targets are added with info = 0. If you need another value, use Gtk.TargetList.add_uri_targets() and Gtk.Widget.drag_dest_set_target_list(). 
    */
  dragDestAddUriTargets(): void;
  /**
    * Looks for a match between the supported targets of context and the dest_target_list, returning the first matching target, otherwise returning %GDK_NONE. dest_target_list should usually be the return value from Gtk.Widget.drag_dest_get_target_list(), but some widgets may have different valid targets for different parts of the widget; in that case, they will have to implement a drag_motion handler that passes the correct target list to this function.
    * @param context drag context
    * @param targetList list of droppable targets, or None to use Gtk.Widget.drag_dest_get_target_list (self).
    * @returns first target that the source offers and the dest can accept, or %GDK_NONE 
    */
  dragDestFindTarget(context: import('../Gdk').DragContext, targetList: import('../Gtk').TargetList | null): import('../Gdk').Atom;
  /**
    * Returns the list of targets this widget can accept from drag-and-drop.
    * @returns the Gtk.TargetList, or None if none 
    */
  dragDestGetTargetList(): import('../Gtk').TargetList | null;
  /**
    * Returns whether the widget has been configured to always emit Gtk.Widget ::drag-motion signals.
    * @returns True if the widget always emits Gtk.Widget ::drag-motion events 
    */
  dragDestGetTrackMotion(): boolean;
  /**
    * Sets a widget as a potential drop destination, and adds default behaviors.
    * @param flags which types of default drag behavior to use
    * @param targets a pointer to an array of Gtk.TargetEntrys indicating the drop types that this self will accept, or None. Later you can access the list with Gtk.Widget.drag_dest_get_target_list() and Gtk.Widget.drag_dest_find_target().
    * @param actions a bitmask of possible actions for a drop onto this self. 
    */
  dragDestSet(flags: import('../Gtk').DestDefaults, targets: import('../Gtk').TargetEntry | null, actions: import('../Gdk').DragAction): void;
  /**
    * Sets this widget as a proxy for drops to another window.
    * @param proxyWindow the window to which to forward drag events
    * @param protocol the drag protocol which the proxy_window accepts (You can use gdk_drag_get_protocol() to determine this)
    * @param useCoordinates If True, send the same coordinates to the destination, because it is an embedded subwindow. 
    */
  dragDestSetProxy(proxyWindow: import('../Gdk').Window, protocol: import('../Gdk').DragProtocol, useCoordinates: boolean): void;
  /**
    * Sets the target types that this widget can accept from drag-and-drop. The widget must first be made into a drag destination with Gtk.Widget.drag_dest_set().
    * @param targetList list of droppable targets, or None for none 
    */
  dragDestSetTargetList(targetList: import('../Gtk').TargetList | null): void;
  /**
    * Tells the widget to emit Gtk.Widget ::drag-motion and Gtk.Widget ::drag-leave events regardless of the targets and the Gtk.DestDefaults.MOTION flag.
    * @param trackMotion whether to accept all targets 
    */
  dragDestSetTrackMotion(trackMotion: boolean): void;
  /**
    * Clears information about a drop destination set with Gtk.Widget.drag_dest_set(). The widget will no longer receive notification of drags. 
    */
  dragDestUnset(): void;
  /**
    * Gets the data associated with a drag. When the data is received or the retrieval fails, GTK+ will emit a Gtk.Widget ::drag-data-received signal. Failure of the retrieval is indicated by the length field of the selection_data signal parameter being negative. However, when Gtk.Widget.drag_get_data() is called implicitely because the Gtk.DestDefaults.DROP was set, then the widget will not receive notification of failed drops.
    * @param context the drag context
    * @param target the target (form of the data) to retrieve
    * @param time a timestamp for retrieving the data. This will generally be the time received in a Gtk.Widget ::drag-motion or Gtk.Widget ::drag-drop signal 
    */
  dragGetData(context: import('../Gdk').DragContext, target: import('../Gdk').Atom, time: number): void;
  /**
    * Highlights a widget as a currently hovered drop target. To end the highlight, call Gtk.Widget.drag_unhighlight(). GTK+ calls this automatically if Gtk.DestDefaults.HIGHLIGHT is set. 
    */
  dragHighlight(): void;
  /**
    * Add the writable image targets supported by Gtk.SelectionData to the target list of the drag source. The targets are added with info = 0. If you need another value, use Gtk.TargetList.add_image_targets() and Gtk.Widget.drag_source_set_target_list(). 
    */
  dragSourceAddImageTargets(): void;
  /**
    * Add the text targets supported by Gtk.SelectionData to the target list of the drag source.  The targets are added with info = 0. If you need another value, use Gtk.TargetList.add_text_targets() and Gtk.Widget.drag_source_set_target_list(). 
    */
  dragSourceAddTextTargets(): void;
  /**
    * Add the URI targets supported by Gtk.SelectionData to the target list of the drag source.  The targets are added with info = 0. If you need another value, use Gtk.TargetList.add_uri_targets() and Gtk.Widget.drag_source_set_target_list(). 
    */
  dragSourceAddUriTargets(): void;
  /**
    * Gets the list of targets this widget can provide for drag-and-drop.
    * @returns the Gtk.TargetList, or None if none 
    */
  dragSourceGetTargetList(): import('../Gtk').TargetList | null;
  /**
    * Sets up a widget so that GTK+ will start a drag operation when the user clicks and drags on the widget. The widget must have a window.
    * @param startButtonMask the bitmask of buttons that can start the drag
    * @param targets the table of targets that the drag will support, may be None
    * @param actions the bitmask of possible actions for a drag from this widget 
    */
  dragSourceSet(startButtonMask: import('../Gdk').ModifierType, targets: import('../Gtk').TargetEntry | null, actions: import('../Gdk').DragAction): void;
  /**
    * Sets the icon that will be used for drags from a particular source to icon. See the docs for Gtk.IconTheme for more details.
    * @param icon A Gio.Icon 
    */
  dragSourceSetIconGicon(icon: import('../Gio').Icon): void;
  /**
    * Sets the icon that will be used for drags from a particular source to a themed icon. See the docs for Gtk.IconTheme for more details.
    * @param iconName name of icon to use 
    */
  dragSourceSetIconName(iconName: string): void;
  /**
    * Sets the icon that will be used for drags from a particular widget from a GdkPixbuf.Pixbuf. GTK+ retains a reference for pixbuf and will release it when it is no longer needed.
    * @param pixbuf the GdkPixbuf.Pixbuf for the drag icon 
    */
  dragSourceSetIconPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Sets the icon that will be used for drags from a particular source to a stock icon.
    * @param stockId the ID of the stock icon to use 
    */
  dragSourceSetIconStock(stockId: string): void;
  /**
    * Changes the target types that this widget offers for drag-and-drop. The widget must first be made into a drag source with Gtk.Widget.drag_source_set().
    * @param targetList list of draggable targets, or None for none 
    */
  dragSourceSetTargetList(targetList: import('../Gtk').TargetList | null): void;
  /**
    * Undoes the effects of Gtk.Widget.drag_source_set(). 
    */
  dragSourceUnset(): void;
  /**
    * Removes a highlight set by Gtk.Widget.drag_highlight() from a widget. 
    */
  dragUnhighlight(): void;
  /**
    * Draws self to cr. The top left corner of the widget will be drawn to the currently set origin point of cr.
    * @param cr a cairo context to draw to 
    */
  draw(cr: import('../cairo').Context): void;
  /**
    * Ensures that self has a style (self->style). 
    */
  ensureStyle(): void;
  /**
    * Notifies the user about an input-related error on this widget. If the Gtk.Settings :gtk-error-bell setting is True, it calls Gdk.Window.beep(), otherwise it does nothing. 
    */
  errorBell(): void;
  /**
    * Rarely-used function. This function is used to emit the event signals on a widget (those signals should never be emitted without using this function to do so). If you want to synthesize an event though, don’t use this function; instead, use Gtk.main_do_event() so the event will behave as if it were in the event queue. Don’t synthesize expose events; instead, use Gdk.Window.invalidate_rect() to invalidate a region of the window.
    * @param event a Gdk.Event
    * @returns return from the event signal emission (True if the event was handled) 
    */
  event(event: import('../Gdk').Event): boolean;
  /**
    * Stops emission of Gtk.Widget ::child-notify signals on self. The signals are queued until Gtk.Widget.thaw_child_notify() is called on self. 
    */
  freezeChildNotify(): void;
  /**
    * Returns the accessible object that describes the widget to an assistive technology.
    * @returns the Atk.Object associated with self 
    */
  getAccessible(): import('../Atk').Object;
  /**
    * Retrieves the Gio.ActionGroup that was registered using prefix. The resulting Gio.ActionGroup may have been registered to self or any Gtk.Widget in its ancestry.
    * @param prefix The “prefix” of the action group.
    * @returns A Gio.ActionGroup or None. 
    */
  getActionGroup(prefix: string): import('../Gio').ActionGroup | null;
  /**
    * Returns the baseline that has currently been allocated to self. This function is intended to be used when implementing handlers for the Gtk.Widget ::draw function, and when allocating child widgets in #GtkWidget::size_allocate.
    * @returns the baseline of the self, or -1 if none 
    */
  getAllocatedBaseline(): number;
  /**
    * Returns the height that has currently been allocated to self. This function is intended to be used when implementing handlers for the Gtk.Widget ::draw function.
    * @returns the height of the self 
    */
  getAllocatedHeight(): number;
  /**
    * Retrieves the widget’s allocated size.
    * @returns allocation:a pointer to a #GtkAllocation to copy to baseline:a pointer to an integer to copy to 
    */
  getAllocatedSize(): [import('../Gdk').Rectangle, number];
  /**
    * Returns the width that has currently been allocated to self. This function is intended to be used when implementing handlers for the Gtk.Widget ::draw function.
    * @returns the width of the self 
    */
  getAllocatedWidth(): number;
  /**
    * Retrieves the widget’s allocation.
    * @returns a pointer to a #GtkAllocation to copy to 
    */
  getAllocation(): import('../Gdk').Rectangle;
  /**
    * Gets the first ancestor of self with type widget_type. For example, gtk_widget_get_ancestor (widget, GTK_TYPE_BOX) gets the first Gtk.Box that’s an ancestor of self. No reference will be added to the returned widget; it should not be unreferenced. See note about checking for a toplevel Gtk.Window in the docs for Gtk.Widget.get_toplevel().
    * @param widgetType ancestor type
    * @returns the ancestor widget, or None if not found 
    */
  getAncestor(widgetType: import('../GObject').GType): import('../Gtk').Widget | null;
  /**
    * Determines whether the application intends to draw on the widget in an Gtk.Widget ::draw handler.
    * @returns True if the widget is app paintable 
    */
  getAppPaintable(): boolean;
  /**
    * Determines whether self can be a default widget. See Gtk.Widget.set_can_default().
    * @returns True if self can be a default widget, False otherwise 
    */
  getCanDefault(): boolean;
  /**
    * Determines whether self can own the input focus. See Gtk.Widget.set_can_focus().
    * @returns True if self can own the input focus, False otherwise 
    */
  getCanFocus(): boolean;
  /**
    * This function is only for use in widget implementations. Obtains self->requisition, unless someone has forced a particular geometry on the widget (e.g. with Gtk.Widget.set_size_request()), in which case it returns that geometry instead of the widget’s requisition.
    * @returns a Gtk.Requisition to be filled in 
    */
  getChildRequisition(): import('../Gtk').Requisition;
  /**
    * Gets the value set with Gtk.Widget.set_child_visible(). If you feel a need to use this function, your code probably needs reorganization.
    * @returns True if the widget is mapped with the parent. 
    */
  getChildVisible(): boolean;
  /**
    * Retrieves the widget’s clip area.
    * @returns a pointer to a #GtkAllocation to copy to 
    */
  getClip(): import('../Gdk').Rectangle;
  /**
    * Returns the clipboard object for the given selection to be used with self. self must have a Gdk.Display associated with it, so must be attached to a toplevel window.
    * @param selection a Gdk.Atom which identifies the clipboard to use. %GDK_SELECTION_CLIPBOARD gives the default clipboard. Another common value is %GDK_SELECTION_PRIMARY, which gives the primary X selection.
    * @returns the appropriate clipboard object. If no clipboard already exists, a new one will be created. Once a clipboard object has been created, it is persistent for all time. 
    */
  getClipboard(selection: import('../Gdk').Atom): import('../Gtk').Clipboard;
  /**
    * Obtains the composite name of a widget.
    * @returns the composite name of self, or None if self is not a composite child. The string should be freed when it is no longer needed. 
    */
  getCompositeName(): string;
  /**
    * Returns whether device can interact with self and its children. See Gtk.Widget.set_device_enabled().
    * @param device a Gdk.Device
    * @returns True is device is enabled for self 
    */
  getDeviceEnabled(device: import('../Gdk').Device): boolean;
  /**
    * Returns the events mask for the widget corresponding to an specific device. These are the events that the widget will receive when device operates on it.
    * @param device a Gdk.Device
    * @returns device event mask for self 
    */
  getDeviceEvents(device: import('../Gdk').Device): import('../Gdk').EventMask;
  /**
    * Gets the reading direction for a particular widget. See Gtk.Widget.set_direction().
    * @returns the reading direction for the widget. 
    */
  getDirection(): import('../Gtk').TextDirection;
  /**
    * Get the Gdk.Display for the toplevel window associated with this widget. This function can only be called after the widget has been added to a widget hierarchy with a Gtk.Window at the top.
    * @returns the Gdk.Display for the toplevel for this widget. 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Determines whether the widget is double buffered.
    * @returns True if the widget is double buffered 
    */
  getDoubleBuffered(): boolean;
  /**
    * Returns the event mask (see Gdk.EventMask) for the widget. These are the events that the widget will receive.
    * @returns event mask for self 
    */
  getEvents(): number;
  /**
    * Returns whether the widget should grab focus when it is clicked with the mouse. See Gtk.Widget.set_focus_on_click().
    * @returns True if the widget should grab focus when it is clicked with the mouse. 
    */
  getFocusOnClick(): boolean;
  /**
    * Gets the font map that has been set with Gtk.Widget.set_font_map().
    * @returns A Pango.FontMap, or None 
    */
  getFontMap(): import('../Pango').FontMap | null;
  /**
    * Returns the cairo.FontOptions used for Pango rendering. When not set, the defaults font options for the Gdk.Screen will be used.
    * @returns the cairo.FontOptions or None if not set 
    */
  getFontOptions(): import('../cairo').FontOptions | null;
  /**
    * Obtains the frame clock for a widget. The frame clock is a global “ticker” that can be used to drive animations and repaints.  The most common reason to get the frame clock is to call Gdk.FrameClock.get_frame_time(), in order to get a time to use for animating. For example you might record the start of the animation with an initial value from Gdk.FrameClock.get_frame_time(), and then update the animation by calling Gdk.FrameClock.get_frame_time() again during each repaint.
    * @returns a Gdk.FrameClock, or None if widget is unrealized 
    */
  getFrameClock(): import('../Gdk').FrameClock | null;
  /**
    * Gets the value of the Gtk.Widget :halign property.
    * @returns the horizontal alignment of self 
    */
  getHalign(): import('../Gtk').Align;
  /**
    * Returns the current value of the has-tooltip property.  See Gtk.Widget :has-tooltip for more information.
    * @returns current value of has-tooltip on self. 
    */
  getHasTooltip(): boolean;
  /**
    * Determines whether self has a Gdk.Window of its own. See Gtk.Widget.set_has_window().
    * @returns True if self has a window, False otherwise 
    */
  getHasWindow(): boolean;
  /**
    * Gets whether the widget would like any available extra horizontal space. When a user resizes a Gtk.Window, widgets with expand=:obj:True generally receive the extra space. For example, a list or scrollable area or document in your window would often be set to expand.
    * @returns whether hexpand flag is set 
    */
  getHexpand(): boolean;
  /**
    * Gets whether Gtk.Widget.set_hexpand() has been used to explicitly set the expand flag on this widget.
    * @returns whether hexpand has been explicitly set 
    */
  getHexpandSet(): boolean;
  /**
    * Whether the widget is mapped.
    * @returns True if the widget is mapped, False otherwise. 
    */
  getMapped(): boolean;
  /**
    * Gets the value of the Gtk.Widget :margin-bottom property.
    * @returns The bottom margin of self 
    */
  getMarginBottom(): number;
  /**
    * Gets the value of the Gtk.Widget :margin-end property.
    * @returns The end margin of self 
    */
  getMarginEnd(): number;
  /**
    * Gets the value of the Gtk.Widget :margin-left property.
    * @returns The left margin of self 
    */
  getMarginLeft(): number;
  /**
    * Gets the value of the Gtk.Widget :margin-right property.
    * @returns The right margin of self 
    */
  getMarginRight(): number;
  /**
    * Gets the value of the Gtk.Widget :margin-start property.
    * @returns The start margin of self 
    */
  getMarginStart(): number;
  /**
    * Gets the value of the Gtk.Widget :margin-top property.
    * @returns The top margin of self 
    */
  getMarginTop(): number;
  /**
    * Returns the modifier mask the self’s windowing system backend uses for a particular purpose.
    * @param intent the use case for the modifier mask
    * @returns the modifier mask used for intent. 
    */
  getModifierMask(intent: import('../Gdk').ModifierIntent): import('../Gdk').ModifierType;
  /**
    * Returns the current modifier style for the widget. (As set by Gtk.Widget.modify_style().) If no style has previously set, a new Gtk.RcStyle will be created with all values unset, and set as the modifier style for the widget. If you make changes to this rc style, you must call Gtk.Widget.modify_style(), passing in the returned rc style, to make sure that your changes take effect.
    * @returns the modifier style for the widget. This rc style is owned by the widget. If you want to keep a pointer to value this around, you must add a refcount using GObject.Object.ref(). 
    */
  getModifierStyle(): import('../Gtk').RcStyle;
  /**
    * Retrieves the name of a widget. See Gtk.Widget.set_name() for the significance of widget names.
    * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed 
    */
  getName(): string;
  /**
    * Returns the current value of the Gtk.Widget :no-show-all property, which determines whether calls to Gtk.Widget.show_all() will affect this widget.
    * @returns the current value of the “no-show-all” property. 
    */
  getNoShowAll(): boolean;
  /**
    * Fetches the requested opacity for this widget. See Gtk.Widget.set_opacity().
    * @returns the requested opacity for this widget. 
    */
  getOpacity(): number;
  /**
    * Gets a Pango.Context with the appropriate font map, font description, and base direction for this widget. Unlike the context returned by Gtk.Widget.create_pango_context(), this context is owned by the widget (it can be used until the screen for the widget changes or the widget is removed from its toplevel), and will be updated to match any changes to the widget’s attributes. This can be tracked by using the Gtk.Widget ::screen-changed signal on the widget.
    * @returns the Pango.Context for the widget. 
    */
  getPangoContext(): import('../Pango').Context;
  /**
    * Returns the parent container of self.
    * @returns the parent container of self, or None 
    */
  getParent(): import('../Gtk').Widget | null;
  /**
    * Gets self’s parent window, or None if it does not have one.
    * @returns the parent window of self, or None if it does not have a parent window. 
    */
  getParentWindow(): import('../Gdk').Window | null;
  /**
    * Returns the Gtk.WidgetPath representing self, if the widget is not connected to a toplevel widget, a partial path will be created.
    * @returns The Gtk.WidgetPath representing self 
    */
  getPath(): import('../Gtk').WidgetPath;
  /**
    * Obtains the location of the mouse pointer in widget coordinates. Widget coordinates are a bit odd; for historical reasons, they are defined as self->window coordinates for widgets that return True for Gtk.Widget.get_has_window(); and are relative to self->allocation.x, self->allocation.y otherwise.
    * @returns x:return location for the X coordinate, or None y:return location for the Y coordinate, or None 
    */
  getPointer(): [number, number];
  /**
    * Retrieves a widget’s initial minimum and natural height.
    * @returns minimum_height:location to store the minimum height, or None natural_height:location to store the natural height, or None 
    */
  getPreferredHeight(): [number, number];
  /**
    * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given the specified width, or the default height if width is -1. The baselines may be -1 which means that no baseline is requested for this widget.
    * @param width the width which is available for allocation, or -1 if none
    * @returns minimum_height:location for storing the minimum height, or None natural_height:location for storing the natural height, or None minimum_baseline:  location for storing the baseline for the minimum height, or None natural_baseline:  location for storing the baseline for the natural height, or None 
    */
  getPreferredHeightAndBaselineForWidth(width: number): [number, number, number, number];
  /**
    * Retrieves a widget’s minimum and natural height if it would be given the specified width.
    * @param width the width which is available for allocation
    * @returns minimum_height:location for storing the minimum height, or None natural_height:location for storing the natural height, or None 
    */
  getPreferredHeightForWidth(width: number): [number, number];
  /**
    * Retrieves the minimum and natural size of a widget, taking into account the widget’s preference for height-for-width management.
    * @returns minimum_size:location for storing the minimum size, or None natural_size:location for storing the natural size, or None 
    */
  getPreferredSize(): [import('../Gtk').Requisition, import('../Gtk').Requisition];
  /**
    * Retrieves a widget’s initial minimum and natural width.
    * @returns minimum_width:location to store the minimum width, or None natural_width:location to store the natural width, or None 
    */
  getPreferredWidth(): [number, number];
  /**
    * Retrieves a widget’s minimum and natural width if it would be given the specified height.
    * @param height the height which is available for allocation
    * @returns minimum_width:location for storing the minimum width, or None natural_width:location for storing the natural width, or None 
    */
  getPreferredWidthForHeight(height: number): [number, number];
  /**
    * Determines whether self is realized.
    * @returns True if self is realized, False otherwise 
    */
  getRealized(): boolean;
  /**
    * Determines whether self is always treated as the default widget within its toplevel when it has the focus, even if another widget is the default.
    * @returns True if self acts as the default widget when focused, False otherwise 
    */
  getReceivesDefault(): boolean;
  /**
    * Gets whether the widget prefers a height-for-width layout or a width-for-height layout.
    * @returns The Gtk.SizeRequestMode preferred by self. 
    */
  getRequestMode(): import('../Gtk').SizeRequestMode;
  /**
    * Retrieves the widget’s requisition.
    * @returns a pointer to a Gtk.Requisition to copy to 
    */
  getRequisition(): import('../Gtk').Requisition;
  /**
    * Get the root window where this widget is located. This function can only be called after the widget has been added to a widget hierarchy with Gtk.Window at the top.
    * @returns the Gdk.Window root window for the toplevel for this widget. 
    */
  getRootWindow(): import('../Gdk').Window;
  /**
    * Retrieves the internal scale factor that maps from window coordinates to the actual device pixels. On traditional systems this is 1, on high density outputs, it can be a higher value (typically 2).
    * @returns the scale factor for self 
    */
  getScaleFactor(): number;
  /**
    * Get the Gdk.Screen from the toplevel window associated with this widget. This function can only be called after the widget has been added to a widget hierarchy with a Gtk.Window at the top.
    * @returns the Gdk.Screen for the toplevel for this widget. 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Returns the widget’s sensitivity (in the sense of returning the value that has been set using Gtk.Widget.set_sensitive()).
    * @returns True if the widget is sensitive 
    */
  getSensitive(): boolean;
  /**
    * Gets the settings object holding the settings used for this widget.
    * @returns the relevant Gtk.Settings object 
    */
  getSettings(): import('../Gtk').Settings;
  /**
    * Gets the size request that was explicitly set for the widget using Gtk.Widget.set_size_request(). A value of -1 stored in width or height indicates that that dimension has not been set explicitly and the natural requisition of the widget will be used instead. See Gtk.Widget.set_size_request(). To get the size a widget will actually request, call Gtk.Widget.get_preferred_size() instead of this function.
    * @returns width:return location for width, or None height:return location for height, or None 
    */
  getSizeRequest(): [number, number];
  /**
    * Returns the widget’s state. See Gtk.Widget.set_state().
    * @returns the state of self. 
    */
  getState(): import('../Gtk').StateType;
  /**
    * Returns the widget state as a flag set. It is worth mentioning that the effective Gtk.StateFlags.INSENSITIVE state will be returned, that is, also based on parent insensitivity, even if self itself is sensitive.
    * @returns The state flags for widget 
    */
  getStateFlags(): import('../Gtk').StateFlags;
  /**
    * Simply an accessor function that returns self->style.
    * @returns the widget’s Gtk.Style 
    */
  getStyle(): import('../Gtk').Style;
  /**
    * Returns the style context associated to self. The returned object is guaranteed to be the same for the lifetime of self.
    * @returns a Gtk.StyleContext. This memory is owned by self and must not be freed. 
    */
  getStyleContext(): import('../Gtk').StyleContext;
  /**
    * Returns True if self is multiple pointer aware. See Gtk.Widget.set_support_multidevice() for more information.
    * @returns True if self is multidevice aware. 
    */
  getSupportMultidevice(): boolean;
  /**
    * Fetch an object build from the template XML for widget_type in this self instance.
    * @param widgetType The GObject.GType to get a template child for
    * @param name The “id” of the child defined in the template XML
    * @returns The object built in the template XML with the id name 
    */
  getTemplateChild(widgetType: import('../GObject').GType, name: string): import('../GObject').Object;
  /**
    * Gets the contents of the tooltip for self.
    * @returns the tooltip text, or None. You should free the returned string with GLib.free() when done. 
    */
  getTooltipMarkup(): string | null;
  /**
    * Gets the contents of the tooltip for self.
    * @returns the tooltip text, or None. You should free the returned string with GLib.free() when done. 
    */
  getTooltipText(): string | null;
  /**
    * Returns the Gtk.Window of the current tooltip. This can be the Gtk.Window created by default, or the custom tooltip window set using Gtk.Widget.set_tooltip_window().
    * @returns The Gtk.Window of the current tooltip. 
    */
  getTooltipWindow(): import('../Gtk').Window;
  /**
    * This function returns the topmost widget in the container hierarchy self is a part of. If self has no parent widgets, it will be returned as the topmost widget. No reference will be added to the returned widget; it should not be unreferenced.
    * @returns the topmost ancestor of self, or self itself if there’s no ancestor. 
    */
  getToplevel(): import('../Gtk').Widget;
  /**
    * Gets the value of the Gtk.Widget :valign property.
    * @returns the vertical alignment of self, ignoring baseline alignment 
    */
  getValign(): import('../Gtk').Align;
  /**
    * Gets the value of the Gtk.Widget :valign property, including Gtk.Align.BASELINE.
    * @returns the vertical alignment of self 
    */
  getValignWithBaseline(): import('../Gtk').Align;
  /**
    * Gets whether the widget would like any available extra vertical space.
    * @returns whether vexpand flag is set 
    */
  getVexpand(): boolean;
  /**
    * Gets whether Gtk.Widget.set_vexpand() has been used to explicitly set the expand flag on this widget.
    * @returns whether vexpand has been explicitly set 
    */
  getVexpandSet(): boolean;
  /**
    * Determines whether the widget is visible. If you want to take into account whether the widget’s parent is also marked as visible, use Gtk.Widget.is_visible() instead.
    * @returns True if the widget is visible 
    */
  getVisible(): boolean;
  /**
    * Gets the visual that will be used to render self.
    * @returns the visual for self 
    */
  getVisual(): import('../Gdk').Visual;
  /**
    * Returns the widget’s window if it is realized, None otherwise
    * @returns self’s window. 
    */
  getWindow(): import('../Gdk').Window | null;
  /**
    * Makes self the current grabbed widget. 
    */
  grabAdd(): void;
  /**
    * Causes self to become the default widget. self must be able to be a default widget; typically you would ensure this yourself by calling Gtk.Widget.set_can_default() with a True value. The default widget is activated when the user presses Enter in a window. Default widgets must be activatable, that is, Gtk.Widget.activate() should affect them. Note that Gtk.Entry widgets require the “activates-default” property set to True before they activate the default widget when Enter is pressed and the Gtk.Entry is focused. 
    */
  grabDefault(): void;
  /**
    * Causes self to have the keyboard focus for the Gtk.Window it’s inside. self must be a focusable widget, such as a Gtk.Entry; something like Gtk.Frame won’t work. 
    */
  grabFocus(): void;
  /**
    * Removes the grab from the given widget. 
    */
  grabRemove(): void;
  /**
    * Determines whether self is the current default widget within its toplevel. See Gtk.Widget.set_can_default().
    * @returns True if self is the current default widget within its toplevel, False otherwise 
    */
  hasDefault(): boolean;
  /**
    * Determines if the widget has the global input focus. See Gtk.Widget.is_focus() for the difference between having the global input focus, and only having the focus within a toplevel.
    * @returns True if the widget has the global input focus. 
    */
  hasFocus(): boolean;
  /**
    * Determines whether the widget is currently grabbing events, so it is the only widget receiving input events (keyboard and mouse).
    * @returns True if the widget is in the grab_widgets stack 
    */
  hasGrab(): boolean;
  /**
    * Determines if the widget style has been looked up through the rc mechanism.
    * @returns True if the widget has been looked up through the rc mechanism, False otherwise. 
    */
  hasRcStyle(): boolean;
  /**
    * Checks whether there is a Gdk.Screen is associated with this widget. All toplevel widgets have an associated screen, and all widgets added into a hierarchy with a toplevel window at the top.
    * @returns True if there is a Gdk.Screen associated with the widget. 
    */
  hasScreen(): boolean;
  /**
    * Determines if the widget should show a visible indication that it has the global input focus. This is a convenience function for use in ::draw handlers that takes into account whether focus indication should currently be shown in the toplevel window of self. See Gtk.Window.get_focus_visible() for more information about focus indication.
    * @returns True if the widget should display a “focus rectangle” 
    */
  hasVisibleFocus(): boolean;
  /**
    * Reverses the effects of Gtk.Widget.show(), causing the widget to be hidden (invisible to the user). 
    */
  hide(): void;
  /**
    * Utility function; intended to be connected to the Gtk.Widget ::delete-event signal on a Gtk.Window. The function calls Gtk.Widget.hide() on its argument, then returns True. If connected to ::delete-event, the result is that clicking the close button for a window (on the window frame, top right corner usually) will hide but not destroy the window. By default, GTK+ destroys windows when ::delete-event is received.
    * @returns True 
    */
  hideOnDelete(): boolean;
  /**
    * Returns whether the widget is currently being destroyed. This information can sometimes be used to avoid doing unnecessary work.
    * @returns True if self is being destroyed 
    */
  inDestruction(): boolean;
  /**
    * Creates and initializes child widgets defined in templates. This function must be called in the instance initializer for any class which assigned itself a template using Gtk.WidgetClass.set_template() 
    */
  initTemplate(): void;
  /**
    * Sets an input shape for this widget’s GDK window. This allows for windows which react to mouse click in a nonrectangular region, see Gdk.Window.input_shape_combine_region() for more information.
    * @param region shape to be added, or None to remove an existing shape 
    */
  inputShapeCombineRegion(region: import('../cairo').Region | null): void;
  /**
    * Inserts group into self. Children of self that implement Gtk.Actionable can then be associated with actions in group by setting their “action-name” to prefix.``action-name``.
    * @param name the prefix for actions in group
    * @param group a Gio.ActionGroup, or None 
    */
  insertActionGroup(name: string, group: import('../Gio').ActionGroup | null): void;
  /**
    * Computes the intersection of a self’s area and area, storing the intersection in intersection, and returns True if there was an intersection.  intersection may be None if you’re only interested in whether there was an intersection.
    * @param area a rectangle
    * @returns True if there was an intersection  intersection:rectangle to store intersection of self and area 
    */
  intersect(area: import('../Gdk').Rectangle): [boolean, import('../Gdk').Rectangle];
  /**
    * Determines whether self is somewhere inside ancestor, possibly with intermediate containers.
    * @param ancestor another Gtk.Widget
    * @returns True if ancestor contains self as a child, grandchild, great grandchild, etc. 
    */
  isAncestor(ancestor: import('../Gtk').Widget): boolean;
  /**
    * Whether self can rely on having its alpha channel drawn correctly. On X11 this function returns whether a compositing manager is running for self’s screen.
    * @returns True if the widget can rely on its alpha channel being drawn correctly. 
    */
  isComposited(): boolean;
  /**
    * Determines whether self can be drawn to. A widget can be drawn to if it is mapped and visible.
    * @returns True if self is drawable, False otherwise 
    */
  isDrawable(): boolean;
  /**
    * Determines if the widget is the focus widget within its toplevel. (This does not mean that the Gtk.Widget :has-focus property is necessarily set; Gtk.Widget :has-focus will only be set if the toplevel widget additionally has the global input focus.)
    * @returns True if the widget is the focus widget. 
    */
  isFocus(): boolean;
  /**
    * Returns the widget’s effective sensitivity, which means it is sensitive itself and also its parent widget is sensitive
    * @returns True if the widget is effectively sensitive 
    */
  isSensitive(): boolean;
  /**
    * Determines whether self is a toplevel widget.
    * @returns True if self is a toplevel, False otherwise 
    */
  isToplevel(): boolean;
  /**
    * Determines whether the widget and all its parents are marked as visible.
    * @returns True if the widget and all its parents are visible 
    */
  isVisible(): boolean;
  /**
    * This function should be called whenever keyboard navigation within a single widget hits a boundary. The function emits the Gtk.Widget ::keynav-failed signal on the widget and its return value should be interpreted in a way similar to the return value of Gtk.Widget.child_focus():
    * @param direction direction of focus movement
    * @returns True if stopping keyboard navigation is fine, False if the emitting widget should try to handle the keyboard navigation attempt in its parent container(s). 
    */
  keynavFailed(direction: import('../Gtk').DirectionType): boolean;
  /**
    * Lists the closures used by self for accelerator group connections with Gtk.AccelGroup.connect_by_path() or Gtk.AccelGroup.connect(). The closures can be used to monitor accelerator changes on self, by connecting to the GtkAccelGroup::accel-changed signal of the Gtk.AccelGroup of a closure which can be found out with Gtk.AccelGroup.from_accel_closure().
    * @returns a newly allocated GLib.List of closures 
    */
  listAccelClosures(): import('../GObject').Closure[];
  /**
    * Retrieves a None-terminated array of strings containing the prefixes of Gio.ActionGroup’s available to self.
    * @returns a None-terminated array of strings. 
    */
  listActionPrefixes(): string[];
  /**
    * Returns a newly allocated list of the widgets, normally labels, for which this widget is the target of a mnemonic (see for example, Gtk.Label.set_mnemonic_widget()).
    * @returns the list of mnemonic labels; free this list with g_list_free() when you are done with it. 
    */
  listMnemonicLabels(): import('../Gtk').Widget[];
  /**
    * This function is only for use in widget implementations. Causes a widget to be mapped if it isn’t already. 
    */
  map(): void;
  /**
    * Emits the Gtk.Widget ::mnemonic-activate signal.
    * @param groupCycling True if there are other widgets with the same mnemonic
    * @returns True if the signal has been handled 
    */
  mnemonicActivate(groupCycling: boolean): boolean;
  /**
    * Sets the base color for a widget in a particular state. All other style values are left untouched. The base color is the background color used along with the text color (see Gtk.Widget.modify_text()) for widgets such as Gtk.Entry and Gtk.TextView. See also Gtk.Widget.modify_style().
    * @param state the state for which to set the base color
    * @param color the color to assign (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.modify_base(). 
    */
  modifyBase(state: import('../Gtk').StateType, color: import('../Gdk').Color | null): void;
  /**
    * Sets the background color for a widget in a particular state.
    * @param state the state for which to set the background color
    * @param color the color to assign (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.modify_bg(). 
    */
  modifyBg(state: import('../Gtk').StateType, color: import('../Gdk').Color | null): void;
  /**
    * Sets the cursor color to use in a widget, overriding the Gtk.Widget cursor-color and secondary-cursor-color style properties.
    * @param primary the color to use for primary cursor (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.modify_cursor().
    * @param secondary the color to use for secondary cursor (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.modify_cursor(). 
    */
  modifyCursor(primary: import('../Gdk').Color | null, secondary: import('../Gdk').Color | null): void;
  /**
    * Sets the foreground color for a widget in a particular state.
    * @param state the state for which to set the foreground color
    * @param color the color to assign (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.modify_fg(). 
    */
  modifyFg(state: import('../Gtk').StateType, color: import('../Gdk').Color | null): void;
  /**
    * Sets the font to use for a widget.
    * @param fontDesc the font description to use, or None to undo the effect of previous calls to Gtk.Widget.modify_font() 
    */
  modifyFont(fontDesc: import('../Pango').FontDescription | null): void;
  /**
    * Modifies style values on the widget.
    * @param style the Gtk.RcStyle-struct holding the style modifications 
    */
  modifyStyle(style: import('../Gtk').RcStyle): void;
  /**
    * Sets the text color for a widget in a particular state.
    * @param state the state for which to set the text color
    * @param color the color to assign (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.modify_text(). 
    */
  modifyText(state: import('../Gtk').StateType, color: import('../Gdk').Color | null): void;
  /**
    * Sets the background color to use for a widget.
    * @param state the state for which to set the background color
    * @param color the color to assign, or None to undo the effect of previous calls to Gtk.Widget.override_background_color() 
    */
  overrideBackgroundColor(state: import('../Gtk').StateFlags, color: import('../Gdk').RGBA | null): void;
  /**
    * Sets the color to use for a widget.
    * @param state the state for which to set the color
    * @param color the color to assign, or None to undo the effect of previous calls to Gtk.Widget.override_color() 
    */
  overrideColor(state: import('../Gtk').StateFlags, color: import('../Gdk').RGBA | null): void;
  /**
    * Sets the cursor color to use in a widget, overriding the cursor-color and secondary-cursor-color style properties. All other style values are left untouched. See also Gtk.Widget.modify_style().
    * @param cursor the color to use for primary cursor (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.override_cursor().
    * @param secondaryCursor the color to use for secondary cursor (does not need to be allocated), or None to undo the effect of previous calls to of Gtk.Widget.override_cursor(). 
    */
  overrideCursor(cursor: import('../Gdk').RGBA | null, secondaryCursor: import('../Gdk').RGBA | null): void;
  /**
    * Sets the font to use for a widget. All other style values are left untouched. See Gtk.Widget.override_color().
    * @param fontDesc the font description to use, or None to undo the effect of previous calls to Gtk.Widget.override_font() 
    */
  overrideFont(fontDesc: import('../Pango').FontDescription | null): void;
  /**
    * Sets a symbolic color for a widget.
    * @param name the name of the symbolic color to modify
    * @param color the color to assign (does not need to be allocated), or None to undo the effect of previous calls to Gtk.Widget.override_symbolic_color() 
    */
  overrideSymbolicColor(name: string, color: import('../Gdk').RGBA | null): void;
  /**
    * Obtains the full path to self. The path is simply the name of a widget and all its parents in the container hierarchy, separated by periods. The name of a widget comes from Gtk.Widget.get_name(). Paths are used to apply styles to a widget in gtkrc configuration files. Widget names are the type of the widget by default (e.g. “Gtk.Button”) or can be set to an application-specific value with Gtk.Widget.set_name(). By setting the name of a widget, you allow users or theme authors to apply styles to that specific widget in their gtkrc file. path_reversed_p fills in the path in reverse order, i.e. starting with self’s name instead of starting with the name of self’s outermost ancestor.
    * @returns path_length:location to store length of the path, or None path:location to store allocated path string, or None path_reversed:location to store allocated reverse path string, or None 
    */
  path(): [number, string, string];
  /**
    * This function is only for use in widget implementations. 
    */
  queueAllocate(): void;
  /**
    * Mark self as needing to recompute its expand flags. Call this function when setting legacy expand child properties on the child of a container. 
    */
  queueComputeExpand(): void;
  /**
    * Equivalent to calling Gtk.Widget.queue_draw_area() for the entire area of a widget. 
    */
  queueDraw(): void;
  /**
    * Convenience function that calls Gtk.Widget.queue_draw_region() on the region created from the given coordinates.
    * @param x x coordinate of upper-left corner of rectangle to redraw
    * @param y y coordinate of upper-left corner of rectangle to redraw
    * @param width width of region to draw
    * @param height height of region to draw 
    */
  queueDrawArea(x: number, y: number, width: number, height: number): void;
  /**
    * Invalidates the area of self defined by region by calling Gdk.Window.invalidate_region() on the widget’s window and all its child windows. Once the main loop becomes idle (after the current batch of events has been processed, roughly), the window will receive expose events for the union of all regions that have been invalidated.
    * @param region region to draw 
    */
  queueDrawRegion(region: import('../cairo').Region): void;
  /**
    * This function is only for use in widget implementations. Flags a widget to have its size renegotiated; should be called when a widget for some reason has a new size request. For example, when you change the text in a Gtk.Label, Gtk.Label queues a resize to ensure there’s enough space for the new text. 
    */
  queueResize(): void;
  /**
    * This function works like Gtk.Widget.queue_resize(), except that the widget is not invalidated. 
    */
  queueResizeNoRedraw(): void;
  /**
    * Creates the GDK (windowing system) resources associated with a widget.  For example, self->window will be created when a widget is realized.  Normally realization happens implicitly; if you show a widget and all its parent containers, then the widget will be realized and mapped automatically. 
    */
  realize(): void;
  /**
    * Computes the intersection of a self’s area and region, returning the intersection. The result may be empty, use cairo_region_is_empty() to check.
    * @param region a cairo.Region, in the same coordinate system as self->allocation. That is, relative to self->window for widgets which return False from Gtk.Widget.get_has_window(); relative to the parent window of self->window otherwise.
    * @returns A newly allocated region holding the intersection of self and region. 
    */
  regionIntersect(region: import('../cairo').Region): import('../cairo').Region;
  /**
    * Registers a Gdk.Window with the widget and sets it up so that the widget receives events for it. Call Gtk.Widget.unregister_window() when destroying the window.
    * @param window a Gdk.Window 
    */
  registerWindow(window: import('../Gdk').Window): void;
  /**
    * Removes an accelerator from self, previously installed with Gtk.Widget.add_accelerator().
    * @param accelGroup accel group for this widget
    * @param accelKey GDK keyval of the accelerator
    * @param accelMods modifier key combination of the accelerator
    * @returns whether an accelerator was installed and could be removed 
    */
  removeAccelerator(accelGroup: import('../Gtk').AccelGroup, accelKey: number, accelMods: import('../Gdk').ModifierType): boolean;
  /**
    * Removes a widget from the list of mnemonic labels for this widget. (See Gtk.Widget.list_mnemonic_labels()). The widget must have previously been added to the list with Gtk.Widget.add_mnemonic_label().
    * @param label a Gtk.Widget that was previously set as a mnemonic label for self with Gtk.Widget.add_mnemonic_label(). 
    */
  removeMnemonicLabel(label: import('../Gtk').Widget): void;
  /**
    * Removes a tick callback previously registered with Gtk.Widget.add_tick_callback().
    * @param id an id returned by Gtk.Widget.add_tick_callback() 
    */
  removeTickCallback(id: number): void;
  /**
    * A convenience function that uses the theme settings for self to look up stock_id and render it to a pixbuf. stock_id should be a stock icon ID such as Gtk.STOCK_OPEN or Gtk.STOCK_OK. size should be a size such as Gtk.IconSize.MENU. detail should be a string that identifies the widget or code doing the rendering, so that theme engines can special-case rendering for that widget or code.
    * @param stockId a stock ID
    * @param size a stock size (Gtk.IconSize). A size of (GtkIconSize)-1 means render at the size of the source and don’t scale (if there are multiple source sizes, GTK+ picks one of the available sizes).
    * @param detail render detail to pass to theme engine
    * @returns a new pixbuf, or None if the stock ID wasn’t known 
    */
  renderIcon(stockId: string, size: number, detail: string | null): import('../GdkPixbuf').Pixbuf | null;
  /**
    * A convenience function that uses the theme engine and style settings for self to look up stock_id and render it to a pixbuf. stock_id should be a stock icon ID such as Gtk.STOCK_OPEN or Gtk.STOCK_OK. size should be a size such as Gtk.IconSize.MENU.
    * @param stockId a stock ID
    * @param size a stock size (Gtk.IconSize). A size of (GtkIconSize)-1 means render at the size of the source and don’t scale (if there are multiple source sizes, GTK+ picks one of the available sizes).
    * @returns a new pixbuf, or None if the stock ID wasn’t known 
    */
  renderIconPixbuf(stockId: string, size: number): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Moves a widget from one Gtk.Container to another, handling reference count issues to avoid destroying the widget.
    * @param newParent a Gtk.Container to move the widget into 
    */
  reparent(newParent: import('../Gtk').Widget): void;
  /**
    * Reset the styles of self and all descendents, so when they are looked up again, they get the correct values for the currently loaded RC file settings. 
    */
  resetRcStyles(): void;
  /**
    * Updates the style context of self and all descendants by updating its widget path. Gtk.Containers may want to use this on a child when reordering it in a way that a different style might apply to it. See also Gtk.Container.get_path_for_child(). 
    */
  resetStyle(): void;
  /**
    * Very rarely-used function. This function is used to emit an expose event on a widget. This function is not normally used directly. The only time it is used is when propagating an expose event to a windowless child widget (Gtk.Widget.get_has_window() is False), and that is normally done using Gtk.Container.propagate_draw().
    * @param event a expose Gdk.Event
    * @returns return from the event signal emission (True if the event was handled) 
    */
  sendExpose(event: import('../Gdk').Event): number;
  /**
    * Sends the focus change event to self
    * @param event a Gdk.Event of type Gdk.EventType.FOCUS_CHANGE
    * @returns the return value from the event signal emission: True if the event was handled, and False otherwise 
    */
  sendFocusChange(event: import('../Gdk').Event): boolean;
  /**
    * Given an accelerator group, accel_group, and an accelerator path, accel_path, sets up an accelerator in accel_group so whenever the key binding that is defined for accel_path is pressed, self will be activated.  This removes any accelerators (for any accelerator group) installed by previous calls to Gtk.Widget.set_accel_path(). Associating accelerators with paths allows them to be modified by the user and the modifications to be saved for future use. (See Gtk.AccelMap.save().)
    * @param accelPath path used to look up the accelerator
    * @param accelGroup a Gtk.AccelGroup. 
    */
  setAccelPath(accelPath: string | null, accelGroup: import('../Gtk').AccelGroup | null): void;
  /**
    * Sets the widget’s allocation.  This should not be used directly, but from within a widget’s size_allocate method.
    * @param allocation a pointer to a #GtkAllocation to copy from 
    */
  setAllocation(allocation: import('../Gdk').Rectangle): void;
  /**
    * Sets whether the application intends to draw on the widget in an Gtk.Widget ::draw handler.
    * @param appPaintable True if the application will paint on the widget 
    */
  setAppPaintable(appPaintable: boolean): void;
  /**
    * Specifies whether self can be a default widget. See Gtk.Widget.grab_default() for details about the meaning of “default”.
    * @param canDefault whether or not self can be a default widget. 
    */
  setCanDefault(canDefault: boolean): void;
  /**
    * Specifies whether self can own the input focus. See Gtk.Widget.grab_focus() for actually setting the input focus on a widget.
    * @param canFocus whether or not self can own the input focus. 
    */
  setCanFocus(canFocus: boolean): void;
  /**
    * Sets whether self should be mapped along with its when its parent is mapped and self has been shown with Gtk.Widget.show().
    * @param isVisible if True, self should be mapped along with its parent. 
    */
  setChildVisible(isVisible: boolean): void;
  /**
    * Sets the widget’s clip.  This must not be used directly, but from within a widget’s size_allocate method. It must be called after Gtk.Widget.set_allocation() (or after chaining up to the parent class), because that function resets the clip.
    * @param clip a pointer to a #GtkAllocation to copy from 
    */
  setClip(clip: import('../Gdk').Rectangle): void;
  /**
    * Sets a widgets composite name. The widget must be a composite child of its parent; see Gtk.Widget.push_composite_child().
    * @param name the name to set 
    */
  setCompositeName(name: string): void;
  /**
    * Enables or disables a Gdk.Device to interact with self and all its children.
    * @param device a Gdk.Device
    * @param enabled whether to enable the device 
    */
  setDeviceEnabled(device: import('../Gdk').Device, enabled: boolean): void;
  /**
    * Sets the device event mask (see Gdk.EventMask) for a widget. The event mask determines which events a widget will receive from device. Keep in mind that different widgets have different default event masks, and by changing the event mask you may disrupt a widget’s functionality, so be careful. This function must be called while a widget is unrealized. Consider Gtk.Widget.add_device_events() for widgets that are already realized, or if you want to preserve the existing event mask. This function can’t be used with windowless widgets (which return False from Gtk.Widget.get_has_window()); to get events on those widgets, place them inside a Gtk.EventBox and receive events on the event box.
    * @param device a Gdk.Device
    * @param events event mask 
    */
  setDeviceEvents(device: import('../Gdk').Device, events: import('../Gdk').EventMask): void;
  /**
    * Sets the reading direction on a particular widget. This direction controls the primary direction for widgets containing text, and also the direction in which the children of a container are packed. The ability to set the direction is present in order so that correct localization into languages with right-to-left reading directions can be done. Generally, applications will let the default reading direction present, except for containers where the containers are arranged in an order that is explicitly visual rather than logical (such as buttons for text justification).
    * @param dir the new direction 
    */
  setDirection(dir: import('../Gtk').TextDirection): void;
  /**
    * Widgets are double buffered by default; you can use this function to turn off the buffering. “Double buffered” simply means that Gdk.Window.begin_draw_frame() and Gdk.Window.end_draw_frame() are called automatically around expose events sent to the widget. Gdk.Window.begin_draw_frame() diverts all drawing to a widget’s window to an offscreen buffer, and Gdk.Window.end_draw_frame() draws the buffer to the screen. The result is that users see the window update in one smooth step, and don’t see individual graphics primitives being rendered.
    * @param doubleBuffered True to double-buffer a widget 
    */
  setDoubleBuffered(doubleBuffered: boolean): void;
  /**
    * Sets the event mask (see Gdk.EventMask) for a widget. The event mask determines which events a widget will receive. Keep in mind that different widgets have different default event masks, and by changing the event mask you may disrupt a widget’s functionality, so be careful. This function must be called while a widget is unrealized. Consider Gtk.Widget.add_events() for widgets that are already realized, or if you want to preserve the existing event mask. This function can’t be used with widgets that have no window. (See Gtk.Widget.get_has_window()).  To get events on those widgets, place them inside a Gtk.EventBox and receive events on the event box.
    * @param events event mask 
    */
  setEvents(events: number): void;
  /**
    * Sets whether the widget should grab focus when it is clicked with the mouse. Making mouse clicks not grab focus is useful in places like toolbars where you don’t want the keyboard focus removed from the main area of the application.
    * @param focusOnClick whether the widget should grab focus when clicked with the mouse 
    */
  setFocusOnClick(focusOnClick: boolean): void;
  /**
    * Sets the font map to use for Pango rendering. When not set, the widget will inherit the font map from its parent.
    * @param fontMap a Pango.FontMap, or None to unset any previously set font map 
    */
  setFontMap(fontMap: import('../Pango').FontMap | null): void;
  /**
    * Sets the cairo.FontOptions used for Pango rendering in this widget. When not set, the default font options for the Gdk.Screen will be used.
    * @param options a cairo.FontOptions, or None to unset any previously set default font options. 
    */
  setFontOptions(options: import('../cairo').FontOptions | null): void;
  /**
    * Sets the horizontal alignment of self. See the Gtk.Widget :halign property.
    * @param align the horizontal alignment 
    */
  setHalign(align: import('../Gtk').Align): void;
  /**
    * Sets the has-tooltip property on self to has_tooltip.  See Gtk.Widget :has-tooltip for more information.
    * @param hasTooltip whether or not self has a tooltip. 
    */
  setHasTooltip(hasTooltip: boolean): void;
  /**
    * Specifies whether self has a Gdk.Window of its own. Note that all realized widgets have a non-None “window” pointer (Gtk.Widget.get_window() never returns a None window when a widget is realized), but for many of them it’s actually the Gdk.Window of one of its parent widgets. Widgets that do not create a %window for themselves in Gtk.Widget ::realize must announce this by calling this function with has_window = False.
    * @param hasWindow whether or not self has a window. 
    */
  setHasWindow(hasWindow: boolean): void;
  /**
    * Sets whether the widget would like any available extra horizontal space. When a user resizes a Gtk.Window, widgets with expand=:obj:True generally receive the extra space. For example, a list or scrollable area or document in your window would often be set to expand.
    * @param expand whether to expand 
    */
  setHexpand(expand: boolean): void;
  /**
    * Sets whether the hexpand flag (see Gtk.Widget.get_hexpand()) will be used.
    * @param set value for hexpand-set property 
    */
  setHexpandSet(set: boolean): void;
  /**
    * Marks the widget as being mapped.
    * @param mapped True to mark the widget as mapped 
    */
  setMapped(mapped: boolean): void;
  /**
    * Sets the bottom margin of self. See the Gtk.Widget :margin-bottom property.
    * @param margin the bottom margin 
    */
  setMarginBottom(margin: number): void;
  /**
    * Sets the end margin of self. See the Gtk.Widget :margin-end property.
    * @param margin the end margin 
    */
  setMarginEnd(margin: number): void;
  /**
    * Sets the left margin of self. See the Gtk.Widget :margin-left property.
    * @param margin the left margin 
    */
  setMarginLeft(margin: number): void;
  /**
    * Sets the right margin of self. See the Gtk.Widget :margin-right property.
    * @param margin the right margin 
    */
  setMarginRight(margin: number): void;
  /**
    * Sets the start margin of self. See the Gtk.Widget :margin-start property.
    * @param margin the start margin 
    */
  setMarginStart(margin: number): void;
  /**
    * Sets the top margin of self. See the Gtk.Widget :margin-top property.
    * @param margin the top margin 
    */
  setMarginTop(margin: number): void;
  /**
    * Widgets can be named, which allows you to refer to them from a CSS file. You can apply a style to widgets with a particular name in the CSS file. See the documentation for the CSS syntax (on the same page as the docs for Gtk.StyleContext).
    * @param name name for the widget 
    */
  setName(name: string): void;
  /**
    * Sets the Gtk.Widget :no-show-all property, which determines whether calls to Gtk.Widget.show_all() will affect this widget.
    * @param noShowAll the new value for the “no-show-all” property 
    */
  setNoShowAll(noShowAll: boolean): void;
  /**
    * Request the self to be rendered partially transparent, with opacity 0 being fully transparent and 1 fully opaque. (Opacity values are clamped to the [0,1] range.). This works on both toplevel widget, and child widgets, although there are some limitations:
    * @param opacity desired opacity, between 0 and 1 
    */
  setOpacity(opacity: number): void;
  /**
    * This function is useful only when implementing subclasses of Gtk.Container. Sets the container as the parent of self, and takes care of some details such as updating the state and style of the child to reflect its new location. The opposite function is Gtk.Widget.unparent().
    * @param parent parent container 
    */
  setParent(parent: import('../Gtk').Widget): void;
  /**
    * Sets a non default parent window for self.
    * @param parentWindow the new parent window. 
    */
  setParentWindow(parentWindow: import('../Gdk').Window): void;
  /**
    * Marks the widget as being realized. This function must only be called after all Gdk.Windows for the self have been created and registered.
    * @param realized True to mark the widget as realized 
    */
  setRealized(realized: boolean): void;
  /**
    * Specifies whether self will be treated as the default widget within its toplevel when it has the focus, even if another widget is the default.
    * @param receivesDefault whether or not self can be a default widget. 
    */
  setReceivesDefault(receivesDefault: boolean): void;
  /**
    * Sets whether the entire widget is queued for drawing when its size allocation changes. By default, this setting is True and the entire widget is redrawn on every size change. If your widget leaves the upper left unchanged when made bigger, turning this setting off will improve performance.
    * @param redrawOnAllocate if True, the entire widget will be redrawn when it is allocated to a new size. Otherwise, only the new portion of the widget will be redrawn. 
    */
  setRedrawOnAllocate(redrawOnAllocate: boolean): void;
  /**
    * Sets the sensitivity of a widget. A widget is sensitive if the user can interact with it. Insensitive widgets are “grayed out” and the user can’t interact with them. Insensitive widgets are known as “inactive”, “disabled”, or “ghosted” in some other toolkits.
    * @param sensitive True to make the widget sensitive 
    */
  setSensitive(sensitive: boolean): void;
  /**
    * Sets the minimum size of a widget; that is, the widget’s size request will be at least width by height. You can use this function to force a widget to be larger than it normally would be.
    * @param width width self should request, or -1 to unset
    * @param height height self should request, or -1 to unset 
    */
  setSizeRequest(width: number, height: number): void;
  /**
    * This function is for use in widget implementations. Sets the state of a widget (insensitive, prelighted, etc.) Usually you should set the state using wrapper functions such as Gtk.Widget.set_sensitive().
    * @param state new state for self 
    */
  setState(state: import('../Gtk').StateType): void;
  /**
    * This function is for use in widget implementations. Turns on flag values in the current widget state (insensitive, prelighted, etc.).
    * @param flags State flags to turn on
    * @param clear Whether to clear state before turning on flags 
    */
  setStateFlags(flags: import('../Gtk').StateFlags, clear: boolean): void;
  /**
    * Used to set the Gtk.Style for a widget (self->style). Since GTK 3, this function does nothing, the passed in style is ignored.
    * @param style a Gtk.Style, or None to remove the effect of a previous call to Gtk.Widget.set_style() and go back to the default style 
    */
  setStyle(style: import('../Gtk').Style | null): void;
  /**
    * Enables or disables multiple pointer awareness. If this setting is True, self will start receiving multiple, per device enter/leave events. Note that if custom Gdk.Windows are created in Gtk.Widget ::realize, Gdk.Window.set_support_multidevice() will have to be called manually on them.
    * @param supportMultidevice True to support input from multiple devices. 
    */
  setSupportMultidevice(supportMultidevice: boolean): void;
  /**
    * Sets markup as the contents of the tooltip, which is marked up with the Pango text markup language.
    * @param markup the contents of the tooltip for self, or None 
    */
  setTooltipMarkup(markup: string | null): void;
  /**
    * Sets text as the contents of the tooltip. This function will take care of setting Gtk.Widget :has-tooltip to True and of the default handler for the Gtk.Widget ::query-tooltip signal.
    * @param text the contents of the tooltip for self 
    */
  setTooltipText(text: string | null): void;
  /**
    * Replaces the default window used for displaying tooltips with custom_window. GTK+ will take care of showing and hiding custom_window at the right moment, to behave likewise as the default tooltip window. If custom_window is None, the default tooltip window will be used.
    * @param customWindow a Gtk.Window, or None 
    */
  setTooltipWindow(customWindow: import('../Gtk').Window | null): void;
  /**
    * Sets the vertical alignment of self. See the Gtk.Widget :valign property.
    * @param align the vertical alignment 
    */
  setValign(align: import('../Gtk').Align): void;
  /**
    * Sets whether the widget would like any available extra vertical space.
    * @param expand whether to expand 
    */
  setVexpand(expand: boolean): void;
  /**
    * Sets whether the vexpand flag (see Gtk.Widget.get_vexpand()) will be used.
    * @param set value for vexpand-set property 
    */
  setVexpandSet(set: boolean): void;
  /**
    * Sets the visibility state of self. Note that setting this to True doesn’t mean the widget is actually viewable, see Gtk.Widget.get_visible().
    * @param visible whether the widget should be shown or not 
    */
  setVisible(visible: boolean): void;
  /**
    * Sets the visual that should be used for by widget and its children for creating Gdk.Windows. The visual must be on the same Gdk.Screen as returned by Gtk.Widget.get_screen(), so handling the Gtk.Widget ::screen-changed signal is necessary.
    * @param visual visual to be used or None to unset a previous one 
    */
  setVisual(visual: import('../Gdk').Visual | null): void;
  /**
    * Sets a widget’s window. This function should only be used in a widget’s Gtk.Widget ::realize implementation. The %window passed is usually either new window created with Gdk.Window.new(), or the window of its parent widget as returned by Gtk.Widget.get_parent_window().
    * @param window a Gdk.Window 
    */
  setWindow(window: import('../Gdk').Window): void;
  /**
    * Sets a shape for this widget’s GDK window. This allows for transparent windows etc., see Gdk.Window.shape_combine_region() for more information.
    * @param region shape to be added, or None to remove an existing shape 
    */
  shapeCombineRegion(region: import('../cairo').Region | null): void;
  /**
    * Flags a widget to be displayed. Any widget that isn’t shown will not appear on the screen. If you want to show all the widgets in a container, it’s easier to call Gtk.Widget.show_all() on the container, instead of individually showing the widgets. 
    */
  show(): void;
  /**
    * Recursively shows a widget, and any child widgets (if the widget is a container). 
    */
  showAll(): void;
  /**
    * Shows a widget. If the widget is an unmapped toplevel widget (i.e. a Gtk.Window that has not yet been shown), enter the main loop and wait for the window to actually be mapped. Be careful; because the main loop is running, anything can happen during this function. 
    */
  showNow(): void;
  /**
    * This function is only used by Gtk.Container subclasses, to assign a size and position to their child widgets.
    * @param allocation position and size to be allocated to self 
    */
  sizeAllocate(allocation: import('../Gdk').Rectangle): void;
  /**
    * This function is only used by Gtk.Container subclasses, to assign a size, position and (optionally) baseline to their child widgets.
    * @param allocation position and size to be allocated to self
    * @param baseline The baseline of the child, or -1 
    */
  sizeAllocateWithBaseline(allocation: import('../Gdk').Rectangle, baseline: number): void;
  /**
    * This function is typically used when implementing a Gtk.Container subclass.  Obtains the preferred size of a widget. The container uses this information to arrange its child widgets and decide what size allocations to give them with Gtk.Widget.size_allocate().
    * @returns a Gtk.Requisition to be filled in 
    */
  sizeRequest(): import('../Gtk').Requisition;
  /**
    * This function attaches the widget’s Gtk.Style to the widget’s Gdk.Window. It is a replacement for 
    */
  styleAttach(): void;
  /**
    * Gets the value of a style property of self.
    * @param propertyName the name of a style property
    * @param value Either None or a correctly initialized GObject.Value
    * @returns The Python value of the style property 
    */
  styleGetProperty(propertyName: string, value: import('../GObject').Value | null): void;
  /**
    * Reverts the effect of a previous call to Gtk.Widget.freeze_child_notify(). This causes all queued Gtk.Widget ::child-notify signals on self to be emitted. 
    */
  thawChildNotify(): void;
  /**
    * Translate coordinates relative to self’s allocation to coordinates relative to dest_widget’s allocations. In order to perform this operation, both widgets must be realized, and must share a common toplevel.
    * @param destWidget a Gtk.Widget
    * @param srcX X position relative to self
    * @param srcY Y position relative to self
    * @returns None if either widget was not realized, or there was no common ancestor. Otherwise a (dest_x, dest_y) tuple containing the X and Y position relative to dest_widget. 
    */
  translateCoordinates(destWidget: import('../Gtk').Widget, srcX: number, srcY: number): [number, number | null];
  /**
    * Triggers a tooltip query on the display where the toplevel of self is located. See Gtk.Tooltip.trigger_tooltip_query() for more information. 
    */
  triggerTooltipQuery(): void;
  /**
    * This function is only for use in widget implementations. Causes a widget to be unmapped if it’s currently mapped. 
    */
  unmap(): void;
  /**
    * This function is only for use in widget implementations. Should be called by implementations of the remove method on Gtk.Container, to dissociate a child from the container. 
    */
  unparent(): void;
  /**
    * This function is only useful in widget implementations. Causes a widget to be unrealized (frees all GDK resources associated with the widget, such as self->window). 
    */
  unrealize(): void;
  /**
    * Unregisters a Gdk.Window from the widget that was previously set up with Gtk.Widget.register_window(). You need to call this when the window is no longer used by the widget, such as when you destroy it.
    * @param window a Gdk.Window 
    */
  unregisterWindow(window: import('../Gdk').Window): void;
  /**
    * This function is for use in widget implementations. Turns off flag values for the current widget state (insensitive, prelighted, etc.). See Gtk.Widget.set_state_flags().
    * @param flags State flags to turn off 
    */
  unsetStateFlags(flags: import('../Gtk').StateFlags): void;
  /**
    * Whether the application will paint directly on the widget 
    */
  appPaintable: boolean;
  /**
    * Whether the widget can be the default widget 
    */
  canDefault: boolean;
  /**
    * Whether the widget can accept the input focus 
    */
  canFocus: boolean;
  /**
    * Whether the widget is part of a composite widget 
    */
  readonly compositeChild: boolean;
  /**
    * Whether the widget is double buffered deprecated 
    */
  doubleBuffered: boolean;
  /**
    * The event mask that decides what kind of GdkEvents this widget gets 
    */
  events: import('../Gdk').EventMask;
  /**
    * Whether widget wants to expand in both directions 
    */
  expand: boolean;
  /**
    * Whether the widget should grab focus when it is clicked with the mouse 
    */
  focusOnClick: boolean;
  /**
    * How to position in extra horizontal space 
    */
  halign: import('../Gtk').Align;
  /**
    * Whether this widget has a tooltip 
    */
  hasTooltip: boolean;
  /**
    * Override for height request of the widget, or -1 if natural request should be used 
    */
  heightRequest: number;
  /**
    * Whether widget wants more horizontal space 
    */
  hexpand: boolean;
  /**
    * Whether to use the hexpand property 
    */
  hexpandSet: boolean;
  /**
    * Pixels of extra space on all four sides 
    */
  margin: number;
  /**
    * Pixels of extra space on the bottom side 
    */
  marginBottom: number;
  /**
    * Pixels of extra space on the end 
    */
  marginEnd: number;
  /**
    * Pixels of extra space on the left side deprecated 
    */
  marginLeft: number;
  /**
    * Pixels of extra space on the right side deprecated 
    */
  marginRight: number;
  /**
    * Pixels of extra space on the start 
    */
  marginStart: number;
  /**
    * Pixels of extra space on the top side 
    */
  marginTop: number;
  /**
    * The name of the widget 
    */
  name: string;
  /**
    * Whether Gtk.Widget.show_all() should not affect this widget 
    */
  noShowAll: boolean;
  /**
    * The opacity of the widget, from 0 to 1 
    */
  opacity: number;
  /**
    * The parent widget of this widget. Must be a Container widget 
    */
  parent: import('../Gtk').Container;
  /**
    * If True, the widget will receive the default action when it is focused 
    */
  receivesDefault: boolean;
  /**
    * The scaling factor of the window 
    */
  readonly scaleFactor: number;
  /**
    * Whether the widget responds to input 
    */
  sensitive: boolean;
  /**
    * The style of the widget, which contains information about how it will look (colors etc) deprecated 
    */
  style: import('../Gtk').Style;
  /**
    * The contents of the tooltip for this widget 
    */
  tooltipMarkup: string;
  /**
    * The contents of the tooltip for this widget 
    */
  tooltipText: string;
  /**
    * How to position in extra vertical space 
    */
  valign: import('../Gtk').Align;
  /**
    * Whether widget wants more vertical space 
    */
  vexpand: boolean;
  /**
    * Whether to use the vexpand property 
    */
  vexpandSet: boolean;
  /**
    * Whether the widget is visible 
    */
  visible: boolean;
  /**
    * Override for width request of the widget, or -1 if natural request should be used 
    */
  widthRequest: number;
  /**
    * The widget’s window if it is realized 
    */
  readonly window: import('../Gdk').Window;
}

