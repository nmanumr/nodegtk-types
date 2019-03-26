import * as GObject from '../GObject';
export declare interface Actionable extends GObject.GInterface { }

/**
  * This interface provides a convenient way of associating widgets with
actions on a Gtk.ApplicationWindow or Gtk.Application. 
  */
export declare interface Actionable {
  /**
    * Gets the action name for self.
    * @returns the action name, or None if none is set 
    */
  getActionName(): string | null;
  /**
    * Gets the current target value of self.
    * @returns the current target value 
    */
  getActionTargetValue(): import('../GLib').Variant;
  /**
    * Specifies the name of the action with which this widget should be associated.  If action_name is None then the widget will be unassociated from any previous action.
    * @param actionName an action name, or None 
    */
  setActionName(actionName: string | null): void;
  /**
    * Sets the target value of an actionable widget.
    * @param targetValue a GLib.Variant to set as the target value, or None 
    */
  setActionTargetValue(targetValue: import('../GLib').Variant | null): void;
  /**
    * Sets the action-name and associated string target value of an actionable widget.
    * @param detailedActionName the detailed action name 
    */
  setDetailedActionName(detailedActionName: string): void;
  /**
    * The name of the associated action, like ‘app.quit’ 
    */
  actionName: string;
  /**
    * The parameter for action invocations 
    */
  actionTarget: import('../GLib').Variant;
}

