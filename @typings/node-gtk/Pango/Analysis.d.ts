/**
  * The Pango.Analysis structure stores information about
the properties of a segment of text. 
  */
export declare class Analysis {
/**
  * extra attributes for this segment. 
  */
extraAttrs: Object;
/**
  * boolean flags for this segment (currently only one) (Since: 1.16). 
  */
flags: number;
/**
  * the font for this segment. 
  */
font: import('../Pango').Font;
/**
  * the glyph orientation for this segment (A Pango.Gravity). 
  */
gravity: number;
/**
  * the engine for doing rendering-system-independent processing. 
  */
langEngine: import('../Pango').EngineLang;
/**
  * the detected language for this segment. 
  */
language: import('../Pango').Language;
/**
  * the bidirectional level for this segment. 
  */
level: number;
/**
  * the detected script for this segment (A Pango.Script) (Since: 1.18). 
  */
script: number;
/**
  * the engine for doing rendering-system-dependent processing. 
  */
shapeEngine: import('../Pango').EngineShape;
}

