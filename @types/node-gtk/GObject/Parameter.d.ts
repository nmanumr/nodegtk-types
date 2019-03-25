/**
  * The GObject.Parameter struct is an auxiliary structure used
to hand parameter name/value pairs to GObject.Object.newv(). 
  */
export declare class Parameter {
/**
  * the parameter name 
  */
name: string;
/**
  * the parameter value 
  */
value: import('../GObject').Value;
}

