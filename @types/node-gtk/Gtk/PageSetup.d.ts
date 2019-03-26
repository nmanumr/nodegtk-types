import * as GObject from '../GObject';
export declare interface PageSetup extends GObject.Object { }

/**
  * A Gtk.PageSetup object stores the page size, orientation and margins.
The idea is that you can get one of these from the page setup dialog
and then pass it to the Gtk.PrintOperation when printing.
The benefit of splitting this out of the Gtk.PrintSettings is that
these affect the actual layout of the page, and thus need to be set
long before user prints. 
  */
export declare class PageSetup {
  /**
    * Creates a new Gtk.PageSetup.
    * @returns a new Gtk.PageSetup. 
    */
  static new(): import('../Gtk').PageSetup;
  /**
    * Reads the page setup from the file file_name. Returns a new Gtk.PageSetup object with the restored page setup, or None if an error occurred. See Gtk.PageSetup.to_file().
    * @param fileName the filename to read the page setup from
    * @returns the restored Gtk.PageSetup 
    */
  static newFromFile(fileName: string): import('../Gtk').PageSetup;
  /**
    * Desrialize a page setup from an a{sv} variant in the format produced by Gtk.PageSetup.to_gvariant().
    * @param variant an a{sv} GLib.Variant
    * @returns a new Gtk.PageSetup object 
    */
  static newFromGvariant(variant: import('../GLib').Variant): import('../Gtk').PageSetup;
  /**
    * Reads the page setup from the group group_name in the key file key_file. Returns a new Gtk.PageSetup object with the restored page setup, or None if an error occurred.
    * @param keyFile the GLib.KeyFile to retrieve the page_setup from
    * @param groupName the name of the group in the key_file to read, or None to use the default name “Page Setup”
    * @returns the restored Gtk.PageSetup 
    */
  static newFromKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): import('../Gtk').PageSetup;
  /**
    * Copies a Gtk.PageSetup.
    * @returns a copy of self 
    */
  copy(): import('../Gtk').PageSetup;
  /**
    * Gets the bottom margin in units of unit.
    * @param unit the unit for the return value
    * @returns the bottom margin 
    */
  getBottomMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the left margin in units of unit.
    * @param unit the unit for the return value
    * @returns the left margin 
    */
  getLeftMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the page orientation of the Gtk.PageSetup.
    * @returns the page orientation 
    */
  getOrientation(): import('../Gtk').PageOrientation;
  /**
    * Returns the page height in units of unit.
    * @param unit the unit for the return value
    * @returns the page height. 
    */
  getPageHeight(unit: import('../Gtk').Unit): number;
  /**
    * Returns the page width in units of unit.
    * @param unit the unit for the return value
    * @returns the page width. 
    */
  getPageWidth(unit: import('../Gtk').Unit): number;
  /**
    * Returns the paper height in units of unit.
    * @param unit the unit for the return value
    * @returns the paper height. 
    */
  getPaperHeight(unit: import('../Gtk').Unit): number;
  /**
    * Gets the paper size of the Gtk.PageSetup.
    * @returns the paper size 
    */
  getPaperSize(): import('../Gtk').PaperSize;
  /**
    * Returns the paper width in units of unit.
    * @param unit the unit for the return value
    * @returns the paper width. 
    */
  getPaperWidth(unit: import('../Gtk').Unit): number;
  /**
    * Gets the right margin in units of unit.
    * @param unit the unit for the return value
    * @returns the right margin 
    */
  getRightMargin(unit: import('../Gtk').Unit): number;
  /**
    * Gets the top margin in units of unit.
    * @param unit the unit for the return value
    * @returns the top margin 
    */
  getTopMargin(unit: import('../Gtk').Unit): number;
  /**
    * Reads the page setup from the file file_name. See Gtk.PageSetup.to_file().
    * @param fileName the filename to read the page setup from
    * @returns True on success 
    */
  loadFile(fileName: string): boolean;
  /**
    * Reads the page setup from the group group_name in the key file key_file.
    * @param keyFile the GLib.KeyFile to retrieve the page_setup from
    * @param groupName the name of the group in the key_file to read, or None to use the default name “Page Setup”
    * @returns True on success 
    */
  loadKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): boolean;
  /**
    * Sets the bottom margin of the Gtk.PageSetup.
    * @param margin the new bottom margin in units of unit
    * @param unit the units for margin 
    */
  setBottomMargin(margin: number, unit: import('../Gtk').Unit): void;
  /**
    * Sets the left margin of the Gtk.PageSetup.
    * @param margin the new left margin in units of unit
    * @param unit the units for margin 
    */
  setLeftMargin(margin: number, unit: import('../Gtk').Unit): void;
  /**
    * Sets the page orientation of the Gtk.PageSetup.
    * @param orientation a Gtk.PageOrientation value 
    */
  setOrientation(orientation: import('../Gtk').PageOrientation): void;
  /**
    * Sets the paper size of the Gtk.PageSetup without changing the margins. See Gtk.PageSetup.set_paper_size_and_default_margins().
    * @param size a Gtk.PaperSize 
    */
  setPaperSize(size: import('../Gtk').PaperSize): void;
  /**
    * Sets the paper size of the Gtk.PageSetup and modifies the margins according to the new paper size.
    * @param size a Gtk.PaperSize 
    */
  setPaperSizeAndDefaultMargins(size: import('../Gtk').PaperSize): void;
  /**
    * Sets the right margin of the Gtk.PageSetup.
    * @param margin the new right margin in units of unit
    * @param unit the units for margin 
    */
  setRightMargin(margin: number, unit: import('../Gtk').Unit): void;
  /**
    * Sets the top margin of the Gtk.PageSetup.
    * @param margin the new top margin in units of unit
    * @param unit the units for margin 
    */
  setTopMargin(margin: number, unit: import('../Gtk').Unit): void;
  /**
    * This function saves the information from self to file_name.
    * @param fileName the file to save to
    * @returns True on success 
    */
  toFile(fileName: string): boolean;
  /**
    * Serialize page setup to an a{sv} variant.
    * @returns a new, floating, GLib.Variant 
    */
  toGvariant(): import('../GLib').Variant;
  /**
    * This function adds the page setup from self to key_file.
    * @param keyFile the GLib.KeyFile to save the page setup to
    * @param groupName the group to add the settings to in key_file, or None to use the default name “Page Setup” 
    */
  toKeyFile(keyFile: import('../GLib').KeyFile, groupName: string | null): void;
}

