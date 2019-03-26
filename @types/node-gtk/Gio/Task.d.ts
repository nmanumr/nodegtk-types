import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface Task extends GObject.Object, Gio.AsyncResult { }

/**
  * A Gio.Task represents and manages a cancellable “task”. 
  */
export declare class Task {
  /**
    * Checks that result is a Gio.Task, and that source_object is its source object (or that source_object is None and result has no source object). This can be used in g_return_if_fail() checks.
    * @param result A Gio.AsyncResult
    * @param sourceObject the source object expected to be associated with the task
    * @returns True if result and source_object are valid, False if not 
    */
  static isValid(result: import('../Gio').AsyncResult, sourceObject: import('../GObject').Object | null): boolean;
  /**
    * Creates a Gio.Task acting on source_object, which will eventually be used to invoke callback in the current thread-default main context.
    * @param sourceObject the GObject.Object that owns this task, or None.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @param callback a Gio.asyncReadyCallback.
    * @param callbackData user data passed to callback.
    * @returns a Gio.Task. 
    */
  static new(sourceObject: import('../GObject').Object | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, callbackData: Object | null): import('../Gio').Task;
  /**
    * Creates a Gio.Task and then immediately calls Gio.Task.return_error() on it. Use this in the wrapper function of an asynchronous method when you want to avoid even calling the virtual method. You can then use Gio.AsyncResult.is_tagged() in the finish method wrapper to check if the result there is tagged as having been created by the wrapper method, and deal with it appropriately if so.
    * @param sourceObject the GObject.Object that owns this task, or None.
    * @param callback a Gio.asyncReadyCallback.
    * @param callbackData user data passed to callback.
    * @param sourceTag an opaque pointer indicating the source of this task
    * @param error error to report 
    */
  static reportError(sourceObject: import('../GObject').Object | null, callback: import('../Gio').asyncReadyCallback | null, callbackData: Object | null, sourceTag: Object | null, error: import('../GLib').Error): void;
  /**
    * Gets self’s Gio.Cancellable
    * @returns self’s Gio.Cancellable 
    */
  getCancellable(): import('../Gio').Cancellable;
  /**
    * Gets self’s check-cancellable flag. See Gio.Task.set_check_cancellable() for more details. 
    */
  getCheckCancellable(): boolean;
  /**
    * Gets the value of Gio.Task :completed. This changes from False to True after the task’s callback is invoked, and will return False if called from inside the callback.
    * @returns True if the task has completed, False otherwise. 
    */
  getCompleted(): boolean;
  /**
    * Gets the GLib.MainContext that self will return its result in (that is, the context that was the thread-default main context at the point when self was created).
    * @returns self’s GLib.MainContext 
    */
  getContext(): import('../GLib').MainContext;
  /**
    * Gets self’s priority
    * @returns self’s priority 
    */
  getPriority(): number;
  /**
    * Gets self’s return-on-cancel flag. See Gio.Task.set_return_on_cancel() for more details. 
    */
  getReturnOnCancel(): boolean;
  /**
    * Gets the source object from self. Like Gio.AsyncResult.get_source_object(), but does not ref the object.
    * @returns self’s source object, or None 
    */
  getSourceObject(): import('../GObject').Object | null;
  /**
    * Gets self’s source tag. See Gio.Task.set_source_tag().
    * @returns self’s source tag 
    */
  getSourceTag(): Object | null;
  /**
    * Gets self’s task_data.
    * @returns self’s task_data. 
    */
  getTaskData(): Object | null;
  /**
    * Tests if self resulted in an error.
    * @returns True if the task resulted in an error, False otherwise. 
    */
  hadError(): boolean;
  /**
    * Gets the result of self as a bool.
    * @returns the task result, or False on error 
    */
  propagateBoolean(): boolean;
  /**
    * Gets the result of self as an integer (#gssize).
    * @returns the task result, or -1 on error 
    */
  propagateInt(): number;
  /**
    * Gets the result of self as a pointer, and transfers ownership of that value to the caller.
    * @returns the task result, or None on error 
    */
  propagatePointer(): Object | null;
  /**
    * Sets self’s result to result and completes the task (see Gio.Task.return_pointer() for more discussion of exactly what this means).
    * @param result the bool result of a task function. 
    */
  returnBoolean(result: boolean): void;
  /**
    * Sets self’s result to error (which self assumes ownership of) and completes the task (see Gio.Task.return_pointer() for more discussion of exactly what this means).
    * @param error the GLib.Error result of a task function. 
    */
  returnError(error: import('../GLib').Error): void;
  /**
    * Checks if self’s Gio.Cancellable has been cancelled, and if so, sets self’s error accordingly and completes the task (see Gio.Task.return_pointer() for more discussion of exactly what this means).
    * @returns True if self has been cancelled, False if not 
    */
  returnErrorIfCancelled(): boolean;
  /**
    * Sets self’s result to result and completes the task (see Gio.Task.return_pointer() for more discussion of exactly what this means).
    * @param result the integer (#gssize) result of a task function. 
    */
  returnInt(result: number): void;
  /**
    * Sets self’s result to result and completes the task. If result is not None, then result_destroy will be used to free result if the caller does not take ownership of it with Gio.Task.propagate_pointer().
    * @param result the pointer result of a task function
    * @param resultDestroy a GLib.DestroyNotify function. 
    */
  returnPointer(result: Object | null, resultDestroy: import('../GLib').destroyNotify | null): void;
  /**
    * Sets or clears self’s check-cancellable flag. If this is True (the default), then Gio.Task.propagate_pointer(), etc, and Gio.Task.had_error() will check the task’s Gio.Cancellable first, and if it has been cancelled, then they will consider the task to have returned an “Operation was cancelled” error (Gio.IOErrorEnum.CANCELLED), regardless of any other error or return value the task may have had.
    * @param checkCancellable whether Gio.Task will check the state of its Gio.Cancellable for you. 
    */
  setCheckCancellable(checkCancellable: boolean): void;
  /**
    * Sets self’s priority. If you do not call this, it will default to GLib.PRIORITY_DEFAULT.
    * @param priority the priority of the request 
    */
  setPriority(priority: number): void;
  /**
    * Sets or clears self’s return-on-cancel flag. This is only meaningful for tasks run via g_task_run_in_thread() or g_task_run_in_thread_sync().
    * @param returnOnCancel whether the task returns automatically when it is cancelled.
    * @returns True if self’s return-on-cancel flag was changed to match return_on_cancel. False if self has already been cancelled. 
    */
  setReturnOnCancel(returnOnCancel: boolean): boolean;
  /**
    * Sets self’s source tag. You can use this to tag a task return value with a particular pointer (usually a pointer to the function doing the tagging) and then later check it using Gio.Task.get_source_tag() (or Gio.AsyncResult.is_tagged()) in the task’s “finish” function, to figure out if the response came from a particular place.
    * @param sourceTag an opaque pointer indicating the source of this task 
    */
  setSourceTag(sourceTag: Object | null): void;
  /**
    * Sets self’s task data (freeing the existing task data, if any).
    * @param taskData task-specific data
    * @param taskDataDestroy GLib.DestroyNotify for task_data 
    */
  setTaskData(taskData: Object | null, taskDataDestroy: import('../GLib').destroyNotify | null): void;
  /**
    * Whether the task has completed yet 
    */
  readonly completed: boolean;
}

