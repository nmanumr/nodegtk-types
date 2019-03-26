/**
  * Fetches the attribute type name passed in when registering the type using Pango.AttrType.register().
  * @param type an attribute type ID to fetch the name for
  * @returns the type ID name (which may be None), or None if type is a built-in Pango attribute type or invalid. 
  */
export declare function attrTypeGetName(type: import('../Pango').AttrType): string | null;
/**
  * Allocate a new attribute type ID.  The attribute type name can be accessed later by using Pango.AttrType.get_name().
  * @param name an identifier for the type
  * @returns the new type ID. 
  */
export declare function attrTypeRegister(name: string): import('../Pango').AttrType;
/**
  * Determines the normative bidirectional character type of a character, as specified in the Unicode Character Database.
  * @param ch a Unicode character
  * @returns the bidirectional character type, as used in the Unicode bidirectional algorithm. 
  */
export declare function bidiTypeForUnichar(ch: string): import('../Pango').BidiType;
/**
  * Determines possible line, word, and character breaks for a string of Unicode text with a single analysis.  For most purposes you may want to use Pango.get_log_attrs().
  * @param text the text to process
  * @param length length of text in bytes (may be -1 if text is nul-terminated)
  * @param analysis Pango.Analysis structure from Pango.itemize()
  * @param attrs an array to store character information in 
  */
// export declare function break(text: string, length: number, analysis: import('../Pango').Analysis, attrs: import('../Pango').LogAttr): void;
/**
  * Do not use.  Does not do anything.
  * @param key Key to look up, in the form “SECTION/KEY”.
  * @returns None 
  */
export declare function configKeyGet(key: string): string;
/**
  * Do not use.  Does not do anything.
  * @param key Key to look up, in the form “SECTION/KEY”.
  * @returns None 
  */
export declare function configKeyGetSystem(key: string): string;
/**
  * This is the default break algorithm, used if no language engine overrides it. Normally you should use Pango.break_() instead. Unlike Pango.break_(), analysis can be None, but only do that if you know what you’re doing. If you need an analysis to pass to Pango.break_(), you need to Pango.itemize().  In most cases however you should simply use Pango.get_log_attrs().
  * @param text text to break
  * @param length length of text in bytes (may be -1 if text is nul-terminated)
  * @param analysis a Pango.Analysis for the text
  * @param attrs logical attributes to fill in
  * @param attrsLen size of the array passed as attrs 
  */
export declare function defaultBreak(text: string, length: number, analysis: import('../Pango').Analysis | null, attrs: import('../Pango').LogAttr, attrsLen: number): void;
/**
  * Converts extents from Pango units to device units, dividing by the Pango.SCALE factor and performing rounding.
  * @param inclusive rectangle to round to pixels inclusively, or None.
  * @param nearest rectangle to round to nearest pixels, or None. 
  */
export declare function extentsToPixels(inclusive: import('../Pango').Rectangle | null, nearest: import('../Pango').Rectangle | null): void;
/**
  * Searches a string the first character that has a strong direction, according to the Unicode bidirectional algorithm.
  * @param text the text to process
  * @param length length of text in bytes (may be -1 if text is nul-terminated)
  * @returns The direction corresponding to the first strong character. If no such character is found, then Pango.Direction.NEUTRAL is returned. 
  */
export declare function findBaseDir(text: string, length: number): import('../Pango').Direction;
/**
  * Locates a paragraph boundary in text. A boundary is caused by delimiter characters, such as a newline, carriage return, carriage return-newline pair, or Unicode paragraph separator character.  The index of the run of delimiters is returned in paragraph_delimiter_index. The index of the start of the paragraph (index after all delimiters) is stored in next_paragraph_start.
  * @param text UTF-8 text
  * @param length length of text in bytes, or -1 if nul-terminated
  * @returns paragraph_delimiter_index:  return location for index of delimiter next_paragraph_start:  return location for start of next paragraph 
  */
