/**
  * Checks if action_name is valid.
  * @param actionName an potential action name
  * @returns True if action_name is valid 
  */
export declare function actionNameIsValid(actionName: string): boolean;
/**
  * Parses a detailed action name into its separate name and target components.
  * @param detailedName a detailed action name
  * @returns True if successful, else False with error set  action_name:the action name target_value:the target value, or None for no target 
  */
export declare function actionParseDetailedName(detailedName: string): [boolean, string, import('../GLib').Variant];
/**
  * Formats a detailed action name from action_name and target_value.
  * @param actionName a valid action name
  * @param targetValue a GLib.Variant target value, or None
  * @returns a detailed format string 
  */
export declare function actionPrintDetailedName(actionName: string, targetValue: import('../GLib').Variant | null): string;
/**
  * Creates a new Gio.AppInfo from the given information.
  * @param commandline the commandline to use
  * @param applicationName the application name, or None to use commandline
  * @param flags flags that can specify details of the created Gio.AppInfo
  * @returns new Gio.AppInfo for given command. 
  */
export declare function appInfoCreateFromCommandline(commandline: string, applicationName: string | null, flags: import('../Gio').AppInfoCreateFlags): import('../Gio').AppInfo;
/**
  * Gets a list of all of the applications currently registered on this system.
  * @returns a newly allocated GLib.List of references to Gio.AppInfos. 
  */
export declare function appInfoGetAll(): import('../Gio').AppInfo[];
/**
  * Gets a list of all Gio.AppInfos for a given content type, including the recommended and fallback Gio.AppInfos. See Gio.AppInfo.get_recommended_for_type() and Gio.AppInfo.get_fallback_for_type().
  * @param contentType the content type to find a Gio.AppInfo for
  * @returns GLib.List of Gio.AppInfos for given content_type or None on error. 
  */
export declare function appInfoGetAllForType(contentType: string): import('../Gio').AppInfo[];
/**
  * Gets the default Gio.AppInfo for a given content type.
  * @param contentType the content type to find a Gio.AppInfo for
  * @param mustSupportUris if True, the Gio.AppInfo is expected to support URIs
  * @returns Gio.AppInfo for given content_type or None on error. 
  */
export declare function appInfoGetDefaultForType(contentType: string, mustSupportUris: boolean): import('../Gio').AppInfo;
/**
  * Gets the default application for handling URIs with the given URI scheme. A URI scheme is the initial part of the URI, up to but not including the ‘:’, e.g. “http”, “ftp” or “sip”.
  * @param uriScheme a string containing a URI scheme.
  * @returns Gio.AppInfo for given uri_scheme or None on error. 
  */
export declare function appInfoGetDefaultForUriScheme(uriScheme: string): import('../Gio').AppInfo;
/**
  * Gets a list of fallback Gio.AppInfos for a given content type, i.e. those applications which claim to support the given content type by MIME type subclassing and not directly.
  * @param contentType the content type to find a Gio.AppInfo for
  * @returns GLib.List of Gio.AppInfos for given content_type or None on error. 
  */
export declare function appInfoGetFallbackForType(contentType: string): import('../Gio').AppInfo[];
/**
  * Gets a list of recommended Gio.AppInfos for a given content type, i.e. those applications which claim to support the given content type exactly, and not by MIME type subclassing. Note that the first application of the list is the last used one, i.e. the last one for which Gio.AppInfo.set_as_last_used_for_type() has been called.
  * @param contentType the content type to find a Gio.AppInfo for
  * @returns GLib.List of Gio.AppInfos for given content_type or None on error. 
  */
export declare function appInfoGetRecommendedForType(contentType: string): import('../Gio').AppInfo[];
/**
  * Utility function that launches the default application registered to handle the specified uri. Synchronous I/O is done on the uri to detect the type of the file if required.
  * @param uri the uri to show
  * @param context an optional Gio.AppLaunchContext
  * @returns True on success, False on error. 
  */
export declare function appInfoLaunchDefaultForUri(uri: string, context: import('../Gio').AppLaunchContext | null): boolean;
/**
  * Async version of Gio.AppInfo.launch_default_for_uri().
  * @param uri the uri to show
  * @param context an optional Gio.AppLaunchContext
  * @param cancellable a Gio.Cancellable
  * @param callback a #GASyncReadyCallback to call when the request is done
  * @param userData data to pass to callback 
  */
