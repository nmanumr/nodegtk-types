import * as GObject from '../GObject';
export declare interface Font extends GObject.Object { }

/**
  * The Pango.Font structure is used to represent
a font in a rendering-system-independent matter.
To create an implementation of a Pango.Font,
the rendering-system specific code should allocate
a larger structure that contains a nested
Pango.Font, fill in the klass member of
the nested Pango.Font with a pointer to
a appropriate Pango.FontClass, then call
pango_font_init() on the structure. 
  */
export declare abstract class Font {
  /**
    * Frees an array of font descriptions.
    * @param descs a pointer to an array of Pango.FontDescription, may be None 
    */
  static descriptionsFree(descs: import('../Pango').FontDescription | null): void;
  /**
    * Returns a description of the font, with font size set in points. Use Pango.Font.describe_with_absolute_size() if you want the font size in device units.
    * @returns a newly-allocated Pango.FontDescription object. 
    */
  describe(): import('../Pango').FontDescription;
  /**
    * Returns a description of the font, with absolute font size set (in device units). Use Pango.Font.describe() if you want the font size in points.
    * @returns a newly-allocated Pango.FontDescription object. 
    */
  describeWithAbsoluteSize(): import('../Pango').FontDescription;
  /**
    * Finds the best matching shaper for a font for a particular language tag and character point.
    * @param language the language tag
    * @param ch a Unicode character.
    * @returns the best matching shaper. 
    */
  findShaper(language: import('../Pango').Language, ch: number): import('../Pango').EngineShape;
  /**
    * Gets the font map for which the font was created.
    * @returns the Pango.FontMap for the font, or None if self is None. 
    */
  getFontMap(): import('../Pango').FontMap | null;
  /**
    * Gets the logical and ink extents of a glyph within a font. The coordinate system for each rectangle has its origin at the base line and horizontal origin of the character with increasing coordinates extending to the right and down. The macros PANGO_ASCENT(), PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert from the extents rectangle to more traditional font metrics. The units of the rectangles are in 1/Pango.SCALE of a device unit.
    * @param glyph the glyph index
    * @returns ink_rect:rectangle used to store the extents of the glyph as drawn or None to indicate that the result is not needed. logical_rect:rectangle used to store the logical extents of the glyph or None to indicate that the result is not needed. 
    */
  getGlyphExtents(glyph: number): [import('../Pango').Rectangle, import('../Pango').Rectangle];
  /**
    * Gets overall metric information for a font. Since the metrics may be substantially different for different scripts, a language tag can be provided to indicate that the metrics should be retrieved that correspond to the script(s) used by that language.
    * @param language language tag used to determine which script to get the metrics for, or None to indicate to get the metrics for the entire font.
    * @returns a Pango.FontMetrics object. The caller must call Pango.FontMetrics.unref() when finished using the object. 
    */
  getMetrics(language: import('../Pango').Language | null): import('../Pango').FontMetrics;
}

