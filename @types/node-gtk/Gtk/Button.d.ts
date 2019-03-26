import * as Gtk from '../Gtk';
export declare interface Button extends Gtk.Bin, Gtk.Actionable, Gtk.Activatable { }

/**
  * The Gtk.Button widget is generally used to trigger a callback function that is
called when the button is pressed.  The various signals and how to use them
are outlined below. 
  */
export declare class Button {
  /**
    * Creates a new Gtk.Button widget. To add a child widget to the button, use Gtk.Container.add().
    * @returns The newly created Gtk.Button widget. 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new button containing an icon from the current icon theme.
    * @param iconName an icon name or None
    * @param size an icon size (Gtk.IconSize)
    * @returns a new Gtk.Button displaying the themed icon 
    */
  static newFromIconName(iconName: string | null, size: number): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Button containing the image and text from a ‘stock item [gtkstock]’. Some stock ids have preprocessor macros like Gtk.STOCK_OK and Gtk.STOCK_APPLY.
    * @param stockId the name of the stock item
    * @returns a new Gtk.Button 
    */
  static newFromStock(stockId: string): import('../Gtk').Widget;
  /**
    * Creates a Gtk.Button widget with a Gtk.Label child containing the given text.
    * @param label The text you want the Gtk.Label to hold.
    * @returns The newly created Gtk.Button widget. 
    */
  static newWithLabel(label: string): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.Button containing a label. If characters in label are preceded by an underscore, they are underlined. If you need a literal underscore character in a label, use “__” (two underscores). The first underlined character represents a keyboard accelerator called a mnemonic. Pressing Alt and that key activates the button.
    * @param label The text of the button, with an underscore in front of the mnemonic character
    * @returns a new Gtk.Button 
    */
  static newWithMnemonic(label: string): import('../Gtk').Widget;
  /**
    * Emits a Gtk.Button ::clicked signal to the given Gtk.Button. 
    */
  clicked(): void;
  /**
    * Emits a Gtk.Button ::enter signal to the given Gtk.Button. 
    */
  enter(): void;
  /**
    * Gets the alignment of the child in the button.
    * @returns xalign:return location for horizontal alignment yalign:return location for vertical alignment 
    */
  getAlignment(): [number, number];
  /**
    * Returns whether the button will ignore the Gtk.Settings :gtk-button-images setting and always show the image, if available.
    * @returns True if the button will always show the image 
    */
  getAlwaysShowImage(): boolean;
  /**
    * Returns the button’s event window if it is realized, None otherwise. This function should be rarely needed.
    * @returns self’s event window. 
    */
  getEventWindow(): import('../Gdk').Window;
  /**
    * Returns whether the button grabs focus when it is clicked with the mouse. See Gtk.Button.set_focus_on_click().
    * @returns True if the button grabs focus when it is clicked with the mouse. 
    */
  getFocusOnClick(): boolean;
  /**
    * Gets the widget that is currenty set as the image of self. This may have been explicitly set by Gtk.Button.set_image() or constructed by Gtk.Button.new_from_stock().
    * @returns a Gtk.Widget or None in case there is no image 
    */
  getImage(): import('../Gtk').Widget | null;
  /**
    * Gets the position of the image relative to the text inside the button.
    * @returns the position 
    */
  getImagePosition(): import('../Gtk').PositionType;
  /**
    * Fetches the text from the label of the button, as set by Gtk.Button.set_label(). If the label text has not been set the return value will be None. This will be the case if you create an empty button with Gtk.Button.new() to use as a container.
    * @returns The text of the label widget. This string is owned by the widget and must not be modified or freed. 
    */
  getLabel(): string;
  /**
    * Returns the current relief style of the given Gtk.Button.
    * @returns The current Gtk.ReliefStyle 
    */
  getRelief(): import('../Gtk').ReliefStyle;
  /**
    * Returns whether the button label is a stock item.
    * @returns True if the button label is used to select a stock item instead of being used directly as the label text. 
    */
  getUseStock(): boolean;
  /**
    * Returns whether an embedded underline in the button label indicates a mnemonic. See Gtk.Button.set_use_underline ().
    * @returns True if an embedded underline in the button label indicates the mnemonic accelerator keys. 
    */
  getUseUnderline(): boolean;
  /**
    * Emits a Gtk.Button ::leave signal to the given Gtk.Button. 
    */
  leave(): void;
  /**
    * Emits a Gtk.Button ::pressed signal to the given Gtk.Button. 
    */
  pressed(): void;
  /**
    * Emits a Gtk.Button ::released signal to the given Gtk.Button. 
    */
  released(): void;
  /**
    * Sets the alignment of the child. This property has no effect unless the child is a Gtk.Misc or a Gtk.Alignment.
    * @param xalign the horizontal position of the child, 0.0 is left aligned, 1.0 is right aligned
    * @param yalign the vertical position of the child, 0.0 is top aligned, 1.0 is bottom aligned 
    */
  setAlignment(xalign: number, yalign: number): void;
  /**
    * If True, the button will ignore the Gtk.Settings :gtk-button-images setting and always show the image, if available.
    * @param alwaysShow True if the menuitem should always show the image 
    */
  setAlwaysShowImage(alwaysShow: boolean): void;
  /**
    * Sets whether the button will grab focus when it is clicked with the mouse. Making mouse clicks not grab focus is useful in places like toolbars where you don’t want the keyboard focus removed from the main area of the application.
    * @param focusOnClick whether the button grabs focus when clicked with the mouse 
    */
  setFocusOnClick(focusOnClick: boolean): void;
  /**
    * Set the image of self to the given widget. The image will be displayed if the label text is None or if Gtk.Button :always-show-image is True. You don’t have to call Gtk.Widget.show() on image yourself.
    * @param image a widget to set as the image for the button, or None to unset 
    */
  setImage(image: import('../Gtk').Widget | null): void;
  /**
    * Sets the position of the image relative to the text inside the button.
    * @param position the position 
    */
  setImagePosition(position: import('../Gtk').PositionType): void;
  /**
    * Sets the text of the label of the button to str. This text is also used to select the stock item if Gtk.Button.set_use_stock() is used.
    * @param label a string 
    */
  setLabel(label: string): void;
  /**
    * Sets the relief style of the edges of the given Gtk.Button widget. Two styles exist, Gtk.ReliefStyle.NORMAL and Gtk.ReliefStyle.NONE. The default style is, as one can guess, Gtk.ReliefStyle.NORMAL. The deprecated value Gtk.ReliefStyle.HALF behaves the same as Gtk.ReliefStyle.NORMAL.
    * @param relief The Gtk.ReliefStyle as described above 
    */
  setRelief(relief: import('../Gtk').ReliefStyle): void;
  /**
    * If True, the label set on the button is used as a stock id to select the stock item for the button.
    * @param useStock True if the button should use a stock item 
    */
  setUseStock(useStock: boolean): void;
  /**
    * If true, an underline in the text of the button label indicates the next character should be used for the mnemonic accelerator key.
    * @param useUnderline True if underlines in the text indicate mnemonics 
    */
  setUseUnderline(useUnderline: boolean): void;
  /**
    * Whether the image will always be shown 
    */
  alwaysShowImage: boolean;
  /**
    * Child widget to appear next to the button text 
    */
  image: import('../Gtk').Widget;
  /**
    * The position of the image relative to the text 
    */
  imagePosition: import('../Gtk').PositionType;
  /**
    * Text of the label widget inside the button, if the button contains a label widget 
    */
  label: string;
  /**
    * The border relief style 
    */
  relief: import('../Gtk').ReliefStyle;
  /**
    * If set, the label is used to pick a stock item instead of being displayed deprecated 
    */
  useStock: boolean;
  /**
    * If set, an underline in the text indicates the next character should be used for the mnemonic accelerator key 
    */
  useUnderline: boolean;
  /**
    * Horizontal position of child in available space. 0.0 is left aligned, 1.0 is right aligned deprecated 
    */
  xalign: number;
  /**
    * Vertical position of child in available space. 0.0 is top aligned, 1.0 is bottom aligned deprecated 
    */
  yalign: number;
}

