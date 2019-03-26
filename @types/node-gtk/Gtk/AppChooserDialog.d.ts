import * as Gtk from '../Gtk';
export declare interface AppChooserDialog extends Gtk.Dialog, Gtk.AppChooser { }

/**
  * Gtk.AppChooserDialog shows a Gtk.AppChooserWidget inside a Gtk.Dialog. 
  */
export declare class AppChooserDialog {
  /**
    * Creates a new Gtk.AppChooserDialog for the provided Gio.File, to allow the user to select an application for it.
    * @param parent a Gtk.Window, or None
    * @param flags flags for this dialog
    * @param file a Gio.File
    * @returns a newly created Gtk.AppChooserDialog 
    */
  static new(parent: import('../Gtk').Window | null, flags: import('../Gtk').DialogFlags, file: import('../Gio').File): import('../Gtk').Widget;
  /**
    * Creates a new Gtk.AppChooserDialog for the provided content type, to allow the user to select an application for it.
    * @param parent a Gtk.Window, or None
    * @param flags flags for this dialog
    * @param contentType a content type string
    * @returns a newly created Gtk.AppChooserDialog 
    */
  static newForContentType(parent: import('../Gtk').Window | null, flags: import('../Gtk').DialogFlags, contentType: string): import('../Gtk').Widget;
  /**
    * Returns the text to display at the top of the dialog.
    * @returns the text to display at the top of the dialog, or None, in which case a default text is displayed 
    */
  getHeading(): string | null;
  /**
    * Returns the Gtk.AppChooserWidget of this dialog.
    * @returns the Gtk.AppChooserWidget of self 
    */
  getWidget(): import('../Gtk').Widget;
  /**
    * Sets the text to display at the top of the dialog. If the heading is not set, the dialog displays a default text.
    * @param heading a string containing Pango markup 
    */
  setHeading(heading: string): void;
  /**
    * The Gio.File used by the app chooser dialog 
    */
  gfile: import('../Gio').File;
  /**
    * The text to show at the top of the dialog 
    */
  heading: string;
}

