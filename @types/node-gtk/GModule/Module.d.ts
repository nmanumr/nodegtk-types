/**
  * The GModule.Module struct is an opaque data structure to represent a
dynamically-loaded module.
It should only be accessed via the following functions. 
  */
export declare class Module {
  /**
    * A portable way to build the filename of a module. The platform-specific prefix and suffix are added to the filename, if needed, and the result is added to the directory, using the correct separator character.
    * @param directory the directory where the module is. This can be None or the empty string to indicate that the standard platform-specific directories will be used, though that is not recommended
    * @param moduleName the name of the module
    * @returns the complete path of the module, including the standard library prefix and suffix. This should be freed when no longer needed 
    */
  static buildPath(directory: string | null, moduleName: string): string;
  /**
    * Gets a string describing the last module error.
    * @returns a string describing the last module error 
    */
  static error(): string;
  /**
    * Checks if modules are supported on the current platform.
    * @returns True if modules are supported 
    */
  static supported(): boolean;
  /**
    * Closes a module.
    * @returns True on success 
    */
  close(): boolean;
  /**
    * Ensures that a module will never be unloaded. Any future GModule.Module.close() calls on the module will be ignored. 
    */
  makeResident(): void;
  /**
    * Returns the filename that the module was opened with.
    * @returns the filename of the module 
    */
  name(): string;
  /**
    * Gets a symbol pointer from a module, such as one exported by #G_MODULE_EXPORT. Note that a valid symbol can be None.
    * @param symbolName the name of the symbol to find
    * @returns True on success  symbol:returns the pointer to the symbol value 
    */
  symbol(symbolName: string): [boolean, Object];
}

