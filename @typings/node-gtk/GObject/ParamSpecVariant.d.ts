/**
  * A GObject.ParamSpec derived structure that contains the meta data for GLib.Variant properties. 
  */
export declare class ParamSpecVariant extends import('../GObject').ParamSpec{
/**
  * a GLib.Variant, or None 
  */
defaultValue: import('../GLib').Variant;
/**
  *   
  */
padding: Object;
/**
  * private GObject.ParamSpec portion 
  */
parentInstance: import('../GObject').ParamSpec;
/**
  * a GLib.VariantType, or None 
  */
type: import('../GLib').VariantType;
}

