/**
  * Flags used when creating a Gio.AppInfo. 
  */
export declare enum AppInfoCreateFlags {
  /** No flags. */
  NONE = 0,
  /** Application opens in a terminal window. */
  NEEDS_TERMINAL = 1,
  /** Application supports URI arguments. */
  SUPPORTS_URIS = 2,
  /** Application supports startup notification.
    *  New in version 2.26.  */
  SUPPORTS_STARTUP_NOTIFICATION = 4,
}
/**
  * Flags used to define the behaviour of a Gio.Application.
  *  New in version 2.28.  
  */
export declare enum ApplicationFlags {
  /** Default */
  FLAGS_NONE = 0,
  /** Run as a service. In this mode, registration fails if the service is already running, and the application will initially wait up to 10 seconds for an initial activation message to arrive. */
  IS_SERVICE = 1,
  /** Send the environment of the launching process to the primary instance. Set this flag if your application is expected to behave differently depending on certain environment variables. For instance, an editor might be expected to use the GIT_COMMITTER_NAME environment variable when editing a git commit message. The environment is available to the Gio.Application ::command-line signal handler, via Gio.ApplicationCommandLine.getenv(). */
  SEND_ENVIRONMENT = 16,
  /** Don’t try to become the primary instance. */
  IS_LAUNCHER = 2,
  /** Make no attempts to do any of the typical single-instance application negotiation, even if the application ID is given.  The application neither attempts to become the owner of the application ID nor does it check if an existing owner already exists.  Everything occurs in the local process.
    *  New in version 2.30.  */
  NON_UNIQUE = 32,
  /** This application handles opening files (in the primary instance). Note that this flag only affects the default implementation of local_command_line(), and has no effect if Gio.ApplicationFlags.HANDLES_COMMAND_LINE is given. See Gio.Application.run() for details. */
  HANDLES_OPEN = 4,
  /** Allow users to override the application ID from the command line with --gapplication-app-id.
    *  New in version 2.48.  */
  CAN_OVERRIDE_APP_ID = 64,
  /** This application handles command line arguments (in the primary instance). Note that this flag only affect the default implementation of local_command_line(). See Gio.Application.run() for details. */
  HANDLES_COMMAND_LINE = 8,
}
/**
  * Gio.AskPasswordFlags are used to request specific information from the user, or to notify the user of their choices in an authentication situation. 
  */
export declare enum AskPasswordFlags {
  /** operation requires a password. */
  NEED_PASSWORD = 1,
  /** operation supports anonymous users. */
  ANONYMOUS_SUPPORTED = 16,
  /** operation requires a username. */
  NEED_USERNAME = 2,
  /** operation takes TCRYPT parameters (Since: 2.58) */
  TCRYPT = 32,
  /** operation requires a domain. */
  NEED_DOMAIN = 4,
  /** operation supports saving settings. */
  SAVING_SUPPORTED = 8,
}
/**
  * Flags used in Gio.bus_own_name().
  *  New in version 2.26.  
  */
export declare enum BusNameOwnerFlags {
  /** No flags set. */
  NONE = 0,
  /** Allow another message bus connection to claim the name. */
  ALLOW_REPLACEMENT = 1,
  /** If another message bus connection owns the name and have specified Gio.BusNameOwnerFlags.ALLOW_REPLACEMENT, then take the name from the other connection. */
  REPLACE = 2,
  /** If another message bus connection owns the name, immediately return an error from Gio.bus_own_name() rather than entering the waiting queue for that name. (Since 2.54) */
  DO_NOT_QUEUE = 4,
}
/**
  * Flags used in Gio.bus_watch_name().
  *  New in version 2.26.  
  */
export declare enum BusNameWatcherFlags {
  /** No flags set. */
  NONE = 0,
  /** If no-one owns the name when beginning to watch the name, ask the bus to launch an owner for the name. */
  AUTO_START = 1,
}
/**
  * Flags used when calling a Gio.Converter.convert().
  *  New in version 2.24.  
  */
export declare enum ConverterFlags {
  /** No flags. */
  NONE = 0,
  /** At end of input data */
  INPUT_AT_END = 1,
  /** Flush data */
  FLUSH = 2,
}
/**
  * Flags used in Gio.DBusConnection.call() and similar APIs.
  *  New in version 2.26.  
  */
export declare enum DBusCallFlags {
  /** No flags set. */
  NONE = 0,
  /** The bus must not launch an owner for the destination name in response to this method invocation. */
  NO_AUTO_START = 1,
  /** the caller is prepared to wait for interactive authorization.
    *  New in version 2.46.  */
  ALLOW_INTERACTIVE_AUTHORIZATION = 2,
}
/**
  * Capabilities negotiated with the remote peer.
  *  New in version 2.26.  
  */
export declare enum DBusCapabilityFlags {
  /** No flags set. */
  NONE = 0,
  /** The connection supports exchanging UNIX file descriptors with the remote peer. */
  UNIX_FD_PASSING = 1,
}
/**
  * Flags used when creating a new Gio.DBusConnection.
  *  New in version 2.26.  
  */
export declare enum DBusConnectionFlags {
  /** No flags set. */
  NONE = 0,
  /** Perform authentication against server. */
  AUTHENTICATION_CLIENT = 1,
  /** If set, processing of D-Bus messages is delayed until Gio.DBusConnection.start_message_processing() is called. */
  DELAY_MESSAGE_PROCESSING = 16,
  /** Perform authentication against client. */
  AUTHENTICATION_SERVER = 2,
  /** When authenticating as a server, allow the anonymous authentication method. */
  AUTHENTICATION_ALLOW_ANONYMOUS = 4,
  /** Pass this flag if connecting to a peer that is a message bus. This means that the Hello() method will be invoked as part of the connection setup. */
  MESSAGE_BUS_CONNECTION = 8,
}
/**
  * Flags describing the behavior of a Gio.DBusInterfaceSkeleton instance.
  *  New in version 2.30.  
  */
export declare enum DBusInterfaceSkeletonFlags {
  /** No flags set. */
  NONE = 0,
  /** Each method invocation is handled in a thread dedicated to the invocation. This means that the method implementation can use blocking IO without blocking any other part of the process. It also means that the method implementation must use locking to access data structures used by other threads. */
  HANDLE_METHOD_INVOCATIONS_IN_THREAD = 1,
}
/**
  * Message flags used in Gio.DBusMessage.
  *  New in version 2.26.  
  */
