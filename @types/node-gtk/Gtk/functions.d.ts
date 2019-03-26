/**
  * Finds the first accelerator in any Gtk.AccelGroup attached to object that matches accel_key and accel_mods, and activates that accelerator.
  * @param object the GObject.Object, usually a Gtk.Window, on which to activate the accelerator
  * @param accelKey accelerator keyval from a key event
  * @param accelMods keyboard state mask from a key event
  * @returns True if an accelerator was activated and handled this keypress 
  */
export declare function accelGroupsActivate(object: import('../GObject').Object, accelKey: number, accelMods: import('../Gdk').ModifierType): boolean;
/**
  * Gets a list of all accel groups which are attached to object.
  * @param object a GObject.Object, usually a Gtk.Window
  * @returns a list of all accel groups which are attached to object 
  */
export declare function accelGroupsFromObject(object: import('../GObject').Object): import('../Gtk').AccelGroup[];
/**
  * Gets the modifier mask.
  * @returns the default accelerator modifier mask 
  */
export declare function acceleratorGetDefaultModMask(): import('../Gdk').ModifierType;
/**
  * Converts an accelerator keyval and modifier mask into a string which can be used to represent the accelerator to the user.
  * @param acceleratorKey accelerator keyval
  * @param acceleratorMods accelerator modifier mask
  * @returns a newly-allocated string representing the accelerator. 
  */
export declare function acceleratorGetLabel(acceleratorKey: number, acceleratorMods: import('../Gdk').ModifierType): string;
/**
  * Converts an accelerator keyval and modifier mask into a (possibly translated) string that can be displayed to a user, similarly to Gtk.accelerator_get_label(), but handling keycodes.
  * @param display a Gdk.Display or None to use the default display
  * @param acceleratorKey accelerator keyval
  * @param keycode accelerator keycode
  * @param acceleratorMods accelerator modifier mask
  * @returns a newly-allocated string representing the accelerator. 
  */
export declare function acceleratorGetLabelWithKeycode(display: import('../Gdk').Display | null, acceleratorKey: number, keycode: number, acceleratorMods: import('../Gdk').ModifierType): string;
/**
  * Converts an accelerator keyval and modifier mask into a string parseable by Gtk.accelerator_parse(). For example, if you pass in Gdk.KEY_q and Gdk.ModifierType.CONTROL_MASK, this function returns “<Control>q”.
  * @param acceleratorKey accelerator keyval
  * @param acceleratorMods accelerator modifier mask
  * @returns a newly-allocated accelerator name 
  */
export declare function acceleratorName(acceleratorKey: number, acceleratorMods: import('../Gdk').ModifierType): string;
/**
  * Converts an accelerator keyval and modifier mask into a string parseable by Gtk.accelerator_parse_with_keycode(), similarly to Gtk.accelerator_name() but handling keycodes. This is only useful for system-level components, applications should use Gtk.accelerator_parse() instead.
  * @param display a Gdk.Display or None to use the default display
  * @param acceleratorKey accelerator keyval
  * @param keycode accelerator keycode
  * @param acceleratorMods accelerator modifier mask
  * @returns a newly allocated accelerator name. 
  */
export declare function acceleratorNameWithKeycode(display: import('../Gdk').Display | null, acceleratorKey: number, keycode: number, acceleratorMods: import('../Gdk').ModifierType): string;
/**
  * Parses a string representing an accelerator. The format looks like “<Control>a” or “<Shift><Alt>F1” or “<Release>z” (the last one is for key release).
  * @param accelerator string representing an accelerator
  * @returns accelerator_key:  return location for accelerator keyval, or None accelerator_mods:  return location for accelerator modifier mask, None 
  */
export declare function acceleratorParse(accelerator: string): [number, import('../Gdk').ModifierType];
/**
  * Parses a string representing an accelerator, similarly to Gtk.accelerator_parse() but handles keycodes as well. This is only useful for system-level components, applications should use Gtk.accelerator_parse() instead.
  * @param accelerator string representing an accelerator
  * @returns accelerator_key:  return location for accelerator keyval, or None accelerator_codes:  return location for accelerator keycodes, or None accelerator_mods:  return location for accelerator modifier mask, None 
  */
export declare function acceleratorParseWithKeycode(accelerator: string): [number, number[], import('../Gdk').ModifierType];
/**
  * Sets the modifiers that will be considered significant for keyboard accelerators. The default mod mask depends on the GDK backend in use, but will typically include Gdk.ModifierType.CONTROL_MASK | Gdk.ModifierType.SHIFT_MASK | Gdk.ModifierType.MOD1_MASK | Gdk.ModifierType.SUPER_MASK | Gdk.ModifierType.HYPER_MASK | Gdk.ModifierType.META_MASK. In other words, Control, Shift, Alt, Super, Hyper and Meta. Other modifiers will by default be ignored by Gtk.AccelGroup.
  * @param defaultModMask accelerator modifier mask 
  */
export declare function acceleratorSetDefaultModMask(defaultModMask: import('../Gdk').ModifierType): void;
/**
  * Determines whether a given keyval and modifier mask constitute a valid keyboard accelerator. For example, the Gdk.KEY_a keyval plus Gdk.ModifierType.CONTROL_MASK is valid - this is a “Ctrl+a” accelerator. But, you can’t, for instance, use the Gdk.KEY_Control_L keyval as an accelerator.
  * @param keyval a GDK keyval
  * @param modifiers modifier mask
  * @returns True if the accelerator is valid 
  */
export declare function acceleratorValid(keyval: number, modifiers: import('../Gdk').ModifierType): boolean;
/**
  * Returns True if dialogs are expected to use an alternative button order on the screen screen. See gtk_dialog_set_alternative_button_order() for more details about alternative button order.
  * @param screen a Gdk.Screen, or None to use the default screen
  * @returns Whether the alternative button order should be used 
  */
export declare function alternativeDialogButtonOrder(screen: import('../Gdk').Screen | null): boolean;
/**
  * Parses a signal description from signal_desc and incorporates it into binding_set.
  * @param bindingSet a Gtk.BindingSet
  * @param signalDesc a signal description
  * @returns GLib.TokenType.NONE if the signal was successfully parsed and added, the expected token otherwise 
  */
export declare function bindingEntryAddSignalFromString(bindingSet: import('../Gtk').BindingSet, signalDesc: string): import('../GLib').TokenType;
/**
  * Override or install a new key binding for keyval with modifiers on binding_set.
  * @param bindingSet a Gtk.BindingSet to add a signal to
  * @param keyval key value
  * @param modifiers key modifier
  * @param signalName signal name to be bound
  * @param bindingArgs list of Gtk.BindingArg signal arguments 
  */
export declare function bindingEntryAddSignall(bindingSet: import('../Gtk').BindingSet, keyval: number, modifiers: import('../Gdk').ModifierType, signalName: string, bindingArgs: import('../Gtk').BindingArg): void;
/**
  * Remove a binding previously installed via gtk_binding_entry_add_signal() on binding_set.
  * @param bindingSet a Gtk.BindingSet to remove an entry of
  * @param keyval key value of binding to remove
  * @param modifiers key modifier of binding to remove 
  */
export declare function bindingEntryRemove(bindingSet: import('../Gtk').BindingSet, keyval: number, modifiers: import('../Gdk').ModifierType): void;
/**
  * Install a binding on binding_set which causes key lookups to be aborted, to prevent bindings from lower priority sets to be activated.
  * @param bindingSet a Gtk.BindingSet to skip an entry of
  * @param keyval key value of binding to skip
  * @param modifiers key modifier of binding to skip 
  */
export declare function bindingEntrySkip(bindingSet: import('../Gtk').BindingSet, keyval: number, modifiers: import('../Gdk').ModifierType): void;
/**
  * Find a binding set by its globally unique name.
  * @param setName unique binding set name
  * @returns None or the specified binding set 
  */
export declare function bindingSetFind(setName: string): import('../Gtk').BindingSet | null;
/**
  * Find a key binding matching keyval and modifiers and activate the binding on object.
  * @param object object to activate when binding found
  * @param keyval key value of the binding
  * @param modifiers key modifier of the binding
  * @returns True if a binding was found and activated 
  */
export declare function bindingsActivate(object: import('../GObject').Object, keyval: number, modifiers: import('../Gdk').ModifierType): boolean;
/**
  * Looks up key bindings for object to find one matching event, and if one was found, activate it.
  * @param object a GObject.Object (generally must be a widget)
  * @param event a Gdk.EventKey
  * @returns True if a matching key binding was found 
  */