export declare function findParagraphBoundary(text: string, length: number): [number, number];
/**
  * Creates a new font description from a string representation in the form “‘FAMILY-LIST [STYLE-OPTIONS]’ [SIZE]”, where FAMILY-LIST is a comma separated list of families optionally terminated by a comma, STYLE_OPTIONS is a whitespace separated list of words where each word describes one of style, variant, weight, stretch, or gravity, and SIZE is a decimal number (size in points) or optionally followed by the unit modifier “px” for absolute size. Any one of the options may be absent.  If FAMILY-LIST is absent, then the family_name field of the resulting font description will be initialized to None.  If STYLE-OPTIONS is missing, then all style options will be set to the default values. If SIZE is missing, the size in the resulting font description will be set to 0.
  * @param str string representation of a font description.
  * @returns a new Pango.FontDescription. 
  */
export declare function fontDescriptionFromString(str: string): import('../Pango').FontDescription;
/**
  * Returns the name of the “pango” subdirectory of LIBDIR (which is set at compile time).
  * @returns the Pango lib directory. The returned string should not be freed. 
  */
export declare function getLibSubdirectory(): string;
/**
  * Computes a Pango.LogAttr for each character in text. The log_attrs array must have one Pango.LogAttr for each position in text; if text contains N characters, it has N+1 positions, including the last position at the end of the text. text should be an entire paragraph; logical attributes can’t be computed without context (for example you need to see spaces on either side of a word to know the word is a word).
  * @param text text to process
  * @param length length in bytes of text
  * @param level embedding level, or -1 if unknown
  * @param language language tag
  * @param logAttrs array with one Pango.LogAttr per character in text, plus one extra, to be filled in 
  */
export declare function getLogAttrs(text: string, length: number, level: number, language: import('../Pango').Language, logAttrs: import('../Pango').LogAttr): void;
/**
  * If ch has the Unicode mirrored property and there is another Unicode character that typically has a glyph that is the mirror image of ch’s glyph, puts that character in the address pointed to by mirrored_ch.
  * @param ch a Unicode character
  * @param mirroredCh location to store the mirrored character
  * @returns True if ch has a mirrored character and mirrored_ch is filled in, False otherwise 
  */
export declare function getMirrorChar(ch: string, mirroredCh: string): boolean;
/**
  * Returns the name of the “pango” subdirectory of SYSCONFDIR (which is set at compile time).
  * @returns the Pango sysconf directory. The returned string should not be freed. 
  */
export declare function getSysconfSubdirectory(): string;
/**
  * Finds the gravity that best matches the rotation component in a Pango.Matrix.
  * @param matrix a Pango.Matrix
  * @returns the gravity of matrix, which will never be Pango.Gravity.AUTO, or Pango.Gravity.SOUTH if matrix is None 
  */
export declare function gravityGetForMatrix(matrix: import('../Pango').Matrix | null): import('../Pango').Gravity;
/**
  * Based on the script, base gravity, and hint, returns actual gravity to use in laying out a single Pango.Item.
  * @param script Pango.Script to query
  * @param baseGravity base gravity of the paragraph
  * @param hint orientation hint
  * @returns resolved gravity suitable to use for a run of text with script. 
  */
export declare function gravityGetForScript(script: import('../Pango').Script, baseGravity: import('../Pango').Gravity, hint: import('../Pango').GravityHint): import('../Pango').Gravity;
/**
  * Based on the script, East Asian width, base gravity, and hint, returns actual gravity to use in laying out a single character or Pango.Item.
  * @param script Pango.Script to query
  * @param wide True for wide characters as returned by GLib.unichar_iswide()
  * @param baseGravity base gravity of the paragraph
  * @param hint orientation hint
  * @returns resolved gravity suitable to use for a run of text with script and wide. 
  */
