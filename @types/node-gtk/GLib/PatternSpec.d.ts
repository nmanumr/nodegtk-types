/**
  * A GLib.PatternSpec struct is the ‘compiled’ form of a pattern. This
structure is opaque and its fields cannot be accessed directly. 
  */
export declare class PatternSpec {
  /**
    * Compares two compiled pattern specs and returns whether they will match the same set of strings.
    * @param pspec2 another GLib.PatternSpec
    * @returns Whether the compiled patterns are equal 
    */
  equal(pspec2: import('../GLib').PatternSpec): boolean;
  /**
    * Frees the memory allocated for the GLib.PatternSpec. 
    */
  free(): void;
}

