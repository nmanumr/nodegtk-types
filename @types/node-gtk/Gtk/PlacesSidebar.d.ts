import * as Gtk from '../Gtk';
export declare interface PlacesSidebar extends Gtk.ScrolledWindow { }

/**
  * Gtk.PlacesSidebar is a widget that displays a list of frequently-used places in the
file system:  the user’s home directory, the user’s bookmarks, and volumes and drives.
This widget is used as a sidebar in Gtk.FileChooser and may be used by file managers
and similar programs. 
  */
export declare class PlacesSidebar {
  /**
    * Creates a new Gtk.PlacesSidebar widget.
    * @returns a newly created Gtk.PlacesSidebar 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Applications may want to present some folders in the places sidebar if they could be immediately useful to users.  For example, a drawing program could add a “/usr/share/clipart” location when the sidebar is being used in an “Insert Clipart” dialog box.
    * @param location location to add as an application-specific shortcut 
    */
  addShortcut(location: import('../Gio').File): void;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_local_only().
    * @returns True if the sidebar will only show local files. 
    */
  getLocalOnly(): boolean;
  /**
    * Gets the currently selected location in the self. This can be None when nothing is selected, for example, when Gtk.PlacesSidebar.set_location() has been called with a location that is not among the sidebar’s list of places to show.
    * @returns a Gio.File with the selected location, or None if nothing is visually selected. 
    */
  getLocation(): import('../Gio').File | null;
  /**
    * This function queries the bookmarks added by the user to the places sidebar, and returns one of them.  This function is used by Gtk.FileChooser to implement the “Alt-1”, “Alt-2”, etc. shortcuts, which activate the cooresponding bookmark.
    * @param n index of the bookmark to query
    * @returns The bookmark specified by the index n, or None if no such index exist.  Note that the indices start at 0, even though the file chooser starts them with the keyboard shortcut “Alt-1”. 
    */
  getNthBookmark(n: number): import('../Gio').File | null;
  /**
    * Gets the open flags.
    * @returns the Gtk.PlacesOpenFlags of self 
    */
  getOpenFlags(): import('../Gtk').PlacesOpenFlags;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_connect_to_server()
    * @returns True if the sidebar will display a “Connect to Server” item. 
    */
  getShowConnectToServer(): boolean;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_desktop()
    * @returns True if the sidebar will display a builtin shortcut to the desktop folder. 
    */
  getShowDesktop(): boolean;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_enter_location()
    * @returns True if the sidebar will display an “Enter Location” item. 
    */
  getShowEnterLocation(): boolean;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_other_locations()
    * @returns True if the sidebar will display an “Other Locations” item. 
    */
  getShowOtherLocations(): boolean;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_recent()
    * @returns True if the sidebar will display a builtin shortcut for recent files 
    */
  getShowRecent(): boolean;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_starred_location()
    * @returns True if the sidebar will display a Starred item. 
    */
  getShowStarredLocation(): boolean;
  /**
    * Returns the value previously set with Gtk.PlacesSidebar.set_show_trash()
    * @returns True if the sidebar will display a “Trash” item. 
    */
  getShowTrash(): boolean;
  /**
    * Gets the list of shortcuts.
    * @returns A GLib.SList of Gio.File of the locations that have been added as application-specific shortcuts with Gtk.PlacesSidebar.add_shortcut(). To free this list, you can useg_slist_free_full (list, (GDestroyNotify) g_object_unref); 
    */
  listShortcuts(): import('../Gio').File[];
  /**
    * Removes an application-specific shortcut that has been previously been inserted with Gtk.PlacesSidebar.add_shortcut().  If the location is not a shortcut in the sidebar, then nothing is done.
    * @param location location to remove 
    */
  removeShortcut(location: import('../Gio').File): void;
  /**
    * Make the Gtk.PlacesSidebar show drop targets, so it can show the available drop targets and a “new bookmark” row. This improves the Drag-and-Drop experience of the user and allows applications to show all available drop targets at once.
    * @param visible whether to show the valid targets or not.
    * @param context drag context used to ask the source about the action that wants to perform, so hints are more accurate. 
    */
  setDropTargetsVisible(visible: boolean, context: import('../Gdk').DragContext): void;
  /**
    * Sets whether the self should only show local files.
    * @param localOnly whether to show only local files 
    */
  setLocalOnly(localOnly: boolean): void;
  /**
    * Sets the location that is being shown in the widgets surrounding the self, for example, in a folder view in a file manager.  In turn, the self will highlight that location if it is being shown in the list of places, or it will unhighlight everything if the location is not among the places in the list.
    * @param location location to select, or None for no current path 
    */
  setLocation(location: import('../Gio').File | null): void;
  /**
    * Sets the way in which the calling application can open new locations from the places sidebar.  For example, some applications only open locations “directly” into their main view, while others may support opening locations in a new notebook tab or a new window.
    * @param flags Bitmask of modes in which the calling application can open locations 
    */
  setOpenFlags(flags: import('../Gtk').PlacesOpenFlags): void;
  /**
    * Sets whether the self should show an item for connecting to a network server; this is off by default. An application may want to turn this on if it implements a way for the user to connect to network servers directly.
    * @param showConnectToServer whether to show an item for the Connect to Server command 
    */
  setShowConnectToServer(showConnectToServer: boolean): void;
  /**
    * Sets whether the self should show an item for the Desktop folder. The default value for this option is determined by the desktop environment and the user’s configuration, but this function can be used to override it on a per-application basis.
    * @param showDesktop whether to show an item for the Desktop folder 
    */
  setShowDesktop(showDesktop: boolean): void;
  /**
    * Sets whether the self should show an item for entering a location; this is off by default. An application may want to turn this on if manually entering URLs is an expected user action.
    * @param showEnterLocation whether to show an item to enter a location 
    */
  setShowEnterLocation(showEnterLocation: boolean): void;
  /**
    * Sets whether the self should show an item for the application to show an Other Locations view; this is off by default. When set to True, persistent devices such as hard drives are hidden, otherwise they are shown in the sidebar. An application may want to turn this on if it implements a way for the user to see and interact with drives and network servers directly.
    * @param showOtherLocations whether to show an item for the Other Locations view 
    */
  setShowOtherLocations(showOtherLocations: boolean): void;
  /**
    * Sets whether the self should show an item for recent files. The default value for this option is determined by the desktop environment, but this function can be used to override it on a per-application basis.
    * @param showRecent whether to show an item for recent files 
    */
  setShowRecent(showRecent: boolean): void;
  /**
    * If you enable this, you should connect to the Gtk.PlacesSidebar ::show-starred-location signal.
    * @param showStarredLocation whether to show an item for Starred files 
    */
  setShowStarredLocation(showStarredLocation: boolean): void;
  /**
    * Sets whether the self should show an item for the Trash location.
    * @param showTrash whether to show an item for the Trash location 
    */
  setShowTrash(showTrash: boolean): void;
  /**
    * Whether the sidebar only includes local files 
    */
  localOnly: boolean;
  /**
    * The location to highlight in the sidebar 
    */
  location: import('../Gio').File;
  /**
    * Modes in which the calling application can open locations selected in the sidebar 
    */
  openFlags: import('../Gtk').PlacesOpenFlags;
  /**
    * Whether to emit ::populate-popup for popups that are not menus 
    */
  populateAll: boolean;
  /**
    * Whether the sidebar includes a builtin shortcut to a ‘Connect to server’ dialog deprecated 
    */
  showConnectToServer: boolean;
  /**
    * Whether the sidebar includes a builtin shortcut to the Desktop folder 
    */
  showDesktop: boolean;
  /**
    * Whether the sidebar includes a builtin shortcut to manually enter a location 
    */
  showEnterLocation: boolean;
  /**
    * Whether the sidebar includes an item to show external locations 
    */
  showOtherLocations: boolean;
  /**
    * Whether the sidebar includes a builtin shortcut for recent files 
    */
  showRecent: boolean;
  /**
    * Whether the sidebar includes an item to show starred files 
    */
  showStarredLocation: boolean;
  /**
    * Whether the sidebar includes a builtin shortcut to the Trash location 
    */
  showTrash: boolean;
}

