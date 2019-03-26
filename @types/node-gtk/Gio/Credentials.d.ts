import * as GObject from '../GObject';
export declare interface Credentials extends GObject.Object { }

/**
  * The Gio.Credentials type is a reference-counted wrapper for native
credentials. This information is typically used for identifying,
authenticating and authorizing other processes. 
  */
export declare class Credentials {
  /**
    * Creates a new Gio.Credentials object with credentials matching the the current process.
    * @returns A Gio.Credentials. Free with GObject.Object.unref(). 
    */
  static new(): import('../Gio').Credentials;
  /**
    * Tries to get the UNIX process identifier from self. This method is only available on UNIX platforms.
    * @returns The UNIX process ID, or -1 if error is set. 
    */
  getUnixPid(): number;
  /**
    * Tries to get the UNIX user identifier from self. This method is only available on UNIX platforms.
    * @returns The UNIX user identifier or -1 if error is set. 
    */
  getUnixUser(): number;
  /**
    * Checks if self and other_credentials is the same user.
    * @param otherCredentials A Gio.Credentials.
    * @returns True if self and other_credentials has the same user, False otherwise or if error is set. 
    */
  isSameUser(otherCredentials: import('../Gio').Credentials): boolean;
  /**
    * Copies the native credentials of type native_type from native into self.
    * @param nativeType The type of native credentials to set.
    * @param native A pointer to native credentials. 
    */
  setNative(nativeType: import('../Gio').CredentialsType, native: Object): void;
  /**
    * Tries to set the UNIX user identifier on self. This method is only available on UNIX platforms.
    * @param uid The UNIX user identifier to set.
    * @returns True if uid was set, False if error is set. 
    */
  setUnixUser(uid: number): boolean;
  /**
    * Creates a human-readable textual representation of self that can be used in logging and debug messages. The format of the returned string may change in future GLib release.
    * @returns A string that should be freed with GLib.free(). 
    */
  toString(): string;
}