export declare function gravityGetForScriptAndWidth(script: import('../Pango').Script, wide: boolean, baseGravity: import('../Pango').Gravity, hint: import('../Pango').GravityHint): import('../Pango').Gravity;
/**
  * Converts a Pango.Gravity value to its natural rotation in radians. gravity should not be Pango.Gravity.AUTO.
  * @param gravity gravity to query
  * @returns the rotation value corresponding to gravity. 
  */
export declare function gravityToRotation(gravity: import('../Pango').Gravity): number;
/**
  * Checks ch to see if it is a character that should not be normally rendered on the screen.  This includes all Unicode characters with “ZERO WIDTH” in their name, as well as bidi formatting characters, and a few other ones.  This is totally different from GLib.unichar_iszerowidth() and is at best misnamed.
  * @param ch a Unicode character
  * @returns True if ch is a zero-width character, False otherwise 
  */
export declare function isZeroWidth(ch: string): boolean;
/**
  * Breaks a piece of text into segments with consistent directional level and shaping engine. Each byte of text will be contained in exactly one of the items in the returned list; the generated list of items will be in logical order (the start offsets of the items are ascending).
  * @param context a structure holding information that affects the itemization process.
  * @param text the text to itemize.
  * @param startIndex first byte in text to process
  * @param length the number of bytes (not characters) to process after start_index. This must be >= 0.
  * @param attrs the set of attributes that apply to text.
  * @param cachedIter Cached attribute iterator, or None
  * @returns a GLib.List of Pango.Item structures. The items should be freed using Pango.Item.free() probably in combination with g_list_foreach(), and the list itself using g_list_free(). 
  */
export declare function itemize(context: import('../Pango').Context, text: string, startIndex: number, length: number, attrs: import('../Pango').AttrList, cachedIter: import('../Pango').AttrIterator | null): import('../Pango').Item[];
/**
  * Like Pango.itemize(), but the base direction to use when computing bidirectional levels (see Pango.Context.set_base_dir ()), is specified explicitly rather than gotten from the Pango.Context.
  * @param context a structure holding information that affects the itemization process.
  * @param baseDir base direction to use for bidirectional processing
  * @param text the text to itemize.
  * @param startIndex first byte in text to process
  * @param length the number of bytes (not characters) to process after start_index. This must be >= 0.
  * @param attrs the set of attributes that apply to text.
  * @param cachedIter Cached attribute iterator, or None
  * @returns a GLib.List of Pango.Item structures.  The items should be freed using Pango.Item.free() probably in combination with g_list_foreach(), and the list itself using g_list_free(). 
  */
export declare function itemizeWithBaseDir(context: import('../Pango').Context, baseDir: import('../Pango').Direction, text: string, startIndex: number, length: number, attrs: import('../Pango').AttrList, cachedIter: import('../Pango').AttrIterator | null): import('../Pango').Item[];
/**
  * Take a RFC-3066 format language tag as a string and convert it to a Pango.Language pointer that can be efficiently copied (copy the pointer) and compared with other language tags (compare the pointer.)
  * @param language a string representing a language tag, or None
  * @returns an opaque pointer to a Pango.Language structure, or None if language was None.  The returned pointer will be valid forever after, and should not be freed. 
  */
export declare function languageFromString(language: string | null): import('../Pango').Language | null;
/**
  * Returns the Pango.Language for the current locale of the process. Note that this can change over the life of an application.
  * @returns the default language as a Pango.Language, must not be freed. 
  */
export declare function languageGetDefault(): import('../Pango').Language;
/**
  * This will return the bidirectional embedding levels of the input paragraph as defined by the Unicode Bidirectional Algorithm available at:
  * @param text the text to itemize.
  * @param length the number of bytes (not characters) to process, or -1 if text is nul-terminated and the length should be calculated.
  * @param pbaseDir input base direction, and output resolved direction.
  * @returns a newly allocated array of embedding levels, one item per character (not byte), that should be freed using GLib.free. 
  */
