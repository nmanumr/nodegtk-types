/**
  * Gio.Cancellable is a thread-safe operation cancellation stack used
throughout GIO to allow for cancellation of synchronous and
asynchronous operations. 
  */
export declare class Cancellable extends import('../GObject').Object{
/**
  * Gets the top cancellable from the stack.
  * @returns a Gio.Cancellable from the top of the stack, or None if the stack is empty. 
  */
static getCurrent(): import('../Gio').Cancellable | null;
/**
  * Creates a new Gio.Cancellable object.
  * @returns a Gio.Cancellable. 
  */
static new(): import('../Gio').Cancellable;
/**
  * Will set self to cancelled, and will emit the Gio.Cancellable ::cancelled signal. (However, see the warning about race conditions in the documentation for that signal if you are planning to connect to it.) 
  */
cancel(): void;
/**
  * Convenience function to connect to the Gio.Cancellable ::cancelled signal. Also handles the race condition that may happen if the cancellable is cancelled right before connecting.
  * @param callback The GObject.Callback to connect.
  * @param data Data to pass to callback.
  * @returns The id of the signal handler or 0 if self has already been cancelled. 
  */
connect(callback: import('../GObject').Callback, data: Object | null): number;
/**
  * Disconnects a handler from a cancellable instance similar to GObject.signal_handler_disconnect().  Additionally, in the event that a signal handler is currently running, this call will block until the handler has finished.  Calling this function from a Gio.Cancellable ::cancelled signal handler will therefore result in a deadlock.
  * @param handlerId Handler id of the handler to be disconnected, or 0. 
  */
disconnect(handlerId: number): void;
/**
  * Gets the file descriptor for a cancellable job. This can be used to implement cancellable operations on Unix systems. The returned fd will turn readable when self is cancelled.
  * @returns A valid file descriptor. %-1 if the file descriptor is not supported, or on errors. 
  */
getFd(): number;
/**
  * Checks if a cancellable job has been cancelled.
  * @returns True if self is cancelled, False if called with None or if item is not cancelled. 
  */
isCancelled(): boolean;
/**
  * Creates a GLib.PollFD corresponding to self; this can be passed to GLib.poll() and used to poll for cancellation. This is useful both for unix systems without a native poll and for portability to windows.
  * @param pollfd a pointer to a GLib.PollFD
  * @returns True if pollfd was successfully initialized, False on failure to prepare the cancellable. 
  */
makePollfd(pollfd: import('../GLib').PollFD): boolean;
/**
  * Pops self off the cancellable stack (verifying that self is on the top of the stack). 
  */
popCurrent(): void;
/**
  * Pushes self onto the cancellable stack. The current cancellable can then be received using Gio.Cancellable.get_current(). 
  */
pushCurrent(): void;
/**
  * Releases a resources previously allocated by Gio.Cancellable.get_fd() or Gio.Cancellable.make_pollfd(). 
  */
releaseFd(): void;
/**
  * Resets self to its uncancelled state. 
  */
reset(): void;
/**
  * If the self is cancelled, sets the error to notify that the operation was cancelled.
  * @returns True if self was cancelled, False if it was not 
  */
setErrorIfCancelled(): boolean;
/**
  *   
  */
parentInstance: import('../GObject').Object;
}

