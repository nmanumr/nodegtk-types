/**
  * The GBookmarkFile structure contains only
private data and should not be directly accessed. 
  */
export declare class BookmarkFile {
  static errorQuark(): number;
  /**
    * Adds the application with name and exec to the list of applications that have registered a bookmark for uri into self.
    * @param uri a valid URI
    * @param name the name of the application registering the bookmark or None
    * @param exec command line to be used to launch the bookmark or None 
    */
  addApplication(uri: string, name: string | null, exec: string | null): void;
  /**
    * Adds group to the list of groups to which the bookmark for uri belongs to.
    * @param uri a valid URI
    * @param group the group name to be added 
    */
  addGroup(uri: string, group: string): void;
  /**
    * Frees a GLib.BookmarkFile. 
    */
  free(): void;
  /**
    * Gets the time the bookmark for uri was added to self
    * @param uri a valid URI
    * @returns a timestamp 
    */
  getAdded(uri: string): number;
  /**
    * Gets the registration information of app_name for the bookmark for uri.  See GLib.BookmarkFile.set_app_info() for more information about the returned data.
    * @param uri a valid URI
    * @param name an application’s name
    * @returns True on success.   exec_:return location for the command line of the application, or None count:return location for the registration count, or None stamp:return location for the last registration time, or None 
    */
  getAppInfo(uri: string, name: string): [boolean, string, number, number];
  /**
    * Retrieves the names of the applications that have registered the bookmark for uri.
    * @param uri a valid URI
    * @returns a newly allocated None-terminated array of strings. Use GLib.strfreev() to free it. 
    */
  getApplications(uri: string): string[];
  /**
    * Retrieves the description of the bookmark for uri.
    * @param uri a valid URI
    * @returns a newly allocated string or None if the specified URI cannot be found. 
    */
  getDescription(uri: string): string;
  /**
    * Retrieves the list of group names of the bookmark for uri.
    * @param uri a valid URI
    * @returns a newly allocated None-terminated array of group names. Use GLib.strfreev() to free it. 
    */
  getGroups(uri: string): string[];
  /**
    * Gets the icon of the bookmark for uri.
    * @param uri a valid URI
    * @returns True if the icon for the bookmark for the URI was found. You should free the returned strings.  href:return location for the icon’s location or None mime_type:return location for the icon’s MIME type or None 
    */
  getIcon(uri: string): [boolean, string, string];
  /**
    * Gets whether the private flag of the bookmark for uri is set.
    * @param uri a valid URI
    * @returns True if the private flag is set, False otherwise. 
    */
  getIsPrivate(uri: string): boolean;
  /**
    * Retrieves the MIME type of the resource pointed by uri.
    * @param uri a valid URI
    * @returns a newly allocated string or None if the specified URI cannot be found. 
    */
  getMimeType(uri: string): string;
  /**
    * Gets the time when the bookmark for uri was last modified.
    * @param uri a valid URI
    * @returns a timestamp 
    */
  getModified(uri: string): number;
  /**
    * Gets the number of bookmarks inside self.
    * @returns the number of bookmarks 
    */
  getSize(): number;
  /**
    * Returns the title of the bookmark for uri.
    * @param uri a valid URI or None
    * @returns a newly allocated string or None if the specified URI cannot be found. 
    */
  getTitle(uri: string | null): string;
  /**
    * Returns all URIs of the bookmarks in the bookmark file self. The array of returned URIs will be None-terminated, so length may optionally be None.
    * @returns a newly allocated None-terminated array of strings. Use GLib.strfreev() to free it. 
    */
  getUris(): string[];
  /**
    * Gets the time the bookmark for uri was last visited.
    * @param uri a valid URI
    * @returns a timestamp. 
    */
  getVisited(uri: string): number;
  /**
    * Checks whether the bookmark for uri inside self has been registered by application name.
    * @param uri a valid URI
    * @param name the name of the application
    * @returns True if the application name was found 
    */
  hasApplication(uri: string, name: string): boolean;
  /**
    * Checks whether group appears in the list of groups to which the bookmark for uri belongs to.
    * @param uri a valid URI
    * @param group the group name to be searched
    * @returns True if group was found. 
    */
  hasGroup(uri: string, group: string): boolean;
  /**
    * Looks whether the desktop bookmark has an item with its URI set to uri.
    * @param uri a valid URI
    * @returns True if uri is inside self, False otherwise 
    */
  hasItem(uri: string): boolean;
  /**
    * Loads a bookmark file from memory into an empty GLib.BookmarkFile structure.  If the object cannot be created then error is set to a GLib.BookmarkFileError.
    * @param data desktop bookmarks loaded in memory
    * @returns True if a desktop bookmark could be loaded. 
    */
  loadFromData(data: Int8Array): boolean;
  /**
    * This function looks for a desktop bookmark file named file in the paths returned from GLib.get_user_data_dir() and GLib.get_system_data_dirs(), loads the file into self and returns the file’s full path in full_path.  If the file could not be loaded then error is set to either a GLib.FileError or GLib.BookmarkFileError.
    * @param file a relative path to a filename to open and parse
    * @returns True if a key file could be loaded, False otherwise  full_path:return location for a string containing the full path of the file, or None 
    */
  loadFromDataDirs(file: string): [boolean, string];
  /**
    * Loads a desktop bookmark file into an empty GLib.BookmarkFile structure. If the file could not be loaded then error is set to either a GLib.FileError or GLib.BookmarkFileError.
    * @param filename the path of a filename to load, in the GLib file name encoding
    * @returns True if a desktop bookmark file could be loaded 
    */
  loadFromFile(filename: string): boolean;
  /**
    * Changes the URI of a bookmark item from old_uri to new_uri.  Any existing bookmark for new_uri will be overwritten.  If new_uri is None, then the bookmark is removed.
    * @param oldUri a valid URI
    * @param newUri a valid URI, or None
    * @returns True if the URI was successfully changed 
    */
  moveItem(oldUri: string, newUri: string | null): boolean;
  /**
    * Removes application registered with name from the list of applications that have registered a bookmark for uri inside self.
    * @param uri a valid URI
    * @param name the name of the application
    * @returns True if the application was successfully removed. 
    */
  removeApplication(uri: string, name: string): boolean;
  /**
    * Removes group from the list of groups to which the bookmark for uri belongs to.
    * @param uri a valid URI
    * @param group the group name to be removed
    * @returns True if group was successfully removed. 
    */
  removeGroup(uri: string, group: string): boolean;
  /**
    * Removes the bookmark for uri from the bookmark file self.
    * @param uri a valid URI
    * @returns True if the bookmark was removed successfully. 
    */
  removeItem(uri: string): boolean;
  /**
    * Sets the time the bookmark for uri was added into self.
    * @param uri a valid URI
    * @param added a timestamp or -1 to use the current time 
    */
  setAdded(uri: string, added: number): void;
  /**
    * Sets the meta-data of application name inside the list of applications that have registered a bookmark for uri inside self.
    * @param uri a valid URI
    * @param name an application’s name
    * @param exec an application’s command line
    * @param count the number of registrations done for this application
    * @param stamp the time of the last registration for this application
    * @returns True if the application’s meta-data was successfully changed. 
    */
  setAppInfo(uri: string, name: string, exec: string, count: number, stamp: number): boolean;
  /**
    * Sets description as the description of the bookmark for uri.
    * @param uri a valid URI or None
    * @param description a string 
    */
  setDescription(uri: string | null, description: string): void;
  /**
    * Sets a list of group names for the item with URI uri.  Each previously set group name list is removed.
    * @param uri an item’s URI
    * @param groups an array of group names, or None to remove all groups 
    */
  setGroups(uri: string, groups: string | null): void;
  /**
    * Sets the icon for the bookmark for uri. If href is None, unsets the currently set icon. href can either be a full URL for the icon file or the icon name following the Icon Naming specification.
    * @param uri a valid URI
    * @param href the URI of the icon for the bookmark, or None
    * @param mimeType the MIME type of the icon for the bookmark 
    */
  setIcon(uri: string, href: string | null, mimeType: string): void;
  /**
    * Sets the private flag of the bookmark for uri.
    * @param uri a valid URI
    * @param isPrivate True if the bookmark should be marked as private 
    */
  setIsPrivate(uri: string, isPrivate: boolean): void;
  /**
    * Sets mime_type as the MIME type of the bookmark for uri.
    * @param uri a valid URI
    * @param mimeType a MIME type 
    */
  setMimeType(uri: string, mimeType: string): void;
  /**
    * Sets the last time the bookmark for uri was last modified.
    * @param uri a valid URI
    * @param modified a timestamp or -1 to use the current time 
    */
  setModified(uri: string, modified: number): void;
  /**
    * Sets title as the title of the bookmark for uri inside the bookmark file self.
    * @param uri a valid URI or None
    * @param title a UTF-8 encoded string 
    */
  setTitle(uri: string | null, title: string): void;
  /**
    * Sets the time the bookmark for uri was last visited.
    * @param uri a valid URI
    * @param visited a timestamp or -1 to use the current time 
    */
  setVisited(uri: string, visited: number): void;
  /**
    * This function outputs self as a string.
    * @returns a newly allocated string holding the contents of the GLib.BookmarkFile 
    */
  toData(): Int8Array;
  /**
    * This function outputs self into a file.  The write process is guaranteed to be atomic by using GLib.file_set_contents() internally.
    * @param filename path of the output file
    * @returns True if the file was successfully written. 
    */
  toFile(filename: string): boolean;
}

