import * as GObject from '../GObject';
export declare interface EntryBuffer extends GObject.Object { }

/**
  * The Gtk.EntryBuffer class contains the actual text displayed in a
Gtk.Entry widget. 
  */
export declare class EntryBuffer {
  /**
    * Create a new Gtk.EntryBuffer object.
    * @param initialChars initial buffer text, or None
    * @param nInitialChars number of characters in initial_chars, or -1
    * @returns A new Gtk.EntryBuffer object. 
    */
  static new(initialChars: string | null, nInitialChars: number): import('../Gtk').EntryBuffer;
  /**
    * Deletes a sequence of characters from the buffer. n_chars characters are deleted starting at position. If n_chars is negative, then all characters until the end of the text are deleted.
    * @param position position at which to delete text
    * @param nChars number of characters to delete
    * @returns The number of characters deleted. 
    */
  deleteText(position: number, nChars: number): number;
  /**
    * Used when subclassing Gtk.EntryBuffer
    * @param position position at which text was deleted
    * @param nChars number of characters deleted 
    */
  emitDeletedText(position: number, nChars: number): void;
  /**
    * Used when subclassing Gtk.EntryBuffer
    * @param position position at which text was inserted
    * @param chars text that was inserted
    * @param nChars number of characters inserted 
    */
  emitInsertedText(position: number, chars: string, nChars: number): void;
  /**
    * Retrieves the length in bytes of the buffer. See Gtk.EntryBuffer.get_length().
    * @returns The byte length of the buffer. 
    */
  getBytes(): number;
  /**
    * Retrieves the length in characters of the buffer.
    * @returns The number of characters in the buffer. 
    */
  getLength(): number;
  /**
    * Retrieves the maximum allowed length of the text in self. See Gtk.EntryBuffer.set_max_length().
    * @returns the maximum allowed number of characters in Gtk.EntryBuffer, or 0 if there is no maximum. 
    */
  getMaxLength(): number;
  /**
    * Retrieves the contents of the buffer.
    * @returns a pointer to the contents of the widget as a string. This string points to internally allocated storage in the buffer and must not be freed, modified or stored. 
    */
  getText(): string;
  /**
    * Inserts n_chars characters of chars into the contents of the buffer, at position position.
    * @param position the position at which to insert text.
    * @param chars the text to insert into the buffer.
    * @param nChars the length of the text in characters, or -1
    * @returns The number of characters actually inserted. 
    */
  insertText(position: number, chars: string, nChars: number): number;
  /**
    * Sets the maximum allowed length of the contents of the buffer. If the current contents are longer than the given length, then they will be truncated to fit.
    * @param maxLength the maximum length of the entry buffer, or 0 for no maximum. (other than the maximum length of entries.) The value passed in will be clamped to the range 0-65536. 
    */
  setMaxLength(maxLength: number): void;
  /**
    * Sets the text in the buffer.
    * @param chars the new text
    * @param nChars the number of characters in text, or -1 
    */
  setText(chars: string, nChars: number): void;
  /**
    * Length of the text currently in the buffer 
    */
  readonly length: number;
  /**
    * Maximum number of characters for this entry. Zero if no maximum 
    */
  maxLength: number;
  /**
    * The contents of the buffer 
    */
  text: string;
}

