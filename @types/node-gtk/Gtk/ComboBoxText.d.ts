import * as Gtk from '../Gtk';
import { Widget } from './Widget';

export declare interface ComboBoxText extends Gtk.ComboBox {
  remove(position: number): void;
  remove(widget: Widget): void;
}

/**
  * A Gtk.ComboBoxText is a simple variant of Gtk.ComboBox that hides
the model-view complexity for simple text-only use cases. 
  */
export declare class ComboBoxText {
  /**
    * Creates a new Gtk.ComboBoxText, which is a Gtk.ComboBox just displaying strings.
    * @returns A new Gtk.ComboBoxText 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.ComboBoxText, which is a Gtk.ComboBox just displaying strings. The combo box created by this function has an entry.
    * @returns a new Gtk.ComboBoxText 
    */
  static newWithEntry(): import('../Gtk').Widget;
  /**
    * Appends text to the list of strings stored in self. If id is non-None then it is used as the ID of the row.
    * @param id a string ID for this value, or None
    * @param text A string 
    */
  append(id: string | null, text: string): void;
  /**
    * Appends text to the list of strings stored in self.
    * @param text A string 
    */
  appendText(text: string): void;
  /**
    * Returns the currently active string in self, or None if none is selected. If self contains an entry, this function will return its contents (which will not necessarily be an item from the list).
    * @returns a newly allocated string containing the currently active text. Must be freed with GLib.free(). 
    */
  getActiveText(): string;
  /**
    * Inserts text at position in the list of strings stored in self. If id is non-None then it is used as the ID of the row.  See Gtk.ComboBox :id-column.
    * @param position An index to insert text
    * @param id a string ID for this value, or None
    * @param text A string to display 
    */
  insert(position: number, id: string | null, text: string): void;
  /**
    * Inserts text at position in the list of strings stored in self.
    * @param position An index to insert text
    * @param text A string 
    */
  insertText(position: number, text: string): void;
  /**
    * Prepends text to the list of strings stored in self. If id is non-None then it is used as the ID of the row.
    * @param id a string ID for this value, or None
    * @param text a string 
    */
  prepend(id: string | null, text: string): void;
  /**
    * Prepends text to the list of strings stored in self.
    * @param text A string 
    */
  prependText(text: string): void;
  /**
    * Removes the string at position from self.
    * @param position Index of the item to remove 
    */
  remove(position: number): void;
  /**
    * Removes all the text entries from the combo box. 
    */
  removeAll(): void;
  ;
}

