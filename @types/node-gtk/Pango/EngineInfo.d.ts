/**
  * The Pango.EngineInfo structure contains information about a particular
engine. It contains the following fields: 
  */
export declare class EngineInfo {
/**
  * a string identifying the engine type. 
  */
engineType: string;
/**
  * a unique string ID for the engine. 
  */
id: string;
/**
  * number of items in scripts. 
  */
nScripts: number;
/**
  * a string identifying the render type. 
  */
renderType: string;
/**
  * array of scripts this engine supports. 
  */
scripts: import('../Pango').EngineScriptInfo;
}

