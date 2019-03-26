/**
  * A GLib.MatchInfo is an opaque struct used to return information about
matches. 
  */
export declare class MatchInfo {
  /**
    * Returns a new string containing the text in string_to_expand with references and escape sequences expanded. References refer to the last match done with string against regex and have the same syntax used by GLib.Regex.replace().
    * @param stringToExpand the string to expand
    * @returns the expanded string, or None if an error occurred 
    */
  expandReferences(stringToExpand: string): string | null;
  /**
    * Retrieves the text matching the match_num’th capturing parentheses. 0 is the full text of the match, 1 is the first paren set, 2 the second, and so on.
    * @param matchNum number of the sub expression
    * @returns The matched substring, or None if an error occurred. You have to free the string yourself 
    */
  fetch(matchNum: number): string | null;
  /**
    * Bundles up pointers to each of the matching substrings from a match and stores them in an array of str pointers. The first element in the returned array is the match number 0, i.e. the entire matched text.
    * @returns a None-terminated array of str * pointers.  It must be freed using GLib.strfreev(). If the previous match failed None is returned 
    */
  fetchAll(): string[];
  /**
    * Retrieves the text matching the capturing parentheses named name.
    * @param name name of the subexpression
    * @returns The matched substring, or None if an error occurred. You have to free the string yourself 
    */
  fetchNamed(name: string): string | null;
  /**
    * Retrieves the position in bytes of the capturing parentheses named name.
    * @param name name of the subexpression
    * @returns True if the position was fetched, False otherwise. If the position cannot be fetched, start_pos and end_pos are left unchanged.  start_pos:pointer to location where to store the start position, or None end_pos:pointer to location where to store the end position, or None 
    */
  fetchNamedPos(name: string): [boolean, number, number];
  /**
    * Retrieves the position in bytes of the match_num’th capturing parentheses. 0 is the full text of the match, 1 is the first paren set, 2 the second, and so on.
    * @param matchNum number of the sub expression
    * @returns True if the position was fetched, False otherwise. If the position cannot be fetched, start_pos and end_pos are left unchanged  start_pos:pointer to location where to store the start position, or None end_pos:pointer to location where to store the end position, or None 
    */
  fetchPos(matchNum: number): [boolean, number, number];
  /**
    * If self is not None, calls GLib.MatchInfo.unref(); otherwise does nothing. 
    */
  free(): void;
  /**
    * Retrieves the number of matched substrings (including substring 0, that is the whole matched text), so 1 is returned if the pattern has no substrings in it and 0 is returned if the match failed.
    * @returns Number of matched substrings, or -1 if an error occurred 
    */
  getMatchCount(): number;
  /**
    * Returns GLib.Regex object used in self. It belongs to Glib and must not be freed. Use GLib.Regex.ref() if you need to keep it after you free self object.
    * @returns GLib.Regex object used in self 
    */
  getRegex(): import('../GLib').Regex;
  /**
    * Returns the string searched with self. This is the string passed to GLib.Regex.match() or GLib.Regex.replace() so you may not free it before calling this function.
    * @returns the string searched with self 
    */
  getString(): string;
  /**
    * Usually if the string passed to GLib.Regex.match() matches as far as it goes, but is too short to match the entire pattern, False is returned. There are circumstances where it might be helpful to distinguish this case from other cases in which there is no match.
    * @returns True if the match was partial, False otherwise 
    */
  isPartialMatch(): boolean;
  /**
    * Returns whether the previous match operation succeeded.
    * @returns True if the previous match operation succeeded, False otherwise 
    */
  matches(): boolean;
  /**
    * Scans for the next match using the same parameters of the previous call to GLib.Regex.match_full() or GLib.Regex.match() that returned self.
    * @returns True is the string matched, False otherwise 
    */
  next(): boolean;
  /**
    * Increases reference count of self by 1.
    * @returns self 
    */
  ref(): import('../GLib').MatchInfo;
  /**
    * Decreases reference count of self by 1. When reference count drops to zero, it frees all the memory associated with the match_info structure. 
    */
  unref(): void;
}

