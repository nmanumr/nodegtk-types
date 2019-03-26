import * as Gtk from '../Gtk';
import * as Gio from '../Gio';
export declare interface ApplicationWindow extends Gtk.Window, Gio.ActionGroup, Gio.ActionMap { }

/**
  * Gtk.ApplicationWindow is a Gtk.Window subclass that offers some
extra functionality for better integration with Gtk.Application
features.  Notably, it can handle both the application menu as well
as the menubar. See Gtk.Application.set_app_menu() and
Gtk.Application.set_menubar(). 
  */
export declare class ApplicationWindow {
  /**
    * Creates a new Gtk.ApplicationWindow.
    * @param application a Gtk.Application
    * @returns a newly created Gtk.ApplicationWindow 
    */
  static new(application: import('../Gtk').Application): import('../Gtk').Widget;
  /**
    * Gets the Gtk.ShortcutsWindow that has been set up with a prior call to Gtk.ApplicationWindow.set_help_overlay().
    * @returns the help overlay associated with self, or None 
    */
  getHelpOverlay(): import('../Gtk').ShortcutsWindow | null;
  /**
    * Returns the unique ID of the window. If the window has not yet been added to a Gtk.Application, returns 0.
    * @returns the unique ID for self, or 0 if the window has not yet been added to a Gtk.Application 
    */
  getId(): number;
  /**
    * Returns whether the window will display a menubar for the app menu and menubar as needed.
    * @returns True if self will display a menubar when needed 
    */
  getShowMenubar(): boolean;
  /**
    * Associates a shortcuts window with the application window, and sets up an action with the name win.show-help-overlay to present it.
    * @param helpOverlay a Gtk.ShortcutsWindow 
    */
  setHelpOverlay(helpOverlay: import('../Gtk').ShortcutsWindow | null): void;
  /**
    * Sets whether the window will display a menubar for the app menu and menubar as needed.
    * @param showMenubar whether to show a menubar when needed 
    */
  setShowMenubar(showMenubar: boolean): void;
  /**
    * True if the window should show a menubar at the top of the window 
    */
  showMenubar: boolean;
}

