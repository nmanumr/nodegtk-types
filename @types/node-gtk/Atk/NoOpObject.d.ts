/**
  * An Atk.NoOpObject is an Atk.Object which purports to implement all
ATK interfaces. It is the type of Atk.Object which is created if an
accessible object is requested for an object type for which no
factory type is specified. 
  */
export declare class NoOpObject extends import('../Atk').Object, import('../Atk').Action, import('../Atk').Component, import('../Atk').Document, import('../Atk').EditableText, import('../Atk').Hypertext, import('../Atk').Image, import('../Atk').Selection, import('../Atk').Table, import('../Atk').TableCell, import('../Atk').Text, import('../Atk').Value, import('../Atk').Window{
/**
  * Provides a default (non-functioning stub) Atk.Object. Application maintainers should not use this method.
  * @param obj a GObject.Object
  * @returns a default (non-functioning stub) Atk.Object 
  */
static new(obj: import('../GObject').Object): import('../Atk').Object;
;
/**
  *   
  */
parent: import('../Atk').Object;
}

