/**
  * A GObject.ParamSpec derived structure that contains the meta data for unsigned integer properties. 
  */
export declare class ParamSpecUInt extends import('../GObject').ParamSpec{
/**
  * default value for the property specified 
  */
defaultValue: number;
/**
  * maximum value for the property specified 
  */
maximum: number;
/**
  * minimum value for the property specified 
  */
minimum: number;
/**
  * private GObject.ParamSpec portion 
  */
parentInstance: import('../GObject').ParamSpec;
}
