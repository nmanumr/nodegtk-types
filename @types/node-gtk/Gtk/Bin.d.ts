import * as Gtk from '../Gtk';
export declare interface Bin extends Gtk.Container { }

/**
  * The Gtk.Bin widget is a container with just one child.
It is not very useful itself, but it is useful for deriving subclasses,
since it provides common code needed for handling a single child widget. 
  */
export declare abstract class Bin {
  /**
    * Gets the child of the Gtk.Bin, or None if the bin contains no child widget. The returned widget does not have a reference added, so you do not need to unref it.
    * @returns the child of self, or None if it does not have a child. 
    */
  getChild(): import('../Gtk').Widget | null;
  
}

