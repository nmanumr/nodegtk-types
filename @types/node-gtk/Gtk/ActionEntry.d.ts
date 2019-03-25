/**
  * Gtk.ActionEntry structs are used with Gtk.ActionGroup.add_actions() to
construct actions. 
  */
export declare class ActionEntry {
/**
  * The accelerator for the action, in the format understood by Gtk.accelerator_parse(). 
  */
accelerator: string;
/**
  * The function to call when the action is activated. 
  */
callback: import('../GObject').Callback;
/**
  * The label for the action. This field should typically be marked for translation, see Gtk.ActionGroup.set_translation_domain(). If label is None, the label of the stock item with id stock_id is used. 
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

