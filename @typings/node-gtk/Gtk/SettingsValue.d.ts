export declare class SettingsValue {
/**
  * Origin should be something like “filename:linenumber” for rc files, or e.g. “XProperty” for other sources. 
  */
origin: string;
/**
  * Valid types are LONG, DOUBLE and STRING corresponding to the token parsed, or a GSTRING holding an unparsed statement 
  */
value: import('../GObject').Value;
}

