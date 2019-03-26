import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface SimpleAsyncResult extends GObject.Object, Gio.AsyncResult { }

/**
  * As of GLib 2.46, Gio.SimpleAsyncResult is deprecated in favor of
Gio.Task, which provides a simpler API. 
  */
export declare class SimpleAsyncResult {
  /**
    * Ensures that the data passed to the _finish function of an async operation is consistent.  Three checks are performed.
    * @param result the Gio.AsyncResult passed to the _finish function.
    * @param source the GObject.Object passed to the _finish function.
    * @param sourceTag the asynchronous function.
    * @returns True if all checks passed or False if any failed. 
    */
  static isValid(result: import('../Gio').AsyncResult, source: import('../GObject').Object | null, sourceTag: Object | null): boolean;
  /**
    * Creates a Gio.SimpleAsyncResult.
    * @param sourceObject a GObject.Object, or None.
    * @param callback a Gio.asyncReadyCallback.
    * @param userData user data passed to callback.
    * @param sourceTag the asynchronous function.
    * @returns a Gio.SimpleAsyncResult. 
    */
  static new(sourceObject: import('../GObject').Object | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null, sourceTag: Object | null): import('../Gio').SimpleAsyncResult;
  /**
    * Creates a Gio.SimpleAsyncResult from an error condition.
    * @param sourceObject a GObject.Object, or None.
    * @param callback a Gio.asyncReadyCallback.
    * @param userData user data passed to callback.
    * @param error a GLib.Error
    * @returns a Gio.SimpleAsyncResult. 
    */
  static newFromError(sourceObject: import('../GObject').Object | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null, error: import('../GLib').Error): import('../Gio').SimpleAsyncResult;
  /**
    * Completes an asynchronous I/O job immediately. Must be called in the thread where the asynchronous result was to be delivered, as it invokes the callback directly. If you are in a different thread use Gio.SimpleAsyncResult.complete_in_idle(). 
    */
  complete(): void;
  /**
    * Completes an asynchronous function in an idle handler in the thread-default main context of the thread that self was initially created in (and re-pushes that context around the invocation of the callback). 
    */
  completeInIdle(): void;
  /**
    * Gets the operation result boolean from within the asynchronous result.
    * @returns True if the operation’s result was True, False if the operation’s result was False. 
    */
  getOpResGboolean(): boolean;
  /**
    * Gets a gssize from the asynchronous result.
    * @returns a gssize returned from the asynchronous function. 
    */
  getOpResGssize(): number;
  /**
    * Propagates an error from within the simple asynchronous result to a given destination.
    * @returns True if the error was propagated to dest. False otherwise. 
    */
  propagateError(): boolean;
  /**
    * Sets a Gio.Cancellable to check before dispatching results.
    * @param checkCancellable a Gio.Cancellable to check, or None to unset 
    */
  setCheckCancellable(checkCancellable: import('../Gio').Cancellable | null): void;
  /**
    * Sets the result from a GLib.Error.
    * @param error GLib.Error. 
    */
  setFromError(error: import('../GLib').Error): void;
  /**
    * Sets whether to handle cancellation within the asynchronous operation.
    * @param handleCancellation a bool. 
    */
  setHandleCancellation(handleCancellation: boolean): void;
  /**
    * Sets the operation result to a boolean within the asynchronous result.
    * @param opRes a bool. 
    */
  setOpResGboolean(opRes: boolean): void;
  /**
    * Sets the operation result within the asynchronous result to the given op_res.
    * @param opRes a #gssize. 
    */
  setOpResGssize(opRes: number): void;
}

