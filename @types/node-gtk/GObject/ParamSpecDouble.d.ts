/**
  * A GObject.ParamSpec derived structure that contains the meta data for double properties. 
  */
export declare class ParamSpecDouble extends import('../GObject').ParamSpec{
/**
  * default value for the property specified 
  */
defaultValue: number;
/**
  * values closer than epsilon will be considered identical by GObject.param_values_cmp(); the default value is 1e-90. 
  */
epsilon: number;
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

