/**
  * Determines if a string matches a file attribute. 
  */
export declare class FileAttributeMatcher {
  /**
    * Creates a new file attribute matcher, which matches attributes against a given string. Gio.FileAttributeMatchers are reference counted structures, and are created with a reference count of 1. If the number of references falls to 0, the Gio.FileAttributeMatcher is automatically destroyed.
    * @param attributes an attribute string to match.
    * @returns a Gio.FileAttributeMatcher 
    */
  static new(attributes: string): import('../Gio').FileAttributeMatcher;
  /**
    * Checks if the matcher will match all of the keys in a given namespace. This will always return True if a wildcard character is in use (e.g. if matcher was created with “standard::*” and ns is “standard”, or if matcher was created using “*” and namespace is anything.)
    * @param ns a string containing a file attribute namespace.
    * @returns True if the matcher matches all of the entries in the given ns, False otherwise. 
    */
  enumerateNamespace(ns: string): boolean;
  /**
    * Gets the next matched attribute from a Gio.FileAttributeMatcher.
    * @returns a string containing the next attribute or None if no more attribute exist. 
    */
  enumerateNext(): string;
  /**
    * Checks if an attribute will be matched by an attribute matcher. If the matcher was created with the “*” matching string, this function will always return True.
    * @param attribute a file attribute key.
    * @returns True if attribute matches self. False otherwise. 
    */
  matches(attribute: string): boolean;
  /**
    * Checks if a attribute matcher only matches a given attribute. Always returns False if “*” was used when creating the matcher.
    * @param attribute a file attribute key.
    * @returns True if the matcher only matches attribute. False otherwise. 
    */
  matchesOnly(attribute: string): boolean;
  /**
    * References a file attribute matcher.
    * @returns a Gio.FileAttributeMatcher. 
    */
  ref(): import('../Gio').FileAttributeMatcher;
  /**
    * Subtracts all attributes of subtract from self and returns a matcher that supports those attributes.
    * @param subtract The matcher to subtract
    * @returns A file attribute matcher matching all attributes of self that are not matched by subtract 
    */
  subtract(subtract: import('../Gio').FileAttributeMatcher): import('../Gio').FileAttributeMatcher;
  /**
    * Prints what the matcher is matching against. The format will be equal to the format passed to Gio.FileAttributeMatcher.new(). The output however, might not be identical, as the matcher may decide to use a different order or omit needless parts.
    * @returns a string describing the attributes the matcher matches against or None if self was None. 
    */
  toString(): string;
  /**
    * Unreferences self. If the reference count falls below 1, the self is automatically freed. 
    */
  unref(): void;
}

