/**
  * The Pango.AttrShape structure is used to represent attributes which
impose shape restrictions. 
  */
export declare class AttrShape {
/**
  * the common portion of the attribute 
  */
attr: import('../Pango').Attribute;
/**
  * copy function for the user data 
  */
copyFunc: import('../Pango').AttrDataCopyFunc;
/**
  * user data set (see pango_attr_shape_new_with_data()) 
  */
data: Object;
/**
  * destroy function for the user data 
  */
destroyFunc: import('../GLib').DestroyNotify;
/**
  * the ink rectangle to restrict to 
  */
inkRect: import('../Pango').Rectangle;
/**
  * the logical rectangle to restrict to 
  */
logicalRect: import('../Pango').Rectangle;
}

