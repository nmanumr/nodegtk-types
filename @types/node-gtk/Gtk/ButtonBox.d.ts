import * as Gtk from '../Gtk';
export declare interface ButtonBox extends Gtk.Box { }

export declare class ButtonBox {
  /**
    * Creates a new Gtk.ButtonBox.
    * @param orientation the box’s orientation.
    * @returns a new Gtk.ButtonBox. 
    */
  static new(orientation: import('../Gtk').Orientation): import('../Gtk').Widget;
  /**
    * Returns whether the child is exempted from homogenous sizing.
    * @param child a child of self
    * @returns True if the child is not subject to homogenous sizing 
    */
  getChildNonHomogeneous(child: import('../Gtk').Widget): boolean;
  /**
    * Returns whether child should appear in a secondary group of children.
    * @param child a child of self
    * @returns whether child should appear in a secondary group of children. 
    */
  getChildSecondary(child: import('../Gtk').Widget): boolean;
  /**
    * Retrieves the method being used to arrange the buttons in a button box.
    * @returns the method used to lay out buttons in self. 
    */
  getLayout(): import('../Gtk').ButtonBoxStyle;
  /**
    * Sets whether the child is exempted from homogeous sizing.
    * @param child a child of self
    * @param nonHomogeneous the new value 
    */
  setChildNonHomogeneous(child: import('../Gtk').Widget, nonHomogeneous: boolean): void;
  /**
    * Sets whether child should appear in a secondary group of children. A typical use of a secondary child is the help button in a dialog.
    * @param child a child of self
    * @param isSecondary if True, the child appears in a secondary group of the button box. 
    */
  setChildSecondary(child: import('../Gtk').Widget, isSecondary: boolean): void;
  /**
    * Changes the way buttons are arranged in their container.
    * @param layoutStyle the new layout style 
    */
  setLayout(layoutStyle: import('../Gtk').ButtonBoxStyle): void;
  /**
    * How to lay out the buttons in the box. Possible values are: spread, edge, start and end 
    */
  layoutStyle: import('../Gtk').ButtonBoxStyle;
}

