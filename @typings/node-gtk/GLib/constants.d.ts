export declare const ANALYZER_ANALYZING = 1;
/**
  * A good size for a buffer to be passed into GLib.ascii_dtostr(). It is guaranteed to be enough for all output of that function on systems with 64bit IEEE-compatible doubles. The typical usage would be something like: char buf[G_ASCII_DTOSTR_BUF_SIZE];  fprintf (out, "value=%s\n", g_ascii_dtostr (buf, sizeof (buf), value));    
  */
export declare const ASCII_DTOSTR_BUF_SIZE = 39;
/**
  * Specifies one of the possible types of byte order. See #G_BYTE_ORDER.  
  */
export declare const BIG_ENDIAN = 4321;
/**
  * The set of uppercase ASCII alphabet characters. Used for specifying valid identifier characters in GLib.ScannerConfig.  
  */
export declare const CSET_A_2_Z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/**
  * The set of ASCII digits. Used for specifying valid identifier characters in GLib.ScannerConfig.  
  */
export declare const CSET_DIGITS = '0123456789';
/**
  * The set of lowercase ASCII alphabet characters. Used for specifying valid identifier characters in GLib.ScannerConfig.  
  */
export declare const CSET_a_2_z = 'abcdefghijklmnopqrstuvwxyz';
/**
  * A bitmask that restricts the possible flags passed to GLib.datalist_set_flags(). Passing a flags value where flags & ~:obj:GLib.DATALIST_FLAGS_MASK != 0 is an error.  
  */
export declare const DATALIST_FLAGS_MASK = 3;
/**
  * Represents an invalid #GDateDay.  
  */
export declare const DATE_BAD_DAY = 0;
/**
  * Represents an invalid Julian day number.  
  */
export declare const DATE_BAD_JULIAN = 0;
/**
  * Represents an invalid year.  
  */
export declare const DATE_BAD_YEAR = 0;
/**
  * The directory separator character. This is ‘/’ on UNIX machines and ‘' under Windows.  
  */
export declare const DIR_SEPARATOR = 47;
/**
  * The directory separator as a string. This is “/” on UNIX machines and “" under Windows.  
  */
export declare const DIR_SEPARATOR_S = '/';
/**
  * The base of natural logarithms.  
  */
export declare const E = 2.718282;
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #gint16. It is a string literal, but doesn’t include the percent-sign, such that you can add precision and length modifiers between percent-sign and conversion specifier. gint16 in; gint32 out; sscanf ("42", "%" G_GINT16_FORMAT, &in) out = in * 1000; g_print ("%" G_GINT32_FORMAT, out);    
  */
export declare const GINT16_FORMAT = 'hi';
/**
  * The platform dependent length modifier for conversion specifiers for scanning and printing values of type #gint16 or #guint16. It is a string literal, but doesn’t include the percent-sign, such that you can add precision and length modifiers between percent-sign and conversion specifier and append a conversion specifier. The following example prints “0x7b”; gint16 value = 123; g_print ("%#" G_GINT16_MODIFIER "x", value);    New in version 2.4.   
  */
export declare const GINT16_MODIFIER = 'h';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #gint32. See also GLib.GINT16_FORMAT.  
  */
export declare const GINT32_FORMAT = 'i';
/**
  * The platform dependent length modifier for conversion specifiers for scanning and printing values of type #gint32 or #guint32. It is a string literal. See also GLib.GINT16_MODIFIER.  New in version 2.4.   
  */
export declare const GINT32_MODIFIER = '';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #gint64. See also GLib.GINT16_FORMAT. Some platforms do not support scanning and printing 64-bit integers, even though the types are supported. On such platforms GLib.GINT64_FORMAT is not defined. Note that scanf() may not support 64-bit integers, even if GLib.GINT64_FORMAT is defined. Due to its weak error handling, scanf() is not recommended for parsing anyway; consider using GLib.ascii_strtoull() instead.  
  */
export declare const GINT64_FORMAT = 'li';
/**
  * The platform dependent length modifier for conversion specifiers for scanning and printing values of type #gint64 or #guint64. It is a string literal. Some platforms do not support printing 64-bit integers, even though the types are supported. On such platforms GLib.GINT64_MODIFIER is not defined.  New in version 2.4.   
  */
export declare const GINT64_MODIFIER = 'l';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #gintptr.  New in version 2.22.   
  */
