export declare type accelGroupActivate = (accelGroup: import('../Gtk').AccelGroup, acceleratable: import('../GObject').Object, keyval: number, modifier: import('../Gdk').ModifierType) => boolean;
export declare type accelGroupFindFunc = (key: import('../Gtk').AccelKey, closure: import('../GObject').Closure, data: Object | null) => boolean;
/**
  * 
  * @param data User data passed to Gtk.AccelMap.foreach() or Gtk.AccelMap.foreach_unfiltered()
  * @param accelPath Accel path of the current accelerator
  * @param accelKey Key of the current accelerator
  * @param accelMods Modifiers of the current accelerator
  * @param changed Changed flag of the accelerator (if True, accelerator has changed during runtime and would need to be saved during an accelerator dump) 
  */
export declare type accelMapForeach = (data: Object | null, accelPath: string, accelKey: number, accelMods: import('../Gdk').ModifierType, changed: boolean) => void;
/**
  * A function used by Gtk.Assistant.set_forward_page_func() to know which is the next page given a current one. It’s called both for computing the next page when the user presses the “forward” button and for handling the behavior of the “last” button.
  * @param currentPage The page number used to calculate the next page.
  * @param data user data.
  * @returns The next page number. 
  */
export declare type assistantPageFunc = (currentPage: number, data: Object | null) => number;
/**
  * This is the signature of a function used to connect signals.  It is used by the Gtk.Builder.connect_signals() and Gtk.Builder.connect_signals_full() methods.  It is mainly intended for interpreted language bindings, but could be useful where the programmer wants more control over the signal connection process. Note that this function can only be called once, subsequent calls will do nothing.
  * @param builder a Gtk.Builder
  * @param object object to connect a signal to
  * @param signalName name of the signal
  * @param handlerName name of the handler
  * @param connectObject a GObject.Object, if non-None, use g_signal_connect_object()
  * @param flags GObject.ConnectFlags to use
  * @param userData user data 
  */
export declare type builderConnectFunc = (builder: import('../Gtk').Builder, object: import('../GObject').Object, signalName: string, handlerName: string, connectObject: import('../GObject').Object | null, flags: import('../GObject').ConnectFlags, userData: Object | null) => void;
/**
  * This kind of functions provide Pango markup with detail information for the specified day. Examples for such details are holidays or appointments. The function returns None when no information is available.
  * @param calendar a Gtk.Calendar.
  * @param year the year for which details are needed.
  * @param month the month for which details are needed.
  * @param day the day of month for which details are needed.
  * @param userData the data passed with Gtk.Calendar.set_detail_func().
  * @returns Newly allocated string with Pango markup with details for the specified day or None. 
  */
export declare type calendarDetailFunc = (calendar: import('../Gtk').Calendar, year: number, month: number, day: number, userData: Object | null) => string | null;
/**
  * The type of the callback functions used for e.g. iterating over the children of a container, see Gtk.Container.foreach().
  * @param widget the widget to operate on
  * @param data user-supplied data 
  */
export declare type callback = (widget: import('../Gtk').Widget, data: Object | null) => void;
/**
  * The type of the callback functions used for iterating over the cell renderers and their allocated areas inside a Gtk.CellArea, see Gtk.CellArea.foreach_alloc().
  * @param renderer the cell renderer to operate on
  * @param cellArea the area allocated to renderer inside the rectangle provided to Gtk.CellArea.foreach_alloc().
  * @param cellBackground the background area for renderer inside the background area provided to Gtk.CellArea.foreach_alloc().
  * @param data user-supplied data
  * @returns True to stop iterating over cells. 
  */
export declare type cellAllocCallback = (renderer: import('../Gtk').CellRenderer, cellArea: import('../Gdk').Rectangle, cellBackground: import('../Gdk').Rectangle, data: Object | null) => boolean;
/**
  * The type of the callback functions used for iterating over the cell renderers of a Gtk.CellArea, see Gtk.CellArea.foreach().
  * @param renderer the cell renderer to operate on
  * @param data user-supplied data
  * @returns True to stop iterating over cells. 
  */