export declare enum DBusMessageFlags {
  /** No flags set. */
  NONE = 0,
  /** A reply is not expected. */
  NO_REPLY_EXPECTED = 1,
  /** The bus must not launch an owner for the destination name in response to this message. */
  NO_AUTO_START = 2,
  /** If set on a method call, this flag means that the caller is prepared to wait for interactive authorization.
    *  New in version 2.46.  */
  ALLOW_INTERACTIVE_AUTHORIZATION = 4,
}
/**
  * Flags used when constructing a Gio.DBusObjectManagerClient.
  *  New in version 2.30.  
  */
export declare enum DBusObjectManagerClientFlags {
  /** No flags set. */
  NONE = 0,
  /** If not set and the manager is for a well-known name, then request the bus to launch an owner for the name if no-one owns the name. This flag can only be used in managers for well-known names. */
  DO_NOT_AUTO_START = 1,
}
/**
  * Flags describing the access control of a D-Bus property.
  *  New in version 2.26.  
  */
export declare enum DBusPropertyInfoFlags {
  /** No flags set. */
  NONE = 0,
  /** Property is readable. */
  READABLE = 1,
  /** Property is writable. */
  WRITABLE = 2,
}
/**
  * Flags used when constructing an instance of a Gio.DBusProxy derived class.
  *  New in version 2.26.  
  */
export declare enum DBusProxyFlags {
  /** No flags set. */
  NONE = 0,
  /** Don’t load properties. */
  DO_NOT_LOAD_PROPERTIES = 1,
  /** If the proxy is for a well-known name, do not ask the bus to launch an owner during proxy initialization, but allow it to be autostarted by a method call. This flag is only meaningful in proxies for well-known names, and only if Gio.DBusProxyFlags.DO_NOT_AUTO_START is not also specified. */
  DO_NOT_AUTO_START_AT_CONSTRUCTION = 16,
  /** Don’t connect to signals on the remote object. */
  DO_NOT_CONNECT_SIGNALS = 2,
  /** If the proxy is for a well-known name, do not ask the bus to launch an owner during proxy initialization or a method call. This flag is only meaningful in proxies for well-known names. */
  DO_NOT_AUTO_START = 4,
  /** If set, the property value for any __invalidated property__ will be (asynchronously) retrieved upon receiving the PropertiesChanged D-Bus signal and the property will not cause emission of the Gio.DBusProxy ::g-properties-changed signal. When the value is received the Gio.DBusProxy ::g-properties-changed signal is emitted for the property along with the retrieved value.
    *  New in version 2.32.  */
  GET_INVALIDATED_PROPERTIES = 8,
}
/**
  * Flags used when sending Gio.DBusMessages on a Gio.DBusConnection.
  *  New in version 2.26.  
  */
export declare enum DBusSendMessageFlags {
  /** No flags set. */
  NONE = 0,
  /** Do not automatically assign a serial number from the Gio.DBusConnection object when sending a message. */
  PRESERVE_SERIAL = 1,
}
/**
  * Flags used when creating a Gio.DBusServer.
  *  New in version 2.26.  
  */
export declare enum DBusServerFlags {
  /** No flags set. */
  NONE = 0,
  /** All Gio.DBusServer ::new-connection signals will run in separated dedicated threads (see signal for details). */
  RUN_IN_THREAD = 1,
  /** Allow the anonymous authentication method. */
  AUTHENTICATION_ALLOW_ANONYMOUS = 2,
}
/**
  * Flags used when subscribing to signals via Gio.DBusConnection.signal_subscribe().
  *  New in version 2.26.  
  */
export declare enum DBusSignalFlags {
  /** No flags set. */
  NONE = 0,
  /** Don’t actually send the AddMatch D-Bus call for this signal subscription.  This gives you more control over which match rules you add (but you must add them manually). */
  NO_MATCH_RULE = 1,
  /** Match first arguments that contain a bus or interface name with the given namespace. */
  MATCH_ARG0_NAMESPACE = 2,
  /** Match first arguments that contain an object path that is either equivalent to the given path, or one of the paths is a subpath of the other. */
  MATCH_ARG0_PATH = 4,
}
/**
  * Flags passed to Gio.DBusConnection.register_subtree().
  *  New in version 2.26.  
  */
export declare enum DBusSubtreeFlags {
  /** No flags set. */
  NONE = 0,
  /** Method calls to objects not in the enumerated range will still be dispatched. This is useful if you want to dynamically spawn objects in the subtree. */
  DISPATCH_TO_UNENUMERATED_NODES = 1,
}
/**
  * Flags used when starting a drive.
  *  New in version 2.22.  
  */
export declare enum DriveStartFlags {
  /** No flags set. */
  NONE = 0,
}
/**
  * Flags specifying the behaviour of an attribute. 
  */
export declare enum FileAttributeInfoFlags {
  /** no flags set. */
  NONE = 0,
  /** copy the attribute values when the file is copied. */
  COPY_WITH_FILE = 1,
  /** copy the attribute values when the file is moved. */
  COPY_WHEN_MOVED = 2,
}
/**
  * Flags used when copying or moving files. 
  */
export declare enum FileCopyFlags {
  /** No flags set. */
  NONE = 0,
  /** Overwrite any existing files */
  OVERWRITE = 1,
  /** Don’t use copy and delete fallback if native move not supported. */
  NO_FALLBACK_FOR_MOVE = 16,
  /** Make a backup of any existing files. */
  BACKUP = 2,
  /** Leaves target file with default perms, instead of setting the source file perms. */
  TARGET_DEFAULT_PERMS = 32,
  /** Don’t follow symlinks. */
  NOFOLLOW_SYMLINKS = 4,
  /** Copy all file metadata instead of just default set used for copy (see Gio.FileInfo). */
  ALL_METADATA = 8,
}
/**
  * Flags used when an operation may create a file. 
  */
export declare enum FileCreateFlags {
  /** No flags set. */
  NONE = 0,
  /** Create a file that can only be accessed by the current user. */
  PRIVATE = 1,
  /** Replace the destination as if it didn’t exist before. Don’t try to keep any old permissions, replace instead of following links. This is generally useful if you’re doing a “copy over” rather than a “save new version of” replace operation. You can think of it as “unlink destination” before writing to it, although the implementation may not be exactly like that.
    *  New in version 2.20.  */
  REPLACE_DESTINATION = 2,
}
/**
  * Flags that can be used with g_file_measure_disk_usage().
  *  New in version 2.38.  
  */
