import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface CellArea extends GObject.InitiallyUnowned, Gtk.Buildable, Gtk.CellLayout { }

/**
  * The Gtk.CellArea is an abstract class for Gtk.CellLayout widgets
(also referred to as “layouting widgets”) to interface with an
arbitrary number of Gtk.CellRenderers and interact with the user
for a given Gtk.TreeModel row. 
  */
export declare abstract class CellArea {
  /**
    * Finds a cell property of a cell area class by name.
    * @param propertyName the name of the child property to find
    * @returns the GObject.ParamSpec of the child property or None if self has no child property with that name. 
    */
  static findCellProperty(propertyName: string): import('../GObject').ParamSpec;
  /**
    * Installs a cell property on a cell area class.
    * @param propertyId the id for the property
    * @param pspec the GObject.ParamSpec for the property 
    */
  static installCellProperty(propertyId: number, pspec: import('../GObject').ParamSpec): void;
  /**
    * Returns all cell properties of a cell area class.
    * @returns a newly allocated None-terminated array of GObject.ParamSpec.  The array must be freed with GLib.free(). 
    */
  static listCellProperties(): import('../GObject').ParamSpec[];
  /**
    * Activates self, usually by activating the currently focused cell, however some subclasses which embed widgets in the area can also activate a widget if it currently has the focus.
    * @param context the Gtk.CellAreaContext in context with the current row data
    * @param widget the Gtk.Widget that self is rendering on
    * @param cellArea the size and location of self relative to widget’s allocation
    * @param flags the Gtk.CellRendererState flags for self for this row of data.
    * @param editOnly if True then only cell renderers that are Gtk.CellRendererMode.EDITABLE will be activated.
    * @returns Whether self was successfully activated. 
    */
  activate(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState, editOnly: boolean): boolean;
  /**
    * This is used by Gtk.CellArea subclasses when handling events to activate cells, the base Gtk.CellArea class activates cells for keyboard events for free in its own Gtk.CellArea->activate() implementation.
    * @param widget the Gtk.Widget that self is rendering onto
    * @param renderer the Gtk.CellRenderer in self to activate
    * @param event the Gdk.Event for which cell activation should occur
    * @param cellArea the Gdk.Rectangle in widget relative coordinates of renderer for the current row.
    * @param flags the Gtk.CellRendererState for renderer
    * @returns whether cell activation was successful 
    */
  activateCell(widget: import('../Gtk').Widget, renderer: import('../Gtk').CellRenderer, event: import('../Gdk').Event, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState): boolean;
  /**
    * Adds renderer to self with the default child cell properties.
    * @param renderer the Gtk.CellRenderer to add to self 
    */
  add(renderer: import('../Gtk').CellRenderer): void;
  /**
    * Adds sibling to renderer’s focusable area, focus will be drawn around renderer and all of its siblings if renderer can focus for a given row.
    * @param renderer the Gtk.CellRenderer expected to have focus
    * @param sibling the Gtk.CellRenderer to add to renderer’s focus area 
    */
  addFocusSibling(renderer: import('../Gtk').CellRenderer, sibling: import('../Gtk').CellRenderer): void;
  /**
    * Applies any connected attributes to the renderers in self by pulling the values from tree_model.
    * @param treeModel the Gtk.TreeModel to pull values from
    * @param iter the Gtk.TreeIter in tree_model to apply values for
    * @param isExpander whether iter has children
    * @param isExpanded whether iter is expanded in the view and children are visible 
    */
  applyAttributes(treeModel: import('../Gtk').TreeModel, iter: import('../Gtk').TreeIter, isExpander: boolean, isExpanded: boolean): void;
  /**
    * Connects an attribute to apply values from column for the Gtk.TreeModel in use.
    * @param renderer the Gtk.CellRenderer to connect an attribute for
    * @param attribute the attribute name
    * @param column the Gtk.TreeModel column to fetch attribute values from 
    */
  attributeConnect(renderer: import('../Gtk').CellRenderer, attribute: string, column: number): void;
  /**
    * Disconnects attribute for the renderer in self so that attribute will no longer be updated with values from the model.
    * @param renderer the Gtk.CellRenderer to disconnect an attribute for
    * @param attribute the attribute name 
    */
  attributeDisconnect(renderer: import('../Gtk').CellRenderer, attribute: string): void;
  /**
    * Returns the model column that an attribute has been mapped to, or -1 if the attribute is not mapped.
    * @param renderer a Gtk.CellRenderer
    * @param attribute an attribute on the renderer
    * @returns the model column, or -1 
    */
  attributeGetColumn(renderer: import('../Gtk').CellRenderer, attribute: string): number;
  /**
    * Gets the value of a cell property for renderer in self.
    * @param renderer a Gtk.CellRenderer inside self
    * @param propertyName the name of the property to get
    * @param value a location to return the value 
    */
  cellGetProperty(renderer: import('../Gtk').CellRenderer, propertyName: string, value: import('../GObject').Value): void;
  /**
    * Sets a cell property for renderer in self.
    * @param renderer a Gtk.CellRenderer inside self
    * @param propertyName the name of the cell property to set
    * @param value the value to set the cell property to 
    */
  cellSetProperty(renderer: import('../Gtk').CellRenderer, propertyName: string, value: import('../GObject').Value): void;
  /**
    * This is sometimes needed for cases where rows need to share alignments in one orientation but may be separately grouped in the opposing orientation.
    * @param context the Gtk.CellAreaContext to copy
    * @returns a newly created Gtk.CellAreaContext copy of context. 
    */
  copyContext(context: import('../Gtk').CellAreaContext): import('../Gtk').CellAreaContext;
  /**
    * Creates a Gtk.CellAreaContext to be used with self for all purposes. Gtk.CellAreaContext stores geometry information for rows for which it was operated on, it is important to use the same context for the same row of data at all times (i.e. one should render and handle events with the same Gtk.CellAreaContext which was used to request the size of those rows of data).
    * @returns a newly created Gtk.CellAreaContext which can be used with self. 
    */
  createContext(): import('../Gtk').CellAreaContext;
  /**
    * Delegates event handling to a Gtk.CellArea.
    * @param context the Gtk.CellAreaContext for this row of data.
    * @param widget the Gtk.Widget that self is rendering to
    * @param event the Gdk.Event to handle
    * @param cellArea the widget relative coordinates for self
    * @param flags the Gtk.CellRendererState for self in this row.
    * @returns True if the event was handled by self. 
    */
  event(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, event: import('../Gdk').Event, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState): number;
  /**
    * This should be called by the self’s owning layout widget when focus is to be passed to self, or moved within self for a given direction and row data.
    * @param direction the Gtk.DirectionType
    * @returns True if focus remains inside self as a result of this call. 
    */
  focus(direction: import('../Gtk').DirectionType): boolean;
  /**
    * Calls callback for every Gtk.CellRenderer in self.
    * @param callback the Gtk.CellCallback to call
    * @param callbackData user provided data pointer 
    */
  foreach(callback: import('../Gtk').cellCallback, callbackData: Object | null): void;
  /**
    * Calls callback for every Gtk.CellRenderer in self with the allocated rectangle inside cell_area.
    * @param context the Gtk.CellAreaContext for this row of data.
    * @param widget the Gtk.Widget that self is rendering to
    * @param cellArea the widget relative coordinates and size for self
    * @param backgroundArea the widget relative coordinates of the background area
    * @param callback the Gtk.CellAllocCallback to call
    * @param callbackData user provided data pointer 
    */
  foreachAlloc(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, cellArea: import('../Gdk').Rectangle, backgroundArea: import('../Gdk').Rectangle, callback: import('../Gtk').cellAllocCallback, callbackData: Object | null): void;
  /**
    * Derives the allocation of renderer inside self if self were to be renderered in cell_area.
    * @param context the Gtk.CellAreaContext used to hold sizes for self.
    * @param widget the Gtk.Widget that self is rendering on
    * @param renderer the Gtk.CellRenderer to get the allocation for
    * @param cellArea the whole allocated area for self in widget for this row
    * @returns where to store the allocation for renderer 
    */
  getCellAllocation(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, renderer: import('../Gtk').CellRenderer, cellArea: import('../Gdk').Rectangle): import('../Gdk').Rectangle;
  /**
    * Gets the Gtk.CellRenderer at x and y coordinates inside self and optionally returns the full cell allocation for it inside cell_area.
    * @param context the Gtk.CellAreaContext used to hold sizes for self.
    * @param widget the Gtk.Widget that self is rendering on
    * @param cellArea the whole allocated area for self in widget for this row
    * @param x the x position
    * @param y the y position
    * @returns the Gtk.CellRenderer at x and y.   alloc_area:where to store the inner allocated area of the returned cell renderer, or None. 
    */
  getCellAtPosition(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, cellArea: import('../Gdk').Rectangle, x: number, y: number): [import('../Gtk').CellRenderer, import('../Gdk').Rectangle];
  /**
    * Gets the current Gtk.TreePath string for the currently applied Gtk.TreeIter, this is implicitly updated when Gtk.CellArea.apply_attributes() is called and can be used to interact with renderers from Gtk.CellArea subclasses.
    * @returns The current Gtk.TreePath string for the current attributes applied to self. This string belongs to the area and should not be freed. 
    */
  getCurrentPathString(): string;
  /**
    * Gets the Gtk.CellEditable widget currently used to edit the currently edited cell.
    * @returns The currently active Gtk.CellEditable widget 
    */
  getEditWidget(): import('../Gtk').CellEditable;
  /**
    * Gets the Gtk.CellRenderer in self that is currently being edited.
    * @returns The currently edited Gtk.CellRenderer 
    */
  getEditedCell(): import('../Gtk').CellRenderer;
  /**
    * Retrieves the currently focused cell for self
    * @returns the currently focused cell in self. 
    */
  getFocusCell(): import('../Gtk').CellRenderer;
  /**
    * Gets the Gtk.CellRenderer which is expected to be focusable for which renderer is, or may be a sibling.
    * @param renderer the Gtk.CellRenderer
    * @returns the Gtk.CellRenderer for which renderer is a sibling, or None. 
    */
  getFocusFromSibling(renderer: import('../Gtk').CellRenderer): import('../Gtk').CellRenderer | null;
  /**
    * Gets the focus sibling cell renderers for renderer.
    * @param renderer the Gtk.CellRenderer expected to have focus
    * @returns A GLib.List of Gtk.CellRenderers. The returned list is internal and should not be freed. 
    */
  getFocusSiblings(renderer: import('../Gtk').CellRenderer): import('../Gtk').CellRenderer[];
  /**
    * Retrieves a cell area’s initial minimum and natural height.
    * @param context the Gtk.CellAreaContext to perform this request with
    * @param widget the Gtk.Widget where self will be rendering
    * @returns minimum_height:location to store the minimum height, or None natural_height:location to store the natural height, or None 
    */
  getPreferredHeight(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget): [number, number];
  /**
    * Retrieves a cell area’s minimum and natural height if it would be given the specified width.
    * @param context the Gtk.CellAreaContext which has already been requested for widths.
    * @param widget the Gtk.Widget where self will be rendering
    * @param width the width for which to check the height of this area
    * @returns minimum_height:location to store the minimum height, or None natural_height:location to store the natural height, or None 
    */
  getPreferredHeightForWidth(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, width: number): [number, number];
  /**
    * Retrieves a cell area’s initial minimum and natural width.
    * @param context the Gtk.CellAreaContext to perform this request with
    * @param widget the Gtk.Widget where self will be rendering
    * @returns minimum_width:location to store the minimum width, or None natural_width:location to store the natural width, or None 
    */
  getPreferredWidth(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget): [number, number];
  /**
    * Retrieves a cell area’s minimum and natural width if it would be given the specified height.
    * @param context the Gtk.CellAreaContext which has already been requested for widths.
    * @param widget the Gtk.Widget where self will be rendering
    * @param height the height for which to check the width of this area
    * @returns minimum_width:location to store the minimum width, or None natural_width:location to store the natural width, or None 
    */
  getPreferredWidthForHeight(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, height: number): [number, number];
  /**
    * Gets whether the area prefers a height-for-width layout or a width-for-height layout.
    * @returns The Gtk.SizeRequestMode preferred by self. 
    */
  getRequestMode(): import('../Gtk').SizeRequestMode;
  /**
    * Checks if self contains renderer.
    * @param renderer the Gtk.CellRenderer to check
    * @returns True if renderer is in the self. 
    */
  hasRenderer(renderer: import('../Gtk').CellRenderer): boolean;
  /**
    * This is a convenience function for Gtk.CellArea implementations to get the inner area where a given Gtk.CellRenderer will be rendered. It removes any padding previously added by Gtk.CellArea.request_renderer().
    * @param widget the Gtk.Widget that self is rendering onto
    * @param cellArea the widget relative coordinates where one of self’s cells is to be placed
    * @returns the return location for the inner cell area 
    */
  innerCellArea(widget: import('../Gtk').Widget, cellArea: import('../Gdk').Rectangle): import('../Gdk').Rectangle;
  /**
    * Returns whether the area can do anything when activated, after applying new attributes to self.
    * @returns whether self can do anything when activated. 
    */
  isActivatable(): boolean;
  /**
    * Returns whether sibling is one of renderer’s focus siblings (see Gtk.CellArea.add_focus_sibling()).
    * @param renderer the Gtk.CellRenderer expected to have focus
    * @param sibling the Gtk.CellRenderer to check against renderer’s sibling list
    * @returns True if sibling is a focus sibling of renderer 
    */
  isFocusSibling(renderer: import('../Gtk').CellRenderer, sibling: import('../Gtk').CellRenderer): boolean;
  /**
    * Removes renderer from self.
    * @param renderer the Gtk.CellRenderer to remove from self 
    */
  remove(renderer: import('../Gtk').CellRenderer): void;
  /**
    * Removes sibling from renderer’s focus sibling list (see Gtk.CellArea.add_focus_sibling()).
    * @param renderer the Gtk.CellRenderer expected to have focus
    * @param sibling the Gtk.CellRenderer to remove from renderer’s focus area 
    */
  removeFocusSibling(renderer: import('../Gtk').CellRenderer, sibling: import('../Gtk').CellRenderer): void;
  /**
    * Renders self’s cells according to self’s layout onto widget at the given coordinates.
    * @param context the Gtk.CellAreaContext for this row of data.
    * @param widget the Gtk.Widget that self is rendering to
    * @param cr the cairo.Context to render with
    * @param backgroundArea the widget relative coordinates for self’s background
    * @param cellArea the widget relative coordinates for self
    * @param flags the Gtk.CellRendererState for self in this row.
    * @param paintFocus whether self should paint focus on focused cells for focused rows or not. 
    */
  render(context: import('../Gtk').CellAreaContext, widget: import('../Gtk').Widget, cr: import('../cairo').Context, backgroundArea: import('../Gdk').Rectangle, cellArea: import('../Gdk').Rectangle, flags: import('../Gtk').CellRendererState, paintFocus: boolean): void;
  /**
    * This is a convenience function for Gtk.CellArea implementations to request size for cell renderers. It’s important to use this function to request size and then use Gtk.CellArea.inner_cell_area() at render and event time since this function will add padding around the cell for focus painting.
    * @param renderer the Gtk.CellRenderer to request size for
    * @param orientation the Gtk.Orientation in which to request size
    * @param widget the Gtk.Widget that self is rendering onto
    * @param forSize the allocation contextual size to request for, or -1 if the base request for the orientation is to be returned.
    * @returns minimum_size:location to store the minimum size, or None natural_size:location to store the natural size, or None 
    */
  requestRenderer(renderer: import('../Gtk').CellRenderer, orientation: import('../Gtk').Orientation, widget: import('../Gtk').Widget, forSize: number): [number, number];
  /**
    * Explicitly sets the currently focused cell to renderer.
    * @param renderer the Gtk.CellRenderer to give focus to 
    */
  setFocusCell(renderer: import('../Gtk').CellRenderer): void;
  /**
    * Explicitly stops the editing of the currently edited cell.
    * @param canceled whether editing was canceled. 
    */
  stopEditing(canceled: boolean): void;
  /**
    * The widget currently editing the edited cell 
    */
  readonly editWidget: import('../Gtk').CellEditable;
  /**
    * The cell which is currently being edited 
    */
  readonly editedCell: import('../Gtk').CellRenderer;
  /**
    * The cell which currently has focus 
    */
  focusCell: import('../Gtk').CellRenderer;
}

