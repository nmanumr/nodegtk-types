/**
  * Atk.Range are used on Atk.Value, in order to represent the full
range of a given component (for example an slider or a range
control), or to define each individual subrange this full range is
splitted if available. See Atk.Value documentation for further
details. 
  */
export declare class Range {
  /**
    * Creates a new Atk.Range.
    * @param lowerLimit inferior limit for this range
    * @param upperLimit superior limit for this range
    * @param description human readable description of this range.
    * @returns a new Atk.Range 
    */
  static new(lowerLimit: number, upperLimit: number, description: string): import('../Atk').Range;
  /**
    * Returns a new Atk.Range that is a exact copy of self
    * @returns a new Atk.Range copy of self 
    */
  copy(): import('../Atk').Range;
  /**
    * Free self 
    */
  free(): void;
  /**
    * Returns the human readable description of self
    * @returns the human-readable description of self 
    */
  getDescription(): string;
  /**
    * Returns the lower limit of self
    * @returns the lower limit of self 
    */
  getLowerLimit(): number;
  /**
    * Returns the upper limit of self
    * @returns the upper limit of self 
    */
  getUpperLimit(): number;
}

