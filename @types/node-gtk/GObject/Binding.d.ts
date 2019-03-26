import * as GObject from '../GObject';
export declare interface Binding extends GObject.Object { }

/**
  * GObject.Binding is the representation of a binding between a property on a
GObject.Object instance (or source) and another property on another GObject.Object
instance (or target). Whenever the source property changes, the same
value is applied to the target property; for instance, the following
binding: 
  */
export declare class Binding {
  /**
    * Retrieves the flags passed when constructing the GObject.Binding.
    * @returns the GObject.BindingFlags used by the GObject.Binding 
    */
  getFlags(): import('../GObject').BindingFlags;
  /**
    * Retrieves the GObject.Object instance used as the source of the binding.
    * @returns the source GObject.Object 
    */
  getSource(): import('../GObject').Object;
  /**
    * Retrieves the name of the property of GObject.Binding :source used as the source of the binding.
    * @returns the name of the source property 
    */
  getSourceProperty(): string;
  /**
    * Retrieves the GObject.Object instance used as the target of the binding.
    * @returns the target GObject.Object 
    */
  getTarget(): import('../GObject').Object;
  /**
    * Retrieves the name of the property of GObject.Binding :target used as the target of the binding.
    * @returns the name of the target property 
    */
  getTargetProperty(): string;
  /**
    * Explicitly releases the binding between the source and the target property expressed by self. 
    */
  unbind(): void;
  /**
    * The binding flags 
    */
  flags: import('../GObject').BindingFlags;
  /**
    * The source of the binding 
    */
  source: import('../GObject').Object;
  /**
    * The property on the source to bind 
    */
  sourceProperty: string;
  /**
    * The target of the binding 
    */
  target: import('../GObject').Object;
  /**
    * The property on the target to bind 
    */
  targetProperty: string;
}

