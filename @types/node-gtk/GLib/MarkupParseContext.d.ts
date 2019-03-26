/**
  * A parse context is used to parse a stream of bytes that
you expect to contain marked-up text. 
  */
export declare class MarkupParseContext {
  /**
    * Creates a new parse context. A parse context is used to parse marked-up documents. You can feed any number of documents into a context, as long as no errors occur; once an error occurs, the parse context can’t continue to parse text (you have to free it and create a new parse context).
    * @param parser a GLib.MarkupParser
    * @param flags one or more GLib.MarkupParseFlags
    * @param userData user data to pass to GLib.MarkupParser functions
    * @param userDataDnotify user data destroy notifier called when the parse context is freed
    * @returns a new GLib.MarkupParseContext 
    */
  static new(parser: import('../GLib').MarkupParser, flags: import('../GLib').MarkupParseFlags, userData: Object | null, userDataDnotify: import('../GLib').destroyNotify): import('../GLib').MarkupParseContext;
  /**
    * Signals to the GLib.MarkupParseContext that all data has been fed into the parse context with GLib.MarkupParseContext.parse().
    * @returns True on success, False if an error was set 
    */
  endParse(): boolean;
  /**
    * Frees a GLib.MarkupParseContext. 
    */
  free(): void;
  /**
    * Retrieves the name of the currently open element.
    * @returns the name of the currently open element, or None 
    */
  getElement(): string;
  /**
    * Retrieves the current line number and the number of the character on that line. Intended for use in error messages; there are no strict semantics for what constitutes the “current” line number other than “the best number we could come up with for error messages.”
    * @param lineNumber return location for a line number, or None
    * @param charNumber return location for a str-on-line number, or None 
    */
  getPosition(lineNumber: number | null, charNumber: number | null): void;
  /**
    * Returns the user_data associated with self.
    * @returns the provided user_data. The returned data belongs to the markup context and will be freed when GLib.MarkupParseContext.free() is called. 
    */
  getUserData(): Object | null;
  /**
    * Feed some data to the GLib.MarkupParseContext.
    * @param text chunk of text to parse
    * @param textLen length of text in bytes
    * @returns False if an error occurred, True on success 
    */
  parse(text: string, textLen: number): boolean;
  /**
    * Completes the process of a temporary sub-parser redirection.
    * @returns the user data passed to GLib.MarkupParseContext.push() 
    */
  pop(): Object | null;
  /**
    * Temporarily redirects markup data to a sub-parser.
    * @param parser a GLib.MarkupParser
    * @param userData user data to pass to GLib.MarkupParser functions 
    */
  push(parser: import('../GLib').MarkupParser, userData: Object | null): void;
  /**
    * Increases the reference count of self.
    * @returns the same self 
    */
  ref(): import('../GLib').MarkupParseContext;
  /**
    * Decreases the reference count of self.  When its reference count drops to 0, it is freed. 
    */
  unref(): void;
}

