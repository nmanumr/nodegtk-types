import * as GObject from '../GObject';

/**
  * Integrating the launch with the launching application. This is used to
handle for instance startup notification and launching the new application
on the same screen as the launching window. 
  */
export declare class AppLaunchContext extends GObject.Object {
  /**
    * Creates a new application launch context. This is not normally used, instead you instantiate a subclass of this, such as #GdkAppLaunchContext.
    * @returns a Gio.AppLaunchContext. 
    */
  static new(): import('../Gio').AppLaunchContext;
  /**
    * Gets the display string for the self. This is used to ensure new applications are started on the same display as the launching application, by setting the DISPLAY environment variable.
    * @param info a Gio.AppInfo
    * @param files a GLib.List of Gio.File objects
    * @returns a display string for the display. 
    */
  getDisplay(info: import('../Gio').AppInfo, files: import('../Gio').File): string;
  /**
    * Gets the complete environment variable list to be passed to the child process when self is used to launch an application. This is a None-terminated array of strings, where each string has the form KEY=VALUE.
    * @returns the child’s environment 
    */
  getEnvironment(): string[];
  /**
    * Initiates startup notification for the application and returns the DESKTOP_STARTUP_ID for the launched operation, if supported.
    * @param info a Gio.AppInfo
    * @param files a GLib.List of of Gio.File objects
    * @returns a startup notification ID for the application, or None if not supported. 
    */
  getStartupNotifyId(info: import('../Gio').AppInfo, files: import('../Gio').File): string;
  /**
    * Called when an application has failed to launch, so that it can cancel the application startup notification started in Gio.AppLaunchContext.get_startup_notify_id().
    * @param startupNotifyId the startup notification id that was returned by Gio.AppLaunchContext.get_startup_notify_id(). 
    */
  launchFailed(startupNotifyId: string): void;
  /**
    * Arranges for variable to be set to value in the child’s environment when self is used to launch an application.
    * @param variable the environment variable to set
    * @param value the value for to set the variable to. 
    */
  setenv(variable: string, value: string): void;
  /**
    * Arranges for variable to be unset in the child’s environment when self is used to launch an application.
    * @param variable the environment variable to remove 
    */
  unsetenv(variable: string): void;
}

