import * as Gtk from '../Gtk';

export declare interface MenuButton extends Gtk.ToggleButton {
  getDirection(): import('../Gtk').ArrowType;
  getDirection(): import('../Gtk').TextDirection;

  setDirection(direction: import('../Gtk').ArrowType): void;
  setDirection(direction: import('../Gtk').TextDirection): void;
}

/**
  * The Gtk.MenuButton widget is used to display a popup when clicked on.
This popup can be provided either as a Gtk.Menu, a Gtk.Popover or an
abstract Gio.MenuModel. 
  */
export declare class MenuButton {
  /**
    * Creates a new Gtk.MenuButton widget with downwards-pointing arrow as the only child. You can replace the child widget with another Gtk.Widget should you wish to.
    * @returns The newly created Gtk.MenuButton widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Returns the parent Gtk.Widget to use to line up with menu.
    * @returns a Gtk.Widget value or None 
    */
  getAlignWidget(): import('../Gtk').Widget | null;
  /**
    * Returns the direction the popup will be pointing at when popped up.
    * @returns a Gtk.ArrowType value 
    */
  getDirection(): import('../Gtk').ArrowType;
  /**
    * Returns the Gio.MenuModel used to generate the popup.
    * @returns a Gio.MenuModel or None 
    */
  getMenuModel(): import('../Gio').MenuModel | null;
  /**
    * Returns the Gtk.Popover that pops out of the button. If the button is not using a Gtk.Popover, this function returns None.
    * @returns a Gtk.Popover or None 
    */
  getPopover(): import('../Gtk').Popover | null;
  /**
    * Returns the Gtk.Menu that pops out of the button. If the button does not use a Gtk.Menu, this function returns None.
    * @returns a Gtk.Menu or None 
    */
  getPopup(): import('../Gtk').Menu | null;
  /**
    * Returns whether a Gtk.Popover or a Gtk.Menu will be constructed from the menu model.
    * @returns True if using a Gtk.Popover 
    */
  getUsePopover(): boolean;
  /**
    * Sets the Gtk.Widget to use to line the menu with when popped up. Note that the align_widget must contain the Gtk.MenuButton itself.
    * @param alignWidget a Gtk.Widget 
    */
  setAlignWidget(alignWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets the direction in which the popup will be popped up, as well as changing the arrow’s direction. The child will not be changed to an arrow if it was customized.
    * @param direction a Gtk.ArrowType 
    */
  setDirection(direction: import('../Gtk').ArrowType): void;
  /**
    * Sets the Gio.MenuModel from which the popup will be constructed, or None to dissociate any existing menu model and disable the button.
    * @param menuModel a Gio.MenuModel, or None to unset and disable the button 
    */
  setMenuModel(menuModel: import('../Gio').MenuModel | null): void;
  /**
    * Sets the Gtk.Popover that will be popped up when the self is clicked, or None to dissociate any existing popover and disable the button.
    * @param popover a Gtk.Popover, or None to unset and disable the button 
    */
  setPopover(popover: import('../Gtk').Widget | null): void;
  /**
    * Sets the Gtk.Menu that will be popped up when the self is clicked, or None to dissociate any existing menu and disable the button.
    * @param menu a Gtk.Menu, or None to unset and disable the button 
    */
  setPopup(menu: import('../Gtk').Widget | null): void;
  /**
    * Sets whether to construct a Gtk.Popover instead of Gtk.Menu when Gtk.MenuButton.set_menu_model() is called. Note that this property is only consulted when a new menu model is set.
    * @param usePopover True to construct a popover from the menu model 
    */
  setUsePopover(usePopover: boolean): void;
  /**
    * The parent widget which the menu should align with. 
    */
  alignWidget: import('../Gtk').Container;
  /**
    * The direction the arrow should point. 
    */
  direction: import('../Gtk').ArrowType;
  /**
    * The model from which the popup is made. 
    */
  menuModel: import('../Gio').MenuModel;
  /**
    * The popover 
    */
  popover: import('../Gtk').Popover;
  /**
    * The dropdown menu. 
    */
  popup: import('../Gtk').Menu;
  /**
    * Use a popover instead of a menu 
    */
  usePopover: boolean;
}