export declare function bindingsActivateEvent(object: import('../GObject').Object, event: import('../Gdk').EventKey): boolean;
export declare function builderErrorQuark(): number;
/**
  * This function is supposed to be called in Gtk.Widget ::draw implementations for widgets that support multiple windows. cr must be untransformed from invoking of the draw function. This function will return True if the contents of the given window are supposed to be drawn and False otherwise. Note that when the drawing was not initiated by the windowing system this function will return True for all windows, so you need to draw the bottommost window first. Also, do not use “else if” statements to check which window should be drawn.
  * @param cr a cairo context
  * @param window the window to check. window may not be an input-only window.
  * @returns True if window should be drawn 
  */
export declare function cairoShouldDrawWindow(cr: import('../cairo').Context, window: import('../Gdk').Window): boolean;
/**
  * Transforms the given cairo context cr that from widget-relative coordinates to window-relative coordinates. If the widget’s window is not an ancestor of window, no modification will be applied.
  * @param cr the cairo context to transform
  * @param widget the widget the context is currently centered for
  * @param window the window to transform the context to 
  */
export declare function cairoTransformToWindow(cr: import('../cairo').Context, widget: import('../Gtk').Widget, window: import('../Gdk').Window): void;
/**
  * Checks that the GTK+ library in use is compatible with the given version. Generally you would pass in the constants Gtk.MAJOR_VERSION, Gtk.MINOR_VERSION, Gtk.MICRO_VERSION as the three arguments to this function; that produces a check that the library in use is compatible with the version of GTK+ the application or module was compiled against.
  * @param requiredMajor the required major version
  * @param requiredMinor the required minor version
  * @param requiredMicro the required micro version
  * @returns None if the GTK+ library is compatible with the given version, or a string describing the version mismatch. The returned string is owned by GTK+ and should not be modified or freed. 
  */
export declare function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null;
export declare function cssProviderErrorQuark(): number;
/**
  * Adds a GTK+ grab on device, so all the events on device and its associated pointer or keyboard (if any) are delivered to widget. If the block_others parameter is True, any other devices will be unable to interact with widget during the grab.
  * @param widget a Gtk.Widget
  * @param device a Gdk.Device to grab on.
  * @param blockOthers True to prevent other devices to interact with widget. 
  */
export declare function deviceGrabAdd(widget: import('../Gtk').Widget, device: import('../Gdk').Device, blockOthers: boolean): void;
/**
  * Removes a device grab from the given widget.
  * @param widget a Gtk.Widget
  * @param device a Gdk.Device 
  */
export declare function deviceGrabRemove(widget: import('../Gtk').Widget, device: import('../Gdk').Device): void;
/**
  * Prevents Gtk.init(), Gtk.init_check(), Gtk.init_with_args() and Gtk.parse_args() from automatically calling setlocale (LC_ALL, ""). You would want to use this function if you wanted to set the locale for your program to something other than the user’s locale, or if you wanted to set different values for different locale categories. 
  */
export declare function disableSetlocale(): void;
/**
  * Distributes extra_space to child sizes by bringing smaller children up to natural size first.
  * @param extraSpace Extra space to redistribute among children after subtracting minimum sizes and any child padding from the overall allocation
  * @param nRequestedSizes Number of requests to fit into the allocation
  * @param sizes An array of structs with a client pointer and a minimum/natural size in the orientation of the allocation.
  * @returns The remainder of extra_space after redistributing space to sizes. 
  */
export declare function distributeNaturalAllocation(extraSpace: number, nRequestedSizes: number, sizes: import('../Gtk').RequestedSize): number;
/**
  * Cancels an ongoing drag operation on the source side.
  * @param context a Gdk.DragContext, as e.g. returned by Gtk.Widget.drag_begin_with_coordinates() 
  */
export declare function dragCancel(context: import('../Gdk').DragContext): void;
/**
  * Informs the drag source that the drop is finished, and that the data of the drag will no longer be required.
  * @param context the drag context
  * @param success a flag indicating whether the drop was successful
  * @param del a flag indicating whether the source should delete the original data. (This should be True for a move)
  * @param time the timestamp from the Gtk.Widget ::drag-drop signal 
  */
export declare function dragFinish(context: import('../Gdk').DragContext, success: boolean, del: boolean, time: number): void;
/**
  * Determines the source widget for a drag.
  * @param context a (destination side) drag context
  * @returns if the drag is occurring within a single application, a pointer to the source widget. Otherwise, None. 
  */
export declare function dragGetSourceWidget(context: import('../Gdk').DragContext): import('../Gtk').Widget | null;
/**
  * Sets the icon for a particular drag to the default icon.
  * @param context the context for a drag (This must be called with a  context for the source side of a drag) 
  */
export declare function dragSetIconDefault(context: import('../Gdk').DragContext): void;
/**
  * Sets the icon for a given drag from the given icon. See the documentation for Gtk.drag_set_icon_name() for more details about using icons in drag and drop.
  * @param context the context for a drag (This must be called with a context for the source side of a drag)
  * @param icon a Gio.Icon
  * @param hotX the X offset of the hotspot within the icon
  * @param hotY the Y offset of the hotspot within the icon 
  */
export declare function dragSetIconGicon(context: import('../Gdk').DragContext, icon: import('../Gio').Icon, hotX: number, hotY: number): void;
/**
  * Sets the icon for a given drag from a named themed icon. See the docs for Gtk.IconTheme for more details. Note that the size of the icon depends on the icon theme (the icon is loaded at the symbolic size Gtk.IconSize.DND), thus hot_x and hot_y have to be used with care.
  * @param context the context for a drag (This must be called with a context for the source side of a drag)
  * @param iconName name of icon to use
  * @param hotX the X offset of the hotspot within the icon
  * @param hotY the Y offset of the hotspot within the icon 
  */
export declare function dragSetIconName(context: import('../Gdk').DragContext, iconName: string, hotX: number, hotY: number): void;
/**
  * Sets pixbuf as the icon for a given drag.
  * @param context the context for a drag (This must be called with a  context for the source side of a drag)
  * @param pixbuf the GdkPixbuf.Pixbuf to use as the drag icon
  * @param hotX the X offset within widget of the hotspot
  * @param hotY the Y offset within widget of the hotspot 
  */
export declare function dragSetIconPixbuf(context: import('../Gdk').DragContext, pixbuf: import('../GdkPixbuf').Pixbuf, hotX: number, hotY: number): void;
/**
  * Sets the icon for a given drag from a stock ID.
  * @param context the context for a drag (This must be called with a  context for the source side of a drag)
  * @param stockId the ID of the stock icon to use for the drag
  * @param hotX the X offset within the icon of the hotspot
  * @param hotY the Y offset within the icon of the hotspot 
  */
export declare function dragSetIconStock(context: import('../Gdk').DragContext, stockId: string, hotX: number, hotY: number): void;
/**
  * Sets surface as the icon for a given drag. GTK+ retains references for the arguments, and will release them when they are no longer needed.
  * @param context the context for a drag (This must be called with a context for the source side of a drag)
  * @param surface the surface to use as icon 
  */
export declare function dragSetIconSurface(context: import('../Gdk').DragContext, surface: import('../cairo').Surface): void;
/**
  * Changes the icon for drag operation to a given widget. GTK+ will not destroy the widget, so if you don’t want it to persist, you should connect to the “drag-end” signal and destroy it yourself.
  * @param context the context for a drag. (This must be called with a context for the source side of a drag)
  * @param widget a widget to use as an icon
  * @param hotX the X offset within widget of the hotspot
  * @param hotY the Y offset within widget of the hotspot 
  */
export declare function dragSetIconWidget(context: import('../Gdk').DragContext, widget: import('../Gtk').Widget, hotX: number, hotY: number): void;
/**
  * Draws a text caret on cr at location. This is not a style function but merely a convenience function for drawing the standard cursor shape.
  * @param widget a Gtk.Widget
  * @param cr cairo context to draw to
  * @param location location where to draw the cursor (location->width is ignored)
  * @param isPrimary if the cursor should be the primary cursor color.
  * @param direction whether the cursor is left-to-right or right-to-left. Should never be Gtk.TextDirection.NONE
  * @param drawArrow True to draw a directional arrow on the cursor. Should be False unless the cursor is split. 
  */
export declare function drawInsertionCursor(widget: import('../Gtk').Widget, cr: import('../cairo').Context, location: import('../Gdk').Rectangle, isPrimary: boolean, direction: import('../Gtk').TextDirection, drawArrow: boolean): void;
/**
  * Checks if any events are pending.
  * @returns True if any events are pending, False otherwise 
  */
