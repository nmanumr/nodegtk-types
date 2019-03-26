/**
  * The GLib.MappedFile represents a file mapping created with
GLib.MappedFile.new(). It has only private members and should
not be accessed directly. 
  */
export declare class MappedFile {
  /**
    * Maps a file into memory. On UNIX, this is using the mmap() function.
    * @param filename The path of the file to load, in the GLib filename encoding
    * @param writable whether the mapping should be writable
    * @returns a newly allocated GLib.MappedFile which must be unref’d with GLib.MappedFile.unref(), or None if the mapping failed. 
    */
  static new(filename: string, writable: boolean): import('../GLib').MappedFile;
  /**
    * Maps a file into memory. On UNIX, this is using the mmap() function.
    * @param fd The file descriptor of the file to load
    * @param writable whether the mapping should be writable
    * @returns a newly allocated GLib.MappedFile which must be unref’d with GLib.MappedFile.unref(), or None if the mapping failed. 
    */
  static newFromFd(fd: number, writable: boolean): import('../GLib').MappedFile;
  /**
    * This call existed before GLib.MappedFile had refcounting and is currently exactly the same as GLib.MappedFile.unref(). 
    */
  free(): void;
  /**
    * Creates a new GLib.Bytes which references the data mapped from self. The mapped contents of the file must not be modified after creating this bytes object, because a GLib.Bytes should be immutable.
    * @returns A newly allocated GLib.Bytes referencing data from self 
    */
  getBytes(): import('../GLib').Bytes;
  /**
    * Returns the contents of a GLib.MappedFile.
    * @returns the contents of self, or None. 
    */
  getContents(): string;
  /**
    * Returns the length of the contents of a GLib.MappedFile.
    * @returns the length of the contents of self. 
    */
  getLength(): number;
  /**
    * Increments the reference count of self by one.  It is safe to call this function from any thread.
    * @returns the passed in GLib.MappedFile. 
    */
  ref(): import('../GLib').MappedFile;
  /**
    * Decrements the reference count of self by one.  If the reference count drops to 0, unmaps the buffer of self and frees it. 
    */
  unref(): void;
}

