/**
  * Struct defining a pad action entry. 
  */
export declare class PadActionEntry {
/**
  * action name that will be activated in the Gio.ActionGroup. 
  */
actionName: string;
/**
  * the 0-indexed button/ring/strip number that will trigger this action entry. 
  */
index: number;
/**
  * Human readable description of this action entry, this string should be deemed user-visible. 
  */
label: string;
/**
  * the mode that will trigger this action entry, or -1 for all modes. 
  */
mode: number;
/**
  * the type of pad feature that will trigger this action entry. 
  */
type: import('../Gtk').PadActionType;
}

