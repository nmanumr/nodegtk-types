/**
  * GDateTime is an opaque structure whose members
cannot be accessed directly. 
  */
export declare class DateTime {
  /**
    * A comparison function for GLib.DateTimes that is suitable as a GLib.CompareFunc. Both GLib.DateTimes must be non-None.
    * @param dt1 first GLib.DateTime to compare
    * @param dt2 second GLib.DateTime to compare
    * @returns -1, 0 or 1 if dt1 is less than, equal to or greater than dt2. 
    */
  static compare(dt1: Object, dt2: Object): number;
  /**
    * Checks to see if dt1 and dt2 are equal.
    * @param dt1 a GLib.DateTime
    * @param dt2 a GLib.DateTime
    * @returns True if dt1 and dt2 are equal 
    */
  static equal(dt1: Object, dt2: Object): boolean;
  /**
    * Hashes datetime into a int, suitable for use within GLib.HashTable.
    * @param datetime a GLib.DateTime
    * @returns a int containing the hash 
    */
  static hash(datetime: Object): number;
  /**
    * Creates a new GLib.DateTime corresponding to the given date and time in the time zone tz.
    * @param tz a GLib.TimeZone
    * @param year the year component of the date
    * @param month the month component of the date
    * @param day the day component of the date
    * @param hour the hour component of the date
    * @param minute the minute component of the date
    * @param seconds the number of seconds past the minute
    * @returns a new GLib.DateTime, or None 
    */
  static new(tz: import('../GLib').TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to the given ISO 8601 formatted string text. ISO 8601 strings of the form <date><sep><time><tz> are supported.
    * @param text an ISO 8601 formatted time string.
    * @param defaultTz a GLib.TimeZone to use if the text doesn’t contain a timezone, or None.
    * @returns a new GLib.DateTime, or None 
    */
  static newFromIso8601(text: string, defaultTz: import('../GLib').TimeZone | null): import('../GLib').DateTime | null;
  /**
    * Creates a GLib.DateTime corresponding to the given GLib.TimeVal tv in the local time zone.
    * @param tv a GLib.TimeVal
    * @returns a new GLib.DateTime, or None 
    */
  static newFromTimevalLocal(tv: import('../GLib').TimeVal): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to the given GLib.TimeVal tv in UTC.
    * @param tv a GLib.TimeVal
    * @returns a new GLib.DateTime, or None 
    */
  static newFromTimevalUtc(tv: import('../GLib').TimeVal): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to the given Unix time t in the local time zone.
    * @param t the Unix time
    * @returns a new GLib.DateTime, or None 
    */
  static newFromUnixLocal(t: number): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to the given Unix time t in UTC.
    * @param t the Unix time
    * @returns a new GLib.DateTime, or None 
    */
  static newFromUnixUtc(t: number): import('../GLib').DateTime;
  /**
    * Creates a new GLib.DateTime corresponding to the given date and time in the local time zone.
    * @param year the year component of the date
    * @param month the month component of the date
    * @param day the day component of the date
    * @param hour the hour component of the date
    * @param minute the minute component of the date
    * @param seconds the number of seconds past the minute
    * @returns a GLib.DateTime, or None 
    */
  static newLocal(year: number, month: number, day: number, hour: number, minute: number, seconds: number): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to this exact instant in the given time zone tz.  The time is as accurate as the system allows, to a maximum accuracy of 1 microsecond.
    * @param tz a GLib.TimeZone
    * @returns a new GLib.DateTime, or None 
    */
  static newNow(tz: import('../GLib').TimeZone): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to this exact instant in the local time zone.
    * @returns a new GLib.DateTime, or None 
    */
  static newNowLocal(): import('../GLib').DateTime;
  /**
    * Creates a GLib.DateTime corresponding to this exact instant in UTC.
    * @returns a new GLib.DateTime, or None 
    */
  static newNowUtc(): import('../GLib').DateTime;
  /**
    * Creates a new GLib.DateTime corresponding to the given date and time in UTC.
    * @param year the year component of the date
    * @param month the month component of the date
    * @param day the day component of the date
    * @param hour the hour component of the date
    * @param minute the minute component of the date
    * @param seconds the number of seconds past the minute
    * @returns a GLib.DateTime, or None 
    */
  static newUtc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified timespan to the copy.
    * @param timespan a #GTimeSpan
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  add(timespan: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified number of days to the copy. Add negative values to subtract days.
    * @param days the number of days
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addDays(days: number): import('../GLib').DateTime;
  /**
    * Creates a new GLib.DateTime adding the specified values to the current date and time in self. Add negative values to subtract.
    * @param years the number of years to add
    * @param months the number of months to add
    * @param days the number of days to add
    * @param hours the number of hours to add
    * @param minutes the number of minutes to add
    * @param seconds the number of seconds to add
    * @returns the newly created GLib.DateTime that should be freed with GLib.DateTime.unref(). 
    */
  addFull(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified number of hours. Add negative values to subtract hours.
    * @param hours the number of hours to add
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addHours(hours: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self adding the specified number of minutes. Add negative values to subtract minutes.
    * @param minutes the number of minutes to add
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addMinutes(minutes: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified number of months to the copy. Add negative values to subtract months.
    * @param months the number of months
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addMonths(months: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified number of seconds. Add negative values to subtract seconds.
    * @param seconds the number of seconds to add
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addSeconds(seconds: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified number of weeks to the copy. Add negative values to subtract weeks.
    * @param weeks the number of weeks
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addWeeks(weeks: number): import('../GLib').DateTime;
  /**
    * Creates a copy of self and adds the specified number of years to the copy. Add negative values to subtract years.
    * @param years the number of years
    * @returns the newly created GLib.DateTime which should be freed with GLib.DateTime.unref(). 
    */
  addYears(years: number): import('../GLib').DateTime;
  /**
    * Calculates the difference in time between self and begin.  The #GTimeSpan that is returned is effectively self - begin (ie: positive if the first parameter is larger).
    * @param begin a GLib.DateTime
    * @returns the difference between the two GLib.DateTime, as a time span expressed in microseconds. 
    */
  difference(begin: import('../GLib').DateTime): number;
  /**
    * Creates a newly allocated string representing the requested format.
    * @param format a valid UTF-8 string, containing the format for the GLib.DateTime
    * @returns a newly allocated string formatted to the requested format or None in the case that there was an error (such as a format specifier not being supported in the current locale). The string should be freed with GLib.free(). 
    */
  format(format: string): string;
  /**
    * Retrieves the day of the month represented by self in the gregorian calendar.
    * @returns the day of the month 
    */
  getDayOfMonth(): number;
  /**
    * Retrieves the ISO 8601 day of the week on which self falls (1 is Monday, 2 is Tuesday… 7 is Sunday).
    * @returns the day of the week 
    */
  getDayOfWeek(): number;
  /**
    * Retrieves the day of the year represented by self in the Gregorian calendar.
    * @returns the day of the year 
    */
  getDayOfYear(): number;
  /**
    * Retrieves the hour of the day represented by self
    * @returns the hour of the day 
    */
  getHour(): number;
  /**
    * Retrieves the microsecond of the date represented by self
    * @returns the microsecond of the second 
    */
  getMicrosecond(): number;
  /**
    * Retrieves the minute of the hour represented by self
    * @returns the minute of the hour 
    */
  getMinute(): number;
  /**
    * Retrieves the month of the year represented by self in the Gregorian calendar.
    * @returns the month represented by self 
    */
  getMonth(): number;
  /**
    * Retrieves the second of the minute represented by self
    * @returns the second represented by self 
    */
  getSecond(): number;
  /**
    * Retrieves the number of seconds since the start of the last minute, including the fractional part.
    * @returns the number of seconds 
    */
  getSeconds(): number;
  /**
    * Get the time zone for this self.
    * @returns the time zone 
    */
  getTimezone(): import('../GLib').TimeZone;
  /**
    * Determines the time zone abbreviation to be used at the time and in the time zone of self.
    * @returns the time zone abbreviation. The returned string is owned by the GLib.DateTime and it should not be modified or freed 
    */
  getTimezoneAbbreviation(): string;
  /**
    * Determines the offset to UTC in effect at the time and in the time zone of self.
    * @returns the number of microseconds that should be added to UTC to get the local time 
    */
  getUtcOffset(): number;
  /**
    * Returns the ISO 8601 week-numbering year in which the week containing self falls.
    * @returns the ISO 8601 week-numbering year for self 
    */
  getWeekNumberingYear(): number;
  /**
    * Returns the ISO 8601 week number for the week containing self. The ISO 8601 week number is the same for every day of the week (from Moday through Sunday).  That can produce some unusual results (described below).
    * @returns the ISO 8601 week number for self. 
    */
  getWeekOfYear(): number;
  /**
    * Retrieves the year represented by self in the Gregorian calendar.
    * @returns the year represented by self 
    */
  getYear(): number;
  /**
    * Retrieves the Gregorian day, month, and year of a given GLib.DateTime.
    * @returns year:the return location for the gregorian year, or None. month:the return location for the month of the year, or None. day:the return location for the day of the month, or None. 
    */
  getYmd(): [number, number, number];
  /**
    * Determines if daylight savings time is in effect at the time and in the time zone of self.
    * @returns True if daylight savings time is in effect 
    */
  isDaylightSavings(): boolean;
  /**
    * Atomically increments the reference count of self by one.
    * @returns the GLib.DateTime with the reference count increased 
    */
  ref(): import('../GLib').DateTime;
  /**
    * Creates a new GLib.DateTime corresponding to the same instant in time as self, but in the local time zone.
    * @returns the newly created GLib.DateTime 
    */
  toLocal(): import('../GLib').DateTime;
  /**
    * Stores the instant in time that self represents into tv.
    * @param tv a GLib.TimeVal to modify
    * @returns True if successful, else False 
    */
  toTimeval(tv: import('../GLib').TimeVal): boolean;
  /**
    * Create a new GLib.DateTime corresponding to the same instant in time as self, but in the time zone tz.
    * @param tz the new GLib.TimeZone
    * @returns a new GLib.DateTime, or None 
    */
  toTimezone(tz: import('../GLib').TimeZone): import('../GLib').DateTime;
  /**
    * Gives the Unix time corresponding to self, rounding down to the nearest second.
    * @returns the Unix time corresponding to self 
    */
  toUnix(): number;
  /**
    * Creates a new GLib.DateTime corresponding to the same instant in time as self, but in UTC.
    * @returns the newly created GLib.DateTime 
    */
  toUtc(): import('../GLib').DateTime;
  /**
    * Atomically decrements the reference count of self by one. 
    */
  unref(): void;
}

