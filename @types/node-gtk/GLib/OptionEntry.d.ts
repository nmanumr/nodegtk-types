/**
  * A GLib.OptionEntry struct defines a single option. To have an effect, they
must be added to a GLib.OptionGroup with GLib.OptionContext.add_main_entries()
or GLib.OptionGroup.add_entries(). 
  */
export declare class OptionEntry {
/**
  * The type of the option, as a GLib.OptionArg 
  */
arg: import('../GLib').OptionArg;
/**
  * If the arg type is GLib.OptionArg.CALLBACK, then arg_data must point to a GLib.OptionArgFunc callback function, which will be called to handle the extra argument. Otherwise, arg_data is a pointer to a location to store the value, the required type of the location depends on the arg type:   * GLib.OptionArg.NONE: bool         * GLib.OptionArg.STRING: str   * GLib.OptionArg.INT: int   * GLib.OptionArg.FILENAME: str   * GLib.OptionArg.STRING_ARRAY: str   * GLib.OptionArg.FILENAME_ARRAY: str   * GLib.OptionArg.DOUBLE: float     If arg type is GLib.OptionArg.STRING or GLib.OptionArg.FILENAME,     the location will contain a newly allocated string if the option     was given. That string needs to be freed by the callee using GLib.free().     Likewise if arg type is GLib.OptionArg.STRING_ARRAY or     GLib.OptionArg.FILENAME_ARRAY, the data should be freed using GLib.strfreev(). 
  */
argData: Object;
/**
  * The placeholder to use for the extra argument parsed by the option in --help output. The arg_description is translated using the translate_func of the group, see GLib.OptionGroup.set_translation_domain(). 
  */
argDescription: string;
/**
  * the description for the option in --help output. The description is translated using the translate_func of the group, see GLib.OptionGroup.set_translation_domain(). 
  */
description: string;
/**
  * Flags from GLib.OptionFlags 
  */
flags: number;
/**
  * The long name of an option can be used to specify it in a commandline as --long_name. Every option must have a long name. To resolve conflicts if multiple option groups contain the same long name, it is also possible to specify the option as --groupname-long_name. 
  */
longName: string;
/**
  * If an option has a short name, it can be specified -short_name in a commandline. short_name must be  a printable ASCII character different from ‘-‘, or zero if the option has no short name. 
  */
shortName: number;
}

