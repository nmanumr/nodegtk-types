import * as GObject from '../GObject';
export declare interface ObjectFactory extends GObject.Object { }

/**
  * This class is the base object class for a factory used to create an
accessible object for a specific GObject.GType. The function
Atk.Registry.set_factory_type() is normally called to store in the
registry the factory type to be used to create an accessible of a
particular GObject.GType. 
  */
export declare class ObjectFactory {
  /**
    * Provides an Atk.Object that implements an accessibility interface on behalf of obj
    * @param obj a GObject.Object
    * @returns an Atk.Object that implements an accessibility interface on behalf of obj 
    */
  createAccessible(obj: import('../GObject').Object): import('../Atk').Object;
  /**
    * Gets the GObject.GType of the accessible which is created by the factory.
    * @returns the type of the accessible which is created by the self. The value GObject.TYPE_INVALID is returned if no type if found. 
    */
  getAccessibleType(): import('../GObject').GType;
  /**
    * Inform self that it is no longer being used to create accessibles. When called, self may need to inform Atk.Objects which it has created that they need to be re-instantiated. Note: primarily used for runtime replacement of Atk.ObjectFactorys in object registries. 
    */
  invalidate(): void;
}

