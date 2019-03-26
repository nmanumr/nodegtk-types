import * as GObject from '../GObject';
export declare interface Settings extends GObject.Object { }

/**
  * Provide dictionary-like access to GLib.Settings. 
  */
export declare class Settings {
  /**
    * Deprecated.
    * @returns a list of relocatable Gio.Settings schemas that are available.  The list must not be modified or freed. 
    */
  static listRelocatableSchemas(): string[];
  /**
    * Deprecated.
    * @returns a list of Gio.Settings schemas that are available.  The list must not be modified or freed. 
    */
  static listSchemas(): string[];
  /**
    * Creates a new Gio.Settings object with the schema specified by schema_id.
    * @param schemaId the id of the schema
    * @returns a new Gio.Settings object 
    */
  static new(schemaId: string): import('../Gio').Settings;
  /**
    * Creates a new Gio.Settings object with a given schema, backend and path.
    * @param schema a Gio.SettingsSchema
    * @param backend a Gio.SettingsBackend
    * @param path the path to use
    * @returns a new Gio.Settings object 
    */
  static newFull(schema: import('../Gio').SettingsSchema, backend: import('../Gio').SettingsBackend | null, path: string | null): import('../Gio').Settings;
  /**
    * Creates a new Gio.Settings object with the schema specified by schema_id and a given Gio.SettingsBackend.
    * @param schemaId the id of the schema
    * @param backend the Gio.SettingsBackend to use
    * @returns a new Gio.Settings object 
    */
  static newWithBackend(schemaId: string, backend: import('../Gio').SettingsBackend): import('../Gio').Settings;
  /**
    * Creates a new Gio.Settings object with the schema specified by schema_id and a given Gio.SettingsBackend and path.
    * @param schemaId the id of the schema
    * @param backend the Gio.SettingsBackend to use
    * @param path the path to use
    * @returns a new Gio.Settings object 
    */
  static newWithBackendAndPath(schemaId: string, backend: import('../Gio').SettingsBackend, path: string): import('../Gio').Settings;
  /**
    * Creates a new Gio.Settings object with the relocatable schema specified by schema_id and a given path.
    * @param schemaId the id of the schema
    * @param path the path to use
    * @returns a new Gio.Settings object 
    */
  static newWithPath(schemaId: string, path: string): import('../Gio').Settings;
  /**
    * Ensures that all pending operations are complete for the default backend. 
    */
  static sync(): void;
  /**
    * Removes an existing binding for property on object.
    * @param object the object
    * @param property the property whose binding is removed 
    */
  static unbind(object: import('../GObject').Object, property: string): void;
  /**
    * Applies any changes that have been made to the settings.  This function does nothing unless self is in ‘delay-apply’ mode; see Gio.Settings.delay().  In the normal case settings are always applied immediately. 
    */
  apply(): void;
  /**
    * Create a binding between the key in the self object and the property property of object.
    * @param key the key to bind
    * @param object a GObject.Object
    * @param property the name of the property to bind
    * @param flags flags for the binding 
    */
  bind(key: string, object: import('../GObject').Object, property: string, flags: import('../Gio').SettingsBindFlags): void;
  /**
    * Create a binding between the writability of key in the self object and the property property of object. The property must be boolean; “sensitive” or “visible” properties of widgets are the most likely candidates.
    * @param key the key to bind
    * @param object a GObject.Object
    * @param property the name of a boolean property to bind
    * @param inverted whether to ‘invert’ the value 
    */
  bindWritable(key: string, object: import('../GObject').Object, property: string, inverted: boolean): void;
  /**
    * Creates a Gio.Action corresponding to a given Gio.Settings key.
    * @param key the name of a key in self
    * @returns a new Gio.Action 
    */
  createAction(key: string): import('../Gio').Action;
  /**
    * Changes the Gio.Settings object into ‘delay-apply’ mode. In this mode, changes to self are not immediately propagated to the backend, but kept locally until Gio.Settings.apply() is called. 
    */
  delay(): void;
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns a boolean 
    */
  getBoolean(key: string): boolean;
  /**
    * Creates a child settings object which has a base path of base-path/@name, where base-path is the base path of self.
    * @param name the name of the child schema
    * @returns a ‘child’ settings object 
    */
  getChild(name: string): import('../Gio').Settings;
  /**
    * Gets the “default value” of a key.
    * @param key the key to get the default value for
    * @returns the default value 
    */
  getDefaultValue(key: string): import('../GLib').Variant | null;
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns a double 
    */
  getDouble(key: string): number;
  /**
    * Gets the value that is stored in self for key and converts it to the enum value that it represents.
    * @param key the key to get the value for
    * @returns the enum value 
    */
  getEnum(key: string): number;
  /**
    * Gets the value that is stored in self for key and converts it to the flags value that it represents.
    * @param key the key to get the value for
    * @returns the flags value 
    */
  getFlags(key: string): number;
  /**
    * Returns whether the Gio.Settings object has any unapplied changes.  This can only be the case if it is in ‘delayed-apply’ mode.
    * @returns True if self has unapplied changes 
    */
  getHasUnapplied(): boolean;
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns an integer 
    */
  getInt(key: string): number;
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns a 64-bit integer 
    */
  getInt64(key: string): number;
  /**
    * Gets the value that is stored at key in self, subject to application-level validation/mapping.
    * @param key the key to get the value for
    * @param mapping the function to map the value in the settings database to the value used by the application
    * @param userData user data for mapping
    * @returns the result, which may be None 
    */
  getMapped(key: string, mapping: import('../Gio').settingsGetMapping, userData: Object | null): Object | null;
  /**
    * Queries the range of a key.
    * @param key the key to query the range of 
    */
  getRange(key: string): import('../GLib').Variant;
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns a newly-allocated string 
    */
  getString(key: string): string;
  /**
    * A convenience variant of g_settings_get() for string arrays.
    * @param key the key to get the value for
    * @returns a newly-allocated, None-terminated array of strings, the value that is stored at key in self. 
    */
  getStrv(key: string): string[];
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns an unsigned integer 
    */
  getUint(key: string): number;
  /**
    * Gets the value that is stored at key in self.
    * @param key the key to get the value for
    * @returns a 64-bit unsigned integer 
    */
  getUint64(key: string): number;
  /**
    * Checks the “user value” of a key, if there is one.
    * @param key the key to get the user value for
    * @returns the user’s value, if set 
    */
  getUserValue(key: string): import('../GLib').Variant | null;
  /**
    * Gets the value that is stored in self for key.
    * @param key the key to get the value for
    * @returns a new GLib.Variant 
    */
  getValue(key: string): import('../GLib').Variant;
  /**
    * Finds out if a key can be written or not
    * @param name the name of a key
    * @returns True if the key name is writable 
    */
  isWritable(name: string): boolean;
  keys(): void;
  /**
    * Gets the list of children on self.
    * @returns a list of the children on self 
    */
  listChildren(): string[];
  /**
    * Introspects the list of keys on self.
    * @returns a list of the keys on self 
    */
  listKeys(): string[];
  /**
    * Checks if the given value is of the correct type and within the permitted range for key.
    * @param key the key to check
    * @param value the value to check
    * @returns True if value is valid for key 
    */
  rangeCheck(key: string, value: import('../GLib').Variant): boolean;
  /**
    * Resets key to its default value.
    * @param key the name of a key 
    */
  reset(key: string): void;
  /**
    * Reverts all non-applied changes to the settings.  This function does nothing unless self is in ‘delay-apply’ mode; see Gio.Settings.delay().  In the normal case settings are always applied immediately. 
    */
  revert(): void;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setBoolean(key: string, value: boolean): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setDouble(key: string, value: number): boolean;
  /**
    * Looks up the enumerated type nick for value and writes it to key, within self.
    * @param key a key, within self
    * @param value an enumerated value
    * @returns True, if the set succeeds 
    */
  setEnum(key: string, value: number): boolean;
  /**
    * Looks up the flags type nicks for the bits specified by value, puts them in an array of strings and writes the array to key, within self.
    * @param key a key, within self
    * @param value a flags value
    * @returns True, if the set succeeds 
    */
  setFlags(key: string, value: number): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setInt(key: string, value: number): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setInt64(key: string, value: number): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setString(key: string, value: string): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to, or None
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setStrv(key: string, value: string | null): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setUint(key: string, value: number): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value the value to set it to
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setUint64(key: string, value: number): boolean;
  /**
    * Sets key in self to value.
    * @param key the name of the key to set
    * @param value a GLib.Variant of the correct type
    * @returns True if setting the key succeeded, False if the key was not writable 
    */
  setValue(key: string, value: import('../GLib').Variant): boolean;
  /**
    * The Gio.SettingsBackend for this settings object 
    */
  backend: import('../Gio').SettingsBackend;
  /**
    * Whether this settings object is in “delay-apply” mode 
    */
  readonly delayApply: boolean;
  /**
    * True if there are outstanding changes to apply() 
    */
  readonly hasUnapplied: boolean;
  /**
    * The path within the backend where the settings are 
    */
  path: string;
  /**
    * The name of the schema for this settings object deprecated 
    */
  schema: string;
  /**
    * The name of the schema for this settings object 
    */
  schemaId: string;
  /**
    * The Gio.SettingsSchema for this settings object 
    */
  settingsSchema: import('../Gio').SettingsSchema;
}

