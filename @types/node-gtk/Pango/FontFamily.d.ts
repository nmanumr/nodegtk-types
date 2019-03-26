import * as GObject from '../GObject';
export declare interface FontFamily extends GObject.Object { }

/**
  * The Pango.FontFamily structure is used to represent a family of related
font faces. The faces in a family share a common design, but differ in
slant, weight, width and other aspects. 
  */
export declare abstract class FontFamily {
  /**
    * Gets the name of the family. The name is unique among all fonts for the font backend and can be used in a Pango.FontDescription to specify that a face from this family is desired.
    * @returns the name of the family. This string is owned by the family object and must not be modified or freed. 
    */
  getName(): string;
  /**
    * A monospace font is a font designed for text display where the the characters form a regular grid. For Western languages this would mean that the advance width of all characters are the same, but this categorization also includes Asian fonts which include double-width characters: characters that occupy two grid cells. GLib.unichar_iswide() returns a result that indicates whether a character is typically double-width in a monospace font.
    * @returns True if the family is monospace. 
    */
  isMonospace(): boolean;
  /**
    * Lists the different font faces that make up self. The faces in a family share a common design, but differ in slant, weight, width and other aspects.
    * @returns location to store an array of pointers to Pango.FontFace objects, or None. This array should be freed with GLib.free() when it is no longer needed. 
    */
  listFaces(): import('../Pango').FontFace[];
}

