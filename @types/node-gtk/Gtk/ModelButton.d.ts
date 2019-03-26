import * as Gtk from '../Gtk';
export declare interface ModelButton extends Gtk.Button { }

/**
  * Gtk.ModelButton is a button class that can use a Gio.Action as its model.
In contrast to Gtk.ToggleButton or Gtk.RadioButton, which can also
be backed by a Gio.Action via the Gtk.Actionable :action-name property,
Gtk.ModelButton will adapt its appearance according to the kind of
action it is backed by, and appear either as a plain, check or
radio button. 
  */
export declare class ModelButton {
  /**
    * Creates a new Gtk.ModelButton.
    * @returns the newly created Gtk.ModelButton widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Active 
    */
  active: boolean;
  /**
    * Whether to center the contents 
    */
  centered: boolean;
  /**
    * The icon 
    */
  icon: import('../Gio').Icon;
  /**
    * Whether to prefer the icon over text 
    */
  iconic: boolean;
  /**
    * Whether the menu is a parent 
    */
  inverted: boolean;
  /**
    * The name of the menu to open 
    */
  menuName: string;
  /**
    * The role of this button 
    */
  role: import('../Gtk').ButtonRole;
  /**
    * The text 
    */
  text: string;
  /**
    * The text of the button includes XML markup. See Pango.parse_markup() 
    */
  useMarkup: boolean;
}

