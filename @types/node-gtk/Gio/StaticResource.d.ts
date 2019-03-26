/**
  * Gio.StaticResource is an opaque data structure and can only be accessed
using the following functions. 
  */
export declare class StaticResource {
  /**
    * Finalized a Gio.Resource initialized by Gio.StaticResource.init(). 
    */
  fini(): void;
  /**
    * Gets the Gio.Resource that was registered by a call to Gio.StaticResource.init().
    * @returns a Gio.Resource 
    */
  getResource(): import('../Gio').Resource;
  /**
    * Initializes a Gio.Resource from static data using a Gio.StaticResource. 
    */
  init(): void;
}

