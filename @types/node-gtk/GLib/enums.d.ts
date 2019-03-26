export declare enum AsciiType {
  ALNUM = 1,
  XDIGIT = 1024,
  PUNCT = 128,
  GRAPH = 16,
  ALPHA = 2,
  SPACE = 256,
  LOWER = 32,
  CNTRL = 4,
  UPPER = 512,
  PRINT = 64,
  DIGIT = 8,
}
/**
  * A test to perform on a file using GLib.file_test(). 
  */
export declare enum FileTest {
  /** True if the file is a regular file (not a directory). Note that this test will also return True if the tested file is a symlink to a regular file. */
  IS_REGULAR = 1,
  /** True if the file exists. It may or may not be a regular file. */
  EXISTS = 16,
  /** True if the file is a symlink. */
  IS_SYMLINK = 2,
  /** True if the file is a directory. */
  IS_DIR = 4,
  /** True if the file is executable. */
  IS_EXECUTABLE = 8,
}
/**
  * Base type for all flags types 
  */
export declare enum Flags {
}
/**
  * Flags to modify the format of the string returned by GLib.format_size_full(). 
  */
export declare enum FormatSizeFlags {
  /** behave the same as GLib.format_size() */
  DEFAULT = 0,
  /** include the exact number of bytes as part of the returned string.  For example, “45.6 kB (45,612 bytes)”. */
  LONG_FORMAT = 1,
  /** use IEC (base 1024) units with “KiB”-style suffixes. IEC units should only be used for reporting things with a strong “power of 2” basis, like RAM sizes or RAID stripe sizes. Network and storage sizes should be reported in the normal SI units. */
  IEC_UNITS = 2,
  /** set the size as a quantity in bits, rather than bytes, and return units in bits. For example, ‘Mb’ rather than ‘MB’. */
  BITS = 4,
}
/**
  * Flags used internally in the GLib.Hook implementation. 
  */
export declare enum HookFlagMask {
  /** set if the hook has not been destroyed */
  ACTIVE = 1,
  /** A mask covering all bits reserved for hook flags; see GLib.HOOK_FLAG_USER_SHIFT */
  MASK = 15,
  /** set if the hook is currently being run */
  IN_CALL = 2,
}
/**
  * A bitwise combination representing a condition to watch for on an event source. 
  */
export declare enum IOCondition {
  /** There is data to read. */
  IN = 1,
  /** Hung up (the connection has been broken, usually for pipes and sockets). */
  HUP = 16,
  /** There is urgent data to read. */
  PRI = 2,
  /** Invalid request. The file descriptor is not open. */
  NVAL = 32,
  /** Data can be written (without blocking). */
  OUT = 4,
  /** Error condition. */
  ERR = 8,
}
/**
  * Specifies properties of a GLib.IOChannel. Some of the flags can only be read with GLib.IOChannel.get_flags(), but not changed with GLib.IOChannel.set_flags(). 
  */
export declare enum IOFlags {
  /** turns on append mode, corresponds to %O_APPEND (see the documentation of the UNIX open() syscall) */
  APPEND = 1,
  /** indicates that the io channel is seekable, i.e. that GLib.IOChannel.seek_position() can be used on it. This flag cannot be changed. */
  IS_SEEKABLE = 16,
  /** turns on nonblocking mode, corresponds to %O_NONBLOCK/%O_NDELAY (see the documentation of the UNIX open() syscall) */
  NONBLOCK = 2,
  /** the mask of the flags that the user can modify with GLib.IOChannel.set_flags() */
  SET_MASK = 3,
  /** the mask of the flags that are returned from GLib.IOChannel.get_flags() */
  GET_MASK = 31,
  /** the mask that specifies all the valid flags. */
  MASK = 31,
  /** indicates that the io channel is readable. This flag cannot be changed. */
  IS_READABLE = 4,
  /** indicates that the io channel is writable. This flag cannot be changed. */
  IS_WRITABLE = 8,
  /** a misspelled version of GLib.IOFlags.IS_WRITABLE that existed before the spelling was fixed in GLib 2.30. It is kept here for compatibility reasons. Deprecated since 2.30 */
  IS_WRITEABLE = 8,
}
/**
  * Flags which influence the parsing. 
  */
export declare enum KeyFileFlags {
  /** No flags, default behaviour */
  NONE = 0,
  /** Use this flag if you plan to write the (possibly modified) contents of the key file back to a file; otherwise all comments will be lost when the key file is written back. */
  KEEP_COMMENTS = 1,
  /** Use this flag if you plan to write the (possibly modified) contents of the key file back to a file; otherwise only the translations for the current language will be written back. */
  KEEP_TRANSLATIONS = 2,
}
/**
  * Flags specifying the level of log messages. 
  */
export declare enum LogLevelFlags {
  /** a mask including all log levels */
  LEVEL_MASK = -4,
  /** internal flag */
  FLAG_RECURSION = 1,
  /** log level for debug messages, see g_debug() */
  LEVEL_DEBUG = 128,
  /** log level for warnings, see g_warning() */
  LEVEL_WARNING = 16,
  /** internal flag */
  FLAG_FATAL = 2,
  /** log level for messages, see g_message() */
  LEVEL_MESSAGE = 32,
  /** log level for errors, see g_error(). This level is also used for messages produced by g_assert(). */
  LEVEL_ERROR = 4,
  /** log level for informational messages, see g_info() */
  LEVEL_INFO = 64,
  /** log level for critical warning messages, see g_critical(). This level is also used for messages produced by g_return_if_fail() and g_return_val_if_fail(). */
  LEVEL_CRITICAL = 8,
}
/**
  * A mixed enumerated type and flags field. You must specify one type (string, strdup, boolean, tristate).  Additionally, you may  optionally bitwise OR the type with the flag GLib.MarkupCollectType.OPTIONAL. 
  */
export declare enum MarkupCollectType {
  /** used to terminate the list of attributes to collect */
  INVALID = 0,
  /** collect the string pointer directly from the attribute_values[] array. Expects a parameter of type (const str **). If GLib.MarkupCollectType.OPTIONAL is specified and the attribute isn’t present then the pointer will be set to None */
  STRING = 1,
  /** as with GLib.MarkupCollectType.STRING, but expects a parameter of type (str **) and GLib.strdup()s the returned pointer. The pointer must be freed with GLib.free() */
  STRDUP = 2,
  /** expects a parameter of type (bool *) and parses the attribute value as a boolean. Sets False if the attribute isn’t present. Valid boolean values consist of (case-insensitive) “false”, “f”, “no”, “n”, “0” and “true”, “t”, “yes”, “y”, “1” */
  BOOLEAN = 3,
  /** as with GLib.MarkupCollectType.BOOLEAN, but in the case of a missing attribute a value is set that compares equal to neither False nor True GLib.MarkupCollectType.OPTIONAL is implied */
  TRISTATE = 4,
  /** can be bitwise ORed with the other fields. If present, allows the attribute not to appear. A default value is set depending on what value type is used */
  OPTIONAL = 65536,
}
/**
  * Flags that affect the behaviour of the parser. 
  */
export declare enum MarkupParseFlags {
  /** flag you should not use */
  DO_NOT_USE_THIS_UNSUPPORTED_FLAG = 1,
  /** When this flag is set, CDATA marked sections are not passed literally to the passthrough function of the parser. Instead, the content of the section (without the </literal> and <literal>) is passed to the text function. This flag was added in GLib 2.12 */
  TREAT_CDATA_AS_TEXT = 2,
  /** Normally errors caught by GMarkup itself have line/column information prefixed to them to let the caller know the location of the error. When this flag is set the location information is also prefixed to errors generated by the GLib.MarkupParser implementation functions */
  PREFIX_ERROR_POSITION = 4,
  /** Ignore (don’t report) qualified attributes and tags, along with their contents.  A qualified attribute or tag is one that contains ‘:’ in its name (ie: is in another namespace).
    *  New in version 2.40.  */
  IGNORE_QUALIFIED = 8,
}
/**
  * Flags which modify individual options. 
  */
export declare enum OptionFlags {
  /** No flags.
    *  New in version 2.42.  */
  NONE = 0,
  /** The option doesn’t appear in --help output. */
  HIDDEN = 1,
  /** For options of the GLib.OptionArg.CALLBACK kind, this flag indicates that the argument should be passed to the callback in the GLib filename encoding rather than UTF-8.
    *  New in version 2.8.  */
  FILENAME = 16,
  /** The option appears in the main section of the --help output, even if it is defined in a group. */
  IN_MAIN = 2,
  /** For options of the GLib.OptionArg.CALLBACK kind, this flag indicates that the argument supply is optional. If no argument is given then data of GLib.OptionParseFunc will be set to None.
    *  New in version 2.8.  */
  OPTIONAL_ARG = 32,
  /** For options of the GLib.OptionArg.NONE kind, this flag indicates that the sense of the option is reversed. */
  REVERSE = 4,
  /** This flag turns off the automatic conflict resolution which prefixes long option names with groupname- if there is a conflict. This option should only be used in situations where aliasing is necessary to model some legacy commandline interface. It is not safe to use this option, unless all option groups are under your direct control.
    *  New in version 2.8.  */
  NOALIAS = 64,
  /** For options of the GLib.OptionArg.CALLBACK kind, this flag indicates that the callback does not take any argument (like a GLib.OptionArg.NONE option).
    *  New in version 2.8.  */
  NO_ARG = 8,
}
/**
  * Flags specifying compile-time options.
  *  New in version 2.14.  
  */
