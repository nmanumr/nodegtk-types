import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface TreeModelFilter extends GObject.Object, Gtk.TreeDragSource, Gtk.TreeModel { }

/**
  * A Gtk.TreeModelFilter is a tree model which wraps another tree model,
and can do the following things: 
  */
export declare class TreeModelFilter {
  /**
    * This function should almost never be called. It clears the self of any cached iterators that haven’t been reffed with Gtk.TreeModel.ref_node(). This might be useful if the child model being filtered is static (and doesn’t change often) and there has been a lot of unreffed access to nodes. As a side effect of this function, all unreffed iters will be invalid. 
    */
  clearCache(): void;
  /**
    * Sets filter_iter to point to the row in self that corresponds to the row pointed at by child_iter.  If filter_iter was not set, False is returned.
    * @param childIter A valid Gtk.TreeIter pointing to a row on the child model.
    * @returns True, if filter_iter was set, i.e. if child_iter is a valid iterator pointing to a visible row in child model.  filter_iter:An uninitialized Gtk.TreeIter. 
    */
  convertChildIterToIter(childIter: import('../Gtk').TreeIter): [boolean, import('../Gtk').TreeIter];
  /**
    * Converts child_path to a path relative to self. That is, child_path points to a path in the child model. The rerturned path will point to the same row in the filtered model. If child_path isn’t a valid path on the child model or points to a row which is not visible in self, then None is returned.
    * @param childPath A Gtk.TreePath to convert.
    * @returns A newly allocated Gtk.TreePath, or None. 
    */
  convertChildPathToPath(childPath: import('../Gtk').TreePath): import('../Gtk').TreePath | null;
  /**
    * Sets child_iter to point to the row pointed to by filter_iter.
    * @param filterIter A valid Gtk.TreeIter pointing to a row on self.
    * @returns An uninitialized Gtk.TreeIter. 
    */
  convertIterToChildIter(filterIter: import('../Gtk').TreeIter): import('../Gtk').TreeIter;
  /**
    * Converts filter_path to a path on the child model of self. That is, filter_path points to a location in self. The returned path will point to the same location in the model not being filtered. If filter_path does not point to a location in the child model, None is returned.
    * @param filterPath A Gtk.TreePath to convert.
    * @returns A newly allocated Gtk.TreePath, or None. 
    */
  convertPathToChildPath(filterPath: import('../Gtk').TreePath): import('../Gtk').TreePath | null;
  /**
    * Returns a pointer to the child model of self.
    * @returns A pointer to a Gtk.TreeModel. 
    */
  getModel(): import('../Gtk').TreeModel;
  /**
    * Emits ::row_changed for each row in the child model, which causes the filter to re-evaluate whether a row is visible or not. 
    */
  refilter(): void;
  /**
    * With the n_columns and types parameters, you give an array of column types for this model (which will be exposed to the parent model/view). The func, data and destroy parameters are for specifying the modify function. The modify function will get called for each data access, the goal of the modify function is to return the data which should be displayed at the location specified using the parameters of the modify function.
    * @param types The GObject.GTypes of the columns.
    * @param func A Gtk.TreeModelFilterModifyFunc
    * @param data User data to pass to the modify function, or None. 
    */
  setModifyFunc(types: import('../GObject').GType, func: import('../Gtk').treeModelFilterModifyFunc, data: Object | null): void;
  /**
    * Set the value of the child model 
    */
  setValue(): void;
  /**
    * Sets column of the child_model to be the column where self should look for visibility information. columns should be a column of type GObject.TYPE_BOOLEAN, where True means that a row is visible, and False if not.
    * @param column A int which is the column containing the visible information 
    */
  setVisibleColumn(column: number): void;
  /**
    * Sets the visible function used when filtering the self to be func. The function should return True if the given row should be visible and False otherwise.
    * @param func A Gtk.TreeModelFilterVisibleFunc, the visible function
    * @param data User data to pass to the visible function, or None 
    */
  setVisibleFunc(func: import('../Gtk').treeModelFilterVisibleFunc, data: Object | null): void;
  /**
    * The model for the filtermodel to filter 
    */
  childModel: import('../Gtk').TreeModel;
  /**
    * The virtual root (relative to the child model) for this filtermodel 
    */
  virtualRoot: import('../Gtk').TreePath;
}