export declare type cellCallback = (renderer: import('../Gtk').CellRenderer, data: Object | null) => boolean;
/**
  * A function which should set the value of cell_layout’s cell renderer(s) as appropriate.
  * @param cellLayout a Gtk.CellLayout
  * @param cell the cell renderer whose value is to be set
  * @param treeModel the model
  * @param iter a Gtk.TreeIter indicating the row to set the value for
  * @param data user data passed to Gtk.CellLayout.set_cell_data_func() 
  */
export declare type cellLayoutDataFunc = (cellLayout: import('../Gtk').CellLayout, cell: import('../Gtk').CellRenderer, treeModel: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, data: Object | null) => void;
/**
  * A function that will be called when the contents of the clipboard are changed or cleared. Once this has called, the user_data_or_owner argument will not be used again.
  * @param clipboard the Gtk.Clipboard
  * @param userDataOrOwner the user_data argument passed to gtk_clipboard_set_with_data(), or the owner argument passed to gtk_clipboard_set_with_owner() 
  */
export declare type clipboardClearFunc = (clipboard: import('../Gtk').Clipboard, userDataOrOwner: Object | null) => void;
/**
  * A function that will be called to provide the contents of the selection. If multiple types of data were advertised, the requested type can be determined from the info parameter or by checking the target field of selection_data. If the data could successfully be converted into then it should be stored into the selection_data object by calling Gtk.SelectionData.set() (or related functions such as Gtk.SelectionData.set_text()). If no data is set, the requestor will be informed that the attempt to get the data failed.
  * @param clipboard the Gtk.Clipboard
  * @param selectionData a Gtk.SelectionData argument in which the requested data should be stored.
  * @param info the info field corresponding to the requested target from the Gtk.TargetEntry array passed to gtk_clipboard_set_with_data() or gtk_clipboard_set_with_owner().
  * @param userDataOrOwner the user_data argument passed to gtk_clipboard_set_with_data(), or the owner argument passed to gtk_clipboard_set_with_owner() 
  */
export declare type clipboardGetFunc = (clipboard: import('../Gtk').Clipboard, selectionData: import('../Gtk').SelectionData, info: number, userDataOrOwner: Object | null) => void;
/**
  * A function to be called when the results of Gtk.Clipboard.request_image() are received, or when the request fails.
  * @param clipboard the Gtk.Clipboard
  * @param pixbuf the received image
  * @param data the user_data supplied to Gtk.Clipboard.request_image(). 
  */
export declare type clipboardImageReceivedFunc = (clipboard: import('../Gtk').Clipboard, pixbuf: import('../GdkPixbuf').Pixbuf, data: Object | null) => void;
/**
  * A function to be called when the results of Gtk.Clipboard.request_contents() are received, or when the request fails.
  * @param clipboard the Gtk.Clipboard
  * @param selectionData a Gtk.SelectionData containing the data was received. If retrieving the data failed, then then length field of selection_data will be negative.
  * @param data the user_data supplied to Gtk.Clipboard.request_contents(). 
  */
export declare type clipboardReceivedFunc = (clipboard: import('../Gtk').Clipboard, selectionData: import('../Gtk').SelectionData, data: Object | null) => void;
/**
  * A function to be called when the results of Gtk.Clipboard.request_rich_text() are received, or when the request fails.
  * @param clipboard the Gtk.Clipboard
  * @param format The format of the rich text
  * @param text the rich text received, as a UTF-8 encoded string, or None if retrieving the data failed.
  * @param length Length of the text.
  * @param data the user_data supplied to Gtk.Clipboard.request_rich_text(). 
  */
export declare type clipboardRichTextReceivedFunc = (clipboard: import('../Gtk').Clipboard, format: import('../Gdk').Atom, text: string | null, length: number, data: Object | null) => void;
/**
  * A function to be called when the results of Gtk.Clipboard.request_targets() are received, or when the request fails.
  * @param clipboard the Gtk.Clipboard
  * @param atoms the supported targets, as array of Gdk.Atom, or None if retrieving the data failed.
  * @param data the user_data supplied to Gtk.Clipboard.request_targets(). 
  */
export declare type clipboardTargetsReceivedFunc = (clipboard: import('../Gtk').Clipboard, atoms: import('../Gdk').Atom | null, data: Object | null) => void;
/**
  * A function to be called when the results of Gtk.Clipboard.request_text() are received, or when the request fails.
  * @param clipboard the Gtk.Clipboard
  * @param text the text received, as a UTF-8 encoded string, or None if retrieving the data failed.
  * @param data the user_data supplied to Gtk.Clipboard.request_text(). 
  */
