import * as GObject from '../GObject';

/**
  * Atk.Selection should be implemented by UI components with children
which are exposed by #atk_object_ref_child and
#atk_object_get_n_children, if the use of the parent UI component
ordinarily involves selection of one or more of the objects
corresponding to those Atk.Object children - for example,
selectable lists. 
  */
export declare interface Selection extends GObject.GInterface {
  /**
    * Adds the specified accessible child of the object to the object’s selection.
    * @param i a int specifying the child index.
    * @returns True if success, False otherwise. 
    */
  addSelection(i: number): boolean;
  /**
    * Clears the selection in the object so that no children in the object are selected.
    * @returns True if success, False otherwise. 
    */
  clearSelection(): boolean;
  /**
    * Gets the number of accessible children currently selected. Note: callers should not rely on None or on a zero value for indication of whether Atk.SelectionIface is implemented, they should use type checking/interface checking macros or the atk_get_accessible_value() convenience method.
    * @returns a int representing the number of items selected, or 0 if self does not implement this interface. 
    */
  getSelectionCount(): number;
  /**
    * Determines if the current child of this object is selected Note: callers should not rely on None or on a zero value for indication of whether Atk.SelectionIface is implemented, they should use type checking/interface checking macros or the atk_get_accessible_value() convenience method.
    * @param i a int specifying the child index.
    * @returns a bool representing the specified child is selected, or 0 if self does not implement this interface. 
    */
  isChildSelected(i: number): boolean;
  /**
    * Gets a reference to the accessible object representing the specified selected child of the object. Note: callers should not rely on None or on a zero value for indication of whether Atk.SelectionIface is implemented, they should use type checking/interface checking macros or the atk_get_accessible_value() convenience method.
    * @param i a int specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
    * @returns an Atk.Object representing the selected accessible, or None if self does not implement this interface. 
    */
  refSelection(i: number): import('../Atk').Object | null;
  /**
    * Removes the specified child of the object from the object’s selection.
    * @param i a int specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
    * @returns True if success, False otherwise. 
    */
  removeSelection(i: number): boolean;
  /**
    * Causes every child of the object to be selected if the object supports multiple selections.
    * @returns True if success, False otherwise. 
    */
  selectAllSelection(): boolean;
}

