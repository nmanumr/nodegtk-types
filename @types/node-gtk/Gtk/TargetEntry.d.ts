/**
  * A Gtk.TargetEntry represents a single type of
data than can be supplied for by a widget for a selection
or for supplied or received during drag-and-drop. 
  */
export declare class TargetEntry {
  /**
    * Makes a new Gtk.TargetEntry.
    * @param target String identifier for target
    * @param flags Set of flags, see Gtk.TargetFlags
    * @param info an ID that will be passed back to the application
    * @returns a pointer to a new Gtk.TargetEntry. Free with Gtk.TargetEntry.free() 
    */
  static new(target: string, flags: number, info: number): import('../Gtk').TargetEntry;
  /**
    * Makes a copy of a Gtk.TargetEntry and its data.
    * @returns a pointer to a copy of self. Free with Gtk.TargetEntry.free() 
    */
  copy(): import('../Gtk').TargetEntry;
  /**
    * Frees a Gtk.TargetEntry returned from Gtk.TargetEntry.new() or Gtk.TargetEntry.copy(). 
    */
  free(): void;
}