export declare type clipboardTextReceivedFunc = (clipboard: import('../Gtk').Clipboard, text: string | null, data: Object | null) => void;
/**
  * A function to be called when the results of Gtk.Clipboard.request_uris() are received, or when the request fails.
  * @param clipboard the Gtk.Clipboard
  * @param uris the received URIs
  * @param data the user_data supplied to Gtk.Clipboard.request_uris(). 
  */
export declare type clipboardUriReceivedFunc = (clipboard: import('../Gtk').Clipboard, uris: string, data: Object | null) => void;
/**
  * 
  * @param colors Array of colors 
  */
export declare type colorSelectionChangePaletteFunc = (colors: import('../Gdk').Color) => void;
/**
  * 
  * @param colors Array of colors 
  */
export declare type colorSelectionChangePaletteWithScreenFunc = (screen: import('../Gdk').Screen, colors: import('../Gdk').Color) => void;
/**
  * A function which decides whether the row indicated by iter matches a given key, and should be displayed as a possible completion for key. Note that key is normalized and case-folded (see GLib.utf8_normalize() and GLib.utf8_casefold()). If this is not appropriate, match functions have access to the unmodified key via gtk_entry_get_text (GTK_ENTRY (gtk_entry_completion_get_entry ())).
  * @param completion the Gtk.EntryCompletion
  * @param key the string to match, normalized and case-folded
  * @param iter a Gtk.TreeIter indicating the row to match
  * @param userData user data given to Gtk.EntryCompletion.set_match_func()
  * @returns True if iter should be displayed as a possible completion for key 
  */
export declare type entryCompletionMatchFunc = (completion: import('../Gtk').EntryCompletion, key: string, iter: import('../Gtk').TreeIter, userData: Object | null) => boolean;
/**
  * The type of function that is used with custom filters, see Gtk.FileFilter.add_custom().
  * @param filterInfo a Gtk.FileFilterInfo that is filled according to the needed flags passed to Gtk.FileFilter.add_custom()
  * @param data user data passed to Gtk.FileFilter.add_custom()
  * @returns True if the file should be displayed 
  */
export declare type fileFilterFunc = (filterInfo: import('../Gtk').FileFilterInfo, data: Object | null) => boolean;
/**
  * Called for flow boxes that are bound to a Gio.ListModel with Gtk.FlowBox.bind_model() for each item that gets added to the model.
  * @param item the item from the model for which to create a widget for
  * @param userData user data from Gtk.FlowBox.bind_model()
  * @returns a Gtk.Widget that represents item 
  */
export declare type flowBoxCreateWidgetFunc = (item: import('../GObject').Object, userData: Object | null) => import('../Gtk').Widget;
/**
  * A function that will be called whenrever a child changes or is added. It lets you control if the child should be visible or not.
  * @param child a Gtk.FlowBoxChild that may be filtered
  * @param userData user data
  * @returns True if the row should be visible, False otherwise 
  */
export declare type flowBoxFilterFunc = (child: import('../Gtk').FlowBoxChild, userData: Object | null) => boolean;
/**
  * A function used by Gtk.FlowBox.selected_foreach(). It will be called on every selected child of the box.
  * @param box a Gtk.FlowBox
  * @param child a Gtk.FlowBoxChild
  * @param userData user data 
  */
export declare type flowBoxForeachFunc = (box: import('../Gtk').FlowBox, child: import('../Gtk').FlowBoxChild, userData: Object | null) => void;
/**
  * A function to compare two children to determine which should come first.
  * @param child1 the first child
  * @param child2 the second child
  * @param userData user data
  * @returns < 0 if child1 should be before child2, 0 if the are equal, and > 0 otherwise 
  */
export declare type flowBoxSortFunc = (child1: import('../Gtk').FlowBoxChild, child2: import('../Gtk').FlowBoxChild, userData: Object | null) => number;
/**
  * The type of function that is used for deciding what fonts get shown in a Gtk.FontChooser. See Gtk.FontChooser.set_filter_func().
  * @param family a Pango.FontFamily
  * @param face a Pango.FontFace belonging to family
  * @param data user data passed to Gtk.FontChooser.set_filter_func()
  * @returns True if the font should be displayed 
  */