export declare enum FileMeasureFlags {
  /** No flags set. */
  NONE = 0,
  /** Report any error encountered while traversing the directory tree.  Normally errors are only reported for the toplevel file. */
  REPORT_ANY_ERROR = 2,
  /** Tally usage based on apparent file sizes.  Normally, the block-size is used, if available, as this is a more accurate representation of disk space used. Compare with du --apparent-size. */
  APPARENT_SIZE = 4,
  /** Do not cross mount point boundaries. Compare with du -x. */
  NO_XDEV = 8,
}
/**
  * Flags used to set what a Gio.FileMonitor will watch for. 
  */
export declare enum FileMonitorFlags {
  /** No flags set. */
  NONE = 0,
  /** Watch for mount events. */
  WATCH_MOUNTS = 1,
  /** Pair DELETED and CREATED events caused by file renames (moves) and send a single Gio.FileMonitorEvent.MOVED event instead (NB: not supported on all backends; the default behaviour -without specifying this flag- is to send single DELETED and CREATED events).  Deprecated since 2.46: use Gio.FileMonitorFlags.WATCH_MOVES instead. */
  SEND_MOVED = 2,
  /** Watch for changes to the file made via another hard link.
    *  New in version 2.36.  */
  WATCH_HARD_LINKS = 4,
  /** Watch for rename operations on a monitored directory.  This causes Gio.FileMonitorEvent.RENAMED, Gio.FileMonitorEvent.MOVED_IN and Gio.FileMonitorEvent.MOVED_OUT events to be emitted when possible.
    *  New in version 2.46.  */
  WATCH_MOVES = 8,
}
/**
  * Flags used when querying a Gio.FileInfo. 
  */
export declare enum FileQueryInfoFlags {
  /** No flags set. */
  NONE = 0,
  /** Don’t follow symlinks. */
  NOFOLLOW_SYMLINKS = 1,
}
/**
  * Gio.IOStreamSpliceFlags determine how streams should be spliced.
  *  New in version 2.28.  
  */
export declare enum IOStreamSpliceFlags {
  /** Do not close either stream. */
  NONE = 0,
  /** Close the first stream after the splice. */
  CLOSE_STREAM1 = 1,
  /** Close the second stream after the splice. */
  CLOSE_STREAM2 = 2,
  /** Wait for both splice operations to finish before calling the callback. */
  WAIT_FOR_BOTH = 4,
}
/**
  * Flags used when mounting a mount. 
  */
export declare enum MountMountFlags {
  /** No flags set. */
  NONE = 0,
}
/**
  * Flags used when an unmounting a mount. 
  */
export declare enum MountUnmountFlags {
  /** No flags set. */
  NONE = 0,
  /** Unmount even if there are outstanding file operations on the mount. */
  FORCE = 1,
}
/**
  * Gio.OutputStreamSpliceFlags determine how streams should be spliced. 
  */
export declare enum OutputStreamSpliceFlags {
  /** Do not close either stream. */
  NONE = 0,
  /** Close the source stream after the splice. */
  CLOSE_SOURCE = 1,
  /** Close the target stream after the splice. */
  CLOSE_TARGET = 2,
}
/**
  * Gio.ResourceFlags give information about a particular file inside a resource bundle.
  *  New in version 2.32.  
  */
export declare enum ResourceFlags {
  /** No flags set. */
  NONE = 0,
  /** The file is compressed. */
  COMPRESSED = 1,
}
/**
  * Gio.ResourceLookupFlags determine how resource path lookups are handled.
  *  New in version 2.32.  
  */
export declare enum ResourceLookupFlags {
  /** No flags set. */
  NONE = 0,
}
/**
  * Flags used when creating a binding. These flags determine in which direction the binding works. The default is to synchronize in both directions. 
  */
export declare enum SettingsBindFlags {
  /** Equivalent to G_SETTINGS_BIND_GET|G_SETTINGS_BIND_SET */
  DEFAULT = 0,
  /** Update the GObject.Object property when the setting changes. It is an error to use this flag if the property is not writable. */
  GET = 1,
  /** When passed to Gio.Settings.bind(), uses a pair of mapping functions that invert the boolean value when mapping between the setting and the property.  The setting and property must both be booleans.  You cannot pass this flag to g_settings_bind_with_mapping(). */
  INVERT_BOOLEAN = 16,
  /** Update the setting when the GObject.Object property changes. It is an error to use this flag if the property is not readable. */
  SET = 2,
  /** Do not try to bind a “sensitivity” property to the writability of the setting */
  NO_SENSITIVITY = 4,
  /** When set in addition to Gio.SettingsBindFlags.GET, set the GObject.Object property value initially from the setting, but do not listen for changes of the setting */
  GET_NO_CHANGES = 8,
}
/**
  * Flags used in Gio.Socket.receive_message() and Gio.Socket.send_message(). The flags listed in the enum are some commonly available flags, but the values used for them are the same as on the platform, and any other flags are passed in/out as is. So to use a platform specific flag, just include the right system header and pass in the flag.
  *  New in version 2.22.  
  */
export declare enum SocketMsgFlags {
  /** No flags. */
  NONE = 0,
  /** Request to send/receive out of band data. */
  OOB = 1,
  /** Read data from the socket without removing it from the queue. */
  PEEK = 2,
  /** Don’t use a gateway to send out the packet, only send to hosts on directly connected networks. */
  DONTROUTE = 4,
}
/**
  * Flags to define the behaviour of a Gio.Subprocess.
  *  New in version 2.40.  
  */
export declare enum SubprocessFlags {
  /** No flags. */
  NONE = 0,
  /** create a pipe for the stdin of the spawned process that can be accessed with Gio.Subprocess.get_stdin_pipe(). */
  STDIN_PIPE = 1,
  /** spawned processes will inherit the file descriptors of their parent, unless those descriptors have been explicitly marked as close-on-exec.  This flag has no effect over the “standard” file descriptors (stdin, stdout, stderr). */
  INHERIT_FDS = 128,
  /** create a pipe for the stderr of the spawned process that can be accessed with Gio.Subprocess.get_stderr_pipe(). */
  STDERR_PIPE = 16,
  /** stdin is inherited from the calling process. */
  STDIN_INHERIT = 2,
  /** silence the stderr of the spawned process (ie: redirect to /dev/null). */
  STDERR_SILENCE = 32,
  /** create a pipe for the stdout of the spawned process that can be accessed with Gio.Subprocess.get_stdout_pipe(). */
  STDOUT_PIPE = 4,
  /** merge the stderr of the spawned process with whatever the stdout happens to be.  This is a good way of directing both streams to a common log file, for example. */
  STDERR_MERGE = 64,
  /** silence the stdout of the spawned process (ie: redirect to /dev/null). */
  STDOUT_SILENCE = 8,
}
/**
  * Flags to define future Gio.TestDBus behaviour.
  *  New in version 2.34.  
  */
