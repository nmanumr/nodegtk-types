import * as GObject from '../GObject';
export declare interface DrawingContext extends GObject.Object { }

/**
  * Gdk.DrawingContext is an object that represents the current drawing
state of a Gdk.Window. 
  */
export declare class DrawingContext {
  /**
    * Retrieves a Cairo context to be used to draw on the Gdk.Window that created the Gdk.DrawingContext.
    * @returns a Cairo context to be used to draw the contents of the Gdk.Window. The context is owned by the Gdk.DrawingContext and should not be destroyed 
    */
  getCairoContext(): import('../cairo').Context;
  /**
    * Retrieves a copy of the clip region used when creating the self.
    * @returns a Cairo region 
    */
  getClip(): import('../cairo').Region | null;
  /**
    * Retrieves the window that created the drawing self.
    * @returns a Gdk.Window 
    */
  getWindow(): import('../Gdk').Window;
  /**
    * Checks whether the given Gdk.DrawingContext is valid.
    * @returns True if the context is valid 
    */
  isValid(): boolean;
  /**
    * The clip region of the context 
    */
  clip: import('../cairo').Region;
  /**
    * The window that created the context 
    */
  window: import('../Gdk').Window;
}

