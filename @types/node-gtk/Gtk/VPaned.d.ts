import * as Gtk from '../Gtk';
export declare interface VPaned extends Gtk.Paned { }

/**
  * The VPaned widget is a container widget with two
children arranged vertically. The division between
the two panes is adjustable by the user by dragging
a handle. See Gtk.Paned for details. 
  */
export declare class VPaned {
  /**
    * Create a new Gtk.VPaned
    * @returns the new Gtk.VPaned 
    */
  static new(): import('../Gtk').Widget;
}

