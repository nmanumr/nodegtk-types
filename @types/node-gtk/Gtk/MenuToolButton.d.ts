import * as Gtk from '../Gtk';
export declare interface MenuToolButton extends Gtk.ToolButton { }

/**
  * A Gtk.MenuToolButton is a Gtk.ToolItem that contains a button and
a small additional button with an arrow. When clicked, the arrow
button pops up a dropdown menu. 
  */
export declare class MenuToolButton {
  /**
    * Creates a new Gtk.MenuToolButton using icon_widget as icon and label as label.
    * @param iconWidget a widget that will be used as icon widget, or None
    * @param label a string that will be used as label, or None
    * @returns the new Gtk.MenuToolButton 
    */
  static new(iconWidget: import('../Gtk').Widget | null, label: string | null): import('../Gtk').ToolItem;
  /**
    * Creates a new Gtk.MenuToolButton. The new Gtk.MenuToolButton will contain an icon and label from the stock item indicated by stock_id.
    * @param stockId the name of a stock item
    * @returns the new Gtk.MenuToolButton 
    */
  static newFromStock(stockId: string): import('../Gtk').ToolItem;
  /**
    * Gets the Gtk.Menu associated with Gtk.MenuToolButton.
    * @returns the Gtk.Menu associated with Gtk.MenuToolButton 
    */
  getMenu(): import('../Gtk').Widget;
  /**
    * Sets the tooltip markup text to be used as tooltip for the arrow button which pops up the menu.  See Gtk.ToolItem.set_tooltip_text() for setting a tooltip on the whole Gtk.MenuToolButton.
    * @param markup markup text to be used as tooltip text for button’s arrow button 
    */
  setArrowTooltipMarkup(markup: string): void;
  /**
    * Sets the tooltip text to be used as tooltip for the arrow button which pops up the menu.  See Gtk.ToolItem.set_tooltip_text() for setting a tooltip on the whole Gtk.MenuToolButton.
    * @param text text to be used as tooltip text for button’s arrow button 
    */
  setArrowTooltipText(text: string): void;
  /**
    * Sets the Gtk.Menu that is popped up when the user clicks on the arrow. If menu is None, the arrow button becomes insensitive.
    * @param menu the Gtk.Menu associated with Gtk.MenuToolButton 
    */
  setMenu(menu: import('../Gtk').Widget): void;
  /**
    * The dropdown menu 
    */
  menu: import('../Gtk').Menu;
}

