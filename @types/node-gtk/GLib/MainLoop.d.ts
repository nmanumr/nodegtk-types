/**
  * The GMainLoop struct is an opaque data type
representing the main event loop of a GLib or GTK+ application. 
  */
export declare class MainLoop {
  /**
    * Creates a new GLib.MainLoop structure.
    * @param context a GLib.MainContext  (if None, the default context will be used).
    * @param isRunning set to True to indicate that the loop is running. This is not very important since calling GLib.MainLoop.run() will set this to True anyway.
    * @returns a new GLib.MainLoop. 
    */
  static new(context: import('../GLib').MainContext | null, isRunning: boolean): import('../GLib').MainLoop;
  /**
    * Returns the GLib.MainContext of self.
    * @returns the GLib.MainContext of self 
    */
  getContext(): import('../GLib').MainContext;
  /**
    * Checks to see if the main loop is currently being run via GLib.MainLoop.run().
    * @returns True if the mainloop is currently being run. 
    */
  isRunning(): boolean;
  /**
    * Stops a GLib.MainLoop from running. Any calls to GLib.MainLoop.run() for the loop will return. 
    */
  quit(): void;
  /**
    * Increases the reference count on a GLib.MainLoop object by one.
    * @returns self 
    */
  ref(): import('../GLib').MainLoop;
  /**
    * Runs a main loop until GLib.MainLoop.quit() is called on the loop. If this is called for the thread of the loop’s GLib.MainContext, it will process events from the loop, otherwise it will simply wait. 
    */
  run(): void;
  /**
    * Decreases the reference count on a GLib.MainLoop object by one. If the result is zero, free the loop and free all associated memory. 
    */
  unref(): void;
}

