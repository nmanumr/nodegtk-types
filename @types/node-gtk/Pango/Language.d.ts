/**
  * The Pango.Language structure is used to
represent a language. 
  */
export declare class Language {
  /**
    * Take a RFC-3066 format language tag as a string and convert it to a Pango.Language pointer that can be efficiently copied (copy the pointer) and compared with other language tags (compare the pointer.)
    * @param language a string representing a language tag, or None
    * @returns an opaque pointer to a Pango.Language structure, or None if language was None.  The returned pointer will be valid forever after, and should not be freed. 
    */
  static fromString(language: string | null): import('../Pango').Language | null;
  /**
    * Returns the Pango.Language for the current locale of the process. Note that this can change over the life of an application.
    * @returns the default language as a Pango.Language, must not be freed. 
    */
  static getDefault(): import('../Pango').Language;
  /**
    * Get a string that is representative of the characters needed to render a particular language.
    * @returns the sample string. This value is owned by Pango and should not be freed. 
    */
  getSampleString(): string;
  /**
    * Determines the scripts used to to write self. If nothing is known about the language tag self, or if self is None, then None is returned. The list of scripts returned starts with the script that the language uses most and continues to the one it uses least.
    * @returns An array of Pango.Script values, with the number of entries in the array stored in num_scripts, or None if Pango does not have any information about this particular language tag (also the case if self is None).  The returned array is owned by Pango and should not be modified or freed. 
    */
  getScripts(): import('../Pango').Script[] | null;
  /**
    * Determines if script is one of the scripts used to write self. The returned value is conservative; if nothing is known about the language tag self, True will be returned, since, as far as Pango knows, script might be used to write self.
    * @param script a Pango.Script
    * @returns True if script is one of the scripts used to write self or if nothing is known about self (including the case that self is None), False otherwise. 
    */
  includesScript(script: import('../Pango').Script): boolean;
  /**
    * Checks if a language tag matches one of the elements in a list of language ranges. A language tag is considered to match a range in the list if the range is ‘*’, the range is exactly the tag, or the range is a prefix of the tag, and the character after it in the tag is ‘-‘.
    * @param rangeList a list of language ranges, separated by ‘;’, ‘:’, ‘,’, or space characters. Each element must either be ‘*’, or a RFC 3066 language range canonicalized as by Pango.Language.from_string()
    * @returns True if a match was found. 
    */
  matches(rangeList: string): boolean;
  /**
    * Gets the RFC-3066 format string representing the given language tag.
    * @returns a string representing the language tag.  This is owned by Pango and should not be freed. 
    */
  toString(): string;
}

