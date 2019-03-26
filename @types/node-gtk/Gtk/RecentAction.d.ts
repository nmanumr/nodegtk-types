import * as Gtk from '../Gtk';
export declare interface RecentAction extends Gtk.Action, Gtk.RecentChooser { }

/**
  * A Gtk.RecentAction represents a list of recently used files, which
can be shown by widgets such as Gtk.RecentChooserDialog or
Gtk.RecentChooserMenu. 
  */
export declare class RecentAction {
  /**
    * Creates a new Gtk.RecentAction object. To add the action to a Gtk.ActionGroup and set the accelerator for the action, call Gtk.ActionGroup.add_action_with_accel().
    * @param name a unique name for the action
    * @param label the label displayed in menu items and on buttons, or None
    * @param tooltip a tooltip for the action, or None
    * @param stockId the stock icon to display in widgets representing the action, or None
    * @returns the newly created Gtk.RecentAction. 
    */
  static new(name: string, label: string | null, tooltip: string | null, stockId: string | null): import('../Gtk').Action;
  /**
    * Creates a new Gtk.RecentAction object. To add the action to a Gtk.ActionGroup and set the accelerator for the action, call Gtk.ActionGroup.add_action_with_accel().
    * @param name a unique name for the action
    * @param label the label displayed in menu items and on buttons, or None
    * @param tooltip a tooltip for the action, or None
    * @param stockId the stock icon to display in widgets representing the action, or None
    * @param manager a Gtk.RecentManager, or None for using the default Gtk.RecentManager
    * @returns the newly created Gtk.RecentAction 
    */
  static newForManager(name: string, label: string | null, tooltip: string | null, stockId: string | null, manager: import('../Gtk').RecentManager | null): import('../Gtk').Action;
  /**
    * Returns the value set by Gtk.RecentChooserMenu.set_show_numbers().
    * @returns True if numbers should be shown. 
    */
  getShowNumbers(): boolean;
  /**
    * Sets whether a number should be added to the items shown by the widgets representing self. The numbers are shown to provide a unique character for a mnemonic to be used inside the menu item’s label. Only the first ten items get a number to avoid clashes.
    * @param showNumbers True if the shown items should be numbered 
    */
  setShowNumbers(showNumbers: boolean): void;
  /**
    * Whether the items should be displayed with a number deprecated 
    */
  showNumbers: boolean;
}

