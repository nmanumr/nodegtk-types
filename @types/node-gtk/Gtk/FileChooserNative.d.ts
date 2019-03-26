import * as Gtk from '../Gtk';
export declare interface FileChooserNative extends Gtk.NativeDialog, Gtk.FileChooser { }

/**
  * Gtk.FileChooserNative is an abstraction of a dialog box suitable
for use with “File/Open” or “File/Save as” commands. By default, this
just uses a Gtk.FileChooserDialog to implement the actual dialog.
However, on certain platforms, such as Windows and macOS, the native platform
file chooser is used instead. When the application is running in a
sandboxed environment without direct filesystem access (such as Flatpak),
Gtk.FileChooserNative may call the proper APIs (portals) to let the user
choose a file and make it available to the application. 
  */
export declare class FileChooserNative {
  /**
    * Creates a new Gtk.FileChooserNative.
    * @param title Title of the native, or None
    * @param parent Transient parent of the native, or None
    * @param action Open or save mode for the dialog
    * @param acceptLabel text to go in the accept button, or None for the default
    * @param cancelLabel text to go in the cancel button, or None for the default
    * @returns a new Gtk.FileChooserNative 
    */
  static new(title: string | null, parent: import('../Gtk').Window | null, action: import('../Gtk').FileChooserAction, acceptLabel: string | null, cancelLabel: string | null): import('../Gtk').FileChooserNative;
  /**
    * Retrieves the custom label text for the accept button.
    * @returns The custom label, or None for the default. This string is owned by GTK+ and should not be modified or freed 
    */
  getAcceptLabel(): string | null;
  /**
    * Retrieves the custom label text for the cancel button.
    * @returns The custom label, or None for the default. This string is owned by GTK+ and should not be modified or freed 
    */
  getCancelLabel(): string | null;
  /**
    * Sets the custom label text for the accept button.
    * @param acceptLabel custom label or None for the default 
    */
  setAcceptLabel(acceptLabel: string | null): void;
  /**
    * Sets the custom label text for the cancel button.
    * @param cancelLabel custom label or None for the default 
    */
  setCancelLabel(cancelLabel: string | null): void;
  /**
    * The label on the accept button 
    */
  acceptLabel: string;
  /**
    * The label on the cancel button 
    */
  cancelLabel: string;
}

