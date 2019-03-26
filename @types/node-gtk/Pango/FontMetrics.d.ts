/**
  * A Pango.FontMetrics structure holds the overall metric information
for a font (possibly restricted to a script). The fields of this
structure are private to implementations of a font backend. See
the documentation of the corresponding getters for documentation
of their meaning. 
  */
export declare class FontMetrics {
  /**
    * Creates a new Pango.FontMetrics structure. This is only for internal use by Pango backends and there is no public way to set the fields of the structure.
    * @returns a newly-created Pango.FontMetrics structure with a reference count of 1. 
    */
  static new(): import('../Pango').FontMetrics;
  /**
    * Gets the approximate character width for a font metrics structure. This is merely a representative value useful, for example, for determining the initial size for a window. Actual characters in text will be wider and narrower than this.
    * @returns the character width, in Pango units. 
    */
  getApproximateCharWidth(): number;
  /**
    * Gets the approximate digit width for a font metrics structure. This is merely a representative value useful, for example, for determining the initial size for a window. Actual digits in text can be wider or narrower than this, though this value is generally somewhat more accurate than the result of Pango.FontMetrics.get_approximate_char_width() for digits.
    * @returns the digit width, in Pango units. 
    */
  getApproximateDigitWidth(): number;
  /**
    * Gets the ascent from a font metrics structure. The ascent is the distance from the baseline to the logical top of a line of text. (The logical top may be above or below the top of the actual drawn ink. It is necessary to lay out the text to figure where the ink will be.)
    * @returns the ascent, in Pango units. 
    */
  getAscent(): number;
  /**
    * Gets the descent from a font metrics structure. The descent is the distance from the baseline to the logical bottom of a line of text. (The logical bottom may be above or below the bottom of the actual drawn ink. It is necessary to lay out the text to figure where the ink will be.)
    * @returns the descent, in Pango units. 
    */
  getDescent(): number;
  /**
    * Gets the suggested position to draw the strikethrough. The value returned is the distance above the baseline of the top of the strikethrough.
    * @returns the suggested strikethrough position, in Pango units. 
    */
  getStrikethroughPosition(): number;
  /**
    * Gets the suggested thickness to draw for the strikethrough.
    * @returns the suggested strikethrough thickness, in Pango units. 
    */
  getStrikethroughThickness(): number;
  /**
    * Gets the suggested position to draw the underline. The value returned is the distance above the baseline of the top of the underline. Since most fonts have underline positions beneath the baseline, this value is typically negative.
    * @returns the suggested underline position, in Pango units. 
    */
  getUnderlinePosition(): number;
  /**
    * Gets the suggested thickness to draw for the underline.
    * @returns the suggested underline thickness, in Pango units. 
    */
  getUnderlineThickness(): number;
  /**
    * Increase the reference count of a font metrics structure by one.
    * @returns self 
    */
  ref(): import('../Pango').FontMetrics | null;
  /**
    * Decrease the reference count of a font metrics structure by one. If the result is zero, frees the structure and any associated memory. 
    */
  unref(): void;
}

