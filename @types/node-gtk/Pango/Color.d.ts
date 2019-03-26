/**
  * The Pango.Color structure is used to
represent a color in an uncalibrated RGB color-space. 
  */
export declare class Color {
  /**
    * Creates a copy of self, which should be freed with Pango.Color.free(). Primarily used by language bindings, not that useful otherwise (since colors can just be copied by assignment in C).
    * @returns the newly allocated Pango.Color, which should be freed with Pango.Color.free(), or None if self was None. 
    */
  copy(): import('../Pango').Color | null;
  /**
    * Frees a color allocated by Pango.Color.copy(). 
    */
  free(): void;
  /**
    * Fill in the fields of a color from a string specification. The string can either one of a large set of standard names. (Taken from the CSS <ulink url=”http://dev.w3.org/csswg/css-color/#named-colors”>specification</ulink>), or it can be a hexadecimal value in the form ‘&num;rgb’ ‘&num;rrggbb’ ‘&num;rrrgggbbb’ or ‘&num;rrrrggggbbbb’ where ‘r’, ‘g’ and ‘b’ are hex digits of the red, green, and blue components of the color, respectively. (White in the four forms is ‘&num;fff’ ‘&num;ffffff’ ‘&num;fffffffff’ and ‘&num;ffffffffffff’)
    * @param spec a string specifying the new color
    * @returns True if parsing of the specifier succeeded, otherwise false. 
    */
  parse(spec: string): boolean;
  /**
    * Returns a textual specification of self in the hexadecimal form <literal>&num;rrrrggggbbbb</literal>, where <literal>r</literal>, <literal>g</literal> and <literal>b</literal> are hex digits representing the red, green, and blue components respectively.
    * @returns a newly-allocated text string that must be freed with GLib.free(). 
    */
  toString(): string;
}

