/**
  * The Pango.GlyphInfo structure represents a single glyph together with
positioning information and visual attributes.
It contains the following fields. 
  */
export declare class GlyphInfo {
/**
  * the visual attributes of the glyph. 
  */
attr: import('../Pango').GlyphVisAttr;
/**
  * the positional information about the glyph. 
  */
geometry: import('../Pango').GlyphGeometry;
/**
  * the glyph itself. 
  */
glyph: number;
}

