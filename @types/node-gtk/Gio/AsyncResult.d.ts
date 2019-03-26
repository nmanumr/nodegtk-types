import * as GObject from '../GObject';

/**
  * Provides a base class for implementing asynchronous function results. 
  */
export declare interface AsyncResult extends GObject.GInterface {
  /**
    * Gets the source object from a Gio.AsyncResult.
    * @returns a new reference to the source object for the self, or None if there is none. 
    */
  getSourceObject(): import('../GObject').Object | null;
  /**
    * Gets the user data from a Gio.AsyncResult.
    * @returns the user data for self. 
    */
  getUserData(): Object | null;
  /**
    * Checks if self has the given source_tag (generally a function pointer indicating the function self was created by).
    * @param sourceTag an application-defined tag
    * @returns True if self has the indicated source_tag, False if not. 
    */
  isTagged(sourceTag: Object | null): boolean;
  /**
    * If self is a Gio.SimpleAsyncResult, this is equivalent to Gio.SimpleAsyncResult.propagate_error(). Otherwise it returns False.
    * @returns True if error is has been filled in with an error from self, False if not. 
    */
  legacyPropagateError(): boolean;
}

