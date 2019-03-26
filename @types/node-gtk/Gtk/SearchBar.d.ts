import * as Gtk from '../Gtk';
export declare interface SearchBar extends Gtk.Bin { }

/**
  * Gtk.SearchBar is a container made to have a search entry (possibly
with additional connex widgets, such as drop-down menus, or buttons)
built-in. The search bar would appear when a search is started through
typing on the keyboard, or the application’s search mode is toggled on. 
  */
export declare class SearchBar {
  /**
    * Creates a Gtk.SearchBar. You will need to tell it about which widget is going to be your text entry using Gtk.SearchBar.connect_entry().
    * @returns a new Gtk.SearchBar 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Connects the Gtk.Entry widget passed as the one to be used in this search bar. The entry should be a descendant of the search bar. This is only required if the entry isn’t the direct child of the search bar (as in our main example).
    * @param entry a Gtk.Entry 
    */
  connectEntry(entry: import('../Gtk').Entry): void;
  /**
    * Returns whether the search mode is on or off.
    * @returns whether search mode is toggled on 
    */
  getSearchMode(): boolean;
  /**
    * Returns whether the close button is shown.
    * @returns whether the close button is shown 
    */
  getShowCloseButton(): boolean;
  /**
    * This function should be called when the top-level window which contains the search bar received a key event.
    * @param event a Gdk.Event containing key press events
    * @returns Gdk.EVENT_STOP if the key press event resulted in text being entered in the search entry (and revealing the search bar if necessary), Gdk.EVENT_PROPAGATE otherwise. 
    */
  handleEvent(event: import('../Gdk').Event): boolean;
  /**
    * Switches the search mode on or off.
    * @param searchMode the new state of the search mode 
    */
  setSearchMode(searchMode: boolean): void;
  /**
    * Shows or hides the close button. Applications that already have a “search” toggle button should not show a close button in their search bar, as it duplicates the role of the toggle button.
    * @param visible whether the close button will be shown or not 
    */
  setShowCloseButton(visible: boolean): void;
  /**
    * Whether the search mode is on and the search bar shown 
    */
  searchModeEnabled: boolean;
  /**
    * Whether to show the close button in the toolbar 
    */
  showCloseButton: boolean;
}

