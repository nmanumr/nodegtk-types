/**
  * The g_regex_*() functions implement regular
expression pattern matching using syntax and semantics similar to
Perl regular expression. 
  */
export declare class Regex {
  /**
    * Checks whether replacement is a valid replacement string (see GLib.Regex.replace()), i.e. that all escape sequences in it are valid.
    * @param replacement the replacement string
    * @returns whether replacement is a valid replacement string  has_references:location to store information about references in replacement or None 
    */
  static checkReplacement(replacement: string): [boolean, boolean];
  static errorQuark(): number;
  /**
    * Escapes the nul characters in string to “\x00”.  It can be used to compile a regex with embedded nul characters.
    * @param string the string to escape
    * @param length the length of string
    * @returns a newly-allocated escaped string 
    */
  static escapeNul(string: string, length: number): string;
  /**
    * Escapes the special characters used for regular expressions in string, for instance “a.b*c” becomes “a.b\*c”. This function is useful to dynamically generate regular expressions.
    * @param string the string to escape
    * @returns a newly-allocated escaped string 
    */
  static escapeString(string: string): string;
  /**
    * Scans for a match in string for pattern.
    * @param pattern the regular expression
    * @param string the string to scan for matches
    * @param compileOptions compile options for the regular expression, or 0
    * @param matchOptions match options, or 0
    * @returns True if the string matched, False otherwise 
    */
  static matchSimple(pattern: string, string: string, compileOptions: import('../GLib').RegexCompileFlags, matchOptions: import('../GLib').RegexMatchFlags): boolean;
  /**
    * Compiles the regular expression to an internal form, and does the initial setup of the GLib.Regex structure.
    * @param pattern the regular expression
    * @param compileOptions compile options for the regular expression, or 0
    * @param matchOptions match options for the regular expression, or 0
    * @returns a GLib.Regex structure or None if an error occured. Call GLib.Regex.unref() when you are done with it 
    */
  static new(pattern: string, compileOptions: import('../GLib').RegexCompileFlags, matchOptions: import('../GLib').RegexMatchFlags): import('../GLib').Regex | null;
  /**
    * Breaks the string on the pattern, and returns an array of the tokens. If the pattern contains capturing parentheses, then the text for each of the substrings will also be returned. If the pattern does not match anywhere in the string, then the whole string is returned as the first token.
    * @param pattern the regular expression
    * @param string the string to scan for matches
    * @param compileOptions compile options for the regular expression, or 0
    * @param matchOptions match options, or 0
    * @returns a None-terminated array of strings. Free it using GLib.strfreev() 
    */
  static splitSimple(pattern: string, string: string, compileOptions: import('../GLib').RegexCompileFlags, matchOptions: import('../GLib').RegexMatchFlags): string[];
  /**
    * Returns the number of capturing subpatterns in the pattern.
    * @returns the number of capturing subpatterns 
    */
  getCaptureCount(): number;
  /**
    * Returns the compile options that self was created with.
    * @returns flags from GLib.RegexCompileFlags 
    */
  getCompileFlags(): import('../GLib').RegexCompileFlags;
  /**
    * Checks whether the pattern contains explicit CR or LF references.
    * @returns True if the pattern contains explicit CR or LF references 
    */
  getHasCrOrLf(): boolean;
  /**
    * Returns the match options that self was created with.
    * @returns flags from GLib.RegexMatchFlags 
    */
  getMatchFlags(): import('../GLib').RegexMatchFlags;
  /**
    * Returns the number of the highest back reference in the pattern, or 0 if the pattern does not contain back references.
    * @returns the number of the highest back reference 
    */
  getMaxBackref(): number;
  /**
    * Gets the number of characters in the longest lookbehind assertion in the pattern. This information is useful when doing multi-segment matching using the partial matching facilities.
    * @returns the number of characters in the longest lookbehind assertion. 
    */
  getMaxLookbehind(): number;
  /**
    * Gets the pattern string associated with self, i.e. a copy of the string passed to GLib.Regex.new().
    * @returns the pattern of self 
    */
  getPattern(): string;
  /**
    * Retrieves the number of the subexpression named name.
    * @param name name of the subexpression
    * @returns The number of the subexpression or -1 if name does not exists 
    */
  getStringNumber(name: string): number;
  /**
    * Scans for a match in string for the pattern in self. The match_options are combined with the match options specified when the self structure was created, letting you have more flexibility in reusing GLib.Regex structures.
    * @param string the string to scan for matches
    * @param matchOptions match options
    * @returns True is the string matched, False otherwise   match_info:pointer to location where to store the GLib.MatchInfo, or None if you do not need it 
    */
  match(string: string, matchOptions: import('../GLib').RegexMatchFlags): [boolean, import('../GLib').MatchInfo];
  /**
    * Using the standard algorithm for regular expression matching only the longest match in the string is retrieved. This function uses a different algorithm so it can retrieve all the possible matches. For more documentation see GLib.Regex.match_all_full().
    * @param string the string to scan for matches
    * @param matchOptions match options
    * @returns True is the string matched, False otherwise   match_info:pointer to location where to store the GLib.MatchInfo, or None if you do not need it 
    */
  matchAll(string: string, matchOptions: import('../GLib').RegexMatchFlags): [boolean, import('../GLib').MatchInfo];
  /**
    * Using the standard algorithm for regular expression matching only the longest match in the string is retrieved, it is not possible to obtain all the available matches. For instance matching “<a> <b> <c>” against the pattern “<.*>” you get “<a> <b> <c>”.
    * @param string the string to scan for matches
    * @param startPosition starting index of the string to match, in bytes
    * @param matchOptions match options
    * @returns True is the string matched, False otherwise   match_info:pointer to location where to store the GLib.MatchInfo, or None if you do not need it 
    */
  matchAllFull(string: string, startPosition: number, matchOptions: import('../GLib').RegexMatchFlags): [boolean, import('../GLib').MatchInfo];
  /**
    * Scans for a match in string for the pattern in self. The match_options are combined with the match options specified when the self structure was created, letting you have more flexibility in reusing GLib.Regex structures.
    * @param string the string to scan for matches
    * @param startPosition starting index of the string to match, in bytes
    * @param matchOptions match options
    * @returns True is the string matched, False otherwise   match_info:pointer to location where to store the GLib.MatchInfo, or None if you do not need it 
    */
  matchFull(string: string, startPosition: number, matchOptions: import('../GLib').RegexMatchFlags): [boolean, import('../GLib').MatchInfo];
  /**
    * Increases reference count of self by 1.
    * @returns self 
    */
  ref(): import('../GLib').Regex;
  /**
    * Replaces all occurrences of the pattern in self with the replacement text. Backreferences of the form ‘\number’ or ‘\g<number>’ in the replacement text are interpolated by the number-th captured subexpression of the match, ‘\g<name>’ refers to the captured subexpression with the given name. ‘\0’ refers to the complete match, but ‘\0’ followed by a number is the octal representation of a character. To include a literal ‘' in the replacement, write ‘\\’.
    * @param string the string to perform matches against
    * @param startPosition starting index of the string to match, in bytes
    * @param replacement text to replace each match with
    * @param matchOptions options for the match
    * @returns a newly allocated string containing the replacements 
    */
  replace(string: string, startPosition: number, replacement: string, matchOptions: import('../GLib').RegexMatchFlags): string;
  /**
    * Replaces all occurrences of the pattern in self with the replacement text. replacement is replaced literally, to include backreferences use GLib.Regex.replace().
    * @param string the string to perform matches against
    * @param startPosition starting index of the string to match, in bytes
    * @param replacement text to replace each match with
    * @param matchOptions options for the match
    * @returns a newly allocated string containing the replacements 
    */
  replaceLiteral(string: string, startPosition: number, replacement: string, matchOptions: import('../GLib').RegexMatchFlags): string;
  /**
    * Breaks the string on the pattern, and returns an array of the tokens. If the pattern contains capturing parentheses, then the text for each of the substrings will also be returned. If the pattern does not match anywhere in the string, then the whole string is returned as the first token.
    * @param string the string to split with the pattern
    * @param matchOptions match time option flags
    * @returns a None-terminated str ** array. Free it using GLib.strfreev() 
    */
  split(string: string, matchOptions: import('../GLib').RegexMatchFlags): string[];
  /**
    * Breaks the string on the pattern, and returns an array of the tokens. If the pattern contains capturing parentheses, then the text for each of the substrings will also be returned. If the pattern does not match anywhere in the string, then the whole string is returned as the first token.
    * @param string the string to split with the pattern
    * @param startPosition starting index of the string to match, in bytes
    * @param matchOptions match time option flags
    * @param maxTokens the maximum number of tokens to split string into. If this is less than 1, the string is split completely
    * @returns a None-terminated str ** array. Free it using GLib.strfreev() 
    */
  splitFull(string: string, startPosition: number, matchOptions: import('../GLib').RegexMatchFlags, maxTokens: number): string[];
  /**
    * Decreases reference count of self by 1. When reference count drops to zero, it frees all the memory associated with the regex structure. 
    */
  unref(): void;
}

