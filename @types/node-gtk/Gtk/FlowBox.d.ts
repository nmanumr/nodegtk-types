import * as Gtk from '../Gtk';
export declare interface FlowBox extends Gtk.Container, Gtk.Orientable { }

/**
  * A Gtk.FlowBox positions child widgets in sequence according to its
orientation. 
  */
export declare class FlowBox {
  /**
    * Creates a Gtk.FlowBox.
    * @returns a new Gtk.FlowBox container 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Binds model to self.
    * @param model the Gio.ListModel to be bound to self
    * @param createWidgetFunc a function that creates widgets for items
    * @param userData user data passed to create_widget_func 
    */
  bindModel(model: import('../Gio').ListModel | null, createWidgetFunc: import('../Gtk').flowBoxCreateWidgetFunc, userData: Object | null): void;
  /**
    * Returns whether children activate on single clicks.
    * @returns True if children are activated on single click, False otherwise 
    */
  getActivateOnSingleClick(): boolean;
  /**
    * Gets the nth child in the self.
    * @param idx the position of the child
    * @returns the child widget, which will always be a Gtk.FlowBoxChild or None in case no child widget with the given index exists. 
    */
  getChildAtIndex(idx: number): import('../Gtk').FlowBoxChild | null;
  /**
    * Gets the child in the (x, y) position.
    * @param x the x coordinate of the child
    * @param y the y coordinate of the child
    * @returns the child widget, which will always be a Gtk.FlowBoxChild or None in case no child widget exists for the given x and y coordinates. 
    */
  getChildAtPos(x: number, y: number): import('../Gtk').FlowBoxChild | null;
  /**
    * Gets the horizontal spacing.
    * @returns the horizontal spacing 
    */
  getColumnSpacing(): number;
  /**
    * Returns whether the box is homogeneous (all children are the same size). See Gtk.Box.set_homogeneous().
    * @returns True if the box is homogeneous. 
    */
  getHomogeneous(): boolean;
  /**
    * Gets the maximum number of children per line.
    * @returns the maximum number of children per line 
    */
  getMaxChildrenPerLine(): number;
  /**
    * Gets the minimum number of children per line.
    * @returns the minimum number of children per line 
    */
  getMinChildrenPerLine(): number;
  /**
    * Gets the vertical spacing.
    * @returns the vertical spacing 
    */
  getRowSpacing(): number;
  /**
    * Creates a list of all selected children.
    * @returns A GLib.List containing the Gtk.Widget for each selected child. Free with g_list_free() when done. 
    */
  getSelectedChildren(): import('../Gtk').FlowBoxChild[];
  /**
    * Gets the selection mode of self.
    * @returns the Gtk.SelectionMode 
    */
  getSelectionMode(): import('../Gtk').SelectionMode;
  /**
    * Inserts the widget into self at position.
    * @param widget the Gtk.Widget to add
    * @param position the position to insert child in 
    */
  insert(widget: import('../Gtk').Widget, position: number): void;
  /**
    * Updates the filtering for all children. 
    */
  invalidateFilter(): void;
  /**
    * Updates the sorting for all children. 
    */
  invalidateSort(): void;
  /**
    * Select all children of self, if the selection mode allows it. 
    */
  selectAll(): void;
  /**
    * Selects a single child of self, if the selection mode allows it.
    * @param child a child of self 
    */
  selectChild(child: import('../Gtk').FlowBoxChild): void;
  /**
    * Calls a function for each selected child.
    * @param func the function to call for each selected child
    * @param data user data to pass to the function 
    */
  selectedForeach(func: import('../Gtk').flowBoxForeachFunc, data: Object | null): void;
  /**
    * If single is True, children will be activated when you click on them, otherwise you need to double-click.
    * @param single True to emit child-activated on a single click 
    */
  setActivateOnSingleClick(single: boolean): void;
  /**
    * Sets the horizontal space to add between children. See the Gtk.FlowBox :column-spacing property.
    * @param spacing the spacing to use 
    */
  setColumnSpacing(spacing: number): void;
  /**
    * By setting a filter function on the self one can decide dynamically which of the children to show. For instance, to implement a search function that only shows the children matching the search terms.
    * @param filterFunc callback that lets you filter which children to show
    * @param userData user data passed to filter_func 
    */
  setFilterFunc(filterFunc: import('../Gtk').flowBoxFilterFunc | null, userData: Object | null): void;
  /**
    * Hooks up an adjustment to focus handling in self. The adjustment is also used for autoscrolling during rubberband selection. See Gtk.ScrolledWindow.get_hadjustment() for a typical way of obtaining the adjustment, and Gtk.FlowBox.set_vadjustment()for setting the vertical adjustment.
    * @param adjustment an adjustment which should be adjusted when the focus is moved among the descendents of container 
    */
  setHadjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Sets the Gtk.FlowBox :homogeneous property of self, controlling whether or not all children of self are given equal space in the box.
    * @param homogeneous True to create equal allotments, False for variable allotments 
    */
  setHomogeneous(homogeneous: boolean): void;
  /**
    * Sets the maximum number of children to request and allocate space for in self’s orientation.
    * @param nChildren the maximum number of children per line 
    */
  setMaxChildrenPerLine(nChildren: number): void;
  /**
    * Sets the minimum number of children to line up in self’s orientation before flowing.
    * @param nChildren the minimum number of children per line 
    */
  setMinChildrenPerLine(nChildren: number): void;
  /**
    * Sets the vertical space to add between children. See the Gtk.FlowBox :row-spacing property.
    * @param spacing the spacing to use 
    */
  setRowSpacing(spacing: number): void;
  /**
    * Sets how selection works in self. See Gtk.SelectionMode for details.
    * @param mode the new selection mode 
    */
  setSelectionMode(mode: import('../Gtk').SelectionMode): void;
  /**
    * By setting a sort function on the self, one can dynamically reorder the children of the box, based on the contents of the children.
    * @param sortFunc the sort function
    * @param userData user data passed to sort_func 
    */
  setSortFunc(sortFunc: import('../Gtk').flowBoxSortFunc | null, userData: Object | null): void;
  /**
    * Hooks up an adjustment to focus handling in self. The adjustment is also used for autoscrolling during rubberband selection. See Gtk.ScrolledWindow.get_vadjustment() for a typical way of obtaining the adjustment, and Gtk.FlowBox.set_hadjustment()for setting the horizontal adjustment.
    * @param adjustment an adjustment which should be adjusted when the focus is moved among the descendents of container 
    */
  setVadjustment(adjustment: import('../Gtk').Adjustment): void;
  /**
    * Unselect all children of self, if the selection mode allows it. 
    */
  unselectAll(): void;
  /**
    * Unselects a single child of self, if the selection mode allows it.
    * @param child a child of self 
    */
  unselectChild(child: import('../Gtk').FlowBoxChild): void;
  /**
    * Activate row on a single click 
    */
  activateOnSingleClick: boolean;
  /**
    * The amount of horizontal space between two children 
    */
  columnSpacing: number;
  /**
    * Whether the children should all be the same size 
    */
  homogeneous: boolean;
  /**
    * The maximum amount of children to request space for consecutively in the given orientation. 
    */
  maxChildrenPerLine: number;
  /**
    * The minimum number of children to allocate consecutively in the given orientation. 
    */
  minChildrenPerLine: number;
  /**
    * The amount of vertical space between two children 
    */
  rowSpacing: number;
  /**
    * The selection mode 
    */
  selectionMode: import('../Gtk').SelectionMode;
}

