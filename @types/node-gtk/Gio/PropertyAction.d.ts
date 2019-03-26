import * as GObject from '../GObject';
import * as Gio from '../Gio';
export declare interface PropertyAction extends GObject.Object, Gio.Action { }

/**
  * A Gio.PropertyAction is a way to get a Gio.Action with a state value
reflecting and controlling the value of a GObject.Object property. 
  */
export declare class PropertyAction {
  /**
    * Creates a Gio.Action corresponding to the value of property property_name on object.
    * @param name the name of the action to create
    * @param object the object that has the property to wrap
    * @param propertyName the name of the property
    * @returns a new Gio.PropertyAction 
    */
  static new(name: string, object: import('../GObject').Object, propertyName: string): import('../Gio').PropertyAction;
  /**
    * Whether to invert the value of a boolean property 
    */
  invertBoolean: boolean;
  /**
    * The object with the property to wrap 
    */
  object: import('../GObject').Object;
  /**
    * The name of the property to wrap 
    */
  propertyName: string;
}

