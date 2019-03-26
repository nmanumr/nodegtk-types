/**
  * Represents a day between January 1, Year 1 and a few thousand years in
the future. None of its members should be accessed directly. 
  */
export declare class Date {
  /**
    * Returns the number of days in a month, taking leap years into account.
    * @param month month
    * @param year year
    * @returns number of days in month during the year 
    */
  static getDaysInMonth(month: import('../GLib').DateMonth, year: number): number;
  /**
    * Returns the number of weeks in the year, where weeks are taken to start on Monday. Will be 52 or 53. The date must be valid. (Years always have 52 7-day periods, plus 1 or 2 extra days depending on whether it’s a leap year. This function is basically telling you how many Mondays are in the year, i.e. there are 53 Mondays if one of the extra days happens to be a Monday.)
    * @param year a year
    * @returns number of Mondays in the year 
    */
  static getMondayWeeksInYear(year: number): number;
  /**
    * Returns the number of weeks in the year, where weeks are taken to start on Sunday. Will be 52 or 53. The date must be valid. (Years always have 52 7-day periods, plus 1 or 2 extra days depending on whether it’s a leap year. This function is basically telling you how many Sundays are in the year, i.e. there are 53 Sundays if one of the extra days happens to be a Sunday.)
    * @param year year to count weeks in
    * @returns the number of weeks in year 
    */
  static getSundayWeeksInYear(year: number): number;
  /**
    * Returns True if the year is a leap year.
    * @param year year to check
    * @returns True if the year is a leap year 
    */
  static isLeapYear(year: number): boolean;
  /**
    * Allocates a GLib.Date and initializes it to a sane state. The new date will be cleared (as if you’d called GLib.Date.clear()) but invalid (it won’t represent an existing day). Free the return value with GLib.Date.free().
    * @returns a newly-allocated GLib.Date 
    */
  static new(): import('../GLib').Date;
  /**
    * Like GLib.Date.new(), but also sets the value of the date. Assuming the day-month-year triplet you pass in represents an existing day, the returned date will be valid.
    * @param day day of the month
    * @param month month of the year
    * @param year year
    * @returns a newly-allocated GLib.Date initialized with day, month, and year 
    */
  static newDmy(day: number, month: import('../GLib').DateMonth, year: number): import('../GLib').Date;
  /**
    * Like GLib.Date.new(), but also sets the value of the date. Assuming the Julian day number you pass in is valid (greater than 0, less than an unreasonably large number), the returned date will be valid.
    * @param julianDay days since January 1, Year 1
    * @returns a newly-allocated GLib.Date initialized with julian_day 
    */
  static newJulian(julianDay: number): import('../GLib').Date;
  /**
    * Generates a printed representation of the date, in a locale-specific way. Works just like the platform’s C library strftime() function, but only accepts date-related formats; time-related formats give undefined results. Date must be valid. Unlike strftime() (which uses the locale encoding), works on a UTF-8 format string and stores a UTF-8 result.
    * @param s destination buffer
    * @param slen buffer size
    * @param format format string
    * @param date valid GLib.Date
    * @returns number of characters written to the buffer, or 0 the buffer was too small 
    */
  static strftime(s: string, slen: number, format: string, date: import('../GLib').Date): number;
  /**
    * Returns True if the day of the month is valid (a day is valid if it’s between 1 and 31 inclusive).
    * @param day day to check
    * @returns True if the day is valid 
    */
  static validDay(day: number): boolean;
  /**
    * Returns True if the day-month-year triplet forms a valid, existing day in the range of days GLib.Date understands (Year 1 or later, no more than a few thousand years in the future).
    * @param day day
    * @param month month
    * @param year year
    * @returns True if the date is a valid one 
    */
  static validDmy(day: number, month: import('../GLib').DateMonth, year: number): boolean;
  /**
    * Returns True if the Julian day is valid. Anything greater than zero is basically a valid Julian, though there is a 32-bit limit.
    * @param julianDate Julian day to check
    * @returns True if the Julian day is valid 
    */
  static validJulian(julianDate: number): boolean;
  /**
    * Returns True if the month value is valid. The 12 GLib.DateMonth enumeration values are the only valid months.
    * @param month month
    * @returns True if the month is valid 
    */
  static validMonth(month: import('../GLib').DateMonth): boolean;
  /**
    * Returns True if the weekday is valid. The seven GLib.DateWeekday enumeration values are the only valid weekdays.
    * @param weekday weekday
    * @returns True if the weekday is valid 
    */
  static validWeekday(weekday: import('../GLib').DateWeekday): boolean;
  /**
    * Returns True if the year is valid. Any year greater than 0 is valid, though there is a 16-bit limit to what GLib.Date will understand.
    * @param year year
    * @returns True if the year is valid 
    */
  static validYear(year: number): boolean;
  /**
    * Increments a date some number of days. To move forward by weeks, add weeks*7 days. The date must be valid.
    * @param nDays number of days to move the date forward 
    */
  addDays(nDays: number): void;
  /**
    * Increments a date by some number of months. If the day of the month is greater than 28, this routine may change the day of the month (because the destination month may not have the current day in it). The date must be valid.
    * @param nMonths number of months to move forward 
    */
  addMonths(nMonths: number): void;
  /**
    * Increments a date by some number of years. If the date is February 29, and the destination year is not a leap year, the date will be changed to February 28. The date must be valid.
    * @param nYears number of years to move forward 
    */
  addYears(nYears: number): void;
  /**
    * If self is prior to min_date, sets self equal to min_date. If self falls after max_date, sets self equal to max_date. Otherwise, self is unchanged. Either of min_date and max_date may be None. All non-None dates must be valid.
    * @param minDate minimum accepted value for self
    * @param maxDate maximum accepted value for self 
    */
  clamp(minDate: import('../GLib').Date, maxDate: import('../GLib').Date): void;
  /**
    * Initializes one or more GLib.Date structs to a sane but invalid state. The cleared dates will not represent an existing date, but will not contain garbage. Useful to init a date declared on the stack. Validity can be tested with GLib.Date.valid().
    * @param nDates number of dates to clear 
    */
  clear(nDates: number): void;
  /**
    * qsort()-style comparison function for dates. Both dates must be valid.
    * @param rhs second date to compare
    * @returns 0 for equal, less than zero if self is less than rhs, greater than zero if self is greater than rhs 
    */
  compare(rhs: import('../GLib').Date): number;
  /**
    * Copies a GLib.Date to a newly-allocated GLib.Date. If the input was invalid (as determined by GLib.Date.valid()), the invalid state will be copied as is into the new object.
    * @returns a newly-allocated GLib.Date initialized from self 
    */
  copy(): import('../GLib').Date;
  /**
    * Computes the number of days between two dates. If date2 is prior to self, the returned value is negative. Both dates must be valid.
    * @param date2 the second date
    * @returns the number of days between self and date2 
    */
  daysBetween(date2: import('../GLib').Date): number;
  /**
    * Frees a GLib.Date returned from GLib.Date.new(). 
    */
  free(): void;
  /**
    * Returns the day of the month. The date must be valid.
    * @returns day of the month 
    */
  getDay(): number;
  /**
    * Returns the day of the year, where Jan 1 is the first day of the year. The date must be valid.
    * @returns day of the year 
    */
  getDayOfYear(): number;
  /**
    * Returns the week of the year, where weeks are interpreted according to ISO 8601.
    * @returns ISO 8601 week number of the year. 
    */
  getIso8601WeekOfYear(): number;
  /**
    * Returns the Julian day or “serial number” of the GLib.Date. The Julian day is simply the number of days since January 1, Year 1; i.e., January 1, Year 1 is Julian day 1; January 2, Year 1 is Julian day 2, etc. The date must be valid.
    * @returns Julian day 
    */
  getJulian(): number;
  /**
    * Returns the week of the year, where weeks are understood to start on Monday. If the date is before the first Monday of the year, return 0. The date must be valid.
    * @returns week of the year 
    */
  getMondayWeekOfYear(): number;
  /**
    * Returns the month of the year. The date must be valid.
    * @returns month of the year as a GLib.DateMonth 
    */
  getMonth(): import('../GLib').DateMonth;
  /**
    * Returns the week of the year during which this date falls, if weeks are understood to begin on Sunday. The date must be valid. Can return 0 if the day is before the first Sunday of the year.
    * @returns week number 
    */
  getSundayWeekOfYear(): number;
  /**
    * Returns the day of the week for a GLib.Date. The date must be valid.
    * @returns day of the week as a GLib.DateWeekday. 
    */
  getWeekday(): import('../GLib').DateWeekday;
  /**
    * Returns the year of a GLib.Date. The date must be valid.
    * @returns year in which the date falls 
    */
  getYear(): number;
  /**
    * Returns True if the date is on the first of a month. The date must be valid.
    * @returns True if the date is the first of the month 
    */
  isFirstOfMonth(): boolean;
  /**
    * Returns True if the date is the last day of the month. The date must be valid.
    * @returns True if the date is the last day of the month 
    */
  isLastOfMonth(): boolean;
  /**
    * Checks if self is less than or equal to date2, and swap the values if this is not the case.
    * @param date2 the second date 
    */
  order(date2: import('../GLib').Date): void;
  /**
    * Sets the day of the month for a GLib.Date. If the resulting day-month-year triplet is invalid, the date will be invalid.
    * @param day day to set 
    */
  setDay(day: number): void;
  /**
    * Sets the value of a GLib.Date from a day, month, and year. The day-month-year triplet must be valid; if you aren’t sure it is, call GLib.Date.valid_dmy() to check before you set it.
    * @param day day
    * @param month month
    * @param y year 
    */
  setDmy(day: number, month: import('../GLib').DateMonth, y: number): void;
  /**
    * Sets the value of a GLib.Date from a Julian day number.
    * @param julianDate Julian day number (days since January 1, Year 1) 
    */
  setJulian(julianDate: number): void;
  /**
    * Sets the month of the year for a GLib.Date.  If the resulting day-month-year triplet is invalid, the date will be invalid.
    * @param month month to set 
    */
  setMonth(month: import('../GLib').DateMonth): void;
  /**
    * Parses a user-inputted string str, and try to figure out what date it represents, taking the current locale into account. If the string is successfully parsed, the date will be valid after the call. Otherwise, it will be invalid. You should check using GLib.Date.valid() to see whether the parsing succeeded.
    * @param str string to parse 
    */
  setParse(str: string): void;
  /**
    * Sets the value of a date from a #GTime value. The time to date conversion is done using the user’s current timezone.
    * @param time #GTime value to set. 
    */
  setTime(time: number): void;
  /**
    * Sets the value of a date to the date corresponding to a time specified as a time_t. The time to date conversion is done using the user’s current timezone.
    * @param timet time_t value to set 
    */
  setTimeT(timet: number): void;
  /**
    * Sets the value of a date from a GLib.TimeVal value.  Note that the tv_usec member is ignored, because GLib.Date can’t make use of the additional precision.
    * @param timeval GLib.TimeVal value to set 
    */
  setTimeVal(timeval: import('../GLib').TimeVal): void;
  /**
    * Sets the year for a GLib.Date. If the resulting day-month-year triplet is invalid, the date will be invalid.
    * @param year year to set 
    */
  setYear(year: number): void;
  /**
    * Moves a date some number of days into the past. To move by weeks, just move by weeks*7 days. The date must be valid.
    * @param nDays number of days to move 
    */
  subtractDays(nDays: number): void;
  /**
    * Moves a date some number of months into the past. If the current day of the month doesn’t exist in the destination month, the day of the month may change. The date must be valid.
    * @param nMonths number of months to move 
    */
  subtractMonths(nMonths: number): void;
  /**
    * Moves a date some number of years into the past. If the current day doesn’t exist in the destination year (i.e. it’s February 29 and you move to a non-leap-year) then the day is changed to February 29. The date must be valid.
    * @param nYears number of years to move 
    */
  subtractYears(nYears: number): void;
  /**
    * Fills in the date-related bits of a struct tm using the self value. Initializes the non-date parts with something sane but meaningless.
    * @param tm struct tm to fill 
    */
  toStructTm(tm: Object): void;
  /**
    * Returns True if the GLib.Date represents an existing day. The date must not contain garbage; it should have been initialized with GLib.Date.clear() if it wasn’t allocated by one of the GLib.Date.new() variants.
    * @returns Whether the date is valid 
    */
  valid(): boolean;
}

