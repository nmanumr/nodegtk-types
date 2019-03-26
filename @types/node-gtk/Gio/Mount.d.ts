import * as GObject from '../GObject';
export declare interface Mount extends GObject.GInterface { }

/**
  * The Gio.Mount interface represents user-visible mounts. Note, when
porting from GnomeVFS, Gio.Mount is the moral equivalent of #GnomeVFSVolume. 
  */
export declare interface Mount {
  /**
    * Checks if self can be ejected.
    * @returns True if the self can be ejected. 
    */
  canEject(): boolean;
  /**
    * Checks if self can be unmounted.
    * @returns True if the self can be unmounted. 
    */
  canUnmount(): boolean;
  /**
    * Ejects a mount. This is an asynchronous operation, and is finished by calling Gio.Mount.eject_finish() with the self and Gio.AsyncResult data returned in the callback.
    * @param flags flags affecting the unmount if required for eject
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data passed to callback. 
    */
  eject(flags: import('../Gio').MountUnmountFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes ejecting a mount. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult.
    * @returns True if the mount was successfully ejected. False otherwise. 
    */
  ejectFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Ejects a mount. This is an asynchronous operation, and is finished by calling Gio.Mount.eject_with_operation_finish() with the self and Gio.AsyncResult data returned in the callback.
    * @param flags flags affecting the unmount if required for eject
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data passed to callback. 
    */
  ejectWithOperation(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes ejecting a mount. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult.
    * @returns True if the mount was successfully ejected. False otherwise. 
    */
  ejectWithOperationFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets the default location of self. The default location of the given self is a path that reflects the main entry point for the user (e.g. the home directory, or the root of the volume).
    * @returns a Gio.File. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getDefaultLocation(): import('../Gio').File;
  /**
    * Gets the drive for the self.
    * @returns a Gio.Drive or None if self is not associated with a volume or a drive. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getDrive(): import('../Gio').Drive | null;
  /**
    * Gets the icon for self.
    * @returns a Gio.Icon. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getIcon(): import('../Gio').Icon;
  /**
    * Gets the name of self.
    * @returns the name for the given self. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getName(): string;
  /**
    * Gets the root directory on self.
    * @returns a Gio.File. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getRoot(): import('../Gio').File;
  /**
    * Gets the sort key for self, if any.
    * @returns Sorting key for self or None if no such key is available. 
    */
  getSortKey(): string | null;
  /**
    * Gets the symbolic icon for self.
    * @returns a Gio.Icon. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getSymbolicIcon(): import('../Gio').Icon;
  /**
    * Gets the UUID for the self. The reference is typically based on the file system UUID for the mount in question and should be considered an opaque string. Returns None if there is no UUID available.
    * @returns the UUID for self or None if no UUID can be computed. The returned string should be freed with GLib.free() when no longer needed. 
    */
  getUuid(): string | null;
  /**
    * Gets the volume for the self.
    * @returns a Gio.Volume or None if self is not associated with a volume. The returned object should be unreffed with GObject.Object.unref() when no longer needed. 
    */
  getVolume(): import('../Gio').Volume | null;
  /**
    * Tries to guess the type of content stored on self. Returns one or more textual identifiers of well-known content types (typically prefixed with “x-content/”), e.g. x-content/image-dcf for camera memory cards. See the shared-mime-info specification for more on x-content types.
    * @param forceRescan Whether to force a rescan of the content. Otherwise a cached result will be used if available
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @param callback a Gio.asyncReadyCallback
    * @param userData user data passed to callback 
    */
  guessContentType(forceRescan: boolean, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes guessing content types of self. If any errors occurred during the operation, error will be set to contain the errors and False will be returned. In particular, you may get an Gio.IOErrorEnum.NOT_SUPPORTED if the mount does not support content guessing.
    * @param result a Gio.AsyncResult
    * @returns a None-terminated array of content types or None on error. Caller should free this array with GLib.strfreev() when done with it. 
    */
  guessContentTypeFinish(result: import('../Gio').AsyncResult): string[];
  /**
    * Tries to guess the type of content stored on self. Returns one or more textual identifiers of well-known content types (typically prefixed with “x-content/”), e.g. x-content/image-dcf for camera memory cards. See the shared-mime-info specification for more on x-content types.
    * @param forceRescan Whether to force a rescan of the content. Otherwise a cached result will be used if available
    * @param cancellable optional Gio.Cancellable object, None to ignore
    * @returns a None-terminated array of content types or None on error. Caller should free this array with GLib.strfreev() when done with it. 
    */
  guessContentTypeSync(forceRescan: boolean, cancellable: import('../Gio').Cancellable | null): string[];
  /**
    * Determines if self is shadowed. Applications or libraries should avoid displaying self in the user interface if it is shadowed.
    * @returns True if self is shadowed. 
    */
  isShadowed(): boolean;
  /**
    * Remounts a mount. This is an asynchronous operation, and is finished by calling Gio.Mount.remount_finish() with the self and Gio.AsyncResults data returned in the callback.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data passed to callback. 
    */
  remount(flags: import('../Gio').MountMountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes remounting a mount. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult.
    * @returns True if the mount was successfully remounted. False otherwise. 
    */
  remountFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Increments the shadow count on self. Usually used by Gio.VolumeMonitor implementations when creating a shadow mount for self, see Gio.Mount.is_shadowed() for more information. The caller will need to emit the Gio.Mount ::changed signal on self manually. 
    */
  shadow(): void;
  /**
    * Unmounts a mount. This is an asynchronous operation, and is finished by calling Gio.Mount.unmount_finish() with the self and Gio.AsyncResult data returned in the callback.
    * @param flags flags affecting the operation
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data passed to callback. 
    */
  unmount(flags: import('../Gio').MountUnmountFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes unmounting a mount. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult.
    * @returns True if the mount was successfully unmounted. False otherwise. 
    */
  unmountFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Unmounts a mount. This is an asynchronous operation, and is finished by calling Gio.Mount.unmount_with_operation_finish() with the self and Gio.AsyncResult data returned in the callback.
    * @param flags flags affecting the operation
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data passed to callback. 
    */
  unmountWithOperation(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes unmounting a mount. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult.
    * @returns True if the mount was successfully unmounted. False otherwise. 
    */
  unmountWithOperationFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Decrements the shadow count on self. Usually used by Gio.VolumeMonitor implementations when destroying a shadow mount for self, see Gio.Mount.is_shadowed() for more information. The caller will need to emit the Gio.Mount ::changed signal on self manually. 
    */
  unshadow(): void;
}

