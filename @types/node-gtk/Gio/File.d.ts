import * as GObject from '../GObject';
export declare interface File extends GObject.GInterface { }

/**
  * Gio.File is a high level abstraction for manipulating files on a
virtual file system. Gio.Files are lightweight, immutable objects
that do no I/O upon creation. It is necessary to understand that
Gio.File objects do not represent files, merely an identifier for a
file. All file content I/O is implemented as streaming operations
(see Gio.InputStream and Gio.OutputStream). 
  */
export declare class File {
  /**
    * Creates a Gio.File with the given argument from the command line. The value of arg can be either a URI, an absolute path or a relative path resolved relative to the current working directory. This operation never fails, but the returned object might not support any I/O operation if arg points to a malformed path.
    * @param arg a command line string
    * @returns a new Gio.File. Free the returned object with GObject.Object.unref(). 
    */
  static newForCommandlineArg(arg: string): import('../Gio').File;
  /**
    * Creates a Gio.File with the given argument from the command line.
    * @param arg a command line string
    * @param cwd the current working directory of the commandline
    * @returns a new Gio.File 
    */
  static newForCommandlineArgAndCwd(arg: string, cwd: string): import('../Gio').File;
  /**
    * Constructs a Gio.File for a given path. This operation never fails, but the returned object might not support any I/O operation if path is malformed.
    * @param path a string containing a relative or absolute path. The string must be encoded in the glib filename encoding.
    * @returns a new Gio.File for the given path. Free the returned object with GObject.Object.unref(). 
    */
  static newForPath(path: string): import('../Gio').File;
  /**
    * Constructs a Gio.File for a given URI. This operation never fails, but the returned object might not support any I/O operation if uri is malformed or if the uri type is not supported.
    * @param uri a UTF-8 string containing a URI
    * @returns a new Gio.File for the given uri. Free the returned object with GObject.Object.unref(). 
    */
  static newForUri(uri: string): import('../Gio').File;
  /**
    * Opens a file in the preferred directory for temporary files (as returned by GLib.get_tmp_dir()) and returns a Gio.File and Gio.FileIOStream pointing to it.
    * @param tmpl Template for the file name, as in GLib.file_open_tmp(), or None for a default template
    * @returns a new Gio.File. Free the returned object with GObject.Object.unref().  iostream:on return, a Gio.FileIOStream for the created file 
    */
  static newTmp(tmpl: string | null): [import('../Gio').File, import('../Gio').FileIOStream];
  /**
    * Constructs a Gio.File with the given parse_name (i.e. something given by Gio.File.get_parse_name()). This operation never fails, but the returned object might not support any I/O operation if the parse_name cannot be parsed.
    * @param parseName a file name or path to be parsed
    * @returns a new Gio.File. 
    */
  static parseName(parseName: string): import('../Gio').File;
  /**
    * Gets an output stream for appending data to the file. If the file doesn’t already exist it is created.
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileOutputStream, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  appendTo(flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileOutputStream;
  /**
    * Asynchronously opens self for appending.
    * @param flags a set of Gio.FileCreateFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  appendToAsync(flags: import('../Gio').FileCreateFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file append operation started with Gio.File.append_to_async().
    * @param res Gio.AsyncResult
    * @returns a valid Gio.FileOutputStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  appendToFinish(res: import('../Gio').AsyncResult): import('../Gio').FileOutputStream;
  /**
    * Copies the file self to the location specified by destination. Can not handle recursive copies of directories.
    * @param destination destination Gio.File
    * @param flags set of Gio.FileCopyFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param progressCallback function to callback with progress information, or None if progress information is not needed
    * @param progressCallbackData user data to pass to progress_callback
    * @returns True on success, False otherwise. 
    */
  copy(destination: import('../Gio').File, flags: import('../Gio').FileCopyFlags, cancellable: import('../Gio').Cancellable | null, progressCallback: import('../Gio').fileProgressCallback | null, progressCallbackData: Object | null): boolean;
  /**
    * Copies the file self to the location specified by destination asynchronously. For details of the behaviour, see Gio.File.copy().
    * @param destination destination Gio.File
    * @param flags set of Gio.FileCopyFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param progressCallback function to callback with progress information, or None if progress information is not needed
    * @param progressCallbackData user data to pass to progress_callback
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  copyAsync(destination: import('../Gio').File, flags: import('../Gio').FileCopyFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, progressCallback: import('../Gio').fileProgressCallback | null, progressCallbackData: Object | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Copies the file attributes from self to destination.
    * @param destination a Gio.File to copy attributes to
    * @param flags a set of Gio.FileCopyFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attributes were copied successfully, False otherwise. 
    */
  copyAttributes(destination: import('../Gio').File, flags: import('../Gio').FileCopyFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Finishes copying the file started with Gio.File.copy_async().
    * @param res a Gio.AsyncResult
    * @returns a True on success, False on error. 
    */
  copyFinish(res: import('../Gio').AsyncResult): boolean;
  /**
    * Creates a new file and returns an output stream for writing to it. The file must not already exist.
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileOutputStream for the newly created file, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  create(flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileOutputStream;
  /**
    * Asynchronously creates a new file and returns an output stream for writing to it. The file must not already exist.
    * @param flags a set of Gio.FileCreateFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  createAsync(flags: import('../Gio').FileCreateFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file create operation started with Gio.File.create_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileOutputStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  createFinish(res: import('../Gio').AsyncResult): import('../Gio').FileOutputStream;
  /**
    * Creates a new file and returns a stream for reading and writing to it. The file must not already exist.
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileIOStream for the newly created file, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  createReadwrite(flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileIOStream;
  /**
    * Asynchronously creates a new file and returns a stream for reading and writing to it. The file must not already exist.
    * @param flags a set of Gio.FileCreateFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  createReadwriteAsync(flags: import('../Gio').FileCreateFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file create operation started with Gio.File.create_readwrite_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileIOStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  createReadwriteFinish(res: import('../Gio').AsyncResult): import('../Gio').FileIOStream;
  /**
    * Deletes a file. If the self is a directory, it will only be deleted if it is empty. This has the same semantics as GLib.unlink().
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the file was deleted. False otherwise. 
    */
  delete(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously delete a file. If the self is a directory, it will only be deleted if it is empty.  This has the same semantics as GLib.unlink().
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  deleteAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes deleting a file started with Gio.File.delete_async().
    * @param result a Gio.AsyncResult
    * @returns True if the file was deleted. False otherwise. 
    */
  deleteFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Duplicates a Gio.File handle. This operation does not duplicate the actual file or directory represented by the Gio.File; see Gio.File.copy() if attempting to copy a file.
    * @returns a new Gio.File that is a duplicate of the given Gio.File. 
    */
  dup(): import('../Gio').File;
  /**
    * Starts an asynchronous eject on a mountable. When this operation has completed, callback will be called with user_user data, and the operation can be finalized with Gio.File.eject_mountable_finish().
    * @param flags flags affecting the operation
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  ejectMountable(flags: import('../Gio').MountUnmountFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous eject operation started by Gio.File.eject_mountable().
    * @param result a Gio.AsyncResult
    * @returns True if the self was ejected successfully. False otherwise. 
    */
  ejectMountableFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Starts an asynchronous eject on a mountable. When this operation has completed, callback will be called with user_user data, and the operation can be finalized with Gio.File.eject_mountable_with_operation_finish().
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation, or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  ejectMountableWithOperation(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous eject operation started by Gio.File.eject_mountable_with_operation().
    * @param result a Gio.AsyncResult
    * @returns True if the self was ejected successfully. False otherwise. 
    */
  ejectMountableWithOperationFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets the requested information about the files in a directory. The result is a Gio.FileEnumerator object that will give out Gio.FileInfo objects for all the files in the directory.
    * @param attributes an attribute query string
    * @param flags a set of Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns A Gio.FileEnumerator if successful, None on error. Free the returned object with GObject.Object.unref(). 
    */
  enumerateChildren(attributes: string, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileEnumerator;
  /**
    * Asynchronously gets the requested information about the files in a directory. The result is a Gio.FileEnumerator object that will give out Gio.FileInfo objects for all the files in the directory.
    * @param attributes an attribute query string
    * @param flags a set of Gio.FileQueryInfoFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  enumerateChildrenAsync(attributes: string, flags: import('../Gio').FileQueryInfoFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an async enumerate children operation. See Gio.File.enumerate_children_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileEnumerator or None if an error occurred. Free the returned object with GObject.Object.unref(). 
    */
  enumerateChildrenFinish(res: import('../Gio').AsyncResult): import('../Gio').FileEnumerator;
  /**
    * Checks if the two given Gio.Files refer to the same file.
    * @param file2 the second Gio.File
    * @returns True if self and file2 are equal. 
    */
  equal(file2: import('../Gio').File): boolean;
  /**
    * Gets a Gio.Mount for the Gio.File.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.Mount where the self is located or None on error. Free the returned object with GObject.Object.unref(). 
    */
  findEnclosingMount(cancellable: import('../Gio').Cancellable | null): import('../Gio').Mount;
  /**
    * Asynchronously gets the mount for the file.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  findEnclosingMountAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous find mount request. See Gio.File.find_enclosing_mount_async().
    * @param res a Gio.AsyncResult
    * @returns Gio.Mount for given self or None on error. Free the returned object with GObject.Object.unref(). 
    */
  findEnclosingMountFinish(res: import('../Gio').AsyncResult): import('../Gio').Mount;
  /**
    * Gets the base name (the last component of the path) for a given Gio.File.
    * @returns string containing the Gio.File’s base name, or None if given Gio.File is invalid. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getBasename(): string | null;
  /**
    * Gets a child of self with basename equal to name.
    * @param name string containing the child’s basename
    * @returns a Gio.File to a child specified by name. Free the returned object with GObject.Object.unref(). 
    */
  getChild(name: string): import('../Gio').File;
  /**
    * Gets the child of self for a given display_name (i.e. a UTF-8 version of the name). If this function fails, it returns None and error will be set. This is very useful when constructing a Gio.File for a new file and the user entered the filename in the user interface, for instance when you select a directory and type a filename in the file selector.
    * @param displayName string to a possible child
    * @returns a Gio.File to the specified child, or None if the display name couldn’t be converted. Free the returned object with GObject.Object.unref(). 
    */
  getChildForDisplayName(displayName: string): import('../Gio').File;
  /**
    * Gets the parent directory for the self. If the self represents the root directory of the file system, then None will be returned.
    * @returns a Gio.File structure to the parent of the given Gio.File or None if there is no parent. Free the returned object with GObject.Object.unref(). 
    */
  getParent(): import('../Gio').File | null;
  /**
    * Gets the parse name of the self. A parse name is a UTF-8 string that describes the file such that one can get the Gio.File back using Gio.File.parse_name().
    * @returns a string containing the Gio.File’s parse name. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getParseName(): string;
  /**
    * Gets the local pathname for Gio.File, if one exists. If non-None, this is guaranteed to be an absolute, canonical path. It might contain symlinks.
    * @returns string containing the Gio.File’s path, or None if no such path exists. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getPath(): string | null;
  /**
    * Gets the path for descendant relative to self.
    * @param descendant input Gio.File
    * @returns string with the relative path from descendant to self, or None if descendant doesn’t have self as prefix. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getRelativePath(descendant: import('../Gio').File): string | null;
  /**
    * Gets the URI for the self.
    * @returns a string containing the Gio.File’s URI. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getUri(): string;
  /**
    * Gets the URI scheme for a Gio.File. RFC 3986 decodes the scheme as:
    * @returns a string containing the URI scheme for the given Gio.File. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getUriScheme(): string;
  /**
    * Checks if self has a parent, and optionally, if it is parent.
    * @param parent the parent to check for, or None
    * @returns True if self is an immediate child of parent (or any parent in the case that parent is None). 
    */
  hasParent(parent: import('../Gio').File | null): boolean;
  /**
    * Checks whether self has the prefix specified by prefix.
    * @param prefix input Gio.File
    * @returns True if the files’s parent, grandparent, etc is prefix, False otherwise. 
    */
  hasPrefix(prefix: import('../Gio').File): boolean;
  /**
    * Checks to see if a Gio.File has a given URI scheme.
    * @param uriScheme a string containing a URI scheme
    * @returns True if Gio.File’s backend supports the given URI scheme, False if URI scheme is None, not supported, or Gio.File is invalid. 
    */
  hasUriScheme(uriScheme: string): boolean;
  /**
    * Creates a hash value for a Gio.File.
    * @returns 0 if self is not a valid Gio.File, otherwise an integer that can be used as hash value for the Gio.File. This function is intended for easily hashing a Gio.File to add to a GLib.HashTable or similar data structure. 
    */
  hash(): number;
  /**
    * Checks to see if a file is native to the platform.
    * @returns True if self is native 
    */
  isNative(): boolean;
  /**
    * Loads the contents of self and returns it as GLib.Bytes.
    * @param cancellable a Gio.Cancellable or None
    * @returns a GLib.Bytes or None and error is set  etag_out:a location to place the current entity tag for the file, or None if the entity tag is not needed 
    */
  loadBytes(cancellable: import('../Gio').Cancellable | null): [import('../GLib').Bytes, string | null];
  /**
    * Asynchronously loads the contents of self as GLib.Bytes.
    * @param cancellable a Gio.Cancellable or None
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  loadBytesAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Completes an asynchronous request to Gio.File.load_bytes_async().
    * @param result a Gio.AsyncResult provided to the callback
    * @returns a GLib.Bytes or None and error is set  etag_out:a location to place the current entity tag for the file, or None if the entity tag is not needed 
    */
  loadBytesFinish(result: import('../Gio').AsyncResult): [import('../GLib').Bytes, string | null];
  /**
    * Loads the content of the file into memory. The data is always zero-terminated, but this is not included in the resultant length. The returned content should be freed with GLib.free() when no longer needed.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the self’s contents were successfully loaded. False if there were errors.  contents:a location to place the contents of the file etag_out:a location to place the current entity tag for the file, or None if the entity tag is not needed 
    */
  loadContents(cancellable: import('../Gio').Cancellable | null): [boolean, Int8Array, string];
  /**
    * Starts an asynchronous load of the self’s contents.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  loadContentsAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous load of the self’s contents. The contents are placed in contents, and length is set to the size of the contents string. The content should be freed with GLib.free() when no longer needed. If etag_out is present, it will be set to the new entity tag for the self.
    * @param res a Gio.AsyncResult
    * @returns True if the load was successful. If False and error is present, it will be set appropriately.  contents:a location to place the contents of the file etag_out:a location to place the current entity tag for the file, or None if the entity tag is not needed 
    */
  loadContentsFinish(res: import('../Gio').AsyncResult): [boolean, Int8Array, string];
  /**
    * Finishes an asynchronous partial load operation that was started with g_file_load_partial_contents_async(). The data is always zero-terminated, but this is not included in the resultant length. The returned content should be freed with GLib.free() when no longer needed.
    * @param res a Gio.AsyncResult
    * @returns True if the load was successful. If False and error is present, it will be set appropriately.  contents:a location to place the contents of the file etag_out:a location to place the current entity tag for the file, or None if the entity tag is not needed 
    */
  loadPartialContentsFinish(res: import('../Gio').AsyncResult): [boolean, Int8Array, string];
  /**
    * Creates a directory. Note that this will only create a child directory of the immediate parent directory of the path or URI given by the Gio.File. To recursively create directories, see Gio.File.make_directory_with_parents(). This function will fail if the parent directory does not exist, setting error to Gio.IOErrorEnum.NOT_FOUND. If the file system doesn’t support creating directories, this function will fail, setting error to Gio.IOErrorEnum.NOT_SUPPORTED.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True on successful creation, False otherwise. 
    */
  makeDirectory(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously creates a directory.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  makeDirectoryAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous directory creation, started with Gio.File.make_directory_async().
    * @param result a Gio.AsyncResult
    * @returns True on successful directory creation, False otherwise. 
    */
  makeDirectoryFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Creates a directory and any parent directories that may not exist similar to ‘mkdir -p’. If the file system does not support creating directories, this function will fail, setting error to Gio.IOErrorEnum.NOT_SUPPORTED. If the directory itself already exists, this function will fail setting error to Gio.IOErrorEnum.EXISTS, unlike the similar GLib.mkdir_with_parents().
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if all directories have been successfully created, False otherwise. 
    */
  makeDirectoryWithParents(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Creates a symbolic link named self which contains the string symlink_value.
    * @param symlinkValue a string with the path for the target of the new symlink
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True on the creation of a new symlink, False otherwise. 
    */
  makeSymbolicLink(symlinkValue: string, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Collects the results from an earlier call to g_file_measure_disk_usage_async().  See g_file_measure_disk_usage() for more information.
    * @param result the Gio.AsyncResult passed to your Gio.asyncReadyCallback
    * @returns True if successful, with the out parameters set. False otherwise, with error set.  disk_usage:the number of bytes of disk space used num_dirs:the number of directories encountered num_files:the number of non-directories encountered 
    */
  measureDiskUsageFinish(result: import('../Gio').AsyncResult): [boolean, number, number, number];
  /**
    * Obtains a file or directory monitor for the given file, depending on the type of the file.
    * @param flags a set of Gio.FileMonitorFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileMonitor for the given self, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  monitor(flags: import('../Gio').FileMonitorFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileMonitor;
  /**
    * Obtains a directory monitor for the given file. This may fail if directory monitoring is not supported.
    * @param flags a set of Gio.FileMonitorFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileMonitor for the given self, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  monitorDirectory(flags: import('../Gio').FileMonitorFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileMonitor;
  /**
    * Obtains a file monitor for the given file. If no file notification mechanism exists, then regular polling of the file is used.
    * @param flags a set of Gio.FileMonitorFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileMonitor for the given self, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  monitorFile(flags: import('../Gio').FileMonitorFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileMonitor;
  /**
    * Starts a mount_operation, mounting the volume that contains the file self.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  mountEnclosingVolume(flags: import('../Gio').MountMountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes a mount operation started by Gio.File.mount_enclosing_volume().
    * @param result a Gio.AsyncResult
    * @returns True if successful. If an error has occurred, this function will return False and set error appropriately if present. 
    */
  mountEnclosingVolumeFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Mounts a file of type Gio.FileType.MOUNTABLE. Using mount_operation, you can request callbacks when, for instance, passwords are needed during authentication.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation, or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  mountMountable(flags: import('../Gio').MountMountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes a mount operation. See Gio.File.mount_mountable() for details.
    * @param result a Gio.AsyncResult
    * @returns a Gio.File or None on error. Free the returned object with GObject.Object.unref(). 
    */
  mountMountableFinish(result: import('../Gio').AsyncResult): import('../Gio').File;
  /**
    * Tries to move the file or directory self to the location specified by destination. If native move operations are supported then this is used, otherwise a copy + delete fallback is used. The native implementation may support moving directories (for instance on moves inside the same filesystem), but the fallback code does not.
    * @param destination Gio.File pointing to the destination location
    * @param flags set of Gio.FileCopyFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param progressCallback Gio.fileProgressCallback function for updates
    * @param progressCallbackData object to user data for the callback function
    * @returns True on successful move, False otherwise. 
    */
  move(destination: import('../Gio').File, flags: import('../Gio').FileCopyFlags, cancellable: import('../Gio').Cancellable | null, progressCallback: import('../Gio').fileProgressCallback | null, progressCallbackData: Object | null): boolean;
  /**
    * Opens an existing file for reading and writing. The result is a Gio.FileIOStream that can be used to read and write the contents of the file.
    * @param cancellable a Gio.Cancellable
    * @returns Gio.FileIOStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  openReadwrite(cancellable: import('../Gio').Cancellable | null): import('../Gio').FileIOStream;
  /**
    * Asynchronously opens self for reading and writing.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  openReadwriteAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file read operation started with Gio.File.open_readwrite_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileIOStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  openReadwriteFinish(res: import('../Gio').AsyncResult): import('../Gio').FileIOStream;
  /**
    * Exactly like Gio.File.get_path(), but caches the result via g_object_set_qdata_full().  This is useful for example in C applications which mix g_file_* APIs with native ones.  It also avoids an extra duplicated string when possible, so will be generally more efficient.
    * @returns string containing the Gio.File’s path, or None if no such path exists. The returned string is owned by self. 
    */
  peekPath(): string | null;
  /**
    * Polls a file of type Gio.FileType.MOUNTABLE.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  pollMountable(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes a poll operation. See Gio.File.poll_mountable() for details.
    * @param result a Gio.AsyncResult
    * @returns True if the operation finished successfully. False otherwise. 
    */
  pollMountableFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Returns the Gio.AppInfo that is registered as the default application to handle the file specified by self.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.AppInfo if the handle was found, None if there were errors. When you are done with it, release it with GObject.Object.unref() 
    */
  queryDefaultHandler(cancellable: import('../Gio').Cancellable | null): import('../Gio').AppInfo;
  /**
    * Utility function to check if a particular file exists. This is implemented using Gio.File.query_info() and as such does blocking I/O.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the file exists (and can be detected without error), False otherwise (or if cancelled). 
    */
  queryExists(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Utility function to inspect the Gio.FileType of a file. This is implemented using Gio.File.query_info() and as such does blocking I/O.
    * @param flags a set of Gio.FileQueryInfoFlags passed to Gio.File.query_info()
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns The Gio.FileType of the file and Gio.FileType.UNKNOWN if the file does not exist 
    */
  queryFileType(flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileType;
  /**
    * Similar to Gio.File.query_info(), but obtains information about the filesystem the self is on, rather than the file itself. For instance the amount of space available and the type of the filesystem.
    * @param attributes an attribute query string
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileInfo or None if there was an error. Free the returned object with GObject.Object.unref(). 
    */
  queryFilesystemInfo(attributes: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileInfo;
  /**
    * Asynchronously gets the requested information about the filesystem that the specified self is on. The result is a Gio.FileInfo object that contains key-value attributes (such as type or size for the file).
    * @param attributes an attribute query string
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous filesystem info query. See Gio.File.query_filesystem_info_async().
    * @param res a Gio.AsyncResult
    * @returns Gio.FileInfo for given self or None on error. Free the returned object with GObject.Object.unref(). 
    */
  queryFilesystemInfoFinish(res: import('../Gio').AsyncResult): import('../Gio').FileInfo;
  /**
    * Gets the requested information about specified self. The result is a Gio.FileInfo object that contains key-value attributes (such as the type or size of the file).
    * @param attributes an attribute query string
    * @param flags a set of Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileInfo for the given self, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  queryInfo(attributes: string, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileInfo;
  /**
    * Asynchronously gets the requested information about specified self. The result is a Gio.FileInfo object that contains key-value attributes (such as type or size for the file).
    * @param attributes an attribute query string
    * @param flags a set of Gio.FileQueryInfoFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  queryInfoAsync(attributes: string, flags: import('../Gio').FileQueryInfoFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file info query. See Gio.File.query_info_async().
    * @param res a Gio.AsyncResult
    * @returns Gio.FileInfo for given self or None on error. Free the returned object with GObject.Object.unref(). 
    */
  queryInfoFinish(res: import('../Gio').AsyncResult): import('../Gio').FileInfo;
  /**
    * Obtain the list of settable attributes for the file.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileAttributeInfoList describing the settable attributes. When you are done with it, release it with Gio.FileAttributeInfoList.unref() 
    */
  querySettableAttributes(cancellable: import('../Gio').Cancellable | null): import('../Gio').FileAttributeInfoList;
  /**
    * Obtain the list of attribute namespaces where new attributes can be created by a user. An example of this is extended attributes (in the “xattr” namespace).
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileAttributeInfoList describing the writable namespaces. When you are done with it, release it with Gio.FileAttributeInfoList.unref() 
    */
  queryWritableNamespaces(cancellable: import('../Gio').Cancellable | null): import('../Gio').FileAttributeInfoList;
  /**
    * Opens a file for reading. The result is a Gio.FileInputStream that can be used to read the contents of the file.
    * @param cancellable a Gio.Cancellable
    * @returns Gio.FileInputStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  read(cancellable: import('../Gio').Cancellable | null): import('../Gio').FileInputStream;
  /**
    * Asynchronously opens self for reading.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  readAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file read operation started with Gio.File.read_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileInputStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  readFinish(res: import('../Gio').AsyncResult): import('../Gio').FileInputStream;
  /**
    * Returns an output stream for overwriting the file, possibly creating a backup copy of the file first. If the file doesn’t exist, it will be created.
    * @param etag an optional entity tag for the current Gio.File, or None to ignore
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileOutputStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  replace(etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileOutputStream;
  /**
    * Asynchronously overwrites the file, replacing the contents, possibly creating a backup copy of the file first.
    * @param etag an entity tag for the current Gio.File, or None to ignore
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  replaceAsync(etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Replaces the contents of self with contents of length bytes.
    * @param contents a string containing the new contents for self
    * @param etag the old entity-tag for the document, or None
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if successful. If an error has occurred, this function will return False and set error appropriately if present.   new_etag:a location to a new entity tag for the document. This should be freed with GLib.free() when no longer needed, or None 
    */
  replaceContents(contents: Int8Array, etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null): [boolean, string];
  /**
    * Starts an asynchronous replacement of self with the given contents of length bytes. etag will replace the document’s current entity tag.
    * @param contents string of contents to replace the file with
    * @param etag a new entity tag for the self, or None
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  replaceContentsAsync(contents: Int8Array, etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Same as Gio.File.replace_contents_async() but takes a GLib.Bytes input instead. This function will keep a ref on contents until the operation is done. Unlike Gio.File.replace_contents_async() this allows forgetting about the content without waiting for the callback.
    * @param contents a GLib.Bytes
    * @param etag a new entity tag for the self, or None
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  replaceContentsBytesAsync(contents: import('../GLib').Bytes, etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous replace of the given self. See Gio.File.replace_contents_async(). Sets new_etag to the new entity tag for the document, if present.
    * @param res a Gio.AsyncResult
    * @returns True on success, False on failure.  new_etag:a location of a new entity tag for the document. This should be freed with GLib.free() when it is no longer needed, or None 
    */
  replaceContentsFinish(res: import('../Gio').AsyncResult): [boolean, string];
  /**
    * Finishes an asynchronous file replace operation started with Gio.File.replace_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileOutputStream, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  replaceFinish(res: import('../Gio').AsyncResult): import('../Gio').FileOutputStream;
  /**
    * Returns an output stream for overwriting the file in readwrite mode, possibly creating a backup copy of the file first. If the file doesn’t exist, it will be created.
    * @param etag an optional entity tag for the current Gio.File, or None to ignore
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.FileIOStream or None on error. Free the returned object with GObject.Object.unref(). 
    */
  replaceReadwrite(etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, cancellable: import('../Gio').Cancellable | null): import('../Gio').FileIOStream;
  /**
    * Asynchronously overwrites the file in read-write mode, replacing the contents, possibly creating a backup copy of the file first.
    * @param etag an entity tag for the current Gio.File, or None to ignore
    * @param makeBackup True if a backup should be created
    * @param flags a set of Gio.FileCreateFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  replaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: import('../Gio').FileCreateFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file replace operation started with Gio.File.replace_readwrite_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.FileIOStream, or None on error. Free the returned object with GObject.Object.unref(). 
    */
  replaceReadwriteFinish(res: import('../Gio').AsyncResult): import('../Gio').FileIOStream;
  /**
    * Resolves a relative path for self to an absolute path.
    * @param relativePath a given relative path string
    * @returns Gio.File to the resolved path. None if relative_path is None or if self is invalid. Free the returned object with GObject.Object.unref(). 
    */
  resolveRelativePath(relativePath: string): import('../Gio').File;
  /**
    * Sets an attribute in the file with attribute name attribute to value.
    * @param attribute a string containing the attribute’s name
    * @param type The type of the attribute
    * @param valueP a pointer to the value (or the pointer itself if the type is a pointer type)
    * @param flags a set of Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was set, False otherwise. 
    */
  setAttribute(attribute: string, type: import('../Gio').FileAttributeType, valueP: Object | null, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets attribute of type Gio.FileAttributeType.BYTE_STRING to value. If attribute is of a different type, this operation will fail, returning False.
    * @param attribute a string containing the attribute’s name
    * @param value a string containing the attribute’s new value
    * @param flags a Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was successfully set to value in the self, False otherwise. 
    */
  setAttributeByteString(attribute: string, value: string, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets attribute of type Gio.FileAttributeType.INT32 to value. If attribute is of a different type, this operation will fail.
    * @param attribute a string containing the attribute’s name
    * @param value a #gint32 containing the attribute’s new value
    * @param flags a Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was successfully set to value in the self, False otherwise. 
    */
  setAttributeInt32(attribute: string, value: number, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets attribute of type Gio.FileAttributeType.INT64 to value. If attribute is of a different type, this operation will fail.
    * @param attribute a string containing the attribute’s name
    * @param value a #guint64 containing the attribute’s new value
    * @param flags a Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was successfully set, False otherwise. 
    */
  setAttributeInt64(attribute: string, value: number, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets attribute of type Gio.FileAttributeType.STRING to value. If attribute is of a different type, this operation will fail.
    * @param attribute a string containing the attribute’s name
    * @param value a string containing the attribute’s value
    * @param flags Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was successfully set, False otherwise. 
    */
  setAttributeString(attribute: string, value: string, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets attribute of type Gio.FileAttributeType.UINT32 to value. If attribute is of a different type, this operation will fail.
    * @param attribute a string containing the attribute’s name
    * @param value a #guint32 containing the attribute’s new value
    * @param flags a Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was successfully set to value in the self, False otherwise. 
    */
  setAttributeUint32(attribute: string, value: number, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Sets attribute of type Gio.FileAttributeType.UINT64 to value. If attribute is of a different type, this operation will fail.
    * @param attribute a string containing the attribute’s name
    * @param value a #guint64 containing the attribute’s new value
    * @param flags a Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True if the attribute was successfully set to value in the self, False otherwise. 
    */
  setAttributeUint64(attribute: string, value: number, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously sets the attributes of self with info.
    * @param info a Gio.FileInfo
    * @param flags a Gio.FileQueryInfoFlags
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback
    * @param userData a object 
    */
  setAttributesAsync(info: import('../Gio').FileInfo, flags: import('../Gio').FileQueryInfoFlags, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes setting an attribute started in Gio.File.set_attributes_async().
    * @param result a Gio.AsyncResult
    * @returns True if the attributes were set correctly, False otherwise.  info:a Gio.FileInfo 
    */
  setAttributesFinish(result: import('../Gio').AsyncResult): [boolean, import('../Gio').FileInfo];
  /**
    * Tries to set all attributes in the Gio.FileInfo on the target values, not stopping on the first error.
    * @param info a Gio.FileInfo
    * @param flags Gio.FileQueryInfoFlags
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns False if there was any error, True otherwise. 
    */
  setAttributesFromInfo(info: import('../Gio').FileInfo, flags: import('../Gio').FileQueryInfoFlags, cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Renames self to the specified display name.
    * @param displayName a string
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a Gio.File specifying what self was renamed to, or None if there was an error. Free the returned object with GObject.Object.unref(). 
    */
  setDisplayName(displayName: string, cancellable: import('../Gio').Cancellable | null): import('../Gio').File;
  /**
    * Asynchronously sets the display name for a given Gio.File.
    * @param displayName a string
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  setDisplayNameAsync(displayName: string, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes setting a display name started with Gio.File.set_display_name_async().
    * @param res a Gio.AsyncResult
    * @returns a Gio.File or None on error. Free the returned object with GObject.Object.unref(). 
    */
  setDisplayNameFinish(res: import('../Gio').AsyncResult): import('../Gio').File;
  /**
    * Starts a file of type Gio.FileType.MOUNTABLE. Using start_operation, you can request callbacks when, for instance, passwords are needed during authentication.
    * @param flags flags affecting the operation
    * @param startOperation a Gio.MountOperation, or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  startMountable(flags: import('../Gio').DriveStartFlags, startOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes a start operation. See Gio.File.start_mountable() for details.
    * @param result a Gio.AsyncResult
    * @returns True if the operation finished successfully. False otherwise. 
    */
  startMountableFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Stops a file of type Gio.FileType.MOUNTABLE.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation, or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  stopMountable(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an stop operation, see Gio.File.stop_mountable() for details.
    * @param result a Gio.AsyncResult
    * @returns True if the operation finished successfully. False otherwise. 
    */
  stopMountableFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Checks if self supports ‘thread-default contexts [g-main-context-push-thread-default-context]’. If this returns False, you cannot perform asynchronous operations on self in a thread that has a thread-default context.
    * @returns Whether or not self supports thread-default contexts. 
    */
  supportsThreadContexts(): boolean;
  /**
    * Sends self to the “Trashcan”, if possible. This is similar to deleting it, but the user can recover it before emptying the trashcan. Not all file systems support trashing, so this call can return the Gio.IOErrorEnum.NOT_SUPPORTED error.
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns True on successful trash, False otherwise. 
    */
  trash(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Asynchronously sends self to the Trash location, if possible.
    * @param ioPriority the I/O priority of the request
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
    * @param userData the data to pass to callback function 
    */
  trashAsync(ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an asynchronous file trashing operation, started with Gio.File.trash_async().
    * @param result a Gio.AsyncResult
    * @returns True on successful trash, False otherwise. 
    */
  trashFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Unmounts a file of type Gio.FileType.MOUNTABLE.
    * @param flags flags affecting the operation
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  unmountMountable(flags: import('../Gio').MountUnmountFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an unmount operation, see Gio.File.unmount_mountable() for details.
    * @param result a Gio.AsyncResult
    * @returns True if the operation finished successfully. False otherwise. 
    */
  unmountMountableFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Unmounts a file of type Gio.FileType.MOUNTABLE.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation, or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback to call when the request is satisfied, or None
    * @param userData the data to pass to callback function 
    */
  unmountMountableWithOperation(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an unmount operation, see Gio.File.unmount_mountable_with_operation() for details.
    * @param result a Gio.AsyncResult
    * @returns True if the operation finished successfully. False otherwise. 
    */
  unmountMountableWithOperationFinish(result: import('../Gio').AsyncResult): boolean;
}

