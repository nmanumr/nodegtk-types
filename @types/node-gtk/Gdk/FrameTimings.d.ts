/**
  * A Gdk.FrameTimings object holds timing information for a single frame
of the application’s displays. To retrieve Gdk.FrameTimings objects,
use Gdk.FrameClock.get_timings() or Gdk.FrameClock.get_current_timings().
The information in Gdk.FrameTimings is useful for precise synchronization
of video with the event or audio streams, and for measuring
quality metrics for the application’s display, such as latency and jitter. 
  */
export declare class FrameTimings {
  /**
    * The timing information in a Gdk.FrameTimings is filled in incrementally as the frame as drawn and passed off to the window system for processing and display to the user. The accessor functions for Gdk.FrameTimings can return 0 to indicate an unavailable value for two reasons: either because the information is not yet available, or because it isn’t available at all. Once Gdk.FrameTimings.get_complete() returns True for a frame, you can be certain that no further values will become available and be stored in the Gdk.FrameTimings.
    * @returns True if all information that will be available for the frame has been filled in. 
    */
  getComplete(): boolean;
  /**
    * Gets the frame counter value of the Gdk.FrameClock when this this frame was drawn.
    * @returns the frame counter value for this frame 
    */
  getFrameCounter(): number;
  /**
    * Returns the frame time for the frame. This is the time value that is typically used to time animations for the frame. See Gdk.FrameClock.get_frame_time().
    * @returns the frame time for the frame, in the timescale of GLib.get_monotonic_time() 
    */
  getFrameTime(): number;
  /**
    * Gets the predicted time at which this frame will be displayed. Although no predicted time may be available, if one is available, it will be available while the frame is being generated, in contrast to Gdk.FrameTimings.get_presentation_time(), which is only available after the frame has been presented. In general, if you are simply animating, you should use Gdk.FrameClock.get_frame_time() rather than this function, but this function is useful for applications that want exact control over latency. For example, a movie player may want this information for Audio/Video synchronization.
    * @returns The predicted time at which the frame will be presented, in the timescale of GLib.get_monotonic_time(), or 0 if no predicted presentation time is available. 
    */
  getPredictedPresentationTime(): number;
  /**
    * Reurns the presentation time. This is the time at which the frame became visible to the user.
    * @returns the time the frame was displayed to the user, in the timescale of GLib.get_monotonic_time(), or 0 if no presentation time is available. See Gdk.FrameTimings.get_complete() 
    */
  getPresentationTime(): number;
  /**
    * Gets the natural interval between presentation times for the display that this frame was displayed on. Frame presentation usually happens during the “vertical blanking interval”.
    * @returns the refresh interval of the display, in microseconds, or 0 if the refresh interval is not available. See Gdk.FrameTimings.get_complete(). 
    */
  getRefreshInterval(): number;
  /**
    * Increases the reference count of self.
    * @returns self 
    */
  ref(): import('../Gdk').FrameTimings;
  /**
    * Decreases the reference count of self. If self is no longer referenced, it will be freed. 
    */
  unref(): void;
}

