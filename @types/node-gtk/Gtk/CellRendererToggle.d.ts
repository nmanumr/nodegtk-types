import * as Gtk from '../Gtk';
export declare interface CellRendererToggle extends Gtk.CellRenderer { }

/**
  * Gtk.CellRendererToggle renders a toggle button in a cell. The
button is drawn as a radio or a checkbutton, depending on the
Gtk.CellRendererToggle :radio property.
When activated, it emits the Gtk.CellRendererToggle ::toggled signal. 
  */
export declare class CellRendererToggle {
  /**
    * Creates a new Gtk.CellRendererToggle. Adjust rendering parameters using object properties. Object properties can be set globally (with g_object_set()). Also, with Gtk.TreeViewColumn, you can bind a property to a value in a Gtk.TreeModel. For example, you can bind the “active” property on the cell renderer to a boolean value in the model, thus causing the check button to reflect the state of the model.
    * @returns the new cell renderer 
    */
  static new(): import('../Gtk').CellRenderer;
  /**
    * Returns whether the cell renderer is activatable. See Gtk.CellRendererToggle.set_activatable().
    * @returns True if the cell renderer is activatable. 
    */
  getActivatable(): boolean;
  /**
    * Returns whether the cell renderer is active. See Gtk.CellRendererToggle.set_active().
    * @returns True if the cell renderer is active. 
    */
  getActive(): boolean;
  /**
    * Returns whether we’re rendering radio toggles rather than checkboxes.
    * @returns True if we’re rendering radio toggles rather than checkboxes 
    */
  getRadio(): boolean;
  /**
    * Makes the cell renderer activatable.
    * @param setting the value to set. 
    */
  setActivatable(setting: boolean): void;
  /**
    * Activates or deactivates a cell renderer.
    * @param setting the value to set. 
    */
  setActive(setting: boolean): void;
  /**
    * If radio is True, the cell renderer renders a radio toggle (i.e. a toggle in a group of mutually-exclusive toggles). If False, it renders a check toggle (a standalone boolean option). This can be set globally for the cell renderer, or changed just before rendering each cell in the model (for Gtk.TreeView, you set up a per-row setting using Gtk.TreeViewColumn to associate model columns with cell renderer properties).
    * @param radio True to make the toggle look like a radio button 
    */
  setRadio(radio: boolean): void;
  /**
    * The toggle button can be activated 
    */
  activatable: boolean;
  /**
    * The toggle state of the button 
    */
  active: boolean;
  /**
    * The inconsistent state of the button 
    */
  inconsistent: boolean;
  /**
    * Size of check or radio indicator deprecated 
    */
  indicatorSize: number;
  /**
    * Draw the toggle button as a radio button 
    */
  radio: boolean;
}

