/**
  * A GObject.ParamSpec derived structure that contains the meta data for GObject.ValueArray properties. 
  */
export declare class ParamSpecValueArray extends import('../GObject').ParamSpec{
/**
  * a GObject.ParamSpec describing the elements contained in arrays of this property, may be None 
  */
elementSpec: import('../GObject').ParamSpec;
/**
  * if greater than 0, arrays of this property will always have this many elements 
  */
fixedNElements: number;
/**
  * private GObject.ParamSpec portion 
  */
parentInstance: import('../GObject').ParamSpec;
}

