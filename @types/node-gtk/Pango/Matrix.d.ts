/**
  * A structure specifying a transformation between user-space
coordinates and device coordinates. The transformation
is given by 
  */
export declare class Matrix {
  /**
    * Changes the transformation represented by self to be the transformation given by first applying transformation given by new_matrix then applying the original transformation.
    * @param newMatrix a Pango.Matrix 
    */
  concat(newMatrix: import('../Pango').Matrix): void;
  /**
    * Copies a Pango.Matrix.
    * @returns the newly allocated Pango.Matrix, which should be freed with Pango.Matrix.free(), or None if self was None. 
    */
  copy(): import('../Pango').Matrix | null;
  /**
    * Free a Pango.Matrix created with Pango.Matrix.copy(). 
    */
  free(): void;
  /**
    * Returns the scale factor of a matrix on the height of the font. That is, the scale factor in the direction perpendicular to the vector that the X coordinate is mapped to.  If the scale in the X coordinate is needed as well, use Pango.Matrix.get_font_scale_factors().
    * @returns the scale factor of self on the height of the font, or 1.0 if self is None. 
    */
  getFontScaleFactor(): number;
  /**
    * Calculates the scale factor of a matrix on the width and height of the font. That is, xscale is the scale factor in the direction of the X coordinate, and yscale is the scale factor in the direction perpendicular to the vector that the X coordinate is mapped to.
    * @returns xscale:output scale factor in the x direction, or None yscale:output scale factor perpendicular to the x direction, or None 
    */
  getFontScaleFactors(): [number, number];
  /**
    * Changes the transformation represented by self to be the transformation given by first rotating by degrees degrees counter-clockwise then applying the original transformation.
    * @param degrees degrees to rotate counter-clockwise 
    */
  rotate(degrees: number): void;
  /**
    * Changes the transformation represented by self to be the transformation given by first scaling by sx in the X direction and sy in the Y direction then applying the original transformation.
    * @param scaleX amount to scale by in X direction
    * @param scaleY amount to scale by in Y direction 
    */
  scale(scaleX: number, scaleY: number): void;
  /**
    * Transforms the distance vector (dx,`dy`) by self. This is similar to Pango.Matrix.transform_point() except that the translation components of the transformation are ignored. The calculation of the returned vector is as follows:
    * @param dx in/out X component of a distance vector
    * @param dy in/out Y component of a distance vector
    * @returns dx:in/out X component of a distance vector dy:in/out Y component of a distance vector 
    */
  transformDistance(dx: number, dy: number): [number, number];
  /**
    * First transforms the rect using self, then calculates the bounding box of the transformed rectangle.  The rectangle should be in device units (pixels).
    * @param rect in/out bounding box in device units, or None
    * @returns in/out bounding box in device units, or None 
    */
  transformPixelRectangle(rect: import('../Pango').Rectangle | null): import('../Pango').Rectangle | null;
  /**
    * Transforms the point (x, y) by self.
    * @param x in/out X position
    * @param y in/out Y position
    * @returns x:in/out X position y:in/out Y position 
    */
  transformPoint(x: number, y: number): [number, number];
  /**
    * First transforms rect using self, then calculates the bounding box of the transformed rectangle.  The rectangle should be in Pango units.
    * @param rect in/out bounding box in Pango units, or None
    * @returns in/out bounding box in Pango units, or None 
    */
  transformRectangle(rect: import('../Pango').Rectangle | null): import('../Pango').Rectangle | null;
  /**
    * Changes the transformation represented by self to be the transformation given by first translating by (tx, ty) then applying the original transformation.
    * @param tx amount to translate in the X direction
    * @param ty amount to translate in the Y direction 
    */
  translate(tx: number, ty: number): void;
}

