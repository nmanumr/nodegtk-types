import * as GObject from '../GObject';
export declare interface Renderer extends GObject.Object { }

/**
  * Pango.Renderer is a base class for objects that are used to
render Pango objects such as Pango.GlyphString and
Pango.Layout. 
  */
export declare abstract class Renderer {
  /**
    * Does initial setup before rendering operations on self. Pango.Renderer.deactivate() should be called when done drawing. Calls such as Pango.Renderer.draw_layout() automatically activate the layout before drawing on it. Calls to Pango.Renderer.activate() and Pango.Renderer.deactivate() can be nested and the renderer will only be initialized and deinitialized once. 
    */
  activate(): void;
  /**
    * Cleans up after rendering operations on self. See docs for Pango.Renderer.activate(). 
    */
  deactivate(): void;
  /**
    * Draw a squiggly line that approximately covers the given rectangle in the style of an underline used to indicate a spelling error. (The width of the underline is rounded to an integer number of up/down segments and the resulting rectangle is centered in the original rectangle)
    * @param x X coordinate of underline, in Pango units in user coordinate system
    * @param y Y coordinate of underline, in Pango units in user coordinate system
    * @param width width of underline, in Pango units in user coordinate system
    * @param height height of underline, in Pango units in user coordinate system 
    */
  drawErrorUnderline(x: number, y: number, width: number, height: number): void;
  /**
    * Draws a single glyph with coordinates in device space.
    * @param font a Pango.Font
    * @param glyph the glyph index of a single glyph
    * @param x X coordinate of left edge of baseline of glyph
    * @param y Y coordinate of left edge of baseline of glyph 
    */
  drawGlyph(font: import('../Pango').Font, glyph: number, x: number, y: number): void;
  /**
    * Draws the glyphs in glyph_item with the specified Pango.Renderer, embedding the text associated with the glyphs in the output if the output format supports it (PDF for example).
    * @param text the UTF-8 text that glyph_item refers to, or None
    * @param glyphItem a Pango.GlyphItem
    * @param x X position of left edge of baseline, in user space coordinates in Pango units.
    * @param y Y position of left edge of baseline, in user space coordinates in Pango units. 
    */
  drawGlyphItem(text: string | null, glyphItem: import('../Pango').GlyphItem, x: number, y: number): void;
  /**
    * Draws the glyphs in glyphs with the specified Pango.Renderer.
    * @param font a Pango.Font
    * @param glyphs a Pango.GlyphString
    * @param x X position of left edge of baseline, in user space coordinates in Pango units.
    * @param y Y position of left edge of baseline, in user space coordinates in Pango units. 
    */
  drawGlyphs(font: import('../Pango').Font, glyphs: import('../Pango').GlyphString, x: number, y: number): void;
  /**
    * Draws layout with the specified Pango.Renderer.
    * @param layout a Pango.Layout
    * @param x X position of left edge of baseline, in user space coordinates in Pango units.
    * @param y Y position of left edge of baseline, in user space coordinates in Pango units. 
    */
  drawLayout(layout: import('../Pango').Layout, x: number, y: number): void;
  /**
    * Draws line with the specified Pango.Renderer.
    * @param line a Pango.LayoutLine
    * @param x X position of left edge of baseline, in user space coordinates in Pango units.
    * @param y Y position of left edge of baseline, in user space coordinates in Pango units. 
    */
  drawLayoutLine(line: import('../Pango').LayoutLine, x: number, y: number): void;
  /**
    * Draws an axis-aligned rectangle in user space coordinates with the specified Pango.Renderer.
    * @param part type of object this rectangle is part of
    * @param x X position at which to draw rectangle, in user space coordinates in Pango units
    * @param y Y position at which to draw rectangle, in user space coordinates in Pango units
    * @param width width of rectangle in Pango units in user space coordinates
    * @param height height of rectangle in Pango units in user space coordinates 
    */
  drawRectangle(part: import('../Pango').RenderPart, x: number, y: number, width: number, height: number): void;
  /**
    * Draws a trapezoid with the parallel sides aligned with the X axis using the given Pango.Renderer; coordinates are in device space.
    * @param part type of object this trapezoid is part of
    * @param y1 Y coordinate of top of trapezoid
    * @param x11 X coordinate of left end of top of trapezoid
    * @param x21 X coordinate of right end of top of trapezoid
    * @param y2 Y coordinate of bottom of trapezoid
    * @param x12 X coordinate of left end of bottom of trapezoid
    * @param x22 X coordinate of right end of bottom of trapezoid 
    */
  drawTrapezoid(part: import('../Pango').RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void;
  /**
    * Gets the current alpha for the specified part.
    * @param part the part to get the alpha for
    * @returns the alpha for the specified part, or 0 if it hasn’t been set and should be inherited from the environment. 
    */
  getAlpha(part: import('../Pango').RenderPart): number;
  /**
    * Gets the current rendering color for the specified part.
    * @param part the part to get the color for
    * @returns the color for the specified part, or None if it hasn’t been set and should be inherited from the environment. 
    */
  getColor(part: import('../Pango').RenderPart): import('../Pango').Color | null;
  /**
    * Gets the layout currently being rendered using self. Calling this function only makes sense from inside a subclass’s methods, like in its draw_shape<!—->() for example.
    * @returns the layout, or None if no layout is being rendered using self at this time. 
    */
  getLayout(): import('../Pango').Layout | null;
  /**
    * Gets the layout line currently being rendered using self. Calling this function only makes sense from inside a subclass’s methods, like in its draw_shape<!—->() for example.
    * @returns the layout line, or None if no layout line is being rendered using self at this time. 
    */
  getLayoutLine(): import('../Pango').LayoutLine | null;
  /**
    * Gets the transformation matrix that will be applied when rendering. See Pango.Renderer.set_matrix().
    * @returns the matrix, or None if no matrix has been set (which is the same as the identity matrix). The returned matrix is owned by Pango and must not be modified or freed. 
    */
  getMatrix(): import('../Pango').Matrix | null;
  /**
    * Informs Pango that the way that the rendering is done for part has changed in a way that would prevent multiple pieces being joined together into one drawing call. For instance, if a subclass of Pango.Renderer was to add a stipple option for drawing underlines, it needs to call
    * @param part the part for which rendering has changed. 
    */
  partChanged(part: import('../Pango').RenderPart): void;
  /**
    * Sets the alpha for part of the rendering. Note that the alpha may only be used if a color is specified for part as well.
    * @param part the part to set the alpha for
    * @param alpha an alpha value between 1 and 65536, or 0 to unset the alpha 
    */
  setAlpha(part: import('../Pango').RenderPart, alpha: number): void;
  /**
    * Sets the color for part of the rendering. Also see Pango.Renderer.set_alpha().
    * @param part the part to change the color of
    * @param color the new color or None to unset the current color 
    */
  setColor(part: import('../Pango').RenderPart, color: import('../Pango').Color | null): void;
  /**
    * Sets the transformation matrix that will be applied when rendering.
    * @param matrix a Pango.Matrix, or None to unset any existing matrix. (No matrix set is the same as setting the identity matrix.) 
    */
  setMatrix(matrix: import('../Pango').Matrix | null): void;
}

