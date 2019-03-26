export declare class TreePath {
  /**
    * Creates a new Gtk.TreePath-struct. This refers to a row.
    * @returns A newly created Gtk.TreePath-struct. 
    */
  static new(): import('../Gtk').TreePath;
  /**
    * Creates a new Gtk.TreePath-struct.
    * @returns A new Gtk.TreePath-struct 
    */
  static newFirst(): import('../Gtk').TreePath;
  /**
    * Creates a new path with the given indices array of length.
    * @param indices array of indices
    * @returns A newly created Gtk.TreePath-struct 
    */
  static newFromIndices(indices: number): import('../Gtk').TreePath;
  /**
    * Creates a new Gtk.TreePath-struct initialized to path.
    * @param path The string representation of a path
    * @returns A newly-created Gtk.TreePath-struct, or None 
    */
  static newFromString(path: string): import('../Gtk').TreePath;
  /**
    * Appends a new index to a path.
    * @param index the index 
    */
  appendIndex(index: number): void;
  /**
    * Compares two paths.
    * @param b a Gtk.TreePath-struct to compare with
    * @returns the relative positions of self and b 
    */
  compare(b: import('../Gtk').TreePath): number;
  /**
    * Creates a new Gtk.TreePath-struct as a copy of self.
    * @returns a new Gtk.TreePath-struct 
    */
  copy(): import('../Gtk').TreePath;
  /**
    * Moves self to point to the first child of the current path. 
    */
  down(): void;
  /**
    * Frees self. If self is None, it simply returns. 
    */
  free(): void;
  /**
    * Returns the current depth of self.
    * @returns The depth of self 
    */
  getDepth(): number;
  /**
    * Returns the current indices of self.
    * @returns The current indices, or None 
    */
  getIndices(): number[];
  /**
    * Returns True if descendant is a descendant of self.
    * @param descendant another Gtk.TreePath-struct
    * @returns True if descendant is contained inside self 
    */
  isAncestor(descendant: import('../Gtk').TreePath): boolean;
  /**
    * Returns True if self is a descendant of ancestor.
    * @param ancestor another Gtk.TreePath-struct
    * @returns True if ancestor contains self somewhere below it 
    */
  isDescendant(ancestor: import('../Gtk').TreePath): boolean;
  /**
    * Moves the self to point to the next node at the current depth. 
    */
  next(): void;
  /**
    * Prepends a new index to a path.
    * @param index the index 
    */
  prependIndex(index: number): void;
  /**
    * Moves the self to point to the previous node at the current depth, if it exists.
    * @returns True if self has a previous node, and the move was made 
    */
  prev(): boolean;
  /**
    * Generates a string representation of the path.
    * @returns A newly-allocated string. Must be freed with GLib.free(). 
    */
  toString(): string;
  /**
    * Moves the self to point to its parent node, if it has a parent.
    * @returns True if self has a parent, and the move was made 
    */
  up(): boolean;
}

