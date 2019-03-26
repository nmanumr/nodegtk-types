import * as Gtk from '../Gtk';
export declare interface Expander extends Gtk.Bin { }

/**
  * A Gtk.Expander allows the user to hide or show its child by clicking
on an expander triangle similar to the triangles used in a Gtk.TreeView. 
  */
export declare class Expander {
  /**
    * Creates a new expander using label as the text of the label.
    * @param label the text of the label
    * @returns a new Gtk.Expander widget. 
    */
  static new(label: string | null): import('../Gtk').Widget;
  /**
    * Creates a new expander using label as the text of the label. If characters in label are preceded by an underscore, they are underlined. If you need a literal underscore character in a label, use “__” (two underscores). The first underlined character represents a keyboard accelerator called a mnemonic. Pressing Alt and that key activates the button.
    * @param label the text of the label with an underscore in front of the mnemonic character
    * @returns a new Gtk.Expander widget. 
    */
  static newWithMnemonic(label: string | null): import('../Gtk').Widget;
  /**
    * Queries a Gtk.Expander and returns its current state. Returns True if the child widget is revealed.
    * @returns the current state of the expander 
    */
  getExpanded(): boolean;
  /**
    * Fetches the text from a label widget including any embedded underlines indicating mnemonics and Pango markup, as set by Gtk.Expander.set_label(). If the label text has not been set the return value will be None. This will be the case if you create an empty button with Gtk.Button.new() to use as a container.
    * @returns The text of the label widget. This string is owned by the widget and must not be modified or freed. 
    */
  getLabel(): string | null;
  /**
    * Returns whether the label widget will fill all available horizontal space allocated to self.
    * @returns True if the label widget will fill all available horizontal space 
    */
  getLabelFill(): boolean;
  /**
    * Retrieves the label widget for the frame. See Gtk.Expander.set_label_widget().
    * @returns the label widget, or None if there is none 
    */
  getLabelWidget(): import('../Gtk').Widget | null;
  /**
    * Returns whether the expander will resize the toplevel widget containing the expander upon resizing and collpasing.
    * @returns the “resize toplevel” setting. 
    */
  getResizeToplevel(): boolean;
  /**
    * Gets the value set by Gtk.Expander.set_spacing().
    * @returns spacing between the expander and child 
    */
  getSpacing(): number;
  /**
    * Returns whether the label’s text is interpreted as marked up with the Pango text markup language. See Gtk.Expander.set_use_markup().
    * @returns True if the label’s text will be parsed for markup 
    */
  getUseMarkup(): boolean;
  /**
    * Returns whether an embedded underline in the expander label indicates a mnemonic. See Gtk.Expander.set_use_underline().
    * @returns True if an embedded underline in the expander label indicates the mnemonic accelerator keys 
    */
  getUseUnderline(): boolean;
  /**
    * Sets the state of the expander. Set to True, if you want the child widget to be revealed, and False if you want the child widget to be hidden.
    * @param expanded whether the child widget is revealed 
    */
  setExpanded(expanded: boolean): void;
  /**
    * Sets the text of the label of the expander to label.
    * @param label a string 
    */
  setLabel(label: string | null): void;
  /**
    * Sets whether the label widget should fill all available horizontal space allocated to self.
    * @param labelFill True if the label should should fill all available horizontal space 
    */
  setLabelFill(labelFill: boolean): void;
  /**
    * Set the label widget for the expander. This is the widget that will appear embedded alongside the expander arrow.
    * @param labelWidget the new label widget 
    */
  setLabelWidget(labelWidget: import('../Gtk').Widget | null): void;
  /**
    * Sets whether the expander will resize the toplevel widget containing the expander upon resizing and collpasing.
    * @param resizeToplevel whether to resize the toplevel 
    */
  setResizeToplevel(resizeToplevel: boolean): void;
  /**
    * Sets the spacing field of self, which is the number of pixels to place between expander and the child.
    * @param spacing distance between the expander and child in pixels 
    */
  setSpacing(spacing: number): void;
  /**
    * Sets whether the text of the label contains markup in Pango’s text markup language. See Gtk.Label.set_markup().
    * @param useMarkup True if the label’s text should be parsed for markup 
    */
  setUseMarkup(useMarkup: boolean): void;
  /**
    * If true, an underline in the text of the expander label indicates the next character should be used for the mnemonic accelerator key.
    * @param useUnderline True if underlines in the text indicate mnemonics 
    */
  setUseUnderline(useUnderline: boolean): void;
  /**
    * Whether the expander has been opened to reveal the child widget 
    */
  expanded: boolean;
  /**
    * Text of the expander’s label 
    */
  label: string;
  /**
    * Whether the label widget should fill all available horizontal space 
    */
  labelFill: boolean;
  /**
    * A widget to display in place of the usual expander label 
    */
  labelWidget: import('../Gtk').Widget;
  /**
    * Whether the expander will resize the toplevel window upon expanding and collapsing 
    */
  resizeToplevel: boolean;
  /**
    * Space to put between the label and the child deprecated 
    */
  spacing: number;
  /**
    * The text of the label includes XML markup. See Pango.parse_markup() 
    */
  useMarkup: boolean;
  /**
    * If set, an underline in the text indicates the next character should be used for the mnemonic accelerator key 
    */
  useUnderline: boolean;
}

