import * as GObject from '../GObject';
import * as Gtk from '../Gtk';
export declare interface RecentFilter extends GObject.InitiallyUnowned, Gtk.Buildable { }

/**
  * A Gtk.RecentFilter can be used to restrict the files being shown
in a Gtk.RecentChooser.  Files can be filtered based on their name
(with Gtk.RecentFilter.add_pattern()), on their mime type (with
Gtk.FileFilter.add_mime_type()), on the application that has
registered them (with Gtk.RecentFilter.add_application()), or by
a custom filter function (with Gtk.RecentFilter.add_custom()). 
  */
export declare class RecentFilter {
  /**
    * Creates a new Gtk.RecentFilter with no rules added to it. Such filter does not accept any recently used resources, so is not particularly useful until you add rules with Gtk.RecentFilter.add_pattern(), Gtk.RecentFilter.add_mime_type(), Gtk.RecentFilter.add_application(), Gtk.RecentFilter.add_age(). To create a filter that accepts any recently used resource, use:
    * @returns a new Gtk.RecentFilter 
    */
  static new(): import('../Gtk').RecentFilter;
  /**
    * Adds a rule that allows resources based on their age - that is, the number of days elapsed since they were last modified.
    * @param days number of days 
    */
  addAge(days: number): void;
  /**
    * Adds a rule that allows resources based on the name of the application that has registered them.
    * @param application an application name 
    */
  addApplication(application: string): void;
  /**
    * Adds a rule to a filter that allows resources based on a custom callback function. The bitfield needed which is passed in provides information about what sorts of information that the filter function needs; this allows GTK+ to avoid retrieving expensive information when it isn’t needed by the filter.
    * @param needed bitfield of flags indicating the information that the custom filter function needs.
    * @param func callback function; if the function returns True, then the file will be displayed.
    * @param data data to pass to func 
    */
  addCustom(needed: import('../Gtk').RecentFilterFlags, func: import('../Gtk').RecentFilterFunc, data: Object | null): void;
  /**
    * Adds a rule that allows resources based on the name of the group to which they belong
    * @param group a group name 
    */
  addGroup(group: string): void;
  /**
    * Adds a rule that allows resources based on their registered MIME type.
    * @param mimeType a MIME type 
    */
  addMimeType(mimeType: string): void;
  /**
    * Adds a rule that allows resources based on a pattern matching their display name.
    * @param pattern a file pattern 
    */
  addPattern(pattern: string): void;
  /**
    * Adds a rule allowing image files in the formats supported by GdkPixbuf.Pixbuf. 
    */
  addPixbufFormats(): void;
  /**
    * Tests whether a file should be displayed according to self. The Gtk.RecentFilterInfo filter_info should include the fields returned from Gtk.RecentFilter.get_needed(), and must set the Gtk.RecentFilterInfo.contains field of filter_info to indicate which fields have been set.
    * @param filterInfo a Gtk.RecentFilterInfo containing information about a recently used resource
    * @returns True if the file should be displayed 
    */
  filter(filterInfo: import('../Gtk').RecentFilterInfo): boolean;
  /**
    * Gets the human-readable name for the filter. See Gtk.RecentFilter.set_name().
    * @returns the name of the filter, or None.  The returned string is owned by the filter object and should not be freed. 
    */
  getName(): string | null;
  /**
    * Gets the fields that need to be filled in for the Gtk.RecentFilterInfo passed to Gtk.RecentFilter.filter()
    * @returns bitfield of flags indicating needed fields when calling Gtk.RecentFilter.filter() 
    */
  getNeeded(): import('../Gtk').RecentFilterFlags;
  /**
    * Sets the human-readable name of the filter; this is the string that will be displayed in the recently used resources selector user interface if there is a selectable list of filters.
    * @param name then human readable name of self 
    */
  setName(name: string): void;
}

