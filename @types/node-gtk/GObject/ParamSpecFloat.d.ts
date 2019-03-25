/**
  * A GObject.ParamSpec derived structure that contains the meta data for float properties. 
  */
export declare class ParamSpecFloat extends import('../GObject').ParamSpec{
/**
  * default value for the property specified 
  */
defaultValue: number;
/**
  * values closer than epsilon will be considered identical by GObject.param_values_cmp(); the default value is 1e-30. 
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

