import * as GObject from '../GObject';
export declare interface PixbufAnimation extends GObject.Object { }

/**
  * An opaque struct representing an animation. 
  */
export declare class PixbufAnimation {
  /**
    * Creates a new animation by loading it from a file. The file format is detected automatically. If the file’s format does not support multi-frame images, then an animation with a single frame will be created. Possible errors are in the #GDK_PIXBUF_ERROR and #G_FILE_ERROR domains.
    * @param filename Name of file to load, in the GLib file name encoding
    * @returns A newly-created animation with a reference count of 1, or None if any of several error conditions ocurred:  the file could not be opened, there was no loader for the file’s format, there was not enough memory to allocate the image buffer, or the image file contained invalid data. 
    */
  static newFromFile(filename: string): import('../GdkPixbuf').PixbufAnimation;
  /**
    * Creates a new pixbuf animation by loading an image from an resource.
    * @param resourcePath the path of the resource file
    * @returns A newly-created animation, or None if any of several error conditions occurred: the file could not be opened, the image format is not supported, there was not enough memory to allocate the image buffer, the stream contained invalid data, or the operation was cancelled. 
    */
  static newFromResource(resourcePath: string): import('../GdkPixbuf').PixbufAnimation;
  /**
    * Creates a new animation by loading it from an input stream.
    * @param stream a Gio.InputStream to load the pixbuf from
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns A newly-created pixbuf, or None if any of several error conditions occurred: the file could not be opened, the image format is not supported, there was not enough memory to allocate the image buffer, the stream contained invalid data, or the operation was cancelled. 
    */
  static newFromStream(stream: import('../Gio').InputStream, cancellable: import('../Gio').Cancellable | null): import('../GdkPixbuf').PixbufAnimation;
  /**
    * Creates a new animation by asynchronously loading an image from an input stream.
    * @param stream a Gio.InputStream from which to load the animation
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the pixbuf is loaded
    * @param userData the data to pass to the callback function 
    */
  static newFromStreamAsync(stream: import('../Gio').InputStream, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous pixbuf animation creation operation started with GdkPixbuf.PixbufAnimation.new_from_stream_async().
    * @param asyncResult a Gio.AsyncResult
    * @returns a GdkPixbuf.PixbufAnimation or None on error. Free the returned object with GObject.Object.unref(). 
    */
  static newFromStreamFinish(asyncResult: import('../Gio').AsyncResult): import('../GdkPixbuf').PixbufAnimation;
  /**
    * Queries the height of the bounding box of a pixbuf animation.
    * @returns Height of the bounding box of the animation. 
    */
  getHeight(): number;
  /**
    * Get an iterator for displaying an animation. The iterator provides the frames that should be displayed at a given time. It should be freed after use with GObject.Object.unref().
    * @param startTime time when the animation starts playing
    * @returns an iterator to move over the animation 
    */
  getIter(startTime: import('../GLib').TimeVal | null): import('../GdkPixbuf').PixbufAnimationIter;
  /**
    * If an animation is really just a plain image (has only one frame), this function returns that image. If the animation is an animation, this function returns a reasonable thing to display as a static unanimated image, which might be the first frame, or something more sophisticated. If an animation hasn’t loaded any frames yet, this function will return None.
    * @returns unanimated image representing the animation 
    */
  getStaticImage(): import('../GdkPixbuf').Pixbuf;
  /**
    * Queries the width of the bounding box of a pixbuf animation.
    * @returns Width of the bounding box of the animation. 
    */
  getWidth(): number;
  /**
    * If you load a file with GdkPixbuf.PixbufAnimation.new_from_file() and it turns out to be a plain, unanimated image, then this function will return True. Use GdkPixbuf.PixbufAnimation.get_static_image() to retrieve the image.
    * @returns True if the “animation” was really just an image 
    */
  isStaticImage(): boolean;
}

