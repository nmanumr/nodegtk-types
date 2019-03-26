import * as GdkPixbuf from '../GdkPixbuf';
export declare interface PixbufSimpleAnim extends GdkPixbuf.PixbufAnimation { }

/**
  * An opaque struct representing a simple animation. 
  */
export declare class PixbufSimpleAnim {
  /**
    * Creates a new, empty animation.
    * @param width the width of the animation
    * @param height the height of the animation
    * @param rate the speed of the animation, in frames per second
    * @returns a newly allocated GdkPixbuf.PixbufSimpleAnim 
    */
  static new(width: number, height: number, rate: number): import('../GdkPixbuf').PixbufSimpleAnim;
  /**
    * Adds a new frame to self. The pixbuf must have the dimensions specified when the animation was constructed.
    * @param pixbuf the pixbuf to add 
    */
  addFrame(pixbuf: import('../GdkPixbuf').Pixbuf): void;
  /**
    * Gets whether self should loop indefinitely when it reaches the end.
    * @returns True if the animation loops forever, False otherwise 
    */
  getLoop(): boolean;
  /**
    * Sets whether self should loop indefinitely when it reaches the end.
    * @param loop whether to loop the animation 
    */
  setLoop(loop: boolean): void;
  /**
    * Whether the animation should loop when it reaches the end 
    */
  loop: boolean;
}

