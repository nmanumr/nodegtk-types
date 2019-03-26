import * as GObject from '../GObject';
export declare interface PixbufLoader extends GObject.Object { }

/**
  * The GdkPixbuf.PixbufLoader struct contains only private
fields. 
  */
export declare class PixbufLoader {
  /**
    * Creates a new pixbuf loader object.
    * @returns A newly-created pixbuf loader. 
    */
  static new(): import('../GdkPixbuf').PixbufLoader;
  /**
    * Creates a new pixbuf loader object that always attempts to parse image data as if it were an image of mime type mime_type, instead of identifying the type automatically. Useful if you want an error if the image isn’t the expected mime type, for loading image formats that can’t be reliably identified by looking at the data, or if the user manually forces a specific mime type.
    * @param mimeType the mime type to be loaded
    * @returns A newly-created pixbuf loader. 
    */
  static newWithMimeType(mimeType: string): import('../GdkPixbuf').PixbufLoader;
  /**
    * Creates a new pixbuf loader object that always attempts to parse image data as if it were an image of type image_type, instead of identifying the type automatically. Useful if you want an error if the image isn’t the expected type, for loading image formats that can’t be reliably identified by looking at the data, or if the user manually forces a specific type.
    * @param imageType name of the image format to be loaded with the image
    * @returns A newly-created pixbuf loader. 
    */
  static newWithType(imageType: string): import('../GdkPixbuf').PixbufLoader;
  /**
    * Informs a pixbuf loader that no further writes with GdkPixbuf.PixbufLoader.write() will occur, so that it can free its internal loading structures. Also, tries to parse any data that hasn’t yet been parsed; if the remaining data is partial or corrupt, an error will be returned.  If False is returned, error will be set to an error from the #GDK_PIXBUF_ERROR or #G_FILE_ERROR domains. If you’re just cancelling a load rather than expecting it to be finished, passing None for error to ignore it is reasonable.
    * @returns True if all image data written so far was successfully passed out via the update_area signal 
    */
  close(): boolean;
  /**
    * Queries the GdkPixbuf.PixbufAnimation that a pixbuf loader is currently creating. In general it only makes sense to call this function after the “area-prepared” signal has been emitted by the loader. If the loader doesn’t have enough bytes yet (hasn’t emitted the “area-prepared” signal) this function will return None.
    * @returns The GdkPixbuf.PixbufAnimation that the loader is loading, or None if not enough data has been read to determine the information. 
    */
  getAnimation(): import('../GdkPixbuf').PixbufAnimation;
  /**
    * Obtains the available information about the format of the currently loading image file.
    * @returns A GdkPixbuf.PixbufFormat or None. The return value is owned by GdkPixbuf.Pixbuf and should not be freed. 
    */
  getFormat(): import('../GdkPixbuf').PixbufFormat | null;
  /**
    * Queries the GdkPixbuf.Pixbuf that a pixbuf loader is currently creating. In general it only makes sense to call this function after the “area-prepared” signal has been emitted by the loader; this means that enough data has been read to know the size of the image that will be allocated.  If the loader has not received enough data via GdkPixbuf.PixbufLoader.write(), then this function returns None.  The returned pixbuf will be the same in all future calls to the loader, so simply calling GObject.Object.ref() should be sufficient to continue using it.  Additionally, if the loader is an animation, it will return the “static image” of the animation (see GdkPixbuf.PixbufAnimation.get_static_image()).
    * @returns The GdkPixbuf.Pixbuf that the loader is creating, or None if not enough data has been read to determine how to create the image buffer. 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf;
  /**
    * Causes the image to be scaled while it is loaded. The desired image size can be determined relative to the original size of the image by calling GdkPixbuf.PixbufLoader.set_size() from a signal handler for the ::size-prepared signal.
    * @param width The desired width of the image being loaded.
    * @param height The desired height of the image being loaded. 
    */
  setSize(width: number, height: number): void;
  /**
    * This will cause a pixbuf loader to parse the next count bytes of an image.  It will return True if the data was loaded successfully, and False if an error occurred.  In the latter case, the loader will be closed, and will not accept further writes. If False is returned, error will be set to an error from the #GDK_PIXBUF_ERROR or #G_FILE_ERROR domains.
    * @param buf Pointer to image data.
    * @returns True if the write was successful, or False if the loader cannot parse the buffer. 
    */
  write(buf: Int8Array): boolean;
  /**
    * This will cause a pixbuf loader to parse a buffer inside a GLib.Bytes for an image.  It will return True if the data was loaded successfully, and False if an error occurred.  In the latter case, the loader will be closed, and will not accept further writes. If False is returned, error will be set to an error from the #GDK_PIXBUF_ERROR or #G_FILE_ERROR domains.
    * @param buffer The image data as a GLib.Bytes
    * @returns True if the write was successful, or False if the loader cannot parse the buffer. 
    */
  writeBytes(buffer: import('../GLib').Bytes): boolean;
}

