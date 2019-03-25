/**
  * The Pango.EngineScriptInfo structure contains
information about how the shaper covers a particular script. 
  */
export declare class EngineScriptInfo {
/**
  * a semicolon separated list of languages that this engine handles for this script. This may be empty, in which case the engine is saying that it is a fallback choice for all languages for this range, but should not be used if another engine indicates that it is specific for the language for a given code point. An entry in this list of “*” indicates that this engine is specific to all languages for this range. 
  */
langs: string;
/**
  * a Pango.Script. The value Pango.Script.COMMON has the special meaning here of “all scripts” 
  */
script: import('../Pango').Script;
}

