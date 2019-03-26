import * as Gtk from '../Gtk';
export declare interface FileChooserButton extends Gtk.Box, Gtk.FileChooser { }

/**
  * The Gtk.FileChooserButton is a widget that lets the user select a
file.  It implements the Gtk.FileChooser interface.  Visually, it is a
file name with a button to bring up a Gtk.FileChooserDialog.
The user can then use that dialog to change the file associated with
that button.  This widget does not support setting the
Gtk.FileChooser :select-multiple property to True. 
  */
export declare class FileChooserButton {
  /**
    * Creates a new file-selecting button widget.
    * @param title the title of the browse dialog.
    * @param action the open mode for the widget.
    * @returns a new button widget. 
    */
  static new(title: string, action: import('../Gtk').FileChooserAction): import('../Gtk').Widget;
  /**
    * Creates a Gtk.FileChooserButton widget which uses dialog as its file-picking window.
    * @param dialog the widget to use as dialog
    * @returns a new button widget. 
    */
  static newWithDialog(dialog: import('../Gtk').Dialog): import('../Gtk').Widget;
  /**
    * Returns whether the button grabs focus when it is clicked with the mouse. See Gtk.FileChooserButton.set_focus_on_click().
    * @returns True if the button grabs focus when it is clicked with the mouse. 
    */
  getFocusOnClick(): boolean;
  /**
    * Retrieves the title of the browse dialog used by self. The returned value should not be modified or freed.
    * @returns a pointer to the browse dialog’s title. 
    */
  getTitle(): string;
  /**
    * Retrieves the width in characters of the self widget’s entry and/or label.
    * @returns an integer width (in characters) that the button will use to size itself. 
    */
  getWidthChars(): number;
  /**
    * Sets whether the button will grab focus when it is clicked with the mouse. Making mouse clicks not grab focus is useful in places like toolbars where you don’t want the keyboard focus removed from the main area of the application.
    * @param focusOnClick whether the button grabs focus when clicked with the mouse 
    */
  setFocusOnClick(focusOnClick: boolean): void;
  /**
    * Modifies the title of the browse dialog used by self.
    * @param title the new browse dialog title. 
    */
  setTitle(title: string): void;
  /**
    * Sets the width (in characters) that self will use to n_chars.
    * @param nChars the new width, in characters. 
    */
  setWidthChars(nChars: number): void;
  /**
    * The file chooser dialog to use. 
    */
  dialog: import('../Gtk').FileChooser;
  /**
    * The title of the file chooser dialog. 
    */
  title: string;
  /**
    * The desired width of the button widget, in characters. 
    */
  widthChars: number;
}

