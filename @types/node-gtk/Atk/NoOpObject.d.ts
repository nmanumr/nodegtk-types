import * as Atk from '../Atk';
export declare interface NoOpObject extends Atk.Object, Atk.Action, Atk.Component, Atk.Document, Atk.EditableText, Atk.Hypertext, Atk.Image, Atk.Selection, Atk.Table, Atk.TableCell, Atk.Text, Atk.Value, Atk.Window { }

/**
  * An Atk.NoOpObject is an Atk.Object which purports to implement all
ATK interfaces. It is the type of Atk.Object which is created if an
accessible object is requested for an object type for which no
factory type is specified. 
  */
export declare class NoOpObject {
  /**
    * Provides a default (non-functioning stub) Atk.Object. Application maintainers should not use this method.
    * @param obj a GObject.Object
    * @returns a default (non-functioning stub) Atk.Object 
    */
  static new(obj: import('../GObject').Object): import('../Atk').Object;
  ;
}