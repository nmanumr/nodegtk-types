import * as Gtk from '../Gtk';
export declare interface AppChooserButton extends Gtk.ComboBox, Gtk.AppChooser { }

/**
  * The Gtk.AppChooserButton is a widget that lets the user select
an application. It implements the Gtk.AppChooser interface. 
  */
export declare class AppChooserButton {
  /**
    * Creates a new Gtk.AppChooserButton for applications that can handle content of the given type.
    * @param contentType the content type to show applications for
    * @returns a newly created Gtk.AppChooserButton 
    */
  static new(contentType: string): import('../Gtk').Widget;
  /**
    * Appends a custom item to the list of applications that is shown in the popup; the item name must be unique per-widget. Clients can use the provided name as a detail for the Gtk.AppChooserButton ::custom-item-activated signal, to add a callback for the activation of a particular custom item in the list. See also Gtk.AppChooserButton.append_separator().
    * @param name the name of the custom item
    * @param label the label for the custom item
    * @param icon the icon for the custom item 
    */
  appendCustomItem(name: string, label: string, icon: import('../Gio').Icon): void;
  /**
    * Appends a separator to the list of applications that is shown in the popup. 
    */
  appendSeparator(): void;
  /**
    * Returns the text to display at the top of the dialog.
    * @returns the text to display at the top of the dialog, or None, in which case a default text is displayed 
    */
  getHeading(): string | null;
  /**
    * Returns the current value of the Gtk.AppChooserButton :show-default-item property.
    * @returns the value of Gtk.AppChooserButton :show-default-item 
    */
  getShowDefaultItem(): boolean;
  /**
    * Returns the current value of the Gtk.AppChooserButton :show-dialog-item property.
    * @returns the value of Gtk.AppChooserButton :show-dialog-item 
    */
  getShowDialogItem(): boolean;
  /**
    * Selects a custom item previously added with Gtk.AppChooserButton.append_custom_item().
    * @param name the name of the custom item 
    */
  setActiveCustomItem(name: string): void;
  /**
    * Sets the text to display at the top of the dialog. If the heading is not set, the dialog displays a default text.
    * @param heading a string containing Pango markup 
    */
  setHeading(heading: string): void;
  /**
    * Sets whether the dropdown menu of this button should show the default application for the given content type at top.
    * @param setting the new value for Gtk.AppChooserButton :show-default-item 
    */
  setShowDefaultItem(setting: boolean): void;
  /**
    * Sets whether the dropdown menu of this button should show an entry to trigger a Gtk.AppChooserDialog.
    * @param setting the new value for Gtk.AppChooserButton :show-dialog-item 
    */
  setShowDialogItem(setting: boolean): void;
  /**
    * The text to show at the top of the dialog 
    */
  heading: string;
  /**
    * Whether the combobox should show the default application on top 
    */
  showDefaultItem: boolean;
  /**
    * Whether the combobox should include an item that triggers a Gtk.AppChooserDialog 
    */
  showDialogItem: boolean;
}

