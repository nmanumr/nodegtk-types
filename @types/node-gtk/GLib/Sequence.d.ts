/**
  * The GLib.Sequence struct is an opaque data type representing a
sequence data type. 
  */
export declare class Sequence {
  /**
    * Returns the data that iter points to.
    * @param iter a GLib.SequenceIter
    * @returns the data that iter points to 
    */
  static get(iter: import('../GLib').SequenceIter): Object | null;
  /**
    * Inserts a new item just before the item pointed to by iter.
    * @param iter a GLib.SequenceIter
    * @param data the data for the new item
    * @returns an iterator pointing to the new item 
    */
  static insertBefore(iter: import('../GLib').SequenceIter, data: Object | null): import('../GLib').SequenceIter;
  /**
    * Moves the item pointed to by src to the position indicated by dest. After calling this function dest will point to the position immediately after src. It is allowed for src and dest to point into different sequences.
    * @param src a GLib.SequenceIter pointing to the item to move
    * @param dest a GLib.SequenceIter pointing to the position to which the item is moved 
    */
  static move(src: import('../GLib').SequenceIter, dest: import('../GLib').SequenceIter): void;
  /**
    * Inserts the (begin, end) range at the destination pointed to by dest. The begin and end iters must point into the same sequence. It is allowed for dest to point to a different sequence than the one pointed into by begin and end.
    * @param dest a GLib.SequenceIter
    * @param begin a GLib.SequenceIter
    * @param end a GLib.SequenceIter 
    */
  static moveRange(dest: import('../GLib').SequenceIter, begin: import('../GLib').SequenceIter, end: import('../GLib').SequenceIter): void;
  /**
    * Finds an iterator somewhere in the range (begin, end). This iterator will be close to the middle of the range, but is not guaranteed to be exactly in the middle.
    * @param begin a GLib.SequenceIter
    * @param end a GLib.SequenceIter
    * @returns a GLib.SequenceIter pointing somewhere in the (begin, end) range 
    */
  static rangeGetMidpoint(begin: import('../GLib').SequenceIter, end: import('../GLib').SequenceIter): import('../GLib').SequenceIter;
  /**
    * Removes the item pointed to by iter. It is an error to pass the end iterator to this function.
    * @param iter a GLib.SequenceIter 
    */
  static remove(iter: import('../GLib').SequenceIter): void;
  /**
    * Removes all items in the (begin, end) range.
    * @param begin a GLib.SequenceIter
    * @param end a GLib.SequenceIter 
    */
  static removeRange(begin: import('../GLib').SequenceIter, end: import('../GLib').SequenceIter): void;
  /**
    * Changes the data for the item pointed to by iter to be data. If the sequence has a data destroy function associated with it, that function is called on the existing data that iter pointed to.
    * @param iter a GLib.SequenceIter
    * @param data new data for the item 
    */
  static set(iter: import('../GLib').SequenceIter, data: Object | null): void;
  /**
    * Swaps the items pointed to by a and b. It is allowed for a and b to point into difference sequences.
    * @param a a GLib.SequenceIter
    * @param b a GLib.SequenceIter 
    */
  static swap(a: import('../GLib').SequenceIter, b: import('../GLib').SequenceIter): void;
  /**
    * Adds a new item to the end of self.
    * @param data the data for the new item
    * @returns an iterator pointing to the new item 
    */
  append(data: Object | null): import('../GLib').SequenceIter;
  /**
    * Frees the memory allocated for self. If self has a data destroy function associated with it, that function is called on all items in self. 
    */
  free(): void;
  /**
    * Returns the begin iterator for self.
    * @returns the begin iterator for self. 
    */
  getBeginIter(): import('../GLib').SequenceIter;
  /**
    * Returns the end iterator for seg
    * @returns the end iterator for self 
    */
  getEndIter(): import('../GLib').SequenceIter;
  /**
    * Returns the iterator at position pos. If pos is negative or larger than the number of items in self, the end iterator is returned.
    * @param pos a position in self, or -1 for the end
    * @returns The GLib.SequenceIter at position pos 
    */
  getIterAtPos(pos: number): import('../GLib').SequenceIter;
  /**
    * Returns the length of self. Note that this method is O(h) where `h’ is the height of the tree. It is thus more efficient to use GLib.Sequence.is_empty() when comparing the length to zero.
    * @returns the length of self 
    */
  getLength(): number;
  /**
    * Returns True if the sequence contains zero items.
    * @returns True if the sequence is empty, otherwise False. 
    */
  isEmpty(): boolean;
  /**
    * Adds a new item to the front of self
    * @param data the data for the new item
    * @returns an iterator pointing to the new item 
    */
  prepend(data: Object | null): import('../GLib').SequenceIter;
}

