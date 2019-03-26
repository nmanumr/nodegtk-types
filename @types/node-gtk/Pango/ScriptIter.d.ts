/**
  * A Pango.ScriptIter is used to iterate through a string
and identify ranges in different scripts. 
  */
export declare class ScriptIter {
  /**
    * Frees a Pango.ScriptIter created with pango_script_iter_new(). 
    */
  free(): void;
  /**
    * Gets information about the range to which self currently points. The range is the set of locations p where *start <= p < *end. (That is, it doesn’t include the character stored at *end)
    * @returns start:location to store start position of the range, or None end:location to store end position of the range, or None script:location to store script for range, or None 
    */
  getRange(): [string, string, import('../Pango').Script];
  /**
    * Advances a Pango.ScriptIter to the next range. If self is already at the end, it is left unchanged and False is returned.
    * @returns True if self was successfully advanced. 
    */
  next(): boolean;
}

