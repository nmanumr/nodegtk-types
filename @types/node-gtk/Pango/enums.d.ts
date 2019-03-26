/**
  * The bits in a Pango.FontMask correspond to fields in a Pango.FontDescription that have been set. 
  */
export declare enum FontMask {
  /** the font family is specified. */
  FAMILY = 1,
  /** OpenType font variations are specified (Since: 1.42) */
  VARIATIONS = 128,
  /** the font stretch is specified. */
  STRETCH = 16,
  /** the font style is specified. */
  STYLE = 2,
  /** the font size is specified. */
  SIZE = 32,
  /** the font variant is specified. */
  VARIANT = 4,
  /** the font gravity is specified (Since: 1.16.) */
  GRAVITY = 64,
  /** the font weight is specified. */
  WEIGHT = 8,
}
/**
  * A Pango.Alignment describes how to align the lines of a Pango.Layout within the available space. If the Pango.Layout is set to justify using Pango.Layout.set_justify(), this only has effect for partial lines. 
  */
export declare enum Alignment {
  /** Put all available space on the right */
  LEFT = 0,
  /** Center the line within the available space */
  CENTER = 1,
  /** Put all available space on the left */
  RIGHT = 2,
}
/**
  * The Pango.AttrType distinguishes between different types of attributes. Along with the predefined values, it is possible to allocate additional values for custom attributes using Pango.AttrType.register(). The predefined values are given below. The type of structure used to store the attribute is listed in parentheses after the description. 
  */
export declare enum AttrType {
  /** does not happen */
  INVALID = 0,
  /** language (Pango.AttrLanguage) */
  LANGUAGE = 1,
  /** background color (Pango.AttrColor) */
  BACKGROUND = 10,
  /** whether the text has an underline (Pango.AttrInt) */
  UNDERLINE = 11,
  /** whether the text is struck-through (Pango.AttrInt) */
  STRIKETHROUGH = 12,
  /** baseline displacement (Pango.AttrInt) */
  RISE = 13,
  /** shape (Pango.AttrShape) */
  SHAPE = 14,
  /** font size scale factor (Pango.AttrFloat) */
  SCALE = 15,
  /** whether fallback is enabled (Pango.AttrInt) */
  FALLBACK = 16,
  /** letter spacing (Pango.AttrInt) */
  LETTER_SPACING = 17,
  /** underline color (Pango.AttrColor) */
  UNDERLINE_COLOR = 18,
  /** strikethrough color (Pango.AttrColor) */
  STRIKETHROUGH_COLOR = 19,
  /** font family name list (Pango.AttrString) */
  FAMILY = 2,
  /** font size in pixels scaled by Pango.SCALE (Pango.AttrInt) */
  ABSOLUTE_SIZE = 20,
  /** base text gravity (Pango.AttrInt) */
  GRAVITY = 21,
  /** gravity hint (Pango.AttrInt) */
  GRAVITY_HINT = 22,
  /** OpenType font features (Pango.AttrString).
    *  New in version 1.38.  */
  FONT_FEATURES = 23,
  /** foreground alpha (Pango.AttrInt).
    *  New in version 1.38.  */
  FOREGROUND_ALPHA = 24,
  /** background alpha (Pango.AttrInt).
    *  New in version 1.38.  */
  BACKGROUND_ALPHA = 25,
  /** font slant style (Pango.AttrInt) */
  STYLE = 3,
  /** font weight (Pango.AttrInt) */
  WEIGHT = 4,
  /** font variant (normal or small caps) (Pango.AttrInt) */
  VARIANT = 5,
  /** font stretch (Pango.AttrInt) */
  STRETCH = 6,
  /** font size in points scaled by Pango.SCALE (Pango.AttrInt) */
  SIZE = 7,
  /** font description (Pango.AttrFontDesc) */
  FONT_DESC = 8,
  /** foreground color (Pango.AttrColor) */
  FOREGROUND = 9,
}
/**
  * The Pango.BidiType type represents the bidirectional character type of a Unicode character as specified by the
  *  New in version 1.22.  
  */
