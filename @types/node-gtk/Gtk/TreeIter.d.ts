/**
  * The Gtk.TreeIter is the primary structure
for accessing a Gtk.TreeModel. Models are expected to put a unique
integer in the stamp member, and put
model-specific data in the three user_data
members. 
  */
export declare class TreeIter {
  /**
    * Creates a dynamically allocated tree iterator as a copy of self.
    * @returns a newly-allocated copy of self 
    */
  copy(): import('../Gtk').TreeIter;
  /**
    * Frees an iterator that has been allocated by Gtk.TreeIter.copy(). 
    */
  free(): void;
}

