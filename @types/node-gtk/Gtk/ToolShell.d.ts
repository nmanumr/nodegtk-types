import * as GObject from '../GObject';
export declare interface ToolShell extends GObject.GInterface { }

/**
  * The Gtk.ToolShell interface allows container widgets to provide additional
information when embedding Gtk.ToolItem widgets. 
  */
export declare interface ToolShell {
  /**
    * Retrieves the current ellipsize mode for the tool shell. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_ellipsize_mode() instead.
    * @returns the current ellipsize mode of self 
    */
  getEllipsizeMode(): import('../Pango').EllipsizeMode;
  /**
    * Retrieves the icon size for the tool shell. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_icon_size() instead.
    * @returns the current size (Gtk.IconSize) for icons of self 
    */
  getIconSize(): number;
  /**
    * Retrieves the current orientation for the tool shell. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_orientation() instead.
    * @returns the current orientation of self 
    */
  getOrientation(): import('../Gtk').Orientation;
  /**
    * Returns the relief style of buttons on self. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_relief_style() instead.
    * @returns The relief style of buttons on self. 
    */
  getReliefStyle(): import('../Gtk').ReliefStyle;
  /**
    * Retrieves whether the tool shell has text, icons, or both. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_toolbar_style() instead.
    * @returns the current style of self 
    */
  getStyle(): import('../Gtk').ToolbarStyle;
  /**
    * Retrieves the current text alignment for the tool shell. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_text_alignment() instead.
    * @returns the current text alignment of self 
    */
  getTextAlignment(): number;
  /**
    * Retrieves the current text orientation for the tool shell. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_text_orientation() instead.
    * @returns the current text orientation of self 
    */
  getTextOrientation(): import('../Gtk').Orientation;
  /**
    * Retrieves the current text size group for the tool shell. Tool items must not call this function directly, but rely on Gtk.ToolItem.get_text_size_group() instead.
    * @returns the current text size group of self 
    */
  getTextSizeGroup(): import('../Gtk').SizeGroup;
  /**
    * Calling this function signals the tool shell that the overflow menu item for tool items have changed. If there is an overflow menu and if it is visible when this function it called, the menu will be rebuilt. 
    */
  rebuildMenu(): void;
}

