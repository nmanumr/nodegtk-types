import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface TreeStore extends GObject.Object, Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable { }

/**
  * The Gtk.TreeStore object is a list model for use with a Gtk.TreeView
widget.  It implements the Gtk.TreeModel interface, and consequentially,
can use all of the methods available there.  It also implements the
Gtk.TreeSortable interface so it can be sorted by the view.  Finally,
it also implements the tree
drag and drop
interfaces. 
  */
export declare class TreeStore {
  /**
    * Non vararg creation function.  Used primarily by language bindings.
    * @param types an array of GObject.GType types for the columns, from first to last
    * @returns a new Gtk.TreeStore 
    */
  static new(types: import('../GObject').GType): import('../Gtk').TreeStore;
  /**
    * Appends a new row to self. If parent is not None, then it will append the new row after the last child of parent, otherwise it will append a row to the top level.
    * @param parent A valid Gtk.TreeIter, or None
    * @param row a list of values to apply to the newly inserted row or None
    * @returns obj:Gtk.TreeIter pointing to the inserted row 
    */
  append(parent: import('../Gtk').TreeIter | null, row: Object | null): import('../Gtk').TreeIter;
  /**
    * Removes all rows from self 
    */
  clear(): void;
  /**
    * Creates a new row at position.  If parent is not None, then the row will be made a child of parent.  Otherwise, the row will be created at the toplevel. If position is -1 or is larger than the number of rows at that level, then the new row will be inserted to the end of the list.
    * @param parent A valid Gtk.TreeIter, or None
    * @param position position to insert the new row, or -1 for last
    * @param row a list of values to apply to the newly inserted row or None
    * @returns a Gtk.TreeIter pointing to the new row 
    */
  insert(parent: import('../Gtk').TreeIter | null, position: number, row: Object | null): import('../Gtk').TreeIter;
  /**
    * Inserts a new row after sibling.  If sibling is None, then the row will be prepended to parent ‘s children.  If parent and sibling are None, then the row will be prepended to the toplevel.  If both sibling and parent are set, then parent must be the parent of sibling.  When sibling is set, parent is optional.
    * @param parent A valid Gtk.TreeIter, or None
    * @param sibling A valid Gtk.TreeIter, or None
    * @param row a list of values to apply to the newly inserted row or None
    * @returns a Gtk.TreeIter pointing to the new row 
    */
  insertAfter(parent: import('../Gtk').TreeIter | null, sibling: import('../Gtk').TreeIter | null, row: Object | null): import('../Gtk').TreeIter;
  /**
    * Inserts a new row before sibling. If sibling is None, then the row will be appended to parent ‘s children. If parent and sibling are None, then the row will be appended to the toplevel.  If both sibling and parent are set, then parent must be the parent of sibling.  When sibling is set, parent is optional.
    * @param parent A valid Gtk.TreeIter, or None
    * @param sibling A valid Gtk.TreeIter, or None
    * @param row a list of values to apply to the newly inserted row or None
    * @returns a Gtk.TreeIter pointing to the new row 
    */
  insertBefore(parent: import('../Gtk').TreeIter | null, sibling: import('../Gtk').TreeIter | null, row: Object | null): import('../Gtk').TreeIter;
  /**
    * A variant of Gtk.TreeStore.insert_with_values() which takes the columns and values as two arrays, instead of varargs.  This function is mainly intended for language bindings.
    * @param parent A valid Gtk.TreeIter, or None
    * @param position position to insert the new row, or -1 for last
    * @param columns an array of column numbers
    * @param values an array of GValues
    * @returns An unset Gtk.TreeIter to set the new row, or None. 
    */
  insertWithValues(parent: import('../Gtk').TreeIter | null, position: number, columns: number, values: import('../GObject').Value): import('../Gtk').TreeIter;
  /**
    * Returns True if iter is an ancestor of descendant.  That is, iter is the parent (or grandparent or great-grandparent) of descendant.
    * @param iter A valid Gtk.TreeIter
    * @param descendant A valid Gtk.TreeIter
    * @returns True, if iter is an ancestor of descendant 
    */
  isAncestor(iter: import('../Gtk').TreeIter, descendant: import('../Gtk').TreeIter): boolean;
  /**
    * Returns the depth of iter.  This will be 0 for anything on the root level, 1 for anything down a level, etc.
    * @param iter A valid Gtk.TreeIter
    * @returns The depth of iter 
    */
  iterDepth(iter: import('../Gtk').TreeIter): number;
  /**
    * WARNING: This function is slow. Only use it for debugging and/or testing purposes.
    * @param iter A Gtk.TreeIter.
    * @returns True if the iter is valid, False if the iter is invalid. 
    */
  iterIsValid(iter: import('../Gtk').TreeIter): boolean;
  /**
    * Moves iter in self to the position after position. iter and position should be in the same level. Note that this function only works with unsorted stores. If position is None, iter will be moved to the start of the level.
    * @param iter A Gtk.TreeIter.
    * @param position A Gtk.TreeIter. 
    */
  moveAfter(iter: import('../Gtk').TreeIter, position: import('../Gtk').TreeIter | null): void;
  /**
    * Moves iter in self to the position before position. iter and position should be in the same level. Note that this function only works with unsorted stores. If position is None, iter will be moved to the end of the level.
    * @param iter A Gtk.TreeIter.
    * @param position A Gtk.TreeIter or None. 
    */
  moveBefore(iter: import('../Gtk').TreeIter, position: import('../Gtk').TreeIter | null): void;
  /**
    * Prepends a new row to self. If parent is not None, then it will prepend the new row before the first child of parent, otherwise it will prepend a row to the top level.
    * @param parent A valid Gtk.TreeIter, or None
    * @param row a list of values to apply to the newly inserted row or None
    * @returns obj:Gtk.TreeIter pointing to the inserted row 
    */
  prepend(parent: import('../Gtk').TreeIter | null, row: Object | null): import('../Gtk').TreeIter;
  /**
    * Removes iter from self.  After being removed, iter is set to the next valid row at that level, or invalidated if it previously pointed to the last one.
    * @param iter A valid Gtk.TreeIter
    * @returns True if iter is still valid, False if not. 
    */
  remove(iter: import('../Gtk').TreeIter): boolean;
  /**
    * A variant of gtk_tree_store_set_valist() which takes the columns and values as two arrays, instead of varargs.  This function is mainly intended for language bindings or in case the number of columns to change is not known until run-time.
    * @param iter A valid Gtk.TreeIter for the row being modified
    * @param columns an array of column numbers
    * @param values an array of GValues 
    */
  set(iter: import('../Gtk').TreeIter, columns: number, values: import('../GObject').Value): void;
  /**
    * This function is meant primarily for GObject.Objects that inherit from Gtk.TreeStore, and should only be used when constructing a new Gtk.TreeStore.  It will not function after a row has been added, or a method on the Gtk.TreeModel interface is called.
    * @param types An array of GObject.GType types, one for each column 
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
    * Swaps a and b in the same level of self. Note that this function only works with unsorted stores.
    * @param a A Gtk.TreeIter.
    * @param b Another Gtk.TreeIter. 
    */
  swap(a: import('../Gtk').TreeIter, b: import('../Gtk').TreeIter): void;
}

