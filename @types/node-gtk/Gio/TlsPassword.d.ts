import * as GObject from '../GObject';
export declare interface TlsPassword extends GObject.Object { }

/**
  * Holds a password used in TLS. 
  */
export declare class TlsPassword {
  /**
    * Create a new Gio.TlsPassword object.
    * @param flags the password flags
    * @param description description of what the password is for
    * @returns The newly allocated password object 
    */
  static new(flags: import('../Gio').TlsPasswordFlags, description: string): import('../Gio').TlsPassword;
  /**
    * Get a description string about what the password will be used for.
    * @returns The description of the password. 
    */
  getDescription(): string;
  /**
    * Get flags about the password.
    * @returns The flags about the password. 
    */
  getFlags(): import('../Gio').TlsPasswordFlags;
  /**
    * Get the password value. If length is not None then it will be filled in with the length of the password value. (Note that the password value is not nul-terminated, so you can only pass None for length in contexts where you know the password will have a certain fixed length.)
    * @param length location to place the length of the password.
    * @returns The password value (owned by the password object). 
    */
  getValue(length: number | null): number;
  /**
    * Get a user readable translated warning. Usually this warning is a representation of the password flags returned from Gio.TlsPassword.get_flags().
    * @returns The warning. 
    */
  getWarning(): string;
  /**
    * Set a description string about what the password will be used for.
    * @param description The description of the password 
    */
  setDescription(description: string): void;
  /**
    * Set flags about the password.
    * @param flags The flags about the password 
    */
  setFlags(flags: import('../Gio').TlsPasswordFlags): void;
  /**
    * Set the value for this password. The value will be copied by the password object.
    * @param value the new password value 
    */
  setValue(value: Int8Array): void;
  /**
    * Provide the value for this password.
    * @param value the value for the password
    * @param destroy a function to use to free the password. 
    */
  setValueFull(value: Int8Array, destroy: import('../GLib').destroyNotify | null): void;
  /**
    * Set a user readable translated warning. Usually this warning is a representation of the password flags returned from Gio.TlsPassword.get_flags().
    * @param warning The user readable warning 
    */
  setWarning(warning: string): void;
  /**
    * Description of what the password is for 
    */
  description: string;
  /**
    * Flags about the password 
    */
  flags: import('../Gio').TlsPasswordFlags;
  /**
    * Warning about the password 
    */
  warning: string;
}

