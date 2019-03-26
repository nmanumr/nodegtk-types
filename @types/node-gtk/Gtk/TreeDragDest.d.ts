import * as GObject from '../GObject';
export declare interface TreeDragDest extends GObject.GInterface { }

export declare interface TreeDragDest {
  /**
    * Asks the Gtk.TreeDragDest to insert a row before the path dest, deriving the contents of the row from selection_data. If dest is outside the tree so that inserting before it is impossible, False will be returned. Also, False may be returned if the new row is not created for some model-specific reason.  Should robustly handle a dest no longer found in the model!
    * @param dest row to drop in front of
    * @param selectionData data to drop
    * @returns whether a new row was created before position dest 
    */
  dragDataReceived(dest: import('../Gtk').TreePath, selectionData: import('../Gtk').SelectionData): boolean;
  /**
    * Determines whether a drop is possible before the given dest_path, at the same depth as dest_path. i.e., can we drop the data in selection_data at that location. dest_path does not have to exist; the return value will almost certainly be False if the parent of dest_path doesn’t exist, though.
    * @param destPath destination row
    * @param selectionData the data being dragged
    * @returns True if a drop is possible before dest_path 
    */
  rowDropPossible(destPath: import('../Gtk').TreePath, selectionData: import('../Gtk').SelectionData): boolean;
}

