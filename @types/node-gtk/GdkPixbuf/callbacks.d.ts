/**
  * A function of this type is responsible for freeing the pixel array of a pixbuf.  The GdkPixbuf.Pixbuf.new_from_data() function lets you pass in a pre-allocated pixel array so that a pixbuf can be created from it; in this case you will need to pass in a function of GdkPixbuf.PixbufDestroyNotify so that the pixel data can be freed when the pixbuf is finalized.
  * @param pixels The pixel array of the pixbuf that is being finalized.
  * @param data User closure data. 
  */
export declare type pixbufDestroyNotify = (pixels: Int8Array, data: Object | null) => void;
/**
  * Specifies the type of the function passed to gdk_pixbuf_save_to_callback().  It is called once for each block of bytes that is “written” by gdk_pixbuf_save_to_callback().  If successful it should return True.  If an error occurs it should set error and return False, in which case gdk_pixbuf_save_to_callback() will fail with the same error.
  * @param buf bytes to be written.
  * @param data user data passed to gdk_pixbuf_save_to_callback().
  * @returns True if successful, False (with error set) if failed.   error:A location to return an error. 
  */
export declare type pixbufSaveFunc = (buf: Int8Array, data: Object | null) => [boolean, import('../GLib').Error];
