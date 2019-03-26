import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface FileFilter extends GObject.InitiallyUnowned, Gtk.Buildable { }

/**
  * A Gtk.FileFilter can be used to restrict the files being shown in a
Gtk.FileChooser. Files can be filtered based on their name (with
Gtk.FileFilter.add_pattern()), on their mime type (with
Gtk.FileFilter.add_mime_type()), or by a custom filter function
(with Gtk.FileFilter.add_custom()). 
  */
export declare class FileFilter {
  /**
    * Creates a new Gtk.FileFilter with no rules added to it. Such a filter doesn’t accept any files, so is not particularly useful until you add rules with Gtk.FileFilter.add_mime_type(), Gtk.FileFilter.add_pattern(), or Gtk.FileFilter.add_custom(). To create a filter that accepts any file, use:
    * @returns a new Gtk.FileFilter 
    */
  static new(): import('../Gtk').FileFilter;
  /**
    * Deserialize a file filter from an a{sv} variant in the format produced by Gtk.FileFilter.to_gvariant().
    * @param variant an a{sv} GLib.Variant
    * @returns a new Gtk.FileFilter object 
    */
  static newFromGvariant(variant: import('../GLib').Variant): import('../Gtk').FileFilter;
  /**
    * Adds rule to a filter that allows files based on a custom callback function. The bitfield needed which is passed in provides information about what sorts of information that the filter function needs; this allows GTK+ to avoid retrieving expensive information when it isn’t needed by the filter.
    * @param needed bitfield of flags indicating the information that the custom filter function needs.
    * @param func callback function; if the function returns True, then the file will be displayed.
    * @param data data to pass to func 
    */
  addCustom(needed: import('../Gtk').FileFilterFlags, func: import('../Gtk').fileFilterFunc, data: Object | null): void;
  /**
    * Adds a rule allowing a given mime type to self.
    * @param mimeType name of a MIME type 
    */
  addMimeType(mimeType: string): void;
  /**
    * Adds a rule allowing a shell style glob to a filter.
    * @param pattern a shell style glob 
    */
  addPattern(pattern: string): void;
  /**
    * Adds a rule allowing image files in the formats supported by GdkPixbuf.Pixbuf. 
    */
  addPixbufFormats(): void;
  /**
    * Tests whether a file should be displayed according to self. The Gtk.FileFilterInfo filter_info should include the fields returned from Gtk.FileFilter.get_needed().
    * @param filterInfo a Gtk.FileFilterInfo containing information about a file.
    * @returns True if the file should be displayed 
    */
  filter(filterInfo: import('../Gtk').FileFilterInfo): boolean;
  /**
    * Gets the human-readable name for the filter. See Gtk.FileFilter.set_name().
    * @returns The human-readable name of the filter, or None. This value is owned by GTK+ and must not be modified or freed. 
    */
  getName(): string | null;
  /**
    * Gets the fields that need to be filled in for the Gtk.FileFilterInfo passed to Gtk.FileFilter.filter()
    * @returns bitfield of flags indicating needed fields when calling Gtk.FileFilter.filter() 
    */
  getNeeded(): import('../Gtk').FileFilterFlags;
  /**
    * Sets the human-readable name of the filter; this is the string that will be displayed in the file selector user interface if there is a selectable list of filters.
    * @param name the human-readable-name for the filter, or None to remove any existing name. 
    */
  setName(name: string | null): void;
  /**
    * Serialize a file filter to an a{sv} variant.
    * @returns a new, floating, GLib.Variant 
    */
  toGvariant(): import('../GLib').Variant;
}