export declare enum TestDBusFlags {
  /** No flags. */
  NONE = 0,
}
/**
  * A set of flags describing TLS certification validation. This can be used to set which validation steps to perform (eg, with Gio.TlsClientConnection.set_validation_flags()), or to describe why a particular certificate was rejected (eg, in Gio.TlsConnection ::accept-certificate).
  *  New in version 2.28.  
  */
export declare enum TlsCertificateFlags {
  /** The signing certificate authority is not known. */
  UNKNOWN_CA = 1,
  /** the combination of all of the above flags */
  VALIDATE_ALL = 127,
  /** The certificate has been revoked according to the Gio.TlsConnection’s certificate revocation list. */
  REVOKED = 16,
  /** The certificate does not match the expected identity of the site that it was retrieved from. */
  BAD_IDENTITY = 2,
  /** The certificate’s algorithm is considered insecure. */
  INSECURE = 32,
  /** The certificate’s activation time is still in the future */
  NOT_ACTIVATED = 4,
  /** Some other error occurred validating the certificate */
  GENERIC_ERROR = 64,
  /** The certificate has expired */
  EXPIRED = 8,
}
/**
  * Flags for Gio.TlsDatabase.verify_chain().
  *  New in version 2.30.  
  */
export declare enum TlsDatabaseVerifyFlags {
  /** No verification flags */
  NONE = 0,
}
/**
  * Various flags for the password.
  *  New in version 2.30.  
  */
export declare enum TlsPasswordFlags {
  /** No flags */
  NONE = 0,
  /** The password was wrong, and the user should retry. */
  RETRY = 2,
  /** Hint to the user that the password has been wrong many times, and the user may not have many chances left. */
  MANY_TRIES = 4,
  /** Hint to the user that this is the last try to get this password right. */
  FINAL_TRY = 8,
}
/**
  * An enumeration for well-known message buses.
  *  New in version 2.26.  
  */
export declare enum BusType {
  /** An alias for the message bus that activated the process, if any. */
  STARTER = -1,
  /** Not a message bus. */
  NONE = 0,
  /** The system-wide message bus. */
  SYSTEM = 1,
  /** The login session message bus. */
  SESSION = 2,
}
/**
  * Results returned from Gio.Converter.convert().
  *  New in version 2.24.  
  */
export declare enum ConverterResult {
  /** There was an error during conversion. */
  ERROR = 0,
  /** Some data was consumed or produced */
  CONVERTED = 1,
  /** The conversion is finished */
  FINISHED = 2,
  /** Flushing is finished */
  FLUSHED = 3,
}
/**
  * Enumeration describing different kinds of native credential types.
  *  New in version 2.26.  
  */
export declare enum CredentialsType {
  /** Indicates an invalid native credential type. */
  INVALID = 0,
  /** The native credentials type is a struct ucred. */
  LINUX_UCRED = 1,
  /** The native credentials type is a struct cmsgcred. */
  FREEBSD_CMSGCRED = 2,
  /** The native credentials type is a struct sockpeercred. Added in 2.30. */
  OPENBSD_SOCKPEERCRED = 3,
  /** The native credentials type is a ucred_t. Added in 2.40. */
  SOLARIS_UCRED = 4,
  /** The native credentials type is a struct unpcbid. */
  NETBSD_UNPCBID = 5,
}
/**
  * Error codes for the %G_DBUS_ERROR error domain.
  *  New in version 2.26.  
  */
