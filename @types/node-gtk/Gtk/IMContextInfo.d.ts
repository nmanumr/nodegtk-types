/**
  * Bookkeeping information about a loadable input method. 
  */
export declare class IMContextInfo {
/**
  * The unique identification string of the input method. 
  */
contextId: string;
/**
  * The human-readable name of the input method. 
  */
contextName: string;
/**
  * A colon-separated list of locales where this input method should be the default. The asterisk “*” sets the default for all locales. 
  */
defaultLocales: string;
/**
  * Translation domain to be used with dgettext() 
  */
domain: string;
/**
  * Name of locale directory for use with bindtextdomain() 
  */
domainDirname: string;
}

