/**
  * Gtk.PaperSize handles paper sizes. It uses the standard called
PWG 5101.1-2002 PWG: Standard for Media Standardized Names
to name the paper sizes (and to get the data for the page sizes).
In addition to standard paper sizes, Gtk.PaperSize allows to
construct custom paper sizes with arbitrary dimensions. 
  */
export declare class PaperSize {
  /**
    * Returns the name of the default paper size, which depends on the current locale.
    * @returns the name of the default paper size. The string is owned by GTK+ and should not be modified. 
    */
  static getDefault(): string;
  /**
    * Creates a list of known paper sizes.
    * @param includeCustom whether to include custom paper sizes as defined in the page setup dialog
    * @returns a newly allocated list of newly allocated Gtk.PaperSize objects 
    */
  static getPaperSizes(includeCustom: boolean): import('../Gtk').PaperSize[];
  /**
    * Creates a new Gtk.PaperSize object by parsing a PWG 5101.1-2002 paper name.
    * @param name a paper size name, or None
    * @returns a new Gtk.PaperSize, use Gtk.PaperSize.free() to free it 
    */
  static new(name: string | null): import('../Gtk').PaperSize;
  /**
    * Creates a new Gtk.PaperSize object with the given parameters.
    * @param name the paper name
    * @param displayName the human-readable name
    * @param width the paper width, in units of unit
    * @param height the paper height, in units of unit
    * @param unit the unit for width and height. not Gtk.Unit.NONE.
    * @returns a new Gtk.PaperSize object, use Gtk.PaperSize.free() to free it 
    */
  static newCustom(name: string, displayName: string, width: number, height: number, unit: import('../Gtk').Unit): import('../Gtk').PaperSize;
  /**
    * Deserialize a paper size from an a{sv} variant in the format produced by Gtk.PaperSize.to_gvariant().
    * @param variant an a{sv} GLib.Variant
    * @returns a new Gtk.PaperSize object 
    */
  static newFromGvariant(variant: import('../GLib').Variant): import('../Gtk').PaperSize;
  /**
    * Creates a new Gtk.PaperSize object by using IPP information.
    * @param ippName an IPP paper name
    * @param width the paper width, in points
    * @param height the paper height in points
    * @returns a new Gtk.PaperSize, use Gtk.PaperSize.free() to free it 
    */
  static newFromIpp(ippName: string, width: number, height: number): import('../Gtk').PaperSize;
  /**
    * Reads a paper size from the group group_name in the key file key_file.
    * @param keyFile the GLib.KeyFile to retrieve the papersize from
    * @param groupName the name of the group in the key file to read, or None to read the first group
    * @returns a new Gtk.PaperSize object with the restored paper size, or None if an error occurred 
    */
  static newFromKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): import('../Gtk').PaperSize;
  /**
    * Creates a new Gtk.PaperSize object by using PPD information.
    * @param ppdName a PPD paper name
    * @param ppdDisplayName the corresponding human-readable name
    * @param width the paper width, in points
    * @param height the paper height in points
    * @returns a new Gtk.PaperSize, use Gtk.PaperSize.free() to free it 
    */
  static newFromPpd(ppdName: string, ppdDisplayName: string, width: number, height: number): import('../Gtk').PaperSize;
  /**
    * Copies an existing Gtk.PaperSize.
    * @returns a copy of self 
    */
  copy(): import('../Gtk').PaperSize;
  /**
    * Free the given Gtk.PaperSize object. 
    */
  free(): void;
  /**
    * Gets the default bottom margin for the Gtk.PaperSize.
    * @param unit the unit for the return value, not Gtk.Unit.NONE
    * @returns the default bottom margin 
    */
  getDefaultBottomMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the default left margin for the Gtk.PaperSize.
    * @param unit the unit for the return value, not Gtk.Unit.NONE
    * @returns the default left margin 
    */
  getDefaultLeftMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the default right margin for the Gtk.PaperSize.
    * @param unit the unit for the return value, not Gtk.Unit.NONE
    * @returns the default right margin 
    */
  getDefaultRightMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the default top margin for the Gtk.PaperSize.
    * @param unit the unit for the return value, not Gtk.Unit.NONE
    * @returns the default top margin 
    */
  getDefaultTopMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the human-readable name of the Gtk.PaperSize.
    * @returns the human-readable name of self 
    */
  getDisplayName(): string;
  /**
    * Gets the paper height of the Gtk.PaperSize, in units of unit.
    * @param unit the unit for the return value, not Gtk.Unit.NONE
    * @returns the paper height 
    */
  getHeight(unit: import('../Gtk').Unit): number;
  /**
    * Gets the name of the Gtk.PaperSize.
    * @returns the name of self 
    */
  getName(): string;
  /**
    * Gets the PPD name of the Gtk.PaperSize, which may be None.
    * @returns the PPD name of self 
    */
  getPpdName(): string;
  /**
    * Gets the paper width of the Gtk.PaperSize, in units of unit.
    * @param unit the unit for the return value, not Gtk.Unit.NONE
    * @returns the paper width 
    */
  getWidth(unit: import('../Gtk').Unit): number;
  /**
    * Returns True if self is not a standard paper size.
    * @returns whether self is a custom paper size. 
    */
  isCustom(): boolean;
  /**
    * Compares two Gtk.PaperSize objects.
    * @param size2 another Gtk.PaperSize object
    * @returns True, if self and size2 represent the same paper size 
    */
  isEqual(size2: import('../Gtk').PaperSize): boolean;
  /**
    * Returns True if self is an IPP standard paper size.
    * @returns whether self is not an IPP custom paper size. 
    */
  isIpp(): boolean;
  /**
    * Changes the dimensions of a self to width x height.
    * @param width the new width in units of unit
    * @param height the new height in units of unit
    * @param unit the unit for width and height 
    */
  setSize(width: number, height: number, unit: import('../Gtk').Unit): void;
  /**
    * Serialize a paper size to an a{sv} variant.
    * @returns a new, floating, GLib.Variant 
    */
  toGvariant(): import('../GLib').Variant;
  /**
    * This function adds the paper size from self to key_file.
    * @param keyFile the GLib.KeyFile to save the paper size to
    * @param groupName the group to add the settings to in key_file 
    */
  toKeyFile(keyFile: import('../GLib').KeyFile, groupName: string): void;
}