export declare enum BidiType {
  /** Left-to-Right */
  L = 0,
  /** Left-to-Right Embedding */
  LRE = 1,
  /** European Number Terminator */
  ET = 10,
  /** Arabic Number */
  AN = 11,
  /** Common Number Separator */
  CS = 12,
  /** Nonspacing Mark */
  NSM = 13,
  /** Boundary Neutral */
  BN = 14,
  /** Paragraph Separator */
  B = 15,
  /** Segment Separator */
  S = 16,
  /** Whitespace */
  WS = 17,
  /** Other Neutrals */
  ON = 18,
  /** Left-to-Right Override */
  LRO = 2,
  /** Right-to-Left */
  R = 3,
  /** Right-to-Left Arabic */
  AL = 4,
  /** Right-to-Left Embedding */
  RLE = 5,
  /** Right-to-Left Override */
  RLO = 6,
  /** Pop Directional Format */
  PDF = 7,
  /** European Number */
  EN = 8,
  /** European Number Separator */
  ES = 9,
}
/**
  * Used to indicate how well a font can represent a particular Unicode character point for a particular script. 
  */
export declare enum CoverageLevel {
  /** The character is not representable with the font. */
  NONE = 0,
  /** The character is represented in a way that may be comprehensible but is not the correct graphical form. For instance, a Hangul character represented as a a sequence of Jamos, or a Latin transliteration of a Cyrillic word. */
  FALLBACK = 1,
  /** The character is represented as basically the correct graphical form, but with a stylistic variant inappropriate for the current script. */
  APPROXIMATE = 2,
  /** The character is represented as the correct graphical form. */
  EXACT = 3,
}
/**
  * The Pango.Direction type represents a direction in the Unicode bidirectional algorithm; not every value in this enumeration makes sense for every usage of Pango.Direction; for example, the return value of Pango.unichar_direction() and Pango.find_base_dir() cannot be Pango.Direction.WEAK_LTR or Pango.Direction.WEAK_RTL, since every character is either neutral or has a strong direction; on the other hand Pango.Direction.NEUTRAL doesn’t make sense to pass to Pango.itemize_with_base_dir(). 
  */
export declare enum Direction {
  /** A strong left-to-right direction */
  LTR = 0,
  /** A strong right-to-left direction */
  RTL = 1,
  /** Deprecated value; treated the same as Pango.Direction.RTL. */
  TTB_LTR = 2,
  /** Deprecated value; treated the same as Pango.Direction.LTR */
  TTB_RTL = 3,
  /** A weak left-to-right direction */
  WEAK_LTR = 4,
  /** A weak right-to-left direction */
  WEAK_RTL = 5,
  /** No direction specified */
  NEUTRAL = 6,
}
/**
  * The Pango.EllipsizeMode type describes what sort of (if any) ellipsization should be applied to a line of text. In the ellipsization process characters are removed from the text in order to make it fit to a given width and replaced with an ellipsis. 
  */
export declare enum EllipsizeMode {
  /** No ellipsization */
  NONE = 0,
  /** Omit characters at the start of the text */
  START = 1,
  /** Omit characters in the middle of the text */
  MIDDLE = 2,
  /** Omit characters at the end of the text */
  END = 3,
}
/**
  * The Pango.Gravity type represents the orientation of glyphs in a segment of text.  This is useful when rendering vertical text layouts.  In those situations, the layout is rotated using a non-identity Pango.Matrix, and then glyph orientation is controlled using Pango.Gravity. Not every value in this enumeration makes sense for every usage of Pango.Gravity; for example, Pango.Gravity.AUTO only can be passed to Pango.Context.set_base_gravity() and can only be returned by Pango.Context.get_base_gravity().
  *  New in version 1.16.  
  */
export declare enum Gravity {
  /** Glyphs stand upright (default) */
  SOUTH = 0,
  /** Glyphs are rotated 90 degrees clockwise */
  EAST = 1,
  /** Glyphs are upside-down */
  NORTH = 2,
  /** Glyphs are rotated 90 degrees counter-clockwise */
  WEST = 3,
  /** Gravity is resolved from the context matrix */
  AUTO = 4,
}
/**
  * The Pango.GravityHint defines how horizontal scripts should behave in a vertical context.  That is, English excerpt in a vertical paragraph for example.
  *  New in version 1.16.  
  */
export declare enum GravityHint {
  /** scripts will take their natural gravity based on the base gravity and the script.  This is the default. */
  NATURAL = 0,
  /** always use the base gravity set, regardless of the script. */
  STRONG = 1,
  /** for scripts not in their natural direction (eg. Latin in East gravity), choose per-script gravity such that every script respects the line progression.  This means, Latin and Arabic will take opposite gravities and both flow top-to-bottom for example. */
  LINE = 2,
}
/**
  * Pango.RenderPart defines different items to render for such purposes as setting colors.
  *  New in version 1.8.  
  */