export declare enum RegexCompileFlags {
  /** Letters in the pattern match both upper- and lowercase letters. This option can be changed within a pattern by a “(?i)” option setting. */
  CASELESS = 1,
  /** Usually any newline character or character sequence is recognized. If this option is set, the only recognized newline character is ‘\r’. */
  NEWLINE_CR = 1048576,
  /** The pattern is forced to be “anchored”, that is, it is constrained to match only at the first matching point in the string that is being searched. This effect can also be achieved by appropriate constructs in the pattern itself such as the “^” metacharacter. */
  ANCHORED = 16,
  /** By default, GLib.Regex treats the strings as consisting of a single line of characters (even if it actually contains newlines). The “start of line” metacharacter (“^”) matches only at the start of the string, while the “end of line” metacharacter (“$”) matches only at the end of the string, or before a terminating newline (unless GLib.RegexCompileFlags.DOLLAR_ENDONLY is set). When GLib.RegexCompileFlags.MULTILINE is set, the “start of line” and “end of line” constructs match immediately following or immediately before any newline in the string, respectively, as well as at the very start and end. This can be changed within a pattern by a “(?m)” option setting. */
  MULTILINE = 2,
  /** Usually strings must be valid UTF-8 strings, using this flag they are considered as a raw sequence of bytes. */
  RAW = 2048,
  /** Usually any newline character or character sequence is recognized. If this option is set, the only recognized newline character is ‘\n’. */
  NEWLINE_LF = 2097152,
  /** Limits an unanchored pattern to match before (or at) the first newline.
    *  New in version 2.34.  */
  FIRSTLINE = 262144,
  /** Usually any newline character or character sequence is recognized. If this option is set, the only recognized newline character sequence is ‘\r\n’. */
  NEWLINE_CRLF = 3145728,
  /** A dollar metacharacter (“$”) in the pattern matches only at the end of the string. Without this option, a dollar also matches immediately before the final character if it is a newline (but not before any other newlines). This option is ignored if GLib.RegexCompileFlags.MULTILINE is set. */
  DOLLAR_ENDONLY = 32,
  /** Changes behaviour so that it is compatible with JavaScript rather than PCRE.
    *  New in version 2.34.  */
  JAVASCRIPT_COMPAT = 33554432,
  /** A dot metacharacter (“.”) in the pattern matches all characters, including newlines. Without it, newlines are excluded. This option can be changed within a pattern by a (“?s”) option setting. */
  DOTALL = 4,
  /** Disables the use of numbered capturing parentheses in the pattern. Any opening parenthesis that is not followed by “?” behaves as if it were followed by “?:” but named parentheses can still be used for capturing (and they acquire numbers in the usual way). */
  NO_AUTO_CAPTURE = 4096,
  /** Inverts the “greediness” of the quantifiers so that they are not greedy by default, but become greedy if followed by “?”. It can also be set by a “(?U)” option setting within the pattern. */
  UNGREEDY = 512,
  /** Names used to identify capturing subpatterns need not be unique. This can be helpful for certain types of pattern when it is known that only one instance of the named subpattern can ever be matched. */
  DUPNAMES = 524288,
  /** Usually any newline character or character sequence is recognized. If this option is set, the only recognized newline character sequences are ‘\r’, ‘\n’, and ‘\r\n’.
    *  New in version 2.34.  */
  NEWLINE_ANYCRLF = 5242880,
  /** Whitespace data characters in the pattern are totally ignored except when escaped or inside a character class. Whitespace does not include the VT character (code 11). In addition, characters between an unescaped “#” outside a character class and the next newline character, inclusive, are also ignored. This can be changed within a pattern by a “(?x)” option setting. */
  EXTENDED = 8,
  /** Optimize the regular expression. If the pattern will be used many times, then it may be worth the effort to optimize it to improve the speed of matches. */
  OPTIMIZE = 8192,
  /** Usually any newline character or character sequence is recognised. If this option is set, then “\R” only recognizes the newline characters ‘\r’, ‘\n’ and ‘\r\n’.
    *  New in version 2.34.  */
  BSR_ANYCRLF = 8388608,
}
/**
  * Flags specifying match-time options.
  *  New in version 2.14.  
  */
export declare enum RegexMatchFlags {
  /** An empty string is not considered to be a valid match if this option is set. If there are alternatives in the pattern, they are tried. If all the alternatives match the empty string, the entire match fails. For example, if the pattern “a?b?” is applied to a string not beginning with “a” or “b”, it matches the empty string at the start of the string. With this flag set, this match is not valid, so GLib.Regex searches further into the string for occurrences of “a” or “b”. */
  NOTEMPTY = 1024,
  /** Overrides the newline definition set when creating a new GLib.Regex, setting the ‘\r’ character as line terminator. */
  NEWLINE_CR = 1048576,
  /** Specifies that first character of the string is not the beginning of a line, so the circumflex metacharacter should not match before it. Setting this without GLib.RegexCompileFlags.MULTILINE (at compile time) causes circumflex never to match. This option affects only the behaviour of the circumflex metacharacter, it does not affect “\A”. */
  NOTBOL = 128,
  /** Turns on the partial matching feature. In contrast to to GLib.RegexMatchFlags.PARTIAL_SOFT, this stops matching as soon as a partial match is found, without continuing to search for a possible complete match. See GLib.MatchInfo.is_partial_match() for more information.
    *  New in version 2.34.  */
  PARTIAL_HARD = 134217728,
  /** The pattern is forced to be “anchored”, that is, it is constrained to match only at the first matching point in the string that is being searched. This effect can also be achieved by appropriate constructs in the pattern itself such as the “^” metacharacter. */
  ANCHORED = 16,
  /** Overrides the newline definition for “\R” set when creating a new GLib.Regex; any Unicode newline character or character sequence are recognized as a newline by “\R”. These are ‘\r’, ‘\n’ and ‘\rn’, and the single characters U+000B LINE TABULATION, U+000C FORM FEED (FF), U+0085 NEXT LINE (NEL), U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR.
    *  New in version 2.34.  */
  BSR_ANY = 16777216,
  /** Overrides the newline definition set when creating a new GLib.Regex, setting the ‘\n’ character as line terminator. */
  NEWLINE_LF = 2097152,
  /** Specifies that the end of the subject string is not the end of a line, so the dollar metacharacter should not match it nor (except in multiline mode) a newline immediately before it. Setting this without GLib.RegexCompileFlags.MULTILINE (at compile time) causes dollar never to match. This option affects only the behaviour of the dollar metacharacter, it does not affect “\Z” or “\z”. */
  NOTEOL = 256,
  /** Like GLib.RegexMatchFlags.NOTEMPTY, but only applied to the start of the matched string. For anchored patterns this can only happen for pattern containing “\K”.
    *  New in version 2.34.  */
  NOTEMPTY_ATSTART = 268435456,
  /** Overrides the newline definition set when creating a new GLib.Regex, setting the ‘\r\n’ characters sequence as line terminator. */
  NEWLINE_CRLF = 3145728,
  /** Turns on the partial matching feature, for more documentation on partial matching see GLib.MatchInfo.is_partial_match(). */
  PARTIAL = 32768,
  /** An alias for GLib.RegexMatchFlags.PARTIAL.
    *  New in version 2.34.  */
  PARTIAL_SOFT = 32768,
  /** Overrides the newline definition set when creating a new GLib.Regex, any Unicode newline sequence is recognised as a newline. These are ‘\r’, ‘\n’ and ‘\rn’, and the single characters U+000B LINE TABULATION, U+000C FORM FEED (FF), U+0085 NEXT LINE (NEL), U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR. */
  NEWLINE_ANY = 4194304,
  /** Overrides the newline definition set when creating a new GLib.Regex; any ‘\r’, ‘\n’, or ‘\r\n’ character sequence is recognized as a newline.
    *  New in version 2.34.  */
  NEWLINE_ANYCRLF = 5242880,
  /** Overrides the newline definition for “\R” set when creating a new GLib.Regex; only ‘\r’, ‘\n’, or ‘\r\n’ character sequences are recognized as a newline by “\R”.
    *  New in version 2.34.  */
  BSR_ANYCRLF = 8388608,
}
/**
  * Flags passed to GLib.spawn_sync(), GLib.spawn_async() and GLib.spawn_async_with_pipes(). 
  */
