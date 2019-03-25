/**
  * A portable way to build the filename of a module. The platform-specific prefix and suffix are added to the filename, if needed, and the result is added to the directory, using the correct separator character.
  * @param directory the directory where the module is. This can be None or the empty string to indicate that the standard platform-specific directories will be used, though that is not recommended
  * @param moduleName the name of the module
  * @returns the complete path of the module, including the standard library prefix and suffix. This should be freed when no longer needed 
  */
export declare function moduleBuildPath(directory: string | null, moduleName: string): string;
/**
  * Gets a string describing the last module error.
  * @returns a string describing the last module error 
  */
export declare function moduleError(): string;
/**
  * Checks if modules are supported on the current platform.
  * @returns True if modules are supported 
  */
export declare function moduleSupported(): boolean;
