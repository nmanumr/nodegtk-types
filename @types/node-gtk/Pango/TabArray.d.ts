/**
  * A Pango.TabArray struct contains an array
of tab stops. Each tab stop has an alignment and a position. 
  */
export declare class TabArray {
  /**
    * Creates an array of initial_size tab stops. Tab stops are specified in pixel units if positions_in_pixels is True, otherwise in Pango units. All stops are initially at position 0.
    * @param initialSize Initial number of tab stops to allocate, can be 0
    * @param positionsInPixels whether positions are in pixel units
    * @returns the newly allocated Pango.TabArray, which should be freed with Pango.TabArray.free(). 
    */
  static new(initialSize: number, positionsInPixels: boolean): import('../Pango').TabArray;
  /**
    * Copies a Pango.TabArray
    * @returns the newly allocated Pango.TabArray, which should be freed with Pango.TabArray.free(). 
    */
  copy(): import('../Pango').TabArray;
  /**
    * Frees a tab array and associated resources. 
    */
  free(): void;
  /**
    * Returns True if the tab positions are in pixels, False if they are in Pango units.
    * @returns whether positions are in pixels. 
    */
  getPositionsInPixels(): boolean;
  /**
    * Gets the number of tab stops in self.
    * @returns the number of tab stops in the array. 
    */
  getSize(): number;
  /**
    * Gets the alignment and position of a tab stop.
    * @param tabIndex tab stop index
    * @returns alignment:location to store alignment, or None location:location to store tab position, or None 
    */
  getTab(tabIndex: number): [import('../Pango').TabAlign, number];
  /**
    * If non-None, alignments and locations are filled with allocated arrays of length Pango.TabArray.get_size(). You must free the returned array.
    * @returns alignments:location to store an array of tab stop alignments, or None locations:location to store an array of tab positions, or None 
    */
  getTabs(): [import('../Pango').TabAlign, number[]];
  /**
    * Resizes a tab array. You must subsequently initialize any tabs that were added as a result of growing the array.
    * @param newSize new size of the array 
    */
  resize(newSize: number): void;
  /**
    * Sets the alignment and location of a tab stop. alignment must always be Pango.TabAlign.LEFT in the current implementation.
    * @param tabIndex the index of a tab stop
    * @param alignment tab alignment
    * @param location tab location in Pango units 
    */
  setTab(tabIndex: number, alignment: import('../Pango').TabAlign, location: number): void;
}

