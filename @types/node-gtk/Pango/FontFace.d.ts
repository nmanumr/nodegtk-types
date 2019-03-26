import * as GObject from '../GObject';
export declare interface FontFace extends GObject.Object { }

/**
  * The Pango.FontFace structure is used to represent a group of fonts with
the same family, slant, weight, width, but varying sizes. 
  */
export declare abstract class FontFace {
  /**
    * Returns the family, style, variant, weight and stretch of a Pango.FontFace. The size field of the resulting font description will be unset.
    * @returns a newly-created Pango.FontDescription structure holding the description of the face. Use Pango.FontDescription.free() to free the result. 
    */
  describe(): import('../Pango').FontDescription;
  /**
    * Gets a name representing the style of this face among the different faces in the Pango.FontFamily for the face. This name is unique among all faces in the family and is suitable for displaying to users.
    * @returns the face name for the face. This string is owned by the face object and must not be modified or freed. 
    */
  getFaceName(): string;
  /**
    * Returns whether a Pango.FontFace is synthesized by the underlying font rendering engine from another face, perhaps by shearing, emboldening, or lightening it.
    * @returns whether self is synthesized. 
    */
  isSynthesized(): boolean;
  /**
    * List the available sizes for a font. This is only applicable to bitmap fonts. For scalable fonts, stores None at the location pointed to by sizes and 0 at the location pointed to by n_sizes. The sizes returned are in Pango units and are sorted in ascending order.
    * @returns location to store a pointer to an array of int. This array should be freed with GLib.free(). 
    */
  listSizes(): number[];
}

