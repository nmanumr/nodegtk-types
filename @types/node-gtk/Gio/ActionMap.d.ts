import * as GObject from '../GObject';

/**
  * The Gio.ActionMap interface is implemented by Gio.ActionGroup
implementations that operate by containing a number of
named Gio.Action instances, such as Gio.SimpleActionGroup. 
  */
export declare interface ActionMap extends GObject.GInterface {
  /**
    * Adds an action to the self.
    * @param action a Gio.Action 
    */
  addAction(action: import('../Gio').Action): void;
  /**
    * A convenience function for creating multiple Gio.SimpleAction instances and adding them to a Gio.ActionMap.
    * @param entries a pointer to the first item in an array of Gio.ActionEntry structs
    * @param userData the user data for signal connections 
    */
  addActionEntries(entries: import('../Gio').ActionEntry, userData: Object | null): void;
  /**
    * Looks up the action with the name action_name in self.
    * @param actionName the name of an action
    * @returns a Gio.Action, or None 
    */
  lookupAction(actionName: string): import('../Gio').Action;
  /**
    * Removes the named action from the action map.
    * @param actionName the name of the action 
    */
  removeAction(actionName: string): void;
}