export declare const GINTPTR_FORMAT = 'li';
/**
  * The platform dependent length modifier for conversion specifiers for scanning and printing values of type #gintptr or #guintptr. It is a string literal.  New in version 2.22.   
  */
export declare const GINTPTR_MODIFIER = 'l';
/**
  * Expands to “” on all modern compilers, and to  __FUNCTION__ on gcc version 2.x. Don’t use it.  Deprecated since version 2.16: Use G_STRFUNC() instead   
  */
export declare const GNUC_FUNCTION = '';
/**
  * Expands to “” on all modern compilers, and to __PRETTY_FUNCTION__ on gcc version 2.x. Don’t use it.  Deprecated since version 2.16: Use G_STRFUNC() instead   
  */
export declare const GNUC_PRETTY_FUNCTION = '';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #gsize. See also GLib.GINT16_FORMAT.  New in version 2.6.   
  */
export declare const GSIZE_FORMAT = 'lu';
/**
  * The platform dependent length modifier for conversion specifiers for scanning and printing values of type #gsize. It is a string literal.  New in version 2.6.   
  */
export declare const GSIZE_MODIFIER = 'l';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #gssize. See also GLib.GINT16_FORMAT.  New in version 2.6.   
  */
export declare const GSSIZE_FORMAT = 'li';
/**
  * The platform dependent length modifier for conversion specifiers for scanning and printing values of type #gssize. It is a string literal.  New in version 2.6.   
  */
export declare const GSSIZE_MODIFIER = 'l';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #guint16. See also GLib.GINT16_FORMAT  
  */
export declare const GUINT16_FORMAT = 'hu';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #guint32. See also GLib.GINT16_FORMAT.  
  */
export declare const GUINT32_FORMAT = 'u';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #guint64. See also GLib.GINT16_FORMAT. Some platforms do not support scanning and printing 64-bit integers, even though the types are supported. On such platforms GLib.GUINT64_FORMAT is not defined.  Note that scanf() may not support 64-bit integers, even if GLib.GINT64_FORMAT is defined. Due to its weak error handling, scanf() is not recommended for parsing anyway; consider using GLib.ascii_strtoull() instead.  
  */
export declare const GUINT64_FORMAT = 'lu';
/**
  * This is the platform dependent conversion specifier for scanning and printing values of type #guintptr.  New in version 2.22.   
  */
export declare const GUINTPTR_FORMAT = 'lu';
export declare const HAVE_GINT64 = 1;
export declare const HAVE_GNUC_VARARGS = 1;
/**
  * Defined to 1 if gcc-style visibility handling is supported.  
  */
export declare const HAVE_GNUC_VISIBILITY = 1;
export declare const HAVE_GROWING_STACK = 0;
export declare const HAVE_ISO_VARARGS = 1;
/**
  * The position of the first bit which is not reserved for internal use be the GLib.Hook implementation, i.e. 1 << G_HOOK_FLAG_USER_SHIFT is the first bit which can be used for application-defined flags.  
  */
export declare const HOOK_FLAG_USER_SHIFT = 4;
/**
  * The bias by which exponents in double-precision floats are offset.  
  */
export declare const IEEE754_DOUBLE_BIAS = 1023;
/**
  * The bias by which exponents in single-precision floats are offset.  
  */
export declare const IEEE754_FLOAT_BIAS = 127;
export declare const KEY_FILE_DESKTOP_ACTION_GROUP_PREFIX = 'Desktop Action';
/**
  * The name of the main group of a desktop entry file, as defined in the Desktop Entry Specification. Consult the specification for more details about the meanings of the keys below.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_GROUP = 'Desktop Entry';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string list giving the available application actions.  New in version 2.38.   
  */
export declare const KEY_FILE_DESKTOP_KEY_ACTIONS = 'Actions';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a list of strings giving the categories in which the desktop entry should be shown in a menu.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_CATEGORIES = 'Categories';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a localized string giving the tooltip for the desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_COMMENT = 'Comment';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a boolean set to true if the application is D-Bus activatable.  New in version 2.38.   
  */
