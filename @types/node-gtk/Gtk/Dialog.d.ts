import * as Gtk from '../Gtk';
export declare interface Dialog extends Gtk.Window { }

/**
  * Dialog boxes are a convenient way to prompt the user for a small amount
of input, e.g. to display a message, ask a question, or anything else
that does not require extensive effort on the user’s part. 
  */
export declare class Dialog {
  /**
    * Creates a new dialog box.
    * @returns the new dialog as a Gtk.Widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Adds an activatable widget to the action area of a Gtk.Dialog, connecting a signal handler that will emit the Gtk.Dialog ::response signal on the dialog when the widget is activated. The widget is appended to the end of the dialog’s action area. If you want to add a non-activatable widget, simply pack it into the action_area field of the Gtk.Dialog struct.
    * @param child an activatable widget
    * @param responseId response ID for child 
    */
  addActionWidget(child: import('../Gtk').Widget, responseId: number): void;
  /**
    * Adds a button with the given text and sets things up so that clicking the button will emit the Gtk.Dialog ::response signal with the given response_id. The button is appended to the end of the dialog’s action area. The button widget is returned, but usually you don’t need it.
    * @param buttonText text of button
    * @param responseId response ID for the button
    * @returns the Gtk.Button widget that was added 
    */
  addButton(buttonText: string, responseId: number): import('../Gtk').Widget;
  /**
    * The add_buttons() method adds several buttons to the Gtk.Dialog using the button data passed as arguments to the method. This method is the same as calling the Gtk.Dialog.add_button() repeatedly. The button data pairs - button text (or stock ID) and a response ID integer are passed individually. For example: 
    */
  addButtons(): void;
  /**
    * Returns the action area of self.
    * @returns the action area 
    */
  getActionArea(): import('../Gtk').Widget;
  /**
    * Returns the content area of self.
    * @returns the content area Gtk.Box. 
    */
  getContentArea(): import('../Gtk').Box;
  /**
    * Returns the header bar of self. Note that the headerbar is only used by the dialog if the Gtk.Dialog :use-header-bar property is True.
    * @returns the header bar 
    */
  getHeaderBar(): import('../Gtk').Widget;
  /**
    * Gets the response id of a widget in the action area of a dialog.
    * @param widget a widget in the action area of self
    * @returns the response id of widget, or Gtk.ResponseType.NONE if widget doesn’t have a response id set. 
    */
  getResponseForWidget(widget: import('../Gtk').Widget): number;
  /**
    * Gets the widget button that uses the given response ID in the action area of a dialog.
    * @param responseId the response ID used by the self widget
    * @returns the widget button that uses the given response_id, or None. 
    */
  getWidgetForResponse(responseId: number): import('../Gtk').Widget | null;
  /**
    * Emits the Gtk.Dialog ::response signal with the given response ID. Used to indicate that the user has responded to the dialog in some way; typically either you or Gtk.Dialog.run() will be monitoring the ::response signal and take appropriate action.
    * @param responseId response ID 
    */
  response(responseId: number): void;
  /**
    * Blocks in a recursive main loop until the self either emits the Gtk.Dialog ::response signal, or is destroyed. If the dialog is destroyed during the call to Gtk.Dialog.run(), Gtk.Dialog.run() returns Gtk.ResponseType.NONE. Otherwise, it returns the response ID from the ::response signal emission.
    * @returns response ID 
    */
  run(): number;
  /**
    * Sets an alternative button order. If the Gtk.Settings :gtk-alternative-button-order setting is set to True, the dialog buttons are reordered according to the order of the response ids in new_order.
    * @param newOrder an array of response ids of self’s buttons 
    */
  setAlternativeButtonOrderFromArray(newOrder: number): void;
  /**
    * Sets the last widget in the dialog’s action area with the given response_id as the default widget for the dialog. Pressing “Enter” normally activates the default widget.
    * @param responseId a response ID 
    */
  setDefaultResponse(responseId: number): void;
  /**
    * Calls gtk_widget_set_sensitive (widget, @setting) for each widget in the dialog’s action area with the given response_id. A convenient way to sensitize/desensitize dialog buttons.
    * @param responseId a response ID
    * @param setting True for sensitive 
    */
  setResponseSensitive(responseId: number, setting: boolean): void;
  /**
    * Use Header Bar for actions. 
    */
  useHeaderBar: number;
}

