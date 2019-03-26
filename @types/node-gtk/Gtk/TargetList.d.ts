/**
  * A Gtk.TargetList-struct is a reference counted list
of Gtk.TargetPair and should be treated as
opaque. 
  */
export declare class TargetList {
  /**
    * Creates a new Gtk.TargetList from an array of Gtk.TargetEntry.
    * @param targets Pointer to an array of Gtk.TargetEntry
    * @returns the new Gtk.TargetList. 
    */
  static new(targets: import('../Gtk').TargetEntry | null): import('../Gtk').TargetList;
  /**
    * Appends another target to a Gtk.TargetList.
    * @param target the interned atom representing the target
    * @param flags the flags for this target
    * @param info an ID that will be passed back to the application 
    */
  add(target: import('../Gdk').Atom, flags: number, info: number): void;
  /**
    * Appends the image targets supported by Gtk.SelectionData to the target list. All targets are added with the same info.
    * @param info an ID that will be passed back to the application
    * @param writable whether to add only targets for which GTK+ knows how to convert a pixbuf into the format 
    */
  addImageTargets(info: number, writable: boolean): void;
  /**
    * Appends the rich text targets registered with Gtk.TextBuffer.register_serialize_format() or Gtk.TextBuffer.register_deserialize_format() to the target list. All targets are added with the same info.
    * @param info an ID that will be passed back to the application
    * @param deserializable if True, then deserializable rich text formats will be added, serializable formats otherwise.
    * @param buffer a Gtk.TextBuffer. 
    */
  addRichTextTargets(info: number, deserializable: boolean, buffer: import('../Gtk').TextBuffer): void;
  /**
    * Prepends a table of Gtk.TargetEntry to a target list.
    * @param targets the table of Gtk.TargetEntry 
    */
  addTable(targets: import('../Gtk').TargetEntry): void;
  /**
    * Appends the text targets supported by Gtk.SelectionData to the target list. All targets are added with the same info.
    * @param info an ID that will be passed back to the application 
    */
  addTextTargets(info: number): void;
  /**
    * Appends the URI targets supported by Gtk.SelectionData to the target list. All targets are added with the same info.
    * @param info an ID that will be passed back to the application 
    */
  addUriTargets(info: number): void;
  /**
    * Looks up a given target in a Gtk.TargetList.
    * @param target an interned atom representing the target to search for
    * @returns True if the target was found, otherwise False  info:a pointer to the location to store application info for target, or None 
    */
  find(target: import('../Gdk').Atom): [boolean, number];
  /**
    * Increases the reference count of a Gtk.TargetList by one.
    * @returns the passed in Gtk.TargetList. 
    */
  ref(): import('../Gtk').TargetList;
  /**
    * Removes a target from a target list.
    * @param target the interned atom representing the target 
    */
  remove(target: import('../Gdk').Atom): void;
  /**
    * Decreases the reference count of a Gtk.TargetList by one. If the resulting reference count is zero, frees the list. 
    */
  unref(): void;
}

