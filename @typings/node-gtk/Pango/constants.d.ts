/**
  * Whether the segment should be shifted to center around the baseline. Used in vertical writing directions mostly.  New in version 1.16.   
  */
export declare const ANALYSIS_FLAG_CENTERED_BASELINE = 1;
/**
  * This flag is used to mark runs that hold ellipsized text, in an ellipsized layout.  New in version 1.36.7.   
  */
export declare const ANALYSIS_FLAG_IS_ELLIPSIS = 2;
/**
  * This value can be used to set the start_index member of a Pango.Attribute such that the attribute covers from the beginning of the text.  New in version 1.24.   
  */
export declare const ATTR_INDEX_FROM_TEXT_BEGINNING = 0;
/**
  * A string constant defining the engine type for language engines. These engines derive from Pango.EngineLang.  Deprecated since version 1.38.   
  */
export declare const ENGINE_TYPE_LANG = 'PangoEngineLang';
/**
  * A string constant defining the engine type for shaping engines. These engines derive from Pango.EngineShape.  Deprecated since version 1.38.   
  */
export declare const ENGINE_TYPE_SHAPE = 'PangoEngineShape';
/**
  * The Pango.GLYPH_EMPTY macro represents a #PangoGlyph value that has a special meaning, which is a zero-width empty glyph.  This is useful for example in shaper modules, to use as the glyph for various zero-width Unicode characters (those passing Pango.is_zero_width()).  
  */
export declare const GLYPH_EMPTY = 268435455;
/**
  * The Pango.GLYPH_INVALID_INPUT macro represents a #PangoGlyph value that has a special meaning of invalid input.  Pango.Layout produces one such glyph per invalid input UTF-8 byte and such a glyph is rendered as a crossed box. Note that this value is defined such that it has the Pango.GLYPH_UNKNOWN_FLAG on.  New in version 1.20.   
  */
export declare const GLYPH_INVALID_INPUT = 4294967295;
/**
  * The Pango.GLYPH_UNKNOWN_FLAG macro is a flag value that can be added to a #gunichar value of a valid Unicode character, to produce a #PangoGlyph value, representing an unknown-character glyph for the respective #gunichar.  
  */
export declare const GLYPH_UNKNOWN_FLAG = 268435456;
/**
  * A string constant defining the render type for engines that are not rendering-system specific.  Deprecated since version 1.38.   
  */
export declare const RENDER_TYPE_NONE = 'PangoRenderNone';
/**
  * The Pango.SCALE macro represents the scale between dimensions used for Pango distances and device units. (The definition of device units is dependent on the output device; it will typically be pixels for a screen, and points for a printer.) Pango.SCALE is currently 1024, but this may be changed in the future. When setting font sizes, device units are always considered to be points (as in “12 point font”), rather than pixels.  
  */
export declare const SCALE = 1024;
export declare const UNKNOWN_GLYPH_HEIGHT = 14;
export declare const UNKNOWN_GLYPH_WIDTH = 10;
/**
  * A macro that should be defined by the user prior to including the pango.h header. The definition should be one of the predefined Pango version macros: %PANGO_VERSION_1_2, %PANGO_VERSION_1_4,… This macro defines the earliest version of Pango that the package is required to be able to compile against. If the compiler is configured to warn about the use of deprecated functions, then using functions that were deprecated in version Pango.VERSION_MIN_REQUIRED or earlier will cause warnings (but using functions deprecated in later releases will not).  New in version 1.42.   
  */
export declare const VERSION_MIN_REQUIRED = 2;
