/**
  * Gio.IOExtension is an opaque data structure and can only be accessed
using the following functions. 
  */
export declare class IOExtension {
  /**
    * Gets the name under which self was registered.
    * @returns the name of self. 
    */
  getName(): string;
  /**
    * Gets the priority with which self was registered.
    * @returns the priority of self 
    */
  getPriority(): number;
  /**
    * Gets the type associated with self.
    * @returns the type of self 
    */
  getType(): import('../GObject').GType;
}

