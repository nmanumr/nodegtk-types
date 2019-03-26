import * as GObject from '../GObject';
export declare interface CellLayout extends GObject.GInterface { }

/**
  * Gtk.CellLayout is an interface to be implemented by all objects which
want to provide a Gtk.TreeViewColumn like API for packing cells,
setting attributes and data funcs. 
  */
export declare interface CellLayout {
  /**
    * Adds an attribute mapping to the list in self.
    * @param cell a Gtk.CellRenderer
    * @param attribute an attribute on the renderer
    * @param column the column position on the model to get the attribute from 
    */
  addAttribute(cell: import('../Gtk').CellRenderer, attribute: string, column: number): void;
  /**
    * Unsets all the mappings on all renderers on self and removes all renderers from self. 
    */
  clear(): void;
  /**
    * Clears all existing attributes previously set with gtk_cell_layout_set_attributes().
    * @param cell a Gtk.CellRenderer to clear the attribute mapping on 
    */
  clearAttributes(cell: import('../Gtk').CellRenderer): void;
  /**
    * Returns the underlying Gtk.CellArea which might be self if called on a Gtk.CellArea or might be None if no Gtk.CellArea is used by self.
    * @returns the cell area used by self, or None in case no cell area is used. 
    */
  getArea(): import('../Gtk').CellArea | null;
  /**
    * Returns the cell renderers which have been added to self.
    * @returns a list of cell renderers. The list, but not the renderers has been newly allocated and should be freed with g_list_free() when no longer needed. 
    */
  getCells(): import('../Gtk').CellRenderer[];
  /**
    * Adds the cell to the end of self. If expand is False, then the cell is allocated no more space than it needs. Any unused space is divided evenly between cells for which expand is True.
    * @param cell a Gtk.CellRenderer
    * @param expand True if cell is to be given extra space allocated to self 
    */
  packEnd(cell: import('../Gtk').CellRenderer, expand: boolean): void;
  /**
    * Packs the cell into the beginning of self. If expand is False, then the cell is allocated no more space than it needs. Any unused space is divided evenly between cells for which expand is True.
    * @param cell a Gtk.CellRenderer
    * @param expand True if cell is to be given extra space allocated to self 
    */
  packStart(cell: import('../Gtk').CellRenderer, expand: boolean): void;
  /**
    * Re-inserts cell at position.
    * @param cell a Gtk.CellRenderer to reorder
    * @param position new position to insert cell at 
    */
  reorder(cell: import('../Gtk').CellRenderer, position: number): void;
  /**
    * Sets the Gtk.CellLayoutDataFunc to use for self.
    * @param cell a Gtk.CellRenderer
    * @param func the Gtk.CellLayoutDataFunc to use, or None
    * @param funcData user data for func 
    */
  setCellDataFunc(cell: import('../Gtk').CellRenderer, func: import('../Gtk').cellLayoutDataFunc | null, funcData: Object | null): void;
}

