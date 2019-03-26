/**
  * Gtk.SymbolicColor is a boxed type that represents a symbolic color.
It is the result of parsing a
‘color expression [gtkcssprovider-symbolic-colors]’.
To obtain the color represented by a Gtk.SymbolicColor, it has to
be resolved with Gtk.SymbolicColor.resolve(), which replaces all
symbolic color references by the colors they refer to (in a given
context) and evaluates mix, shade and other expressions, resulting
in a Gdk.RGBA value. 
  */
export declare class SymbolicColor {
  /**
    * Creates a symbolic color by modifying the relative alpha value of color. A factor < 1.0 would resolve to a more transparent color, while > 1.0 would resolve to a more opaque color.
    * @param color another Gtk.SymbolicColor
    * @param factor factor to apply to color alpha
    * @returns A newly created Gtk.SymbolicColor 
    */
  static newAlpha(color: import('../Gtk').SymbolicColor, factor: number): import('../Gtk').SymbolicColor;
  /**
    * Creates a symbolic color pointing to a literal color.
    * @param color a Gdk.RGBA
    * @returns a newly created Gtk.SymbolicColor 
    */
  static newLiteral(color: import('../Gdk').RGBA): import('../Gtk').SymbolicColor;
  /**
    * Creates a symbolic color defined as a mix of another two colors. a mix factor of 0 would resolve to color1, while a factor of 1 would resolve to color2.
    * @param color1 color to mix
    * @param color2 another color to mix
    * @param factor mix factor
    * @returns A newly created Gtk.SymbolicColor 
    */
  static newMix(color1: import('../Gtk').SymbolicColor, color2: import('../Gtk').SymbolicColor, factor: number): import('../Gtk').SymbolicColor;
  /**
    * Creates a symbolic color pointing to an unresolved named color. See Gtk.StyleContext.lookup_color() and Gtk.StyleProperties.lookup_color().
    * @param name color name
    * @returns a newly created Gtk.SymbolicColor 
    */
  static newName(name: string): import('../Gtk').SymbolicColor;
  /**
    * Creates a symbolic color defined as a shade of another color. A factor > 1.0 would resolve to a brighter color, while < 1.0 would resolve to a darker color.
    * @param color another Gtk.SymbolicColor
    * @param factor shading factor to apply to color
    * @returns A newly created Gtk.SymbolicColor 
    */
  static newShade(color: import('../Gtk').SymbolicColor, factor: number): import('../Gtk').SymbolicColor;
  /**
    * Creates a symbolic color based on the current win32 theme.
    * @param themeClass The theme class to pull color from
    * @param id The color id
    * @returns A newly created Gtk.SymbolicColor 
    */
  static newWin32(themeClass: string, id: number): import('../Gtk').SymbolicColor;
  /**
    * Increases the reference count of self
    * @returns the same self 
    */
  ref(): import('../Gtk').SymbolicColor;
  /**
    * If self is resolvable, resolved_color will be filled in with the resolved color, and True will be returned. Generally, if self can’t be resolved, it is due to it being defined on top of a named color that doesn’t exist in props.
    * @param props Gtk.StyleProperties to use when resolving named colors, or None
    * @returns True if the color has been resolved  resolved_color:return location for the resolved color 
    */
  resolve(props: import('../Gtk').StyleProperties | null): [boolean, import('../Gdk').RGBA];
  /**
    * Converts the given self to a string representation. This is useful both for debugging and for serialization of strings. The format of the string may change between different versions of GTK, but it is guaranteed that the GTK css parser is able to read the string and create the same symbolic color from it.
    * @returns a new string representing self 
    */
  toString(): string;
  /**
    * Decreases the reference count of self, freeing its memory if the reference count reaches 0. 
    */
  unref(): void;
}

