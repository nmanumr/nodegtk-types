import * as Gtk from '../Gtk';
export declare interface ToggleAction extends Gtk.Action { }

/**
  * A Gtk.ToggleAction corresponds roughly to a Gtk.CheckMenuItem. It has an
“active” state specifying whether the action has been checked or not. 
  */
export declare class ToggleAction {
  /**
    * Creates a new Gtk.ToggleAction object. To add the action to a Gtk.ActionGroup and set the accelerator for the action, call Gtk.ActionGroup.add_action_with_accel().
    * @param name A unique name for the action
    * @param label The label displayed in menu items and on buttons, or None
    * @param tooltip A tooltip for the action, or None
    * @param stockId The stock icon to display in widgets representing the action, or None
    * @returns a new Gtk.ToggleAction 
    */
  static new(name: string, label: string | null, tooltip: string | null, stockId: string | null): import('../Gtk').ToggleAction;
  /**
    * Returns the checked state of the toggle action.
    * @returns the checked state of the toggle action 
    */
  getActive(): boolean;
  /**
    * Returns whether the action should have proxies like a radio action.
    * @returns whether the action should have proxies like a radio action. 
    */
  getDrawAsRadio(): boolean;
  /**
    * Sets the checked state on the toggle action.
    * @param isActive whether the action should be checked or not 
    */
  setActive(isActive: boolean): void;
  /**
    * Sets whether the action should have proxies like a radio action.
    * @param drawAsRadio whether the action should have proxies like a radio action 
    */
  setDrawAsRadio(drawAsRadio: boolean): void;
  /**
    * Emits the “toggled” signal on the toggle action. 
    */
  toggled(): void;
  /**
    * Whether the toggle action should be active deprecated 
    */
  active: boolean;
  /**
    * Whether the proxies for this action look like radio action proxies deprecated 
    */
  drawAsRadio: boolean;
}

