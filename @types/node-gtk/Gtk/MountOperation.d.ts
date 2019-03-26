import * as Gio from '../Gio';
export declare interface MountOperation extends Gio.MountOperation { }

/**
  * This should not be accessed directly. Use the accessor functions below. 
  */
export declare class MountOperation {
  /**
    * Creates a new Gtk.MountOperation
    * @param parent transient parent of the window, or None
    * @returns a new Gtk.MountOperation 
    */
  static new(parent: import('../Gtk').Window | null): import('../Gio').MountOperation;
  /**
    * Gets the transient parent used by the Gtk.MountOperation
    * @returns the transient parent for windows shown by self 
    */
  getParent(): import('../Gtk').Window;
  /**
    * Gets the screen on which windows of the Gtk.MountOperation will be shown.
    * @returns the screen on which windows of self are shown 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Returns whether the Gtk.MountOperation is currently displaying a window.
    * @returns True if self is currently displaying a window 
    */
  isShowing(): boolean;
  /**
    * Sets the transient parent for windows shown by the Gtk.MountOperation.
    * @param parent transient parent of the window, or None 
    */
  setParent(parent: import('../Gtk').Window | null): void;
  /**
    * Sets the screen to show windows of the Gtk.MountOperation on.
    * @param screen a Gdk.Screen 
    */
  setScreen(screen: import('../Gdk').Screen): void;
  /**
    * The parent window 
    */
  parent: import('../Gtk').Window;
  /**
    * The screen where this window will be displayed. 
    */
  screen: import('../Gdk').Screen;
}

