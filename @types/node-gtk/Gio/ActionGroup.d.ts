import * as GObject from '../GObject';

/**
  * Gio.ActionGroup represents a group of actions. Actions can be used to
expose functionality in a structured way, either from one part of a
program to another, or to the outside world. Action groups are often
used together with a Gio.MenuModel that provides additional
representation data for displaying the actions to the user, e.g. in
a menu. 
  */
export declare interface ActionGroup extends GObject.GInterface {
  /**
    * Emits the Gio.ActionGroup ::action-added signal on self.
    * @param actionName the name of an action in the group 
    */
  actionAdded(actionName: string): void;
  /**
    * Emits the Gio.ActionGroup ::action-enabled-changed signal on self.
    * @param actionName the name of an action in the group
    * @param enabled whether or not the action is now enabled 
    */
  actionEnabledChanged(actionName: string, enabled: boolean): void;
  /**
    * Emits the Gio.ActionGroup ::action-removed signal on self.
    * @param actionName the name of an action in the group 
    */
  actionRemoved(actionName: string): void;
  /**
    * Emits the Gio.ActionGroup ::action-state-changed signal on self.
    * @param actionName the name of an action in the group
    * @param state the new state of the named action 
    */
  actionStateChanged(actionName: string, state: import('../GLib').Variant): void;
  /**
    * Activate the named action within self.
    * @param actionName the name of the action to activate
    * @param parameter parameters to the activation 
    */
  activateAction(actionName: string, parameter: import('../GLib').Variant | null): void;
  /**
    * Request for the state of the named action within self to be changed to value.
    * @param actionName the name of the action to request the change on
    * @param value the new state 
    */
  changeActionState(actionName: string, value: import('../GLib').Variant): void;
  /**
    * Checks if the named action within self is currently enabled.
    * @param actionName the name of the action to query
    * @returns whether or not the action is currently enabled 
    */
  getActionEnabled(actionName: string): boolean;
  /**
    * Queries the type of the parameter that must be given when activating the named action within self.
    * @param actionName the name of the action to query
    * @returns the parameter type 
    */
  getActionParameterType(actionName: string): import('../GLib').VariantType | null;
  /**
    * Queries the current state of the named action within self.
    * @param actionName the name of the action to query
    * @returns the current state of the action 
    */
  getActionState(actionName: string): import('../GLib').Variant | null;
  /**
    * Requests a hint about the valid range of values for the state of the named action within self.
    * @param actionName the name of the action to query
    * @returns the state range hint 
    */
  getActionStateHint(actionName: string): import('../GLib').Variant | null;
  /**
    * Queries the type of the state of the named action within self.
    * @param actionName the name of the action to query
    * @returns the state type, if the action is stateful 
    */
  getActionStateType(actionName: string): import('../GLib').VariantType | null;
  /**
    * Checks if the named action exists within self.
    * @param actionName the name of the action to check for
    * @returns whether the named action exists 
    */
  hasAction(actionName: string): boolean;
  /**
    * Lists the actions contained within self.
    * @returns a None-terminated array of the names of the actions in the group 
    */
  listActions(): string[];
  /**
    * Queries all aspects of the named action within an self.
    * @param actionName the name of an action in the group
    * @returns True if the action exists, else False  enabled:if the action is presently enabled parameter_type:the parameter type, or None if none needed state_type:the state type, or None if stateless state_hint:the state hint, or None if none state:the current state, or None if stateless 
    */
  queryAction(actionName: string): [boolean, boolean, import('../GLib').VariantType, import('../GLib').VariantType, import('../GLib').Variant, import('../GLib').Variant];
}

