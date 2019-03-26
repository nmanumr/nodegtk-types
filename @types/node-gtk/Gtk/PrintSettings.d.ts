import * as GObject from '../GObject';
export declare interface PrintSettings extends GObject.Object { }

/**
  * A Gtk.PrintSettings object represents the settings of a print dialog in
a system-independent way. The main use for this object is that once
you’ve printed you can get a settings object that represents the settings
the user chose, and the next time you print you can pass that object in so
that the user doesn’t have to re-set all his settings. 
  */
export declare class PrintSettings {
  /**
    * Creates a new Gtk.PrintSettings object.
    * @returns a new Gtk.PrintSettings object 
    */
  static new(): import('../Gtk').PrintSettings;
  /**
    * Reads the print settings from file_name. Returns a new Gtk.PrintSettings object with the restored settings, or None if an error occurred. If the file could not be loaded then error is set to either a GLib.FileError or GLib.KeyFileError.  See Gtk.PrintSettings.to_file().
    * @param fileName the filename to read the settings from
    * @returns the restored Gtk.PrintSettings 
    */
  static newFromFile(fileName: string): import('../Gtk').PrintSettings;
  /**
    * Deserialize print settings from an a{sv} variant in the format produced by Gtk.PrintSettings.to_gvariant().
    * @param variant an a{sv} GLib.Variant
    * @returns a new Gtk.PrintSettings object 
    */
  static newFromGvariant(variant: import('../GLib').Variant): import('../Gtk').PrintSettings;
  /**
    * Reads the print settings from the group group_name in key_file.  Returns a new Gtk.PrintSettings object with the restored settings, or None if an error occurred. If the file could not be loaded then error is set to either a GLib.FileError or GLib.KeyFileError.
    * @param keyFile the GLib.KeyFile to retrieve the settings from
    * @param groupName the name of the group to use, or None to use the default “Print Settings”
    * @returns the restored Gtk.PrintSettings 
    */
  static newFromKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): import('../Gtk').PrintSettings;
  /**
    * Copies a Gtk.PrintSettings object.
    * @returns a newly allocated copy of self 
    */
  copy(): import('../Gtk').PrintSettings;
  /**
    * Calls func for each key-value pair of self.
    * @param func the function to call
    * @param userData user data for func 
    */
  foreach(func: import('../Gtk').printSettingsFunc, userData: Object | null): void;
  /**
    * Looks up the string value associated with key.
    * @param key a key
    * @returns the string value for key 
    */
  get(key: string): string;
  /**
    * Returns the boolean represented by the value that is associated with key.
    * @param key a key
    * @returns True, if key maps to a true value. 
    */
  getBool(key: string): boolean;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_COLLATE.
    * @returns whether to collate the printed pages 
    */
  getCollate(): boolean;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_DEFAULT_SOURCE.
    * @returns the default source 
    */
  getDefaultSource(): string;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_DITHER.
    * @returns the dithering that is used 
    */
  getDither(): string;
  /**
    * Returns the double value associated with key, or 0.
    * @param key a key
    * @returns the double value of key 
    */
  getDouble(key: string): number;
  /**
    * Returns the floating point number represented by the value that is associated with key, or default_val if the value does not represent a floating point number.
    * @param key a key
    * @param def the default value
    * @returns the floating point number associated with key 
    */
  getDoubleWithDefault(key: string, def: number): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_DUPLEX.
    * @returns whether to print the output in duplex. 
    */
  getDuplex(): import('../Gtk').PrintDuplex;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_FINISHINGS.
    * @returns the finishings 
    */
  getFinishings(): string;
  /**
    * Returns the integer value of key, or 0.
    * @param key a key
    * @returns the integer value of key 
    */
  getInt(key: string): number;
  /**
    * Returns the value of key, interpreted as an integer, or the default value.
    * @param key a key
    * @param def the default value
    * @returns the integer value of key 
    */
  getIntWithDefault(key: string, def: number): number;
  /**
    * Returns the value associated with key, interpreted as a length. The returned value is converted to units.
    * @param key a key
    * @param unit the unit of the return value
    * @returns the length value of key, converted to unit 
    */
  getLength(key: string, unit: import('../Gtk').Unit): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_MEDIA_TYPE.
    * @returns the media type 
    */
  getMediaType(): string;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_N_COPIES.
    * @returns the number of copies to print 
    */
  getNCopies(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_NUMBER_UP.
    * @returns the number of pages per sheet 
    */
  getNumberUp(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_NUMBER_UP_LAYOUT.
    * @returns layout of page in number-up mode 
    */
  getNumberUpLayout(): import('../Gtk').NumberUpLayout;
  /**
    * Get the value of Gtk.PRINT_SETTINGS_ORIENTATION, converted to a Gtk.PageOrientation.
    * @returns the orientation 
    */
  getOrientation(): import('../Gtk').PageOrientation;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_OUTPUT_BIN.
    * @returns the output bin 
    */
  getOutputBin(): string;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PAGE_RANGES.
    * @returns an array of Gtk.PageRanges.  Use GLib.free() to free the array when it is no longer needed. 
    */
  getPageRanges(): import('../Gtk').PageRange[];
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PAGE_SET.
    * @returns the set of pages to print 
    */
  getPageSet(): import('../Gtk').PageSet;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PAPER_HEIGHT, converted to unit.
    * @param unit the unit for the return value
    * @returns the paper height, in units of unit 
    */
  getPaperHeight(unit: import('../Gtk').Unit): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PAPER_FORMAT, converted to a Gtk.PaperSize.
    * @returns the paper size 
    */
  getPaperSize(): import('../Gtk').PaperSize;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PAPER_WIDTH, converted to unit.
    * @param unit the unit for the return value
    * @returns the paper width, in units of unit 
    */
  getPaperWidth(unit: import('../Gtk').Unit): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PRINT_PAGES.
    * @returns which pages to print 
    */
  getPrintPages(): import('../Gtk').PrintPages;
  /**
    * Convenience function to obtain the value of Gtk.PRINT_SETTINGS_PRINTER.
    * @returns the printer name 
    */
  getPrinter(): string;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_PRINTER_LPI.
    * @returns the resolution in lpi (lines per inch) 
    */
  getPrinterLpi(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_QUALITY.
    * @returns the print quality 
    */
  getQuality(): import('../Gtk').PrintQuality;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_RESOLUTION.
    * @returns the resolution in dpi 
    */
  getResolution(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_RESOLUTION_X.
    * @returns the horizontal resolution in dpi 
    */
  getResolutionX(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_RESOLUTION_Y.
    * @returns the vertical resolution in dpi 
    */
  getResolutionY(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_REVERSE.
    * @returns whether to reverse the order of the printed pages 
    */
  getReverse(): boolean;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_SCALE.
    * @returns the scale in percent 
    */
  getScale(): number;
  /**
    * Gets the value of Gtk.PRINT_SETTINGS_USE_COLOR.
    * @returns whether to use color 
    */
  getUseColor(): boolean;
  /**
    * Returns True, if a value is associated with key.
    * @param key a key
    * @returns True, if key has a value 
    */
  hasKey(key: string): boolean;
  /**
    * Reads the print settings from file_name. If the file could not be loaded then error is set to either a GLib.FileError or GLib.KeyFileError. See Gtk.PrintSettings.to_file().
    * @param fileName the filename to read the settings from
    * @returns True on success 
    */
  loadFile(fileName: string): boolean;
  /**
    * Reads the print settings from the group group_name in key_file. If the file could not be loaded then error is set to either a GLib.FileError or GLib.KeyFileError.
    * @param keyFile the GLib.KeyFile to retrieve the settings from
    * @param groupName the name of the group to use, or None to use the default “Print Settings”
    * @returns True on success 
    */
  loadKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): boolean;
  /**
    * Associates value with key.
    * @param key a key
    * @param value a string value, or None 
    */
  set(key: string, value: string | null): void;
  /**
    * Sets key to a boolean value.
    * @param key a key
    * @param value a boolean 
    */
  setBool(key: string, value: boolean): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_COLLATE.
    * @param collate whether to collate the output 
    */
  setCollate(collate: boolean): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_DEFAULT_SOURCE.
    * @param defaultSource the default source 
    */
  setDefaultSource(defaultSource: string): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_DITHER.
    * @param dither the dithering that is used 
    */
  setDither(dither: string): void;
  /**
    * Sets key to a double value.
    * @param key a key
    * @param value a double value 
    */
  setDouble(key: string, value: number): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_DUPLEX.
    * @param duplex a Gtk.PrintDuplex value 
    */
  setDuplex(duplex: import('../Gtk').PrintDuplex): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_FINISHINGS.
    * @param finishings the finishings 
    */
  setFinishings(finishings: string): void;
  /**
    * Sets key to an integer value.
    * @param key a key
    * @param value an integer 
    */
  setInt(key: string, value: number): void;
  /**
    * Associates a length in units of unit with key.
    * @param key a key
    * @param value a length
    * @param unit the unit of length 
    */
  setLength(key: string, value: number, unit: import('../Gtk').Unit): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_MEDIA_TYPE.
    * @param mediaType the media type 
    */
  setMediaType(mediaType: string): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_N_COPIES.
    * @param numCopies the number of copies 
    */
  setNCopies(numCopies: number): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_NUMBER_UP.
    * @param numberUp the number of pages per sheet 
    */
  setNumberUp(numberUp: number): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_NUMBER_UP_LAYOUT.
    * @param numberUpLayout a Gtk.NumberUpLayout value 
    */
  setNumberUpLayout(numberUpLayout: import('../Gtk').NumberUpLayout): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_ORIENTATION.
    * @param orientation a page orientation 
    */
  setOrientation(orientation: import('../Gtk').PageOrientation): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_OUTPUT_BIN.
    * @param outputBin the output bin 
    */
  setOutputBin(outputBin: string): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PAGE_RANGES.
    * @param pageRanges an array of Gtk.PageRanges 
    */
  setPageRanges(pageRanges: import('../Gtk').PageRange): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PAGE_SET.
    * @param pageSet a Gtk.PageSet value 
    */
  setPageSet(pageSet: import('../Gtk').PageSet): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PAPER_HEIGHT.
    * @param height the paper height
    * @param unit the units of height 
    */
  setPaperHeight(height: number, unit: import('../Gtk').Unit): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PAPER_FORMAT, Gtk.PRINT_SETTINGS_PAPER_WIDTH and Gtk.PRINT_SETTINGS_PAPER_HEIGHT.
    * @param paperSize a paper size 
    */
  setPaperSize(paperSize: import('../Gtk').PaperSize): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PAPER_WIDTH.
    * @param width the paper width
    * @param unit the units of width 
    */
  setPaperWidth(width: number, unit: import('../Gtk').Unit): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PRINT_PAGES.
    * @param pages a Gtk.PrintPages value 
    */
  setPrintPages(pages: import('../Gtk').PrintPages): void;
  /**
    * Convenience function to set Gtk.PRINT_SETTINGS_PRINTER to printer.
    * @param printer the printer name 
    */
  setPrinter(printer: string): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_PRINTER_LPI.
    * @param lpi the resolution in lpi (lines per inch) 
    */
  setPrinterLpi(lpi: number): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_QUALITY.
    * @param quality a Gtk.PrintQuality value 
    */
  setQuality(quality: import('../Gtk').PrintQuality): void;
  /**
    * Sets the values of Gtk.PRINT_SETTINGS_RESOLUTION, Gtk.PRINT_SETTINGS_RESOLUTION_X and Gtk.PRINT_SETTINGS_RESOLUTION_Y.
    * @param resolution the resolution in dpi 
    */
  setResolution(resolution: number): void;
  /**
    * Sets the values of Gtk.PRINT_SETTINGS_RESOLUTION, Gtk.PRINT_SETTINGS_RESOLUTION_X and Gtk.PRINT_SETTINGS_RESOLUTION_Y.
    * @param resolutionX the horizontal resolution in dpi
    * @param resolutionY the vertical resolution in dpi 
    */
  setResolutionXy(resolutionX: number, resolutionY: number): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_REVERSE.
    * @param reverse whether to reverse the output 
    */
  setReverse(reverse: boolean): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_SCALE.
    * @param scale the scale in percent 
    */
  setScale(scale: number): void;
  /**
    * Sets the value of Gtk.PRINT_SETTINGS_USE_COLOR.
    * @param useColor whether to use color 
    */
  setUseColor(useColor: boolean): void;
  /**
    * This function saves the print settings from self to file_name. If the file could not be loaded then error is set to either a GLib.FileError or GLib.KeyFileError.
    * @param fileName the file to save to
    * @returns True on success 
    */
  toFile(fileName: string): boolean;
  /**
    * Serialize print settings to an a{sv} variant.
    * @returns a new, floating, GLib.Variant 
    */
  toGvariant(): import('../GLib').Variant;
  /**
    * This function adds the print settings from self to key_file.
    * @param keyFile the GLib.KeyFile to save the print settings to
    * @param groupName the group to add the settings to in key_file, or None to use the default “Print Settings” 
    */
  toKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): void;
  /**
    * Removes any value associated with key. This has the same effect as setting the value to None.
    * @param key a key 
    */
  unset(key: string): void;
}

