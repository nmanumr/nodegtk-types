/**
  * Defines the position and size of a rectangle. It is identical to
cairo.RectangleInt. 
  */
export declare class Rectangle {
  /**
    * Checks if the two given rectangles are equal.
    * @param rect2 a Gdk.Rectangle
    * @returns True if the rectangles are equal. 
    */
  equal(rect2: import('../Gdk').Rectangle): boolean;
  /**
    * Calculates the intersection of two rectangles. It is allowed for dest to be the same as either self or src2. If the rectangles do not intersect, dest’s width and height is set to 0 and its x and y values are undefined. If you are only interested in whether the rectangles intersect, but not in the intersecting area itself, pass None for dest.
    * @param src2 a Gdk.Rectangle
    * @returns True if the rectangles intersect.  dest:return location for the intersection of self and src2, or None 
    */
  intersect(src2: import('../Gdk').Rectangle): [boolean, import('../Gdk').Rectangle];
  /**
    * Calculates the union of two rectangles. The union of rectangles self and src2 is the smallest rectangle which includes both self and src2 within it. It is allowed for dest to be the same as either self or src2.
    * @param src2 a Gdk.Rectangle
    * @returns return location for the union of self and src2 
    */
  union(src2: import('../Gdk').Rectangle): import('../Gdk').Rectangle;
}

