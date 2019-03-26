/**
  * You may wish to begin by reading the
text widget conceptual overview
which gives an overview of all the objects and data
types related to the text widget and how they work together. 
  */
export declare class TextIter {
  /**
    * Assigns the value of other to self.  This function is not useful in applications, because iterators can be assigned with GtkTextIter i = j;. The function is used by language bindings.
    * @param other another Gtk.TextIter 
    */
  assign(other: import('../Gtk').TextIter): void;
  /**
    * Moves backward by one character offset. Returns True if movement was possible; if self was the first in the buffer (character offset 0), Gtk.TextIter.backward_char() returns False for convenience when writing loops.
    * @returns whether movement was possible 
    */
  backwardChar(): boolean;
  /**
    * Moves count characters backward, if possible (if count would move past the start or end of the buffer, moves to the start or end of the buffer).  The return value indicates whether the iterator moved onto a dereferenceable position; if the iterator didn’t move, or moved onto the end iterator, then False is returned. If count is 0, the function does nothing and returns False.
    * @param count number of characters to move
    * @returns whether self moved and is dereferenceable 
    */
  backwardChars(count: number): boolean;
  /**
    * Like Gtk.TextIter.forward_cursor_position(), but moves backward.
    * @returns True if we moved 
    */
  backwardCursorPosition(): boolean;
  /**
    * Moves up to count cursor positions. See Gtk.TextIter.forward_cursor_position() for details.
    * @param count number of positions to move
    * @returns True if we moved and the new position is dereferenceable 
    */
  backwardCursorPositions(count: number): boolean;
  /**
    * Same as Gtk.TextIter.forward_find_char(), but goes backward from self.
    * @param pred function to be called on each character
    * @param userData user data for pred
    * @param limit search limit, or None for none
    * @returns whether a match was found 
    */
  backwardFindChar(pred: import('../Gtk').textCharPredicate, userData: Object | null, limit: import('../Gtk').TextIter | null): boolean;
  /**
    * Moves self to the start of the previous line. Returns True if self could be moved; i.e. if self was at character offset 0, this function returns False. Therefore if self was already on line 0, but not at the start of the line, self is snapped to the start of the line and the function returns True. (Note that this implies that in a loop calling this function, the line number may not change on every iteration, if your first iteration is on line 0.)
    * @returns whether self moved 
    */
  backwardLine(): boolean;
  /**
    * Moves count lines backward, if possible (if count would move past the start or end of the buffer, moves to the start or end of the buffer).  The return value indicates whether the iterator moved onto a dereferenceable position; if the iterator didn’t move, or moved onto the end iterator, then False is returned. If count is 0, the function does nothing and returns False. If count is negative, moves forward by 0 - count lines.
    * @param count number of lines to move backward
    * @returns whether self moved and is dereferenceable 
    */
  backwardLines(count: number): boolean;
  /**
    * Same as Gtk.TextIter.forward_search(), but moves backward.
    * @param str search string
    * @param flags bitmask of flags affecting the search
    * @param limit location of last possible match_start, or None for start of buffer
    * @returns None if not match was found otherwise a tuple containing:   match_start:start of match match_end:end of match 
    */
  backwardSearch(str: string, flags: import('../Gtk').TextSearchFlags, limit: import('../Gtk').TextIter | null): [import('../Gtk').TextIter, import('../Gtk').TextIter | null];
  /**
    * Moves backward to the previous sentence start; if self is already at the start of a sentence, moves backward to the next one.  Sentence boundaries are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango text boundary algorithms).
    * @returns True if self moved and is not the end iterator 
    */
  backwardSentenceStart(): boolean;
  /**
    * Calls Gtk.TextIter.backward_sentence_start() up to count times, or until it returns False. If count is negative, moves forward instead of backward.
    * @param count number of sentences to move
    * @returns True if self moved and is not the end iterator 
    */
  backwardSentenceStarts(count: number): boolean;
  /**
    * Moves backward to the next toggle (on or off) of the Gtk.TextTag tag, or to the next toggle of any tag if tag is None. If no matching tag toggles are found, returns False, otherwise True. Does not return toggles located at self, only toggles before self. Sets self to the location of the toggle, or the start of the buffer if no toggle is found.
    * @param tag a Gtk.TextTag, or None
    * @returns whether we found a tag toggle before self 
    */
  backwardToTagToggle(tag: import('../Gtk').TextTag | null): boolean;
  /**
    * Moves self forward to the previous visible cursor position. See Gtk.TextIter.backward_cursor_position() for details.
    * @returns True if we moved and the new position is dereferenceable 
    */
  backwardVisibleCursorPosition(): boolean;
  /**
    * Moves up to count visible cursor positions. See Gtk.TextIter.backward_cursor_position() for details.
    * @param count number of positions to move
    * @returns True if we moved and the new position is dereferenceable 
    */
  backwardVisibleCursorPositions(count: number): boolean;
  /**
    * Moves self to the start of the previous visible line. Returns True if self could be moved; i.e. if self was at character offset 0, this function returns False. Therefore if self was already on line 0, but not at the start of the line, self is snapped to the start of the line and the function returns True. (Note that this implies that in a loop calling this function, the line number may not change on every iteration, if your first iteration is on line 0.)
    * @returns whether self moved 
    */
  backwardVisibleLine(): boolean;
  /**
    * Moves count visible lines backward, if possible (if count would move past the start or end of the buffer, moves to the start or end of the buffer).  The return value indicates whether the iterator moved onto a dereferenceable position; if the iterator didn’t move, or moved onto the end iterator, then False is returned. If count is 0, the function does nothing and returns False. If count is negative, moves forward by 0 - count lines.
    * @param count number of lines to move backward
    * @returns whether self moved and is dereferenceable 
    */
  backwardVisibleLines(count: number): boolean;
  /**
    * Moves backward to the previous visible word start. (If self is currently on a word start, moves backward to the next one after that.) Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self moved and is not the end iterator 
    */
  backwardVisibleWordStart(): boolean;
  /**
    * Calls Gtk.TextIter.backward_visible_word_start() up to count times.
    * @param count number of times to move
    * @returns True if self moved and is not the end iterator 
    */
  backwardVisibleWordStarts(count: number): boolean;
  /**
    * Moves backward to the previous word start. (If self is currently on a word start, moves backward to the next one after that.) Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self moved and is not the end iterator 
    */
  backwardWordStart(): boolean;
  /**
    * Calls Gtk.TextIter.backward_word_start() up to count times.
    * @param count number of times to move
    * @returns True if self moved and is not the end iterator 
    */
  backwardWordStarts(count: number): boolean;
  /**
    * Returns True if tag is toggled on at exactly this point. If tag is None, returns True if any tag is toggled on at this point.
    * @param tag a Gtk.TextTag, or None
    * @returns whether self is the start of a range tagged with tag 
    */
  beginsTag(tag: import('../Gtk').TextTag | null): boolean;
  /**
    * Considering the default editability of the buffer, and tags that affect editability, determines whether text inserted at self would be editable. If text inserted at self would be editable then the user should be allowed to insert text at self. Gtk.TextBuffer.insert_interactive() uses this function to decide whether insertions are allowed at a given position.
    * @param defaultEditability True if text is editable by default
    * @returns whether text inserted at self would be editable 
    */
  canInsert(defaultEditability: boolean): boolean;
  /**
    * A qsort()-style function that returns negative if self is less than rhs, positive if self is greater than rhs, and 0 if they’re equal. Ordering is in character offset order, i.e. the first character in the buffer is less than the second character in the buffer.
    * @param rhs another Gtk.TextIter
    * @returns -1 if self is less than rhs, 1 if self is greater, 0 if they are equal 
    */
  compare(rhs: import('../Gtk').TextIter): number;
  /**
    * Creates a dynamically-allocated copy of an iterator. This function is not useful in applications, because iterators can be copied with a simple assignment (GtkTextIter i = j;). The function is used by language bindings.
    * @returns a copy of the self, free with Gtk.TextIter.free() 
    */
  copy(): import('../Gtk').TextIter;
  /**
    * Returns whether the character at self is within an editable region of text.  Non-editable text is “locked” and can’t be changed by the user via Gtk.TextView. This function is simply a convenience wrapper around Gtk.TextIter.get_attributes(). If no tags applied to this text affect editability, default_setting will be returned.
    * @param defaultSetting True if text is editable by default
    * @returns whether self is inside an editable range 
    */
  editable(defaultSetting: boolean): boolean;
  /**
    * Returns True if self points to the start of the paragraph delimiter characters for a line (delimiters will be either a newline, a carriage return, a carriage return followed by a newline, or a Unicode paragraph separator character). Note that an iterator pointing to the \n of a \r\n pair will not be counted as the end of a line, the line ends before the \r. The end iterator is considered to be at the end of a line, even though there are no paragraph delimiter chars there.
    * @returns whether self is at the end of a line 
    */
  endsLine(): boolean;
  /**
    * Determines whether self ends a sentence.  Sentence boundaries are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango text boundary algorithms).
    * @returns True if self is at the end of a sentence. 
    */
  endsSentence(): boolean;
  /**
    * Returns True if tag is toggled off at exactly this point. If tag is None, returns True if any tag is toggled off at this point.
    * @param tag a Gtk.TextTag, or None
    * @returns whether self is the end of a range tagged with tag 
    */
  endsTag(tag: import('../Gtk').TextTag | null): boolean;
  /**
    * Determines whether self ends a natural-language word.  Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self is at the end of a word 
    */
  endsWord(): boolean;
  /**
    * Tests whether two iterators are equal, using the fastest possible mechanism. This function is very fast; you can expect it to perform better than e.g. getting the character offset for each iterator and comparing the offsets yourself. Also, it’s a bit faster than Gtk.TextIter.compare().
    * @param rhs another Gtk.TextIter
    * @returns True if the iterators point to the same place in the buffer 
    */
  equal(rhs: import('../Gtk').TextIter): boolean;
  /**
    * Moves self forward by one character offset. Note that images embedded in the buffer occupy 1 character slot, so Gtk.TextIter.forward_char() may actually move onto an image instead of a character, if you have images in your buffer.  If self is the end iterator or one character before it, self will now point at the end iterator, and Gtk.TextIter.forward_char() returns False for convenience when writing loops.
    * @returns whether self moved and is dereferenceable 
    */
  forwardChar(): boolean;
  /**
    * Moves count characters if possible (if count would move past the start or end of the buffer, moves to the start or end of the buffer). The return value indicates whether the new position of self is different from its original position, and dereferenceable (the last iterator in the buffer is not dereferenceable). If count is 0, the function does nothing and returns False.
    * @param count number of characters to move, may be negative
    * @returns whether self moved and is dereferenceable 
    */
  forwardChars(count: number): boolean;
  /**
    * Moves self forward by a single cursor position. Cursor positions are (unsurprisingly) positions where the cursor can appear. Perhaps surprisingly, there may not be a cursor position between all characters. The most common example for European languages would be a carriage return/newline sequence. For some Unicode characters, the equivalent of say the letter “a” with an accent mark will be represented as two characters, first the letter then a “combining mark” that causes the accent to be rendered; so the cursor can’t go between those two characters. See also the Pango.LogAttr-struct and Pango.break_() function.
    * @returns True if we moved and the new position is dereferenceable 
    */
  forwardCursorPosition(): boolean;
  /**
    * Moves up to count cursor positions. See Gtk.TextIter.forward_cursor_position() for details.
    * @param count number of positions to move
    * @returns True if we moved and the new position is dereferenceable 
    */
  forwardCursorPositions(count: number): boolean;
  /**
    * Advances self, calling pred on each character. If pred returns True, returns True and stops scanning. If pred never returns True, self is set to limit if limit is non-None, otherwise to the end iterator.
    * @param pred a function to be called on each character
    * @param userData user data for pred
    * @param limit search limit, or None for none
    * @returns whether a match was found 
    */
  forwardFindChar(pred: import('../Gtk').textCharPredicate, userData: Object | null, limit: import('../Gtk').TextIter | null): boolean;
  /**
    * Moves self to the start of the next line. If the iter is already on the last line of the buffer, moves the iter to the end of the current line. If after the operation, the iter is at the end of the buffer and not dereferencable, returns False. Otherwise, returns True.
    * @returns whether self can be dereferenced 
    */
  forwardLine(): boolean;
  /**
    * Moves count lines forward, if possible (if count would move past the start or end of the buffer, moves to the start or end of the buffer).  The return value indicates whether the iterator moved onto a dereferenceable position; if the iterator didn’t move, or moved onto the end iterator, then False is returned. If count is 0, the function does nothing and returns False. If count is negative, moves backward by 0 - count lines.
    * @param count number of lines to move forward
    * @returns whether self moved and is dereferenceable 
    */
  forwardLines(count: number): boolean;
  /**
    * Searches forward for str. Any match is returned by setting match_start to the first character of the match and match_end to the first character after the match. The search will not continue past limit. Note that a search is a linear or O(n) operation, so you may wish to use limit to avoid locking up your UI on large buffers.
    * @param str a search string
    * @param flags flags affecting how the search is done
    * @param limit location of last possible match_end, or None for the end of the buffer
    * @returns If no match was found returns None otherwise a tuple containing:   match_start:start of match match_end:end of match 
    */
  forwardSearch(str: string, flags: import('../Gtk').TextSearchFlags, limit: import('../Gtk').TextIter | null): [import('../Gtk').TextIter, import('../Gtk').TextIter | null];
  /**
    * Moves forward to the next sentence end. (If self is at the end of a sentence, moves to the next end of sentence.)  Sentence boundaries are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango text boundary algorithms).
    * @returns True if self moved and is not the end iterator 
    */
  forwardSentenceEnd(): boolean;
  /**
    * Calls Gtk.TextIter.forward_sentence_end() count times (or until Gtk.TextIter.forward_sentence_end() returns False). If count is negative, moves backward instead of forward.
    * @param count number of sentences to move
    * @returns True if self moved and is not the end iterator 
    */
  forwardSentenceEnds(count: number): boolean;
  /**
    * Moves self forward to the “end iterator,” which points one past the last valid character in the buffer. Gtk.TextIter.get_char() called on the end iterator returns 0, which is convenient for writing loops. 
    */
  forwardToEnd(): void;
  /**
    * Moves the iterator to point to the paragraph delimiter characters, which will be either a newline, a carriage return, a carriage return/newline in sequence, or the Unicode paragraph separator character. If the iterator is already at the paragraph delimiter characters, moves to the paragraph delimiter characters for the next line. If self is on the last line in the buffer, which does not end in paragraph delimiters, moves to the end iterator (end of the last line), and returns False.
    * @returns True if we moved and the new location is not the end iterator 
    */
  forwardToLineEnd(): boolean;
  /**
    * Moves forward to the next toggle (on or off) of the Gtk.TextTag tag, or to the next toggle of any tag if tag is None. If no matching tag toggles are found, returns False, otherwise True. Does not return toggles located at self, only toggles after self. Sets self to the location of the toggle, or to the end of the buffer if no toggle is found.
    * @param tag a Gtk.TextTag, or None
    * @returns whether we found a tag toggle after self 
    */
  forwardToTagToggle(tag: import('../Gtk').TextTag | null): boolean;
  /**
    * Moves self forward to the next visible cursor position. See Gtk.TextIter.forward_cursor_position() for details.
    * @returns True if we moved and the new position is dereferenceable 
    */
  forwardVisibleCursorPosition(): boolean;
  /**
    * Moves up to count visible cursor positions. See Gtk.TextIter.forward_cursor_position() for details.
    * @param count number of positions to move
    * @returns True if we moved and the new position is dereferenceable 
    */
  forwardVisibleCursorPositions(count: number): boolean;
  /**
    * Moves self to the start of the next visible line. Returns True if there was a next line to move to, and False if self was simply moved to the end of the buffer and is now not dereferenceable, or if self was already at the end of the buffer.
    * @returns whether self can be dereferenced 
    */
  forwardVisibleLine(): boolean;
  /**
    * Moves count visible lines forward, if possible (if count would move past the start or end of the buffer, moves to the start or end of the buffer).  The return value indicates whether the iterator moved onto a dereferenceable position; if the iterator didn’t move, or moved onto the end iterator, then False is returned. If count is 0, the function does nothing and returns False. If count is negative, moves backward by 0 - count lines.
    * @param count number of lines to move forward
    * @returns whether self moved and is dereferenceable 
    */
  forwardVisibleLines(count: number): boolean;
  /**
    * Moves forward to the next visible word end. (If self is currently on a word end, moves forward to the next one after that.) Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self moved and is not the end iterator 
    */
  forwardVisibleWordEnd(): boolean;
  /**
    * Calls Gtk.TextIter.forward_visible_word_end() up to count times.
    * @param count number of times to move
    * @returns True if self moved and is not the end iterator 
    */
  forwardVisibleWordEnds(count: number): boolean;
  /**
    * Moves forward to the next word end. (If self is currently on a word end, moves forward to the next one after that.) Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self moved and is not the end iterator 
    */
  forwardWordEnd(): boolean;
  /**
    * Calls Gtk.TextIter.forward_word_end() up to count times.
    * @param count number of times to move
    * @returns True if self moved and is not the end iterator 
    */
  forwardWordEnds(count: number): boolean;
  /**
    * Free an iterator allocated on the heap. This function is intended for use in language bindings, and is not especially useful for applications, because iterators can simply be allocated on the stack. 
    */
  free(): void;
  /**
    * Computes the effect of any tags applied to this spot in the text. The values parameter should be initialized to the default settings you wish to use if no tags are in effect. You’d typically obtain the defaults from Gtk.TextView.get_default_attributes().
    * @returns True if values was modified  values:a Gtk.TextAttributes to be filled in 
    */
  getAttributes(): [boolean, import('../Gtk').TextAttributes];
  /**
    * Returns the Gtk.TextBuffer this iterator is associated with.
    * @returns the buffer 
    */
  getBuffer(): import('../Gtk').TextBuffer;
  /**
    * Returns the number of bytes in the line containing self, including the paragraph delimiters.
    * @returns number of bytes in the line 
    */
  getBytesInLine(): number;
  /**
    * The Unicode character at this iterator is returned.  (Equivalent to operator* on a C++ iterator.)  If the element at this iterator is a non-character element, such as an image embedded in the buffer, the Unicode “unknown” character 0xFFFC is returned. If invoked on the end iterator, zero is returned; zero is not a valid Unicode character. So you can write a loop which ends when Gtk.TextIter.get_char() returns 0.
    * @returns a Unicode character, or 0 if self is not dereferenceable 
    */
  getChar(): string;
  /**
    * Returns the number of characters in the line containing self, including the paragraph delimiters.
    * @returns number of characters in the line 
    */
  getCharsInLine(): number;
  /**
    * If the location at self contains a child anchor, the anchor is returned (with no new reference count added). Otherwise, None is returned.
    * @returns the anchor at self 
    */
  getChildAnchor(): import('../Gtk').TextChildAnchor;
  /**
    * A convenience wrapper around Gtk.TextIter.get_attributes(), which returns the language in effect at self. If no tags affecting language apply to self, the return value is identical to that of Gtk.get_default_language().
    * @returns language in effect at self 
    */
  getLanguage(): import('../Pango').Language;
  /**
    * Returns the line number containing the iterator. Lines in a Gtk.TextBuffer are numbered beginning with 0 for the first line in the buffer.
    * @returns a line number 
    */
  getLine(): number;
  /**
    * Returns the byte index of the iterator, counting from the start of a newline-terminated line. Remember that Gtk.TextBuffer encodes text in UTF-8, and that characters can require a variable number of bytes to represent.
    * @returns distance from start of line, in bytes 
    */
  getLineIndex(): number;
  /**
    * Returns the character offset of the iterator, counting from the start of a newline-terminated line. The first character on the line has offset 0.
    * @returns offset from start of line 
    */
  getLineOffset(): number;
  /**
    * Returns a list of all Gtk.TextMark at this location. Because marks are not iterable (they don’t take up any “space” in the buffer, they are just marks in between iterable locations), multiple marks can exist in the same place. The returned list is not in any meaningful order.
    * @returns list of Gtk.TextMark 
    */
  getMarks(): import('../Gtk').TextMark[];
  /**
    * Returns the character offset of an iterator. Each character in a Gtk.TextBuffer has an offset, starting with 0 for the first character in the buffer. Use Gtk.TextBuffer.get_iter_at_offset() to convert an offset back into an iterator.
    * @returns a character offset 
    */
  getOffset(): number;
  /**
    * If the element at self is a pixbuf, the pixbuf is returned (with no new reference count added). Otherwise, None is returned.
    * @returns the pixbuf at self 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf;
  /**
    * Returns the text in the given range. A “slice” is an array of characters encoded in UTF-8 format, including the Unicode “unknown” character 0xFFFC for iterable non-character elements in the buffer, such as images.  Because images are encoded in the slice, byte and character offsets in the returned array will correspond to byte offsets in the text buffer. Note that 0xFFFC can occur in normal text as well, so it is not a reliable indicator that a pixbuf or widget is in the buffer.
    * @param end iterator at end of a range
    * @returns slice of text from the buffer 
    */
  getSlice(end: import('../Gtk').TextIter): string;
  /**
    * Returns a list of tags that apply to self, in ascending order of priority (highest-priority tags are last). The Gtk.TextTag in the list don’t have a reference added, but you have to free the list itself.
    * @returns list of Gtk.TextTag 
    */
  getTags(): import('../Gtk').TextTag[];
  /**
    * Returns text in the given range.  If the range contains non-text elements such as images, the character and byte offsets in the returned string will not correspond to character and byte offsets in the buffer. If you want offsets to correspond, see Gtk.TextIter.get_slice().
    * @param end iterator at end of a range
    * @returns array of characters from the buffer 
    */
  getText(end: import('../Gtk').TextIter): string;
  /**
    * Returns a list of Gtk.TextTag that are toggled on or off at this point.  (If toggled_on is True, the list contains tags that are toggled on.) If a tag is toggled on at self, then some non-empty range of characters following self has that tag applied to it.  If a tag is toggled off, then some non-empty range following self does not have the tag applied to it.
    * @param toggledOn True to get toggled-on tags
    * @returns tags toggled at this point 
    */
  getToggledTags(toggledOn: boolean): import('../Gtk').TextTag[];
  /**
    * Returns the number of bytes from the start of the line to the given self, not counting bytes that are invisible due to tags with the “invisible” flag toggled on.
    * @returns byte index of self with respect to the start of the line 
    */
  getVisibleLineIndex(): number;
  /**
    * Returns the offset in characters from the start of the line to the given self, not counting characters that are invisible due to tags with the “invisible” flag toggled on.
    * @returns offset in visible characters from the start of the line 
    */
  getVisibleLineOffset(): number;
  /**
    * Like Gtk.TextIter.get_slice(), but invisible text is not included. Invisible text is usually invisible because a Gtk.TextTag with the “invisible” attribute turned on has been applied to it.
    * @param end iterator at end of range
    * @returns slice of text from the buffer 
    */
  getVisibleSlice(end: import('../Gtk').TextIter): string;
  /**
    * Like Gtk.TextIter.get_text(), but invisible text is not included. Invisible text is usually invisible because a Gtk.TextTag with the “invisible” attribute turned on has been applied to it.
    * @param end iterator at end of range
    * @returns string containing visible text in the range 
    */
  getVisibleText(end: import('../Gtk').TextIter): string;
  /**
    * Returns True if self points to a character that is part of a range tagged with tag. See also Gtk.TextIter.starts_tag() and Gtk.TextIter.ends_tag().
    * @param tag a Gtk.TextTag
    * @returns whether self is tagged with tag 
    */
  hasTag(tag: import('../Gtk').TextTag): boolean;
  /**
    * Checks whether self falls in the range [start, end). start and end must be in ascending order.
    * @param start start of range
    * @param end end of range
    * @returns True if self is in the range 
    */
  inRange(start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): boolean;
  /**
    * Determines whether self is inside a sentence (as opposed to in between two sentences, e.g. after a period and before the first letter of the next sentence).  Sentence boundaries are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango text boundary algorithms).
    * @returns True if self is inside a sentence. 
    */
  insideSentence(): boolean;
  /**
    * Determines whether the character pointed by self is part of a natural-language word (as opposed to say inside some whitespace).  Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self is inside a word 
    */
  insideWord(): boolean;
  /**
    * See Gtk.TextIter.forward_cursor_position() or Pango.LogAttr or Pango.break_() for details on what a cursor position is.
    * @returns True if the cursor can be placed at self 
    */
  isCursorPosition(): boolean;
  /**
    * Returns True if self is the end iterator, i.e. one past the last dereferenceable iterator in the buffer. Gtk.TextIter.is_end() is the most efficient way to check whether an iterator is the end iterator.
    * @returns whether self is the end iterator 
    */
  isEnd(): boolean;
  /**
    * Returns True if self is the first iterator in the buffer, that is if self has a character offset of 0.
    * @returns whether self is the first in the buffer 
    */
  isStart(): boolean;
  /**
    * Swaps the value of self and second if second comes before self in the buffer. That is, ensures that self and second are in sequence. Most text buffer functions that take a range call this automatically on your behalf, so there’s no real reason to call it yourself in those cases. There are some exceptions, such as Gtk.TextIter.in_range(), that expect a pre-sorted range.
    * @param second another Gtk.TextIter 
    */
  order(second: import('../Gtk').TextIter): void;
  /**
    * Moves iterator self to the start of the line line_number.  If line_number is negative or larger than the number of lines in the buffer, moves self to the start of the last line in the buffer.
    * @param lineNumber line number (counted from 0) 
    */
  setLine(lineNumber: number): void;
  /**
    * Same as Gtk.TextIter.set_line_offset(), but works with a byte index. The given byte index must be at the start of a character, it can’t be in the middle of a UTF-8 encoded character.
    * @param byteOnLine a byte index relative to the start of self’s current line 
    */
  setLineIndex(byteOnLine: number): void;
  /**
    * Moves self within a line, to a new character (not byte) offset. The given character offset must be less than or equal to the number of characters in the line; if equal, self moves to the start of the next line. See Gtk.TextIter.set_line_index() if you have a byte index rather than a character offset.
    * @param charOnLine a character offset relative to the start of self’s current line 
    */
  setLineOffset(charOnLine: number): void;
  /**
    * Sets self to point to char_offset. char_offset counts from the start of the entire text buffer, starting with 0.
    * @param charOffset a character number 
    */
  setOffset(charOffset: number): void;
  /**
    * Like Gtk.TextIter.set_line_index(), but the index is in visible bytes, i.e. text with a tag making it invisible is not counted in the index.
    * @param byteOnLine a byte index 
    */
  setVisibleLineIndex(byteOnLine: number): void;
  /**
    * Like Gtk.TextIter.set_line_offset(), but the offset is in visible characters, i.e. text with a tag making it invisible is not counted in the offset.
    * @param charOnLine a character offset 
    */
  setVisibleLineOffset(charOnLine: number): void;
  /**
    * Returns True if self begins a paragraph, i.e. if Gtk.TextIter.get_line_offset() would return 0. However this function is potentially more efficient than Gtk.TextIter.get_line_offset() because it doesn’t have to compute the offset, it just has to see whether it’s 0.
    * @returns whether self begins a line 
    */
  startsLine(): boolean;
  /**
    * Determines whether self begins a sentence.  Sentence boundaries are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango text boundary algorithms).
    * @returns True if self is at the start of a sentence. 
    */
  startsSentence(): boolean;
  /**
    * Returns True if tag is toggled on at exactly this point. If tag is None, returns True if any tag is toggled on at this point.
    * @param tag a Gtk.TextTag, or None
    * @returns whether self is the start of a range tagged with tag 
    */
  startsTag(tag: import('../Gtk').TextTag | null): boolean;
  /**
    * Determines whether self begins a natural-language word.  Word breaks are determined by Pango and should be correct for nearly any language (if not, the correct fix would be to the Pango word break algorithms).
    * @returns True if self is at the start of a word 
    */
  startsWord(): boolean;
  /**
    * This is equivalent to (Gtk.TextIter.starts_tag() || Gtk.TextIter.ends_tag()), i.e. it tells you whether a range with tag applied to it begins or ends at self.
    * @param tag a Gtk.TextTag, or None
    * @returns whether tag is toggled on or off at self 
    */
  togglesTag(tag: import('../Gtk').TextTag | null): boolean;
}

