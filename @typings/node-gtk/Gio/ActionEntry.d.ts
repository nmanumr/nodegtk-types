/**
  * This struct defines a single action.  It is for use with
Gio.ActionMap.add_action_entries(). 
  */
export declare class ActionEntry {
/**
  *   
  */
activate: Object;
/**
  *   
  */
changeState: Object;
/**
  * the name of the action 
  */
name: string;
/**
  *   
  */
padding: number;
/**
  * the type of the parameter that must be passed to the activate function for this action, given as a single GLib.Variant type string (or None for no parameter) 
  */
parameterType: string;
/**
  * the initial state for this action, given in GVariant text format.  The state is parsed with no extra type information, so type tags must be added to the string if they are necessary.  Stateless actions should give None here. 
  */
state: string;
}

