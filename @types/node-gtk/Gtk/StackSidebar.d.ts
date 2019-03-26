import * as Gtk from '../Gtk';
export declare interface StackSidebar extends Gtk.Bin { }

/**
  * A Gtk.StackSidebar enables you to quickly and easily provide a
consistent “sidebar” object for your user interface. 
  */
export declare class StackSidebar {
  /**
    * Creates a new sidebar.
    * @returns the new Gtk.StackSidebar 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Retrieves the stack. See Gtk.StackSidebar.set_stack().
    * @returns the associated Gtk.Stack or None if none has been set explicitly 
    */
  getStack(): import('../Gtk').Stack | null;
  /**
    * Set the Gtk.Stack associated with this Gtk.StackSidebar.
    * @param stack a Gtk.Stack 
    */
  setStack(stack: import('../Gtk').Stack): void;
  /**
    * Associated stack for this Gtk.StackSidebar 
    */
  stack: import('../Gtk').Stack;
}

