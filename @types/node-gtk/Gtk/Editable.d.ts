import * as GObject from '../GObject';
export declare interface Editable extends GObject.GInterface { }

/**
  * The Gtk.Editable interface is an interface which should be implemented by
text editing widgets, such as Gtk.Entry and Gtk.SpinButton. It contains functions
for generically manipulating an editable widget, a large number of action
signals used for key bindings, and several signals that an application can
connect to to modify the behavior of a widget. 
  */
export declare interface Editable {
  /**
    * Copies the contents of the currently selected content in the editable and puts it on the clipboard. 
    */
  copyClipboard(): void;
  /**
    * Removes the contents of the currently selected content in the editable and puts it on the clipboard. 
    */
  cutClipboard(): void;
  /**
    * Deletes the currently selected text of the editable. This call doesn’t do anything if there is no selected text. 
    */
  deleteSelection(): void;
  /**
    * Deletes a sequence of characters. The characters that are deleted are those characters at positions from start_pos up to, but not including end_pos. If end_pos is negative, then the characters deleted are those from start_pos to the end of the text.
    * @param startPos start position
    * @param endPos end position 
    */
  deleteText(startPos: number, endPos: number): void;
  /**
    * Retrieves a sequence of characters. The characters that are retrieved are those characters at positions from start_pos up to, but not including end_pos. If end_pos is negative, then the characters retrieved are those characters from start_pos to the end of the text.
    * @param startPos start of text
    * @param endPos end of text
    * @returns a pointer to the contents of the widget as a string. This string is allocated by the Gtk.Editable implementation and should be freed by the caller. 
    */
  getChars(startPos: number, endPos: number): string;
  /**
    * Retrieves whether self is editable. See Gtk.Editable.set_editable().
    * @returns True if self is editable. 
    */
  getEditable(): boolean;
  /**
    * Retrieves the current position of the cursor relative to the start of the content of the editable.
    * @returns the cursor position 
    */
  getPosition(): number;
  /**
    * Retrieves the selection bound of the editable. start_pos will be filled with the start of the selection and end_pos with end. If no text was selected an empty tuple will be returned.
    * @returns An empty tuple if no area is selected or a tuple containing:  start_pos:the starting position end_pos:the end position 
    */
  getSelectionBounds(): [number, number];
  /**
    * Inserts new_text into the contents of the widget, at position position.
    * @param newText the text to append
    * @param position location of the position text will be inserted at
    * @returns location of the position text will be inserted at 
    */
  insertText(newText: string, position: number): number;
  /**
    * Pastes the content of the clipboard to the current position of the cursor in the editable. 
    */
  pasteClipboard(): void;
  /**
    * Selects a region of text. The characters that are selected are those characters at positions from start_pos up to, but not including end_pos. If end_pos is negative, then the characters selected are those characters from start_pos to the end of the text.
    * @param startPos start of region
    * @param endPos end of region 
    */
  selectRegion(startPos: number, endPos: number): void;
  /**
    * Determines if the user can edit the text in the editable widget or not.
    * @param isEditable True if the user is allowed to edit the text in the widget 
    */
  setEditable(isEditable: boolean): void;
  /**
    * Sets the cursor position in the editable to the given value.
    * @param position the position of the cursor 
    */
  setPosition(position: number): void;
}

