/**
  * The GLib.KeyFile struct contains only private data
and should not be accessed directly. 
  */
export declare class KeyFile {
  static errorQuark(): number;
  /**
    * Creates a new empty GLib.KeyFile object. Use GLib.KeyFile.load_from_file(), GLib.KeyFile.load_from_data(), GLib.KeyFile.load_from_dirs() or GLib.KeyFile.load_from_data_dirs() to read an existing key file.
    * @returns an empty GLib.KeyFile. 
    */
  static new(): import('../GLib').KeyFile;
  /**
    * Returns the value associated with key under group_name as a boolean.
    * @param groupName a group name
    * @param key a key
    * @returns the value associated with the key as a boolean, or False if the key was not found or could not be parsed. 
    */
  getBoolean(groupName: string, key: string): boolean;
  /**
    * Returns the values associated with key under group_name as booleans.
    * @param groupName a group name
    * @param key a key
    * @returns the values associated with the key as a list of booleans, or None if the key was not found or could not be parsed. The returned list of booleans should be freed with GLib.free() when no longer needed. 
    */
  getBooleanList(groupName: string, key: string): boolean[];
  /**
    * Retrieves a comment above key from group_name. If key is None then comment will be read from above group_name. If both key and group_name are None, then comment will be read from above the first group in the file.
    * @param groupName a group name, or None
    * @param key a key
    * @returns a comment that should be freed with GLib.free() 
    */
  getComment(groupName: string | null, key: string): string;
  /**
    * Returns the value associated with key under group_name as a double. If group_name is None, the start_group is used.
    * @param groupName a group name
    * @param key a key
    * @returns the value associated with the key as a double, or 0.0 if the key was not found or could not be parsed. 
    */
  getDouble(groupName: string, key: string): number;
  /**
    * Returns the values associated with key under group_name as doubles.
    * @param groupName a group name
    * @param key a key
    * @returns the values associated with the key as a list of doubles, or None if the key was not found or could not be parsed. The returned list of doubles should be freed with GLib.free() when no longer needed. 
    */
  getDoubleList(groupName: string, key: string): number[];
  /**
    * Returns all groups in the key file loaded with self. The array of returned groups will be None-terminated, so length may optionally be None.
    * @returns a newly-allocated None-terminated array of strings. Use GLib.strfreev() to free it.  length:return location for the number of returned groups, or None 
    */
  getGroups(): [string[], number];
  /**
    * Returns the value associated with key under group_name as a signed 64-bit integer. This is similar to GLib.KeyFile.get_integer() but can return 64-bit results without truncation.
    * @param groupName a non-None group name
    * @param key a non-None key
    * @returns the value associated with the key as a signed 64-bit integer, or 0 if the key was not found or could not be parsed. 
    */
  getInt64(groupName: string, key: string): number;
  /**
    * Returns the value associated with key under group_name as an integer.
    * @param groupName a group name
    * @param key a key
    * @returns the value associated with the key as an integer, or 0 if the key was not found or could not be parsed. 
    */
  getInteger(groupName: string, key: string): number;
  /**
    * Returns the values associated with key under group_name as integers.
    * @param groupName a group name
    * @param key a key
    * @returns the values associated with the key as a list of integers, or None if the key was not found or could not be parsed. The returned list of integers should be freed with GLib.free() when no longer needed. 
    */
  getIntegerList(groupName: string, key: string): number[];
  /**
    * Returns all keys for the group name group_name.  The array of returned keys will be None-terminated, so length may optionally be None. In the event that the group_name cannot be found, None is returned and error is set to GLib.KeyFileError.GROUP_NOT_FOUND.
    * @param groupName a group name
    * @returns a newly-allocated None-terminated array of strings. Use GLib.strfreev() to free it.  length:return location for the number of keys returned, or None 
    */
  getKeys(groupName: string): [string[], number];
  /**
    * Returns the actual locale which the result of GLib.KeyFile.get_locale_string() or GLib.KeyFile.get_locale_string_list() came from.
    * @param groupName a group name
    * @param key a key
    * @param locale a locale identifier or None
    * @returns the locale from the file, or None if the key was not found or the entry in the file was was untranslated 
    */
  getLocaleForKey(groupName: string, key: string, locale: string | null): string | null;
  /**
    * Returns the value associated with key under group_name translated in the given locale if available.  If locale is None then the current locale is assumed.
    * @param groupName a group name
    * @param key a key
    * @param locale a locale identifier or None
    * @returns a newly allocated string or None if the specified key cannot be found. 
    */
  getLocaleString(groupName: string, key: string, locale: string | null): string;
  /**
    * Returns the values associated with key under group_name translated in the given locale if available.  If locale is None then the current locale is assumed.
    * @param groupName a group name
    * @param key a key
    * @param locale a locale identifier or None
    * @returns a newly allocated None-terminated string array or None if the key isn’t found. The string array should be freed with GLib.strfreev(). 
    */
  getLocaleStringList(groupName: string, key: string, locale: string | null): string[];
  /**
    * Returns the name of the start group of the file.
    * @returns The start group of the key file. 
    */
  getStartGroup(): string;
  /**
    * Returns the string value associated with key under group_name. Unlike GLib.KeyFile.get_value(), this function handles escape sequences like \s.
    * @param groupName a group name
    * @param key a key
    * @returns a newly allocated string or None if the specified key cannot be found. 
    */
  getString(groupName: string, key: string): string;
  /**
    * Returns the values associated with key under group_name.
    * @param groupName a group name
    * @param key a key
    * @returns a None-terminated string array or None if the specified key cannot be found. The array should be freed with GLib.strfreev(). 
    */
  getStringList(groupName: string, key: string): string[];
  /**
    * Returns the value associated with key under group_name as an unsigned 64-bit integer. This is similar to GLib.KeyFile.get_integer() but can return large positive results without truncation.
    * @param groupName a non-None group name
    * @param key a non-None key
    * @returns the value associated with the key as an unsigned 64-bit integer, or 0 if the key was not found or could not be parsed. 
    */
  getUint64(groupName: string, key: string): number;
  /**
    * Returns the raw value associated with key under group_name. Use GLib.KeyFile.get_string() to retrieve an unescaped UTF-8 string.
    * @param groupName a group name
    * @param key a key
    * @returns a newly allocated string or None if the specified key cannot be found. 
    */
  getValue(groupName: string, key: string): string;
  /**
    * Looks whether the key file has the group group_name.
    * @param groupName a group name
    * @returns True if group_name is a part of self, False otherwise. 
    */
  hasGroup(groupName: string): boolean;
  /**
    * Loads a key file from the data in bytes into an empty GLib.KeyFile structure. If the object cannot be created then %error is set to a GLib.KeyFileError.
    * @param bytes a GLib.Bytes
    * @param flags flags from GLib.KeyFileFlags
    * @returns True if a key file could be loaded, False otherwise 
    */
  loadFromBytes(bytes: import('../GLib').Bytes, flags: import('../GLib').KeyFileFlags): boolean;
  /**
    * Loads a key file from memory into an empty GLib.KeyFile structure. If the object cannot be created then %error is set to a GLib.KeyFileError.
    * @param data key file loaded in memory
    * @param length the length of data in bytes (or (gsize)-1 if data is nul-terminated)
    * @param flags flags from GLib.KeyFileFlags
    * @returns True if a key file could be loaded, False otherwise 
    */
  loadFromData(data: string, length: number, flags: import('../GLib').KeyFileFlags): boolean;
  /**
    * This function looks for a key file named file in the paths returned from GLib.get_user_data_dir() and GLib.get_system_data_dirs(), loads the file into self and returns the file’s full path in full_path.  If the file could not be loaded then an %error is set to either a GLib.FileError or GLib.KeyFileError.
    * @param file a relative path to a filename to open and parse
    * @param flags flags from GLib.KeyFileFlags
    * @returns True if a key file could be loaded, False othewise   full_path:return location for a string containing the full path of the file, or None 
    */
  loadFromDataDirs(file: string, flags: import('../GLib').KeyFileFlags): [boolean, string];
  /**
    * This function looks for a key file named file in the paths specified in search_dirs, loads the file into self and returns the file’s full path in full_path.
    * @param file a relative path to a filename to open and parse
    * @param searchDirs None-terminated array of directories to search
    * @param flags flags from GLib.KeyFileFlags
    * @returns True if a key file could be loaded, False otherwise   full_path:return location for a string containing the full path of the file, or None 
    */
  loadFromDirs(file: string, searchDirs: string, flags: import('../GLib').KeyFileFlags): [boolean, string];
  /**
    * Loads a key file into an empty GLib.KeyFile structure.
    * @param file the path of a filename to load, in the GLib filename encoding
    * @param flags flags from GLib.KeyFileFlags
    * @returns True if a key file could be loaded, False otherwise 
    */
  loadFromFile(file: string, flags: import('../GLib').KeyFileFlags): boolean;
  /**
    * Removes a comment above key from group_name. If key is None then comment will be removed above group_name. If both key and group_name are None, then comment will be removed above the first group in the file.
    * @param groupName a group name, or None
    * @param key a key
    * @returns True if the comment was removed, False otherwise 
    */
  removeComment(groupName: string | null, key: string | null): boolean;
  /**
    * Removes the specified group, group_name, from the key file.
    * @param groupName a group name
    * @returns True if the group was removed, False otherwise 
    */
  removeGroup(groupName: string): boolean;
  /**
    * Removes key in group_name from the key file.
    * @param groupName a group name
    * @param key a key name to remove
    * @returns True if the key was removed, False otherwise 
    */
  removeKey(groupName: string, key: string): boolean;
  /**
    * Writes the contents of self to filename using GLib.file_set_contents().
    * @param filename the name of the file to write to
    * @returns True if successful, else False with error set 
    */
  saveToFile(filename: string): boolean;
  /**
    * Associates a new boolean value with key under group_name. If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param value True or False 
    */
  setBoolean(groupName: string, key: string, value: boolean): void;
  /**
    * Associates a list of boolean values with key under group_name. If key cannot be found then it is created. If group_name is None, the start_group is used.
    * @param groupName a group name
    * @param key a key
    * @param list an array of boolean values 
    */
  setBooleanList(groupName: string, key: string, list: boolean): void;
  /**
    * Places a comment above key from group_name.
    * @param groupName a group name, or None
    * @param key a key
    * @param comment a comment
    * @returns True if the comment was written, False otherwise 
    */
  setComment(groupName: string | null, key: string | null, comment: string): boolean;
  /**
    * Associates a new double value with key under group_name. If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param value an double value 
    */
  setDouble(groupName: string, key: string, value: number): void;
  /**
    * Associates a list of double values with key under group_name.  If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param list an array of double values 
    */
  setDoubleList(groupName: string, key: string, list: number): void;
  /**
    * Associates a new integer value with key under group_name. If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param value an integer value 
    */
  setInt64(groupName: string, key: string, value: number): void;
  /**
    * Associates a new integer value with key under group_name. If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param value an integer value 
    */
  setInteger(groupName: string, key: string, value: number): void;
  /**
    * Associates a list of integer values with key under group_name. If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param list an array of integer values 
    */
  setIntegerList(groupName: string, key: string, list: number): void;
  /**
    * Sets the character which is used to separate values in lists. Typically ‘;’ or ‘,’ are used as separators. The default list separator is ‘;’.
    * @param separator the separator 
    */
  setListSeparator(separator: number): void;
  /**
    * Associates a string value for key and locale under group_name. If the translation for key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param locale a locale identifier
    * @param string a string 
    */
  setLocaleString(groupName: string, key: string, locale: string, string: string): void;
  /**
    * Associates a list of string values for key and locale under group_name.  If the translation for key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param locale a locale identifier
    * @param list a None-terminated array of locale string values 
    */
  setLocaleStringList(groupName: string, key: string, locale: string, list: string): void;
  /**
    * Associates a new string value with key under group_name. If key cannot be found then it is created. If group_name cannot be found then it is created. Unlike GLib.KeyFile.set_value(), this function handles characters that need escaping, such as newlines.
    * @param groupName a group name
    * @param key a key
    * @param string a string 
    */
  setString(groupName: string, key: string, string: string): void;
  /**
    * Associates a list of string values for key under group_name. If key cannot be found then it is created. If group_name cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param list an array of string values 
    */
  setStringList(groupName: string, key: string, list: string): void;
  /**
    * Associates a new integer value with key under group_name. If key cannot be found then it is created.
    * @param groupName a group name
    * @param key a key
    * @param value an integer value 
    */
  setUint64(groupName: string, key: string, value: number): void;
  /**
    * Associates a new value with key under group_name.
    * @param groupName a group name
    * @param key a key
    * @param value a string 
    */
  setValue(groupName: string, key: string, value: string): void;
  /**
    * This function outputs self as a string.
    * @returns a newly allocated string holding the contents of the GLib.KeyFile  length:return location for the length of the returned string, or None 
    */
  toData(): [string, number];
  /**
    * Decreases the reference count of self by 1. If the reference count reaches zero, frees the key file and all its allocated memory. 
    */
  unref(): void;
}