export declare function appInfoLaunchDefaultForUriAsync(uri: string, context: import('../Gio').AppLaunchContext | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an asynchronous launch-default-for-uri operation.
  * @param result a Gio.AsyncResult
  * @returns True if the launch was successful, False if error is set 
  */
export declare function appInfoLaunchDefaultForUriFinish(result: import('../Gio').AsyncResult): boolean;
/**
  * Removes all changes to the type associations done by Gio.AppInfo.set_as_default_for_type(), Gio.AppInfo.set_as_default_for_extension(), Gio.AppInfo.add_supports_type() or Gio.AppInfo.remove_supports_type().
  * @param contentType a content type 
  */
export declare function appInfoResetTypeAssociations(contentType: string): void;
/**
  * Helper function for constructing Gio.AsyncInitable object. This is similar to GObject.Object.newv() but also initializes the object asynchronously.
  * @param objectType a GObject.GType supporting Gio.AsyncInitable.
  * @param nParameters the number of parameters in parameters
  * @param parameters the parameters to use to construct the object
  * @param ioPriority the I/O priority of the operation
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @param callback a Gio.asyncReadyCallback to call when the initialization is finished
  * @param userData the data to pass to callback function 
  */
export declare function asyncInitableNewvAsync(objectType: import('../GObject').GType, nParameters: number, parameters: import('../GObject').Parameter, ioPriority: number, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
/**
  * Asynchronously connects to the message bus specified by bus_type.
  * @param busType a Gio.BusType
  * @param cancellable a Gio.Cancellable or None
  * @param callback a Gio.asyncReadyCallback to call when the request is satisfied
  * @param userData the data to pass to callback 
  */
export declare function busGet(busType: import('../Gio').BusType, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an operation started with Gio.bus_get().
  * @param res a Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.bus_get()
  * @returns a Gio.DBusConnection or None if error is set. Free with GObject.Object.unref(). 
  */
export declare function busGetFinish(res: import('../Gio').AsyncResult): import('../Gio').DBusConnection;
/**
  * Synchronously connects to the message bus specified by bus_type. Note that the returned object may shared with other callers, e.g. if two separate parts of a process calls this function with the same bus_type, they will share the same object.
  * @param busType a Gio.BusType
  * @param cancellable a Gio.Cancellable or None
  * @returns a Gio.DBusConnection or None if error is set. Free with GObject.Object.unref(). 
  */
export declare function busGetSync(busType: import('../Gio').BusType, cancellable: import('../Gio').Cancellable | null): import('../Gio').DBusConnection;
/**
  * Version of Gio.bus_own_name() using closures instead of callbacks for easier binding in other languages.
  * @param busType the type of bus to own a name on
  * @param name the well-known name to own
  * @param flags a set of flags from the Gio.BusNameOwnerFlags enumeration
  * @param busAcquiredClosure GObject.Closure to invoke when connected to the bus of type bus_type or None
  * @param nameAcquiredClosure GObject.Closure to invoke when name is acquired or None
  * @param nameLostClosure GObject.Closure to invoke when name is lost or None
  * @returns an identifier (never 0) that an be used with Gio.bus_unown_name() to stop owning the name. 
  */
export declare function busOwnName(busType: import('../Gio').BusType, name: string, flags: import('../Gio').BusNameOwnerFlags, busAcquiredClosure: import('../GObject').Closure | null, nameAcquiredClosure: import('../GObject').Closure | null, nameLostClosure: import('../GObject').Closure | null): number;
/**
  * Version of Gio.bus_own_name_on_connection() using closures instead of callbacks for easier binding in other languages.
  * @param connection a Gio.DBusConnection
  * @param name the well-known name to own
  * @param flags a set of flags from the Gio.BusNameOwnerFlags enumeration
  * @param nameAcquiredClosure GObject.Closure to invoke when name is acquired or None
  * @param nameLostClosure GObject.Closure to invoke when name is lost or None
  * @returns an identifier (never 0) that an be used with Gio.bus_unown_name() to stop owning the name. 
  */
export declare function busOwnNameOnConnection(connection: import('../Gio').DBusConnection, name: string, flags: import('../Gio').BusNameOwnerFlags, nameAcquiredClosure: import('../GObject').Closure | null, nameLostClosure: import('../GObject').Closure | null): number;
/**
  * Stops owning a name.
  * @param ownerId an identifier obtained from Gio.bus_own_name() 
  */
export declare function busUnownName(ownerId: number): void;
/**
  * Stops watching a name.
  * @param watcherId An identifier obtained from Gio.bus_watch_name() 
  */
export declare function busUnwatchName(watcherId: number): void;
/**
  * Version of Gio.bus_watch_name() using closures instead of callbacks for easier binding in other languages.
  * @param busType The type of bus to watch a name on.
  * @param name The name (well-known or unique) to watch.
  * @param flags Flags from the Gio.BusNameWatcherFlags enumeration.
  * @param nameAppearedClosure GObject.Closure to invoke when name is known to exist or None.
  * @param nameVanishedClosure GObject.Closure to invoke when name is known to not exist or None.
  * @returns An identifier (never 0) that an be used with Gio.bus_unwatch_name() to stop watching the name. 
  */
export declare function busWatchName(busType: import('../Gio').BusType, name: string, flags: import('../Gio').BusNameWatcherFlags, nameAppearedClosure: import('../GObject').Closure | null, nameVanishedClosure: import('../GObject').Closure | null): number;
/**
  * Version of Gio.bus_watch_name_on_connection() using closures instead of callbacks for easier binding in other languages.
  * @param connection A Gio.DBusConnection.
  * @param name The name (well-known or unique) to watch.
  * @param flags Flags from the Gio.BusNameWatcherFlags enumeration.
  * @param nameAppearedClosure GObject.Closure to invoke when name is known to exist or None.
  * @param nameVanishedClosure GObject.Closure to invoke when name is known to not exist or None.
  * @returns An identifier (never 0) that an be used with Gio.bus_unwatch_name() to stop watching the name. 
  */
export declare function busWatchNameOnConnection(connection: import('../Gio').DBusConnection, name: string, flags: import('../Gio').BusNameWatcherFlags, nameAppearedClosure: import('../GObject').Closure | null, nameVanishedClosure: import('../GObject').Closure | null): number;
/**
  * Checks if a content type can be executable. Note that for instance things like text files can be executables (i.e. scripts and batch files).
  * @param type a content type string
  * @returns True if the file type corresponds to a type that can be executable, False otherwise. 
  */
export declare function contentTypeCanBeExecutable(type: string): boolean;
/**
  * Compares two content types for equality.
  * @param type1 a content type string
  * @param type2 a content type string
  * @returns True if the two strings are identical or equivalent, False otherwise. 
  */
export declare function contentTypeEquals(type1: string, type2: string): boolean;
/**
  * Tries to find a content type based on the mime type name.
  * @param mimeType a mime type string
  * @returns Newly allocated string with content type or None. Free with GLib.free() 
  */
export declare function contentTypeFromMimeType(mimeType: string): string | null;
/**
  * Gets the human readable description of the content type.
  * @param type a content type string
  * @returns a short description of the content type type. Free the returned string with GLib.free() 
  */
export declare function contentTypeGetDescription(type: string): string;
/**
  * Gets the generic icon name for a content type.
  * @param type a content type string
  * @returns the registered generic icon name for the given type, or None if unknown. Free with GLib.free() 
  */
export declare function contentTypeGetGenericIconName(type: string): string | null;
/**
  * Gets the icon for a content type.
  * @param type a content type string
  * @returns Gio.Icon corresponding to the content type. Free the returned object with GObject.Object.unref() 
  */
export declare function contentTypeGetIcon(type: string): import('../Gio').Icon;
/**
  * Gets the mime type for the content type, if one is registered.
  * @param type a content type string
  * @returns the registered mime type for the given type, or None if unknown; free with GLib.free(). 
  */
export declare function contentTypeGetMimeType(type: string): string | null;
/**
  * Gets the symbolic icon for a content type.
  * @param type a content type string
  * @returns symbolic Gio.Icon corresponding to the content type. Free the returned object with GObject.Object.unref() 
  */
export declare function contentTypeGetSymbolicIcon(type: string): import('../Gio').Icon;
/**
  * Guesses the content type based on example data. If the function is uncertain, result_uncertain will be set to True. Either filename or data may be None, in which case the guess will be based solely on the other argument.
  * @param filename a string, or None
  * @param data a stream of data, or None
  * @returns a string indicating a guessed content type for the given data. Free with GLib.free()   result_uncertain:  return location for the certainty of the result, or None 
  */
export declare function contentTypeGuess(filename: string | null, data: Int8Array | null): [string, boolean];
/**
  * Tries to guess the type of the tree with root root, by looking at the files it contains. The result is an array of content types, with the best guess coming first.
  * @param root the root of the tree to guess a type for
  * @returns an None-terminated array of zero or more content types. Free with GLib.strfreev() 
  */
export declare function contentTypeGuessForTree(root: import('../Gio').File): string[];
/**
  * Determines if type is a subset of supertype.
  * @param type a content type string
  * @param supertype a content type string
  * @returns True if type is a kind of supertype, False otherwise. 
  */
export declare function contentTypeIsA(type: string, supertype: string): boolean;
/**
  * Determines if type is a subset of mime_type. Convenience wrapper around Gio.content_type_is_a().
  * @param type a content type string
  * @param mimeType a mime type string
  * @returns True if type is a kind of mime_type, False otherwise. 
  */
export declare function contentTypeIsMimeType(type: string, mimeType: string): boolean;
/**
  * Checks if the content type is the generic “unknown” type. On UNIX this is the “application/octet-stream” mimetype, while on win32 it is “*” and on OSX it is a dynamic type or octet-stream.
  * @param type a content type string
  * @returns True if the type is the unknown type. 
  */
export declare function contentTypeIsUnknown(type: string): boolean;
/**
  * Gets a list of strings containing all the registered content types known to the system. The list and its data should be freed using g_list_free_full (list, GLib.free).
  * @returns list of the registered content types 
  */
export declare function contentTypesGetRegistered(): string[];
/**
  * Escape string so it can appear in a D-Bus address as the value part of a key-value pair.
  * @param string an unescaped string to be included in a D-Bus address as the value in a key-value pair
  * @returns a copy of string with all non-optionally-escaped bytes escaped 
  */
export declare function dbusAddressEscapeValue(string: string): string;
/**
  * Synchronously looks up the D-Bus address for the well-known message bus instance specified by bus_type. This may involve using various platform specific mechanisms.
  * @param busType a Gio.BusType
  * @param cancellable a Gio.Cancellable or None
  * @returns a valid D-Bus address string for bus_type or None if error is set 
  */
export declare function dbusAddressGetForBusSync(busType: import('../Gio').BusType, cancellable: import('../Gio').Cancellable | null): string;
/**
  * Asynchronously connects to an endpoint specified by address and sets up the connection so it is in a state to run the client-side of the D-Bus authentication conversation. address must be in the D-Bus address format.
  * @param address A valid D-Bus address.
  * @param cancellable A Gio.Cancellable or None.
  * @param callback A Gio.asyncReadyCallback to call when the request is satisfied.
  * @param userData Data to pass to callback. 
  */
export declare function dbusAddressGetStream(address: string, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an operation started with Gio.dbus_address_get_stream().
  * @param res A Gio.AsyncResult obtained from the Gio.asyncReadyCallback passed to Gio.dbus_address_get_stream().
  * @returns A Gio.IOStream or None if error is set.  out_guid:None or return location to store the GUID extracted from address, if any. 
  */
export declare function dbusAddressGetStreamFinish(res: import('../Gio').AsyncResult): [import('../Gio').IOStream, string];
/**
  * Synchronously connects to an endpoint specified by address and sets up the connection so it is in a state to run the client-side of the D-Bus authentication conversation. address must be in the D-Bus address format.
  * @param address A valid D-Bus address.
  * @param cancellable A Gio.Cancellable or None.
  * @returns A Gio.IOStream or None if error is set.   out_guid:None or return location to store the GUID extracted from address, if any. 
  */
export declare function dbusAddressGetStreamSync(address: string, cancellable: import('../Gio').Cancellable | null): [import('../Gio').IOStream, string];
/**
  * Looks up the value of an annotation.
  * @param annotations A None-terminated array of annotations or None.
  * @param name The name of the annotation to look up.
  * @returns The value or None if not found. Do not free, it is owned by annotations. 
  */
export declare function dbusAnnotationInfoLookup(annotations: import('../Gio').DBusAnnotationInfo | null, name: string): string;
/**
  * Creates a D-Bus error name to use for error. If error matches a registered error (cf. Gio.DBusError.register_error()), the corresponding D-Bus error name will be returned.
  * @param error A GLib.Error.
  * @returns A D-Bus error name (never None). Free with GLib.free(). 
  */
export declare function dbusErrorEncodeGerror(error: import('../GLib').Error): string;
/**
  * Gets the D-Bus error name used for error, if any.
  * @param error a GLib.Error
  * @returns an allocated string or None if the D-Bus error name could not be found. Free with GLib.free(). 
  */
export declare function dbusErrorGetRemoteError(error: import('../GLib').Error): string;
/**
  * Checks if error represents an error received via D-Bus from a remote peer. If so, use Gio.DBusError.get_remote_error() to get the name of the error.
  * @param error A GLib.Error.
  * @returns True if error represents an error from a remote peer, False otherwise. 
  */
export declare function dbusErrorIsRemoteError(error: import('../GLib').Error): boolean;
/**
  * Creates a GLib.Error based on the contents of dbus_error_name and dbus_error_message.
  * @param dbusErrorName D-Bus error name.
  * @param dbusErrorMessage D-Bus error message.
  * @returns An allocated GLib.Error. Free with GLib.Error.free(). 
  */
export declare function dbusErrorNewForDbusError(dbusErrorName: string, dbusErrorMessage: string): import('../GLib').Error;
export declare function dbusErrorQuark(): number;
/**
  * Creates an association to map between dbus_error_name and GLib.Errors specified by error_domain and error_code.
  * @param errorDomain A #GQuark for a error domain.
  * @param errorCode An error code.
  * @param dbusErrorName A D-Bus error name.
  * @returns True if the association was created, False if it already exists. 
  */
export declare function dbusErrorRegisterError(errorDomain: number, errorCode: number, dbusErrorName: string): boolean;
/**
  * Helper function for associating a GLib.Error error domain with D-Bus error names.
  * @param errorDomainQuarkName The error domain name.
  * @param quarkVolatile A pointer where to store the #GQuark.
  * @param entries A pointer to num_entries Gio.DBusErrorEntry struct items. 
  */
export declare function dbusErrorRegisterErrorDomain(errorDomainQuarkName: string, quarkVolatile: number, entries: import('../Gio').DBusErrorEntry): void;
/**
  * Looks for extra information in the error message used to recover the D-Bus error name and strips it if found. If stripped, the message field in error will correspond exactly to what was received on the wire.
  * @param error A GLib.Error.
  * @returns True if information was stripped, False otherwise. 
  */
export declare function dbusErrorStripRemoteError(error: import('../GLib').Error): boolean;
/**
  * Destroys an association previously set up with Gio.DBusError.register_error().
  * @param errorDomain A #GQuark for a error domain.
  * @param errorCode An error code.
  * @param dbusErrorName A D-Bus error name.
  * @returns True if the association was destroyed, False if it wasn’t found. 
  */
export declare function dbusErrorUnregisterError(errorDomain: number, errorCode: number, dbusErrorName: string): boolean;
/**
  * Generate a D-Bus GUID that can be used with e.g. Gio.DBusConnection.new().
  * @returns A valid D-Bus GUID. Free with GLib.free(). 
  */
export declare function dbusGenerateGuid(): string;
/**
  * Converts a GObject.Value to a GLib.Variant of the type indicated by the type parameter.
  * @param gvalue A GObject.Value to convert to a GLib.Variant
  * @param type A GLib.VariantType
  * @returns A GLib.Variant (never floating) of GLib.VariantType type holding the data from gvalue or None in case of failure. Free with GLib.Variant.unref(). 
  */
export declare function dbusGvalueToGvariant(gvalue: import('../GObject').Value, type: import('../GLib').VariantType): import('../GLib').Variant;
/**
  * Converts a GLib.Variant to a GObject.Value. If value is floating, it is consumed.
  * @param value A GLib.Variant.
  * @returns Return location pointing to a zero-filled (uninitialized) GObject.Value. 
  */
export declare function dbusGvariantToGvalue(value: import('../GLib').Variant): import('../GObject').Value;
/**
  * Checks if string is a D-Bus address.
  * @param string A string.
  * @returns True if string is a valid D-Bus address, False otherwise. 
  */
export declare function dbusIsAddress(string: string): boolean;
/**
  * Checks if string is a D-Bus GUID.
  * @param string The string to check.
  * @returns True if string is a guid, False otherwise. 
  */
export declare function dbusIsGuid(string: string): boolean;
/**
  * Checks if string is a valid D-Bus interface name.
  * @param string The string to check.
  * @returns True if valid, False otherwise. 
  */
export declare function dbusIsInterfaceName(string: string): boolean;
/**
  * Checks if string is a valid D-Bus member (e.g. signal or method) name.
  * @param string The string to check.
  * @returns True if valid, False otherwise. 
  */
export declare function dbusIsMemberName(string: string): boolean;
/**
  * Checks if string is a valid D-Bus bus name (either unique or well-known).
  * @param string The string to check.
  * @returns True if valid, False otherwise. 
  */
export declare function dbusIsName(string: string): boolean;
/**
  * Like Gio.dbus_is_address() but also checks if the library supports the transports in string and that key/value pairs for each transport are valid. See the specification of the D-Bus address format.
  * @param string A string.
  * @returns True if string is a valid D-Bus address that is supported by this library, False if error is set. 
  */
export declare function dbusIsSupportedAddress(string: string): boolean;
/**
  * Checks if string is a valid D-Bus unique bus name.
  * @param string The string to check.
  * @returns True if valid, False otherwise. 
  */
export declare function dbusIsUniqueName(string: string): boolean;
/**
  * Creates a new Gio.DtlsClientConnection wrapping base_socket which is assumed to communicate with the server identified by server_identity.
  * @param baseSocket the Gio.DatagramBased to wrap
  * @param serverIdentity the expected identity of the server
  * @returns the new Gio.DtlsClientConnection, or None on error 
  */
export declare function dtlsClientConnectionNew(baseSocket: import('../Gio').DatagramBased, serverIdentity: import('../Gio').SocketConnectable | null): import('../Gio').DtlsClientConnection;
/**
  * Creates a new Gio.DtlsServerConnection wrapping base_socket.
  * @param baseSocket the Gio.DatagramBased to wrap
  * @param certificate the default server certificate, or None
  * @returns the new Gio.DtlsServerConnection, or None on error 
  */
export declare function dtlsServerConnectionNew(baseSocket: import('../Gio').DatagramBased, certificate: import('../Gio').TlsCertificate | null): import('../Gio').DtlsServerConnection;
/**
  * Creates a Gio.File with the given argument from the command line. The value of arg can be either a URI, an absolute path or a relative path resolved relative to the current working directory. This operation never fails, but the returned object might not support any I/O operation if arg points to a malformed path.
  * @param arg a command line string
  * @returns a new Gio.File. Free the returned object with GObject.Object.unref(). 
  */
export declare function fileNewForCommandlineArg(arg: string): import('../Gio').File;
/**
  * Creates a Gio.File with the given argument from the command line.
  * @param arg a command line string
  * @param cwd the current working directory of the commandline
  * @returns a new Gio.File 
  */
export declare function fileNewForCommandlineArgAndCwd(arg: string, cwd: string): import('../Gio').File;
/**
  * Constructs a Gio.File for a given path. This operation never fails, but the returned object might not support any I/O operation if path is malformed.
  * @param path a string containing a relative or absolute path. The string must be encoded in the glib filename encoding.
  * @returns a new Gio.File for the given path. Free the returned object with GObject.Object.unref(). 
  */
export declare function fileNewForPath(path: string): import('../Gio').File;
/**
  * Constructs a Gio.File for a given URI. This operation never fails, but the returned object might not support any I/O operation if uri is malformed or if the uri type is not supported.
  * @param uri a UTF-8 string containing a URI
  * @returns a new Gio.File for the given uri. Free the returned object with GObject.Object.unref(). 
  */
export declare function fileNewForUri(uri: string): import('../Gio').File;
/**
  * Opens a file in the preferred directory for temporary files (as returned by GLib.get_tmp_dir()) and returns a Gio.File and Gio.FileIOStream pointing to it.
  * @param tmpl Template for the file name, as in GLib.file_open_tmp(), or None for a default template
  * @returns a new Gio.File. Free the returned object with GObject.Object.unref().  iostream:on return, a Gio.FileIOStream for the created file 
  */
export declare function fileNewTmp(tmpl: string | null): [import('../Gio').File, import('../Gio').FileIOStream];
/**
  * Constructs a Gio.File with the given parse_name (i.e. something given by Gio.File.get_parse_name()). This operation never fails, but the returned object might not support any I/O operation if the parse_name cannot be parsed.
  * @param parseName a file name or path to be parsed
  * @returns a new Gio.File. 
  */
export declare function fileParseName(parseName: string): import('../Gio').File;
/**
  * Deserializes a Gio.Icon previously serialized using Gio.Icon.serialize().
  * @param value a GLib.Variant created with Gio.Icon.serialize()
  * @returns a Gio.Icon, or None when deserialization fails. 
  */
export declare function iconDeserialize(value: import('../GLib').Variant): import('../Gio').Icon;
/**
  * Gets a hash for an icon.
  * @param icon #gconstpointer to an icon object.
  * @returns a int containing a hash for the icon, suitable for use in a GLib.HashTable or similar data structure. 
  */
export declare function iconHash(icon: Object): number;
/**
  * Generate a Gio.Icon instance from str. This function can fail if str is not valid - see Gio.Icon.to_string() for discussion.
  * @param str A string obtained via Gio.Icon.to_string().
  * @returns An object implementing the Gio.Icon interface or None if error is set. 
  */
export declare function iconNewForString(str: string): import('../Gio').Icon;
/**
  * Helper function for constructing Gio.Initable object. This is similar to GObject.Object.newv() but also initializes the object and returns None, setting an error on failure.
  * @param objectType a GObject.GType supporting Gio.Initable.
  * @param parameters the parameters to use to construct the object
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @returns a newly allocated GObject.Object, or None on error 
  */
export declare function initableNewv(objectType: import('../GObject').GType, parameters: import('../GObject').Parameter, cancellable: import('../Gio').Cancellable | null): import('../GObject').Object;
/**
  * Converts errno.h error codes into GIO error codes. The fallback value Gio.IOErrorEnum.FAILED is returned for error codes not currently handled (but note that future GLib releases may return a more specific value instead).
  * @param errNo Error number as defined in errno.h.
  * @returns Gio.IOErrorEnum value for the given errno.h error number. 
  */
export declare function ioErrorFromErrno(errNo: number): import('../Gio').IOErrorEnum;
/**
  * Gets the GIO Error Quark.
  * @returns a #GQuark. 
  */
export declare function ioErrorQuark(): number;
/**
  * Registers type as extension for the extension point with name extension_point_name.
  * @param extensionPointName the name of the extension point
  * @param type the GObject.GType to register as extension
  * @param extensionName the name for the extension
  * @param priority the priority for the extension
  * @returns a Gio.IOExtension object for GObject.GType 
  */
export declare function ioExtensionPointImplement(extensionPointName: string, type: import('../GObject').GType, extensionName: string, priority: number): import('../Gio').IOExtension;
/**
  * Looks up an existing extension point.
  * @param name the name of the extension point
  * @returns the Gio.IOExtensionPoint, or None if there is no registered extension point with the given name. 
  */
export declare function ioExtensionPointLookup(name: string): import('../Gio').IOExtensionPoint;
/**
  * Registers an extension point.
  * @param name The name of the extension point
  * @returns the new Gio.IOExtensionPoint. This object is owned by GIO and should not be freed. 
  */
export declare function ioExtensionPointRegister(name: string): import('../Gio').IOExtensionPoint;
/**
  * Loads all the modules in the specified directory.
  * @param dirname pathname for a directory containing modules to load.
  * @returns a list of Gio.IOModules loaded from the directory, All the modules are loaded into memory, if you want to unload them (enabling on-demand loading) you must call GObject.TypeModule.unuse() on all the modules. Free the list with g_list_free(). 
  */
export declare function ioModulesLoadAllInDirectory(dirname: string): import('../Gio').IOModule[];
/**
  * Loads all the modules in the specified directory.
  * @param dirname pathname for a directory containing modules to load.
  * @param scope a scope to use when scanning the modules.
  * @returns a list of Gio.IOModules loaded from the directory, All the modules are loaded into memory, if you want to unload them (enabling on-demand loading) you must call GObject.TypeModule.unuse() on all the modules. Free the list with g_list_free(). 
  */
export declare function ioModulesLoadAllInDirectoryWithScope(dirname: string, scope: import('../Gio').IOModuleScope): import('../Gio').IOModule[];
/**
  * Scans all the modules in the specified directory, ensuring that any extension point implemented by a module is registered.
  * @param dirname pathname for a directory containing modules to scan. 
  */
export declare function ioModulesScanAllInDirectory(dirname: string): void;
/**
  * Scans all the modules in the specified directory, ensuring that any extension point implemented by a module is registered.
  * @param dirname pathname for a directory containing modules to scan.
  * @param scope a scope to use when scanning the modules 
  */
export declare function ioModulesScanAllInDirectoryWithScope(dirname: string, scope: import('../Gio').IOModuleScope): void;
/**
  * Cancels all cancellable I/O jobs. 
  */
export declare function ioSchedulerCancelAllJobs(): void;
/**
  * Schedules the I/O job to run in another thread.
  * @param jobFunc a Gio.IOSchedulerJobFunc.
  * @param userData data to pass to job_func
  * @param ioPriority the I/O priority of the request.
  * @param cancellable optional Gio.Cancellable object, None to ignore. 
  */
export declare function ioSchedulerPushJob(jobFunc: import('../Gio').ioSchedulerJobFunc, userData: Object | null, ioPriority: number, cancellable: import('../Gio').Cancellable | null): void;
/**
  * Creates a keyfile-backed Gio.SettingsBackend.
  * @param filename the filename of the keyfile
  * @param rootPath the path under which all settings keys appear
  * @param rootGroup the group name corresponding to root_path, or None
  * @returns a keyfile-backed Gio.SettingsBackend 
  */
export declare function keyfileSettingsBackendNew(filename: string, rootPath: string, rootGroup: string | null): import('../Gio').SettingsBackend;
/**
  * Creates a memory-backed Gio.SettingsBackend.
  * @returns a newly created Gio.SettingsBackend 
  */
export declare function memorySettingsBackendNew(): import('../Gio').SettingsBackend;
/**
  * Gets the default Gio.NetworkMonitor for the system.
  * @returns a Gio.NetworkMonitor 
  */
export declare function networkMonitorGetDefault(): import('../Gio').NetworkMonitor;
/**
  * Initializes the platform networking libraries (eg, on Windows, this calls WSAStartup()). GLib will call this itself if it is needed, so you only need to call it if you directly call system networking functions (without calling any GLib networking functions first). 
  */
export declare function networkingInit(): void;
/**
  * Creates a readonly Gio.SettingsBackend.
  * @returns a newly created Gio.SettingsBackend 
  */
export declare function nullSettingsBackendNew(): import('../Gio').SettingsBackend;
/**
  * Utility method for Gio.PollableInputStream and Gio.PollableOutputStream implementations. Creates a new GLib.Source that expects a callback of type Gio.PollableSourceFunc. The new source does not actually do anything on its own; use GLib.Source.add_child_source() to add other sources to it to cause it to trigger.
  * @param pollableStream the stream associated with the new source
  * @returns the new GLib.Source. 
  */
export declare function pollableSourceNew(pollableStream: import('../GObject').Object): import('../GLib').Source;
/**
  * Utility method for Gio.PollableInputStream and Gio.PollableOutputStream implementations. Creates a new GLib.Source, as with Gio.pollable_source_new(), but also attaching child_source (with a dummy callback), and cancellable, if they are non-None.
  * @param pollableStream the stream associated with the new source
  * @param childSource optional child source to attach
  * @param cancellable optional Gio.Cancellable to attach
  * @returns the new GLib.Source. 
  */
export declare function pollableSourceNewFull(pollableStream: import('../GObject').Object, childSource: import('../GLib').Source | null, cancellable: import('../Gio').Cancellable | null): import('../GLib').Source;
/**
  * Tries to read from stream, as with Gio.InputStream.read() (if blocking is True) or Gio.PollableInputStream.read_nonblocking() (if blocking is False). This can be used to more easily share code between blocking and non-blocking implementations of a method.
  * @param stream a Gio.InputStream
  * @param buffer a buffer to read data into
  * @param blocking whether to do blocking I/O
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @returns the number of bytes read, or -1 on error. 
  */
export declare function pollableStreamRead(stream: import('../Gio').InputStream, buffer: Int8Array, blocking: boolean, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Tries to write to stream, as with Gio.OutputStream.write() (if blocking is True) or Gio.PollableOutputStream.write_nonblocking() (if blocking is False). This can be used to more easily share code between blocking and non-blocking implementations of a method.
  * @param stream a Gio.OutputStream.
  * @param buffer the buffer containing the data to write.
  * @param blocking whether to do blocking I/O
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @returns the number of bytes written, or -1 on error. 
  */
export declare function pollableStreamWrite(stream: import('../Gio').OutputStream, buffer: Int8Array, blocking: boolean, cancellable: import('../Gio').Cancellable | null): number;
/**
  * Tries to write count bytes to stream, as with Gio.OutputStream.write_all(), but using Gio.pollable_stream_write() rather than Gio.OutputStream.write().
  * @param stream a Gio.OutputStream.
  * @param buffer the buffer containing the data to write.
  * @param blocking whether to do blocking I/O
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @returns True on success, False if there was an error   bytes_written:location to store the number of bytes that was written to the stream 
  */
export declare function pollableStreamWriteAll(stream: import('../Gio').OutputStream, buffer: Int8Array, blocking: boolean, cancellable: import('../Gio').Cancellable | null): [boolean, number];
/**
  * Lookup “gio-proxy” extension point for a proxy implementation that supports specified protocol.
  * @param protocol the proxy protocol name (e.g. http, socks, etc)
  * @returns return a Gio.Proxy or None if protocol is not supported. 
  */
export declare function proxyGetDefaultForProtocol(protocol: string): import('../Gio').Proxy;
/**
  * Gets the default Gio.ProxyResolver for the system.
  * @returns the default Gio.ProxyResolver. 
  */
export declare function proxyResolverGetDefault(): import('../Gio').ProxyResolver;
/**
  * Gets the Gio.Resolver Error Quark.
  * @returns a #GQuark. 
  */
export declare function resolverErrorQuark(): number;
/**
  * Gets the Gio.Resource Error Quark.
  * @returns a #GQuark 
  */
export declare function resourceErrorQuark(): number;
/**
  * Loads a binary resource bundle and creates a Gio.Resource representation of it, allowing you to query it for data.
  * @param filename the path of a filename to load, in the GLib filename encoding
  * @returns a new Gio.Resource, or None on error 
  */
export declare function resourceLoad(filename: string): import('../Gio').Resource;
/**
  * Returns all the names of children at the specified path in the set of globally registered resources. The return result is a None terminated list of strings which should be released with GLib.strfreev().
  * @param path A pathname inside the resource
  * @param lookupFlags A Gio.ResourceLookupFlags
  * @returns an array of constant strings 
  */
export declare function resourcesEnumerateChildren(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): string[];
/**
  * Looks for a file at the specified path in the set of globally registered resources and if found returns information about it.
  * @param path A pathname inside the resource
  * @param lookupFlags A Gio.ResourceLookupFlags
  * @returns True if the file was found. False if there were errors   size:a location to place the length of the contents of the file, or None if the length is not needed flags:a location to place the Gio.ResourceFlags about the file, or None if the flags are not needed 
  */
export declare function resourcesGetInfo(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): [boolean, number, number];
/**
  * Looks for a file at the specified path in the set of globally registered resources and returns a GLib.Bytes that lets you directly access the data in memory.
  * @param path A pathname inside the resource
  * @param lookupFlags A Gio.ResourceLookupFlags
  * @returns GLib.Bytes or None on error. Free the returned object with GLib.Bytes.unref() 
  */
export declare function resourcesLookupData(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): import('../GLib').Bytes;
/**
  * Looks for a file at the specified path in the set of globally registered resources and returns a Gio.InputStream that lets you read the data.
  * @param path A pathname inside the resource
  * @param lookupFlags A Gio.ResourceLookupFlags
  * @returns Gio.InputStream or None on error. Free the returned object with GObject.Object.unref() 
  */
export declare function resourcesOpenStream(path: string, lookupFlags: import('../Gio').ResourceLookupFlags): import('../Gio').InputStream;
/**
  * Registers the resource with the process-global set of resources. Once a resource is registered the files in it can be accessed with the global resource lookup functions like Gio.resources_lookup_data().
  * @param resource A Gio.Resource 
  */
export declare function resourcesRegister(resource: import('../Gio').Resource): void;
/**
  * Unregisters the resource from the process-global set of resources.
  * @param resource A Gio.Resource 
  */
export declare function resourcesUnregister(resource: import('../Gio').Resource): void;
/**
  * Gets the default system schema source.
  * @returns the default schema source 
  */
export declare function settingsSchemaSourceGetDefault(): import('../Gio').SettingsSchemaSource | null;
/**
  * Reports an error in an idle function. Similar to g_simple_async_report_error_in_idle(), but takes a GLib.Error rather than building a new one.
  * @param object a GObject.Object, or None
  * @param callback a Gio.asyncReadyCallback.
  * @param userData user data passed to callback.
  * @param error the GLib.Error to report 
  */
export declare function simpleAsyncReportGerrorInIdle(object: import('../GObject').Object | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null, error: import('../GLib').Error): void;
/**
  * Gets the default Gio.TlsBackend for the system.
  * @returns a Gio.TlsBackend 
  */
export declare function tlsBackendGetDefault(): import('../Gio').TlsBackend;
/**
  * Creates a new Gio.TlsClientConnection wrapping base_io_stream (which must have pollable input and output streams) which is assumed to communicate with the server identified by server_identity.
  * @param baseIoStream the Gio.IOStream to wrap
  * @param serverIdentity the expected identity of the server
  * @returns the new Gio.TlsClientConnection, or None on error 
  */
export declare function tlsClientConnectionNew(baseIoStream: import('../Gio').IOStream, serverIdentity: import('../Gio').SocketConnectable | null): import('../Gio').TlsClientConnection;
/**
  * Gets the TLS error quark.
  * @returns a #GQuark. 
  */
export declare function tlsErrorQuark(): number;
/**
  * Creates a new Gio.TlsFileDatabase which uses anchor certificate authorities in anchors to verify certificate chains.
  * @param anchors filename of anchor certificate authorities.
  * @returns the new Gio.TlsFileDatabase, or None on error 
  */
export declare function tlsFileDatabaseNew(anchors: string): import('../Gio').TlsFileDatabase;
/**
  * Creates a new Gio.TlsServerConnection wrapping base_io_stream (which must have pollable input and output streams).
  * @param baseIoStream the Gio.IOStream to wrap
  * @param certificate the default server certificate, or None
  * @returns the new Gio.TlsServerConnection, or None on error 
  */
export declare function tlsServerConnectionNew(baseIoStream: import('../Gio').IOStream, certificate: import('../Gio').TlsCertificate | null): import('../Gio').TlsServerConnection;
/**
  * Determines if mount_path is considered an implementation of the OS. This is primarily used for hiding mountable and mounted volumes that only are used in the OS and has little to no relevance to the casual user.
  * @param mountPath a mount path, e.g. /media/disk or /usr
  * @returns True if mount_path is considered an implementation detail of the OS. 
  */
export declare function unixIsMountPathSystemInternal(mountPath: string): boolean;
/**
  * Determines if device_path is considered a block device path which is only used in implementation of the OS. This is primarily used for hiding mounted volumes that are intended as APIs for programs to read, and system administrators at a shell; rather than something that should, for example, appear in a GUI. For example, the Linux /proc filesystem.
  * @param devicePath a device path, e.g. /dev/loop0 or nfsd
  * @returns True if device_path is considered an implementation detail of the OS. 
  */
export declare function unixIsSystemDevicePath(devicePath: string): boolean;
/**
  * Determines if fs_type is considered a type of file system which is only used in implementation of the OS. This is primarily used for hiding mounted volumes that are intended as APIs for programs to read, and system administrators at a shell; rather than something that should, for example, appear in a GUI. For example, the Linux /proc filesystem.
  * @param fsType a file system type, e.g. procfs or tmpfs
  * @returns True if fs_type is considered an implementation detail of the OS. 
  */
export declare function unixIsSystemFsType(fsType: string): boolean;
/**
  * Gets a Gio.UnixMountEntry for a given mount path. If time_read is set, it will be filled with a unix timestamp for checking if the mounts have changed since with Gio.unix_mounts_changed_since().
  * @param mountPath path for a possible unix mount.
  * @returns a Gio.UnixMountEntry.  time_read:guint64 to contain a timestamp. 
  */
export declare function unixMountAt(mountPath: string): [import('../Gio').UnixMountEntry, number];
/**
  * Compares two unix mounts.
  * @param mount1 first Gio.UnixMountEntry to compare.
  * @param mount2 second Gio.UnixMountEntry to compare.
  * @returns 1, 0 or -1 if mount1 is greater than, equal to, or less than mount2, respectively. 
  */
export declare function unixMountCompare(mount1: import('../Gio').UnixMountEntry, mount2: import('../Gio').UnixMountEntry): number;
/**
  * Makes a copy of mount_entry.
  * @param mountEntry a Gio.UnixMountEntry.
  * @returns a new Gio.UnixMountEntry 
  */
export declare function unixMountCopy(mountEntry: import('../Gio').UnixMountEntry): import('../Gio').UnixMountEntry;
/**
  * Gets a Gio.UnixMountEntry for a given file path. If time_read is set, it will be filled with a unix timestamp for checking if the mounts have changed since with Gio.unix_mounts_changed_since().
  * @param filePath file path on some unix mount.
  * @returns a Gio.UnixMountEntry.  time_read:guint64 to contain a timestamp. 
  */
export declare function unixMountFor(filePath: string): [import('../Gio').UnixMountEntry, number];
/**
  * Frees a unix mount.
  * @param mountEntry a Gio.UnixMountEntry. 
  */
export declare function unixMountFree(mountEntry: import('../Gio').UnixMountEntry): void;
/**
  * Gets the device path for a unix mount.
  * @param mountEntry a #GUnixMount.
  * @returns a string containing the device path. 
  */
export declare function unixMountGetDevicePath(mountEntry: import('../Gio').UnixMountEntry): string;
/**
  * Gets the filesystem type for the unix mount.
  * @param mountEntry a #GUnixMount.
  * @returns a string containing the file system type. 
  */
export declare function unixMountGetFsType(mountEntry: import('../Gio').UnixMountEntry): string;
/**
  * Gets the mount path for a unix mount.
  * @param mountEntry input Gio.UnixMountEntry to get the mount path for.
  * @returns the mount path for mount_entry. 
  */
export declare function unixMountGetMountPath(mountEntry: import('../Gio').UnixMountEntry): string;
/**
  * Gets a comma-separated list of mount options for the unix mount. For example, rw,relatime,seclabel,data=ordered.
  * @param mountEntry a Gio.UnixMountEntry.
  * @returns a string containing the options, or None if not available. 
  */
export declare function unixMountGetOptions(mountEntry: import('../Gio').UnixMountEntry): string | null;
/**
  * Guesses whether a Unix mount can be ejected.
  * @param mountEntry a Gio.UnixMountEntry
  * @returns True if mount_entry is deemed to be ejectable. 
  */
export declare function unixMountGuessCanEject(mountEntry: import('../Gio').UnixMountEntry): boolean;
/**
  * Guesses the icon of a Unix mount.
  * @param mountEntry a Gio.UnixMountEntry
  * @returns a Gio.Icon 
  */
export declare function unixMountGuessIcon(mountEntry: import('../Gio').UnixMountEntry): import('../Gio').Icon;
/**
  * Guesses the name of a Unix mount. The result is a translated string.
  * @param mountEntry a Gio.UnixMountEntry
  * @returns A newly allocated string that must be freed with GLib.free() 
  */
export declare function unixMountGuessName(mountEntry: import('../Gio').UnixMountEntry): string;
/**
  * Guesses whether a Unix mount should be displayed in the UI.
  * @param mountEntry a Gio.UnixMountEntry
  * @returns True if mount_entry is deemed to be displayable. 
  */
export declare function unixMountGuessShouldDisplay(mountEntry: import('../Gio').UnixMountEntry): boolean;
/**
  * Guesses the symbolic icon of a Unix mount.
  * @param mountEntry a Gio.UnixMountEntry
  * @returns a Gio.Icon 
  */
export declare function unixMountGuessSymbolicIcon(mountEntry: import('../Gio').UnixMountEntry): import('../Gio').Icon;
/**
  * Checks if a unix mount is mounted read only.
  * @param mountEntry a #GUnixMount.
  * @returns True if mount_entry is read only. 
  */
export declare function unixMountIsReadonly(mountEntry: import('../Gio').UnixMountEntry): boolean;
/**
  * Checks if a Unix mount is a system mount. This is the Boolean OR of Gio.unix_is_system_fs_type(), Gio.unix_is_system_device_path() and Gio.unix_is_mount_path_system_internal() on mount_entry’s properties.
  * @param mountEntry a #GUnixMount.
  * @returns True if the unix mount is for a system path. 
  */
export declare function unixMountIsSystemInternal(mountEntry: import('../Gio').UnixMountEntry): boolean;
/**
  * Checks if the unix mount points have changed since a given unix time.
  * @param time guint64 to contain a timestamp.
  * @returns True if the mount points have changed since time. 
  */
export declare function unixMountPointsChangedSince(time: number): boolean;
/**
  * Gets a GLib.List of Gio.UnixMountPoint containing the unix mount points. If time_read is set, it will be filled with the mount timestamp, allowing for checking if the mounts have changed with Gio.unix_mount_points_changed_since().
  * @returns a GLib.List of the UNIX mountpoints.  time_read:guint64 to contain a timestamp. 
  */
export declare function unixMountPointsGet(): [import('../Gio').UnixMountPoint[], number];
/**
  * Checks if the unix mounts have changed since a given unix time.
  * @param time guint64 to contain a timestamp.
  * @returns True if the mounts have changed since time. 
  */
export declare function unixMountsChangedSince(time: number): boolean;
/**
  * Gets a GLib.List of Gio.UnixMountEntry containing the unix mounts. If time_read is set, it will be filled with the mount timestamp, allowing for checking if the mounts have changed with Gio.unix_mounts_changed_since().
  * @returns a GLib.List of the UNIX mounts.  time_read:guint64 to contain a timestamp, or None 
  */
export declare function unixMountsGet(): [import('../Gio').UnixMountEntry[], number];
