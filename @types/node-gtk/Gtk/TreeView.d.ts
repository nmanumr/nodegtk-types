import * as Gtk from '../Gtk';

export declare interface TreeView extends Gtk.Container, Gtk.Scrollable { }

/**
  * Widget that displays any object that implements the Gtk.TreeModel interface. 
  */
export declare class TreeView {
  /**
    * Creates a new Gtk.TreeView widget.
    * @returns A newly created Gtk.TreeView widget. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.TreeView widget with the model initialized to model.
    * @param model the model.
    * @returns A newly created Gtk.TreeView widget. 
    */
  static newWithModel(model: import('../Gtk').TreeModel): import('../Gtk').Widget;
  /**
    * Appends column to the list of columns. If self has “fixed_height” mode enabled, then column must have its “sizing” property set to be Gtk.TreeViewColumnSizing.FIXED.
    * @param column The Gtk.TreeViewColumn to add.
    * @returns The number of columns in self after appending. 
    */
  appendColumn(column: import('../Gtk').TreeViewColumn): number;
  /**
    * Recursively collapses all visible, expanded nodes in self. 
    */
  collapseAll(): void;
  /**
    * Collapses a row (hides its child rows, if they exist).
    * @param path path to a row in the self
    * @returns True if the row was collapsed. 
    */
  collapseRow(path: import('../Gtk').TreePath): boolean;
  /**
    * Resizes all columns to their optimal width. Only works after the treeview has been realized. 
    */
  columnsAutosize(): void;
  /**
    * Converts bin_window coordinates to coordinates for the tree (the full scrollable area of the tree).
    * @param bx X coordinate relative to bin_window
    * @param by Y coordinate relative to bin_window
    * @returns tx:return location for tree X coordinate ty:return location for tree Y coordinate 
    */
  convertBinWindowToTreeCoords(bx: number, by: number): [number, number];
  /**
    * Converts bin_window coordinates (see Gtk.TreeView.get_bin_window()) to widget relative coordinates.
    * @param bx bin_window X coordinate
    * @param by bin_window Y coordinate
    * @returns wx:return location for widget X coordinate wy:return location for widget Y coordinate 
    */
  convertBinWindowToWidgetCoords(bx: number, by: number): [number, number];
  /**
    * Converts tree coordinates (coordinates in full scrollable area of the tree) to bin_window coordinates.
    * @param tx tree X coordinate
    * @param ty tree Y coordinate
    * @returns bx:return location for X coordinate relative to bin_window by:return location for Y coordinate relative to bin_window 
    */
  convertTreeToBinWindowCoords(tx: number, ty: number): [number, number];
  /**
    * Converts tree coordinates (coordinates in full scrollable area of the tree) to widget coordinates.
    * @param tx X coordinate relative to the tree
    * @param ty Y coordinate relative to the tree
    * @returns wx:return location for widget X coordinate wy:return location for widget Y coordinate 
    */
  convertTreeToWidgetCoords(tx: number, ty: number): [number, number];
  /**
    * Converts widget coordinates to coordinates for the bin_window (see Gtk.TreeView.get_bin_window()).
    * @param wx X coordinate relative to the widget
    * @param wy Y coordinate relative to the widget
    * @returns bx:return location for bin_window X coordinate by:return location for bin_window Y coordinate 
    */
  convertWidgetToBinWindowCoords(wx: number, wy: number): [number, number];
  /**
    * Converts widget coordinates to coordinates for the tree (the full scrollable area of the tree).
    * @param wx X coordinate relative to the widget
    * @param wy Y coordinate relative to the widget
    * @returns tx:return location for tree X coordinate ty:return location for tree Y coordinate 
    */
  convertWidgetToTreeCoords(wx: number, wy: number): [number, number];
  /**
    * Creates a cairo.Surface representation of the row at path. This image is used for a drag icon.
    * @param path a Gtk.TreePath in self
    * @returns a newly-allocated surface of the drag icon. 
    */
  createRowDragIcon(path: import('../Gtk').TreePath): import('../cairo').Surface;
  /**
    * Turns self into a drop destination for automatic DND. Calling this method sets Gtk.TreeView :reorderable to False.
    * @param targets the table of targets that the drag will support
    * @param actions the bitmask of possible actions for a drag from this widget 
    */
  enableModelDragDest(targets: import('../Gtk').TargetEntry, actions: import('../Gdk').DragAction): void;
  /**
    * Turns self into a drag source for automatic DND. Calling this method sets Gtk.TreeView :reorderable to False.
    * @param startButtonMask Mask of allowed buttons to start drag
    * @param targets the table of targets that the drag will support
    * @param actions the bitmask of possible actions for a drag from this widget 
    */
  enableModelDragSource(startButtonMask: import('../Gdk').ModifierType, targets: import('../Gtk').TargetEntry, actions: import('../Gdk').DragAction): void;
  /**
    * Recursively expands all nodes in the self. 
    */
  expandAll(): void;
  /**
    * Opens the row so its children are visible.
    * @param path path to a row
    * @param openAll whether to recursively expand, or just expand immediate children
    * @returns True if the row existed and had children 
    */
  expandRow(path: import('../Gtk').TreePath, openAll: boolean): boolean;
  /**
    * Expands the row at path. This will also expand all parent rows of path as necessary.
    * @param path path to a row. 
    */
  expandToPath(path: import('../Gtk').TreePath): void;
  /**
    * Gets the setting set by Gtk.TreeView.set_activate_on_single_click().
    * @returns True if row-activated will be emitted on a single click 
    */
  getActivateOnSingleClick(): boolean;
  /**
    * Fills the bounding rectangle in bin_window coordinates for the cell at the row specified by path and the column specified by column.  If path is None, or points to a node not found in the tree, the y and height fields of the rectangle will be filled with 0. If column is None, the x and width fields will be filled with 0.  The returned rectangle is equivalent to the background_area passed to Gtk.CellRenderer.render().  These background areas tile to cover the entire bin window.  Contrast with the cell_area, returned by Gtk.TreeView.get_cell_area(), which returns only the cell itself, excluding surrounding borders and the tree expander area.
    * @param path a Gtk.TreePath for the row, or None to get only horizontal coordinates
    * @param column a Gtk.TreeViewColumn for the column, or None to get only vertical coordiantes
    * @returns rectangle to fill with cell background rect 
    */
  getBackgroundArea(path: import('../Gtk').TreePath | null, column: import('../Gtk').TreeViewColumn | null): import('../Gdk').Rectangle;
  /**
    * Returns the window that self renders to. This is used primarily to compare to event->window to confirm that the event on self is on the right window.
    * @returns A Gdk.Window, or None when self hasn’t been realized yet. 
    */
  getBinWindow(): import('../Gdk').Window | null;
  /**
    * Fills the bounding rectangle in bin_window coordinates for the cell at the row specified by path and the column specified by column.  If path is None, or points to a path not currently displayed, the y and height fields of the rectangle will be filled with 0. If column is None, the x and width fields will be filled with 0.  The sum of all cell rects does not cover the entire tree; there are extra pixels in between rows, for example. The returned rectangle is equivalent to the cell_area passed to Gtk.CellRenderer.render().  This function is only valid if self is realized.
    * @param path a Gtk.TreePath for the row, or None to get only horizontal coordinates
    * @param column a Gtk.TreeViewColumn for the column, or None to get only vertical coordinates
    * @returns rectangle to fill with cell rect 
    */
  getCellArea(path: import('../Gtk').TreePath | null, column: import('../Gtk').TreeViewColumn | null): import('../Gdk').Rectangle;
  /**
    * Gets the Gtk.TreeViewColumn at the given position in the #tree_view.
    * @param n The position of the column, counting from 0.
    * @returns The Gtk.TreeViewColumn, or None if the position is outside the range of columns. 
    */
  getColumn(n: number): import('../Gtk').TreeViewColumn | null;
  /**
    * Returns a GLib.List of all the Gtk.TreeViewColumn s currently in self. The returned list must be freed with g_list_free ().
    * @returns A list of Gtk.TreeViewColumn s 
    */
  getColumns(): import('../Gtk').TreeViewColumn[];
  /**
    * Fills in path and focus_column with the current path and focus column.  If the cursor isn’t currently set, then path will be None.  If no column currently has focus, then focus_column will be None.
    * @returns path:A pointer to be filled with the current cursor path, or None focus_column:A pointer to be filled with the current focus column, or None 
    */
  getCursor(): [import('../Gtk').TreePath | null, import('../Gtk').TreeViewColumn | null];
  /**
    * Determines the destination row for a given position.  drag_x and drag_y are expected to be in widget coordinates.  This function is only meaningful if self is realized.  Therefore this function will always return None if self is not realized or does not have a model.
    * @param dragX the position to determine the destination row for
    * @param dragY the position to determine the destination row for
    * @returns None if there is no row at the given position or a tuple containing:   path:the path of the highlighted row pos:the drop position 
    */
  getDestRowAtPos(dragX: number, dragY: number): [import('../Gtk').TreePath | null, import('../Gtk').TreeViewDropPosition | null];
  /**
    * Gets information about the row that is highlighted for feedback.
    * @returns path:Return location for the path of the highlighted row, or None. pos:Return location for the drop position, or None 
    */
  getDragDestRow(): [import('../Gtk').TreePath | null, import('../Gtk').TreeViewDropPosition];
  /**
    * Returns whether or not the tree allows to start interactive searching by typing in text.
    * @returns whether or not to let the user search interactively 
    */
  getEnableSearch(): boolean;
  /**
    * Returns whether or not tree lines are drawn in self.
    * @returns True if tree lines are drawn in self, False otherwise. 
    */
  getEnableTreeLines(): boolean;
  /**
    * Returns the column that is the current expander column. This column has the expander arrow drawn next to it.
    * @returns The expander column. 
    */
  getExpanderColumn(): import('../Gtk').TreeViewColumn;
  /**
    * Returns whether fixed height mode is turned on for self.
    * @returns True if self is in fixed height mode 
    */
  getFixedHeightMode(): boolean;
  /**
    * Returns which grid lines are enabled in self.
    * @returns a Gtk.TreeViewGridLines value indicating which grid lines are enabled. 
    */
  getGridLines(): import('../Gtk').TreeViewGridLines;
  /**
    * Gets the Gtk.Adjustment currently being used for the horizontal aspect.
    * @returns A Gtk.Adjustment object, or None if none is currently being used. 
    */
  getHadjustment(): import('../Gtk').Adjustment;
  /**
    * Returns whether all header columns are clickable.
    * @returns True if all header columns are clickable, otherwise False 
    */
  getHeadersClickable(): boolean;
  /**
    * Returns True if the headers on the self are visible.
    * @returns Whether the headers are visible or not. 
    */
  getHeadersVisible(): boolean;
  /**
    * Returns whether hover expansion mode is turned on for self.
    * @returns True if self is in hover expansion mode 
    */
  getHoverExpand(): boolean;
  /**
    * Returns whether hover selection mode is turned on for self.
    * @returns True if self is in hover selection mode 
    */
  getHoverSelection(): boolean;
  /**
    * Returns the amount, in pixels, of extra indentation for child levels in self.
    * @returns the amount of extra indentation for child levels in self.  A return value of 0 means that this feature is disabled. 
    */
  getLevelIndentation(): number;
  /**
    * Returns the model the Gtk.TreeView is based on.  Returns None if the model is unset.
    * @returns A Gtk.TreeModel, or None if none is currently being used. 
    */
  getModel(): import('../Gtk').TreeModel | null;
  /**
    * Queries the number of columns in the given self.
    * @returns The number of columns in the self 
    */
  getNColumns(): number;
  /**
    * Finds the path at the point (x, y), relative to bin_window coordinates (please see Gtk.TreeView.get_bin_window()). That is, x and y are relative to an events coordinates. x and y must come from an event on the self only where event->window == gtk_tree_view_get_bin_window (). It is primarily for things like popup menus. If path is non-None, then it will be filled with the Gtk.TreePath at that point.  This path should be freed with Gtk.TreePath.free().  If column is non-None, then it will be filled with the column at that point.  cell_x and cell_y return the coordinates relative to the cell background (i.e. the background_area passed to Gtk.CellRenderer.render()).  This function is only meaningful if self is realized.  Therefore this function will always return False if self is not realized or does not have a model.
    * @param x The x position to be identified (relative to bin_window).
    * @param y The y position to be identified (relative to bin_window).
    * @returns None if the row doesn’t exist at that coordinates or a tuple containing:   path:a Gtk.TreePath column:a Gtk.TreeViewColumn cell_x:the X coordinate relative to the cell cell_y:the Y coordinate relative to the cell 
    */
  getPathAtPos(x: number, y: number): [import('../Gtk').TreePath | null, import('../Gtk').TreeViewColumn | null, number, number | null];
  /**
    * Retrieves whether the user can reorder the tree via drag-and-drop. See Gtk.TreeView.set_reorderable().
    * @returns True if the tree can be reordered. 
    */
  getReorderable(): boolean;
  /**
    * Returns whether rubber banding is turned on for self.  If the selection mode is Gtk.SelectionMode.MULTIPLE, rubber banding will allow the user to select multiple rows by dragging the mouse.
    * @returns True if rubber banding in self is enabled. 
    */
  getRubberBanding(): boolean;
  /**
    * Gets the setting set by Gtk.TreeView.set_rules_hint().
    * @returns True if the hint is set 
    */
  getRulesHint(): boolean;
  /**
    * Gets the column searched on by the interactive search code.
    * @returns the column the interactive search code searches in. 
    */
  getSearchColumn(): number;
  /**
    * Returns the Gtk.Entry which is currently in use as interactive search entry for self.  In case the built-in entry is being used, None will be returned.
    * @returns the entry currently in use as search entry. 
    */
  getSearchEntry(): import('../Gtk').Entry;
  /**
    * Gets the Gtk.TreeSelection associated with self.
    * @returns A Gtk.TreeSelection object. 
    */
  getSelection(): import('../Gtk').TreeSelection;
  /**
    * Returns whether or not expanders are drawn in self.
    * @returns True if expanders are drawn in self, False otherwise. 
    */
  getShowExpanders(): boolean;
  /**
    * Returns the column of self’s model which is being used for displaying tooltips on self’s rows.
    * @returns the index of the tooltip column that is currently being used, or -1 if this is disabled. 
    */
  getTooltipColumn(): number;
  /**
    * This function is supposed to be used in a Gtk.Widget ::query-tooltip signal handler for Gtk.TreeView.  The x, y and keyboard_tip values which are received in the signal handler, should be passed to this function without modification.
    * @param x the x coordinate (relative to widget coordinates)
    * @param y the y coordinate (relative to widget coordinates)
    * @param keyboardTip whether this is a keyboard tooltip or not
    * @returns whether or not the given tooltip context points to a row.   x:the x coordinate (relative to widget coordinates) y:the y coordinate (relative to widget coordinates) model:a pointer to receive a Gtk.TreeModel or None path:a pointer to receive a Gtk.TreePath or None iter:a pointer to receive a Gtk.TreeIter or None 
    */
  getTooltipContext(x: number, y: number, keyboardTip: boolean): [boolean, number, number, import('../Gtk').TreeModel | null, import('../Gtk').TreePath, import('../Gtk').TreeIter];
  /**
    * Gets the Gtk.Adjustment currently being used for the vertical aspect.
    * @returns A Gtk.Adjustment object, or None if none is currently being used. 
    */
  getVadjustment(): import('../Gtk').Adjustment;
  /**
    * Returns the first and last visible path. Note that there may be invisible paths in between.
    * @returns Either None if there is no visible range or a tuple containing:  start_path:start of region end_path:end of region 
    */
  getVisibleRange(): [import('../Gtk').TreePath, import('../Gtk').TreePath | null];
  /**
    * Fills visible_rect with the currently-visible region of the buffer, in tree coordinates. Convert to bin_window coordinates with Gtk.TreeView.convert_tree_to_bin_window_coords(). Tree coordinates start at 0,0 for row 0 of the tree, and cover the entire scrollable area of the tree.
    * @returns rectangle to fill 
    */
  getVisibleRect(): import('../Gdk').Rectangle;
  /**
    * This inserts the column into the self at position.  If position is -1, then the column is inserted at the end. If self has “fixed_height” mode enabled, then column must have its “sizing” property set to be Gtk.TreeViewColumnSizing.FIXED.
    * @param column The Gtk.TreeViewColumn to be inserted.
    * @param position The position to insert column in.
    * @returns The number of columns in self after insertion. 
    */
  insertColumn(column: import('../Gtk').TreeViewColumn, position: number): number;
  /**
    * Creates a new Gtk.TreeViewColumn and inserts it into the self at position.  If position is -1, then the newly created column is inserted at the end.  The column is initialized with the attributes given. If self has “fixed_height” mode enabled, then the new column will have its sizing property set to be Gtk.TreeViewColumnSizing.FIXED.
    * @param position The position to insert the new column in
    * @param title The title to set the header to
    * @param cell The Gtk.CellRenderer 
    */
  insertColumnWithAttributes(position: number, title: string, cell: import('../Gtk').CellRenderer): void;
  /**
    * Convenience function that inserts a new column into the Gtk.TreeView with the given cell renderer and a Gtk.TreeCellDataFunc to set cell renderer attributes (normally using data from the model). See also Gtk.TreeViewColumn.set_cell_data_func(), Gtk.TreeViewColumn.pack_start(). If self has “fixed_height” mode enabled, then the new column will have its “sizing” property set to be Gtk.TreeViewColumnSizing.FIXED.
    * @param position Position to insert, -1 for append
    * @param title column title
    * @param cell cell renderer for column
    * @param func function to set attributes of cell renderer
    * @param data data for func
    * @returns number of columns in the tree view post-insert 
    */
  insertColumnWithDataFunc(position: number, title: string, cell: import('../Gtk').CellRenderer, func: import('../Gtk').treeCellDataFunc, data: Object | null): number;
  /**
    * Determine whether the point (x, y) in self is blank, that is no cell content nor an expander arrow is drawn at the location. If so, the location can be considered as the background. You might wish to take special action on clicks on the background, such as clearing a current selection, having a custom context menu or starting rubber banding.
    * @param x The x position to be identified (relative to bin_window)
    * @param y The y position to be identified (relative to bin_window)
    * @returns True if the area at the given coordinates is blank, False otherwise.   path:A pointer to a Gtk.TreePath pointer to be filled in, or None column:A pointer to a Gtk.TreeViewColumn pointer to be filled in, or None cell_x:A pointer where the X coordinate relative to the cell can be placed, or None cell_y:A pointer where the Y coordinate relative to the cell can be placed, or None 
    */
  isBlankAtPos(x: number, y: number): [boolean, import('../Gtk').TreePath | null, import('../Gtk').TreeViewColumn | null, number, number];
  /**
    * Returns whether a rubber banding operation is currently being done in self.
    * @returns True if a rubber banding operation is currently being done in self. 
    */
  isRubberBandingActive(): boolean;
  /**
    * Calls func on all expanded rows.
    * @param func A function to be called
    * @param data User data to be passed to the function. 
    */
  mapExpandedRows(func: import('../Gtk').treeViewMappingFunc, data: Object | null): void;
  /**
    * Moves column to be after to base_column.  If base_column is None, then column is placed in the first position.
    * @param column The Gtk.TreeViewColumn to be moved.
    * @param baseColumn The Gtk.TreeViewColumn to be moved relative to, or None. 
    */
  moveColumnAfter(column: import('../Gtk').TreeViewColumn, baseColumn: import('../Gtk').TreeViewColumn | null): void;
  /**
    * Removes column from self.
    * @param column The Gtk.TreeViewColumn to remove.
    * @returns The number of columns in self after removing. 
    */
  removeColumn(column: import('../Gtk').TreeViewColumn): number;
  /**
    * Activates the cell determined by path and column.
    * @param path The Gtk.TreePath to be activated.
    * @param column The Gtk.TreeViewColumn to be activated. 
    */
  rowActivated(path: import('../Gtk').TreePath, column: import('../Gtk').TreeViewColumn): void;
  /**
    * Returns True if the node pointed to by path is expanded in self.
    * @param path A Gtk.TreePath to test expansion state.
    * @returns True if #path is expanded. 
    */
  rowExpanded(path: import('../Gtk').TreePath): boolean;
  /**
    * Moves the alignments of self to the position specified by column and path.  If column is None, then no horizontal scrolling occurs.  Likewise, if path is None no vertical scrolling occurs.  At a minimum, one of column or path need to be non-None.  row_align determines where the row is placed, and col_align determines where column is placed.  Both are expected to be between 0.0 and 1.0. 0.0 means left/top alignment, 1.0 means right/bottom alignment, 0.5 means center.
    * @param path The path of the row to move to, or None.
    * @param column The Gtk.TreeViewColumn to move horizontally to, or None.
    * @param useAlign whether to use alignment arguments, or False.
    * @param rowAlign The vertical alignment of the row specified by path.
    * @param colAlign The horizontal alignment of the column specified by column. 
    */
  scrollToCell(path: import('../Gtk').TreePath | null, column: import('../Gtk').TreeViewColumn | null, useAlign: boolean, rowAlign: number, colAlign: number): void;
  /**
    * Scrolls the tree view such that the top-left corner of the visible area is tree_x, tree_y, where tree_x and tree_y are specified in tree coordinates.  The self must be realized before this function is called.  If it isn’t, you probably want to be using Gtk.TreeView.scroll_to_cell().
    * @param treeX X coordinate of new top-left pixel of visible area, or -1
    * @param treeY Y coordinate of new top-left pixel of visible area, or -1 
    */
  scrollToPoint(treeX: number, treeY: number): void;
  /**
    * Cause the Gtk.TreeView ::row-activated signal to be emitted on a single click instead of a double click.
    * @param single True to emit row-activated on a single click 
    */
  setActivateOnSingleClick(single: boolean): void;
  /**
    * Sets a user function for determining where a column may be dropped when dragged.  This function is called on every column pair in turn at the beginning of a column drag to determine where a drop can take place.  The arguments passed to func are: the self, the Gtk.TreeViewColumn being dragged, the two Gtk.TreeViewColumn s determining the drop spot, and user_data.  If either of the Gtk.TreeViewColumn arguments for the drop spot are None, then they indicate an edge.  If func is set to be None, then self reverts to the default behavior of allowing all columns to be dropped everywhere.
    * @param func A function to determine which columns are reorderable, or None.
    * @param userData User data to be passed to func, or None 
    */
  setColumnDragFunction(func: import('../Gtk').treeViewColumnDropFunc | null, userData: Object | null): void;
  /**
    * Sets the current keyboard focus to be at path, and selects it.  This is useful when you want to focus the user’s attention on a particular row.  If focus_column is not None, then focus is given to the column specified by it. Additionally, if focus_column is specified, and start_editing is True, then editing should be started in the specified cell. This function is often followed by gtk_widget_grab_focus (self) in order to give keyboard focus to the widget.  Please note that editing can only happen when the widget is realized.
    * @param path A Gtk.TreePath
    * @param focusColumn A Gtk.TreeViewColumn, or None
    * @param startEditing True if the specified cell should start being edited. 
    */
  setCursor(path: import('../Gtk').TreePath, focusColumn: import('../Gtk').TreeViewColumn | null, startEditing: boolean): void;
  /**
    * Sets the current keyboard focus to be at path, and selects it.  This is useful when you want to focus the user’s attention on a particular row.  If focus_column is not None, then focus is given to the column specified by it. If focus_column and focus_cell are not None, and focus_column contains 2 or more editable or activatable cells, then focus is given to the cell specified by focus_cell. Additionally, if focus_column is specified, and start_editing is True, then editing should be started in the specified cell.  This function is often followed by gtk_widget_grab_focus (self) in order to give keyboard focus to the widget.  Please note that editing can only happen when the widget is realized.
    * @param path A Gtk.TreePath
    * @param focusColumn A Gtk.TreeViewColumn, or None
    * @param focusCell A Gtk.CellRenderer, or None
    * @param startEditing True if the specified cell should start being edited. 
    */
  setCursorOnCell(path: import('../Gtk').TreePath, focusColumn: import('../Gtk').TreeViewColumn | null, focusCell: import('../Gtk').CellRenderer | null, startEditing: boolean): void;
  /**
    * This function should almost never be used.  It is meant for private use by ATK for determining the number of visible children that are removed when the user collapses a row, or a row is deleted.
    * @param func Function to be called when a view row is destroyed, or None
    * @param data User data to be passed to func, or None 
    */
  setDestroyCountFunc(func: import('../Gtk').treeDestroyCountFunc | null, data: Object | null): void;
  /**
    * Sets the row that is highlighted for feedback. If path is None, an existing highlight is removed.
    * @param path The path of the row to highlight, or None
    * @param pos Specifies whether to drop before, after or into the row 
    */
  setDragDestRow(path: import('../Gtk').TreePath | null, pos: import('../Gtk').TreeViewDropPosition): void;
  /**
    * If enable_search is set, then the user can type in text to search through the tree interactively (this is sometimes called “typeahead find”).
    * @param enableSearch True, if the user can search interactively 
    */
  setEnableSearch(enableSearch: boolean): void;
  /**
    * Sets whether to draw lines interconnecting the expanders in self. This does not have any visible effects for lists.
    * @param enabled True to enable tree line drawing, False otherwise. 
    */
  setEnableTreeLines(enabled: boolean): void;
  /**
    * Sets the column to draw the expander arrow at. It must be in self. If column is None, then the expander arrow is always at the first visible column.
    * @param column None, or the column to draw the expander arrow at. 
    */
  setExpanderColumn(column: import('../Gtk').TreeViewColumn | null): void;
  /**
    * Enables or disables the fixed height mode of self. Fixed height mode speeds up Gtk.TreeView by assuming that all rows have the same height. Only enable this option if all rows are the same height and all columns are of type Gtk.TreeViewColumnSizing.FIXED.
    * @param enable True to enable fixed height mode 
    */
  setFixedHeightMode(enable: boolean): void;
  /**
    * Sets which grid lines to draw in self.
    * @param gridLines a Gtk.TreeViewGridLines value indicating which grid lines to enable. 
    */
  setGridLines(gridLines: import('../Gtk').TreeViewGridLines): void;
  /**
    * Sets the Gtk.Adjustment for the current horizontal aspect.
    * @param adjustment The Gtk.Adjustment to set, or None 
    */
  setHadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Allow the column title buttons to be clicked.
    * @param setting True if the columns are clickable. 
    */
  setHeadersClickable(setting: boolean): void;
  /**
    * Sets the visibility state of the headers.
    * @param headersVisible True if the headers are visible 
    */
  setHeadersVisible(headersVisible: boolean): void;
  /**
    * Enables or disables the hover expansion mode of self. Hover expansion makes rows expand or collapse if the pointer moves over them.
    * @param expand True to enable hover selection mode 
    */
  setHoverExpand(expand: boolean): void;
  /**
    * Enables or disables the hover selection mode of self. Hover selection makes the selected row follow the pointer. Currently, this works only for the selection modes Gtk.SelectionMode.SINGLE and Gtk.SelectionMode.BROWSE.
    * @param hover True to enable hover selection mode 
    */
  setHoverSelection(hover: boolean): void;
  /**
    * Sets the amount of extra indentation for child levels to use in self in addition to the default indentation.  The value should be specified in pixels, a value of 0 disables this feature and in this case only the default indentation will be used. This does not have any visible effects for lists.
    * @param indentation the amount, in pixels, of extra indentation in self. 
    */
  setLevelIndentation(indentation: number): void;
  /**
    * Sets the model for a Gtk.TreeView.  If the self already has a model set, it will remove it before setting the new model.  If model is None, then it will unset the old model.
    * @param model The model. 
    */
  setModel(model: import('../Gtk').TreeModel | null): void;
  /**
    * This function is a convenience function to allow you to reorder models that support the Gtk.TreeDragSourceIface and the Gtk.TreeDragDestIface.  Both Gtk.TreeStore and Gtk.ListStore support these.  If reorderable is True, then the user can reorder the model by dragging and dropping rows. The developer can listen to these changes by connecting to the model’s Gtk.TreeModel ::row-inserted and Gtk.TreeModel ::row-deleted signals. The reordering is implemented by setting up the tree view as a drag source and destination. Therefore, drag and drop can not be used in a reorderable view for any other purpose.
    * @param reorderable True, if the tree can be reordered. 
    */
  setReorderable(reorderable: boolean): void;
  /**
    * Sets the row separator function, which is used to determine whether a row should be drawn as a separator. If the row separator function is None, no separators are drawn. This is the default value.
    * @param func a Gtk.TreeViewRowSeparatorFunc
    * @param data user data to pass to func, or None 
    */
  setRowSeparatorFunc(func: import('../Gtk').treeViewRowSeparatorFunc | null, data: Object | null): void;
  /**
    * Enables or disables rubber banding in self.  If the selection mode is Gtk.SelectionMode.MULTIPLE, rubber banding will allow the user to select multiple rows by dragging the mouse.
    * @param enable True to enable rubber banding 
    */
  setRubberBanding(enable: boolean): void;
  /**
    * Sets a hint for the theme to draw even/odd rows in the self with different colors, also known as “zebra striping”.
    * @param setting True if the tree requires reading across rows 
    */
  setRulesHint(setting: boolean): void;
  /**
    * Sets column as the column where the interactive search code should search in for the current model.
    * @param column the column of the model to search in, or -1 to disable searching 
    */
  setSearchColumn(column: number): void;
  /**
    * Sets the entry which the interactive search code will use for this self.  This is useful when you want to provide a search entry in our interface at all time at a fixed position.  Passing None for entry will make the interactive search code use the built-in popup entry again.
    * @param entry the entry the interactive search code of self should use or None 
    */
  setSearchEntry(entry: import('../Gtk').Entry | null): void;
  /**
    * Sets the compare function for the interactive search capabilities; note that somewhat like strcmp() returning 0 for equality Gtk.TreeViewSearchEqualFunc returns False on matches.
    * @param searchEqualFunc the compare function to use during the search
    * @param searchUserData user data to pass to search_equal_func, or None 
    */
  setSearchEqualFunc(searchEqualFunc: import('../Gtk').treeViewSearchEqualFunc, searchUserData: Object | null): void;
  /**
    * Sets the function to use when positioning the search dialog.
    * @param func the function to use to position the search dialog, or None to use the default search position function
    * @param data user data to pass to func, or None 
    */
  setSearchPositionFunc(func: import('../Gtk').treeViewSearchPositionFunc | null, data: Object | null): void;
  /**
    * Sets whether to draw and enable expanders and indent child rows in self.  When disabled there will be no expanders visible in trees and there will be no way to expand and collapse rows by default.  Also note that hiding the expanders will disable the default indentation.  You can set a custom indentation in this case using Gtk.TreeView.set_level_indentation(). This does not have any visible effects for lists.
    * @param enabled True to enable expander drawing, False otherwise. 
    */
  setShowExpanders(enabled: boolean): void;
  /**
    * Sets the tip area of tooltip to the area path, column and cell have in common.  For example if path is None and column is set, the tip area will be set to the full area covered by column.  See also Gtk.Tooltip.set_tip_area().
    * @param tooltip a Gtk.Tooltip
    * @param path a Gtk.TreePath or None
    * @param column a Gtk.TreeViewColumn or None
    * @param cell a Gtk.CellRenderer or None 
    */
  setTooltipCell(tooltip: import('../Gtk').Tooltip, path: import('../Gtk').TreePath | null, column: import('../Gtk').TreeViewColumn | null, cell: import('../Gtk').CellRenderer | null): void;
  /**
    * If you only plan to have simple (text-only) tooltips on full rows, you can use this function to have Gtk.TreeView handle these automatically for you. column should be set to the column in self’s model containing the tooltip texts, or -1 to disable this feature.
    * @param column an integer, which is a valid column number for self’s model 
    */
  setTooltipColumn(column: number): void;
  /**
    * Sets the tip area of tooltip to be the area covered by the row at path. See also Gtk.TreeView.set_tooltip_column() for a simpler alternative. See also Gtk.Tooltip.set_tip_area().
    * @param tooltip a Gtk.Tooltip
    * @param path a Gtk.TreePath 
    */
  setTooltipRow(tooltip: import('../Gtk').Tooltip, path: import('../Gtk').TreePath): void;
  /**
    * Sets the Gtk.Adjustment for the current vertical aspect.
    * @param adjustment The Gtk.Adjustment to set, or None 
    */
  setVadjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * Undoes the effect of Gtk.TreeView.enable_model_drag_dest(). Calling this method sets Gtk.TreeView :reorderable to False. 
    */
  unsetRowsDragDest(): void;
  /**
    * Undoes the effect of Gtk.TreeView.enable_model_drag_source(). Calling this method sets Gtk.TreeView :reorderable to False. 
    */
  unsetRowsDragSource(): void;
  /**
    * Activate row on a single click 
    */
  activateOnSingleClick: boolean;
  /**
    * Whether grid lines should be drawn in the tree view 
    */
  enableGridLines: import('../Gtk').TreeViewGridLines;
  /**
    * View allows user to search through columns interactively 
    */
  enableSearch: boolean;
  /**
    * Whether tree lines should be drawn in the tree view 
    */
  enableTreeLines: boolean;
  /**
    * Set the column for the expander column 
    */
  expanderColumn: import('../Gtk').TreeViewColumn;
  /**
    * Speeds up Gtk.TreeView by assuming that all rows have the same height 
    */
  fixedHeightMode: boolean;
  /**
    * Column headers respond to click events 
    */
  headersClickable: boolean;
  /**
    * Show the column header buttons 
    */
  headersVisible: boolean;
  /**
    * Whether rows should be expanded/collapsed when the pointer moves over them 
    */
  hoverExpand: boolean;
  /**
    * Whether the selection should follow the pointer 
    */
  hoverSelection: boolean;
  /**
    * Extra indentation for each level 
    */
  levelIndentation: number;
  /**
    * The model for the tree view 
    */
  model: import('../Gtk').TreeModel;
  /**
    * View is reorderable 
    */
  reorderable: boolean;
  /**
    * Whether to enable selection of multiple items by dragging the mouse pointer 
    */
  rubberBanding: boolean;
  /**
    * Set a hint to the theme engine to draw rows in alternating colors deprecated 
    */
  rulesHint: boolean;
  /**
    * Model column to search through during interactive search 
    */
  searchColumn: number;
  /**
    * View has expanders 
    */
  showExpanders: boolean;
  /**
    * The column in the model containing the tooltip texts for the rows 
    */
  tooltipColumn: number;
}