export declare type fontFilterFunc = (family: import('../Pango').FontFamily, face: import('../Pango').FontFace, data: Object | null) => boolean;
/**
  * A function used by Gtk.IconView.selected_foreach() to map all selected rows.  It will be called on every selected row in the view.
  * @param iconView a Gtk.IconView
  * @param path The Gtk.TreePath of a selected row
  * @param data user data 
  */
export declare type iconViewForeachFunc = (iconView: import('../Gtk').IconView, path: import('../Gtk').TreePath, data: Object | null) => void;
/**
  * Key snooper functions are called before normal event delivery. They can be used to implement custom key event handling.
  * @param grabWidget the widget to which the event will be delivered
  * @param event the key event
  * @param funcData data supplied to gtk_key_snooper_install()
  * @returns True to stop further processing of event, False to continue. 
  */
export declare type keySnoopFunc = (grabWidget: import('../Gtk').Widget, event: import('../Gdk').EventKey, funcData: Object | null) => number;
/**
  * Called for list boxes that are bound to a Gio.ListModel with Gtk.ListBox.bind_model() for each item that gets added to the model.
  * @param item the item from the model for which to create a widget for
  * @param userData user data
  * @returns a Gtk.Widget that represents item 
  */
export declare type listBoxCreateWidgetFunc = (item: import('../GObject').Object, userData: Object | null) => import('../Gtk').Widget;
/**
  * Will be called whenever the row changes or is added and lets you control if the row should be visible or not.
  * @param row the row that may be filtered
  * @param userData user data
  * @returns True if the row should be visible, False otherwise 
  */
export declare type listBoxFilterFunc = (row: import('../Gtk').ListBoxRow, userData: Object | null) => boolean;
/**
  * A function used by Gtk.ListBox.selected_foreach(). It will be called on every selected child of the box.
  * @param box a Gtk.ListBox
  * @param row a Gtk.ListBoxRow
  * @param userData user data 
  */
export declare type listBoxForeachFunc = (box: import('../Gtk').ListBox, row: import('../Gtk').ListBoxRow, userData: Object | null) => void;
/**
  * Compare two rows to determine which should be first.
  * @param row1 the first row
  * @param row2 the second row
  * @param userData user data
  * @returns < 0 if row1 should be before row2, 0 if they are equal and > 0 otherwise 
  */
export declare type listBoxSortFunc = (row1: import('../Gtk').ListBoxRow, row2: import('../Gtk').ListBoxRow, userData: Object | null) => number;
/**
  * Whenever row changes or which row is before row changes this is called, which lets you update the header on row. You may remove or set a new one via Gtk.ListBoxRow.set_header() or just change the state of the current header widget.
  * @param row the row to update
  * @param before the row before row, or None if it is first
  * @param userData user data 
  */
export declare type listBoxUpdateHeaderFunc = (row: import('../Gtk').ListBoxRow, before: import('../Gtk').ListBoxRow | null, userData: Object | null) => void;
/**
  * A user function supplied when calling Gtk.Menu.attach_to_widget() which will be called when the menu is later detached from the widget.
  * @param attachWidget the Gtk.Widget that the menu is being detached from.
  * @param menu the Gtk.Menu being detached. 
  */
export declare type menuDetachFunc = (attachWidget: import('../Gtk').Widget, menu: import('../Gtk').Menu) => void;
/**
  * A user function supplied when calling Gtk.Menu.popup() which controls the positioning of the menu when it is displayed.  The function sets the x and y parameters to the coordinates where the menu is to be drawn.  To make the menu appear on a different monitor than the mouse pointer, Gtk.Menu.set_monitor() must be called.
  * @param menu a Gtk.Menu.
  * @param x address of the int representing the horizontal position where the menu shall be drawn.
  * @param y address of the int representing the vertical position where the menu shall be drawn.  This is an output parameter.
  * @param userData the data supplied by the user in the Gtk.Menu.popup() data parameter.
  * @returns x:address of the int representing the horizontal position where the menu shall be drawn. y:address of the int representing the vertical position where the menu shall be drawn.  This is an output parameter. push_in:This parameter controls how menus placed outside the monitor are handled.  If this is set to True and part of the menu is outside the monitor then GTK+ pushes the window into the visible area, effectively modifying the popup position.  Note that moving and possibly resizing the menu around will alter the scroll position to keep the menu items “in place”, i.e. at the same monitor position they would have been without resizing.  In practice, this behavior is only useful for combobox popups or option menus and cannot be used to simply confine a menu to monitor boundaries.  In that case, changing the scroll offset is not desirable. 
  */
