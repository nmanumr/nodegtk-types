import * as GObject from '../GObject';

/**
  * Being Atk.Table a component which present elements ordered via rows
and columns, an Atk.TableCell is the interface which each of those
elements, so “cells” should implement. 
  */
export declare interface TableCell extends GObject.GInterface {
  /**
    * Returns the column headers as an array of cell accessibles.
    * @returns a GLib.PtrArray of AtkObjects representing the column header cells. 
    */
  getColumnHeaderCells(): import('../Atk').Object[];
  /**
    * Returns the number of columns occupied by this cell accessible.
    * @returns a int representing the number of columns occupied by this cell, or 0 if the cell does not implement this method. 
    */
  getColumnSpan(): number;
  /**
    * Retrieves the tabular position of this cell.
    * @returns True if successful; False otherwise.  row:the row of the given cell. column:the column of the given cell. 
    */
  getPosition(): [number, number];
  /**
    * Gets the row and column indexes and span of this cell accessible.
    * @returns True if successful; False otherwise.  row:the row index of the given cell. column:the column index of the given cell. row_span:the number of rows occupied by this cell. column_span:the number of columns occupied by this cell. 
    */
  getRowColumnSpan(): [boolean, number, number, number, number];
  /**
    * Returns the row headers as an array of cell accessibles.
    * @returns a GLib.PtrArray of AtkObjects representing the row header cells. 
    */
  getRowHeaderCells(): import('../Atk').Object[];
  /**
    * Returns the number of rows occupied by this cell accessible.
    * @returns a int representing the number of rows occupied by this cell, or 0 if the cell does not implement this method. 
    */
  getRowSpan(): number;
  /**
    * Returns a reference to the accessible of the containing table.
    * @returns the atk object for the containing table. 
    */
  getTable(): import('../Atk').Object;
}

