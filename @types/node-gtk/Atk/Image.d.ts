import * as GObject from '../GObject';

/**
  * Atk.Image should be implemented by Atk.Object subtypes on behalf of
components which display image/pixmap information onscreen, and
which provide information (other than just widget borders, etc.)
via that image content.  For instance, icons, buttons with icons,
toolbar elements, and image viewing panes typically should
implement Atk.Image. 
  */
export declare interface Image extends GObject.GInterface {
  /**
    * Get a textual description of this image.
    * @returns a string representing the image description 
    */
  getImageDescription(): string;
  /**
    * 
    * @returns a string corresponding to the POSIX LC_MESSAGES locale used by the image description, or None if the image does not specify a locale. 
    */
  getImageLocale(): string | null;
  /**
    * Gets the position of the image in the form of a point specifying the images top-left corner.
    * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
    * @returns x:address of int to put x coordinate position; otherwise, -1 if value cannot be obtained. y:address of int to put y coordinate position; otherwise, -1 if value cannot be obtained. 
    */
  getImagePosition(coordType: import('../Atk').CoordType): [number, number];
  /**
    * Get the width and height in pixels for the specified image. The values of width and height are returned as -1 if the values cannot be obtained (for instance, if the object is not onscreen).
    * @returns width:filled with the image width, or -1 if the value cannot be obtained. height:filled with the image height, or -1 if the value cannot be obtained. 
    */
  getImageSize(): [number, number];
  /**
    * Sets the textual description for this image.
    * @param description a string description to set for self
    * @returns boolean True, or False if operation could not be completed. 
    */
  setImageDescription(description: string): boolean;
}

