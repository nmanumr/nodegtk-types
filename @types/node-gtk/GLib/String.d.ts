/**
  * The GLib.String struct contains the public fields of a GLib.String. 
  */
export declare class String {
  /**
    * Adds a string onto the end of a GLib.String, expanding it if necessary.
    * @param val the string to append onto the end of self
    * @returns self 
    */
  append(val: string): import('../GLib').String;
  /**
    * Adds a byte onto the end of a GLib.String, expanding it if necessary.
    * @param c the byte to append onto the end of self
    * @returns self 
    */
  appendC(c: number): import('../GLib').String;
  /**
    * Appends len bytes of val to self. Because len is provided, val may contain embedded nuls and need not be nul-terminated.
    * @param val bytes to append
    * @param len number of bytes of val to use
    * @returns self 
    */
  appendLen(val: string, len: number): import('../GLib').String;
  /**
    * Converts a Unicode character into UTF-8, and appends it to the string.
    * @param wc a Unicode character
    * @returns self 
    */
  appendUnichar(wc: string): import('../GLib').String;
  /**
    * Appends unescaped to self, escaped any characters that are reserved in URIs using URI-style escape sequences.
    * @param unescaped a string
    * @param reservedCharsAllowed a string of reserved characters allowed to be used, or None
    * @param allowUtf8 set True if the escaped string may include UTF8 characters
    * @returns self 
    */
  appendUriEscaped(unescaped: string, reservedCharsAllowed: string, allowUtf8: boolean): import('../GLib').String;
  /**
    * Converts all uppercase ASCII letters to lowercase ASCII letters.
    * @returns passed-in self pointer, with all the uppercase characters converted to lowercase in place, with semantics that exactly match GLib.ascii_tolower(). 
    */
  asciiDown(): import('../GLib').String;
  /**
    * Converts all lowercase ASCII letters to uppercase ASCII letters.
    * @returns passed-in self pointer, with all the lowercase characters converted to uppercase in place, with semantics that exactly match GLib.ascii_toupper(). 
    */
  asciiUp(): import('../GLib').String;
  /**
    * Copies the bytes from a string into a GLib.String, destroying any previous contents. It is rather like the standard strcpy() function, except that you do not have to worry about having enough space to copy the string.
    * @param rval the string to copy into self
    * @returns self 
    */
  assign(rval: string): import('../GLib').String;
  /**
    * Converts a GLib.String to lowercase.
    * @returns the GLib.String 
    */
  down(): import('../GLib').String;
  /**
    * Compares two strings for equality, returning True if they are equal. For use with GLib.HashTable.
    * @param v2 another GLib.String
    * @returns True if the strings are the same length and contain the same bytes 
    */
  equal(v2: import('../GLib').String): boolean;
  /**
    * Removes len bytes from a GLib.String, starting at position pos. The rest of the GLib.String is shifted down to fill the gap.
    * @param pos the position of the content to remove
    * @param len the number of bytes to remove, or -1 to remove all following bytes
    * @returns self 
    */
  erase(pos: number, len: number): import('../GLib').String;
  /**
    * Frees the memory allocated for the GLib.String. If free_segment is True it also frees the character data.  If it’s False, the caller gains ownership of the buffer and must free it after use with GLib.free().
    * @param freeSegment if True, the actual character data is freed as well
    * @returns the character data of self (i.e. None if free_segment is True) 
    */
  free(freeSegment: boolean): string | null;
  /**
    * Transfers ownership of the contents of self to a newly allocated GLib.Bytes.  The GLib.String structure itself is deallocated, and it is therefore invalid to use self after invoking this function.
    * @returns A newly allocated GLib.Bytes containing contents of self; self itself is freed 
    */
  freeToBytes(): import('../GLib').Bytes;
  /**
    * Creates a hash code for self; for use with GLib.HashTable.
    * @returns hash code for self 
    */
  hash(): number;
  /**
    * Inserts a copy of a string into a GLib.String, expanding it if necessary.
    * @param pos the position to insert the copy of the string
    * @param val the string to insert
    * @returns self 
    */
  insert(pos: number, val: string): import('../GLib').String;
  /**
    * Inserts a byte into a GLib.String, expanding it if necessary.
    * @param pos the position to insert the byte
    * @param c the byte to insert
    * @returns self 
    */
  insertC(pos: number, c: number): import('../GLib').String;
  /**
    * Inserts len bytes of val into self at pos. Because len is provided, val may contain embedded nuls and need not be nul-terminated. If pos is -1, bytes are inserted at the end of the string.
    * @param pos position in self where insertion should happen, or -1 for at the end
    * @param val bytes to insert
    * @param len number of bytes of val to insert
    * @returns self 
    */
  insertLen(pos: number, val: string, len: number): import('../GLib').String;
  /**
    * Converts a Unicode character into UTF-8, and insert it into the string at the given position.
    * @param pos the position at which to insert character, or -1 to append at the end of the string
    * @param wc a Unicode character
    * @returns self 
    */
  insertUnichar(pos: number, wc: string): import('../GLib').String;
  /**
    * Overwrites part of a string, lengthening it if necessary.
    * @param pos the position at which to start overwriting
    * @param val the string that will overwrite the self starting at pos
    * @returns self 
    */
  overwrite(pos: number, val: string): import('../GLib').String;
  /**
    * Overwrites part of a string, lengthening it if necessary. This function will work with embedded nuls.
    * @param pos the position at which to start overwriting
    * @param val the string that will overwrite the self starting at pos
    * @param len the number of bytes to write from val
    * @returns self 
    */
  overwriteLen(pos: number, val: string, len: number): import('../GLib').String;
  /**
    * Adds a string on to the start of a GLib.String, expanding it if necessary.
    * @param val the string to prepend on the start of self
    * @returns self 
    */
  prepend(val: string): import('../GLib').String;
  /**
    * Adds a byte onto the start of a GLib.String, expanding it if necessary.
    * @param c the byte to prepend on the start of the GLib.String
    * @returns self 
    */
  prependC(c: number): import('../GLib').String;
  /**
    * Prepends len bytes of val to self. Because len is provided, val may contain embedded nuls and need not be nul-terminated.
    * @param val bytes to prepend
    * @param len number of bytes in val to prepend
    * @returns self 
    */
  prependLen(val: string, len: number): import('../GLib').String;
  /**
    * Converts a Unicode character into UTF-8, and prepends it to the string.
    * @param wc a Unicode character
    * @returns self 
    */
  prependUnichar(wc: string): import('../GLib').String;
  /**
    * Sets the length of a GLib.String. If the length is less than the current length, the string will be truncated. If the length is greater than the current length, the contents of the newly added area are undefined. (However, as always, string->str[string->len] will be a nul byte.)
    * @param len the new length
    * @returns self 
    */
  setSize(len: number): import('../GLib').String;
  /**
    * Cuts off the end of the GLib.String, leaving the first len bytes.
    * @param len the new size of self
    * @returns self 
    */
  truncate(len: number): import('../GLib').String;
  /**
    * Converts a GLib.String to uppercase.
    * @returns self 
    */
  up(): import('../GLib').String;
}

