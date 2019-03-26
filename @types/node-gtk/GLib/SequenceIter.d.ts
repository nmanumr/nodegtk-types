/**
  * The GLib.SequenceIter struct is an opaque data type representing an
iterator pointing into a GLib.Sequence. 
  */
export declare class SequenceIter {
  /**
    * Returns a negative number if self comes before b, 0 if they are equal, and a positive number if self comes after b.
    * @param b a GLib.SequenceIter
    * @returns a negative number if self comes before b, 0 if they are equal, and a positive number if self comes after b 
    */
  compare(b: import('../GLib').SequenceIter): number;
  /**
    * Returns the position of self
    * @returns the position of self 
    */
  getPosition(): number;
  /**
    * Returns the GLib.Sequence that self points into.
    * @returns the GLib.Sequence that self points into 
    */
  getSequence(): import('../GLib').Sequence;
  /**
    * Returns whether self is the begin iterator
    * @returns whether self is the begin iterator 
    */
  isBegin(): boolean;
  /**
    * Returns whether self is the end iterator
    * @returns Whether self is the end iterator 
    */
  isEnd(): boolean;
  /**
    * Returns the GLib.SequenceIter which is delta positions away from self. If self is closer than -delta positions to the beginning of the sequence, the begin iterator is returned. If self is closer than delta positions to the end of the sequence, the end iterator is returned.
    * @param delta A positive or negative number indicating how many positions away from self the returned GLib.SequenceIter will be
    * @returns a GLib.SequenceIter which is delta positions away from self 
    */
  move(delta: number): import('../GLib').SequenceIter;
  /**
    * Returns an iterator pointing to the next position after self. If self is the end iterator, the end iterator is returned.
    * @returns a GLib.SequenceIter pointing to the next position after self 
    */
  next(): import('../GLib').SequenceIter;
  /**
    * Returns an iterator pointing to the previous position before self. If self is the begin iterator, the begin iterator is returned.
    * @returns a GLib.SequenceIter pointing to the previous position before self 
    */
  prev(): import('../GLib').SequenceIter;
}