export declare const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE = 'DBusActivatable';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string giving the command line to execute. It is only valid for desktop entries with the Application type.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_EXEC = 'Exec';
export declare const KEY_FILE_DESKTOP_KEY_FULLNAME = 'X-GNOME-FullName';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a localized string giving the generic name of the desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_GENERIC_NAME = 'GenericName';
export declare const KEY_FILE_DESKTOP_KEY_GETTEXT_DOMAIN = 'X-GNOME-Gettext-Domain';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a boolean stating whether the desktop entry has been deleted by the user.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_HIDDEN = 'Hidden';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a localized string giving the name of the icon to be displayed for the desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_ICON = 'Icon';
export declare const KEY_FILE_DESKTOP_KEY_KEYWORDS = 'Keywords';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a list of strings giving the MIME types supported by this desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_MIME_TYPE = 'MimeType';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a localized string giving the specific name of the desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_NAME = 'Name';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a list of strings identifying the environments that should not display the desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN = 'NotShowIn';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a boolean stating whether the desktop entry should be shown in menus.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_NO_DISPLAY = 'NoDisplay';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a list of strings identifying the environments that should display the desktop entry.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN = 'OnlyShowIn';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string containing the working directory to run the program in. It is only valid for desktop entries with the Application type.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_PATH = 'Path';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a boolean stating whether the application supports the Startup Notification Protocol Specification.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY = 'StartupNotify';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is string identifying the WM class or name hint of a window that the application will create, which can be used to emulate Startup Notification with older applications.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS = 'StartupWMClass';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a boolean stating whether the program should be run in a terminal window. It is only valid for desktop entries with the Application type.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_TERMINAL = 'Terminal';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string giving the file name of a binary on disk used to determine if the program is actually installed. It is only valid for desktop entries with the Application type.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_TRY_EXEC = 'TryExec';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string giving the type of the desktop entry. Usually GLib.KEY_FILE_DESKTOP_TYPE_APPLICATION, GLib.KEY_FILE_DESKTOP_TYPE_LINK, or GLib.KEY_FILE_DESKTOP_TYPE_DIRECTORY.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_TYPE = 'Type';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string giving the URL to access. It is only valid for desktop entries with the Link type.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_URL = 'URL';
/**
  * A key under GLib.KEY_FILE_DESKTOP_GROUP, whose value is a string giving the version of the Desktop Entry Specification used for the desktop entry file.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_KEY_VERSION = 'Version';
/**
  * The value of the GLib.KEY_FILE_DESKTOP_KEY_TYPE, key for desktop entries representing applications.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_TYPE_APPLICATION = 'Application';
/**
  * The value of the GLib.KEY_FILE_DESKTOP_KEY_TYPE, key for desktop entries representing directories.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_TYPE_DIRECTORY = 'Directory';
/**
  * The value of the GLib.KEY_FILE_DESKTOP_KEY_TYPE, key for desktop entries representing links to documents.  New in version 2.14.   
  */
export declare const KEY_FILE_DESKTOP_TYPE_LINK = 'Link';
/**
  * Specifies one of the possible types of byte order. See #G_BYTE_ORDER.  
  */
export declare const LITTLE_ENDIAN = 1234;
/**
  * The natural logarithm of 10.  
  */
export declare const LN10 = 2.302585;
/**
  * The natural logarithm of 2.  
  */
export declare const LN2 = 0.693147;
/**
  * Multiplying the base 2 exponent by this number yields the base 10 exponent.  
  */
export declare const LOG_2_BASE_10 = 0.30103;
/**
  * Defines the log domain. See Log Domains. Libraries should define this so that any messages which they log can be differentiated from messages from other libraries and application code. But be careful not to define it in any public header files. Log domains must be unique, and it is recommended that they are the application or library name, optionally followed by a hyphen and a sub-domain name. For example, bloatpad or bloatpad-io. If undefined, it defaults to the default None (or "") log domain; this is not advisable, as it cannot be filtered against using the G_MESSAGES_DEBUG environment variable. For example, GTK+ uses this in its Makefile.am : AM_CPPFLAGS = -DG_LOG_DOMAIN=\"Gtk\" Applications can choose to leave it as the default None (or "") domain. However, defining the domain offers the same advantages as above.  
  */
export declare const LOG_DOMAIN = 0;
/**
  * GLib log levels that are considered fatal by default. This is not used if structured logging is enabled; see Using Structured Logging.  
  */
export declare const LOG_FATAL_MASK = 5;
/**
  * Log levels below 1<<GLib.LOG_LEVEL_USER_SHIFT are used by GLib. Higher bits can be used for user-defined log levels.  
  */