export declare enum RenderPart {
  /** the text itself */
  FOREGROUND = 0,
  /** the area behind the text */
  BACKGROUND = 1,
  /** underlines */
  UNDERLINE = 2,
  /** strikethrough lines */
  STRIKETHROUGH = 3,
}
/**
  * The Pango.Script enumeration identifies different writing systems. The values correspond to the names as defined in the Unicode standard. Note that new types may be added in the future. Applications should be ready to handle unknown values.  This enumeration is interchangeable with GLib.UnicodeScript.  See Unicode Standard Annex #24: Script names. 
  */
export declare enum Script {
  /** a value never returned from Pango.Script.for_unichar() */
  INVALID_CODE = -1,
  /** a character used by multiple different scripts */
  COMMON = 0,
  /** a mark glyph that takes its script from the base glyph to which it is attached */
  INHERITED = 1,
  /** Devanagari */
  DEVANAGARI = 10,
  /** Mro.
    *  New in version 1.40.  */
  MRO = 100,
  /** Nabataean.
    *  New in version 1.40.  */
  NABATAEAN = 101,
  /** Old North Arabian.
    *  New in version 1.40.  */
  OLD_NORTH_ARABIAN = 102,
  /** Old Permic.
    *  New in version 1.40.  */
  OLD_PERMIC = 103,
  /** Pahawh Hmong.
    *  New in version 1.40.  */
  PAHAWH_HMONG = 104,
  /** Palmyrene.
    *  New in version 1.40.  */
  PALMYRENE = 105,
  /** Pau Cin Hau.
    *  New in version 1.40.  */
  PAU_CIN_HAU = 106,
  /** Psalter Pahlavi.
    *  New in version 1.40.  */
  PSALTER_PAHLAVI = 107,
  /** Siddham.
    *  New in version 1.40.  */
  SIDDHAM = 108,
  /** Tirhuta.
    *  New in version 1.40.  */
  TIRHUTA = 109,
  /** Ethiopic */
  ETHIOPIC = 11,
  /** Warang Citi.
    *  New in version 1.40.  */
  WARANG_CITI = 110,
  /** Ahom.
    *  New in version 1.40.  */
  AHOM = 111,
  /** Anatolian Hieroglyphs.
    *  New in version 1.40.  */
  ANATOLIAN_HIEROGLYPHS = 112,
  /** Hatran.
    *  New in version 1.40.  */
  HATRAN = 113,
  /** Multani.
    *  New in version 1.40.  */
  MULTANI = 114,
  /** Old Hungarian.
    *  New in version 1.40.  */
  OLD_HUNGARIAN = 115,
  /** Signwriting.
    *  New in version 1.40.  */
  SIGNWRITING = 116,
  /** Georgian */
  GEORGIAN = 12,
  /** Gothic */
  GOTHIC = 13,
  /** Greek */
  GREEK = 14,
  /** Gujarati */
  GUJARATI = 15,
  /** Gurmukhi */
  GURMUKHI = 16,
  /** Han */
  HAN = 17,
  /** Hangul */
  HANGUL = 18,
  /** Hebrew */
  HEBREW = 19,
  /** Arabic */
  ARABIC = 2,
  /** Hiragana */
  HIRAGANA = 20,
  /** Kannada */
  KANNADA = 21,
  /** Katakana */
  KATAKANA = 22,
  /** Khmer */
  KHMER = 23,
  /** Lao */
  LAO = 24,
  /** Latin */
  LATIN = 25,
  /** Malayalam */
  MALAYALAM = 26,
  /** Mongolian */
  MONGOLIAN = 27,
  /** Myanmar */
  MYANMAR = 28,
  /** Ogham */
  OGHAM = 29,
  /** Armenian */
  ARMENIAN = 3,
  /** Old Italic */
  OLD_ITALIC = 30,
  /** Oriya */
  ORIYA = 31,
  /** Runic */
  RUNIC = 32,
  /** Sinhala */
  SINHALA = 33,
  /** Syriac */
  SYRIAC = 34,
  /** Tamil */
  TAMIL = 35,
  /** Telugu */
  TELUGU = 36,
  /** Thaana */
  THAANA = 37,
  /** Thai */
  THAI = 38,
  /** Tibetan */
  TIBETAN = 39,
  /** Bengali */
  BENGALI = 4,
  /** Canadian Aboriginal */
  CANADIAN_ABORIGINAL = 40,
  /** Yi */
  YI = 41,
  /** Tagalog */
  TAGALOG = 42,
  /** Hanunoo */
  HANUNOO = 43,
  /** Buhid */
  BUHID = 44,
  /** Tagbanwa */
  TAGBANWA = 45,
  /** Braille */
  BRAILLE = 46,
  /** Cypriot */
  CYPRIOT = 47,
  /** Limbu */
  LIMBU = 48,
  /** Osmanya */
  OSMANYA = 49,
  /** Bopomofo */
  BOPOMOFO = 5,
  /** Shavian */
  SHAVIAN = 50,
  /** Linear B */
  LINEAR_B = 51,
  /** Tai Le */
  TAI_LE = 52,
  /** Ugaritic */
  UGARITIC = 53,
  /** New Tai Lue.
    *  New in version 1.10.  */
  NEW_TAI_LUE = 54,
  /** Buginese.
    *  New in version 1.10.  */
  BUGINESE = 55,
  /** Glagolitic.
    *  New in version 1.10.  */
  GLAGOLITIC = 56,
  /** Tifinagh.
    *  New in version 1.10.  */
  TIFINAGH = 57,
  /** Syloti Nagri.
    *  New in version 1.10.  */
  SYLOTI_NAGRI = 58,
  /** Old Persian.
    *  New in version 1.10.  */
  OLD_PERSIAN = 59,
  /** Cherokee */
  CHEROKEE = 6,
  /** Kharoshthi.
    *  New in version 1.10.  */
  KHAROSHTHI = 60,
  /** an unassigned code point.
    *  New in version 1.14.  */
  UNKNOWN = 61,
  /** Balinese.
    *  New in version 1.14.  */
  BALINESE = 62,
  /** Cuneiform.
    *  New in version 1.14.  */
  CUNEIFORM = 63,
  /** Phoenician.
    *  New in version 1.14.  */
  PHOENICIAN = 64,
  /** Phags-pa.
    *  New in version 1.14.  */
  PHAGS_PA = 65,
  /** N’Ko.
    *  New in version 1.14.  */
  NKO = 66,
  /** Kayah Li.
    *  New in version 1.20.1.  */
  KAYAH_LI = 67,
  /** Lepcha.
    *  New in version 1.20.1.  */
  LEPCHA = 68,
  /** Rejang.
    *  New in version 1.20.1.  */
  REJANG = 69,
  /** Coptic */
  COPTIC = 7,
  /** Sundanese.
    *  New in version 1.20.1.  */
  SUNDANESE = 70,
  /** Saurashtra.
    *  New in version 1.20.1.  */
  SAURASHTRA = 71,
  /** Cham.
    *  New in version 1.20.1.  */
  CHAM = 72,
  /** Ol Chiki.
    *  New in version 1.20.1.  */
  OL_CHIKI = 73,
  /** Vai.
    *  New in version 1.20.1.  */
  VAI = 74,
  /** Carian.
    *  New in version 1.20.1.  */
  CARIAN = 75,
  /** Lycian.
    *  New in version 1.20.1.  */
  LYCIAN = 76,
  /** Lydian.
    *  New in version 1.20.1.  */
  LYDIAN = 77,
  /** Batak.
    *  New in version 1.32.  */
  BATAK = 78,
  /** Brahmi.
    *  New in version 1.32.  */
  BRAHMI = 79,
  /** Cyrillic */
  CYRILLIC = 8,
  /** Mandaic.
    *  New in version 1.32.  */
  MANDAIC = 80,
  /** Chakma.
    *  New in version 1.32.  */
  CHAKMA = 81,
  /** Meroitic Cursive.
    *  New in version 1.32.  */
  MEROITIC_CURSIVE = 82,
  /** Meroitic Hieroglyphs.
    *  New in version 1.32.  */
  MEROITIC_HIEROGLYPHS = 83,
  /** Miao.
    *  New in version 1.32.  */
  MIAO = 84,
  /** Sharada.
    *  New in version 1.32.  */
  SHARADA = 85,
  /** Sora Sompeng.
    *  New in version 1.32.  */
  SORA_SOMPENG = 86,
  /** Takri.
    *  New in version 1.32.  */
  TAKRI = 87,
  /** Bassa.
    *  New in version 1.40.  */
  BASSA_VAH = 88,
  /** Caucasian Albanian.
    *  New in version 1.40.  */
  CAUCASIAN_ALBANIAN = 89,
  /** Deseret */
  DESERET = 9,
  /** Duployan.
    *  New in version 1.40.  */
  DUPLOYAN = 90,
  /** Elbasan.
    *  New in version 1.40.  */
  ELBASAN = 91,
  /** Grantha.
    *  New in version 1.40.  */
  GRANTHA = 92,
  /** Kjohki.
    *  New in version 1.40.  */
  KHOJKI = 93,
  /** Khudawadi, Sindhi.
    *  New in version 1.40.  */
  KHUDAWADI = 94,
  /** Linear A.
    *  New in version 1.40.  */
  LINEAR_A = 95,
  /** Mahajani.
    *  New in version 1.40.  */
  MAHAJANI = 96,
  /** Manichaean.
    *  New in version 1.40.  */
  MANICHAEAN = 97,
  /** Mende Kikakui.
    *  New in version 1.40.  */
  MENDE_KIKAKUI = 98,
  /** Modi.
    *  New in version 1.40.  */
  MODI = 99,
}
/**
  * An enumeration specifying the width of the font relative to other designs within a family. 
  */
