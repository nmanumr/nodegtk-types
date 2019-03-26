import * as Pango from '../Pango';
export declare interface EngineLang extends Pango.Engine { }

/**
  * The Pango.EngineLang class is implemented by engines that
customize the rendering-system independent part of the
Pango pipeline for a particular script or language. For
instance, a custom Pango.EngineLang could be provided for
Thai to implement the dictionary-based word boundary
lookups needed for that language. 
  */
export declare abstract class EngineLang {
}