export declare enum SpawnFlags {
  /** no flags, default behaviour */
  DEFAULT = 0,
  /** the parent’s open file descriptors will be inherited by the child; otherwise all descriptors except stdin, stdout and stderr will be closed before calling exec() in the child. */
  LEAVE_DESCRIPTORS_OPEN = 1,
  /** if argv[0] is not an abolute path, it will be looked for in the PATH from the passed child environment.
    *  New in version 2.34.  */
  SEARCH_PATH_FROM_ENVP = 128,
  /** the child’s standard error will be discarded. */
  STDERR_TO_DEV_NULL = 16,
  /** the child will not be automatically reaped; you must use GLib.child_watch_add() yourself (or call waitpid() or handle SIGCHLD yourself), or the child will become a zombie. */
  DO_NOT_REAP_CHILD = 2,
  /** create all pipes with the O_CLOEXEC flag set.
    *  New in version 2.40.  */
  CLOEXEC_PIPES = 256,
  /** the child will inherit the parent’s standard input (by default, the child’s standard input is attached to /dev/null). */
  CHILD_INHERITS_STDIN = 32,
  /** argv[0] need not be an absolute path, it will be looked for in the user’s PATH. */
  SEARCH_PATH = 4,
  /** the first element of argv is the file to execute, while the remaining elements are the actual argument vector to pass to the file. Normally GLib.spawn_async_with_pipes() uses argv[0] as the file to execute, and passes all of argv to the child. */
  FILE_AND_ARGV_ZERO = 64,
  /** the child’s standard output will be discarded, instead of going to the same location as the parent’s standard output. */
  STDOUT_TO_DEV_NULL = 8,
}
/**
  * Flags to pass to GLib.test_trap_subprocess() to control input and output. 
  */
export declare enum TestSubprocessFlags {
  /** If this flag is given, the child process will inherit the parent’s stdin. Otherwise, the child’s stdin is redirected to /dev/null. */
  STDIN = 1,
  /** If this flag is given, the child process will inherit the parent’s stdout. Otherwise, the child’s stdout will not be visible, but it will be captured to allow later tests with g_test_trap_assert_stdout(). */
  STDOUT = 2,
  /** If this flag is given, the child process will inherit the parent’s stderr. Otherwise, the child’s stderr will not be visible, but it will be captured to allow later tests with g_test_trap_assert_stderr(). */
  STDERR = 4,
}
/**
  * Test traps are guards around forked tests. These flags determine what traps to set.
  *  Deprecated since version ???: GLib.TestTrapFlags is used only with GLib.test_trap_fork(), which is deprecated. GLib.test_trap_subprocess() uses GLib.TestSubprocessFlags.  
  */
export declare enum TestTrapFlags {
  /** Redirect stdout of the test child to /dev/null so it cannot be observed on the console during test runs. The actual output is still captured though to allow later tests with g_test_trap_assert_stdout(). */
  SILENCE_STDOUT = 128,
  /** Redirect stderr of the test child to /dev/null so it cannot be observed on the console during test runs. The actual output is still captured though to allow later tests with g_test_trap_assert_stderr(). */
  SILENCE_STDERR = 256,
  /** If this flag is given, stdin of the child process is shared with stdin of its parent process. It is redirected to /dev/null otherwise. */
  INHERIT_STDIN = 512,
}
/**
  * Specifies which nodes are visited during several of the tree functions, including g_node_traverse() and g_node_find(). 
  */
export declare enum TraverseFlags {
  /** identical to GLib.TraverseFlags.LEAVES. */
  LEAFS = 1,
  /** only leaf nodes should be visited. This name has been introduced in 2.6, for older version use GLib.TraverseFlags.LEAFS. */
  LEAVES = 1,
  /** identical to GLib.TraverseFlags.NON_LEAVES. */
  NON_LEAFS = 2,
  /** only non-leaf nodes should be visited. This name has been introduced in 2.6, for older version use GLib.TraverseFlags.NON_LEAFS. */
  NON_LEAVES = 2,
  /** all nodes should be visited. */
  ALL = 3,
  /** a mask of all traverse flags. */
  MASK = 3,
}
/**
  * Error codes returned by bookmark file parsing. 
  */
export declare enum BookmarkFileError {
  /** URI was ill-formed */
  INVALID_URI = 0,
  /** a requested field was not found */
  INVALID_VALUE = 1,
  /** a requested application did not register a bookmark */
  APP_NOT_REGISTERED = 2,
  /** a requested URI was not found */
  URI_NOT_FOUND = 3,
  /** document was ill formed */
  READ = 4,
  /** the text being parsed was in an unknown encoding */
  UNKNOWN_ENCODING = 5,
  /** an error occurred while writing */
  WRITE = 6,
  /** requested file was not found */
  FILE_NOT_FOUND = 7,
}
/**
  * The hashing algorithm to be used by GLib.Checksum when performing the digest of some data.
  *  New in version 2.16.  
  */
export declare enum ChecksumType {
  /** Use the MD5 hashing algorithm */
  MD5 = 0,
  /** Use the SHA-1 hashing algorithm */
  SHA1 = 1,
  /** Use the SHA-256 hashing algorithm */
  SHA256 = 2,
  /** Use the SHA-512 hashing algorithm (Since: 2.36) */
  SHA512 = 3,
  /** Use the SHA-384 hashing algorithm (Since: 2.51) */
  SHA384 = 4,
}
/**
  * Error codes returned by character set conversion routines. 
  */
export declare enum ConvertError {
  /** Conversion between the requested character sets is not supported. */
  NO_CONVERSION = 0,
  /** Invalid byte sequence in conversion input; or the character sequence could not be represented in the target character set. */
  ILLEGAL_SEQUENCE = 1,
  /** Conversion failed for some reason. */
  FAILED = 2,
  /** Partial character sequence at end of input. */
  PARTIAL_INPUT = 3,
  /** URI is invalid. */
  BAD_URI = 4,
  /** Pathname is not an absolute path. */
  NOT_ABSOLUTE_PATH = 5,
  /** No memory available.
    *  New in version 2.40.  */
  NO_MEMORY = 6,
  /** An embedded NUL character is present in conversion output where a NUL-terminated string is expected.
    *  New in version 2.56.  */
  EMBEDDED_NUL = 7,
}
/**
  * This enumeration isn’t used in the API, but may be useful if you need to mark a number as a day, month, or year. 
  */
export declare enum DateDMY {
  /** a day */
  DAY = 0,
  /** a month */
  MONTH = 1,
  /** a year */
  YEAR = 2,
}
/**
  * Enumeration representing a month; values are GLib.DateMonth.JANUARY, GLib.DateMonth.FEBRUARY, etc. GLib.DateMonth.BAD_MONTH is the invalid value. 
  */
export declare enum DateMonth {
  /** invalid value */
  BAD_MONTH = 0,
  /** January */
  JANUARY = 1,
  /** October */
  OCTOBER = 10,
  /** November */
  NOVEMBER = 11,
  /** December */
  DECEMBER = 12,
  /** February */
  FEBRUARY = 2,
  /** March */
  MARCH = 3,
  /** April */
  APRIL = 4,
  /** May */
  MAY = 5,
  /** June */
  JUNE = 6,
  /** July */
  JULY = 7,
  /** August */
  AUGUST = 8,
  /** September */
  SEPTEMBER = 9,
}
/**
  * Enumeration representing a day of the week; GLib.DateWeekday.MONDAY, GLib.DateWeekday.TUESDAY, etc. GLib.DateWeekday.BAD_WEEKDAY is an invalid weekday. 
  */
export declare enum DateWeekday {
  /** invalid value */
  BAD_WEEKDAY = 0,
  /** Monday */
  MONDAY = 1,
  /** Tuesday */
  TUESDAY = 2,
  /** Wednesday */
  WEDNESDAY = 3,
  /** Thursday */
  THURSDAY = 4,
  /** Friday */
  FRIDAY = 5,
  /** Saturday */
  SATURDAY = 6,
  /** Sunday */
  SUNDAY = 7,
}
/**
  * Base type for all enum types 
  */
export declare enum Enum {
}
/**
  * The possible errors, used in the v_error field of GLib.TokenValue, when the token is a GLib.TokenType.ERROR. 
  */
export declare enum ErrorType {
  /** unknown error */
  UNKNOWN = 0,
  /** unexpected end of file */
  UNEXP_EOF = 1,
  /** unterminated string constant */
  UNEXP_EOF_IN_STRING = 2,
  /** unterminated comment */
  UNEXP_EOF_IN_COMMENT = 3,
  /** non-digit character in a number */
  NON_DIGIT_IN_CONST = 4,
  /** digit beyond radix in a number */
  DIGIT_RADIX = 5,
  /** non-decimal floating point number */
  FLOAT_RADIX = 6,
  /** malformed floating point number */
  FLOAT_MALFORMED = 7,
}
/**
  * Values corresponding to errno codes returned from file operations on UNIX. Unlike errno codes, GLib.FileError values are available on all systems, even Windows. The exact meaning of each code depends on what sort of file operation you were performing; the UNIX documentation gives more details. The following error code descriptions come from the GNU C Library manual, and are under the copyright of that manual. 
  */
