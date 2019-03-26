import * as GObject from '../GObject';

/**
  * Gio.ApplicationCommandLine represents a command-line invocation of
an application.  It is created by Gio.Application and emitted
in the Gio.Application ::command-line signal and virtual function. 
  */
export declare class ApplicationCommandLine extends GObject.Object {
  /**
    * Creates a Gio.File corresponding to a filename that was given as part of the invocation of self.
    * @param arg an argument from self
    * @returns a new Gio.File 
    */
  createFileForArg(arg: string): import('../Gio').File;
  /**
    * Gets the list of arguments that was passed on the command line.
    * @returns the string array containing the arguments (the argv) 
    */
  getArguments(): string[];
  /**
    * Gets the working directory of the command line invocation. The string may contain non-utf8 data.
    * @returns the current directory, or None 
    */
  getCwd(): string | null;
  /**
    * Gets the contents of the ‘environ’ variable of the command line invocation, as would be returned by GLib.get_environ(), ie as a None-terminated list of strings in the form ‘NAME=VALUE’. The strings may contain non-utf8 data.
    * @returns the environment strings, or None if they were not sent 
    */
  getEnviron(): string[];
  /**
    * Gets the exit status of self.  See Gio.ApplicationCommandLine.set_exit_status() for more information.
    * @returns the exit status 
    */
  getExitStatus(): number;
  /**
    * Determines if self represents a remote invocation.
    * @returns True if the invocation was remote 
    */
  getIsRemote(): boolean;
  /**
    * Gets the options there were passed to g_application_command_line().
    * @returns a GLib.VariantDict with the options 
    */
  getOptionsDict(): import('../GLib').VariantDict;
  /**
    * Gets the platform data associated with the invocation of self.
    * @returns the platform data, or None 
    */
  getPlatformData(): import('../GLib').Variant | null;
  /**
    * Gets the stdin of the invoking process.
    * @returns a Gio.InputStream for stdin 
    */
  getStdin(): import('../Gio').InputStream;
  /**
    * Gets the value of a particular environment variable of the command line invocation, as would be returned by GLib.getenv().  The strings may contain non-utf8 data.
    * @param name the environment variable to get
    * @returns the value of the variable, or None if unset or unsent 
    */
  getenv(name: string): string;
  /**
    * Sets the exit status that will be used when the invoking process exits.
    * @param exitStatus the exit status 
    */
  setExitStatus(exitStatus: number): void;
  /**
    * The commandline that caused this ::command-line signal emission 
    */
  arguments: import('../GLib').Variant;
  /**
    * True if this is a remote commandline 
    */
  readonly isRemote: boolean;
  /**
    * The options sent along with the commandline 
    */
  options: import('../GLib').Variant;
  /**
    * Platform-specific data for the commandline 
    */
  platformData: import('../GLib').Variant;
}

