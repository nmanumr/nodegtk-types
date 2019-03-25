/**
  * Gtk.RadioActionEntry structs are used with
Gtk.ActionGroup.add_radio_actions() to construct groups of radio actions. 
  */
export declare class RadioActionEntry {
/**
  * The accelerator for the action, in the format understood by Gtk.accelerator_parse(). 
  */
accelerator: string;
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
/**
  * The value to set on the radio action. See Gtk.RadioAction.get_current_value(). 
  */
value: number;
}

