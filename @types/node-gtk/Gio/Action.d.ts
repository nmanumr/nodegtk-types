import * as GObject from '../GObject';
export declare interface Action extends GObject.GInterface { }

/**
  * Gio.Action represents a single named action. 
  */
export declare class Action {
  /**
    * Checks if action_name is valid.
    * @param actionName an potential action name
    * @returns True if action_name is valid 
    */
  static nameIsValid(actionName: string): boolean;
  /**
    * Parses a detailed action name into its separate name and target components.
    * @param detailedName a detailed action name
    * @returns True if successful, else False with error set  action_name:the action name target_value:the target value, or None for no target 
    */
  static parseDetailedName(detailedName: string): [boolean, string, import('../GLib').Variant];
  /**
    * Formats a detailed action name from action_name and target_value.
    * @param actionName a valid action name
    * @param targetValue a GLib.Variant target value, or None
    * @returns a detailed format string 
    */
  static printDetailedName(actionName: string, targetValue: import('../GLib').Variant | null): string;
  /**
    * Activates the action.
    * @param parameter the parameter to the activation 
    */
  activate(parameter: import('../GLib').Variant | null): void;
  /**
    * Request for the state of self to be changed to value.
    * @param value the new state 
    */
  changeState(value: import('../GLib').Variant): void;
  /**
    * Checks if self is currently enabled.
    * @returns whether the action is enabled 
    */
  getEnabled(): boolean;
  /**
    * Queries the name of self.
    * @returns the name of the action 
    */
  getName(): string;
  /**
    * Queries the type of the parameter that must be given when activating self.
    * @returns the parameter type 
    */
  getParameterType(): import('../GLib').VariantType | null;
  /**
    * Queries the current state of self.
    * @returns the current state of the action 
    */
  getState(): import('../GLib').Variant;
  /**
    * Requests a hint about the valid range of values for the state of self.
    * @returns the state range hint 
    */
  getStateHint(): import('../GLib').Variant | null;
  /**
    * Queries the type of the state of self.
    * @returns the state type, if the action is stateful 
    */
  getStateType(): import('../GLib').VariantType | null;
  /**
    * If the action can be activated 
    */
  readonly enabled: boolean;
  /**
    * The name used to invoke the action 
    */
  readonly name: string;
  /**
    * The type of GLib.Variant passed to activate() 
    */
  readonly parameterType: import('../GLib').VariantType;
  /**
    * The state the action is in 
    */
  readonly state: import('../GLib').Variant;
  /**
    * The type of the state kept by the action 
    */
  readonly stateType: import('../GLib').VariantType;
}