export declare enum Stretch {
  /** ultra condensed width */
  ULTRA_CONDENSED = 0,
  /** extra condensed width */
  EXTRA_CONDENSED = 1,
  /** condensed width */
  CONDENSED = 2,
  /** semi condensed width */
  SEMI_CONDENSED = 3,
  /** the normal width */
  NORMAL = 4,
  /** semi expanded width */
  SEMI_EXPANDED = 5,
  /** expanded width */
  EXPANDED = 6,
  /** extra expanded width */
  EXTRA_EXPANDED = 7,
  /** ultra expanded width */
  ULTRA_EXPANDED = 8,
}
/**
  * An enumeration specifying the various slant styles possible for a font. 
  */
export declare enum Style {
  /** the font is upright. */
  NORMAL = 0,
  /** the font is slanted, but in a roman style. */
  OBLIQUE = 1,
  /** the font is slanted in an italic style. */
  ITALIC = 2,
}
/**
  * A Pango.TabAlign specifies where a tab stop appears relative to the text. 
  */
export declare enum TabAlign {
  /** the tab stop appears to the left of the text. */
  LEFT = 0,
}
/**
  * The Pango.Underline enumeration is used to specify whether text should be underlined, and if so, the type of underlining. 
  */
export declare enum Underline {
  /** no underline should be drawn */
  NONE = 0,
  /** a single underline should be drawn */
  SINGLE = 1,
  /** a double underline should be drawn */
  DOUBLE = 2,
  /** a single underline should be drawn at a position beneath the ink extents of the text being underlined. This should be used only for underlining single characters, such as for keyboard accelerators. Pango.Underline.SINGLE should be used for extended portions of text. */
  LOW = 3,
  /** a wavy underline should be drawn below. This underline is typically used to indicate an error such as a possilble mispelling; in some cases a contrasting color may automatically be used. This type of underlining is available since Pango 1.4. */
  ERROR = 4,
}
/**
  * An enumeration specifying capitalization variant of the font. 
  */
