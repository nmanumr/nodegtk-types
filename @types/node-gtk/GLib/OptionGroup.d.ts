/**
  * A GOptionGroup struct defines the options in a single
group. The struct has only private fields and should not be directly accessed. 
  */
export declare class OptionGroup {
  /**
    * Creates a new GLib.OptionGroup.
    * @param name the name for the option group, this is used to provide help for the options in this group with --help- name
    * @param description a description for this group to be shown in --help. This string is translated using the translation domain or translation function of the group
    * @param helpDescription a description for the --help- name option. This string is translated using the translation domain or translation function of the group
    * @param userData user data that will be passed to the pre- and post-parse hooks, the error hook and to callbacks of GLib.OptionArg.CALLBACK options, or None
    * @param destroy a function that will be called to free user_data, or None
    * @returns a newly created option group. It should be added to a GLib.OptionContext or freed with GLib.OptionGroup.unref(). 
    */
  static new(name: string, description: string, helpDescription: string, userData: Object | null, destroy: import('../GLib').destroyNotify | null): import('../GLib').OptionGroup;
  /**
    * Adds the options specified in entries to self.
    * @param entries a None-terminated array of GLib.OptionEntrys 
    */
  addEntries(entries: import('../GLib').OptionEntry): void;
  /**
    * Frees a GLib.OptionGroup. Note that you must not free groups which have been added to a GLib.OptionContext. 
    */
  free(): void;
  /**
    * Increments the reference count of self by one.
    * @returns a GLib.OptionGroup 
    */
  ref(): import('../GLib').OptionGroup;
  /**
    * Sets the function which is used to translate user-visible strings, for --help output. Different groups can use different GLib.TranslateFuncs. If func is None, strings are not translated.
    * @param func the GLib.TranslateFunc, or None
    * @param data user data to pass to func, or None 
    */
  setTranslateFunc(func: import('../GLib').translateFunc | null, data: Object | null): void;
  /**
    * A convenience function to use gettext() for translating user-visible strings.
    * @param domain the domain to use 
    */
  setTranslationDomain(domain: string): void;
  /**
    * Decrements the reference count of self by one. If the reference count drops to 0, the self will be freed. and all memory allocated by the self is released. 
    */
  unref(): void;
}

