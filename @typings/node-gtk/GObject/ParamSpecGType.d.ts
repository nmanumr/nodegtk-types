/**
  * A GObject.ParamSpec derived structure that contains the meta data for GObject.GType properties. 
  */
export declare class ParamSpecGType extends import('../GObject').ParamSpec{
/**
  * a GObject.GType whose subtypes can occur as values 
  */
isAType: import('../GObject').GType;
/**
  * private GObject.ParamSpec portion 
  */
parentInstance: import('../GObject').ParamSpec;
}

