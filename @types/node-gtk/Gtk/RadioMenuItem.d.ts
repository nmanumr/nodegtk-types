import * as Gtk from '../Gtk';
export declare interface RadioMenuItem extends Gtk.CheckMenuItem { }

/**
  * A radio menu item is a check menu item that belongs to a group. At each
instant exactly one of the radio menu items from a group is selected. 
  */
export declare class RadioMenuItem {
  /**
    * Creates a new Gtk.RadioMenuItem.
    * @param group the group to which the radio menu item is to be attached, or None
    * @returns a new Gtk.RadioMenuItem 
    */
  static new(group: import('../Gtk').RadioMenuItem | null): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RadioMenuItem adding it to the same group as group.
    * @param group An existing Gtk.RadioMenuItem
    * @returns The new Gtk.RadioMenuItem 
    */
  static newFromWidget(group: import('../Gtk').RadioMenuItem | null): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RadioMenuItem whose child is a simple Gtk.Label.
    * @param group group the radio menu item is inside, or None
    * @param label the text for the label
    * @returns A new Gtk.RadioMenuItem 
    */
  static newWithLabel(group: import('../Gtk').RadioMenuItem | null, label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RadioMenuItem whose child is a simple Gtk.Label. The new Gtk.RadioMenuItem is added to the same group as group.
    * @param group an existing Gtk.RadioMenuItem
    * @param label the text for the label
    * @returns The new Gtk.RadioMenuItem 
    */
  static newWithLabelFromWidget(group: import('../Gtk').RadioMenuItem | null, label: string | null): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RadioMenuItem containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the menu item.
    * @param group group the radio menu item is inside, or None
    * @param label the text of the button, with an underscore in front of the mnemonic character
    * @returns a new Gtk.RadioMenuItem 
    */
  static newWithMnemonic(group: import('../Gtk').RadioMenuItem | null, label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RadioMenuItem containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the menu item.
    * @param group An existing Gtk.RadioMenuItem
    * @param label the text of the button, with an underscore in front of the mnemonic character
    * @returns The new Gtk.RadioMenuItem 
    */
  static newWithMnemonicFromWidget(group: import('../Gtk').RadioMenuItem | null, label: string | null): import('../Gtk').Widget;
  /**
    * Returns the group to which the radio menu item belongs, as a GLib.List of Gtk.RadioMenuItem. The list belongs to GTK+ and should not be freed.
    * @returns the group of self 
    */
  getGroup(): import('../Gtk').RadioMenuItem[];
  /**
    * Joins a Gtk.RadioMenuItem object to the group of another Gtk.RadioMenuItem object.
    * @param groupSource a Gtk.RadioMenuItem whose group we are joining, or None to remove the self from its current group 
    */
  joinGroup(groupSource: import('../Gtk').RadioMenuItem | null): void;
  /**
    * Sets the group of a radio menu item, or changes it.
    * @param group the new group, or None. 
    */
  setGroup(group: import('../Gtk').RadioMenuItem | null): void;
  /**
    * The radio menu item whose group this widget belongs to. 
    */
  group: import('../Gtk').RadioMenuItem;
}

