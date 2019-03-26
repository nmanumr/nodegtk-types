import * as GObject from '../GObject';
export declare interface Permission extends GObject.Object { }

/**
  * A Gio.Permission represents the status of the caller’s permission to
perform a certain action. 
  */
export declare abstract class Permission {
  /**
    * Attempts to acquire the permission represented by self.
    * @param cancellable a Gio.Cancellable, or None
    * @returns True if the permission was successfully acquired 
    */
  acquire(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Attempts to acquire the permission represented by self.
    * @param cancellable a Gio.Cancellable, or None
    * @param callback the Gio.asyncReadyCallback to call when done
    * @param userData the user data to pass to callback 
    */
  acquireAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Collects the result of attempting to acquire the permission represented by self.
    * @param result the Gio.AsyncResult given to the Gio.asyncReadyCallback
    * @returns True if the permission was successfully acquired 
    */
  acquireFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Gets the value of the ‘allowed’ property.  This property is True if the caller currently has permission to perform the action that self represents the permission to perform.
    * @returns the value of the ‘allowed’ property 
    */
  getAllowed(): boolean;
  /**
    * Gets the value of the ‘can-acquire’ property.  This property is True if it is generally possible to acquire the permission by calling Gio.Permission.acquire().
    * @returns the value of the ‘can-acquire’ property 
    */
  getCanAcquire(): boolean;
  /**
    * Gets the value of the ‘can-release’ property.  This property is True if it is generally possible to release the permission by calling Gio.Permission.release().
    * @returns the value of the ‘can-release’ property 
    */
  getCanRelease(): boolean;
  /**
    * This function is called by the Gio.Permission implementation to update the properties of the permission.  You should never call this function except from a Gio.Permission implementation.
    * @param allowed the new value for the ‘allowed’ property
    * @param canAcquire the new value for the ‘can-acquire’ property
    * @param canRelease the new value for the ‘can-release’ property 
    */
  implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void;
  /**
    * Attempts to release the permission represented by self.
    * @param cancellable a Gio.Cancellable, or None
    * @returns True if the permission was successfully released 
    */
  release(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Attempts to release the permission represented by self.
    * @param cancellable a Gio.Cancellable, or None
    * @param callback the Gio.asyncReadyCallback to call when done
    * @param userData the user data to pass to callback 
    */
  releaseAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Collects the result of attempting to release the permission represented by self.
    * @param result the Gio.AsyncResult given to the Gio.asyncReadyCallback
    * @returns True if the permission was successfully released 
    */
  releaseFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * If the caller is allowed to perform the action 
    */
  readonly allowed: boolean;
  /**
    * If calling Gio.Permission.acquire() makes sense 
    */
  readonly canAcquire: boolean;
  /**
    * If calling Gio.Permission.release() makes sense 
    */
  readonly canRelease: boolean;
}