export declare function eventsPending(): boolean;
/**
  * Registers an error quark for Gtk.FileChooser if necessary.
  * @returns The error quark used for Gtk.FileChooser errors. 
  */
export declare function fileChooserErrorQuark(): number;
/**
  * Returns the binary age as passed to libtool when building the GTK+ library the process is running against. If libtool means nothing to you, don’t worry about it.
  * @returns the binary age of the GTK+ library 
  */
export declare function getBinaryAge(): number;
/**
  * Obtains a copy of the event currently being processed by GTK+.
  * @returns a copy of the current event, or None if there is no current event. The returned event must be freed with Gdk.Event.free(). 
  */
export declare function getCurrentEvent(): import('../Gdk').Event | null;
/**
  * If there is a current event and it has a device, return that device, otherwise return None.
  * @returns a Gdk.Device, or None 
  */
export declare function getCurrentEventDevice(): import('../Gdk').Device | null;
/**
  * If there is a current event and it has a state field, place that state field in state and return True, otherwise return False.
  * @returns True if there was a current event and it had a state field  state:a location to store the state of the current event 
  */
export declare function getCurrentEventState(): [boolean, import('../Gdk').ModifierType];
/**
  * If there is a current event and it has a timestamp, return that timestamp, otherwise return Gdk.CURRENT_TIME.
  * @returns the timestamp from the current event, or Gdk.CURRENT_TIME. 
  */
export declare function getCurrentEventTime(): number;
/**
  * Returns the GTK+ debug flags.
  * @returns the GTK+ debug flags. 
  */
export declare function getDebugFlags(): number;
/**
  * Returns the Pango.Language for the default language currently in effect. (Note that this can change over the life of an application.) The default language is derived from the current locale. It determines, for example, whether GTK+ uses the right-to-left or left-to-right text direction.
  * @returns the default language as a Pango.Language, must not be freed 
  */
export declare function getDefaultLanguage(): import('../Pango').Language;
/**
  * If event is None or the event was not associated with any widget, returns None, otherwise returns the widget that received the event originally.
  * @param event a Gdk.Event
  * @returns the widget that originally received event, or None 
  */
export declare function getEventWidget(event: import('../Gdk').Event): import('../Gtk').Widget | null;
/**
  * Returns the interface age as passed to libtool when building the GTK+ library the process is running against. If libtool means nothing to you, don’t worry about it.
  * @returns the interface age of the GTK+ library 
  */
export declare function getInterfaceAge(): number;
/**
  * Get the direction of the current locale. This is the expected reading direction for text and UI.
  * @returns the Gtk.TextDirection of the current locale 
  */
export declare function getLocaleDirection(): import('../Gtk').TextDirection;
/**
  * Returns the major version number of the GTK+ library. (e.g. in GTK+ version 3.1.5 this is 3.)
  * @returns the major version number of the GTK+ library 
  */
export declare function getMajorVersion(): number;
/**
  * Returns the micro version number of the GTK+ library. (e.g. in GTK+ version 3.1.5 this is 5.)
  * @returns the micro version number of the GTK+ library 
  */
export declare function getMicroVersion(): number;
/**
  * Returns the minor version number of the GTK+ library. (e.g. in GTK+ version 3.1.5 this is 1.)
  * @returns the minor version number of the GTK+ library 
  */
export declare function getMinorVersion(): number;
/**
  * Returns a GLib.OptionGroup for the commandline arguments recognized by GTK+ and GDK.
  * @param openDefaultDisplay whether to open the default display when parsing the commandline arguments
  * @returns a GLib.OptionGroup for the commandline arguments recognized by GTK+ 
  */
export declare function getOptionGroup(openDefaultDisplay: boolean): import('../GLib').OptionGroup;
/**
  * Queries the current grab of the default window group.
  * @returns The widget which currently has the grab or None if no grab is active 
  */
export declare function grabGetCurrent(): import('../Gtk').Widget | null;
/**
  * Looks up the icon size associated with name.
  * @param name the name to look up.
  * @returns the icon size (Gtk.IconSize) 
  */
export declare function iconSizeFromName(name: string): number;
/**
  * Gets the canonical name of the given icon size. The returned string is statically allocated and should not be freed.
  * @param size a Gtk.IconSize.
  * @returns the name of the given icon size. 
  */
export declare function iconSizeGetName(size: number): string;
/**
  * Obtains the pixel size of a semantic icon size size: Gtk.IconSize.MENU, Gtk.IconSize.BUTTON, etc.  This function isn’t normally needed, Gtk.IconTheme.load_icon() is the usual way to get an icon for rendering, then just look at the size of the rendered pixbuf. The rendered pixbuf may not even correspond to the width/height returned by Gtk.IconSize.lookup(), because themes are free to render the pixbuf however they like, including changing the usual size.
  * @param size an icon size (Gtk.IconSize)
  * @returns True if size was a valid size  width:location to store icon width height:location to store icon height 
  */
export declare function iconSizeLookup(size: number): [boolean, number, number];
/**
  * Obtains the pixel size of a semantic icon size, possibly modified by user preferences for a particular Gtk.Settings. Normally size would be Gtk.IconSize.MENU, Gtk.IconSize.BUTTON, etc.  This function isn’t normally needed, Gtk.Widget.render_icon_pixbuf() is the usual way to get an icon for rendering, then just look at the size of the rendered pixbuf. The rendered pixbuf may not even correspond to the width/height returned by Gtk.IconSize.lookup(), because themes are free to render the pixbuf however they like, including changing the usual size.
  * @param settings a Gtk.Settings object, used to determine which set of user preferences to used.
  * @param size an icon size (Gtk.IconSize)
  * @returns True if size was a valid size   width:location to store icon width height:location to store icon height 
  */
export declare function iconSizeLookupForSettings(settings: import('../Gtk').Settings, size: number): [boolean, number, number];
/**
  * Registers a new icon size, along the same lines as Gtk.IconSize.MENU, etc. Returns the integer value for the size.
  * @param name name of the icon size
  * @param width the icon width
  * @param height the icon height
  * @returns integer value representing the size (Gtk.IconSize) 
  */
export declare function iconSizeRegister(name: string, width: number, height: number): number;
/**
  * Registers alias as another name for target. So calling Gtk.IconSize.from_name() with alias as argument will return target.
  * @param alias an alias for target
  * @param target an existing icon size (Gtk.IconSize) 
  */
export declare function iconSizeRegisterAlias(alias: string, target: number): void;
export declare function iconThemeErrorQuark(): number;
/**
  * Call this function before using any other GTK+ functions in your GUI applications.  It will initialize everything needed to operate the toolkit and parses some standard command line options.
  * @param argv Address of the argv parameter of main(), or None. Any options understood by GTK+ are stripped before return.
  * @returns Address of the argv parameter of main(), or None. Any options understood by GTK+ are stripped before return. 
  */
export declare function init(argv: string | null): string[];
/**
  * This function does the same work as Gtk.init() with only a single change: It does not terminate the program if the commandline arguments couldn’t be parsed or the windowing system can’t be initialized. Instead it returns False on failure.
  * @param argv Address of the argv parameter of main(), or None. Any options understood by GTK+ are stripped before return.
  * @returns True if the commandline arguments (if any) were valid and the windowing system has been successfully initialized, False otherwise  argv:Address of the argv parameter of main(), or None. Any options understood by GTK+ are stripped before return. 
  */
export declare function initCheck(argv: string | null): [boolean, string[]];
/**
  * This function does the same work as Gtk.init_check(). Additionally, it allows you to add your own commandline options, and it automatically generates nicely formatted --help output. Note that your program will be terminated after writing out the help output.
  * @param argv Address of the argv parameter of main(), or None. Any options understood by GTK+ are stripped before return.
  * @param parameterString a string which is displayed in the first line of --help output, after programname [OPTION...]
  * @param entries a None-terminated array of GLib.OptionEntrys describing the options of your program
  * @param translationDomain a translation domain to use for translating the --help output for the options in entries and the parameter_string with gettext(), or None
  * @returns True if the commandline arguments (if any) were valid and if the windowing system has been successfully initialized, False otherwise   argv:Address of the argv parameter of main(), or None. Any options understood by GTK+ are stripped before return. 
  */
export declare function initWithArgs(argv: string | null, parameterString: string | null, entries: import('../GLib').OptionEntry, translationDomain: string | null): [boolean, string[]];
/**
  * Removes the key snooper function with the given id.
  * @param snooperHandlerId Identifies the key snooper to remove 
  */
export declare function keySnooperRemove(snooperHandlerId: number): void;
/**
  * Runs the main loop until Gtk.main_quit() is called. 
  */
