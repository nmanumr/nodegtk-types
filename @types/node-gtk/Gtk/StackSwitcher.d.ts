import * as Gtk from '../Gtk';
export declare interface StackSwitcher extends Gtk.Box { }

/**
  * The Gtk.StackSwitcher widget acts as a controller for a
Gtk.Stack; it shows a row of buttons to switch between
the various pages of the associated stack widget. 
  */
export declare class StackSwitcher {
  /**
    * Create a new Gtk.StackSwitcher.
    * @returns a new Gtk.StackSwitcher. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Retrieves the stack. See Gtk.StackSwitcher.set_stack().
    * @returns the stack, or None if none has been set explicitly. 
    */
  getStack(): import('../Gtk').Stack | null;
  /**
    * Sets the stack to control.
    * @param stack a Gtk.Stack 
    */
  setStack(stack: import('../Gtk').Stack | null): void;
  /**
    * Symbolic size to use for named icon 
    */
  iconSize: number;
  /**
    * Stack 
    */
  stack: import('../Gtk').Stack;
}

