/**
  * A Gtk.TreeRowReference tracks model changes so that it always refers to the
same row (a Gtk.TreePath refers to a position, not a fixed row). Create a
new Gtk.TreeRowReference with Gtk.TreeRowReference.new(). 
  */
export declare class TreeRowReference {
  /**
    * Lets a set of row reference created by Gtk.TreeRowReference.new_proxy() know that the model emitted the Gtk.TreeModel ::row-deleted signal.
    * @param proxy a GObject.Object
    * @param path the path position that was deleted 
    */
  static deleted(proxy: import('../GObject').Object, path: import('../Gtk').TreePath): void;
  /**
    * Lets a set of row reference created by Gtk.TreeRowReference.new_proxy() know that the model emitted the Gtk.TreeModel ::row-inserted signal.
    * @param proxy a GObject.Object
    * @param path the row position that was inserted 
    */
  static inserted(proxy: import('../GObject').Object, path: import('../Gtk').TreePath): void;
  /**
    * Creates a row reference based on path.
    * @param model a Gtk.TreeModel
    * @param path a valid Gtk.TreePath-struct to monitor
    * @returns a newly allocated Gtk.TreeRowReference, or None 
    */
  static new(model: import('../Gtk').TreeModel, path: import('../Gtk').TreePath): import('../Gtk').TreeRowReference;
  /**
    * You do not need to use this function.
    * @param proxy a proxy GObject.Object
    * @param model a Gtk.TreeModel
    * @param path a valid Gtk.TreePath-struct to monitor
    * @returns a newly allocated Gtk.TreeRowReference, or None 
    */
  static newProxy(proxy: import('../GObject').Object, model: import('../Gtk').TreeModel, path: import('../Gtk').TreePath): import('../Gtk').TreeRowReference;
  /**
    * Copies a Gtk.TreeRowReference.
    * @returns a copy of self 
    */
  copy(): import('../Gtk').TreeRowReference;
  /**
    * Free’s self. self may be None 
    */
  free(): void;
  /**
    * Returns the model that the row reference is monitoring.
    * @returns the model 
    */
  getModel(): import('../Gtk').TreeModel;
  /**
    * Returns a path that the row reference currently points to, or None if the path pointed to is no longer valid.
    * @returns a current path, or None 
    */
  getPath(): import('../Gtk').TreePath | null;
  /**
    * Returns True if the self is non-None and refers to a current valid path.
    * @returns True if self points to a valid path 
    */
  valid(): boolean;
}

