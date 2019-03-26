import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface ListStore extends GObject.Object, Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable { }

/**
  * The Gtk.ListStore object is a list model for use with a Gtk.TreeView
widget.  It implements the Gtk.TreeModel interface, and consequentialy,
can use all of the methods available there.  It also implements the
Gtk.TreeSortable interface so it can be sorted by the view.
Finally, it also implements the tree
drag and drop
interfaces. 
  */
export declare class ListStore {
  /**
    * Non-vararg creation function.  Used primarily by language bindings.
    * @param types an array of GObject.GType types for the columns, from first to last
    * @returns a new Gtk.ListStore 
    */
  static new(types: import('../GObject').GType): import('../Gtk').ListStore;
  /**
    * If row is None the appended row will be empty and to fill in values you need to call Gtk.ListStore.set() or Gtk.ListStore.set_value().
    * @param row a list of values to apply to the newly append row or None
    * @returns Gtk.TreeIter of the appended row 
    */
  append(row: Object | null): import('../Gtk').TreeIter;
  /**
    * Removes all rows from the list store. 
    */
  clear(): void;
  /**
    * If row is None the inserted row will be empty and to fill in values you need to call Gtk.ListStore.set() or Gtk.ListStore.set_value().
    * @param position the position the new row will be inserted at
    * @param row a list of values to apply to the newly inserted row or None
    * @returns Gtk.TreeIter of the inserted row 
    */
  insert(position: number, row: Object | null): import('../Gtk').TreeIter;
  /**
    * Inserts a new row after sibling. If sibling is None, then the row will be prepended to the beginning of the list.
    * @param sibling A valid Gtk.TreeIter, or None
    * @param row a list of values to apply to the newly inserted row or None
    * @returns Gtk.TreeIter pointing to the new row 
    */
  insertAfter(sibling: import('../Gtk').TreeIter | null, row: Object | null): import('../Gtk').TreeIter;
  /**
    * Inserts a new row before sibling. If sibling is None, then the row will be appended to the end of the list.
    * @param sibling A valid Gtk.TreeIter, or None
    * @param row a list of values to apply to the newly inserted row or None
    * @returns Gtk.TreeIter pointing to the new row 
    */
  insertBefore(sibling: import('../Gtk').TreeIter | null, row: Object | null): import('../Gtk').TreeIter;
  /**
    * A variant of gtk_list_store_insert_with_values() which takes the columns and values as two arrays, instead of varargs. This function is mainly intended for language-bindings.
    * @param position position to insert the new row, or -1 for last
    * @param columns an array of column numbers
    * @param values an array of GValues
    * @returns An unset Gtk.TreeIter to set to the new row, or None. 
    */
  insertWithValuesv(position: number, columns: number, values: import('../GObject').Value): import('../Gtk').TreeIter;
  /**
    * This function is slow. Only use it for debugging and/or testing purposes.
    * @param iter A Gtk.TreeIter.
    * @returns True if the iter is valid, False if the iter is invalid. 
    */
  iterIsValid(iter: import('../Gtk').TreeIter): boolean;
  /**
    * Moves iter in self to the position after position. Note that this function only works with unsorted stores. If position is None, iter will be moved to the start of the list.
    * @param iter A Gtk.TreeIter.
    * @param position A Gtk.TreeIter or None. 
    */
  moveAfter(iter: import('../Gtk').TreeIter, position: import('../Gtk').TreeIter | null): void;
  /**
    * Moves iter in self to the position before position. Note that this function only works with unsorted stores. If position is None, iter will be moved to the end of the list.
    * @param iter A Gtk.TreeIter.
    * @param position A Gtk.TreeIter, or None. 
    */
  moveBefore(iter: import('../Gtk').TreeIter, position: import('../Gtk').TreeIter | null): void;
  /**
    * If row is None the prepended row will be empty and to fill in values you need to call Gtk.ListStore.set() or Gtk.ListStore.set_value().
    * @param row a list of values to apply to the newly prepend row or None
    * @returns Gtk.TreeIter of the prepended row 
    */
  prepend(row: Object | null): import('../Gtk').TreeIter;
  /**
    * Removes the given row from the list store.  After being removed, iter is set to be the next valid row, or invalidated if it pointed to the last row in self.
    * @param iter A valid Gtk.TreeIter
    * @returns True if iter is valid, False if not. 
    */
  remove(iter: import('../Gtk').TreeIter): boolean;
  /**
    * Reorders self to follow the order indicated by new_order. Note that this function only works with unsorted stores.
    * @param newOrder an array of integers mapping the new position of each child to its old position before the re-ordering, i.e. new_order [newpos] = oldpos. It must have exactly as many items as the list store’s length. 
    */
  reorder(newOrder: number): void;
  /**
    * A variant of gtk_list_store_set_valist() which takes the columns and values as two arrays, instead of varargs. This function is mainly intended for language-bindings and in case the number of columns to change is not known until run-time.
    * @param iter A valid Gtk.TreeIter for the row being modified
    * @param columns an array of column numbers
    * @param values an array of GValues 
    */
  set(iter: import('../Gtk').TreeIter, columns: number, values: import('../GObject').Value): void;
  /**
    * This function is meant primarily for GObject.Objects that inherit from Gtk.ListStore, and should only be used when constructing a new Gtk.ListStore.  It will not function after a row has been added, or a method on the Gtk.TreeModel interface is called.
    * @param types An array length n of GObject.GTypes 
    */
  setColumnTypes(types: import('../GObject').GType): void;
  /**
    * Sets the data in the cell specified by iter and column. The type of value must be convertible to the type of the column.
    * @param iter A valid Gtk.TreeIter for the row being modified
    * @param column column number to modify
    * @param value new value for the cell 
    */
  setValue(iter: import('../Gtk').TreeIter, column: number, value: import('../GObject').Value): void;
  /**
    * Swaps a and b in self. Note that this function only works with unsorted stores.
    * @param a A Gtk.TreeIter.
    * @param b Another Gtk.TreeIter. 
    */
  swap(a: import('../Gtk').TreeIter, b: import('../Gtk').TreeIter): void;
}

