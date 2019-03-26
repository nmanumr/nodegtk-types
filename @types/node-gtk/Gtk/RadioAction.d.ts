import * as Gtk from '../Gtk';
export declare interface RadioAction extends Gtk.ToggleAction { }

/**
  * A Gtk.RadioAction is similar to Gtk.RadioMenuItem. A number of radio
actions can be linked together so that only one may be active at any
one time. 
  */
export declare class RadioAction {
  /**
    * Creates a new Gtk.RadioAction object. To add the action to a Gtk.ActionGroup and set the accelerator for the action, call Gtk.ActionGroup.add_action_with_accel().
    * @param name A unique name for the action
    * @param label The label displayed in menu items and on buttons, or None
    * @param tooltip A tooltip for this action, or None
    * @param stockId The stock icon to display in widgets representing this action, or None
    * @param value The value which Gtk.RadioAction.get_current_value() should return if this action is selected.
    * @returns a new Gtk.RadioAction 
    */
  static new(name: string, label: string | null, tooltip: string | null, stockId: string | null, value: number): import('../Gtk').RadioAction;
  /**
    * Obtains the value property of the currently active member of the group to which self belongs.
    * @returns The value of the currently active group member 
    */
  getCurrentValue(): number;
  /**
    * Returns the list representing the radio group for this object. Note that the returned list is only valid until the next change to the group.
    * @returns the list representing the radio group for this object 
    */
  getGroup(): import('../Gtk').RadioAction[];
  /**
    * Joins a radio action object to the group of another radio action object.
    * @param groupSource a radio action object whos group we are joining, or None to remove the radio action from its group 
    */
  joinGroup(groupSource: import('../Gtk').RadioAction | null): void;
  /**
    * Sets the currently active group member to the member with value property current_value.
    * @param currentValue the new value 
    */
  setCurrentValue(currentValue: number): void;
  /**
    * Sets the radio group for the radio action object.
    * @param group a list representing a radio group, or None 
    */
  setGroup(group: import('../Gtk').RadioAction | null): void;
  /**
    * The value property of the currently active member of the group to which this action belongs. deprecated 
    */
  currentValue: number;
  /**
    * The radio action whose group this action belongs to. deprecated 
    */
  group: import('../Gtk').RadioAction;
  /**
    * The value returned by Gtk.RadioAction.get_current_value() when this action is the current action of its group. deprecated 
    */
  value: number;
}

