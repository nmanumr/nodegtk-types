/**
  * An opaque data structure representing String Chunks.
It should only be accessed by using the following functions. 
  */
export declare class StringChunk {
  /**
    * Frees all strings contained within the GLib.StringChunk. After calling GLib.StringChunk.clear() it is not safe to access any of the strings which were contained within it. 
    */
  clear(): void;
  /**
    * Frees all memory allocated by the GLib.StringChunk. After calling GLib.StringChunk.free() it is not safe to access any of the strings which were contained within it. 
    */
  free(): void;
  /**
    * Adds a copy of string to the GLib.StringChunk. It returns a pointer to the new copy of the string in the GLib.StringChunk. The characters in the string can be changed, if necessary, though you should not change anything after the end of the string.
    * @param string the string to add
    * @returns a pointer to the copy of string within the GLib.StringChunk 
    */
  insert(string: string): string;
  /**
    * Adds a copy of string to the GLib.StringChunk, unless the same string has already been added to the GLib.StringChunk with GLib.StringChunk.insert_const().
    * @param string the string to add
    * @returns a pointer to the new or existing copy of string within the GLib.StringChunk 
    */
  insertConst(string: string): string;
  /**
    * Adds a copy of the first len bytes of string to the GLib.StringChunk. The copy is nul-terminated.
    * @param string bytes to insert
    * @param len number of bytes of string to insert, or -1 to insert a nul-terminated string
    * @returns a pointer to the copy of string within the GLib.StringChunk 
    */
  insertLen(string: string, len: number): string;
}