export declare function main(): void;
/**
  * Processes a single GDK event.
  * @param event An event to process (normally passed by GDK) 
  */
export declare function mainDoEvent(event: import('../Gdk').Event): void;
/**
  * Runs a single iteration of the mainloop.
  * @returns True if Gtk.main_quit() has been called for the innermost mainloop 
  */
export declare function mainIteration(): boolean;
/**
  * Runs a single iteration of the mainloop. If no events are available either return or block depending on the value of blocking.
  * @param blocking True if you want GTK+ to block if no events are pending
  * @returns True if Gtk.main_quit() has been called for the innermost mainloop 
  */
export declare function mainIterationDo(blocking: boolean): boolean;
/**
  * Asks for the current nesting level of the main loop.
  * @returns the nesting level of the current invocation of the main loop 
  */
export declare function mainLevel(): number;
/**
  * Makes the innermost invocation of the main loop return when it regains control. 
  */
export declare function mainQuit(): void;
/**
  * Draws an arrow in the given rectangle on cr using the given parameters. arrow_type determines the direction of the arrow.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param arrowType the type of arrow to draw
  * @param fill True if the arrow tip should be filled
  * @param x x origin of the rectangle to draw the arrow in
  * @param y y origin of the rectangle to draw the arrow in
  * @param width width of the rectangle to draw the arrow in
  * @param height height of the rectangle to draw the arrow in 
  */
