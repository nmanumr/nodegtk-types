/**
  * A Gdk.Color is used to describe a color,
similar to the XColor struct used in the X11 drawing API. 
  */
export declare class Color {
/**
  * Return a new Color object from red/green/blue values from 0.0 to 1.0. 
  */
static fromFloats(): void;
/**
  * Parses a textual specification of a color and fill in the red, green, and blue fields of a Gdk.Color.
  * @param spec the string specifying the color
  * @returns True if the parsing succeeded  color:the Gdk.Color to fill in 
  */
static parse(spec: string): [boolean, import('../Gdk').Color];
/**
  * Makes a copy of a Gdk.Color.
  * @returns a copy of self 
  */
copy(): import('../Gdk').Color;
/**
  * Compares two colors.
  * @param colorb another Gdk.Color
  * @returns True if the two colors compare equal 
  */
equal(colorb: import('../Gdk').Color): boolean;
/**
  * Frees a Gdk.Color created with Gdk.Color.copy(). 
  */
free(): void;
/**
  * A hash function suitable for using for a hash table that stores Gdk.Colors.
  * @returns The hash function applied to self 
  */
hash(): number;
/**
  * Return (red_float, green_float, blue_float) triple. 
  */
toFloats(): void;
/**
  * Returns a textual specification of self in the hexadecimal form “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits representing the red, green and blue components respectively.
  * @returns a newly-allocated text string 
  */
toString(): string;
}

