/**
  * Gtk.ToggleActionEntry structs are used with
Gtk.ActionGroup.add_toggle_actions() to construct toggle actions. 
  */
export declare class ToggleActionEntry {
/**
  * The accelerator for the action, in the format understood by Gtk.accelerator_parse(). 
  */
accelerator: string;
/**
  * The function to call when the action is activated. 
  */
callback: import('../GObject').Callback;
/**
  * The initial state of the toggle action. 
  */
isActive: boolean;
/**
  * The label for the action. This field should typically be marked for translation, see Gtk.ActionGroup.set_translation_domain(). 
  */
label: string;
/**
  * The name of the action. 
  */
name: string;
/**
  * The stock id for the action, or the name of an icon from the icon theme. 
  */
stockId: string;
/**
  * The tooltip for the action. This field should typically be marked for translation, see Gtk.ActionGroup.set_translation_domain(). 
  */
tooltip: string;
}

