import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface TreeViewColumn extends GObject.InitiallyUnowned, Gtk.Buildable, Gtk.CellLayout { }

/**
  * The Gtk.TreeViewColumn object represents a visible column in a Gtk.TreeView widget.
It allows to set properties of the column header, and functions as a holding pen for
the cell renderers which determine how the data in the column is displayed. 
  */
export declare class TreeViewColumn {
  /**
    * Creates a new Gtk.TreeViewColumn.
    * @returns A newly created Gtk.TreeViewColumn. 
    */
  static new(): import('../Gtk').TreeViewColumn;
  /**
    * Creates a new Gtk.TreeViewColumn using area to render its cells.
    * @param area the Gtk.CellArea that the newly created column should use to layout cells.
    * @returns A newly created Gtk.TreeViewColumn. 
    */
  static newWithArea(area: import('../Gtk').CellArea): import('../Gtk').TreeViewColumn;
  /**
    * Adds an attribute mapping to the list in self.  The column is the column of the model to get a value from, and the attribute is the parameter on cell_renderer to be set from the value. So for example if column 2 of the model contains strings, you could have the “text” attribute of a Gtk.CellRendererText get its values from column 2.
    * @param cellRenderer the Gtk.CellRenderer to set attributes on
    * @param attribute An attribute on the renderer
    * @param column The column position on the model to get the attribute from. 
    */
  addAttribute(cellRenderer: import('../Gtk').CellRenderer, attribute: string, column: number): void;
  /**
    * Obtains the horizontal position and size of a cell in a column. If the cell is not found in the column None is returned.
    * @param cellRenderer a Gtk.CellRenderer
    * @returns None if cell does not belong to self or a tuple containing:  x_offset:the horizontal position of cell within self width:the width of cell 
    */
  cellGetPosition(cellRenderer: import('../Gtk').CellRenderer): [number, number | null];
  /**
    * Obtains the width and height needed to render the column.  This is used primarily by the Gtk.TreeView.
    * @param cellArea The area a cell in the column will be allocated, or None
    * @returns x_offset:location to return x offset of a cell relative to cell_area, or None y_offset:location to return y offset of a cell relative to cell_area, or None width:location to return width needed to render a cell, or None height:location to return height needed to render a cell, or None 
    */
  cellGetSize(cellArea: import('../Gdk').Rectangle | null): [number, number, number, number];
  /**
    * Returns True if any of the cells packed into the self are visible. For this to be meaningful, you must first initialize the cells with Gtk.TreeViewColumn.cell_set_cell_data()
    * @returns True, if any of the cells packed into the self are currently visible 
    */
  cellIsVisible(): boolean;
  /**
    * Sets the cell renderer based on the tree_model and iter.  That is, for every attribute mapping in self, it will get a value from the set column on the iter, and use that value to set the attribute on the cell renderer.  This is used primarily by the Gtk.TreeView.
    * @param treeModel The Gtk.TreeModel to to get the cell renderers attributes from.
    * @param iter The Gtk.TreeIter to to get the cell renderer’s attributes from.
    * @param isExpander True, if the row has children
    * @param isExpanded True, if the row has visible children 
    */
  cellSetCellData(treeModel: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, isExpander: boolean, isExpanded: boolean): void;
  /**
    * Unsets all the mappings on all renderers on the self. 
    */
  clear(): void;
  /**
    * Clears all existing attributes previously set with Gtk.TreeViewColumn.set_attributes().
    * @param cellRenderer a Gtk.CellRenderer to clear the attribute mapping on. 
    */
  clearAttributes(cellRenderer: import('../Gtk').CellRenderer): void;
  /**
    * Emits the “clicked” signal on the column.  This function will only work if self is clickable. 
    */
  clicked(): void;
  /**
    * Sets the current keyboard focus to be at cell, if the column contains 2 or more editable and activatable cells.
    * @param cell A Gtk.CellRenderer 
    */
  focusCell(cell: import('../Gtk').CellRenderer): void;
  /**
    * Returns the current x alignment of self.  This value can range between 0.0 and 1.0.
    * @returns The current alignent of self. 
    */
  getAlignment(): number;
  /**
    * Returns the button used in the treeview column header
    * @returns The button for the column header. 
    */
  getButton(): import('../Gtk').Widget;
  /**
    * Returns True if the user can click on the header for the column.
    * @returns True if user can click the column header. 
    */
  getClickable(): boolean;
  /**
    * Returns True if the column expands to fill available space.
    * @returns True if the column expands to fill available space. 
    */
  getExpand(): boolean;
  /**
    * Gets the fixed width of the column.  This may not be the actual displayed width of the column; for that, use Gtk.TreeViewColumn.get_width().
    * @returns The fixed width of the column. 
    */
  getFixedWidth(): number;
  /**
    * Returns the maximum width in pixels of the self, or -1 if no maximum width is set.
    * @returns The maximum width of the self. 
    */
  getMaxWidth(): number;
  /**
    * Returns the minimum width in pixels of the self, or -1 if no minimum width is set.
    * @returns The minimum width of the self. 
    */
  getMinWidth(): number;
  /**
    * Returns True if the self can be reordered by the user.
    * @returns True if the self can be reordered by the user. 
    */
  getReorderable(): boolean;
  /**
    * Returns True if the self can be resized by the end user.
    * @returns True, if the self can be resized. 
    */
  getResizable(): boolean;
  /**
    * Returns the current type of self.
    * @returns The type of self. 
    */
  getSizing(): import('../Gtk').TreeViewColumnSizing;
  /**
    * Gets the logical sort_column_id that the model sorts on when this column is selected for sorting. See Gtk.TreeViewColumn.set_sort_column_id().
    * @returns the current sort_column_id for this column, or -1 if this column can’t be used for sorting. 
    */
  getSortColumnId(): number;
  /**
    * Gets the value set by Gtk.TreeViewColumn.set_sort_indicator().
    * @returns whether the sort indicator arrow is displayed 
    */
  getSortIndicator(): boolean;
  /**
    * Gets the value set by Gtk.TreeViewColumn.set_sort_order().
    * @returns the sort order the sort indicator is indicating 
    */
  getSortOrder(): import('../Gtk').SortType;
  /**
    * Returns the spacing of self.
    * @returns the spacing of self. 
    */
  getSpacing(): number;
  /**
    * Returns the title of the widget.
    * @returns the title of the column. This string should not be modified or freed. 
    */
  getTitle(): string;
  /**
    * Returns the Gtk.TreeView wherein self has been inserted. If column is currently not inserted in any tree view, None is returned.
    * @returns The tree view wherein column has been inserted if any, None otherwise. 
    */
  getTreeView(): import('../Gtk').Widget | null;
  /**
    * Returns True if self is visible.
    * @returns whether the column is visible or not.  If it is visible, then the tree will show the column. 
    */
  getVisible(): boolean;
  /**
    * Returns the Gtk.Widget in the button on the column header. If a custom widget has not been set then None is returned.
    * @returns The Gtk.Widget in the column header, or None 
    */
  getWidget(): import('../Gtk').Widget | null;
  /**
    * Returns the current size of self in pixels.
    * @returns The current width of self. 
    */
  getWidth(): number;
  /**
    * Returns the current X offset of self in pixels.
    * @returns The current X offset of self. 
    */
  getXOffset(): number;
  /**
    * Adds the cell to end of the column. If expand is False, then the cell is allocated no more space than it needs. Any unused space is divided evenly between cells for which expand is True.
    * @param cell The Gtk.CellRenderer.
    * @param expand True if cell is to be given extra space allocated to self. 
    */
  packEnd(cell: import('../Gtk').CellRenderer, expand: boolean): void;
  /**
    * Packs the cell into the beginning of the column. If expand is False, then the cell is allocated no more space than it needs. Any unused space is divided evenly between cells for which expand is True.
    * @param cell The Gtk.CellRenderer.
    * @param expand True if cell is to be given extra space allocated to self. 
    */
  packStart(cell: import('../Gtk').CellRenderer, expand: boolean): void;
  /**
    * Flags the column, and the cell renderers added to this column, to have their sizes renegotiated. 
    */
  queueResize(): void;
  /**
    * Sets the alignment of the title or custom widget inside the column header. The alignment determines its location inside the button – 0.0 for left, 0.5 for center, 1.0 for right.
    * @param xalign The alignment, which is between [0.0 and 1.0] inclusive. 
    */
  setAlignment(xalign: number): void;
  /**
    * Sets the attributes in the list as the attributes of self. The attributes should be in attribute/column order, as in Gtk.TreeViewColumn.add_attribute(). All existing attributes are removed, and replaced with the new attributes.
    * @param cellRenderer the Gtk.CellRenderer we’re setting the attributes of 
    */
  setAttributes(cellRenderer: import('../Gtk').CellRenderer): void;
  /**
    * Sets the Gtk.TreeCellDataFunc to use for the column.  This function is used instead of the standard attributes mapping for setting the column value, and should set the value of self’s cell renderer as appropriate.  func may be None to remove an older one.
    * @param cellRenderer A Gtk.CellRenderer
    * @param func The Gtk.TreeCellDataFunc to use.
    * @param funcData The user data for func. 
    */
  setCellDataFunc(cellRenderer: import('../Gtk').CellRenderer, func: import('../Gtk').treeCellDataFunc | null, funcData: Object | null): void;
  /**
    * Sets the header to be active if clickable is True.  When the header is active, then it can take keyboard focus, and can be clicked.
    * @param clickable True if the header is active. 
    */
  setClickable(clickable: boolean): void;
  /**
    * Sets the column to take available extra space.  This space is shared equally amongst all columns that have the expand set to True.  If no column has this option set, then the last column gets all extra space.  By default, every column is created with this False.
    * @param expand True if the column should expand to fill available space. 
    */
  setExpand(expand: boolean): void;
  /**
    * If fixed_width is not -1, sets the fixed width of self; otherwise unsets it.  The effective value of fixed_width is clamped between the minimum and maximum width of the column; however, the value stored in the “fixed-width” property is not clamped.  If the column sizing is Gtk.TreeViewColumnSizing.GROW_ONLY or Gtk.TreeViewColumnSizing.AUTOSIZE, setting a fixed width overrides the automatically calculated width.  Note that fixed_width is only a hint to GTK+; the width actually allocated to the column may be greater or less than requested.
    * @param fixedWidth The new fixed width, in pixels, or -1. 
    */
  setFixedWidth(fixedWidth: number): void;
  /**
    * Sets the maximum width of the self.  If max_width is -1, then the maximum width is unset.  Note, the column can actually be wider than max width if it’s the last column in a view.  In this case, the column expands to fill any extra space.
    * @param maxWidth The maximum width of the column in pixels, or -1. 
    */
  setMaxWidth(maxWidth: number): void;
  /**
    * Sets the minimum width of the self.  If min_width is -1, then the minimum width is unset.
    * @param minWidth The minimum width of the column in pixels, or -1. 
    */
  setMinWidth(minWidth: number): void;
  /**
    * If reorderable is True, then the column can be reordered by the end user dragging the header.
    * @param reorderable True, if the column can be reordered. 
    */
  setReorderable(reorderable: boolean): void;
  /**
    * If resizable is True, then the user can explicitly resize the column by grabbing the outer edge of the column button.  If resizable is True and sizing mode of the column is Gtk.TreeViewColumnSizing.AUTOSIZE, then the sizing mode is changed to Gtk.TreeViewColumnSizing.GROW_ONLY.
    * @param resizable True, if the column can be resized 
    */
  setResizable(resizable: boolean): void;
  /**
    * Sets the growth behavior of self to type.
    * @param type The Gtk.TreeViewColumnSizing. 
    */
  setSizing(type: import('../Gtk').TreeViewColumnSizing): void;
  /**
    * Sets the logical sort_column_id that this column sorts on when this column is selected for sorting.  Doing so makes the column header clickable.
    * @param sortColumnId The sort_column_id of the model to sort on. 
    */
  setSortColumnId(sortColumnId: number): void;
  /**
    * Call this function with a setting of True to display an arrow in the header button indicating the column is sorted. Call Gtk.TreeViewColumn.set_sort_order() to change the direction of the arrow.
    * @param setting True to display an indicator that the column is sorted 
    */
  setSortIndicator(setting: boolean): void;
  /**
    * Changes the appearance of the sort indicator.
    * @param order sort order that the sort indicator should indicate 
    */
  setSortOrder(order: import('../Gtk').SortType): void;
  /**
    * Sets the spacing field of self, which is the number of pixels to place between cell renderers packed into it.
    * @param spacing distance between cell renderers in pixels. 
    */
  setSpacing(spacing: number): void;
  /**
    * Sets the title of the self.  If a custom widget has been set, then this value is ignored.
    * @param title The title of the self. 
    */
  setTitle(title: string): void;
  /**
    * Sets the visibility of self.
    * @param visible True if the self is visible. 
    */
  setVisible(visible: boolean): void;
  /**
    * Sets the widget in the header to be widget.  If widget is None, then the header button is set with a Gtk.Label set to the title of self.
    * @param widget A child Gtk.Widget, or None. 
    */
  setWidget(widget: import('../Gtk').Widget | null): void;
  /**
    * X Alignment of the column header text or widget 
    */
  alignment: number;
  /**
    * The Gtk.CellArea used to layout cells 
    */
  cellArea: import('../Gtk').CellArea;
  /**
    * Whether the header can be clicked 
    */
  clickable: boolean;
  /**
    * Column gets share of extra width allocated to the widget 
    */
  expand: boolean;
  /**
    * Current fixed width of the column 
    */
  fixedWidth: number;
  /**
    * Maximum allowed width of the column 
    */
  maxWidth: number;
  /**
    * Minimum allowed width of the column 
    */
  minWidth: number;
  /**
    * Whether the column can be reordered around the headers 
    */
  reorderable: boolean;
  /**
    * Column is user-resizable 
    */
  resizable: boolean;
  /**
    * Resize mode of the column 
    */
  sizing: import('../Gtk').TreeViewColumnSizing;
  /**
    * Logical sort column ID this column sorts on when selected for sorting 
    */
  sortColumnId: number;
  /**
    * Whether to show a sort indicator 
    */
  sortIndicator: boolean;
  /**
    * Sort direction the sort indicator should indicate 
    */
  sortOrder: import('../Gtk').SortType;
  /**
    * Space which is inserted between cells 
    */
  spacing: number;
  /**
    * Title to appear in column header 
    */
  title: string;
  /**
    * Whether to display the column 
    */
  visible: boolean;
  /**
    * Widget to put in column header button instead of column title 
    */
  widget: import('../Gtk').Widget;
  /**
    * Current width of the column 
    */
  readonly width: number;
  /**
    * Current X position of the column 
    */
  readonly xOffset: number;
}

