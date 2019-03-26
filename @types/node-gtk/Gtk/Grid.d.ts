import * as Gtk from '../Gtk';
export declare interface Grid extends Gtk.Container, Gtk.Orientable { }

/**
  * Gtk.Grid is a container which arranges its child widgets in
rows and columns, with arbitrary positions and horizontal/vertical spans. 
  */
export declare class Grid {
  /**
    * Creates a new grid widget.
    * @returns the new Gtk.Grid 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Adds a widget to the grid.
    * @param child the widget to add
    * @param left the column number to attach the left side of child to
    * @param top the row number to attach the top side of child to
    * @param width the number of columns that child will span
    * @param height the number of rows that child will span 
    */
  attach(child: import('../Gtk').Widget, left: number, top: number, width: number, height: number): void;
  /**
    * Adds a widget to the grid.
    * @param child the widget to add
    * @param sibling the child of self that child will be placed next to, or None to place child at the beginning or end
    * @param side the side of sibling that child is positioned next to
    * @param width the number of columns that child will span
    * @param height the number of rows that child will span 
    */
  attachNextTo(child: import('../Gtk').Widget, sibling: import('../Gtk').Widget | null, side: import('../Gtk').PositionType, width: number, height: number): void;
  /**
    * Returns which row defines the global baseline of self.
    * @returns the row index defining the global baseline 
    */
  getBaselineRow(): number;
  /**
    * Gets the child of self whose area covers the grid cell whose upper left corner is at left, top.
    * @param left the left edge of the cell
    * @param top the top edge of the cell
    * @returns the child at the given position, or None 
    */
  getChildAt(left: number, top: number): import('../Gtk').Widget | null;
  /**
    * Returns whether all columns of self have the same width.
    * @returns whether all columns of self have the same width. 
    */
  getColumnHomogeneous(): boolean;
  /**
    * Returns the amount of space between the columns of self.
    * @returns the column spacing of self 
    */
  getColumnSpacing(): number;
  /**
    * Returns the baseline position of row as set by Gtk.Grid.set_row_baseline_position() or the default value Gtk.BaselinePosition.CENTER.
    * @param row a row index
    * @returns the baseline position of row 
    */
  getRowBaselinePosition(row: number): import('../Gtk').BaselinePosition;
  /**
    * Returns whether all rows of self have the same height.
    * @returns whether all rows of self have the same height. 
    */
  getRowHomogeneous(): boolean;
  /**
    * Returns the amount of space between the rows of self.
    * @returns the row spacing of self 
    */
  getRowSpacing(): number;
  /**
    * Inserts a column at the specified position.
    * @param position the position to insert the column at 
    */
  insertColumn(position: number): void;
  /**
    * Inserts a row or column at the specified position.
    * @param sibling the child of self that the new row or column will be placed next to
    * @param side the side of sibling that child is positioned next to 
    */
  insertNextTo(sibling: import('../Gtk').Widget, side: import('../Gtk').PositionType): void;
  /**
    * Inserts a row at the specified position.
    * @param position the position to insert the row at 
    */
  insertRow(position: number): void;
  /**
    * Removes a column from the grid.
    * @param position the position of the column to remove 
    */
  removeColumn(position: number): void;
  /**
    * Removes a row from the grid.
    * @param position the position of the row to remove 
    */
  removeRow(position: number): void;
  /**
    * Sets which row defines the global baseline for the entire grid. Each row in the grid can have its own local baseline, but only one of those is global, meaning it will be the baseline in the parent of the self.
    * @param row the row index 
    */
  setBaselineRow(row: number): void;
  /**
    * Sets whether all columns of self will have the same width.
    * @param homogeneous True to make columns homogeneous 
    */
  setColumnHomogeneous(homogeneous: boolean): void;
  /**
    * Sets the amount of space between columns of self.
    * @param spacing the amount of space to insert between columns 
    */
  setColumnSpacing(spacing: number): void;
  /**
    * Sets how the baseline should be positioned on row of the grid, in case that row is assigned more space than is requested.
    * @param row a row index
    * @param pos a Gtk.BaselinePosition 
    */
  setRowBaselinePosition(row: number, pos: import('../Gtk').BaselinePosition): void;
  /**
    * Sets whether all rows of self will have the same height.
    * @param homogeneous True to make rows homogeneous 
    */
  setRowHomogeneous(homogeneous: boolean): void;
  /**
    * Sets the amount of space between rows of self.
    * @param spacing the amount of space to insert between rows 
    */
  setRowSpacing(spacing: number): void;
  /**
    * The row to align the to the baseline when valign is Gtk.Align.BASELINE 
    */
  baselineRow: number;
  /**
    * If True, the columns are all the same width 
    */
  columnHomogeneous: boolean;
  /**
    * The amount of space between two consecutive columns 
    */
  columnSpacing: number;
  /**
    * If True, the rows are all the same height 
    */
  rowHomogeneous: boolean;
  /**
    * The amount of space between two consecutive rows 
    */
  rowSpacing: number;
}

