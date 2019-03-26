import * as GObject from '../GObject';
export declare interface FrameClock extends GObject.Object { }

/**
  * A Gdk.FrameClock tells the application when to update and repaint a
window. This may be synced to the vertical refresh rate of the
monitor, for example. Even when the frame clock uses a simple timer
rather than a hardware-based vertical sync, the frame clock helps
because it ensures everything paints at the same time (reducing the
total number of frames). The frame clock can also automatically
stop painting when it knows the frames will not be visible, or
scale back animation framerates. 
  */
export declare abstract class FrameClock {
  /**
    * Starts updates for an animation. Until a matching call to Gdk.FrameClock.end_updating() is made, the frame clock will continually request a new frame with the Gdk.FrameClockPhase.UPDATE phase. This function may be called multiple times and frames will be requested until Gdk.FrameClock.end_updating() is called the same number of times. 
    */
  beginUpdating(): void;
  /**
    * Stops updates for an animation. See the documentation for Gdk.FrameClock.begin_updating(). 
    */
  endUpdating(): void;
  /**
    * Gets the frame timings for the current frame.
    * @returns the Gdk.FrameTimings for the frame currently being processed, or even no frame is being processed, for the previous frame. Before any frames have been processed, returns None. 
    */
  getCurrentTimings(): import('../Gdk').FrameTimings | null;
  /**
    * A Gdk.FrameClock maintains a 64-bit counter that increments for each frame drawn.
    * @returns inside frame processing, the value of the frame counter for the current frame. Outside of frame processing, the frame counter for the last frame. 
    */
  getFrameCounter(): number;
  /**
    * Gets the time that should currently be used for animations.  Inside the processing of a frame, it’s the time used to compute the animation position of everything in a frame. Outside of a frame, it’s the time of the conceptual “previous frame,” which may be either the actual previous frame time, or if that’s too old, an updated time.
    * @returns a timestamp in microseconds, in the timescale of of GLib.get_monotonic_time(). 
    */
  getFrameTime(): number;
  /**
    * Gdk.FrameClock internally keeps a history of Gdk.FrameTimings objects for recent frames that can be retrieved with Gdk.FrameClock.get_timings(). The set of stored frames is the set from the counter values given by Gdk.FrameClock.get_history_start() and Gdk.FrameClock.get_frame_counter(), inclusive.
    * @returns the frame counter value for the oldest frame that is available in the internal frame history of the Gdk.FrameClock. 
    */
  getHistoryStart(): number;
  /**
    * Using the frame history stored in the frame clock, finds the last known presentation time and refresh interval, and assuming that presentation times are separated by the refresh interval, predicts a presentation time that is a multiple of the refresh interval after the last presentation time, and later than base_time.
    * @param baseTime base time for determining a presentaton time
    * @returns refresh_interval_return:  a location to store the determined refresh interval, or None. A default refresh interval of 1/60th of a second will be stored if no history is present. presentation_time_return:  a location to store the next candidate presentation time after the given base time. 0 will be will be stored if no history is present. 
    */
  getRefreshInfo(baseTime: number): [number, number];
  /**
    * Retrieves a Gdk.FrameTimings object holding timing information for the current frame or a recent frame. The Gdk.FrameTimings object may not yet be complete: see Gdk.FrameTimings.get_complete().
    * @param frameCounter the frame counter value identifying the frame to be received.
    * @returns the Gdk.FrameTimings object for the specified frame, or None if it is not available. See Gdk.FrameClock.get_history_start(). 
    */
  getTimings(frameCounter: number): import('../Gdk').FrameTimings | null;
  /**
    * Asks the frame clock to run a particular phase. The signal corresponding the requested phase will be emitted the next time the frame clock processes. Multiple calls to Gdk.FrameClock.request_phase() will be combined together and only one frame processed. If you are displaying animated content and want to continually request the Gdk.FrameClockPhase.UPDATE phase for a period of time, you should use Gdk.FrameClock.begin_updating() instead, since this allows GTK+ to adjust system parameters to get maximally smooth animations.
    * @param phase the phase that is requested 
    */
  requestPhase(phase: import('../Gdk').FrameClockPhase): void;
}

