/**
  * Type definition for a function that will be called back when an asynchronous operation within GIO has been completed. Gio.asyncReadyCallback callbacks from Gio.Task are guaranteed to be invoked in a later iteration of the thread-default main context where the Gio.Task was created. All other users of Gio.asyncReadyCallback must likewise call it asynchronously in a later iteration of the main context.
  * @param sourceObject the object the asynchronous operation was started with.
  * @param res a Gio.AsyncResult.
  * @param userData user data passed to the callback. 
  */
export declare type asyncReadyCallback = (sourceObject: import('../GObject').Object | null, res: import('../Gio').AsyncResult, userData: Object | null) => void;
/**
  * Invoked when a connection to a message bus has been obtained.
  * @param connection The Gio.DBusConnection to a message bus.
  * @param name The name that is requested to be owned.
  * @param userData User data passed to Gio.bus_own_name(). 
  */
export declare type busAcquiredCallback = (connection: import('../Gio').DBusConnection, name: string, userData: Object | null) => void;
/**
  * Invoked when the name is acquired.
  * @param connection The Gio.DBusConnection on which to acquired the name.
  * @param name The name being owned.
  * @param userData User data passed to Gio.bus_own_name() or Gio.bus_own_name_on_connection(). 
  */
export declare type busNameAcquiredCallback = (connection: import('../Gio').DBusConnection, name: string, userData: Object | null) => void;
/**
  * Invoked when the name being watched is known to have to have a owner.
  * @param connection The Gio.DBusConnection the name is being watched on.
  * @param name The name being watched.
  * @param nameOwner Unique name of the owner of the name being watched.
  * @param userData User data passed to Gio.bus_watch_name(). 
  */
export declare type busNameAppearedCallback = (connection: import('../Gio').DBusConnection, name: string, nameOwner: string, userData: Object | null) => void;
/**
  * Invoked when the name is lost or connection has been closed.
  * @param connection The Gio.DBusConnection on which to acquire the name or None if the connection was disconnected.
  * @param name The name being owned.
  * @param userData User data passed to Gio.bus_own_name() or Gio.bus_own_name_on_connection(). 
  */
export declare type busNameLostCallback = (connection: import('../Gio').DBusConnection, name: string, userData: Object | null) => void;
/**
  * Invoked when the name being watched is known not to have to have a owner.
  * @param connection The Gio.DBusConnection the name is being watched on, or None.
  * @param name The name being watched.
  * @param userData User data passed to Gio.bus_watch_name(). 
  */
export declare type busNameVanishedCallback = (connection: import('../Gio').DBusConnection, name: string, userData: Object | null) => void;
/**
  * This is the function type of the callback used for the GLib.Source returned by g_cancellable_source_new().
  * @param cancellable the Gio.Cancellable
  * @param userData data passed in by the user.
  * @returns it should return False if the source should be removed. 
  */
export declare type cancellableSourceFunc = (cancellable: import('../Gio').Cancellable | null, userData: Object | null) => boolean;
/**
  * The type of the get_property function in Gio.DBusInterfaceVTable.
  * @param connection A Gio.DBusConnection.
  * @param sender The unique bus name of the remote caller.
  * @param objectPath The object path that the method was invoked on.
  * @param interfaceName The D-Bus interface name for the property.
  * @param propertyName The name of the property to get the value of.
  * @param error Return location for error.
  * @param userData The user_data object passed to Gio.DBusConnection.register_object().
  * @returns A GLib.Variant with the value for property_name or None if error is set. If the returned GLib.Variant is floating, it is consumed - otherwise its reference count is decreased by one. 
  */
export declare type dBusInterfaceGetPropertyFunc = (connection: import('../Gio').DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, error: import('../GLib').Error, userData: Object | null) => import('../GLib').Variant;
/**
  * The type of the method_call function in Gio.DBusInterfaceVTable.
  * @param connection A Gio.DBusConnection.
  * @param sender The unique bus name of the remote caller.
  * @param objectPath The object path that the method was invoked on.
  * @param interfaceName The D-Bus interface name the method was invoked on.
  * @param methodName The name of the method that was invoked.
  * @param parameters A GLib.Variant tuple with parameters.
  * @param invocation A Gio.DBusMethodInvocation object that must be used to return a value or error.
  * @param userData The user_data object passed to Gio.DBusConnection.register_object(). 
  */