export declare const LOG_LEVEL_USER_SHIFT = 8;
/**
  * The major version number of the GLib library. Like #glib_major_version, but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const MAJOR_VERSION = 2;
export declare const MAXDOUBLE = 1.7976931348623157e+308;
export declare const MAXFLOAT = 3.4028234663852886e+38;
export declare const MAXINT = 2147483647;
/**
  * The maximum value which can be held in a #gint16.  New in version 2.4.   
  */
export declare const MAXINT16 = 32767;
/**
  * The maximum value which can be held in a #gint32.  New in version 2.4.   
  */
export declare const MAXINT32 = 2147483647;
/**
  * The maximum value which can be held in a #gint64.  
  */
export declare const MAXINT64 = 9223372036854775807;
/**
  * The maximum value which can be held in a #gint8.  New in version 2.4.   
  */
export declare const MAXINT8 = 127;
export declare const MAXLONG = 9223372036854775807;
export declare const MAXOFFSET = 9223372036854775807;
export declare const MAXSHORT = 32767;
export declare const MAXSIZE = 18446744073709551615;
export declare const MAXSSIZE = 9223372036854775807;
export declare const MAXUINT = 4294967295;
/**
  * The maximum value which can be held in a #guint16.  New in version 2.4.   
  */
export declare const MAXUINT16 = 65535;
/**
  * The maximum value which can be held in a #guint32.  New in version 2.4.   
  */
export declare const MAXUINT32 = 4294967295;
/**
  * The maximum value which can be held in a #guint64.  
  */
export declare const MAXUINT64 = 18446744073709551615;
/**
  * The maximum value which can be held in a #guint8.  New in version 2.4.   
  */
export declare const MAXUINT8 = 255;
export declare const MAXULONG = 18446744073709551615;
export declare const MAXUSHORT = 65535;
/**
  * The micro version number of the GLib library. Like #gtk_micro_version, but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const MICRO_VERSION = 2;
export declare const MINDOUBLE = 2.2250738585072014e-308;
export declare const MINFLOAT = 1.1754943508222875e-38;
export declare const MININT = -2147483648;
/**
  * The minimum value which can be held in a #gint16.  New in version 2.4.   
  */
export declare const MININT16 = -32768;
/**
  * The minimum value which can be held in a #gint32.  New in version 2.4.   
  */
export declare const MININT32 = -2147483648;
/**
  * The minimum value which can be held in a #gint64.  
  */
export declare const MININT64 = -9223372036854775808;
/**
  * The minimum value which can be held in a #gint8.  New in version 2.4.   
  */
export declare const MININT8 = -128;
export declare const MINLONG = -9223372036854775808;
export declare const MINOFFSET = -9223372036854775808;
/**
  * The minor version number of the GLib library. Like #gtk_minor_version, but from the headers used at application compile time, rather than from the library linked against at application run time.  
  */
export declare const MINOR_VERSION = 58;
export declare const MINSHORT = -32768;
export declare const MINSSIZE = -9223372036854775808;
export declare const MODULE_SUFFIX = 'so';
/**
  * If a long option in the main group has this name, it is not treated as a regular option. Instead it collects all non-option arguments which would otherwise be left in argv. The option must be of type GLib.OptionArg.CALLBACK, GLib.OptionArg.STRING_ARRAY or GLib.OptionArg.FILENAME_ARRAY. Using GLib.OPTION_REMAINING instead of simply scanning argv for leftover arguments has the advantage that GOption takes care of necessary encoding conversions for strings or filenames.  New in version 2.6.   
  */
export declare const OPTION_REMAINING = '';
/**
  * Specifies one of the possible types of byte order (currently unused). See #G_BYTE_ORDER.  
  */
export declare const PDP_ENDIAN = 3412;
/**
  * The value of pi (ratio of circle’s circumference to its diameter).  
  */
export declare const PI = 3.141593;
/**
  * A format specifier that can be used in printf()-style format strings when printing a #GPid.  New in version 2.50.   
  */
export declare const PID_FORMAT = 'i';
/**
  * Pi divided by 2.  
  */
export declare const PI_2 = 1.570796;
/**
  * Pi divided by 4.  
  */
export declare const PI_4 = 0.785398;
/**
  * A format specifier that can be used in printf()-style format strings when printing the fd member of a GLib.PollFD.  
  */
export declare const POLLFD_FORMAT = '%d';
/**
  * Use this for default priority event sources. In GLib this priority is used when adding timeout functions with GLib.timeout_add(). In GDK this priority is used for events from the X server.  
  */
