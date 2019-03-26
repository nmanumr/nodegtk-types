/**
  * A GObject.ParamSpecPool maintains a collection of GObject.ParamSpecs which can be
quickly accessed by owner and name. The implementation of the GObject.Object property
system uses such a pool to store the GObject.ParamSpecs of the properties all object
types. 
  */
export declare class ParamSpecPool {
  /**
    * Creates a new GObject.ParamSpecPool.
    * @param typePrefixing Whether the pool will support type-prefixed property names.
    * @returns a newly allocated GObject.ParamSpecPool. 
    */
  static new(typePrefixing: boolean): import('../GObject').ParamSpecPool;
  /**
    * Inserts a GObject.ParamSpec in the pool.
    * @param pspec the GObject.ParamSpec to insert
    * @param ownerType a GObject.GType identifying the owner of pspec 
    */
  insert(pspec: import('../GObject').ParamSpec, ownerType: import('../GObject').GType): void;
  /**
    * Gets an array of all GObject.ParamSpecs owned by owner_type in the pool.
    * @param ownerType the owner to look for
    * @returns a newly allocated array containing pointers to all GObject.ParamSpecs owned by owner_type in the pool 
    */
  list(ownerType: import('../GObject').GType): import('../GObject').ParamSpec[];
  /**
    * Gets an GLib.List of all GObject.ParamSpecs owned by owner_type in the pool.
    * @param ownerType the owner to look for
    * @returns a GLib.List of all GObject.ParamSpecs owned by owner_type in the pool:obj:GObject.ParamSpecs <GObject.ParamSpec>. 
    */
  listOwned(ownerType: import('../GObject').GType): import('../GObject').ParamSpec[];
  /**
    * Looks up a GObject.ParamSpec in the pool.
    * @param paramName the name to look for
    * @param ownerType the owner to look for
    * @param walkAncestors If True, also try to find a GObject.ParamSpec with param_name owned by an ancestor of owner_type.
    * @returns The found GObject.ParamSpec, or None if no matching GObject.ParamSpec was found. 
    */
  lookup(paramName: string, ownerType: import('../GObject').GType, walkAncestors: boolean): import('../GObject').ParamSpec;
  /**
    * Removes a GObject.ParamSpec from the pool.
    * @param pspec the GObject.ParamSpec to remove 
    */
  remove(pspec: import('../GObject').ParamSpec): void;
}

