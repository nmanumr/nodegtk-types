import * as GObject from '../GObject';
export declare interface CellRenderer extends GObject.InitiallyUnowned { }

/**
  * The Gtk.CellRenderer is a base class of a set of objects used for
rendering a cell to a cairo.Context.  These objects are used primarily by
the Gtk.TreeView widget, though they aren’t tied to them in any
specific way.  It is worth noting that Gtk.CellRenderer is not a
Gtk.Widget and cannot be treated as such. 
  */
export declare abstract class CellRenderer {
  /**
    * Sets the type to be used for creating accessibles for cells rendered by cell renderers of self. Note that multiple accessibles will be created.
    * @param type The object type that implements the accessible for widget_class. The type must be a subtype of Gtk.RendererCellAccessible 
    */
  static setAccessibleType(type: import('../GObject').GType): void;
  /**
    * Passes an activate event to the cell renderer for possible processing. Some cell renderers may use events; for example, Gtk.CellRendererToggle toggles when it gets a mouse click.
    * @param event a Gdk.Event
    * @param widget widget that received the event
    * @param path widget-dependent string representation of the event location; e.g. for Gtk.TreeView, a string representation of Gtk.TreePath
    * @param backgroundArea background area as passed to Gtk.CellRenderer.render()
    * @param cellArea cell area as passed to Gtk.CellRenderer.render()
    * @param flags render flags
    * @returns True if the event was consumed/handled 
    */
  activate(event: import('../Gdk').Event, widget: import('../Gtk').Widget, path: string, backgroundArea: import('../Gdk').Rectangle, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState): boolean;
  /**
    * Gets the aligned area used by self inside cell_area. Used for finding the appropriate edit and focus rectangle.
    * @param widget the Gtk.Widget this cell will be rendering to
    * @param flags render flags
    * @param cellArea cell area which would be passed to Gtk.CellRenderer.render()
    * @returns the return location for the space inside cell_area that would acually be used to render. 
    */
  getAlignedArea(widget: import('../Gtk').Widget, flags: import('../Gtk').CellRendererState, cellArea: import('../Gdk').Rectangle): import('../Gdk').Rectangle;
  /**
    * Fills in xalign and yalign with the appropriate values of self.
    * @returns xalign:location to fill in with the x alignment of the cell, or None yalign:location to fill in with the y alignment of the cell, or None 
    */
  getAlignment(): [number, number];
  /**
    * Fills in width and height with the appropriate size of self.
    * @returns width:location to fill in with the fixed width of the cell, or None height:location to fill in with the fixed height of the cell, or None 
    */
  getFixedSize(): [number, number];
  /**
    * Fills in xpad and ypad with the appropriate values of self.
    * @returns xpad:location to fill in with the x padding of the cell, or None ypad:location to fill in with the y padding of the cell, or None 
    */
  getPadding(): [number, number];
  /**
    * Retreives a renderer’s natural size when rendered to widget.
    * @param widget the Gtk.Widget this cell will be rendering to
    * @returns minimum_size:location to store the minimum size, or None natural_size:location to store the natural size, or None 
    */
  getPreferredHeight(widget: import('../Gtk').Widget): [number, number];
  /**
    * Retreives a cell renderers’s minimum and natural height if it were rendered to widget with the specified width.
    * @param widget the Gtk.Widget this cell will be rendering to
    * @param width the size which is available for allocation
    * @returns minimum_height:location for storing the minimum size, or None natural_height:location for storing the preferred size, or None 
    */
  getPreferredHeightForWidth(widget: import('../Gtk').Widget, width: number): [number, number];
  /**
    * Retrieves the minimum and natural size of a cell taking into account the widget’s preference for height-for-width management.
    * @param widget the Gtk.Widget this cell will be rendering to
    * @returns minimum_size:location for storing the minimum size, or None natural_size:location for storing the natural size, or None 
    */
  getPreferredSize(widget: import('../Gtk').Widget): [import('../Gtk').Requisition, import('../Gtk').Requisition];
  /**
    * Retreives a renderer’s natural size when rendered to widget.
    * @param widget the Gtk.Widget this cell will be rendering to
    * @returns minimum_size:location to store the minimum size, or None natural_size:location to store the natural size, or None 
    */
  getPreferredWidth(widget: import('../Gtk').Widget): [number, number];
  /**
    * Retreives a cell renderers’s minimum and natural width if it were rendered to widget with the specified height.
    * @param widget the Gtk.Widget this cell will be rendering to
    * @param height the size which is available for allocation
    * @returns minimum_width:location for storing the minimum size, or None natural_width:location for storing the preferred size, or None 
    */
  getPreferredWidthForHeight(widget: import('../Gtk').Widget, height: number): [number, number];
  /**
    * Gets whether the cell renderer prefers a height-for-width layout or a width-for-height layout.
    * @returns The Gtk.SizeRequestMode preferred by this renderer. 
    */
  getRequestMode(): import('../Gtk').SizeRequestMode;
  /**
    * Returns the cell renderer’s sensitivity.
    * @returns True if the cell renderer is sensitive 
    */
  getSensitive(): boolean;
  /**
    * Obtains the width and height needed to render the cell. Used by view widgets to determine the appropriate size for the cell_area passed to Gtk.CellRenderer.render().  If cell_area is not None, fills in the x and y offsets (if set) of the cell relative to this location.
    * @param widget the widget the renderer is rendering to
    * @param cellArea The area a cell will be allocated, or None
    * @returns x_offset:location to return x offset of cell relative to cell_area, or None y_offset:location to return y offset of cell relative to cell_area, or None width:location to return width needed to render a cell, or None height:location to return height needed to render a cell, or None 
    */
  getSize(widget: import('../Gtk').Widget, cellArea: import('../Gdk').Rectangle | null): [number, number, number, number];
  /**
    * Translates the cell renderer state to Gtk.StateFlags, based on the cell renderer and widget sensitivity, and the given Gtk.CellRendererState.
    * @param widget a Gtk.Widget, or None
    * @param cellState cell renderer state
    * @returns the widget state flags applying to self 
    */
  getState(widget: import('../Gtk').Widget | null, cellState: import('../Gtk').CellRendererState): import('../Gtk').StateFlags;
  /**
    * Returns the cell renderer’s visibility.
    * @returns True if the cell renderer is visible 
    */
  getVisible(): boolean;
  /**
    * Checks whether the cell renderer can do something when activated.
    * @returns True if the cell renderer can do anything when activated 
    */
  isActivatable(): boolean;
  /**
    * Invokes the virtual render function of the Gtk.CellRenderer. The three passed-in rectangles are areas in cr. Most renderers will draw within cell_area; the xalign, yalign, xpad, and ypad fields of the Gtk.CellRenderer should be honored with respect to cell_area. background_area includes the blank space around the cell, and also the area containing the tree expander; so the background_area rectangles for all cells tile to cover the entire window.
    * @param cr a cairo context to draw to
    * @param widget the widget owning window
    * @param backgroundArea entire cell area (including tree expanders and maybe padding on the sides)
    * @param cellArea area normally rendered by a cell renderer
    * @param flags flags that affect rendering 
    */
  render(cr: import('../cairo').Context, widget: import('../Gtk').Widget, backgroundArea: import('../Gdk').Rectangle, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState): void;
  /**
    * Sets the renderer’s alignment within its available space.
    * @param xalign the x alignment of the cell renderer
    * @param yalign the y alignment of the cell renderer 
    */
  setAlignment(xalign: number, yalign: number): void;
  /**
    * Sets the renderer size to be explicit, independent of the properties set.
    * @param width the width of the cell renderer, or -1
    * @param height the height of the cell renderer, or -1 
    */
  setFixedSize(width: number, height: number): void;
  /**
    * Sets the renderer’s padding.
    * @param xpad the x padding of the cell renderer
    * @param ypad the y padding of the cell renderer 
    */
  setPadding(xpad: number, ypad: number): void;
  /**
    * Sets the cell renderer’s sensitivity.
    * @param sensitive the sensitivity of the cell 
    */
  setSensitive(sensitive: boolean): void;
  /**
    * Sets the cell renderer’s visibility.
    * @param visible the visibility of the cell 
    */
  setVisible(visible: boolean): void;
  /**
    * Starts editing the contents of this self, through a new Gtk.CellEditable widget created by the Gtk.CellRendererClass.start_editing virtual function.
    * @param event a Gdk.Event
    * @param widget widget that received the event
    * @param path widget-dependent string representation of the event location; e.g. for Gtk.TreeView, a string representation of Gtk.TreePath
    * @param backgroundArea background area as passed to Gtk.CellRenderer.render()
    * @param cellArea cell area as passed to Gtk.CellRenderer.render()
    * @param flags render flags
    * @returns A new Gtk.CellEditable for editing this self, or None if editing is not possible 
    */
  startEditing(event: import('../Gdk').Event | null, widget: import('../Gtk').Widget, path: string, backgroundArea: import('../Gdk').Rectangle, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState): import('../Gtk').CellEditable | null;
  /**
    * Informs the cell renderer that the editing is stopped. If canceled is True, the cell renderer will emit the Gtk.CellRenderer ::editing-canceled signal.
    * @param canceled True if the editing has been canceled 
    */
  stopEditing(canceled: boolean): void;
  /**
    * Cell background color as a string 
    */
  cellBackground: string;
  /**
    * Cell background color as a Gdk.Color deprecated 
    */
  cellBackgroundGdk: import('../Gdk').Color;
  /**
    * Cell background color as a Gdk.RGBA 
    */
  cellBackgroundRgba: import('../Gdk').RGBA;
  /**
    * Whether the cell background color is set 
    */
  cellBackgroundSet: boolean;
  /**
    * Whether the cell renderer is currently in editing mode 
    */
  readonly editing: boolean;
  /**
    * The fixed height 
    */
  height: number;
  /**
    * Row is an expander row, and is expanded 
    */
  isExpanded: boolean;
  /**
    * Row has children 
    */
  isExpander: boolean;
  /**
    * Editable mode of the CellRenderer 
    */
  mode: import('../Gtk').CellRendererMode;
  /**
    * xlib.Display the cell sensitive 
    */
  sensitive: boolean;
  /**
    * xlib.Display the cell 
    */
  visible: boolean;
  /**
    * The fixed width 
    */
  width: number;
  /**
    * The x-align 
    */
  xalign: number;
  /**
    * The xpad 
    */
  xpad: number;
  /**
    * The y-align 
    */
  yalign: number;
  /**
    * The ypad 
    */
  ypad: number;
}

