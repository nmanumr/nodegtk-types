import * as Gtk from '../Gtk';
export declare interface MessageDialog extends Gtk.Dialog { }

/**
  * Gtk.MessageDialog presents a dialog with some message text. It’s simply a
convenience widget; you could construct the equivalent of Gtk.MessageDialog
from Gtk.Dialog without too much effort, but Gtk.MessageDialog saves typing. 
  */
export declare class MessageDialog {
  /**
    * Sets the secondary text of the message dialog to be message_format (with printf()-style), which is marked up with the Pango text markup language. 
    */
  formatSecondaryMarkup(): void;
  /**
    * Sets the secondary text of the message dialog to be message_format (with printf()-style). 
    */
  formatSecondaryText(): void;
  /**
    * Gets the dialog’s image.
    * @returns the dialog’s image 
    */
  getImage(): import('../Gtk').Widget;
  /**
    * Returns the message area of the dialog. This is the box where the dialog’s primary and secondary labels are packed. You can add your own extra content to that box and it will appear below those labels. See Gtk.Dialog.get_content_area() for the corresponding function in the parent Gtk.Dialog.
    * @returns A Gtk.Box corresponding to the “message area” in the self. 
    */
  getMessageArea(): import('../Gtk').Widget;
  /**
    * Sets the dialog’s image to image.
    * @param image the image 
    */
  setImage(image: import('../Gtk').Widget): void;
  /**
    * Sets the text of the message dialog to be str, which is marked up with the Pango text markup language.
    * @param str markup string (see Pango markup format) 
    */
  setMarkup(str: string): void;
  /**
    * The buttons shown in the message dialog 
    */
  buttons: import('../Gtk').ButtonsType;
  /**
    * The image deprecated 
    */
  image: import('../Gtk').Widget;
  /**
    * Gtk.Box that holds the dialog’s primary and secondary labels 
    */
  readonly messageArea: import('../Gtk').Widget;
  /**
    * The type of message 
    */
  messageType: import('../Gtk').MessageType;
  /**
    * The secondary text of the message dialog 
    */
  secondaryText: string;
  /**
    * The secondary text includes Pango markup. 
    */
  secondaryUseMarkup: boolean;
  /**
    * The primary text of the message dialog 
    */
  text: string;
  /**
    * The primary text of the title includes Pango markup. 
    */
  useMarkup: boolean;
}