export declare type menuPositionFunc = (menu: import('../Gtk').Menu, x: number, y: number, userData: Object | null) => [number, number, boolean];
/**
  * A multihead-aware GTK+ module may have a gtk_module_display_init() function with this prototype. GTK+ calls this function for each opened display.
  * @param display an open Gdk.Display 
  */
export declare type moduleDisplayInitFunc = (display: import('../Gdk').Display) => void;
/**
  * Each GTK+ module must have a function gtk_module_init() with this prototype. This function is called after loading the module.
  * @param argv GTK+ always passes None for this argument 
  */
export declare type moduleInitFunc = (argv: string | null) => void;
/**
  * The type of function that is passed to Gtk.print_run_page_setup_dialog_async().
  * @param pageSetup the Gtk.PageSetup that has been
  * @param data user data that has been passed to Gtk.print_run_page_setup_dialog_async() 
  */
export declare type pageSetupDoneFunc = (pageSetup: import('../Gtk').PageSetup, data: Object | null) => void;
export declare type printSettingsFunc = (key: string, value: string, userData: Object | null) => void;
export declare type rcPropertyParser = (pspec: import('../GObject').ParamSpec, rcString: import('../GLib').String, propertyValue: import('../GObject').Value) => boolean;
/**
  * The type of function that is used with custom filters, see Gtk.RecentFilter.add_custom().
  * @param filterInfo a Gtk.RecentFilterInfo that is filled according to the needed flags passed to Gtk.RecentFilter.add_custom()
  * @param userData user data passed to Gtk.RecentFilter.add_custom()
  * @returns True if the file should be displayed 
  */
export declare type recentFilterFunc = (filterInfo: import('../Gtk').RecentFilterInfo, userData: Object | null) => boolean;
export declare type recentSortFunc = (a: import('../Gtk').RecentInfo, b: import('../Gtk').RecentInfo, userData: Object | null) => number;
export declare type stylePropertyParser = (string: string, value: import('../GObject').Value) => boolean;
/**
  * A function that is called to deserialize rich text that has been serialized with Gtk.TextBuffer.serialize(), and insert it at iter.
  * @param registerBuffer the Gtk.TextBuffer the format is registered with
  * @param contentBuffer the Gtk.TextBuffer to deserialize into
  * @param iter insertion point for the deserialized text
  * @param data data to deserialize
  * @param createTags True if deserializing may create tags
  * @param userData user data that was specified when registering the format
  * @returns True on success, False otherwise 
  */
export declare type textBufferDeserializeFunc = (registerBuffer: import('../Gtk').TextBuffer, contentBuffer: import('../Gtk').TextBuffer, iter: import('../Gtk').TextIter, data: Int8Array, createTags: boolean, userData: Object | null) => boolean;
/**
  * A function that is called to serialize the content of a text buffer. It must return the serialized form of the content.
  * @param registerBuffer the Gtk.TextBuffer for which the format is registered
  * @param contentBuffer the Gtk.TextBuffer to serialize
  * @param start start of the block of text to serialize
  * @param end end of the block of text to serialize
  * @param length Return location for the length of the serialized data
  * @param userData user data that was specified when registering the format
  * @returns a newly-allocated array of guint8 which contains the serialized data, or None if an error occurred 
  */
export declare type textBufferSerializeFunc = (registerBuffer: import('../Gtk').TextBuffer, contentBuffer: import('../Gtk').TextBuffer, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter, length: number, userData: Object | null) => number | null;
export declare type textCharPredicate = (ch: string, userData: Object | null) => boolean;
/**
  * 
  * @param tag the Gtk.TextTag
  * @param data data passed to Gtk.TextTagTable.foreach() 
  */
