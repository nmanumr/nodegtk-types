/**
  * The Gio.SettingsSchemaSource and Gio.SettingsSchema APIs provide a
mechanism for advanced control over the loading of schemas and a
mechanism for introspecting their content. 
  */
export declare class SettingsSchema {
  /**
    * Get the ID of self.
    * @returns the ID 
    */
  getId(): string;
  /**
    * Gets the key named name from self.
    * @param name the name of a key
    * @returns the Gio.SettingsSchemaKey for name 
    */
  getKey(name: string): import('../Gio').SettingsSchemaKey;
  /**
    * Gets the path associated with self, or None.
    * @returns the path of the schema, or None 
    */
  getPath(): string;
  /**
    * Checks if self has a key named name.
    * @param name the name of a key
    * @returns True if such a key exists 
    */
  hasKey(name: string): boolean;
  /**
    * Gets the list of children in self.
    * @returns a list of the children on settings 
    */
  listChildren(): string[];
  /**
    * Introspects the list of keys on self.
    * @returns a list of the keys on self 
    */
  listKeys(): string[];
  /**
    * Increase the reference count of self, returning a new reference.
    * @returns a new reference to self 
    */
  ref(): import('../Gio').SettingsSchema;
  /**
    * Decrease the reference count of self, possibly freeing it. 
    */
  unref(): void;
}

