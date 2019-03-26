import * as GObject from '../GObject';
export declare interface WindowGroup extends GObject.Object { }

/**
  * A Gtk.WindowGroup restricts the effect of grabs to windows
in the same group, thereby making window groups almost behave
like separate applications. 
  */
export declare class WindowGroup {
  /**
    * Creates a new Gtk.WindowGroup object. Grabs added with Gtk.Widget.grab_add() only affect windows within the same Gtk.WindowGroup.
    * @returns a new Gtk.WindowGroup. 
    */
  static new(): import('../Gtk').WindowGroup;
  /**
    * Adds a window to a Gtk.WindowGroup.
    * @param window the Gtk.Window to add 
    */
  addWindow(window: import('../Gtk').Window): void;
  /**
    * Returns the current grab widget for device, or None if none.
    * @param device a Gdk.Device
    * @returns The grab widget, or None 
    */
  getCurrentDeviceGrab(device: import('../Gdk').Device): import('../Gtk').Widget | null;
  /**
    * Gets the current grab widget of the given group, see Gtk.Widget.grab_add().
    * @returns the current grab widget of the group 
    */
  getCurrentGrab(): import('../Gtk').Widget;
  /**
    * Returns a list of the Gtk.Windows that belong to self.
    * @returns A newly-allocated list of windows inside the group. 
    */
  listWindows(): import('../Gtk').Window[];
  /**
    * Removes a window from a Gtk.WindowGroup.
    * @param window the Gtk.Window to remove 
    */
  removeWindow(window: import('../Gtk').Window): void;
}

