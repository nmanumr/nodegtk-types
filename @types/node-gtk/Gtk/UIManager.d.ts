import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface UIManager extends GObject.Object, Gtk.Buildable { }

/**
  * Gtk.UIManager is deprecated since GTK+ 3.10. To construct user interfaces
from XML definitions, you should use Gtk.Builder, Gio.MenuModel, et al. To
work with actions, use Gio.Action, Gtk.Actionable et al. These newer classes
support richer functionality and integration with various desktop shells.
It should be possible to migrate most/all functionality from Gtk.UIManager. 
  */
export declare class UIManager {
/**
  * Creates a new ui manager object.
  * @returns a new ui manager object. 
  */
static new(): import('../Gtk').UIManager;
/**
  * Adds a UI element to the current contents of self.
  * @param mergeId the merge id for the merged UI, see Gtk.UIManager.new_merge_id()
  * @param path a path
  * @param name the name for the added UI element
  * @param action the name of the action to be proxied, or None to add a separator
  * @param type the type of UI element to add.
  * @param top if True, the UI element is added before its siblings, otherwise it is added after its siblings. 
  */
addUi(mergeId: number, path: string, name: string, action: string | null, type: import('../Gtk').UIManagerItemType, top: boolean): void;
/**
  * Parses a file containing a UI definition and merges it with the current contents of self.
  * @param filename the name of the file to parse
  * @returns The merge id for the merged UI. The merge id can be used to unmerge the UI with Gtk.UIManager.remove_ui(). If an error occurred, the return value is 0. 
  */
addUiFromFile(filename: string): number;
/**
  * Parses a resource file containing a UI definition and merges it with the current contents of self.
  * @param resourcePath the resource path of the file to parse
  * @returns The merge id for the merged UI. The merge id can be used to unmerge the UI with Gtk.UIManager.remove_ui(). If an error occurred, the return value is 0. 
  */
addUiFromResource(resourcePath: string): number;
/**
  * Parses a string containing a UI definition and merges it with the current contents of self. An enclosing <ui> element is added if it is missing.
  * @param buffer the string to parse
  * @param length the length of buffer (may be -1 if buffer is nul-terminated)
  * @returns The merge id for the merged UI. The merge id can be used to unmerge the UI with Gtk.UIManager.remove_ui(). If an error occurred, the return value is 0. 
  */
addUiFromString(buffer: string, length: number): number;
/**
  * Makes sure that all pending updates to the UI have been completed. 
  */
ensureUpdate(): void;
/**
  * Returns the Gtk.AccelGroup associated with self.
  * @returns the Gtk.AccelGroup. 
  */
getAccelGroup(): import('../Gtk').AccelGroup;
/**
  * Looks up an action by following a path. See Gtk.UIManager.get_widget() for more information about paths.
  * @param path a path
  * @returns the action whose proxy widget is found by following the path, or None if no widget was found. 
  */
getAction(path: string): import('../Gtk').Action;
/**
  * Returns the list of action groups associated with self.
  * @returns a GLib.List of action groups. The list is owned by GTK+ and should not be modified. 
  */
getActionGroups(): import('../Gtk').ActionGroup[];
/**
  * Returns whether menus generated by this Gtk.UIManager will have tearoff menu items.
  * @returns whether tearoff menu items are added 
  */
getAddTearoffs(): boolean;
/**
  * Obtains a list of all toplevel widgets of the requested types.
  * @param types specifies the types of toplevel widgets to include. Allowed types are Gtk.UIManagerItemType.MENUBAR, Gtk.UIManagerItemType.TOOLBAR and Gtk.UIManagerItemType.POPUP.
  * @returns a newly-allocated GLib.SList of all toplevel widgets of the requested types.  Free the returned list with g_slist_free(). 
  */
getToplevels(types: import('../Gtk').UIManagerItemType): import('../Gtk').Widget[];
/**
  * Creates a UI definition of the merged UI.
  * @returns A newly allocated string containing an XML representation of the merged UI. 
  */
getUi(): string;
/**
  * Looks up a widget by following a path. The path consists of the names specified in the XML description of the UI. separated by “/”. Elements which don’t have a name or action attribute in the XML (e.g. <popup>) can be addressed by their XML element name (e.g. “popup”). The root element (“/ui”) can be omitted in the path.
  * @param path a path
  * @returns the widget found by following the path, or None if no widget was found 
  */
getWidget(path: string): import('../Gtk').Widget;
/**
  * Inserts an action group into the list of action groups associated with self. Actions in earlier groups hide actions with the same name in later groups.
  * @param actionGroup the action group to be inserted
  * @param pos the position at which the group will be inserted. 
  */
insertActionGroup(actionGroup: import('../Gtk').ActionGroup, pos: number): void;
/**
  * Returns an unused merge id, suitable for use with Gtk.UIManager.add_ui().
  * @returns an unused merge id. 
  */
newMergeId(): number;
/**
  * Removes an action group from the list of action groups associated with self.
  * @param actionGroup the action group to be removed 
  */
removeActionGroup(actionGroup: import('../Gtk').ActionGroup): void;
/**
  * Unmerges the part of self’s content identified by merge_id.
  * @param mergeId a merge id as returned by Gtk.UIManager.add_ui_from_string() 
  */
removeUi(mergeId: number): void;
/**
  * Sets the “add_tearoffs” property, which controls whether menus generated by this Gtk.UIManager will have tearoff menu items.
  * @param addTearoffs whether tearoff menu items are added 
  */
setAddTearoffs(addTearoffs: boolean): void;
/**
  * Whether tearoff menu items should be added to menus deprecated 
  */
addTearoffs: boolean;
/**
  * An XML string describing the merged UI 
  */
readonly ui: string;
}

