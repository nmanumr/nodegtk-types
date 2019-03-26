import * as Gtk from '../Gtk';
export declare interface RecentChooserWidget extends Gtk.Box, Gtk.RecentChooser { }

/**
  * Gtk.RecentChooserWidget is a widget suitable for selecting recently used
files.  It is the main building block of a Gtk.RecentChooserDialog.  Most
applications will only need to use the latter; you can use
Gtk.RecentChooserWidget as part of a larger window if you have special needs. 
  */
export declare class RecentChooserWidget {
  /**
    * Creates a new Gtk.RecentChooserWidget object.  This is an embeddable widget used to access the recently used resources list.
    * @returns a new Gtk.RecentChooserWidget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.RecentChooserWidget with a specified recent manager.
    * @param manager a Gtk.RecentManager
    * @returns a new Gtk.RecentChooserWidget 
    */
  static newForManager(manager: import('../Gtk').RecentManager): import('../Gtk').Widget;
  
}

