/**
  * The GObject.ObjectConstructParam struct is an auxiliary
structure used to hand GObject.ParamSpec/GObject.Value pairs to the constructor of
a GObject.ObjectClass. 
  */
export declare class ObjectConstructParam {
/**
  * the GObject.ParamSpec of the construct parameter 
  */
pspec: import('../GObject').ParamSpec;
/**
  * the value to set the parameter to 
  */
value: import('../GObject').Value;
}

