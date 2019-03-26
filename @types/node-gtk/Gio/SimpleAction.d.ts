import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface SimpleAction extends GObject.Object, Gio.Action { }

/**
  * A Gio.SimpleAction is the obvious simple implementation of the Gio.Action
interface. This is the easiest way to create an action for purposes of
adding it to a Gio.SimpleActionGroup. 
  */
export declare class SimpleAction {
  /**
    * Creates a new action.
    * @param name the name of the action
    * @param parameterType the type of parameter that will be passed to handlers for the Gio.SimpleAction ::activate signal, or None for no parameter
    * @returns a new Gio.SimpleAction 
    */
  static new(name: string, parameterType: import('../GLib').VariantType | null): import('../Gio').SimpleAction;
  /**
    * Creates a new stateful action.
    * @param name the name of the action
    * @param parameterType the type of the parameter that will be passed to handlers for the Gio.SimpleAction ::activate signal, or None for no parameter
    * @param state the initial state of the action
    * @returns a new Gio.SimpleAction 
    */
  static newStateful(name: string, parameterType: import('../GLib').VariantType | null, state: import('../GLib').Variant): import('../Gio').SimpleAction;
  /**
    * Sets the action as enabled or not.
    * @param enabled whether the action is enabled 
    */
  setEnabled(enabled: boolean): void;
  /**
    * Sets the state of the action.
    * @param value the new GLib.Variant for the state 
    */
  setState(value: import('../GLib').Variant): void;
  /**
    * Sets the state hint for the action.
    * @param stateHint a GLib.Variant representing the state hint 
    */
  setStateHint(stateHint: import('../GLib').Variant | null): void;
  ;
}

