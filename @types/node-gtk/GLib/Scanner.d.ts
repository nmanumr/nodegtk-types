/**
  * The data structure representing a lexical scanner. 
  */
export declare class Scanner {
  /**
    * Returns the current line in the input stream (counting from 1). This is the line of the last token parsed via GLib.Scanner.get_next_token().
    * @returns the current line 
    */
  curLine(): number;
  /**
    * Returns the current position in the current line (counting from 0). This is the position of the last token parsed via GLib.Scanner.get_next_token().
    * @returns the current position on the line 
    */
  curPosition(): number;
  /**
    * Gets the current token type. This is simply the token field in the GLib.Scanner structure.
    * @returns the current token type 
    */
  curToken(): import('../GLib').TokenType;
  /**
    * Frees all memory used by the GLib.Scanner. 
    */
  destroy(): void;
  /**
    * Returns True if the scanner has reached the end of the file or text buffer.
    * @returns True if the scanner has reached the end of the file or text buffer 
    */
  eof(): boolean;
  /**
    * Parses the next token just like GLib.Scanner.peek_next_token() and also removes it from the input stream. The token data is placed in the token, value, line, and position fields of the GLib.Scanner structure.
    * @returns the type of the token 
    */
  getNextToken(): import('../GLib').TokenType;
  /**
    * Prepares to scan a file.
    * @param inputFd a file descriptor 
    */
  inputFile(inputFd: number): void;
  /**
    * Prepares to scan a text buffer.
    * @param text the text buffer to scan
    * @param textLen the length of the text buffer 
    */
  inputText(text: string, textLen: number): void;
  /**
    * Looks up a symbol in the current scope and return its value. If the symbol is not bound in the current scope, None is returned.
    * @param symbol the symbol to look up
    * @returns the value of symbol in the current scope, or None if symbol is not bound in the current scope 
    */
  lookupSymbol(symbol: string): Object | null;
  /**
    * Parses the next token, without removing it from the input stream. The token data is placed in the next_token, next_value, next_line, and next_position fields of the GLib.Scanner structure.
    * @returns the type of the token 
    */
  peekNextToken(): import('../GLib').TokenType;
  /**
    * Adds a symbol to the given scope.
    * @param scopeId the scope id
    * @param symbol the symbol to add
    * @param value the value of the symbol 
    */
  scopeAddSymbol(scopeId: number, symbol: string, value: Object | null): void;
  /**
    * Looks up a symbol in a scope and return its value. If the symbol is not bound in the scope, None is returned.
    * @param scopeId the scope id
    * @param symbol the symbol to look up
    * @returns the value of symbol in the given scope, or None if symbol is not bound in the given scope. 
    */
  scopeLookupSymbol(scopeId: number, symbol: string): Object | null;
  /**
    * Removes a symbol from a scope.
    * @param scopeId the scope id
    * @param symbol the symbol to remove 
    */
  scopeRemoveSymbol(scopeId: number, symbol: string): void;
  /**
    * Sets the current scope.
    * @param scopeId the new scope id
    * @returns the old scope id 
    */
  setScope(scopeId: number): number;
  /**
    * Rewinds the filedescriptor to the current buffer position and blows the file read ahead buffer. This is useful for third party uses of the scanners filedescriptor, which hooks onto the current scanning position. 
    */
  syncFileOffset(): void;
  /**
    * Outputs a message through the scanner’s msg_handler, resulting from an unexpected token in the input stream. Note that you should not call GLib.Scanner.peek_next_token() followed by GLib.Scanner.unexp_token() without an intermediate call to GLib.Scanner.get_next_token(), as GLib.Scanner.unexp_token() evaluates the scanner’s current token (not the peeked token) to construct part of the message.
    * @param expectedToken the expected token
    * @param identifierSpec a string describing how the scanner’s user refers to identifiers (None defaults to “identifier”). This is used if expected_token is GLib.TokenType.IDENTIFIER or GLib.TokenType.IDENTIFIER_NULL.
    * @param symbolSpec a string describing how the scanner’s user refers to symbols (None defaults to “symbol”). This is used if expected_token is GLib.TokenType.SYMBOL or any token value greater than %G_TOKEN_LAST.
    * @param symbolName the name of the symbol, if the scanner’s current token is a symbol.
    * @param message a message string to output at the end of the warning/error, or None.
    * @param isError if True it is output as an error. If False it is output as a warning. 
    */
  unexpToken(expectedToken: import('../GLib').TokenType, identifierSpec: string, symbolSpec: string, symbolName: string, message: string, isError: number): void;
}

