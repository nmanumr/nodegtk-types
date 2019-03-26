import * as GObject from '../GObject';
export declare interface MountOperation extends GObject.Object { }

/**
  * Gio.MountOperation provides a mechanism for interacting with the user.
It can be used for authenticating mountable operations, such as loop
mounting files, hard drive partitions or server locations. It can
also be used to ask the user questions or show a list of applications
preventing unmount or eject operations from completing. 
  */
export declare class MountOperation {
  /**
    * Creates a new mount operation.
    * @returns a Gio.MountOperation. 
    */
  static new(): import('../Gio').MountOperation;
  /**
    * Check to see whether the mount operation is being used for an anonymous user.
    * @returns True if mount operation is anonymous. 
    */
  getAnonymous(): boolean;
  /**
    * Gets a choice from the mount operation.
    * @returns an integer containing an index of the user’s choice from the choice’s list, or %0. 
    */
  getChoice(): number;
  /**
    * Gets the domain of the mount operation.
    * @returns a string set to the domain. 
    */
  getDomain(): string;
  /**
    * Check to see whether the mount operation is being used for a TCRYPT hidden volume.
    * @returns True if mount operation is for hidden volume. 
    */
  getIsTcryptHiddenVolume(): boolean;
  /**
    * Check to see whether the mount operation is being used for a TCRYPT system volume.
    * @returns True if mount operation is for system volume. 
    */
  getIsTcryptSystemVolume(): boolean;
  /**
    * Gets a password from the mount operation.
    * @returns a string containing the password within self. 
    */
  getPassword(): string;
  /**
    * Gets the state of saving passwords for the mount operation.
    * @returns a Gio.PasswordSave flag. 
    */
  getPasswordSave(): import('../Gio').PasswordSave;
  /**
    * Gets a PIM from the mount operation.
    * @returns The VeraCrypt PIM within self. 
    */
  getPim(): number;
  /**
    * Get the user name from the mount operation.
    * @returns a string containing the user name. 
    */
  getUsername(): string;
  /**
    * Emits the Gio.MountOperation ::reply signal.
    * @param result a Gio.MountOperationResult 
    */
  reply(result: import('../Gio').MountOperationResult): void;
  /**
    * Sets the mount operation to use an anonymous user if anonymous is True.
    * @param anonymous boolean value. 
    */
  setAnonymous(anonymous: boolean): void;
  /**
    * Sets a default choice for the mount operation.
    * @param choice an integer. 
    */
  setChoice(choice: number): void;
  /**
    * Sets the mount operation’s domain.
    * @param domain the domain to set. 
    */
  setDomain(domain: string): void;
  /**
    * Sets the mount operation to use a hidden volume if hidden_volume is True.
    * @param hiddenVolume boolean value. 
    */
  setIsTcryptHiddenVolume(hiddenVolume: boolean): void;
  /**
    * Sets the mount operation to use a system volume if system_volume is True.
    * @param systemVolume boolean value. 
    */
  setIsTcryptSystemVolume(systemVolume: boolean): void;
  /**
    * Sets the mount operation’s password to password.
    * @param password password to set. 
    */
  setPassword(password: string): void;
  /**
    * Sets the state of saving passwords for the mount operation.
    * @param save a set of Gio.PasswordSave flags. 
    */
  setPasswordSave(save: import('../Gio').PasswordSave): void;
  /**
    * Sets the mount operation’s PIM to pim.
    * @param pim an unsigned integer. 
    */
  setPim(pim: number): void;
  /**
    * Sets the user name within self to username.
    * @param username input username. 
    */
  setUsername(username: string): void;
  /**
    * Whether to use an anonymous user 
    */
  anonymous: boolean;
  /**
    * The users choice 
    */
  choice: number;
  /**
    * The domain of the mount operation 
    */
  domain: string;
  /**
    * Whether to unlock a TCRYPT hidden volume. See https://www.veracrypt.fr/en/Hidden%20Volume.html. 
    */
  isTcryptHiddenVolume: boolean;
  /**
    * Whether to unlock a TCRYPT system volume. Only supported for unlocking Windows system volumes. See https://www.veracrypt.fr/en/System%20Encryption.html. 
    */
  isTcryptSystemVolume: boolean;
  /**
    * The password 
    */
  password: string;
  /**
    * How passwords should be saved 
    */
  passwordSave: import('../Gio').PasswordSave;
  /**
    * The VeraCrypt PIM value 
    */
  pim: number;
  /**
    * The user name 
    */
  username: string;
}

