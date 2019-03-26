import * as Gtk from '../Gtk';
export declare interface ColorChooserDialog extends Gtk.Dialog, Gtk.ColorChooser { }

/**
  * The Gtk.ColorChooserDialog widget is a dialog for choosing
a color. It implements the Gtk.ColorChooser interface. 
  */
export declare class ColorChooserDialog {
  /**
    * Creates a new Gtk.ColorChooserDialog.
    * @param title Title of the dialog, or None
    * @param parent Transient parent of the dialog, or None
    * @returns a new Gtk.ColorChooserDialog 
    */
  static new(title: string | null, parent: import('../Gtk').Window | null): import('../Gtk').Widget;
  /**
    * Show editor 
    */
  showEditor: boolean;
}

