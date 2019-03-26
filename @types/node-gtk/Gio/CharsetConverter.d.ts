import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface CharsetConverter extends GObject.Object, Gio.Converter, Gio.Initable { }

/**
  * Gio.CharsetConverter is an implementation of Gio.Converter based on
GIConv. 
  */
export declare class CharsetConverter {
  /**
    * Creates a new Gio.CharsetConverter.
    * @param toCharset destination charset
    * @param fromCharset source charset
    * @returns a new Gio.CharsetConverter or None on error. 
    */
  static new(toCharset: string, fromCharset: string): import('../Gio').CharsetConverter;
  /**
    * Gets the number of fallbacks that self has applied so far.
    * @returns the number of fallbacks that self has applied 
    */
  getNumFallbacks(): number;
  /**
    * Gets the Gio.CharsetConverter :use-fallback property.
    * @returns True if fallbacks are used by self 
    */
  getUseFallback(): boolean;
  /**
    * Sets the Gio.CharsetConverter :use-fallback property.
    * @param useFallback True to use fallbacks 
    */
  setUseFallback(useFallback: boolean): void;
  /**
    * The character encoding to convert from 
    */
  fromCharset: string;
  /**
    * The character encoding to convert to 
    */
  toCharset: string;
  /**
    * Use fallback (of form \<hexval>) for invalid bytes 
    */
  useFallback: boolean;
}