export declare function log2VisGetEmbeddingLevels(text: string, length: number, pbaseDir: import('../Pango').Direction): number;
/**
  * Look up all user defined aliases for the alias fontname. The resulting font family names will be stored in families, and the number of families in n_families.
  * @param fontname an ascii string
  * @returns will be set to an array of font family names. this array is owned by pango and should not be freed. 
  */
export declare function lookupAliases(fontname: string): string[];
/**
  * After feeding a pango markup parser some data with GLib.MarkupParseContext.parse(), use this function to get the list of pango attributes and text out of the markup. This function will not free context, use GLib.MarkupParseContext.free() to do so.
  * @param context A valid parse context that was returned from Pango.markup_parser_new()
  * @returns False if error is set, otherwise True  attr_list:address of return location for a Pango.AttrList, or None text:address of return location for text with tags stripped, or None accel_char:address of return location for accelerator str, or None 
  */
export declare function markupParserFinish(context: import('../GLib').MarkupParseContext): [boolean, import('../Pango').AttrList, string, string];
/**
  * Parses marked-up text (see
  * @param accelMarker character that precedes an accelerator, or 0 for none
  * @returns a GLib.MarkupParseContext that should be destroyed with GLib.MarkupParseContext.free(). 
  */
export declare function markupParserNew(accelMarker: string): import('../GLib').MarkupParseContext;
/**
  * Do not use.  Does not do anything.
  * @param module a Pango.IncludedModule 
  */
export declare function moduleRegister(module: import('../Pango').IncludedModule): void;
/**
  * Parses an enum type and stores the result in value.
  * @param type enum type to parse, eg. %PANGO_TYPE_ELLIPSIZE_MODE.
  * @param str string to parse.  May be None.
  * @param warn if True, issue a g_warning() on bad input.
  * @returns True if str was successfully parsed.   value:integer to store the result in, or None. possible_values:  place to store list of possible values on failure, or None. 
  */
export declare function parseEnum(type: import('../GObject').GType, str: string | null, warn: boolean): [boolean, number, string];
/**
  * Parses marked-up text (see
  * @param markupText markup to parse (see markup format)
  * @param length length of markup_text, or -1 if nul-terminated
  * @param accelMarker character that precedes an accelerator, or 0 for none
  * @returns False if error is set, otherwise True   attr_list:address of return location for a Pango.AttrList, or None text:address of return location for text with tags stripped, or None accel_char:address of return location for accelerator str, or None 
  */
export declare function parseMarkup(markupText: string, length: number, accelMarker: string): [boolean, import('../Pango').AttrList, string, string];
/**
  * Parses a font stretch. The allowed values are “ultra_condensed”, “extra_condensed”, “condensed”, “semi_condensed”, “normal”, “semi_expanded”, “expanded”, “extra_expanded” and “ultra_expanded”. Case variations are ignored and the ‘_’ characters may be omitted.
  * @param str a string to parse.
  * @param warn if True, issue a g_warning() on bad input.
  * @returns True if str was successfully parsed.   stretch:a Pango.Stretch to store the result in. 
  */
export declare function parseStretch(str: string, warn: boolean): [boolean, import('../Pango').Stretch];
/**
  * Parses a font style. The allowed values are “normal”, “italic” and “oblique”, case variations being ignored.
  * @param str a string to parse.
  * @param warn if True, issue a g_warning() on bad input.
  * @returns True if str was successfully parsed.   style:a Pango.Style to store the result in. 
  */
export declare function parseStyle(str: string, warn: boolean): [boolean, import('../Pango').Style];
/**
  * Parses a font variant. The allowed values are “normal” and “smallcaps” or “small_caps”, case variations being ignored.
  * @param str a string to parse.
  * @param warn if True, issue a g_warning() on bad input.
  * @returns True if str was successfully parsed.   variant:a Pango.Variant to store the result in. 
  */
