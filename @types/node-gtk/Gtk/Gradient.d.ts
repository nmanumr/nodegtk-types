/**
  * Gtk.Gradient is a boxed type that represents a gradient.
It is the result of parsing a
‘gradient expression [gtkcssprovider-gradients]’.
To obtain the gradient represented by a Gtk.Gradient, it has to
be resolved with Gtk.Gradient.resolve(), which replaces all
symbolic color references by the colors they refer to (in a given
context) and constructs a cairo.Pattern value. 
  */
export declare class Gradient {
  /**
    * Creates a new linear gradient along the line defined by (x0, y0) and (x1, y1). Before using the gradient a number of stop colors must be added through Gtk.Gradient.add_color_stop().
    * @param x0 X coordinate of the starting point
    * @param y0 Y coordinate of the starting point
    * @param x1 X coordinate of the end point
    * @param y1 Y coordinate of the end point
    * @returns A newly created Gtk.Gradient 
    */
  static newLinear(x0: number, y0: number, x1: number, y1: number): import('../Gtk').Gradient;
  /**
    * Creates a new radial gradient along the two circles defined by (x0, y0, radius0) and (x1, y1, radius1). Before using the gradient a number of stop colors must be added through Gtk.Gradient.add_color_stop().
    * @param x0 X coordinate of the start circle
    * @param y0 Y coordinate of the start circle
    * @param radius0 radius of the start circle
    * @param x1 X coordinate of the end circle
    * @param y1 Y coordinate of the end circle
    * @param radius1 radius of the end circle
    * @returns A newly created Gtk.Gradient 
    */
  static newRadial(x0: number, y0: number, radius0: number, x1: number, y1: number, radius1: number): import('../Gtk').Gradient;
  /**
    * Adds a stop color to self.
    * @param offset offset for the color stop
    * @param color color to use 
    */
  addColorStop(offset: number, color: import('../Gtk').SymbolicColor): void;
  /**
    * Increases the reference count of self.
    * @returns The same self 
    */
  ref(): import('../Gtk').Gradient;
  /**
    * If self is resolvable, resolved_gradient will be filled in with the resolved gradient as a cairo.Pattern, and True will be returned. Generally, if self can’t be resolved, it is due to it being defined on top of a named color that doesn’t exist in props.
    * @param props Gtk.StyleProperties to use when resolving named colors
    * @returns True if the gradient has been resolved  resolved_gradient:  return location for the resolved pattern 
    */
  resolve(props: import('../Gtk').StyleProperties): [boolean, import('../cairo').Pattern];
  resolveForContext(context: import('../Gtk').StyleContext): import('../cairo').Pattern;
  /**
    * Creates a string representation for self that is suitable for using in GTK CSS files.
    * @returns A string representation for self 
    */
  toString(): string;
  /**
    * Decreases the reference count of self, freeing its memory if the reference count reaches 0. 
    */
  unref(): void;
}