export declare enum DBusError {
  /** A generic error; “something went wrong” - see the error message for more. */
  FAILED = 0,
  /** There was not enough memory to complete an operation. */
  NO_MEMORY = 1,
  /** Authentication didn’t work. */
  AUTH_FAILED = 10,
  /** Unable to connect to server (probably caused by ECONNREFUSED on a socket). */
  NO_SERVER = 11,
  /** Certain timeout errors, possibly ETIMEDOUT on a socket.  Note that Gio.DBusError.NO_REPLY is used for message reply timeouts. Warning: this is confusingly-named given that Gio.DBusError.TIMED_OUT also exists. We can’t fix it for compatibility reasons so just be careful. */
  TIMEOUT = 12,
  /** No network access (probably ENETUNREACH on a socket). */
  NO_NETWORK = 13,
  /** Can’t bind a socket since its address is in use (i.e. EADDRINUSE). */
  ADDRESS_IN_USE = 14,
  /** The connection is disconnected and you’re trying to use it. */
  DISCONNECTED = 15,
  /** Invalid arguments passed to a method call. */
  INVALID_ARGS = 16,
  /** Missing file. */
  FILE_NOT_FOUND = 17,
  /** Existing file and the operation you’re using does not silently overwrite. */
  FILE_EXISTS = 18,
  /** Method name you invoked isn’t known by the object you invoked it on. */
  UNKNOWN_METHOD = 19,
  /** The bus doesn’t know how to launch a service to supply the bus name you wanted. */
  SERVICE_UNKNOWN = 2,
  /** Certain timeout errors, e.g. while starting a service. Warning: this is confusingly-named given that Gio.DBusError.TIMEOUT also exists. We can’t fix it for compatibility reasons so just be careful. */
  TIMED_OUT = 20,
  /** Tried to remove or modify a match rule that didn’t exist. */
  MATCH_RULE_NOT_FOUND = 21,
  /** The match rule isn’t syntactically valid. */
  MATCH_RULE_INVALID = 22,
  /** While starting a new process, the exec() call failed. */
  SPAWN_EXEC_FAILED = 23,
  /** While starting a new process, the fork() call failed. */
  SPAWN_FORK_FAILED = 24,
  /** While starting a new process, the child exited with a status code. */
  SPAWN_CHILD_EXITED = 25,
  /** While starting a new process, the child exited on a signal. */
  SPAWN_CHILD_SIGNALED = 26,
  /** While starting a new process, something went wrong. */
  SPAWN_FAILED = 27,
  /** We failed to setup the environment correctly. */
  SPAWN_SETUP_FAILED = 28,
  /** We failed to setup the config parser correctly. */
  SPAWN_CONFIG_INVALID = 29,
  /** The bus name you referenced doesn’t exist (i.e. no application owns it). */
  NAME_HAS_NO_OWNER = 3,
  /** Bus name was not valid. */
  SPAWN_SERVICE_INVALID = 30,
  /** Service file not found in system-services directory. */
  SPAWN_SERVICE_NOT_FOUND = 31,
  /** Permissions are incorrect on the setuid helper. */
  SPAWN_PERMISSIONS_INVALID = 32,
  /** Service file invalid (Name, User or Exec missing). */
  SPAWN_FILE_INVALID = 33,
  /** Tried to get a UNIX process ID and it wasn’t available. */
  SPAWN_NO_MEMORY = 34,
  /** Tried to get a UNIX process ID and it wasn’t available. */
  UNIX_PROCESS_ID_UNKNOWN = 35,
  /** A type signature is not valid. */
  INVALID_SIGNATURE = 36,
  /** A file contains invalid syntax or is otherwise broken. */
  INVALID_FILE_CONTENT = 37,
  /** Asked for SELinux security context and it wasn’t available. */
  SELINUX_SECURITY_CONTEXT_UNKNOWN = 38,
  /** Asked for ADT audit data and it wasn’t available. */
  ADT_AUDIT_DATA_UNKNOWN = 39,
  /** No reply to a message expecting one, usually means a timeout occurred. */
  NO_REPLY = 4,
  /** There’s already an object with the requested object path. */
  OBJECT_PATH_IN_USE = 40,
  /** Object you invoked a method on isn’t known.
    *  New in version 2.42.  */
  UNKNOWN_OBJECT = 41,
  /** Interface you invoked a method on isn’t known by the object.
    *  New in version 2.42.  */
  UNKNOWN_INTERFACE = 42,
  /** Property you tried to access isn’t known by the object.
    *  New in version 2.42.  */
  UNKNOWN_PROPERTY = 43,
  /** Property you tried to set is read-only.
    *  New in version 2.42.  */
  PROPERTY_READ_ONLY = 44,
  /** Something went wrong reading or writing to a socket, for example. */
  IO_ERROR = 5,
  /** A D-Bus bus address was malformed. */
  BAD_ADDRESS = 6,
  /** Requested operation isn’t supported (like ENOSYS on UNIX). */
  NOT_SUPPORTED = 7,
  /** Some limited resource is exhausted. */
  LIMITS_EXCEEDED = 8,
  /** Security restrictions don’t allow doing what you’re trying to do. */
  ACCESS_DENIED = 9,
}
/**
  * Enumeration used to describe the byte order of a D-Bus message.
  *  New in version 2.26.  
  */
export declare enum DBusMessageByteOrder {
  /** The byte order is little endian. */
  LITTLE_ENDIAN = 108,
  /** The byte order is big endian. */
  BIG_ENDIAN = 66,
}
/**
  * Header fields used in Gio.DBusMessage.
  *  New in version 2.26.  
  */
export declare enum DBusMessageHeaderField {
  /** Not a valid header field. */
  INVALID = 0,
  /** The object path. */
  PATH = 1,
  /** The interface name. */
  INTERFACE = 2,
  /** The method or signal name. */
  MEMBER = 3,
  /** The name of the error that occurred. */
  ERROR_NAME = 4,
  /** The serial number the message is a reply to. */
  REPLY_SERIAL = 5,
  /** The name the message is intended for. */
  DESTINATION = 6,
  /** Unique name of the sender of the message (filled in by the bus). */
  SENDER = 7,
  /** The signature of the message body. */
  SIGNATURE = 8,
  /** The number of UNIX file descriptors that accompany the message. */
  NUM_UNIX_FDS = 9,
}
/**
  * Message types used in Gio.DBusMessage.
  *  New in version 2.26.  
  */
export declare enum DBusMessageType {
  /** Message is of invalid type. */
  INVALID = 0,
  /** Method call. */
  METHOD_CALL = 1,
  /** Method reply. */
  METHOD_RETURN = 2,
  /** Error reply. */
  ERROR = 3,
  /** Signal emission. */
  SIGNAL = 4,
}
/**
  * Gio.DataStreamByteOrder is used to ensure proper endianness of streaming data sources across various machine architectures. 
  */
export declare enum DataStreamByteOrder {
  /** Selects Big Endian byte order. */
  BIG_ENDIAN = 0,
  /** Selects Little Endian byte order. */
  LITTLE_ENDIAN = 1,
  /** Selects endianness based on host machine’s architecture. */
  HOST_ENDIAN = 2,
}
/**
  * Gio.DataStreamNewlineType is used when checking for or setting the line endings for a given file. 
  */
export declare enum DataStreamNewlineType {
  /** Selects “LF” line endings, common on most modern UNIX platforms. */
  LF = 0,
  /** Selects “CR” line endings. */
  CR = 1,
  /** Selects “CR, LF” line ending, common on Microsoft Windows. */
  CR_LF = 2,
  /** Automatically try to handle any line ending type. */
  ANY = 3,
}
/**
  * Enumeration describing how a drive can be started/stopped.
  *  New in version 2.22.  
  */
export declare enum DriveStartStopType {
  /** Unknown or drive doesn’t support start/stop. */
  UNKNOWN = 0,
  /** The stop method will physically shut down the drive and e.g. power down the port the drive is attached to. */
  SHUTDOWN = 1,
  /** The start/stop methods are used for connecting/disconnect to the drive over the network. */
  NETWORK = 2,
  /** The start/stop methods will assemble/disassemble a virtual drive from several physical drives. */
  MULTIDISK = 3,
  /** The start/stop methods will unlock/lock the disk (for example using the ATA SECURITY UNLOCK DEVICE command) */
  PASSWORD = 4,
}
/**
  * Gio.EmblemOrigin is used to add information about the origin of the emblem to Gio.Emblem.
  *  New in version 2.18.  
  */
export declare enum EmblemOrigin {
  /** Emblem of unknown origin */
  UNKNOWN = 0,
  /** Emblem adds device-specific information */
  DEVICE = 1,
  /** Emblem depicts live metadata, such as “readonly” */
  LIVEMETADATA = 2,
  /** Emblem comes from a user-defined tag, e.g. set by nautilus (in the future) */
  TAG = 3,
}
/**
  * Used by Gio.File.set_attributes_from_info() when setting file attributes. 
  */
