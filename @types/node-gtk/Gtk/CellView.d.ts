import * as Gtk from '../Gtk';
export declare interface CellView extends Gtk.Widget, Gtk.CellLayout, Gtk.Orientable { }

/**
  * A Gtk.CellView displays a single row of a Gtk.TreeModel using a Gtk.CellArea
and Gtk.CellAreaContext. A Gtk.CellAreaContext can be provided to the
Gtk.CellView at construction time in order to keep the cellview in context
of a group of cell views, this ensures that the renderers displayed will
be properly aligned with eachother (like the aligned cells in the menus
of Gtk.ComboBox). 
  */
export declare class CellView {
  /**
    * Creates a new Gtk.CellView widget.
    * @returns A newly created Gtk.CellView widget. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CellView widget with a specific Gtk.CellArea to layout cells and a specific Gtk.CellAreaContext.
    * @param area the Gtk.CellArea to layout cells
    * @param context the Gtk.CellAreaContext in which to calculate cell geometry
    * @returns A newly created Gtk.CellView widget. 
    */
  static newWithContext(area: import('../Gtk').CellArea, context: import('../Gtk').CellAreaContext): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CellView widget, adds a Gtk.CellRendererText to it, and makes it show markup. The text can be marked up with the Pango text markup language.
    * @param markup the text to display in the cell view
    * @returns A newly created Gtk.CellView widget. 
    */
  static newWithMarkup(markup: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CellView widget, adds a Gtk.CellRendererPixbuf to it, and makes it show pixbuf.
    * @param pixbuf the image to display in the cell view
    * @returns A newly created Gtk.CellView widget. 
    */
  static newWithPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CellView widget, adds a Gtk.CellRendererText to it, and makes it show text.
    * @param text the text to display in the cell view
    * @returns A newly created Gtk.CellView widget. 
    */
  static newWithText(text: string): import('../Gtk').Widget;
  /**
    * Returns a Gtk.TreePath referring to the currently displayed row. If no row is currently displayed, None is returned.
    * @returns the currently displayed row or None 
    */
  getDisplayedRow(): import('../Gtk').TreePath | null;
  /**
    * Gets whether self is configured to draw all of its cells in a sensitive state.
    * @returns whether self draws all of its cells in a sensitive state 
    */
  getDrawSensitive(): boolean;
  /**
    * Gets whether self is configured to request space to fit the entire Gtk.TreeModel.
    * @returns whether self requests space to fit the entire Gtk.TreeModel. 
    */
  getFitModel(): boolean;
  /**
    * Returns the model for self. If no model is used None is returned.
    * @returns a Gtk.TreeModel used or None 
    */
  getModel(): import('../Gtk').TreeModel | null;
  /**
    * Sets requisition to the size needed by self to display the model row pointed to by path.
    * @param path a Gtk.TreePath
    * @returns True  requisition:return location for the size 
    */
  getSizeOfRow(path: import('../Gtk').TreePath): [boolean, import('../Gtk').Requisition];
  /**
    * Sets the background color of view.
    * @param color the new background color 
    */
  setBackgroundColor(color: import('../Gdk').Color): void;
  /**
    * Sets the background color of self.
    * @param rgba the new background color 
    */
  setBackgroundRgba(rgba: import('../Gdk').RGBA): void;
  /**
    * Sets the row of the model that is currently displayed by the Gtk.CellView. If the path is unset, then the contents of the cellview “stick” at their last value; this is not normally a desired result, but may be a needed intermediate state if say, the model for the Gtk.CellView becomes temporarily empty.
    * @param path a Gtk.TreePath or None to unset. 
    */
  setDisplayedRow(path: import('../Gtk').TreePath | null): void;
  /**
    * Sets whether self should draw all of its cells in a sensitive state, this is used by Gtk.ComboBox menus to ensure that rows with insensitive cells that contain children appear sensitive in the parent menu item.
    * @param drawSensitive whether to draw all cells in a sensitive state. 
    */
  setDrawSensitive(drawSensitive: boolean): void;
  /**
    * Sets whether self should request space to fit the entire Gtk.TreeModel.
    * @param fitModel whether self should request space for the whole model. 
    */
  setFitModel(fitModel: boolean): void;
  /**
    * Sets the model for self.  If self already has a model set, it will remove it before setting the new model.  If model is None, then it will unset the old model.
    * @param model a Gtk.TreeModel 
    */
  setModel(model: import('../Gtk').TreeModel | null): void;
  /**
    * Background color as a string 
    */
  background: string;
  /**
    * Background color as a Gdk.Color deprecated 
    */
  backgroundGdk: import('../Gdk').Color;
  /**
    * Background color as a Gdk.RGBA 
    */
  backgroundRgba: import('../Gdk').RGBA;
  /**
    * Whether this tag affects the background color 
    */
  backgroundSet: boolean;
  /**
    * The Gtk.CellArea used to layout cells 
    */
  cellArea: import('../Gtk').CellArea;
  /**
    * The Gtk.CellAreaContext used to compute the geometry of the cell view 
    */
  cellAreaContext: import('../Gtk').CellAreaContext;
  /**
    * Whether to force cells to be drawn in a sensitive state 
    */
  drawSensitive: boolean;
  /**
    * Whether to request enough space for every row in the model 
    */
  fitModel: boolean;
  /**
    * The model for cell view 
    */
  model: import('../Gtk').TreeModel;
}

