/**
  * A Gtk.TreeModelRowIter is an object that implements the Python
Iterator protocol. It provides the means to iterate over a set of
Gtk.TreeModelRow objects in a Gtk.TreeModel. A
Gtk.TreeModelRowIter is created by calling the Python iter()
function on a Gtk.TreeModel object: 
  */
export declare class TreeModelRowIter {
  /**
    * Returns the next Gtk.TreeModelRow 
    */
  next(): void;
}