export declare enum FileError {
  /** Operation not permitted; only the owner of the file (or other resource) or processes with special privileges can perform the operation. */
  EXIST = 0,
  /** File is a directory; you cannot open a directory for writing, or create or remove hard links to it. */
  ISDIR = 1,
  /** You passed in a pointer to bad memory. (GLib won’t reliably return this, don’t pass in pointers to bad memory.) */
  FAULT = 10,
  /** Too many levels of symbolic links were encountered in looking up a file name. This often indicates a cycle of symbolic links. */
  LOOP = 11,
  /** No space left on device; write operation on a file failed because the disk is full. */
  NOSPC = 12,
  /** No memory available. The system cannot allocate more virtual memory because its capacity is full. */
  NOMEM = 13,
  /** The current process has too many files open and can’t open any more. Duplicate descriptors do count toward this limit. */
  MFILE = 14,
  /** There are too many distinct file openings in the entire system. */
  NFILE = 15,
  /** Bad file descriptor; for example, I/O on a descriptor that has been closed or reading from a descriptor open only for writing (or vice versa). */
  BADF = 16,
  /** Invalid argument. This is used to indicate various kinds of problems with passing the wrong argument to a library function. */
  INVAL = 17,
  /** Broken pipe; there is no process reading from the other end of a pipe. Every library function that returns this error code also generates a ‘SIGPIPE’ signal; this signal terminates the program if not handled or blocked. Thus, your program will never actually see this code unless it has handled or blocked ‘SIGPIPE’. */
  PIPE = 18,
  /** Resource temporarily unavailable; the call might work if you try again later. */
  AGAIN = 19,
  /** Permission denied; the file permissions do not allow the attempted operation. */
  ACCES = 2,
  /** Interrupted function call; an asynchronous signal occurred and prevented completion of the call. When this happens, you should try the call again. */
  INTR = 20,
  /** Input/output error; usually used for physical read or write errors. i.e. the disk or other physical device hardware is returning errors. */
  IO = 21,
  /** Operation not permitted; only the owner of the file (or other resource) or processes with special privileges can perform the operation. */
  PERM = 22,
  /** Function not implemented; this indicates that the system is missing some functionality. */
  NOSYS = 23,
  /** Does not correspond to a UNIX error code; this is the standard “failed for unspecified reason” error code present in all GLib.Error error code enumerations. Returned if no specific code applies. */
  FAILED = 24,
  /** Filename too long. */
  NAMETOOLONG = 3,
  /** No such file or directory. This is a “file doesn’t exist” error for ordinary files that are referenced in contexts where they are expected to already exist. */
  NOENT = 4,
  /** A file that isn’t a directory was specified when a directory is required. */
  NOTDIR = 5,
  /** No such device or address. The system tried to use the device represented by a file you specified, and it couldn’t find the device. This can mean that the device file was installed incorrectly, or that the physical device is missing or not correctly attached to the computer. */
  NXIO = 6,
  /** The underlying file system of the specified file does not support memory mapping. */
  NODEV = 7,
  /** The directory containing the new link can’t be modified because it’s on a read-only file system. */
  ROFS = 8,
  /** Text file busy. */
  TXTBSY = 9,
}
/**
  * Error codes returned by GLib.IOChannel operations. 
  */
export declare enum IOChannelError {
  /** File too large. */
  FBIG = 0,
  /** Invalid argument. */
  INVAL = 1,
  /** IO error. */
  IO = 2,
  /** File is a directory. */
  ISDIR = 3,
  /** No space left on device. */
  NOSPC = 4,
  /** No such device or address. */
  NXIO = 5,
  /** Value too large for defined datatype. */
  OVERFLOW = 6,
  /** Broken pipe. */
  PIPE = 7,
  /** Some other error. */
  FAILED = 8,
}
/**
  * GLib.IOError is only used by the deprecated functions GLib.IOChannel.read(), GLib.IOChannel.write(), and GLib.IOChannel.seek(). 
  */
export declare enum IOError {
  /** no error */
  NONE = 0,
  /** an EAGAIN error occurred */
  AGAIN = 1,
  /** an EINVAL error occurred */
  INVAL = 2,
  /** another error occurred */
  UNKNOWN = 3,
}
/**
  * Stati returned by most of the GLib.IOFuncs functions. 
  */
export declare enum IOStatus {
  /** An error occurred. */
  ERROR = 0,
  /** Success. */
  NORMAL = 1,
  /** End of file. */
  EOF = 2,
  /** Resource temporarily unavailable. */
  AGAIN = 3,
}
/**
  * Error codes returned by key file parsing. 
  */
export declare enum KeyFileError {
  /** the text being parsed was in an unknown encoding */
  UNKNOWN_ENCODING = 0,
  /** document was ill-formed */
  PARSE = 1,
  /** the file was not found */
  NOT_FOUND = 2,
  /** a requested key was not found */
  KEY_NOT_FOUND = 3,
  /** a requested group was not found */
  GROUP_NOT_FOUND = 4,
  /** a value could not be parsed */
  INVALID_VALUE = 5,
}
/**
  * Return values from GLib.LogWriterFuncs to indicate whether the given log entry was successfully handled by the writer, or whether there was an error in handling it (and hence a fallback writer should be used).
  *  New in version 2.50.  
  */
export declare enum LogWriterOutput {
  /** Log writer could not handle the log entry. */
  UNHANDLED = 0,
  /** Log writer has handled the log entry. */
  HANDLED = 1,
}
/**
  * Error codes returned by markup parsing. 
  */
export declare enum MarkupError {
  /** text being parsed was not valid UTF-8 */
  BAD_UTF8 = 0,
  /** document contained nothing, or only whitespace */
  EMPTY = 1,
  /** document was ill-formed */
  PARSE = 2,
  /** error should be set by GLib.MarkupParser functions; element wasn’t known */
  UNKNOWN_ELEMENT = 3,
  /** error should be set by GLib.MarkupParser functions; attribute wasn’t known */
  UNKNOWN_ATTRIBUTE = 4,
  /** error should be set by GLib.MarkupParser functions; content was invalid */
  INVALID_CONTENT = 5,
  /** error should be set by GLib.MarkupParser functions; a required attribute was missing */
  MISSING_ATTRIBUTE = 6,
}
/**
  * Defines how a Unicode string is transformed in a canonical form, standardizing such issues as whether a character with an accent is represented as a base character and combining accent or as a single precomposed character. Unicode strings should generally be normalized before comparing them. 
  */
export declare enum NormalizeMode {
  /** standardize differences that do not affect the text content, such as the above-mentioned accent representation */
  DEFAULT = 0,
  /** another name for GLib.NormalizeMode.DEFAULT */
  NFD = 0,
  /** like GLib.NormalizeMode.DEFAULT, but with composed forms rather than a maximally decomposed form */
  DEFAULT_COMPOSE = 1,
  /** another name for GLib.NormalizeMode.DEFAULT_COMPOSE */
  NFC = 1,
  /** beyond GLib.NormalizeMode.DEFAULT also standardize the “compatibility” characters in Unicode, such as SUPERSCRIPT THREE to the standard forms (in this case DIGIT THREE). Formatting information may be lost but for most text operations such characters should be considered the same */
  ALL = 2,
  /** another name for GLib.NormalizeMode.ALL */
  NFKD = 2,
  /** like GLib.NormalizeMode.ALL, but with composed forms rather than a maximally decomposed form */
  ALL_COMPOSE = 3,
  /** another name for GLib.NormalizeMode.ALL_COMPOSE */
  NFKC = 3,
}
/**
  * Error codes returned by functions converting a string to a number.
  *  New in version 2.54.  
  */
export declare enum NumberParserError {
  /** String was not a valid number. */
  INVALID = 0,
  /** String was a number, but out of bounds. */
  OUT_OF_BOUNDS = 1,
}
/**
  * The possible statuses of a one-time initialization function controlled by a GLib.Once struct.
  *  New in version 2.4.  
  */
export declare enum OnceStatus {
  /** the function has not been called yet. */
  NOTCALLED = 0,
  /** the function call is currently in progress. */
  PROGRESS = 1,
  /** the function has been called. */
  READY = 2,
}
/**
  * The GLib.OptionArg enum values determine which type of extra argument the options expect to find. If an option expects an extra argument, it can be specified in several ways; with a short option: -x arg, with a long option: --name arg or combined in a single argument: --name=arg. 
  */
export declare enum OptionArg {
  /** No extra argument. This is useful for simple flags. */
  NONE = 0,
  /** The option takes a string argument. */
  STRING = 1,
  /** The option takes an integer argument. */
  INT = 2,
  /** The option provides a callback (of type GLib.OptionArgFunc) to parse the extra argument. */
  CALLBACK = 3,
  /** The option takes a filename as argument. */
  FILENAME = 4,
  /** The option takes a string argument, multiple uses of the option are collected into an array of strings. */
  STRING_ARRAY = 5,
  /** The option takes a filename as argument, multiple uses of the option are collected into an array of strings. */
  FILENAME_ARRAY = 6,
  /** The option takes a double argument. The argument can be formatted either for the user’s locale or for the “C” locale.
    *  New in version 2.12.  */
  DOUBLE = 7,
  /** The option takes a 64-bit integer. Like GLib.OptionArg.INT but for larger numbers. The number can be in decimal base, or in hexadecimal (when prefixed with 0x, for example, 0xffffffff).
    *  New in version 2.12.  */
  INT64 = 8,
}
/**
  * Error codes returned by option parsing. 
  */
export declare enum OptionError {
  /** An option was not known to the parser. This error will only be reported, if the parser hasn’t been instructed to ignore unknown options, see GLib.OptionContext.set_ignore_unknown_options(). */
  UNKNOWN_OPTION = 0,
  /** A value couldn’t be parsed. */
  BAD_VALUE = 1,
  /** A GLib.OptionArgFunc callback failed. */
  FAILED = 2,
}
/**
  * Error codes returned by regular expressions functions.
  *  New in version 2.14.  
  */
