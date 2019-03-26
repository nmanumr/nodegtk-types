/**
  * The Pango.Coverage structure represents a map from Unicode characters
to Pango.CoverageLevel. It is an opaque structure with no public fields. 
  */
export declare class Coverage {
  /**
    * Determine whether a particular index is covered by self
    * @param index the index to check
    * @returns the coverage level of self for character index_. 
    */
  get(index: number): import('../Pango').CoverageLevel;
  /**
    * Set the coverage for each index in self to be the max (better) value of the current coverage for the index and the coverage for the corresponding index in other.
    * @param other another Pango.Coverage 
    */
  max(other: import('../Pango').Coverage): void;
  /**
    * Modify a particular index within self
    * @param index the index to modify
    * @param level the new level for index_ 
    */
  set(index: number, level: import('../Pango').CoverageLevel): void;
  /**
    * Convert a Pango.Coverage structure into a flat binary format
    * @returns location to store result (must be freed with GLib.free()) 
    */
  toBytes(): Int8Array;
  /**
    * Decrease the reference count on the Pango.Coverage by one. If the result is zero, free the coverage and all associated memory. 
    */
  unref(): void;
}