export declare enum FileAttributeStatus {
  /** Attribute value is unset (empty). */
  UNSET = 0,
  /** Attribute value is set. */
  SET = 1,
  /** Indicates an error in setting the value. */
  ERROR_SETTING = 2,
}
/**
  * The data types for file attributes. 
  */
export declare enum FileAttributeType {
  /** indicates an invalid or uninitalized type. */
  INVALID = 0,
  /** a null terminated UTF8 string. */
  STRING = 1,
  /** a zero terminated string of non-zero bytes. */
  BYTE_STRING = 2,
  /** a boolean value. */
  BOOLEAN = 3,
  /** an unsigned 4-byte/32-bit integer. */
  UINT32 = 4,
  /** a signed 4-byte/32-bit integer. */
  INT32 = 5,
  /** an unsigned 8-byte/64-bit integer. */
  UINT64 = 6,
  /** a signed 8-byte/64-bit integer. */
  INT64 = 7,
  /** a GObject.Object. */
  OBJECT = 8,
  /** a None terminated str **.
    *  New in version 2.22.  */
  STRINGV = 9,
}
/**
  * Specifies what type of event a monitor event is. 
  */
export declare enum FileMonitorEvent {
  /** a file changed. */
  CHANGED = 0,
  /** a hint that this was probably the last change in a set of changes. */
  CHANGES_DONE_HINT = 1,
  /** the file was moved out of the monitored directory to another location – only sent if the Gio.FileMonitorFlags.WATCH_MOVES flag is set.
    *  New in version 2.46.  */
  MOVED_OUT = 10,
  /** a file was deleted. */
  DELETED = 2,
  /** a file was created. */
  CREATED = 3,
  /** a file attribute was changed. */
  ATTRIBUTE_CHANGED = 4,
  /** the file location will soon be unmounted. */
  PRE_UNMOUNT = 5,
  /** the file location was unmounted. */
  UNMOUNTED = 6,
  /** the file was moved – only sent if the (deprecated) Gio.FileMonitorFlags.SEND_MOVED flag is set */
  MOVED = 7,
  /** the file was renamed within the current directory – only sent if the Gio.FileMonitorFlags.WATCH_MOVES flag is set.
    *  New in version 2.46.  */
  RENAMED = 8,
  /** the file was moved into the monitored directory from another location – only sent if the Gio.FileMonitorFlags.WATCH_MOVES flag is set.
    *  New in version 2.46.  */
  MOVED_IN = 9,
}
/**
  * Indicates the file’s on-disk type. 
  */
export declare enum FileType {
  /** File’s type is unknown. */
  UNKNOWN = 0,
  /** File handle represents a regular file. */
  REGULAR = 1,
  /** File handle represents a directory. */
  DIRECTORY = 2,
  /** File handle represents a symbolic link (Unix systems). */
  SYMBOLIC_LINK = 3,
  /** File is a “special” file, such as a socket, fifo, block device, or character device. */
  SPECIAL = 4,
  /** File is a shortcut (Windows systems). */
  SHORTCUT = 5,
  /** File is a mountable location. */
  MOUNTABLE = 6,
}
/**
  * Indicates a hint from the file system whether files should be previewed in a file manager. Returned as the value of the key Gio.FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW. 
  */
export declare enum FilesystemPreviewType {
  /** Only preview files if user has explicitly requested it. */
  IF_ALWAYS = 0,
  /** Preview files if user has requested preview of “local” files. */
  IF_LOCAL = 1,
  /** Never preview files. */
  NEVER = 2,
}
/**
  * Error codes returned by GIO functions. 
  */
export declare enum IOErrorEnum {
  /** Generic error condition for when an operation fails and no more specific Gio.IOErrorEnum value is defined. */
  FAILED = 0,
  /** File not found. */
  NOT_FOUND = 1,
  /** Filename is invalid or contains invalid characters. */
  INVALID_FILENAME = 10,
  /** File contains too many symbolic links. */
  TOO_MANY_LINKS = 11,
  /** No space left on drive. */
  NO_SPACE = 12,
  /** Invalid argument. */
  INVALID_ARGUMENT = 13,
  /** Permission denied. */
  PERMISSION_DENIED = 14,
  /** Operation (or one of its parameters) not supported */
  NOT_SUPPORTED = 15,
  /** File isn’t mounted. */
  NOT_MOUNTED = 16,
  /** File is already mounted. */
  ALREADY_MOUNTED = 17,
  /** File was closed. */
  CLOSED = 18,
  /** Operation was cancelled. See Gio.Cancellable. */
  CANCELLED = 19,
  /** File already exists. */
  EXISTS = 2,
  /** Operations are still pending. */
  PENDING = 20,
  /** File is read only. */
  READ_ONLY = 21,
  /** Backup couldn’t be created. */
  CANT_CREATE_BACKUP = 22,
  /** File’s Entity Tag was incorrect. */
  WRONG_ETAG = 23,
  /** Operation timed out. */
  TIMED_OUT = 24,
  /** Operation would be recursive. */
  WOULD_RECURSE = 25,
  /** File is busy. */
  BUSY = 26,
  /** Operation would block. */
  WOULD_BLOCK = 27,
  /** Host couldn’t be found (remote operations). */
  HOST_NOT_FOUND = 28,
  /** Operation would merge files. */
  WOULD_MERGE = 29,
  /** File is a directory. */
  IS_DIRECTORY = 3,
  /** Operation failed and a helper program has already interacted with the user. Do not display any error dialog. */
  FAILED_HANDLED = 30,
  /** The current process has too many files open and can’t open any more. Duplicate descriptors do count toward this limit.
    *  New in version 2.20.  */
  TOO_MANY_OPEN_FILES = 31,
  /** The object has not been initialized.
    *  New in version 2.22.  */
  NOT_INITIALIZED = 32,
  /** The requested address is already in use.
    *  New in version 2.22.  */
  ADDRESS_IN_USE = 33,
  /** Need more input to finish operation.
    *  New in version 2.24.  */
  PARTIAL_INPUT = 34,
  /** The input data was invalid.
    *  New in version 2.24.  */
  INVALID_DATA = 35,
  /** A remote object generated an error that doesn’t correspond to a locally registered GLib.Error error domain. Use Gio.DBusError.get_remote_error() to extract the D-Bus error name and Gio.DBusError.strip_remote_error() to fix up the message so it matches what was received on the wire.
    *  New in version 2.26.  */
  DBUS_ERROR = 36,
  /** Host unreachable.
    *  New in version 2.26.  */
  HOST_UNREACHABLE = 37,
  /** Network unreachable.
    *  New in version 2.26.  */
  NETWORK_UNREACHABLE = 38,
  /** Connection refused.
    *  New in version 2.26.  */
  CONNECTION_REFUSED = 39,
  /** File is not a directory. */
  NOT_DIRECTORY = 4,
  /** Connection to proxy server failed.
    *  New in version 2.26.  */
  PROXY_FAILED = 40,
  /** Proxy authentication failed.
    *  New in version 2.26.  */
  PROXY_AUTH_FAILED = 41,
  /** Proxy server needs authentication.
    *  New in version 2.26.  */
  PROXY_NEED_AUTH = 42,
  /** Proxy connection is not allowed by ruleset.
    *  New in version 2.26.  */
  PROXY_NOT_ALLOWED = 43,
  /** Broken pipe.
    *  New in version 2.36.  */
  BROKEN_PIPE = 44,
  /** Connection closed by peer. Note that this is the same code as Gio.IOErrorEnum.BROKEN_PIPE; before 2.44 some “connection closed” errors returned Gio.IOErrorEnum.BROKEN_PIPE, but others returned Gio.IOErrorEnum.FAILED. Now they should all return the same value, which has this more logical name.
    *  New in version 2.44.  */
  CONNECTION_CLOSED = 44,
  /** Transport endpoint is not connected.
    *  New in version 2.44.  */
  NOT_CONNECTED = 45,
  /** Message too large.
    *  New in version 2.48.  */
  MESSAGE_TOO_LARGE = 46,
  /** File is a directory that isn’t empty. */
  NOT_EMPTY = 5,
  /** File is not a regular file. */
  NOT_REGULAR_FILE = 6,
  /** File is not a symbolic link. */
  NOT_SYMBOLIC_LINK = 7,
  /** File cannot be mounted. */
  NOT_MOUNTABLE_FILE = 8,
  /** Filename is too many characters. */
  FILENAME_TOO_LONG = 9,
}
/**
  * Flags for use with g_io_module_scope_new().
  *  New in version 2.30.  
  */
