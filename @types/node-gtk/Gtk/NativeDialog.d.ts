import * as GObject from '../GObject';
export declare interface NativeDialog extends GObject.Object { }

/**
  * Native dialogs are platform dialogs that don’t use Gtk.Dialog or
Gtk.Window. They are used in order to integrate better with a
platform, by looking the same as other native applications and
supporting platform specific features. 
  */
export declare abstract class NativeDialog {
  /**
    * Destroys a dialog. 
    */
  destroy(): void;
  /**
    * Returns whether the dialog is modal. See Gtk.NativeDialog.set_modal().
    * @returns True if the dialog is set to be modal 
    */
  getModal(): boolean;
  /**
    * Gets the title of the Gtk.NativeDialog.
    * @returns the title of the dialog, or None if none has been set explicitly. The returned string is owned by the widget and must not be modified or freed. 
    */
  getTitle(): string | null;
  /**
    * Fetches the transient parent for this window. See Gtk.NativeDialog.set_transient_for().
    * @returns the transient parent for this window, or None if no transient parent has been set. 
    */
  getTransientFor(): import('../Gtk').Window | null;
  /**
    * Determines whether the dialog is visible.
    * @returns True if the dialog is visible 
    */
  getVisible(): boolean;
  /**
    * Hides the dialog if it is visilbe, aborting any interaction. Once this is called the  Gtk.NativeDialog ::response signal will not be emitted until after the next call to Gtk.NativeDialog.show(). 
    */
  hide(): void;
  /**
    * Blocks in a recursive main loop until self emits the Gtk.NativeDialog ::response signal. It then returns the response ID from the ::response signal emission.
    * @returns response ID 
    */
  run(): number;
  /**
    * Sets a dialog modal or non-modal. Modal dialogs prevent interaction with other windows in the same application. To keep modal dialogs on top of main application windows, use Gtk.NativeDialog.set_transient_for() to make the dialog transient for the parent; most window managers will then disallow lowering the dialog below the parent.
    * @param modal whether the window is modal 
    */
  setModal(modal: boolean): void;
  /**
    * Sets the title of the Gtk.NativeDialog.
    * @param title title of the dialog 
    */
  setTitle(title: string): void;
  /**
    * Dialog windows should be set transient for the main application window they were spawned from. This allows window managers to e.g. keep the dialog on top of the main window, or center the dialog over the main window.
    * @param parent parent window, or None 
    */
  setTransientFor(parent: import('../Gtk').Window | null): void;
  /**
    * Shows the dialog on the display, allowing the user to interact with it. When the user accepts the state of the dialog the dialog will be automatically hidden and the Gtk.NativeDialog ::response signal will be emitted. 
    */
  show(): void;
  /**
    * If True, the dialog is modal (other windows are not usable while this one is up) 
    */
  modal: boolean;
  /**
    * The title of the file chooser dialog 
    */
  title: string;
  /**
    * The transient parent of the dialog 
    */
  transientFor: import('../Gtk').Window;
  /**
    * Whether the dialog is currently visible 
    */
  visible: boolean;
}

