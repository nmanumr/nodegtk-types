import * as GObject from '../GObject';
export declare interface FileInfo extends GObject.Object { }

/**
  * Functionality for manipulating basic metadata for files. Gio.FileInfo
implements methods for getting information that all files should
contain, and allows for manipulation of extended attributes. 
  */
export declare class FileInfo {
  /**
    * Creates a new file info structure.
    * @returns a Gio.FileInfo. 
    */
  static new(): import('../Gio').FileInfo;
  /**
    * Clears the status information from self. 
    */
  clearStatus(): void;
  /**
    * First clears all of the GFileAttribute of dest_info, and then copies all of the file attributes from self to dest_info.
    * @param destInfo destination to copy attributes to. 
    */
  copyInto(destInfo: import('../Gio').FileInfo): void;
  /**
    * Duplicates a file info structure.
    * @returns a duplicate Gio.FileInfo of self. 
    */
  dup(): import('../Gio').FileInfo;
  /**
    * Gets the value of a attribute, formated as a string. This escapes things as needed to make the string valid utf8.
    * @param attribute a file attribute key.
    * @returns a UTF-8 string associated with the given attribute. When you’re done with the string it must be freed with GLib.free(). 
    */
  getAttributeAsString(attribute: string): string;
  /**
    * Gets the value of a boolean attribute. If the attribute does not contain a boolean value, False will be returned.
    * @param attribute a file attribute key.
    * @returns the boolean value contained within the attribute. 
    */
  getAttributeBoolean(attribute: string): boolean;
  /**
    * Gets the value of a byte string attribute. If the attribute does not contain a byte string, None will be returned.
    * @param attribute a file attribute key.
    * @returns the contents of the attribute value as a byte string, or None otherwise. 
    */
  getAttributeByteString(attribute: string): string;
  /**
    * Gets the attribute type, value and status for an attribute key.
    * @param attribute a file attribute key
    * @returns True if self has an attribute named attribute, False otherwise.  type:return location for the attribute type, or None value_pp:return location for the attribute value, or None; the attribute value will not be None status:return location for the attribute status, or None 
    */
  getAttributeData(attribute: string): [boolean, import('../Gio').FileAttributeType, Object, import('../Gio').FileAttributeStatus];
  /**
    * Gets a signed 32-bit integer contained within the attribute. If the attribute does not contain a signed 32-bit integer, or is invalid, 0 will be returned.
    * @param attribute a file attribute key.
    * @returns a signed 32-bit integer from the attribute. 
    */
  getAttributeInt32(attribute: string): number;
  /**
    * Gets a signed 64-bit integer contained within the attribute. If the attribute does not contain an signed 64-bit integer, or is invalid, 0 will be returned.
    * @param attribute a file attribute key.
    * @returns a signed 64-bit integer from the attribute. 
    */
  getAttributeInt64(attribute: string): number;
  /**
    * Gets the value of a GObject.Object attribute. If the attribute does not contain a GObject.Object, None will be returned.
    * @param attribute a file attribute key.
    * @returns a GObject.Object associated with the given attribute, or None otherwise. 
    */
  getAttributeObject(attribute: string): import('../GObject').Object;
  /**
    * Gets the attribute status for an attribute key.
    * @param attribute a file attribute key
    * @returns a Gio.FileAttributeStatus for the given attribute, or Gio.FileAttributeStatus.UNSET if the key is invalid. 
    */
  getAttributeStatus(attribute: string): import('../Gio').FileAttributeStatus;
  /**
    * Gets the value of a string attribute. If the attribute does not contain a string, None will be returned.
    * @param attribute a file attribute key.
    * @returns the contents of the attribute value as a UTF-8 string, or None otherwise. 
    */
  getAttributeString(attribute: string): string;
  /**
    * Gets the value of a stringv attribute. If the attribute does not contain a stringv, None will be returned.
    * @param attribute a file attribute key.
    * @returns the contents of the attribute value as a stringv, or None otherwise. Do not free. These returned strings are UTF-8. 
    */
  getAttributeStringv(attribute: string): string[];
  /**
    * Gets the attribute type for an attribute key.
    * @param attribute a file attribute key.
    * @returns a Gio.FileAttributeType for the given attribute, or Gio.FileAttributeType.INVALID if the key is not set. 
    */
  getAttributeType(attribute: string): import('../Gio').FileAttributeType;
  /**
    * Gets an unsigned 32-bit integer contained within the attribute. If the attribute does not contain an unsigned 32-bit integer, or is invalid, 0 will be returned.
    * @param attribute a file attribute key.
    * @returns an unsigned 32-bit integer from the attribute. 
    */
  getAttributeUint32(attribute: string): number;
  /**
    * Gets a unsigned 64-bit integer contained within the attribute. If the attribute does not contain an unsigned 64-bit integer, or is invalid, 0 will be returned.
    * @param attribute a file attribute key.
    * @returns a unsigned 64-bit integer from the attribute. 
    */
  getAttributeUint64(attribute: string): number;
  /**
    * Gets the file’s content type.
    * @returns a string containing the file’s content type. 
    */
  getContentType(): string;
  /**
    * Returns the GLib.DateTime representing the deletion date of the file, as available in Gio.FILE_ATTRIBUTE_TRASH_DELETION_DATE. If the Gio.FILE_ATTRIBUTE_TRASH_DELETION_DATE attribute is unset, None is returned.
    * @returns a GLib.DateTime, or None. 
    */
  getDeletionDate(): import('../GLib').DateTime;
  /**
    * Gets a display name for a file.
    * @returns a string containing the display name. 
    */
  getDisplayName(): string;
  /**
    * Gets the edit name for a file.
    * @returns a string containing the edit name. 
    */
  getEditName(): string;
  /**
    * Gets the entity tag for a given Gio.FileInfo. See Gio.FILE_ATTRIBUTE_ETAG_VALUE.
    * @returns a string containing the value of the “etag:value” attribute. 
    */
  getEtag(): string;
  /**
    * Gets a file’s type (whether it is a regular file, symlink, etc). This is different from the file’s content type, see Gio.FileInfo.get_content_type().
    * @returns a Gio.FileType for the given file. 
    */
  getFileType(): import('../Gio').FileType;
  /**
    * Gets the icon for a file.
    * @returns Gio.Icon for the given self. 
    */
  getIcon(): import('../Gio').Icon;
  /**
    * Checks if a file is a backup file.
    * @returns True if file is a backup file, False otherwise. 
    */
  getIsBackup(): boolean;
  /**
    * Checks if a file is hidden.
    * @returns True if the file is a hidden file, False otherwise. 
    */
  getIsHidden(): boolean;
  /**
    * Checks if a file is a symlink.
    * @returns True if the given self is a symlink. 
    */
  getIsSymlink(): boolean;
  /**
    * Gets the modification time of the current self and sets it in result.
    * @returns a GLib.TimeVal. 
    */
  getModificationTime(): import('../GLib').TimeVal;
  /**
    * Gets the name for a file.
    * @returns a string containing the file name. 
    */
  getName(): string;
  /**
    * Gets the file’s size.
    * @returns a #goffset containing the file’s size. 
    */
  getSize(): number;
  /**
    * Gets the value of the sort_order attribute from the Gio.FileInfo. See Gio.FILE_ATTRIBUTE_STANDARD_SORT_ORDER.
    * @returns a #gint32 containing the value of the “standard::sort_order” attribute. 
    */
  getSortOrder(): number;
  /**
    * Gets the symbolic icon for a file.
    * @returns Gio.Icon for the given self. 
    */
  getSymbolicIcon(): import('../Gio').Icon;
  /**
    * Gets the symlink target for a given Gio.FileInfo.
    * @returns a string containing the symlink target. 
    */
  getSymlinkTarget(): string;
  /**
    * Checks if a file info structure has an attribute named attribute.
    * @param attribute a file attribute key.
    * @returns True if Ginfo has an attribute named attribute, False otherwise. 
    */
  hasAttribute(attribute: string): boolean;
  /**
    * Checks if a file info structure has an attribute in the specified name_space.
    * @param nameSpace a file attribute namespace.
    * @returns True if Ginfo has an attribute in name_space, False otherwise. 
    */
  hasNamespace(nameSpace: string): boolean;
  /**
    * Lists the file info structure’s attributes.
    * @param nameSpace a file attribute key’s namespace, or None to list all attributes.
    * @returns a null-terminated array of strings of all of the possible attribute types for the given name_space, or None on error. 
    */
  listAttributes(nameSpace: string | null): string[] | null;
  /**
    * Removes all cases of attribute from self if it exists.
    * @param attribute a file attribute key. 
    */
  removeAttribute(attribute: string): void;
  /**
    * Sets the attribute to contain the given value, if possible. To unset the attribute, use Gio.FileAttributeType.INVALID for type.
    * @param attribute a file attribute key.
    * @param type a Gio.FileAttributeType
    * @param valueP pointer to the value 
    */
  setAttribute(attribute: string, type: import('../Gio').FileAttributeType, valueP: Object): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue a boolean value. 
    */
  setAttributeBoolean(attribute: string, attrValue: boolean): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue a byte string. 
    */
  setAttributeByteString(attribute: string, attrValue: string): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue a signed 32-bit integer 
    */
  setAttributeInt32(attribute: string, attrValue: number): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute attribute name to set.
    * @param attrValue int64 value to set attribute to. 
    */
  setAttributeInt64(attribute: string, attrValue: number): void;
  /**
    * Sets mask on self to match specific attribute types.
    * @param mask a Gio.FileAttributeMatcher. 
    */
  setAttributeMask(mask: import('../Gio').FileAttributeMatcher): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue a GObject.Object. 
    */
  setAttributeObject(attribute: string, attrValue: import('../GObject').Object): void;
  /**
    * Sets the attribute status for an attribute key. This is only needed by external code that implement Gio.File.set_attributes_from_info() or similar functions.
    * @param attribute a file attribute key
    * @param status a Gio.FileAttributeStatus
    * @returns True if the status was changed, False if the key was not set. 
    */
  setAttributeStatus(attribute: string, status: import('../Gio').FileAttributeStatus): boolean;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue a UTF-8 string. 
    */
  setAttributeString(attribute: string, attrValue: string): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key
    * @param attrValue a None terminated array of UTF-8 strings. 
    */
  setAttributeStringv(attribute: string, attrValue: string): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue an unsigned 32-bit integer. 
    */
  setAttributeUint32(attribute: string, attrValue: number): void;
  /**
    * Sets the attribute to contain the given attr_value, if possible.
    * @param attribute a file attribute key.
    * @param attrValue an unsigned 64-bit integer. 
    */
  setAttributeUint64(attribute: string, attrValue: number): void;
  /**
    * Sets the content type attribute for a given Gio.FileInfo. See Gio.FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE.
    * @param contentType a content type. See GContentType 
    */
  setContentType(contentType: string): void;
  /**
    * Sets the display name for the current Gio.FileInfo. See Gio.FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME.
    * @param displayName a string containing a display name. 
    */
  setDisplayName(displayName: string): void;
  /**
    * Sets the edit name for the current file. See Gio.FILE_ATTRIBUTE_STANDARD_EDIT_NAME.
    * @param editName a string containing an edit name. 
    */
  setEditName(editName: string): void;
  /**
    * Sets the file type in a Gio.FileInfo to type. See Gio.FILE_ATTRIBUTE_STANDARD_TYPE.
    * @param type a Gio.FileType. 
    */
  setFileType(type: import('../Gio').FileType): void;
  /**
    * Sets the icon for a given Gio.FileInfo. See Gio.FILE_ATTRIBUTE_STANDARD_ICON.
    * @param icon a Gio.Icon. 
    */
  setIcon(icon: import('../Gio').Icon): void;
  /**
    * Sets the “is_hidden” attribute in a Gio.FileInfo according to is_hidden. See Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN.
    * @param isHidden a bool. 
    */
  setIsHidden(isHidden: boolean): void;
  /**
    * Sets the “is_symlink” attribute in a Gio.FileInfo according to is_symlink. See Gio.FILE_ATTRIBUTE_STANDARD_IS_SYMLINK.
    * @param isSymlink a bool. 
    */
  setIsSymlink(isSymlink: boolean): void;
  /**
    * Sets the Gio.FILE_ATTRIBUTE_TIME_MODIFIED attribute in the file info to the given time value.
    * @param mtime a GLib.TimeVal. 
    */
  setModificationTime(mtime: import('../GLib').TimeVal): void;
  /**
    * Sets the name attribute for the current Gio.FileInfo. See Gio.FILE_ATTRIBUTE_STANDARD_NAME.
    * @param name a string containing a name. 
    */
  setName(name: string): void;
  /**
    * Sets the Gio.FILE_ATTRIBUTE_STANDARD_SIZE attribute in the file info to the given size.
    * @param size a #goffset containing the file’s size. 
    */
  setSize(size: number): void;
  /**
    * Sets the sort order attribute in the file info structure. See Gio.FILE_ATTRIBUTE_STANDARD_SORT_ORDER.
    * @param sortOrder a sort order integer. 
    */
  setSortOrder(sortOrder: number): void;
  /**
    * Sets the symbolic icon for a given Gio.FileInfo. See Gio.FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON.
    * @param icon a Gio.Icon. 
    */
  setSymbolicIcon(icon: import('../Gio').Icon): void;
  /**
    * Sets the Gio.FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET attribute in the file info to the given symlink target.
    * @param symlinkTarget a static string containing a path to a symlink target. 
    */
  setSymlinkTarget(symlinkTarget: string): void;
  /**
    * Unsets a mask set by Gio.FileInfo.set_attribute_mask(), if one is set. 
    */
  unsetAttributeMask(): void;
}

