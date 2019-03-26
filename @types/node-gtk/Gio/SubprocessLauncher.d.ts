import * as GObject from '../GObject';
export declare interface SubprocessLauncher extends GObject.Object { }

/**
  * This class contains a set of options for launching child processes,
such as where its standard input and output will be directed, the
argument list, the environment, and more. 
  */
export declare class SubprocessLauncher {
  /**
    * Creates a new Gio.SubprocessLauncher.
    * @param flags Gio.SubprocessFlags 
    */
  static new(flags: import('../Gio').SubprocessFlags): import('../Gio').SubprocessLauncher;
  /**
    * Returns the value of the environment variable variable in the environment of processes launched from this launcher.
    * @param variable the environment variable to get
    * @returns the value of the environment variable, None if unset 
    */
  getenv(variable: string): string;
  /**
    * Sets the current working directory that processes will be launched with.
    * @param cwd the cwd for launched processes 
    */
  setCwd(cwd: string): void;
  /**
    * Replace the entire environment of processes launched from this launcher with the given ‘environ’ variable.
    * @param env the replacement environment 
    */
  setEnviron(env: string): void;
  /**
    * Sets the flags on the launcher.
    * @param flags Gio.SubprocessFlags 
    */
  setFlags(flags: import('../Gio').SubprocessFlags): void;
  /**
    * Sets the file path to use as the stderr for spawned processes.
    * @param path a filename or None 
    */
  setStderrFilePath(path: string | null): void;
  /**
    * Sets the file path to use as the stdin for spawned processes. 
    */
  setStdinFilePath(path: string): void;
  /**
    * Sets the file path to use as the stdout for spawned processes.
    * @param path a filename or None 
    */
  setStdoutFilePath(path: string | null): void;
  /**
    * Sets the environment variable variable in the environment of processes launched from this launcher.
    * @param variable the environment variable to set, must not contain ‘=’
    * @param value the new value for the variable
    * @param overwrite whether to change the variable if it already exists 
    */
  setenv(variable: string, value: string, overwrite: boolean): void;
  /**
    * Creates a Gio.Subprocess given a provided array of arguments.
    * @param argv Command line arguments
    * @returns A new Gio.Subprocess, or None on error (and error will be set) 
    */
  spawnv(argv: string): import('../Gio').Subprocess;
  /**
    * Transfer an arbitrary file descriptor from parent process to the child.  This function takes “ownership” of the fd; it will be closed in the parent when self is freed.
    * @param sourceFd File descriptor in parent process
    * @param targetFd Target descriptor for child process 
    */
  takeFd(sourceFd: number, targetFd: number): void;
  /**
    * Sets the file descriptor to use as the stderr for spawned processes.
    * @param fd a file descriptor, or -1 
    */
  takeStderrFd(fd: number): void;
  /**
    * Sets the file descriptor to use as the stdin for spawned processes.
    * @param fd a file descriptor, or -1 
    */
  takeStdinFd(fd: number): void;
  /**
    * Sets the file descriptor to use as the stdout for spawned processes.
    * @param fd a file descriptor, or -1 
    */
  takeStdoutFd(fd: number): void;
  /**
    * Removes the environment variable variable from the environment of processes launched from this launcher.
    * @param variable the environment variable to unset, must not contain ‘=’ 
    */
  unsetenv(variable: string): void;
  /**
    * Gio.SubprocessFlags for launched processes 
    */
  flags: import('../Gio').SubprocessFlags;
}

