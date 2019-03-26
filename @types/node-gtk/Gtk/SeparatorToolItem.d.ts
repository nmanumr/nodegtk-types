import * as Gtk from '../Gtk';

export declare interface SeparatorToolItem extends Gtk.ToolItem {

}

/**
  * A Gtk.SeparatorToolItem is a Gtk.ToolItem that separates groups of other
Gtk.ToolItems. Depending on the theme, a Gtk.SeparatorToolItem will
often look like a vertical line on horizontally docked toolbars. 
  */
export declare class SeparatorToolItem {
  /**
    * Create a new Gtk.SeparatorToolItem
    * @returns the new Gtk.SeparatorToolItem 
    */
  static new(): import('../Gtk').ToolItem;
  /**
    * Returns whether self is drawn as a line, or just blank. See Gtk.SeparatorToolItem.set_draw().
    * @returns True if self is drawn as a line, or just blank. 
    */
  getDraw(): boolean;
  /**
    * Whether self is drawn as a vertical line, or just blank. Setting this to False along with Gtk.ToolItem.set_expand() is useful to create an item that forces following items to the end of the toolbar.
    * @param draw whether self is drawn as a vertical line 
    */
  setDraw(draw: boolean): void;
  /**
    * Whether the separator is drawn, or just blank 
    */
  // draw: boolean;
}

