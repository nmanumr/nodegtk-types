import * as Pango from '../Pango';
export declare interface FontsetSimple extends Pango.Fontset { }

/**
  * Pango.FontsetSimple is a implementation of the abstract
Pango.Fontset base class in terms of an array of fonts,
which the creator provides when constructing the
Pango.FontsetSimple. 
  */
export declare class FontsetSimple {
  /**
    * Creates a new Pango.FontsetSimple for the given language.
    * @param language a Pango.Language tag
    * @returns the newly allocated Pango.FontsetSimple, which should be freed with GObject.Object.unref(). 
    */
  static new(language: import('../Pango').Language): import('../Pango').FontsetSimple;
  /**
    * Adds a font to the fontset.
    * @param font a Pango.Font. 
    */
  append(font: import('../Pango').Font): void;
  /**
    * Returns the number of fonts in the fontset.
    * @returns the size of self. 
    */
  size(): number;
}