export declare enum IOModuleScopeFlags {
  /** No module scan flags */
  NONE = 0,
  /** When using this scope to load or scan modules, automatically block a modules which has the same base basename as previously loaded module. */
  BLOCK_DUPLICATES = 1,
}
/**
  * Gio.MountOperationResult is returned as a result when a request for information is send by the mounting operation. 
  */
export declare enum MountOperationResult {
  /** The request was fulfilled and the user specified data is now available */
  HANDLED = 0,
  /** The user requested the mount operation to be aborted */
  ABORTED = 1,
  /** The request was unhandled (i.e. not implemented) */
  UNHANDLED = 2,
}
/**
  * The host’s network connectivity state, as reported by Gio.NetworkMonitor.
  *  New in version 2.44.  
  */
export declare enum NetworkConnectivity {
  /** The host is not configured with a route to the Internet; it may or may not be connected to a local network. */
  LOCAL = 1,
  /** The host is connected to a network, but does not appear to be able to reach the full Internet, perhaps due to upstream network problems. */
  LIMITED = 2,
  /** The host is behind a captive portal and cannot reach the full Internet. */
  PORTAL = 3,
  /** The host is connected to a network, and appears to be able to reach the full Internet. */
  FULL = 4,
}
/**
  * Priority levels for Gio.Notifications.
  *  New in version 2.42.  
  */
export declare enum NotificationPriority {
  /** the default priority, to be used for the majority of notifications (for example email messages, software updates, completed download/sync operations) */
  NORMAL = 0,
  /** for notifications that do not require immediate attention - typically used for contextual background information, such as contact birthdays or local weather */
  LOW = 1,
  /** for events that require more attention, usually because responses are time-sensitive (for example chat and SMS messages or alarms) */
  HIGH = 2,
  /** for urgent notifications, or notifications that require a response in a short space of time (for example phone calls or emergency warnings) */
  URGENT = 3,
}
/**
  * Gio.PasswordSave is used to indicate the lifespan of a saved password. 
  */
export declare enum PasswordSave {
  /** never save a password. */
  NEVER = 0,
  /** save a password for the session. */
  FOR_SESSION = 1,
  /** save a password permanently. */
  PERMANENTLY = 2,
}
/**
  * An error code used with %G_RESOLVER_ERROR in a GLib.Error returned from a Gio.Resolver routine.
  *  New in version 2.22.  
  */
export declare enum ResolverError {
  /** the requested name/address/service was not found */
  NOT_FOUND = 0,
  /** the requested information could not be looked up due to a network error or similar problem */
  TEMPORARY_FAILURE = 1,
  /** unknown error */
  INTERNAL = 2,
}
/**
  * The type of record that Gio.Resolver.lookup_records() or Gio.Resolver.lookup_records_async() should retrieve. The records are returned as lists of GLib.Variant tuples. Each record type has different values in the variant tuples returned.
  *  New in version 2.34.  
  */
export declare enum ResolverRecordType {
  /** lookup DNS SRV records for a domain */
  SRV = 1,
  /** lookup DNS MX records for a domain */
  MX = 2,
  /** lookup DNS TXT records for a name */
  TXT = 3,
  /** lookup DNS SOA records for a zone */
  SOA = 4,
  /** lookup DNS NS records for a domain */
  NS = 5,
}
/**
  * An error code used with %G_RESOURCE_ERROR in a GLib.Error returned from a Gio.Resource routine.
  *  New in version 2.32.  
  */
export declare enum ResourceError {
  /** no file was found at the requested path */
  NOT_FOUND = 0,
  /** unknown error */
  INTERNAL = 1,
}
/**
  * Describes an event occurring on a Gio.SocketClient. See the Gio.SocketClient ::event signal for more details.
  *  New in version 2.32.  
  */
