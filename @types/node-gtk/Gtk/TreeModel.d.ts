import * as GObject from '../GObject';
export declare interface TreeModel extends GObject.GInterface { }

/**
  * The Gtk.TreeModel interface defines a generic tree interface for
use by the Gtk.TreeView widget. It is an abstract interface, and
is designed to be usable with any appropriate data structure. The
programmer just has to implement this interface on their own data
type for it to be viewable by a Gtk.TreeView widget. 
  */
export declare interface TreeModel {
  /**
    * Creates a new Gtk.TreeModel, with self as the child_model and root as the virtual root.
    * @param root A Gtk.TreePath or None.
    * @returns A new Gtk.TreeModel. 
    */
  filterNew(root: import('../Gtk').TreePath | null): import('../Gtk').TreeModel;
  /**
    * Calls func on each node in model in a depth-first fashion.
    * @param func a function to be called on each row
    * @param userData user data to passed to func 
    */
  foreach(func: import('../Gtk').treeModelForeachFunc, userData: Object | null): void;
  /**
    * Returns a tuple of all values specified by their indices in columns in the order the indices are contained in columns
    * @param treeiter the Gtk.TreeIter
    * @param columns *columns – a list of column indices to fetch 
    */
  get(treeiter: import('../Gtk').TreeIter, columns): void;
  /**
    * Returns the type of the column.
    * @param index the column index
    * @returns the type of the column 
    */
  getColumnType(index: number): import('../GObject').GType;
  /**
    * Returns a set of flags supported by this interface.
    * @returns the flags supported by this interface 
    */
  getFlags(): import('../Gtk').TreeModelFlags;
  /**
    * Returns an iterator pointing to path. If path does not exist ValueError is raised.
    * @param path the Gtk.TreePath-struct
    * @returns a Gtk.TreeIter 
    */
  getIter(path: import('../Gtk').TreePath): import('../Gtk').TreeIter;
  /**
    * Initializes iter with the first iterator in the tree (the one at the path “0”) and returns True. Returns False if the tree is empty.
    * @returns Gtk.TreeIter or None if the tree is empty. 
    */
  getIterFirst(): import('../Gtk').TreeIter | null;
  /**
    * Returns a valid iterator pointing to path_string, if it exists. Otherwise raises ValueError
    * @param pathString a string representation of a Gtk.TreePath-struct
    * @returns a Gtk.TreeIter 
    */
  getIterFromString(pathString: string): import('../Gtk').TreeIter;
  /**
    * Returns the number of columns supported by self.
    * @returns the number of columns 
    */
  getNColumns(): number;
  /**
    * Returns a newly-created Gtk.TreePath-struct referenced by iter.
    * @param iter the Gtk.TreeIter-struct
    * @returns a newly-created Gtk.TreePath-struct 
    */
  getPath(iter: import('../Gtk').TreeIter): import('../Gtk').TreePath;
  /**
    * Generates a string representation of the iter.
    * @param iter a Gtk.TreeIter-struct
    * @returns a newly-allocated string. Must be freed with GLib.free(). 
    */
  getStringFromIter(iter: import('../Gtk').TreeIter): string;
  /**
    * Initializes and sets value to that at column.
    * @param iter the Gtk.TreeIter-struct
    * @param column the column to lookup the value at
    * @returns an empty GObject.Value to set 
    */
  getValue(iter: import('../Gtk').TreeIter, column: number): import('../GObject').Value;
  /**
    * Sets iter to point to the first child of parent. If parent has no children, None is returned. If parent is None returns the first node, equivalent to Gtk.TreeModel.iter_first().
    * @param parent the Gtk.TreeIter-struct, or None
    * @returns Gtk.TreeIter or None 
    */
  iterChildren(parent: import('../Gtk').TreeIter | null): import('../Gtk').TreeIter | null;
  /**
    * Returns True if iter has children, False otherwise.
    * @param iter the Gtk.TreeIter-struct to test for children
    * @returns True if iter has children 
    */
  iterHasChild(iter: import('../Gtk').TreeIter): boolean;
  /**
    * Returns the number of children that iter has.
    * @param iter the Gtk.TreeIter-struct, or None
    * @returns the number of children of iter 
    */
  iterNChildren(iter: import('../Gtk').TreeIter | null): number;
  /**
    * Returns an iterator pointing to the node following iter at the current level.
    * @param iter the Gtk.TreeIter-struct
    * @returns a Gtk.TreeIter or None 
    */
  iterNext(iter: import('../Gtk').TreeIter): import('../Gtk').TreeIter | null;
  /**
    * Returns child iter of parent, using the given index.
    * @param parent the Gtk.TreeIter-struct to get the child from, or None.
    * @param n the index of the desired child
    * @returns Gtk.TreeIter if parent has an n-th child otherwise None 
    */
  iterNthChild(parent: import('../Gtk').TreeIter | null, n: number): import('../Gtk').TreeIter | null;
  /**
    * Returns iter of the parent of child.
    * @param child the Gtk.TreeIter-struct
    * @returns Gtk.TreeIter or None if child has a parent. 
    */
  iterParent(child: import('../Gtk').TreeIter): import('../Gtk').TreeIter | null;
  /**
    * Returns an iterator pointing to the previous node at the current level.
    * @param iter the Gtk.TreeIter-struct
    * @returns a Gtk.TreeIter or None 
    */
  iterPrevious(iter: import('../Gtk').TreeIter): import('../Gtk').TreeIter | null;
  /**
    * Lets the tree ref the node.
    * @param iter the Gtk.TreeIter-struct 
    */
  refNode(iter: import('../Gtk').TreeIter): void;
  /**
    * Emits the Gtk.TreeModel ::row-changed signal on self.
    * @param path a Gtk.TreePath-struct pointing to the changed row
    * @param iter a valid Gtk.TreeIter-struct pointing to the changed row 
    */
  rowChanged(path: import('../Gtk').TreePath, iter: import('../Gtk').TreeIter): void;
  /**
    * Emits the Gtk.TreeModel ::row-deleted signal on self.
    * @param path a Gtk.TreePath-struct pointing to the previous location of the deleted row 
    */
  rowDeleted(path: import('../Gtk').TreePath): void;
  /**
    * Emits the Gtk.TreeModel ::row-has-child-toggled signal on self. This should be called by models after the child state of a node changes.
    * @param path a Gtk.TreePath-struct pointing to the changed row
    * @param iter a valid Gtk.TreeIter-struct pointing to the changed row 
    */
  rowHasChildToggled(path: import('../Gtk').TreePath, iter: import('../Gtk').TreeIter): void;
  /**
    * Emits the Gtk.TreeModel ::row-inserted signal on self.
    * @param path a Gtk.TreePath-struct pointing to the inserted row
    * @param iter a valid Gtk.TreeIter-struct pointing to the inserted row 
    */
  rowInserted(path: import('../Gtk').TreePath, iter: import('../Gtk').TreeIter): void;
  /**
    * Emits the Gtk.TreeModel ::rows-reordered signal on self.
    * @param path a Gtk.TreePath-struct pointing to the tree node whose children have been reordered
    * @param iter a valid Gtk.TreeIter-struct pointing to the node whose children have been reordered, or None if the depth of path is 0
    * @param newOrder an array of integers mapping the current position of each child to its old position before the re-ordering, i.e. new_order [newpos] = oldpos 
    */
  rowsReordered(path: import('../Gtk').TreePath, iter: import('../Gtk').TreeIter | null, newOrder: number): void;
  /**
    * Sets all values of a row pointed to by treeiter from a list of values passes as row. The length of the row has to match the number of columns of the model. None in row means the value will be skipped and not set.
    * @param treeiter the Gtk.TreeIter
    * @param row a list of values for each column 
    */
  setRow(treeiter: import('../Gtk').TreeIter, row: Object): void;
  /**
    * Creates a new Gtk.TreeModel, with self as the child model.
    * @returns A new Gtk.TreeModel. 
    */
  sortNewWithModel(): import('../Gtk').TreeModel;
  /**
    * Lets the tree unref the node.
    * @param iter the Gtk.TreeIter-struct 
    */
  unrefNode(iter: import('../Gtk').TreeIter): void;
}

