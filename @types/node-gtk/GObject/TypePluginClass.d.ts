/**
  * The GObject.TypePlugin interface is used by the type system in order to handle
the lifecycle of dynamically loaded types. 
  */
export declare class TypePluginClass {
/**
  *   
  */
baseIface: import('../GObject').TypeInterface;
/**
  * Fills in missing parts of the GObject.InterfaceInfo for the interface. The structs is initialized with memset(s, 0, sizeof (s)) before calling this function. 
  */
completeInterfaceInfo: import('../GObject').TypePluginCompleteInterfaceInfo;
/**
  * Fills in the GObject.TypeInfo and GObject.TypeValueTable structs for the type. The structs are initialized with memset(s, 0, sizeof (s)) before calling this function. 
  */
completeTypeInfo: import('../GObject').TypePluginCompleteTypeInfo;
/**
  * Decreases the use count of the plugin. 
  */
unusePlugin: import('../GObject').TypePluginUnuse;
/**
  * Increases the use count of the plugin. 
  */
usePlugin: import('../GObject').TypePluginUse;
}

