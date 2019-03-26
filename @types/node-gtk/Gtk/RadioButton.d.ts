import * as Gtk from '../Gtk';
export declare interface RadioButton extends Gtk.CheckButton { }

/**
  * A single radio button performs the same basic function as a Gtk.CheckButton,
as its position in the object hierarchy reflects. It is only when multiple
radio buttons are grouped together that they become a different user
interface component in their own right. 
  */
export declare class RadioButton {
/**
  * Creates a new Gtk.RadioButton. To be of any practical value, a widget should then be packed into the radio button.
  * @param group an existing radio button group, or None if you are creating a new group.
  * @returns a new radio button 
  */
static new(group: import('../Gtk').RadioButton | null): import('../Gtk').Widget;
/**
  * Creates a new Gtk.RadioButton, adding it to the same group as radio_group_member. As with Gtk.RadioButton.new(), a widget should be packed into the radio button.
  * @param radioGroupMember an existing Gtk.RadioButton.
  * @returns a new radio button. 
  */
static newFromWidget(radioGroupMember: import('../Gtk').RadioButton | null): import('../Gtk').Widget;
/**
  * Creates a new Gtk.RadioButton with a text label.
  * @param group an existing radio button group, or None if you are creating a new group.
  * @param label the text label to display next to the radio button.
  * @returns a new radio button. 
  */
static newWithLabel(group: import('../Gtk').RadioButton | null, label: string): import('../Gtk').Widget;
/**
  * Creates a new Gtk.RadioButton with a text label, adding it to the same group as radio_group_member.
  * @param radioGroupMember widget to get radio group from or None
  * @param label a text string to display next to the radio button.
  * @returns a new radio button. 
  */
static newWithLabelFromWidget(radioGroupMember: import('../Gtk').RadioButton | null, label: string): import('../Gtk').Widget;
/**
  * Creates a new Gtk.RadioButton containing a label, adding it to the same group as group. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the button.
  * @param group the radio button group, or None
  * @param label the text of the button, with an underscore in front of the mnemonic character
  * @returns a new Gtk.RadioButton 
  */
static newWithMnemonic(group: import('../Gtk').RadioButton | null, label: string): import('../Gtk').Widget;
/**
  * Creates a new Gtk.RadioButton containing a label. The label will be created using Gtk.Label.new_with_mnemonic(), so underscores in label indicate the mnemonic for the button.
  * @param radioGroupMember widget to get radio group from or None
  * @param label the text of the button, with an underscore in front of the mnemonic character
  * @returns a new Gtk.RadioButton 
  */
static newWithMnemonicFromWidget(radioGroupMember: import('../Gtk').RadioButton | null, label: string): import('../Gtk').Widget;
/**
  * Retrieves the group assigned to a radio button.
  * @returns a linked list containing all the radio buttons in the same group as self. The returned list is owned by the radio button and must not be modified or freed. 
  */
getGroup(): import('../Gtk').RadioButton[];
/**
  * Joins a Gtk.RadioButton object to the group of another Gtk.RadioButton object
  * @param groupSource a radio button object whos group we are joining, or None to remove the radio button from its group 
  */
joinGroup(groupSource: import('../Gtk').RadioButton | null): void;
/**
  * Sets a Gtk.RadioButton’s group. It should be noted that this does not change the layout of your interface in any way, so if you are changing the group, it is likely you will need to re-arrange the user interface to reflect these changes.
  * @param group an existing radio button group, such as one returned from Gtk.RadioButton.get_group(), or None. 
  */
setGroup(group: import('../Gtk').RadioButton | null): void;
/**
  * The radio button whose group this widget belongs to. 
  */
group: import('../Gtk').RadioButton;
}

