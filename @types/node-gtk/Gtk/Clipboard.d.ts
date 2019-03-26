import * as GObject from '../GObject';
export declare interface Clipboard extends GObject.Object { }

/**
  * The Gtk.Clipboard object represents a clipboard of data shared
between different processes or between different widgets in
the same process. Each clipboard is identified by a name encoded as a
Gdk.Atom. (Conversion to and from strings can be done with
Gdk.Atom.intern() and Gdk.Atom.name().) The default clipboard
corresponds to the “CLIPBOARD” atom; another commonly used clipboard
is the “PRIMARY” clipboard, which, in X, traditionally contains
the currently selected text. 
  */
export declare class Clipboard {
  /**
    * Returns the clipboard object for the given selection. See Gtk.Clipboard.get_for_display() for complete details.
    * @param selection a Gdk.Atom which identifies the clipboard to use
    * @returns the appropriate clipboard object. If no clipboard already exists, a new one will be created. Once a clipboard object has been created, it is persistent and, since it is owned by GTK+, must not be freed or unreffed. 
    */
  static get(selection: import('../Gdk').Atom): import('../Gtk').Clipboard;
  /**
    * Returns the default clipboard object for use with cut/copy/paste menu items and keyboard shortcuts.
    * @param display the Gdk.Display for which the clipboard is to be retrieved.
    * @returns the default clipboard object. 
    */
  static getDefault(display: import('../Gdk').Display): import('../Gtk').Clipboard;
  /**
    * Returns the clipboard object for the given selection. Cut/copy/paste menu items and keyboard shortcuts should use the default clipboard, returned by passing %GDK_SELECTION_CLIPBOARD for selection. (%GDK_NONE is supported as a synonym for GDK_SELECTION_CLIPBOARD for backwards compatibility reasons.) The currently-selected object or text should be provided on the clipboard identified by #GDK_SELECTION_PRIMARY. Cut/copy/paste menu items conceptually copy the contents of the #GDK_SELECTION_PRIMARY clipboard to the default clipboard, i.e. they copy the selection to what the user sees as the clipboard.
    * @param display the Gdk.Display for which the clipboard is to be retrieved or created.
    * @param selection a Gdk.Atom which identifies the clipboard to use.
    * @returns the appropriate clipboard object. If no clipboard already exists, a new one will be created. Once a clipboard object has been created, it is persistent and, since it is owned by GTK+, must not be freed or unrefd. 
    */
  static getForDisplay(display: import('../Gdk').Display, selection: import('../Gdk').Atom): import('../Gtk').Clipboard;
  /**
    * Clears the contents of the clipboard. Generally this should only be called between the time you call gtk_clipboard_set_with_owner() or gtk_clipboard_set_with_data(), and when the clear_func you supplied is called. Otherwise, the clipboard may be owned by someone else. 
    */
  clear(): void;
  /**
    * Gets the Gdk.Display associated with self
    * @returns the Gdk.Display associated with self 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * If the clipboard contents callbacks were set with gtk_clipboard_set_with_owner(), and the gtk_clipboard_set_with_data() or Gtk.Clipboard.clear() has not subsequently called, returns the owner set by gtk_clipboard_set_with_owner().
    * @returns the owner of the clipboard, if any; otherwise None. 
    */
  getOwner(): import('../GObject').Object | null;
  /**
    * Requests the contents of clipboard as the given target. When the results of the result are later received the supplied callback will be called.
    * @param target an atom representing the form into which the clipboard owner should convert the selection.
    * @param callback A function to call when the results are received (or the retrieval fails). If the retrieval fails the length field of selection_data will be negative.
    * @param userData user data to pass to callback 
    */
  requestContents(target: import('../Gdk').Atom, callback: import('../Gtk').clipboardReceivedFunc, userData: Object | null): void;
  /**
    * Requests the contents of the clipboard as image. When the image is later received, it will be converted to a GdkPixbuf.Pixbuf, and callback will be called.
    * @param callback a function to call when the image is received, or the retrieval fails. (It will always be called one way or the other.)
    * @param userData user data to pass to callback. 
    */
  requestImage(callback: import('../Gtk').clipboardImageReceivedFunc, userData: Object | null): void;
  /**
    * Requests the contents of the clipboard as rich text. When the rich text is later received, callback will be called.
    * @param buffer a Gtk.TextBuffer
    * @param callback a function to call when the text is received, or the retrieval fails. (It will always be called one way or the other.)
    * @param userData user data to pass to callback. 
    */
  requestRichText(buffer: import('../Gtk').TextBuffer, callback: import('../Gtk').clipboardRichTextReceivedFunc, userData: Object | null): void;
  /**
    * Requests the contents of the clipboard as list of supported targets. When the list is later received, callback will be called.
    * @param callback a function to call when the targets are received, or the retrieval fails. (It will always be called one way or the other.)
    * @param userData user data to pass to callback. 
    */
  requestTargets(callback: import('../Gtk').clipboardTargetsReceivedFunc, userData: Object | null): void;
  /**
    * Requests the contents of the clipboard as text. When the text is later received, it will be converted to UTF-8 if necessary, and callback will be called.
    * @param callback a function to call when the text is received, or the retrieval fails. (It will always be called one way or the other.)
    * @param userData user data to pass to callback. 
    */
  requestText(callback: import('../Gtk').clipboardTextReceivedFunc, userData: Object | null): void;
  /**
    * Requests the contents of the clipboard as URIs. When the URIs are later received callback will be called.
    * @param callback a function to call when the URIs are received, or the retrieval fails. (It will always be called one way or the other.)
    * @param userData user data to pass to callback. 
    */
  requestUris(callback: import('../Gtk').clipboardUriReceivedFunc, userData: Object | null): void;
  /**
    * Hints that the clipboard data should be stored somewhere when the application exits or when Gtk.Clipboard.store () is called.
    * @param targets array containing information about which forms should be stored or None to indicate that all forms should be stored. 
    */
  setCanStore(targets: import('../Gtk').TargetEntry | null): void;
  /**
    * Sets the contents of the clipboard to the given GdkPixbuf.Pixbuf. GTK+ will take responsibility for responding for requests for the image, and for converting the image into the requested format.
    * @param pixbuf a GdkPixbuf.Pixbuf 
    */
  setImage(pixbuf: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Sets the contents of the clipboard to the given UTF-8 string. GTK+ will make a copy of the text and take responsibility for responding for requests for the text, and for converting the text into the requested format.
    * @param text a UTF-8 string.
    * @param len length of text, in bytes, or -1, in which case the length will be determined with strlen(). 
    */
  setText(text: string, len: number): void;
  /**
    * Stores the current clipboard data somewhere so that it will stay around after the application has quit. 
    */
  store(): void;
  /**
    * Requests the contents of the clipboard using the given target. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @param target an atom representing the form into which the clipboard owner should convert the selection.
    * @returns a newly-allocated Gtk.SelectionData object or None if retrieving the given target failed. If non-None, this value must be freed with Gtk.SelectionData.free() when you are finished with it. 
    */
  waitForContents(target: import('../Gdk').Atom): import('../Gtk').SelectionData | null;
  /**
    * Requests the contents of the clipboard as image and converts the result to a GdkPixbuf.Pixbuf. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns a newly-allocated GdkPixbuf.Pixbuf object which must be disposed with GObject.Object.unref(), or None if retrieving the selection data failed. (This could happen for various reasons, in particular if the clipboard was empty or if the contents of the clipboard could not be converted into an image.) 
    */
  waitForImage(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Requests the contents of the clipboard as rich text.  This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @param buffer a Gtk.TextBuffer
    * @returns a newly-allocated binary block of data which must be freed with GLib.free(), or None if retrieving the selection data failed. (This could happen for various reasons, in particular if the clipboard was empty or if the contents of the clipboard could not be converted into text form.)  format:return location for the format of the returned data 
    */
  waitForRichText(buffer: import('../Gtk').TextBuffer): [Int8Array | null, import('../Gdk').Atom];
  /**
    * Returns a list of targets that are present on the clipboard, or None if there aren’t any targets available. The returned list must be freed with GLib.free(). This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns True if any targets are present on the clipboard, otherwise False.  targets:location to store an array of targets. The result stored here must be freed with GLib.free(). 
    */
  waitForTargets(): [boolean, import('../Gdk').Atom[]];
  /**
    * Requests the contents of the clipboard as text and converts the result to UTF-8 if necessary. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns a newly-allocated UTF-8 string which must be freed with GLib.free(), or None if retrieving the selection data failed. (This could happen for various reasons, in particular if the clipboard was empty or if the contents of the clipboard could not be converted into text form.) 
    */
  waitForText(): string | null;
  /**
    * Requests the contents of the clipboard as URIs. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns a newly-allocated None-terminated array of strings which must be freed with GLib.strfreev(), or None if retrieving the selection data failed. (This could happen for various reasons, in particular if the clipboard was empty or if the contents of the clipboard could not be converted into URI form.) 
    */
  waitForUris(): string[] | null;
  /**
    * Test to see if there is an image available to be pasted This is done by requesting the TARGETS atom and checking if it contains any of the supported image targets. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns True is there is an image available, False otherwise. 
    */
  waitIsImageAvailable(): boolean;
  /**
    * Test to see if there is rich text available to be pasted This is done by requesting the TARGETS atom and checking if it contains any of the supported rich text targets. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @param buffer a Gtk.TextBuffer
    * @returns True is there is rich text available, False otherwise. 
    */
  waitIsRichTextAvailable(buffer: import('../Gtk').TextBuffer): boolean;
  /**
    * Checks if a clipboard supports pasting data of a given type. This function can be used to determine if a “Paste” menu item should be insensitive or not.
    * @param target A Gdk.Atom indicating which target to look for.
    * @returns True if the target is available, False otherwise. 
    */
  waitIsTargetAvailable(target: import('../Gdk').Atom): boolean;
  /**
    * Test to see if there is text available to be pasted This is done by requesting the TARGETS atom and checking if it contains any of the supported text targets. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns True is there is text available, False otherwise. 
    */
  waitIsTextAvailable(): boolean;
  /**
    * Test to see if there is a list of URIs available to be pasted This is done by requesting the TARGETS atom and checking if it contains the URI targets. This function waits for the data to be received using the main loop, so events, timeouts, etc, may be dispatched during the wait.
    * @returns True is there is an URI list available, False otherwise. 
    */
  waitIsUrisAvailable(): boolean;
}

