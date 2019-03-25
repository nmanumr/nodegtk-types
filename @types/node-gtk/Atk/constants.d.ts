/**
  * Like Atk.get_binary_age(), but from the headers used at application compile time, rather than from the library linked against at application run time.  New in version 2.7.4.   
  */
export declare const BINARY_AGE = 23010;
/**
  * Like Atk.get_interface_age(), but from the headers used at application compile time, rather than from the library linked against at application run time.  New in version 2.7.4.   
  */
export declare const INTERFACE_AGE = 1;
/**
  * Like Atk.get_major_version(), but from the headers used at application compile time, rather than from the library linked against at application run time.  New in version 2.7.4.   
  */
export declare const MAJOR_VERSION = 2;
/**
  * Like Atk.get_micro_version(), but from the headers used at application compile time, rather than from the library linked against at application run time.  New in version 2.7.4.   
  */
export declare const MICRO_VERSION = 0;
/**
  * Like Atk.get_minor_version(), but from the headers used at application compile time, rather than from the library linked against at application run time.  New in version 2.7.4.   
  */
export declare const MINOR_VERSION = 30;
/**
  * A macro that should be defined by the user prior to including the atk/atk.h header. The definition should be one of the predefined ATK version macros: %ATK_VERSION_2_12, %ATK_VERSION_2_14,… This macro defines the earliest version of ATK that the package is required to be able to compile against. If the compiler is configured to warn about the use of deprecated functions, then using functions that were deprecated in version Atk.VERSION_MIN_REQUIRED or earlier will cause warnings (but using functions deprecated in later releases will not).  New in version 2.14.   
  */
export declare const VERSION_MIN_REQUIRED = 2;
