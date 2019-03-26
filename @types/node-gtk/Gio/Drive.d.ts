import * as GObject from '../GObject';
export declare interface Drive extends GObject.GInterface { }

/**
  * Gio.Drive - this represent a piece of hardware connected to the machine.
It’s generally only created for removable hardware or hardware with
removable media. 
  */
export declare interface Drive {
  /**
    * Checks if a drive can be ejected.
    * @returns True if the self can be ejected, False otherwise. 
    */
  canEject(): boolean;
  /**
    * Checks if a drive can be polled for media changes.
    * @returns True if the self can be polled for media changes, False otherwise. 
    */
  canPollForMedia(): boolean;
  /**
    * Checks if a drive can be started.
    * @returns True if the self can be started, False otherwise. 
    */
  canStart(): boolean;
  /**
    * Checks if a drive can be started degraded.
    * @returns True if the self can be started degraded, False otherwise. 
    */
  canStartDegraded(): boolean;
  /**
    * Checks if a drive can be stopped.
    * @returns True if the self can be stopped, False otherwise. 
    */
  canStop(): boolean;
  /**
    * Asynchronously ejects a drive.
    * @param flags flags affecting the unmount if required for eject
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data to pass to callback 
    */
  eject(flags: import('../Gio').MountUnmountFlags, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes ejecting a drive.
    * @param result a Gio.AsyncResult.
    * @returns True if the drive has been ejected successfully, False otherwise. 
    */
  ejectFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Ejects a drive. This is an asynchronous operation, and is finished by calling Gio.Drive.eject_with_operation_finish() with the self and Gio.AsyncResult data returned in the callback.
    * @param flags flags affecting the unmount if required for eject
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data passed to callback. 
    */
  ejectWithOperation(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes ejecting a drive. If any errors occurred during the operation, error will be set to contain the errors and False will be returned.
    * @param result a Gio.AsyncResult.
    * @returns True if the drive was successfully ejected. False otherwise. 
    */
  ejectWithOperationFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets the kinds of identifiers that self has. Use Gio.Drive.get_identifier() to obtain the identifiers themselves.
    * @returns a None-terminated array of strings containing kinds of identifiers. Use GLib.strfreev() to free. 
    */
  enumerateIdentifiers(): string[];
  /**
    * Gets the icon for self.
    * @returns Gio.Icon for the self. Free the returned object with GObject.Object.unref(). 
    */
  getIcon(): import('../Gio').Icon;
  /**
    * Gets the identifier of the given kind for self. The only identifier currently available is Gio.DRIVE_IDENTIFIER_KIND_UNIX_DEVICE.
    * @param kind the kind of identifier to return
    * @returns a newly allocated string containing the requested identifier, or None if the Gio.Drive doesn’t have this kind of identifier. 
    */
  getIdentifier(kind: string): string | null;
  /**
    * Gets the name of self.
    * @returns a string containing self’s name. The returned string should be freed when no longer needed. 
    */
  getName(): string;
  /**
    * Gets the sort key for self, if any.
    * @returns Sorting key for self or None if no such key is available. 
    */
  getSortKey(): string | null;
  /**
    * Gets a hint about how a drive can be started/stopped.
    * @returns A value from the Gio.DriveStartStopType enumeration. 
    */
  getStartStopType(): import('../Gio').DriveStartStopType;
  /**
    * Gets the icon for self.
    * @returns symbolic Gio.Icon for the self. Free the returned object with GObject.Object.unref(). 
    */
  getSymbolicIcon(): import('../Gio').Icon;
  /**
    * Get a list of mountable volumes for self.
    * @returns GLib.List containing any Gio.Volume objects on the given self. 
    */
  getVolumes(): import('../Gio').Volume[];
  /**
    * Checks if the self has media. Note that the OS may not be polling the drive for media changes; see Gio.Drive.is_media_check_automatic() for more details.
    * @returns True if self has media, False otherwise. 
    */
  hasMedia(): boolean;
  /**
    * Check if self has any mountable volumes.
    * @returns True if the self contains volumes, False otherwise. 
    */
  hasVolumes(): boolean;
  /**
    * Checks if self is capabable of automatically detecting media changes.
    * @returns True if the self is capabable of automatically detecting media changes, False otherwise. 
    */
  isMediaCheckAutomatic(): boolean;
  /**
    * Checks if the self supports removable media.
    * @returns True if self supports removable media, False otherwise. 
    */
  isMediaRemovable(): boolean;
  /**
    * Checks if the Gio.Drive and/or its media is considered removable by the user. See Gio.Drive.is_media_removable().
    * @returns True if self and/or its media is considered removable, False otherwise. 
    */
  isRemovable(): boolean;
  /**
    * Asynchronously polls self to see if media has been inserted or removed.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data to pass to callback 
    */
  pollForMedia(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes an operation started with Gio.Drive.poll_for_media() on a drive.
    * @param result a Gio.AsyncResult.
    * @returns True if the drive has been poll_for_mediaed successfully, False otherwise. 
    */
  pollForMediaFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Asynchronously starts a drive.
    * @param flags flags affecting the start operation.
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data to pass to callback 
    */
  start(flags: import('../Gio').DriveStartFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes starting a drive.
    * @param result a Gio.AsyncResult.
    * @returns True if the drive has been started successfully, False otherwise. 
    */
  startFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Asynchronously stops a drive.
    * @param flags flags affecting the unmount if required for stopping.
    * @param mountOperation a Gio.MountOperation or None to avoid user interaction.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback, or None.
    * @param userData user data to pass to callback 
    */
  stop(flags: import('../Gio').MountUnmountFlags, mountOperation: import('../Gio').MountOperation | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Finishes stopping a drive.
    * @param result a Gio.AsyncResult.
    * @returns True if the drive has been stopped successfully, False otherwise. 
    */
  stopFinish(result: import('../Gio').AsyncResult): boolean;
}

