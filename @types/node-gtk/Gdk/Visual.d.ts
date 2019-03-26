import * as GObject from '../GObject';
export declare interface Visual extends GObject.Object { }

/**
  * A Gdk.Visual contains information about
a particular visual. 
  */
export declare class Visual {
  /**
    * Get the visual with the most available colors for the default GDK screen. The return value should not be freed.
    * @returns best visual 
    */
  static getBest(): import('../Gdk').Visual;
  /**
    * Get the best available depth for the default GDK screen.  “Best” means “largest,” i.e. 32 preferred over 24 preferred over 8 bits per pixel.
    * @returns best available depth 
    */
  static getBestDepth(): number;
  /**
    * Return the best available visual type for the default GDK screen.
    * @returns best visual type 
    */
  static getBestType(): import('../Gdk').VisualType;
  /**
    * Combines Gdk.Visual.get_best_with_depth() and Gdk.Visual.get_best_with_type().
    * @param depth a bit depth
    * @param visualType a visual type
    * @returns best visual with both depth and visual_type, or None if none 
    */
  static getBestWithBoth(depth: number, visualType: import('../Gdk').VisualType): import('../Gdk').Visual | null;
  /**
    * Get the best visual with depth depth for the default GDK screen. Color visuals and visuals with mutable colormaps are preferred over grayscale or fixed-colormap visuals. The return value should not be freed. None may be returned if no visual supports depth.
    * @param depth a bit depth
    * @returns best visual for the given depth 
    */
  static getBestWithDepth(depth: number): import('../Gdk').Visual;
  /**
    * Get the best visual of the given visual_type for the default GDK screen. Visuals with higher color depths are considered better. The return value should not be freed. None may be returned if no visual has type visual_type.
    * @param visualType a visual type
    * @returns best visual of the given type 
    */
  static getBestWithType(visualType: import('../Gdk').VisualType): import('../Gdk').Visual;
  /**
    * Get the system’s default visual for the default GDK screen. This is the visual for the root window of the display. The return value should not be freed.
    * @returns system visual 
    */
  static getSystem(): import('../Gdk').Visual;
  /**
    * Returns the number of significant bits per red, green and blue value.
    * @returns The number of significant bits per color value for self. 
    */
  getBitsPerRgb(): number;
  /**
    * Obtains values that are needed to calculate blue pixel values in TrueColor and DirectColor. The “mask” is the significant bits within the pixel. The “shift” is the number of bits left we must shift a primary for it to be in position (according to the “mask”). Finally, “precision” refers to how much precision the pixel value contains for a particular primary.
    * @returns mask:A pointer to a #guint32 to be filled in, or None shift:A pointer to a int to be filled in, or None precision:A pointer to a int to be filled in, or None 
    */
  getBluePixelDetails(): [number, number, number];
  /**
    * Returns the byte order of this visual.
    * @returns A Gdk.ByteOrder stating the byte order of self. 
    */
  getByteOrder(): import('../Gdk').ByteOrder;
  /**
    * Returns the size of a colormap for this visual.
    * @returns The size of a colormap that is suitable for self. 
    */
  getColormapSize(): number;
  /**
    * Returns the bit depth of this visual.
    * @returns The bit depth of this visual. 
    */
  getDepth(): number;
  /**
    * Obtains values that are needed to calculate green pixel values in TrueColor and DirectColor. The “mask” is the significant bits within the pixel. The “shift” is the number of bits left we must shift a primary for it to be in position (according to the “mask”). Finally, “precision” refers to how much precision the pixel value contains for a particular primary.
    * @returns mask:A pointer to a #guint32 to be filled in, or None shift:A pointer to a int to be filled in, or None precision:A pointer to a int to be filled in, or None 
    */
  getGreenPixelDetails(): [number, number, number];
  /**
    * Obtains values that are needed to calculate red pixel values in TrueColor and DirectColor. The “mask” is the significant bits within the pixel. The “shift” is the number of bits left we must shift a primary for it to be in position (according to the “mask”). Finally, “precision” refers to how much precision the pixel value contains for a particular primary.
    * @returns mask:A pointer to a #guint32 to be filled in, or None shift:A pointer to a int to be filled in, or None precision:A pointer to a int to be filled in, or None 
    */
  getRedPixelDetails(): [number, number, number];
  /**
    * Gets the screen to which this visual belongs
    * @returns the screen to which this visual belongs. 
    */
  getScreen(): import('../Gdk').Screen;
  /**
    * Returns the type of visual this is (PseudoColor, TrueColor, etc).
    * @returns A Gdk.VisualType stating the type of self. 
    */
  getVisualType(): import('../Gdk').VisualType;
}

