/**
  * The Pango.GlyphVisAttr is used to communicate information between
the shaping phase and the rendering phase.  More attributes may be
added in the future. 
  */
export declare class GlyphVisAttr {
/**
  * set for the first logical glyph in each cluster. (Clusters are stored in visual order, within the cluster, glyphs are always ordered in logical order, since visual order is meaningless; that is, in Arabic text, accent glyphs follow the glyphs for the base character.) 
  */
isClusterStart: number;
}

