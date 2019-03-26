import * as GObject from '../GObject';
export declare interface Icon extends GObject.GInterface { }

/**
  * Gio.Icon is a very minimal interface for icons. It provides functions
for checking the equality of two icons, hashing of icons and
serializing an icon to and from strings. 
  */
export declare class Icon {
  /**
    * Deserializes a Gio.Icon previously serialized using Gio.Icon.serialize().
    * @param value a GLib.Variant created with Gio.Icon.serialize()
    * @returns a Gio.Icon, or None when deserialization fails. 
    */
  static deserialize(value: import('../GLib').Variant): import('../Gio').Icon;
  /**
    * Gets a hash for an icon.
    * @param icon #gconstpointer to an icon object.
    * @returns a int containing a hash for the icon, suitable for use in a GLib.HashTable or similar data structure. 
    */
  static hash(icon: Object): number;
  /**
    * Generate a Gio.Icon instance from str. This function can fail if str is not valid - see Gio.Icon.to_string() for discussion.
    * @param str A string obtained via Gio.Icon.to_string().
    * @returns An object implementing the Gio.Icon interface or None if error is set. 
    */
  static newForString(str: string): import('../Gio').Icon;
  /**
    * Checks if two icons are equal.
    * @param icon2 pointer to the second Gio.Icon.
    * @returns True if self is equal to icon2. False otherwise. 
    */
  equal(icon2: import('../Gio').Icon | null): boolean;
  /**
    * Serializes a Gio.Icon into a GLib.Variant. An equivalent Gio.Icon can be retrieved back by calling Gio.Icon.deserialize() on the returned value. As serialization will avoid using raw icon data when possible, it only makes sense to transfer the GLib.Variant between processes on the same machine, (as opposed to over the network), and within the same file system namespace.
    * @returns a GLib.Variant, or None when serialization fails. 
    */
  serialize(): import('../GLib').Variant;
  /**
    * Generates a textual representation of self that can be used for serialization such as when passing self to a different process or saving it to persistent storage. Use Gio.Icon.new_for_string() to get self back from the returned string.
    * @returns An allocated NUL-terminated UTF8 string or None if self can’t be serialized. Use GLib.free() to free. 
    */
  toString(): string | null;
}

