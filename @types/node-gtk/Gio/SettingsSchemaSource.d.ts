/**
  * This is an opaque structure type.  You may not access it directly. 
  */
export declare class SettingsSchemaSource {
  /**
    * Gets the default system schema source.
    * @returns the default schema source 
    */
  static getDefault(): import('../Gio').SettingsSchemaSource | null;
  /**
    * Attempts to create a new schema source corresponding to the contents of the given directory.
    * @param directory the filename of a directory
    * @param parent a Gio.SettingsSchemaSource, or None
    * @param trusted True, if the directory is trusted 
    */
  static newFromDirectory(directory: string, parent: import('../Gio').SettingsSchemaSource | null, trusted: boolean): import('../Gio').SettingsSchemaSource;
  /**
    * Lists the schemas in a given source.
    * @param recursive if we should recurse
    * @returns non_relocatable:  the list of non-relocatable schemas relocatable:the list of relocatable schemas 
    */
  listSchemas(recursive: boolean): [string[], string[]];
  /**
    * Looks up a schema with the identifier schema_id in self.
    * @param schemaId a schema ID
    * @param recursive True if the lookup should be recursive
    * @returns a new Gio.SettingsSchema 
    */
  lookup(schemaId: string, recursive: boolean): import('../Gio').SettingsSchema | null;
  /**
    * Increase the reference count of self, returning a new reference.
    * @returns a new reference to self 
    */
  ref(): import('../Gio').SettingsSchemaSource;
  /**
    * Decrease the reference count of self, possibly freeing it. 
    */
  unref(): void;
}