export declare type dBusInterfaceMethodCallFunc = (connection: import('../Gio').DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: import('../GLib').Variant, invocation: import('../Gio').DBusMethodInvocation, userData: Object | null) => void;
/**
  * The type of the set_property function in Gio.DBusInterfaceVTable.
  * @param connection A Gio.DBusConnection.
  * @param sender The unique bus name of the remote caller.
  * @param objectPath The object path that the method was invoked on.
  * @param interfaceName The D-Bus interface name for the property.
  * @param propertyName The name of the property to get the value of.
  * @param value The value to set the property to.
  * @param error Return location for error.
  * @param userData The user_data object passed to Gio.DBusConnection.register_object().
  * @returns True if the property was set to value, False if error is set. 
  */
export declare type dBusInterfaceSetPropertyFunc = (connection: import('../Gio').DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: import('../GLib').Variant, error: import('../GLib').Error, userData: Object | null) => boolean;
/**
  * Signature for function used in Gio.DBusConnection.add_filter().
  * @param connection A Gio.DBusConnection.
  * @param message A locked Gio.DBusMessage that the filter function takes ownership of.
  * @param incoming True if it is a message received from the other peer, False if it is a message to be sent to the other peer.
  * @param userData User data passed when adding the filter.
  * @returns A Gio.DBusMessage that will be freed with GObject.Object.unref() or None to drop the message. Passive filter functions can simply return the passed message object. 
  */
export declare type dBusMessageFilterFunction = (connection: import('../Gio').DBusConnection, message: import('../Gio').DBusMessage, incoming: boolean, userData: Object | null) => import('../Gio').DBusMessage | null;
/**
  * Function signature for a function used to determine the GObject.GType to use for an interface proxy (if interface_name is not None) or object proxy (if interface_name is None).
  * @param manager A Gio.DBusObjectManagerClient.
  * @param objectPath The object path of the remote object.
  * @param interfaceName The interface name of the remote object or None if a Gio.DBusObjectProxy GObject.GType is requested.
  * @param userData User data.
  * @returns A GObject.GType to use for the remote object. The returned type must be a Gio.DBusProxy or Gio.DBusObjectProxy -derived type. 
  */
export declare type dBusProxyTypeFunc = (manager: import('../Gio').DBusObjectManagerClient, objectPath: string, interfaceName: string | null, userData: Object | null) => import('../GObject').GType;
/**
  * Signature for callback function used in Gio.DBusConnection.signal_subscribe().
  * @param connection A Gio.DBusConnection.
  * @param senderName The unique bus name of the sender of the signal.
  * @param objectPath The object path that the signal was emitted on.
  * @param interfaceName The name of the interface.
  * @param signalName The name of the signal.
  * @param parameters A GLib.Variant tuple with parameters for the signal.
  * @param userData User data passed when subscribing to the signal. 
  */
export declare type dBusSignalCallback = (connection: import('../Gio').DBusConnection, senderName: string, objectPath: string, interfaceName: string, signalName: string, parameters: import('../GLib').Variant, userData: Object | null) => void;
/**
  * The type of the dispatch function in Gio.DBusSubtreeVTable.
  * @param connection A Gio.DBusConnection.
  * @param sender The unique bus name of the remote caller.
  * @param objectPath The object path that was registered with Gio.DBusConnection.register_subtree().
  * @param interfaceName The D-Bus interface name that the method call or property access is for.
  * @param node A node that is a child of object_path (relative to object_path) or None for the root of the subtree.
  * @param outUserData Return location for user data to pass to functions in the returned Gio.DBusInterfaceVTable (never None).
  * @param userData The user_data object passed to Gio.DBusConnection.register_subtree().
  * @returns A Gio.DBusInterfaceVTable or None if you don’t want to handle the methods. 
  */
