import * as Gtk from '../Gtk';
export declare interface Calendar extends Gtk.Widget { }

/**
  * Gtk.Calendar is a widget that displays a Gregorian calendar, one month
at a time. It can be created with Gtk.Calendar.new(). 
  */
export declare class Calendar {
  /**
    * Creates a new calendar, with the current date being selected.
    * @returns a newly Gtk.Calendar widget 
    */
  static new(): import('../Gtk').Widget;
  /**
    * Remove all visual markers. 
    */
  clearMarks(): void;
  /**
    * Obtains the selected date from a Gtk.Calendar.
    * @returns year:location to store the year as a decimal number (e.g. 2011), or None month:location to store the month number (between 0 and 11), or None day:location to store the day number (between 1 and 31), or None 
    */
  getDate(): [number, number, number];
  /**
    * Returns if the day of the self is already marked.
    * @param day the day number between 1 and 31.
    * @returns whether the day is marked. 
    */
  getDayIsMarked(day: number): boolean;
  /**
    * Queries the height of detail cells, in rows. See Gtk.Calendar :detail-width-chars.
    * @returns The height of detail cells, in rows. 
    */
  getDetailHeightRows(): number;
  /**
    * Queries the width of detail cells, in characters. See Gtk.Calendar :detail-width-chars.
    * @returns The width of detail cells, in characters. 
    */
  getDetailWidthChars(): number;
  /**
    * Returns the current display options of self.
    * @returns the display options. 
    */
  getDisplayOptions(): import('../Gtk').CalendarDisplayOptions;
  /**
    * Places a visual marker on a particular day.
    * @param day the day number to mark between 1 and 31. 
    */
  markDay(day: number): void;
  /**
    * Selects a day from the current month.
    * @param day the day number between 1 and 31, or 0 to unselect the currently selected day. 
    */
  selectDay(day: number): void;
  /**
    * Shifts the calendar to a different month.
    * @param month a month number between 0 and 11.
    * @param year the year the month is in. 
    */
  selectMonth(month: number, year: number): void;
  /**
    * Installs a function which provides Pango markup with detail information for each day. Examples for such details are holidays or appointments. That information is shown below each day when Gtk.Calendar :show-details is set. A tooltip containing with full detail information is provided, if the entire text should not fit into the details area, or if Gtk.Calendar :show-details is not set.
    * @param func a function providing details for each day.
    * @param data data to pass to func invokations. 
    */
  setDetailFunc(func: import('../Gtk').calendarDetailFunc, data: Object | null): void;
  /**
    * Updates the height of detail cells. See Gtk.Calendar :detail-height-rows.
    * @param rows detail height in rows. 
    */
  setDetailHeightRows(rows: number): void;
  /**
    * Updates the width of detail cells. See Gtk.Calendar :detail-width-chars.
    * @param chars detail width in characters. 
    */
  setDetailWidthChars(chars: number): void;
  /**
    * Sets display options (whether to display the heading and the month headings).
    * @param flags the display options to set 
    */
  setDisplayOptions(flags: import('../Gtk').CalendarDisplayOptions): void;
  /**
    * Removes the visual marker from a particular day.
    * @param day the day number to unmark between 1 and 31. 
    */
  unmarkDay(day: number): void;
  /**
    * The selected day (as a number between 1 and 31, or 0 to unselect the currently selected day) 
    */
  day: number;
  /**
    * Details height in rows 
    */
  detailHeightRows: number;
  /**
    * Details width in characters 
    */
  detailWidthChars: number;
  /**
    * The selected month (as a number between 0 and 11) 
    */
  month: number;
  /**
    * If True, the selected month cannot be changed 
    */
  noMonthChange: boolean;
  /**
    * If True, day names are displayed 
    */
  showDayNames: boolean;
  /**
    * If True, details are shown 
    */
  showDetails: boolean;
  /**
    * If True, a heading is displayed 
    */
  showHeading: boolean;
  /**
    * If True, week numbers are displayed 
    */
  showWeekNumbers: boolean;
  /**
    * The selected year 
    */
  year: number;
}