export declare function parseVariant(str: string, warn: boolean): [boolean, import('../Pango').Variant];
/**
  * Parses a font weight. The allowed values are “heavy”, “ultrabold”, “bold”, “normal”, “light”, “ultraleight” and integers. Case variations are ignored.
  * @param str a string to parse.
  * @param warn if True, issue a g_warning() on bad input.
  * @returns True if str was successfully parsed.   weight:a Pango.Weight to store the result in. 
  */
export declare function parseWeight(str: string, warn: boolean): [boolean, import('../Pango').Weight];
/**
  * Quantizes the thickness and position of a line, typically an underline or strikethrough, to whole device pixels, that is integer multiples of Pango.SCALE. The purpose of this function is to avoid such lines looking blurry.
  * @param thickness pointer to the thickness of a line, in Pango units
  * @param position corresponding position
  * @returns thickness:pointer to the thickness of a line, in Pango units position:corresponding position 
  */
export declare function quantizeLineGeometry(thickness: number, position: number): [number, number];
/**
  * Reads an entire line from a file into a buffer. Lines may be delimited with ‘\n’, ‘\r’, ‘\n\r’, or ‘\r\n’. The delimiter is not written into the buffer. Text after a ‘#’ character is treated as a comment and skipped. ‘' can be used to escape a # character. ‘' proceeding a line delimiter combines adjacent lines. A ‘' proceeding any other character is ignored and written into the output buffer unmodified.
  * @param stream a stdio stream
  * @returns 0 if the stream was already at an %EOF character, otherwise the number of lines read (this is useful for maintaining a line number counter which doesn’t combine lines with ‘')  str:GLib.String buffer into which to write the result 
  */
export declare function readLine(stream: Object | null): [number, import('../GLib').String];
/**
  * From a list of items in logical order and the associated directional levels, produce a list in visual order. The original list is unmodified.
  * @param logicalItems a GLib.List of Pango.Item in logical order.
  * @returns a GLib.List of Pango.Item structures in visual order.(Please open a bug if you use this function. It is not a particularly convenient interface, and the code is duplicated elsewhere in Pango for that reason.) 
  */
export declare function reorderItems(logicalItems: import('../Pango').Item): import('../Pango').Item[];
/**
  * Scans an integer. Leading white space is skipped.
  * @param pos in/out string position
  * @returns False if a parse error occurred.  pos:in/out string position out:an int into which to write the result 
  */
export declare function scanInt(pos: string): [boolean, string, number];
/**
  * Scans a string into a GLib.String buffer. The string may either be a sequence of non-white-space characters, or a quoted string with ‘”’. Instead a quoted string, ‘"’ represents a literal quote. Leading white space outside of quotes is skipped.
  * @param pos in/out string position
  * @returns False if a parse error occurred.  pos:in/out string position out:a GLib.String into which to write the result 
  */
export declare function scanString(pos: string): [boolean, string, import('../GLib').String];
/**
  * Scans a word into a GLib.String buffer. A word consists of [A-Za-z_] followed by zero or more [A-Za-z_0-9] Leading white space is skipped.
  * @param pos in/out string position
  * @returns False if a parse error occurred.  pos:in/out string position out:a GLib.String into which to write the result 
  */
export declare function scanWord(pos: string): [boolean, string, import('../GLib').String];
/**
  * Looks up the Pango.Script for a particular character (as defined by Unicode Standard Annex \#24). No check is made for ch being a valid Unicode character; if you pass in invalid character, the result is undefined.
  * @param ch a Unicode character
  * @returns the Pango.Script for the character. 
  */
export declare function scriptForUnichar(ch: string): import('../Pango').Script;
/**
  * Given a script, finds a language tag that is reasonably representative of that script. This will usually be the most widely spoken or used language written in that script: for instance, the sample language for Pango.Script.CYRILLIC is ru (Russian), the sample language for Pango.Script.ARABIC is ar.
  * @param script a Pango.Script
  * @returns a Pango.Language that is representative of the script, or None if no such language exists. 
  */
