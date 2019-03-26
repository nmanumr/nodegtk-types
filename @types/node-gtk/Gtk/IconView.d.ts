import * as Gtk from '../Gtk';
export declare interface IconView extends Gtk.Container, Gtk.CellLayout, Gtk.Scrollable { }

/**
  * Gtk.IconView provides an alternative view on a Gtk.TreeModel.
It displays the model as a grid of icons with labels. Like
Gtk.TreeView, it allows to select one or multiple items
(depending on the selection mode, see Gtk.IconView.set_selection_mode()).
In addition to selection with the arrow keys, Gtk.IconView supports
rubberband selection, which is controlled by dragging the pointer. 
  */
export declare class IconView {
  /**
    * Creates a new Gtk.IconView widget
    * @returns A newly created Gtk.IconView widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.IconView widget using the specified area to layout cells inside the icons.
    * @param area the Gtk.CellArea to use to layout cells
    * @returns A newly created Gtk.IconView widget 
    */
  static newWithArea(area: import('../Gtk').CellArea): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.IconView widget with the model model.
    * @param model The model.
    * @returns A newly created Gtk.IconView widget. 
    */
  static newWithModel(model: import('../Gtk').TreeModel): import('../Gtk').Widget;
  /**
    * Converts widget coordinates to coordinates for the bin_window, as expected by e.g. Gtk.IconView.get_path_at_pos().
    * @param wx X coordinate relative to the widget
    * @param wy Y coordinate relative to the widget
    * @returns bx:return location for bin_window X coordinate by:return location for bin_window Y coordinate 
    */
  convertWidgetToBinWindowCoords(wx: number, wy: number): [number, number];
  /**
    * Creates a cairo.Surface representation of the item at path. This image is used for a drag icon.
    * @param path a Gtk.TreePath in self
    * @returns a newly-allocated surface of the drag icon. 
    */
  createDragIcon(path: import('../Gtk').TreePath): import('../cairo').Surface;
  /**
    * Turns self into a drop destination for automatic DND. Calling this method sets Gtk.IconView :reorderable to False.
    * @param targets the table of targets that the drag will support
    * @param actions the bitmask of possible actions for a drag to this widget 
    */
  enableModelDragDest(targets: import('../Gtk').TargetEntry, actions: import('../Gdk').DragAction): void;
  /**
    * Turns self into a drag source for automatic DND. Calling this method sets Gtk.IconView :reorderable to False.
    * @param startButtonMask Mask of allowed buttons to start drag
    * @param targets the table of targets that the drag will support
    * @param actions the bitmask of possible actions for a drag from this widget 
    */
  enableModelDragSource(startButtonMask: import('../Gdk').ModifierType, targets: import('../Gtk').TargetEntry, actions: import('../Gdk').DragAction): void;
  /**
    * Gets the setting set by Gtk.IconView.set_activate_on_single_click().
    * @returns True if item-activated will be emitted on a single click 
    */
  getActivateOnSingleClick(): boolean;
  /**
    * Fills the bounding rectangle in widget coordinates for the cell specified by path and cell. If cell is None the main cell area is used.
    * @param path a Gtk.TreePath
    * @param cell a Gtk.CellRenderer or None
    * @returns False if there is no such item, True otherwise   rect:rectangle to fill with cell rect 
    */
  getCellRect(path: import('../Gtk').TreePath, cell: import('../Gtk').CellRenderer | null): [boolean, import('../Gdk').Rectangle];
  /**
    * Returns the value of the ::column-spacing property.
    * @returns the space between columns 
    */
  getColumnSpacing(): number;
  /**
    * Returns the value of the ::columns property.
    * @returns the number of columns, or -1 
    */
  getColumns(): number;
  /**
    * Fills in path and cell with the current cursor path and cell. If the cursor isn’t currently set, then path will be None. If no cell currently has focus, then cell will be None.
    * @returns True if the cursor is set.  path:Return location for the current cursor path, or None cell:Return location the current focus cell, or None 
    */
  getCursor(): [boolean, import('../Gtk').TreePath, import('../Gtk').CellRenderer];
  /**
    * Determines the destination item for a given position.
    * @param dragX the position to determine the destination item for
    * @param dragY the position to determine the destination item for
    * @returns If there is no item at the given position return None otherwise a tuple containing:   path:The path of the item pos:The drop position 
    */
  getDestItemAtPos(dragX: number, dragY: number): [import('../Gtk').TreePath, import('../Gtk').IconViewDropPosition | null];
  /**
    * Gets information about the item that is highlighted for feedback.
    * @returns path:Return location for the path of the highlighted item, or None. pos:Return location for the drop position, or None 
    */
  getDragDestItem(): [import('../Gtk').TreePath, import('../Gtk').IconViewDropPosition];
  /**
    * Finds the path at the point (x, y), relative to bin_window coordinates. In contrast to Gtk.IconView.get_path_at_pos(), this function also obtains the cell at the specified position. The returned path should be freed with Gtk.TreePath.free(). See Gtk.IconView.convert_widget_to_bin_window_coords() for converting widget coordinates to bin_window coordinates.
    * @param x The x position to be identified
    * @param y The y position to be identified
    * @returns If not item exists at the specified position returns None, otherwise a tuple containing:   path:The path cell:The renderer responsible for the cell at (x, y) 
    */
  getItemAtPos(x: number, y: number): [import('../Gtk').TreePath, import('../Gtk').CellRenderer | null];
  /**
    * Gets the column in which the item path is currently displayed. Column numbers start at 0.
    * @param path the Gtk.TreePath of the item
    * @returns The column in which the item is displayed 
    */
  getItemColumn(path: import('../Gtk').TreePath): number;
  /**
    * Returns the value of the ::item-orientation property which determines whether the labels are drawn beside the icons instead of below.
    * @returns the relative position of texts and icons 
    */
  getItemOrientation(): import('../Gtk').Orientation;
  /**
    * Returns the value of the ::item-padding property.
    * @returns the padding around items 
    */
  getItemPadding(): number;
  /**
    * Gets the row in which the item path is currently displayed. Row numbers start at 0.
    * @param path the Gtk.TreePath of the item
    * @returns The row in which the item is displayed 
    */
  getItemRow(path: import('../Gtk').TreePath): number;
  /**
    * Returns the value of the ::item-width property.
    * @returns the width of a single item, or -1 
    */
  getItemWidth(): number;
  /**
    * Returns the value of the ::margin property.
    * @returns the space at the borders 
    */
  getMargin(): number;
  /**
    * Returns the column with markup text for self.
    * @returns the markup column, or -1 if it’s unset. 
    */
  getMarkupColumn(): number;
  /**
    * Returns the model the Gtk.IconView is based on.  Returns None if the model is unset.
    * @returns A Gtk.TreeModel, or None if none is currently being used. 
    */
  getModel(): import('../Gtk').TreeModel | null;
  /**
    * Finds the path at the point (x, y), relative to bin_window coordinates. See Gtk.IconView.get_item_at_pos(), if you are also interested in the cell at the specified position. See Gtk.IconView.convert_widget_to_bin_window_coords() for converting widget coordinates to bin_window coordinates.
    * @param x The x position to be identified
    * @param y The y position to be identified
    * @returns The Gtk.TreePath corresponding to the icon or None if no icon exists at that position. 
    */
  getPathAtPos(x: number, y: number): import('../Gtk').TreePath | null;
  /**
    * Returns the column with pixbufs for self.
    * @returns the pixbuf column, or -1 if it’s unset. 
    */
  getPixbufColumn(): number;
  /**
    * Retrieves whether the user can reorder the list via drag-and-drop. See Gtk.IconView.set_reorderable().
    * @returns True if the list can be reordered. 
    */
  getReorderable(): boolean;
  /**
    * Returns the value of the ::row-spacing property.
    * @returns the space between rows 
    */
  getRowSpacing(): number;
  /**
    * Creates a list of paths of all selected items. Additionally, if you are planning on modifying the model after calling this function, you may want to convert the returned list into a list of Gtk.TreeRowReferences. To do this, you can use Gtk.TreeRowReference.new().
    * @returns A GLib.List containing a Gtk.TreePath for each selected row. 
    */
  getSelectedItems(): import('../Gtk').TreePath[];
  /**
    * Gets the selection mode of the self.
    * @returns the current selection mode 
    */
  getSelectionMode(): import('../Gtk').SelectionMode;
  /**
    * Returns the value of the ::spacing property.
    * @returns the space between cells 
    */
  getSpacing(): number;
  /**
    * Returns the column with text for self.
    * @returns the text column, or -1 if it’s unset. 
    */
  getTextColumn(): number;
  /**
    * Returns the column of self’s model which is being used for displaying tooltips on self’s rows.
    * @returns the index of the tooltip column that is currently being used, or -1 if this is disabled. 
    */
  getTooltipColumn(): number;
  /**
    * This function is supposed to be used in a Gtk.Widget ::query-tooltip signal handler for Gtk.IconView.  The x, y and keyboard_tip values which are received in the signal handler, should be passed to this function without modification.
    * @param x the x coordinate (relative to widget coordinates)
    * @param y the y coordinate (relative to widget coordinates)
    * @param keyboardTip whether this is a keyboard tooltip or not
    * @returns whether or not the given tooltip context points to a item   x:the x coordinate (relative to widget coordinates) y:the y coordinate (relative to widget coordinates) model:a pointer to receive a Gtk.TreeModel or None path:a pointer to receive a Gtk.TreePath or None iter:a pointer to receive a Gtk.TreeIter or None 
    */
  getTooltipContext(x: number, y: number, keyboardTip: boolean): [boolean, number, number, import('../Gtk').TreeModel, import('../Gtk').TreePath, import('../Gtk').TreeIter];
  /**
    * Sets start_path and end_path to be the first and last visible path. Note that there may be invisible paths in between.
    * @returns Returns None if there is no visible range or a tuple containing:  start_path:Start of region end_path:End of region 
    */
  getVisibleRange(): [import('../Gtk').TreePath, import('../Gtk').TreePath | null];
  /**
    * Activates the item determined by path.
    * @param path The Gtk.TreePath to be activated 
    */
  itemActivated(path: import('../Gtk').TreePath): void;
  /**
    * Returns True if the icon pointed to by path is currently selected. If path does not point to a valid location, False is returned.
    * @param path A Gtk.TreePath to check selection on.
    * @returns True if path is selected. 
    */
  pathIsSelected(path: import('../Gtk').TreePath): boolean;
  /**
    * Moves the alignments of self to the position specified by path. row_align determines where the row is placed, and col_align determines where column is placed.  Both are expected to be between 0.0 and 1.0. 0.0 means left/top alignment, 1.0 means right/bottom alignment, 0.5 means center.
    * @param path The path of the item to move to.
    * @param useAlign whether to use alignment arguments, or False.
    * @param rowAlign The vertical alignment of the item specified by path.
    * @param colAlign The horizontal alignment of the item specified by path. 
    */
  scrollToPath(path: import('../Gtk').TreePath, useAlign: boolean, rowAlign: number, colAlign: number): void;
  /**
    * Selects all the icons. self must has its selection mode set to Gtk.SelectionMode.MULTIPLE. 
    */
  selectAll(): void;
  /**
    * Selects the row at path.
    * @param path The Gtk.TreePath to be selected. 
    */
  selectPath(path: import('../Gtk').TreePath): void;
  /**
    * Calls a function for each selected icon. Note that the model or selection cannot be modified from within this function.
    * @param func The function to call for each selected icon.
    * @param data User data to pass to the function. 
    */
  selectedForeach(func: import('../Gtk').iconViewForeachFunc, data: Object | null): void;
  /**
    * Causes the Gtk.IconView ::item-activated signal to be emitted on a single click instead of a double click.
    * @param single True to emit item-activated on a single click 
    */
  setActivateOnSingleClick(single: boolean): void;
  /**
    * Sets the ::column-spacing property which specifies the space which is inserted between the columns of the icon view.
    * @param columnSpacing the column spacing 
    */
  setColumnSpacing(columnSpacing: number): void;
  /**
    * Sets the ::columns property which determines in how many columns the icons are arranged. If columns is -1, the number of columns will be chosen automatically to fill the available area.
    * @param columns the number of columns 
    */
  setColumns(columns: number): void;
  /**
    * Sets the current keyboard focus to be at path, and selects it.  This is useful when you want to focus the user’s attention on a particular item. If cell is not None, then focus is given to the cell specified by it. Additionally, if start_editing is True, then editing should be started in the specified cell.
    * @param path A Gtk.TreePath
    * @param cell One of the cell renderers of self, or None
    * @param startEditing True if the specified cell should start being edited. 
    */
  setCursor(path: import('../Gtk').TreePath, cell: import('../Gtk').CellRenderer | null, startEditing: boolean): void;
  /**
    * Sets the item that is highlighted for feedback.
    * @param path The path of the item to highlight, or None.
    * @param pos Specifies where to drop, relative to the item 
    */
  setDragDestItem(path: import('../Gtk').TreePath | null, pos: import('../Gtk').IconViewDropPosition): void;
  /**
    * Sets the ::item-orientation property which determines whether the labels are drawn beside the icons instead of below.
    * @param orientation the relative position of texts and icons 
    */
  setItemOrientation(orientation: import('../Gtk').Orientation): void;
  /**
    * Sets the Gtk.IconView :item-padding property which specifies the padding around each of the icon view’s items.
    * @param itemPadding the item padding 
    */
  setItemPadding(itemPadding: number): void;
  /**
    * Sets the ::item-width property which specifies the width to use for each item. If it is set to -1, the icon view will automatically determine a suitable item size.
    * @param itemWidth the width for each item 
    */
  setItemWidth(itemWidth: number): void;
  /**
    * Sets the ::margin property which specifies the space which is inserted at the top, bottom, left and right of the icon view.
    * @param margin the margin 
    */
  setMargin(margin: number): void;
  /**
    * Sets the column with markup information for self to be column. The markup column must be of type GObject.TYPE_STRING. If the markup column is set to something, it overrides the text column set by Gtk.IconView.set_text_column().
    * @param column A column in the currently used model, or -1 to display no text 
    */
  setMarkupColumn(column: number): void;
  /**
    * Sets the model for a Gtk.IconView. If the self already has a model set, it will remove it before setting the new model.  If model is None, then it will unset the old model.
    * @param model The model. 
    */
  setModel(model: import('../Gtk').TreeModel | null): void;
  /**
    * Sets the column with pixbufs for self to be column. The pixbuf column must be of type #GDK_TYPE_PIXBUF
    * @param column A column in the currently used model, or -1 to disable 
    */
  setPixbufColumn(column: number): void;
  /**
    * This function is a convenience function to allow you to reorder models that support the Gtk.TreeDragSourceIface and the Gtk.TreeDragDestIface.  Both Gtk.TreeStore and Gtk.ListStore support these.  If reorderable is True, then the user can reorder the model by dragging and dropping rows.  The developer can listen to these changes by connecting to the model’s row_inserted and row_deleted signals. The reordering is implemented by setting up the icon view as a drag source and destination. Therefore, drag and drop can not be used in a reorderable view for any other purpose.
    * @param reorderable True, if the list of items can be reordered. 
    */
  setReorderable(reorderable: boolean): void;
  /**
    * Sets the ::row-spacing property which specifies the space which is inserted between the rows of the icon view.
    * @param rowSpacing the row spacing 
    */
  setRowSpacing(rowSpacing: number): void;
  /**
    * Sets the selection mode of the self.
    * @param mode The selection mode 
    */
  setSelectionMode(mode: import('../Gtk').SelectionMode): void;
  /**
    * Sets the ::spacing property which specifies the space which is inserted between the cells (i.e. the icon and the text) of an item.
    * @param spacing the spacing 
    */
  setSpacing(spacing: number): void;
  /**
    * Sets the column with text for self to be column. The text column must be of type GObject.TYPE_STRING.
    * @param column A column in the currently used model, or -1 to display no text 
    */
  setTextColumn(column: number): void;
  /**
    * Sets the tip area of tooltip to the area which cell occupies in the item pointed to by path. See also Gtk.Tooltip.set_tip_area().
    * @param tooltip a Gtk.Tooltip
    * @param path a Gtk.TreePath
    * @param cell a Gtk.CellRenderer or None 
    */
  setTooltipCell(tooltip: import('../Gtk').Tooltip, path: import('../Gtk').TreePath, cell: import('../Gtk').CellRenderer | null): void;
  /**
    * If you only plan to have simple (text-only) tooltips on full items, you can use this function to have Gtk.IconView handle these automatically for you. column should be set to the column in self’s model containing the tooltip texts, or -1 to disable this feature.
    * @param column an integer, which is a valid column number for self’s model 
    */
  setTooltipColumn(column: number): void;
  /**
    * Sets the tip area of tooltip to be the area covered by the item at path. See also Gtk.IconView.set_tooltip_column() for a simpler alternative. See also Gtk.Tooltip.set_tip_area().
    * @param tooltip a Gtk.Tooltip
    * @param path a Gtk.TreePath 
    */
  setTooltipItem(tooltip: import('../Gtk').Tooltip, path: import('../Gtk').TreePath): void;
  /**
    * Unselects all the icons. 
    */
  unselectAll(): void;
  /**
    * Unselects the row at path.
    * @param path The Gtk.TreePath to be unselected. 
    */
  unselectPath(path: import('../Gtk').TreePath): void;
  /**
    * Undoes the effect of Gtk.IconView.enable_model_drag_dest(). Calling this method sets Gtk.IconView :reorderable to False. 
    */
  unsetModelDragDest(): void;
  /**
    * Undoes the effect of Gtk.IconView.enable_model_drag_source(). Calling this method sets Gtk.IconView :reorderable to False. 
    */
  unsetModelDragSource(): void;
  /**
    * Activate row on a single click 
    */
  activateOnSingleClick: boolean;
  /**
    * The Gtk.CellArea used to layout cells 
    */
  cellArea: import('../Gtk').CellArea;
  /**
    * Space which is inserted between grid columns 
    */
  columnSpacing: number;
  /**
    * Number of columns to display 
    */
  columns: number;
  /**
    * How the text and icon of each item are positioned relative to each other 
    */
  itemOrientation: import('../Gtk').Orientation;
  /**
    * Padding around icon view items 
    */
  itemPadding: number;
  /**
    * The width used for each item 
    */
  itemWidth: number;
  /**
    * Model column used to retrieve the text if using Pango markup 
    */
  markupColumn: number;
  /**
    * The model for the icon view 
    */
  model: import('../Gtk').TreeModel;
  /**
    * Model column used to retrieve the icon pixbuf from 
    */
  pixbufColumn: number;
  /**
    * View is reorderable 
    */
  reorderable: boolean;
  /**
    * Space which is inserted between grid rows 
    */
  rowSpacing: number;
  /**
    * The selection mode 
    */
  selectionMode: import('../Gtk').SelectionMode;
  /**
    * Space which is inserted between cells of an item 
    */
  spacing: number;
  /**
    * Model column used to retrieve the text from 
    */
  textColumn: number;
  /**
    * The column in the model containing the tooltip texts for the items 
    */
  tooltipColumn: number;
}

