import * as Gtk from '../Gtk';
export declare interface CheckButton extends Gtk.ToggleButton { }

/**
  * A Gtk.CheckButton places a discrete Gtk.ToggleButton next to a widget,
(usually a Gtk.Label). See the section on Gtk.ToggleButton widgets for
more information about toggle/check buttons. 
  */
export declare class CheckButton {
  /**
    * Creates a new Gtk.CheckButton.
    * @returns a Gtk.Widget. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CheckButton with a Gtk.Label to the right of it.
    * @param label the text for the check button.
    * @returns a Gtk.Widget. 
    */
  static newWithLabel(label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.CheckButton containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the check button.
    * @param label The text of the button, with an underscore in front of the mnemonic character
    * @returns a new Gtk.CheckButton 
    */
  static newWithMnemonic(label: string): import('../Gtk').Widget;
  ;
}

