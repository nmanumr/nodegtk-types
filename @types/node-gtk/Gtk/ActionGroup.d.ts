import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface ActionGroup extends GObject.Object, Gtk.Buildable { }

/**
  * Actions are organised into groups. An action group is essentially a
map from names to Gtk.Action objects. 
  */
export declare class ActionGroup {
  /**
    * Creates a new Gtk.ActionGroup object. The name of the action group is used when associating keybindings with the actions.
    * @param name the name of the action group.
    * @returns the new Gtk.ActionGroup 
    */
  static new(name: string): import('../Gtk').ActionGroup;
  /**
    * Adds an action object to the action group. Note that this function does not set up the accel path of the action, which can lead to problems if a user tries to modify the accelerator of a menuitem associated with the action. Therefore you must either set the accel path yourself with Gtk.Action.set_accel_path(), or use gtk_action_group_add_action_with_accel (..., NULL).
    * @param action an action 
    */
  addAction(action: import('../Gtk').Action): void;
  /**
    * Adds an action object to the action group and sets up the accelerator.
    * @param action the action to add
    * @param accelerator the accelerator for the action, in the format understood by Gtk.accelerator_parse(), or “” for no accelerator, or None to use the stock accelerator 
    */
  addActionWithAccel(action: import('../Gtk').Action, accelerator: string | null): void;
  /**
    * The add_actions() method is a convenience method that creates a number of gtk.Action  objects based on the information in the list of action entry tuples contained in entries and adds them to the action group. The entry tuples can vary in size from one to six items with the following information: 
    */
  addActions(): void;
  /**
    * The add_radio_actions() method is a convenience method that creates a number of gtk.RadioAction objects based on the information in the list of action entry tuples contained in entries and adds them to the action group. The entry tuples can vary in size from one to six items with the following information: 
    */
  addRadioActions(): void;
  /**
    * The add_toggle_actions() method is a convenience method that creates a number of gtk.ToggleAction objects based on the information in the list of action entry tuples contained in entries and adds them to the action group. The toggle action entry tuples can vary in size from one to seven items with the following information: 
    */
  addToggleActions(): void;
  /**
    * Gets the accelerator group.
    * @returns the accelerator group associated with this action group or None if there is none. 
    */
  getAccelGroup(): import('../Gtk').AccelGroup;
  /**
    * Looks up an action in the action group by name.
    * @param actionName the name of the action
    * @returns the action, or None if no action by that name exists 
    */
  getAction(actionName: string): import('../Gtk').Action;
  /**
    * Gets the name of the action group.
    * @returns the name of the action group. 
    */
  getName(): string;
  /**
    * Returns True if the group is sensitive.  The constituent actions can only be logically sensitive (see Gtk.Action.is_sensitive()) if they are sensitive (see Gtk.Action.get_sensitive()) and their group is sensitive.
    * @returns True if the group is sensitive. 
    */
  getSensitive(): boolean;
  /**
    * Returns True if the group is visible.  The constituent actions can only be logically visible (see Gtk.Action.is_visible()) if they are visible (see Gtk.Action.get_visible()) and their group is visible.
    * @returns True if the group is visible. 
    */
  getVisible(): boolean;
  /**
    * Lists the actions in the action group.
    * @returns an allocated list of the action objects in the action group 
    */
  listActions(): import('../Gtk').Action[];
  /**
    * Removes an action object from the action group.
    * @param action an action 
    */
  removeAction(action: import('../Gtk').Action): void;
  /**
    * Sets the accelerator group to be used by every action in this group.
    * @param accelGroup a Gtk.AccelGroup to set or None 
    */
  setAccelGroup(accelGroup: import('../Gtk').AccelGroup | null): void;
  /**
    * Changes the sensitivity of self
    * @param sensitive new sensitivity 
    */
  setSensitive(sensitive: boolean): void;
  /**
    * Sets a function to be used for translating the label and tooltip of Gtk.ActionEntrys added by Gtk.ActionGroup.add_actions().
    * @param func a Gtk.TranslateFunc
    * @param data data to be passed to func and notify 
    */
  setTranslateFunc(func: import('../Gtk').translateFunc, data: Object | null): void;
  /**
    * Sets the translation domain and uses GLib.dgettext() for translating the label and tooltip of Gtk.ActionEntrys added by Gtk.ActionGroup.add_actions().
    * @param domain the translation domain to use for GLib.dgettext() calls, or None to use the domain set with textdomain() 
    */
  setTranslationDomain(domain: string | null): void;
  /**
    * Changes the visible of self.
    * @param visible new visiblity 
    */
  setVisible(visible: boolean): void;
  /**
    * Translates a string using the function set with Gtk.ActionGroup.set_translate_func(). This is mainly intended for language bindings.
    * @param string a string
    * @returns the translation of string 
    */
  translateString(string: string): string;
  /**
    * The accelerator group the actions of this group should use. deprecated 
    */
  accelGroup: import('../Gtk').AccelGroup;
  /**
    * A name for the action group. deprecated 
    */
  name: string;
  /**
    * Whether the action group is enabled. deprecated 
    */
  sensitive: boolean;
  /**
    * Whether the action group is visible. deprecated 
    */
  visible: boolean;
}

