import * as GObject from '../GObject';
export declare interface FileChooser extends GObject.GInterface { }

/**
  * Gtk.FileChooser is an interface that can be implemented by file
selection widgets.  In GTK+, the main objects that implement this
interface are Gtk.FileChooserWidget, Gtk.FileChooserDialog, and
Gtk.FileChooserButton.  You do not need to write an object that
implements the Gtk.FileChooser interface unless you are trying to
adapt an existing file selector to expose a standard programming
interface. 
  */
export declare interface FileChooser {
  /**
    * Adds a ‘choice’ to the file chooser. This is typically implemented as a combobox or, for boolean choices, as a checkbutton. You can select a value using Gtk.FileChooser.set_choice() before the dialog is shown, and you can obtain the user-selected value in the ::response signal handler using Gtk.FileChooser.get_choice().
    * @param id id for the added choice
    * @param label user-visible label for the added choice
    * @param options ids for the options of the choice, or None for a boolean choice
    * @param optionLabels user-visible labels for the options, must be the same length as options 
    */
  addChoice(id: string, label: string, options: string | null, optionLabels: string | null): void;
  /**
    * Adds filter to the list of filters that the user can select between. When a filter is selected, only files that are passed by that filter are displayed.
    * @param filter a Gtk.FileFilter 
    */
  addFilter(filter: import('../Gtk').FileFilter): void;
  /**
    * Adds a folder to be displayed with the shortcut folders in a file chooser. Note that shortcut folders do not get saved, as they are provided by the application.  For example, you can use this to add a “/usr/share/mydrawprogram/Clipart” folder to the volume list.
    * @param folder filename of the folder to add
    * @returns True if the folder could be added successfully, False otherwise.  In the latter case, the error will be set as appropriate. 
    */
  addShortcutFolder(folder: string): boolean;
  /**
    * Adds a folder URI to be displayed with the shortcut folders in a file chooser.  Note that shortcut folders do not get saved, as they are provided by the application.  For example, you can use this to add a “file:///usr/share/mydrawprogram/Clipart” folder to the volume list.
    * @param uri URI of the folder to add
    * @returns True if the folder could be added successfully, False otherwise.  In the latter case, the error will be set as appropriate. 
    */
  addShortcutFolderUri(uri: string): boolean;
  /**
    * Gets the type of operation that the file chooser is performing; see Gtk.FileChooser.set_action().
    * @returns the action that the file selector is performing 
    */
  getAction(): import('../Gtk').FileChooserAction;
  /**
    * Gets the currently selected option in the ‘choice’ with the given ID.
    * @param id the ID of the choice to get
    * @returns the ID of the currenly selected option 
    */
  getChoice(id: string): string;
  /**
    * Gets whether file choser will offer to create new folders. See Gtk.FileChooser.set_create_folders().
    * @returns True if the Create Folder button should be displayed. 
    */
  getCreateFolders(): boolean;
  /**
    * Gets the current folder of self as a local filename. See Gtk.FileChooser.set_current_folder().
    * @returns the full path of the current folder, or None if the current path cannot be represented as a local filename.  Free with GLib.free().  This function will also return None if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling Gtk.FileChooser.set_current_folder() on a nonexistent folder. 
    */
  getCurrentFolder(): string | null;
  /**
    * Gets the current folder of self as Gio.File. See Gtk.FileChooser.get_current_folder_uri().
    * @returns the Gio.File for the current folder. 
    */
  getCurrentFolderFile(): import('../Gio').File;
  /**
    * Gets the current folder of self as an URI. See Gtk.FileChooser.set_current_folder_uri().
    * @returns the URI for the current folder. Free with GLib.free().  This function will also return None if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling Gtk.FileChooser.set_current_folder_uri() on a nonexistent folder. 
    */
  getCurrentFolderUri(): string | null;
  /**
    * Gets the current name in the file selector, as entered by the user in the text entry for “Name”.
    * @returns The raw text from the file chooser’s “Name” entry.  Free this with GLib.free().  Note that this string is not a full pathname or URI; it is whatever the contents of the entry are.  Note also that this string is in UTF-8 encoding, which is not necessarily the system’s encoding for filenames. 
    */
  getCurrentName(): string;
  /**
    * Queries whether a file chooser is set to confirm for overwriting when the user types a file name that already exists.
    * @returns True if the file chooser will present a confirmation dialog; False otherwise. 
    */
  getDoOverwriteConfirmation(): boolean;
  /**
    * Gets the current extra widget; see Gtk.FileChooser.set_extra_widget().
    * @returns the current extra widget, or None 
    */
  getExtraWidget(): import('../Gtk').Widget | null;
  /**
    * Gets the Gio.File for the currently selected file in the file selector. If multiple files are selected, one of the files will be returned at random.
    * @returns a selected Gio.File. You own the returned file; use GObject.Object.unref() to release it. 
    */
  getFile(): import('../Gio').File;
  /**
    * Gets the filename for the currently selected file in the file selector. The filename is returned as an absolute path. If multiple files are selected, one of the filenames will be returned at random.
    * @returns The currently selected filename, or None if no file is selected, or the selected file can’t be represented with a local filename. Free with GLib.free(). 
    */
  getFilename(): string | null;
  /**
    * Lists all the selected files and subfolders in the current folder of self. The returned names are full absolute paths. If files in the current folder cannot be represented as local filenames they will be ignored. (See Gtk.FileChooser.get_uris())
    * @returns a GLib.SList containing the filenames of all selected files and subfolders in the current folder. Free the returned list with g_slist_free(), and the filenames with GLib.free(). 
    */
  getFilenames(): string[];
  /**
    * Lists all the selected files and subfolders in the current folder of self as Gio.File. An internal function, see Gtk.FileChooser.get_uris().
    * @returns a GLib.SList containing a Gio.File for each selected file and subfolder in the current folder.  Free the returned list with g_slist_free(), and the files with GObject.Object.unref(). 
    */
  getFiles(): import('../Gio').File[];
  /**
    * Gets the current filter; see Gtk.FileChooser.set_filter().
    * @returns the current filter, or None 
    */
  getFilter(): import('../Gtk').FileFilter | null;
  /**
    * Gets whether only local files can be selected in the file selector. See Gtk.FileChooser.set_local_only()
    * @returns True if only local files can be selected. 
    */
  getLocalOnly(): boolean;
  /**
    * Gets the Gio.File that should be previewed in a custom preview Internal function, see Gtk.FileChooser.get_preview_uri().
    * @returns the Gio.File for the file to preview, or None if no file is selected. Free with GObject.Object.unref(). 
    */
  getPreviewFile(): import('../Gio').File | null;
  /**
    * Gets the filename that should be previewed in a custom preview widget. See Gtk.FileChooser.set_preview_widget().
    * @returns the filename to preview, or None if no file is selected, or if the selected file cannot be represented as a local filename. Free with GLib.free() 
    */
  getPreviewFilename(): string | null;
  /**
    * Gets the URI that should be previewed in a custom preview widget. See Gtk.FileChooser.set_preview_widget().
    * @returns the URI for the file to preview, or None if no file is selected. Free with GLib.free(). 
    */
  getPreviewUri(): string | null;
  /**
    * Gets the current preview widget; see Gtk.FileChooser.set_preview_widget().
    * @returns the current preview widget, or None 
    */
  getPreviewWidget(): import('../Gtk').Widget | null;
  /**
    * Gets whether the preview widget set by Gtk.FileChooser.set_preview_widget() should be shown for the current filename. See Gtk.FileChooser.set_preview_widget_active().
    * @returns True if the preview widget is active for the current filename. 
    */
  getPreviewWidgetActive(): boolean;
  /**
    * Gets whether multiple files can be selected in the file selector. See Gtk.FileChooser.set_select_multiple().
    * @returns True if multiple files can be selected. 
    */
  getSelectMultiple(): boolean;
  /**
    * Gets whether hidden files and folders are displayed in the file selector. See Gtk.FileChooser.set_show_hidden().
    * @returns True if hidden files and folders are displayed. 
    */
  getShowHidden(): boolean;
  /**
    * Gets the URI for the currently selected file in the file selector. If multiple files are selected, one of the filenames will be returned at random.
    * @returns The currently selected URI, or None if no file is selected. If Gtk.FileChooser.set_local_only() is set to True (the default) a local URI will be returned for any FUSE locations. Free with GLib.free() 
    */
  getUri(): string | null;
  /**
    * Lists all the selected files and subfolders in the current folder of self. The returned names are full absolute URIs.
    * @returns a GLib.SList containing the URIs of all selected files and subfolders in the current folder. Free the returned list with g_slist_free(), and the filenames with GLib.free(). 
    */
  getUris(): string[];
  /**
    * Gets whether a stock label should be drawn with the name of the previewed file.  See Gtk.FileChooser.set_use_preview_label().
    * @returns True if the file chooser is set to display a label with the name of the previewed file, False otherwise. 
    */
  getUsePreviewLabel(): boolean;
  /**
    * Lists the current set of user-selectable filters; see Gtk.FileChooser.add_filter(), Gtk.FileChooser.remove_filter().
    * @returns a GLib.SList containing the current set of user selectable filters. The contents of the list are owned by GTK+, but you must free the list itself with g_slist_free() when you are done with it. 
    */
  listFilters(): import('../Gtk').FileFilter[];
  /**
    * Queries the list of shortcut folders in the file chooser, as set by Gtk.FileChooser.add_shortcut_folder_uri().
    * @returns A list of folder URIs, or None if there are no shortcut folders.  Free the returned list with g_slist_free(), and the URIs with GLib.free(). 
    */
  listShortcutFolderUris(): string[] | null;
  /**
    * Queries the list of shortcut folders in the file chooser, as set by Gtk.FileChooser.add_shortcut_folder().
    * @returns A list of folder filenames, or None if there are no shortcut folders. Free the returned list with g_slist_free(), and the filenames with GLib.free(). 
    */
  listShortcutFolders(): string[] | null;
  /**
    * Removes a ‘choice’ that has been added with Gtk.FileChooser.add_choice().
    * @param id the ID of the choice to remove 
    */
  removeChoice(id: string): void;
  /**
    * Removes filter from the list of filters that the user can select between.
    * @param filter a Gtk.FileFilter 
    */
  removeFilter(filter: import('../Gtk').FileFilter): void;
  /**
    * Removes a folder from a file chooser’s list of shortcut folders.
    * @param folder filename of the folder to remove
    * @returns True if the operation succeeds, False otherwise. In the latter case, the error will be set as appropriate.See also: Gtk.FileChooser.add_shortcut_folder() 
    */
  removeShortcutFolder(folder: string): boolean;
  /**
    * Removes a folder URI from a file chooser’s list of shortcut folders.
    * @param uri URI of the folder to remove
    * @returns True if the operation succeeds, False otherwise. In the latter case, the error will be set as appropriate.See also: Gtk.FileChooser.add_shortcut_folder_uri() 
    */
  removeShortcutFolderUri(uri: string): boolean;
  /**
    * Selects all the files in the current folder of a file chooser. 
    */
  selectAll(): void;
  /**
    * Selects the file referred to by file. An internal function. See _gtk_file_chooser_select_uri().
    * @param file the file to select
    * @returns Not useful. 
    */
  selectFile(file: import('../Gio').File): boolean;
  /**
    * Selects a filename. If the file name isn’t in the current folder of self, then the current folder of self will be changed to the folder containing filename.
    * @param filename the filename to select
    * @returns Not useful.See also: Gtk.FileChooser.set_filename() 
    */
  selectFilename(filename: string): boolean;
  /**
    * Selects the file to by uri. If the URI doesn’t refer to a file in the current folder of self, then the current folder of self will be changed to the folder containing filename.
    * @param uri the URI to select
    * @returns Not useful. 
    */
  selectUri(uri: string): boolean;
  /**
    * Sets the type of operation that the chooser is performing; the user interface is adapted to suit the selected action. For example, an option to create a new folder might be shown if the action is Gtk.FileChooserAction.SAVE but not if the action is Gtk.FileChooserAction.OPEN.
    * @param action the action that the file selector is performing 
    */
  setAction(action: import('../Gtk').FileChooserAction): void;
  /**
    * Selects an option in a ‘choice’ that has been added with Gtk.FileChooser.add_choice(). For a boolean choice, the possible options are “true” and “false”.
    * @param id the ID of the choice to set
    * @param option the ID of the option to select 
    */
  setChoice(id: string, option: string): void;
  /**
    * Sets whether file choser will offer to create new folders. This is only relevant if the action is not set to be Gtk.FileChooserAction.OPEN.
    * @param createFolders True if the Create Folder button should be displayed 
    */
  setCreateFolders(createFolders: boolean): void;
  /**
    * Sets the current folder for self from a local filename. The user will be shown the full contents of the current folder, plus user interface elements for navigating to other folders.
    * @param filename the full path of the new current folder
    * @returns Not useful. 
    */
  setCurrentFolder(filename: string): boolean;
  /**
    * Sets the current folder for self from a Gio.File. Internal function, see Gtk.FileChooser.set_current_folder_uri().
    * @param file the Gio.File for the new folder
    * @returns True if the folder could be changed successfully, False otherwise. 
    */
  setCurrentFolderFile(file: import('../Gio').File): boolean;
  /**
    * Sets the current folder for self from an URI. The user will be shown the full contents of the current folder, plus user interface elements for navigating to other folders.
    * @param uri the URI for the new current folder
    * @returns True if the folder could be changed successfully, False otherwise. 
    */
  setCurrentFolderUri(uri: string): boolean;
  /**
    * Sets the current name in the file selector, as if entered by the user. Note that the name passed in here is a UTF-8 string rather than a filename. This function is meant for such uses as a suggested name in a “Save As…” dialog.  You can pass “Untitled.doc” or a similarly suitable suggestion for the name.
    * @param name the filename to use, as a UTF-8 string 
    */
  setCurrentName(name: string): void;
  /**
    * Sets whether a file chooser in Gtk.FileChooserAction.SAVE mode will present a confirmation dialog if the user types a file name that already exists.  This is False by default.
    * @param doOverwriteConfirmation whether to confirm overwriting in save mode 
    */
  setDoOverwriteConfirmation(doOverwriteConfirmation: boolean): void;
  /**
    * Sets an application-supplied widget to provide extra options to the user.
    * @param extraWidget widget for extra options 
    */
  setExtraWidget(extraWidget: import('../Gtk').Widget): void;
  /**
    * Sets file as the current filename for the file chooser, by changing to the file’s parent folder and actually selecting the file in list.  If the self is in Gtk.FileChooserAction.SAVE mode, the file’s base name will also appear in the dialog’s file name entry.
    * @param file the Gio.File to set as current
    * @returns Not useful. 
    */
  setFile(file: import('../Gio').File): boolean;
  /**
    * Sets filename as the current filename for the file chooser, by changing to the file’s parent folder and actually selecting the file in list; all other files will be unselected.  If the self is in Gtk.FileChooserAction.SAVE mode, the file’s base name will also appear in the dialog’s file name entry.
    * @param filename the filename to set as current
    * @returns Not useful. 
    */
  setFilename(filename: string): boolean;
  /**
    * Sets the current filter; only the files that pass the filter will be displayed. If the user-selectable list of filters is non-empty, then the filter should be one of the filters in that list. Setting the current filter when the list of filters is empty is useful if you want to restrict the displayed set of files without letting the user change it.
    * @param filter a Gtk.FileFilter 
    */
  setFilter(filter: import('../Gtk').FileFilter): void;
  /**
    * Sets whether only local files can be selected in the file selector. If local_only is True (the default), then the selected file or files are guaranteed to be accessible through the operating systems native file system and therefore the application only needs to worry about the filename functions in Gtk.FileChooser, like Gtk.FileChooser.get_filename(), rather than the URI functions like Gtk.FileChooser.get_uri(),
    * @param localOnly True if only local files can be selected 
    */
  setLocalOnly(localOnly: boolean): void;
  /**
    * Sets an application-supplied widget to use to display a custom preview of the currently selected file. To implement a preview, after setting the preview widget, you connect to the Gtk.FileChooser ::update-preview signal, and call Gtk.FileChooser.get_preview_filename() or Gtk.FileChooser.get_preview_uri() on each change. If you can display a preview of the new file, update your widget and set the preview active using Gtk.FileChooser.set_preview_widget_active(). Otherwise, set the preview inactive.
    * @param previewWidget widget for displaying preview. 
    */
  setPreviewWidget(previewWidget: import('../Gtk').Widget): void;
  /**
    * Sets whether the preview widget set by Gtk.FileChooser.set_preview_widget() should be shown for the current filename. When active is set to false, the file chooser may display an internally generated preview of the current file or it may display no preview at all. See Gtk.FileChooser.set_preview_widget() for more details.
    * @param active whether to display the user-specified preview widget 
    */
  setPreviewWidgetActive(active: boolean): void;
  /**
    * Sets whether multiple files can be selected in the file selector.  This is only relevant if the action is set to be Gtk.FileChooserAction.OPEN or Gtk.FileChooserAction.SELECT_FOLDER.
    * @param selectMultiple True if multiple files can be selected. 
    */
  setSelectMultiple(selectMultiple: boolean): void;
  /**
    * Sets whether hidden files and folders are displayed in the file selector.
    * @param showHidden True if hidden files and folders should be displayed. 
    */
  setShowHidden(showHidden: boolean): void;
  /**
    * Sets the file referred to by uri as the current file for the file chooser, by changing to the URI’s parent folder and actually selecting the URI in the list.  If the self is Gtk.FileChooserAction.SAVE mode, the URI’s base name will also appear in the dialog’s file name entry.
    * @param uri the URI to set as current
    * @returns Not useful. 
    */
  setUri(uri: string): boolean;
  /**
    * Sets whether the file chooser should display a stock label with the name of the file that is being previewed; the default is True.  Applications that want to draw the whole preview area themselves should set this to False and display the name themselves in their preview widget.
    * @param useLabel whether to display a stock label with the name of the previewed file 
    */
  setUsePreviewLabel(useLabel: boolean): void;
  /**
    * Unselects all the files in the current folder of a file chooser. 
    */
  unselectAll(): void;
  /**
    * Unselects the file referred to by file. If the file is not in the current directory, does not exist, or is otherwise not currently selected, does nothing.
    * @param file a Gio.File 
    */
  unselectFile(file: import('../Gio').File): void;
  /**
    * Unselects a currently selected filename. If the filename is not in the current directory, does not exist, or is otherwise not currently selected, does nothing.
    * @param filename the filename to unselect 
    */
  unselectFilename(filename: string): void;
  /**
    * Unselects the file referred to by uri. If the file is not in the current directory, does not exist, or is otherwise not currently selected, does nothing.
    * @param uri the URI to unselect 
    */
  unselectUri(uri: string): void;
  /**
    * The type of operation that the file selector is performing 
    */
  action: import('../Gtk').FileChooserAction;
  /**
    * Whether a file chooser not in open mode will offer the user to create new folders. 
    */
  createFolders: boolean;
  /**
    * Whether a file chooser in save mode will present an overwrite confirmation dialog if necessary. 
    */
  doOverwriteConfirmation: boolean;
  /**
    * Application supplied widget for extra options. 
    */
  extraWidget: import('../Gtk').Widget;
  /**
    * The current filter for selecting which files are displayed 
    */
  filter: import('../Gtk').FileFilter;
  /**
    * Whether the selected file(s) should be limited to local file: URLs 
    */
  localOnly: boolean;
  /**
    * Application supplied widget for custom previews. 
    */
  previewWidget: import('../Gtk').Widget;
  /**
    * Whether the application supplied widget for custom previews should be shown. 
    */
  previewWidgetActive: boolean;
  /**
    * Whether to allow multiple files to be selected 
    */
  selectMultiple: boolean;
  /**
    * Whether the hidden files and folders should be displayed 
    */
  showHidden: boolean;
  /**
    * Whether to display a stock label with the name of the previewed file. 
    */
  usePreviewLabel: boolean;
}

