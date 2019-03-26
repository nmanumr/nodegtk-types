import * as GObject from '../GObject';
export declare interface IMContext extends GObject.Object { }

/**
  * Gtk.IMContext defines the interface for GTK+ input methods. An input method
is used by GTK+ text input widgets like Gtk.Entry to map from key events to
Unicode character strings. 
  */
export declare abstract class IMContext {
  /**
    * Asks the widget that the input context is attached to to delete characters around the cursor position by emitting the GtkIMContext::delete_surrounding signal. Note that offset and n_chars are in characters not in bytes which differs from the usage other places in Gtk.IMContext.
    * @param offset offset from cursor position in chars; a negative value means start before the cursor.
    * @param nChars number of characters to delete.
    * @returns True if the signal was handled. 
    */
  deleteSurrounding(offset: number, nChars: number): boolean;
  /**
    * Allow an input method to internally handle key press and release events. If this function returns True, then no further processing should be done for this key event.
    * @param event the key event
    * @returns True if the input method handled the key event. 
    */
  filterKeypress(event: import('../Gdk').EventKey): boolean;
  /**
    * Notify the input method that the widget to which this input context corresponds has gained focus. The input method may, for example, change the displayed feedback to reflect this change. 
    */
  focusIn(): void;
  /**
    * Notify the input method that the widget to which this input context corresponds has lost focus. The input method may, for example, change the displayed feedback or reset the contexts state to reflect this change. 
    */
  focusOut(): void;
  /**
    * Retrieve the current preedit string for the input context, and a list of attributes to apply to the string. This string should be displayed inserted at the insertion point.
    * @returns str:location to store the retrieved string. The string retrieved must be freed with GLib.free(). attrs:location to store the retrieved attribute list.  When you are done with this list, you must unreference it with Pango.AttrList.unref(). cursor_pos:location to store position of cursor (in characters) within the preedit string. 
    */
  getPreeditString(): [string, import('../Pango').AttrList, number];
  /**
    * Retrieves context around the insertion point. Input methods typically want context in order to constrain input text based on existing text; this is important for languages such as Thai where only some sequences of characters are allowed.
    * @returns None if no surrounding text was provided; otherwise a tuple containing:  text:text holding context around the insertion point. cursor_index:byte index of the insertion cursor within text 
    */
  getSurrounding(): [string, number | null];
  /**
    * Notify the input method that a change such as a change in cursor position has been made. This will typically cause the input method to clear the preedit state. 
    */
  reset(): void;
  /**
    * Set the client window for the input context; this is the Gdk.Window in which the input appears. This window is used in order to correctly position status windows, and may also be used for purposes internal to the input method.
    * @param window the client window. This may be None to indicate that the previous client window no longer exists. 
    */
  setClientWindow(window: import('../Gdk').Window | null): void;
  /**
    * Notify the input method that a change in cursor position has been made. The location is relative to the client window.
    * @param area new location 
    */
  setCursorLocation(area: import('../Gdk').Rectangle): void;
  /**
    * Sets surrounding context around the insertion point and preedit string. This function is expected to be called in response to the GtkIMContext::retrieve_surrounding signal, and will likely have no effect if called at other times.
    * @param text text surrounding the insertion point, as UTF-8. the preedit string should not be included within text.
    * @param len the length of text, or -1 if text is nul-terminated
    * @param cursorIndex the byte index of the insertion cursor within text. 
    */
  setSurrounding(text: string, len: number, cursorIndex: number): void;
  /**
    * Sets whether the IM context should use the preedit string to display feedback. If use_preedit is False (default is True), then the IM context may use some other method to display feedback, such as displaying it in a child of the root window.
    * @param usePreedit whether the IM context should use the preedit string. 
    */
  setUsePreedit(usePreedit: boolean): void;
  /**
    * Hints for the text field behaviour 
    */
  inputHints: import('../Gtk').InputHints;
  /**
    * Purpose of the text field 
    */
  inputPurpose: import('../Gtk').InputPurpose;
}

