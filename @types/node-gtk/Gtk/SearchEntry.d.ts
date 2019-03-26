import * as Gtk from '../Gtk';
export declare interface SearchEntry extends Gtk.Entry { }

/**
  * Gtk.SearchEntry is a subclass of Gtk.Entry that has been
tailored for use as a search entry. 
  */
export declare class SearchEntry {
  /**
    * Creates a Gtk.SearchEntry, with a find icon when the search field is empty, and a clear icon when it isn’t.
    * @returns a new Gtk.SearchEntry 
    */
  static new(): import('../Gtk').Widget;
  /**
    * This function should be called when the top-level window which contains the search entry received a key event. If the entry is part of a Gtk.SearchBar, it is preferable to call Gtk.SearchBar.handle_event() instead, which will reveal the entry in addition to passing the event to this function.
    * @param event a key event
    * @returns Gdk.EVENT_STOP if the key press event resulted in a search beginning or continuing, Gdk.EVENT_PROPAGATE otherwise. 
    */
  handleEvent(event: import('../Gdk').Event): boolean;

}

