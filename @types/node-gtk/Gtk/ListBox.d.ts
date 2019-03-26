import * as Gtk from '../Gtk';
export declare interface ListBox extends Gtk.Container { }

/**
  * A Gtk.ListBox is a vertical container that contains Gtk.ListBoxRow
children. These rows can by dynamically sorted and filtered, and
headers can be added dynamically depending on the row content.
It also allows keyboard and mouse navigation and selection like
a typical list. 
  */
export declare class ListBox {
  /**
    * Creates a new Gtk.ListBox container.
    * @returns a new Gtk.ListBox 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Binds model to self.
    * @param model the Gio.ListModel to be bound to self
    * @param createWidgetFunc a function that creates widgets for items or None in case you also passed None as model
    * @param userData user data passed to create_widget_func 
    */
  bindModel(model: import('../Gio').ListModel | null, createWidgetFunc: import('../Gtk').listBoxCreateWidgetFunc | null, userData: Object | null): void;
  /**
    * This is a helper function for implementing DnD onto a Gtk.ListBox. The passed in row will be highlighted via Gtk.Widget.drag_highlight(), and any previously highlighted row will be unhighlighted.
    * @param row a Gtk.ListBoxRow 
    */
  dragHighlightRow(row: import('../Gtk').ListBoxRow): void;
  /**
    * If a row has previously been highlighted via Gtk.ListBox.drag_highlight_row() it will have the highlight removed. 
    */
  dragUnhighlightRow(): void;
  /**
    * Returns whether rows activate on single clicks.
    * @returns True if rows are activated on single click, False otherwise 
    */
  getActivateOnSingleClick(): boolean;
  /**
    * Gets the adjustment (if any) that the widget uses to for vertical scrolling.
    * @returns the adjustment 
    */
  getAdjustment(): import('../Gtk').Adjustment;
  /**
    * Gets the n-th child in the list (not counting headers). If _index is negative or larger than the number of items in the list, None is returned.
    * @param index the index of the row
    * @returns the child Gtk.Widget or None 
    */
  getRowAtIndex(index: number): import('../Gtk').ListBoxRow | null;
  /**
    * Gets the row at the y position.
    * @param y position
    * @returns the row or None in case no row exists for the given y coordinate. 
    */
  getRowAtY(y: number): import('../Gtk').ListBoxRow | null;
  /**
    * Gets the selected row.
    * @returns the selected row 
    */
  getSelectedRow(): import('../Gtk').ListBoxRow;
  /**
    * Creates a list of all selected children.
    * @returns A GLib.List containing the Gtk.Widget for each selected child. Free with g_list_free() when done. 
    */
  getSelectedRows(): import('../Gtk').ListBoxRow[];
  /**
    * Gets the selection mode of the listbox.
    * @returns a Gtk.SelectionMode 
    */
  getSelectionMode(): import('../Gtk').SelectionMode;
  /**
    * Insert the child into the self at position. If a sort function is set, the widget will actually be inserted at the calculated position and this function has the same effect of Gtk.Container.add().
    * @param child the Gtk.Widget to add
    * @param position the position to insert child in 
    */
  insert(child: import('../Gtk').Widget, position: number): void;
  /**
    * Update the filtering for all rows. Call this when result of the filter function on the self is changed due to an external factor. For instance, this would be used if the filter function just looked for a specific search string and the entry with the search string has changed. 
    */
  invalidateFilter(): void;
  /**
    * Update the separators for all rows. Call this when result of the header function on the self is changed due to an external factor. 
    */
  invalidateHeaders(): void;
  /**
    * Update the sorting for all rows. Call this when result of the sort function on the self is changed due to an external factor. 
    */
  invalidateSort(): void;
  /**
    * Prepend a widget to the list. If a sort function is set, the widget will actually be inserted at the calculated position and this function has the same effect of Gtk.Container.add().
    * @param child the Gtk.Widget to add 
    */
  prepend(child: import('../Gtk').Widget): void;
  /**
    * Select all children of self, if the selection mode allows it. 
    */
  selectAll(): void;
  /**
    * Make row the currently selected row.
    * @param row The row to select or None 
    */
  selectRow(row: import('../Gtk').ListBoxRow | null): void;
  /**
    * Calls a function for each selected child.
    * @param func the function to call for each selected child
    * @param data user data to pass to the function 
    */
  selectedForeach(func: import('../Gtk').listBoxForeachFunc, data: Object | null): void;
  /**
    * If single is True, rows will be activated when you click on them, otherwise you need to double-click.
    * @param single a boolean 
    */
  setActivateOnSingleClick(single: boolean): void;
  /**
    * Sets the adjustment (if any) that the widget uses to for vertical scrolling. For instance, this is used to get the page size for PageUp/Down key handling.
    * @param adjustment the adjustment, or None 
    */
  setAdjustment(adjustment: import('../Gtk').Adjustment | null): void;
  /**
    * By setting a filter function on the self one can decide dynamically which of the rows to show. For instance, to implement a search function on a list that filters the original list to only show the matching rows.
    * @param filterFunc callback that lets you filter which rows to show
    * @param userData user data passed to filter_func 
    */
  setFilterFunc(filterFunc: import('../Gtk').listBoxFilterFunc | null, userData: Object | null): void;
  /**
    * By setting a header function on the self one can dynamically add headers in front of rows, depending on the contents of the row and its position in the list. For instance, one could use it to add headers in front of the first item of a new kind, in a list sorted by the kind.
    * @param updateHeader callback that lets you add row headers
    * @param userData user data passed to update_header 
    */
  setHeaderFunc(updateHeader: import('../Gtk').listBoxUpdateHeaderFunc | null, userData: Object | null): void;
  /**
    * Sets the placeholder widget that is shown in the list when it doesn’t display any visible children.
    * @param placeholder a Gtk.Widget or None 
    */
  setPlaceholder(placeholder: import('../Gtk').Widget | null): void;
  /**
    * Sets how selection works in the listbox. See Gtk.SelectionMode for details.
    * @param mode The Gtk.SelectionMode 
    */
  setSelectionMode(mode: import('../Gtk').SelectionMode): void;
  /**
    * By setting a sort function on the self one can dynamically reorder the rows of the list, based on the contents of the rows.
    * @param sortFunc the sort function
    * @param userData user data passed to sort_func 
    */
  setSortFunc(sortFunc: import('../Gtk').listBoxSortFunc | null, userData: Object | null): void;
  /**
    * Unselect all children of self, if the selection mode allows it. 
    */
  unselectAll(): void;
  /**
    * Unselects a single row of self, if the selection mode allows it.
    * @param row the row to unselected 
    */
  unselectRow(row: import('../Gtk').ListBoxRow): void;
  /**
    * Activate row on a single click 
    */
  activateOnSingleClick: boolean;
  /**
    * The selection mode 
    */
  selectionMode: import('../Gtk').SelectionMode;
}