export declare enum SocketClientEvent {
  /** The client is doing a DNS lookup. */
  RESOLVING = 0,
  /** The client has completed a DNS lookup. */
  RESOLVED = 1,
  /** The client is connecting to a remote host (either a proxy or the destination server). */
  CONNECTING = 2,
  /** The client has connected to a remote host. */
  CONNECTED = 3,
  /** The client is negotiating with a proxy to connect to the destination server. */
  PROXY_NEGOTIATING = 4,
  /** The client has negotiated with the proxy server. */
  PROXY_NEGOTIATED = 5,
  /** The client is performing a TLS handshake. */
  TLS_HANDSHAKING = 6,
  /** The client has performed a TLS handshake. */
  TLS_HANDSHAKED = 7,
  /** The client is done with a particular Gio.SocketConnectable. */
  COMPLETE = 8,
}
/**
  * The protocol family of a Gio.SocketAddress. (These values are identical to the system defines %AF_INET, %AF_INET6 and %AF_UNIX, if available.)
  *  New in version 2.22.  
  */
export declare enum SocketFamily {
  /** no address family */
  INVALID = 0,
  /** the UNIX domain family */
  UNIX = 1,
  /** the IPv6 family */
  IPV6 = 10,
  /** the IPv4 family */
  IPV4 = 2,
}
/**
  * Describes an event occurring on a Gio.SocketListener. See the Gio.SocketListener ::event signal for more details.
  *  New in version 2.46.  
  */
export declare enum SocketListenerEvent {
  /** The listener is about to bind a socket. */
  BINDING = 0,
  /** The listener has bound a socket. */
  BOUND = 1,
  /** The listener is about to start listening on this socket. */
  LISTENING = 2,
  /** The listener is now listening on this socket. */
  LISTENED = 3,
}
/**
  * A protocol identifier is specified when creating a Gio.Socket, which is a family/type specific identifier, where 0 means the default protocol for the particular family/type.
  *  New in version 2.22.  
  */
export declare enum SocketProtocol {
  /** The protocol type is unknown */
  UNKNOWN = -1,
  /** The default protocol for the family/type */
  DEFAULT = 0,
  /** SCTP over IP */
  SCTP = 132,
  /** UDP over IP */
  UDP = 17,
  /** TCP over IP */
  TCP = 6,
}
/**
  * Flags used when creating a Gio.Socket. Some protocols may not implement all the socket types.
  *  New in version 2.22.  
  */
export declare enum SocketType {
  /** Type unknown or wrong */
  INVALID = 0,
  /** Reliable connection-based byte streams (e.g. TCP). */
  STREAM = 1,
  /** Connectionless, unreliable datagram passing. (e.g. UDP) */
  DATAGRAM = 2,
  /** Reliable connection-based passing of datagrams of fixed maximum length (e.g. SCTP). */
  SEQPACKET = 3,
}
/**
  * The client authentication mode for a Gio.TlsServerConnection.
  *  New in version 2.28.  
  */
export declare enum TlsAuthenticationMode {
  /** client authentication not required */
  NONE = 0,
  /** client authentication is requested */
  REQUESTED = 1,
  /** client authentication is required */
  REQUIRED = 2,
}
/**
  * Flags for Gio.TlsInteraction.request_certificate(), Gio.TlsInteraction.request_certificate_async(), and Gio.TlsInteraction.invoke_request_certificate().
  *  New in version 2.40.  
  */
export declare enum TlsCertificateRequestFlags {
  /** No flags */
  NONE = 0,
}
/**
  * Flags for Gio.TlsDatabase.lookup_certificate_for_handle(), Gio.TlsDatabase.lookup_certificate_issuer(), and Gio.TlsDatabase.lookup_certificates_issued_by().
  *  New in version 2.30.  
  */
export declare enum TlsDatabaseLookupFlags {
  /** No lookup flags */
  NONE = 0,
  /** Restrict lookup to certificates that have a private key. */
  KEYPAIR = 1,
}
/**
  * An error code used with %G_TLS_ERROR in a GLib.Error returned from a TLS-related routine.
  *  New in version 2.28.  
  */
export declare enum TlsError {
  /** No TLS provider is available */
  UNAVAILABLE = 0,
  /** Miscellaneous TLS error */
  MISC = 1,
  /** A certificate could not be parsed */
  BAD_CERTIFICATE = 2,
  /** The TLS handshake failed because the peer does not seem to be a TLS server. */
  NOT_TLS = 3,
  /** The TLS handshake failed because the peer’s certificate was not acceptable. */
  HANDSHAKE = 4,
  /** The TLS handshake failed because the server requested a client-side certificate, but none was provided. See Gio.TlsConnection.set_certificate(). */
  CERTIFICATE_REQUIRED = 5,
  /** The TLS connection was closed without proper notice, which may indicate an attack. See Gio.TlsConnection.set_require_close_notify(). */
  EOF = 6,
}
/**
  * Gio.TlsInteractionResult is returned by various functions in Gio.TlsInteraction when finishing an interaction request.
  *  New in version 2.30.  
  */
export declare enum TlsInteractionResult {
  /** The interaction was unhandled (i.e. not implemented). */
  UNHANDLED = 0,
  /** The interaction completed, and resulting data is available. */
  HANDLED = 1,
  /** The interaction has failed, or was cancelled. and the operation should be aborted. */
  FAILED = 2,
}
/**
  * When to allow rehandshaking. See Gio.TlsConnection.set_rehandshake_mode().
  *  New in version 2.28.  
  */
export declare enum TlsRehandshakeMode {
  /** Never allow rehandshaking */
  NEVER = 0,
  /** Allow safe rehandshaking only */
  SAFELY = 1,
  /** Allow unsafe rehandshaking */
  UNSAFELY = 2,
}
/**
  * The type of name used by a Gio.UnixSocketAddress. Gio.UnixSocketAddressType.PATH indicates a traditional unix domain socket bound to a filesystem path. Gio.UnixSocketAddressType.ANONYMOUS indicates a socket not bound to any name (eg, a client-side socket, or a socket created with socketpair()).
  *  New in version 2.26.  
  */
export declare enum UnixSocketAddressType {
  /** invalid */
  INVALID = 0,
  /** anonymous */
  ANONYMOUS = 1,
  /** a filesystem path */
  PATH = 2,
  /** an abstract name */
  ABSTRACT = 3,
  /** an abstract name, 0-padded to the full length of a unix socket name */
  ABSTRACT_PADDED = 4,
}
/**
  * Used to select the type of data format to use for Gio.ZlibDecompressor and Gio.ZlibCompressor.
  *  New in version 2.24.  
  */
export declare enum ZlibCompressorFormat {
  /** deflate compression with zlib header */
  ZLIB = 0,
  /** gzip file format */
  GZIP = 1,
  /** deflate compression with no header */
  RAW = 2,
}