export declare const PRIORITY_DEFAULT = 0;
/**
  * Use this for default priority idle functions. In GLib this priority is used when adding idle functions with GLib.idle_add().  
  */
export declare const PRIORITY_DEFAULT_IDLE = 200;
/**
  * Use this for high priority event sources. It is not used within GLib or GTK+.  
  */
export declare const PRIORITY_HIGH = -100;
/**
  * Use this for high priority idle functions. GTK+ uses GLib.PRIORITY_HIGH_IDLE + 10 for resizing operations, and GLib.PRIORITY_HIGH_IDLE + 20 for redrawing operations. (This is done to ensure that any pending resizes are processed before any pending redraws, so that widgets are not redrawn twice unnecessarily.)  
  */
export declare const PRIORITY_HIGH_IDLE = 100;
/**
  * Use this for very low priority background tasks. It is not used within GLib or GTK+.  
  */
export declare const PRIORITY_LOW = 300;
/**
  * The search path separator character. This is ‘:’ on UNIX machines and ‘;’ under Windows.  
  */
export declare const SEARCHPATH_SEPARATOR = 58;
/**
  * The search path separator as a string. This is “:” on UNIX machines and “;” under Windows.  
  */
export declare const SEARCHPATH_SEPARATOR_S = ':';
export declare const SIZEOF_LONG = 8;
export declare const SIZEOF_SIZE_T = 8;
export declare const SIZEOF_SSIZE_T = 8;
export declare const SIZEOF_VOID_P = 8;
/**
  * Use this macro as the return value of a GLib.SourceFunc to leave the GLib.Source in the main loop.  New in version 2.32.   
  */
export declare const SOURCE_CONTINUE = 1;
/**
  * Use this macro as the return value of a GLib.SourceFunc to remove the GLib.Source from the main loop.  New in version 2.32.   
  */
export declare const SOURCE_REMOVE = 0;
/**
  * The square root of two.  
  */
export declare const SQRT2 = 1.414214;
/**
  * The standard delimiters, used in GLib.strdelimit().  
  */
export declare const STR_DELIMITERS = '_-|> <.';
export declare const SYSDEF_AF_INET = 2;
export declare const SYSDEF_AF_INET6 = 10;
export declare const SYSDEF_AF_UNIX = 1;
export declare const SYSDEF_MSG_DONTROUTE = 4;
export declare const SYSDEF_MSG_OOB = 1;
export declare const SYSDEF_MSG_PEEK = 2;
/**
  * Evaluates to a time span of one day.  New in version 2.26.   
  */
export declare const TIME_SPAN_DAY = 86400000000;
/**
  * Evaluates to a time span of one hour.  New in version 2.26.   
  */
export declare const TIME_SPAN_HOUR = 3600000000;
/**
  * Evaluates to a time span of one millisecond.  New in version 2.26.   
  */
export declare const TIME_SPAN_MILLISECOND = 1000;
/**
  * Evaluates to a time span of one minute.  New in version 2.26.   
  */
export declare const TIME_SPAN_MINUTE = 60000000;
/**
  * Evaluates to a time span of one second.  New in version 2.26.   
  */
export declare const TIME_SPAN_SECOND = 1000000;
/**
  * The maximum length (in codepoints) of a compatibility or canonical decomposition of a single Unicode character. This is as defined by Unicode 6.1.  New in version 2.32.   
  */
export declare const UNICHAR_MAX_DECOMPOSITION_LENGTH = 18;
/**
  * Generic delimiters characters as defined in RFC 3986. Includes “:/?#[]@”.  
  */
export declare const URI_RESERVED_CHARS_GENERIC_DELIMITERS = ':/?#[]@';
/**
  * Number of microseconds in one second (1 million). This macro is provided for code readability.  
  */
export declare const USEC_PER_SEC = 1000000;
export declare const VA_COPY_AS_ARRAY = 1;
/**
  * A macro that should be defined by the user prior to including the glib.h header. The definition should be one of the predefined GLib version macros: %GLIB_VERSION_2_26, %GLIB_VERSION_2_28,… This macro defines the earliest version of GLib that the package is required to be able to compile against. If the compiler is configured to warn about the use of deprecated functions, then using functions that were deprecated in version GLib.VERSION_MIN_REQUIRED or earlier will cause warnings (but using functions deprecated in later releases will not).  New in version 2.32.   
  */
export declare const VERSION_MIN_REQUIRED = 2;
export declare const WIN32_MSG_HANDLE = 19981206;
