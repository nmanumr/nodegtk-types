/**
  * A GObject.ParamSpec derived structure that contains the meta data for string
properties. 
  */
export declare class ParamSpecString extends import('../GObject').ParamSpec{
/**
  * a string containing the allowed values for the first byte 
  */
csetFirst: string;
/**
  * a string containing the allowed values for the subsequent bytes 
  */
csetNth: string;
/**
  * default value for the property specified 
  */
defaultValue: string;
/**
  * replace None strings by an empty string 
  */
ensureNonNull: number;
/**
  * replace empty string by None 
  */
nullFoldIfEmpty: number;
/**
  * private GObject.ParamSpec portion 
  */
parentInstance: import('../GObject').ParamSpec;
/**
  * the replacement byte for bytes which don’t match cset_first or cset_nth. 
  */
substitutor: number;
}

