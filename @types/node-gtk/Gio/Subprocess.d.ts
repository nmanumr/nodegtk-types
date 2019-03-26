import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface Subprocess extends GObject.Object, Gio.Initable { }

/**
  * Gio.Subprocess allows the creation of and interaction with child
processes. 
  */
export declare class Subprocess {
  /**
    * Create a new process with the given flags and argument list.
    * @param argv commandline arguments for the subprocess
    * @param flags flags that define the behaviour of the subprocess
    * @returns A newly created Gio.Subprocess, or None on error (and error will be set) 
    */
  static new(argv: string, flags: import('../Gio').SubprocessFlags): import('../Gio').Subprocess;
  /**
    * Communicate with the subprocess until it terminates, and all input and output has been completed.
    * @param stdinBuf data to send to the stdin of the subprocess, or None
    * @param cancellable a Gio.Cancellable
    * @returns True if successful   stdout_buf:data read from the subprocess stdout stderr_buf:data read from the subprocess stderr 
    */
  communicate(stdinBuf: import('../GLib').Bytes | null, cancellable: import('../Gio').Cancellable | null): [boolean, import('../GLib').Bytes | null, import('../GLib').Bytes | null];
  /**
    * Asynchronous version of Gio.Subprocess.communicate().  Complete invocation with Gio.Subprocess.communicate_finish().
    * @param stdinBuf Input data, or None
    * @param cancellable Cancellable
    * @param callback Callback
    * @param userData User data 
    */
  communicateAsync(stdinBuf: import('../GLib').Bytes | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Complete an invocation of Gio.Subprocess.communicate_async().
    * @param result Result
    * @returns stdout_buf:Return location for stdout data stderr_buf:Return location for stderr data 
    */
  communicateFinish(result: import('../Gio').AsyncResult): [boolean, import('../GLib').Bytes | null, import('../GLib').Bytes | null];
  /**
    * Like Gio.Subprocess.communicate(), but validates the output of the process as UTF-8, and returns it as a regular NUL terminated string.
    * @param stdinBuf data to send to the stdin of the subprocess, or None
    * @param cancellable a Gio.Cancellable
    * @returns stdout_buf:data read from the subprocess stdout stderr_buf:data read from the subprocess stderr 
    */
  communicateUtf8(stdinBuf: string | null, cancellable: import('../Gio').Cancellable | null): [boolean, string | null, string | null];
  /**
    * Asynchronous version of Gio.Subprocess.communicate_utf8().  Complete invocation with Gio.Subprocess.communicate_utf8_finish().
    * @param stdinBuf Input data, or None
    * @param cancellable Cancellable
    * @param callback Callback
    * @param userData User data 
    */
  communicateUtf8Async(stdinBuf: string | null, cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Complete an invocation of Gio.Subprocess.communicate_utf8_async().
    * @param result Result
    * @returns stdout_buf:Return location for stdout data stderr_buf:Return location for stderr data 
    */
  communicateUtf8Finish(result: import('../Gio').AsyncResult): [boolean, string | null, string | null];
  /**
    * Use an operating-system specific method to attempt an immediate, forceful termination of the process.  There is no mechanism to determine whether or not the request itself was successful; however, you can use Gio.Subprocess.wait() to monitor the status of the process after calling this function. 
    */
  forceExit(): void;
  /**
    * Check the exit status of the subprocess, given that it exited normally.  This is the value passed to the exit() system call or the return value from main.
    * @returns the exit status 
    */
  getExitStatus(): number;
  /**
    * On UNIX, returns the process ID as a decimal string. On Windows, returns the result of GetProcessId() also as a string. 
    */
  getIdentifier(): string;
  /**
    * Check if the given subprocess exited normally (ie: by way of exit() or return from main()).
    * @returns True if the case of a normal exit 
    */
  getIfExited(): boolean;
  /**
    * Check if the given subprocess terminated in response to a signal.
    * @returns True if the case of termination due to a signal 
    */
  getIfSignaled(): boolean;
  /**
    * Gets the raw status code of the process, as from waitpid().
    * @returns the (meaningless) waitpid() exit status from the kernel 
    */
  getStatus(): number;
  /**
    * Gets the Gio.InputStream from which to read the stderr output of self.
    * @returns the stderr pipe 
    */
  getStderrPipe(): import('../Gio').InputStream;
  /**
    * Gets the Gio.OutputStream that you can write to in order to give data to the stdin of self.
    * @returns the stdout pipe 
    */
  getStdinPipe(): import('../Gio').OutputStream;
  /**
    * Gets the Gio.InputStream from which to read the stdout output of self.
    * @returns the stdout pipe 
    */
  getStdoutPipe(): import('../Gio').InputStream;
  /**
    * Checks if the process was “successful”.  A process is considered successful if it exited cleanly with an exit status of 0, either by way of the exit() system call or return from main().
    * @returns True if the process exited cleanly with a exit status of 0 
    */
  getSuccessful(): boolean;
  /**
    * Get the signal number that caused the subprocess to terminate, given that it terminated due to a signal.
    * @returns the signal causing termination 
    */
  getTermSig(): number;
  /**
    * Sends the UNIX signal signal_num to the subprocess, if it is still running.
    * @param signalNum the signal number to send 
    */
  sendSignal(signalNum: number): void;
  /**
    * Synchronously wait for the subprocess to terminate.
    * @param cancellable a Gio.Cancellable
    * @returns True on success, False if cancellable was cancelled 
    */
  wait(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Wait for the subprocess to terminate.
    * @param cancellable a Gio.Cancellable, or None
    * @param callback a Gio.asyncReadyCallback to call when the operation is complete
    * @param userData user_data for callback 
    */
  waitAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Combines Gio.Subprocess.wait() with GLib.spawn_check_exit_status().
    * @param cancellable a Gio.Cancellable
    * @returns True on success, False if process exited abnormally, or cancellable was cancelled 
    */
  waitCheck(cancellable: import('../Gio').Cancellable | null): boolean;
  /**
    * Combines Gio.Subprocess.wait_async() with GLib.spawn_check_exit_status().
    * @param cancellable a Gio.Cancellable, or None
    * @param callback a Gio.asyncReadyCallback to call when the operation is complete
    * @param userData user_data for callback 
    */
  waitCheckAsync(cancellable: import('../Gio').Cancellable | null, callback: import('../Gio').asyncReadyCallback | null, userData: Object | null): void;
  /**
    * Collects the result of a previous call to Gio.Subprocess.wait_check_async().
    * @param result the Gio.AsyncResult passed to your Gio.asyncReadyCallback
    * @returns True if successful, or False with error set 
    */
  waitCheckFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Collects the result of a previous call to Gio.Subprocess.wait_async().
    * @param result the Gio.AsyncResult passed to your Gio.asyncReadyCallback
    * @returns True if successful, or False with error set 
    */
  waitFinish(result: import('../Gio').AsyncResult): boolean;
  /**
    * Argument vector 
    */
  argv: string;
  /**
    * Subprocess flags 
    */
  flags: import('../Gio').SubprocessFlags;
}

