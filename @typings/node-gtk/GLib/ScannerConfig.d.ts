/**
  * Specifies the GLib.Scanner parser configuration. Most settings can
be changed during the parsing phase and will affect the lexical
parsing of the next unpeeked token. 
  */
export declare class ScannerConfig {
/**
  * specifies if symbols are case sensitive (the default is False). 
  */
caseSensitive: number;
/**
  * specifies if characters are reported by setting token = ch or as GLib.TokenType.CHAR (the default is True). 
  */
char2Token: number;
/**
  * specifies the characters at the start and end of single-line comments. The default is “#\n” which means that single-line comments start with a ‘#’ and continue until a ‘\n’ (end of line). 
  */
cpairCommentSingle: string;
/**
  * specifies the characters which can start identifiers (the default is GLib.CSET_a_2_z, “_”, and GLib.CSET_A_2_Z). 
  */
csetIdentifierFirst: string;
/**
  * specifies the characters which can be used in identifiers, after the first character (the default is GLib.CSET_a_2_z, “_0123456789”, GLib.CSET_A_2_Z, #G_CSET_LATINS, #G_CSET_LATINC). 
  */
csetIdentifierNth: string;
/**
  * specifies which characters should be skipped by the scanner (the default is the whitespace characters: space, tab, carriage-return and line-feed). 
  */
csetSkipCharacters: string;
/**
  * specifies if identifiers are reported as strings (the default is False). 
  */
identifier2String: number;
/**
  * specifies if all numbers are reported as GLib.TokenType.FLOAT (the default is False). 
  */
int2Float: number;
/**
  * specifies if binary, octal and hexadecimal numbers are reported as GLib.TokenType.INT (the default is True). 
  */
numbers2Int: number;
/**
  *   
  */
paddingDummy: number;
/**
  * specifies if binary numbers are recognized (the default is False). 
  */
scanBinary: number;
/**
  * specifies if multi-line comments are recognized (the default is True). 
  */
scanCommentMulti: number;
/**
  * specifies if floating point numbers are recognized (the default is True). 
  */
scanFloat: number;
/**
  * specifies if hexadecimal numbers are recognized (the default is True). 
  */
scanHex: number;
/**
  * specifies if ‘$’ is recognized as a prefix for hexadecimal numbers (the default is False). 
  */
scanHexDollar: number;
/**
  * specifies if identifiers are recognized (the default is True). 
  */
scanIdentifier: number;
/**
  * specifies if single-character identifiers are recognized (the default is False). 
  */
scanIdentifier1Char: number;
/**
  * specifies if None is reported as GLib.TokenType.IDENTIFIER_NULL (the default is False). 
  */
scanIdentifierNull: number;
/**
  * specifies if octal numbers are recognized (the default is True). 
  */
scanOctal: number;
/**
  * specifies if strings can be enclosed in double quotes (the default is True). 
  */
scanStringDq: number;
/**
  * specifies if strings can be enclosed in single quotes (the default is True). 
  */
scanStringSq: number;
/**
  * specifies if symbols are recognized (the default is True). 
  */
scanSymbols: number;
/**
  * specifies if a symbol is searched for in the default scope in addition to the current scope (the default is False). 
  */
scope0Fallback: number;
/**
  * specifies if multi-line comments are skipped and not returned as tokens (the default is True). 
  */
skipCommentMulti: number;
/**
  * specifies if single-line comments are skipped and not returned as tokens (the default is True). 
  */
skipCommentSingle: number;
/**
  * use value.v_int64 rather than v_int 
  */
storeInt64: number;
/**
  * specifies if symbols are reported by setting token = v_symbol or as GLib.TokenType.SYMBOL (the default is False). 
  */
symbol2Token: number;
}

