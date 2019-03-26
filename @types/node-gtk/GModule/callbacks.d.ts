/**
  * Specifies the type of the module initialization function. If a module contains a function named g_module_check_init() it is called automatically when the module is loaded. It is passed the GModule.Module structure and should return None on success or a string describing the initialization error.
  * @param module the GModule.Module corresponding to the module which has just been loaded
  * @returns None on success, or a string describing the initialization error 
  */
export declare type moduleCheckInit = (module: import('../GModule').Module) => string;
/**
  * Specifies the type of the module function called when it is unloaded. If a module contains a function named g_module_unload() it is called automatically when the module is unloaded. It is passed the GModule.Module structure.
  * @param module the GModule.Module about to be unloaded 
  */
export declare type moduleUnload = (module: import('../GModule').Module) => void;