export declare type dBusSubtreeDispatchFunc = (connection: import('../Gio').DBusConnection, sender: string, objectPath: string, interfaceName: string, node: string, outUserData: Object, userData: Object | null) => import('../Gio').DBusInterfaceVTable;
/**
  * The type of the introspect function in Gio.DBusSubtreeVTable.
  * @param connection A Gio.DBusConnection.
  * @param sender The unique bus name of the remote caller.
  * @param objectPath The object path that was registered with Gio.DBusConnection.register_subtree().
  * @param node A node that is a child of object_path (relative to object_path) or None for the root of the subtree.
  * @param userData The user_data object passed to Gio.DBusConnection.register_subtree().
  * @returns A None-terminated array of pointers to Gio.DBusInterfaceInfo, or None. 
  */
export declare type dBusSubtreeIntrospectFunc = (connection: import('../Gio').DBusConnection, sender: string, objectPath: string, node: string, userData: Object | null) => import('../Gio').DBusInterfaceInfo;
/**
  * This is the function type of the callback used for the GLib.Source returned by Gio.DatagramBased.create_source().
  * @param datagramBased the Gio.DatagramBased
  * @param condition the current condition at the source fired
  * @param userData data passed in by the user
  * @returns GLib.SOURCE_REMOVE if the source should be removed, GLib.SOURCE_CONTINUE otherwise 
  */
export declare type datagramBasedSourceFunc = (datagramBased: import('../Gio').DatagramBased, condition: import('../GLib').IOCondition, userData: Object | null) => boolean;
/**
  * During invocation, Gio.DesktopAppInfo.launch_uris_as_manager() may create one or more child processes.  This callback is invoked once for each, providing the process ID.
  * @param appinfo a Gio.DesktopAppInfo
  * @param pid Process identifier
  * @param userData User data 
  */
export declare type desktopAppLaunchCallback = (appinfo: import('../Gio').DesktopAppInfo, pid: number, userData: Object | null) => void;
/**
  * This callback type is used by g_file_measure_disk_usage() to make periodic progress reports when measuring the amount of disk spaced used by a directory.
  * @param reporting True if more reports will come
  * @param currentSize the current cumulative size measurement
  * @param numDirs the number of directories visited so far
  * @param numFiles the number of non-directory files encountered
  * @param userData the data passed to the original request for this callback 
  */
export declare type fileMeasureProgressCallback = (reporting: boolean, currentSize: number, numDirs: number, numFiles: number, userData: Object | null) => void;
/**
  * When doing file operations that may take a while, such as moving a file or copying a file, a progress callback is used to pass how far along that operation is to the application.
  * @param currentNumBytes the current number of bytes in the operation.
  * @param totalNumBytes the total number of bytes in the operation.
  * @param userData user data passed to the callback. 
  */
export declare type fileProgressCallback = (currentNumBytes: number, totalNumBytes: number, userData: Object | null) => void;
/**
  * When loading the partial contents of a file with g_file_load_partial_contents_async(), it may become necessary to determine if any more data from the file should be loaded. A Gio.FileReadMoreCallback function facilitates this by returning True if more data should be read, or False otherwise.
  * @param fileContents the data as currently read.
  * @param fileSize the size of the data currently read.
  * @param callbackData data passed to the callback.
  * @returns True if more data should be read back. False otherwise. 
  */
export declare type fileReadMoreCallback = (fileContents: string, fileSize: number, callbackData: Object | null) => boolean;
/**
  * I/O Job function.
  * @param job a Gio.IOSchedulerJob.
  * @param cancellable optional Gio.Cancellable object, None to ignore.
  * @param userData the data to pass to callback function
  * @returns True if this function should be called again to complete the job, False if the job is complete (or cancelled) 
  */
