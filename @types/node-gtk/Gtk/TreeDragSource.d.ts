import * as GObject from '../GObject';
export declare interface TreeDragSource extends GObject.GInterface { }

export declare interface TreeDragSource {
  /**
    * Asks the Gtk.TreeDragSource to delete the row at path, because it was moved somewhere else via drag-and-drop. Returns False if the deletion fails because path no longer exists, or for some model-specific reason. Should robustly handle a path no longer found in the model!
    * @param path row that was being dragged
    * @returns True if the row was successfully deleted 
    */
  dragDataDelete(path: import('../Gtk').TreePath): boolean;
  /**
    * Asks the Gtk.TreeDragSource to fill in selection_data with a representation of the row at path. selection_data->target gives the required type of the data.  Should robustly handle a path no longer found in the model!
    * @param path row that was dragged
    * @param selectionData a Gtk.SelectionData to fill with data from the dragged row
    * @returns True if data of the required type was provided 
    */
  dragDataGet(path: import('../Gtk').TreePath, selectionData: import('../Gtk').SelectionData): boolean;
  /**
    * Asks the Gtk.TreeDragSource whether a particular row can be used as the source of a DND operation. If the source doesn’t implement this interface, the row is assumed draggable.
    * @param path row on which user is initiating a drag
    * @returns True if the row can be dragged 
    */
  rowDraggable(path: import('../Gtk').TreePath): boolean;
}

