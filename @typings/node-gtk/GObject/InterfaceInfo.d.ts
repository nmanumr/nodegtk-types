/**
  * A structure that provides information to the type system which is
used specifically for managing interface types. 
  */
export declare class InterfaceInfo {
/**
  * user-supplied data passed to the interface init/finalize functions 
  */
interfaceData: Object;
/**
  * location of the interface finalization function 
  */
interfaceFinalize: import('../GObject').InterfaceFinalizeFunc;
/**
  * location of the interface initialization function 
  */
interfaceInit: import('../GObject').InterfaceInitFunc;
}

