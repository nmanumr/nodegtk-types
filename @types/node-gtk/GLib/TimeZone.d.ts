/**
  * GLib.TimeZone is an opaque structure whose members cannot be accessed
directly. 
  */
export declare class TimeZone {
  /**
    * Creates a GLib.TimeZone corresponding to identifier.
    * @param identifier a timezone identifier
    * @returns the requested timezone 
    */
  static new(identifier: string | null): import('../GLib').TimeZone;
  /**
    * Creates a GLib.TimeZone corresponding to local time.  The local time zone may change between invocations to this function; for example, if the system administrator changes it.
    * @returns the local timezone 
    */
  static newLocal(): import('../GLib').TimeZone;
  /**
    * Creates a GLib.TimeZone corresponding to the given constant offset from UTC, in seconds.
    * @param seconds offset to UTC, in seconds
    * @returns a timezone at the given offset from UTC 
    */
  static newOffset(seconds: number): import('../GLib').TimeZone;
  /**
    * Creates a GLib.TimeZone corresponding to UTC.
    * @returns the universal timezone 
    */
  static newUtc(): import('../GLib').TimeZone;
  /**
    * Finds an interval within self that corresponds to the given time_, possibly adjusting time_ if required to fit into an interval. The meaning of time_ depends on type.
    * @param type the GLib.TimeType of time_
    * @param time a pointer to a number of seconds since January 1, 1970
    * @returns the interval containing time_, never -1 
    */
  adjustTime(type: import('../GLib').TimeType, time: number): number;
  /**
    * Finds an the interval within self that corresponds to the given time_. The meaning of time_ depends on type.
    * @param type the GLib.TimeType of time_
    * @param time a number of seconds since January 1, 1970
    * @returns the interval containing time_, or -1 in case of failure 
    */
  findInterval(type: import('../GLib').TimeType, time: number): number;
  /**
    * Determines the time zone abbreviation to be used during a particular interval of time in the time zone self.
    * @param interval an interval within the timezone
    * @returns the time zone abbreviation, which belongs to self 
    */
  getAbbreviation(interval: number): string;
  /**
    * Get the identifier of this GLib.TimeZone, as passed to GLib.TimeZone.new(). If the identifier passed at construction time was not recognised, UTC will be returned. If it was None, the identifier of the local timezone at construction time will be returned.
    * @returns identifier for this timezone 
    */
  getIdentifier(): string;
  /**
    * Determines the offset to UTC in effect during a particular interval of time in the time zone self.
    * @param interval an interval within the timezone
    * @returns the number of seconds that should be added to UTC to get the local time in self 
    */
  getOffset(interval: number): number;
  /**
    * Determines if daylight savings time is in effect during a particular interval of time in the time zone self.
    * @param interval an interval within the timezone
    * @returns True if daylight savings time is in effect 
    */
  isDst(interval: number): boolean;
  /**
    * Increases the reference count on self.
    * @returns a new reference to self. 
    */
  ref(): import('../GLib').TimeZone;
  /**
    * Decreases the reference count on self. 
    */
  unref(): void;
}

