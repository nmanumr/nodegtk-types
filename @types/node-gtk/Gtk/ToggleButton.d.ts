import * as Gtk from '../Gtk';
export declare interface ToggleButton extends Gtk.Button { }

/**
  * A Gtk.ToggleButton is a Gtk.Button which will remain “pressed-in” when
clicked. Clicking again will cause the toggle button to return to its
normal state. 
  */
export declare class ToggleButton {
  /**
    * Creates a new toggle button. A widget should be packed into the button, as in Gtk.Button.new().
    * @returns a new toggle button. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new toggle button with a text label.
    * @param label a string containing the message to be placed in the toggle button.
    * @returns a new toggle button. 
    */
  static newWithLabel(label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.ToggleButton containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the button.
    * @param label the text of the button, with an underscore in front of the mnemonic character
    * @returns a new Gtk.ToggleButton 
    */
  static newWithMnemonic(label: string): import('../Gtk').Widget;
  /**
    * Queries a Gtk.ToggleButton and returns its current state. Returns True if the toggle button is pressed in and False if it is raised.
    * @returns a bool value. 
    */
  getActive(): boolean;
  /**
    * Gets the value set by Gtk.ToggleButton.set_inconsistent().
    * @returns True if the button is displayed as inconsistent, False otherwise 
    */
  getInconsistent(): boolean;
  /**
    * Retrieves whether the button is displayed as a separate indicator and label. See Gtk.ToggleButton.set_mode().
    * @returns True if the togglebutton is drawn as a separate indicator and label. 
    */
  getMode(): boolean;
  /**
    * Sets the status of the toggle button. Set to True if you want the Gtk.ToggleButton to be “pressed in”, and False to raise it. This action causes the Gtk.ToggleButton ::toggled signal and the Gtk.Button ::clicked signal to be emitted.
    * @param isActive True or False. 
    */
  setActive(isActive: boolean): void;
  /**
    * If the user has selected a range of elements (such as some text or spreadsheet cells) that are affected by a toggle button, and the current values in that range are inconsistent, you may want to display the toggle in an “in between” state. This function turns on “in between” display.  Normally you would turn off the inconsistent state again if the user toggles the toggle button. This has to be done manually, Gtk.ToggleButton.set_inconsistent() only affects visual appearance, it doesn’t affect the semantics of the button.
    * @param setting True if state is inconsistent 
    */
  setInconsistent(setting: boolean): void;
  /**
    * Sets whether the button is displayed as a separate indicator and label. You can call this function on a checkbutton or a radiobutton with draw_indicator = False to make the button look like a normal button.
    * @param drawIndicator if True, draw the button as a separate indicator and label; if False, draw the button like a normal button 
    */
  setMode(drawIndicator: boolean): void;
  /**
    * Emits the Gtk.ToggleButton ::toggled signal on the Gtk.ToggleButton. There is no good reason for an application ever to call this function. 
    */
  toggled(): void;
  /**
    * If the toggle button should be pressed in 
    */
  active: boolean;
  /**
    * If the toggle part of the button is displayed 
    */
  drawIndicator: boolean;
  /**
    * If the toggle button is in an “in between” state 
    */
  inconsistent: boolean;
}

