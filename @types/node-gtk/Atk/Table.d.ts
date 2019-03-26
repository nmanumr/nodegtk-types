import * as GObject from '../GObject';

/**
  * Atk.Table should be implemented by components which present
elements ordered via rows and columns.  It may also be used to
present tree-structured information if the nodes of the trees can
be said to contain multiple “columns”.  Individual elements of an
Atk.Table are typically referred to as “cells”. Those cells should
implement the interface Atk.TableCell, but #Atk doesn’t require
them to be direct children of the current Atk.Table. They can be
grand-children, grand-grand-children etc. Atk.Table provides the
API needed to get a individual cell based on the row and column
numbers. 
  */
export declare interface Table extends GObject.GInterface {
  /**
    * Adds the specified column to the selection.
    * @param column a int representing a column in self
    * @returns a bool representing if the column was successfully added to the selection, or 0 if value does not implement this interface. 
    */
  addColumnSelection(column: number): boolean;
  /**
    * Adds the specified row to the selection.
    * @param row a int representing a row in self
    * @returns a bool representing if row was successfully added to selection, or 0 if value does not implement this interface. 
    */
  addRowSelection(row: number): boolean;
  /**
    * Gets the caption for the self.
    * @returns a Atk.Object representing the table caption, or None if value does not implement this interface. 
    */
  getCaption(): import('../Atk').Object | null;
  /**
    * Gets a int representing the column at the specified index_.
    * @param index a int representing an index in self
    * @returns a int representing the column at the specified index, or -1 if the table does not implement this method. 
    */
  getColumnAtIndex(index: number): number;
  /**
    * Gets the description text of the specified column in the table
    * @param column a int representing a column in self
    * @returns a str representing the column description, or None if value does not implement this interface. 
    */
  getColumnDescription(column: number): string;
  /**
    * Gets the number of columns occupied by the accessible object at the specified row and column in the self.
    * @param row a int representing a row in self
    * @param column a int representing a column in self
    * @returns a int representing the column extent at specified position, or 0 if value does not implement this interface. 
    */
  getColumnExtentAt(row: number, column: number): number;
  /**
    * Gets the column header of a specified column in an accessible table.
    * @param column a int representing a column in the table
    * @returns a Atk.Object representing the specified column header, or None if value does not implement this interface. 
    */
  getColumnHeader(column: number): import('../Atk').Object | null;
  /**
    * Gets a int representing the index at the specified row and column.
    * @param row a int representing a row in self
    * @param column a int representing a column in self
    * @returns a int representing the index at specified position. The value -1 is returned if the object at row,column is not a child of table or table does not implement this interface. 
    */
  getIndexAt(row: number, column: number): number;
  /**
    * Gets the number of columns in the table.
    * @returns a int representing the number of columns, or 0 if value does not implement this interface. 
    */
  getNColumns(): number;
  /**
    * Gets the number of rows in the table.
    * @returns a int representing the number of rows, or 0 if value does not implement this interface. 
    */
  getNRows(): number;
  /**
    * Gets a int representing the row at the specified index_.
    * @param index a int representing an index in self
    * @returns a int representing the row at the specified index, or -1 if the table does not implement this method. 
    */
  getRowAtIndex(index: number): number;
  /**
    * Gets the description text of the specified row in the table
    * @param row a int representing a row in self
    * @returns a str representing the row description, or None if value does not implement this interface. 
    */
  getRowDescription(row: number): string | null;
  /**
    * Gets the number of rows occupied by the accessible object at a specified row and column in the self.
    * @param row a int representing a row in self
    * @param column a int representing a column in self
    * @returns a int representing the row extent at specified position, or 0 if value does not implement this interface. 
    */
  getRowExtentAt(row: number, column: number): number;
  /**
    * Gets the row header of a specified row in an accessible table.
    * @param row a int representing a row in the table
    * @returns a Atk.Object representing the specified row header, or None if value does not implement this interface. 
    */
  getRowHeader(row: number): import('../Atk').Object | null;
  /**
    * Gets the selected columns of the table by initializing **selected with the selected column numbers. This array should be freed by the caller.
    * @param selected a int that is to contain the selected columns numbers
    * @returns a int representing the number of selected columns, or %0 if value does not implement this interface. 
    */
  getSelectedColumns(selected: number): number;
  /**
    * Gets the selected rows of the table by initializing **selected with the selected row numbers. This array should be freed by the caller.
    * @param selected a int that is to contain the selected row numbers
    * @returns a int representing the number of selected rows, or zero if value does not implement this interface. 
    */
  getSelectedRows(selected: number): number;
  /**
    * Gets the summary description of the table.
    * @returns a Atk.Object representing a summary description of the table, or zero if value does not implement this interface. 
    */
  getSummary(): import('../Atk').Object;
  /**
    * Gets a boolean value indicating whether the specified column is selected
    * @param column a int representing a column in self
    * @returns a bool representing if the column is selected, or 0 if value does not implement this interface. 
    */
  isColumnSelected(column: number): boolean;
  /**
    * Gets a boolean value indicating whether the specified row is selected
    * @param row a int representing a row in self
    * @returns a bool representing if the row is selected, or 0 if value does not implement this interface. 
    */
  isRowSelected(row: number): boolean;
  /**
    * Gets a boolean value indicating whether the accessible object at the specified row and column is selected
    * @param row a int representing a row in self
    * @param column a int representing a column in self
    * @returns a bool representing if the cell is selected, or 0 if value does not implement this interface. 
    */
  isSelected(row: number, column: number): boolean;
  /**
    * Get a reference to the table cell at row, column. This cell should implement the interface Atk.TableCell
    * @param row a int representing a row in self
    * @param column a int representing a column in self
    * @returns an Atk.Object representing the referred to accessible 
    */
  refAt(row: number, column: number): import('../Atk').Object;
  /**
    * Adds the specified column to the selection.
    * @param column a int representing a column in self
    * @returns a bool representing if the column was successfully removed from the selection, or 0 if value does not implement this interface. 
    */
  removeColumnSelection(column: number): boolean;
  /**
    * Removes the specified row from the selection.
    * @param row a int representing a row in self
    * @returns a bool representing if the row was successfully removed from the selection, or 0 if value does not implement this interface. 
    */
  removeRowSelection(row: number): boolean;
  /**
    * Sets the caption for the table.
    * @param caption a Atk.Object representing the caption to set for self 
    */
  setCaption(caption: import('../Atk').Object): void;
  /**
    * Sets the description text for the specified column of the self.
    * @param column a int representing a column in self
    * @param description a str representing the description text to set for the specified column of the self 
    */
  setColumnDescription(column: number, description: string): void;
  /**
    * Sets the specified column header to header.
    * @param column a int representing a column in self
    * @param header an Atk.Table 
    */
  setColumnHeader(column: number, header: import('../Atk').Object): void;
  /**
    * Sets the description text for the specified row of self.
    * @param row a int representing a row in self
    * @param description a str representing the description text to set for the specified row of self 
    */
  setRowDescription(row: number, description: string): void;
  /**
    * Sets the specified row header to header.
    * @param row a int representing a row in self
    * @param header an Atk.Table 
    */
  setRowHeader(row: number, header: import('../Atk').Object): void;
  /**
    * Sets the summary description of the table.
    * @param accessible an Atk.Object representing the summary description to set for self 
    */
  setSummary(accessible: import('../Atk').Object): void;
}

