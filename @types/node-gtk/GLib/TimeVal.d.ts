/**
  * Represents a precise time, with seconds and microseconds.
Similar to the struct timeval returned by the gettimeofday()
UNIX system call. 
  */
export declare class TimeVal {
  /**
    * Converts a string containing an ISO 8601 encoded date and time to a GLib.TimeVal and puts it into time_.
    * @param isoDate an ISO 8601 encoded date string
    * @returns True if the conversion was successful.  time_:a GLib.TimeVal 
    */
  static fromIso8601(isoDate: string): [boolean, import('../GLib').TimeVal];
  /**
    * Adds the given number of microseconds to self. microseconds can also be negative to decrease the value of self.
    * @param microseconds number of microseconds to add to time 
    */
  add(microseconds: number): void;
  /**
    * Converts self into an RFC 3339 encoded string, relative to the Coordinated Universal Time (UTC). This is one of the many formats allowed by ISO 8601.
    * @returns a newly allocated string containing an ISO 8601 date, or None if self was too large 
    */
  toIso8601(): string | null;
}

