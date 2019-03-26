import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface TextTagTable extends GObject.Object, Gtk.Buildable { }

/**
  * You may wish to begin by reading the
text widget conceptual overview
which gives an overview of all the objects and
data types related to the text widget and how they work together. 
  */
export declare class TextTagTable {
  /**
    * Creates a new Gtk.TextTagTable. The table contains no tags by default.
    * @returns a new Gtk.TextTagTable 
    */
  static new(): import('../Gtk').TextTagTable;
  /**
    * Add a tag to the table. The tag is assigned the highest priority in the table.
    * @param tag a Gtk.TextTag
    * @returns True on success. 
    */
  add(tag: import('../Gtk').TextTag): boolean;
  /**
    * Calls func on each tag in self, with user data data. Note that the table may not be modified while iterating over it (you can’t add/remove tags).
    * @param func a function to call on each tag
    * @param data user data 
    */
  foreach(func: import('../Gtk').textTagTableForeach, data: Object | null): void;
  /**
    * Returns the size of the table (number of tags)
    * @returns number of tags in self 
    */
  getSize(): number;
  /**
    * Look up a named tag.
    * @param name name of a tag
    * @returns The tag, or None if none by that name is in the table. 
    */
  lookup(name: string): import('../Gtk').TextTag | null;
  /**
    * Remove a tag from the table. If a Gtk.TextBuffer has self as its tag table, the tag is removed from the buffer. The table’s reference to the tag is removed, so the tag will end up destroyed if you don’t have a reference to it.
    * @param tag a Gtk.TextTag 
    */
  remove(tag: import('../Gtk').TextTag): void;
}

