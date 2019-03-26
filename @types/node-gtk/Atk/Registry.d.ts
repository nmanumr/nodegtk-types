import * as GObject from '../GObject';
export declare interface Registry extends GObject.Object { }

/**
  * The Atk.Registry is normally used to create appropriate ATK “peers”
for user interface components.  Application developers usually need
only interact with the Atk.Registry by associating appropriate ATK
implementation classes with GObject.Object classes via the
Atk.Registry.set_factory_type call, passing the appropriate GObject.GType
for application custom widget classes. 
  */
export declare class Registry {
  /**
    * Gets an Atk.ObjectFactory appropriate for creating Atk.Objects appropriate for type.
    * @param type a GObject.GType with which to look up the associated Atk.ObjectFactory
    * @returns an Atk.ObjectFactory appropriate for creating Atk.Objects appropriate for type. 
    */
  getFactory(type: import('../GObject').GType): import('../Atk').ObjectFactory;
  /**
    * Provides a GObject.GType indicating the Atk.ObjectFactory subclass associated with type.
    * @param type a GObject.GType with which to look up the associated Atk.ObjectFactory subclass
    * @returns a GObject.GType associated with type type 
    */
  getFactoryType(type: import('../GObject').GType): import('../GObject').GType;
  /**
    * Associate an Atk.ObjectFactory subclass with a GObject.GType. Note: The associated factory_type will thereafter be responsible for the creation of new Atk.Object implementations for instances appropriate for type.
    * @param type an Atk.Object type
    * @param factoryType an Atk.ObjectFactory type to associate with type.  Must implement Atk.Object appropriate for type. 
    */
  setFactoryType(type: import('../GObject').GType, factoryType: import('../GObject').GType): void;
}

