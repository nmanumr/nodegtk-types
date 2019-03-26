import * as GObject from '../GObject';
export declare interface TypeModule extends GObject.Object, GObject.TypePlugin { }

/**
  * GObject.TypeModule provides a simple implementation of the GObject.TypePlugin
interface. The model of GObject.TypeModule is a dynamically loaded module
which implements some number of types and interface implementations.
When the module is loaded, it registers its types and interfaces
using GObject.TypeModule.register_type() and GObject.TypeModule.add_interface().
As long as any instances of these types and interface implementations
are in use, the module is kept loaded. When the types and interfaces
are gone, the module may be unloaded. If the types and interfaces
become used again, the module will be reloaded. Note that the last
unref cannot happen in module code, since that would lead to the
caller’s code being unloaded before GObject.Object.unref() returns to it. 
  */
export declare abstract class TypeModule {
  /**
    * Registers an additional interface for a type, whose interface lives in the given type plugin. If the interface was already registered for the type in this plugin, nothing will be done.
    * @param instanceType type to which to add the interface.
    * @param interfaceType interface type to add
    * @param interfaceInfo type information structure 
    */
  addInterface(instanceType: import('../GObject').GType, interfaceType: import('../GObject').GType, interfaceInfo: import('../GObject').InterfaceInfo): void;
  /**
    * Looks up or registers an enumeration that is implemented with a particular type plugin. If a type with name type_name was previously registered, the GObject.GType identifier for the type is returned, otherwise the type is newly registered, and the resulting GObject.GType identifier returned.
    * @param name name for the type
    * @param constStaticValues an array of GObject.EnumValue structs for the possible enumeration values. The array is terminated by a struct with all members being 0.
    * @returns the new or existing type ID 
    */
  registerEnum(name: string, constStaticValues: import('../GObject').EnumValue): import('../GObject').GType;
  /**
    * Looks up or registers a flags type that is implemented with a particular type plugin. If a type with name type_name was previously registered, the GObject.GType identifier for the type is returned, otherwise the type is newly registered, and the resulting GObject.GType identifier returned.
    * @param name name for the type
    * @param constStaticValues an array of GObject.FlagsValue structs for the possible flags values. The array is terminated by a struct with all members being 0.
    * @returns the new or existing type ID 
    */
  registerFlags(name: string, constStaticValues: import('../GObject').FlagsValue): import('../GObject').GType;
  /**
    * Looks up or registers a type that is implemented with a particular type plugin. If a type with name type_name was previously registered, the GObject.GType identifier for the type is returned, otherwise the type is newly registered, and the resulting GObject.GType identifier returned.
    * @param parentType the type for the parent class
    * @param typeName name for the type
    * @param typeInfo type information structure
    * @param flags flags field providing details about the type
    * @returns the new or existing type ID 
    */
  registerType(parentType: import('../GObject').GType, typeName: string, typeInfo: import('../GObject').TypeInfo, flags: import('../GObject').TypeFlags): import('../GObject').GType;
  /**
    * Sets the name for a GObject.TypeModule
    * @param name a human-readable name to use in error messages. 
    */
  setName(name: string): void;
  /**
    * Decreases the use count of a GObject.TypeModule by one. If the result is zero, the module will be unloaded. (However, the GObject.TypeModule will not be freed, and types associated with the GObject.TypeModule are not unregistered. Once a GObject.TypeModule is initialized, it must exist forever.) 
    */
  unuse(): void;
  /**
    * Increases the use count of a GObject.TypeModule by one. If the use count was zero before, the plugin will be loaded. If loading the plugin fails, the use count is reset to its prior value.
    * @returns False if the plugin needed to be loaded and loading the plugin failed. 
    */
  use(): boolean;
}