export declare enum RegexError {
  /** Compilation of the regular expression failed. */
  COMPILE = 0,
  /** Optimization of the regular expression failed. */
  OPTIMIZE = 1,
  /** “\” at end of pattern.
    *  New in version 2.16.  */
  STRAY_BACKSLASH = 101,
  /** “\c” at end of pattern.
    *  New in version 2.16.  */
  MISSING_CONTROL_CHAR = 102,
  /** Unrecognized character follows “\”.
    *  New in version 2.16.  */
  UNRECOGNIZED_ESCAPE = 103,
  /** Numbers out of order in “{}” quantifier.
    *  New in version 2.16.  */
  QUANTIFIERS_OUT_OF_ORDER = 104,
  /** Number too big in “{}” quantifier.
    *  New in version 2.16.  */
  QUANTIFIER_TOO_BIG = 105,
  /** Missing terminating “]” for character class.
    *  New in version 2.16.  */
  UNTERMINATED_CHARACTER_CLASS = 106,
  /** Invalid escape sequence in character class.
    *  New in version 2.16.  */
  INVALID_ESCAPE_IN_CHARACTER_CLASS = 107,
  /** Range out of order in character class.
    *  New in version 2.16.  */
  RANGE_OUT_OF_ORDER = 108,
  /** Nothing to repeat.
    *  New in version 2.16.  */
  NOTHING_TO_REPEAT = 109,
  /** Unrecognized character after “(?”, “(?<” or “(?P”.
    *  New in version 2.16.  */
  UNRECOGNIZED_CHARACTER = 112,
  /** POSIX named classes are supported only within a class.
    *  New in version 2.16.  */
  POSIX_NAMED_CLASS_OUTSIDE_CLASS = 113,
  /** Missing terminating “)” or “)” without opening “(“.
    *  New in version 2.16.  */
  UNMATCHED_PARENTHESIS = 114,
  /** Reference to non-existent subpattern.
    *  New in version 2.16.  */
  INEXISTENT_SUBPATTERN_REFERENCE = 115,
  /** Missing terminating “)” after comment.
    *  New in version 2.16.  */
  UNTERMINATED_COMMENT = 118,
  /** Regular expression too large.
    *  New in version 2.16.  */
  EXPRESSION_TOO_LARGE = 120,
  /** Failed to get memory.
    *  New in version 2.16.  */
  MEMORY_ERROR = 121,
  /** Lookbehind assertion is not fixed length.
    *  New in version 2.16.  */
  VARIABLE_LENGTH_LOOKBEHIND = 125,
  /** Malformed number or name after “(?(“.
    *  New in version 2.16.  */
  MALFORMED_CONDITION = 126,
  /** Conditional group contains more than two branches.
    *  New in version 2.16.  */
  TOO_MANY_CONDITIONAL_BRANCHES = 127,
  /** Assertion expected after “(?(“.
    *  New in version 2.16.  */
  ASSERTION_EXPECTED = 128,
  /** Unknown POSIX class name.
    *  New in version 2.16.  */
  UNKNOWN_POSIX_CLASS_NAME = 130,
  /** POSIX collating elements are not supported.
    *  New in version 2.16.  */
  POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED = 131,
  /** Character value in “\x{…}” sequence is too large.
    *  New in version 2.16.  */
  HEX_CODE_TOO_LARGE = 134,
  /** Invalid condition “(?(0)”.
    *  New in version 2.16.  */
  INVALID_CONDITION = 135,
  /** \C not allowed in lookbehind assertion.
    *  New in version 2.16.  */
  SINGLE_BYTE_MATCH_IN_LOOKBEHIND = 136,
  /** Recursive call could loop indefinitely.
    *  New in version 2.16.  */
  INFINITE_LOOP = 140,
  /** Missing terminator in subpattern name.
    *  New in version 2.16.  */
  MISSING_SUBPATTERN_NAME_TERMINATOR = 142,
  /** Two named subpatterns have the same name.
    *  New in version 2.16.  */
  DUPLICATE_SUBPATTERN_NAME = 143,
  /** Malformed “\P” or “\p” sequence.
    *  New in version 2.16.  */
  MALFORMED_PROPERTY = 146,
  /** Unknown property name after “\P” or “\p”.
    *  New in version 2.16.  */
  UNKNOWN_PROPERTY = 147,
  /** Subpattern name is too long (maximum 32 characters).
    *  New in version 2.16.  */
  SUBPATTERN_NAME_TOO_LONG = 148,
  /** Too many named subpatterns (maximum 10,000).
    *  New in version 2.16.  */
  TOO_MANY_SUBPATTERNS = 149,
  /** Octal value is greater than “\377”.
    *  New in version 2.16.  */
  INVALID_OCTAL_VALUE = 151,
  /** “DEFINE” group contains more than one branch.
    *  New in version 2.16.  */
  TOO_MANY_BRANCHES_IN_DEFINE = 154,
  /** Repeating a “DEFINE” group is not allowed. This error is never raised. Since: 2.16 Deprecated: 2.34 */
  DEFINE_REPETION = 155,
  /** Inconsistent newline options.
    *  New in version 2.16.  */
  INCONSISTENT_NEWLINE_OPTIONS = 156,
  /** “\g” is not followed by a braced, angle-bracketed, or quoted name or number, or by a plain number.
    *  New in version 2.16.  */
  MISSING_BACK_REFERENCE = 157,
  /** relative reference must not be zero.
    *  New in version 2.34.  */
  INVALID_RELATIVE_REFERENCE = 158,
  /** the backtracing control verb used does not allow an argument.
    *  New in version 2.34.  */
  BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN = 159,
  /** unknown backtracing control verb.
    *  New in version 2.34.  */
  UNKNOWN_BACKTRACKING_CONTROL_VERB = 160,
  /** number is too big in escape sequence.
    *  New in version 2.34.  */
  NUMBER_TOO_BIG = 161,
  /** Missing subpattern name.
    *  New in version 2.34.  */
  MISSING_SUBPATTERN_NAME = 162,
  /** Missing digit.
    *  New in version 2.34.  */
  MISSING_DIGIT = 163,
  /** In JavaScript compatibility mode, “[” is an invalid data character.
    *  New in version 2.34.  */
  INVALID_DATA_CHARACTER = 164,
  /** different names for subpatterns of the same number are not allowed.
    *  New in version 2.34.  */
  EXTRA_SUBPATTERN_NAME = 165,
  /** the backtracing control verb requires an argument.
    *  New in version 2.34.  */
  BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED = 166,
  /** “\c” must be followed by an ASCII character.
    *  New in version 2.34.  */
  INVALID_CONTROL_CHAR = 168,
  /** “\k” is not followed by a braced, angle-bracketed, or quoted name.
    *  New in version 2.34.  */
  MISSING_NAME = 169,
  /** “\N” is not supported in a class.
    *  New in version 2.34.  */
  NOT_SUPPORTED_IN_CLASS = 171,
  /** too many forward references.
    *  New in version 2.34.  */
  TOO_MANY_FORWARD_REFERENCES = 172,
  /** the name is too long in “(*MARK)”, “(*PRUNE)”, “(*SKIP)”, or “(*THEN)”.
    *  New in version 2.34.  */
  NAME_TOO_LONG = 175,
  /** the character value in the \u sequence is too large.
    *  New in version 2.34.  */
  CHARACTER_VALUE_TOO_LARGE = 176,
  /** Replacement failed due to an ill-formed replacement string. */
  REPLACE = 2,
  /** The match process failed. */
  MATCH = 3,
  /** Internal error of the regular expression engine.
    *  New in version 2.16.  */
  INTERNAL = 4,
}
/**
  * An enumeration specifying the base position for a GLib.IOChannel.seek_position() operation. 
  */
export declare enum SeekType {
  /** the current position in the file. */
  CUR = 0,
  /** the start of the file. */
  SET = 1,
  /** the end of the file. */
  END = 2,
}
/**
  * Error codes returned by shell functions. 
  */
export declare enum ShellError {
  /** Mismatched or otherwise mangled quoting. */
  BAD_QUOTING = 0,
  /** String to be parsed was empty. */
  EMPTY_STRING = 1,
  /** Some other error. */
  FAILED = 2,
}
export declare enum SliceConfig {
  ALWAYS_MALLOC = 1,
  BYPASS_MAGAZINES = 2,
  WORKING_SET_MSECS = 3,
  COLOR_INCREMENT = 4,
  CHUNK_SIZES = 5,
  CONTENTION_COUNTER = 6,
}
/**
  * Error codes returned by spawning processes. 
  */