export declare type ioSchedulerJobFunc = (job: import('../Gio').IOSchedulerJob, cancellable: import('../Gio').Cancellable | null, userData: Object | null) => boolean;
/**
  * This is the function type of the callback used for the GLib.Source returned by Gio.PollableInputStream.create_source() and Gio.PollableOutputStream.create_source().
  * @param pollableStream the Gio.PollableInputStream or Gio.PollableOutputStream
  * @param userData data passed in by the user.
  * @returns it should return False if the source should be removed. 
  */
export declare type pollableSourceFunc = (pollableStream: import('../GObject').Object, userData: Object | null) => boolean;
/**
  * Changes the size of the memory block pointed to by data to size bytes.
  * @param data memory block to reallocate
  * @param size size to reallocate data to
  * @returns a pointer to the reallocated memory 
  */
export declare type reallocFunc = (data: Object | null, size: number) => Object | null;
/**
  * The type for the function that is used to convert from Gio.Settings to an object property. The value is already initialized to hold values of the appropriate type.
  * @param value return location for the property value
  * @param variant the GLib.Variant
  * @param userData user data that was specified when the binding was created
  * @returns True if the conversion succeeded, False in case of an error 
  */
export declare type settingsBindGetMapping = (value: import('../GObject').Value, variant: import('../GLib').Variant, userData: Object | null) => boolean;
/**
  * The type for the function that is used to convert an object property value to a GLib.Variant for storing it in Gio.Settings.
  * @param value a GObject.Value containing the property value to map
  * @param expectedType the GLib.VariantType to create
  * @param userData user data that was specified when the binding was created
  * @returns a new GLib.Variant holding the data from value, or None in case of an error 
  */
export declare type settingsBindSetMapping = (value: import('../GObject').Value, expectedType: import('../GLib').VariantType, userData: Object | null) => import('../GLib').Variant;
/**
  * The type of the function that is used to convert from a value stored in a Gio.Settings to a value that is useful to the application.
  * @param value the GLib.Variant to map, or None
  * @param userData the user data that was passed to Gio.Settings.get_mapped()
  * @returns True if the conversion succeeded, False in case of an error   result:the result of the mapping 
  */
export declare type settingsGetMapping = (value: import('../GLib').Variant, userData: Object | null) => [boolean, Object];
/**
  * Simple thread function that runs an asynchronous operation and checks for cancellation.
  * @param res a Gio.SimpleAsyncResult.
  * @param object a GObject.Object.
  * @param cancellable optional Gio.Cancellable object, None to ignore. 
  */
export declare type simpleAsyncThreadFunc = (res: import('../Gio').SimpleAsyncResult, object: import('../GObject').Object, cancellable: import('../Gio').Cancellable | null) => void;
/**
  * This is the function type of the callback used for the GLib.Source returned by g_socket_create_source().
  * @param socket the Gio.Socket
  * @param condition the current condition at the source fired.
  * @param userData data passed in by the user.
  * @returns it should return False if the source should be removed. 
  */
export declare type socketSourceFunc = (socket: import('../Gio').Socket, condition: import('../GLib').IOCondition, userData: Object | null) => boolean;
/**
  * The prototype for a task function to be run in a thread via g_task_run_in_thread() or g_task_run_in_thread_sync().
  * @param task the Gio.Task
  * @param sourceObject task’s source object
  * @param taskData task’s task data
  * @param cancellable task’s Gio.Cancellable, or None 
  */
export declare type taskThreadFunc = (task: import('../Gio').Task, sourceObject: import('../GObject').Object, taskData: Object | null, cancellable: import('../Gio').Cancellable | null) => void;
/**
  * This function type is used by Gio.Vfs.register_uri_scheme() to make it possible for a client to associate an URI scheme to a different Gio.File implementation.
  * @param vfs a Gio.Vfs
  * @param identifier the identifier to lookup a Gio.File for. This can either be an URI or a parse name as returned by Gio.File.get_parse_name()
  * @param userData user data passed to the function
  * @returns a Gio.File for identifier. 
  */
export declare type vfsFileLookupFunc = (vfs: import('../Gio').Vfs, identifier: string, userData: Object | null) => import('../Gio').File;
