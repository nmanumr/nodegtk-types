/**
  * A GObject.ParamSpec derived structure that contains the meta data for enum
properties. 
  */
export declare class ParamSpecEnum extends import('../GObject').ParamSpec{
/**
  * default value for the property specified 
  */
defaultValue: number;
/**
  * the GObject.EnumClass for the enum 
  */
enumClass: import('../GObject').EnumClass;
/**
  * private GObject.ParamSpec portion 
  */
parentInstance: import('../GObject').ParamSpec;
}