export declare type textTagTableForeach = (tag: import('../Gtk').TextTag, data: Object | null) => void;
/**
  * Callback type for adding a function to update animations. See Gtk.Widget.add_tick_callback().
  * @param widget the widget
  * @param frameClock the frame clock for the widget (same as calling Gtk.Widget.get_frame_clock())
  * @param userData user data passed to Gtk.Widget.add_tick_callback().
  * @returns GLib.SOURCE_CONTINUE if the tick callback should continue to be called, GLib.SOURCE_REMOVE if the tick callback should be removed. 
  */
export declare type tickCallback = (widget: import('../Gtk').Widget, frameClock: import('../Gdk').FrameClock, userData: Object | null) => boolean;
/**
  * The function used to translate messages in e.g. Gtk.IconFactory and Gtk.ActionGroup.
  * @param path The id of the message. In Gtk.ActionGroup this will be a label or tooltip from a Gtk.ActionEntry.
  * @param funcData user data passed in when registering the function
  * @returns the translated message 
  */
export declare type translateFunc = (path: string, funcData: Object | null) => string;
/**
  * A function to set the properties of a cell instead of just using the straight mapping between the cell and the model.  This is useful for customizing the cell renderer.  For example, a function might get an integer from the tree_model, and render it to the “text” attribute of “cell” by converting it to its written equivalent.  This is set by calling Gtk.TreeViewColumn.set_cell_data_func()
  * @param treeColumn A Gtk.TreeViewColumn
  * @param cell The Gtk.CellRenderer that is being rendered by tree_column
  * @param treeModel The Gtk.TreeModel being rendered
  * @param iter A Gtk.TreeIter of the current row rendered
  * @param data user data 
  */
export declare type treeCellDataFunc = (treeColumn: import('../Gtk').TreeViewColumn, cell: import('../Gtk').CellRenderer, treeModel: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, data: Object | null) => void;
export declare type treeDestroyCountFunc = (treeView: import('../Gtk').TreeView, path: import('../Gtk').TreePath, children: number, userData: Object | null) => void;
/**
  * A Gtk.TreeIterCompareFunc should return a negative integer, zero, or a positive integer if a sorts before b, a sorts with b, or a sorts after b respectively. If two iters compare as equal, their order in the sorted model is undefined. In order to ensure that the Gtk.TreeSortable behaves as expected, the Gtk.TreeIterCompareFunc must define a partial order on the model, i.e. it must be reflexive, antisymmetric and transitive.
  * @param model The Gtk.TreeModel the comparison is within
  * @param a A Gtk.TreeIter in model
  * @param b Another Gtk.TreeIter in model
  * @param userData Data passed when the compare func is assigned e.g. by Gtk.TreeSortable.set_sort_func()
  * @returns a negative integer, zero or a positive integer depending on whether a sorts before, with or after b 
  */
export declare type treeIterCompareFunc = (model: import('../Gtk').TreeModel, a: import('../Gtk').TreeIter, b: import('../Gtk').TreeIter, userData: Object | null) => number;
/**
  * A function which calculates display values from raw values in the model. It must fill value with the display value for the column column in the row indicated by iter.
  * @param model the Gtk.TreeModelFilter
  * @param iter a Gtk.TreeIter pointing to the row whose display values are determined
  * @param column the column whose display value is determined
  * @param data user data given to Gtk.TreeModelFilter.set_modify_func()
  * @returns A GObject.Value which is already initialized for with the correct type for the column column. 
  */
export declare type treeModelFilterModifyFunc = (model: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, column: number, data: Object | null) => import('../GObject').Value;
/**
  * A function which decides whether the row indicated by iter is visible.
  * @param model the child model of the Gtk.TreeModelFilter
  * @param iter a Gtk.TreeIter pointing to the row in model whose visibility is determined
  * @param data user data given to Gtk.TreeModelFilter.set_visible_func()
  * @returns Whether the row indicated by iter is visible. 
  */
export declare type treeModelFilterVisibleFunc = (model: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, data: Object | null) => boolean;
/**
  * Type of the callback passed to Gtk.TreeModel.foreach() to iterate over the rows in a tree model.
  * @param model the Gtk.TreeModel being iterated
  * @param path the current Gtk.TreePath
  * @param iter the current Gtk.TreeIter
  * @param data The user data passed to Gtk.TreeModel.foreach()
  * @returns True to stop iterating, False to continue 
  */
