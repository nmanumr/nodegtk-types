import * as GObject from '../GObject';
export declare interface AppInfo extends GObject.GInterface { }

/**
  * Gio.AppInfo and Gio.AppLaunchContext are used for describing and launching
applications installed on the system. 
  */
export declare class AppInfo {
/**
  * Creates a new Gio.AppInfo from the given information.
  * @param commandline the commandline to use
  * @param applicationName the application name, or None to use commandline
  * @param flags flags that can specify details of the created Gio.AppInfo
  * @returns new Gio.AppInfo for given command. 
  */
static createFromCommandline(commandline: string, applicationName: string | null, flags: import('../Gio').AppInfoCreateFlags): import('../Gio').AppInfo;
/**
  * Gets a list of all of the applications currently registered on this system.
  * @returns a newly allocated GLib.List of references to Gio.AppInfos. 
  */
static getAll(): import('../Gio').AppInfo[];
/**
  * Gets a list of all Gio.AppInfos for a given content type, including the recommended and fallback Gio.AppInfos. See Gio.AppInfo.get_recommended_for_type() and Gio.AppInfo.get_fallback_for_type().
  * @param contentType the content type to find a Gio.AppInfo for
  * @returns GLib.List of Gio.AppInfos for given content_type or None on error. 
  */
static getAllForType(contentType: string): import('../Gio').AppInfo[];
/**
  * Gets the default Gio.AppInfo for a given content type.
  * @param contentType the content type to find a Gio.AppInfo for
  * @param mustSupportUris if True, the Gio.AppInfo is expected to support URIs
  * @returns Gio.AppInfo for given content_type or None on error. 
  */
static getDefaultForType(contentType: string, mustSupportUris: boolean): import('../Gio').AppInfo;
/**
  * Gets the default application for handling URIs with the given URI scheme. A URI scheme is the initial part of the URI, up to but not including the ‘:’, e.g. “http”, “ftp” or “sip”.
  * @param uriScheme a string containing a URI scheme.
  * @returns Gio.AppInfo for given uri_scheme or None on error. 
  */
static getDefaultForUriScheme(uriScheme: string): import('../Gio').AppInfo;
/**
  * Gets a list of fallback Gio.AppInfos for a given content type, i.e. those applications which claim to support the given content type by MIME type subclassing and not directly.
  * @param contentType the content type to find a Gio.AppInfo for
  * @returns GLib.List of Gio.AppInfos for given content_type or None on error. 
  */
static getFallbackForType(contentType: string): import('../Gio').AppInfo[];
/**
  * Gets a list of recommended Gio.AppInfos for a given content type, i.e. those applications which claim to support the given content type exactly, and not by MIME type subclassing. Note that the first application of the list is the last used one, i.e. the last one for which Gio.AppInfo.set_as_last_used_for_type() has been called.
  * @param contentType the content type to find a Gio.AppInfo for
  * @returns GLib.List of Gio.AppInfos for given content_type or None on error. 
  */
static getRecommendedForType(contentType: string): import('../Gio').AppInfo[];
/**
  * Utility function that launches the default application registered to handle the specified uri. Synchronous I/O is done on the uri to detect the type of the file if required.
  * @param uri the uri to show
  * @param context an optional Gio.AppLaunchContext
  * @returns True on success, False on error. 
  */
static launchDefaultForUri(uri: string, context: import('../Gio').AppLaunchContext | null): boolean;
/**
  * Async version of Gio.AppInfo.launch_default_for_uri().
  * @param uri the uri to show
  * @param context an optional Gio.AppLaunchContext
  * @param cancellable a Gio.Cancellable
  * @param callback a #GasyncReadyCallback to call when the request is done
  * @param userData data to pass to callback 
  */
static launchDefaultForUriAsync(uri: string, context: import('../Gio').AppLaunchContext | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
/**
  * Finishes an asynchronous launch-default-for-uri operation.
  * @param result a Gio.AsyncResult
  * @returns True if the launch was successful, False if error is set 
  */
static launchDefaultForUriFinish(result: import('../Gio').AsyncResult): boolean;
/**
  * Removes all changes to the type associations done by Gio.AppInfo.set_as_default_for_type(), Gio.AppInfo.set_as_default_for_extension(), Gio.AppInfo.add_supports_type() or Gio.AppInfo.remove_supports_type().
  * @param contentType a content type 
  */
static resetTypeAssociations(contentType: string): void;
/**
  * Adds a content type to the application information to indicate the application is capable of opening files with the given content type.
  * @param contentType a string.
  * @returns True on success, False on error. 
  */
addSupportsType(contentType: string): boolean;
/**
  * Obtains the information whether the Gio.AppInfo can be deleted. See Gio.AppInfo.delete().
  * @returns True if self can be deleted 
  */
canDelete(): boolean;
/**
  * Checks if a supported content type can be removed from an application.
  * @returns True if it is possible to remove supported content types from a given self, False if not. 
  */
canRemoveSupportsType(): boolean;
/**
  * Tries to delete a Gio.AppInfo.
  * @returns True if self has been deleted 
  */
delete(): boolean;
/**
  * Creates a duplicate of a Gio.AppInfo.
  * @returns a duplicate of self. 
  */
dup(): import('../Gio').AppInfo;
/**
  * Checks if two Gio.AppInfos are equal.
  * @param appinfo2 the second Gio.AppInfo.
  * @returns True if self is equal to appinfo2. False otherwise. 
  */
equal(appinfo2: import('../Gio').AppInfo): boolean;
/**
  * Gets the commandline with which the application will be started.
  * @returns a string containing the self’s commandline, or None if this information is not available 
  */
getCommandline(): string;
/**
  * Gets a human-readable description of an installed application.
  * @returns a string containing a description of the application self, or None if none. 
  */
getDescription(): string;
/**
  * Gets the display name of the application. The display name is often more descriptive to the user than the name itself.
  * @returns the display name of the application for self, or the name if no display name is available. 
  */
getDisplayName(): string;
/**
  * Gets the executable’s name for the installed application.
  * @returns a string containing the self’s application binaries name 
  */
getExecutable(): string;
/**
  * Gets the icon for the application.
  * @returns the default Gio.Icon for self or None if there is no default icon. 
  */
getIcon(): import('../Gio').Icon;
/**
  * Gets the ID of an application. An id is a string that identifies the application. The exact format of the id is platform dependent. For instance, on Unix this is the desktop file id from the xdg menu specification.
  * @returns a string containing the application’s ID. 
  */
getId(): string;
/**
  * Gets the installed name of the application.
  * @returns the name of the application for self. 
  */
getName(): string;
/**
  * Retrieves the list of content types that app_info claims to support. If this information is not provided by the environment, this function will return None. This function does not take in consideration associations added with Gio.AppInfo.add_supports_type(), but only those exported directly by the application.
  * @returns a list of content types. 
  */
getSupportedTypes(): string[];
/**
  * Launches the application. Passes files to the launched application as arguments, using the optional context to get information about the details of the launcher (like what screen it is on). On error, error will be set accordingly.
  * @param files a GLib.List of Gio.File objects
  * @param context a Gio.AppLaunchContext or None
  * @returns True on successful launch, False otherwise. 
  */
launch(files: import('../Gio').File | null, context: import('../Gio').AppLaunchContext | null): boolean;
/**
  * Launches the application. This passes the uris to the launched application as arguments, using the optional context to get information about the details of the launcher (like what screen it is on). On error, error will be set accordingly.
  * @param uris a GLib.List containing URIs to launch.
  * @param context a Gio.AppLaunchContext or None
  * @returns True on successful launch, False otherwise. 
  */
launchUris(uris: string | null, context: import('../Gio').AppLaunchContext | null): boolean;
/**
  * Removes a supported type from an application, if possible.
  * @param contentType a string.
  * @returns True on success, False on error. 
  */
removeSupportsType(contentType: string): boolean;
/**
  * Sets the application as the default handler for the given file extension.
  * @param extension a string containing the file extension (without the dot).
  * @returns True on success, False on error. 
  */
setAsDefaultForExtension(extension: string): boolean;
/**
  * Sets the application as the default handler for a given type.
  * @param contentType the content type.
  * @returns True on success, False on error. 
  */
setAsDefaultForType(contentType: string): boolean;
/**
  * Sets the application as the last used application for a given type. This will make the application appear as first in the list returned by Gio.AppInfo.get_recommended_for_type(), regardless of the default application for that content type.
  * @param contentType the content type.
  * @returns True on success, False on error. 
  */
setAsLastUsedForType(contentType: string): boolean;
/**
  * Checks if the application info should be shown in menus that list available applications.
  * @returns True if the self should be shown, False otherwise. 
  */
shouldShow(): boolean;
/**
  * Checks if the application accepts files as arguments.
  * @returns True if the self supports files. 
  */
supportsFiles(): boolean;
/**
  * Checks if the application supports reading files and directories from URIs.
  * @returns True if the self supports URIs. 
  */
supportsUris(): boolean;
}

