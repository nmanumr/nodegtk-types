import * as Gtk from '../Gtk';
export declare interface Table extends Gtk.Container { }

/**
  * The Gtk.Table functions allow the programmer to arrange widgets in rows and
columns, making it easy to align many widgets next to each other,
horizontally and vertically. 
  */
export declare class Table {
  /**
    * Used to create a new table widget. An initial size must be given by specifying how many rows and columns the table should have, although this can be changed later with Gtk.Table.resize().  rows and columns must both be in the range 1 .. 65535. For historical reasons, 0 is accepted as well and is silently interpreted as 1.
    * @param rows The number of rows the new table should have.
    * @param columns The number of columns the new table should have.
    * @param homogeneous If set to True, all table cells are resized to the size of the cell containing the largest widget.
    * @returns A pointer to the newly created table widget. 
    */
  static new(rows: number, columns: number, homogeneous: boolean): import('../Gtk').Widget;
  /**
    * Adds a widget to a table. The number of “cells” that a widget will occupy is specified by left_attach, right_attach, top_attach and bottom_attach. These each represent the leftmost, rightmost, uppermost and lowest column and row numbers of the table. (Columns and rows are indexed from zero).
    * @param child The widget to add.
    * @param leftAttach the column number to attach the left side of a child widget to.
    * @param rightAttach the column number to attach the right side of a child widget to.
    * @param topAttach the row number to attach the top of a child widget to.
    * @param bottomAttach the row number to attach the bottom of a child widget to.
    * @param xoptions Used to specify the properties of the child widget when the table is resized.
    * @param yoptions The same as xoptions, except this field determines behaviour of vertical resizing.
    * @param xpadding An integer value specifying the padding on the left and right of the widget being added to the table.
    * @param ypadding The amount of padding above and below the child widget. 
    */
  attach(child: import('../Gtk').Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number, xoptions: import('../Gtk').AttachOptions, yoptions: import('../Gtk').AttachOptions, xpadding: number, ypadding: number): void;
  /**
    * As there are many options associated with Gtk.Table.attach(), this convenience function provides the programmer with a means to add children to a table with identical padding and expansion options. The values used for the Gtk.AttachOptions are GTK_EXPAND | GTK_FILL, and the padding is set to 0.
    * @param widget The child widget to add.
    * @param leftAttach The column number to attach the left side of the child widget to.
    * @param rightAttach The column number to attach the right side of the child widget to.
    * @param topAttach The row number to attach the top of the child widget to.
    * @param bottomAttach The row number to attach the bottom of the child widget to. 
    */
  attachDefaults(widget: import('../Gtk').Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number): void;
  /**
    * Gets the amount of space between column col, and column col + 1. See Gtk.Table.set_col_spacing().
    * @param column a column in the table, 0 indicates the first column
    * @returns the column spacing 
    */
  getColSpacing(column: number): number;
  /**
    * Gets the default column spacing for the table. This is the spacing that will be used for newly added columns. (See Gtk.Table.set_col_spacings())
    * @returns the default column spacing 
    */
  getDefaultColSpacing(): number;
  /**
    * Gets the default row spacing for the table. This is the spacing that will be used for newly added rows. (See Gtk.Table.set_row_spacings())
    * @returns the default row spacing 
    */
  getDefaultRowSpacing(): number;
  /**
    * Returns whether the table cells are all constrained to the same width and height. (See Gtk.Table.set_homogeneous ())
    * @returns True if the cells are all constrained to the same size 
    */
  getHomogeneous(): boolean;
  /**
    * Gets the amount of space between row row, and row row + 1. See Gtk.Table.set_row_spacing().
    * @param row a row in the table, 0 indicates the first row
    * @returns the row spacing 
    */
  getRowSpacing(row: number): number;
  /**
    * Gets the number of rows and columns in the table.
    * @returns rows:return location for the number of rows, or None columns:return location for the number of columns, or None 
    */
  getSize(): [number, number];
  /**
    * If you need to change a table’s size after it has been created, this function allows you to do so.
    * @param rows The new number of rows.
    * @param columns The new number of columns. 
    */
  resize(rows: number, columns: number): void;
  /**
    * Alters the amount of space between a given table column and the following column.
    * @param column the column whose spacing should be changed.
    * @param spacing number of pixels that the spacing should take up. 
    */
  setColSpacing(column: number, spacing: number): void;
  /**
    * Sets the space between every column in self equal to spacing.
    * @param spacing the number of pixels of space to place between every column in the table. 
    */
  setColSpacings(spacing: number): void;
  /**
    * Changes the homogenous property of table cells, ie. whether all cells are an equal size or not.
    * @param homogeneous Set to True to ensure all table cells are the same size. Set to False if this is not your desired behaviour. 
    */
  setHomogeneous(homogeneous: boolean): void;
  /**
    * Changes the space between a given table row and the subsequent row.
    * @param row row number whose spacing will be changed.
    * @param spacing number of pixels that the spacing should take up. 
    */
  setRowSpacing(row: number, spacing: number): void;
  /**
    * Sets the space between every row in self equal to spacing.
    * @param spacing the number of pixels of space to place between every row in the table. 
    */
  setRowSpacings(spacing: number): void;
  /**
    * The amount of space between two consecutive columns 
    */
  columnSpacing: number;
  /**
    * If True, the table cells are all the same width/height 
    */
  homogeneous: boolean;
  /**
    * The number of columns in the table 
    */
  nColumns: number;
  /**
    * The number of rows in the table 
    */
  nRows: number;
  /**
    * The amount of space between two consecutive rows 
    */
  rowSpacing: number;
}

