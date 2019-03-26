/**
  * Gio.SettingsSchemaKey is an opaque data structure and can only be accessed
using the following functions. 
  */
export declare class SettingsSchemaKey {
  /**
    * Gets the default value for self.
    * @returns the default value for the key 
    */
  getDefaultValue(): import('../GLib').Variant;
  /**
    * Gets the description for self.
    * @returns the description for self, or None 
    */
  getDescription(): string;
  /**
    * Gets the name of self.
    * @returns the name of self. 
    */
  getName(): string;
  /**
    * Queries the range of a key.
    * @returns a GLib.Variant describing the range 
    */
  getRange(): import('../GLib').Variant;
  /**
    * Gets the summary for self.
    * @returns the summary for self, or None 
    */
  getSummary(): string;
  /**
    * Gets the GLib.VariantType of self.
    * @returns the type of self 
    */
  getValueType(): import('../GLib').VariantType;
  /**
    * Checks if the given value is of the correct type and within the permitted range for self.
    * @param value the value to check
    * @returns True if value is valid for self 
    */
  rangeCheck(value: import('../GLib').Variant): boolean;
  /**
    * Increase the reference count of self, returning a new reference.
    * @returns a new reference to self 
    */
  ref(): import('../Gio').SettingsSchemaKey;
  /**
    * Decrease the reference count of self, possibly freeing it. 
    */
  unref(): void;
}

