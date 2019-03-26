import * as Gtk from '../Gtk';
export declare interface RadioToolButton extends Gtk.ToggleToolButton { }

/**
  * A Gtk.RadioToolButton is a Gtk.ToolItem that contains a radio button,
that is, a button that is part of a group of toggle buttons where only
one button can be active at a time. 
  */
export declare class RadioToolButton {u
  /**
    * Creates a new Gtk.RadioToolButton, adding it to group.
    * @param group An existing radio button group, or None if you are creating a new group
    * @returns The new Gtk.RadioToolButton 
    */
  static new(group: import('../Gtk').RadioButton | null): import('../Gtk').ToolItem;
  /**
    * Creates a new Gtk.RadioToolButton, adding it to group. The new Gtk.RadioToolButton will contain an icon and label from the stock item indicated by stock_id.
    * @param group an existing radio button group, or None if you are creating a new group
    * @param stockId the name of a stock item
    * @returns The new Gtk.RadioToolButton 
    */
  static newFromStock(group: import('../Gtk').RadioButton | null, stockId: string): import('../Gtk').ToolItem;
  /**
    * Creates a new Gtk.RadioToolButton adding it to the same group as gruup
    * @param group An existing Gtk.RadioToolButton, or None
    * @returns The new Gtk.RadioToolButton 
    */
  static newFromWidget(group: import('../Gtk').RadioToolButton | null): import('../Gtk').ToolItem;
  /**
    * Creates a new Gtk.RadioToolButton adding it to the same group as group. The new Gtk.RadioToolButton will contain an icon and label from the stock item indicated by stock_id.
    * @param group An existing Gtk.RadioToolButton.
    * @param stockId the name of a stock item
    * @returns A new Gtk.RadioToolButton 
    */
  static newWithStockFromWidget(group: import('../Gtk').RadioToolButton | null, stockId: string): import('../Gtk').ToolItem;
  /**
    * Returns the radio button group self belongs to.
    * @returns The group self belongs to. 
    */
  getGroup(): import('../Gtk').RadioButton[];
  /**
    * Adds self to group, removing it from the group it belonged to before.
    * @param group an existing radio button group, or None 
    */
  setGroup(group: import('../Gtk').RadioButton | null): void;
  /**
    * The radio tool button whose group this button belongs to. 
    */
  group: import('../Gtk').RadioToolButton;
}

