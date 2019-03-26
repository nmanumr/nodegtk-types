/**
  * A GOptionContext struct defines which options
are accepted by the commandline option parser. The struct has only private
fields and should not be directly accessed. 
  */
export declare class OptionContext {
  /**
    * Adds a GLib.OptionGroup to the self, so that parsing with self will recognize the options in the group. Note that this will take ownership of the group and thus the group should not be freed.
    * @param group the group to add 
    */
  addGroup(group: import('../GLib').OptionGroup): void;
  /**
    * A convenience function which creates a main group if it doesn’t exist, adds the entries to it and sets the translation domain.
    * @param entries a None-terminated array of GLib.OptionEntrys
    * @param translationDomain a translation domain to use for translating the --help output for the options in entries with gettext(), or None 
    */
  addMainEntries(entries: import('../GLib').OptionEntry, translationDomain: string | null): void;
  /**
    * Frees context and all the groups which have been added to it. 
    */
  free(): void;
  /**
    * Returns the description. See GLib.OptionContext.set_description().
    * @returns the description 
    */
  getDescription(): string;
  /**
    * Returns a formatted, translated help text for the given context. To obtain the text produced by --help, call g_option_context_get_help (context, TRUE, NULL). To obtain the text produced by --help-all, call g_option_context_get_help (context, FALSE, NULL). To obtain the help text for an option group, call g_option_context_get_help (context, FALSE, group).
    * @param mainHelp if True, only include the main group
    * @param group the GLib.OptionGroup to create help for, or None
    * @returns A newly allocated string containing the help text 
    */
  getHelp(mainHelp: boolean, group: import('../GLib').OptionGroup | null): string;
  /**
    * Returns whether automatic --help generation is turned on for self. See GLib.OptionContext.set_help_enabled().
    * @returns True if automatic help generation is turned on. 
    */
  getHelpEnabled(): boolean;
  /**
    * Returns whether unknown options are ignored or not. See GLib.OptionContext.set_ignore_unknown_options().
    * @returns True if unknown options are ignored. 
    */
  getIgnoreUnknownOptions(): boolean;
  /**
    * Returns a pointer to the main group of self.
    * @returns the main group of self, or None if self doesn’t have a main group. Note that group belongs to self and should not be modified or freed. 
    */
  getMainGroup(): import('../GLib').OptionGroup;
  /**
    * Returns whether strict POSIX code is enabled.
    * @returns True if strict POSIX is enabled, False otherwise. 
    */
  getStrictPosix(): boolean;
  /**
    * Returns the summary. See GLib.OptionContext.set_summary().
    * @returns the summary 
    */
  getSummary(): string;
  /**
    * Parses the command line arguments, recognizing options which have been added to self. A side-effect of calling this function is that GLib.set_prgname() will be called.
    * @param argv a pointer to the array of command line arguments
    * @returns True if the parsing was successful, False if an error occurred  argv:a pointer to the array of command line arguments 
    */
  parse(argv: string): [boolean, string[]];
  /**
    * Parses the command line arguments.
    * @param arguments a pointer to the command line arguments (which must be in UTF-8 on Windows)
    * @returns True if the parsing was successful, False if an error occurred  arguments:a pointer to the command line arguments (which must be in UTF-8 on Windows) 
    */
  parseStrv(arguments: string): [boolean, string[]];
  /**
    * Adds a string to be displayed in --help output after the list of options. This text often includes a bug reporting address.
    * @param description a string to be shown in --help output after the list of options, or None 
    */
  setDescription(description: string | null): void;
  /**
    * Enables or disables automatic generation of --help output. By default, GLib.OptionContext.parse() recognizes --help, -h, -?, --help-all and --help-groupname and creates suitable output to stdout.
    * @param helpEnabled True to enable --help, False to disable it 
    */
  setHelpEnabled(helpEnabled: boolean): void;
  /**
    * Sets whether to ignore unknown options or not. If an argument is ignored, it is left in the argv array after parsing. By default, GLib.OptionContext.parse() treats unknown options as error.
    * @param ignoreUnknown True to ignore unknown options, False to produce an error when unknown options are met 
    */
  setIgnoreUnknownOptions(ignoreUnknown: boolean): void;
  /**
    * Sets a GLib.OptionGroup as main group of the self. This has the same effect as calling GLib.OptionContext.add_group(), the only difference is that the options in the main group are treated differently when generating --help output.
    * @param group the group to set as main group 
    */
  setMainGroup(group: import('../GLib').OptionGroup): void;
  /**
    * Sets strict POSIX mode.
    * @param strictPosix the new value 
    */
  setStrictPosix(strictPosix: boolean): void;
  /**
    * Adds a string to be displayed in --help output before the list of options. This is typically a summary of the program functionality.
    * @param summary a string to be shown in --help output before the list of options, or None 
    */
  setSummary(summary: string | null): void;
  /**
    * Sets the function which is used to translate the contexts user-visible strings, for --help output. If func is None, strings are not translated.
    * @param func the GLib.TranslateFunc, or None
    * @param data user data to pass to func, or None 
    */
  setTranslateFunc(func: import('../GLib').translateFunc | null, data: Object | null): void;
  /**
    * A convenience function to use gettext() for translating user-visible strings.
    * @param domain the domain to use 
    */
  setTranslationDomain(domain: string): void;
}

