import * as GObject from '../GObject';
export declare interface TypePlugin extends GObject.GInterface { }

/**
  * The GObject.Object type system supports dynamic loading of types.
The GObject.TypePlugin interface is used to handle the lifecycle
of dynamically loaded types. It goes as follows: 
  */
export declare interface TypePlugin {
  /**
    * Calls the complete_interface_info function from the GObject.TypePluginClass of self. There should be no need to use this function outside of the GObject.Object type system itself.
    * @param instanceType the GObject.GType of an instantiable type to which the interface is added
    * @param interfaceType the GObject.GType of the interface whose info is completed
    * @param info the GObject.InterfaceInfo to fill in 
    */
  completeInterfaceInfo(instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType, info: import('../GObject').InterfaceInfo): void;
  /**
    * Calls the complete_type_info function from the GObject.TypePluginClass of self. There should be no need to use this function outside of the GObject.Object type system itself.
    * @param gType the GObject.GType whose info is completed
    * @param info the GObject.TypeInfo struct to fill in
    * @param valueTable the GObject.TypeValueTable to fill in 
    */
  completeTypeInfo(gType: import('../GObject').GType, info: import('../GObject').TypeInfo, valueTable: import('../GObject').TypeValueTable): void;
  /**
    * Calls the unuse_plugin function from the GObject.TypePluginClass of self.  There should be no need to use this function outside of the GObject.Object type system itself. 
    */
  unuse(): void;
  /**
    * Calls the use_plugin function from the GObject.TypePluginClass of self.  There should be no need to use this function outside of the GObject.Object type system itself. 
    */
  use(): void;
}