export declare function scriptGetSampleLanguage(script: import('../Pango').Script): import('../Pango').Language | null;
/**
  * Given a segment of text and the corresponding Pango.Analysis structure returned from Pango.itemize(), convert the characters into glyphs. You may also pass in only a substring of the item from Pango.itemize().
  * @param text the text to process
  * @param length the length (in bytes) of text
  * @param analysis Pango.Analysis structure from Pango.itemize()
  * @param glyphs glyph string in which to store results 
  */
export declare function shape(text: string, length: number, analysis: import('../Pango').Analysis, glyphs: import('../Pango').GlyphString): void;
/**
  * Given a segment of text and the corresponding Pango.Analysis structure returned from Pango.itemize(), convert the characters into glyphs. You may also pass in only a substring of the item from Pango.itemize().
  * @param itemText valid UTF-8 text to shape.
  * @param itemLength the length (in bytes) of item_text. -1 means nul-terminated text.
  * @param paragraphText text of the paragraph (see details).  May be None.
  * @param paragraphLength the length (in bytes) of paragraph_text. -1 means nul-terminated text.
  * @param analysis Pango.Analysis structure from Pango.itemize().
  * @param glyphs glyph string in which to store results. 
  */
export declare function shapeFull(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: import('../Pango').Analysis, glyphs: import('../Pango').GlyphString): void;
/**
  * Skips 0 or more characters of white space.
  * @param pos in/out string position
  * @returns False if skipping the white space leaves the position at a ‘\0’ character.  pos:in/out string position 
  */
export declare function skipSpace(pos: string): [boolean, string];
/**
  * Splits a GLib.SEARCHPATH_SEPARATOR-separated list of files, stripping white space and substituting ~/ with $HOME/.
  * @param str a GLib.SEARCHPATH_SEPARATOR separated list of filenames
  * @returns a list of strings to be freed with GLib.strfreev() 
  */
export declare function splitFileList(str: string): string[];
/**
  * Trims leading and trailing whitespace from a string.
  * @param str a string
  * @returns A newly-allocated string that must be freed with GLib.free() 
  */
export declare function trimString(str: string): string;
/**
  * Determines the inherent direction of a character; either Pango.Direction.LTR, Pango.Direction.RTL, or Pango.Direction.NEUTRAL.
  * @param ch a Unicode character
  * @returns the direction of the character. 
  */
export declare function unicharDirection(ch: string): import('../Pango').Direction;
/**
  * Converts a floating-point number to Pango units: multiplies it by Pango.SCALE and rounds to nearest integer.
  * @param d double floating-point value
  * @returns the value in Pango units. 
  */
export declare function unitsFromDouble(d: number): number;
/**
  * Converts a number in Pango units to floating-point: divides it by Pango.SCALE.
  * @param i value in Pango units
  * @returns the double value. 
  */
export declare function unitsToDouble(i: number): number;
/**
  * This is similar to the macro %PANGO_VERSION except that it returns the encoded version of Pango available at run-time, as opposed to the version available at compile-time.
  * @returns The encoded version of Pango library available at run time. 
  */
export declare function version(): number;
/**
  * Checks that the Pango library in use is compatible with the given version. Generally you would pass in the constants %PANGO_VERSION_MAJOR, %PANGO_VERSION_MINOR, %PANGO_VERSION_MICRO as the three arguments to this function; that produces a check that the library in use at run-time is compatible with the version of Pango the application or module was compiled against.
  * @param requiredMajor the required major version.
  * @param requiredMinor the required minor version.
  * @param requiredMicro the required major version.
  * @returns None if the Pango library is compatible with the given version, or a string describing the version mismatch.  The returned string is owned by Pango and should not be modified or freed. 
  */
export declare function versionCheck(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null;
/**
  * This is similar to the macro %PANGO_VERSION_STRING except that it returns the version of Pango available at run-time, as opposed to the version available at compile-time.
  * @returns A string containing the version of Pango library available at run time. The returned string is owned by Pango and should not be modified or freed. 
  */
export declare function versionString(): string;