export declare enum Variant {
  /** A normal font. */
  NORMAL = 0,
  /** A font with the lower case characters replaced by smaller variants of the capital characters. */
  SMALL_CAPS = 1,
}
/**
  * An enumeration specifying the weight (boldness) of a font. This is a numerical value ranging from 100 to 1000, but there are some predefined values: 
  */
export declare enum Weight {
  /** the thin weight (= 100;
    *  New in version 1.24).  */
  THIN = 100,
  /** the ultraheavy weight (= 1000;
    *  New in version 1.24).  */
  ULTRAHEAVY = 1000,
  /** the ultralight weight (= 200) */
  ULTRALIGHT = 200,
  /** the light weight (= 300) */
  LIGHT = 300,
  /** the semilight weight (= 350;
    *  New in version 1.36.7).  */
  SEMILIGHT = 350,
  /** the book weight (= 380;
    *  New in version 1.24).  */
  BOOK = 380,
  /** the default weight (= 400) */
  NORMAL = 400,
  /** the normal weight (= 500;
    *  New in version 1.24).  */
  MEDIUM = 500,
  /** the semibold weight (= 600) */
  SEMIBOLD = 600,
  /** the bold weight (= 700) */
  BOLD = 700,
  /** the ultrabold weight (= 800) */
  ULTRABOLD = 800,
  /** the heavy weight (= 900) */
  HEAVY = 900,
}
/**
  * A Pango.WrapMode describes how to wrap the lines of a Pango.Layout to the desired width. 
  */
export declare enum WrapMode {
  /** wrap lines at word boundaries. */
  WORD = 0,
  /** wrap lines at character boundaries. */
  CHAR = 1,
  /** wrap lines at word boundaries, but fall back to character boundaries if there is not enough space for a full word. */
  WORD_CHAR = 2,
}
