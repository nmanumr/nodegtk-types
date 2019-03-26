import * as GObject from '../GObject';
export declare interface Initable extends GObject.GInterface { }

/**
  * Gio.Initable is implemented by objects that can fail during
initialization. If an object implements this interface then
it must be initialized as the first thing after construction,
either via Gio.Initable.init() or Gio.AsyncInitable.init_async()
(the latter is only available if it also implements Gio.AsyncInitable). 
  */
export declare class Initable {
  /**
    * Helper function for constructing Gio.Initable object. This is similar to GObject.Object.newv() but also initializes the object and returns None, setting an error on failure.
    * @param objectType a GObject.GType supporting Gio.Initable.
    * @param parameters the parameters to use to construct the object
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns a newly allocated GObject.Object, or None on error 
    */
  static newv(objectType: import('../GObject').GType, parameters: import('../GObject').Parameter, cancellable: import('../Gio').Cancellable | null): import('../GObject').Object;
  /**
    * Initializes the object implementing the interface.
    * @param cancellable optional Gio.Cancellable object, None to ignore.
    * @returns True if successful. If an error has occurred, this function will return False and set error appropriately if present. 
    */
  init(cancellable: import('../Gio').Cancellable | null): boolean;
}

