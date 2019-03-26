/**
  * Opaque datatype that records a start time. 
  */
export declare class Timer {
  /**
    * Resumes a timer that has previously been stopped with GLib.Timer.stop(). GLib.Timer.stop() must be called before using this function. 
    */
  continue(): void;
  /**
    * Destroys a timer, freeing associated resources. 
    */
  destroy(): void;
  /**
    * If self has been started but not stopped, obtains the time since the timer was started. If self has been stopped, obtains the elapsed time between the time it was started and the time it was stopped. The return value is the number of seconds elapsed, including any fractional part. The microseconds out parameter is essentially useless.
    * @param microseconds return location for the fractional part of seconds elapsed, in microseconds (that is, the total number of microseconds elapsed, modulo 1000000), or None
    * @returns seconds elapsed as a floating point value, including any fractional part. 
    */
  elapsed(microseconds: number): number;
  /**
    * This function is useless; it’s fine to call GLib.Timer.start() on an already-started timer to reset the start time, so GLib.Timer.reset() serves no purpose. 
    */
  reset(): void;
  /**
    * Marks a start time, so that future calls to GLib.Timer.elapsed() will report the time since GLib.Timer.start() was called. g_timer_new() automatically marks the start time, so no need to call GLib.Timer.start() immediately after creating the timer. 
    */
  start(): void;
  /**
    * Marks an end time, so calls to GLib.Timer.elapsed() will return the difference between this end time and the start time. 
    */
  stop(): void;
}

