import * as Gtk from '../Gtk';
export declare interface ToolButton extends Gtk.ToolItem, Gtk.Actionable { }

/**
  * Gtk.ToolButtons are Gtk.ToolItems containing buttons. 
  */
export declare class ToolButton {
  /**
    * Creates a new Gtk.ToolButton using icon_widget as contents and label as label.
    * @param iconWidget a widget that will be used as the button contents, or None
    * @param label a string that will be used as label, or None
    * @returns A new Gtk.ToolButton 
    */
  static new(iconWidget: import('../Gtk').Widget | null, label: string | null): import('../Gtk').ToolItem;
  /**
    * Creates a new Gtk.ToolButton containing the image and text from a stock item. Some stock ids have preprocessor macros like Gtk.STOCK_OK and Gtk.STOCK_APPLY.
    * @param stockId the name of the stock item
    * @returns A new Gtk.ToolButton 
    */
  static newFromStock(stockId: string): import('../Gtk').ToolItem;
  /**
    * Returns the name of the themed icon for the tool button, see Gtk.ToolButton.set_icon_name().
    * @returns the icon name or None if the tool button has no themed icon 
    */
  getIconName(): string | null;
  /**
    * Return the widget used as icon widget on self. See Gtk.ToolButton.set_icon_widget().
    * @returns The widget used as icon on self, or None. 
    */
  getIconWidget(): import('../Gtk').Widget | null;
  /**
    * Returns the label used by the tool button, or None if the tool button doesn’t have a label. or uses a the label from a stock item. The returned string is owned by GTK+, and must not be modified or freed.
    * @returns The label, or None 
    */
  getLabel(): string | null;
  /**
    * Returns the widget used as label on self. See Gtk.ToolButton.set_label_widget().
    * @returns The widget used as label on self, or None. 
    */
  getLabelWidget(): import('../Gtk').Widget | null;
  /**
    * Returns the name of the stock item. See Gtk.ToolButton.set_stock_id(). The returned string is owned by GTK+ and must not be freed or modifed.
    * @returns the name of the stock item for self. 
    */
  getStockId(): string;
  /**
    * Returns whether underscores in the label property are used as mnemonics on menu items on the overflow menu. See Gtk.ToolButton.set_use_underline().
    * @returns True if underscores in the label property are used as mnemonics on menu items on the overflow menu. 
    */
  getUseUnderline(): boolean;
  /**
    * Sets the icon for the tool button from a named themed icon. See the docs for Gtk.IconTheme for more details. The Gtk.ToolButton :icon-name property only has an effect if not overridden by non-None Gtk.ToolButton :label-widget, Gtk.ToolButton :icon-widget and Gtk.ToolButton :stock-id properties.
    * @param iconName the name of the themed icon 
    */
  setIconName(iconName: string | null): void;
  /**
    * Sets icon as the widget used as icon on self. If icon_widget is None the icon is determined by the Gtk.ToolButton :stock-id property. If the Gtk.ToolButton :stock-id property is also None, self will not have an icon.
    * @param iconWidget the widget used as icon, or None 
    */
  setIconWidget(iconWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets label as the label used for the tool button. The Gtk.ToolButton :label property only has an effect if not overridden by a non-None Gtk.ToolButton :label-widget property. If both the Gtk.ToolButton :label-widget and Gtk.ToolButton :label properties are None, the label is determined by the Gtk.ToolButton :stock-id property. If the Gtk.ToolButton :stock-id property is also None, self will not have a label.
    * @param label a string that will be used as label, or None. 
    */
  setLabel(label: string | null): void;
  /**
    * Sets label_widget as the widget that will be used as the label for self. If label_widget is None the Gtk.ToolButton :label property is used as label. If Gtk.ToolButton :label is also None, the label in the stock item determined by the Gtk.ToolButton :stock-id property is used as label. If Gtk.ToolButton :stock-id is also None, self does not have a label.
    * @param labelWidget the widget used as label, or None 
    */
  setLabelWidget(labelWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets the name of the stock item. See Gtk.ToolButton.new_from_stock(). The stock_id property only has an effect if not overridden by non-None Gtk.ToolButton :label-widget and Gtk.ToolButton :icon-widget properties.
    * @param stockId a name of a stock item, or None 
    */
  setStockId(stockId: string | null): void;
  /**
    * If set, an underline in the label property indicates that the next character should be used for the mnemonic accelerator key in the overflow menu. For example, if the label property is “_Open” and use_underline is True, the label on the tool button will be “Open” and the item on the overflow menu will have an underlined “O”.
    * @param useUnderline whether the button label has the form “_Open” 
    */
  setUseUnderline(useUnderline: boolean): void;
  /**
    * The name of the themed icon displayed on the item 
    */
  iconName: string;
  /**
    * Icon widget to display in the item 
    */
  iconWidget: import('../Gtk').Widget;
  /**
    * Text to show in the item. 
    */
  label: string;
  /**
    * Widget to use as the item label 
    */
  labelWidget: import('../Gtk').Widget;
  /**
    * The stock icon displayed on the item deprecated 
    */
  stockId: string;
  /**
    * If set, an underline in the label property indicates that the next character should be used for the mnemonic accelerator key in the overflow menu 
    */
  useUnderline: boolean;
}

