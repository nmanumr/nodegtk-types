/**
  * The GLib.HookList struct represents a list of hook functions. 
  */
export declare class HookList {
  /**
    * Removes all the GLib.Hook elements from a GLib.HookList. 
    */
  clear(): void;
  /**
    * Initializes a GLib.HookList. This must be called before the GLib.HookList is used.
    * @param hookSize the size of each element in the GLib.HookList, typically sizeof (GHook). 
    */
  init(hookSize: number): void;
  /**
    * Calls all of the GLib.Hook functions in a GLib.HookList.
    * @param mayRecurse True if functions which are already running (e.g. in another thread) can be called. If set to False, these are skipped 
    */
  invoke(mayRecurse: boolean): void;
  /**
    * Calls all of the GLib.Hook functions in a GLib.HookList. Any function which returns False is removed from the GLib.HookList.
    * @param mayRecurse True if functions which are already running (e.g. in another thread) can be called. If set to False, these are skipped 
    */
  invokeCheck(mayRecurse: boolean): void;
}

