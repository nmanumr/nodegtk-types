import * as Gtk from '../Gtk';
export declare interface ComboBox extends Gtk.Bin, Gtk.CellEditable, Gtk.CellLayout { }

/**
  * A Gtk.ComboBox is a widget that allows the user to choose from a list of
valid choices. The Gtk.ComboBox displays the selected choice. When
activated, the Gtk.ComboBox displays a popup which allows the user to
make a new choice. The style in which the selected value is displayed,
and the style of the popup is determined by the current theme. It may
be similar to a Windows-style combo box. 
  */
export declare class ComboBox {
  /**
    * Creates a new empty Gtk.ComboBox.
    * @returns A new Gtk.ComboBox. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new empty Gtk.ComboBox using area to layout cells.
    * @param area the Gtk.CellArea to use to layout cell renderers
    * @returns A new Gtk.ComboBox. 
    */
  static newWithArea(area: import('../Gtk').CellArea): import('../Gtk').Widget;
  /**
    * Creates a new empty Gtk.ComboBox with an entry.
    * @param area the Gtk.CellArea to use to layout cell renderers
    * @returns A new Gtk.ComboBox. 
    */
  static newWithAreaAndEntry(area: import('../Gtk').CellArea): import('../Gtk').Widget;
  /**
    * Creates a new empty Gtk.ComboBox with an entry.
    * @returns A new Gtk.ComboBox. 
    */
  static newWithEntry(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.ComboBox with the model initialized to model.
    * @param model A Gtk.TreeModel.
    * @returns A new Gtk.ComboBox. 
    */
  static newWithModel(model: import('../Gtk').TreeModel): import('../Gtk').Widget;
  /**
    * Creates a new empty Gtk.ComboBox with an entry and with the model initialized to model.
    * @param model A Gtk.TreeModel
    * @returns A new Gtk.ComboBox 
    */
  static newWithModelAndEntry(model: import('../Gtk').TreeModel): import('../Gtk').Widget;
  /**
    * Returns the index of the currently active item, or -1 if there’s no active item. If the model is a non-flat treemodel, and the active item is not an immediate child of the root of the tree, this function returns gtk_tree_path_get_indices (path)[0], where path is the Gtk.TreePath of the active item.
    * @returns An integer which is the index of the currently active item, or -1 if there’s no active item. 
    */
  getActive(): number;
  /**
    * Returns the ID of the active row of self.  This value is taken from the active row and the column specified by the Gtk.ComboBox :id-column property of self (see Gtk.ComboBox.set_id_column()).
    * @returns the ID of the active row, or None 
    */
  getActiveId(): string | null;
  /**
    * Returns the iter for the current active item, if it exists.
    * @returns a Gtk.TreeIter or None if there is no active item 
    */
  getActiveIter(): import('../Gtk').TreeIter | null;
  /**
    * Gets the current value of the :add-tearoffs property.
    * @returns the current value of the :add-tearoffs property. 
    */
  getAddTearoffs(): boolean;
  /**
    * Returns whether the combo box sets the dropdown button sensitive or not when there are no items in the model.
    * @returns Gtk.SensitivityType.ON if the dropdown button is sensitive when the model is empty, Gtk.SensitivityType.OFF if the button is always insensitive or Gtk.SensitivityType.AUTO if it is only sensitive as long as the model has one item to be selected. 
    */
  getButtonSensitivity(): import('../Gtk').SensitivityType;
  /**
    * Returns the column with column span information for self.
    * @returns the column span column. 
    */
  getColumnSpanColumn(): number;
  /**
    * Returns the column which self is using to get the strings from to display in the internal entry.
    * @returns A column in the data source model of self. 
    */
  getEntryTextColumn(): number;
  /**
    * Returns whether the combo box grabs focus when it is clicked with the mouse. See Gtk.ComboBox.set_focus_on_click().
    * @returns True if the combo box grabs focus when it is clicked with the mouse. 
    */
  getFocusOnClick(): boolean;
  /**
    * Returns whether the combo box has an entry.
    * @returns whether there is an entry in self. 
    */
  getHasEntry(): boolean;
  /**
    * Returns the column which self is using to get string IDs for values from.
    * @returns A column in the data source model of self. 
    */
  getIdColumn(): number;
  /**
    * Returns the Gtk.TreeModel which is acting as data source for self.
    * @returns A Gtk.TreeModel which was passed during construction. 
    */
  getModel(): import('../Gtk').TreeModel;
  /**
    * Gets the accessible object corresponding to the combo box’s popup.
    * @returns the accessible object corresponding to the combo box’s popup. 
    */
  getPopupAccessible(): import('../Atk').Object;
  /**
    * Gets whether the popup uses a fixed width matching the allocated width of the combo box.
    * @returns True if the popup uses a fixed width 
    */
  getPopupFixedWidth(): boolean;
  /**
    * Returns the column with row span information for self.
    * @returns the row span column. 
    */
  getRowSpanColumn(): number;
  /**
    * Gets the current title of the menu in tearoff mode. See Gtk.ComboBox.set_add_tearoffs().
    * @returns the menu’s title in tearoff mode. This is an internal copy of the string which must not be freed. 
    */
  getTitle(): string;
  /**
    * Returns the wrap width which is used to determine the number of columns for the popup menu. If the wrap width is larger than 1, the combo box is in table mode.
    * @returns the wrap width. 
    */
  getWrapWidth(): number;
  /**
    * Hides the menu or dropdown list of self. 
    */
  popdown(): void;
  /**
    * Pops up the menu or dropdown list of self. 
    */
  popup(): void;
  /**
    * Pops up the menu or dropdown list of self, the popup window will be grabbed so only device and its associated pointer/keyboard are the only Gdk.Devices able to send events to it.
    * @param device a Gdk.Device 
    */
  popupForDevice(device: import('../Gdk').Device): void;
  /**
    * Sets the active item of self to be the item at index.
    * @param index An index in the model passed during construction, or -1 to have no active item 
    */
  setActive(index: number): void;
  /**
    * Changes the active row of self to the one that has an ID equal to active_id, or unsets the active row if active_id is None.  Rows having a None ID string cannot be made active by this function.
    * @param activeId the ID of the row to select, or None
    * @returns True if a row with a matching ID was found.  If a None active_id was given to unset the active row, the function always returns True. 
    */
  setActiveId(activeId: string | null): boolean;
  /**
    * Sets the current active item to be the one referenced by iter, or unsets the active item if iter is None.
    * @param iter The Gtk.TreeIter, or None 
    */
  setActiveIter(iter: import('../Gtk').TreeIter | null): void;
  /**
    * Sets whether the popup menu should have a tearoff menu item.
    * @param addTearoffs True to add tearoff menu items 
    */
  setAddTearoffs(addTearoffs: boolean): void;
  /**
    * Sets whether the dropdown button of the combo box should be always sensitive (Gtk.SensitivityType.ON), never sensitive (Gtk.SensitivityType.OFF) or only if there is at least one item to display (Gtk.SensitivityType.AUTO).
    * @param sensitivity specify the sensitivity of the dropdown button 
    */
  setButtonSensitivity(sensitivity: import('../Gtk').SensitivityType): void;
  /**
    * Sets the column with column span information for self to be column_span. The column span column contains integers which indicate how many columns an item should span.
    * @param columnSpan A column in the model passed during construction 
    */
  setColumnSpanColumn(columnSpan: number): void;
  /**
    * Sets the model column which self should use to get strings from to be text_column. The column text_column in the model of self must be of type GObject.TYPE_STRING.
    * @param textColumn A column in model to get the strings from for the internal entry 
    */
  setEntryTextColumn(textColumn: number): void;
  /**
    * Sets whether the combo box will grab focus when it is clicked with the mouse. Making mouse clicks not grab focus is useful in places like toolbars where you don’t want the keyboard focus removed from the main area of the application.
    * @param focusOnClick whether the combo box grabs focus when clicked with the mouse 
    */
  setFocusOnClick(focusOnClick: boolean): void;
  /**
    * Sets the model column which self should use to get string IDs for values from. The column id_column in the model of self must be of type GObject.TYPE_STRING.
    * @param idColumn A column in model to get string IDs for values from 
    */
  setIdColumn(idColumn: number): void;
  /**
    * Sets the model used by self to be model. Will unset a previously set model (if applicable). If model is None, then it will unset the model.
    * @param model A Gtk.TreeModel 
    */
  setModel(model: import('../Gtk').TreeModel | null): void;
  /**
    * Specifies whether the popup’s width should be a fixed width matching the allocated width of the combo box.
    * @param fixed whether to use a fixed popup width 
    */
  setPopupFixedWidth(fixed: boolean): void;
  /**
    * Sets the row separator function, which is used to determine whether a row should be drawn as a separator. If the row separator function is None, no separators are drawn. This is the default value.
    * @param func a Gtk.TreeViewRowSeparatorFunc
    * @param data user data to pass to func, or None 
    */
  setRowSeparatorFunc(func: import('../Gtk').treeViewRowSeparatorFunc, data: Object | null): void;
  /**
    * Sets the column with row span information for self to be row_span. The row span column contains integers which indicate how many rows an item should span.
    * @param rowSpan A column in the model passed during construction. 
    */
  setRowSpanColumn(rowSpan: number): void;
  /**
    * Sets the menu’s title in tearoff mode.
    * @param title a title for the menu in tearoff mode 
    */
  setTitle(title: string): void;
  /**
    * Sets the wrap width of self to be width. The wrap width is basically the preferred number of columns when you want the popup to be layed out in a table.
    * @param width Preferred number of columns 
    */
  setWrapWidth(width: number): void;
  /**
    * The item which is currently active 
    */
  active: number;
  /**
    * The value of the id column for the active row 
    */
  activeId: string;
  /**
    * Whether dropdowns should have a tearoff menu item deprecated 
    */
  addTearoffs: boolean;
  /**
    * Whether the dropdown button is sensitive when the model is empty 
    */
  buttonSensitivity: import('../Gtk').SensitivityType;
  /**
    * The Gtk.CellArea used to layout cells 
    */
  cellArea: import('../Gtk').CellArea;
  /**
    * TreeModel column containing the column span values 
    */
  columnSpanColumn: number;
  /**
    * The column in the combo box’s model to associate with strings from the entry if the combo was created with Gtk.ComboBox :has-entry = True 
    */
  entryTextColumn: number;
  /**
    * Whether combo box has an entry 
    */
  hasEntry: boolean;
  /**
    * Whether the combo box draws a frame around the child 
    */
  hasFrame: boolean;
  /**
    * The column in the combo box’s model that provides string IDs for the values in the model 
    */
  idColumn: number;
  /**
    * The model for the combo box 
    */
  model: import('../Gtk').TreeModel;
  /**
    * Whether the popup’s width should be a fixed width matching the allocated width of the combo box 
    */
  popupFixedWidth: boolean;
  /**
    * Whether the combo’s dropdown is shown 
    */
  readonly popupShown: boolean;
  /**
    * TreeModel column containing the row span values 
    */
  rowSpanColumn: number;
  /**
    * A title that may be displayed by the window manager when the popup is torn-off deprecated 
    */
  tearoffTitle: string;
  /**
    * Wrap width for laying out the items in a grid 
    */
  wrapWidth: number;
}

