import * as GObject from '../GObject';
export declare interface AppChooser extends GObject.GInterface { }

/**
  * Gtk.AppChooser is an interface that can be implemented by widgets which
allow the user to choose an application (typically for the purpose of
opening a file). The main objects that implement this interface are
Gtk.AppChooserWidget, Gtk.AppChooserDialog and Gtk.AppChooserButton. 
  */
export declare interface AppChooser {
  /**
    * Returns the currently selected application.
    * @returns a Gio.AppInfo for the currently selected application, or None if none is selected. Free with GObject.Object.unref() 
    */
  getAppInfo(): import('../Gio').AppInfo | null;
  /**
    * Returns the current value of the Gtk.AppChooser :content-type property.
    * @returns the content type of self. Free with GLib.free() 
    */
  getContentType(): string;
  /**
    * Reloads the list of applications. 
    */
  refresh(): void;
  /**
    * The content type used by the open with object 
    */
  contentType: string;
}

