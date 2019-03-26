/**
  * The Pango.FontDescription structure represents the description
of an ideal font. These structures are used both to list
what fonts are available on the system and also for specifying
the characteristics of a font to load. 
  */
export declare class FontDescription {
  /**
    * Creates a new font description from a string representation in the form “‘FAMILY-LIST [STYLE-OPTIONS]’ [SIZE]”, where FAMILY-LIST is a comma separated list of families optionally terminated by a comma, STYLE_OPTIONS is a whitespace separated list of words where each word describes one of style, variant, weight, stretch, or gravity, and SIZE is a decimal number (size in points) or optionally followed by the unit modifier “px” for absolute size. Any one of the options may be absent.  If FAMILY-LIST is absent, then the family_name field of the resulting font description will be initialized to None.  If STYLE-OPTIONS is missing, then all style options will be set to the default values. If SIZE is missing, the size in the resulting font description will be set to 0.
    * @param str string representation of a font description.
    * @returns a new Pango.FontDescription. 
    */
  static fromString(str: string): import('../Pango').FontDescription;
  /**
    * Creates a new font description structure with all fields unset.
    * @returns the newly allocated Pango.FontDescription, which should be freed using Pango.FontDescription.free(). 
    */
  static new(): import('../Pango').FontDescription;
  /**
    * Determines if the style attributes of new_match are a closer match for self than those of old_match are, or if old_match is None, determines if new_match is a match at all. Approximate matching is done for weight and style; other style attributes must match exactly. Style attributes are all attributes other than family and size-related attributes.  Approximate matching for style considers Pango.Style.OBLIQUE and Pango.Style.ITALIC as matches, but not as good a match as when the styles are equal.
    * @param oldMatch a Pango.FontDescription, or None
    * @param newMatch a Pango.FontDescription
    * @returns True if new_match is a better match 
    */
  betterMatch(oldMatch: import('../Pango').FontDescription | null, newMatch: import('../Pango').FontDescription): boolean;
  /**
    * Make a copy of a Pango.FontDescription.
    * @returns the newly allocated Pango.FontDescription, which should be freed with Pango.FontDescription.free(), or None if self was None. 
    */
  copy(): import('../Pango').FontDescription | null;
  /**
    * Like Pango.FontDescription.copy(), but only a shallow copy is made of the family name and other allocated fields. The result can only be used until self is modified or freed. This is meant to be used when the copy is only needed temporarily.
    * @returns the newly allocated Pango.FontDescription, which should be freed with Pango.FontDescription.free(), or None if self was None. 
    */
  copyStatic(): import('../Pango').FontDescription | null;
  /**
    * Compares two font descriptions for equality. Two font descriptions are considered equal if the fonts they describe are provably identical. This means that their masks do not have to match, as long as other fields are all the same. (Two font descriptions may result in identical fonts being loaded, but still compare False.)
    * @param desc2 another Pango.FontDescription
    * @returns True if the two font descriptions are identical, False otherwise. 
    */
  equal(desc2: import('../Pango').FontDescription): boolean;
  /**
    * Frees a font description. 
    */
  free(): void;
  /**
    * Gets the family name field of a font description. See Pango.FontDescription.set_family().
    * @returns the family name field for the font description, or None if not previously set.  This has the same life-time as the font description itself and should not be freed. 
    */
  getFamily(): string | null;
  /**
    * Gets the gravity field of a font description. See Pango.FontDescription.set_gravity().
    * @returns the gravity field for the font description. Use Pango.FontDescription.get_set_fields() to find out if the field was explicitly set or not. 
    */
  getGravity(): import('../Pango').Gravity;
  /**
    * Determines which fields in a font description have been set.
    * @returns a bitmask with bits set corresponding to the fields in self that have been set. 
    */
  getSetFields(): import('../Pango').FontMask;
  /**
    * Gets the size field of a font description. See Pango.FontDescription.set_size().
    * @returns the size field for the font description in points or device units. You must call Pango.FontDescription.get_size_is_absolute() to find out which is the case. Returns 0 if the size field has not previously been set or it has been set to 0 explicitly. Use Pango.FontDescription.get_set_fields() to find out if the field was explicitly set or not. 
    */
  getSize(): number;
  /**
    * Determines whether the size of the font is in points (not absolute) or device units (absolute). See Pango.FontDescription.set_size() and Pango.FontDescription.set_absolute_size().
    * @returns whether the size for the font description is in points or device units.  Use Pango.FontDescription.get_set_fields() to find out if the size field of the font description was explicitly set or not. 
    */
  getSizeIsAbsolute(): boolean;
  /**
    * Gets the stretch field of a font description. See Pango.FontDescription.set_stretch().
    * @returns the stretch field for the font description. Use Pango.FontDescription.get_set_fields() to find out if the field was explicitly set or not. 
    */
  getStretch(): import('../Pango').Stretch;
  /**
    * Gets the style field of a Pango.FontDescription. See Pango.FontDescription.set_style().
    * @returns the style field for the font description. Use Pango.FontDescription.get_set_fields() to find out if the field was explicitly set or not. 
    */
  getStyle(): import('../Pango').Style;
  /**
    * Gets the variant field of a Pango.FontDescription. See Pango.FontDescription.set_variant().
    * @returns the variant field for the font description. Use Pango.FontDescription.get_set_fields() to find out if the field was explicitly set or not. 
    */
  getVariant(): import('../Pango').Variant;
  /**
    * Gets the variations field of a font description. See Pango.FontDescription.set_variations().
    * @returns the varitions field for the font description, or None if not previously set.  This has the same life-time as the font description itself and should not be freed. 
    */
  getVariations(): string | null;
  /**
    * Gets the weight field of a font description. See Pango.FontDescription.set_weight().
    * @returns the weight field for the font description. Use Pango.FontDescription.get_set_fields() to find out if the field was explicitly set or not. 
    */
  getWeight(): import('../Pango').Weight;
  /**
    * Computes a hash of a Pango.FontDescription structure suitable to be used, for example, as an argument to g_hash_table_new(). The hash value is independent of self->mask.
    * @returns the hash value. 
    */
  hash(): number;
  /**
    * Merges the fields that are set in desc_to_merge into the fields in self.  If replace_existing is False, only fields in self that are not already set are affected. If True, then fields that are already set will be replaced as well.
    * @param descToMerge the Pango.FontDescription to merge from, or None
    * @param replaceExisting if True, replace fields in self with the corresponding values from desc_to_merge, even if they are already exist. 
    */
  merge(descToMerge: import('../Pango').FontDescription | null, replaceExisting: boolean): void;
  /**
    * Like Pango.FontDescription.merge(), but only a shallow copy is made of the family name and other allocated fields. self can only be used until desc_to_merge is modified or freed. This is meant to be used when the merged font description is only needed temporarily.
    * @param descToMerge the Pango.FontDescription to merge from
    * @param replaceExisting if True, replace fields in self with the corresponding values from desc_to_merge, even if they are already exist. 
    */
  mergeStatic(descToMerge: import('../Pango').FontDescription, replaceExisting: boolean): void;
  /**
    * Sets the size field of a font description, in device units. This is mutually exclusive with Pango.FontDescription.set_size() which sets the font size in points.
    * @param size the new size, in Pango units. There are Pango.SCALE Pango units in one device unit. For an output backend where a device unit is a pixel, a size value of 10 * Pango.SCALE gives a 10 pixel font. 
    */
  setAbsoluteSize(size: number): void;
  /**
    * Sets the family name field of a font description. The family name represents a family of related font styles, and will resolve to a particular Pango.FontFamily. In some uses of Pango.FontDescription, it is also possible to use a comma separated list of family names for this field.
    * @param family a string representing the family name. 
    */
  setFamily(family: string): void;
  /**
    * Like Pango.FontDescription.set_family(), except that no copy of family is made. The caller must make sure that the string passed in stays around until self has been freed or the name is set again. This function can be used if family is a static string such as a C string literal, or if self is only needed temporarily.
    * @param family a string representing the family name. 
    */
  setFamilyStatic(family: string): void;
  /**
    * Sets the gravity field of a font description. The gravity field specifies how the glyphs should be rotated.  If gravity is Pango.Gravity.AUTO, this actually unsets the gravity mask on the font description.
    * @param gravity the gravity for the font description. 
    */
  setGravity(gravity: import('../Pango').Gravity): void;
  /**
    * Sets the size field of a font description in fractional points. This is mutually exclusive with Pango.FontDescription.set_absolute_size().
    * @param size the size of the font in points, scaled by Pango.SCALE. (That is, a size value of 10 * Pango.SCALE is a 10 point font. The conversion factor between points and device units depends on system configuration and the output device. For screen display, a logical DPI of 96 is common, in which case a 10 point font corresponds to a 10 * (96 / 72) = 13.3 pixel font. Use Pango.FontDescription.set_absolute_size() if you need a particular size in device units. 
    */
  setSize(size: number): void;
  /**
    * Sets the stretch field of a font description. The stretch field specifies how narrow or wide the font should be.
    * @param stretch the stretch for the font description 
    */
  setStretch(stretch: import('../Pango').Stretch): void;
  /**
    * Sets the style field of a Pango.FontDescription. The Pango.Style enumeration describes whether the font is slanted and the manner in which it is slanted; it can be either Pango.Style.NORMAL, Pango.Style.ITALIC, or Pango.Style.OBLIQUE. Most fonts will either have a italic style or an oblique style, but not both, and font matching in Pango will match italic specifications with oblique fonts and vice-versa if an exact match is not found.
    * @param style the style for the font description 
    */
  setStyle(style: import('../Pango').Style): void;
  /**
    * Sets the variant field of a font description. The Pango.Variant can either be Pango.Variant.NORMAL or Pango.Variant.SMALL_CAPS.
    * @param variant the variant type for the font description. 
    */
  setVariant(variant: import('../Pango').Variant): void;
  /**
    * Sets the variations field of a font description. OpenType font variations allow to select a font instance by specifying values for a number of axes, such as width or weight. 
    */
  setVariations(settings: string): void;
  /**
    * Like Pango.FontDescription.set_variations(), except that no copy of variations is made. The caller must make sure that the string passed in stays around until self has been freed or the name is set again. This function can be used if variations is a static string such as a C string literal, or if self is only needed temporarily. 
    */
  setVariationsStatic(settings: string): void;
  /**
    * Sets the weight field of a font description. The weight field specifies how bold or light the font should be. In addition to the values of the Pango.Weight enumeration, other intermediate numeric values are possible.
    * @param weight the weight for the font description. 
    */
  setWeight(weight: import('../Pango').Weight): void;
  /**
    * Creates a filename representation of a font description. The filename is identical to the result from calling Pango.FontDescription.to_string(), but with underscores instead of characters that are untypical in filenames, and in lower case only.
    * @returns a new string that must be freed with GLib.free(). 
    */
  toFilename(): string;
  /**
    * Creates a string representation of a font description. See Pango.FontDescription.from_string() for a description of the format of the string representation. The family list in the string description will only have a terminating comma if the last word of the list is a valid style option.
    * @returns a new string that must be freed with GLib.free(). 
    */
  toString(): string;
  /**
    * Unsets some of the fields in a Pango.FontDescription.  The unset fields will get back to their default values.
    * @param toUnset bitmask of fields in the self to unset. 
    */
  unsetFields(toUnset: import('../Pango').FontMask): void;
}

