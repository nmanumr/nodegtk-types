import * as GObject from '../GObject';
export declare interface TextBuffer extends GObject.Object { }

/**
  * You may wish to begin by reading the
text widget conceptual overview
which gives an overview of all the objects and data
types related to the text widget and how they work together. 
  */
export declare class TextBuffer {
  /**
    * Creates a new text buffer.
    * @param table a tag table, or None to create a new one
    * @returns a new text buffer 
    */
  static new(table: import('../Gtk').TextTagTable | null): import('../Gtk').TextBuffer;
  /**
    * Adds the mark at position where. The mark must not be added to another buffer, and if its name is not None then there must not be another mark in the buffer with the same name.
    * @param mark the mark to add
    * @param where location to place mark 
    */
  addMark(mark: import('../Gtk').TextMark, where: import('../Gtk').TextIter): void;
  /**
    * Adds clipboard to the list of clipboards in which the selection contents of self are available. In most cases, clipboard will be the Gtk.Clipboard of type %GDK_SELECTION_PRIMARY for a view of self.
    * @param clipboard a Gtk.Clipboard 
    */
  addSelectionClipboard(clipboard: import('../Gtk').Clipboard): void;
  /**
    * Emits the “apply-tag” signal on self. The default handler for the signal applies tag to the given range. start and end do not have to be in order.
    * @param tag a Gtk.TextTag
    * @param start one bound of range to be tagged
    * @param end other bound of range to be tagged 
    */
  applyTag(tag: import('../Gtk').TextTag, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * Calls Gtk.TextTagTable.lookup() on the buffer’s tag table to get a Gtk.TextTag, then calls Gtk.TextBuffer.apply_tag().
    * @param name name of a named Gtk.TextTag
    * @param start one bound of range to be tagged
    * @param end other bound of range to be tagged 
    */
  applyTagByName(name: string, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * Performs the appropriate action as if the user hit the delete key with the cursor at the position specified by iter. In the normal case a single character will be deleted, but when combining accents are involved, more than one character can be deleted, and when precomposed character and accent combinations are involved, less than one character will be deleted.
    * @param iter a position in self
    * @param interactive whether the deletion is caused by user interaction
    * @param defaultEditable whether the buffer is editable by default
    * @returns True if the buffer was modified 
    */
  backspace(iter: import('../Gtk').TextIter, interactive: boolean, defaultEditable: boolean): boolean;
  /**
    * Called to indicate that the buffer operations between here and a call to Gtk.TextBuffer.end_user_action() are part of a single user-visible operation. The operations between Gtk.TextBuffer.begin_user_action() and Gtk.TextBuffer.end_user_action() can then be grouped when creating an undo stack. Gtk.TextBuffer maintains a count of calls to Gtk.TextBuffer.begin_user_action() that have not been closed with a call to Gtk.TextBuffer.end_user_action(), and emits the “begin-user-action” and “end-user-action” signals only for the outermost pair of calls. This allows you to build user actions from other user actions. 
    */
  beginUserAction(): void;
  /**
    * Copies the currently-selected text to a clipboard.
    * @param clipboard the Gtk.Clipboard object to copy to 
    */
  copyClipboard(clipboard: import('../Gtk').Clipboard): void;
  /**
    * This is a convenience function which simply creates a child anchor with Gtk.TextChildAnchor.new() and inserts it into the buffer with Gtk.TextBuffer.insert_child_anchor(). The new anchor is owned by the buffer; no reference count is returned to the caller of Gtk.TextBuffer.create_child_anchor().
    * @param iter location in the buffer
    * @returns the created child anchor 
    */
  createChildAnchor(iter: import('../Gtk').TextIter): import('../Gtk').TextChildAnchor;
  /**
    * Creates a mark at position where. If mark_name is None, the mark is anonymous; otherwise, the mark can be retrieved by name using Gtk.TextBuffer.get_mark(). If a mark has left gravity, and text is inserted at the mark’s current location, the mark will be moved to the left of the newly-inserted text. If the mark has right gravity (left_gravity = False), the mark will end up on the right of newly-inserted text. The standard left-to-right cursor is a mark with right gravity (when you type, the cursor stays on the right side of the text you’re typing).
    * @param markName name for mark, or None
    * @param where location to place mark
    * @param leftGravity whether the mark has left gravity
    * @returns the new Gtk.TextMark object 
    */
  createMark(markName: string | null, where: import('../Gtk').TextIter, leftGravity: boolean): import('../Gtk').TextMark;
  /**
    * Creates a tag and adds it to the tag table of the TextBuffer.
    * @param tagName Name of the new tag, or None
    * @param properties **properties – Keyword list of properties and their values 
    * @returns A new tag. 
    */
  createTag(tagName: string, properties): void;
  /**
    * Copies the currently-selected text to a clipboard, then deletes said text if it’s editable.
    * @param clipboard the Gtk.Clipboard object to cut to
    * @param defaultEditable default editability of the buffer 
    */
  cutClipboard(clipboard: import('../Gtk').Clipboard, defaultEditable: boolean): void;
  /**
    * Deletes text between start and end. The order of start and end is not actually relevant; Gtk.TextBuffer.delete() will reorder them. This function actually emits the “delete-range” signal, and the default handler of that signal deletes the text. Because the buffer is modified, all outstanding iterators become invalid after calling this function; however, the start and end will be re-initialized to point to the location where text was deleted.
    * @param start a position in self
    * @param end another position in self 
    */
  delete(start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * Deletes all editable text in the given range. Calls Gtk.TextBuffer.delete() for each editable sub-range of [start,`end`). start and end are revalidated to point to the location of the last deleted range, or left untouched if no text was deleted.
    * @param startIter start of range to delete
    * @param endIter end of range
    * @param defaultEditable whether the buffer is editable by default
    * @returns whether some text was actually deleted 
    */
  deleteInteractive(startIter: import('../Gtk').TextIter, endIter: import('../Gtk').TextIter, defaultEditable: boolean): boolean;
  /**
    * Deletes mark, so that it’s no longer located anywhere in the buffer. Removes the reference the buffer holds to the mark, so if you haven’t called GObject.Object.ref() on the mark, it will be freed. Even if the mark isn’t freed, most operations on mark become invalid, until it gets added to a buffer again with Gtk.TextBuffer.add_mark(). Use Gtk.TextMark.get_deleted() to find out if a mark has been removed from its buffer. The Gtk.TextBuffer ::mark-deleted signal will be emitted as notification after the mark is deleted.
    * @param mark a Gtk.TextMark in self 
    */
  deleteMark(mark: import('../Gtk').TextMark): void;
  /**
    * Deletes the mark named name; the mark must exist. See Gtk.TextBuffer.delete_mark() for details.
    * @param name name of a mark in self 
    */
  deleteMarkByName(name: string): void;
  /**
    * Deletes the range between the “insert” and “selection_bound” marks, that is, the currently-selected text. If interactive is True, the editability of the selection will be considered (users can’t delete uneditable text).
    * @param interactive whether the deletion is caused by user interaction
    * @param defaultEditable whether the buffer is editable by default
    * @returns whether there was a non-empty selection to delete 
    */
  deleteSelection(interactive: boolean, defaultEditable: boolean): boolean;
  /**
    * This function deserializes rich text in format format and inserts it at iter.
    * @param contentBuffer the Gtk.TextBuffer to deserialize into
    * @param format the rich text format to use for deserializing
    * @param iter insertion point for the deserialized text
    * @param data data to deserialize
    * @returns True on success, False otherwise. 
    */
  deserialize(contentBuffer: import('../Gtk').TextBuffer, format: import('../Gdk').Atom, iter: import('../Gtk').TextIter, data: Int8Array): boolean;
  /**
    * This functions returns the value set with Gtk.TextBuffer.deserialize_set_can_create_tags()
    * @param format a Gdk.Atom representing a registered rich text format
    * @returns whether deserializing this format may create tags 
    */
  deserializeGetCanCreateTags(format: import('../Gdk').Atom): boolean;
  /**
    * Use this function to allow a rich text deserialization function to create new tags in the receiving buffer. Note that using this function is almost always a bad idea, because the rich text functions you register should know how to map the rich text format they handler to your text buffers set of tags.
    * @param format a Gdk.Atom representing a registered rich text format
    * @param canCreateTags whether deserializing this format may create tags 
    */
  deserializeSetCanCreateTags(format: import('../Gdk').Atom, canCreateTags: boolean): void;
  /**
    * Should be paired with a call to Gtk.TextBuffer.begin_user_action(). See that function for a full explanation. 
    */
  endUserAction(): void;
  /**
    * Retrieves the first and last iterators in the buffer, i.e. the entire buffer lies within the range [start,`end`).
    * @returns start:iterator to initialize with first position in the buffer end:iterator to initialize with the end iterator 
    */
  getBounds(): [import('../Gtk').TextIter, import('../Gtk').TextIter];
  /**
    * Gets the number of characters in the buffer; note that characters and bytes are not the same, you can’t e.g. expect the contents of the buffer in string form to be this many bytes long. The character count is cached, so this function is very fast.
    * @returns number of characters in the buffer 
    */
  getCharCount(): number;
  /**
    * This function returns the list of targets this text buffer can provide for copying and as DND source. The targets in the list are added with info values from the Gtk.TextBufferTargetInfo enum, using Gtk.TargetList.add_rich_text_targets() and Gtk.TargetList.add_text_targets().
    * @returns the Gtk.TargetList 
    */
  getCopyTargetList(): import('../Gtk').TargetList;
  /**
    * This function returns the rich text deserialize formats registered with self using Gtk.TextBuffer.register_deserialize_format() or Gtk.TextBuffer.register_deserialize_tagset()
    * @returns an array of Gdk.Atoms representing the registered formats. 
    */
  getDeserializeFormats(): import('../Gdk').Atom[];
  /**
    * Initializes iter with the “end iterator,” one past the last valid character in the text buffer. If dereferenced with Gtk.TextIter.get_char(), the end iterator has a character value of 0. The entire buffer lies in the range from the first position in the buffer (call Gtk.TextBuffer.get_start_iter() to get character position 0) to the end iterator.
    * @returns iterator to initialize 
    */
  getEndIter(): import('../Gtk').TextIter;
  /**
    * Indicates whether the buffer has some text currently selected.
    * @returns True if the there is text selected 
    */
  getHasSelection(): boolean;
  /**
    * Returns the mark that represents the cursor (insertion point). Equivalent to calling Gtk.TextBuffer.get_mark() to get the mark named “insert”, but very slightly more efficient, and involves less typing.
    * @returns insertion point mark 
    */
  getInsert(): import('../Gtk').TextMark;
  /**
    * Obtains the location of anchor within self.
    * @param anchor a child anchor that appears in self
    * @returns an iterator to be initialized 
    */
  getIterAtChildAnchor(anchor: import('../Gtk').TextChildAnchor): import('../Gtk').TextIter;
  /**
    * Initializes iter to the start of the given line. If line_number is greater than the number of lines in the self, the end iterator is returned.
    * @param lineNumber line number counting from 0
    * @returns iterator to initialize 
    */
  getIterAtLine(lineNumber: number): import('../Gtk').TextIter;
  /**
    * Obtains an iterator pointing to byte_index within the given line. byte_index must be the start of a UTF-8 character. Note bytes, not characters; UTF-8 may encode one character as multiple bytes.
    * @param lineNumber line number counting from 0
    * @param byteIndex byte index from start of line
    * @returns iterator to initialize 
    */
  getIterAtLineIndex(lineNumber: number, byteIndex: number): import('../Gtk').TextIter;
  /**
    * Obtains an iterator pointing to char_offset within the given line. Note characters, not bytes; UTF-8 may encode one character as multiple bytes.
    * @param lineNumber line number counting from 0
    * @param charOffset str offset from start of line
    * @returns iterator to initialize 
    */
  getIterAtLineOffset(lineNumber: number, charOffset: number): import('../Gtk').TextIter;
  /**
    * Initializes iter with the current position of mark.
    * @param mark a Gtk.TextMark in self
    * @returns iterator to initialize 
    */
  getIterAtMark(mark: import('../Gtk').TextMark): import('../Gtk').TextIter;
  /**
    * Initializes iter to a position char_offset chars from the start of the entire buffer. If char_offset is -1 or greater than the number of characters in the buffer, iter is initialized to the end iterator, the iterator one past the last valid character in the buffer.
    * @param charOffset str offset from start of buffer, counting from 0, or -1
    * @returns iterator to initialize 
    */
  getIterAtOffset(charOffset: number): import('../Gtk').TextIter;
  /**
    * Obtains the number of lines in the buffer. This value is cached, so the function is very fast.
    * @returns number of lines in the buffer 
    */
  getLineCount(): number;
  /**
    * Returns the mark named name in buffer self, or None if no such mark exists in the buffer.
    * @param name a mark name
    * @returns a Gtk.TextMark, or None 
    */
  getMark(name: string): import('../Gtk').TextMark | null;
  /**
    * Indicates whether the buffer has been modified since the last call to Gtk.TextBuffer.set_modified() set the modification flag to False. Used for example to enable a “save” function in a text editor.
    * @returns True if the buffer has been modified 
    */
  getModified(): boolean;
  /**
    * This function returns the list of targets this text buffer supports for pasting and as DND destination. The targets in the list are added with info values from the Gtk.TextBufferTargetInfo enum, using Gtk.TargetList.add_rich_text_targets() and Gtk.TargetList.add_text_targets().
    * @returns the Gtk.TargetList 
    */
  getPasteTargetList(): import('../Gtk').TargetList;
  /**
    * Returns the mark that represents the selection bound.  Equivalent to calling Gtk.TextBuffer.get_mark() to get the mark named “selection_bound”, but very slightly more efficient, and involves less typing.
    * @returns selection bound mark 
    */
  getSelectionBound(): import('../Gtk').TextMark;
  /**
    * Returns True if some text is selected; places the bounds of the selection in start and end (if the selection has length 0, then start and end are filled in with the same value). start and end will be in ascending order. If start and end are None, then they are not filled in, but the return value still indicates whether text is selected.
    * @returns If there is no selection returns an empty tuple otherwise a tuple containing:  start:selection start end:selection end 
    */
  getSelectionBounds(): [import('../Gtk').TextIter, import('../Gtk').TextIter | null];
  /**
    * This function returns the rich text serialize formats registered with self using Gtk.TextBuffer.register_serialize_format() or Gtk.TextBuffer.register_serialize_tagset()
    * @returns an array of Gdk.Atoms representing the registered formats. 
    */
  getSerializeFormats(): import('../Gdk').Atom[];
  /**
    * Returns the text in the range [start,`end`). Excludes undisplayed text (text marked with tags that set the invisibility attribute) if include_hidden_chars is False. The returned string includes a 0xFFFC character whenever the buffer contains embedded images, so byte and character indexes into the returned string do correspond to byte and character indexes into the buffer. Contrast with Gtk.TextBuffer.get_text(). Note that 0xFFFC can occur in normal text as well, so it is not a reliable indicator that a pixbuf or widget is in the buffer.
    * @param start start of a range
    * @param end end of a range
    * @param includeHiddenChars whether to include invisible text
    * @returns an allocated UTF-8 string 
    */
  getSlice(start: import('../Gtk').TextIter, end: import('../Gtk').TextIter, includeHiddenChars: boolean): string;
  /**
    * Initialized iter with the first position in the text buffer. This is the same as using Gtk.TextBuffer.get_iter_at_offset() to get the iter at character offset 0.
    * @returns iterator to initialize 
    */
  getStartIter(): import('../Gtk').TextIter;
  /**
    * Get the Gtk.TextTagTable associated with this buffer.
    * @returns the buffer’s tag table 
    */
  getTagTable(): import('../Gtk').TextTagTable;
  /**
    * Returns the text in the range [start,`end`). Excludes undisplayed text (text marked with tags that set the invisibility attribute) if include_hidden_chars is False. Does not include characters representing embedded images, so byte and character indexes into the returned string do not correspond to byte and character indexes into the buffer. Contrast with Gtk.TextBuffer.get_slice().
    * @param start start of a range
    * @param end end of a range
    * @param includeHiddenChars whether to include invisible text
    * @returns an allocated UTF-8 string 
    */
  getText(start: import('../Gtk').TextIter, end: import('../Gtk').TextIter, includeHiddenChars: boolean): string;
  /**
    * Inserts len bytes of text at position iter.  If len is -1, text must be nul-terminated and will be inserted in its entirety. Emits the “insert-text” signal; insertion actually occurs in the default handler for the signal. iter is invalidated when insertion occurs (because the buffer contents change), but the default signal handler revalidates it to point to the end of the inserted text.
    * @param iter a position in the buffer
    * @param text text in UTF-8 format
    * @param len length of text in bytes, or -1 
    */
  insert(iter: import('../Gtk').TextIter, text: string, len: number): void;
  /**
    * Simply calls Gtk.TextBuffer.insert(), using the current cursor position as the insertion point.
    * @param text text in UTF-8 format
    * @param len length of text, in bytes 
    */
  insertAtCursor(text: string, len: number): void;
  /**
    * Inserts a child widget anchor into the text buffer at iter. The anchor will be counted as one character in character counts, and when obtaining the buffer contents as a string, will be represented by the Unicode “object replacement character” 0xFFFC. Note that the “slice” variants for obtaining portions of the buffer as a string include this character for child anchors, but the “text” variants do not. E.g. see Gtk.TextBuffer.get_slice() and Gtk.TextBuffer.get_text(). Consider Gtk.TextBuffer.create_child_anchor() as a more convenient alternative to this function. The buffer will add a reference to the anchor, so you can unref it after insertion.
    * @param iter location to insert the anchor
    * @param anchor a Gtk.TextChildAnchor 
    */
  insertChildAnchor(iter: import('../Gtk').TextIter, anchor: import('../Gtk').TextChildAnchor): void;
  /**
    * Like Gtk.TextBuffer.insert(), but the insertion will not occur if iter is at a non-editable location in the buffer. Usually you want to prevent insertions at ineditable locations if the insertion results from a user action (is interactive).
    * @param iter a position in self
    * @param text some UTF-8 text
    * @param len length of text in bytes, or -1
    * @param defaultEditable default editability of buffer
    * @returns whether text was actually inserted 
    */
  insertInteractive(iter: import('../Gtk').TextIter, text: string, len: number, defaultEditable: boolean): boolean;
  /**
    * Calls Gtk.TextBuffer.insert_interactive() at the cursor position.
    * @param text text in UTF-8 format
    * @param len length of text in bytes, or -1
    * @param defaultEditable default editability of buffer
    * @returns whether text was actually inserted 
    */
  insertInteractiveAtCursor(text: string, len: number, defaultEditable: boolean): boolean;
  /**
    * Inserts the text in markup at position iter. markup will be inserted in its entirety and must be nul-terminated and valid UTF-8. Emits the Gtk.TextBuffer ::insert-text signal, possibly multiple times; insertion actually occurs in the default handler for the signal. iter will point to the end of the inserted text on return.
    * @param iter location to insert the markup
    * @param markup a nul-terminated UTF-8 string containing Pango markup
    * @param len length of markup in bytes, or -1 
    */
  insertMarkup(iter: import('../Gtk').TextIter, markup: string, len: number): void;
  /**
    * Inserts an image into the text buffer at iter. The image will be counted as one character in character counts, and when obtaining the buffer contents as a string, will be represented by the Unicode “object replacement character” 0xFFFC. Note that the “slice” variants for obtaining portions of the buffer as a string include this character for pixbufs, but the “text” variants do not. e.g. see Gtk.TextBuffer.get_slice() and Gtk.TextBuffer.get_text().
    * @param iter location to insert the pixbuf
    * @param pixbuf a GdkPixbuf.Pixbuf 
    */
  insertPixbuf(iter: import('../Gtk').TextIter, pixbuf: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Copies text, tags, and pixbufs between start and end (the order of start and end doesn’t matter) and inserts the copy at iter. Used instead of simply getting/inserting text because it preserves images and tags. If start and end are in a different buffer from self, the two buffers must share the same tag table.
    * @param iter a position in self
    * @param start a position in a Gtk.TextBuffer
    * @param end another position in the same buffer as start 
    */
  insertRange(iter: import('../Gtk').TextIter, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * Same as Gtk.TextBuffer.insert_range(), but does nothing if the insertion point isn’t editable. The default_editable parameter indicates whether the text is editable at iter if no tags enclosing iter affect editability. Typically the result of Gtk.TextView.get_editable() is appropriate here.
    * @param iter a position in self
    * @param start a position in a Gtk.TextBuffer
    * @param end another position in the same buffer as start
    * @param defaultEditable default editability of the buffer
    * @returns whether an insertion was possible at iter 
    */
  insertRangeInteractive(iter: import('../Gtk').TextIter, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter, defaultEditable: boolean): boolean;
  /**
    * Inserts text into self at iter, applying the list of tags to the newly-inserted text. The last tag specified must be None to terminate the list. Equivalent to calling Gtk.TextBuffer.insert(), then Gtk.TextBuffer.apply_tag() on the inserted text; Gtk.TextBuffer.insert_with_tags() is just a convenience function. 
    */
  insertWithTags(): void;
  /**
    * Same as Gtk.TextBuffer.insert_with_tags(), but allows you to pass in tag names instead of tag objects. 
    */
  insertWithTagsByName(): void;
  /**
    * Moves mark to the new location where. Emits the Gtk.TextBuffer ::mark-set signal as notification of the move.
    * @param mark a Gtk.TextMark
    * @param where new location for mark in self 
    */
  moveMark(mark: import('../Gtk').TextMark, where: import('../Gtk').TextIter): void;
  /**
    * Moves the mark named name (which must exist) to location where. See Gtk.TextBuffer.move_mark() for details.
    * @param name name of a mark
    * @param where new location for mark 
    */
  moveMarkByName(name: string, where: import('../Gtk').TextIter): void;
  /**
    * Pastes the contents of a clipboard. If override_location is None, the pasted text will be inserted at the cursor position, or the buffer selection will be replaced if the selection is non-empty.
    * @param clipboard the Gtk.Clipboard to paste from
    * @param overrideLocation location to insert pasted text, or None
    * @param defaultEditable whether the buffer is editable by default 
    */
  pasteClipboard(clipboard: import('../Gtk').Clipboard, overrideLocation: import('../Gtk').TextIter | null, defaultEditable: boolean): void;
  /**
    * This function moves the “insert” and “selection_bound” marks simultaneously.  If you move them to the same place in two steps with Gtk.TextBuffer.move_mark(), you will temporarily select a region in between their old and new locations, which can be pretty inefficient since the temporarily-selected region will force stuff to be recalculated. This function moves them as a unit, which can be optimized.
    * @param where where to put the cursor 
    */
  placeCursor(where: import('../Gtk').TextIter): void;
  /**
    * This function registers a rich text deserialization function along with its mime_type with the passed self.
    * @param mimeType the format’s mime-type
    * @param function the deserialize function to register
    * @param userData function’s user_data
    * @returns the Gdk.Atom that corresponds to the newly registered format’s mime-type. 
    */
  registerDeserializeFormat(mimeType: string, fn: import('../Gtk').textBufferDeserializeFunc, userData: Object | null): import('../Gdk').Atom;
  /**
    * This function registers GTK+’s internal rich text serialization format with the passed self. See Gtk.TextBuffer.register_serialize_tagset() for details.
    * @param tagsetName an optional tagset name, on None
    * @returns the Gdk.Atom that corresponds to the newly registered format’s mime-type. 
    */
  registerDeserializeTagset(tagsetName: string | null): import('../Gdk').Atom;
  /**
    * This function registers a rich text serialization function along with its mime_type with the passed self.
    * @param mimeType the format’s mime-type
    * @param function the serialize function to register
    * @param userData function’s user_data
    * @returns the Gdk.Atom that corresponds to the newly registered format’s mime-type. 
    */
  registerSerializeFormat(mimeType: string, fn: import('../Gtk').textBufferSerializeFunc, userData: Object | null): import('../Gdk').Atom;
  /**
    * This function registers GTK+’s internal rich text serialization format with the passed self. The internal format does not comply to any standard rich text format and only works between Gtk.TextBuffer instances. It is capable of serializing all of a text buffer’s tags and embedded pixbufs.
    * @param tagsetName an optional tagset name, on None
    * @returns the Gdk.Atom that corresponds to the newly registered format’s mime-type. 
    */
  registerSerializeTagset(tagsetName: string | null): import('../Gdk').Atom;
  /**
    * Removes all tags in the range between start and end.  Be careful with this function; it could remove tags added in code unrelated to the code you’re currently writing. That is, using this function is probably a bad idea if you have two or more unrelated code sections that add tags.
    * @param start one bound of range to be untagged
    * @param end other bound of range to be untagged 
    */
  removeAllTags(start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * Removes a Gtk.Clipboard added with Gtk.TextBuffer.add_selection_clipboard().
    * @param clipboard a Gtk.Clipboard added to self by Gtk.TextBuffer.add_selection_clipboard() 
    */
  removeSelectionClipboard(clipboard: import('../Gtk').Clipboard): void;
  /**
    * Emits the “remove-tag” signal. The default handler for the signal removes all occurrences of tag from the given range. start and end don’t have to be in order.
    * @param tag a Gtk.TextTag
    * @param start one bound of range to be untagged
    * @param end other bound of range to be untagged 
    */
  removeTag(tag: import('../Gtk').TextTag, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * Calls Gtk.TextTagTable.lookup() on the buffer’s tag table to get a Gtk.TextTag, then calls Gtk.TextBuffer.remove_tag().
    * @param name name of a Gtk.TextTag
    * @param start one bound of range to be untagged
    * @param end other bound of range to be untagged 
    */
  removeTagByName(name: string, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): void;
  /**
    * This function moves the “insert” and “selection_bound” marks simultaneously.  If you move them in two steps with Gtk.TextBuffer.move_mark(), you will temporarily select a region in between their old and new locations, which can be pretty inefficient since the temporarily-selected region will force stuff to be recalculated. This function moves them as a unit, which can be optimized.
    * @param ins where to put the “insert” mark
    * @param bound where to put the “selection_bound” mark 
    */
  selectRange(ins: import('../Gtk').TextIter, bound: import('../Gtk').TextIter): void;
  /**
    * This function serializes the portion of text between start and end in the rich text format represented by format.
    * @param contentBuffer the Gtk.TextBuffer to serialize
    * @param format the rich text format to use for serializing
    * @param start start of block of text to serialize
    * @param end end of block of test to serialize
    * @returns the serialized data, encoded as format 
    */
  serialize(contentBuffer: import('../Gtk').TextBuffer, format: import('../Gdk').Atom, start: import('../Gtk').TextIter, end: import('../Gtk').TextIter): Int8Array;
  /**
    * Used to keep track of whether the buffer has been modified since the last time it was saved. Whenever the buffer is saved to disk, call Gtk.TextBuffer.set_modified (self, False). When the buffer is modified, it will automatically toggled on the modified bit again. When the modified bit flips, the buffer emits the Gtk.TextBuffer ::modified-changed signal.
    * @param setting modification flag setting 
    */
  setModified(setting: boolean): void;
  /**
    * Deletes current contents of self, and inserts text instead. If len is -1, text must be nul-terminated. text must be valid UTF-8.
    * @param text UTF-8 text to insert
    * @param len length of text in bytes 
    */
  setText(text: string, len: number): void;
  /**
    * This function unregisters a rich text format that was previously registered using Gtk.TextBuffer.register_deserialize_format() or Gtk.TextBuffer.register_deserialize_tagset().
    * @param format a Gdk.Atom representing a registered rich text format. 
    */
  unregisterDeserializeFormat(format: import('../Gdk').Atom): void;
  /**
    * This function unregisters a rich text format that was previously registered using Gtk.TextBuffer.register_serialize_format() or Gtk.TextBuffer.register_serialize_tagset()
    * @param format a Gdk.Atom representing a registered rich text format. 
    */
  unregisterSerializeFormat(format: import('../Gdk').Atom): void;
  /**
    * The list of targets this buffer supports for clipboard copying and DND source 
    */
  readonly copyTargetList: import('../Gtk').TargetList;
  /**
    * The position of the insert mark (as offset from the beginning of the buffer) 
    */
  readonly cursorPosition: number;
  /**
    * Whether the buffer has some text currently selected 
    */
  readonly hasSelection: boolean;
  /**
    * The list of targets this buffer supports for clipboard pasting and DND destination 
    */
  readonly pasteTargetList: import('../Gtk').TargetList;
  /**
    * Text Tag Table 
    */
  tagTable: import('../Gtk').TextTagTable;
  /**
    * Current text of the buffer 
    */
  text: string;
}

