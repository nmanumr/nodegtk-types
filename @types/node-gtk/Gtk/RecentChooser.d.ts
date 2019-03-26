import * as GObject from '../GObject';
export declare interface RecentChooser extends GObject.GInterface { }

/**
  * Gtk.RecentChooser is an interface that can be implemented by widgets
displaying the list of recently used files.  In GTK+, the main objects
that implement this interface are Gtk.RecentChooserWidget,
Gtk.RecentChooserDialog and Gtk.RecentChooserMenu. 
  */
export declare interface RecentChooser {
  /**
    * Adds filter to the list of Gtk.RecentFilter objects held by self.
    * @param filter a Gtk.RecentFilter 
    */
  addFilter(filter: import('../Gtk').RecentFilter): void;
  /**
    * Gets the Gtk.RecentInfo currently selected by self.
    * @returns a Gtk.RecentInfo.  Use Gtk.RecentInfo.unref() when when you have finished using it. 
    */
  getCurrentItem(): import('../Gtk').RecentInfo;
  /**
    * Gets the URI currently selected by self.
    * @returns a newly allocated string holding a URI. 
    */
  getCurrentUri(): string;
  /**
    * Gets the Gtk.RecentFilter object currently used by self to affect the display of the recently used resources.
    * @returns a Gtk.RecentFilter object. 
    */
  getFilter(): import('../Gtk').RecentFilter;
  /**
    * Gets the list of recently used resources in form of Gtk.RecentInfo objects.
    * @returns A newly allocated list of Gtk.RecentInfo objects.  You should use Gtk.RecentInfo.unref() on every item of the list, and then free the list itself using g_list_free(). 
    */
  getItems(): import('../Gtk').RecentInfo[];
  /**
    * Gets the number of items returned by Gtk.RecentChooser.get_items() and Gtk.RecentChooser.get_uris().
    * @returns A positive integer, or -1 meaning that all items are returned. 
    */
  getLimit(): number;
  /**
    * Gets whether only local resources should be shown in the recently used resources selector.  See Gtk.RecentChooser.set_local_only()
    * @returns True if only local resources should be shown. 
    */
  getLocalOnly(): boolean;
  /**
    * Gets whether self can select multiple items.
    * @returns True if self can select more than one item. 
    */
  getSelectMultiple(): boolean;
  /**
    * Retrieves whether self should show an icon near the resource.
    * @returns True if the icons should be displayed, False otherwise. 
    */
  getShowIcons(): boolean;
  /**
    * Retrieves whether self should show the recently used resources that were not found.
    * @returns True if the resources not found should be displayed, and False otheriwse. 
    */
  getShowNotFound(): boolean;
  /**
    * Returns whether self should display recently used resources registered as private.
    * @returns True if the recent chooser should show private items, False otherwise. 
    */
  getShowPrivate(): boolean;
  /**
    * Gets whether self should display tooltips containing the full path of a recently user resource.
    * @returns True if the recent chooser should show tooltips, False otherwise. 
    */
  getShowTips(): boolean;
  /**
    * Gets the value set by Gtk.RecentChooser.set_sort_type().
    * @returns the sorting order of the self. 
    */
  getSortType(): import('../Gtk').RecentSortType;
  /**
    * Gets the URI of the recently used resources.
    * @returns A newly allocated, None-terminated array of strings. Use GLib.strfreev() to free it. 
    */
  getUris(): string[];
  /**
    * Gets the Gtk.RecentFilter objects held by self.
    * @returns A singly linked list of Gtk.RecentFilter objects.  You should just free the returned list using g_slist_free(). 
    */
  listFilters(): import('../Gtk').RecentFilter[];
  /**
    * Removes filter from the list of Gtk.RecentFilter objects held by self.
    * @param filter a Gtk.RecentFilter 
    */
  removeFilter(filter: import('../Gtk').RecentFilter): void;
  /**
    * Selects all the items inside self, if the self supports multiple selection. 
    */
  selectAll(): void;
  /**
    * Selects uri inside self.
    * @param uri a URI
    * @returns True if uri was found. 
    */
  selectUri(uri: string): boolean;
  /**
    * Sets uri as the current URI for self.
    * @param uri a URI
    * @returns True if the URI was found. 
    */
  setCurrentUri(uri: string): boolean;
  /**
    * Sets filter as the current Gtk.RecentFilter object used by self to affect the displayed recently used resources.
    * @param filter a Gtk.RecentFilter 
    */
  setFilter(filter: import('../Gtk').RecentFilter | null): void;
  /**
    * Sets the number of items that should be returned by Gtk.RecentChooser.get_items() and Gtk.RecentChooser.get_uris().
    * @param limit a positive integer, or -1 for all items 
    */
  setLimit(limit: number): void;
  /**
    * Sets whether only local resources, that is resources using the file:// URI scheme, should be shown in the recently used resources selector.  If local_only is True (the default) then the shown resources are guaranteed to be accessible through the operating system native file system.
    * @param localOnly True if only local files can be shown 
    */
  setLocalOnly(localOnly: boolean): void;
  /**
    * Sets whether self can select multiple items.
    * @param selectMultiple True if self can select more than one item 
    */
  setSelectMultiple(selectMultiple: boolean): void;
  /**
    * Sets whether self should show an icon near the resource when displaying it.
    * @param showIcons whether to show an icon near the resource 
    */
  setShowIcons(showIcons: boolean): void;
  /**
    * Sets whether self should display the recently used resources that it didn’t find.  This only applies to local resources.
    * @param showNotFound whether to show the local items we didn’t find 
    */
  setShowNotFound(showNotFound: boolean): void;
  /**
    * Whether to show recently used resources marked registered as private.
    * @param showPrivate True to show private items, False otherwise 
    */
  setShowPrivate(showPrivate: boolean): void;
  /**
    * Sets whether to show a tooltips containing the full path of each recently used resource in a Gtk.RecentChooser widget.
    * @param showTips True if tooltips should be shown 
    */
  setShowTips(showTips: boolean): void;
  /**
    * Sets the comparison function used when sorting to be sort_func.  If the self has the sort type set to Gtk.RecentSortType.CUSTOM then the chooser will sort using this function.
    * @param sortFunc the comparison function
    * @param sortData user data to pass to sort_func, or None 
    */
  setSortFunc(sortFunc: import('../Gtk').recentSortFunc, sortData: Object | null): void;
  /**
    * Changes the sorting order of the recently used resources list displayed by self.
    * @param sortType sort order that the chooser should use 
    */
  setSortType(sortType: import('../Gtk').RecentSortType): void;
  /**
    * Unselects all the items inside self. 
    */
  unselectAll(): void;
  /**
    * Unselects uri inside self.
    * @param uri a URI 
    */
  unselectUri(uri: string): void;
  /**
    * The current filter for selecting which resources are displayed 
    */
  filter: import('../Gtk').RecentFilter;
  /**
    * The maximum number of items to be displayed 
    */
  limit: number;
  /**
    * Whether the selected resource(s) should be limited to local file: URIs 
    */
  localOnly: boolean;
  /**
    * The RecentManager object to use 
    */
  recentManager: import('../Gtk').RecentManager;
  /**
    * Whether to allow multiple items to be selected 
    */
  selectMultiple: boolean;
  /**
    * Whether there should be an icon near the item 
    */
  showIcons: boolean;
  /**
    * Whether the items pointing to unavailable resources should be displayed 
    */
  showNotFound: boolean;
  /**
    * Whether the private items should be displayed 
    */
  showPrivate: boolean;
  /**
    * Whether there should be a tooltip on the item 
    */
  showTips: boolean;
  /**
    * The sorting order of the items displayed 
    */
  sortType: import('../Gtk').RecentSortType;
}