export declare enum SpawnError {
  /** Fork failed due to lack of memory. */
  FORK = 0,
  /** Read or select on pipes failed. */
  READ = 1,
  /** execv() returned ENOTDIR */
  NOTDIR = 10,
  /** execv() returned ELOOP */
  LOOP = 11,
  /** execv() returned ETXTBUSY */
  TXTBUSY = 12,
  /** execv() returned EIO */
  IO = 13,
  /** execv() returned ENFILE */
  NFILE = 14,
  /** execv() returned EMFILE */
  MFILE = 15,
  /** execv() returned EINVAL */
  INVAL = 16,
  /** execv() returned EISDIR */
  ISDIR = 17,
  /** execv() returned ELIBBAD */
  LIBBAD = 18,
  /** Some other fatal failure, error->message should explain. */
  FAILED = 19,
  /** Changing to working directory failed. */
  CHDIR = 2,
  /** execv() returned EACCES */
  ACCES = 3,
  /** execv() returned EPERM */
  PERM = 4,
  '2BIG' = 5,
  /** execv() returned E2BIG */
  TOO_BIG = 5,
  /** deprecated alias for GLib.SpawnError.TOO_BIG */
  _2BIG = 5,
  /** execv() returned ENOEXEC */
  NOEXEC = 6,
  /** execv() returned ENAMETOOLONG */
  NAMETOOLONG = 7,
  /** execv() returned ENOENT */
  NOENT = 8,
  /** execv() returned ENOMEM */
  NOMEM = 9,
}
/**
  * The type of file to return the filename for, when used with g_test_build_filename().
  *  New in version 2.38.  
  */
export declare enum TestFileType {
  /** a file that was included in the distribution tarball */
  DIST = 0,
  /** a file that was built on the compiling machine */
  BUILT = 1,
}
export declare enum TestLogType {
  NONE = 0,
  ERROR = 1,
  START_SUITE = 10,
  STOP_SUITE = 11,
  START_BINARY = 2,
  LIST_CASE = 3,
  SKIP_CASE = 4,
  START_CASE = 5,
  STOP_CASE = 6,
  MIN_RESULT = 7,
  MAX_RESULT = 8,
  MESSAGE = 9,
}
export declare enum TestResult {
  SUCCESS = 0,
  SKIPPED = 1,
  FAILURE = 2,
  INCOMPLETE = 3,
}
/**
  * Possible errors of thread related functions. 
  */
export declare enum ThreadError {
  /** a thread couldn’t be created due to resource shortage. Try again later. */
  THREAD_ERROR_AGAIN = 0,
}
/**
  * Disambiguates a given time in two ways. 
  */
export declare enum TimeType {
  /** the time is in local standard time */
  STANDARD = 0,
  /** the time is in local daylight time */
  DAYLIGHT = 1,
  /** the time is in UTC */
  UNIVERSAL = 2,
}
/**
  * The possible types of token returned from each GLib.Scanner.get_next_token() call. 
  */
export declare enum TokenType {
  /** the end of the file */
  EOF = 0,
  /** a ‘{‘ character */
  LEFT_CURLY = 123,
  /** a ‘}’ character */
  RIGHT_CURLY = 125,
  /** not a token */
  NONE = 256,
  /** an error occurred */
  ERROR = 257,
  /** a character */
  CHAR = 258,
  /** a binary integer */
  BINARY = 259,
  /** an octal integer */
  OCTAL = 260,
  /** an integer */
  INT = 261,
  /** a hex integer */
  HEX = 262,
  /** a floating point number */
  FLOAT = 263,
  /** a string */
  STRING = 264,
  /** a symbol */
  SYMBOL = 265,
  /** an identifier */
  IDENTIFIER = 266,
  /** a null identifier */
  IDENTIFIER_NULL = 267,
  /** one line comment */
  COMMENT_SINGLE = 268,
  /** multi line comment */
  COMMENT_MULTI = 269,
  /** a ‘(‘ character */
  LEFT_PAREN = 40,
  /** a ‘)’ character */
  RIGHT_PAREN = 41,
  /** a ‘,’ character */
  COMMA = 44,
  /** a ‘=’ character */
  EQUAL_SIGN = 61,
  /** a ‘[‘ character */
  LEFT_BRACE = 91,
  /** a ‘]’ character */
  RIGHT_BRACE = 93,
}
/**
  * Specifies the type of traveral performed by g_tree_traverse(), g_node_traverse() and g_node_find(). The different orders are illustrated here: 
  */
export declare enum TraverseType {
  /** vists a node’s left child first, then the node itself, then its right child. This is the one to use if you want the output sorted according to the compare function. */
  IN_ORDER = 0,
  /** visits a node, then its children. */
  PRE_ORDER = 1,
  /** visits the node’s children, then the node itself. */
  POST_ORDER = 2,
  /** is not implemented for balanced binary trees. For n-ary trees, it vists the root node first, then its children, then its grandchildren, and so on. Note that this is less efficient than the other orders. */
  LEVEL_ORDER = 3,
}
/**
  * These are the possible line break classifications. 
  */
export declare enum UnicodeBreakType {
  /** Mandatory Break (BK) */
  MANDATORY = 0,
  /** Carriage Return (CR) */
  CARRIAGE_RETURN = 1,
  /** Break Opportunity After (BA) */
  AFTER = 10,
  /** Break Opportunity Before (BB) */
  BEFORE = 11,
  /** Break Opportunity Before and After (B2) */
  BEFORE_AND_AFTER = 12,
  /** Hyphen (HY) */
  HYPHEN = 13,
  /** Nonstarter (NS) */
  NON_STARTER = 14,
  /** Opening Punctuation (OP) */
  OPEN_PUNCTUATION = 15,
  /** Closing Punctuation (CL) */
  CLOSE_PUNCTUATION = 16,
  /** Ambiguous Quotation (QU) */
  QUOTATION = 17,
  /** Exclamation/Interrogation (EX) */
  EXCLAMATION = 18,
  /** Ideographic (ID) */
  IDEOGRAPHIC = 19,
  /** Line Feed (LF) */
  LINE_FEED = 2,
  /** Numeric (NU) */
  NUMERIC = 20,
  /** Infix Separator (Numeric) (IS) */
  INFIX_SEPARATOR = 21,
  /** Symbols Allowing Break After (SY) */
  SYMBOL = 22,
  /** Ordinary Alphabetic and Symbol Characters (AL) */
  ALPHABETIC = 23,
  /** Prefix (Numeric) (PR) */
  PREFIX = 24,
  /** Postfix (Numeric) (PO) */
  POSTFIX = 25,
  /** Complex Content Dependent (South East Asian) (SA) */
  COMPLEX_CONTEXT = 26,
  /** Ambiguous (Alphabetic or Ideographic) (AI) */
  AMBIGUOUS = 27,
  /** Unknown (XX) */
  UNKNOWN = 28,
  /** Next Line (NL) */
  NEXT_LINE = 29,
  /** Attached Characters and Combining Marks (CM) */
  COMBINING_MARK = 3,
  /** Word Joiner (WJ) */
  WORD_JOINER = 30,
  /** Hangul L Jamo (JL) */
  HANGUL_L_JAMO = 31,
  /** Hangul V Jamo (JV) */
  HANGUL_V_JAMO = 32,
  /** Hangul T Jamo (JT) */
  HANGUL_T_JAMO = 33,
  /** Hangul LV Syllable (H2) */
  HANGUL_LV_SYLLABLE = 34,
  /** Hangul LVT Syllable (H3) */
  HANGUL_LVT_SYLLABLE = 35,
  /** Closing Parenthesis (CP).
    *  New in version 2.28.  */
  CLOSE_PARANTHESIS = 36,
  /** Conditional Japanese Starter (CJ).
    *  New in version 2.32.  */
  CONDITIONAL_JAPANESE_STARTER = 37,
  /** Hebrew Letter (HL).
    *  New in version 2.32.  */
  HEBREW_LETTER = 38,
  /** Regional Indicator (RI).
    *  New in version 2.36.  */
  REGIONAL_INDICATOR = 39,
  /** Surrogates (SG) */
  SURROGATE = 4,
  /** Emoji Base (EB).
    *  New in version 2.50.  */
  EMOJI_BASE = 40,
  /** Emoji Modifier (EM).
    *  New in version 2.50.  */
  EMOJI_MODIFIER = 41,
  /** Zero Width Joiner (ZWJ).
    *  New in version 2.50.  */
  ZERO_WIDTH_JOINER = 42,
  /** Zero Width Space (ZW) */
  ZERO_WIDTH_SPACE = 5,
  /** Inseparable (IN) */
  INSEPARABLE = 6,
  /** Non-breaking (“Glue”) (GL) */
  NON_BREAKING_GLUE = 7,
  /** Contingent Break Opportunity (CB) */
  CONTINGENT = 8,
  /** Space (SP) */
  SPACE = 9,
}
/**
  * The GLib.UnicodeScript enumeration identifies different writing systems. The values correspond to the names as defined in the Unicode standard. The enumeration has been added in GLib 2.14, and is interchangeable with #PangoScript. 
  */
