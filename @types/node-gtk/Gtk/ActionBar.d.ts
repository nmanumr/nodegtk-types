import * as Gtk from '../Gtk';
export declare interface ActionBar extends Gtk.Bin { }

/**
  * Gtk.ActionBar is designed to present contextual actions. It is
expected to be displayed below the content and expand horizontally
to fill the area. 
  */
export declare class ActionBar {
  /**
    * Creates a new Gtk.ActionBar widget.
    * @returns a new Gtk.ActionBar 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Retrieves the center bar widget of the bar.
    * @returns the center Gtk.Widget or None. 
    */
  getCenterWidget(): import('../Gtk').Widget | null;
  /**
    * Adds child to self, packed with reference to the end of the self.
    * @param child the Gtk.Widget to be added to self 
    */
  packEnd(child: import('../Gtk').Widget): void;
  /**
    * Adds child to self, packed with reference to the start of the self.
    * @param child the Gtk.Widget to be added to self 
    */
  packStart(child: import('../Gtk').Widget): void;
  /**
    * Sets the center widget for the Gtk.ActionBar.
    * @param centerWidget a widget to use for the center 
    */
  setCenterWidget(centerWidget: import('../Gtk').Widget | null): void;
  ;
}

