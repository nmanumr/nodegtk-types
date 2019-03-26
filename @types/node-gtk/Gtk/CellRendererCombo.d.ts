import * as Gtk from '../Gtk';
export declare interface CellRendererCombo extends Gtk.CellRendererText { }

/**
  * Gtk.CellRendererCombo renders text in a cell like Gtk.CellRendererText from
which it is derived. But while Gtk.CellRendererText offers a simple entry to
edit the text, Gtk.CellRendererCombo offers a Gtk.ComboBox
widget to edit the text. The values to display in the combo box are taken from
the tree model specified in the Gtk.CellRendererCombo :model property. 
  */
export declare class CellRendererCombo {
  /**
    * Creates a new Gtk.CellRendererCombo. Adjust how text is drawn using object properties. Object properties can be set globally (with g_object_set()). Also, with Gtk.TreeViewColumn, you can bind a property to a value in a Gtk.TreeModel. For example, you can bind the “text” property on the cell renderer to a string value in the model, thus rendering a different string in each row of the Gtk.TreeView.
    * @returns the new cell renderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * If False, don’t allow to enter strings other than the chosen ones 
    */
  hasEntry: boolean;
  /**
    * The model containing the possible values for the combo box 
    */
  model: import('../Gtk').TreeModel;
  /**
    * A column in the data source model to get the strings from 
    */
  textColumn: number;
}