export declare enum UnicodeScript {
  /** a value never returned from GLib.unichar_get_script() */
  INVALID_CODE = -1,
  /** a character used by multiple different scripts */
  COMMON = 0,
  /** a mark glyph that takes its script from the base glyph to which it is attached */
  INHERITED = 1,
  /** Devanagari */
  DEVANAGARI = 10,
  /** Sharada.
    *  New in version 2.32.  */
  SHARADA = 100,
  /** Sora Sompeng.
    *  New in version 2.32.  */
  SORA_SOMPENG = 101,
  /** Takri.
    *  New in version 2.32.  */
  TAKRI = 102,
  /** Bassa.
    *  New in version 2.42.  */
  BASSA_VAH = 103,
  /** Caucasian Albanian.
    *  New in version 2.42.  */
  CAUCASIAN_ALBANIAN = 104,
  /** Duployan.
    *  New in version 2.42.  */
  DUPLOYAN = 105,
  /** Elbasan.
    *  New in version 2.42.  */
  ELBASAN = 106,
  /** Grantha.
    *  New in version 2.42.  */
  GRANTHA = 107,
  /** Kjohki.
    *  New in version 2.42.  */
  KHOJKI = 108,
  /** Khudawadi, Sindhi.
    *  New in version 2.42.  */
  KHUDAWADI = 109,
  /** Ethiopic */
  ETHIOPIC = 11,
  /** Linear A.
    *  New in version 2.42.  */
  LINEAR_A = 110,
  /** Mahajani.
    *  New in version 2.42.  */
  MAHAJANI = 111,
  /** Manichaean.
    *  New in version 2.42.  */
  MANICHAEAN = 112,
  /** Mende Kikakui.
    *  New in version 2.42.  */
  MENDE_KIKAKUI = 113,
  /** Modi.
    *  New in version 2.42.  */
  MODI = 114,
  /** Mro.
    *  New in version 2.42.  */
  MRO = 115,
  /** Nabataean.
    *  New in version 2.42.  */
  NABATAEAN = 116,
  /** Old North Arabian.
    *  New in version 2.42.  */
  OLD_NORTH_ARABIAN = 117,
  /** Old Permic.
    *  New in version 2.42.  */
  OLD_PERMIC = 118,
  /** Pahawh Hmong.
    *  New in version 2.42.  */
  PAHAWH_HMONG = 119,
  /** Georgian */
  GEORGIAN = 12,
  /** Palmyrene.
    *  New in version 2.42.  */
  PALMYRENE = 120,
  /** Pau Cin Hau.
    *  New in version 2.42.  */
  PAU_CIN_HAU = 121,
  /** Psalter Pahlavi.
    *  New in version 2.42.  */
  PSALTER_PAHLAVI = 122,
  /** Siddham.
    *  New in version 2.42.  */
  SIDDHAM = 123,
  /** Tirhuta.
    *  New in version 2.42.  */
  TIRHUTA = 124,
  /** Warang Citi.
    *  New in version 2.42.  */
  WARANG_CITI = 125,
  /** Ahom.
    *  New in version 2.48.  */
  AHOM = 126,
  /** Anatolian Hieroglyphs.
    *  New in version 2.48.  */
  ANATOLIAN_HIEROGLYPHS = 127,
  /** Hatran.
    *  New in version 2.48.  */
  HATRAN = 128,
  /** Multani.
    *  New in version 2.48.  */
  MULTANI = 129,
  /** Gothic */
  GOTHIC = 13,
  /** Old Hungarian.
    *  New in version 2.48.  */
  OLD_HUNGARIAN = 130,
  /** Signwriting.
    *  New in version 2.48.  */
  SIGNWRITING = 131,
  /** Adlam.
    *  New in version 2.50.  */
  ADLAM = 132,
  /** Bhaiksuki.
    *  New in version 2.50.  */
  BHAIKSUKI = 133,
  /** Marchen.
    *  New in version 2.50.  */
  MARCHEN = 134,
  /** Newa.
    *  New in version 2.50.  */
  NEWA = 135,
  /** Osage.
    *  New in version 2.50.  */
  OSAGE = 136,
  /** Tangut.
    *  New in version 2.50.  */
  TANGUT = 137,
  /** Masaram Gondi.
    *  New in version 2.54.  */
  MASARAM_GONDI = 138,
  /** Nushu.
    *  New in version 2.54.  */
  NUSHU = 139,
  /** Greek */
  GREEK = 14,
  /** Soyombo.
    *  New in version 2.54.  */
  SOYOMBO = 140,
  /** Zanabazar Square.
    *  New in version 2.54.  */
  ZANABAZAR_SQUARE = 141,
  /** Dogra.
    *  New in version 2.58.  */
  DOGRA = 142,
  /** Gunjala Gondi.
    *  New in version 2.58.  */
  GUNJALA_GONDI = 143,
  /** Hanifi Rohingya.
    *  New in version 2.58.  */
  HANIFI_ROHINGYA = 144,
  /** Makasar.
    *  New in version 2.58.  */
  MAKASAR = 145,
  /** Medefaidrin.
    *  New in version 2.58.  */
  MEDEFAIDRIN = 146,
  /** Old Sogdian.
    *  New in version 2.58.  */
  OLD_SOGDIAN = 147,
  /** Sogdian.
    *  New in version 2.58.  */
  SOGDIAN = 148,
  /** Gujarati */
  GUJARATI = 15,
  /** Gurmukhi */
  GURMUKHI = 16,
  /** Han */
  HAN = 17,
  /** Hangul */
  HANGUL = 18,
  /** Hebrew */
  HEBREW = 19,
  /** Arabic */
  ARABIC = 2,
  /** Hiragana */
  HIRAGANA = 20,
  /** Kannada */
  KANNADA = 21,
  /** Katakana */
  KATAKANA = 22,
  /** Khmer */
  KHMER = 23,
  /** Lao */
  LAO = 24,
  /** Latin */
  LATIN = 25,
  /** Malayalam */
  MALAYALAM = 26,
  /** Mongolian */
  MONGOLIAN = 27,
  /** Myanmar */
  MYANMAR = 28,
  /** Ogham */
  OGHAM = 29,
  /** Armenian */
  ARMENIAN = 3,
  /** Old Italic */
  OLD_ITALIC = 30,
  /** Oriya */
  ORIYA = 31,
  /** Runic */
  RUNIC = 32,
  /** Sinhala */
  SINHALA = 33,
  /** Syriac */
  SYRIAC = 34,
  /** Tamil */
  TAMIL = 35,
  /** Telugu */
  TELUGU = 36,
  /** Thaana */
  THAANA = 37,
  /** Thai */
  THAI = 38,
  /** Tibetan */
  TIBETAN = 39,
  /** Bengali */
  BENGALI = 4,
  /** Canadian Aboriginal */
  CANADIAN_ABORIGINAL = 40,
  /** Yi */
  YI = 41,
  /** Tagalog */
  TAGALOG = 42,
  /** Hanunoo */
  HANUNOO = 43,
  /** Buhid */
  BUHID = 44,
  /** Tagbanwa */
  TAGBANWA = 45,
  /** Braille */
  BRAILLE = 46,
  /** Cypriot */
  CYPRIOT = 47,
  /** Limbu */
  LIMBU = 48,
  /** Osmanya */
  OSMANYA = 49,
  /** Bopomofo */
  BOPOMOFO = 5,
  /** Shavian */
  SHAVIAN = 50,
  /** Linear B */
  LINEAR_B = 51,
  /** Tai Le */
  TAI_LE = 52,
  /** Ugaritic */
  UGARITIC = 53,
  /** New Tai Lue */
  NEW_TAI_LUE = 54,
  /** Buginese */
  BUGINESE = 55,
  /** Glagolitic */
  GLAGOLITIC = 56,
  /** Tifinagh */
  TIFINAGH = 57,
  /** Syloti Nagri */
  SYLOTI_NAGRI = 58,
  /** Old Persian */
  OLD_PERSIAN = 59,
  /** Cherokee */
  CHEROKEE = 6,
  /** Kharoshthi */
  KHAROSHTHI = 60,
  /** an unassigned code point */
  UNKNOWN = 61,
  /** Balinese */
  BALINESE = 62,
  /** Cuneiform */
  CUNEIFORM = 63,
  /** Phoenician */
  PHOENICIAN = 64,
  /** Phags-pa */
  PHAGS_PA = 65,
  /** N’Ko */
  NKO = 66,
  /** Kayah Li.
    *  New in version 2.16.3.  */
  KAYAH_LI = 67,
  /** Lepcha.
    *  New in version 2.16.3.  */
  LEPCHA = 68,
  /** Rejang.
    *  New in version 2.16.3.  */
  REJANG = 69,
  /** Coptic */
  COPTIC = 7,
  /** Sundanese.
    *  New in version 2.16.3.  */
  SUNDANESE = 70,
  /** Saurashtra.
    *  New in version 2.16.3.  */
  SAURASHTRA = 71,
  /** Cham.
    *  New in version 2.16.3.  */
  CHAM = 72,
  /** Ol Chiki.
    *  New in version 2.16.3.  */
  OL_CHIKI = 73,
  /** Vai.
    *  New in version 2.16.3.  */
  VAI = 74,
  /** Carian.
    *  New in version 2.16.3.  */
  CARIAN = 75,
  /** Lycian.
    *  New in version 2.16.3.  */
  LYCIAN = 76,
  /** Lydian.
    *  New in version 2.16.3.  */
  LYDIAN = 77,
  /** Avestan.
    *  New in version 2.26.  */
  AVESTAN = 78,
  /** Bamum.
    *  New in version 2.26.  */
  BAMUM = 79,
  /** Cyrillic */
  CYRILLIC = 8,
  /** Egyptian Hieroglpyhs.
    *  New in version 2.26.  */
  EGYPTIAN_HIEROGLYPHS = 80,
  /** Imperial Aramaic.
    *  New in version 2.26.  */
  IMPERIAL_ARAMAIC = 81,
  /** Inscriptional Pahlavi.
    *  New in version 2.26.  */
  INSCRIPTIONAL_PAHLAVI = 82,
  /** Inscriptional Parthian.
    *  New in version 2.26.  */
  INSCRIPTIONAL_PARTHIAN = 83,
  /** Javanese.
    *  New in version 2.26.  */
  JAVANESE = 84,
  /** Kaithi.
    *  New in version 2.26.  */
  KAITHI = 85,
  /** Lisu.
    *  New in version 2.26.  */
  LISU = 86,
  /** Meetei Mayek.
    *  New in version 2.26.  */
  MEETEI_MAYEK = 87,
  /** Old South Arabian.
    *  New in version 2.26.  */
  OLD_SOUTH_ARABIAN = 88,
  /** Old Turkic.
    *  New in version 2.28.  */
  OLD_TURKIC = 89,
  /** Deseret */
  DESERET = 9,
  /** Samaritan.
    *  New in version 2.26.  */
  SAMARITAN = 90,
  /** Tai Tham.
    *  New in version 2.26.  */
  TAI_THAM = 91,
  /** Tai Viet.
    *  New in version 2.26.  */
  TAI_VIET = 92,
  /** Batak.
    *  New in version 2.28.  */
  BATAK = 93,
  /** Brahmi.
    *  New in version 2.28.  */
  BRAHMI = 94,
  /** Mandaic.
    *  New in version 2.28.  */
  MANDAIC = 95,
  /** Chakma.
    *  New in version 2.32.  */
  CHAKMA = 96,
  /** Meroitic Cursive.
    *  New in version 2.32.  */
  MEROITIC_CURSIVE = 97,
  /** Meroitic Hieroglyphs.
    *  New in version 2.32.  */
  MEROITIC_HIEROGLYPHS = 98,
  /** Miao.
    *  New in version 2.32.  */
  MIAO = 99,
}
/**
  * These are the possible character classifications from the Unicode specification. See Unicode Character Database. 
  */
