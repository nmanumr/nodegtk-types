import * as Gtk from '../Gtk';

export declare interface CellAreaBox extends Gtk.CellArea, Gtk.Orientable {
  packEnd(renderer: import('../Gtk').CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
  packEnd(cell: import('../Gtk').CellRenderer, expand: boolean): void;

  packStart(renderer: import('../Gtk').CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
  packStart(cell: import('../Gtk').CellRenderer, expand: boolean): void;
}

/**
  * The Gtk.CellAreaBox renders cell renderers into a row or a column
depending on its Gtk.Orientation. 
  */
export declare class CellAreaBox {
  /**
    * Creates a new Gtk.CellAreaBox.
    * @returns a newly created Gtk.CellAreaBox 
    */
  static new(): import('../Gtk').CellArea;
  /**
    * Gets the spacing added between cell renderers.
    * @returns the space added between cell renderers in self. 
    */
  getSpacing(): number;
  /**
    * Adds renderer to self, packed with reference to the end of self.
    * @param renderer the Gtk.CellRenderer to add
    * @param expand whether renderer should receive extra space when the area receives more than its natural size
    * @param align whether renderer should be aligned in adjacent rows
    * @param fixed whether renderer should have the same size in all rows 
    */
  packEnd(renderer: import('../Gtk').CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
  /**
    * Adds renderer to self, packed with reference to the start of self.
    * @param renderer the Gtk.CellRenderer to add
    * @param expand whether renderer should receive extra space when the area receives more than its natural size
    * @param align whether renderer should be aligned in adjacent rows
    * @param fixed whether renderer should have the same size in all rows 
    */
  packStart(renderer: import('../Gtk').CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
  /**
    * Sets the spacing to add between cell renderers in self.
    * @param spacing the space to add between Gtk.CellRenderers 
    */
  setSpacing(spacing: number): void;
  /**
    * Space which is inserted between cells 
    */
  spacing: number;
}

