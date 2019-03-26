/**
  * Gtk.RecentInfo-struct contains private data only, and should
be accessed using the provided API. 
  */
export declare class RecentInfo {
  /**
    * Creates a Gio.AppInfo for the specified Gtk.RecentInfo
    * @param appName the name of the application that should be mapped to a Gio.AppInfo; if None is used then the default application for the MIME type is used
    * @returns the newly created Gio.AppInfo, or None. In case of error, error will be set either with a %GTK_RECENT_MANAGER_ERROR or a %G_IO_ERROR 
    */
  createAppInfo(appName: string | null): import('../Gio').AppInfo | null;
  /**
    * Checks whether the resource pointed by self still exists. At the moment this check is done only on resources pointing to local files.
    * @returns True if the resource exists 
    */
  exists(): boolean;
  /**
    * Gets the timestamp (seconds from system’s Epoch) when the resource was added to the recently used resources list.
    * @returns the number of seconds elapsed from system’s Epoch when the resource was added to the list, or -1 on failure. 
    */
  getAdded(): number;
  /**
    * Gets the number of days elapsed since the last update of the resource pointed by self.
    * @returns a positive integer containing the number of days elapsed since the time this resource was last modified 
    */
  getAge(): number;
  /**
    * Gets the data regarding the application that has registered the resource pointed by self.
    * @param appName the name of the application that has registered this item
    * @returns None if no application with app_name has registered this resource inside the recently used list otherwise a tuple containing:  app_exec:string containing the command line count:the number of times this item was registered time_:the timestamp this item was last registered for this application 
    */
  getApplicationInfo(appName: string): [string, number, number | null];
  /**
    * Retrieves the list of applications that have registered this resource.
    * @returns a newly allocated None-terminated array of strings. Use GLib.strfreev() to free it. 
    */
  getApplications(): string[];
  /**
    * Gets the (short) description of the resource.
    * @returns the description of the resource. The returned string is owned by the recent manager, and should not be freed. 
    */
  getDescription(): string;
  /**
    * Gets the name of the resource. If none has been defined, the basename of the resource is obtained.
    * @returns the display name of the resource. The returned string is owned by the recent manager, and should not be freed. 
    */
  getDisplayName(): string;
  /**
    * Retrieves the icon associated to the resource MIME type.
    * @returns a Gio.Icon containing the icon, or None. Use GObject.Object.unref() when finished using the icon 
    */
  getGicon(): import('../Gio').Icon | null;
  /**
    * Returns all groups registered for the recently used item self. The array of returned group names will be None terminated, so length might optionally be None.
    * @returns a newly allocated None terminated array of strings. Use GLib.strfreev() to free it. 
    */
  getGroups(): string[];
  /**
    * Retrieves the icon of size size associated to the resource MIME type.
    * @param size the size of the icon in pixels
    * @returns a GdkPixbuf.Pixbuf containing the icon, or None. Use GObject.Object.unref() when finished using the icon. 
    */
  getIcon(size: number): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Gets the MIME type of the resource.
    * @returns the MIME type of the resource. The returned string is owned by the recent manager, and should not be freed. 
    */
  getMimeType(): string;
  /**
    * Gets the timestamp (seconds from system’s Epoch) when the meta-data for the resource was last modified.
    * @returns the number of seconds elapsed from system’s Epoch when the resource was last modified, or -1 on failure. 
    */
  getModified(): number;
  /**
    * Gets the value of the “private” flag. Resources in the recently used list that have this flag set to True should only be displayed by the applications that have registered them.
    * @returns True if the private flag was found, False otherwise 
    */
  getPrivateHint(): boolean;
  /**
    * Computes a valid UTF-8 string that can be used as the name of the item in a menu or list. For example, calling this function on an item that refers to “file:///foo/bar.txt” will yield “bar.txt”.
    * @returns A newly-allocated string in UTF-8 encoding free it with GLib.free() 
    */
  getShortName(): string;
  /**
    * Gets the URI of the resource.
    * @returns the URI of the resource. The returned string is owned by the recent manager, and should not be freed. 
    */
  getUri(): string;
  /**
    * Gets a displayable version of the resource’s URI. If the resource is local, it returns a local path; if the resource is not local, it returns the UTF-8 encoded content of Gtk.RecentInfo.get_uri().
    * @returns a newly allocated UTF-8 string containing the resource’s URI or None. Use GLib.free() when done using it. 
    */
  getUriDisplay(): string | null;
  /**
    * Gets the timestamp (seconds from system’s Epoch) when the meta-data for the resource was last visited.
    * @returns the number of seconds elapsed from system’s Epoch when the resource was last visited, or -1 on failure. 
    */
  getVisited(): number;
  /**
    * Checks whether an application registered this resource using app_name.
    * @param appName a string containing an application name
    * @returns True if an application with name app_name was found, False otherwise 
    */
  hasApplication(appName: string): boolean;
  /**
    * Checks whether group_name appears inside the groups registered for the recently used item self.
    * @param groupName name of a group
    * @returns True if the group was found 
    */
  hasGroup(groupName: string): boolean;
  /**
    * Checks whether the resource is local or not by looking at the scheme of its URI.
    * @returns True if the resource is local 
    */
  isLocal(): boolean;
  /**
    * Gets the name of the last application that have registered the recently used resource represented by self.
    * @returns an application name. Use GLib.free() to free it. 
    */
  lastApplication(): string;
  /**
    * Checks whether two Gtk.RecentInfo-struct point to the same resource.
    * @param infoB a Gtk.RecentInfo
    * @returns True if both Gtk.RecentInfo-struct point to the same resource, False otherwise 
    */
  match(infoB: import('../Gtk').RecentInfo): boolean;
  /**
    * Increases the reference count of recent_info by one.
    * @returns the recent info object with its reference count increased by one 
    */
  ref(): import('../Gtk').RecentInfo;
  /**
    * Decreases the reference count of self by one. If the reference count reaches zero, self is deallocated, and the memory freed. 
    */
  unref(): void;
}

