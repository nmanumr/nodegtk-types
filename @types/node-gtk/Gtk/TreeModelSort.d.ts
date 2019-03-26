import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface TreeModelSort extends GObject.Object, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable { }

/**
  * The Gtk.TreeModelSort is a model which implements the Gtk.TreeSortable
interface.  It does not hold any data itself, but rather is created with
a child model and proxies its data.  It has identical column types to
this child model, and the changes in the child are propagated.  The
primary purpose of this model is to provide a way to sort a different
model without modifying it. Note that the sort function used by
Gtk.TreeModelSort is not guaranteed to be stable. 
  */
export declare class TreeModelSort {
  /**
    * This function should almost never be called.  It clears the self of any cached iterators that haven’t been reffed with Gtk.TreeModel.ref_node().  This might be useful if the child model being sorted is static (and doesn’t change often) and there has been a lot of unreffed access to nodes.  As a side effect of this function, all unreffed iters will be invalid. 
    */
  clearCache(): void;
  /**
    * Sets sort_iter to point to the row in self that corresponds to the row pointed at by child_iter.  If sort_iter was not set, False is returned.  Note: a boolean is only returned since 2.14.
    * @param childIter A valid Gtk.TreeIter pointing to a row on the child model
    * @returns True, if sort_iter was set, i.e. if sort_iter is a valid iterator pointer to a visible row in the child model.  sort_iter:An uninitialized Gtk.TreeIter. 
    */
  convertChildIterToIter(childIter: import('../Gtk').TreeIter): [boolean, import('../Gtk').TreeIter];
  /**
    * Converts child_path to a path relative to self.  That is, child_path points to a path in the child model.  The returned path will point to the same row in the sorted model.  If child_path isn’t a valid path on the child model, then None is returned.
    * @param childPath A Gtk.TreePath to convert
    * @returns A newly allocated Gtk.TreePath, or None 
    */
  convertChildPathToPath(childPath: import('../Gtk').TreePath): import('../Gtk').TreePath | null;
  /**
    * Sets child_iter to point to the row pointed to by sorted_iter.
    * @param sortedIter A valid Gtk.TreeIter pointing to a row on self.
    * @returns An uninitialized Gtk.TreeIter 
    */
  convertIterToChildIter(sortedIter: import('../Gtk').TreeIter): import('../Gtk').TreeIter;
  /**
    * Converts sorted_path to a path on the child model of self. That is, sorted_path points to a location in self.  The returned path will point to the same location in the model not being sorted.  If sorted_path does not point to a location in the child model, None is returned.
    * @param sortedPath A Gtk.TreePath to convert
    * @returns A newly allocated Gtk.TreePath, or None 
    */
  convertPathToChildPath(sortedPath: import('../Gtk').TreePath): import('../Gtk').TreePath | null;
  /**
    * Returns the model the Gtk.TreeModelSort is sorting.
    * @returns the “child model” being sorted 
    */
  getModel(): import('../Gtk').TreeModel;
  /**
    * This function is slow. Only use it for debugging and/or testing purposes.
    * @param iter A Gtk.TreeIter.
    * @returns True if the iter is valid, False if the iter is invalid. 
    */
  iterIsValid(iter: import('../Gtk').TreeIter): boolean;
  /**
    * This resets the default sort function to be in the “unsorted” state.  That is, it is in the same order as the child model. It will re-sort the model to be in the same order as the child model only if the Gtk.TreeModelSort is in “unsorted” state. 
    */
  resetDefaultSortFunc(): void;
  /**
    * The model for the TreeModelSort to sort 
    */
  model: import('../Gtk').TreeModel;
}

