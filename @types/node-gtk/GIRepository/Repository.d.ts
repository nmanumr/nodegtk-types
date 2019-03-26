import * as GObject from '../GObject';
export declare interface Repository extends GObject.Object { }

/**
  * GIRepository.Repository is used to manage repositories of namespaces. Namespaces
are represented on disk by type libraries (.typelib files). 
  */
export declare class Repository {
  static dump(arg: string): boolean;
  static errorQuark(): number;
  /**
    * Returns the singleton process-global default GIRepository.Repository. It is not currently supported to have multiple repositories in a particular process, but this function is provided in the unlikely eventuality that it would become possible, and as a convenience for higher level language bindings to conform to the GObject.Object method call conventions.
    * @returns The global singleton GIRepository.Repository 
    */
  static getDefault(): import('../GIRepository').Repository;
  /**
    * Obtain the option group for girepository, it’s used by the dumper and for programs that wants to provide introspection information
    * @returns the option group 
    */
  static getOptionGroup(): import('../GLib').OptionGroup;
  /**
    * Returns the current search path GIRepository.Repository will use when loading typelib files. The list is internal to #GIRespository and should not be freed, nor should its string elements.
    * @returns GLib.SList of strings 
    */
  static getSearchPath(): string[];
  static prependLibraryPath(directory: string): void;
  /**
    * Prepends directory to the typelib search path.
    * @param directory directory name to prepend to the typelib search path 
    */
  static prependSearchPath(directory: string): void;
  /**
    * Obtain an unordered list of versions (either currently loaded or available) for namespace_ in this self.
    * @param namespace GI namespace, e.g. “Gtk”
    * @returns the array of versions. 
    */
  enumerateVersions(namespace: string): string[];
  /**
    * Searches for the enum type corresponding to the given GLib.Error domain. Before calling this function for a particular namespace, you must call GIRepository.Repository.require() once to load the namespace, or otherwise ensure the namespace has already been loaded.
    * @param domain a GLib.Error domain
    * @returns #GIEnumInfo representing metadata about domain’s enum type, or None 
    */
  findByErrorDomain(domain: number): import('../GIRepository').BaseInfo;
  /**
    * Searches all loaded namespaces for a particular GObject.GType.  Note that in order to locate the metadata, the namespace corresponding to the type must first have been loaded.  There is currently no mechanism for determining the namespace which corresponds to an arbitrary GObject.GType - thus, this function will operate most reliably when you know the GObject.GType to originate from be from a loaded namespace.
    * @param gtype GObject.GType to search for
    * @returns GIRepository.BaseInfo representing metadata about type, or None 
    */
  findByGtype(gtype: import('../GObject').GType): import('../GIRepository').BaseInfo;
  /**
    * Searches for a particular entry in a namespace.  Before calling this function for a particular namespace, you must call GIRepository.Repository.require() once to load the namespace, or otherwise ensure the namespace has already been loaded.
    * @param namespace Namespace which will be searched
    * @param name Entry name to find
    * @returns GIRepository.BaseInfo representing metadata about name, or None 
    */
  findByName(namespace: string, name: string): import('../GIRepository').BaseInfo;
  /**
    * This function returns the “C prefix”, or the C level namespace associated with the given introspection namespace.  Each C symbol starts with this prefix, as well each GObject.GType in the library.
    * @param namespace Namespace to inspect
    * @returns C namespace prefix, or None if none associated 
    */
  getCPrefix(namespace: string): string;
  /**
    * Return an array of all (transitive) versioned dependencies for namespace_. Returned strings are of the form
    * @param namespace Namespace of interest
    * @returns Zero-terminated string array of all versioned dependencies 
    */
  getDependencies(namespace: string): string[];
  /**
    * Return an array of the immediate versioned dependencies for namespace_. Returned strings are of the form namespace-version.
    * @param namespace Namespace of interest
    * @returns Zero-terminated string array of immediate versioned dependencies 
    */
  getImmediateDependencies(namespace: string): string[];
  /**
    * This function returns a particular metadata entry in the given namespace namespace_.  The namespace must have already been loaded before calling this function. See GIRepository.Repository.get_n_infos() to find the maximum number of entries.
    * @param namespace Namespace to inspect
    * @param index 0-based offset into namespace metadata for entry
    * @returns GIRepository.BaseInfo containing metadata 
    */
  getInfo(namespace: string, index: number): import('../GIRepository').BaseInfo;
  /**
    * Return the list of currently loaded namespaces.
    * @returns List of namespaces 
    */
  getLoadedNamespaces(): string[];
  /**
    * This function returns the number of metadata entries in given namespace namespace_.  The namespace must have already been loaded before calling this function.
    * @param namespace Namespace to inspect
    * @returns number of metadata entries 
    */
  getNInfos(namespace: string): number;
  /**
    * This function returns a comma-separated list of paths to the shared C libraries associated with the given namespace namespace_. There may be no shared library path associated, in which case this function will return None.
    * @param namespace Namespace to inspect
    * @returns Comma-separated list of paths to shared libraries, or None if none are associated 
    */
  getSharedLibrary(namespace: string): string;
  /**
    * If namespace namespace_ is loaded, return the full path to the .typelib file it was loaded from.  If the typelib for namespace namespace_ was included in a shared library, return the special string “<builtin>”.
    * @param namespace GI namespace to use, e.g. “Gtk”
    * @returns Filesystem path (or $lt;builtin$gt;) if successful, None if namespace is not loaded 
    */
  getTypelibPath(namespace: string): string;
  /**
    * This function returns the loaded version associated with the given namespace namespace_.
    * @param namespace Namespace to inspect
    * @returns Loaded version 
    */
  getVersion(namespace: string): string;
  /**
    * Check whether a particular namespace (and optionally, a specific version thereof) is currently loaded.  This function is likely to only be useful in unusual circumstances; in order to act upon metadata in the namespace, you should call GIRepository.Repository.require() instead which will ensure the namespace is loaded, and return as quickly as this function will if it has already been loaded.
    * @param namespace Namespace of interest
    * @param version Required version, may be None for latest
    * @returns True if namespace-version is loaded, False otherwise 
    */
  isRegistered(namespace: string, version: string | null): boolean;
  /**
    * TODO
    * @param typelib TODO
    * @param flags TODO 
    */
  loadTypelib(typelib: import('../GIRepository').Typelib, flags: import('../GIRepository').RepositoryLoadFlags): string;
  /**
    * Force the namespace namespace_ to be loaded if it isn’t already. If namespace_ is not loaded, this function will search for a “.typelib” file using the repository search path.  In addition, a version version of namespace may be specified.  If version is not specified, the latest will be used.
    * @param namespace GI namespace to use, e.g. “Gtk”
    * @param version Version of namespace, may be None for latest
    * @param flags Set of GIRepository.RepositoryLoadFlags, may be 0
    * @returns a pointer to the GIRepository.Typelib if successful, None otherwise 
    */
  require(namespace: string, version: string | null, flags: import('../GIRepository').RepositoryLoadFlags): import('../GIRepository').Typelib;
  /**
    * Force the namespace namespace_ to be loaded if it isn’t already. If namespace_ is not loaded, this function will search for a “.typelib” file within the private directory only. In addition, a version version of namespace should be specified.  If version is not specified, the latest will be used.
    * @param typelibDir Private directory where to find the requested typelib
    * @param namespace GI namespace to use, e.g. “Gtk”
    * @param version Version of namespace, may be None for latest
    * @param flags Set of GIRepository.RepositoryLoadFlags, may be 0
    * @returns a pointer to the GIRepository.Typelib if successful, None otherwise 
    */
  requirePrivate(typelibDir: string, namespace: string, version: string | null, flags: import('../GIRepository').RepositoryLoadFlags): import('../GIRepository').Typelib;
}

