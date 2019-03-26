import * as GObject from '../GObject';
export declare interface TreeSelection extends GObject.Object { }

/**
  * The Gtk.TreeSelection object is a helper object to manage the selection
for a Gtk.TreeView widget.  The Gtk.TreeSelection object is
automatically created when a new Gtk.TreeView widget is created, and
cannot exist independently of this widget.  The primary reason the
Gtk.TreeSelection objects exists is for cleanliness of code and API.
That is, there is no conceptual reason all these functions could not be
methods on the Gtk.TreeView widget instead of a separate function. 
  */
export declare class TreeSelection {
  /**
    * Returns the number of rows that have been selected in tree.
    * @returns The number of rows selected. 
    */
  countSelectedRows(): number;
  /**
    * Gets the selection mode for self. See Gtk.TreeSelection.set_mode().
    * @returns the current selection mode 
    */
  getMode(): import('../Gtk').SelectionMode;
  /**
    * Sets iter to the currently selected node if self is set to Gtk.SelectionMode.SINGLE or Gtk.SelectionMode.BROWSE.  iter may be None if you just want to test if self has any selected nodes.  model is filled with the current model as a convenience.  This function will not work if you use self is Gtk.SelectionMode.MULTIPLE.
    * @returns model:the Gtk.TreeModel iter:The Gtk.TreeIter or None 
    */
  getSelected(): [import('../Gtk').TreeModel, import('../Gtk').TreeIter | null];
  /**
    * Creates a list of path of all selected rows. Additionally, if you are planning on modifying the model after calling this function, you may want to convert the returned list into a list of Gtk.TreeRowReferences. To do this, you can use Gtk.TreeRowReference.new().
    * @returns A list containing a Gtk.TreePath for each selected row and a Gtk.TreeModel or None. 
    */
  getSelectedRows(): [import('../Gtk').TreeModel, import('../Gtk').TreePath[]];
  /**
    * Returns the tree view associated with self.
    * @returns A Gtk.TreeView 
    */
  getTreeView(): import('../Gtk').TreeView;
  /**
    * Returns True if the row at iter is currently selected.
    * @param iter A valid Gtk.TreeIter
    * @returns True, if iter is selected 
    */
  iterIsSelected(iter: import('../Gtk').TreeIter): boolean;
  /**
    * Returns True if the row pointed to by path is currently selected.  If path does not point to a valid location, False is returned
    * @param path A Gtk.TreePath to check selection on.
    * @returns True if path is selected. 
    */
  pathIsSelected(path: import('../Gtk').TreePath): boolean;
  /**
    * Selects all the nodes. self must be set to Gtk.SelectionMode.MULTIPLE mode. 
    */
  selectAll(): void;
  /**
    * Selects the specified iterator.
    * @param iter The Gtk.TreeIter to be selected. 
    */
  selectIter(iter: import('../Gtk').TreeIter): void;
  /**
    * Select the row at path.
    * @param path The Gtk.TreePath to be selected. 
    */
  selectPath(path: import('../Gtk').TreePath): void;
  /**
    * Selects a range of nodes, determined by start_path and end_path inclusive. self must be set to Gtk.SelectionMode.MULTIPLE mode.
    * @param startPath The initial node of the range.
    * @param endPath The final node of the range. 
    */
  selectRange(startPath: import('../Gtk').TreePath, endPath: import('../Gtk').TreePath): void;
  /**
    * Calls a function for each selected node. Note that you cannot modify the tree or selection from within this function. As a result, Gtk.TreeSelection.get_selected_rows() might be more useful.
    * @param func The function to call for each selected node.
    * @param data user data to pass to the function. 
    */
  selectedForeach(func: import('../Gtk').treeSelectionForeachFunc, data: Object | null): void;
  /**
    * Sets the selection mode of the self.  If the previous type was Gtk.SelectionMode.MULTIPLE, then the anchor is kept selected, if it was previously selected.
    * @param type The selection mode 
    */
  setMode(type: import('../Gtk').SelectionMode): void;
  /**
    * Sets the selection function.
    * @param func The selection function. May be None
    * @param data The selection function’s data. May be None 
    */
  setSelectFunction(func: import('../Gtk').treeSelectionFunc | null, data: Object | null): void;
  /**
    * Unselects all the nodes. 
    */
  unselectAll(): void;
  /**
    * Unselects the specified iterator.
    * @param iter The Gtk.TreeIter to be unselected. 
    */
  unselectIter(iter: import('../Gtk').TreeIter): void;
  /**
    * Unselects the row at path.
    * @param path The Gtk.TreePath to be unselected. 
    */
  unselectPath(path: import('../Gtk').TreePath): void;
  /**
    * Unselects a range of nodes, determined by start_path and end_path inclusive.
    * @param startPath The initial node of the range.
    * @param endPath The initial node of the range. 
    */
  unselectRange(startPath: import('../Gtk').TreePath, endPath: import('../Gtk').TreePath): void;
  /**
    * Selection mode 
    */
  mode: import('../Gtk').SelectionMode;
}