export declare function paintArrow(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, arrowType: import('../Gtk').ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;
/**
  * Draws a box on cr with the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the box
  * @param y y origin of the box
  * @param width the width of the box
  * @param height the height of the box 
  */
export declare function paintBox(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a box in cr using the given style and state and shadow type, leaving a gap in one side.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle
  * @param y y origin of the rectangle
  * @param width width of the rectangle
  * @param height width of the rectangle
  * @param gapSide side in which to leave the gap
  * @param gapX starting position of the gap
  * @param gapWidth width of the gap 
  */
export declare function paintBoxGap(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gapSide: import('../Gtk').PositionType, gapX: number, gapWidth: number): void;
/**
  * Draws a check button indicator in the given rectangle on cr with the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle to draw the check in
  * @param y y origin of the rectangle to draw the check in
  * @param width the width of the rectangle to draw the check in
  * @param height the height of the rectangle to draw the check in 
  */
export declare function paintCheck(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a diamond in the given rectangle on window using the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle to draw the diamond in
  * @param y y origin of the rectangle to draw the diamond in
  * @param width width of the rectangle to draw the diamond in
  * @param height height of the rectangle to draw the diamond in 
  */
export declare function paintDiamond(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws an expander as used in Gtk.TreeView. x and y specify the center the expander. The size of the expander is determined by the “expander-size” style property of widget.  (If widget is not specified or doesn’t have an “expander-size” property, an unspecified default size will be used, since the caller doesn’t have sufficient information to position the expander, this is likely not useful.) The expander is expander_size pixels tall in the collapsed position and expander_size pixels wide in the expanded position.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param widget the widget
  * @param detail a style detail
  * @param x the x position to draw the expander at
  * @param y the y position to draw the expander at
  * @param expanderStyle the style to draw the expander in; determines whether the expander is collapsed, expanded, or in an intermediate state. 
  */
export declare function paintExpander(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, expanderStyle: import('../Gtk').ExpanderStyle): void;
/**
  * Draws an extension, i.e. a notebook tab.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the extension
  * @param y y origin of the extension
  * @param width width of the extension
  * @param height width of the extension
  * @param gapSide the side on to which the extension is attached 
  */
export declare function paintExtension(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gapSide: import('../Gtk').PositionType): void;
/**
  * Draws a flat box on cr with the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the box
  * @param y y origin of the box
  * @param width the width of the box
  * @param height the height of the box 
  */
export declare function paintFlatBox(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a focus indicator around the given rectangle on cr using the given style.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param widget the widget
  * @param detail a style detail
  * @param x the x origin of the rectangle around which to draw a focus indicator
  * @param y the y origin of the rectangle around which to draw a focus indicator
  * @param width the width of the rectangle around which to draw a focus indicator
  * @param height the height of the rectangle around which to draw a focus indicator 
  */
export declare function paintFocus(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a handle as used in Gtk.HandleBox and Gtk.Paned.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the handle
  * @param y y origin of the handle
  * @param width with of the handle
  * @param height height of the handle
  * @param orientation the orientation of the handle 
  */
export declare function paintHandle(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: import('../Gtk').Orientation): void;
/**
  * Draws a horizontal line from (x1, y) to (x2, y) in cr using the given style and state.
  * @param style a Gtk.Style
  * @param cr a #caio_t
  * @param stateType a state
  * @param widget the widget
  * @param detail a style detail
  * @param x1 the starting x coordinate
  * @param x2 the ending x coordinate
  * @param y the y coordinate 
  */
export declare function paintHline(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, widget: import('../Gtk').Widget | null, detail: string | null, x1: number, x2: number, y: number): void;
/**
  * Draws a layout on cr using the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param useText whether to use the text or foreground graphics context of style
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin
  * @param y y origin
  * @param layout the layout to draw 
  */
export declare function paintLayout(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, useText: boolean, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, layout: import('../Pango').Layout): void;
/**
  * Draws a radio button indicator in the given rectangle on cr with the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle to draw the option in
  * @param y y origin of the rectangle to draw the option in
  * @param width the width of the rectangle to draw the option in
  * @param height the height of the rectangle to draw the option in 
  */
export declare function paintOption(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a resize grip in the given rectangle on cr using the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param widget the widget
  * @param detail a style detail
  * @param edge the edge in which to draw the resize grip
  * @param x the x origin of the rectangle in which to draw the resize grip
  * @param y the y origin of the rectangle in which to draw the resize grip
  * @param width the width of the rectangle in which to draw the resize grip
  * @param height the height of the rectangle in which to draw the resize grip 
  */
export declare function paintResizeGrip(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, widget: import('../Gtk').Widget | null, detail: string | null, edge: import('../Gdk').WindowEdge, x: number, y: number, width: number, height: number): void;
/**
  * Draws a shadow around the given rectangle in cr using the given style and state and shadow type.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle
  * @param y y origin of the rectangle
  * @param width width of the rectangle
  * @param height width of the rectangle 
  */
export declare function paintShadow(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a shadow around the given rectangle in cr using the given style and state and shadow type, leaving a gap in one side.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle
  * @param y y origin of the rectangle
  * @param width width of the rectangle
  * @param height width of the rectangle
  * @param gapSide side in which to leave the gap
  * @param gapX starting position of the gap
  * @param gapWidth width of the gap 
  */
export declare function paintShadowGap(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gapSide: import('../Gtk').PositionType, gapX: number, gapWidth: number): void;
/**
  * Draws a slider in the given rectangle on cr using the given style and orientation.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType a shadow
  * @param widget the widget
  * @param detail a style detail
  * @param x the x origin of the rectangle in which to draw a slider
  * @param y the y origin of the rectangle in which to draw a slider
  * @param width the width of the rectangle in which to draw a slider
  * @param height the height of the rectangle in which to draw a slider
  * @param orientation the orientation to be used 
  */
export declare function paintSlider(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: import('../Gtk').Orientation): void;
/**
  * Draws a spinner on window using the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param widget the widget (may be None)
  * @param detail a style detail (may be None)
  * @param step the nth step
  * @param x the x origin of the rectangle in which to draw the spinner
  * @param y the y origin of the rectangle in which to draw the spinner
  * @param width the width of the rectangle in which to draw the spinner
  * @param height the height of the rectangle in which to draw the spinner 
  */
export declare function paintSpinner(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, widget: import('../Gtk').Widget | null, detail: string | null, step: number, x: number, y: number, width: number, height: number): void;
/**
  * Draws an option menu tab (i.e. the up and down pointing arrows) in the given rectangle on cr using the given parameters.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param shadowType the type of shadow to draw
  * @param widget the widget
  * @param detail a style detail
  * @param x x origin of the rectangle to draw the tab in
  * @param y y origin of the rectangle to draw the tab in
  * @param width the width of the rectangle to draw the tab in
  * @param height the height of the rectangle to draw the tab in 
  */
export declare function paintTab(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, shadowType: import('../Gtk').ShadowType, widget: import('../Gtk').Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
  * Draws a vertical line from (x, y1_) to (x, y2_) in cr using the given style and state.
  * @param style a Gtk.Style
  * @param cr a cairo.Context
  * @param stateType a state
  * @param widget the widget
  * @param detail a style detail
  * @param y1 the starting y coordinate
  * @param y2 the ending y coordinate
  * @param x the x coordinate 
  */
export declare function paintVline(style: import('../Gtk').Style, cr: import('../cairo').Context, stateType: import('../Gtk').StateType, widget: import('../Gtk').Widget | null, detail: string | null, y1: number, y2: number, x: number): void;
/**
  * Returns the name of the default paper size, which depends on the current locale.
  * @returns the name of the default paper size. The string is owned by GTK+ and should not be modified. 
  */
export declare function paperSizeGetDefault(): string;
/**
  * Creates a list of known paper sizes.
  * @param includeCustom whether to include custom paper sizes as defined in the page setup dialog
  * @returns a newly allocated list of newly allocated Gtk.PaperSize objects 
  */
export declare function paperSizeGetPaperSizes(includeCustom: boolean): import('../Gtk').PaperSize[];
/**
  * Parses command line arguments, and initializes global attributes of GTK+, but does not actually open a connection to a display. (See Gdk.Display.open(), Gdk.get_display_arg_name())
  * @param argv a pointer to the array of command line arguments
  * @returns True if initialization succeeded, otherwise False  argv:a pointer to the array of command line arguments 
  */
export declare function parseArgs(argv: string): [boolean, string[]];
/**
  * Registers an error quark for Gtk.PrintOperation if necessary.
  * @returns The error quark used for Gtk.PrintOperation errors. 
  */
export declare function printErrorQuark(): number;
/**
  * Runs a page setup dialog, letting the user modify the values from page_setup. If the user cancels the dialog, the returned Gtk.PageSetup is identical to the passed in page_setup, otherwise it contains the modifications done in the dialog.
  * @param parent transient parent
  * @param pageSetup an existing Gtk.PageSetup
  * @param settings a Gtk.PrintSettings
  * @returns a new Gtk.PageSetup 
  */
export declare function printRunPageSetupDialog(parent: import('../Gtk').Window | null, pageSetup: import('../Gtk').PageSetup | null, settings: import('../Gtk').PrintSettings): import('../Gtk').PageSetup;
/**
  * Runs a page setup dialog, letting the user modify the values from page_setup.
  * @param parent transient parent, or None
  * @param pageSetup an existing Gtk.PageSetup, or None
  * @param settings a Gtk.PrintSettings
  * @param doneCb a function to call when the user saves the modified page setup
  * @param data user data to pass to done_cb 
  */
export declare function printRunPageSetupDialogAsync(parent: import('../Gtk').Window | null, pageSetup: import('../Gtk').PageSetup | null, settings: import('../Gtk').PrintSettings, doneCb: import('../Gtk').pageSetupDoneFunc, data: Object | null): void;
/**
  * Sends an event to a widget, propagating the event to parent widgets if the event remains unhandled.
  * @param widget a Gtk.Widget
  * @param event an event 
  */
export declare function propagateEvent(widget: import('../Gtk').Widget, event: import('../Gdk').Event): void;
/**
  * Adds a file to the list of files to be parsed at the end of Gtk.init().
  * @param filename the pathname to the file. If filename is not absolute, it is searched in the current directory. 
  */
export declare function rcAddDefaultFile(filename: string): void;
/**
  * Searches for a theme engine in the GTK+ search path. This function is not useful for applications and should not be used.
  * @param moduleFile name of a theme engine
  * @returns The filename, if found (must be freed with GLib.free()), otherwise None. 
  */
export declare function rcFindModuleInPath(moduleFile: string): string;
/**
  * Looks up a file in pixmap path for the specified Gtk.Settings. If the file is not found, it outputs a warning message using g_warning() and returns None.
  * @param settings a Gtk.Settings
  * @param scanner Scanner used to get line number information for the warning message, or None
  * @param pixmapFile name of the pixmap file to locate.
  * @returns the filename. 
  */
export declare function rcFindPixmapInPath(settings: import('../Gtk').Settings, scanner: import('../GLib').Scanner, pixmapFile: string): string;
/**
  * Retrieves the current list of RC files that will be parsed at the end of Gtk.init().
  * @returns A None-terminated array of filenames.  This memory is owned by GTK+ and must not be freed by the application.  If you want to store this information, you should make a copy. 
  */
export declare function rcGetDefaultFiles(): string[];
/**
  * Obtains the path to the IM modules file. See the documentation of the GTK_IM_MODULE_FILE environment variable for more details.
  * @returns a newly-allocated string containing the name of the file listing the IM modules available for loading 
  */
export declare function rcGetImModuleFile(): string;
/**
  * Obtains the path in which to look for IM modules. See the documentation of the GTK_PATH environment variable for more details about looking up modules. This function is useful solely for utilities supplied with GTK+ and should not be used by applications under normal circumstances.
  * @returns a newly-allocated string containing the path in which to look for IM modules. 
  */
export declare function rcGetImModulePath(): string;
/**
  * Returns a directory in which GTK+ looks for theme engines. For full information about the search for theme engines, see the docs for GTK_PATH in Running GTK+ Applications.
  * @returns the directory. (Must be freed with GLib.free()) 
  */
export declare function rcGetModuleDir(): string;
/**
  * Finds all matching RC styles for a given widget, composites them together, and then creates a Gtk.Style representing the composite appearance. (GTK+ actually keeps a cache of previously created styles, so a new style may not be created.)
  * @param widget a Gtk.Widget
  * @returns the resulting style. No refcount is added to the returned style, so if you want to save this style around, you should add a reference yourself. 
  */
export declare function rcGetStyle(widget: import('../Gtk').Widget): import('../Gtk').Style;
/**
  * Creates up a Gtk.Style from styles defined in a RC file by providing the raw components used in matching. This function may be useful when creating pseudo-widgets that should be themed like widgets but don’t actually have corresponding GTK+ widgets. An example of this would be items inside a GNOME canvas widget.
  * @param settings a Gtk.Settings object
  * @param widgetPath the widget path to use when looking up the style, or None if no matching against the widget path should be done
  * @param classPath the class path to use when looking up the style, or None if no matching against the class path should be done.
  * @param type a type that will be used along with parent types of this type when matching against class styles, or GObject.TYPE_NONE
  * @returns A style created by matching with the supplied paths, or None if nothing matching was specified and the default style should be used. The returned value is owned by GTK+ as part of an internal cache, so you must call GObject.Object.ref() on the returned value if you want to keep a reference to it. 
  */
export declare function rcGetStyleByPaths(settings: import('../Gtk').Settings, widgetPath: string | null, classPath: string | null, type: import('../GObject').GType): import('../Gtk').Style | null;
/**
  * Returns the standard directory in which themes should be installed. (GTK+ does not actually use this directory itself.)
  * @returns The directory (must be freed with GLib.free()). 
  */
export declare function rcGetThemeDir(): string;
/**
  * Parses a given resource file.
  * @param filename the filename of a file to parse. If filename is not absolute, it is searched in the current directory. 
  */
export declare function rcParse(filename: string): void;
/**
  * Parses a color in the format expected in a RC file.
  * @param scanner a GLib.Scanner
  * @returns GLib.TokenType.NONE if parsing succeeded, otherwise the token that was expected but not found  color:a pointer to a Gdk.Color in which to store the result 
  */
export declare function rcParseColor(scanner: import('../GLib').Scanner): [number, import('../Gdk').Color];
/**
  * Parses a color in the format expected in a RC file. If style is not None, it will be consulted to resolve references to symbolic colors.
  * @param scanner a GLib.Scanner
  * @param style a Gtk.RcStyle, or None
  * @returns GLib.TokenType.NONE if parsing succeeded, otherwise the token that was expected but not found   color:a pointer to a Gdk.Color in which to store the result 
  */
export declare function rcParseColorFull(scanner: import('../GLib').Scanner, style: import('../Gtk').RcStyle | null): [number, import('../Gdk').Color];
/**
  * Parses a Gtk.PathPriorityType variable from the format expected in a RC file.
  * @param scanner a GLib.Scanner (must be initialized for parsing an RC file)
  * @param priority A pointer to Gtk.PathPriorityType variable in which to store the result.
  * @returns GLib.TokenType.NONE if parsing succeeded, otherwise the token that was expected but not found. 
  */
export declare function rcParsePriority(scanner: import('../GLib').Scanner, priority: import('../Gtk').PathPriorityType): number;
/**
  * Parses a Gtk.StateType variable from the format expected in a RC file.
  * @param scanner a GLib.Scanner (must be initialized for parsing an RC file)
  * @returns GLib.TokenType.NONE if parsing succeeded, otherwise the token that was expected but not found.  state:A pointer to a Gtk.StateType variable in which to store the result. 
  */
export declare function rcParseState(scanner: import('../GLib').Scanner): [number, import('../Gtk').StateType];
/**
  * Parses resource information directly from a string.
  * @param rcString a string to parse. 
  */
export declare function rcParseString(rcString: string): void;
/**
  * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses borders in the form "{ left, right, top, bottom }" for integers left, right, top and bottom.
  * @param pspec a GObject.ParamSpec
  * @param gstring the GLib.String to be parsed
  * @param propertyValue a GObject.Value which must hold boxed values.
  * @returns True if gstring could be parsed and property_value has been set to the resulting Gtk.Border. 
  */
export declare function rcPropertyParseBorder(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
/**
  * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses a color given either by its name or in the form { red, green, blue } where red, green and blue are integers between 0 and 65535 or floating-point numbers between 0 and 1.
  * @param pspec a GObject.ParamSpec
  * @param gstring the GLib.String to be parsed
  * @param propertyValue a GObject.Value which must hold Gdk.Color values.
  * @returns True if gstring could be parsed and property_value has been set to the resulting Gdk.Color. 
  */
export declare function rcPropertyParseColor(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
/**
  * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses a single enumeration value.
  * @param pspec a GObject.ParamSpec
  * @param gstring the GLib.String to be parsed
  * @param propertyValue a GObject.Value which must hold enum values.
  * @returns True if gstring could be parsed and property_value has been set to the resulting GObject.EnumValue. 
  */
export declare function rcPropertyParseEnum(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
/**
  * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses flags.
  * @param pspec a GObject.ParamSpec
  * @param gstring the GLib.String to be parsed
  * @param propertyValue a GObject.Value which must hold flags values.
  * @returns True if gstring could be parsed and property_value has been set to the resulting flags value. 
  */
export declare function rcPropertyParseFlags(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
/**
  * A Gtk.RcPropertyParser for use with Gtk.Settings.install_property_parser() or gtk_widget_class_install_style_property_parser() which parses a requisition in the form "{ width, height }" for integers %width and %height.
  * @param pspec a GObject.ParamSpec
  * @param gstring the GLib.String to be parsed
  * @param propertyValue a GObject.Value which must hold boxed values.
  * @returns True if gstring could be parsed and property_value has been set to the resulting Gtk.Requisition. 
  */
export declare function rcPropertyParseRequisition(pspec: import('../GObject').ParamSpec, gstring: import('../GLib').String, propertyValue: import('../GObject').Value): boolean;
/**
  * If the modification time on any previously read file for the default Gtk.Settings has changed, discard all style information and then reread all previously read RC files.
  * @returns True if the files were reread. 
  */
export declare function rcReparseAll(): boolean;
/**
  * If the modification time on any previously read file for the given Gtk.Settings has changed, discard all style information and then reread all previously read RC files.
  * @param settings a Gtk.Settings
  * @param forceLoad load whether or not anything changed
  * @returns True if the files were reread. 
  */
export declare function rcReparseAllForSettings(settings: import('../Gtk').Settings, forceLoad: boolean): boolean;
/**
  * This function recomputes the styles for all widgets that use a particular Gtk.Settings object. (There is one Gtk.Settings object per Gdk.Screen, see Gtk.Settings.get_for_screen()); It is useful when some global parameter has changed that affects the appearance of all widgets, because when a widget gets a new style, it will both redraw and recompute any cached information about its appearance. As an example, it is used when the default font size set by the operating system changes. Note that this function doesn’t affect widgets that have a style set explicitly on them with Gtk.Widget.set_style().
  * @param settings a Gtk.Settings 
  */
export declare function rcResetStyles(settings: import('../Gtk').Settings): void;
/**
  * Sets the list of files that GTK+ will read at the end of Gtk.init().
  * @param filenames A None-terminated list of filenames. 
  */
export declare function rcSetDefaultFiles(filenames: string): void;
export declare function recentChooserErrorQuark(): number;
export declare function recentManagerErrorQuark(): number;
/**
  * Renders an activity indicator (such as in Gtk.Spinner). The state Gtk.StateFlags.CHECKED determines whether there is activity going on.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderActivity(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders an arrow pointing to angle.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param angle arrow angle from 0 to 2 * GLib.PI, being 0 the arrow pointing to the north
  * @param x X origin of the render area
  * @param y Y origin of the render area
  * @param size square side for render area 
  */
export declare function renderArrow(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, angle: number, x: number, y: number, size: number): void;
/**
  * Renders the background of an element.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderBackground(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Returns the area that will be affected (i.e. drawn to) when calling Gtk.render_background() for the given context and rectangle.
  * @param context a Gtk.StyleContext
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height
  * @returns return location for the clip 
  */
export declare function renderBackgroundGetClip(context: import('../Gtk').StyleContext, x: number, y: number, width: number, height: number): import('../Gdk').Rectangle;
/**
  * Renders a checkmark (as in a Gtk.CheckButton).
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderCheck(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders an expander (as used in Gtk.TreeView and Gtk.Expander) in the area defined by x, y, width, height. The state Gtk.StateFlags.CHECKED determines whether the expander is collapsed or expanded.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderExpander(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders a extension (as in a Gtk.Notebook tab) in the rectangle defined by x, y, width, height. The side where the extension connects to is defined by gap_side.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height
  * @param gapSide side where the gap is 
  */
export declare function renderExtension(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number, gapSide: import('../Gtk').PositionType): void;
/**
  * Renders a focus indicator on the rectangle determined by x, y, width, height.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderFocus(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders a frame around the rectangle defined by x, y, width, height.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderFrame(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders a frame around the rectangle defined by (x, y, width, height), leaving a gap on one side. xy0_gap and xy1_gap will mean X coordinates for Gtk.PositionType.TOP and Gtk.PositionType.BOTTOM gap sides, and Y coordinates for Gtk.PositionType.LEFT and Gtk.PositionType.RIGHT.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height
  * @param gapSide side where the gap is
  * @param xy0Gap initial coordinate (X or Y depending on gap_side) for the gap
  * @param xy1Gap end coordinate (X or Y depending on gap_side) for the gap 
  */
export declare function renderFrameGap(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number, gapSide: import('../Gtk').PositionType, xy0Gap: number, xy1Gap: number): void;
/**
  * Renders a handle (as in Gtk.HandleBox, Gtk.Paned and Gtk.Window’s resize grip), in the rectangle determined by x, y, width, height.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderHandle(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders the icon in pixbuf at the specified x and y coordinates.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param pixbuf a GdkPixbuf.Pixbuf containing the icon to draw
  * @param x X position for the pixbuf
  * @param y Y position for the pixbuf 
  */
export declare function renderIcon(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, pixbuf: import('../GdkPixbuf').Pixbuf, x: number, y: number): void;
/**
  * Renders the icon specified by source at the given size, returning the result in a pixbuf.
  * @param context a Gtk.StyleContext
  * @param source the Gtk.IconSource specifying the icon to render
  * @param size the size (Gtk.IconSize) to render the icon at. A size of (GtkIconSize) -1 means render at the size of the source and don’t scale.
  * @returns a newly-created GdkPixbuf.Pixbuf containing the rendered icon 
  */
export declare function renderIconPixbuf(context: import('../Gtk').StyleContext, source: import('../Gtk').IconSource, size: number): import('../GdkPixbuf').Pixbuf;
/**
  * Renders the icon in surface at the specified x and y coordinates.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param surface a cairo.Surface containing the icon to draw
  * @param x X position for the icon
  * @param y Y position for the incon 
  */
export declare function renderIconSurface(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, surface: import('../cairo').Surface, x: number, y: number): void;
/**
  * Draws a text caret on cr at the specified index of layout.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin
  * @param y Y origin
  * @param layout the Pango.Layout of the text
  * @param index the index in the Pango.Layout
  * @param direction the Pango.Direction of the text 
  */
export declare function renderInsertionCursor(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, layout: import('../Pango').Layout, index: number, direction: import('../Pango').Direction): void;
/**
  * Renders layout on the coordinates x, y
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin
  * @param y Y origin
  * @param layout the Pango.Layout to render 
  */
export declare function renderLayout(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, layout: import('../Pango').Layout): void;
/**
  * Renders a line from (x0, y0) to (x1, y1).
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x0 X coordinate for the origin of the line
  * @param y0 Y coordinate for the origin of the line
  * @param x1 X coordinate for the end of the line
  * @param y1 Y coordinate for the end of the line 
  */
export declare function renderLine(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x0: number, y0: number, x1: number, y1: number): void;
/**
  * Renders an option mark (as in a Gtk.RadioButton), the Gtk.StateFlags.CHECKED state will determine whether the option is on or off, and Gtk.StateFlags.INCONSISTENT whether it should be marked as undefined.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height 
  */
export declare function renderOption(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number): void;
/**
  * Renders a slider (as in Gtk.Scale) in the rectangle defined by x, y, width, height. orientation defines whether the slider is vertical or horizontal.
  * @param context a Gtk.StyleContext
  * @param cr a cairo.Context
  * @param x X origin of the rectangle
  * @param y Y origin of the rectangle
  * @param width rectangle width
  * @param height rectangle height
  * @param orientation orientation of the slider 
  */
export declare function renderSlider(context: import('../Gtk').StyleContext, cr: import('../cairo').Context, x: number, y: number, width: number, height: number, orientation: import('../Gtk').Orientation): void;
/**
  * Converts a color from RGB space to HSV.
  * @param r Red
  * @param g Green
  * @param b Blue
  * @returns h:Return value for the hue component s:Return value for the saturation component v:Return value for the value component 
  */
export declare function rgbToHsv(r: number, g: number, b: number): [number, number, number];
/**
  * Appends a specified target to the list of supported targets for a given widget and selection.
  * @param widget a Gtk.Widget
  * @param selection the selection
  * @param target target to add.
  * @param info A unsigned integer which will be passed back to the application. 
  */
export declare function selectionAddTarget(widget: import('../Gtk').Widget, selection: import('../Gdk').Atom, target: import('../Gdk').Atom, info: number): void;
/**
  * Prepends a table of targets to the list of supported targets for a given widget and selection.
  * @param widget a Gtk.Widget
  * @param selection the selection
  * @param targets a table of targets to add 
  */
export declare function selectionAddTargets(widget: import('../Gtk').Widget, selection: import('../Gdk').Atom, targets: import('../Gtk').TargetEntry): void;
/**
  * Remove all targets registered for the given selection for the widget.
  * @param widget a Gtk.Widget
  * @param selection an atom representing a selection 
  */
export declare function selectionClearTargets(widget: import('../Gtk').Widget, selection: import('../Gdk').Atom): void;
/**
  * Requests the contents of a selection. When received, a “selection-received” signal will be generated.
  * @param widget The widget which acts as requestor
  * @param selection Which selection to get
  * @param target Form of information desired (e.g., STRING)
  * @param time Time of request (usually of triggering event) In emergency, you could use Gdk.CURRENT_TIME
  * @returns True if requested succeeded. False if we could not process request. (e.g., there was already a request in process for this widget). 
  */
export declare function selectionConvert(widget: import('../Gtk').Widget, selection: import('../Gdk').Atom, target: import('../Gdk').Atom, time: number): boolean;
/**
  * Claims ownership of a given selection for a particular widget, or, if widget is None, release ownership of the selection.
  * @param widget a Gtk.Widget, or None.
  * @param selection an interned atom representing the selection to claim
  * @param time timestamp with which to claim the selection
  * @returns True if the operation succeeded 
  */
export declare function selectionOwnerSet(widget: import('../Gtk').Widget | null, selection: import('../Gdk').Atom, time: number): boolean;
/**
  * Claim ownership of a given selection for a particular widget, or, if widget is None, release ownership of the selection.
  * @param display the Gdk.Display where the selection is set
  * @param widget new selection owner (a Gtk.Widget), or None.
  * @param selection an interned atom representing the selection to claim.
  * @param time timestamp with which to claim the selection
  * @returns True if the operation succeeded 
  */
export declare function selectionOwnerSetForDisplay(display: import('../Gdk').Display, widget: import('../Gtk').Widget | null, selection: import('../Gdk').Atom, time: number): boolean;
/**
  * Removes all handlers and unsets ownership of all selections for a widget. Called when widget is being destroyed. This function will not generally be called by applications.
  * @param widget a Gtk.Widget 
  */
export declare function selectionRemoveAll(widget: import('../Gtk').Widget): void;
/**
  * Sets the GTK+ debug flags. 
  */
export declare function setDebugFlags(flags: number): void;
/**
  * A convenience function for launching the default application to show the uri. Like Gtk.show_uri_on_window(), but takes a screen as transient parent instead of a window.
  * @param screen screen to show the uri on or None for the default screen
  * @param uri the uri to show
  * @param timestamp a timestamp to prevent focus stealing
  * @returns True on success, False on error 
  */
export declare function showUri(screen: import('../Gdk').Screen | null, uri: string, timestamp: number): boolean;
/**
  * This is a convenience function for launching the default application to show the uri. The uri must be of a form understood by GIO (i.e. you need to install gvfs to get support for uri schemes such as http:// or ftp://, as only local files are handled by GIO itself). Typical examples are
  * @param parent parent window
  * @param uri the uri to show
  * @param timestamp a timestamp to prevent focus stealing
  * @returns True on success, False on error 
  */
export declare function showUriOnWindow(parent: import('../Gtk').Window | null, uri: string, timestamp: number): boolean;
/**
  * Registers each of the stock items in items. If an item already exists with the same stock ID as one of the items, the old item gets replaced. The stock items are copied, so GTK+ does not hold any pointer into items and items can be freed. Use Gtk.stock_add_static() if items is persistent and GTK+ need not copy the array.
  * @param items a Gtk.StockItem or array of items 
  */
export declare function stockAdd(items: import('../Gtk').StockItem): void;
/**
  * Same as Gtk.stock_add(), but doesn’t copy items, so items must persist until application exit.
  * @param items a Gtk.StockItem or array of Gtk.StockItem 
  */
export declare function stockAddStatic(items: import('../Gtk').StockItem): void;
/**
  * Retrieves a list of all known stock IDs added to a Gtk.IconFactory or registered with Gtk.stock_add(). The list must be freed with g_slist_free(), and each string in the list must be freed with GLib.free().
  * @returns a list of known stock IDs 
  */
export declare function stockListIds(): string[];
/**
  * 
  * @param stockId a stock item name
  * @returns a stock item or None if the stock icon isn’t known. 
  */
export declare function stockLookup(stockId: string): import('../Gtk').StockItem | null;
/**
  * Sets a function to be used for translating the label of a stock item.
  * @param domain the translation domain for which func shall be used
  * @param func a Gtk.TranslateFunc
  * @param data data to pass to func 
  */
export declare function stockSetTranslateFunc(domain: string, func: import('../Gtk').translateFunc, data: Object | null): void;
/**
  * This function frees a target table as returned by Gtk.target_table_new_from_list()
  * @param targets a Gtk.TargetEntry array 
  */
export declare function targetTableFree(targets: import('../Gtk').TargetEntry): void;
/**
  * This function creates an Gtk.TargetEntry array that contains the same targets as the passed %list. The returned table is newly allocated and should be freed using Gtk.target_table_free() when no longer needed.
  * @param list a Gtk.TargetList
  * @returns the new table. 
  */
export declare function targetTableNewFromList(list: import('../Gtk').TargetList): import('../Gtk').TargetEntry[];
/**
  * Determines if any of the targets in targets can be used to provide a GdkPixbuf.Pixbuf.
  * @param targets an array of Gdk.Atoms
  * @param writable whether to accept only targets for which GTK+ knows how to convert a pixbuf into the format
  * @returns True if targets include a suitable target for images, otherwise False. 
  */
export declare function targetsIncludeImage(targets: import('../Gdk').Atom, writable: boolean): boolean;
/**
  * Determines if any of the targets in targets can be used to provide rich text.
  * @param targets an array of Gdk.Atoms
  * @param buffer a Gtk.TextBuffer
  * @returns True if targets include a suitable target for rich text, otherwise False. 
  */
export declare function targetsIncludeRichText(targets: import('../Gdk').Atom, buffer: import('../Gtk').TextBuffer): boolean;
/**
  * Determines if any of the targets in targets can be used to provide text.
  * @param targets an array of Gdk.Atoms
  * @returns True if targets include a suitable target for text, otherwise False. 
  */
export declare function targetsIncludeText(targets: import('../Gdk').Atom): boolean;
/**
  * Determines if any of the targets in targets can be used to provide an uri list.
  * @param targets an array of Gdk.Atoms
  * @returns True if targets include a suitable target for uri lists, otherwise False. 
  */
export declare function targetsIncludeUri(targets: import('../Gdk').Atom): boolean;
/**
  * Create a simple window with window title window_title and text contents dialog_text. The window will quit any running Gtk.main()-loop when destroyed, and it will automatically be destroyed upon test function teardown.
  * @param windowTitle Title of the window to be displayed.
  * @param dialogText Text inside the window to be displayed.
  * @returns a widget pointer to the newly created Gtk.Window. 
  */
export declare function testCreateSimpleWindow(windowTitle: string, dialogText: string): import('../Gtk').Widget;
/**
  * This function will search widget and all its descendants for a Gtk.Label widget with a text string matching label_pattern. The label_pattern may contain asterisks “*” and question marks “?” as placeholders, GLib.pattern_match() is used for the matching. Note that locales other than “C“ tend to alter (translate” label strings, so this function is genrally only useful in test programs with predetermined locales, see gtk_test_init() for more details.
  * @param widget Valid label or container widget.
  * @param labelPattern Shell-glob pattern to match a label string.
  * @returns a Gtk.Label widget if any is found. 
  */
export declare function testFindLabel(widget: import('../Gtk').Widget, labelPattern: string): import('../Gtk').Widget;
/**
  * This function will search siblings of base_widget and siblings of its ancestors for all widgets matching widget_type. Of the matching widgets, the one that is geometrically closest to base_widget will be returned. The general purpose of this function is to find the most likely “action” widget, relative to another labeling widget. Such as finding a button or text entry widget, given its corresponding label widget.
  * @param baseWidget Valid widget, part of a widget hierarchy
  * @param widgetType Type of a aearched for sibling widget
  * @returns a widget of type widget_type if any is found. 
  */
export declare function testFindSibling(baseWidget: import('../Gtk').Widget, widgetType: import('../GObject').GType): import('../Gtk').Widget;
/**
  * This function will search the descendants of widget for a widget of type widget_type that has a label matching label_pattern next to it. This is most useful for automated GUI testing, e.g. to find the “OK” button in a dialog and synthesize clicks on it. However see Gtk.test_find_label(), Gtk.test_find_sibling() and Gtk.test_widget_click() for possible caveats involving the search of such widgets and synthesizing widget events.
  * @param widget Container widget, usually a Gtk.Window.
  * @param labelPattern Shell-glob pattern to match a label string.
  * @param widgetType Type of a aearched for label sibling widget.
  * @returns a valid widget if any is found or None. 
  */
export declare function testFindWidget(widget: import('../Gtk').Widget, labelPattern: string, widgetType: import('../GObject').GType): import('../Gtk').Widget | null;
/**
  * Return the type ids that have been registered after calling Gtk.test_register_all_types().
  * @returns 0-terminated array of type ids 
  */
export declare function testListAllTypes(): import('../GObject').GType[];
/**
  * Force registration of all core Gtk+ and Gdk object types. This allowes to refer to any of those object types via GObject.type_from_name() after calling this function. 
  */
export declare function testRegisterAllTypes(): void;
/**
  * Retrive the literal adjustment value for Gtk.Range based widgets and spin buttons. Note that the value returned by this function is anything between the lower and upper bounds of the adjustment belonging to widget, and is not a percentage as passed in to Gtk.test_slider_set_perc().
  * @param widget valid widget pointer.
  * @returns Gtk.Adjustment.get_value (adjustment) for an adjustment belonging to widget. 
  */
export declare function testSliderGetValue(widget: import('../Gtk').Widget): number;
/**
  * This function will adjust the slider position of all Gtk.Range based widgets, such as scrollbars or scales, it’ll also adjust spin buttons. The adjustment value of these widgets is set to a value between the lower and upper limits, according to the percentage argument.
  * @param widget valid widget pointer.
  * @param percentage value between 0 and 100. 
  */
export declare function testSliderSetPerc(widget: import('../Gtk').Widget, percentage: number): void;
/**
  * This function will generate a button click in the upwards or downwards spin button arrow areas, usually leading to an increase or decrease of spin button’s value.
  * @param spinner valid Gtk.SpinButton widget.
  * @param button Number of the pointer button for the event, usually 1, 2 or 3.
  * @param upwards True for upwards arrow click, False for downwards arrow click.
  * @returns whether all actions neccessary for the button click simulation were carried out successfully. 
  */
export declare function testSpinButtonClick(spinner: import('../Gtk').SpinButton, button: number, upwards: boolean): boolean;
/**
  * Retrive the text string of widget if it is a Gtk.Label, Gtk.Editable (entry and text widgets) or Gtk.TextView.
  * @param widget valid widget pointer.
  * @returns new 0-terminated C string, needs to be released with GLib.free(). 
  */
export declare function testTextGet(widget: import('../Gtk').Widget): string;
/**
  * Set the text string of widget to string if it is a Gtk.Label, Gtk.Editable (entry and text widgets) or Gtk.TextView.
  * @param widget valid widget pointer.
  * @param string a 0-terminated C string 
  */
export declare function testTextSet(widget: import('../Gtk').Widget, string: string): void;
/**
  * This function will generate a button click (button press and button release event) in the middle of the first Gdk.Window found that belongs to widget. For windowless widgets like Gtk.Button (which returns False from Gtk.Widget.get_has_window()), this will often be an input-only event window. For other widgets, this is usually widget->window. Certain caveats should be considered when using this function, in particular because the mouse pointer is warped to the button click location, see Gdk.test_simulate_button() for details.
  * @param widget Widget to generate a button click on.
  * @param button Number of the pointer button for the event, usually 1, 2 or 3.
  * @param modifiers Keyboard modifiers the event is setup with.
  * @returns whether all actions neccessary for the button click simulation were carried out successfully. 
  */
export declare function testWidgetClick(widget: import('../Gtk').Widget, button: number, modifiers: import('../Gdk').ModifierType): boolean;
/**
  * This function will generate keyboard press and release events in the middle of the first Gdk.Window found that belongs to widget. For windowless widgets like Gtk.Button (which returns False from Gtk.Widget.get_has_window()), this will often be an input-only event window. For other widgets, this is usually widget->window. Certain caveats should be considered when using this function, in particular because the mouse pointer is warped to the key press location, see Gdk.test_simulate_key() for details.
  * @param widget Widget to generate a key press and release on.
  * @param keyval A Gdk keyboard value.
  * @param modifiers Keyboard modifiers the event is setup with.
  * @returns whether all actions neccessary for the key event simulation were carried out successfully. 
  */
export declare function testWidgetSendKey(widget: import('../Gtk').Widget, keyval: number, modifiers: import('../Gdk').ModifierType): boolean;
/**
  * Enters the main loop and waits for widget to be “drawn”. In this context that means it waits for the frame clock of widget to have run a full styling, layout and drawing cycle.
  * @param widget the widget to wait for 
  */
export declare function testWidgetWaitForDraw(widget: import('../Gtk').Widget): void;
/**
  * Obtains a tree_model and path from selection data of target type %GTK_TREE_MODEL_ROW. Normally called from a drag_data_received handler. This function can only be used if selection_data originates from the same process that’s calling this function, because a pointer to the tree model is being passed around. If you aren’t in the same process, then you’ll get memory corruption. In the Gtk.TreeDragDest drag_data_received handler, you can assume that selection data of type %GTK_TREE_MODEL_ROW is in from the current process. The returned path must be freed with Gtk.TreePath.free().
  * @param selectionData a Gtk.SelectionData
  * @returns True if selection_data had target type %GTK_TREE_MODEL_ROW and is otherwise valid  tree_model:a Gtk.TreeModel path:row in tree_model 
  */
export declare function treeGetRowDragData(selectionData: import('../Gtk').SelectionData): [boolean, import('../Gtk').TreeModel | null, import('../Gtk').TreePath | null];
/**
  * Lets a set of row reference created by Gtk.TreeRowReference.new_proxy() know that the model emitted the Gtk.TreeModel ::row-deleted signal.
  * @param proxy a GObject.Object
  * @param path the path position that was deleted 
  */
export declare function treeRowReferenceDeleted(proxy: import('../GObject').Object, path: import('../Gtk').TreePath): void;
/**
  * Lets a set of row reference created by Gtk.TreeRowReference.new_proxy() know that the model emitted the Gtk.TreeModel ::row-inserted signal.
  * @param proxy a GObject.Object
  * @param path the row position that was inserted 
  */
export declare function treeRowReferenceInserted(proxy: import('../GObject').Object, path: import('../Gtk').TreePath): void;
/**
  * Sets selection data of target type %GTK_TREE_MODEL_ROW. Normally used in a drag_data_get handler.
  * @param selectionData some Gtk.SelectionData
  * @param treeModel a Gtk.TreeModel
  * @param path a row in tree_model
  * @returns True if the Gtk.SelectionData had the proper target type to allow us to set a tree row 
  */
export declare function treeSetRowDragData(selectionData: import('../Gtk').SelectionData, treeModel: import('../Gtk').TreeModel, path: import('../Gtk').TreePath): boolean;
