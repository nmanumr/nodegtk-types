import * as Gtk from '../Gtk';

export declare interface Statusbar extends Gtk.Box {
  remove(contextId: number, messageId: number): void;
  remove(widget: Gtk.Widget): void;
}

/**
  * A Gtk.Statusbar is usually placed along the bottom of an application’s
main Gtk.Window. It may provide a regular commentary of the application’s
status (as is usually the case in a web browser, for example), or may be
used to simply output a message when the status changes, (when an upload
is complete in an FTP client, for example). 
  */
export declare class Statusbar {
  /**
    * Creates a new Gtk.Statusbar ready for messages.
    * @returns the new Gtk.Statusbar 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Returns a new context identifier, given a description of the actual context. Note that the description is not shown in the UI.
    * @param contextDescription textual description of what context the new message is being used in
    * @returns an integer id 
    */
  getContextId(contextDescription: string): number;
  /**
    * Retrieves the box containing the label widget.
    * @returns a Gtk.Box 
    */
  getMessageArea(): import('../Gtk').Box;
  /**
    * Removes the first message in the Gtk.Statusbar’s stack with the given context id.
    * @param contextId a context identifier 
    */
  pop(contextId: number): void;
  /**
    * Pushes a new message onto a statusbar’s stack.
    * @param contextId the message’s context id, as returned by Gtk.Statusbar.get_context_id()
    * @param text the message to add to the statusbar
    * @returns a message id that can be used with Gtk.Statusbar.remove(). 
    */
  push(contextId: number, text: string): number;
  /**
    * Forces the removal of a message from a statusbar’s stack. The exact context_id and message_id must be specified.
    * @param contextId a context identifier
    * @param messageId a message identifier, as returned by Gtk.Statusbar.push() 
    */
  remove(contextId: number, messageId: number): void;
  /**
    * Forces the removal of all messages from a statusbar’s stack with the exact context_id.
    * @param contextId a context identifier 
    */
  removeAll(contextId: number): void;
  ;
}

