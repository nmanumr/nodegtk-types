export declare const GBoxed: null;
export declare const GObjectWeakRef: null;
export declare const GParamSpec: null;
export declare const GPointer: null;
export declare const G_MAXDOUBLE = 1.7976931348623157e+308;
export declare const G_MAXFLOAT = 3.4028234663852886e+38;
export declare const G_MAXINT = 2147483647;
export declare const G_MAXINT16 = 32767;
export declare const G_MAXINT32 = 2147483647;
export declare const G_MAXINT64 = 9223372036854775807;
export declare const G_MAXINT8 = 127;
export declare const G_MAXLONG = 9223372036854775807;
export declare const G_MAXOFFSET = 9223372036854775807;
export declare const G_MAXSHORT = 32767;
export declare const G_MAXSIZE = 18446744073709551615;
export declare const G_MAXSSIZE = 9223372036854775807;
export declare const G_MAXUINT = 4294967295;
export declare const G_MAXUINT16 = 65535;
export declare const G_MAXUINT32 = 4294967295;
export declare const G_MAXUINT64 = 18446744073709551615;
export declare const G_MAXUINT8 = 255;
export declare const G_MAXULONG = 18446744073709551615;
export declare const G_MAXUSHORT = 65535;
export declare const G_MINDOUBLE = 2.2250738585072014e-308;
export declare const G_MINFLOAT = 1.1754943508222875e-38;
export declare const G_MININT = -2147483648;
export declare const G_MININT16 = -32768;
export declare const G_MININT32 = -2147483648;
export declare const G_MININT64 = -9223372036854775808;
export declare const G_MININT8 = -128;
export declare const G_MINLONG = -9223372036854775808;
export declare const G_MINOFFSET = -9223372036854775808;
export declare const G_MINSHORT = -32768;
export declare const G_MINSSIZE = -9223372036854775808;
export declare const OPTION_REMAINING = '';
/**
  * Mask containing the bits of GObject.ParamSpec.flags which are reserved for GLib.  
  */
export declare const PARAM_MASK = 255;
/**
  * GObject.ParamFlags value alias for GObject.ParamFlags.STATIC_NAME | GObject.ParamFlags.STATIC_NICK | GObject.ParamFlags.STATIC_BLURB.  New in version 2.13.0.   
  */
export declare const PARAM_STATIC_STRINGS = 224;
/**
  * Minimum shift count to be used for user defined flags, to be stored in GObject.ParamSpec.flags. The maximum allowed is 10.  
  */
export declare const PARAM_USER_SHIFT = 8;
export declare const PRIORITY_DEFAULT = 0;
export declare const PRIORITY_DEFAULT_IDLE = 200;
export declare const PRIORITY_HIGH = -100;
export declare const PRIORITY_HIGH_IDLE = 100;
export declare const PRIORITY_LOW = 300;
/**
  * A mask for all GObject.SignalFlags bits.  
  */
export declare const SIGNAL_FLAGS_MASK = 511;
/**
  * A mask for all GObject.SignalMatchType bits.  
  */
export declare const SIGNAL_MATCH_MASK = 63;
/**
  * A bit in the type number that’s supposed to be left untouched.  
  */
export declare const TYPE_FLAG_RESERVED_ID_BIT = 1;
/**
  * An integer constant that represents the number of identifiers reserved for types that are assigned at compile-time.  
  */
export declare const TYPE_FUNDAMENTAL_MAX = 255;
/**
  * Shift value used in converting numbers to type IDs.  
  */
export declare const TYPE_FUNDAMENTAL_SHIFT = 2;
/**
  * First fundamental type number to create a new fundamental type id with G_TYPE_MAKE_FUNDAMENTAL() reserved for BSE.  
  */
export declare const TYPE_RESERVED_BSE_FIRST = 32;
/**
  * Last fundamental type number reserved for BSE.  
  */
export declare const TYPE_RESERVED_BSE_LAST = 48;
/**
  * First fundamental type number to create a new fundamental type id with G_TYPE_MAKE_FUNDAMENTAL() reserved for GLib.  
  */
export declare const TYPE_RESERVED_GLIB_FIRST = 22;
/**
  * Last fundamental type number reserved for GLib.  
  */
export declare const TYPE_RESERVED_GLIB_LAST = 31;
/**
  * First available fundamental type number to create new fundamental type id with G_TYPE_MAKE_FUNDAMENTAL().  
  */
export declare const TYPE_RESERVED_USER_FIRST = 49;
/**
  * The maximal number of GObject.TypeCValues which can be collected for a single GObject.Value.  
  */
export declare const VALUE_COLLECT_FORMAT_MAX_LENGTH = 8;
/**
  * If passed to G_VALUE_COLLECT(), allocated data won’t be copied but used verbatim. This does not affect ref-counted types like objects.  
  */
export declare const VALUE_NOCOPY_CONTENTS = 134217728;
export declare const Warning: null;
export declare const features: { 'generic-c-marshaller': true };
