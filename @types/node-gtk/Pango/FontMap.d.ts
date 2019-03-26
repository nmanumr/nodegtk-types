import * as GObject from '../GObject';
export declare interface FontMap extends GObject.Object { }

/**
  * The Pango.FontMap represents the set of fonts available for a
particular rendering system. This is a virtual object with
implementations being specific to particular rendering systems.  To
create an implementation of a Pango.FontMap, the rendering-system
specific code should allocate a larger structure that contains a nested
Pango.FontMap, fill in the klass member of the nested Pango.FontMap with a
pointer to a appropriate Pango.FontMapClass, then call
pango_font_map_init() on the structure. 
  */
export declare abstract class FontMap {
  /**
    * Forces a change in the context, which will cause any Pango.Context using this fontmap to change. 
    */
  changed(): void;
  /**
    * Creates a Pango.Context connected to self.  This is equivalent to Pango.Context.new() followed by Pango.Context.set_font_map().
    * @returns the newly allocated Pango.Context, which should be freed with GObject.Object.unref(). 
    */
  createContext(): import('../Pango').Context;
  /**
    * Returns the current serial number of self.  The serial number is initialized to an small number larger than zero when a new fontmap is created and is increased whenever the fontmap is changed. It may wrap, but will never have the value 0. Since it can wrap, never compare it with “less than”, always use “not equals”.
    * @returns The current serial number of self. 
    */
  getSerial(): number;
  /**
    * Returns the render ID for shape engines for this fontmap. See the render_type field of Pango.EngineInfo.
    * @returns the ID string for shape engines for this fontmap. Owned by Pango, should not be modified or freed. 
    */
  getShapeEngineType(): string;
  /**
    * List all families for a fontmap.
    * @returns location to store a pointer to an array of Pango.FontFamily *. This array should be freed with GLib.free(). 
    */
  listFamilies(): import('../Pango').FontFamily[];
  /**
    * Load the font in the fontmap that is the closest match for desc.
    * @param context the Pango.Context the font will be used with
    * @param desc a Pango.FontDescription describing the font to load
    * @returns the newly allocated Pango.Font loaded, or None if no font matched. 
    */
  loadFont(context: import('../Pango').Context, desc: import('../Pango').FontDescription): import('../Pango').Font | null;
  /**
    * Load a set of fonts in the fontmap that can be used to render a font matching desc.
    * @param context the Pango.Context the font will be used with
    * @param desc a Pango.FontDescription describing the font to load
    * @param language a Pango.Language the fonts will be used for
    * @returns the newly allocated Pango.Fontset loaded, or None if no font matched. 
    */
  loadFontset(context: import('../Pango').Context, desc: import('../Pango').FontDescription, language: import('../Pango').Language): import('../Pango').Fontset | null;
}

