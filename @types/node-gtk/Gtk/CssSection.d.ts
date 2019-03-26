/**
  * Defines a part of a CSS document. Because sections are nested into
one another, you can use Gtk.CssSection.get_parent() to get the
containing region. 
  */
export declare class CssSection {
  /**
    * Returns the line in the CSS document where this section end. The line number is 0-indexed, so the first line of the document will return 0. This value may change in future invocations of this function if self is not yet parsed completely. This will for example happen in the Gtk.CssProvider ::parsing-error signal. The end position and line may be identical to the start position and line for sections which failed to parse anything successfully.
    * @returns the line number 
    */
  getEndLine(): number;
  /**
    * Returns the offset in bytes from the start of the current line returned via Gtk.CssSection.get_end_line(). This value may change in future invocations of this function if self is not yet parsed completely. This will for example happen in the Gtk.CssProvider ::parsing-error signal. The end position and line may be identical to the start position and line for sections which failed to parse anything successfully.
    * @returns the offset in bytes from the start of the line. 
    */
  getEndPosition(): number;
  /**
    * Gets the file that self was parsed from. If no such file exists, for example because the CSS was loaded via gtk_css_provider_load_from_data(), then None is returned.
    * @returns the Gio.File that self was parsed from or None if self was parsed from other data 
    */
  getFile(): import('../Gio').File;
  /**
    * Gets the parent section for the given self. The parent section is the section that contains this self. A special case are sections of type Gtk.CssSectionType.DOCUMENT. Their parent will either be None if they are the original CSS document that was loaded by Gtk.CssProvider.load_from_file() or a section of type Gtk.CssSectionType.IMPORT if it was loaded with an import rule from a different file.
    * @returns the parent section or None if none 
    */
  getParent(): import('../Gtk').CssSection | null;
  /**
    * Gets the type of information that self describes.
    * @returns the type of self 
    */
  getSectionType(): import('../Gtk').CssSectionType;
  /**
    * Returns the line in the CSS document where this section starts. The line number is 0-indexed, so the first line of the document will return 0.
    * @returns the line number 
    */
  getStartLine(): number;
  /**
    * Returns the offset in bytes from the start of the current line returned via Gtk.CssSection.get_start_line().
    * @returns the offset in bytes from the start of the line. 
    */
  getStartPosition(): number;
  /**
    * Increments the reference count on self.
    * @returns self itself. 
    */
  ref(): import('../Gtk').CssSection;
  /**
    * Decrements the reference count on self, freeing the structure if the reference count reaches 0. 
    */
  unref(): void;
}

