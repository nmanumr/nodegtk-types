import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface Pixbuf extends GObject.Object, Gio.Icon, Gio.LoadableIcon { }

/**
  * This is the main structure in the gdk-pixbuf library.  It is
used to represent images.  It contains information about the
image’s pixel data, its color space, bits per sample, width and
height, and the rowstride (the number of bytes between the start of
one row and the start of the next). 
  */
export declare class Pixbuf {
  /**
    * Calculates the rowstride that an image created with those values would have. This is useful for front-ends and backends that want to sanity check image values without needing to create them.
    * @param colorspace Color space for image
    * @param hasAlpha Whether the image should have transparency information
    * @param bitsPerSample Number of bits per color sample
    * @param width Width of image in pixels, must be > 0
    * @param height Height of image in pixels, must be > 0
    * @returns the rowstride for the given values, or -1 in case of error. 
    */
  static calculateRowstride(colorspace: import('../GdkPixbuf').Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): number;
  /**
    * Parses an image file far enough to determine its format and size.
    * @param filename The name of the file to identify.
    * @returns A GdkPixbuf.PixbufFormat describing the image format of the file or None if the image format wasn’t recognized. The return value is owned by GdkPixbuf.Pixbuf and should not be freed.  width:Return location for the width of the image, or None height:Return location for the height of the image, or None 
    */
  static getFileInfo(filename: string): [import('../GdkPixbuf').PixbufFormat | null, number, number];
  /**
    * Asynchronously parses an image file far enough to determine its format and size.
    * @param filename The name of the file to identify
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the file info is available
    * @param userData the data to pass to the callback function 
    */
  static getFileInfoAsync(filename: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous pixbuf parsing operation started with GdkPixbuf.Pixbuf.get_file_info_async().
    * @param asyncResult a Gio.AsyncResult
    * @returns A GdkPixbuf.PixbufFormat describing the image format of the file or None if the image format wasn’t recognized. The return value is owned by GdkPixbuf.Pixbuf and should not be freed.  width:Return location for the width of the image, or None height:Return location for the height of the image, or None 
    */
  static getFileInfoFinish(asyncResult: import('../Gio').AsyncResult): [import('../GdkPixbuf').PixbufFormat, number, number];
  /**
    * Obtains the available information about the image formats supported by GdkPixbuf.Pixbuf.
    * @returns A list of GdkPixbuf.PixbufFormats describing the supported image formats. The list should be freed when it is no longer needed, but the structures themselves are owned by GdkPixbuf.Pixbuf and should not be freed. 
    */
  static getFormats(): import('../GdkPixbuf').PixbufFormat[];
  /**
    * Creates a new GdkPixbuf.Pixbuf structure and allocates a buffer for it.  The buffer has an optimal rowstride.  Note that the buffer is not cleared; you will have to fill it completely yourself.
    * @param colorspace Color space for image
    * @param hasAlpha Whether the image should have transparency information
    * @param bitsPerSample Number of bits per color sample
    * @param width Width of image in pixels, must be > 0
    * @param height Height of image in pixels, must be > 0
    * @returns A newly-created GdkPixbuf.Pixbuf with a reference count of 1, or None if not enough memory could be allocated for the image buffer. 
    */
  static new(colorspace: import('../GdkPixbuf').Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Creates a new GdkPixbuf.Pixbuf out of in-memory readonly image data. Currently only RGB images with 8 bits per sample are supported. This is the GLib.Bytes variant of GdkPixbuf.Pixbuf.new_from_data().
    * @param data Image data in 8-bit/sample packed format inside a GLib.Bytes
    * @param colorspace Colorspace for the image data
    * @param hasAlpha Whether the data has an opacity channel
    * @param bitsPerSample Number of bits per sample
    * @param width Width of the image in pixels, must be > 0
    * @param height Height of the image in pixels, must be > 0
    * @param rowstride Distance in bytes between row starts
    * @returns A newly-created GdkPixbuf.Pixbuf structure with a reference count of 1. 
    */
  static newFromBytes(data: import('../GLib').Bytes, colorspace: import('../GdkPixbuf').Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new GdkPixbuf.Pixbuf out of in-memory image data.  Currently only RGB images with 8 bits per sample are supported.
    * @param data Image data in 8-bit/sample packed format
    * @param colorspace Colorspace for the image data
    * @param hasAlpha Whether the data has an opacity channel
    * @param bitsPerSample Number of bits per sample
    * @param width Width of the image in pixels, must be > 0
    * @param height Height of the image in pixels, must be > 0
    * @param rowstride Distance in bytes between row starts
    * @param destroyFn Function used to free the data when the pixbuf’s reference count drops to zero, or None if the data should not be freed
    * @param destroyFnData Closure data to pass to the destroy notification function
    * @returns A newly-created GdkPixbuf.Pixbuf structure with a reference count of 1. 
    */
  static newFromData(data: Int8Array, colorspace: import('../GdkPixbuf').Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number, destroyFn: import('../GdkPixbuf').pixbufDestroyNotify | null, destroyFnData: Object | null): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by loading an image from a file.  The file format is detected automatically. If None is returned, then error will be set. Possible errors are in the #GDK_PIXBUF_ERROR and #G_FILE_ERROR domains.
    * @param filename Name of file to load, in the GLib file name encoding
    * @returns A newly-created pixbuf with a reference count of 1, or None if any of several error conditions occurred:  the file could not be opened, there was no loader for the file’s format, there was not enough memory to allocate the image buffer, or the image file contained invalid data. 
    */
  static newFromFile(filename: string): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by loading an image from a file.  The file format is detected automatically. If None is returned, then error will be set. Possible errors are in the #GDK_PIXBUF_ERROR and #G_FILE_ERROR domains. The image will be scaled to fit in the requested size, optionally preserving the image’s aspect ratio.
    * @param filename Name of file to load, in the GLib file name encoding
    * @param width The width the image should have or -1 to not constrain the width
    * @param height The height the image should have or -1 to not constrain the height
    * @param preserveAspectRatio True to preserve the image’s aspect ratio
    * @returns A newly-created pixbuf with a reference count of 1, or None if any of several error conditions occurred:  the file could not be opened, there was no loader for the file’s format, there was not enough memory to allocate the image buffer, or the image file contained invalid data. 
    */
  static newFromFileAtScale(filename: string, width: number, height: number, preserveAspectRatio: boolean): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by loading an image from a file. The file format is detected automatically. If None is returned, then error will be set. Possible errors are in the #GDK_PIXBUF_ERROR and #G_FILE_ERROR domains.
    * @param filename Name of file to load, in the GLib file name encoding
    * @param width The width the image should have or -1 to not constrain the width
    * @param height The height the image should have or -1 to not constrain the height
    * @returns A newly-created pixbuf with a reference count of 1, or None if any of several error conditions occurred:  the file could not be opened, there was no loader for the file’s format, there was not enough memory to allocate the image buffer, or the image file contained invalid data. 
    */
  static newFromFileAtSize(filename: string, width: number, height: number): import('../GdkPixbuf').Pixbuf;
  /**
    * Create a GdkPixbuf.Pixbuf from a flat representation that is suitable for storing as inline data in a program. This is useful if you want to ship a program with images, but don’t want to depend on any external files.
    * @param data Byte data containing a serialized #GdkPixdata structure
    * @param copyPixels Whether to copy the pixel data, or use direct pointers data for the resulting pixbuf
    * @returns A newly-created GdkPixbuf.Pixbuf structure with a reference, count of 1, or None if an error occurred. 
    */
  static newFromInline(data: Int8Array, copyPixels: boolean): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by loading an image from an resource.
    * @param resourcePath the path of the resource file
    * @returns A newly-created pixbuf, or None if any of several error conditions occurred: the file could not be opened, the image format is not supported, there was not enough memory to allocate the image buffer, the stream contained invalid data, or the operation was cancelled. 
    */
  static newFromResource(resourcePath: string): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by loading an image from an resource.
    * @param resourcePath the path of the resource file
    * @param width The width the image should have or -1 to not constrain the width
    * @param height The height the image should have or -1 to not constrain the height
    * @param preserveAspectRatio True to preserve the image’s aspect ratio
    * @returns A newly-created pixbuf, or None if any of several error conditions occurred: the file could not be opened, the image format is not supported, there was not enough memory to allocate the image buffer, the stream contained invalid data, or the operation was cancelled. 
    */
  static newFromResourceAtScale(resourcePath: string, width: number, height: number, preserveAspectRatio: boolean): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by loading an image from an input stream.
    * @param stream a Gio.InputStream to load the pixbuf from
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns A newly-created pixbuf, or None if any of several error conditions occurred: the file could not be opened, the image format is not supported, there was not enough memory to allocate the image buffer, the stream contained invalid data, or the operation was cancelled. 
    */
  static newFromStream(stream: import('../Gio').InputStream, cancellable: import('../Gio').Cancellable | null): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by asynchronously loading an image from an input stream.
    * @param stream a Gio.InputStream from which to load the pixbuf
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the pixbuf is loaded
    * @param userData the data to pass to the callback function 
    */
  static newFromStreamAsync(stream: import('../Gio').InputStream, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Creates a new pixbuf by loading an image from an input stream.
    * @param stream a Gio.InputStream to load the pixbuf from
    * @param width The width the image should have or -1 to not constrain the width
    * @param height The height the image should have or -1 to not constrain the height
    * @param preserveAspectRatio True to preserve the image’s aspect ratio
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns A newly-created pixbuf, or None if any of several error conditions occurred: the file could not be opened, the image format is not supported, there was not enough memory to allocate the image buffer, the stream contained invalid data, or the operation was cancelled. 
    */
  static newFromStreamAtScale(stream: import('../Gio').InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable: import('../Gio').Cancellable | null): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by asynchronously loading an image from an input stream.
    * @param stream a Gio.InputStream from which to load the pixbuf
    * @param width the width the image should have or -1 to not constrain the width
    * @param height the height the image should have or -1 to not constrain the height
    * @param preserveAspectRatio True to preserve the image’s aspect ratio
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the pixbuf is loaded
    * @param userData the data to pass to the callback function 
    */
  static newFromStreamAtScaleAsync(stream: import('../Gio').InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous pixbuf creation operation started with GdkPixbuf.Pixbuf.new_from_stream_async().
    * @param asyncResult a Gio.AsyncResult
    * @returns a GdkPixbuf.Pixbuf or None on error. Free the returned object with GObject.Object.unref(). 
    */
  static newFromStreamFinish(asyncResult: import('../Gio').AsyncResult): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a new pixbuf by parsing XPM data in memory.  This data is commonly the result of including an XPM file into a program’s C source.
    * @param data Pointer to inline XPM data.
    * @returns A newly-created pixbuf with a reference count of 1. 
    */
  static newFromXpmData(data: string): import('../GdkPixbuf').Pixbuf;
  /**
    * Finishes an asynchronous pixbuf save operation started with gdk_pixbuf_save_to_stream_async().
    * @param asyncResult a Gio.AsyncResult
    * @returns True if the pixbuf was saved successfully, False if an error was set. 
    */
  static saveToStreamFinish(asyncResult: import('../Gio').AsyncResult): boolean;
  /**
    * Takes an existing pixbuf and adds an alpha channel to it. If the existing pixbuf already had an alpha channel, the channel values are copied from the original; otherwise, the alpha channel is initialized to 255 (full opacity).
    * @param substituteColor Whether to set a color to zero opacity.  If this is False, then the (r, g, b) arguments will be ignored.
    * @param r Red value to substitute.
    * @param g Green value to substitute.
    * @param b Blue value to substitute.
    * @returns A newly-created pixbuf with a reference count of 1. 
    */
  addAlpha(substituteColor: boolean, r: number, g: number, b: number): import('../GdkPixbuf').Pixbuf;
  /**
    * Takes an existing pixbuf and checks for the presence of an associated “orientation” option, which may be provided by the jpeg loader (which reads the exif orientation tag) or the tiff loader (which reads the tiff orientation tag, and compensates it for the partial transforms performed by libtiff). If an orientation option/tag is present, the appropriate transform will be performed so that the pixbuf is oriented correctly.
    * @returns A newly-created pixbuf, None if not enough memory could be allocated for it, or a reference to the input pixbuf (with an increased reference count). 
    */
  applyEmbeddedOrientation(): import('../GdkPixbuf').Pixbuf;
  /**
    * Creates a transformation of the source image self by scaling by scale_x and scale_y then translating by offset_x and offset_y. This gives an image in the coordinates of the destination pixbuf. The rectangle (dest_x, dest_y, dest_width, dest_height) is then alpha blended onto the corresponding rectangle of the original destination image.
    * @param dest the GdkPixbuf.Pixbuf into which to render the results
    * @param destX the left coordinate for region to render
    * @param destY the top coordinate for region to render
    * @param destWidth the width of the region to render
    * @param destHeight the height of the region to render
    * @param offsetX the offset in the X direction (currently rounded to an integer)
    * @param offsetY the offset in the Y direction (currently rounded to an integer)
    * @param scaleX the scale factor in the X direction
    * @param scaleY the scale factor in the Y direction
    * @param interpType the interpolation type for the transformation.
    * @param overallAlpha overall alpha for source image (0..255) 
    */
  composite(dest: import('../GdkPixbuf').Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: import('../GdkPixbuf').InterpType, overallAlpha: number): void;
  /**
    * Creates a transformation of the source image self by scaling by scale_x and scale_y then translating by offset_x and offset_y, then alpha blends the rectangle (dest_x ,`dest_y`, dest_width, dest_height) of the resulting image with a checkboard of the colors color1 and color2 and renders it onto the destination image.
    * @param dest the GdkPixbuf.Pixbuf into which to render the results
    * @param destX the left coordinate for region to render
    * @param destY the top coordinate for region to render
    * @param destWidth the width of the region to render
    * @param destHeight the height of the region to render
    * @param offsetX the offset in the X direction (currently rounded to an integer)
    * @param offsetY the offset in the Y direction (currently rounded to an integer)
    * @param scaleX the scale factor in the X direction
    * @param scaleY the scale factor in the Y direction
    * @param interpType the interpolation type for the transformation.
    * @param overallAlpha overall alpha for source image (0..255)
    * @param checkX the X offset for the checkboard (origin of checkboard is at -check_x, -check_y)
    * @param checkY the Y offset for the checkboard
    * @param checkSize the size of checks in the checkboard (must be a power of two)
    * @param color1 the color of check at upper left
    * @param color2 the color of the other check 
    */
  compositeColor(dest: import('../GdkPixbuf').Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: import('../GdkPixbuf').InterpType, overallAlpha: number, checkX: number, checkY: number, checkSize: number, color1: number, color2: number): void;
  /**
    * Creates a new GdkPixbuf.Pixbuf by scaling self to dest_width x dest_height and alpha blending the result with a checkboard of colors color1 and color2.
    * @param destWidth the width of destination image
    * @param destHeight the height of destination image
    * @param interpType the interpolation type for the transformation.
    * @param overallAlpha overall alpha for source image (0..255)
    * @param checkSize the size of checks in the checkboard (must be a power of two)
    * @param color1 the color of check at upper left
    * @param color2 the color of the other check
    * @returns the new GdkPixbuf.Pixbuf, or None if not enough memory could be allocated for it. 
    */
  compositeColorSimple(destWidth: number, destHeight: number, interpType: import('../GdkPixbuf').InterpType, overallAlpha: number, checkSize: number, color1: number, color2: number): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Creates a new GdkPixbuf.Pixbuf with a copy of the information in the specified self. Note that this does not copy the options set on the original GdkPixbuf.Pixbuf, use GdkPixbuf.Pixbuf.copy_options() for this.
    * @returns A newly-created pixbuf with a reference count of 1, or None if not enough memory could be allocated. 
    */
  copy(): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Copies a rectangular area from self to dest_pixbuf.  Conversion of pixbuf formats is done automatically.
    * @param srcX Source X coordinate within self.
    * @param srcY Source Y coordinate within self.
    * @param width Width of the area to copy.
    * @param height Height of the area to copy.
    * @param destPixbuf Destination pixbuf.
    * @param destX X coordinate within dest_pixbuf.
    * @param destY Y coordinate within dest_pixbuf. 
    */
  copyArea(srcX: number, srcY: number, width: number, height: number, destPixbuf: import('../GdkPixbuf').Pixbuf, destX: number, destY: number): void;
  /**
    * Copy the key/value pair options attached to a GdkPixbuf.Pixbuf to another. This is useful to keep original metadata after having manipulated a file. However be careful to remove metadata which you’ve already applied, such as the “orientation” option after rotating the image.
    * @param destPixbuf the GdkPixbuf.Pixbuf to copy options to
    * @returns True on success. 
    */
  copyOptions(destPixbuf: import('../GdkPixbuf').Pixbuf): boolean;
  /**
    * Clears a pixbuf to the given RGBA value, converting the RGBA value into the pixbuf’s pixel format. The alpha will be ignored if the pixbuf doesn’t have an alpha channel.
    * @param pixel RGBA pixel to clear to (0xffffffff is opaque white, 0x00000000 transparent black) 
    */
  fill(pixel: number): void;
  /**
    * Flips a pixbuf horizontally or vertically and returns the result in a new pixbuf.
    * @param horizontal True to flip horizontally, False to flip vertically
    * @returns the new GdkPixbuf.Pixbuf, or None if not enough memory could be allocated for it. 
    */
  flip(horizontal: boolean): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Queries the number of bits per color sample in a pixbuf.
    * @returns Number of bits per color sample. 
    */
  getBitsPerSample(): number;
  /**
    * Returns the length of the pixel data, in bytes.
    * @returns The length of the pixel data. 
    */
  getByteLength(): number;
  /**
    * Queries the color space of a pixbuf.
    * @returns Color space. 
    */
  getColorspace(): import('../GdkPixbuf').Colorspace;
  /**
    * Queries whether a pixbuf has an alpha channel (opacity information).
    * @returns True if it has an alpha channel, False otherwise. 
    */
  getHasAlpha(): boolean;
  /**
    * Queries the height of a pixbuf.
    * @returns Height in pixels. 
    */
  getHeight(): number;
  /**
    * Queries the number of channels of a pixbuf.
    * @returns Number of channels. 
    */
  getNChannels(): number;
  /**
    * Looks up key in the list of options that may have been attached to the self when it was loaded, or that may have been attached by another function using GdkPixbuf.Pixbuf.set_option().
    * @param key a nul-terminated string.
    * @returns the value associated with key. This is a nul-terminated string that should not be freed or None if key was not found. 
    */
  getOption(key: string): string;
  /**
    * Returns a GLib.HashTable with a list of all the options that may have been attached to the self when it was loaded, or that may have been attached by another function using GdkPixbuf.Pixbuf.set_option().
    * @returns a GLib.HashTable of key/values 
    */
  getOptions(): { str };
  /**
    * Queries a pointer to the pixel data of a pixbuf.
    * @returns A pointer to the pixbuf’s pixel data.  Please see the section on image data for information about how the pixel data is stored in memory.This function will cause an implicit copy of the pixbuf data if the pixbuf was created from read-only data. 
    */
  getPixels(): Int8Array;
  /**
    * Queries the rowstride of a pixbuf, which is the number of bytes between the start of a row and the start of the next row.
    * @returns Distance between row starts. 
    */
  getRowstride(): number;
  /**
    * Queries the width of a pixbuf.
    * @returns Width in pixels. 
    */
  getWidth(): number;
  /**
    * Creates a new pixbuf which represents a sub-region of self. The new pixbuf shares its pixels with the original pixbuf, so writing to one affects both.  The new pixbuf holds a reference to self, so self will not be finalized until the new pixbuf is finalized.
    * @param srcX X coord in self
    * @param srcY Y coord in self
    * @param width width of region in self
    * @param height height of region in self
    * @returns a new pixbuf 
    */
  newSubpixbuf(srcX: number, srcY: number, width: number, height: number): import('../GdkPixbuf').Pixbuf;
  /**
    * Provides a GLib.Bytes buffer containing the raw pixel data; the data must not be modified.  This function allows skipping the implicit copy that must be made if GdkPixbuf.Pixbuf.get_pixels() is called on a read-only pixbuf.
    * @returns A new reference to a read-only copy of the pixel data.  Note that for mutable pixbufs, this function will incur a one-time copy of the pixel data for conversion into the returned GLib.Bytes. 
    */
  readPixelBytes(): import('../GLib').Bytes;
  /**
    * Provides a read-only pointer to the raw pixel data; must not be modified.  This function allows skipping the implicit copy that must be made if GdkPixbuf.Pixbuf.get_pixels() is called on a read-only pixbuf.
    * @returns a read-only pointer to the raw pixel data 
    */
  readPixels(): number;
  /**
    * Remove the key/value pair option attached to a GdkPixbuf.Pixbuf.
    * @param key a nul-terminated string representing the key to remove.
    * @returns True if an option was removed, False if not. 
    */
  removeOption(key: string): boolean;
  /**
    * Rotates a pixbuf by a multiple of 90 degrees, and returns the result in a new pixbuf.
    * @param angle the angle to rotate by
    * @returns the new GdkPixbuf.Pixbuf, or None if not enough memory could be allocated for it. 
    */
  rotateSimple(angle: import('../GdkPixbuf').PixbufRotation): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Modifies saturation and optionally pixelates self, placing the result in dest. self and dest may be the same pixbuf with no ill effects.  If saturation is 1.0 then saturation is not changed. If it’s less than 1.0, saturation is reduced (the image turns toward grayscale); if greater than 1.0, saturation is increased (the image gets more vivid colors). If pixelate is True, then pixels are faded in a checkerboard pattern to create a pixelated image. self and dest must have the same image format, size, and rowstride.
    * @param dest place to write modified version of self
    * @param saturation saturation factor
    * @param pixelate whether to pixelate 
    */
  saturateAndPixelate(dest: import('../GdkPixbuf').Pixbuf, saturation: number, pixelate: boolean): void;
  /**
    * Saves pixbuf to a new buffer in format type, which is currently “jpeg”, “tiff”, “png”, “ico” or “bmp”.  See gdk_pixbuf_save_to_buffer() for more details.
    * @param type name of file format.
    * @param optionKeys name of options to set, None-terminated
    * @param optionValues values for named options
    * @returns whether an error was set   buffer:location to receive a pointer to the new buffer. 
    */
  saveToBufferv(type: string, optionKeys: string, optionValues: string): [boolean, Int8Array];
  /**
    * Saves pixbuf to a callback in format type, which is currently “jpeg”, “png”, “tiff”, “ico” or “bmp”.  If error is set, False will be returned. See gdk_pixbuf_save_to_callback () for more details.
    * @param saveFunc a function that is called to save each block of data that the save routine generates.
    * @param userData user data to pass to the save function.
    * @param type name of file format.
    * @param optionKeys name of options to set, None-terminated
    * @param optionValues values for named options
    * @returns whether an error was set 
    */
  saveToCallbackv(saveFunc: import('../GdkPixbuf').pixbufSaveFunc, userData: Object | null, type: string, optionKeys: string, optionValues: string): boolean;
  /**
    * Saves self to an output stream.
    * @param stream a Gio.OutputStream to save the pixbuf to
    * @param type name of file format
    * @param optionKeys name of options to set, None-terminated
    * @param optionValues values for named options
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the pixbuf was saved successfully, False if an error was set. 
    */
  saveToStreamv(stream: import('../Gio').OutputStream, type: string, optionKeys: string, optionValues: string, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Saves self to an output stream asynchronously.
    * @param stream a Gio.OutputStream to which to save the pixbuf
    * @param type name of file format
    * @param optionKeys name of options to set, None-terminated
    * @param optionValues values for named options
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the pixbuf is saved
    * @param userData the data to pass to the callback function 
    */
  saveToStreamvAsync(stream: import('../Gio').OutputStream, type: string, optionKeys: string, optionValues: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Saves pixbuf to a file in type, which is currently “jpeg”, “png”, “tiff”, “ico” or “bmp”. If error is set, False will be returned. See gdk_pixbuf_save () for more details.
    * @param filename name of file to save.
    * @param type name of file format.
    * @param optionKeys name of options to set, None-terminated
    * @param optionValues values for named options
    * @returns whether an error was set 
    */
  savev(filename: string, type: string, optionKeys: string, optionValues: string): boolean;
  /**
    * Creates a transformation of the source image self by scaling by scale_x and scale_y then translating by offset_x and offset_y, then renders the rectangle (dest_x, dest_y, dest_width, dest_height) of the resulting image onto the destination image replacing the previous contents.
    * @param dest the GdkPixbuf.Pixbuf into which to render the results
    * @param destX the left coordinate for region to render
    * @param destY the top coordinate for region to render
    * @param destWidth the width of the region to render
    * @param destHeight the height of the region to render
    * @param offsetX the offset in the X direction (currently rounded to an integer)
    * @param offsetY the offset in the Y direction (currently rounded to an integer)
    * @param scaleX the scale factor in the X direction
    * @param scaleY the scale factor in the Y direction
    * @param interpType the interpolation type for the transformation. 
    */
  scale(dest: import('../GdkPixbuf').Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: import('../GdkPixbuf').InterpType): void;
  /**
    * Create a new GdkPixbuf.Pixbuf containing a copy of self scaled to dest_width x dest_height. Leaves self unaffected.  interp_type should be GdkPixbuf.InterpType.NEAREST if you want maximum speed (but when scaling down GdkPixbuf.InterpType.NEAREST is usually unusably ugly).  The default interp_type should be GdkPixbuf.InterpType.BILINEAR which offers reasonable quality and speed.
    * @param destWidth the width of destination image
    * @param destHeight the height of destination image
    * @param interpType the interpolation type for the transformation.
    * @returns the new GdkPixbuf.Pixbuf, or None if not enough memory could be allocated for it. 
    */
  scaleSimple(destWidth: number, destHeight: number, interpType: import('../GdkPixbuf').InterpType): import('../GdkPixbuf').Pixbuf | null;
  /**
    * Attaches a key/value pair as an option to a GdkPixbuf.Pixbuf. If key already exists in the list of options attached to self, the new value is ignored and False is returned.
    * @param key a nul-terminated string.
    * @param value a nul-terminated string.
    * @returns True on success. 
    */
  setOption(key: string, value: string): boolean;
  /**
    * The number of bits per sample 
    */
  bitsPerSample: number;
  /**
    * The colorspace in which the samples are interpreted 
    */
  colorspace: import('../GdkPixbuf').Colorspace;
  /**
    * Whether the pixbuf has an alpha channel 
    */
  hasAlpha: boolean;
  /**
    * The number of rows of the pixbuf 
    */
  height: number;
  /**
    * The number of samples per pixel 
    */
  nChannels: number;
  /**
    * Readonly pixel data 
    */
  pixelBytes: import('../GLib').Bytes;
  /**
    * A pointer to the pixel data of the pixbuf 
    */
  pixels: number;
  /**
    * The number of bytes between the start of a row and the start of the next row 
    */
  rowstride: number;
  /**
    * The number of columns of the pixbuf 
    */
  width: number;
}

