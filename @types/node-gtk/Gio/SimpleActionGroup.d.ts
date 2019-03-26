import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface SimpleActionGroup extends GObject.Object, Gio.ActionGroup, Gio.ActionMap { }

/**
  * Gio.SimpleActionGroup is a hash table filled with Gio.Action objects,
implementing the Gio.ActionGroup and Gio.ActionMap interfaces. 
  */
export declare class SimpleActionGroup {
  /**
    * Creates a new, empty, Gio.SimpleActionGroup.
    * @returns a new Gio.SimpleActionGroup 
    */
  static new(): import('../Gio').SimpleActionGroup;
  /**
    * A convenience function for creating multiple Gio.SimpleAction instances and adding them to the action group.
    * @param entries a pointer to the first item in an array of Gio.ActionEntry structs
    * @param userData the user data for signal connections 
    */
  addEntries(entries: import('../Gio').ActionEntry, userData: Object | null): void;
  /**
    * Adds an action to the action group.
    * @param action a Gio.Action 
    */
  insert(action: import('../Gio').Action): void;
  /**
    * Looks up the action with the name action_name in the group.
    * @param actionName the name of an action
    * @returns a Gio.Action, or None 
    */
  lookup(actionName: string): import('../Gio').Action;
  /**
    * Removes the named action from the action group.
    * @param actionName the name of the action 
    */
  remove(actionName: string): void;
}

