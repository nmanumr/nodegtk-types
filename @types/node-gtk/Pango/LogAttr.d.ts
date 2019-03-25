/**
  * The Pango.LogAttr structure stores information
about the attributes of a single character. 
  */
export declare class LogAttr {
/**
  * if set, backspace deletes one character rather than the entire grapheme cluster. This field is only meaningful on grapheme boundaries (where is_cursor_position is set).  In some languages, the full grapheme (e.g.  letter + diacritics) is considered a unit, while in others, each decomposed character in the grapheme is a unit. In the default implementation of Pango.break_(), this bit is set on all grapheme boundaries except those following Latin, Cyrillic or Greek base characters. 
  */
backspaceDeletesCharacter: number;
/**
  * if set, can break here when doing character wrapping 
  */
isCharBreak: number;
/**
  * if set, cursor can appear in front of character. i.e. this is a grapheme boundary, or the first character in the text. This flag implements Unicode’s  Grapheme Cluster Boundaries semantics. 
  */
isCursorPosition: number;
/**
  * is a whitespace character that can possibly be expanded for justification purposes. (Since: 1.18) 
  */
isExpandableSpace: number;
/**
  * if set, can break line in front of character 
  */
isLineBreak: number;
/**
  * if set, must break line in front of character 
  */
isMandatoryBreak: number;
/**
  * is a sentence boundary. There are two ways to divide sentences. The first assigns all inter-sentence whitespace/control/format chars to some sentence, so all chars are in some sentence; is_sentence_boundary denotes the boundaries there. The second way doesn’t assign between-sentence spaces, etc. to any sentence, so is_sentence_start/is_sentence_end mark the boundaries of those sentences. 
  */
isSentenceBoundary: number;
/**
  * is first str after a sentence. Note that in degenerate cases, you could have both is_sentence_start and is_sentence_end set for some character. (e.g. no space after a period, so the next sentence starts right away) 
  */
isSentenceEnd: number;
/**
  * is first character in a sentence 
  */
isSentenceStart: number;
/**
  * is whitespace character 
  */
isWhite: number;
/**
  * is a word boundary. More specifically, means that this is not a position in the middle of a word.  For example, both sides of a punctuation mark are considered word boundaries.  This flag is particularly useful when selecting text word-by-word. This flag implements Unicode’s  Word Boundaries semantics. (Since: 1.22) 
  */
isWordBoundary: number;
/**
  * is first non-word str after a word Note that in degenerate cases, you could have both is_word_start and is_word_end set for some character. 
  */
isWordEnd: number;
/**
  * is first character in a word 
  */
isWordStart: number;
}

