import * as Gtk from '../Gtk';
export declare interface InfoBar extends Gtk.Box { }

/**
  * Gtk.InfoBar is a widget that can be used to show messages to
the user without showing a dialog. It is often temporarily shown
at the top or bottom of a document. In contrast to Gtk.Dialog, which
has a action area at the bottom, Gtk.InfoBar has an action area
at the side. 
  */
export declare class InfoBar {
  /**
    * Creates a new Gtk.InfoBar object.
    * @returns a new Gtk.InfoBar object 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Add an activatable widget to the action area of a Gtk.InfoBar, connecting a signal handler that will emit the Gtk.InfoBar ::response signal on the message area when the widget is activated. The widget is appended to the end of the message areas action area.
    * @param child an activatable widget
    * @param responseId response ID for child 
    */
  addActionWidget(child: import('../Gtk').Widget, responseId: number): void;
  /**
    * Adds a button with the given text and sets things up so that clicking the button will emit the “response” signal with the given response_id. The button is appended to the end of the info bars’s action area. The button widget is returned, but usually you don’t need it.
    * @param buttonText text of button
    * @param responseId response ID for the button
    * @returns the Gtk.Button widget that was added 
    */
  addButton(buttonText: string, responseId: number): import('../Gtk').Button;
  /**
    * Returns the action area of self.
    * @returns the action area 
    */
  getActionArea(): import('../Gtk').Widget;
  /**
    * Returns the content area of self.
    * @returns the content area 
    */
  getContentArea(): import('../Gtk').Widget;
  /**
    * Returns the message type of the message area.
    * @returns the message type of the message area. 
    */
  getMessageType(): import('../Gtk').MessageType;
  /**
    * 
    * @returns the current value of the Gtk.InfoBar :revealed property. 
    */
  getRevealed(): boolean;
  /**
    * Returns whether the widget will display a standard close button.
    * @returns True if the widget displays standard close button 
    */
  getShowCloseButton(): boolean;
  /**
    * Emits the “response” signal with the given response_id.
    * @param responseId a response ID 
    */
  response(responseId: number): void;
  /**
    * Sets the last widget in the info bar’s action area with the given response_id as the default widget for the dialog. Pressing “Enter” normally activates the default widget.
    * @param responseId a response ID 
    */
  setDefaultResponse(responseId: number): void;
  /**
    * Sets the message type of the message area.
    * @param messageType a Gtk.MessageType 
    */
  setMessageType(messageType: import('../Gtk').MessageType): void;
  /**
    * Calls Gtk.Widget.set_sensitive (widget, setting) for each widget in the info bars’s action area with the given response_id. A convenient way to sensitize/desensitize dialog buttons.
    * @param responseId a response ID
    * @param setting True for sensitive 
    */
  setResponseSensitive(responseId: number, setting: boolean): void;
  /**
    * Sets the Gtk.InfoBar :revealed property to revealed. This will cause self to show up with a slide-in transition.
    * @param revealed The new value of the property 
    */
  setRevealed(revealed: boolean): void;
  /**
    * If true, a standard close button is shown. When clicked it emits the response Gtk.ResponseType.CLOSE.
    * @param setting True to include a close button 
    */
  setShowCloseButton(setting: boolean): void;
  /**
    * The type of message 
    */
  messageType: import('../Gtk').MessageType;
  /**
    * Controls whether the action bar shows its contents or not 
    */
  revealed: boolean;
  /**
    * Whether to include a standard close button 
    */
  showCloseButton: boolean;
}

