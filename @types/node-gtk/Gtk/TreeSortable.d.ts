import * as GObject from '../GObject';
export declare interface TreeSortable extends GObject.GInterface { }

/**
  * Gtk.TreeSortable is an interface to be implemented by tree models which
support sorting. The Gtk.TreeView uses the methods provided by this interface
to sort the model. 
  */
export declare interface TreeSortable {
/**
  * Returns sort_column_id and order with the current sort column and the order. It returns (None, None) if the sort_column_id is Gtk.TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or Gtk.TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
  * @returns (None, None) if the sort column is one of the special sort column ids. Otherwise a tuple containing:  sort_column_id:The sort column id order:The Gtk.SortType 
  */
getSortColumnId(): [number, import('../Gtk').SortType | null,  null];
/**
  * Returns True if the model has a default sort function. This is used primarily by GtkTreeViewColumns in order to determine if a model can go back to the default state, or not.
  * @returns True, if the model has a default sort function 
  */
hasDefaultSortFunc(): boolean;
/**
  * Sets the default comparison function used when sorting to be sort_func. If the current sort column id of self is Gtk.TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using this function.
  * @param sortFunc The comparison function
  * @param userData User data to pass to sort_func, or None 
  */
setDefaultSortFunc(sortFunc: import('../Gtk').treeIterCompareFunc, userData: Object | null): void;
/**
  * Sets the current sort column to be sort_column_id. The self will resort itself to reflect this change, after emitting a Gtk.TreeSortable ::sort-column-changed signal. sort_column_id may either be a regular column id, or one of the following special values:
  * @param sortColumnId the sort column id to set
  * @param order The sort order of the column 
  */
setSortColumnId(sortColumnId: number, order: import('../Gtk').SortType): void;
/**
  * Sets the comparison function used when sorting to be sort_func. If the current sort column id of self is the same as sort_column_id, then the model will sort using this function.
  * @param sortColumnId the sort column id to set the function for
  * @param sortFunc The comparison function
  * @param userData User data to pass to sort_func, or None 
  */
setSortFunc(sortColumnId: number, sortFunc: import('../Gtk').treeIterCompareFunc, userData: Object | null): void;
/**
  * Emits a Gtk.TreeSortable ::sort-column-changed signal on self. 
  */
sortColumnChanged(): void;
}

