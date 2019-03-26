import * as Gtk from '../Gtk';
export declare interface CheckMenuItem extends Gtk.MenuItem { }

/**
  * A Gtk.CheckMenuItem is a menu item that maintains the state of a boolean
value in addition to a Gtk.MenuItem usual role in activating application
code. 
  */
export declare class CheckMenuItem {
  /**
    * Creates a new Gtk.CheckMenuItem.
    * @returns a new Gtk.CheckMenuItem. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CheckMenuItem with a label.
    * @param label the string to use for the label.
    * @returns a new Gtk.CheckMenuItem. 
    */
  static newWithLabel(label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CheckMenuItem containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the menu item.
    * @param label The text of the button, with an underscore in front of the character
    * @returns a new Gtk.CheckMenuItem 
    */
  static newWithMnemonic(label: string): import('../Gtk').Widget;
  /**
    * Returns whether the check menu item is active. See Gtk.CheckMenuItem.set_active ().
    * @returns True if the menu item is checked. 
    */
  getActive(): boolean;
  /**
    * Returns whether self looks like a Gtk.RadioMenuItem
    * @returns Whether self looks like a Gtk.RadioMenuItem 
    */
  getDrawAsRadio(): boolean;
  /**
    * Retrieves the value set by Gtk.CheckMenuItem.set_inconsistent().
    * @returns True if inconsistent 
    */
  getInconsistent(): boolean;
  /**
    * Sets the active state of the menu item’s check box.
    * @param isActive boolean value indicating whether the check box is active. 
    */
  setActive(isActive: boolean): void;
  /**
    * Sets whether self is drawn like a Gtk.RadioMenuItem
    * @param drawAsRadio whether self is drawn like a Gtk.RadioMenuItem 
    */
  setDrawAsRadio(drawAsRadio: boolean): void;
  /**
    * If the user has selected a range of elements (such as some text or spreadsheet cells) that are affected by a boolean setting, and the current values in that range are inconsistent, you may want to display the check in an “in between” state. This function turns on “in between” display.  Normally you would turn off the inconsistent state again if the user explicitly selects a setting. This has to be done manually, Gtk.CheckMenuItem.set_inconsistent() only affects visual appearance, it doesn’t affect the semantics of the widget.
    * @param setting True to display an “inconsistent” third state check 
    */
  setInconsistent(setting: boolean): void;
  /**
    * Emits the Gtk.CheckMenuItem ::toggled signal. 
    */
  toggled(): void;
  /**
    * Whether the menu item is checked 
    */
  active: boolean;
  /**
    * Whether the menu item looks like a radio menu item 
    */
  drawAsRadio: boolean;
  /**
    * Whether to display an “inconsistent” state 
    */
  inconsistent: boolean;
}