export declare type treeModelForeachFunc = (model: import('../Gtk').TreeModel, path: import('../Gtk').TreePath, iter: import('../Gtk').TreeIter, data: Object | null) => boolean;
/**
  * A function used by Gtk.TreeSelection.selected_foreach() to map all selected rows.  It will be called on every selected row in the view.
  * @param model The Gtk.TreeModel being viewed
  * @param path The Gtk.TreePath of a selected row
  * @param iter A Gtk.TreeIter pointing to a selected row
  * @param data user data 
  */
export declare type treeSelectionForeachFunc = (model: import('../Gtk').TreeModel, path: import('../Gtk').TreePath, iter: import('../Gtk').TreeIter, data: Object | null) => void;
/**
  * A function used by Gtk.TreeSelection.set_select_function() to filter whether or not a row may be selected.  It is called whenever a row’s state might change.  A return value of True indicates to selection that it is okay to change the selection.
  * @param selection A Gtk.TreeSelection
  * @param model A Gtk.TreeModel being viewed
  * @param path The Gtk.TreePath of the row in question
  * @param pathCurrentlySelected True, if the path is currently selected
  * @param data user data
  * @returns True, if the selection state of the row can be toggled 
  */
export declare type treeSelectionFunc = (selection: import('../Gtk').TreeSelection, model: import('../Gtk').TreeModel, path: import('../Gtk').TreePath, pathCurrentlySelected: boolean, data: Object | null) => boolean;
/**
  * Function type for determining whether column can be dropped in a particular spot (as determined by prev_column and next_column).  In left to right locales, prev_column is on the left of the potential drop spot, and next_column is on the right.  In right to left mode, this is reversed.  This function should return True if the spot is a valid drop spot.  Please note that returning True does not actually indicate that the column drop was made, but is meant only to indicate a possible drop spot to the user.
  * @param treeView A Gtk.TreeView
  * @param column The Gtk.TreeViewColumn being dragged
  * @param prevColumn A Gtk.TreeViewColumn on one side of column
  * @param nextColumn A Gtk.TreeViewColumn on the other side of column
  * @param data user data
  * @returns True, if column can be dropped in this spot 
  */
export declare type treeViewColumnDropFunc = (treeView: import('../Gtk').TreeView, column: import('../Gtk').TreeViewColumn, prevColumn: import('../Gtk').TreeViewColumn, nextColumn: import('../Gtk').TreeViewColumn, data: Object | null) => boolean;
/**
  * Function used for Gtk.TreeView.map_expanded_rows().
  * @param treeView A Gtk.TreeView
  * @param path The path that’s expanded
  * @param userData user data 
  */
export declare type treeViewMappingFunc = (treeView: import('../Gtk').TreeView, path: import('../Gtk').TreePath, userData: Object | null) => void;
/**
  * Function type for determining whether the row pointed to by iter should be rendered as a separator. A common way to implement this is to have a boolean column in the model, whose values the Gtk.TreeViewRowSeparatorFunc returns.
  * @param model the Gtk.TreeModel
  * @param iter a Gtk.TreeIter pointing at a row in model
  * @param data user data
  * @returns True if the row is a separator 
  */
export declare type treeViewRowSeparatorFunc = (model: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, data: Object | null) => boolean;
/**
  * A function used for checking whether a row in model matches a search key string entered by the user. Note the return value is reversed from what you would normally expect, though it has some similarity to strcmp() returning 0 for equal strings.
  * @param model the Gtk.TreeModel being searched
  * @param column the search column set by Gtk.TreeView.set_search_column()
  * @param key the key string to compare with
  * @param iter a Gtk.TreeIter pointing the row of model that should be compared with key.
  * @param searchData user data from Gtk.TreeView.set_search_equal_func()
  * @returns False if the row matches, True otherwise. 
  */
export declare type treeViewSearchEqualFunc = (model: import('../Gtk').TreeModel, column: number, key: string, iter: import('../Gtk').TreeIter, searchData: Object | null) => boolean;
export declare type treeViewSearchPositionFunc = (treeView: import('../Gtk').TreeView, searchDialog: import('../Gtk').Widget, userData: Object | null) => void;
