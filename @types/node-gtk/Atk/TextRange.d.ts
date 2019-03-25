/**
  * A structure used to describe a text range. 
  */
export declare class TextRange {
/**
  * A rectangle giving the bounds of the text range 
  */
bounds: import('../Atk').TextRectangle;
/**
  * The text in the text range 
  */
content: string;
/**
  * The end offset of a Atk.TextRange 
  */
endOffset: number;
/**
  * The start offset of a Atk.TextRange 
  */
startOffset: number;
}

