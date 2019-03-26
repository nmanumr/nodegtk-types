/**
  * A Gtk.TreeModelRow object represents a row in a
Gtk.TreeModel. A Gtk.TreeModelRow is created by taking the
mapping of a Gtk.TreeModel. For example: 
  */
export declare class TreeModelRow {
  iter;
  model;
  next;
  parent;
  path;
  previous;
  /**
    * Returns the next Gtk.TreeModelRow or None 
    */
  getNext(): void;
  /**
    * Returns the parent Gtk.TreeModelRow or htis row or None 
    */
  getParent(): void;
  /**
    * Returns the previous Gtk.TreeModelRow or None 
    */
  getPrevious(): void;
  /**
    * Returns a Gtk.TreeModelRowIter for the row’s children 
    */
  iterchildren(): void;
}

