import * as Gio from '../Gio';
export declare interface Application extends Gio.Application { }

/**
  * Gtk.Application is a class that handles many important aspects
of a GTK+ application in a convenient fashion, without enforcing
a one-size-fits-all application model. 
  */
export declare class Application {
  /**
    * Creates a new Gtk.Application instance.
    * @param applicationId The application ID.
    * @param flags the application flags
    * @returns a new Gtk.Application instance 
    */
  static new(applicationId: string | null, flags: import('../Gio').ApplicationFlags): import('../Gtk').Application;
  /**
    * Installs an accelerator that will cause the named action to be activated when the key combination specificed by accelerator is pressed.
    * @param accelerator accelerator string
    * @param actionName the name of the action to activate
    * @param parameter parameter to pass when activating the action, or None if the action does not accept an activation parameter 
    */
  addAccelerator(accelerator: string, actionName: string, parameter: import('../GLib').Variant | null): void;
  /**
    * Adds a window to self.
    * @param window a Gtk.Window 
    */
  addWindow(window: import('../Gtk').Window): void;
  /**
    * Gets the accelerators that are currently associated with the given action.
    * @param detailedActionName a detailed action name, specifying an action and target to obtain accelerators for
    * @returns accelerators for detailed_action_name, as a None-terminated array. Free with GLib.strfreev() when no longer needed 
    */
  getAccelsForAction(detailedActionName: string): string[];
  /**
    * Returns the list of actions (possibly empty) that accel maps to. Each item in the list is a detailed action name in the usual form.
    * @param accel an accelerator that can be parsed by Gtk.accelerator_parse()
    * @returns a None-terminated array of actions for accel 
    */
  getActionsForAccel(accel: string): string[];
  /**
    * Gets the “active” window for the application.
    * @returns the active window, or None if there isn’t one. 
    */
  getActiveWindow(): import('../Gtk').Window | null;
  /**
    * Returns the menu model that has been set with Gtk.Application.set_app_menu().
    * @returns the application menu of self or None if no application menu has been set. 
    */
  getAppMenu(): import('../Gio').MenuModel | null;
  /**
    * Gets a menu from automatically loaded resources. See Automatic resources for more information.
    * @param id the id of the menu to look up
    * @returns Gets the menu with the given id from the automatically loaded resources 
    */
  getMenuById(id: string): import('../Gio').Menu;
  /**
    * Returns the menu model that has been set with Gtk.Application.set_menubar().
    * @returns the menubar for windows of self 
    */
  getMenubar(): import('../Gio').MenuModel;
  /**
    * Returns the Gtk.ApplicationWindow with the given ID.
    * @param id an identifier number
    * @returns the window with ID id, or None if there is no window with this ID 
    */
  getWindowById(id: number): import('../Gtk').Window | null;
  /**
    * Gets a list of the Gtk.Windows associated with self.
    * @returns a GLib.List of Gtk.Window 
    */
  getWindows(): import('../Gtk').Window[];
  /**
    * Inform the session manager that certain types of actions should be inhibited. This is not guaranteed to work on all platforms and for all types of actions.
    * @param window a Gtk.Window, or None
    * @param flags what types of actions should be inhibited
    * @param reason a short, human-readable string that explains why these operations are inhibited
    * @returns A non-zero cookie that is used to uniquely identify this request. It should be used as an argument to Gtk.Application.uninhibit() in order to remove the request. If the platform does not support inhibiting or the request failed for some reason, 0 is returned. 
    */
  inhibit(window: import('../Gtk').Window | null, flags: import('../Gtk').ApplicationInhibitFlags, reason: string | null): number;
  /**
    * Determines if any of the actions specified in flags are currently inhibited (possibly by another application).
    * @param flags what types of actions should be queried
    * @returns True if any of the actions specified in flags are inhibited 
    */
  isInhibited(flags: import('../Gtk').ApplicationInhibitFlags): boolean;
  /**
    * Lists the detailed action names which have associated accelerators. See Gtk.Application.set_accels_for_action().
    * @returns a None-terminated array of strings, free with GLib.strfreev() when done 
    */
  listActionDescriptions(): string[];
  /**
    * Determines if the desktop environment in which the application is running would prefer an application menu be shown.
    * @returns True if you should set an app menu 
    */
  prefersAppMenu(): boolean;
  /**
    * Removes an accelerator that has been previously added with Gtk.Application.add_accelerator().
    * @param actionName the name of the action to activate
    * @param parameter parameter to pass when activating the action, or None if the action does not accept an activation parameter 
    */
  removeAccelerator(actionName: string, parameter: import('../GLib').Variant | null): void;
  /**
    * Remove a window from self.
    * @param window a Gtk.Window 
    */
  removeWindow(window: import('../Gtk').Window): void;
  /**
    * Sets zero or more keyboard accelerators that will trigger the given action. The first item in accels will be the primary accelerator, which may be displayed in the UI.
    * @param detailedActionName a detailed action name, specifying an action and target to associate accelerators with
    * @param accels a list of accelerators in the format understood by Gtk.accelerator_parse() 
    */
  setAccelsForAction(detailedActionName: string, accels: string): void;
  /**
    * Sets or unsets the application menu for self.
    * @param appMenu a Gio.MenuModel, or None 
    */
  setAppMenu(appMenu: import('../Gio').MenuModel | null): void;
  /**
    * Sets or unsets the menubar for windows of self.
    * @param menubar a Gio.MenuModel, or None 
    */
  setMenubar(menubar: import('../Gio').MenuModel | null): void;
  /**
    * Removes an inhibitor that has been established with Gtk.Application.inhibit(). Inhibitors are also cleared when the application exits.
    * @param cookie a cookie that was returned by Gtk.Application.inhibit() 
    */
  uninhibit(cookie: number): void;
  /**
    * The window which most recently had focus 
    */
  readonly activeWindow: import('../Gtk').Window;
  /**
    * The Gio.MenuModel for the application menu 
    */
  appMenu: import('../Gio').MenuModel;
  /**
    * The Gio.MenuModel for the menubar 
    */
  menubar: import('../Gio').MenuModel;
  /**
    * Register with the session manager 
    */
  registerSession: boolean;
  /**
    * Whether the screensaver is active 
    */
  readonly screensaverActive: boolean;
}

