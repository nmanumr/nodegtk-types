import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface DesktopAppInfo extends GObject.Object, Gio.AppInfo { }

/**
  * Gio.DesktopAppInfo is an implementation of Gio.AppInfo based on
desktop files. 
  */
export declare class DesktopAppInfo {
  /**
    * Gets all applications that implement interface.
    * @param interface the name of the interface
    * @returns a list of Gio.DesktopAppInfo objects. 
    */
  static getImplementations(interface: string): import('../Gio').DesktopAppInfo[];
  /**
    * Creates a new Gio.DesktopAppInfo based on a desktop file id.
    * @param desktopId the desktop file id
    * @returns a new Gio.DesktopAppInfo, or None if no desktop file with that id exists. 
    */
  static new(desktopId: string): import('../Gio').DesktopAppInfo | null;
  /**
    * Creates a new Gio.DesktopAppInfo.
    * @param filename the path of a desktop file, in the GLib filename encoding
    * @returns a new Gio.DesktopAppInfo or None on error. 
    */
  static newFromFilename(filename: string): import('../Gio').DesktopAppInfo | null;
  /**
    * Creates a new Gio.DesktopAppInfo.
    * @param keyFile an opened GLib.KeyFile
    * @returns a new Gio.DesktopAppInfo or None on error. 
    */
  static newFromKeyfile(keyFile: import('../GLib').KeyFile): import('../Gio').DesktopAppInfo | null;
  /**
    * Searches desktop files for ones that match search_string.
    * @param searchString the search string to use
    * @returns a list of strvs.  Free each item with GLib.strfreev() and free the outer list with GLib.free(). 
    */
  static search(searchString: string): string[];
  /**
    * Sets the name of the desktop that the application is running in. This is used by Gio.AppInfo.should_show() and Gio.DesktopAppInfo.get_show_in() to evaluate the OnlyShowIn and NotShowIn desktop entry fields.
    * @param desktopEnv a string specifying what desktop this is 
    */
  static setDesktopEnv(desktopEnv: string): void;
  /**
    * Gets the user-visible display name of the “additional application action” specified by action_name.
    * @param actionName the name of the action as from Gio.DesktopAppInfo.list_actions()
    * @returns the locale-specific action name 
    */
  getActionName(actionName: string): string;
  /**
    * Looks up a boolean value in the keyfile backing self.
    * @param key the key to look up
    * @returns the boolean value, or False if the key is not found 
    */
  getBoolean(key: string): boolean;
  /**
    * Gets the categories from the desktop file.
    * @returns The unparsed Categories key from the desktop file; i.e. no attempt is made to split it by ‘;’ or validate it. 
    */
  getCategories(): string;
  /**
    * When self was created from a known filename, return it.  In some situations such as the Gio.DesktopAppInfo returned from Gio.DesktopAppInfo.new_from_keyfile(), this function will return None.
    * @returns The full path to the file for self, or None if not known. 
    */
  getFilename(): string;
  /**
    * Gets the generic name from the destkop file.
    * @returns The value of the GenericName key 
    */
  getGenericName(): string;
  /**
    * A desktop file is hidden if the Hidden key in it is set to True.
    * @returns True if hidden, False otherwise. 
    */
  getIsHidden(): boolean;
  /**
    * Gets the keywords from the desktop file.
    * @returns The value of the Keywords key 
    */
  getKeywords(): string[];
  /**
    * Looks up a localized string value in the keyfile backing self translated to the current locale.
    * @param key the key to look up
    * @returns a newly allocated string, or None if the key is not found 
    */
  getLocaleString(key: string): string | null;
  /**
    * Gets the value of the NoDisplay key, which helps determine if the application info should be shown in menus. See GLib.KEY_FILE_DESKTOP_KEY_NO_DISPLAY and Gio.AppInfo.should_show().
    * @returns The value of the NoDisplay key 
    */
  getNodisplay(): boolean;
  /**
    * Checks if the application info should be shown in menus that list available applications for a specific name of the desktop, based on the OnlyShowIn and NotShowIn keys.
    * @param desktopEnv a string specifying a desktop name
    * @returns True if the self should be shown in desktop_env according to the OnlyShowIn and NotShowIn keys, False otherwise. 
    */
  getShowIn(desktopEnv: string | null): boolean;
  /**
    * Retrieves the StartupWMClass field from self. This represents the WM_CLASS property of the main window of the application, if launched through self.
    * @returns the startup WM class, or None if none is set in the desktop file. 
    */
  getStartupWmClass(): string;
  /**
    * Looks up a string value in the keyfile backing self.
    * @param key the key to look up
    * @returns a newly allocated string, or None if the key is not found 
    */
  getString(key: string): string;
  /**
    * Returns whether key exists in the “Desktop Entry” group of the keyfile backing self.
    * @param key the key to look up
    * @returns True if the key exists 
    */
  hasKey(key: string): boolean;
  /**
    * Activates the named application action.
    * @param actionName the name of the action as from Gio.DesktopAppInfo.list_actions()
    * @param launchContext a Gio.AppLaunchContext 
    */
  launchAction(actionName: string, launchContext: import('../Gio').AppLaunchContext | null): void;
  /**
    * This function performs the equivalent of Gio.AppInfo.launch_uris(), but is intended primarily for operating system components that launch applications.  Ordinary applications should use Gio.AppInfo.launch_uris().
    * @param uris List of URIs
    * @param launchContext a Gio.AppLaunchContext
    * @param spawnFlags GLib.SpawnFlags, used for each process
    * @param userSetup a GLib.SpawnChildSetupFunc, used once for each process.
    * @param userSetupData User data for user_setup
    * @param pidCallback Callback for child processes
    * @param pidCallbackData User data for callback
    * @returns True on successful launch, False otherwise. 
    */
  launchUrisAsManager(uris: string, launchContext: import('../Gio').AppLaunchContext | null, spawnFlags: import('../GLib').SpawnFlags, userSetup: import('../GLib').spawnChildSetupFunc | null, userSetupData: Object | null, pidCallback: import('../Gio').desktopAppLaunchCallback | null, pidCallbackData: Object | null): boolean;
  /**
    * Equivalent to Gio.DesktopAppInfo.launch_uris_as_manager() but allows you to pass in file descriptors for the stdin, stdout and stderr streams of the launched process.
    * @param uris List of URIs
    * @param launchContext a Gio.AppLaunchContext
    * @param spawnFlags GLib.SpawnFlags, used for each process
    * @param userSetup a GLib.SpawnChildSetupFunc, used once for each process.
    * @param userSetupData User data for user_setup
    * @param pidCallback Callback for child processes
    * @param pidCallbackData User data for callback
    * @param stdinFd file descriptor to use for child’s stdin, or -1
    * @param stdoutFd file descriptor to use for child’s stdout, or -1
    * @param stderrFd file descriptor to use for child’s stderr, or -1
    * @returns True on successful launch, False otherwise. 
    */
  launchUrisAsManagerWithFds(uris: string, launchContext: import('../Gio').AppLaunchContext | null, spawnFlags: import('../GLib').SpawnFlags, userSetup: import('../GLib').spawnChildSetupFunc | null, userSetupData: Object | null, pidCallback: import('../Gio').desktopAppLaunchCallback | null, pidCallbackData: Object | null, stdinFd: number, stdoutFd: number, stderrFd: number): boolean;
  /**
    * Returns the list of “additional application actions” supported on the desktop file, as per the desktop file specification.
    * @returns a list of strings, always non-None 
    */
  listActions(): string[];
  /**
    *   
    */
  filename: string;
}

