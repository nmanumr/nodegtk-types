import * as GObject from '../GObject';
export declare interface Volume extends GObject.GInterface { }

/**
  * The Gio.Volume interface represents user-visible objects that can be
mounted. Note, when porting from GnomeVFS, Gio.Volume is the moral
equivalent of #GnomeVFSDrive. 
  */
export declare interface Volume {
  /**
    * Checks if a volume can be ejected.
    * @returns True if the self can be ejected. False otherwise 
    */
  canEject(): boolean;
  /**
    * Checks if a volume can be mounted.
    * @returns True if the self can be mounted. False otherwise 
    */
  canMount(): boolean;
  /**
    * Ejects a volume. This is an asynchronous operation, and is finished by calling Gio.Volume.eject_finish() with the self and Gio.AsyncResult returned in the callback.
    * @param flags flags affecting the unmount if required for eject
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback, or None
    * @param userData user data that gets passed to callback 
    */
  eject(flags: import('../Gio').MountUnmountFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes ejecting a volume. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult
    * @returns True, False if operation failed 
    */
  ejectFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Ejects a volume. This is an asynchronous operation, and is finished by calling Gio.Volume.eject_with_operation_finish() with the self and Gio.AsyncResult data returned in the callback.
    * @param flags flags affecting the unmount if required for eject
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback, or None
    * @param userData user data passed to callback 
    */
  ejectWithOperation(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes ejecting a volume. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult
    * @returns True if the volume was successfully ejected. False otherwise 
    */
  ejectWithOperationFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets the kinds of identifiers that self has. Use Gio.Volume.get_identifier() to obtain the identifiers themselves.
    * @returns a None-terminated array of strings containing kinds of identifiers. Use GLib.strfreev() to free. 
    */
  enumerateIdentifiers(): string[];
  /**
    * Gets the activation root for a Gio.Volume if it is known ahead of mount time. Returns None otherwise. If not None and if self is mounted, then the result of Gio.Mount.get_root() on the Gio.Mount object obtained from Gio.Volume.get_mount() will always either be equal or a prefix of what this function returns. In other words, in code
    * @returns the activation root of self or None. Use GObject.Object.unref() to free. 
    */
  getActivationRoot(): import('../Gio').File | null;
  /**
    * Gets the drive for the self.
    * @returns a Gio.Drive or None if self is not associated with a drive. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getDrive(): import('../Gio').Drive | null;
  /**
    * Gets the icon for self.
    * @returns a Gio.Icon. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getIcon(): import('../Gio').Icon;
  /**
    * Gets the identifier of the given kind for self. See the introduction for more information about volume identifiers.
    * @param kind the kind of identifier to return
    * @returns a newly allocated string containing the requested identifier, or None if the Gio.Volume doesn’t have this kind of identifier 
    */
  getIdentifier(kind: string): string | null;
  /**
    * Gets the mount for the self.
    * @returns a Gio.Mount or None if self isn’t mounted. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getMount(): import('../Gio').Mount | null;
  /**
    * Gets the name of self.
    * @returns the name for the given self. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getName(): string;
  /**
    * Gets the sort key for self, if any.
    * @returns Sorting key for self or None if no such key is available 
    */
  getSortKey(): string | null;
  /**
    * Gets the symbolic icon for self.
    * @returns a Gio.Icon. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getSymbolicIcon(): import('../Gio').Icon;
  /**
    * Gets the UUID for the self. The reference is typically based on the file system UUID for the volume in question and should be considered an opaque string. Returns None if there is no UUID available.
    * @returns the UUID for self or None if no UUID can be computed. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getUuid(): string | null;
  /**
    * Mounts a volume. This is an asynchronous operation, and is finished by calling Gio.Volume.mount_finish() with the self and Gio.AsyncResult returned in the callback.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback, or None
    * @param userData user data that gets passed to callback 
    */
  mount(flags: import('../Gio').MountMountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes mounting a volume. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult
    * @returns True, False if operation failed 
    */
  mountFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Returns whether the volume should be automatically mounted.
    * @returns True if the volume should be automatically mounted 
    */
  shouldAutomount(): boolean;
}

