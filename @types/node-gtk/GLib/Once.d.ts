/**
  * A GLib.Once struct controls a one-time initialization function. Any
one-time initialization function must have its own unique GLib.Once
struct. 
  */
export declare class Once {
  /**
    * Function to be called when starting a critical initialization section. The argument location must point to a static 0-initialized variable that will be set to a value other than 0 at the end of the initialization section. In combination with GLib.Once.init_leave() and the unique address value_location, it can be ensured that an initialization section will be executed only once during a program’s life time, and that concurrent threads are blocked until initialization completed. To be used in constructs like this:
    * @param location location of a static initializable variable containing 0
    * @returns True if the initialization section should be entered, False and blocks otherwise 
    */
  static initEnter(location: Object): boolean;
  /**
    * Counterpart to GLib.Once.init_enter(). Expects a location of a static 0-initialized initialization variable, and an initialization value other than 0. Sets the variable to the initialization value, and releases concurrent threads blocking in GLib.Once.init_enter() on this initialization variable.
    * @param location location of a static initializable variable containing 0
    * @param result new non-0 value for value_location 
    */
  static initLeave(location: Object, result: number): void;
}

