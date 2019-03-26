import * as GObject from '../GObject';
export declare interface UnixFDList extends GObject.Object { }

/**
  * A Gio.UnixFDList contains a list of file descriptors.  It owns the file
descriptors that it contains, closing them when finalized. 
  */
export declare class UnixFDList {
  /**
    * Creates a new Gio.UnixFDList containing no file descriptors.
    * @returns a new Gio.UnixFDList 
    */
  static new(): import('../Gio').UnixFDList;
  /**
    * Creates a new Gio.UnixFDList containing the file descriptors given in fds.  The file descriptors become the property of the new list and may no longer be used by the caller.  The array itself is owned by the caller.
    * @param fds the initial list of file descriptors
    * @returns a new Gio.UnixFDList 
    */
  static newFromArray(fds: number): import('../Gio').UnixFDList;
  /**
    * Adds a file descriptor to self.
    * @param fd a valid open file descriptor
    * @returns the index of the appended fd in case of success, else -1 (and error is set) 
    */
  append(fd: number): number;
  /**
    * Gets a file descriptor out of self.
    * @param index the index into the list
    * @returns the file descriptor, or -1 in case of error 
    */
  get(index: number): number;
  /**
    * Gets the length of self (ie: the number of file descriptors contained within).
    * @returns the length of self 
    */
  getLength(): number;
  /**
    * Returns the array of file descriptors that is contained in this object.
    * @returns an array of file descriptors 
    */
  peekFds(): number[];
  /**
    * Returns the array of file descriptors that is contained in this object.
    * @returns an array of file descriptors 
    */
  stealFds(): number[];
}

