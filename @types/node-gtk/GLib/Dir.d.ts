/**
  * An opaque structure representing an opened directory. 
  */
export declare class Dir {
  /**
    * Creates a subdirectory in the preferred directory for temporary files (as returned by GLib.get_tmp_dir()).
    * @param tmpl Template for directory name, as in g_mkdtemp(), basename only, or None for a default template
    * @returns The actual name used. This string should be freed with GLib.free() when not needed any longer and is is in the GLib file name encoding. In case of errors, None is returned and error will be set. 
    */
  static makeTmp(tmpl: string | null): string;
  /**
    * Closes the directory and deallocates all related resources. 
    */
  close(): void;
  /**
    * Retrieves the name of another entry in the directory, or None. The order of entries returned from this function is not defined, and may vary by file system or other operating-system dependent factors.
    * @returns The entry’s name or None if there are no more entries. The return value is owned by GLib and must not be modified or freed. 
    */
  readName(): string;
  /**
    * Resets the given directory. The next call to GLib.Dir.read_name() will return the first entry again. 
    */
  rewind(): void;
}

