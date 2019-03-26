/**
  * A Gdk.RGBA is used to represent a (possibly translucent)
color, in a way that is compatible with cairo’s notion of color. 
  */
export declare class RGBA {
  /**
    * Returns a new RGBA instance given a Color instance. 
    */
  static fromColor(): void;
  /**
    * Makes a copy of a Gdk.RGBA.
    * @returns A newly allocated Gdk.RGBA, with the same contents as self 
    */
  copy(): import('../Gdk').RGBA;
  /**
    * Compares two RGBA colors.
    * @param p2 another Gdk.RGBA pointer
    * @returns True if the two colors compare equal 
    */
  equal(p2: import('../Gdk').RGBA): boolean;
  /**
    * Frees a Gdk.RGBA created with Gdk.RGBA.copy() 
    */
  free(): void;
  /**
    * A hash function suitable for using for a hash table that stores Gdk.RGBAs.
    * @returns The hash value for self 
    */
  hash(): number;
  /**
    * Parses a textual representation of a color, filling in the red, green, blue and alpha fields of the self Gdk.RGBA.
    * @param spec the string specifying the color
    * @returns True if the parsing succeeded 
    */
  parse(spec: string): boolean;
  /**
    * Converts this RGBA into a Color instance which excludes alpha. 
    */
  toColor(): void;
  /**
    * Returns a textual specification of self in the form rgb(r,g,b) or rgba(r g,b,a), where “r”, “g”, “b” and “a” represent the red, green, blue and alpha values respectively. “r”, “g”, and “b” are represented as integers in the range 0 to 255, and “a” is represented as a floating point value in the range 0 to 1.
    * @returns A newly allocated text string 
    */
  toString(): string;
}

