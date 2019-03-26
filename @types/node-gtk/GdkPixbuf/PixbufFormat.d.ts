export declare class PixbufFormat {
  /**
    * Creates a copy of self
    * @returns the newly allocated copy of a GdkPixbuf.PixbufFormat. Use GdkPixbuf.PixbufFormat.free() to free the resources when done 
    */
  copy(): import('../GdkPixbuf').PixbufFormat;
  /**
    * Frees the resources allocated when copying a GdkPixbuf.PixbufFormat using GdkPixbuf.PixbufFormat.copy() 
    */
  free(): void;
  /**
    * Returns a description of the format.
    * @returns a description of the format. 
    */
  getDescription(): string;
  /**
    * Returns the filename extensions typically used for files in the given format.
    * @returns a None-terminated array of filename extensions which must be freed with GLib.strfreev() when it is no longer needed. 
    */
  getExtensions(): string[];
  /**
    * Returns information about the license of the image loader for the format. The returned string should be a shorthand for a wellknown license, e.g. “LGPL”, “GPL”, “QPL”, “GPL/QPL”, or “other” to indicate some other license.  This string should be freed with GLib.free() when it’s no longer needed.
    * @returns a string describing the license of self. 
    */
  getLicense(): string;
  /**
    * Returns the mime types supported by the format.
    * @returns a None-terminated array of mime types which must be freed with GLib.strfreev() when it is no longer needed. 
    */
  getMimeTypes(): string[];
  /**
    * Returns the name of the format.
    * @returns the name of the format. 
    */
  getName(): string;
  /**
    * Returns whether this image format is disabled. See GdkPixbuf.PixbufFormat.set_disabled().
    * @returns whether this image format is disabled. 
    */
  isDisabled(): boolean;
  /**
    * Returns True if the save option specified by option_key is supported when saving a pixbuf using the module implementing self. See gdk_pixbuf_save() for more information about option keys.
    * @param optionKey the name of an option
    * @returns True if the specified option is supported 
    */
  isSaveOptionSupported(optionKey: string): boolean;
  /**
    * Returns whether this image format is scalable. If a file is in a scalable format, it is preferable to load it at the desired size, rather than loading it at the default size and scaling the resulting pixbuf to the desired size.
    * @returns whether this image format is scalable. 
    */
  isScalable(): boolean;
  /**
    * Returns whether pixbufs can be saved in the given format.
    * @returns whether pixbufs can be saved in the given format. 
    */
  isWritable(): boolean;
  /**
    * Disables or enables an image format. If a format is disabled, gdk-pixbuf won’t use the image loader for this format to load images. Applications can use this to avoid using image loaders with an inappropriate license, see GdkPixbuf.PixbufFormat.get_license().
    * @param disabled True to disable the format self 
    */
  setDisabled(disabled: boolean): void;
}

