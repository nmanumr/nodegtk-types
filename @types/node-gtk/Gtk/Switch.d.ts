import * as Gtk from '../Gtk';

export declare interface Switch extends Gtk.Widget, Gtk.Actionable, Gtk.Activatable {
  getState(): boolean;
  getState(): Gtk.StateType;

  setState(state: boolean): void;
  setState(state: Gtk.StateType): void;
}

/**
  * Gtk.Switch is a widget that has two states: on or off. The user can control
which state should be active by clicking the empty area, or by dragging the
handle. 
  */
export declare class Switch {
  /**
    * Creates a new Gtk.Switch widget.
    * @returns the newly created Gtk.Switch instance 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Gets whether the Gtk.Switch is in its “on” or “off” state.
    * @returns True if the Gtk.Switch is active, and False otherwise 
    */
  getActive(): boolean;
  /**
    * Gets the underlying state of the Gtk.Switch.
    * @returns the underlying state 
    */
  getState(): boolean;
  /**
    * Changes the state of self to the desired one.
    * @param isActive True if self should be active, and False otherwise 
    */
  setActive(isActive: boolean): void;
  /**
    * Sets the underlying state of the Gtk.Switch.
    * @param state the new state 
    */
  setState(state: boolean): void;
  /**
    * Whether the switch is on or off 
    */
  active: boolean;
  /**
    * The backend state 
    */
  state: boolean;
}

