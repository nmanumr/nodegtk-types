/**
  * A Gio.Application is the foundation of an application.  It wraps some
low-level platform-specific services and is intended to act as the
foundation for higher-level application classes such as
#GtkApplication or #MxApplication.  In general, you should not use
this class outside of a higher level framework. 
  */
export declare class Application extends import('../GObject').Object, import('../Gio').ActionGroup, import('../Gio').ActionMap{
/**
  * Returns the default Gio.Application instance for this process.
  * @returns the default application for this process, or None 
  */
static getDefault(): import('../Gio').Application;
/**
  * Checks if application_id is a valid application identifier.
  * @param applicationId a potential application identifier
  * @returns True if application_id is valid 
  */
static idIsValid(applicationId: string): boolean;
/**
  * Creates a new Gio.Application instance.
  * @param applicationId the application id
  * @param flags the application flags
  * @returns a new Gio.Application instance 
  */
static new(applicationId: string | null, flags: import('../Gio').ApplicationFlags): import('../Gio').Application;
/**
  * Activates the application. 
  */
activate(): void;
/**
  * Add an option to be handled by self.
  * @param longName the long name of an option used to specify it in a commandline
  * @param shortName the short name of an option
  * @param flags flags from GLib.OptionFlags
  * @param arg the type of the option, as a GLib.OptionArg
  * @param description the description for the option in --help output
  * @param argDescription the placeholder to use for the extra argument parsed by the option in --help output 
  */
addMainOption(longName: string, shortName: number, flags: import('../GLib').OptionFlags, arg: import('../GLib').OptionArg, description: string, argDescription: string | null): void;
/**
  * Adds main option entries to be handled by self.
  * @param entries a None-terminated list of GLib.OptionEntrys 
  */
addMainOptionEntries(entries: import('../GLib').OptionEntry): void;
/**
  * Adds a GLib.OptionGroup to the commandline handling of self.
  * @param group a GLib.OptionGroup 
  */
addOptionGroup(group: import('../GLib').OptionGroup): void;
/**
  * Marks self as busy (see Gio.Application.mark_busy()) while property on object is True.
  * @param object a GObject.Object
  * @param property the name of a boolean property of object 
  */
bindBusyProperty(object: import('../GObject').Object, property: string): void;
/**
  * Gets the unique identifier for self.
  * @returns the identifier for self, owned by self 
  */
getApplicationId(): string;
/**
  * Gets the Gio.DBusConnection being used by the application, or None.
  * @returns a Gio.DBusConnection, or None 
  */
getDbusConnection(): import('../Gio').DBusConnection;
/**
  * Gets the D-Bus object path being used by the application, or None.
  * @returns the object path, or None 
  */
getDbusObjectPath(): string;
/**
  * Gets the flags for self.
  * @returns the flags for self 
  */
getFlags(): import('../Gio').ApplicationFlags;
/**
  * Gets the current inactivity timeout for the application.
  * @returns the timeout, in milliseconds 
  */
getInactivityTimeout(): number;
/**
  * Gets the application’s current busy state, as set through Gio.Application.mark_busy() or Gio.Application.bind_busy_property().
  * @returns True if self is currenty marked as busy 
  */
getIsBusy(): boolean;
/**
  * Checks if self is registered.
  * @returns True if self is registered 
  */
getIsRegistered(): boolean;
/**
  * Checks if self is remote.
  * @returns True if self is remote 
  */
getIsRemote(): boolean;
/**
  * Gets the resource base path of self.
  * @returns the base resource path, if one is set 
  */
getResourceBasePath(): string | null;
/**
  * Increases the use count of self. 
  */
hold(): void;
/**
  * Increases the busy count of self. 
  */
markBusy(): void;
/**
  * Opens the given files.
  * @param files an array of Gio.Files to open
  * @param hint a hint (or “”), but never None 
  */
open(files: import('../Gio').File, hint: string): void;
/**
  * Immediately quits the application. 
  */
quit(): void;
/**
  * Attempts registration of the application.
  * @param cancellable a Gio.Cancellable, or None
  * @returns True if registration succeeded 
  */
register(cancellable: import('../Gio').Cancellable | null): boolean;
/**
  * Decrease the use count of self. 
  */
release(): void;
/**
  * Runs the application.
  * @param argv the argv from main(), or None
  * @returns the exit status 
  */
run(argv: string | null): number;
/**
  * Sends a notification on behalf of self to the desktop shell. There is no guarantee that the notification is displayed immediately, or even at all.
  * @param id id of the notification, or None
  * @param notification the Gio.Notification to send 
  */
sendNotification(id: string | null, notification: import('../Gio').Notification): void;
/**
  * This used to be how actions were associated with a Gio.Application. Now there is Gio.ActionMap for that.
  * @param actionGroup a Gio.ActionGroup, or None 
  */
setActionGroup(actionGroup: import('../Gio').ActionGroup | null): void;
/**
  * Sets the unique identifier for self.
  * @param applicationId the identifier for self 
  */
setApplicationId(applicationId: string | null): void;
/**
  * Sets or unsets the default application for the process, as returned by Gio.Application.get_default(). 
  */
setDefault(): void;
/**
  * Sets the flags for self.
  * @param flags the flags for self 
  */
setFlags(flags: import('../Gio').ApplicationFlags): void;
/**
  * Sets the current inactivity timeout for the application.
  * @param inactivityTimeout the timeout, in milliseconds 
  */
setInactivityTimeout(inactivityTimeout: number): void;
/**
  * Adds a description to the self option context.
  * @param description a string to be shown in --help output after the list of options, or None 
  */
setOptionContextDescription(description: string | null): void;
/**
  * Sets the parameter string to be used by the commandline handling of self.
  * @param parameterString a string which is displayed in the first line of --help output, after the usage summary programname [OPTION...]. 
  */
setOptionContextParameterString(parameterString: string | null): void;
/**
  * Adds a summary to the self option context.
  * @param summary a string to be shown in --help output before the list of options, or None 
  */
setOptionContextSummary(summary: string | null): void;
/**
  * Sets (or unsets) the base resource path of self.
  * @param resourcePath the resource path to use 
  */
setResourceBasePath(resourcePath: string | null): void;
/**
  * Destroys a binding between property and the busy state of self that was previously created with Gio.Application.bind_busy_property().
  * @param object a GObject.Object
  * @param property the name of a boolean property of object 
  */
unbindBusyProperty(object: import('../GObject').Object, property: string): void;
/**
  * Decreases the busy count of self. 
  */
unmarkBusy(): void;
/**
  * Withdraws a notification that was sent with Gio.Application.send_notification().
  * @param id id of a previously sent notification 
  */
withdrawNotification(id: string): void;
/**
  * The group of actions that the application exports deprecated 
  */
actionGroup: import('../Gio').ActionGroup;
/**
  * The unique identifier for the application 
  */
applicationId: string;
/**
  * Flags specifying the behaviour of the application 
  */
flags: import('../Gio').ApplicationFlags;
/**
  * Time (ms) to stay alive after becoming idle 
  */
inactivityTimeout: number;
/**
  * If this application is currently marked busy 
  */
isBusy: boolean;
/**
  * If Gio.Application.register() has been called 
  */
isRegistered: boolean;
/**
  * If this application instance is remote 
  */
isRemote: boolean;
/**
  * The base resource path for the application 
  */
resourceBasePath: string;
/**
  *   
  */
parentInstance: import('../GObject').Object;
}

