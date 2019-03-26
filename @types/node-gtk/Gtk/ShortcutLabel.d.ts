import * as Gtk from '../Gtk';
export declare interface ShortcutLabel extends Gtk.Box { }

/**
  * Gtk.ShortcutLabel is a widget that represents a single keyboard shortcut or gesture
in the user interface. 
  */
export declare class ShortcutLabel {
  /**
    * Creates a new Gtk.ShortcutLabel with accelerator set.
    * @param accelerator the initial accelerator
    * @returns a newly-allocated Gtk.ShortcutLabel 
    */
  static new(accelerator: string): import('../Gtk').Widget;
  /**
    * Retrieves the current accelerator of self.
    * @returns the current accelerator. 
    */
  getAccelerator(): string | null;
  /**
    * Retrieves the text that is displayed when no accelerator is set.
    * @returns the current text displayed when no accelerator is set. 
    */
  getDisabledText(): string | null;
  /**
    * Sets the accelerator to be displayed by self.
    * @param accelerator the new accelerator 
    */
  setAccelerator(accelerator: string): void;
  /**
    * Sets the text to be displayed by self when no accelerator is set.
    * @param disabledText the text to be displayed when no accelerator is set 
    */
  setDisabledText(disabledText: string): void;
  /**
    * Accelerator 
    */
  accelerator: string;
  /**
    * Disabled text 
    */
  disabledText: string;
}

