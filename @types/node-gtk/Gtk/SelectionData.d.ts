export declare class SelectionData {
  /**
    * Makes a copy of a Gtk.SelectionData-struct and its data.
    * @returns a pointer to a copy of self. 
    */
  copy(): import('../Gtk').SelectionData;
  /**
    * Frees a Gtk.SelectionData-struct returned from Gtk.SelectionData.copy(). 
    */
  free(): void;
  /**
    * Retrieves the raw data of the selection along with its length.
    * @returns the raw data of the selection 
    */
  getData(): Int8Array;
  /**
    * Retrieves the data type of the selection.
    * @returns the data type of the selection. 
    */
  getDataType(): import('../Gdk').Atom;
  /**
    * Retrieves the display of the selection.
    * @returns the display of the selection. 
    */
  getDisplay(): import('../Gdk').Display;
  /**
    * Retrieves the format of the selection.
    * @returns the format of the selection. 
    */
  getFormat(): number;
  /**
    * Retrieves the length of the raw data of the selection.
    * @returns the length of the data of the selection. 
    */
  getLength(): number;
  /**
    * Gets the contents of the selection data as a GdkPixbuf.Pixbuf.
    * @returns if the selection data contained a recognized image type and it could be converted to a GdkPixbuf.Pixbuf, a newly allocated pixbuf is returned, otherwise None.  If the result is non-None it must be freed with GObject.Object.unref(). 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Retrieves the selection Gdk.Atom of the selection data.
    * @returns the selection Gdk.Atom of the selection data. 
    */
  getSelection(): import('../Gdk').Atom;
  /**
    * Retrieves the target of the selection.
    * @returns the target of the selection. 
    */
  getTarget(): import('../Gdk').Atom;
  /**
    * Gets the contents of self as an array of targets. This can be used to interpret the results of getting the standard TARGETS target that is always supplied for any selection.
    * @returns True if self contains a valid array of targets, otherwise False.  targets:location to store an array of targets. The result stored here must be freed with GLib.free(). 
    */
  getTargets(): [boolean, import('../Gdk').Atom[]];
  /**
    * Gets the contents of the selection data as a UTF-8 string.
    * @returns if the selection data contained a recognized text type and it could be converted to UTF-8, a newly allocated string containing the converted text, otherwise None. If the result is non-None it must be freed with GLib.free(). 
    */
  getText(): string | null;
  /**
    * Gets the contents of the selection data as array of URIs.
    * @returns if the selection data contains a list of URIs, a newly allocated None-terminated string array containing the URIs, otherwise None. If the result is non-None it must be freed with GLib.strfreev(). 
    */
  getUris(): string[];
  /**
    * Stores new data into a Gtk.SelectionData object. Should only be called from a selection handler callback. Zero-terminates the stored data.
    * @param type the type of selection data
    * @param format format (number of bits in a unit)
    * @param data pointer to the data (will be copied) 
    */
  set(type: import('../Gdk').Atom, format: number, data: Int8Array): void;
  /**
    * Sets the contents of the selection from a GdkPixbuf.Pixbuf The pixbuf is converted to the form determined by self->target.
    * @param pixbuf a GdkPixbuf.Pixbuf
    * @returns True if the selection was successfully set, otherwise False. 
    */
  setPixbuf(pixbuf: import('../GdkPixbuf').Pixbuf): boolean;
  /**
    * Sets the contents of the selection from a UTF-8 encoded string. The string is converted to the form determined by self->target.
    * @param str a UTF-8 string
    * @param len the length of str, or -1 if str is nul-terminated.
    * @returns True if the selection was successfully set, otherwise False. 
    */
  setText(str: string, len: number): boolean;
  /**
    * Sets the contents of the selection from a list of URIs. The string is converted to the form determined by self->target.
    * @param uris a None-terminated array of strings holding URIs
    * @returns True if the selection was successfully set, otherwise False. 
    */
  setUris(uris: string): boolean;
  /**
    * Given a Gtk.SelectionData object holding a list of targets, determines if any of the targets in targets can be used to provide a GdkPixbuf.Pixbuf.
    * @param writable whether to accept only targets for which GTK+ knows how to convert a pixbuf into the format
    * @returns True if self holds a list of targets, and a suitable target for images is included, otherwise False. 
    */
  targetsIncludeImage(writable: boolean): boolean;
  /**
    * Given a Gtk.SelectionData object holding a list of targets, determines if any of the targets in targets can be used to provide rich text.
    * @param buffer a Gtk.TextBuffer
    * @returns True if self holds a list of targets, and a suitable target for rich text is included, otherwise False. 
    */
  targetsIncludeRichText(buffer: import('../Gtk').TextBuffer): boolean;
  /**
    * Given a Gtk.SelectionData object holding a list of targets, determines if any of the targets in targets can be used to provide text.
    * @returns True if self holds a list of targets, and a suitable target for text is included, otherwise False. 
    */
  targetsIncludeText(): boolean;
  /**
    * Given a Gtk.SelectionData object holding a list of targets, determines if any of the targets in targets can be used to provide a list or URIs.
    * @returns True if self holds a list of targets, and a suitable target for URI lists is included, otherwise False. 
    */
  targetsIncludeUri(): boolean;
}

