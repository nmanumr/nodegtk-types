/**
  * The Pango.AttrClass structure stores the type and operations for
a particular type of attribute. The functions in this structure should
not be called directly. Instead, one should use the wrapper functions
provided for Pango.Attribute. 
  */
export declare class AttrClass {
/**
  *   
  */
copy: Object;
/**
  *   
  */
destroy: Object;
/**
  *   
  */
equal: Object;
/**
  * the type ID for this attribute 
  */
type: import('../Pango').AttrType;
}