export declare enum UnicodeType {
  /** General category “Other, Control” (Cc) */
  CONTROL = 0,
  /** General category “Other, Format” (Cf) */
  FORMAT = 1,
  /** General category “Mark, Spacing” (Mc) */
  SPACING_MARK = 10,
  /** General category “Mark, Enclosing” (Me) */
  ENCLOSING_MARK = 11,
  /** General category “Mark, Nonspacing” (Mn) */
  NON_SPACING_MARK = 12,
  /** General category “Number, Decimal Digit” (Nd) */
  DECIMAL_NUMBER = 13,
  /** General category “Number, Letter” (Nl) */
  LETTER_NUMBER = 14,
  /** General category “Number, Other” (No) */
  OTHER_NUMBER = 15,
  /** General category “Punctuation, Connector” (Pc) */
  CONNECT_PUNCTUATION = 16,
  /** General category “Punctuation, Dash” (Pd) */
  DASH_PUNCTUATION = 17,
  /** General category “Punctuation, Close” (Pe) */
  CLOSE_PUNCTUATION = 18,
  /** General category “Punctuation, Final quote” (Pf) */
  FINAL_PUNCTUATION = 19,
  /** General category “Other, Not Assigned” (Cn) */
  UNASSIGNED = 2,
  /** General category “Punctuation, Initial quote” (Pi) */
  INITIAL_PUNCTUATION = 20,
  /** General category “Punctuation, Other” (Po) */
  OTHER_PUNCTUATION = 21,
  /** General category “Punctuation, Open” (Ps) */
  OPEN_PUNCTUATION = 22,
  /** General category “Symbol, Currency” (Sc) */
  CURRENCY_SYMBOL = 23,
  /** General category “Symbol, Modifier” (Sk) */
  MODIFIER_SYMBOL = 24,
  /** General category “Symbol, Math” (Sm) */
  MATH_SYMBOL = 25,
  /** General category “Symbol, Other” (So) */
  OTHER_SYMBOL = 26,
  /** General category “Separator, Line” (Zl) */
  LINE_SEPARATOR = 27,
  /** General category “Separator, Paragraph” (Zp) */
  PARAGRAPH_SEPARATOR = 28,
  /** General category “Separator, Space” (Zs) */
  SPACE_SEPARATOR = 29,
  /** General category “Other, Private Use” (Co) */
  PRIVATE_USE = 3,
  /** General category “Other, Surrogate” (Cs) */
  SURROGATE = 4,
  /** General category “Letter, Lowercase” (Ll) */
  LOWERCASE_LETTER = 5,
  /** General category “Letter, Modifier” (Lm) */
  MODIFIER_LETTER = 6,
  /** General category “Letter, Other” (Lo) */
  OTHER_LETTER = 7,
  /** General category “Letter, Titlecase” (Lt) */
  TITLECASE_LETTER = 8,
  /** General category “Letter, Uppercase” (Lu) */
  UPPERCASE_LETTER = 9,
}
/**
  * These are logical ids for special directories which are defined depending on the platform used. You should use GLib.get_user_special_dir() to retrieve the full path associated to the logical id.
  *  New in version 2.14.  
  */
export declare enum UserDirectory {
  /** the user’s Desktop directory */
  DIRECTORY_DESKTOP = 0,
  /** the user’s Documents directory */
  DIRECTORY_DOCUMENTS = 1,
  /** the user’s Downloads directory */
  DIRECTORY_DOWNLOAD = 2,
  /** the user’s Music directory */
  DIRECTORY_MUSIC = 3,
  /** the user’s Pictures directory */
  DIRECTORY_PICTURES = 4,
  /** the user’s shared directory */
  DIRECTORY_PUBLIC_SHARE = 5,
  /** the user’s Templates directory */
  DIRECTORY_TEMPLATES = 6,
  /** the user’s Movies directory */
  DIRECTORY_VIDEOS = 7,
  /** the number of enum values */
  N_DIRECTORIES = 8,
}
/**
  * The range of possible top-level types of GLib.Variant instances.
  *  New in version 2.24.  
  */
export declare enum VariantClass {
  /** The GLib.Variant is a double precision floating point value. */
  DOUBLE = 100,
  /** The GLib.Variant is a D-Bus signature string. */
  SIGNATURE = 103,
  /** The GLib.Variant is a file handle index. */
  HANDLE = 104,
  /** The GLib.Variant is a signed 32 bit integer. */
  INT32 = 105,
  /** The GLib.Variant is a maybe-typed value. */
  MAYBE = 109,
  /** The GLib.Variant is a signed 16 bit integer. */
  INT16 = 110,
  /** The GLib.Variant is a D-Bus object path string. */
  OBJECT_PATH = 111,
  /** The GLib.Variant is an unsigned 16 bit integer. */
  UINT16 = 113,
  /** The GLib.Variant is a normal string. */
  STRING = 115,
  /** The GLib.Variant is an unsigned 64 bit integer. */
  UINT64 = 116,
  /** The GLib.Variant is an unsigned 32 bit integer. */
  UINT32 = 117,
  /** The GLib.Variant is a variant. */
  VARIANT = 118,
  /** The GLib.Variant is a signed 64 bit integer. */
  INT64 = 120,
  /** The GLib.Variant is a byte. */
  BYTE = 121,
  /** The GLib.Variant is a dictionary entry. */
  DICT_ENTRY = 123,
  /** The GLib.Variant is a tuple. */
  TUPLE = 40,
  /** The GLib.Variant is an array. */
  ARRAY = 97,
  /** The GLib.Variant is a boolean. */
  BOOLEAN = 98,
}
/**
  * Error codes returned by parsing text-format GVariants. 
  */
export declare enum VariantParseError {
  /** generic error (unused) */
  FAILED = 0,
  /** a non-basic GLib.VariantType was given where a basic type was expected */
  BASIC_TYPE_EXPECTED = 1,
  /** could not find a common type for array entries */
  NO_COMMON_TYPE = 10,
  /** the numerical value is out of range of the given type */
  NUMBER_OUT_OF_RANGE = 11,
  /** the numerical value is out of range for any type */
  NUMBER_TOO_BIG = 12,
  /** cannot parse as variant of the specified type */
  TYPE_ERROR = 13,
  /** an unexpected token was encountered */
  UNEXPECTED_TOKEN = 14,
  /** an unknown keyword was encountered */
  UNKNOWN_KEYWORD = 15,
  /** unterminated string constant */
  UNTERMINATED_STRING_CONSTANT = 16,
  /** no value given */
  VALUE_EXPECTED = 17,
  /** cannot infer the GLib.VariantType */
  CANNOT_INFER_TYPE = 2,
  /** an indefinite GLib.VariantType was given where a definite type was expected */
  DEFINITE_TYPE_EXPECTED = 3,
  /** extra data after parsing finished */
  INPUT_NOT_AT_END = 4,
  /** invalid character in number or unicode escape */
  INVALID_CHARACTER = 5,
  /** not a valid GLib.Variant format string */
  INVALID_FORMAT_STRING = 6,
  /** not a valid object path */
  INVALID_OBJECT_PATH = 7,
  /** not a valid type signature */
  INVALID_SIGNATURE = 8,
  /** not a valid GLib.Variant type string */
  INVALID_TYPE_STRING = 9,
}
