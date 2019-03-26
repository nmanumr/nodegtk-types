import * as GObject from '../GObject';
export declare interface PixbufAnimationIter extends GObject.Object { }

/**
  * An opaque struct representing an iterator which points to a
certain position in an animation. 
  */
export declare class PixbufAnimationIter {
  /**
    * Possibly advances an animation to a new frame. Chooses the frame based on the start time passed to GdkPixbuf.PixbufAnimation.get_iter().
    * @param currentTime current time
    * @returns True if the image may need updating 
    */
  advance(currentTime: import('../GLib').TimeVal | null): boolean;
  /**
    * Gets the number of milliseconds the current pixbuf should be displayed, or -1 if the current pixbuf should be displayed forever. GLib.timeout_add() conveniently takes a timeout in milliseconds, so you can use a timeout to schedule the next update.
    * @returns delay time in milliseconds (thousandths of a second) 
    */
  getDelayTime(): number;
  /**
    * Gets the current pixbuf which should be displayed; the pixbuf might not be the same size as the animation itself (GdkPixbuf.PixbufAnimation.get_width(), GdkPixbuf.PixbufAnimation.get_height()). This pixbuf should be displayed for GdkPixbuf.PixbufAnimationIter.get_delay_time() milliseconds. The caller of this function does not own a reference to the returned pixbuf; the returned pixbuf will become invalid when the iterator advances to the next frame, which may happen anytime you call GdkPixbuf.PixbufAnimationIter.advance(). Copy the pixbuf to keep it (don’t just add a reference), as it may get recycled as you advance the iterator.
    * @returns the pixbuf to be displayed 
    */
  getPixbuf(): import('../GdkPixbuf').Pixbuf;
  /**
    * Used to determine how to respond to the area_updated signal on GdkPixbuf.PixbufLoader when loading an animation. area_updated is emitted for an area of the frame currently streaming in to the loader. So if you’re on the currently loading frame, you need to redraw the screen for the updated area.
    * @returns True if the frame we’re on is partially loaded, or the last frame 
    */
  onCurrentlyLoadingFrame(): boolean;
}

