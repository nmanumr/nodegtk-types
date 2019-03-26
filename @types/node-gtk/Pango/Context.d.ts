import * as GObject from '../GObject';
export declare interface Context extends GObject.Object { }

/**
  * The Pango.Context structure stores global information
used to control the itemization process. 
  */
export declare class Context {
  /**
    * Creates a new Pango.Context initialized to default values.
    * @returns the newly allocated Pango.Context, which should be freed with GObject.Object.unref(). 
    */
  static new(): import('../Pango').Context;
  /**
    * Forces a change in the context, which will cause any Pango.Layout using this context to re-layout. 
    */
  changed(): void;
  /**
    * Retrieves the base direction for the context. See Pango.Context.set_base_dir().
    * @returns the base direction for the context. 
    */
  getBaseDir(): import('../Pango').Direction;
  /**
    * Retrieves the base gravity for the context. See Pango.Context.set_base_gravity().
    * @returns the base gravity for the context. 
    */
  getBaseGravity(): import('../Pango').Gravity;
  /**
    * Retrieve the default font description for the context.
    * @returns a pointer to the context’s default font description. This value must not be modified or freed. 
    */
  getFontDescription(): import('../Pango').FontDescription;
  /**
    * Gets the Pango.FontMap used to look up fonts for this context.
    * @returns the font map for the Pango.Context. This value is owned by Pango and should not be unreferenced. 
    */
  getFontMap(): import('../Pango').FontMap;
  /**
    * Retrieves the gravity for the context. This is similar to Pango.Context.get_base_gravity(), except for when the base gravity is Pango.Gravity.AUTO for which Pango.Gravity.get_for_matrix() is used to return the gravity from the current context matrix.
    * @returns the resolved gravity for the context. 
    */
  getGravity(): import('../Pango').Gravity;
  /**
    * Retrieves the gravity hint for the context. See Pango.Context.set_gravity_hint() for details.
    * @returns the gravity hint for the context. 
    */
  getGravityHint(): import('../Pango').GravityHint;
  /**
    * Retrieves the global language tag for the context.
    * @returns the global language tag. 
    */
  getLanguage(): import('../Pango').Language;
  /**
    * Gets the transformation matrix that will be applied when rendering with this context. See Pango.Context.set_matrix().
    * @returns the matrix, or None if no matrix has been set (which is the same as the identity matrix). The returned matrix is owned by Pango and must not be modified or freed. 
    */
  getMatrix(): import('../Pango').Matrix | null;
  /**
    * Get overall metric information for a particular font description.  Since the metrics may be substantially different for different scripts, a language tag can be provided to indicate that the metrics should be retrieved that correspond to the script(s) used by that language.
    * @param desc a Pango.FontDescription structure.  None means that the font description from the context will be used.
    * @param language language tag used to determine which script to get the metrics for. None means that the language tag from the context will be used. If no language tag is set on the context, metrics for the default language (as determined by Pango.Language.get_default()) will be returned.
    * @returns a Pango.FontMetrics object. The caller must call Pango.FontMetrics.unref() when finished using the object. 
    */
  getMetrics(desc: import('../Pango').FontDescription | null, language: import('../Pango').Language | null): import('../Pango').FontMetrics;
  /**
    * Returns the current serial number of self.  The serial number is initialized to an small number larger than zero when a new context is created and is increased whenever the context is changed using any of the setter functions, or the Pango.FontMap it uses to find fonts has changed. The serial may wrap, but will never have the value 0. Since it can wrap, never compare it with “less than”, always use “not equals”.
    * @returns The current serial number of self. 
    */
  getSerial(): number;
  /**
    * List all families for a context.
    * @returns location to store a pointer to an array of Pango.FontFamily *. This array should be freed with GLib.free(). 
    */
  listFamilies(): import('../Pango').FontFamily[];
  /**
    * Loads the font in one of the fontmaps in the context that is the closest match for desc.
    * @param desc a Pango.FontDescription describing the font to load
    * @returns the newly allocated Pango.Font that was loaded, or None if no font matched. 
    */
  loadFont(desc: import('../Pango').FontDescription): import('../Pango').Font | null;
  /**
    * Load a set of fonts in the context that can be used to render a font matching desc.
    * @param desc a Pango.FontDescription describing the fonts to load
    * @param language a Pango.Language the fonts will be used for
    * @returns the newly allocated Pango.Fontset loaded, or None if no font matched. 
    */
  loadFontset(desc: import('../Pango').FontDescription, language: import('../Pango').Language): import('../Pango').Fontset | null;
  /**
    * Sets the base direction for the context.
    * @param direction the new base direction 
    */
  setBaseDir(direction: import('../Pango').Direction): void;
  /**
    * Sets the base gravity for the context.
    * @param gravity the new base gravity 
    */
  setBaseGravity(gravity: import('../Pango').Gravity): void;
  /**
    * Set the default font description for the context
    * @param desc the new pango font description 
    */
  setFontDescription(desc: import('../Pango').FontDescription): void;
  /**
    * Sets the font map to be searched when fonts are looked-up in this context. This is only for internal use by Pango backends, a Pango.Context obtained via one of the recommended methods should already have a suitable font map.
    * @param fontMap the Pango.FontMap to set. 
    */
  setFontMap(fontMap: import('../Pango').FontMap): void;
  /**
    * Sets the gravity hint for the context.
    * @param hint the new gravity hint 
    */
  setGravityHint(hint: import('../Pango').GravityHint): void;
  /**
    * Sets the global language tag for the context.  The default language for the locale of the running process can be found using Pango.Language.get_default().
    * @param language the new language tag. 
    */
  setLanguage(language: import('../Pango').Language): void;
  /**
    * Sets the transformation matrix that will be applied when rendering with this context. Note that reported metrics are in the user space coordinates before the application of the matrix, not device-space coordinates after the application of the matrix. So, they don’t scale with the matrix, though they may change slightly for different matrices, depending on how the text is fit to the pixel grid.
    * @param matrix a Pango.Matrix, or None to unset any existing matrix. (No matrix set is the same as setting the identity matrix.) 
    */
  setMatrix(matrix: import('../Pango').Matrix | null): void;
}

